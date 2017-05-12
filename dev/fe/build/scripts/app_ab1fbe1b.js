/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.antd;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Axios = {
  get: function get(uri, params, cb) {
    _axios2.default.get(uri, {
      params: params
    }).then(function (response) {
      cb(response);
    }).catch(function (error) {
      console.log(error);
    });
  },

  post: function post(uri, params, cb) {
    _axios2.default.get(uri, {
      params: params
    }).then(function (response) {
      cb(response);
    }).catch(function (error) {
      console.log(error);
    });
  }
};

exports.default = Axios;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "axios.util.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandaDetailContent = function (_React$Component) {
  _inherits(qandaDetailContent, _React$Component);

  function qandaDetailContent(props) {
    _classCallCheck(this, qandaDetailContent);

    var _this = _possibleConstructorReturn(this, (qandaDetailContent.__proto__ || Object.getPrototypeOf(qandaDetailContent)).call(this, props));

    _this.state = {
      // columns: [],
      content: []
    };

    // 获取数据
    // this.getData();
    return _this;
  }

  _createClass(qandaDetailContent, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.get('/api/qanda/detail', {
        // uid: 34,
        // id: this.props.params.id
      }, function (res) {
        console.log(res.data.data);

        _this2.setState({
          // detailData: detailData
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-detailContent' },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement(
              'div',
              { className: 'uidPic' },
              _react2.default.createElement('img', { src: './images/uidPic2.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'uidAnswer' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                _react2.default.createElement(
                  'b',
                  null,
                  this.props.answer.author
                ),
                _react2.default.createElement(
                  'i',
                  null,
                  this.props.answer.createDate
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'answer' },
                this.props.answer.content
              )
            )
          ),
          _react2.default.createElement('div', { className: 'uidcat' })
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return qandaDetailContent;
}(_react2.default.Component);

exports.default = qandaDetailContent;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaDetailContent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListContent = function (_Component) {
  _inherits(ListContent, _Component);

  function ListContent() {
    _classCallCheck(this, ListContent);

    return _possibleConstructorReturn(this, (ListContent.__proto__ || Object.getPrototypeOf(ListContent)).apply(this, arguments));
  }

  _createClass(ListContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-list-content' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'HTML5'
            ),
            _react2.default.createElement(
              'a',
              { href: '' },
              _react2.default.createElement('img', { src: './images/img.png', alt: '' }),
              _react2.default.createElement('i', null)
            ),
            _react2.default.createElement(
              'h2',
              null,
              '\u573A\u666F\u7684\u771F\u5B9E\u4E91\u5F69\u624B\u7ED8\u5316'
            ),
            _react2.default.createElement(
              'h3',
              null,
              '2017.04.02'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u624B\u7ED8\u4E2D\u7ECF\u5E38\u7528\u5230\u4E00\u4E9B\u771F\u5B9E\u7684\u7167\u7247\u573A\u666F\uFF0C\u5982\u679C\u5C06\u7167\u7247\u548C\u624B\u7ED8\u7684\u4EBA\u7269\u98CE\u683C\u7EDF\u4E00\uFF1F'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _axios2.default.get('/api/video/list', {
        condition: 'javascript',
        start: 0,
        count: 10
      }, function (res) {
        console.log(res.data);
      });
    }
  }]);

  return ListContent;
}(_react.Component);

exports.default = ListContent;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ListContent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(16);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-index' },
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _interviewq = __webpack_require__(18);

var _interviewq2 = _interopRequireDefault(_interviewq);

var _ListContent = __webpack_require__(5);

