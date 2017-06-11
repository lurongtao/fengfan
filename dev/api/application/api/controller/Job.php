<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\JobM;
use app\api\model\JobAnswer;

class Job extends FengfanController {
    public function add($city="", $tag="", $title="", $content="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"城市" => $city,
			"标签" => $tag,
			"标题" => $title,
			"内容" => $content,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$job = new JobM;

		$rst = $job->where([
			"title" => $title,
			"city" => $city,
			"tag" => $tag,
			"content" => $content,
		])->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "这个职位已经有了，请查询一下看看。";
			return $this->corsjson($result);
		}

		// 保存到数据库
		$job->data([
			"uid" => $uid,
			"title" => $title,
			"city" => $city,
			"tag" => $tag,
			"content" => $content,
		]);
		$rst = $job->save();
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

   public function update($id="", $city="", $tag="", $title="", $content="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"招聘id" => $id,
			"城市" => $city,
			"标签" => $tag,
			"标题" => $title,
			"内容" => $content,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$job = new JobM;

		// 保存到数据库
		$cnt = Db::table("job")->execute("UPDATE `job`
			SET
			`city` = ?,
			`tag` = ?,
			`title` = ?,
			`content` = ?
			WHERE `id` = ?", 
			[$city, $tag, $title, $content, $id]);

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据修改成功' // 附加信息：[字符串：选填]
		];

		if(!$cnt) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "DB修改失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }

    public function remove($id="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"招聘id" => $id
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$jobM = new JobM;
		$cnt = $jobM->where('id', $id)->delete();

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据删除成功' // 附加信息：[字符串：选填]
		];

		if(!$cnt) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "DB删除失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }

    public function jobList($condition="", $start="", $count="") {
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

    public function search($condition="", $start="", $count="") {
		$job = new JobM;
		$total = $job->where('title','like','%'. $condition .'%')->where('close_flag',0)->count();
		$subjects = [];

		if($total) {
			$subjects = Db::query("
				select a.id,
				        a.title,
				        a.tag,
				        a.city,
				        ifnull(c.username, '') as author,   	        
				        a.create_date as createDate,
				        a.hits, 
				        ifnull(b.answers,0) as answers 
				from job as a left join (
					select jid, count(1) as answers from job_answer
					group by jid
				) as b
				on a.id = b.jid
				left join users as c
				on a.uid = c.id
				where 
				a.title like ? 
				and a.close_flag = 0
				order by a.create_date desc
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
			"职位id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$job = new JobM;

		// 添加用户浏览记录
		$this->addViewHistory($uid, "招聘", $id);

		// 取得数据
		$data = Db::table("job")->query("SELECT 
				    a.id,
				    a.title,
				    a.tag,
				    a.content,
				    a.city,
				    a.hits,
				    b.username AS author,
				    a.create_date AS createDate,
				    a.close_flag
				FROM
				    job AS a
				        LEFT JOIN
				    users AS b ON a.uid = b.id
				WHERE
				    a.id = ?", 
			[$id]);

		if(!empty($data) && sizeof($data) > 0) {
			if($data[0]["close_flag"] == 1) {
		    	$result =  [
		    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
					"errmsg"=> "该职位已经关闭", // 错误信息：[字符串：默认为空]
				];
				return $this->corsjson($result);
			}

			// 更新点击数
			$job->save([
			    'hits'  => $data[0]["hits"] + 1
			],['id' => $id]);

			$result["data"]	= $data[0];
			// 答案
			$answers = Db::table("job_answer")->query("SELECT 
					    a.id,
					    a.content,
					    b.username AS author,
					    a.create_date AS createDate,
					    a.bestAnswer
					FROM
					    job_answer AS a
					        LEFT JOIN
					    users AS b ON a.uid = b.id
					WHERE
					    a.jid = ? order by a.create_date", 
				[$id]);
			$result["data"]["answers"] = $answers;
		}

		return $this->corsjson($result);
    }


    public function setstatus($jid="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"职位id" => $jid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$job = new JobM;

		// 设置关闭状态
		$rst = $job->save([
		    'close_flag'  => 1
		],['id' => $jid]);

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

    public function reply($id="", $content="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"职位id" => $id,
			"回帖内容" => $content
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$answer = new JobAnswer;

		$rst = $answer->where([
		    'uid'  =>  $uid,
		    'jid'  =>  $id,
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
		    'jid'  =>  $id,
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
			"职位id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		// 添加用户浏览记录
		$rst= $this->addFavorite($uid, "招聘", $id);

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
