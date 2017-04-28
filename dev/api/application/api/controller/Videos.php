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
			"分类" => $category,
			"阶段" => $category["step"],
			"关键字分类" => $category["tag"]
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;


		// 保存到数据库
		$cnt = Db::table("videos")->execute("INSERT INTO `videos`
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

    public function update($id="", $title="", $url="", $summary="", $category="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"视频id" => $id,
			"标题" => $title,
			"视频地址" => $url,
			"视频简介" => $summary,
			"分类" => $category,
			"阶段" => $category["step"],
			"关键字分类" => $category["tag"]
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;


		// 保存到数据库
		$cnt = Db::table("videos")->execute("UPDATE `videos`
			SET
			`title` = ?,
			`url` = ?,
			`summary` = ?,
			category = COLUMN_ADD(category, 'step', ?, 'tag', ?)
			WHERE `id` = ?", 
			[$title, $url, $summary, $category["step"], $category["tag"], $id]);

		$result["data"]	= [ // 数据内容
				"status"=>'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"msg"=> '数据修改成功' // 附加信息：[字符串：选填]
		];

		if(!$cnt) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "DB修改失败", // 错误信息：[字符串：默认为空]
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
			"视频id" => $id
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;
		$cnt = $video->where('id', $id)->delete();

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

    public function videolist($condition="", $start=0, $count=10) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"记录开始值" => $start,
			"返回记录条数" => $count
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;
		$whereSQL = " where title like'%?%' ";


		$total = 0;
		$subjects = [];
		if(empty($condition)) {
			$total = $video->count();
			// 取得数据
			$subjects = Db::table("videos")->query("select title, COLUMN_JSON(category) as category, createDate from videos limit ?, ?", 
				[$start, $count]);
		} else {
			$total = $video->where('title','like','%'. $condition .'%')->count();
			// 取得数据
			$subjects = Db::table("videos")->query("select title, COLUMN_JSON(category) as category, createDate from videos where title like ? limit ?,?", 
				['%'.$condition.'%', $start, $count]);
		}

		$result["start"] = $start;
		$result["count"] = sizeof($subjects);
		$result["total"] = $total;
		$result["subjects"] = $subjects;

		return $this->corsjson($result);
    }

    public function detail($id="", $uid="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"视频id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;

		// 添加用户浏览记录
		$this->addViewHistory($uid, "视频", $id);

		// 取得数据
		$data = Db::table("videos")->query("select title, COLUMN_JSON(category) as category, createDate from videos where id=?", 
			[$id]);

		if(!empty($data) && sizeof($data) > 0) {
			$data[0]["category"] = json_decode($data[0]["category"]);
			$result["data"]	= $data[0];
		}

		return $this->corsjson($result);
    }

    public function favorite($id="", $uid="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"视频id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;

		// 添加用户浏览记录
		$rst= $this->addFavorite($uid, "视频", $id);

		if($rst == "您已经收藏过了。") {
			$result["data"] = [ // 数据内容
			    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
			    "msg" => "您已经收藏过了。" // 附加信息：[字符串：选填]
			];
		} else if($rst) {
			$result["data"] = [ // 数据内容
			    "status" => "ok", // 存取状态：[字符串：必填] "ok" 成功 "fail" 失败
			    "msg" => "收藏成功" // 附加信息：[字符串：选填]
			];
		} else {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "收藏失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }

    public function qanda($uid="", $id="", $title="", $content="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"视频id" => $id,
			"标题" => $title,
			"详细内容" => $content
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;


		// 保存到数据库
		$qadata = [
			"uid" => $uid, 
			"vid" => $id, 
			"title" => $title, 
			"content" => $content
		];
		$rst = Db::table("video_qanda")->where($qadata)->find();
		// 检查是否已经收藏了
		if(!empty($rst)) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "您已经提问过相同的问题了", // 错误信息：[字符串：默认为空]
			];
			return $this->corsjson($result);
		}

		// 保存数据
		$cnt = Db::table("video_qanda")->insert($qadata);

		$result["data"]	= [ // 数据内容
				"status" => 'ok', // 存取状态：[字符串：必填] 'ok' 成功 'fail' 失败
				"uid" => $uid, // 用户ID [数值：必填]
				"id" => $id, // 视频ID [数值：必填]
				"title" => $title, // 标题 [字符串：必填]
				"content" => $content, // [字符串：必填]
				"createDate" => date("Y/m/d H:i:s")
		];

		if(!$cnt) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "DB保存失败", // 错误信息：[字符串：默认为空]
			];
		}

		return $this->corsjson($result);
    }
}