var _ListContent2 = _interopRequireDefault(_ListContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var jobList = function (_React$Component) {
  _inherits(jobList, _React$Component);

  function jobList(props) {
    _classCallCheck(this, jobList);

    var _this = _possibleConstructorReturn(this, (jobList.__proto__ || Object.getPrototypeOf(jobList)).call(this, props));

    _this.state = {
      data: [],
      columns: [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        // render: (text, record) => <a href="">{text},{record.id}</a>,
        render: function render(text, record) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: 'qanda/detail/' + record.id },
            record.id,
            '-',
            text
          );
        }
      }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author'
      }, {
        title: '发布时间',
        dataIndex: 'createDate',
        key: 'createDate'
      }, {
        title: '点击()/回帖()',
        dataIndex: 'action',
        key: 'action'
      }]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(jobList, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.get('/api/qanda/list', {
        condition: 'react',
        start: 0,
        count: 10
      }, function (res) {
        console.log(res.data.data);

        var listData = res.data.data.subjects.map(function (comment, index) {
          return {
            id: comment.id,
            key: index,
            title: comment.title,
            author: comment.author,
            createDate: comment.createDate,
            action: comment.hits + '/' + comment.answers
          };
        });
        console.log(listData);

        _this2.setState({
          data: listData
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list' },
        _react2.default.createElement(
          _antd.Tabs,
          { defaultActiveKey: '1', onChange: this.callback },
          _react2.default.createElement(
            TabPane,
            { tab: '\u9762\u8BD5\u9898', key: '1' },
            _react2.default.createElement(_interviewq2.default, null)
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u62DB\u8058\u4FE1\u606F', key: '2' },
            _react2.default.createElement(_ListContent2.default, null)
          )
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return jobList;
}(_react2.default.Component);

exports.default = jobList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "jobList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _qandaDetailContent = __webpack_require__(4);

var _qandaDetailContent2 = _interopRequireDefault(_qandaDetailContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandAdd = function (_React$Component) {
  _inherits(qandAdd, _React$Component);

  function qandAdd(props) {
    _classCallCheck(this, qandAdd);

    var _this = _possibleConstructorReturn(this, (qandAdd.__proto__ || Object.getPrototypeOf(qandAdd)).call(this, props));

    _this.state = {
      // columns: [],
      question: {},
      answers: [],
      CommentNodes: [1, 2, 3]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(qandAdd, [{
    key: 'getData',
    value: function getData() {
      _axios2.default.post('/api/qanda/detail', {
        uid: 34,
        id: this.props.params.id
      }, function (res) {
        console.log(res.data.data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-detail' },
        _react2.default.createElement(
          'div',
          { className: 'section' },
          _react2.default.createElement(
            'p',
            null,
            '\u63D0\u95EE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reply' },
            _react2.default.createElement(_antd.Input, { placeholder: '\u6807\u9898' }),
            _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 4, placeholder: '\u63D0\u95EE\u5185\u5BB9\u54E6', ref: 'inputContent' }),
            _react2.default.createElement(
              _antd.Button,
              { type: 'primary', onClick: this.reply.bind(this) },
              '\u53D1\u5E03'
            )
          )
        )
      );
    }
  }, {
    key: 'reply',
    value: function reply() {
      console.log(this.refs.inputContent.refs.input.value);
      _axios2.default.post('/api/qanda/add', {
        uid: 4, // 用户ID [数值：必填]
        tag: "React", // 问题标签 [字符串：必填] html, css, 原生js, angular, vue,其他等等
        title: "React dangerouslySetInnerHTML 怎么用？", //标题 [字符串：必填]
        content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
      }, function (res) {
        console.log(res.data.data);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return qandAdd;
}(_react2.default.Component);

exports.default = qandAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _qandaDetailContent = __webpack_require__(4);

var _qandaDetailContent2 = _interopRequireDefault(_qandaDetailContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandaDetail = function (_React$Component) {
  _inherits(qandaDetail, _React$Component);

  function qandaDetail(props) {
    _classCallCheck(this, qandaDetail);

    var _this = _possibleConstructorReturn(this, (qandaDetail.__proto__ || Object.getPrototypeOf(qandaDetail)).call(this, props));

    _this.state = {
      // columns: [],
      question: {},
      answers: [],
      CommentNodes: [1, 2, 3]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(qandaDetail, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.post('/api/qanda/detail', {
        uid: 34,
        id: this.props.params.id
      }, function (res) {
        console.log(res.data.data);

        var CommentNodes = res.data.data.answers.map(function (comment, index) {
          return _react2.default.createElement(_qandaDetailContent2.default, { answer: comment });
        });

        _this2.setState({
          question: res.data.data,
          answers: res.data.data.answers,
          CommentNodes: CommentNodes
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-detail' },
        _react2.default.createElement(
          'div',
          { className: 'photo' },
          _react2.default.createElement('img', { src: './images/uidPic.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'article' },
            _react2.default.createElement(
              'div',
              { className: 'author' },
              _react2.default.createElement(
                'b',
                null,
                this.state.question.author
              ),
              _react2.default.createElement(
                'i',
                null,
                this.state.question.createDate
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement(
                'div',
                null,
                this.state.question.title
              ),
              _react2.default.createElement(
                'p',
                null,
                this.state.question.content
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'div',
                null,
                '\u6700\u4F73\u7B54\u6848'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\u8D85\u5199\u5B9E\u7684\u56FE\u6807\uFF0C\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\uFF0C\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u501F\u9274\u3002\u8D85\u5199\u5B9E\u7684\u56FE\u6807\uFF0C\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\uFF0C\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u9274\u3002\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u3002\u8D85\u5199\u5B9E\u7684\u56FE\u6807\uFF0C\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u501F\u9274\u3002\u8D85\u5199\u5B9E\u7684\u56FE\u6807\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\uFF0C\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u9274\u3002\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u8D85\u5199\u5B9E\u7684\u56FE\u6807\uFF0C\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\uFF0C\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u501F\u9274\u3002\u8D85\u5199\u5B9E\u7684\u56FE\u6807\uFF0C\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u56FE\u6807\uFF0C\u7ED9\u521D\u5B66\u8005\u4E00\u4E2A\u6700\u597D\u7684\u9274\u3002\u5728\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6848\u4F8B\u4E2D\u7684\u5199\u5B9E\u3002'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'p',
              null,
              '\u56DE\u5E16'
            ),
            _react2.default.createElement(
              'div',
              { className: 'reply' },
              _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 4, placeholder: '\u5927\u80C6\u7684\u56DE\u590D\u5427', ref: 'inputContent' }),
              _react2.default.createElement(
                _antd.Button,
                { type: 'primary', onClick: this.reply.bind(this) },
                '\u56DE\u590D'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5168\u90E8\u56DE\u5E16(',
              this.state.answers.length,
              ')'
            ),
            _react2.default.createElement('div', { className: 'cat' }),
            _react2.default.createElement(
              'div',
              { className: 'list' },
              this.state.CommentNodes
            )
          )
        )
      );
    }
  }, {
    key: 'reply',
    value: function reply() {
      console.log(this.refs.inputContent.refs.input.value);
      _axios2.default.post('/api/qanda/reply', {
        uid: 34, // 用户ID [数值：必填]
        qid: 10, // 问题id：[数值：必填]
        content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
      }, function (res) {
        console.log(res.data.data);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return qandaDetail;
}(_react2.default.Component);

exports.default = qandaDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ListContent from './ListContent'


// const data = [{
//   key: '1',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: '45/34',
// }, {
//   key: '2',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: '45/34',
// }, {
//   key: '3',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: 'hits/answers',
// }];

var qandaList = function (_React$Component) {
  _inherits(qandaList, _React$Component);

  function qandaList(props) {
    _classCallCheck(this, qandaList);

    var _this = _possibleConstructorReturn(this, (qandaList.__proto__ || Object.getPrototypeOf(qandaList)).call(this, props));

    _this.state = {
      data: [],
      columns: [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        // render: (text, record) => <a href="">{text},{record.id}</a>,
        render: function render(text, record) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: 'qanda/detail/' + record.id },
            record.id,
            '-',
            text
          );
        }
      }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author'
      }, {
        title: '发布时间',
        dataIndex: 'createDate',
        key: 'createDate'
      }, {
        title: '点击()/回帖()',
        dataIndex: 'action',
        key: 'action'
      }]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(qandaList, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.get('/api/qanda/list', {
        condition: 'react',
        start: 0,
        count: 10
      }, function (res) {
        console.log(res.data.data);

        var listData = res.data.data.subjects.map(function (comment, index) {
          return {
            id: comment.id,
            key: index,
            title: comment.title,
            author: comment.author,
            createDate: comment.createDate,
            action: comment.hits + '/' + comment.answers
          };
        });
        console.log(listData);

        _this2.setState({
          data: listData
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list' },
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'cat' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              '\u6807\u7B7E'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'content' },
              _react2.default.createElement(
                'li',
                null,
                'PHP'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  'HTML5'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                'VUE'
              ),
              _react2.default.createElement(
                'li',
                null,
                'JS'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.data })
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return qandaList;
}(_react2.default.Component);

exports.default = qandaList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(1);

var _ListContent = __webpack_require__(5);

var _ListContent2 = _interopRequireDefault(_ListContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-video-list' },
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'cat' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              '\u5206\u7C7B'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'content' },
              _react2.default.createElement(
                'li',
                null,
                'HTML/CSS'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  'JavaScript'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                'HTML5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'CSS3'
              ),
              _react2.default.createElement(
                'li',
                null,
                'VUE'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'level' },
            _react2.default.createElement(
              'li',
              { className: 'title' },
              '\u9636\u6BB5'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'i',
                null,
                '\u7B2C\u4E00\u9636\u6BB5'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u7B2C\u4E8C\u9636\u6BB5'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u7B2C\u4E09\u9636\u6BB5'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(
            _antd.Tabs,
            { defaultActiveKey: '1', onChange: this.callback },
            _react2.default.createElement(
              TabPane,
              { tab: '\u6700\u65B0', key: '1' },
              _react2.default.createElement(_ListContent2.default, null)
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u6700\u70ED', key: '2' },
              'Content of Tab Pane 2'
            )
          )
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return List;
}(_react.Component);

exports.default = List;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "List.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

exports.default = function () {
  // 映射 Redux状态 到 组件属性
  // Map Redux states to components props
  var mapStateToProps = function mapStateToProps(state) {
    return {
      title: state.title
    };
  };

  // 映射 Redux 动作 到 组件属性
  // Map Redux actions to components props
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onChangeTitle: function onChangeTitle(action) {
        return dispatch(action);
      }
    };
  };

  // Reducer
  var changer = function changer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '《 电影《 豆瓣' };
    var action = arguments[1];

    switch (action.type) {
      case 'SETTITLE':
        return {
          title: action.title
        };
      default:
        return state;
    }
  };

  // 创建store
  var store = (0, _redux.createStore)(changer);

  return {
    mapStateToProps: mapStateToProps,
    mapDispatchToProps: mapDispatchToProps,
    store: store
  };
};

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "m-footer" },
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", { src: "./images/qianfeng-logo.png", alt: "\u5343\u950Blogo" })
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u5173\u4E8E\u5343\u950B"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u8054\u7CFB\u6211\u4EEC"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u4F01\u4E1A\u5408\u4F5C"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u62DB\u8D24\u7EB3\u58EB"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u62A5\u540D\u54A8\u8BE2"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u6559\u5B66\u89C6\u9891"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u5B66\u4E60\u8D44\u6599"
          ),
          _react2.default.createElement(
            "li",
            null,
            "\u6280\u672F\u8BBA\u575B"
          ),
          _react2.default.createElement(
            "li",
            null,
            "RSS\u8BA2\u9605"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "Copyright 2011-2017 \u5317\u4EAC\u5343\u950B\u4E92\u8054\u79D1\u6280\u6709\u9650\u516C\u53F8 \u4EACICP\u590712003911\u53F7-3 \u4EAC\u516C\u7F51\u5B89\u590711010802011455\u53F7"
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Footer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-header' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: './images/logo.png', alt: '\u950B\u5E06logo' })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          _react2.default.createElement(
            'li',
            null,
            '\u9996\u9875'
          ),
          _react2.default.createElement(
            'li',
            null,
            '\u89C6\u9891'
          ),
          _react2.default.createElement(
            'li',
            { className: 'active' },
            '\u95EE\u7B54'
          ),
          _react2.default.createElement(
            'li',
            null,
            '\u62DB\u8058'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'user' },
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: './images/user-icon.png' })
          ),
          _react2.default.createElement(
            'span',
            null,
            '3'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement(Search, {
            placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u5B57',
            onSearch: function onSearch(value) {
              return console.log(value);
            }
          })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Header.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _antd = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interviewq = function (_React$Component) {
  _inherits(interviewq, _React$Component);

  function interviewq(props) {
    _classCallCheck(this, interviewq);

    var _this = _possibleConstructorReturn(this, (interviewq.__proto__ || Object.getPrototypeOf(interviewq)).call(this, props));

    _this.state = {
      data: [],
      columns: [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        // render: (text, record) => <a href="">{text},{record.id}</a>,
        render: function render(text, record) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: 'qanda/detail/' + record.id },
            record.id,
            '-',
            text
          );
        }
      }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author'
      }, {
        title: '发布时间',
        dataIndex: 'createDate',
        key: 'createDate'
      }, {
        title: '点击()/回帖()',
        dataIndex: 'action',
        key: 'action'
      }]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(interviewq, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.get('/api/qanda/list', {
        condition: 'react',
        start: 0,
        count: 10
      }, function (res) {
        console.log(res.data.data);

        var listData = res.data.data.subjects.map(function (comment, index) {
          return {
            id: comment.id,
            key: index,
            title: comment.title,
            author: comment.author,
            createDate: comment.createDate,
            action: comment.hits + '/' + comment.answers
          };
        });
        console.log(listData);

        _this2.setState({
          data: listData
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list' },
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'cat' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              '\u6807\u7B7E'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'content' },
              _react2.default.createElement(
                'li',
                null,
                'PHP'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  'HTML5'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                'VUE'
              ),
              _react2.default.createElement(
                'li',
                null,
                'JS'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.data })
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return interviewq;
}(_react2.default.Component);

exports.default = interviewq;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewq.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = window.axios;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(3);

var _store = __webpack_require__(13);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(15);

var _Index = __webpack_require__(7);

var _Index2 = _interopRequireDefault(_Index);

var _List = __webpack_require__(12);

var _List2 = _interopRequireDefault(_List);

var _qandaList = __webpack_require__(11);

var _qandaList2 = _interopRequireDefault(_qandaList);

var _qandaDetail = __webpack_require__(10);

var _qandaDetail2 = _interopRequireDefault(_qandaDetail);

var _qandaAdd = __webpack_require__(9);

var _qandaAdd2 = _interopRequireDefault(_qandaAdd);

var _jobList = __webpack_require__(8);

var _jobList2 = _interopRequireDefault(_jobList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(6);

// import QandaDetail from './components/qanda/qandaDetail'


_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _store2.default)().store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _Index2.default },
      _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/qanda/list' }),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'video' },
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _List2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'qanda' },
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _qandaList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _qandaDetail2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _qandaAdd2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'job' },
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _jobList2.default })
      )
    )
  )
), document.getElementById('root'));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })
/******/ ]);