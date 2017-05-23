<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\StageM;

class Stage extends FengfanController {
    public function add($stage="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"阶段名" => $stage
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$stageM = new StageM;

		$rst = $stageM->where("title", $stage)->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "这个阶段名已经有了，请查询一下看看。";
			return $this->corsjson($result);
		}

		$stageM->data([
			"title" => $stage
		]);
		$cnt = $stageM->save();

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据提交成功' // 附加信息：[字符串：选填]
		];

		if(!$cnt) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "DB保存失败", // 错误信息：[字符串：默认为空]
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
			"阶段id" => $id
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$stageM = new StageM;
		$cnt = $stageM->where('id', $id)->delete();

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

    public function stageList($start=0, $count=1000) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		$result["data"]	= $this->search($start, $count);

		return $this->corsjson($result);
    }

    public function search($start="", $count="") {
		$stageM = new StageM;

		$total = $stageM->count();
		// 取得数据
		$subjects = Db::query("select id, title, create_date as createDate from stage limit ?, ?", 
			[$start, $count]);

		return [ // 数据内容
			"start" => $start, //记录开始值 [数值：必填]
			"count" => $count, //返回记录条数 [数值：必填]
			"total" => $total, //总记录条数 [数值：必填]
			"subjects" => $subjects
		];
    }
}
