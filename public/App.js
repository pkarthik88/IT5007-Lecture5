"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);
  var _super = _createSuper(IssueFilter);
  function IssueFilter() {
    _classCallCheck(this, IssueFilter);
    return _super.apply(this, arguments);
  }
  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      var systemnameinfilter = this.props.name;
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue filter in ", systemnameinfilter, ".");
    }
  }]);
  return IssueFilter;
}(React.Component);
var IssueTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueTable, _React$Component2);
  var _super2 = _createSuper(IssueTable);
  function IssueTable() {
    _classCallCheck(this, IssueTable);
    return _super2.apply(this, arguments);
  }
  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var systemnameintable = this.props.name;
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a table of issues in ", systemnameintable, ".");
    }
  }]);
  return IssueTable;
}(React.Component);
var IssueAdd = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueAdd, _React$Component3);
  var _super3 = _createSuper(IssueAdd);
  function IssueAdd() {
    _classCallCheck(this, IssueAdd);
    return _super3.apply(this, arguments);
  }
  _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      var systemnameinadd = this.props.name;
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an issue in ", systemnameinadd, ".");
    }
  }]);
  return IssueAdd;
}(React.Component);
var IssueList = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueList, _React$Component4);
  var _super4 = _createSuper(IssueList);
  function IssueList() {
    _classCallCheck(this, IssueList);
    return _super4.apply(this, arguments);
  }
  _createClass(IssueList, [{
    key: "render",
    value: function render() {
      var systemname = "IT5007 Bug Tracker";
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, systemname), /*#__PURE__*/React.createElement(IssueFilter, {
        name: systemname
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        name: systemname
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        name: systemname
      }), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);
  return IssueList;
}(React.Component);
var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));