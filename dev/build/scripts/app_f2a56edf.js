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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(12);

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
    _axios2.default.post(uri, params).then(function (response) {
      cb(response);
    }).catch(function (error) {
      console.log(error);
    });
  },

  all: function all(param) {
    (0, _axios2.default)({
      url: param.url,
      method: param.method,
      data: param.data
    }).then(function (res) {
      param.callback(res);
    });
  }
};

exports.default = Axios;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "axios.util.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.antd;

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

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirm = _antd.Modal.confirm;

exports.default = {
  //请求分类列表,阶段列表,城市列表数据
  list: function list(uri, that) {
    var callback = function callback(res) {
      var subjects = res.data.data.subjects;
      var data = [];
      subjects.map(function (value, index) {
        data.push({
          id: value.id,
          name: value.title,
          date: value.createDate
        });
        that.setState({
          data: data
        });
      });
    };
    var params = {
      start: 0,
      count: 6
    };
    _axios2.default.get(uri, params, callback);
  },
  //请求列表数据
  videoList: function videoList(uri, callback) {
    var params = {
      start: 0,
      count: 6
    };
    _axios2.default.get(uri, params, callback);
  },
  //删除操作
  delete: function _delete(id, uri, tag) {
    var callback = function callback(res) {
      var data = res.data.data;
      if (data.status == "ok") {
        //删除成功
        _antd.message.success(data.msg, 1, function () {
          location.reload();
        });
      } else {
        //删除失败
        _antd.message.success('删除失败，请重试');
      }
    };
    var params = void 0;
    if (tag == 'users') {
      params = {
        url: uri,
        method: 'post',
        data: 'uid=' + id,
        callback: callback
      };
    } else {
      params = {
        url: uri,
        method: 'post',
        data: 'id=' + id,
        callback: callback
      };
    }

    confirm({
      title: '是否删除此项?',
      content: '确认请点击确认,否则请点击取消',
      onOk: function onOk() {
        _axios2.default.all(params);
      }
    });
  },
  //请求分类数据
  classify: function classify(that) {
    var uri = '/api/classify/list';
    var callback = function callback(res) {
      var arr = [];
      res.data.data.subjects.map(function (value, i) {
        arr.push(React.createElement(
          Option,
          { key: value.title },
          value.title
        ));
      });
      that.setState({
        classify: arr
      });
    };
    var params = {
      url: uri,
      method: 'get',
      callback: callback
    };
    _axios2.default.all(params);
  },
  //请求阶段数据
  stage: function stage(that) {
    var uri = '/api/stage/list';
    var callback = function callback(res) {
      var arr = [];
      res.data.data.subjects.map(function (value, i) {
        arr.push(React.createElement(
          Option,
          { key: value.id },
          value.title
        ));
      });
      that.setState({
        stage: arr
      });
    };
    var params = {
      url: uri,
      method: 'get',
      callback: callback
    };
    _axios2.default.all(params);
  },
  //请求城市数据
  city: function city(that) {
    var uri = '/api/city/list';
    var callback = function callback(res) {
      var arr = [];
      res.data.data.subjects.map(function (value, i) {
        arr.push(React.createElement(
          Option,
          { key: value.title },
          value.title
        ));
      });
      that.setState({
        city: arr
      });
    };
    var params = {
      url: uri,
      method: 'get',
      callback: callback
    };
    _axios2.default.all(params);
  },
  //请求job和interview列表数据
  commonList: function commonList(uri, that) {
    var callback = function callback(res) {
      var data = [];
      res.data.data.subjects.map(function (value, index) {
        data.push(value);
      });
      that.setState({
        data: data
      });
    };
    var params = {};
    _axios2.default.get(uri, params, callback);
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "adminCommon.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(57);
var parse = __webpack_require__(56);
var formats = __webpack_require__(13);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_Component) {
  _inherits(Add, _Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.state = {
      size: {
        size: 'default'
      },
      classify: [],
      city: [],
      classifyValue: '',
      cityValue: ''
    };
    return _this;
  }

  _createClass(Add, [{
    key: 'handleClassifyChange',
    value: function handleClassifyChange(value) {

      //分类
      this.state.classifyValue = value;
    }
  }, {
    key: 'handleCityChange',
    value: function handleCityChange(value) {

      //城市
      this.state.cityValue = value;
    }

    //添加操作

  }, {
    key: 'add',
    value: function add() {
      var _this2 = this;

      var title = this.refs.title.value;
      var txt = this.refs.txt.refs.input.value;
      var uri = this.props.uri;

      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          _this2.refs.title.value = '';
          _this2.refs.txt.refs.input.value = '';
          _antd.message.success(data.msg, 1, function () {
            _this2.props.jumpHandle();
          });
        } else {
          _antd.message.error('提交失败，请重试');
        }
      };
      var tag = this.props.tag; //区分招聘和面试题(发送数据不同)
      var params = {};
      var city = void 0,
          classify = void 0; //存放城市,分类
      if (tag == "job") {
        city = this.state.cityValue;
        classify = this.state.classifyValue;
        params = {
          url: uri,
          method: "post",
          data: {
            title: title,
            tag: classify,
            city: city,
            content: txt
          },
          callback: callback
        };
        if (!title || !txt || !classify || !city) {
          _antd.message.warning('请填写完整');
        } else {
          _axios2.default.all(params);
        }
      } else if (tag == "interviewq") {
        classify = this.state.classifyValue;
        params = {
          url: uri,
          method: "post",
          data: {
            title: title,
            tag: classify,
            content: txt
          },
          callback: callback
        };
        if (!title || !txt || !classify) {
          _antd.message.warning('请填写完整');
        } else {
          _axios2.default.all(params);
        }
      }
    }
  }, {
    key: 'tag',
    value: function tag() {
      var tag = this.props.tag; //区分招聘和面试题(显示城市或者分类)
      if (tag == "job") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'city' },
            _react2.default.createElement(
              _antd.Select,
              {
                ref: 'select',
                size: this.state.size,
                defaultValue: '\u6DFB\u52A0\u57CE\u5E02',
                onChange: this.handleCityChange.bind(this),
                style: { width: 300 }
              },
              this.state.city
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'classify' },
            _react2.default.createElement(
              _antd.Select,
              {
                ref: 'classify',
                size: this.state.size,
                defaultValue: '\u6DFB\u52A0\u5206\u7C7B',
                onChange: this.handleClassifyChange.bind(this),
                style: { width: 300 }
              },
              this.state.classify
            )
          )
        );
      } else if (tag == "interviewq") {
        return _react2.default.createElement(
          'div',
          { className: 'classify' },
          _react2.default.createElement(
            _antd.Select,
            {
              ref: 'classify',
              size: this.state.size,
              defaultValue: '\u6DFB\u52A0\u5206\u7C7B',
              onChange: this.handleClassifyChange.bind(this),
              style: { width: 300 }
            },
            this.state.classify
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'tit' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u6807\u9898', ref: 'title' })
        ),
        this.tag(),
        _react2.default.createElement(
          'div',
          { className: 'txt' },
          _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 4, ref: 'txt' })
        ),
        _react2.default.createElement(
          _antd.Button,
          { onClick: this.add.bind(this) },
          '\u63D0\u4EA4'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      var tag = this.props.tag; //区分招聘和面试题(发送数据不同)
      if (tag == "job") {
        //请求城市分类数据
        _adminCommon2.default.city(this);
        //请求管理分类数据
        _adminCommon2.default.classify(this);
      } else if (tag == "interviewq") {
        //请求管理分类数据
        _adminCommon2.default.classify(this);
      }
    }
  }]);

  return Add;
}(_react.Component);

exports.default = Add;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "add.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

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

var _antd = __webpack_require__(2);

