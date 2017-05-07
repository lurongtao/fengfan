<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\Question;

class QandA extends FengfanController {
    public function add($uid="", $tag="", $title="", $content="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

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

    public function questionList($condition="", $start="", $count="") {
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

		$rst = Db::query("
			select a.id,
			        a.title,
			        a.tag,
			        c.username as author,   	        
			        a.create_date as createDate,
			        hits, ifnull(b.answers,0) as answers 
			from qa_question as a left join (
				select qid, count(1) as answers from qa_answer
				group by qid
			) as b
			on a.id = b.qid,
			users as c
			where 
			a.title like ?
			and a.uid = c.id", ["%". $condition ."%"]);

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据提交成功' // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }
}
