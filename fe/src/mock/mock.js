var videoList = require('./video/list.json');
var qandaList = require('./qanda/qandaList.json');
var qandaDetail = require('./qanda/qandaDetail.json');
var qandaReply = require('./qanda/qandaReply.json');

module.exports = function () {
  return {
    'videolist': videoList,
    'qandalist': qandaList,
    'qandadetail': qandaDetail,
    'qandareply': qandaReply
  }
}
