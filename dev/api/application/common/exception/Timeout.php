<?php
namespace app\common\exception;

use exception;
use think\exception\Handle;
use think\exception\Httpexception;
use think\Response;
use app\common\exception\TimeoutException;

class Timeout extends Handle
{

    public function render(exception $e)
    {
        if ($e instanceof Httpexception) {
            $statusCode = $e->getStatusCode();
        }

        if($e instanceof TimeoutException) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "session超时，请重新登录。", // 错误信息：[字符串：默认为空]
			];
	        $header = ["Access-Control-Allow-Origin" => "*"];
			return Response::create($result, "json", 200, $header);
        }
        //TODO::开发者对异常的操作
        //可以在此交由系统处理
        return parent::render($e);
    }

}