var videoDetail = require('./video/videoDetails.json');
var videoQanda = require('./video/videoqanda.json');

var videoList = require('./video/list.json')
var videoAdd = require('./video/videoAdd.json')
var videoRemove = require('./video/videoRemove.json')
var videoUpdate = require('./video/videoUpdate.json')

var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json')
var qandaReply = require('./qanda/qandaReply.json')

var jobList = require('./job/jobList.json')
var jobAdd = require('./job/jobAdd.json')
var jobRemove = require('./job/jobRemove.json')
var jobUpdate = require('./job/jobUpdate.json')

var jobDetail = require('./job/jobDetail.json');
var jobReply = require('./job/jobReply.json');

var interviewqList = require('./interviewq/interviewqList.json')
var interviewqDetail = require('./interviewq/interviewqDetail.json')
var interviewqReply = require('./interviewq/interviewqReply.json')
var interviewRemove = require('./interviewq/interviewqRemove.json')

var interviewqAdd = require('./interviewq/interviewqAdd.json')
var interviewqRemove = require('./interviewq/interviewqRemove.json')
var interviewqUpdate = require('./interviewq/interviewqUpdate.json')

var classifyAdd = require('./classify/classifyAdd.json')
var classifyList = require('./classify/classifyList.json')
var classifyRemove = require('./classify/classifyRemove.json')

var stageAdd = require('./stage/stageAdd.json')
var stageList = require('./stage/stageList.json')
var stageRemove = require('./stage/stageRemove.json')

var cityAdd = require('./city/cityAdd.json')
var cityList = require('./city/cityList.json')
var cityRemove = require('./city/cityRemove.json')

var searchList = require('./search/searchList.json')

module.exports = function () {

  return {
    'videolist': videoList,

    'videodetail': videoDetail,
    'videoqanda': videoQanda,

    'videoadd': videoAdd,
    'videoremove': videoRemove,
    'videoupdate': videoUpdate,

    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply,

    'joblist':jobList,
    'jobdetail':jobDetail,
    'jobreply':jobReply,

    'interviewqlist':interviewqList,
    'interviewqdetail':interviewqDetail,
    'interviewqreply':interviewqReply,
    'interviewremove':interviewRemove,

    'jobadd':jobAdd,
    'jobremove':jobRemove,
    'jobupdate':jobUpdate,

    'interviewqlist':interviewqList,
    'interviewqadd':interviewqAdd,
    'interviewqremove':interviewqRemove,
    'interviewqupdate':interviewqUpdate,

    'classifylist':classifyList,
    'classifyadd':classifyAdd,
    'classifyremove':classifyRemove,

    'stagelist':stageList,
    'stageadd':stageAdd,
    'stageremove':stageRemove,

    'citylist':cityList,
    'cityadd':cityAdd,
    'cityremove':cityRemove,

    'search':searchList

  }
}
