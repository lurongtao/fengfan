<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\Video;

class Videos extends FengfanController {
    public function add($title="", $url="", $summary="", $category="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"标题" => $title,
			"视频地址" => $url,
			"视频简介" => $summary,
			"分类" => $category
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;


		// 保存到数据库
		$cnt = Db::table("videos")->execute("INSERT INTO `fengfan`.`videos`
			(
			`title`,
			`url`,
			`summary`,
			`category`)
			VALUES
			(
			?,
			?,
			?,
			COLUMN_CREATE('step', ?, 'tag', ?))", 
			[$title, $url, $summary, $category["step"], $category["tag"]]);

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

    public function detail($id="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"视频id" => $id
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;


		// 取得数据
		$data = Db::table("videos")->query("select title, COLUMN_JSON(category) as category, createDate from videos where id=?", 
			[$id]);

		if(!empty($data) && sizeof($data) > 0) {
			$data[0]["category"] = json_decode($data[0]["category"]);
			$result["data"]	= $data[0];
		}

		return $this->corsjson($result);
    }
}
