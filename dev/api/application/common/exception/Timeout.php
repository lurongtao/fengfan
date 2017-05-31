<?php
namespace app\common\exception;

use exception;
use think\exception\Handle;
use think\exception\Httpexception;
use think\Response;
use app\common\exception\TimeoutException;
use app\common\exception\UnauthorizedException;

class Timeout extends Handle
{

    public function render(exception $e)
    {
        if ($e instanceof Httpexception) {
            $statusCode = $e->getStatusCode();
        }
        // session超时异常
        if($e instanceof TimeoutException) {
	    	$result =  [
	    		"errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
				"errmsg"=> "session超时，请重新登录。", // 错误信息：[字符串：默认为空]
			];
	        $header = ["Access-Control-Allow-Origin" => "*"];
			return Response::create($result, "json", 200, $header);
        } 
        // 未授权异常
        else if($e instanceof UnauthorizedException) {
            $result =  [
                "errcode"=> -1, // 错误代码：[数值：必填] 0 无错误 -1 有错误
                "errmsg"=> "您用户所在的组无权访问这个API", // 错误信息：[字符串：默认为空]
            ];
            $header = ["Access-Control-Allow-Origin" => "*"];
            return Response::create($result, "json", 200, $header);
        }
        //TODO::开发者对异常的操作
        //可以在此交由系统处理
        return parent::render($e);
    }

}