var _reactRouter = __webpack_require__(3);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      columns: [],
      data: [],
      count: 6,
      start: 0
    };
    return _this;
  }

  _createClass(List, [{
    key: 'getData',
    value: function getData(params) {
      var _this2 = this;

      var tag = this.props.tag;
      var callback = function callback(res) {
        var subjects = res.data.data.subjects;
        var data = [];
        if (tag == "users") {
          subjects.map(function (value, index) {
            data.push({
              id: value.id,
              name: value.username,
              date: value.createDate
            });
          });
        } else {
          subjects.map(function (value, index) {
            data.push({
              id: value.id,
              name: value.title,
              date: value.createDate
            });
          });
        }
        _this2.setState({
          data: data
        });
      };
      _axios2.default.get(this.props.uri, params, callback);
    }

    //分页更换数据

  }, {
    key: 'pageChange',
    value: function pageChange(page) {
      this.getData({
        start: (page - 1) * this.state.count,
        count: this.state.count
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'listContainer' },
        _react2.default.createElement(
          'div',
          { className: 'tit' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'addBtn' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: this.props.addUrl },
            '\u6DFB\u52A0'
          )
        ),
        _react2.default.createElement('div', { className: 'list' }),
        _react2.default.createElement(_antd.Table, { columns: this.props.columns, dataSource: this.state.data, pagination: false }),
        _react2.default.createElement(_antd.Pagination, { defaultCurrent: 1, total: this.state.total ? this.state.total : 1, onChange: this.pageChange.bind(this), pageSize: 6 })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var tag = this.props.tag;

      //列表数据
      var callback = function callback(res) {
        var subjects = res.data.data.subjects;
        var total = res.data.data.total;
        var data = [];
        subjects.map(function (value, index) {
          if (tag == 'users') {
            data.push({
              id: value.uid,
              name: value.username,
              date: value.createDate
            });
          } else {
            data.push({
              id: value.id,
              name: value.title,
              date: value.createDate
            });
          }
        });
        _this3.setState({
          data: data,
          total: total
        });
      };
      var uri = this.props.uri;
      _adminCommon2.default.videoList(uri, callback);
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(72);

exports.default = function () {
  // 映射 Redux状态 到 组件属性
  // Map Redux states to components props
  var mapStateToProps = function mapStateToProps(state) {
    return {
      keywords: state.keywords
    };
  };

  // 映射 Redux 动作 到 组件属性
  // Map Redux actions to components props
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onChangeKeywords: function onChangeKeywords(action) {
        return dispatch(action);
      }
    };
  };

  // Reducer
  var changer = function changer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { keywords: '' };
    var action = arguments[1];

    switch (action.type) {
      case 'SET':
        return {
          keywords: action.keywords
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
/* 9 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Management = function (_Component) {
  _inherits(Management, _Component);

  function Management(props) {
    _classCallCheck(this, Management);

    var _this = _possibleConstructorReturn(this, (Management.__proto__ || Object.getPrototypeOf(Management)).call(this, props));

    _this.state = {
      columns: [{
        title: '分类信息',
        dataIndex: 'name',
        key: 'name',
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            null,
            text
          );
        }
      }, {
        title: '删除',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'delete', onClick: _this.delete.bind(_this, record.id) },
              'X'
            )
          );
        }
      }],
      data: [],
      count: 6,
      start: 0
    };
    return _this;
  }

  //删除分类操作


  _createClass(Management, [{
    key: 'delete',
    value: function _delete(id) {
      var uri = this.props.info.removeUri;
      _adminCommon2.default.delete(id, uri);
    }

    //分类添加操作

  }, {
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      var classify = this.refs.classify.value;
      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          //提交成功
          _antd.message.success(data.msg, 1, function () {
            _this2.refs.classify.value = '';
            location.reload();
          });
        } else {
          //提交失败
          _antd.message.error('添加失败，请重试');
        }
      };
      var tag = this.props.tag;
      var postData = void 0;
      //三种分类发送数据不同
      if (tag == "classify") {
        postData = 'classify=' + classify;
      } else if (tag == "city") {
        postData = 'city=' + classify;
      } else {
        postData = 'stage=' + classify;
      }
      var params = {
        url: this.props.info.addUri,
        method: 'post',
        data: postData,
        callback: callback
      };

      if (classify) {
        _axios2.default.all(params);
      } else {
        _antd.message.warning('分类不能为空');
      }
    }
  }, {
    key: 'getData',
    value: function getData(params) {
      var _this3 = this;

      var callback = function callback(res) {
        var subjects = res.data.data.subjects;
        var data = [];
        subjects.map(function (value, index) {
          data.push({
            id: value.id,
            name: value.title,
            date: value.createDate
          });
        });
        _this3.setState({
          data: data
        });
      };
      var uri = this.props.info.listUri;
      _axios2.default.get(uri, params, callback);
    }

    //分页更换数据

  }, {
    key: 'pageChange',
    value: function pageChange(page) {
      this.getData({
        start: (page - 1) * this.state.count,
        count: this.state.count
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'tit' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'tip' },
          '\u5206\u7C7B\u5217\u8868'
        ),
        _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.data, pagination: false }),
        _react2.default.createElement(_antd.Pagination, { defaultCurrent: 1, total: this.state.total ? this.state.total : 1, onChange: this.pageChange.bind(this), pageSize: 6 }),
        _react2.default.createElement(
          'div',
          { className: 'addTip' },
          this.props.info.tip
        ),
        _react2.default.createElement(
          'div',
          { className: 'txt' },
          _react2.default.createElement('input', { type: 'text', ref: 'classify' })
        ),
        _react2.default.createElement(
          _antd.Button,
          { className: 'subBtn', onClick: this.submit.bind(this) },
          '\u63D0\u4EA4'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      //请求管理列表数据
      var uri = this.props.info.listUri;
      var callback = function callback(res) {
        var total = res.data.data.total;
        var subjects = res.data.data.subjects;
        var data = [];
        subjects.map(function (value, index) {
          data.push({
            id: value.id,
            name: value.title,
            date: value.createDate
          });
          _this4.setState({
            data: data,
            total: total
          });
        });
      };
      var params = {
        start: 0,
        count: 6
      };
      _axios2.default.get(uri, params, callback);
    }
  }]);

  return Management;
}(_react.Component);

exports.default = Management;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "management.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _Comment = __webpack_require__(16);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

    _this.state = {
      // columns: [],
      question: {},
      answers: null,
      bestAnswer: null,
      CommentNodes: [1, 2, 3]
    };
    // 获取数据
    _this.getData();
    return _this;
  }

  //获取详情页的数据


  _createClass(Detail, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      // 获取路由传参的id值
      var id = this.props.that.props.params.id;
      _axios2.default.get(this.props.uri, {
        id: id
      }, function (res) {
        // console.log(res.data.data);

        // 寻找最佳答案
        var bestAnswer = null;
        if (res.data.data.answers) {
          for (var i in res.data.data.answers) {
            if (res.data.data.answers[i].bestAnswer) {
              bestAnswer = res.data.data.answers[i];
              break;
            }
          }
        }

        _this2.setState({
          question: res.data.data,
          answers: res.data.data.answers,
          bestAnswer: bestAnswer
        });
      });
    }
  }, {
    key: 'reGetData',
    value: function reGetData() {
      this.getData();
    }

    //点击收藏进行收藏帖子

  }, {
    key: 'addFavorite',
    value: function addFavorite() {
      var type = this.props.that.props.router.location.pathname.split('/')[1];
      _axios2.default.post('/api/favorite', {
        id: this.props.that.props.params.id, // 内容id
        type: type
      }, function (res) {
        var data = res.data.data;
        if (data.status == "ok") {
          _antd.message.info(data.msg);
        } else {
          _antd.message.error('收藏失败，请重试');
        }
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
          _react2.default.createElement('img', { src: '/build/images/uidPic.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'favorite', onClick: this.addFavorite.bind(this) },
          _react2.default.createElement(
            'span',
            null,
            '\u6536\u85CF'
          )
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
                this.state.bestAnswer ? this.state.bestAnswer.content : ""
              )
            )
          ),
          _react2.default.createElement(_Comment2.default, { id: this.props.that.props.params.id, detailDatas: this.state.answers, uri: this.props.replyuri, besturi: this.props.besturi, refreshGetData: this.reGetData.bind(this) })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return Detail;
}(_react2.default.Component);

exports.default = Detail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Detail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = window.axios;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Update = function (_Component) {
  _inherits(Update, _Component);

  function Update(props) {
    _classCallCheck(this, Update);

    var _this = _possibleConstructorReturn(this, (Update.__proto__ || Object.getPrototypeOf(Update)).call(this, props));

    _this.state = {
      size: {
        size: 'default'
      },
      classify: [],
      city: [],
      classifyValue: '',
      cityValue: ''
    };
    return _this;
  }

  _createClass(Update, [{
    key: 'handleClassifyChange',
    value: function handleClassifyChange(value) {
      //分类
      this.state.classifyValue = value;
    }
  }, {
    key: 'handleCityChange',
    value: function handleCityChange(value) {
      //城市
      this.state.cityValue = value;
    }

    //修改操作

  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      var id = this.props.id;
      var title = this.refs.title.value;
      var txt = this.refs.txt.refs.input.value;
      var uri = this.props.uriUpdate;
      var tag = this.props.tag; //区分招聘和面试题(发送数据不同)
      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          _antd.message.success(data.msg, 1, function () {
            _this2.props.jumpHandle();
          });
        } else {
          _antd.message.error('提交失败，请重试');
        }
      };

      var city = void 0,
          classify = void 0; //存放城市,分类
      var params = {};
      if (tag == "job") {
        city = this.state.cityValue;
        classify = this.state.classifyValue;
        params = {
          url: uri,
          method: "post",
          data: {
            id: id,
            title: title,
            tag: classify,
            city: city,
            content: txt
          },
          callback: callback
        };
        if (!title || !txt || !classify || !city) {
          _antd.message.warning('请填写完整');
        } else {
          _axios2.default.all(params);
        }
      } else if (tag == "interviewq") {
        classify = this.state.classifyValue;
        params = {
          url: uri,
          method: "post",
          data: {
            id: id,
            title: title,
            tag: classify,
            content: txt
          },
          callback: callback
        };
        if (!title || !txt || !classify) {
          _antd.message.warning('请填写完整');
        } else {
          _axios2.default.all(params);
        }
      }
    }
  }, {
    key: 'tag',
    value: function tag() {
      var tag = this.props.tag; //区分招聘和面试题(显示城市或者分类)
      if (tag == "job") {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'city' },
            _react2.default.createElement(
              _antd.Select,
              {
                ref: 'select',
                size: this.state.size,
                defaultValue: this.state.cityValue,
                onChange: this.handleCityChange.bind(this),
                style: { width: 300 }
              },
              this.state.city
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'classify' },
            _react2.default.createElement(
              _antd.Select,
              {
                ref: 'classify',
                size: this.state.size,
                defaultValue: this.state.classifyValue,
                onChange: this.handleClassifyChange.bind(this),
                style: { width: 300 }
              },
              this.state.classify
            )
          )
        );
      } else if (tag == "interviewq") {
        return _react2.default.createElement(
          'div',
          { className: 'classify' },
          _react2.default.createElement(
            _antd.Select,
            {
              ref: 'classify',
              size: this.state.size,
              defaultValue: this.state.classifyValue,
              onChange: this.handleClassifyChange.bind(this),
              style: { width: 300 }
            },
            this.state.classify
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'tit' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u6807\u9898', ref: 'title' })
        ),
        this.tag(),
        _react2.default.createElement(
          'div',
          { className: 'txt' },
          _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 4, ref: 'txt' })
        ),
        _react2.default.createElement(
          _antd.Button,
          { onClick: this.update.bind(this) },
          '\u63D0\u4EA4'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var tag = this.props.tag; //区分招聘和面试题(发送数据不同)
      if (tag == "job") {
        //请求城市分类数据
        _adminCommon2.default.city(this);
        //请求管理分类数据
        _adminCommon2.default.classify(this);
      } else if (tag == "interviewq") {
        //请求管理分类数据
        _adminCommon2.default.classify(this);
      }

      var title = this.refs.title;
      var txt = this.refs.txt.refs.input;
      var id = this.props.id;
      var uri = this.props.uriDetail;
      var params = {
        id: id
      };
      var callback = function callback(res) {
        var data = res.data.data;
        title.value = data.title;
        txt.value = data.content;
        _this3.setState({
          classifyValue: data.tag,
          cityValue: data.city
        });
      };
      _axios2.default.get(uri, params, callback);
    }
  }]);

  return Update;
}(_react.Component);

exports.default = Update;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "update.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _qandaDetailContent = __webpack_require__(19);

var _qandaDetailContent2 = _interopRequireDefault(_qandaDetailContent);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment(props) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Comment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CommentNodes = null;
      // console.log(this.props)
      if (this.props.detailDatas) {
        CommentNodes = this.props.detailDatas.map(function (comment, index) {
          return _react2.default.createElement(_qandaDetailContent2.default, { qid: _this2.props.id, besturi: _this2.props.besturi, answer: comment });
        });
      }

      return _react2.default.createElement(
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
          this.props.detailDatas ? this.props.detailDatas.length : null,
          ')'
        ),
        _react2.default.createElement('div', { className: 'cat' }),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          CommentNodes ? CommentNodes : null
        )
      );
    }

    //点击回贴，调用父组件的方法重新获取数据，并渲染组件

  }, {
    key: 'reply',
    value: function reply() {
      // console.log(this.refs.inputContent.refs.input.value);s
      var that = this;
      _axios2.default.post(this.props.uri, {
        id: this.props.id, // 问题id or 视频id：[数值：必填]
        content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
      }, function (res) {
        if (res.status == 200) {
          that.props.refreshGetData();
        }
        var data = res.data.data;
        if (data.status == "ok") {

          _antd.message.success(data.msg, 1, function () {
            location.reload();
          });
        } else {
          _antd.message.error('提交失败，请重试');
        }
      });
    }
  }]);

  return Comment;
}(_react2.default.Component);

exports.default = Comment;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Comment.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 17 */
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
            _react2.default.createElement("img", { src: "/build/images/qianfeng-logo.png", alt: "\u5343\u950Blogo" })
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexCommonTitle = function (_Component) {
  _inherits(IndexCommonTitle, _Component);

  function IndexCommonTitle() {
    _classCallCheck(this, IndexCommonTitle);

    return _possibleConstructorReturn(this, (IndexCommonTitle.__proto__ || Object.getPrototypeOf(IndexCommonTitle)).apply(this, arguments));
  }

  _createClass(IndexCommonTitle, [{
    key: 'go',
    value: function go(path) {
      console.log(path);
      _reactRouter.hashHistory.push('/' + path);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'index_title' },
        React.createElement(
          'p',
          null,
          this.props.title
        ),
        React.createElement(
          'span',
          { onClick: this.go.bind(this, this.props.path) },
          '\u66F4\u591A'
        )
      );
    }
  }]);

  return IndexCommonTitle;
}(_react.Component);

exports.default = IndexCommonTitle;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexCommon.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandaDetailContent = function (_React$Component) {
  _inherits(qandaDetailContent, _React$Component);

  function qandaDetailContent() {
    _classCallCheck(this, qandaDetailContent);

    return _possibleConstructorReturn(this, (qandaDetailContent.__proto__ || Object.getPrototypeOf(qandaDetailContent)).apply(this, arguments));
  }

  _createClass(qandaDetailContent, [{
    key: 'setBestAnswer',
    value: function setBestAnswer() {
      _axios2.default.post(this.props.besturi, {
        qid: this.props.qid, // 问题id
        aid: this.props.answer.id }, function (res) {
        // if(res.status == 200){
        //   that.props.refreshGetData()
        // }
        var data = res.data.data;
        if (data.status == "ok") {

          _antd.message.success(data.msg, 1, function () {
            location.reload();
          });
        } else {
          _antd.message.error('提交失败，请重试');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // 设置最佳回帖按钮
      var setBestButton = "";
      if (this.props.besturi) {
        setBestButton = _react2.default.createElement(
          'div',
          { className: 'bestAnswer', onClick: this.setBestAnswer.bind(this) },
          _react2.default.createElement(
            'span',
            null,
            '\u8BBE\u4E3A\u6700\u4F73\u56DE\u5E16'
          )
        );
      }
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
              _react2.default.createElement('img', { src: '/build/images/uidPic2.png' })
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
        ),
        setBestButton
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return qandaDetailContent;
}(_react2.default.Component);

exports.default = qandaDetailContent;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaDetailContent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  //根据标签处理数据
  dataProcessing: function dataProcessing(data, curTag) {
    var filterData = [];
    // console.log(data)
    data.map(function (item, index) {
      // console.log(item)
      if (curTag == "所有标签") {
        filterData.push(item);
      } else if (item.tag == curTag) {
        filterData.push(item);
      }
      return;
    });
    return filterData;
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "tagFilter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(58);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(17);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouter = __webpack_require__(3);

var _axiosUtil = __webpack_require__(1);

var _axiosUtil2 = _interopRequireDefault(_axiosUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-index' },
        _react2.default.createElement(_Header2.default, { parent: this }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axiosUtil2.default.get('/api/users/hassignin', {}, function (res) {
        var data = res.data.data;
        if (res.data.errcode != -1 && data.status == 'has') {
          if (_this2.props.router.location.pathname == '/index/list') {
            _this2.props.router.push('/index/list');
          }
        } else {
          _this2.props.router.push('/users/signin');
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _adminHeader = __webpack_require__(59);

var _adminHeader2 = _interopRequireDefault(_adminHeader);

var _Footer = __webpack_require__(17);

var _Footer2 = _interopRequireDefault(_Footer);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = function (_Component) {
  _inherits(Admin, _Component);

  function Admin() {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).apply(this, arguments));
  }

  _createClass(Admin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-admin' },
        _react2.default.createElement(_adminHeader2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var that = this;
      _axios2.default.get('/api/users/hassignin', {}, function (res) {
        var data = res.data.data;
        if (data.status == 'has') {
          if (data.roles == '0') {} else {
            location.href = "/";
          }
        } else {
          location.href = "/";
        }
      });
    }
  }]);

  return Admin;
}(_react.Component);

exports.default = Admin;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "admin.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InterviewqAdd = function (_Component) {
  _inherits(InterviewqAdd, _Component);

  function InterviewqAdd(props) {
    _classCallCheck(this, InterviewqAdd);

    var _this = _possibleConstructorReturn(this, (InterviewqAdd.__proto__ || Object.getPrototypeOf(InterviewqAdd)).call(this, props));

    _this.state = {
      title: "面试题管理/内容添加"
    };
    return _this;
  }

  _createClass(InterviewqAdd, [{
    key: 'jump',
    value: function jump() {
      //跳转操作
      this.props.router.push("/admin/interviewq/list");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-interviewqAdd add' },
        _react2.default.createElement(_add2.default, { title: this.state.title, uri: "/api/interviewq/add", tag: "interviewq", jumpHandle: this.jump.bind(this) })
      );
    }
  }]);

  return InterviewqAdd;
}(_react.Component);

exports.default = InterviewqAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewqAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InterviewqList = function (_Component) {
  _inherits(InterviewqList, _Component);

  function InterviewqList(props) {
    _classCallCheck(this, InterviewqList);

    var _this = _possibleConstructorReturn(this, (InterviewqList.__proto__ || Object.getPrototypeOf(InterviewqList)).call(this, props));

    _this.state = {
      pagination: {
        pageSize: 4
      },
      title: "面试题管理/内容列表",
      columns: [{
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        width: 304,
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            null,
            text
          );
        }
      }, {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: 304
      }, {
        title: '操作',
        key: 'action',
        width: 304,
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'update', onClick: _this.update.bind(_this, record.id) },
              '\u4FEE\u6539'
            ),
            _react2.default.createElement(
              'a',
              { className: 'delete', onClick: _this.delete.bind(_this, record.id) },
              '\u5220\u9664'
            )
          );
        }
      }],
      data: [],
      total: 0
    };
    return _this;
  }

  //面试题管理修改操作


  _createClass(InterviewqList, [{
    key: 'update',
    value: function update(id) {
      this.props.router.push('/admin/interviewq/update/' + id);
    }

    //面试题管理删除操作

  }, {
    key: 'delete',
    value: function _delete(id) {
      var uri = '/api/interviewq/remove';
      var tag = 'interviewq';
      _adminCommon2.default.delete(id, uri, tag);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-interviewqList adList' },
        _react2.default.createElement(_list2.default, { columns: this.state.columns, uri: "/api/interviewq/list", title: this.state.title, total: this.state.total, tag: "interviewq", addUrl: "/admin/interviewq/add" })
      );
    }
  }]);

  return InterviewqList;
}(_react.Component);

exports.default = InterviewqList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewqList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

var _update = __webpack_require__(15);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InterViewqUpdate = function (_Component) {
  _inherits(InterViewqUpdate, _Component);

  function InterViewqUpdate(props) {
    _classCallCheck(this, InterViewqUpdate);

    var _this = _possibleConstructorReturn(this, (InterViewqUpdate.__proto__ || Object.getPrototypeOf(InterViewqUpdate)).call(this, props));

    _this.state = {
      title: "面试题管理/内容修改"
    };
    return _this;
  }

  _createClass(InterViewqUpdate, [{
    key: 'jump',
    value: function jump() {
      //跳转操作
      this.props.router.push("/admin/interviewq/list");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-update' },
        _react2.default.createElement(_update2.default, { title: this.state.title, id: this.props.params.id, uriUpdate: "/api/interviewq/update", uriDetail: "/api/interviewq/detail", jumpHandle: this.jump.bind(this), tag: "interviewq" })
      );
    }
  }]);

  return InterViewqUpdate;
}(_react.Component);

exports.default = InterViewqUpdate;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewqUpdate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminRecruitAdd = function (_Component) {
  _inherits(AdminRecruitAdd, _Component);

  function AdminRecruitAdd(props) {
    _classCallCheck(this, AdminRecruitAdd);

    var _this = _possibleConstructorReturn(this, (AdminRecruitAdd.__proto__ || Object.getPrototypeOf(AdminRecruitAdd)).call(this, props));

    _this.state = {
      title: "招聘管理/内容添加"
    };
    return _this;
  }

  _createClass(AdminRecruitAdd, [{
    key: 'jump',
    value: function jump() {
      //跳转操作
      this.props.router.push("/admin/job/list");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-recruitAdd add' },
        _react2.default.createElement(_add2.default, { title: this.state.title, uri: "/api/job/add", tag: "job", jumpHandle: this.jump.bind(this) })
      );
    }
  }]);

  return AdminRecruitAdd;
}(_react.Component);

