(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _js_snippets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/snippets.js */ "./assets/js/snippets.js");
/* harmony import */ var _js_snippets_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_snippets_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_clipboard_password_generator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/clipboard-password-generator.js */ "./assets/js/clipboard-password-generator.js");
/* harmony import */ var _js_clipboard_password_generator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_clipboard_password_generator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_jquery_mask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/jquery.mask.js */ "./assets/js/jquery.mask.js");
/* harmony import */ var _js_jquery_mask_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_mask_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_veterinarian_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/veterinarian/create.js */ "./assets/js/veterinarian/create.js");
/* harmony import */ var _js_veterinarian_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_veterinarian_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_charts_chart_vaccines_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/charts/chart-vaccines.js */ "./assets/js/charts/chart-vaccines.js");
/* harmony import */ var _js_charts_chart_vaccines_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_charts_chart_vaccines_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/global.scss */ "./assets/styles/global.scss");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;








/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/charts/chart-vaccines.js":
/*!********************************************!*\
  !*** ./assets/js/charts/chart-vaccines.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).ready(function () {
  $.ajax({
    url: '/charts/vaccines',
    type: 'GET',
    dataType: 'json',
    timeout: 20000,
    success: function success(response) {
      var data = {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [{
          label: 'Dataset 1',
          data: response.vaccines,
          borderColor: [],
          backgroundColor: []
        }]
      };
      var config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart'
            }
          }
        }
      };
      new Chart(document.getElementById('vaccinesChart'), config);
    }
  });
});

/***/ }),

/***/ "./assets/js/clipboard-password-generator.js":
/*!***************************************************!*\
  !*** ./assets/js/clipboard-password-generator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
$(document).ready(function () {
  $(".copy-to-clipboard").click(function () {
    var campo = $("#user_password");
    campo.select();
    document.execCommand("copy");
  });
  $('#btn-generate-password').click(function () {
    var passwordSize = 10;
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    var password = "";
    password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
    password += getRandomChar("0123456789");
    password += getRandomChar("!@#$%^&*()-_=+");
    for (var i = 0; i < passwordSize - 4; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    password = shuffleString(password);
    document.getElementById('user_password').value = password;
  });
  $('.icon-eye-password').click(function () {
    var passwordField = document.getElementById('user_password');
    var iconElement = event.target;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      iconElement.classList.remove('fa-eye');
      iconElement.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      iconElement.classList.remove('fa-eye-slash');
      iconElement.classList.add('fa-eye');
    }
  });
  function getRandomChar(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  function shuffleString(str) {
    var shuffled = '';
    str = str.split('');
    while (str.length > 0) {
      shuffled += str.splice(Math.floor(Math.random() * str.length), 1);
    }
    return shuffled;
  }
});

/***/ }),

