<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\Question;
use app\api\model\Answer;

class QandA extends FengfanController {
    public function add($tag="", $title="", $content="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		$uid = $this->uid();

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"问题分类" => $tag,
			"标题" => $title,
			"内容" => $content,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$question = new Question;

		$rst = $question->where([
			"title" => $title,
			"content" => $content,
		])->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "这个问题已经提问过了，请查询一下看看。";
			return $this->corsjson($result);
		}

		// 保存到数据库
		$question->data([
			"uid" => $uid,
			"tag" => $tag,
			"title" => $title,
			"content" => $content,
		]);
		$rst = $question->save();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "数据提交失败";
			return $this->corsjson($result);
		}

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据提交成功' // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function questionList($condition="", $start=0, $count=10) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"记录开始值" => $start,
			"返回记录条数" => $count,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$result["data"]	= $this->search($condition, $start, $count);
		return $this->corsjson($result);
    }

    public function search($condition="", $start=0, $count=10) {
		$question = new Question;
		$total = $question->where('title','like','%'. $condition .'%')->count();
		$subjects = [];

		if($total) {
			$subjects = Db::query("
				select a.id,
				        a.title,
				        a.tag,
				        ifnull(c.username, '') as author,   	        
				        a.create_date as createDate,
				        a.hits, 
				        ifnull(b.answers,0) as answers 
				from qa_question as a left join (
					select qid, count(1) as answers from qa_answer
					group by qid
				) as b
				on a.id = b.qid
				left join users as c
				on a.uid = c.id
				where 
				a.title like ? order by a.create_date desc
				limit ?, ?", ["%". $condition ."%", $start, $count]);
		}

		return [ // 数据内容
			"start" => $start, //记录开始值 [数值：必填]
			"count" => $count, //返回记录条数 [数值：必填]
			"total" => $total, //总记录条数 [数值：必填]
			"subjects" => $subjects
		];
    }


    public function detail($id="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"问答id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$question = new Question;

		// 添加用户浏览记录
		$this->addViewHistory($uid, "问答", $id);

		// 取得数据
		$data = Db::table("qa_question")->query("SELECT 
				    a.id,
				    a.title,
				    a.content,
				    a.hits,
				    b.username AS author,
				    a.create_date AS createDate
				FROM
				    qa_question AS a
				        LEFT JOIN
				    users AS b ON a.uid = b.id
				WHERE
				    a.id = ?", 
			[$id]);

		if(!empty($data) && sizeof($data) > 0) {
			// 更新点击数
			$question->save([
			    'hits'  => $data[0]["hits"] + 1
			],['id' => $id]);

			$result["data"]	= $data[0];
			// 答案
			$answers = Db::table("qa_answer")->query("SELECT 
					    a.id,
					    a.content,
					    b.username AS author,
					    a.create_date AS createDate,
					    a.bestAnswer
					FROM
					    qa_answer AS a
					        LEFT JOIN
					    users AS b ON a.uid = b.id
					WHERE
					    a.qid = ? order by a.create_date", 
				[$id]);
			$result["data"]["answers"] = $answers;
		}

		return $this->corsjson($result);
    }


    public function setbest($qid="", $aid="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"问题id" => $qid,
			"回答id" => $aid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$answer = new Answer;
		// 所有都清零
		$answer->save([
		    'bestAnswer'  => 0
		],['qid' => $qid]);

		// 设置最佳答案
		$rst = $answer->save([
		    'bestAnswer'  => 1
		],['id' => $aid]);

		if($rst) {
			$result["data"]	= [ // 数据内容
				"status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
	    		"msg" => "数据提交成功" // 附加信息：[字符串：选填]
			];
		} else {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "数据保存失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }

    public function reply($qid="", $content="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"问题id" => $qid,
			"回帖内容" => $content
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$answer = new Answer;

		$rst = $answer->where([
		    'uid'  =>  $uid,
		    'qid'  =>  $qid,
		    'content'  =>  $content,
		])->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "您已经回过这个帖子了。";
			return $this->corsjson($result);
		}

		// 保存回帖信息
		$answer->data([
		    'uid'  =>  $uid,
		    'qid'  =>  $qid,
		    'content'  =>  $content,
		]);
		$rst = $answer->save();

		if($rst) {
			$result["data"]	= [ // 数据内容
				"status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
	    		"msg" => "数据提交成功" // 附加信息：[字符串：选填]
			];
		} else {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "数据保存失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }

    public function favorite($id="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"问题id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		// 添加用户浏览记录
		$rst= $this->addFavorite($uid, "问答", $id);

		if($rst == "您已经收藏过了。") {
			$result["data"] = [ // 数据内容
			    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
			    "msg" => "您已经收藏过了。" // 附加信息：[字符串：选填]
			];
		} else if($rst) {
			$result["data"] = [ // 数据内容
			    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
			    "msg" => "收藏成功" // 附加信息：[字符串：选填]
			];
		} else {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "收藏失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }
}