exports.default = AdminRecruitAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "jobAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recruitList = function (_Component) {
  _inherits(recruitList, _Component);

  function recruitList(props) {
    _classCallCheck(this, recruitList);

    var _this = _possibleConstructorReturn(this, (recruitList.__proto__ || Object.getPrototypeOf(recruitList)).call(this, props));

    _this.state = {
      pagination: {
        pageSize: 4
      },
      title: "招聘管理/内容列表",
      columns: [{
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        width: 304,
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            null,
            text
          );
        }
      }, {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: 304
      }, {
        title: '操作',
        key: 'action',
        width: 304,
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'update', onClick: _this.update.bind(_this, record.id) },
              '\u4FEE\u6539'
            ),
            _react2.default.createElement(
              'a',
              { className: 'delete', onClick: _this.delete.bind(_this, record.id) },
              '\u5220\u9664'
            )
          );
        }
      }],
      data: [],
      total: 0
    };
    return _this;
  }

  //招聘管理修改操作


  _createClass(recruitList, [{
    key: 'update',
    value: function update(id) {
      this.props.router.push('/admin/job/update/' + id);
    }

    //招聘管理删除操作

  }, {
    key: 'delete',
    value: function _delete(id) {
      var uri = '/api/job/remove';
      var tag = 'job';
      _adminCommon2.default.delete(id, uri, tag);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-jobList adList' },
        _react2.default.createElement(_list2.default, { columns: this.state.columns, uri: "/api/job/list", title: this.state.title,
          total: this.state.total, tag: "job", addUrl: "/admin/job/add" })
      );
    }
  }]);

  return recruitList;
}(_react.Component);

exports.default = recruitList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "jobList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

var _update = __webpack_require__(15);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobUpdate = function (_Component) {
  _inherits(JobUpdate, _Component);

  function JobUpdate(props) {
    _classCallCheck(this, JobUpdate);

    var _this = _possibleConstructorReturn(this, (JobUpdate.__proto__ || Object.getPrototypeOf(JobUpdate)).call(this, props));

    _this.state = {
      title: "招聘管理/内容修改"
    };
    return _this;
  }

  _createClass(JobUpdate, [{
    key: 'jump',
    value: function jump() {
      //跳转操作
      this.props.router.push("/admin/job/list");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-update' },
        _react2.default.createElement(_update2.default, { title: this.state.title, id: this.props.params.id, uriUpdate: "/api/job/update", uriDetail: "/api/job/detail", jumpHandle: this.jump.bind(this), tag: "job" })
      );
    }
  }]);

  return JobUpdate;
}(_react.Component);

exports.default = JobUpdate;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "jobUpdate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _management = __webpack_require__(10);

var _management2 = _interopRequireDefault(_management);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_Component) {
  _inherits(City, _Component);

  function City(props) {
    _classCallCheck(this, City);

    var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this, props));

    _this.state = {
      info: {
        title: "城市管理",
        tip: "城市添加",
        listUri: "/api/city/list",
        addUri: "/api/city/add",
        removeUri: "/api/city/remove"
      }
    };
    return _this;
  }

  _createClass(City, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-city management' },
        _react2.default.createElement(_management2.default, { info: this.state.info, tag: "city" })
      );
    }
  }]);

  return City;
}(_react.Component);

exports.default = City;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "city.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _management = __webpack_require__(10);

var _management2 = _interopRequireDefault(_management);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoClassify = function (_Component) {
  _inherits(VideoClassify, _Component);

  function VideoClassify(props) {
    _classCallCheck(this, VideoClassify);

    var _this = _possibleConstructorReturn(this, (VideoClassify.__proto__ || Object.getPrototypeOf(VideoClassify)).call(this, props));

    _this.state = {
      info: {
        title: "视频管理/分类管理",
        tip: "分类添加",
        listUri: "/api/classify/list",
        addUri: "/api/classify/add",
        removeUri: "/api/classify/remove"
      }
    };
    return _this;
  }

  _createClass(VideoClassify, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-classify management' },
        _react2.default.createElement(_management2.default, { info: this.state.info, tag: "classify" })
      );
    }
  }]);

  return VideoClassify;
}(_react.Component);

exports.default = VideoClassify;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "classify.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _management = __webpack_require__(10);

var _management2 = _interopRequireDefault(_management);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = function (_Component) {
  _inherits(Stage, _Component);

  function Stage(props) {
    _classCallCheck(this, Stage);

    var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, props));

    _this.state = {
      info: {
        title: "视频管理/阶段管理",
        tip: "阶段添加",
        listUri: "/api/stage/list",
        addUri: "/api/stage/add",
        removeUri: "/api/stage/remove"
      }
    };
    return _this;
  }

  _createClass(Stage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-stage management' },
        _react2.default.createElement(_management2.default, { info: this.state.info, tag: "stage" })
      );
    }
  }]);

  return Stage;
}(_react.Component);

exports.default = Stage;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

var _qs = __webpack_require__(5);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var UserAdd = function (_Component) {
  _inherits(UserAdd, _Component);

  function UserAdd(props) {
    _classCallCheck(this, UserAdd);

    var _this = _possibleConstructorReturn(this, (UserAdd.__proto__ || Object.getPrototypeOf(UserAdd)).call(this, props));

    _this.state = {
      // roles:[],
      // rolesValue:'',
      // options:[]
    };
    return _this;
  }

  //视频添加提交操作


  _createClass(UserAdd, [{
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      var username = this.refs.username.value; //用户名
      var pwd = this.refs.pwd.value; //用户密码
      // let roles = this.state.rolesValue//用户角色

      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          //提交成功
          _antd.message.success(data.msg, 1, function () {
            _this2.refs.username.value = '';
            _this2.refs.pwd.value = '', _this2.props.router.push('/admin/users/list');
          });
        } else {
          //提交失败
          _antd.message.error('提交失败，请重试');
        }
      };

      var data = {
        username: username,
        password: pwd
      };
      var params = {
        url: '/api/users/add',
        method: 'post',
        data: _qs2.default.stringify(data),
        callback: callback
      };

      //判断用户名是否存在
      var uri = '/api/users/list';
      var isHas = false;
      var pas = {
        start: 0,
        count: 6
      };
      var cb = function cb(res) {
        var data = res.data.data.subjects;
        data.map(function (value, index) {
          if (value.username == username) {
            isHas = true;
          }
        });
        // if(!username  || !roles || !pwd){
        if (!username || !pwd) {
          _antd.message.warning('请填写完整');
        } else if (isHas) {
          _antd.message.warning('用户名已存在');
        } else {
          _axios2.default.all(params);
        }
      };
      _axios2.default.get(uri, pas, cb);
      // axios.all(params)
    }

    // onChange(value){
    //   let roles = value.join('-')
    //   this.setState({
    //     rolesValue:roles
    //   })
    // }


    // <div className="user">
    //   <Cascader options={this.state.options} onChange={this.onChange.bind(this)} placeholder="请选择角色" />
    // </div>

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-userAdd' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'tit' },
            '\u7528\u6237\u7BA1\u7406/\u7528\u6237\u6DFB\u52A0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'addCon' },
            _react2.default.createElement(
              'div',
              { className: 'addName' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u7528\u6237\u540D', ref: 'username' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'password' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u7528\u6237\u5BC6\u7801', ref: 'pwd', disabled: 'disabled' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'subBtn', onClick: this.submit.bind(this) },
              '\u63D0\u4EA4'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // let uri = '/mock/api/stage/list'
      // let callback = (res)=>{
      // let data = res.data.data.subjects
      // let arr = []
      // data.map((value,index)=>{
      //   arr.push({
      //     value:value.id,
      //     label:value.title
      //   })
      // })
      // let options = [
      //   {
      //     value: '0',
      //     label: '管理员',
      //   },
      //   {
      //     value: '1',
      //     label: '讲师',
      //   },
      //   {
      //     value: '2',
      //     label: '学员',
      //     children: [
      //       {
      //        value: '1',
      //        label: '未毕业学员',
      //        children:arr
      //       },
      //       {
      //        value: '2',
      //        label: '已毕业学员',
      //        children:[
      //          {
      //            value:'1',
      //            label:'已过试用期',
      //          },
      //          {
      //            value:'2',
      //            label:'未过试用期',
      //          }
      //        ]
      //       }
      //    ]
      //   }
      // ]
      // this.setState({
      //   options:options
      // })
      // }
      // let params = {}
      // axios.get(uri,params,callback)


      var chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";

      var randomChars = "";

      for (var i = 0; i < 6; i++) {
        var str = Math.floor(Math.random() * chars.length);
        randomChars += chars.charAt(str);
      }

      this.refs.pwd.value = randomChars;
    }
  }]);

  return UserAdd;
}(_react.Component);

exports.default = UserAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.state = {
      pagination: {
        pageSize: 4
      },
      title: "用户管理/用户列表",
      columns: [{
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        width: 304,
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            null,
            text
          );
        }
      }, {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: 304
      }, {
        title: '操作',
        key: 'action',
        width: 304,
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'update', onClick: _this.update.bind(_this, record.id) },
              '\u4FEE\u6539'
            ),
            _react2.default.createElement(
              'a',
              { className: 'delete', onClick: _this.delete.bind(_this, record.id) },
              '\u5220\u9664'
            )
          );
        }
      }],
      data: [],
      total: 0
    };
    return _this;
  }

  //用户管理修改操作


  _createClass(UserList, [{
    key: 'update',
    value: function update(uid) {
      this.props.router.push('/admin/users/update/' + uid);
    }

    //用户管理删除操作

  }, {
    key: 'delete',
    value: function _delete(id) {
      var uri = '/api/users/remove';
      var tag = 'users';
      _adminCommon2.default.delete(id, uri, tag);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-usersList adList' },
        _react2.default.createElement(_list2.default, { columns: this.state.columns, uri: "/api/users/list", title: this.state.title,
          total: this.state.total, tag: "users", addUrl: "/admin/users/add" })
      );
    }
  }]);

  return UserList;
}(_react.Component);

exports.default = UserList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

var _qs = __webpack_require__(5);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var UserUpdate = function (_Component) {
  _inherits(UserUpdate, _Component);

  function UserUpdate(props) {
    _classCallCheck(this, UserUpdate);

    var _this = _possibleConstructorReturn(this, (UserUpdate.__proto__ || Object.getPrototypeOf(UserUpdate)).call(this, props));

    _this.state = {
      // roles:[],
      // rolesValue:'',
      // options:[]
    };
    return _this;
  }

  //修改提交操作


  _createClass(UserUpdate, [{
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      var id = this.props.params.id;
      var username = this.refs.updateName.value; //用户名
      // let roles = this.state.rolesValue//用户角色

      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          //提交成功
          _antd.message.success(data.msg, 1, function () {
            _this2.props.router.push('/admin/users/list');
          });
        } else {
          //提交失败
          _antd.message.error('提交失败，请重试');
        }
      };

      var data = {
        username: username
        // roles:roles
      };
      var params = {
        url: '/api/users/update',
        method: 'post',
        data: _qs2.default.stringify(data),
        callback: callback
      };
      // if(!roles || !pwd){
      if (!username) {
        _antd.message.warning('请填写完整');
      } else {
        _axios2.default.all(params);
      }
    }

    // onChange(value){
    //   let roles = value.join('-')
    //   this.setState({
    //     rolesValue:roles
    //   })
    // }

    // <div className="user">
    //   <Cascader options={this.state.options} onChange={this.onChange.bind(this)} placeholder="请选择角色" />
    // </div>

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-userAdd' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'tit' },
            '\u7528\u6237\u7BA1\u7406/\u7528\u6237\u6DFB\u52A0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'addCon' },
            _react2.default.createElement(
              'div',
              { className: 'addName' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u7528\u6237\u540D', ref: 'username', disabled: 'disabled' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'password' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u4FEE\u6539\u7528\u6237\u540D', ref: 'updateName' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'subBtn', onClick: this.submit.bind(this) },
              '\u63D0\u4EA4'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      // let uri = '/api/stage/list'
      // let callback = (res)=>{
      //   let data = res.data.data.subjects
      //   let arr = []
      //   data.map((value,index)=>{
      //     arr.push({
      //       value:value.id,
      //       label:value.title
      //     })
      //   })
      //   let options = [
      //     {
      //       value: '0',
      //       label: '管理员',
      //     },
      //     {
      //       value: '1',
      //       label: '讲师',
      //     },
      //     {
      //       value: '2',
      //       label: '学员',
      //       children: [
      //         {
      //          value: '1',
      //          label: '未毕业学员',
      //          children:arr
      //         },
      //         {
      //          value: '2',
      //          label: '已毕业学员',
      //          children:[
      //            {
      //              value:'1',
      //              label:'已过试用期',
      //            },
      //            {
      //              value:'2',
      //              label:'未过试用期',
      //            }
      //          ]
      //         }
      //      ]
      //     }
      //   ]
      //   this.setState({
      //     options:options
      //   })
      // }
      // let params = {}
      // axios.get(uri,params,callback)

      var id = this.props.params.id;

      var cb = function cb(res) {
        var subjects = res.data.data.subjects;
        subjects.map(function (value, index) {
          if (value.uid == id) {
            _this3.refs.username.value = value.username;
          }
        });
      };

      var listUri = '/api/users/list';
      _adminCommon2.default.videoList(listUri, cb);
    }
  }]);

  return UserUpdate;
}(_react.Component);