/***/ "./assets/js/jquery.mask.js":
/*!**********************************!*\
  !*** ./assets/js/jquery.mask.js ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Mask = function Mask(el, mask, options) {
    var p = {
      invalid: [],
      getCaret: function getCaret() {
        try {
          var sel,
            pos = 0,
            ctrl = el.get(0),
            dSel = document.selection,
            cSelStart = ctrl.selectionStart;

          // IE Support
          if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
            sel = dSel.createRange();
            sel.moveStart('character', -p.val().length);
            pos = sel.text.length;
          }
          // Firefox support
          else if (cSelStart || cSelStart === '0') {
            pos = cSelStart;
          }
          return pos;
        } catch (e) {}
      },
      setCaret: function setCaret(pos) {
        try {
          if (el.is(':focus')) {
            var range,
              ctrl = el.get(0);

            // Firefox, WebKit, etc..
            if (ctrl.setSelectionRange) {
              ctrl.setSelectionRange(pos, pos);
            } else {
              // IE
              range = ctrl.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
          }
        } catch (e) {}
      },
      events: function events() {
        el.on('keydown.mask', function (e) {
          el.data('mask-keycode', e.keyCode || e.which);
          el.data('mask-previus-value', el.val());
          el.data('mask-previus-caret-pos', p.getCaret());
          p.maskDigitPosMapOld = p.maskDigitPosMap;
        }).on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour).on('paste.mask drop.mask', function () {
          setTimeout(function () {
            el.keydown().keyup();
          }, 100);
        }).on('change.mask', function () {
          el.data('changed', true);
        }).on('blur.mask', function () {
          if (oldValue !== p.val() && !el.data('changed')) {
            el.trigger('change');
          }
          el.data('changed', false);
        })
        // it's very important that this callback remains in this position
        // otherwhise oldValue it's going to work buggy
        .on('blur.mask', function () {
          oldValue = p.val();
        })
        // select all text on focus
        .on('focus.mask', function (e) {
          if (options.selectOnFocus === true) {
            $(e.target).select();
          }
        })
        // clear the value if it not complete the mask
        .on('focusout.mask', function () {
          if (options.clearIfNotMatch && !regexMask.test(p.val())) {
            p.val('');
          }
        });
      },
      getRegexMask: function getRegexMask() {
        var maskChunks = [],
          translation,
          pattern,
          optional,
          recursive,
          oRecursive,
          r;
        for (var i = 0; i < mask.length; i++) {
          translation = jMask.translation[mask.charAt(i)];
          if (translation) {
            pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
            optional = translation.optional;
            recursive = translation.recursive;
            if (recursive) {
              maskChunks.push(mask.charAt(i));
              oRecursive = {
                digit: mask.charAt(i),
                pattern: pattern
              };
            } else {
              maskChunks.push(!optional && !recursive ? pattern : pattern + '?');
            }
          } else {
            maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
          }
        }
        r = maskChunks.join('');
        if (oRecursive) {
          r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?').replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
        }
        return new RegExp(r);
      },
      destroyEvents: function destroyEvents() {
        el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
      },
      val: function val(v) {
        var isInput = el.is('input'),
          method = isInput ? 'val' : 'text',
          r;
        if (arguments.length > 0) {
          if (el[method]() !== v) {
            el[method](v);
          }
          r = el;
        } else {
          r = el[method]();
        }
        return r;
      },
      calculateCaretPosition: function calculateCaretPosition(oldVal) {
        var newVal = p.getMasked(),
          caretPosNew = p.getCaret();
        if (oldVal !== newVal) {
          var caretPosOld = el.data('mask-previus-caret-pos') || 0,
            newValL = newVal.length,
            oldValL = oldVal.length,
            maskDigitsBeforeCaret = 0,
            maskDigitsAfterCaret = 0,
            maskDigitsBeforeCaretAll = 0,
            maskDigitsBeforeCaretAllOld = 0,
            i = 0;
          for (i = caretPosNew; i < newValL; i++) {
            if (!p.maskDigitPosMap[i]) {
              break;
            }
            maskDigitsAfterCaret++;
          }
          for (i = caretPosNew - 1; i >= 0; i--) {
            if (!p.maskDigitPosMap[i]) {
              break;
            }
            maskDigitsBeforeCaret++;
          }
          for (i = caretPosNew - 1; i >= 0; i--) {
            if (p.maskDigitPosMap[i]) {
              maskDigitsBeforeCaretAll++;
            }
          }
          for (i = caretPosOld - 1; i >= 0; i--) {
            if (p.maskDigitPosMapOld[i]) {
              maskDigitsBeforeCaretAllOld++;
            }
          }

          // if the cursor is at the end keep it there
          if (caretPosNew > oldValL) {
            caretPosNew = newValL * 10;
          } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
            if (!p.maskDigitPosMapOld[caretPosNew]) {
              var caretPos = caretPosNew;
              caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
              caretPosNew -= maskDigitsBeforeCaret;
              if (p.maskDigitPosMap[caretPosNew]) {
                caretPosNew = caretPos;
              }
            }
          } else if (caretPosNew > caretPosOld) {
            caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
            caretPosNew += maskDigitsAfterCaret;
          }
        }
        return caretPosNew;
      },
      behaviour: function behaviour(e) {
        e = e || window.event;
        p.invalid = [];
        var keyCode = el.data('mask-keycode');
        if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
          var newVal = p.getMasked(),
            caretPos = p.getCaret(),
            oldVal = el.data('mask-previus-value') || '';

          // this is a compensation to devices/browsers that don't compensate
          // caret positioning the right way
          setTimeout(function () {
            p.setCaret(p.calculateCaretPosition(oldVal));
          }, $.jMaskGlobals.keyStrokeCompensation);
          p.val(newVal);
          p.setCaret(caretPos);
          return p.callbacks(e);
        }
      },
      getMasked: function getMasked(skipMaskChars, val) {
        var buf = [],
          value = val === undefined ? p.val() : val + '',
          m = 0,
          maskLen = mask.length,
          v = 0,
          valLen = value.length,
          offset = 1,
          addMethod = 'push',
          resetPos = -1,
          maskDigitCount = 0,
          maskDigitPosArr = [],
          lastMaskChar,
          check;
        if (options.reverse) {
          addMethod = 'unshift';
          offset = -1;
          lastMaskChar = 0;
          m = maskLen - 1;
          v = valLen - 1;
          check = function check() {
            return m > -1 && v > -1;
          };
        } else {
          lastMaskChar = maskLen - 1;
          check = function check() {
            return m < maskLen && v < valLen;
          };
        }
        var lastUntranslatedMaskChar;
        while (check()) {
          var maskDigit = mask.charAt(m),
            valDigit = value.charAt(v),
            translation = jMask.translation[maskDigit];
          if (translation) {
            if (valDigit.match(translation.pattern)) {
              buf[addMethod](valDigit);
              if (translation.recursive) {
                if (resetPos === -1) {
                  resetPos = m;
                } else if (m === lastMaskChar && m !== resetPos) {
                  m = resetPos - offset;
                }
                if (lastMaskChar === resetPos) {
                  m -= offset;
                }
              }
              m += offset;
            } else if (valDigit === lastUntranslatedMaskChar) {
              // matched the last untranslated (raw) mask character that we encountered
              // likely an insert offset the mask character from the last entry; fall
              // through and only increment v
              maskDigitCount--;
              lastUntranslatedMaskChar = undefined;
            } else if (translation.optional) {
              m += offset;
              v -= offset;
            } else if (translation.fallback) {
              buf[addMethod](translation.fallback);
              m += offset;
              v -= offset;
            } else {
              p.invalid.push({
                p: v,
                v: valDigit,
                e: translation.pattern
              });
            }
            v += offset;
          } else {
            if (!skipMaskChars) {
              buf[addMethod](maskDigit);
            }
            if (valDigit === maskDigit) {
              maskDigitPosArr.push(v);
              v += offset;
            } else {
              lastUntranslatedMaskChar = maskDigit;
              maskDigitPosArr.push(v + maskDigitCount);
              maskDigitCount++;
            }
            m += offset;
          }
        }
        var lastMaskCharDigit = mask.charAt(lastMaskChar);
        if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
          buf.push(lastMaskCharDigit);
        }
        var newVal = buf.join('');
        p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
        return newVal;
      },
      mapMaskdigitPositions: function mapMaskdigitPositions(newVal, maskDigitPosArr, valLen) {
        var maskDiff = options.reverse ? newVal.length - valLen : 0;
        p.maskDigitPosMap = {};
        for (var i = 0; i < maskDigitPosArr.length; i++) {
          p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
        }
      },
      callbacks: function callbacks(e) {
        var val = p.val(),
          changed = val !== oldValue,
          defaultArgs = [val, e, el, options],
          callback = function callback(name, criteria, args) {
            if (typeof options[name] === 'function' && criteria) {
              options[name].apply(this, args);
            }
          };
        callback('onChange', changed === true, defaultArgs);
        callback('onKeyPress', changed === true, defaultArgs);
        callback('onComplete', val.length === mask.length, defaultArgs);
        callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
      }
    };
    el = $(el);
    var jMask = this,
      oldValue = p.val(),
      regexMask;
    mask = typeof mask === 'function' ? mask(p.val(), undefined, el, options) : mask;

    // public methods
    jMask.mask = mask;
    jMask.options = options;
    jMask.remove = function () {
      var caret = p.getCaret();
      if (jMask.options.placeholder) {
        el.removeAttr('placeholder');
      }
      if (el.data('mask-maxlength')) {
        el.removeAttr('maxlength');
      }
      p.destroyEvents();
      p.val(jMask.getCleanVal());
      p.setCaret(caret);
      return el;
    };

    // get value without mask
    jMask.getCleanVal = function () {
      return p.getMasked(true);
    };

    // get masked value without the value being in the input or element
    jMask.getMaskedVal = function (val) {
      return p.getMasked(false, val);
    };
    jMask.init = function (onlyMask) {
      onlyMask = onlyMask || false;
      options = options || {};
      jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
      jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
      jMask.translation = $.extend({}, $.jMaskGlobals.translation, options.translation);
      jMask = $.extend(true, {}, jMask, options);
      regexMask = p.getRegexMask();
      if (onlyMask) {
        p.events();
        p.val(p.getMasked());
      } else {
        if (options.placeholder) {
          el.attr('placeholder', options.placeholder);
        }

        // this is necessary, otherwise if the user submit the form
        // and then press the "back" button, the autocomplete will erase
        // the data. Works fine on IE9+, FF, Opera, Safari.
        if (el.data('mask')) {
          el.attr('autocomplete', 'off');
        }

        // detect if is necessary let the user type freely.
        // for is a lot faster than forEach.
        for (var i = 0, maxlength = true; i < mask.length; i++) {
          var translation = jMask.translation[mask.charAt(i)];
          if (translation && translation.recursive) {
            maxlength = false;
            break;
          }
        }
        if (maxlength) {
          el.attr('maxlength', mask.length).data('mask-maxlength', true);
        }
        p.destroyEvents();
        p.events();
        var caret = p.getCaret();
        p.val(p.getMasked());
        p.setCaret(caret);
      }
    };
    jMask.init(!el.is('input'));
  };
  $.maskWatchers = {};
  var HTMLAttributes = function HTMLAttributes() {
      var input = $(this),
        options = {},
        prefix = 'data-mask-',
        mask = input.attr('data-mask');
      if (input.attr(prefix + 'reverse')) {
        options.reverse = true;
      }
      if (input.attr(prefix + 'clearifnotmatch')) {
        options.clearIfNotMatch = true;
      }
      if (input.attr(prefix + 'selectonfocus') === 'true') {
        options.selectOnFocus = true;
      }
      if (notSameMaskObject(input, mask, options)) {
        return input.data('mask', new Mask(this, mask, options));
      }
    },
    notSameMaskObject = function notSameMaskObject(field, mask, options) {
      options = options || {};
      var maskObject = $(field).data('mask'),
        stringify = JSON.stringify,
        value = $(field).val() || $(field).text();
      try {
        if (typeof mask === 'function') {
          mask = mask(value);
        }
        return _typeof(maskObject) !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
      } catch (e) {}
    },
    eventSupported = function eventSupported(eventName) {
      var el = document.createElement('div'),
        isSupported;
      eventName = 'on' + eventName;
      isSupported = eventName in el;
      if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] === 'function';
      }
      el = null;
      return isSupported;
    };
  $.fn.mask = function (mask, options) {
    options = options || {};
    var selector = this.selector,
      globals = $.jMaskGlobals,
      interval = globals.watchInterval,
      watchInputs = options.watchInputs || globals.watchInputs,
      maskFunction = function maskFunction() {
        if (notSameMaskObject(this, mask, options)) {
          return $(this).data('mask', new Mask(this, mask, options));
        }
      };
    $(this).each(maskFunction);
    if (selector && selector !== '' && watchInputs) {
      clearInterval($.maskWatchers[selector]);
      $.maskWatchers[selector] = setInterval(function () {
        $(document).find(selector).each(maskFunction);
      }, interval);
    }
    return this;
  };
  $.fn.masked = function (val) {
    return this.data('mask').getMaskedVal(val);
  };
  $.fn.unmask = function () {
    clearInterval($.maskWatchers[this.selector]);
    delete $.maskWatchers[this.selector];
    return this.each(function () {
      var dataMask = $(this).data('mask');
      if (dataMask) {
        dataMask.remove().removeData('mask');
      }
    });
  };
  $.fn.cleanVal = function () {
    return this.data('mask').getCleanVal();
  };
  $.applyDataMask = function (selector) {
    selector = selector || $.jMaskGlobals.maskElements;
    var $selector = selector instanceof $ ? selector : $(selector);
    $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
  };
  var globals = {
    maskElements: 'input,td,span,div',
    dataMaskAttr: '[data-mask]',
    dataMask: true,
    watchInterval: 300,
    watchInputs: true,
    keyStrokeCompensation: 10,
    // old versions of chrome dont work great with input event
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
    watchDataMask: false,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      '0': {
        pattern: /\d/
      },
      '9': {
        pattern: /\d/,
        optional: true
      },
      '#': {
        pattern: /\d/,
        recursive: true
      },
      'A': {
        pattern: /[a-zA-Z0-9]/
      },
      'S': {
        pattern: /[a-zA-Z]/
      }
    }
  };
  $.jMaskGlobals = $.jMaskGlobals || {};
  globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

  // looking for inputs with data-mask attribute
  if (globals.dataMask) {
    $.applyDataMask();
  }
  setInterval(function () {
    if ($.jMaskGlobals.watchDataMask) {
      $.applyDataMask();
    }
  }, globals.watchInterval);
}, __webpack_provided_window_dot_jQuery, window.Zepto);

/***/ }),

