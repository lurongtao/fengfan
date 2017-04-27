<?php
namespace app\common\controller;
use think\Controller;
use think\Response;

class FengfanController extends Controller {
	protected function corsjson($data) {
		// response()->header("Access-Control-Allow-Origin", "*");
		$header = ["Access-Control-Allow-Origin" => "*"];
		return Response::create($data, "json", 200, $header);
	}
	
	protected function requiredCheck($checkFilds) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		foreach ($checkFilds as $key => $value) {
			if(empty($value)) {
				$result["errcode"] = -1;
				$result["errmsg"] = $key . "不能为空";
				return $result;
			}
		}

		return false;
	}
}