exports.default = UserUpdate;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userUpdate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

var _qs = __webpack_require__(5);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var VideoAdd = function (_Component) {
  _inherits(VideoAdd, _Component);

  function VideoAdd(props) {
    _classCallCheck(this, VideoAdd);

    var _this = _possibleConstructorReturn(this, (VideoAdd.__proto__ || Object.getPrototypeOf(VideoAdd)).call(this, props));

    _this.state = {
      size: {
        size: 'default'
      },
      classify: [],
      stage: [],
      classifyValue: '',
      stageValue: ''
    };
    return _this;
  }

  //视频添加提交操作


  _createClass(VideoAdd, [{
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      var title = this.refs.title.value; //标题
      var desc = this.refs.desc.refs.input.value; //描述
      var imgUrl = this.refs.imgUrl.value; //图片url
      var videoUrl = this.refs.videoUrl.value; //视频url
      var classify = this.state.classifyValue; //分类
      var stage = this.state.stageValue; //阶段

      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          //提交成功
          _antd.message.success(data.msg, 1, function () {
            _this2.refs.title.value = '';
            _this2.refs.desc.refs.input.value = '', _this2.refs.imgUrl.value = '', _this2.refs.videoUrl.value = '';
            _this2.props.router.push("/admin/video/list");
          });
        } else {
          //提交失败
          _antd.message.error('提交失败，请重试');
        }
      };

      var data = {
        title: title,
        url: videoUrl,
        img: imgUrl,
        summary: desc,
        category: {
          // step:stage,
          step: 1,
          tag: classify
        }
      };
      var params = {
        url: '/api/video/add',
        method: 'post',
        data: _qs2.default.stringify(data),
        callback: callback
      };

      if (!title || !desc || !imgUrl || !videoUrl || !classify || !stage) {
        _antd.message.warning('请填写完整');
      } else {
        _axios2.default.all(params);
      }
    }
  }, {
    key: 'handleClassifyChange',
    value: function handleClassifyChange(value) {
      //分类
      this.state.classifyValue = value;
    }
  }, {
    key: 'handleStageChange',
    value: function handleStageChange(value) {
      console.log(value);
      //阶段
      this.state.stageValue = value;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-adVideoAdd' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'tit' },
            '\u89C6\u9891\u7BA1\u7406/\u5185\u5BB9\u6DFB\u52A0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'addCon' },
            _react2.default.createElement(
              'div',
              { className: 'addTitle' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u6807\u9898', ref: 'title' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'classify' },
              _react2.default.createElement(
                _antd.Select,
                {
                  ref: 'classify',
                  size: this.state.size,
                  defaultValue: '\u6DFB\u52A0\u5206\u7C7B',
                  onChange: this.handleClassifyChange.bind(this),
                  style: { width: 300 }
                },
                this.state.classify
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'stage' },
              _react2.default.createElement(
                _antd.Select,
                {
                  ref: 'select',
                  size: this.state.size,
                  defaultValue: '\u6DFB\u52A0\u9636\u6BB5',
                  onChange: this.handleStageChange.bind(this),
                  style: { width: 300 }
                },
                this.state.stage
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'desc' },
              _react2.default.createElement(_antd.Input, { type: 'textarea', ref: 'desc' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'imgUrl' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u56FE\u7247url', ref: 'imgUrl' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'videoUrl' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u89C6\u9891url', ref: 'videoUrl' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'subBtn', onClick: this.submit.bind(this) },
              '\u63D0\u4EA4'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //请求管理分类数据
      _adminCommon2.default.classify(this);

      //请求阶段分类数据
      _adminCommon2.default.stage(this);
    }
  }]);

  return VideoAdd;
}(_react.Component);

exports.default = VideoAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "videoAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoList = function (_Component) {
  _inherits(VideoList, _Component);

  function VideoList(props) {
    _classCallCheck(this, VideoList);

    var _this = _possibleConstructorReturn(this, (VideoList.__proto__ || Object.getPrototypeOf(VideoList)).call(this, props));

    _this.state = {
      pagination: {
        pageSize: 4
      },
      title: "视频管理/内容列表",
      columns: [{
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        width: 304,
        render: function render(text) {
          return _react2.default.createElement(
            'a',
            null,
            text
          );
        }
      }, {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: 304
      }, {
        title: '操作',
        key: 'action',
        width: 304,
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'update', onClick: _this.update.bind(_this, record.id) },
              '\u4FEE\u6539'
            ),
            _react2.default.createElement(
              'a',
              { className: 'delete', onClick: _this.delete.bind(_this, record.id) },
              '\u5220\u9664'
            )
          );
        }
      }],
      data: [],
      total: 0
    };
    return _this;
  }

  //视频管理修改操作


  _createClass(VideoList, [{
    key: 'update',
    value: function update(id) {
      this.props.router.push('/admin/video/update/' + id);
    }

    //视频管理删除操作

  }, {
    key: 'delete',
    value: function _delete(id) {
      var uri = '/api/video/remove';
      var tag = 'video';
      _adminCommon2.default.delete(id, uri, tag);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-videoList adList' },
        _react2.default.createElement(_list2.default, { columns: this.state.columns, uri: "/api/video/list", title: this.state.title, total: this.state.total, tag: "video", addUrl: "/admin/video/add" })
      );
    }
  }]);

  return VideoList;
}(_react.Component);

exports.default = VideoList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "videoList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _adminCommon = __webpack_require__(4);

var _adminCommon2 = _interopRequireDefault(_adminCommon);

var _qs = __webpack_require__(5);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var VideoUpdate = function (_Component) {
  _inherits(VideoUpdate, _Component);

  function VideoUpdate(props) {
    _classCallCheck(this, VideoUpdate);

    var _this = _possibleConstructorReturn(this, (VideoUpdate.__proto__ || Object.getPrototypeOf(VideoUpdate)).call(this, props));

    _this.state = {
      size: {
        size: 'default'
      },
      classify: [],
      stage: [],
      classifyValue: '',
      stageValue: ''
    };
    return _this;
  }

  _createClass(VideoUpdate, [{
    key: 'handleClassifyChange',
    value: function handleClassifyChange(value) {
      //分类
      this.state.classifyValue = value;
    }
  }, {
    key: 'handleStageChange',
    value: function handleStageChange(value) {
      //阶段
      this.state.stageValue = value;
    }

    //视频修改提交操作

  }, {
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      var title = this.refs.title.value; //标题
      var desc = this.refs.desc.refs.input.value; //描述
      var imgUrl = this.refs.imgUrl.value; //图片url
      var videoUrl = this.refs.videoUrl.value; //视频url
      var classify = this.state.classifyValue; //分类
      var stage = this.state.stageValue; //阶段
      var id = this.props.params.id;

      var callback = function callback(res) {
        var data = res.data.data;
        if (data.status == "ok") {
          //提交成功
          _antd.message.success(data.msg, 1, function () {
            _this2.props.router.push("/admin/video/list");
          });
        } else {
          //提交失败
          _antd.message.error('提交失败，请重试');
        }
      };
      var data = {
        id: id,
        title: title,
        url: videoUrl,
        img: imgUrl,
        summary: desc,
        category: {
          // step:stage,
          step: 1,
          tag: classify
        }
      };

      var params = {
        url: '/api/video/update',
        method: 'post',
        data: _qs2.default.stringify(data),
        callback: callback
      };
      if (!title || !desc || !imgUrl || !videoUrl || !classify || !stage) {
        _antd.message.warning('请填写完整');
      } else {
        _axios2.default.all(params);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-adVideoAdd' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'tit' },
            '\u89C6\u9891\u7BA1\u7406/\u5185\u5BB9\u4FEE\u6539'
          ),
          _react2.default.createElement(
            'div',
            { className: 'addCon' },
            _react2.default.createElement(
              'div',
              { className: 'addTitle' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u6807\u9898', ref: 'title' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'classify' },
              _react2.default.createElement(
                _antd.Select,
                {
                  ref: 'classify',
                  size: this.state.size,
                  defaultValue: this.state.classifyValue,
                  onChange: this.handleClassifyChange.bind(this),
                  style: { width: 300 }
                },
                this.state.classify
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'stage' },
              _react2.default.createElement(
                _antd.Select,
                {
                  ref: 'select',
                  size: this.state.size,
                  defaultValue: this.state.stageValue,
                  onChange: this.handleStageChange.bind(this),
                  style: { width: 300 }
                },
                this.state.stage
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'desc' },
              _react2.default.createElement(_antd.Input, { type: 'textarea', ref: 'desc' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'imgUrl' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u56FE\u7247url', ref: 'imgUrl' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'videoUrl' },
              _react2.default.createElement('input', { type: 'text', placeholder: '\u6DFB\u52A0\u89C6\u9891url', ref: 'videoUrl' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'subBtn', onClick: this.submit.bind(this) },
              '\u63D0\u4EA4'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var id = this.props.params.id;

      //请求视频管理分类数据
      _adminCommon2.default.classify(this);

      //请求视频阶段分类数据
      _adminCommon2.default.stage(this);

      //请求视频管理列表数据
      var callback = function callback(res) {
        var subjects = res.data.data.subjects;
        subjects.map(function (value, index) {
          if (value.id == id) {
            _this3.refs.title.value = value.title;
            _this3.refs.desc.refs.input.value = value.summary;
            _this3.refs.imgUrl.value = value.img;
            _this3.refs.videoUrl.value = value.url; //缺少字段
          }
        });
        // this.setState({
        //   classifyValue:data.tag,
        //   stageValue:data.stage
        // })
      };
      var uri = '/api/video/list';
      _adminCommon2.default.videoList(uri, callback);
    }
  }]);

  return VideoUpdate;
}(_react.Component);

exports.default = VideoUpdate;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "videoUpdate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axiosUtil = __webpack_require__(1);

var _axiosUtil2 = _interopRequireDefault(_axiosUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _axiosUtil2.default.get('/api/users/hassignin', {}, function (res) {
        var data = res.data.data;
        if (res.data.errcode != -1 && data.status == 'has') {
          _this2.props.router.push('/index/list');
        } else {
          _this2.props.router.push('/users/signin');
        }
      });
      return null;
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _indexBanner = __webpack_require__(60);

var _indexBanner2 = _interopRequireDefault(_indexBanner);

var _indexVideo = __webpack_require__(63);

var _indexVideo2 = _interopRequireDefault(_indexVideo);

var _indexNews = __webpack_require__(61);

var _indexNews2 = _interopRequireDefault(_indexNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexList = function (_Component) {
  _inherits(IndexList, _Component);

  function IndexList() {
    _classCallCheck(this, IndexList);

    return _possibleConstructorReturn(this, (IndexList.__proto__ || Object.getPrototypeOf(IndexList)).apply(this, arguments));
  }

  _createClass(IndexList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-indexlist' },
        _react2.default.createElement(_indexBanner2.default, null),
        _react2.default.createElement(_indexVideo2.default, null),
        _react2.default.createElement(_indexNews2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return IndexList;
}(_react.Component);

exports.default = IndexList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _Detail = __webpack_require__(11);

var _Detail2 = _interopRequireDefault(_Detail);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jobDetail = function (_Component) {
  _inherits(jobDetail, _Component);

  function jobDetail() {
    _classCallCheck(this, jobDetail);

    return _possibleConstructorReturn(this, (jobDetail.__proto__ || Object.getPrototypeOf(jobDetail)).apply(this, arguments));
  }

  _createClass(jobDetail, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_Detail2.default, { id: this.props.params.id, uri: 'api/job/detail', replyuri: 'api/job/reply', that: this })
      );
    }
  }]);

  return jobDetail;
}(_react.Component);

exports.default = jobDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "JobDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _Detail = __webpack_require__(11);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interviewqDetail = function (_Component) {
  _inherits(interviewqDetail, _Component);

  function interviewqDetail() {
    _classCallCheck(this, interviewqDetail);

    return _possibleConstructorReturn(this, (interviewqDetail.__proto__ || Object.getPrototypeOf(interviewqDetail)).apply(this, arguments));
  }

  _createClass(interviewqDetail, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_Detail2.default, { uri: 'api/interviewq/detail', besturi: 'api/interviewq/setbest', replyuri: 'api/interviewq/reply', that: this })
      );
    }
  }]);

  return interviewqDetail;
}(_react.Component);

exports.default = interviewqDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewqDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 43 */
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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _interviewq = __webpack_require__(65);

var _interviewq2 = _interopRequireDefault(_interviewq);

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
      activeKey: '1'
    };
    return _this;
  }

  _createClass(jobList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list' },
        _react2.default.createElement(
          _antd.Tabs,
          { ref: 'tabs', activeKey: this.state.activeKey, defaultActiveKey: '1', onChange: this.callback.bind(this) },
          _react2.default.createElement(
            TabPane,
            { tab: '\u9762\u8BD5\u9898', key: '1' },
            _react2.default.createElement(_interviewq2.default, { uri: 'api/interviewq/list', detailuri: 'interviewq/detail/' })
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u62DB\u8058\u4FE1\u606F', key: '2' },
            _react2.default.createElement(_interviewq2.default, { uri: 'api/job/list', detailuri: 'job/detail/' })
          )
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      this.setState({
        activeKey: key
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        activeKey: this.props.location.query.activeKey
      });
    }
  }]);

  return jobList;
}(_react2.default.Component);

