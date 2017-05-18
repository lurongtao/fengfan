<?php
namespace app\common\controller;
use think\Controller;
use think\Response;
use think\Db;
use think\Session;
use app\common\exception\TimeoutException;

class FengfanController extends Controller {
    protected $beforeActionList = [
        'userCheck',
    ];

	protected function userCheck() {
		// 不需要做session校验的地址
		$exceptUrl = [
			"api/users/add",
			"api/users/signin",
			"api/users/forgotpwd",
			"api/users/resetpwd",
		];
		$urlpath = request()->path();
		if(!in_array($urlpath, $exceptUrl) && config("session_check")) {
			// 如果session不存在
			if(empty(Session::get('username'))) {
				throw new TimeoutException();
			}
		}
	}

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
			if(!isset($value) || $value == "") {
				$result["errcode"] = -1;
				$result["errmsg"] = $key . "不能为空";
				return $result;
			}
		}

		return false;
	}

	// 添加用户浏览记录信息
	protected function addViewHistory($uid, $type, $visited_id) {
		$data = [
			'uid' => $uid,
			'type' => $type,
			'visited_id' => $visited_id
		];
		Db::table("visit_history")->insert($data);
	}

	// 添加收藏
	protected function addFavorite($uid, $type, $favorite_id) {
		$data = [
			'uid' => $uid,
			'type' => $type,
			'favorite_id' => $favorite_id
		];

		$rst = Db::table("favorite")->where($data)->find();
		// 检查是否已经收藏了
		if(!empty($rst)) {
			return "您已经收藏过了。";
		}

		return Db::table("favorite")->insert($data);
	}

	// 添加收藏
	public function Sessioncheck() {
		echo "session check";
		return false;
	}
}