/***/ "./assets/js/snippets.js":
/*!*******************************!*\
  !*** ./assets/js/snippets.js ***!
  \*******************************/
/***/ (() => {

var petCreatedToastBtn = document.getElementById('petCreatedToastBtn');
var petCreatedToast = document.getElementById('petCreatedToast');
if (petCreatedToastBtn) {
  var toastCoreUI = coreui.Toast.getOrCreateInstance(petCreatedToast);
  petCreatedToastBtn.addEventListener('click', function () {
    toastCoreUI.show();
  });
}

/***/ }),

/***/ "./assets/js/veterinarian/create.js":
/*!******************************************!*\
  !*** ./assets/js/veterinarian/create.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  $('#form_veterinarian_phone').mask('(00) 00000-0000');
  $('#form_address_zipcode').mask('00000-000');
  $('.state-select').change(function () {
    var stateID = $(this).val();
    if (stateID) {
      carregarCidadesPorEstado(stateID);
    } else {
      $('.city-select').empty().append($('<option>').text('Selecione o estado primeiro'));
    }
  });
  $('#form_address_zipcode').blur(function (e) {
    var zipcode = $(this).val();
    $('#form_address_street').val('');
    $('#form_address_complement').val('');
    $('#form_address_district').val('');
    $('#form_address_state').val('');
    $('#city').val('');
    $.ajax({
      url: "/address/zipcode/".concat(zipcode),
      method: 'GET',
      dataType: 'json',
      beforeSend: function beforeSend() {},
      success: function success(response) {
        if (response.error) {
          return;
        }
        var data = response.data;
        $('#form_address_street').val(data.street);
        $('#form_address_complement').val(data.complement);
        $('#form_address_district').val(data.district);
        $('#form_address_state').val(data.state.id);
        carregarCidadesPorEstado(data.state.id);
        setTimeout(function () {
          $('#city').val(data.city.id);
        }, 300);
      },
      error: function error(xhr, status, _error) {
        return;
      }
    });
  });
  function carregarCidadesPorEstado(stateId) {
    $.ajax({
      url: "/address/cities/".concat(stateId),
      method: 'GET',
      dataType: 'json',
      beforeSend: function beforeSend() {
        $('.box-spinner-city-select').show();
        $('.box-city-select').hide();
      },
      success: function success(response) {
        if (response.error) {
          $('.box-spinner-city-select').hide();
          $('.box-city-select').show();
          return;
        }
        var citySelect = $('.city-select');
        citySelect.empty();
        $.each(response.data, function (i, city) {
          citySelect.append($('<option>').attr('value', city.id).text(city.name));
        });
        $('.box-spinner-city-select').hide();
        $('.box-city-select').show();
      },
      error: function error(xhr, status, _error2) {
        $('.box-spinner-city-select').hide();
        $('.box-city-select').show();
      }
    });
  }
});

/***/ }),

