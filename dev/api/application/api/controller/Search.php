<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;

class Search extends FengfanController {
    public function search($q="", $start=0, $count=10) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"搜索关键字" => $q,
			"记录开始值" => $start,
			"返回记录条数" => $count,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$subjects = [];

		$videoController = controller("Videos", "controller");
		$videoData = $videoController->search($q, $start, $count);
		$subjects["video"] = $videoData;

		$qaController = controller("QandA", "controller");
		$qaData = $qaController->search($q, $start, $count);
		$subjects["qanda"] = $qaData;

		$jobController = controller("Job", "controller");
		$jobData = $jobController->search($q, $start, $count);
		$subjects["job"] = $jobData;

		$data = [
			"total" => $videoData["total"] + $qaData["total"] + $jobData["total"],
			"query" => $q,
			"subjects" => $subjects
		];

		$result["data"] = $data;

		return $this->corsjson($result);
    }
}