exports.default = jobList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "jobList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _qandaDetailContent = __webpack_require__(19);

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
      CommentNodes: [1, 2, 3],
      tagData: [],
      isSelected: [],
      num: 0
    };
    // 获取数
    // this.getData();
    return _this;
  }

  _createClass(qandAdd, [{
    key: 'getData',
    value: function getData() {
      _axios2.default.post('/api/qanda/detail', {
        id: this.props.params.id
      }, function (res) {});
    }
  }, {
    key: 'selectTag',


    //选择不超过三个标签
    value: function selectTag(item, id) {
      if (this.state.num < 3) {
        if (this.state.isSelected[id].istrue) {
          this.state.isSelected[id].istrue = false;
          this.state.num = this.state.num - 1;
        } else {
          this.state.isSelected[id].istrue = true;
          this.state.num = this.state.num + 1;
        }
      } else {
        if (this.state.isSelected[id].istrue) {
          this.state.isSelected[id].istrue = false;
          this.state.num = this.state.num - 1;
        }
      }
      this.setState({
        isSelected: this.state.isSelected
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tagLi = this.state.tagData.map(function (value, index) {
        _this2.state.isSelected.push({ id: value.id, istrue: false, tag: value.title });
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'i',
            { className: _this2.state.isSelected[index].istrue ? "active" : "", tagId: index, onClick: _this2.selectTag.bind(_this2, value, index) },
            value.title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-detail' },
        _react2.default.createElement(
          'div',
          { className: 'section' },
          _react2.default.createElement(
            'p',
            { className: 'q-title' },
            '\u63D0\u95EE'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reply' },
            _react2.default.createElement(_antd.Input, { placeholder: '\u6807\u9898', ref: 'inputTitle' }),
            _react2.default.createElement(_antd.Input, { type: 'textarea', rows: 4, placeholder: '\u63D0\u95EE\u5185\u5BB9', ref: 'inputContent' }),
            _react2.default.createElement(
              'div',
              { className: 'select-question' },
              _react2.default.createElement(
                'p',
                null,
                '\u9009\u62E9\u95EE\u9898\u5206\u7C7B\uFF0C\u6700\u591A\u53EF\u4EE5\u90093\u4E2A'
              ),
              _react2.default.createElement(
                'ul',
                null,
                tagLi
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn-box' },
              _react2.default.createElement(
                _antd.Button,
                { type: 'primary', className: 'primary', onClick: this.reply.bind(this) },
                '\u53D1\u5E03'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'stopImage' },
          _react2.default.createElement('img', { src: '/build/images/stop_images.png' })
        )
      );
    }
  }, {
    key: 'reply',
    value: function reply() {
      var _this3 = this;

      var title = this.refs.inputTitle.refs.input.value;
      var content = this.refs.inputContent.refs.input.value;
      //取出问题标签
      var tags = [];
      this.state.isSelected.map(function (value, index) {
        if (value.istrue) {
          tags.push(value.tag);
        }
        return;
      });
      _axios2.default.post('/api/qanda/add', {
        tag: tags.join(','), // 问题标签 [字符串：必填] html, css, 原生js, angular, vue,其他等等
        title: title, //标题 [字符串：必填]
        content: content // 回帖内容：[字符串：必填]
      }, function (res) {
        var data = res.data.data;
        if (data.status == "ok") {
          _antd.message.success(data.msg, 1, function () {
            _this3.props.router.push("/qanda/list");
          });
        } else {
          _antd.message.error('提交失败，请重试');
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      _axios2.default.get('/api/classify/list', {}, function (res) {
        if (res.data.errcode == -1) {} else {
          console.log(res.data.data.subjects);
          _this4.setState({
            tagData: res.data.data.subjects
          });
        }
      });
    }
  }]);

  return qandAdd;
}(_react2.default.Component);

exports.default = qandAdd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaAdd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _Detail = __webpack_require__(11);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandaDetail = function (_Component) {
  _inherits(qandaDetail, _Component);

  function qandaDetail() {
    _classCallCheck(this, qandaDetail);

    return _possibleConstructorReturn(this, (qandaDetail.__proto__ || Object.getPrototypeOf(qandaDetail)).apply(this, arguments));
  }

  _createClass(qandaDetail, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_Detail2.default, { uri: 'api/qanda/detail', besturi: 'api/qanda/setbest', replyuri: 'api/qanda/reply', that: this })
      );
    }
  }]);

  return qandaDetail;
}(_react.Component);

exports.default = qandaDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 46 */
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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _tagFilter = __webpack_require__(20);

var _tagFilter2 = _interopRequireDefault(_tagFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qandaList = function (_React$Component) {
  _inherits(qandaList, _React$Component);

  function qandaList(props) {
    _classCallCheck(this, qandaList);

    var _this = _possibleConstructorReturn(this, (qandaList.__proto__ || Object.getPrototypeOf(qandaList)).call(this, props));

    _this.state = {
      data: [],
      curTag: "所有标签",
      count: 10,
      pagination: {
        pageSize: 6
      },
      current: 1,
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
        title: '点击/回帖',
        dataIndex: 'action',
        key: 'action'
      }],
      tagData: []
    };

    //调用方法获取数据
    _this.getData({
      start: 0,
      count: 10
    }, function (res) {
      // console.log(res.data.data);
      var listDa = _this.dataProcessingFirst(res);
      _this.setState({
        data: listDa,
        filterData: filterData,
        total: res.data.data.total
      });
    });
    return _this;
  }

  _createClass(qandaList, [{
    key: 'dataProcessingFirst',
    value: function dataProcessingFirst(res) {
      var listData = res.data.data.subjects.map(function (comment, index) {
        return {
          id: comment.id,
          key: index,
          title: comment.title,
          author: comment.author,
          tag: comment.tag,
          createDate: comment.createDate,
          action: comment.hits + '/' + comment.answers
        };
      });
      return listData;
    }

    //获取数据

  }, {
    key: 'getData',
    value: function getData(mes, cb) {
      _axios2.default.get('/api/qanda/list', mes, cb);
    }
  }, {
    key: 'changeTag',


    //通过点击标签来改变table中的数据源
    value: function changeTag(tag, id) {
      var _this2 = this;

      // console.log(this.state.data[0].tag)
      this.setState({
        current: 1,
        curTag: tag
      });
      this.state.curTag = tag;
      this.getData({
        // condition:tag=="所有标签"?'':tag,
        tag: tag == "所有标签" ? '' : tag,
        start: 0,
        count: 10
      }, function (res) {
        // console.log(res.data.data);
        var listDa = _this2.dataProcessingFirst(res);
        var filterData = _tagFilter2.default.dataProcessing(listDa, tag);

        _this2.setState({
          data: listDa,
          filterData: filterData,
          total: res.data.data.total
        });
      });
    }
    //分页更换数据

  }, {
    key: 'pageChange',
    value: function pageChange(page) {
      this.getData({
        // condition:this.state.curTag=="所有分类"?"":this.state.curTag,
        tag: this.state.curTag == "所有分类" ? "" : this.state.curTag,
        start: page * this.state.count,
        count: this.state.count
      });
      this.setState({
        current: page
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // let tagData = [{id:0,tag:"所有标签"},{id:1,tag:"PHP"},{id:2,tag:"HTML5"},{id:3,tag:"VUE"},{id:4,tag:"JS"}]
      var tagList = this.state.tagData.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'i',
            { id: index, className: _this3.state.curTag == item.title ? "active" : "", onClick: _this3.changeTag.bind(_this3, item.title, index) },
            item.title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list' },
        _react2.default.createElement(
          'div',
          { className: 'go-q' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/qanda/add' },
            _react2.default.createElement('img', { src: '/build/images/goq.png' })
          )
        ),
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
                _react2.default.createElement(
                  'i',
                  { id: 0, className: this.state.curTag == '所有标签' ? "active" : "", onClick: this.changeTag.bind(this, '所有标签', 0) },
                  '所有标签'
                )
              ),
              tagList
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.filterData, pagination: false }),
          _react2.default.createElement(_antd.Pagination, { defaultCurrent: 1, total: this.state.total ? this.state.total : 1, current: this.state.current, onChange: this.pageChange.bind(this) })
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      // console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      _axios2.default.get('/api/classify/list', {
        method: 'get',
        data: {
          start: 0,
          count: 10
        }
      }, function (res) {
        that.setState({
          tagData: res.data.data.subjects
        });
      });

      this.changeTag('所有标签');
    }
  }]);

  return qandaList;
}(_react2.default.Component);

exports.default = qandaList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "qandaList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _searchContent = __webpack_require__(66);

var _searchContent2 = _interopRequireDefault(_searchContent);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(3);

var _reactRedux = __webpack_require__(9);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;
var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;
var TabPane = _antd.Tabs.TabPane;

var SearchAction = function (_Component) {
  _inherits(SearchAction, _Component);

  function SearchAction(props) {
    _classCallCheck(this, SearchAction);

    var _this = _possibleConstructorReturn(this, (SearchAction.__proto__ || Object.getPrototypeOf(SearchAction)).call(this, props));

    _this.state = {
      keywords: '',

      AllTotal: 0,
      VideoTotal: 0,
      QandATotal: 0,
      JobTotal: 0,

      VideoData: [],
      QandAData: [],
      JobData: []
    };
    return _this;
  }

  _createClass(SearchAction, [{
    key: 'getSearchData',
    value: function getSearchData(keywords) {
      var that = this;
      _axios2.default.get('/api/search', {
        q: keywords,
        start: 0,
        count: 100
      }, function (res) {
        if (res.data.errcode != -1) {
          var data = res.data.data;
          var subjects = data.subjects;
          that.setState({
            VideoData: subjects.video.subjects,
            QandAData: subjects.qanda.subjects,
            JobData: subjects.job.subjects,

            AllTotal: data.total,
            VideoTotal: subjects.video.total,
            QandATotal: subjects.qanda.total,
            JobTotal: subjects.job.total
          });
        }
      });
    }
  }, {
    key: 'btnSub',
    value: function btnSub() {
      this.getSearchData(this.refs.input.input.refs.input.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'm-search' },
        _react2.default.createElement(
          'div',
          { className: 'search_input' },
          _react2.default.createElement(Search, {
            ref: 'input',
            defaultValue: this.props.keywords,
            onSearch: function onSearch(value) {
              _this2.props.onChangeKeywords({
                type: 'SET',
                keywords: value
              });
              setTimeout(function () {
                this.getSearchData.call(this);
              }.bind(_this2), 0);
            },
            prefix: _react2.default.createElement(_antd.Icon, { type: 'search', style: { fontSize: 27 } }),
            suffix: ''
          }),
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary',
              onClick: this.btnSub.bind(this)
            },
            '\u641C\u7D22'
          )
        ),
        _react2.default.createElement(
          _antd.Tabs,
          { defaultActiveKey: '1', size: 'small' },
          _react2.default.createElement(
            TabPane,
            { tab: '\u5168\u7AD9', key: '1' },
            _react2.default.createElement(_searchContent2.default, { parent: this, total: this.state.AllTotal, videototal: this.state.VideoTotal, qandatotal: this.state.QandATotal, jobtotal: this.state.JobTotal, videodata: this.state.VideoData, qandadata: this.state.QandAData, jobdata: this.state.JobData, tab: 'all' })
          ),
          this.state.VideoTotal > 0 ? _react2.default.createElement(
            TabPane,
            { tab: '\u89C6\u9891', key: '2' },
            _react2.default.createElement(_searchContent2.default, { parent: this, total: this.state.VideoTotal, videototal: this.state.VideoTotal, videodata: this.state.VideoData, title: '\u89C6\u9891', tab: 'video' })
          ) : null,
          this.state.QandATotal > 0 ? _react2.default.createElement(
            TabPane,
            { tab: '\u95EE\u7B54', key: '3' },
            _react2.default.createElement(_searchContent2.default, { parent: this, total: this.state.QandATotal, qandatotal: this.state.QandATotal, qandadata: this.state.QandAData, title: '\u95EE\u7B54', tab: 'qanda' })
          ) : null,
          this.state.JobTotal > 0 ? _react2.default.createElement(
            TabPane,
            { tab: '\u62DB\u8058', key: '4' },
            _react2.default.createElement(_searchContent2.default, { parent: this, total: this.state.JobTotal, jobtotal: this.state.JobTotal, jobdata: this.state.JobData, title: '\u62DB\u8058', tab: 'job' })
          ) : null
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.keywords != this.props.keywords) {
        this.refs.input.input.refs.input.value = this.props.keywords;
        this.getSearchData(this.props.keywords);
        this.state.keywords = this.props.keywords;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSearchData(this.props.keywords);
    }
  }]);

  return SearchAction;
}(_react.Component);

