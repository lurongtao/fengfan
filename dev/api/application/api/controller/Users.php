<?php
namespace app\api\controller;
use think\Db;
use think\Session;
use app\common\controller\FengfanController;
use app\api\model\User;

class Users extends FengfanController {
    public function add($username="", $password="", $email="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户名" => $username,
			"密码" => $password,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "该用户已经存在。";
			return $this->corsjson($result);
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

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户名" => $username,
			"密码" => $password,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户名或者密码错误。";
			return $this->corsjson($result);
		}
		if($rst["password"] != md5($password)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户名或者密码错误。";
			return $this->corsjson($result);
		}

		$result["data"]	= [ // 数据内容
		  	"uid"=> $rst["id"], // 用户ID [数值：必填]
		    "username" => $rst["username"], // 用户名：[字符串：必填] "zhangsan" 成功 ""         失败        
		    "auth" => [], // 权限信息 `待完善`
		    "msg" => "用户登录成功" // 附加信息：[字符串：选填]
		];

		// session_start();
		Session::set('username',$rst["username"]);

		return $this->corsjson($result);
    }

    public function forgotpwd($username="", $email="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]

		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户名" => $username,
			"邮箱" => $email,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户不存在。";
			return $this->corsjson($result);
		}
		if($rst["email"] != $email) {
			$result["errcode"] = -1;
			$result["errmsg"] = "您输入的邮箱不正确或者没有预留邮箱。";
			return $this->corsjson($result);
		}

		// 生成认证用token，有效时间30分钟。
		$expire_date = date("y-m-d H:i:s",strtotime("+30 minutes"));
		$token = md5($username . $expire_date);
		Db::execute('INSERT INTO reset_psw_token
			        ( username, token, expire_date)
			VALUES 
			        ( ?,
			        ?,
			        ?)
			    ON DUPLICATE KEY UPDATE
			        username = ?,
			        token = ?,
			        expire_date = ?',
		[$username, $token, $expire_date, $username, $token, $expire_date]);

		// 发送邮件
		$rst = $this->sendEmail($username, $email, $token);
		if(!$rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "邮件发送失败。";
			return $this->corsjson($result);
		}

		$result["data"]	= [ // 数据内容
		    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
		    "msg" => "已给您发送邮件，请查收" // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    protected function sendEmail($username, $email, $token) {
    	$config = config("THINK_EMAIL");
	    require './thinkPHP/library/Org/Nx/class.phpmailer.php';
	    require './thinkPHP/library/Org/Nx/class.smtp.php';
	    $phpmailer=new \Phpmailer();
	    // 设置PHPMailer使用SMTP服务器发送Email
	    $phpmailer->IsSMTP();
	    // 设置为html格式
	    $phpmailer->IsHTML(true);
	    // 设置邮件的字符编码'
	    $phpmailer->CharSet='UTF-8';
	    // 设置SMTP服务器。
	    $phpmailer->Host=$config["email_smtp"];
	    // 端口
	    $phpmailer->Port=$config["email_smtp_port"];
	    // 设置为"需要验证"
	    $phpmailer->SMTPAuth=true;
	    // 设置用户名
	    $phpmailer->Username=$config["email_username"];
	    // 设置密码
	    $phpmailer->Password=$config["email_password"];
	    // 设置邮件头的From字段。
	    $phpmailer->From=$config["email_from_username"];
	    // 设置发件人名字
	    $phpmailer->FromName=$config["email_from_name"];
	    // 添加收件人地址，可以多次使用来添加多个收件人
	    $address = $email;
	    if(is_array($address)){
	        foreach($address as $addressv){
	            $phpmailer->AddAddress($addressv);
	        }
	    }else{
	        $phpmailer->AddAddress($address);
	    }
	    // 设置邮件标题
	    $phpmailer->Subject=$config["email_subject"];
	    // 设置邮件正文
    	$resetUrl = request()->url(true);
    	$resetUrl = preg_replace("/api.*/is", "users/reset/".$token, $resetUrl);
	    $phpmailer->Body=sprintf($config["email_content"], $username, date("Y-m-d H:i"), $resetUrl, $resetUrl);

	    // 发送邮件。
	    if(!$phpmailer->Send()) {
	        $phpmailererror=$phpmailer->ErrorInfo;
	        // return array("error"=>1,"message"=>$phpmailererror);
	        return false;
	    }else{
	        // return array("error"=>0);
	        return true;
	    }
    }

    public function reset($token) {
    	$data = Db::table('reset_psw_token')->where('token', $token)->select();
    	if($data && sizeof($data) > 0) {
    		if(strtotime($data[0]["expire_date"]) - strtotime("now") < 0) {
    			$this->assign('errorMsg','您的链接已过期，请重新找回密码。');
    		} else {
    			$this->assign('username',$data[0]["username"]);
    			$this->assign('token',$token);
		    	$resetUrl = request()->url(true);
		    	$resetUrl = preg_replace("/users\/reset.*/is", "api/users/resetpwd/", $resetUrl);
		    	$this->assign('resetUrl',$resetUrl);
    		}
    	}
    	return $this->fetch('/reset');
    }

    public function resetpwd($username="", $newpwd="", $token="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户名" => $username,
			"密码" => $newpwd,
			"安全认证token" => $token,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

    	$tokenData = Db::table('reset_psw_token')->where('token', $token)->select();
    	if($tokenData && sizeof($tokenData) > 0) {
    		if(strtotime($tokenData[0]["expire_date"]) - strtotime("now") < 0) {
		    	$result =  [
		    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
					"errmsg"=> "您的认证信息已过期，请重新找回密码。", // 错误信息：[字符串：默认为空]
				];
				return $this->corsjson($result);
    		}
    	} else {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "您的认证信息已过期，请重新找回密码。", // 错误信息：[字符串：默认为空]
			];
			return $this->corsjson($result);
    	}

		$user = new User;

		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "该用户不存在。";
			return $this->corsjson($result);
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
