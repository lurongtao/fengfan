<?php
namespace app\api\controller;
use think\Db;
use think\Session;
use app\common\controller\FengfanController;
use app\api\model\User;
use app\common\exception\TimeoutException;

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

    public function remove($uid="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户ID" => $uid,
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$rst = User::destroy(['id' => $uid]);

		if($rst) {
			$result["data"]	= [ // 数据内容
			    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
			    "msg" => "数据删除成功" // 附加信息：[字符串：选填]
			];
		} else {
			$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "数据不存在或者已经被删除", // 错误信息：[字符串：默认为空]
			];
		}


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
		    "username" => $rst["username"], // 用户名：[字符串：必填] "zhangsan" 成功 "失败"                 
		    "auth" => [], // 权限信息 `待完善`
		    "msg" => "用户登录成功" // 附加信息：[字符串：选填]
		];

		// session_start();
		Session::set('username',$rst["username"]);
		Session::set('uid',$rst["id"]);
		Session::set('roles',$rst["roles"]);

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

		$token = $this->makeToken($username);

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

    // 生成token
    protected function makeToken($username) {
		// 删除所有的过期token
		Db::execute('DELETE FROM reset_psw_token WHERE username=?', [$username]);

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

		return $token;
    }

    protected function sendEmail($username, $email, $token) {
    	$config = config("THINK_EMAIL");
	    require './thinkphp/library/Org/Nx/class.phpmailer.php';
	    require './thinkphp/library/Org/Nx/class.smtp.php';
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
	    		$this->assign('resetUrl',"");
	    		$this->assign('username',"");
	    		$this->assign('token',"");
    		} else {
    			$this->assign('username',$data[0]["username"]);
    			$this->assign('token',$token);
		    	$resetUrl = request()->url(true);
		    	$resetUrl = preg_replace("/users\/reset.*/is", "api/users/resetpwd/", $resetUrl);
		    	$this->assign('resetUrl',$resetUrl);
    		}
    	} else {
    		$this->assign('errorMsg','您的链接已过期，请重新找回密码。');
    		$this->assign('resetUrl',"");
    		$this->assign('username',"");
    		$this->assign('token',"");
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

    public function hassignin() {
		$result	= [
		  "errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
		  "errmsg"=> "", // 错误信息：[字符串：默认为空]
		];
		// 没有登录的场合
		if(empty(Session::get('username'))) {
			$result	= [
			  "errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			  "errmsg"=> "您没有登录或登录超时，请重新登录。", // 错误信息：[字符串：默认为空]
			];
			$result["data"] = [ // 数据内容
				"status"=> "not", // 登录状态：[字符串：必填] "has" 有session已登录 "not" 无session未登录
			];
			return $this->corsjson($result);
		}

		$result["data"] = [ // 数据内容
			"username"=> Session::get('username'), //用户名 [字符串：必填]
			"roles"=> Session::get('roles'), // 用户角色[字符串：必填]
			"status"=> "has", // 登录状态：[字符串：必填] "has" 有session已登录 "not" 无session未登录
			"msg"=> "用户已经登陆" // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function signout() {
		$result	= [
		  "errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
		  "errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		Session::clear();

		$result["data"] = [ // 数据内容
		    "status"=>"ok", // 是否成功退出：[字符串：必填] "ok" 成功 "fail" 失败
		    "msg"=> "已退出登录，请重新登录" // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function favorite() {
		$result	= [
		  "errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
		  "errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		$uid = Session::get("uid");
		if(empty($uid)) {
			throw new TimeoutException();
		}

		$data = Db::query("SELECT 
			    *
			FROM
			    (SELECT 
			        b.id, b.title, a.type, b.createDate
			    FROM
			        favorite AS a, videos AS b
			    WHERE
			        a.uid = ? AND a.type='视频' AND a.favorite_id = b.id 
				UNION ALL SELECT 
			        b.id, b.title, a.type, b.create_date AS createDate
			    FROM
			        favorite AS a, qa_question AS b
			    WHERE
			        a.uid = ? AND a.type='问答' AND a.favorite_id = b.id 
			    UNION ALL 
			    SELECT 
			        b.id, b.title, a.type, b.create_date AS createDate
			    FROM
			        favorite AS a, interview_question AS b
			    WHERE
			        a.uid = ? AND a.type='面试题' AND a.favorite_id = b.id 
			    UNION ALL 
			    SELECT 
			        b.id, b.title, a.type, b.create_date AS createDate
			    FROM
			        favorite AS a, job AS b
			    WHERE
			        a.uid = ? AND a.type='招聘' AND a.favorite_id = b.id) AS main
			ORDER BY createDate DESC", [$uid, $uid, $uid, $uid]);

		$result["data"] = [ // 数据内容
			"total"=> sizeof($data), //总记录条数 [数值：必填]
		    "subjects" => $data
		];

		return $this->corsjson($result);
    }

    public function getresettoken() {
    	// 检查用户是否登录
		$uid = Session::get("uid");
		if(empty($uid)) {
			throw new TimeoutException();
		}

		$username = Session::get("username");

		$user = new User;
		$rst = $user->where('username', $username)->find();
		if(empty($rst)) {
			$result["errcode"] = -1;
			$result["errmsg"] = "用户不存在。";
			return $this->corsjson($result);
		}

		$token = $this->makeToken($username);

		$result	= [
		  "errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
		  "errmsg"=> "", // 错误信息：[字符串：默认为空]
		];
		$result["data"]	= [ // 数据内容
		    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
		    "token" => $token // 附加信息：[字符串：选填]
		];

		return $this->corsjson($result);
    }

    public function userList($condition="", $start="", $count="") {
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

		$user = new User;
		$total = $user->where('username','like','%'. $condition .'%')->count();
		$subjects = [];

		if($total) {
			$subjects = Db::query("
				select a.id as uid, a.username, a.create_date as createDate
				from users as a
				where 
				a.username like ? order by a.create_date desc
				limit ?, ?", ["%". $condition ."%", $start, $count]);
		}

		$result["data"]	= [ // 数据内容
			"start" => $start, //记录开始值 [数值：必填]
			"count" => $count, //返回记录条数 [数值：必填]
			"total" => $total, //总记录条数 [数值：必填]
			"subjects" => $subjects
		];

		return $this->corsjson($result);
    }
}
