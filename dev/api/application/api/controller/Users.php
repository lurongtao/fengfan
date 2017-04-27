<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\User;

class Users extends FengfanController {
    public function add($username="", $password="", $email="") {
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

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "该用户已经存在。";
			return json($result);
		}

		// 保存到数据库
		$user->data([
		    'username'  =>  $username,
		    'password' =>  md5($password),
		    'email'  =>  $email,
		]);
		$user->save();

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据存取成功' // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function signin($username="", $password="") {
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

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户名或者密码错误。";
			return json($result);
		}
		if($rst["password"] != md5($password)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户名或者密码错误。";
			return json($result);
		}

		$result["data"]	= [ // 数据内容
		  	"uid"=> $rst["id"], // 用户ID [数值：必填]
		    "username" => $rst["username"], // 用户名：[字符串：必填] "zhangsan" 成功 ""         失败        
		    "auth" => [], // 权限信息 `待完善`
		    "msg" => "用户登录成功" // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function forgotpwd($username="", $email="") {
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
		// 邮箱校验
		if(empty($email)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "邮箱不能为空";
			return json($result);
		}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户不存在。";
			return json($result);
		}
		if($rst["email"] != $email) {
			$result["errcode"] = -1;
			$result["errmsg"] = "您输入的邮箱不正确或者没有预留邮箱。";
			return json($result);
		}

		// TODO发送邮件

		$result["data"]	= [ // 数据内容
		    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
		    "msg" => "已给您发送邮件，请查收" // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function resetpwd($username="", $newpwd="") {
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
		if(empty($newpwd)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "密码不能为空";
			return json($result);
		}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "该用户不存在。";
			return json($result);
		}

		// 保存到数据库
		$user->save([
		    'password' =>  md5($newpwd)
		],['username'  =>  $username]);

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '密码已修改，请重新登录' // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }
}
