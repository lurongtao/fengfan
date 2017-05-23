<?php
namespace app\api\controller;
use think\Db;
use app\common\controller\FengfanController;
use app\api\model\CityM;

class City extends FengfanController {
    public function add($city="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"城市名" => $city
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$cityM = new CityM;

		$rst = $cityM->where("title", $city)->find();
		if($rst) {
			$result["errcode"] = -1;
			$result["errmsg"] = "这个城市名已经有了，请查询一下看看。";
			return $this->corsjson($result);
		}

		$cityM->data([
			"title" => $city
		]);
		$cnt = $cityM->save();

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

    public function remove($id="") {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		// 必须输入校验
		$checkresult = $this->requiredCheck([
			"城市id" => $id
		]);
		if($checkresult) {
			return $this->corsjson($checkresult);
		}

		$cityM = new CityM;
		$cnt = $cityM->where('id', $id)->delete();

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

    public function cityList($start=0, $count=1000) {
    	$result =  [
    		"errcode"=> 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
			"errmsg"=> "", // 错误信息：[字符串：默认为空]
		];

		$result["data"]	= $this->search($start, $count);

		return $this->corsjson($result);
    }

    public function search($start="", $count="") {
		$cityM = new CityM;

		$total = $cityM->count();
		// 取得数据
		$subjects = Db::query("select id, title, create_date as createDate from city limit ?, ?", 
			[$start, $count]);

		return [ // 数据内容
			"start" => $start, //记录开始值 [数值：必填]
			"count" => $count, //返回记录条数 [数值：必填]
			"total" => $total, //总记录条数 [数值：必填]
			"subjects" => $subjects
		];
    }
}