exports.default = (0, _reactRedux.connect)((0, _store2.default)().mapStateToProps, (0, _store2.default)().mapDispatchToProps)(SearchAction);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "search.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 48 */
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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

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
      count: 10,
      pagination: {
        pageSize: 6
      },
      columns: [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, record) {
          var url = "";
          switch (record.type) {
            case '视频':
              url = '/video/detail/';
              break;
            case '问答':
              url = '/qanda/detail/';
              break;
            case '面试题':
              url = '/interviewq/detail/';
              break;
            case '招聘信息':
              url = '/job/detail/';
              break;
          }
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: '' + url + record.id },
            text
          );
        }
      }, {
        title: '分类',
        dataIndex: 'type',
        key: 'type'
      }, {
        title: '创建时间',
        dataIndex: 'createDate',
        key: 'createDate'
      }]
    };

    // 获取数据
    _this.getData({
      // start: 0,
      // count: 10
    }, function (res) {
      var listDa = _this.dataProcessingFirst(res);
      _this.setState({
        data: listDa,
        filterData: listDa,
        total: res.data.data.total
      });
    });
    return _this;
  }

  _createClass(interviewq, [{
    key: 'typeFilter',
    value: function typeFilter(type) {
      return {
        'video': '视频',
        'qanda': '问答',
        'interviewq': '面试题',
        'job': '招聘信息'
      }[type];
    }
  }, {
    key: 'dataProcessingFirst',
    value: function dataProcessingFirst(res) {
      var _this2 = this;

      var listData = res.data.data.subjects.map(function (value, index) {
        return {
          id: value.id,
          key: index,
          title: value.title,
          type: _this2.typeFilter(value.type),
          createDate: value.createDate
        };
      });
      return listData;
    }
  }, {
    key: 'getData',
    value: function getData(mes, cb) {
      _axios2.default.get('/api/users/favorite', mes, cb);
    }
  }, {
    key: 'pageChange',


    //分页更换数据
    value: function pageChange(page) {
      var _this3 = this;

      this.getData({
        // start: page*this.state.count,
        // count: this.state.count
      }, function (res) {
        // 获取数据
        console.log(res);
        var listDa = _this3.dataProcessingFirst(res);
        _this3.setState({
          data: listDa,
          filterData: listDa,
          total: res.data.data.total
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-qanda-list m-favorite-list' },
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'cat' },
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              '\u6211\u7684\u6536\u85CF'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.filterData, pagination: false }),
          _react2.default.createElement(_antd.Pagination, { defaultCurrent: 1, total: this.state.total ? this.state.total : 1, onChange: this.pageChange.bind(this) })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return interviewq;
}(_react2.default.Component);

exports.default = interviewq;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Favorite.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axiosUtil = __webpack_require__(1);

var _axiosUtil2 = _interopRequireDefault(_axiosUtil);

var _reactRouter = __webpack_require__(3);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forgotpwd = function (_Component) {
	_inherits(Forgotpwd, _Component);

	function Forgotpwd(props) {
		_classCallCheck(this, Forgotpwd);

		var _this = _possibleConstructorReturn(this, (Forgotpwd.__proto__ || Object.getPrototypeOf(Forgotpwd)).call(this, props));

		_this.state = {
			username: _this.props.location.query.username
		};
		return _this;
	}

	//找回密码功能


	_createClass(Forgotpwd, [{
		key: 'fotpwd',
		value: function fotpwd() {
			//获取输入的邮箱地址
			var forgotemail = this.refs.forgotemail.value;
			var username = this.refs.username.value;

			var data = {
				username: username,
				email: forgotemail
			};

			_axiosUtil2.default.post('/api/users/forgotpwd', {
				username: data.username,
				email: data.email
			}, function (res) {
				if (res.data.errcode == -1) {
					_antd.message.info(res.data.errmsg);
				} else {
					//跳转登录页
					_reactRouter.hashHistory.push("/users/signin");
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'forgotpwd' },
				_react2.default.createElement(
					'p',
					null,
					'\u627E\u56DE\u5BC6\u7801'
				),
				_react2.default.createElement('input', { type: 'email', ref: 'username', placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }),
				_react2.default.createElement('span', { className: 'signin_xian' }),
				_react2.default.createElement('input', { type: 'email', ref: 'forgotemail', placeholder: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740' }),
				_react2.default.createElement('span', { className: 'signin_xian' }),
				_react2.default.createElement('input', { type: 'button', className: 'forgotpwd_btn', onClick: this.fotpwd.bind(this), value: '\u786E\u8BA4' })
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var that = this;
			this.refs.username.value = this.state.username;
			document.body.addEventListener('keypress', function (e) {
				if (e.keyCode == 13) {
					that.fotpwd();
				}
			});
		}
	}]);

	return Forgotpwd;
}(_react.Component);

exports.default = Forgotpwd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Forgotpwd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axiosUtil = __webpack_require__(1);

var _axiosUtil2 = _interopRequireDefault(_axiosUtil);

var _antd = __webpack_require__(2);

var _reactRouter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resetpwd = function (_Component) {
	_inherits(Resetpwd, _Component);

	function Resetpwd(props) {
		_classCallCheck(this, Resetpwd);

		return _possibleConstructorReturn(this, (Resetpwd.__proto__ || Object.getPrototypeOf(Resetpwd)).call(this, props));
	}

	//修改密码功能


	_createClass(Resetpwd, [{
		key: 'repwd',
		value: function repwd() {
			var newpwd = this.refs.newpwd.value;
			var confirmpwd = this.refs.confirmpwd.value;

			if (newpwd != '' && newpwd == confirmpwd) {
				var data = {
					newpwd: newpwd
				};

				_axiosUtil2.default.post('/api/users/getresettoken', {}, function (res) {
					var data = res.data.data;
					if (res.data.errcode != -1 && data.status == 'ok') {
						var token = data.token;
						_axiosUtil2.default.post('/api/users/resetpwd', {
							newpwd: data.newpwd,
							token: token
						}, function (res) {
							if (res.data.errcode == -1) {
								_antd.message.info(res.data.errmsg);
							} else {
								//跳转登录页
								_reactRouter.hashHistory.push("/users/signin");
							}
						});
					}
				});
			} else {
				_antd.message.info('新密码不能为空 或 两次输入不一致');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'resetpwd' },
				_react2.default.createElement(
					'p',
					null,
					'\u4FEE\u6539\u5BC6\u7801'
				),
				_react2.default.createElement('input', { type: 'password', ref: 'newpwd', placeholder: '\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801' }),
				_react2.default.createElement('span', { className: 'signin_xian' }),
				_react2.default.createElement('input', { type: 'password', ref: 'confirmpwd', placeholder: '\u91CD\u65B0\u8F93\u5165\u65B0\u5BC6\u7801' }),
				_react2.default.createElement('span', { className: 'signin_xian' }),
				_react2.default.createElement('input', { type: 'button', className: 'resetpwd_btn', onClick: this.repwd.bind(this), value: '\u786E\u8BA4' })
			);
		}
	}]);

	return Resetpwd;
}(_react.Component);

exports.default = Resetpwd;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Resetpwd.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _axiosUtil = __webpack_require__(1);

var _axiosUtil2 = _interopRequireDefault(_axiosUtil);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_Component) {
	_inherits(Signin, _Component);

	function Signin(props) {
		_classCallCheck(this, Signin);

		return _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));
	}

	//登录功能


	_createClass(Signin, [{
		key: "signin",
		value: function signin() {
			var username = this.refs.username.value;
			var password = this.refs.password.value;
			var data = {
				username: username,
				password: password
			};

			_axiosUtil2.default.get('/api/users/signin', {
				username: data.username,
				password: data.password
			}, function (res) {
				if (res.data.errcode == -1) {
					_antd.message.info(res.data.errmsg);
				} else {
					//跳转首页
					_reactRouter.hashHistory.push("/index/list");
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "signin" },
				_react2.default.createElement("input", { type: "email", ref: "username", placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D" }),
				_react2.default.createElement("span", { className: "signin_xian" }),
				_react2.default.createElement("input", { type: "password", ref: "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801" }),
				_react2.default.createElement("span", { className: "signin_xian" }),
				_react2.default.createElement("input", { type: "button", className: "signin_login", onClick: this.signin.bind(this), value: "\u767B\u5F55" }),
				_react2.default.createElement("b", null),
				_react2.default.createElement(
					"div",
					{ onClick: this.gotoForgot.bind(this) },
					"\u5FD8\u8BB0\u5BC6\u7801"
				)
			);
		}
	}, {
		key: "gotoForgot",
		value: function gotoForgot() {
			this.props.router.push("/users/forgotpwd?username=" + this.refs.username.value);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var that = this;
			document.body.addEventListener('keypress', function (e) {
				if (e.keyCode == 13) {
					that.signin();
				}
			});
		}
	}]);

	return Signin;
}(_react.Component);

exports.default = Signin;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Signin.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UsersHeader = __webpack_require__(69);

var _UsersHeader2 = _interopRequireDefault(_UsersHeader);

var _UsersFooter = __webpack_require__(68);

var _UsersFooter2 = _interopRequireDefault(_UsersFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-users' },
        _react2.default.createElement(_UsersHeader2.default, null),
        this.props.children,
        _react2.default.createElement(_UsersFooter2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return Users;
}(_react.Component);

exports.default = Users;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Users.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _ListContent = __webpack_require__(70);

var _ListContent2 = _interopRequireDefault(_ListContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      curTag: "所有分类",
      step: 0,
      count: 9,
      curPage: 1,
      listAllData: null,
      tagData: [],
      tagData2: [],

      isShownav: false
    };
    return _this;
  }

  //获取数据的封装


  _createClass(List, [{
    key: 'getList',
    value: function getList(param, cb) {
      _axios2.default.get('/api/video/list', {
        condition: param.condition,
        start: param.start,
        count: param.count
      }, function (res) {
        cb(res);
      });
    }

    //通过点击title,tag来改变其样式同时进行对数据的筛选

  }, {
    key: 'changeTag',
    value: function changeTag(tag, index) {
      var _this2 = this;

      this.setState({
        curTag: tag,
        curPage: 1
      });
      //需重新设置状态值，否则下面函数访问不到set后的状态值
      this.state.curTag = tag;
      this.getList({
        condition: tag == "所有分类" ? '' : tag,
        start: 0,
        count: this.state.count
      }, function (res) {
        _this2.setState({
          listAllData: res.data.data
        });
        _this2.state.listAllData = res.data.data;
        _this2.dataProcessing();
      });
    }
  }, {
    key: 'changeTag2',
    value: function changeTag2(step, index) {
      this.setState({
        step: index
      });
      this.state.step = index;
      this.dataProcessing();
    }

    //通过传入数据来渲染title,tag

  }, {
    key: 'titleData',
    value: function titleData(tagData, curTag, changeTag) {
      var _this3 = this;

      var tagList = tagData.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'i',
            { id: index, className: curTag == item.title ? "active" : "" || curTag == index ? "active" : "", onClick: changeTag.bind(_this3, item.title, index) },
            item.title
          )
        );
      });
      return tagList;
    }

    //页码改变重新渲染数据

  }, {
    key: 'pageChange',
    value: function pageChange(page, pageSize) {
      var that = this;
      this.setState({
        curPage: page
      });
      this.getList({
        condition: this.state.curTag == "所有分类" ? "" : this.state.curTag,
        start: (page - 1) * this.state.count,
        count: this.state.count
      }, function (res) {
        that.setState({
          listAllData: res.data.data,
          listData: res.data.data.subjects
        });
      });
    }

    //数据进行分类和阶段处理

  }, {
    key: 'dataProcessing',
    value: function dataProcessing() {
      var _this4 = this;

      // console.log(this.state.curTag)
      var htmlData = [];
      if (this.state.listAllData) {
        this.state.listAllData.subjects.map(function (value, index) {
          //分类：勾选所有分类时
          if (_this4.state.curTag == "所有分类") {
            //阶段：勾选所有阶段时
            if (_this4.state.step == 0) {
              htmlData.push(value);
            }
            //阶段：勾选其它阶段时
            else if (value.category.step == _this4.state.step) {
                htmlData.push(value);
              }
          }
          //分类：勾选其它分类时
          else if (value.category.tag == _this4.state.curTag) {
              //阶段：勾选所有阶段时
              if (_this4.state.step == 0) {
                htmlData.push(value);
              }
              //阶段：勾选其它阶段时
              else if (value.category.step == _this4.state.step) {
                  htmlData.push(value);
                }
            }
          return;
        });
      }
      this.setState({
        listData: htmlData
      });
    }

    //封装冒泡排序

  }, {
    key: 'rankData',
    value: function rankData(data, key) {
      for (var i = 0; i < data.length; i++) {
        for (var j = i; j < data.length; j++) {
          if (key == 2) {
            if (data[i].category.hot < data[j].category.hot) {
              var ls = data[i];
              data[i] = data[j];
              data[j] = ls;
            }
          } else {
            if (data[i].category.new < data[j].category.new) {
              var _ls = data[i];
              data[i] = data[j];
              data[j] = _ls;
            }
          }
        }
      }
    }

    //数据进行热度和新度排序处理

  }, {
    key: 'dataProcessingAgain',
    value: function dataProcessingAgain(key) {
      var newListData = [];
      var listData = this.state.listData;
      if (key == 2) {
        this.rankData(listData, key);
      } else {
        this.rankData(listData);
      }
      this.setState({
        listData: listData
      });
    }

    //Tab切换时的回调

  }, {
    key: 'callback',
    value: function callback(key) {
      this.dataProcessingAgain(key);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-video-list' },
        _react2.default.createElement(
          'div',
          { className: this.state.isShownav ? 'nav' : 'nav hidden' },
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
              this.titleData(this.state.tagData, this.state.curTag, this.changeTag)
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
            this.titleData(this.state.tagData2, this.state.step, this.changeTag2)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(
            _antd.Tabs,
            { defaultActiveKey: '1', onChange: this.callback.bind(this) },
            _react2.default.createElement(
              TabPane,
              { tab: '\u6700\u65B0', key: '1' },
              _react2.default.createElement(_ListContent2.default, { dataSource: this.state.listData })
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u6700\u70ED', key: '2' },
              _react2.default.createElement(_ListContent2.default, { dataSource: this.state.listData })
            )
          )
        ),
        _react2.default.createElement(_antd.Pagination, { total: this.state.listAllData ? this.state.listAllData.total : 1, current: this.state.curPage, onChange: this.pageChange.bind(this) })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      _axios2.default.get('/api/classify/list', {}, function (res) {
        if (res.data.errcode == -1) {
          _this5.state.isShownav = false;
        } else {
          _this5.setState({
            isShownav: true,
            tagData: [{ id: 0, title: "所有分类" }].concat(res.data.data.subjects)
          });
        }
      });

      _axios2.default.get('/api/stage/list', {}, function (res) {
        if (res.data.errcode == -1) {
          _this5.state.isShownav = false;
        } else {
          _this5.setState({
            isShownav: true,
            tagData2: [{ id: 0, title: "所有阶段" }].concat(res.data.data.subjects)
          });
        }
      });

      this.getList({
        condition: this.props.tag,
        start: 0,
        count: this.state.count
      }, function (res) {
        _this5.setState({
          listAllData: res.data.data,
          total: res.data.data.total,
          listData: res.data.data.subjects
        });
        _this5.dataProcessingAgain();
      });
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "List.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _Comment = __webpack_require__(16);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoDetail = function (_Component) {
  _inherits(VideoDetail, _Component);

  function VideoDetail(props) {
    _classCallCheck(this, VideoDetail);

    var _this = _possibleConstructorReturn(this, (VideoDetail.__proto__ || Object.getPrototypeOf(VideoDetail)).call(this, props));

    _this.state = {
      // columns: [],
      question: {},
      answers: null,
      CommentNodes: [1, 2, 3]
    };

    // 获取数据
    _this.getData();
    return _this;
  }

  _createClass(VideoDetail, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _axios2.default.post('/api/video/detail', {
        id: this.props.params.id
      }, function (res) {
        // console.log(res.data.data);
        _this2.setState({
          question: res.data.data,
          answers: res.data.data.QandA
        });
      });
    }
  }, {
    key: 'addFavorite',


    //点击收藏进行收藏帖子
    value: function addFavorite() {
      var type = this.props.router.location.pathname.split('/')[1];
      _axios2.default.post('/api/favorite', {
        id: this.props.params.id, // 内容id
        type: type
      }, function (res) {
        var data = res.data.data;
        if (data.status == "ok") {
          _antd.message.info(data.msg);
        } else {
          _antd.message.error('收藏失败，请重试');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'videoDetailSection' },
        _react2.default.createElement(
          'div',
          { className: 'video-area' },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'div',
              null,
              this.state.question.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'favorite', onClick: this.addFavorite.bind(this) },
              _react2.default.createElement(
                'span',
                null,
                '\u6536\u85CF'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'video' },
            _react2.default.createElement('img', { src: this.state.question.img })
          )
        ),
        _react2.default.createElement(_Comment2.default, { id: this.props.params.id, detailDatas: this.state.answers ? this.state.answers : null, uri: 'api/video/qanda', refreshGetData: this.getData.bind(this) })
      );
    }
  }]);

  return VideoDetail;
}(_react.Component);

exports.default = VideoDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "VideoDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var formats = __webpack_require__(13);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter
        ));
    }

    return keys.join(delimiter);
};


/***/ }),
/* 58 */
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

