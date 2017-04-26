<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\User;

class Users extends FengfanController {
    public function add($username="", $password="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 用户名校验
		if(empty($username)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户名不能为空";
			return json($result);
		}
		// 密码校验
		if(empty($password)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "密码不能为空";
			return json($result);
		}

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据存取成功' // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }
}
