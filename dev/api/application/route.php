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
];