var _reactRedux = __webpack_require__(9);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      content: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'linkTo',
    value: function linkTo(that, value) {
      that.props.onChangeKeywords({
        type: 'SET',
        keywords: value
      });
      that.refs.input.input.refs.input.value = '';
      _reactRouter.hashHistory.push('/search/list');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'm-header' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement('img', { src: '/build/images/logo.png', alt: '\u950B\u5E06' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/index/list', activeClassName: 'active' },
              '\u9996\u9875'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/video', activeClassName: 'active' },
              '\u89C6\u9891'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/qanda', activeClassName: 'active' },
              '\u95EE\u7B54'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/job" || "/interviewq", activeClassName: 'active' },
              '\u62DB\u8058'
            )
          )
        ),
        _react2.default.createElement(
          _antd.Popover,
          { placement: 'topRight', title: '用户设置', content: this.state.content, trigger: 'click' },
          _react2.default.createElement(
            'div',
            { className: 'user', onClick: this.signin.bind(this) },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('img', { src: '/build/images/user-icon.png' })
            )
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'search' },
          _react2.default.createElement(Search, {
            ref: 'input',
            placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u5B57',
            onSearch: function onSearch(value) {
              return _this2.linkTo(_this2, value);
            }
          })
        )
      );
    }
  }, {
    key: 'signin',
    value: function signin() {
      var that = this;
      _axios2.default.get('/api/users/hassignin', {}, function (res) {
        var data = res.data.data;
        if (data.status == 'has') {
          if (data.roles == '0') {
            that.setState({
              content: _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  { onClick: that.gotoAdmin.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_admin.png' }),
                  '\u540E\u53F0\u7BA1\u7406'
                ),
                _react2.default.createElement(
                  'p',
                  { onClick: that.gotoResetPwd.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_set.png' }),
                  '\u4FEE\u6539\u5BC6\u7801'
                ),
                _react2.default.createElement(
                  'p',
                  { onClick: that.signout.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_signout.png' }),
                  '\u9000\u51FA\u767B\u5F55'
                )
              )
            });
          } else {
            that.setState({
              content: _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  { onClick: that.gotoFavorite.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_info.png' }),
                  '\u6211\u7684\u6536\u85CF'
                ),
                _react2.default.createElement(
                  'p',
                  { onClick: that.gotoResetPwd.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_set.png' }),
                  '\u4FEE\u6539\u5BC6\u7801'
                ),
                _react2.default.createElement(
                  'p',
                  { onClick: that.signout.bind(that) },
                  _react2.default.createElement('img', { src: '/build/images/user_signout.png' }),
                  '\u9000\u51FA\u767B\u5F55'
                )
              )
            });
          }
        } else {
          that.props.parent.props.router.push('/users/signin');
        }
      });
    }
  }, {
    key: 'gotoAdmin',
    value: function gotoAdmin() {
      this.props.parent.props.router.push('/admin');
    }
  }, {
    key: 'gotoResetPwd',
    value: function gotoResetPwd() {
      this.props.parent.props.router.push('/users/resetpwd');
    }
  }, {
    key: 'gotoFavorite',
    value: function gotoFavorite() {
      this.props.parent.props.router.push('/favorite');
    }
  }, {
    key: 'signout',
    value: function signout() {
      _axios2.default.get('/api/users/signout', {}, function (res) {
        if (res.data.errcode == -1) {
          _antd.message.info(res.data.errmsg);
        } else {
          if (res.data.data.status == 'ok') {
            //跳转登录页
            _reactRouter.hashHistory.push("/users/signin");
          } else {
            _antd.message.info(res.data.data.msg);
          }
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRedux.connect)((0, _store2.default)().mapStateToProps, (0, _store2.default)().mapDispatchToProps)(Header);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Header.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _reactRouter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminHeader = function (_Component) {
  _inherits(AdminHeader, _Component);

  function AdminHeader() {
    _classCallCheck(this, AdminHeader);

    return _possibleConstructorReturn(this, (AdminHeader.__proto__ || Object.getPrototypeOf(AdminHeader)).apply(this, arguments));
  }

  _createClass(AdminHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'm-adminHeader' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement('img', { src: '/build/images/logo.png', alt: '\u950B\u5E06logo' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'adminNav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/users', activeClassName: 'active' },
              '\u7528\u6237\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/users/list' },
                  '\u7528\u6237\u5217\u8868'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/users/add' },
                  '\u7528\u6237\u6DFB\u52A0'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/video', activeClassName: 'active' },
              '\u89C6\u9891\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/video/list' },
                  '\u5185\u5BB9\u5217\u8868'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/video/add' },
                  '\u5185\u5BB9\u6DFB\u52A0'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/job', activeClassName: 'active' },
              '\u62DB\u8058\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/job/list' },
                  '\u5185\u5BB9\u5217\u8868'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/job/add' },
                  '\u5185\u5BB9\u6DFB\u52A0'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/interviewq', activeClassName: 'active' },
              '\u9762\u8BD5\u9898\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/interviewq/list' },
                  '\u5185\u5BB9\u5217\u8868'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/interviewq/add' },
                  '\u5185\u5BB9\u6DFB\u52A0'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/other', activeClassName: 'active' },
              '\u5176\u4ED6\u7BA1\u7406'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/other/classify' },
                  '\u5206\u7C7B\u7BA1\u7406'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/other/stage' },
                  '\u9636\u6BB5\u7BA1\u7406'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/admin/other/city' },
                  '\u57CE\u5E02\u7BA1\u7406'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AdminHeader;
}(_react.Component);

exports.default = AdminHeader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "adminHeader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 60 */
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

var IndexBanner = function (_Component) {
  _inherits(IndexBanner, _Component);

  function IndexBanner() {
    _classCallCheck(this, IndexBanner);

    return _possibleConstructorReturn(this, (IndexBanner.__proto__ || Object.getPrototypeOf(IndexBanner)).apply(this, arguments));
  }

  _createClass(IndexBanner, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "banner" },
        _react2.default.createElement(
          "div",
          { className: "logo" },
          _react2.default.createElement(
            "a",
            { className: "banner_logo1" },
            _react2.default.createElement("img", { src: "/build/images/bannerlogo1.png" })
          ),
          _react2.default.createElement(
            "a",
            { className: "banner_logo2" },
            _react2.default.createElement("img", { src: "/build/images/bannerlogo2.png" })
          ),
          _react2.default.createElement(
            "a",
            { className: "banner_logo3" },
            _react2.default.createElement("img", { src: "/build/images/bannerlogo3.png" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "banner_word" },
          _react2.default.createElement("img", { src: "/build/images/fengfan.png" })
        ),
        _react2.default.createElement(
          "div",
          { className: "banner_slogan" },
          _react2.default.createElement(
            "span",
            null,
            "\u5343\u950B\u6559\u5B66",
            _react2.default.createElement(
              "i",
              null,
              "\u6301\u7EED"
            ),
            "\u670D\u52A1\u5E73\u53F0\xA0\xA0\xA0\xA0\u4E3A\u60A8\u7684\u6210\u529F\u4FDD\u9A7E\u62A4\u822A"
          )
        ),
        _react2.default.createElement("div", { className: "banner_line" })
      );
    }
  }]);

  return IndexBanner;
}(_react.Component);

exports.default = IndexBanner;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexBanner.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _indexNewsList = __webpack_require__(62);

var _indexNewsList2 = _interopRequireDefault(_indexNewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexNews = function (_Component) {
  _inherits(IndexNews, _Component);

  function IndexNews() {
    _classCallCheck(this, IndexNews);

    return _possibleConstructorReturn(this, (IndexNews.__proto__ || Object.getPrototypeOf(IndexNews)).apply(this, arguments));
  }

  _createClass(IndexNews, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'index_news' },
        _react2.default.createElement(_indexNewsList2.default, { title: '\u6700\u65B0\u95EE\u7B54', tabs: 'qanda', path: 'qanda/list' }),
        _react2.default.createElement(_indexNewsList2.default, { title: '\u6700\u65B0\u9762\u8BD5\u9898', tabs: 'interviewq', path: 'job/list?activeKey=1' }),
        _react2.default.createElement(_indexNewsList2.default, { title: '\u6700\u65B0\u62DB\u8058\u4FE1\u606F', tabs: 'job', path: 'job/list?activeKey=2' })
      );
    }
  }]);

  return IndexNews;
}(_react.Component);

exports.default = IndexNews;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexNews.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 62 */
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

var _indexCommon = __webpack_require__(18);

var _indexCommon2 = _interopRequireDefault(_indexCommon);

var _axios = __webpack_require__(71);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexNewsList = function (_Component) {
  _inherits(IndexNewsList, _Component);

  function IndexNewsList(props) {
    _classCallCheck(this, IndexNewsList);

    var _this = _possibleConstructorReturn(this, (IndexNewsList.__proto__ || Object.getPrototypeOf(IndexNewsList)).call(this, props));

    _this.state = {
      data: [{}]
    };
    return _this;
  }

  _createClass(IndexNewsList, [{
    key: 'push',
    value: function push(id) {
      _reactRouter.hashHistory.push('/' + this.props.tabs + '/detail/' + id);
    }
  }, {
    key: 'indexNewsList',
    value: function indexNewsList(list) {
      var _this2 = this;

      return list.map(function (value, index) {
        if (index < 8) {
          return _react2.default.createElement(
            'div',
            { className: 'news_content_list', onClick: _this2.push.bind(_this2, value.id) },
            _react2.default.createElement(
              'p',
              null,
              value.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'news_content_time' },
              value.createDate
            ),
            _react2.default.createElement('br', null)
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'news_list' },
        _react2.default.createElement(_indexCommon2.default, { title: this.props.title, path: this.props.path }),
        _react2.default.createElement(
          'div',
          { className: 'news_content' },
          this.indexNewsList(this.state.data)
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tabs = this.props.tabs;
      var that = this;
      _axios2.default.get({
        url: '/api/' + tabs + '/list?start=0&count=10',
        method: 'get',
        data: {
          start: 0,
          count: 10
        },
        callback: function callback(res) {
          if (res.data.errcode != -1) {
            that.setState({
              data: res.data.data.subjects
            });
          }
        }
      });
    }
  }]);

  return IndexNewsList;
}(_react.Component);

exports.default = IndexNewsList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexNewsList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _indexVideoList = __webpack_require__(64);

var _indexVideoList2 = _interopRequireDefault(_indexVideoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexVideo = function (_Component) {
  _inherits(IndexVideo, _Component);

  function IndexVideo() {
    _classCallCheck(this, IndexVideo);

    return _possibleConstructorReturn(this, (IndexVideo.__proto__ || Object.getPrototypeOf(IndexVideo)).apply(this, arguments));
  }

  _createClass(IndexVideo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'index_suggest' },
        _react2.default.createElement(_indexVideoList2.default, null)
      );
    }
  }]);

  return IndexVideo;
}(_react.Component);

exports.default = IndexVideo;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexVideo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 64 */
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

var _indexCommon = __webpack_require__(18);

var _indexCommon2 = _interopRequireDefault(_indexCommon);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _axios3 = __webpack_require__(12);

var _axios4 = _interopRequireDefault(_axios3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexVideoList = function (_Component) {
  _inherits(IndexVideoList, _Component);

  function IndexVideoList(props) {
    _classCallCheck(this, IndexVideoList);

    var _this = _possibleConstructorReturn(this, (IndexVideoList.__proto__ || Object.getPrototypeOf(IndexVideoList)).call(this, props));

    _this.state = {
      data: [{}]
    };
    return _this;
  }

  _createClass(IndexVideoList, [{
    key: 'push',
    value: function push(id) {
      _reactRouter.hashHistory.push('/video/detail/' + id);
    }
  }, {
    key: 'indexVideo',
    value: function indexVideo(list) {
      var _this2 = this;

      return list.map(function (value, index) {
        if (index < 6) {
          return _react2.default.createElement(
            'div',
            { onClick: _this2.push.bind(_this2, value.id), className: 'index_vedio' },
            _react2.default.createElement(
              'dl',
              null,
              _react2.default.createElement(
                'dt',
                null,
                _react2.default.createElement('img', { className: 'background', src: value.img }),
                _react2.default.createElement('img', { className: 'video', src: '/build/images/video.png' }),
                _react2.default.createElement('img', { className: 'corner', src: '/build/images/corner.png' })
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_title' },
                value.title
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_time' },
                value.createDate
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_decription' },
                value.summary
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'index_list' },
        _react2.default.createElement(_indexCommon2.default, { title: '\u63A8\u8350\u89C6\u9891', path: 'video/list' }),
        this.indexVideo(this.state.data)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      (0, _axios4.default)({
        url: "api/video/list?start=0&count=10",
        method: 'get',
        data: {
          start: 0,
          count: 10
        }
      }).then(function (res) {
        if (res.data.errcode != -1) {
          that.setState({
            data: res.data.data.subjects
          });
        }
      });
    }
  }]);

  return IndexVideoList;
}(_react.Component);

exports.default = IndexVideoList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "indexVideoList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 65 */
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

var _antd = __webpack_require__(2);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _tagFilter = __webpack_require__(20);

var _tagFilter2 = _interopRequireDefault(_tagFilter);

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
      curTag: "所有标签",
      tagData: [{ id: 0, title: "所有标签" }],
      count: 10,
      pagination: {
        pageSize: 6
      },
      columns: [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, record) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: '' + _this.props.detailuri + record.id },
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
        title: '点击/回帖',
        dataIndex: 'action',
        key: 'action'
      }]
    };
    // 获取数据
    _this.getData({
      start: 0,
      count: 10
    }, function (res) {
      var listDa = _this.dataProcessingFirst(res);
      _this.setState({
        data: listDa,
        filterData: listDa,
        total: res.data.data.total
      });
    });
    return _this;
  }

  _createClass(interviewq, [{
    key: 'dataProcessingFirst',
    value: function dataProcessingFirst(res) {
      var listData = res.data.data.subjects.map(function (comment, index) {
        return {
          id: comment.id,
          key: index,
          title: comment.title,
          author: comment.author,
          tag: comment.tag,
          createDate: comment.createDate,
          action: comment.hits + '/' + comment.answers
        };
      });
      return listData;
    }
  }, {
    key: 'getData',
    value: function getData(mes, cb) {
      _axios2.default.get(this.props.uri, mes, cb);
    }
  }, {
    key: 'changeTag',


    //通过点击标签来改变table中的数据源
    value: function changeTag(tag, index) {
      var _this2 = this;

      this.state.curTag = tag;
      this.setState({
        curTag: tag
      });
      this.getData({
        // condition:tag=="所有标签"?'':tag,
        tag: tag == "所有标签" ? '' : tag,
        start: 0,
        count: 10
      }, function (res) {
        var listDa = _this2.dataProcessingFirst(res);
        var filterData = _tagFilter2.default.dataProcessing(listDa, tag);
        _this2.setState({
          data: listDa,
          filterData: filterData,
          total: res.data.data.total
        });
      });
    }

    //分页更换数据

  }, {
    key: 'pageChange',
    value: function pageChange(page) {
      var _this3 = this;

      this.getData({
        // condition: this.state.curTag=="所有标签"?"":this.state.curTag,
        tag: this.state.curTag == "所有标签" ? "" : this.state.curTag,
        start: page * this.state.count,
        count: this.state.count
      }, function (res) {
        var listDa = _this3.dataProcessingFirst(res);
        var filterData = _tagFilter2.default.dataProcessing(listDa, tag);
        _this3.setState({
          data: listDa,
          filterData: filterData
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      // let tagData = [{id:0,tag:"所有标签"},{id:1,tag:"PHP"},{id:2,tag:"HTML5"},{id:3,tag:"VUE"},{id:4,tag:"JS"}]
      var tagList = this.state.tagData.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'i',
            { id: index, className: _this4.state.curTag == item.title ? "active" : "", onClick: _this4.changeTag.bind(_this4, item.title, index) },
            item.title
          )
        );
      });
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
              tagList
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_antd.Table, { columns: this.state.columns, dataSource: this.state.filterData, pagination: false }),
          _react2.default.createElement(_antd.Pagination, { defaultCurrent: 1, total: this.state.total ? this.state.total : 1, onChange: this.pageChange.bind(this) })
        )
      );
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      // console.log(key);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      _axios2.default.get('/api/classify/list', {
        method: 'get',
        data: {
          start: 0,
          count: 10
        }
      }, function (res) {
        that.setState({
          tagData: that.state.tagData.concat(res.data.data.subjects)
        });
      });
    }
  }]);

  return interviewq;
}(_react2.default.Component);

