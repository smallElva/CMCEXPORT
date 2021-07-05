(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var md5_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5-hex */ "./node_modules/_md5-hex@3.0.1@md5-hex/browser.js");
/* harmony import */ var md5_hex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5_hex__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      versionNum: '',
      username: '',
      password: '',
      hasLicence: false,
      //有licence
      noLicence: false,
      //没有licence
      licenceNum: '',
      //机器码信息
      userTips: false,
      //用户名或密码错误提示
      languages: [{
        key: 'cn',
        text: '中文'
      }, {
        key: 'en',
        text: '英文'
      }],
      language: 'cn'
    };
  },
  created: function created() {
    var _this = this;

    //获取版本信息
    this.$axios.post('getCMCVersion').then(function (res) {
      if (res.version) {
        _this.versionNum = res.version;
        sessionStorage.setItem('version', _this.versionNum);
      } else {
        console.log('请求失败');
      }
    })["catch"](function (err) {
      console.log(err);
    }); //获取licence信息

    this.$getApi.getLicense().then(function (res) {
      _this.licenceNum = res.uuid;
      var licenceState = res.error;

      if (licenceState === 0) {
        _this.hasLicence = true;
      } else {
        _this.noLicence = true;
      }
    })["catch"](function (err) {
      console.log('failed', err);
    });
  },
  mounted: function mounted() {
    document.onkeydown = function (e) {
      var ee = e ? e : window.event;

      if (ee.keyCode == 13) {
        $("#login_btn").click();
      }
    };
  },
  methods: {
    loginFunc: function loginFunc() {
      var _this2 = this;

      this.userTips = false;
      var psw_crypt = md5_hex__WEBPACK_IMPORTED_MODULE_0___default()("cmc" + this.password); //对密码加密

      var data = 'username=' + encodeURIComponent(this.username) + '&password=' + psw_crypt + '';
      this.$axios.post('userLogin', data, {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded;charsetset=UTF-8'
        }
      }).then(function (res) {
        switch (res.msg) {
          case 0:
            sessionStorage.setItem('username', _this2.username);
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('userType', res.type);

            _this2.$router.push({
              name: 'home'
            });

            break;

          case 1:
            break;

          case 2:
            _this2.userTips = true;
            break;

          case 3:
            _this2.userTips = true;
            break;

          case 4:
            swal({
              text: '数据库配置错误',
              button: "确认"
            });
            break;

          default:
            swal({
              text: '返回错误',
              button: "确认"
            });
        }
      }, function (err) {
        swal({
          text: '数据连接失败',
          button: "确认"
        });
      });
    },
    monidianji: function monidianji() {
      document.getElementById('fileLocal').click();
    },
    //切换语言
    changeLang: function changeLang() {
      this.$i18n.locale = this.language;
    },
    setLicenceInfo: function setLicenceInfo() {
      var that = this;
      var selectedFile = document.getElementById('fileLocal').files[0];
      var reader = new FileReader(); //这是核心,读取操作就是由它完成.

      reader.readAsText(selectedFile); //读取文件的内容,也可以读取文件的URL

      document.getElementById('fileLocal').value = null;

      reader.onloadend = function () {
        //读取完成，无论成功失败,然后此时文件的内容存储到了result中,直接操作即可
        var license = this.result;
        var params = null;
        params = {
          "License": license
        }; //注册License

        that.$getApi.setLicense(this.result).then(function (result) {
          if (result != null) {
            that.licenceNum = result.uuid;
            var licenceState = result.error;

            if (licenceState === 0) {
              that.hasLicence = true;
              that.noLicence = false;
            } else {
              that.hasLicence = false;
              that.noLicence = true;
            }

            switch (licenceState) {
              case 0:
                swal({
                  title: "提示",
                  text: "\u6CE8\u518C\u6210\u529F",
                  button: "确认"
                });
                break;

              case -1:
                swal({
                  title: "提示",
                  text: "Licence\u9519\u8BEF",
                  button: "确认"
                });
                break;

              case -2:
                swal({
                  title: "提示",
                  text: "license\u8FC7\u671F",
                  button: "确认"
                });
                break;

              case -3:
                swal({
                  title: "提示",
                  text: "license\u7CFB\u7EDF\u65F6\u95F4\u88AB\u66F4\u6539",
                  button: "确认"
                });
                break;

              case -4:
                swal({
                  title: "提示",
                  text: "license\u5DF2\u88AB\u6CE8\u518C",
                  button: "确认"
                });
                break;

              case -5:
                swal({
                  title: "提示",
                  text: "license\u672A\u6FC0\u6D3B",
                  button: "确认"
                });
                break;
            }

            ;
          }
        })["catch"](function (err) {
          console.log('failed', err);
          swal({
            title: "提示",
            text: "\u8BF7\u6C42\u5931\u8D25",
            button: "确认"
          });
        });
      };
    }
  },
  beforeCreate: function beforeCreate() {
    document.getElementsByTagName("body")[0].className = "add_bg";
  },
  beforeDestroy: function beforeDestroy() {
    document.body.removeAttribute("class", "add_bg");
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=template&id=26084dc2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=template&id=26084dc2& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "login" } }, [
    _c("div", { staticClass: "login-edit" }, [
      _c("h3", { staticClass: "login_title" }, [_vm._v("配置管理中心")]),
      _vm._v(" "),
      _vm.noLicence
        ? _c("h3", { staticClass: "login_title2" }, [_vm._v("License注册")])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "underLine" }),
      _vm._v(" "),
      _vm.hasLicence
        ? _c("div", { staticClass: "login_box" }, [
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.userTips,
                    expression: "userTips"
                  }
                ],
                staticClass: "tips"
              },
              [_vm._v("用户名或密码错误")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "login_div" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                staticClass: "tpl-form-input",
                attrs: { type: "text", id: "user-name", placeholder: "账号" },
                domProps: { value: _vm.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "login_div" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "tpl-form-input",
                attrs: {
                  type: "password",
                  id: "pass_word",
                  placeholder: "密码"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "login_btns" }, [
              _c(
                "button",
                {
                  staticClass: "login_btn",
                  attrs: {
                    type: "button",
                    id: "login_btn",
                    disabled: _vm.username == "" || _vm.password == ""
                  },
                  on: {
                    click: function($event) {
                      return _vm.loginFunc()
                    }
                  }
                },
                [_vm._v("登录")]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.noLicence
        ? _c("div", { staticClass: "login_box" }, [
            _c("div", { staticClass: "licence_div" }, [
              _c("p", { staticClass: "licence_p" }, [_vm._v("机器码")]),
              _vm._v(" "),
              _c("p", { staticClass: "licence_text" }, [
                _vm._v(_vm._s(_vm.licenceNum))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "login_btns" }, [
              _c(
                "button",
                {
                  staticClass: "login_btn",
                  attrs: { type: "button", id: "licence_btn" },
                  on: {
                    click: function($event) {
                      return _vm.monidianji()
                    }
                  }
                },
                [_vm._v("注册")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "input-loc-img",
                attrs: { name: "fileLocal", id: "fileLocal", type: "file" },
                on: { change: _vm.setLicenceInfo }
              })
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "version_cont" }, [
      _c("p", { staticClass: "version_text" }, [
        _vm._v(
          "版权所有：浙江中自庆安新能源技术有限公司 V" + _vm._s(_vm.versionNum)
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon_btn" }, [
      _c("i", { staticClass: "iconfont icon-zhanghaoshezhi" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon_btn" }, [
      _c("i", { staticClass: "iconfont icon-zhongzi-mima" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/views/Login.vue":
/*!*****************************!*\
  !*** ./src/views/Login.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=26084dc2& */ "./src/views/Login.vue?vue&type=template&id=26084dc2&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./src/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=scss& */ "./src/views/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Login.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/views/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Login.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************!*\
  !*** ./src/views/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Login.vue?vue&type=template&id=26084dc2&":
/*!************************************************************!*\
  !*** ./src/views/Login.vue?vue&type=template&id=26084dc2& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=26084dc2& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/views/Login.vue?vue&type=template&id=26084dc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_26084dc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=64-9b45a9af.js.map