<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    '__pattern__' => [
        'name' => '\w+',
    ],
    'users/reset/:token' =>  ['api/users/reset', ['method' => 'get|post']],
    'api/users/list' =>  ['api/users/userList', ['method' => 'get|post']],
    'api/users/:method' =>  ['api/users/:method', ['method' => 'get|post']],
    'api/video/list' =>  ['api/videos/videolist', ['method' => 'get|post']],
    'api/video/:method' =>  ['api/videos/:method', ['method' => 'get|post']],
    'api/qanda/list' =>  ['api/qandA/questionList', ['method' => 'get|post']],
    'api/qanda/:method' =>  ['api/qandA/:method', ['method' => 'get|post']],
    'api/interviewq/list' =>  ['api/interviewq/questionList', ['method' => 'get|post']],
    'api/interviewq/:method' =>  ['api/interviewq/:method', ['method' => 'get|post']],
    'api/job/list' =>  ['api/job/jobList', ['method' => 'get|post']],
    'api/job/:method' =>  ['api/job/:method', ['method' => 'get|post']],
    'api/search' =>  ['api/search/search', ['method' => 'get|post']],
    'api/classify/list' =>  ['api/classify/classifyList', ['method' => 'get|post']],
    'api/classify/:method' =>  ['api/classify/:method', ['method' => 'get|post']],
    'api/stage/list' =>  ['api/stage/stageList', ['method' => 'get|post']],
    'api/stage/:method' =>  ['api/stage/:method', ['method' => 'get|post']],
    'api/city/list' =>  ['api/city/cityList', ['method' => 'get|post']],
    'api/city/:method' =>  ['api/city/:method', ['method' => 'get|post']],
];