exports.default = interviewq;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "interviewq.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _searchList = __webpack_require__(67);

var _searchList2 = _interopRequireDefault(_searchList);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchContent = function (_Component) {
  _inherits(SearchContent, _Component);

  function SearchContent(props) {
    _classCallCheck(this, SearchContent);

    return _possibleConstructorReturn(this, (SearchContent.__proto__ || Object.getPrototypeOf(SearchContent)).call(this, props));
  }

  _createClass(SearchContent, [{
    key: 'setNewDataSource',
    value: function setNewDataSource(dataSource) {
      var NewDataSource = [];
      for (var i = 0; i < dataSource.length; i++) {
        NewDataSource.push({
          key: '' + (i + 1),
          name: '' + dataSource[i].createDate,
          title: '' + dataSource[i].title,
          id: '' + dataSource[i].id,
          city: '' + dataSource[i].city
        });
      }
      return NewDataSource;
    }
  }, {
    key: 'setColumns',
    value: function setColumns(str) {
      var _this2 = this;

      var columns = [{
        title: str,
        dataIndex: 'name',
        key: 'name',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            { className: 'search_inner', onClick: _this2.goto.bind(_this2, record.id, record.city, str) },
            _react2.default.createElement(
              'div',
              { className: 'search_title' },
              record.title
            ),
            _react2.default.createElement(
              'a',
              { className: 'search_article' },
              record.name
            )
          );
        }
      }];
      return columns;
    }
  }, {
    key: 'goto',
    value: function goto(id, city, str) {
      // console.log(this.props.parent);
      switch (str) {
        case '视频':
          this.props.parent.props.router.push('/video/detail/' + id);
          break;
        case '问答':
          this.props.parent.props.router.push('/qanda/detail/' + id);
          break;
        case '招聘':
          if (city) {
            this.props.parent.props.router.push('/job/detail/' + id);
          } else {
            this.props.parent.props.router.push('/interviewq/detail/' + id);
          }
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var that = this;
      return _react2.default.createElement(
        'div',
        { className: 'search_content' },
        _react2.default.createElement(
          'p',
          { className: 'search_total' },
          '\u5171\u627E\u5230',
          _react2.default.createElement(
            'span',
            null,
            this.props.total
          ),
          '\u4E2A\u76F8\u5173\u5185\u5BB9'
        ),
        function () {
          var total = that.props.videototal;
          if (total && total > 0) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_searchList2.default, { title: '\u89C6\u9891', data: that.setNewDataSource.call(that, that.props.videodata), columns: that.setColumns.call(that, '视频') })
            );
          }
        }(),
        function () {
          var total = that.props.qandatotal;
          if (total && total > 0) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_searchList2.default, { title: '\u95EE\u7B54', data: that.setNewDataSource.call(that, that.props.qandadata), columns: that.setColumns.call(that, '问答') })
            );
          }
        }(),
        function () {
          var total = that.props.jobtotal;
          if (total && total > 0) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_searchList2.default, { title: '\u62DB\u8058', data: that.setNewDataSource.call(that, that.props.jobdata), columns: that.setColumns.call(that, '招聘') })
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }]);

  return SearchContent;
}(_react.Component);

exports.default = SearchContent;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchContent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchList = function (_Component) {
  _inherits(SearchList, _Component);

  function SearchList(props) {
    _classCallCheck(this, SearchList);

    return _possibleConstructorReturn(this, (SearchList.__proto__ || Object.getPrototypeOf(SearchList)).call(this, props));
  }

  _createClass(SearchList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search_list' },
        _react2.default.createElement(_antd.Table, { columns: this.props.columns, dataSource: this.props.data })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return SearchList;
}(_react.Component);

exports.default = SearchList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 68 */
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

var UsersFooter = function (_Component) {
  _inherits(UsersFooter, _Component);

  function UsersFooter() {
    _classCallCheck(this, UsersFooter);

    return _possibleConstructorReturn(this, (UsersFooter.__proto__ || Object.getPrototypeOf(UsersFooter)).apply(this, arguments));
  }

  _createClass(UsersFooter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "usersfooter" },
        _react2.default.createElement(
          "p",
          null,
          "\u5343\u950B\u6559\u5B66\u6301\u7EED\u670D\u52A1\u5E73\u53F0\xA0\xA0\xA0\xA0\u4E3A\u60A8\u7684\u6210\u529F\u4FDD\u9A7E\u62A4\u822A"
        ),
        _react2.default.createElement(
          "div",
          { className: "users_education" },
          _react2.default.createElement(
            "section",
            null,
            _react2.default.createElement("img", { src: "/build/images/login_feng.png" })
          ),
          _react2.default.createElement("img", { src: "/build/images/login_niao.png" }),
          _react2.default.createElement("img", { src: "/build/images/login_niao.png" }),
          _react2.default.createElement("img", { src: "/build/images/login_qfjy.png" }),
          _react2.default.createElement("img", { src: "/build/images/login_zimu.png" }),
          _react2.default.createElement("img", { src: "/build/images/login_t.png" }),
          _react2.default.createElement("img", { src: "/build/images/login_m.png" })
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return UsersFooter;
}(_react.Component);

exports.default = UsersFooter;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "UsersFooter.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 69 */
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

var UsersHeader = function (_Component) {
  _inherits(UsersHeader, _Component);

  function UsersHeader() {
    _classCallCheck(this, UsersHeader);

    return _possibleConstructorReturn(this, (UsersHeader.__proto__ || Object.getPrototypeOf(UsersHeader)).apply(this, arguments));
  }

  _createClass(UsersHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "usersheader" },
        _react2.default.createElement(
          "div",
          { className: "logo_box" },
          _react2.default.createElement("img", { src: "/build/images/login_logo.png" }),
          _react2.default.createElement("img", { src: "/build/images/logo_left.png" }),
          _react2.default.createElement("img", { src: "/build/images/logo_right.png" })
        ),
        _react2.default.createElement(
          "div",
          { className: "logo_name" },
          _react2.default.createElement("img", { src: "/build/images/login_fengfan.png" })
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return UsersHeader;
}(_react.Component);

exports.default = UsersHeader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "UsersHeader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 70 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListContent = function (_Component) {
  _inherits(ListContent, _Component);

  function ListContent(props) {
    _classCallCheck(this, ListContent);

    var _this = _possibleConstructorReturn(this, (ListContent.__proto__ || Object.getPrototypeOf(ListContent)).call(this, props));

    _this.state = {
      listData: []
    };
    return _this;
  }

  _createClass(ListContent, [{
    key: 'render',
    value: function render() {
      var List = null;
      if (this.props.dataSource) {
        List = this.props.dataSource.map(function (value, index) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: "/video/detail/" + value.id, className: 'video_wrap' },
            _react2.default.createElement(
              'dl',
              null,
              _react2.default.createElement(
                'dt',
                null,
                _react2.default.createElement('img', { className: 'background', src: value.img }),
                _react2.default.createElement('img', { className: 'video', src: '/build/images/video.png' }),
                _react2.default.createElement('img', { className: 'corner', src: '/build/images/corner.png' })
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_title' },
                value.title
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_time' },
                value.createDate
              ),
              _react2.default.createElement(
                'dd',
                { className: 'vedio_decription' },
                value.summary
              )
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'm-list-content' },
        List
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return ListContent;
}(_react.Component);

exports.default = ListContent;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ListContent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(param) {
    (0, _axios2.default)({
      url: param.url,
      method: param.method,
      data: param.data
    }).then(function (res) {
      param.callback(res);
    });
  }
}; //axios调取数据的公共方法

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "axios.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(3);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(9);

var _Index = __webpack_require__(22);

var _Index2 = _interopRequireDefault(_Index);

var _indexList = __webpack_require__(40);

var _indexList2 = _interopRequireDefault(_indexList);

var _List = __webpack_require__(53);

var _List2 = _interopRequireDefault(_List);

var _VideoDetail = __webpack_require__(54);

var _VideoDetail2 = _interopRequireDefault(_VideoDetail);

var _qandaList = __webpack_require__(46);

var _qandaList2 = _interopRequireDefault(_qandaList);

var _qandaDetail = __webpack_require__(45);

var _qandaDetail2 = _interopRequireDefault(_qandaDetail);

var _qandaAdd = __webpack_require__(44);

var _qandaAdd2 = _interopRequireDefault(_qandaAdd);

var _admin = __webpack_require__(23);

var _admin2 = _interopRequireDefault(_admin);

var _interviewqList = __webpack_require__(25);

var _interviewqList2 = _interopRequireDefault(_interviewqList);

var _interviewqAdd = __webpack_require__(24);

var _interviewqAdd2 = _interopRequireDefault(_interviewqAdd);

var _interviewqUpdate = __webpack_require__(26);

var _interviewqUpdate2 = _interopRequireDefault(_interviewqUpdate);

var _jobList = __webpack_require__(28);

var _jobList2 = _interopRequireDefault(_jobList);

var _jobAdd = __webpack_require__(27);

var _jobAdd2 = _interopRequireDefault(_jobAdd);

var _jobUpdate = __webpack_require__(29);

var _jobUpdate2 = _interopRequireDefault(_jobUpdate);

var _videoList = __webpack_require__(37);

var _videoList2 = _interopRequireDefault(_videoList);

var _videoAdd = __webpack_require__(36);

var _videoAdd2 = _interopRequireDefault(_videoAdd);

var _videoUpdate = __webpack_require__(38);

var _videoUpdate2 = _interopRequireDefault(_videoUpdate);

var _classify = __webpack_require__(31);

var _classify2 = _interopRequireDefault(_classify);

var _stage = __webpack_require__(32);

var _stage2 = _interopRequireDefault(_stage);

var _city = __webpack_require__(30);

var _city2 = _interopRequireDefault(_city);

var _userAdd = __webpack_require__(33);

var _userAdd2 = _interopRequireDefault(_userAdd);

var _userList = __webpack_require__(34);

var _userList2 = _interopRequireDefault(_userList);

var _userUpdate = __webpack_require__(35);

var _userUpdate2 = _interopRequireDefault(_userUpdate);

var _search = __webpack_require__(47);

var _search2 = _interopRequireDefault(_search);

var _interviewqDetail = __webpack_require__(42);

var _interviewqDetail2 = _interopRequireDefault(_interviewqDetail);

var _jobList3 = __webpack_require__(43);

var _jobList4 = _interopRequireDefault(_jobList3);

var _JobDetail = __webpack_require__(41);

var _JobDetail2 = _interopRequireDefault(_JobDetail);

var _Users = __webpack_require__(52);

var _Users2 = _interopRequireDefault(_Users);

var _Signin = __webpack_require__(51);

var _Signin2 = _interopRequireDefault(_Signin);

var _Forgotpwd = __webpack_require__(49);

var _Forgotpwd2 = _interopRequireDefault(_Forgotpwd);

var _Resetpwd = __webpack_require__(50);

var _Resetpwd2 = _interopRequireDefault(_Resetpwd);

var _Favorite = __webpack_require__(48);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Home = __webpack_require__(39);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(21);

//index.js

//index 主页面

//video 视频

//qanda 问答

//admin 后台


//search 搜索


//job 招聘

// import QandaDetail from './components/qanda/qandaDetail'

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _store2.default)().store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _Index2.default },
      _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/home' }),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'index' },
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _indexList2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'video' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/video/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _List2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _VideoDetail2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'qanda' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/qanda/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _qandaList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _qandaDetail2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _qandaAdd2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'job' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/job/list?activeKey=1' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _jobList4.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _JobDetail2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'interviewq' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/job/list?activeKey=1' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _interviewqDetail2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'search' },
        _react2.default.createElement(_reactRouter.Route, { path: 'list(/:id)', component: _search2.default })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: 'favorite', component: _Favorite2.default })
    ),
    _react2.default.createElement(
      _reactRouter.Router,
      { path: 'admin', component: _admin2.default },
      _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/users' }),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'users' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/users/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _userList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _userAdd2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'update/:id', component: _userUpdate2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'video' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/video/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _videoList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _videoAdd2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'update/:id', component: _videoUpdate2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'job' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/job/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _jobList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _jobAdd2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'update/:id', component: _jobUpdate2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'interviewq' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/interviewq/list' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _interviewqList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'add', component: _interviewqAdd2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'update/:id', component: _interviewqUpdate2.default })
      ),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: 'other' },
        _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/admin/other/classify' }),
        _react2.default.createElement(_reactRouter.Route, { path: 'classify', component: _classify2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'stage', component: _stage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'city', component: _city2.default })
      )
    ),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/users', component: _Users2.default },
      _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'signin' }),
      _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _Signin2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'forgotpwd', component: _Forgotpwd2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'resetpwd', component: _Resetpwd2.default })
    )
  )
), document.getElementById('root'));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Felix/Desktop/fengfan/dev/fe/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })
/******/ ]);