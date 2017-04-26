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
}
