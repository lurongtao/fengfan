<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\Video;
use app\api\model\VideoCategory;

class Videos extends FengfanController {
	protected $toJsonSQL = "concat('{\"step\":\"', b.step ,'\",\"tag\":\"', b.tag, '\",\"hot\":\"', b.hot, '\",\"new\":\"', b.new, '\"}')";
    public function add($title="", $url="", $img="", $summary="", $category="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"标题" => $title,
			"视频地址" => $url,
			"视频缩略图URL" => $img,
			"视频简介" => $summary,
			"分类" => $category,
			"阶段" => $category["step"],
			"关键字分类" => $category["tag"]
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;
		$rst = $video->where([
			"title" => $title,
			"url" => $url,
		])->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "这个视频已经存在了，请查询一下看看。";
			return $this->corsjson($result);
		}

		$video->data([
			"title" => $title,
			"url" => $url,
			"img" => $img,
			"summary" => $summary,
		]);
		$video->save();

		$cnt = Db::table("video_category")->execute("INSERT INTO `video_category`
			(
			`vid`,
			`step`,
			`tag`)
			VALUES
			(
			?,
			?,
			?)", 
			[$video->id, $category["step"], $category["tag"]]);

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

    public function update($id="", $title="", $url="", $img="", $summary="", $category="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"视频id" => $id,
			"标题" => $title,
			"视频地址" => $url,
			"视频缩略图URL" => $img,
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
			`img` = ?,
			`summary` = ?
			WHERE `id` = ?", 
			[$title, $url, $img, $summary, $id]);

		$cnt = Db::table("video_category")->execute("UPDATE `video_category`
			SET
			`step` = ?,
			`tag` = ?
			WHERE `vid` = ?", 
			[$category["step"], $category["tag"], $id]);

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

		$videoCtg = new VideoCategory;
		$cnt = $videoCtg->where('vid', $id)->delete();

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

    public function videolist($condition="", $start="", $count="", $tag="") {
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

		$result["data"]	= $this->search($condition, $start, $count, $tag);

		return $this->corsjson($result);
    }

    public function search($condition="", $start="", $count="", $tag="") {
		$video = new Video;

		$total = 0;
		$subjects = [];
		if(empty($condition)) {
			$total = Db::query("select count(1) as cnt from videos as a, video_category as b where a.id = b.vid and b.tag like ?", 
				['%'.$tag.'%']);
			// 取得数据
			$subjects = Db::query("select a.id, a.title, a.img, a.url, " . $this->toJsonSQL . " as category, a.createDate, a.summary from videos as a, video_category as b where a.id = b.vid and b.tag like ? order by a.createDate desc limit ?, ?", 
				['%'.$tag.'%', $start, $count]);
		} else {
			$total = Db::query("select count(1) as cnt from videos as a, video_category as b where a.title like ? and b.tag like ? and a.id = b.vid", 
				['%'.$condition.'%', '%'.$tag.'%']);
			// 取得数据
			$subjects = Db::query("select a.id, a.title, a.img, a.url, " . $this->toJsonSQL . "  as category, a.createDate, a.summary from videos as a, video_category as b where a.title like ? and b.tag like ? and a.id = b.vid order by a.createDate desc limit ?,?", 
				['%'.$condition.'%', '%'.$tag.'%', $start, $count]);
		}

		// 处理category,category转为对象
		foreach ($subjects as $key=>$st) {
			$subjects[$key]["category"] = json_decode($st["category"]);
			if($tag) {
				$subjects[$key]["tag"] = $tag;
			}
		}

		return [ // 数据内容
			"start" => $start, //记录开始值 [数值：必填]
			"count" => $count, //返回记录条数 [数值：必填]
			"total" => $total[0]["cnt"], //总记录条数 [数值：必填]
			"subjects" => $subjects
		];
    }

    public function detail($id="") {
    	$uid = $this->uid();

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
		$data = Db::table("videos")->query("select a.title, a.img, a.url, " . $this->toJsonSQL . " as category, a.createDate, a.summary from videos as a, video_category as b where a.id=? and a.id=b.vid", 
			[$id]);

		if(!empty($data) && sizeof($data) > 0) {
			// 热度+1
			$cnt = Db::table("video_category")->execute("UPDATE `video_category`
				SET
				`hot` =  `hot` + 1
				WHERE `vid` = ?", 
				[$id]);


			$data[0]["category"] = json_decode($data[0]["category"]);
			$result["data"]	= $data[0];

			$qandA = Db::table("video_qanda")->query("SELECT 
					    a.id,
					    b.username AS author,
					    a.title,
					    a.content,
					    a.create_date
					FROM
					    video_qanda AS a
					        LEFT JOIN
					    users AS b ON a.uid = b.id
					WHERE
					    a.vid = ?
					ORDER BY a.create_date", 
				[$id]);
			$result["data"]["QandA"] = $qandA;
		}

		return $this->corsjson($result);
    }

    public function commonfavorite($type="", $id="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"收藏分类" => $type,
			"视频id" => $id,
			"用户id" => $uid
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$video = new Video;

		// 添加用户浏览记录
		$rst= $this->addFavorite($uid, $type, $id);

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

    public function favorite($id="") {
    	$uid = $this->uid();

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

    public function qanda($id="", $title="", $content="") {
    	$uid = $this->uid();

    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"用户id" => $uid,
			"视频id" => $id,
			// "标题" => $title,
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
				"msg" => "数据提交成功", // 附加信息：[字符串：选填]
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