/***/ "./assets/styles/global.scss":
/*!***********************************!*\
  !*** ./assets/styles/global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-9784cd"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEMvUCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQzJPLElBQUksQ0FBQyxDQUFDO01BQ2hDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzVFRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhcnRzL2NoYXJ0LXZhY2NpbmVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGlwYm9hcmQtcGFzc3dvcmQtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9qcXVlcnkubWFzay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZldGVyaW5hcmlhbi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuc2Nzcz8wMjI3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcblxuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG5pbXBvcnQgJy4vanMvc25pcHBldHMuanMnO1xuaW1wb3J0ICcuL2pzL2NsaXBib2FyZC1wYXNzd29yZC1nZW5lcmF0b3IuanMnO1xuaW1wb3J0ICcuL2pzL2pxdWVyeS5tYXNrLmpzJztcblxuaW1wb3J0ICcuL2pzL3ZldGVyaW5hcmlhbi9jcmVhdGUuanMnO1xuXG5pbXBvcnQgJy4vanMvY2hhcnRzL2NoYXJ0LXZhY2NpbmVzLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvY2hhcnRzL3ZhY2NpbmVzJyxcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAwLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ0phbmVpcm8nLCAnRmV2ZXJlaXJvJywgJ01hcsOnbyddLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLnZhY2NpbmVzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW10sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hhcnQuanMgTGluZSBDaGFydCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3IENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWNjaW5lc0NoYXJ0JyksIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5jb3B5LXRvLWNsaXBib2FyZFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNhbXBvID0gJChcIiN1c2VyX3Bhc3N3b3JkXCIpO1xuICAgICAgICBjYW1wby5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pO1xuXG4gICAgJCgnI2J0bi1nZW5lcmF0ZS1wYXNzd29yZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZFNpemUgPSAxMDtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkhQCMkJV4mKigpLV89K1wiO1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICBwYXNzd29yZCArPSBnZXRSYW5kb21DaGFyKFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIik7XG4gICAgICAgIHBhc3N3b3JkICs9IGdldFJhbmRvbUNoYXIoXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiKTtcbiAgICAgICAgcGFzc3dvcmQgKz0gZ2V0UmFuZG9tQ2hhcihcIjAxMjM0NTY3ODlcIik7XG4gICAgICAgIHBhc3N3b3JkICs9IGdldFJhbmRvbUNoYXIoXCIhQCMkJV4mKigpLV89K1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZFNpemUgLSA0OyBpKyspIHtcbiAgICAgICAgICAgIHBhc3N3b3JkICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFzc3dvcmQgPSBzaHVmZmxlU3RyaW5nKHBhc3N3b3JkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfcGFzc3dvcmQnKS52YWx1ZSA9IHBhc3N3b3JkO1xuICAgIH0pXG5cbiAgICAkKCcuaWNvbi1leWUtcGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX3Bhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1leWUnKTtcbiAgICAgICAgICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLWV5ZS1zbGFzaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWV5ZS1zbGFzaCcpO1xuICAgICAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmEtZXllJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNoYXIoY2hhcmFjdGVycykge1xuICAgICAgICByZXR1cm4gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVycy5sZW5ndGgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgc2h1ZmZsZWQgPSAnJztcbiAgICAgICAgc3RyID0gc3RyLnNwbGl0KCcnKTtcbiAgICAgICAgd2hpbGUgKHN0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaHVmZmxlZCArPSBzdHIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0ci5sZW5ndGgpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxufSlcbiIsIi8qKlxuICoganF1ZXJ5Lm1hc2suanNcbiAqIEB2ZXJzaW9uOiB2MS4xNC4xNlxuICogQGF1dGhvcjogSWdvciBFc2NvYmFyXG4gKlxuICogQ3JlYXRlZCBieSBJZ29yIEVzY29iYXIgb24gMjAxMi0wMy0xMC4gUGxlYXNlIHJlcG9ydCBhbnkgYnVnIGF0IGdpdGh1Yi5jb20vaWdvcmVzY29iYXIvalF1ZXJ5LU1hc2stUGx1Z2luXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIElnb3IgRXNjb2JhciBodHRwOi8vaWdvcmVzY29iYXIuY29tXG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICogY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGpzaGludCBsYXhicmVhazogdHJ1ZSAqL1xuLyoganNoaW50IG1heGNvbXBsZXhpdHk6MTcgKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pIHBhdHRlcm5zIGZvciBKYXZhU2NyaXB0IG1vZHVsZXMgdGhhdCB3b3JrIGV2ZXJ5d2hlcmUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy9qcXVlcnlQbHVnaW4uanNcbihmdW5jdGlvbiAoZmFjdG9yeSwgalF1ZXJ5LCBaZXB0bykge1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIE1ldGVvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSB8fCBaZXB0byk7XG4gICAgfVxuXG59KGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIE1hc2sgPSBmdW5jdGlvbiAoZWwsIG1hc2ssIG9wdGlvbnMpIHtcblxuICAgICAgICB2YXIgcCA9IHtcbiAgICAgICAgICAgIGludmFsaWQ6IFtdLFxuICAgICAgICAgICAgZ2V0Q2FyZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwgPSBlbC5nZXQoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkU2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY1NlbFN0YXJ0ID0gY3RybC5zZWxlY3Rpb25TdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJRSBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgIGlmIChkU2VsICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ01TSUUgMTAnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbCA9IGRTZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbC5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC1wLnZhbCgpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBzZWwudGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNTZWxTdGFydCB8fCBjU2VsU3RhcnQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gY1NlbFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENhcmV0OiBmdW5jdGlvbihwb3MpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaXMoJzpmb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UsIGN0cmwgPSBlbC5nZXQoMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3gsIFdlYktpdCwgZXRjLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHJsLnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5zZXRTZWxlY3Rpb25SYW5nZShwb3MsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBJRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gY3RybC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlbFxuICAgICAgICAgICAgICAgIC5vbigna2V5ZG93bi5tYXNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdtYXNrLWtleWNvZGUnLCBlLmtleUNvZGUgfHwgZS53aGljaCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ21hc2stcHJldml1cy12YWx1ZScsIGVsLnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnbWFzay1wcmV2aXVzLWNhcmV0LXBvcycsIHAuZ2V0Q2FyZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHAubWFza0RpZ2l0UG9zTWFwT2xkID0gcC5tYXNrRGlnaXRQb3NNYXA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJC5qTWFza0dsb2JhbHMudXNlSW5wdXQgPyAnaW5wdXQubWFzaycgOiAna2V5dXAubWFzaycsIHAuYmVoYXZpb3VyKVxuICAgICAgICAgICAgICAgIC5vbigncGFzdGUubWFzayBkcm9wLm1hc2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmtleWRvd24oKS5rZXl1cCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UubWFzaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ2NoYW5nZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignYmx1ci5tYXNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBwLnZhbCgpICYmICFlbC5kYXRhKCdjaGFuZ2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ2NoYW5nZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBpdCdzIHZlcnkgaW1wb3J0YW50IHRoYXQgdGhpcyBjYWxsYmFjayByZW1haW5zIGluIHRoaXMgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAvLyBvdGhlcndoaXNlIG9sZFZhbHVlIGl0J3MgZ29pbmcgdG8gd29yayBidWdneVxuICAgICAgICAgICAgICAgIC5vbignYmx1ci5tYXNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gcC52YWwoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCBhbGwgdGV4dCBvbiBmb2N1c1xuICAgICAgICAgICAgICAgIC5vbignZm9jdXMubWFzaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdE9uRm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZS50YXJnZXQpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBjbGVhciB0aGUgdmFsdWUgaWYgaXQgbm90IGNvbXBsZXRlIHRoZSBtYXNrXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1c291dC5tYXNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNsZWFySWZOb3RNYXRjaCAmJiAhcmVnZXhNYXNrLnRlc3QocC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcC52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRSZWdleE1hc2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrQ2h1bmtzID0gW10sIHRyYW5zbGF0aW9uLCBwYXR0ZXJuLCBvcHRpb25hbCwgcmVjdXJzaXZlLCBvUmVjdXJzaXZlLCByO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gak1hc2sudHJhbnNsYXRpb25bbWFzay5jaGFyQXQoaSldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gdHJhbnNsYXRpb24ucGF0dGVybi50b1N0cmluZygpLnJlcGxhY2UoLy57MX0kfF4uezF9L2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gdHJhbnNsYXRpb24ub3B0aW9uYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmUgPSB0cmFuc2xhdGlvbi5yZWN1cnNpdmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2h1bmtzLnB1c2gobWFzay5jaGFyQXQoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9SZWN1cnNpdmUgPSB7ZGlnaXQ6IG1hc2suY2hhckF0KGkpLCBwYXR0ZXJuOiBwYXR0ZXJufTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0NodW5rcy5wdXNoKCFvcHRpb25hbCAmJiAhcmVjdXJzaXZlID8gcGF0dGVybiA6IChwYXR0ZXJuICsgJz8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tDaHVua3MucHVzaChtYXNrLmNoYXJBdChpKS5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByID0gbWFza0NodW5rcy5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChvUmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSByLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBvUmVjdXJzaXZlLmRpZ2l0ICsgJyguKicgKyBvUmVjdXJzaXZlLmRpZ2l0ICsgJyk/KScpLCAnKCQxKT8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAob1JlY3Vyc2l2ZS5kaWdpdCwgJ2cnKSwgb1JlY3Vyc2l2ZS5wYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95RXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlbC5vZmYoWydpbnB1dCcsICdrZXlkb3duJywgJ2tleXVwJywgJ3Bhc3RlJywgJ2Ryb3AnLCAnYmx1cicsICdmb2N1c291dCcsICcnXS5qb2luKCcubWFzayAnKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzSW5wdXQgPSBlbC5pcygnaW5wdXQnKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gaXNJbnB1dCA/ICd2YWwnIDogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICByO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFttZXRob2RdKCkgIT09IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsW21ldGhvZF0odik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgciA9IGVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBlbFttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbjogZnVuY3Rpb24ob2xkVmFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IHAuZ2V0TWFza2VkKCksXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ID0gcC5nZXRDYXJldCgpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3NPbGQgPSBlbC5kYXRhKCdtYXNrLXByZXZpdXMtY2FyZXQtcG9zJykgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbEwgPSBuZXdWYWwubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsTCA9IG9sZFZhbC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXQgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0FmdGVyQ2FyZXQgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc05ldzsgaSA8IG5ld1ZhbEw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLm1hc2tEaWdpdFBvc01hcFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0FmdGVyQ2FyZXQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zTmV3IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY2FyZXRQb3NOZXcgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAubWFza0RpZ2l0UG9zTWFwW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc09sZCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBPbGRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJzb3IgaXMgYXQgdGhlIGVuZCBrZWVwIGl0IHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJldFBvc05ldyA+IG9sZFZhbEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyA9IG5ld1ZhbEwgKiAxMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJldFBvc09sZCA+PSBjYXJldFBvc05ldyAmJiBjYXJldFBvc09sZCAhPT0gb2xkVmFsTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLm1hc2tEaWdpdFBvc01hcE9sZFtjYXJldFBvc05ld10pICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0UG9zTmV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyAtPSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQgLSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3IC09IG1hc2tEaWdpdHNCZWZvcmVDYXJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAubWFza0RpZ2l0UG9zTWFwW2NhcmV0UG9zTmV3XSkgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyA9IGNhcmV0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2FyZXRQb3NOZXcgPiBjYXJldFBvc09sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgKz0gbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsIC0gbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsT2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgKz0gbWFza0RpZ2l0c0FmdGVyQ2FyZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmV0UG9zTmV3O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgICAgICBwLmludmFsaWQgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZWwuZGF0YSgnbWFzay1rZXljb2RlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGtleUNvZGUsIGpNYXNrLmJ5UGFzc0tleXMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gcC5nZXRNYXNrZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zID0gcC5nZXRDYXJldCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsID0gZWwuZGF0YSgnbWFzay1wcmV2aXVzLXZhbHVlJykgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGNvbXBlbnNhdGlvbiB0byBkZXZpY2VzL2Jyb3dzZXJzIHRoYXQgZG9uJ3QgY29tcGVuc2F0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYXJldCBwb3NpdGlvbmluZyB0aGUgcmlnaHQgd2F5XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcC5zZXRDYXJldChwLmNhbGN1bGF0ZUNhcmV0UG9zaXRpb24ob2xkVmFsKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sICQuak1hc2tHbG9iYWxzLmtleVN0cm9rZUNvbXBlbnNhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcC52YWwobmV3VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRDYXJldChjYXJldFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmNhbGxiYWNrcyhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TWFza2VkOiBmdW5jdGlvbihza2lwTWFza0NoYXJzLCB2YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsID09PSB1bmRlZmluZWQgPyBwLnZhbCgpIDogdmFsICsgJycsXG4gICAgICAgICAgICAgICAgICAgIG0gPSAwLCBtYXNrTGVuID0gbWFzay5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHYgPSAwLCB2YWxMZW4gPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDEsIGFkZE1ldGhvZCA9ICdwdXNoJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRQb3MgPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0Q291bnQgPSAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRQb3NBcnIgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1hc2tDaGFyLFxuICAgICAgICAgICAgICAgICAgICBjaGVjaztcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTWV0aG9kID0gJ3Vuc2hpZnQnO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1hc2tDaGFyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbSA9IG1hc2tMZW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICB2ID0gdmFsTGVuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbSA+IC0xICYmIHYgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIgPSBtYXNrTGVuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbSA8IG1hc2tMZW4gJiYgdiA8IHZhbExlbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrRGlnaXQgPSBtYXNrLmNoYXJBdChtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbERpZ2l0ID0gdmFsdWUuY2hhckF0KHYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrRGlnaXRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbERpZ2l0Lm1hdGNoKHRyYW5zbGF0aW9uLnBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmW2FkZE1ldGhvZF0odmFsRGlnaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb24ucmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNldFBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0UG9zID0gbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtID09PSBsYXN0TWFza0NoYXIgJiYgbSAhPT0gcmVzZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSByZXNldFBvcyAtIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0TWFza0NoYXIgPT09IHJlc2V0UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtIC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsRGlnaXQgPT09IGxhc3RVbnRyYW5zbGF0ZWRNYXNrQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoZWQgdGhlIGxhc3QgdW50cmFuc2xhdGVkIChyYXcpIG1hc2sgY2hhcmFjdGVyIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaWtlbHkgYW4gaW5zZXJ0IG9mZnNldCB0aGUgbWFzayBjaGFyYWN0ZXIgZnJvbSB0aGUgbGFzdCBlbnRyeTsgZmFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocm91Z2ggYW5kIG9ubHkgaW5jcmVtZW50IHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVbnRyYW5zbGF0ZWRNYXNrQ2hhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRpb24ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRpb24uZmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXSh0cmFuc2xhdGlvbi5mYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwLmludmFsaWQucHVzaCh7cDogdiwgdjogdmFsRGlnaXQsIGU6IHRyYW5zbGF0aW9uLnBhdHRlcm59KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHYgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwTWFza0NoYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmW2FkZE1ldGhvZF0obWFza0RpZ2l0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbERpZ2l0ID09PSBtYXNrRGlnaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRQb3NBcnIucHVzaCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyID0gbWFza0RpZ2l0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0Fyci5wdXNoKHYgKyBtYXNrRGlnaXRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbSArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFzdE1hc2tDaGFyRGlnaXQgPSBtYXNrLmNoYXJBdChsYXN0TWFza0NoYXIpO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrTGVuID09PSB2YWxMZW4gKyAxICYmICFqTWFzay50cmFuc2xhdGlvbltsYXN0TWFza0NoYXJEaWdpdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmLnB1c2gobGFzdE1hc2tDaGFyRGlnaXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBidWYuam9pbignJyk7XG4gICAgICAgICAgICAgICAgcC5tYXBNYXNrZGlnaXRQb3NpdGlvbnMobmV3VmFsLCBtYXNrRGlnaXRQb3NBcnIsIHZhbExlbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXBNYXNrZGlnaXRQb3NpdGlvbnM6IGZ1bmN0aW9uKG5ld1ZhbCwgbWFza0RpZ2l0UG9zQXJyLCB2YWxMZW4pIHtcbiAgICAgICAgICAgICAgdmFyIG1hc2tEaWZmID0gb3B0aW9ucy5yZXZlcnNlID8gbmV3VmFsLmxlbmd0aCAtIHZhbExlbiA6IDA7XG4gICAgICAgICAgICAgIHAubWFza0RpZ2l0UG9zTWFwID0ge307XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFza0RpZ2l0UG9zQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcC5tYXNrRGlnaXRQb3NNYXBbbWFza0RpZ2l0UG9zQXJyW2ldICsgbWFza0RpZmZdID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcC52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHZhbCAhPT0gb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBcmdzID0gW3ZhbCwgZSwgZWwsIG9wdGlvbnNdLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKG5hbWUsIGNyaXRlcmlhLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uQ2hhbmdlJywgY2hhbmdlZCA9PT0gdHJ1ZSwgZGVmYXVsdEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdvbktleVByZXNzJywgY2hhbmdlZCA9PT0gdHJ1ZSwgZGVmYXVsdEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdvbkNvbXBsZXRlJywgdmFsLmxlbmd0aCA9PT0gbWFzay5sZW5ndGgsIGRlZmF1bHRBcmdzKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygnb25JbnZhbGlkJywgcC5pbnZhbGlkLmxlbmd0aCA+IDAsIFt2YWwsIGUsIGVsLCBwLmludmFsaWQsIG9wdGlvbnNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICB2YXIgak1hc2sgPSB0aGlzLCBvbGRWYWx1ZSA9IHAudmFsKCksIHJlZ2V4TWFzaztcblxuICAgICAgICBtYXNrID0gdHlwZW9mIG1hc2sgPT09ICdmdW5jdGlvbicgPyBtYXNrKHAudmFsKCksIHVuZGVmaW5lZCwgZWwsICBvcHRpb25zKSA6IG1hc2s7XG5cbiAgICAgICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAgICAgak1hc2subWFzayA9IG1hc2s7XG4gICAgICAgIGpNYXNrLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBqTWFzay5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjYXJldCA9IHAuZ2V0Q2FyZXQoKTtcbiAgICAgICAgICAgIGlmIChqTWFzay5vcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbC5kYXRhKCdtYXNrLW1heGxlbmd0aCcpKSB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignbWF4bGVuZ3RoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmRlc3Ryb3lFdmVudHMoKTtcbiAgICAgICAgICAgIHAudmFsKGpNYXNrLmdldENsZWFuVmFsKCkpO1xuICAgICAgICAgICAgcC5zZXRDYXJldChjYXJldCk7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZ2V0IHZhbHVlIHdpdGhvdXQgbWFza1xuICAgICAgICBqTWFzay5nZXRDbGVhblZhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICByZXR1cm4gcC5nZXRNYXNrZWQodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZ2V0IG1hc2tlZCB2YWx1ZSB3aXRob3V0IHRoZSB2YWx1ZSBiZWluZyBpbiB0aGUgaW5wdXQgb3IgZWxlbWVudFxuICAgICAgICBqTWFzay5nZXRNYXNrZWRWYWwgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgcmV0dXJuIHAuZ2V0TWFza2VkKGZhbHNlLCB2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgak1hc2suaW5pdCA9IGZ1bmN0aW9uKG9ubHlNYXNrKSB7XG4gICAgICAgICAgICBvbmx5TWFzayA9IG9ubHlNYXNrIHx8IGZhbHNlO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAgIGpNYXNrLmNsZWFySWZOb3RNYXRjaCAgPSAkLmpNYXNrR2xvYmFscy5jbGVhcklmTm90TWF0Y2g7XG4gICAgICAgICAgICBqTWFzay5ieVBhc3NLZXlzICAgICAgID0gJC5qTWFza0dsb2JhbHMuYnlQYXNzS2V5cztcbiAgICAgICAgICAgIGpNYXNrLnRyYW5zbGF0aW9uICAgICAgPSAkLmV4dGVuZCh7fSwgJC5qTWFza0dsb2JhbHMudHJhbnNsYXRpb24sIG9wdGlvbnMudHJhbnNsYXRpb24pO1xuXG4gICAgICAgICAgICBqTWFzayA9ICQuZXh0ZW5kKHRydWUsIHt9LCBqTWFzaywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHJlZ2V4TWFzayA9IHAuZ2V0UmVnZXhNYXNrKCk7XG5cbiAgICAgICAgICAgIGlmIChvbmx5TWFzaykge1xuICAgICAgICAgICAgICAgIHAuZXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcC52YWwocC5nZXRNYXNrZWQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmF0dHIoJ3BsYWNlaG9sZGVyJyAsIG9wdGlvbnMucGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5LCBvdGhlcndpc2UgaWYgdGhlIHVzZXIgc3VibWl0IHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gcHJlc3MgdGhlIFwiYmFja1wiIGJ1dHRvbiwgdGhlIGF1dG9jb21wbGV0ZSB3aWxsIGVyYXNlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGRhdGEuIFdvcmtzIGZpbmUgb24gSUU5KywgRkYsIE9wZXJhLCBTYWZhcmkuXG4gICAgICAgICAgICAgICAgaWYgKGVsLmRhdGEoJ21hc2snKSkge1xuICAgICAgICAgICAgICAgICAgZWwuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGRldGVjdCBpZiBpcyBuZWNlc3NhcnkgbGV0IHRoZSB1c2VyIHR5cGUgZnJlZWx5LlxuICAgICAgICAgICAgICAgIC8vIGZvciBpcyBhIGxvdCBmYXN0ZXIgdGhhbiBmb3JFYWNoLlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXhsZW5ndGggPSB0cnVlOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChpKV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4bGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmF0dHIoJ21heGxlbmd0aCcsIG1hc2subGVuZ3RoKS5kYXRhKCdtYXNrLW1heGxlbmd0aCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAuZGVzdHJveUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHAuZXZlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2FyZXQgPSBwLmdldENhcmV0KCk7XG4gICAgICAgICAgICAgICAgcC52YWwocC5nZXRNYXNrZWQoKSk7XG4gICAgICAgICAgICAgICAgcC5zZXRDYXJldChjYXJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgak1hc2suaW5pdCghZWwuaXMoJ2lucHV0JykpO1xuICAgIH07XG5cbiAgICAkLm1hc2tXYXRjaGVycyA9IHt9O1xuICAgIHZhciBIVE1MQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fSxcbiAgICAgICAgICAgIHByZWZpeCA9ICdkYXRhLW1hc2stJyxcbiAgICAgICAgICAgIG1hc2sgPSBpbnB1dC5hdHRyKCdkYXRhLW1hc2snKTtcblxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAncmV2ZXJzZScpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0LmF0dHIocHJlZml4ICsgJ2NsZWFyaWZub3RtYXRjaCcpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNsZWFySWZOb3RNYXRjaCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAnc2VsZWN0b25mb2N1cycpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgb3B0aW9ucy5zZWxlY3RPbkZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3RTYW1lTWFza09iamVjdChpbnB1dCwgbWFzaywgb3B0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5kYXRhKCdtYXNrJywgbmV3IE1hc2sodGhpcywgbWFzaywgb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBub3RTYW1lTWFza09iamVjdCA9IGZ1bmN0aW9uKGZpZWxkLCBtYXNrLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgbWFza09iamVjdCA9ICQoZmllbGQpLmRhdGEoJ21hc2snKSxcbiAgICAgICAgICAgIHN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5LFxuICAgICAgICAgICAgdmFsdWUgPSAkKGZpZWxkKS52YWwoKSB8fCAkKGZpZWxkKS50ZXh0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBtYXNrID0gbWFzayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG1hc2tPYmplY3QgIT09ICdvYmplY3QnIHx8IHN0cmluZ2lmeShtYXNrT2JqZWN0Lm9wdGlvbnMpICE9PSBzdHJpbmdpZnkob3B0aW9ucykgfHwgbWFza09iamVjdC5tYXNrICE9PSBtYXNrO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0sXG4gICAgZXZlbnRTdXBwb3J0ZWQgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGlzU3VwcG9ydGVkO1xuXG4gICAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gKGV2ZW50TmFtZSBpbiBlbCk7XG5cbiAgICAgICAgaWYgKCAhaXNTdXBwb3J0ZWQgKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xuICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgIH07XG5cbiAgICAkLmZuLm1hc2sgPSBmdW5jdGlvbihtYXNrLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yLFxuICAgICAgICAgICAgZ2xvYmFscyA9ICQuak1hc2tHbG9iYWxzLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBnbG9iYWxzLndhdGNoSW50ZXJ2YWwsXG4gICAgICAgICAgICB3YXRjaElucHV0cyA9IG9wdGlvbnMud2F0Y2hJbnB1dHMgfHwgZ2xvYmFscy53YXRjaElucHV0cyxcbiAgICAgICAgICAgIG1hc2tGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RTYW1lTWFza09iamVjdCh0aGlzLCBtYXNrLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKCdtYXNrJywgbmV3IE1hc2sodGhpcywgbWFzaywgb3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgJCh0aGlzKS5lYWNoKG1hc2tGdW5jdGlvbik7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICYmIHNlbGVjdG9yICE9PSAnJyAmJiB3YXRjaElucHV0cykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkLm1hc2tXYXRjaGVyc1tzZWxlY3Rvcl0pO1xuICAgICAgICAgICAgJC5tYXNrV2F0Y2hlcnNbc2VsZWN0b3JdID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKHNlbGVjdG9yKS5lYWNoKG1hc2tGdW5jdGlvbik7XG4gICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgICQuZm4ubWFza2VkID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoJ21hc2snKS5nZXRNYXNrZWRWYWwodmFsKTtcbiAgICB9O1xuXG4gICAgJC5mbi51bm1hc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCgkLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXSk7XG4gICAgICAgIGRlbGV0ZSAkLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhTWFzayA9ICQodGhpcykuZGF0YSgnbWFzaycpO1xuICAgICAgICAgICAgaWYgKGRhdGFNYXNrKSB7XG4gICAgICAgICAgICAgICAgZGF0YU1hc2sucmVtb3ZlKCkucmVtb3ZlRGF0YSgnbWFzaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5jbGVhblZhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhKCdtYXNrJykuZ2V0Q2xlYW5WYWwoKTtcbiAgICB9O1xuXG4gICAgJC5hcHBseURhdGFNYXNrID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciB8fCAkLmpNYXNrR2xvYmFscy5tYXNrRWxlbWVudHM7XG4gICAgICAgIHZhciAkc2VsZWN0b3IgPSAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSA/IHNlbGVjdG9yIDogJChzZWxlY3Rvcik7XG4gICAgICAgICRzZWxlY3Rvci5maWx0ZXIoJC5qTWFza0dsb2JhbHMuZGF0YU1hc2tBdHRyKS5lYWNoKEhUTUxBdHRyaWJ1dGVzKTtcbiAgICB9O1xuXG4gICAgdmFyIGdsb2JhbHMgPSB7XG4gICAgICAgIG1hc2tFbGVtZW50czogJ2lucHV0LHRkLHNwYW4sZGl2JyxcbiAgICAgICAgZGF0YU1hc2tBdHRyOiAnW2RhdGEtbWFza10nLFxuICAgICAgICBkYXRhTWFzazogdHJ1ZSxcbiAgICAgICAgd2F0Y2hJbnRlcnZhbDogMzAwLFxuICAgICAgICB3YXRjaElucHV0czogdHJ1ZSxcbiAgICAgICAga2V5U3Ryb2tlQ29tcGVuc2F0aW9uOiAxMCxcbiAgICAgICAgLy8gb2xkIHZlcnNpb25zIG9mIGNocm9tZSBkb250IHdvcmsgZ3JlYXQgd2l0aCBpbnB1dCBldmVudFxuICAgICAgICB1c2VJbnB1dDogIS9DaHJvbWVcXC9bMi00XVswLTldfFNhbXN1bmdCcm93c2VyLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSAmJiBldmVudFN1cHBvcnRlZCgnaW5wdXQnKSxcbiAgICAgICAgd2F0Y2hEYXRhTWFzazogZmFsc2UsXG4gICAgICAgIGJ5UGFzc0tleXM6IFs5LCAxNiwgMTcsIDE4LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDkxXSxcbiAgICAgICAgdHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgICcwJzoge3BhdHRlcm46IC9cXGQvfSxcbiAgICAgICAgICAgICc5Jzoge3BhdHRlcm46IC9cXGQvLCBvcHRpb25hbDogdHJ1ZX0sXG4gICAgICAgICAgICAnIyc6IHtwYXR0ZXJuOiAvXFxkLywgcmVjdXJzaXZlOiB0cnVlfSxcbiAgICAgICAgICAgICdBJzoge3BhdHRlcm46IC9bYS16QS1aMC05XS99LFxuICAgICAgICAgICAgJ1MnOiB7cGF0dGVybjogL1thLXpBLVpdL31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmpNYXNrR2xvYmFscyA9ICQuak1hc2tHbG9iYWxzIHx8IHt9O1xuICAgIGdsb2JhbHMgPSAkLmpNYXNrR2xvYmFscyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBnbG9iYWxzLCAkLmpNYXNrR2xvYmFscyk7XG5cbiAgICAvLyBsb29raW5nIGZvciBpbnB1dHMgd2l0aCBkYXRhLW1hc2sgYXR0cmlidXRlXG4gICAgaWYgKGdsb2JhbHMuZGF0YU1hc2spIHtcbiAgICAgICAgJC5hcHBseURhdGFNYXNrKCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkLmpNYXNrR2xvYmFscy53YXRjaERhdGFNYXNrKSB7XG4gICAgICAgICAgICAkLmFwcGx5RGF0YU1hc2soKTtcbiAgICAgICAgfVxuICAgIH0sIGdsb2JhbHMud2F0Y2hJbnRlcnZhbCk7XG59LCB3aW5kb3cualF1ZXJ5LCB3aW5kb3cuWmVwdG8pKTtcbiIsImNvbnN0IHBldENyZWF0ZWRUb2FzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXRDcmVhdGVkVG9hc3RCdG4nKVxuY29uc3QgcGV0Q3JlYXRlZFRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BldENyZWF0ZWRUb2FzdCcpXG5pZiAocGV0Q3JlYXRlZFRvYXN0QnRuKSB7XG4gICAgY29uc3QgdG9hc3RDb3JlVUkgPSBjb3JldWkuVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZShwZXRDcmVhdGVkVG9hc3QpXG4gICAgcGV0Q3JlYXRlZFRvYXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2FzdENvcmVVSS5zaG93KClcbiAgICB9KVxufVxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2Zvcm1fdmV0ZXJpbmFyaWFuX3Bob25lJykubWFzaygnKDAwKSAwMDAwMC0wMDAwJyk7XG4gICAgJCgnI2Zvcm1fYWRkcmVzc196aXBjb2RlJykubWFzaygnMDAwMDAtMDAwJyk7XG5cbiAgICAkKCcuc3RhdGUtc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3RhdGVJRCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmIChzdGF0ZUlEKSB7XG4gICAgICAgICAgICBjYXJyZWdhckNpZGFkZXNQb3JFc3RhZG8oc3RhdGVJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuY2l0eS1zZWxlY3QnKS5lbXB0eSgpLmFwcGVuZCgkKCc8b3B0aW9uPicpLnRleHQoJ1NlbGVjaW9uZSBvIGVzdGFkbyBwcmltZWlybycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2Zvcm1fYWRkcmVzc196aXBjb2RlJykuYmx1cihmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCB6aXBjb2RlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJCgnI2Zvcm1fYWRkcmVzc19zdHJlZXQnKS52YWwoJycpO1xuICAgICAgICAkKCcjZm9ybV9hZGRyZXNzX2NvbXBsZW1lbnQnKS52YWwoJycpO1xuICAgICAgICAkKCcjZm9ybV9hZGRyZXNzX2Rpc3RyaWN0JykudmFsKCcnKTtcbiAgICAgICAgJCgnI2Zvcm1fYWRkcmVzc19zdGF0ZScpLnZhbCgnJyk7XG4gICAgICAgICQoJyNjaXR5JykudmFsKCcnKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBgL2FkZHJlc3MvemlwY29kZS8ke3ppcGNvZGV9YCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgJCgnI2Zvcm1fYWRkcmVzc19zdHJlZXQnKS52YWwoZGF0YS5zdHJlZXQpO1xuICAgICAgICAgICAgICAgICQoJyNmb3JtX2FkZHJlc3NfY29tcGxlbWVudCcpLnZhbChkYXRhLmNvbXBsZW1lbnQpO1xuICAgICAgICAgICAgICAgICQoJyNmb3JtX2FkZHJlc3NfZGlzdHJpY3QnKS52YWwoZGF0YS5kaXN0cmljdCk7XG4gICAgICAgICAgICAgICAgJCgnI2Zvcm1fYWRkcmVzc19zdGF0ZScpLnZhbChkYXRhLnN0YXRlLmlkKTtcbiAgICAgICAgICAgICAgICBjYXJyZWdhckNpZGFkZXNQb3JFc3RhZG8oZGF0YS5zdGF0ZS5pZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NpdHknKS52YWwoZGF0YS5jaXR5LmlkKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGNhcnJlZ2FyQ2lkYWRlc1BvckVzdGFkbyhzdGF0ZUlkKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGAvYWRkcmVzcy9jaXRpZXMvJHtzdGF0ZUlkfWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5ib3gtc3Bpbm5lci1jaXR5LXNlbGVjdCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCcuYm94LWNpdHktc2VsZWN0JykuaGlkZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ib3gtc3Bpbm5lci1jaXR5LXNlbGVjdCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJveC1jaXR5LXNlbGVjdCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY2l0eVNlbGVjdCA9ICQoJy5jaXR5LXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNpdHlTZWxlY3QuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAkLmVhY2gocmVzcG9uc2UuZGF0YSwgZnVuY3Rpb24oaSwgY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBjaXR5U2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLmF0dHIoJ3ZhbHVlJywgY2l0eS5pZCkudGV4dChjaXR5Lm5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuYm94LXNwaW5uZXItY2l0eS1zZWxlY3QnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnLmJveC1jaXR5LXNlbGVjdCcpLnNob3coKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJveC1zcGlubmVyLWNpdHktc2VsZWN0JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy5ib3gtY2l0eS1zZWxlY3QnKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJ0aW1lb3V0Iiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJ2YWNjaW5lcyIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY29uZmlnIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiQ2hhcnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiY2FtcG8iLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInBhc3N3b3JkU2l6ZSIsImNoYXJhY3RlcnMiLCJwYXNzd29yZCIsImdldFJhbmRvbUNoYXIiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2h1ZmZsZVN0cmluZyIsInBhc3N3b3JkRmllbGQiLCJpY29uRWxlbWVudCIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3RyIiwic2h1ZmZsZWQiLCJzcGxpdCIsInNwbGljZSIsImZhY3RvcnkiLCJaZXB0byIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJfdHlwZW9mIiwiTWV0ZW9yIiwibW9kdWxlIiwiTWFzayIsImVsIiwibWFzayIsInAiLCJpbnZhbGlkIiwiZ2V0Q2FyZXQiLCJzZWwiLCJwb3MiLCJjdHJsIiwiZ2V0IiwiZFNlbCIsInNlbGVjdGlvbiIsImNTZWxTdGFydCIsInNlbGVjdGlvblN0YXJ0IiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsImluZGV4T2YiLCJjcmVhdGVSYW5nZSIsIm1vdmVTdGFydCIsInZhbCIsImUiLCJzZXRDYXJldCIsImlzIiwicmFuZ2UiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNyZWF0ZVRleHRSYW5nZSIsImNvbGxhcHNlIiwibW92ZUVuZCIsImV2ZW50cyIsIm9uIiwia2V5Q29kZSIsIndoaWNoIiwibWFza0RpZ2l0UG9zTWFwT2xkIiwibWFza0RpZ2l0UG9zTWFwIiwiak1hc2tHbG9iYWxzIiwidXNlSW5wdXQiLCJiZWhhdmlvdXIiLCJzZXRUaW1lb3V0Iiwia2V5ZG93biIsImtleXVwIiwib2xkVmFsdWUiLCJ0cmlnZ2VyIiwic2VsZWN0T25Gb2N1cyIsImNsZWFySWZOb3RNYXRjaCIsInJlZ2V4TWFzayIsInRlc3QiLCJnZXRSZWdleE1hc2siLCJtYXNrQ2h1bmtzIiwidHJhbnNsYXRpb24iLCJwYXR0ZXJuIiwib3B0aW9uYWwiLCJyZWN1cnNpdmUiLCJvUmVjdXJzaXZlIiwiciIsImpNYXNrIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicHVzaCIsImRpZ2l0Iiwiam9pbiIsIlJlZ0V4cCIsImRlc3Ryb3lFdmVudHMiLCJvZmYiLCJ2IiwiaXNJbnB1dCIsIm1ldGhvZCIsImNhbGN1bGF0ZUNhcmV0UG9zaXRpb24iLCJvbGRWYWwiLCJuZXdWYWwiLCJnZXRNYXNrZWQiLCJjYXJldFBvc05ldyIsImNhcmV0UG9zT2xkIiwibmV3VmFsTCIsIm9sZFZhbEwiLCJtYXNrRGlnaXRzQmVmb3JlQ2FyZXQiLCJtYXNrRGlnaXRzQWZ0ZXJDYXJldCIsIm1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbCIsIm1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCIsImNhcmV0UG9zIiwid2luZG93IiwiaW5BcnJheSIsImJ5UGFzc0tleXMiLCJrZXlTdHJva2VDb21wZW5zYXRpb24iLCJjYWxsYmFja3MiLCJza2lwTWFza0NoYXJzIiwiYnVmIiwidW5kZWZpbmVkIiwibSIsIm1hc2tMZW4iLCJ2YWxMZW4iLCJvZmZzZXQiLCJhZGRNZXRob2QiLCJyZXNldFBvcyIsIm1hc2tEaWdpdENvdW50IiwibWFza0RpZ2l0UG9zQXJyIiwibGFzdE1hc2tDaGFyIiwiY2hlY2siLCJyZXZlcnNlIiwibGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyIiwibWFza0RpZ2l0IiwidmFsRGlnaXQiLCJtYXRjaCIsImZhbGxiYWNrIiwibGFzdE1hc2tDaGFyRGlnaXQiLCJtYXBNYXNrZGlnaXRQb3NpdGlvbnMiLCJtYXNrRGlmZiIsImNoYW5nZWQiLCJkZWZhdWx0QXJncyIsImNhbGxiYWNrIiwibmFtZSIsImNyaXRlcmlhIiwiYXJncyIsImFwcGx5IiwiY2FyZXQiLCJwbGFjZWhvbGRlciIsInJlbW92ZUF0dHIiLCJnZXRDbGVhblZhbCIsImdldE1hc2tlZFZhbCIsImluaXQiLCJvbmx5TWFzayIsImV4dGVuZCIsImF0dHIiLCJtYXhsZW5ndGgiLCJtYXNrV2F0Y2hlcnMiLCJIVE1MQXR0cmlidXRlcyIsImlucHV0IiwicHJlZml4Iiwibm90U2FtZU1hc2tPYmplY3QiLCJmaWVsZCIsIm1hc2tPYmplY3QiLCJzdHJpbmdpZnkiLCJKU09OIiwiZXZlbnRTdXBwb3J0ZWQiLCJldmVudE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaXNTdXBwb3J0ZWQiLCJzZXRBdHRyaWJ1dGUiLCJmbiIsInNlbGVjdG9yIiwiZ2xvYmFscyIsImludGVydmFsIiwid2F0Y2hJbnRlcnZhbCIsIndhdGNoSW5wdXRzIiwibWFza0Z1bmN0aW9uIiwiZWFjaCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImZpbmQiLCJtYXNrZWQiLCJ1bm1hc2siLCJkYXRhTWFzayIsInJlbW92ZURhdGEiLCJjbGVhblZhbCIsImFwcGx5RGF0YU1hc2siLCJtYXNrRWxlbWVudHMiLCIkc2VsZWN0b3IiLCJmaWx0ZXIiLCJkYXRhTWFza0F0dHIiLCJ1c2VyQWdlbnQiLCJ3YXRjaERhdGFNYXNrIiwicGV0Q3JlYXRlZFRvYXN0QnRuIiwicGV0Q3JlYXRlZFRvYXN0IiwidG9hc3RDb3JlVUkiLCJjb3JldWkiLCJUb2FzdCIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvdyIsImNoYW5nZSIsInN0YXRlSUQiLCJjYXJyZWdhckNpZGFkZXNQb3JFc3RhZG8iLCJlbXB0eSIsImFwcGVuZCIsImJsdXIiLCJ6aXBjb2RlIiwiY29uY2F0IiwiYmVmb3JlU2VuZCIsImVycm9yIiwic3RyZWV0IiwiY29tcGxlbWVudCIsImRpc3RyaWN0Iiwic3RhdGUiLCJpZCIsImNpdHkiLCJ4aHIiLCJzdGF0dXMiLCJzdGF0ZUlkIiwiaGlkZSIsImNpdHlTZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9