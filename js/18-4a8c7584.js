(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyContentTitle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyContentTitle",
  props: ["title"],
  data: function data() {
    return {
      flag: true
    };
  },
  methods: {
    dblclick: function dblclick() {
      //放大
      var homeHeader = document.getElementById("homeHeader");
      var aside = document.getElementById("aside");
      var content = document.getElementById("content");
      var wHeight = document.documentElement.clientHeight;

      if (this.flag) {
        homeHeader.style.display = "none";
        aside.style.display = "none";

        if (wHeight < 800) {
          content.style.height = "calc(100vh - 20px)"; //中间内容加大
        } else {
          content.style.height = "calc(100vh - 40px)"; //中间内容加大
        }

        this.$bus.$emit("reloadtable"); //主动渲染table

        this.$bus.$emit("reloadoverview"); //主动渲染总貌图

        this.flag = !this.flag;
      } else {
        //缩小
        homeHeader.style.display = "block";
        aside.style.display = "block";
        content.style.width = "100px"; //改变宽让宽自动渲染

        if (wHeight < 800) {
          content.style.height = "calc(100vh - 90px)"; //中间内容加大
        } else {
          content.style.height = "calc(100vh - 120px)"; //中间内容加大
        }

        this.$bus.$emit("reloadtable"); //主动渲染table

        this.$bus.$emit("reloadoverview"); //主动渲染总貌图

        this.flag = !this.flag;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "my-content-header", on: { dblclick: _vm.dblclick } },
    [_c("span", { staticClass: "page-title" }, [_vm._v(_vm._s(_vm.title))])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/common/MyContentTitle.vue":
/*!**************************************************!*\
  !*** ./src/components/common/MyContentTitle.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true& */ "./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true&");
/* harmony import */ var _MyContentTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyContentTitle.vue?vue&type=script&lang=js& */ "./src/components/common/MyContentTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css& */ "./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyContentTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e68802e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/MyContentTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/MyContentTitle.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/common/MyContentTitle.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyContentTitle.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=style&index=0&id=e68802e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_style_index_0_id_e68802e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyContentTitle.vue?vue&type=template&id=e68802e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyContentTitle_vue_vue_type_template_id_e68802e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/common/overviewCoalCommon.js":
/*!*****************************************************!*\
  !*** ./src/components/common/overviewCoalCommon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");

var overviewCoal = {
  data: function data() {
    return {
      choosePumpList: [],
      choosePosList: [],
      //选择的机组的测点列表
      overviewUrl: "",
      //总貌图背景路径
      dragMsg: null,
      // 拖动的机泵的信息
      MoveMsg: [],
      //移动的机泵的信息
      isRightClick: false,
      // 是否显示右键信息
      rightClickMsg: {
        // 右键选中机泵组件
        index: -1,
        // 右键选中组件下标
        data: null // 右键选中组件信息

      },
      isTip: false,
      //是否显示提示框
      overviewFont: 20,
      //总貌图名称字号大小
      bg_width: 1366,
      //背景宽
      bg_height: 768,
      //背景高
      bg_pwidth: 0,
      //背景图片的宽
      bg_pheight: 0,
      //背景图片的高
      bg_px: 0,
      //背景图相对于画图区域的百分比x
      bg_py: 0,
      //背景图相对于画图区域的百分比y
      origBlock: {
        //总貌图背景区域
        oriW: "",
        oriH: ""
      },
      isShow: {
        //机泵
        macIsShow: false //机组下拉框显示隐藏

      },
      //搜索下拉是否显示
      folderList1: [],
      //初始1级组织列表
      folderList2: [],
      //初始2级组织列表
      folderList3: [],
      //初始3级组织列表
      folderList4: [],
      //初始4级组织列表
      folderList5: [],
      //初始5级组织列表
      searchFolderList1: [],
      //1级组织搜索匹配到的组织列表
      searchFolderList2: [],
      //2级组织
      searchFolderList3: [],
      //3级组织
      searchFolderList4: [],
      //4级组织
      searchFolderList5: [],
      //5级组织
      searchInput1: '',
      //1级组织输入值
      searchInput2: '',
      //2级组织输入值
      searchInput3: '',
      //3级组织输入值
      searchInput4: '',
      //4级组织输入值
      searchInput5: '',
      //5级组织输入值
      isShow1: false,
      //搜索1级组织下拉是否显示
      isShow2: false,
      //搜索2级组织下拉是否显示
      isShow3: false,
      //搜索3级组织下拉是否显示
      isShow4: false,
      //搜索4级组织下拉是否显示
      isShow5: false,
      //搜索5级组织下拉是否显示
      moveDivMsg: {
        index: 0,
        //当前操作的下标
        width: 170,
        height: 50,
        x: 0,
        y: 0,
        circleD: 0,
        circleX: 0,
        circleY: 0
      },
      fontList: [10, 11, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
      //字号选择
      chooseItemList: [],
      //按住ctrl多选中的机泵/测点
      ratio_w: 1,
      //宽度的比例
      ratio_p: 1,
      //高度的比例
      isShowFont: false,
      //是否展示字号面板
      dragMoveBg: null,
      //移动的背景的信息
      basicItem: null,
      //基准机泵
      iconList: [{
        icon: 'icon-zuoduiqi_huaban1',
        title: '左对齐'
      }, {
        icon: 'icon-zuoyoujuzhong_huaban11',
        title: '水平居中'
      }, {
        icon: 'icon-youduiqi_huaban1',
        title: '右对齐'
      }, {
        icon: 'icon-dingduiqi_huaban1',
        title: '顶部对齐'
      }, {
        icon: 'icon-shangxiajuzhong_huaban11',
        title: '垂直居中'
      }, {
        icon: 'icon-diduiqi_huaban1',
        title: '底部对齐'
      }],
      isClickCtrol: false //是否点击操作对齐按钮

    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$store.state.tids.length > 0) {
      this.getTidData(); //获取所有的机组设置数据
    }

    ; // 在点击标题的时候放大并重新渲染表格

    this.$bus.$on('reloadoverview', function () {
      var type = 1;

      if (_this.$route.name === 'overviewPump') {
        type = 2;
      }

      _this.isClickCtrol = true;

      _this.keepOverview(type); //界面缩放，重新画图

    });
  },
  watch: {
    overviewFont: function overviewFont(val, oldVal) {
      //标题字号改变
      this.$refs.fontInput.style.fontSize = this.overviewFont + 'px';
    }
  },
  computed: {
    sortFolderList1: function sortFolderList1() {
      return this.searchFolderList1.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('t_name'));
    },
    sortFolderList2: function sortFolderList2() {
      return this.searchFolderList2.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('t_name'));
    },
    sortFolderList3: function sortFolderList3() {
      return this.searchFolderList3.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('t_name'));
    },
    sortFolderList4: function sortFolderList4() {
      return this.searchFolderList4.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('t_name'));
    },
    sortPumpList: function sortPumpList() {
      return this.searchPumpList.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('pump_name'));
    }
  },
  methods: {
    //保存总貌图

    /**
     * type: 1组织总貌；3：机泵总貌
     * **/
    keepOverview: function keepOverview(type) {
      var _this2 = this;

      var overViewObj = {},
          w,
          ppx,
          ppy;

      if (type == 2) {
        type = 3;
      }

      if (type === 1) {
        //组织总貌图
        overViewObj = {
          o_id: this.chooseFolder.t_id,
          //总貌图uid（=组织/机组/机泵uid）
          mac_id: "A",
          overview_info: {},
          itemList: [] //节点列表

        }; //总貌图
      } else if (type === 3) {
        //机泵总貌图
        overViewObj = {
          o_id: this.chooseMac.pump_id,
          //总貌图uid（=组织/机组/机泵uid）
          mac_id: this.chooseMac.mac_id,
          overview_info: {},
          itemList: [] //节点列表

        }; //总貌图
      }

      overViewObj.overview_info = {
        version: 1,
        o_name: this.o_name,
        //总貌图名称
        overviewFont: this.overviewFont,
        //总貌图名称字号大小
        bg_width: this.origBlock.oriW,
        //背景宽
        bg_height: this.origBlock.oriH //背景高

      };
      var obj = {},
          finalX,
          finalY,
          finalCircleX,
          finalCircleY;

      for (var i = 0; i < this.MoveMsg.length; i++) {
        var item = this.MoveMsg[i];
        finalX = item.x + item.moveX;
        finalY = item.y + item.moveY;
        finalCircleX = item.oriCircleX + item.moveCircleX;
        finalCircleY = item.oriCircleY + item.moveCircleY;
        item.px = (finalX / this.origBlock.oriW).toFixed(4);
        item.py = (finalY / this.origBlock.oriH).toFixed(4);
        item.circleX = (finalCircleX / this.origBlock.oriW).toFixed(4);
        item.circleY = (finalCircleY / this.origBlock.oriH).toFixed(4);
        obj = {
          id: i,
          //计数id
          type: type,
          //类型 1=组织 2=机组 3=机泵 4=测点
          itemType: this.MoveMsg[i].itemType,
          //设备类型 如1=破碎机
          uid: this.MoveMsg[i].uid,
          //节点uid，如"3_05"，表示id=05的振动测点
          px: (finalX / this.origBlock.oriW).toFixed(4),
          //相对于背景图的x位置
          py: (finalY / this.origBlock.oriH).toFixed(4),
          //相对于背景图的y位置
          width: this.MoveMsg[i].width,
          height: this.MoveMsg[i].height,
          itemName: this.MoveMsg[i].text,
          //编辑的部件名
          circleD: this.MoveMsg[i].circleD,
          //圆点的直径
          circleX: (finalCircleX / this.origBlock.oriW).toFixed(4),
          //小圆百分比的x位置
          circleY: (finalCircleY / this.origBlock.oriH).toFixed(4) //小圆百分比的y

        };
        overViewObj.itemList.push(obj);
      }

      if (overViewObj.o_id && overViewObj.o_id != "") {
        this.$axios.post('updateTreeOverview', overViewObj).then(function (res) {
          if (res.msg == 0) {
            if (!_this2.isClickCtrol) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              });
            }

            _this2.isClickCtrol = false;

            if (type == 3) {
              type = 2;
            }

            _this2.queryOverview(type); //更新视图

          } else if (res.msg == 1) {
            console.log('参数为空');
            swal({
              title: "提示",
              text: '保存失败',
              button: "确认"
            });
          } else if (res.msg == 2) {
            console.log('后台运行错误');
            swal({
              title: "提示",
              text: '保存失败',
              button: "确认"
            });
          }
        })["catch"](function (err) {
          console.log('请求失败', err);
        });
      }
    },
    //上传总貌图背景图

    /**
     * type: 1组织总貌；2：机泵总貌
     * **/
    selectImg: function selectImg(type) {
      var _this3 = this;

      var that = this;

      if (that.MoveMsg.length) {
        var finalX, finalY, finalCircleX, finalCircleY;
        that.MoveMsg.forEach(function (item) {
          finalX = item.x + item.moveX;
          finalY = item.y + item.moveY;
          finalCircleX = item.oriCircleX + item.moveCircleX;
          finalCircleY = item.oriCircleY + item.moveCircleY;
          item.px = (finalX / _this3.origBlock.oriW).toFixed(4);
          item.py = (finalY / _this3.origBlock.oriH).toFixed(4);
          item.circleX = (finalCircleX / _this3.origBlock.oriW).toFixed(4);
          item.circleY = (finalCircleY / _this3.origBlock.oriH).toFixed(4);
        });
      }

      var imgFile = $('#imgLocal')[0].files[0]; //取到上传的图片

      var param = new FormData(); // 创建form对象

      param.append('files', imgFile); //对应后台接收图片名

      if (type === 1) {
        param.append('id', this.chooseFolder.t_id);
        param.append('mac_id', "A");
      } else if (type === 2) {
        param.append('id', this.chooseMac.pump_id);
        param.append('mac_id', this.chooseMac.mac_id);
        param.append('ch_class', this.chooseMac.ch_class);
      }

      var overview_json = {
        version: 1,
        o_name: that.o_name,
        overviewFont: that.overviewFont
      };
      overview_json = JSON.stringify(overview_json);
      param.append('overview_json', overview_json);
      this.$axios.post('createTreeOverview', param, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        // console.log(res);//
        $('#imgLocal')[0].value = "";

        if (res.msg == 0) {
          swal({
            title: "提示",
            text: '上传成功',
            button: "确认"
          });

          if (type === 1) {
            that.overviewUrl = '';
            that.MoveMsg = [];
            var result = res.folder.overview;

            if (!$.isEmptyObject(result)) {
              that.overviewUrl = result.bgurl;

              if (result.o_name) {
                that.o_name = result.o_name;
              } else {
                that.o_name = that.chooseFolder.t_name;
              }

              if (result.overviewFont) {
                that.overviewFont = result.overviewFont;
              } else {
                that.overviewFont = 20;
              } // that.overviewUrl = require("assets/img/overview_pump.jpg");


              var img_url = result.bgurl; // let img_url = require("assets/img/overview_pump.jpg");
              // 创建对象

              var img = new Image(); // 改变图片的src

              img.src = img_url; // 加载完成执行

              img.onload = function () {
                /* 获取图片的真实宽高，计算背景图区域 */
                that.computePicWidth(img);
                var oriItemList = result.itemList;

                if (oriItemList && oriItemList.length) {
                  for (var i = 0; i < oriItemList.length; i++) {
                    if (typeof oriItemList[i].circleD === "undefined") {
                      oriItemList[i].circleD = 14; //设置小圆点的默认值为14
                    }

                    var obj = {
                      index: i,
                      text: oriItemList[i].itemName,
                      //输入框中文字
                      px: oriItemList[i].px,
                      //框框百分比的x
                      py: oriItemList[i].py,
                      //框框百分比的y
                      x: parseInt(oriItemList[i].px * that.origBlock.oriW),
                      //页面的x
                      y: parseInt(oriItemList[i].py * that.origBlock.oriH),
                      //页面的y
                      uid: oriItemList[i].uid,
                      itemType: oriItemList[i].pump_type,
                      //机泵类型
                      width: Number(oriItemList[i].width),
                      //旧：机泵图标宽；新：框框的宽
                      height: Number(oriItemList[i].height),
                      //旧：机泵图标高；新：框框的高
                      circleD: Number(oriItemList[i].circleD),
                      //小圆的直径
                      circleX: oriItemList[i].circleX,
                      //小圆百分比的x
                      circleY: oriItemList[i].circleY,
                      //小圆百分比的y
                      moveX: 0,
                      //相对原来的框的移动位置x
                      moveY: 0,
                      //相对原来的框的移动位置y
                      moveCircleX: 0,
                      //圆点相对原来的框的移动位置x
                      moveCircleY: 0,
                      //圆点相对原来的框的移动位置y
                      oriCircleX: parseInt(oriItemList[i].circleX * that.origBlock.oriW),
                      //圆点初始x
                      oriCircleY: parseInt(oriItemList[i].circleY * that.origBlock.oriH),
                      //圆点初始y
                      style: {
                        left: parseInt(oriItemList[i].px * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].py * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      circleStyle: {
                        left: parseInt(oriItemList[i].circleX * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].circleY * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      inputStyle: {
                        //更新input的高
                        height: Number(oriItemList[i].height) / 2 + 'px'
                      }
                    };

                    for (var j = 0; j < res.pump_list.length; j++) {
                      if (oriItemList[i].uid == res.pump_list[j].pump_id) {
                        res.pump_list[j].dragFlag = false;
                        obj.dragFlag = false;
                        obj.mac_id = res.pump_list[j].mac_id;
                        obj.ch_class = res.pump_list[j].ch_class;
                        obj.pump_name = res.pump_list[j].pump_name;
                        that.MoveMsg.push(obj);
                      }
                    }
                  }
                }

                that.keepOverview(type); //上传图片信息
              };
            } else {
              that.overviewUrl = "";
              that.o_name = that.chooseFolder.t_name;
            }

            that.choosePumpList = res.pump_list;

            if (that.choosePumpList.length > 0) {
              for (var i = 0; i < that.choosePumpList.length; i++) {
                that.choosePumpList[i].itemType = that.choosePumpList[i].pump_type;

                if (that.choosePumpList[i].dragFlag === false) {} else {
                  that.choosePumpList[i].dragFlag = true;
                }
              }
            }
          } else if (type === 2) {
            that.MoveMsg = [];

            if (res.overview != null && !$.isEmptyObject(res.overview)) {
              var _result = res.overview;
              that.overviewUrl = _result.bgurl;

              if (_result.o_name) {
                that.o_name = _result.o_name;
              } else {
                that.o_name = _this3.chooseMac.pump_name;
              }

              if (_result.overviewFont) {
                that.overviewFont = _result.overviewFont;
              } else {
                that.overviewFont = 20;
              } // that.overviewUrl = require("assets/img/overview_pump.jpg");
              // 图片地址


              var _img_url = _result.bgurl; // let img_url = require("assets/img/overview_pump.jpg");
              // 创建对象

              var _img = new Image(); // 改变图片的src


              _img.src = _img_url; // 加载完成执行

              _img.onload = function () {
                /* 获取图片的真实宽高，计算背景图区域 */
                that.computePicWidth(_img);
                var oriItemList = res.overview.itemList;

                if (oriItemList != null) {
                  for (var _i = 0; _i < oriItemList.length; _i++) {
                    if (typeof oriItemList[_i].circleD === "undefined") {
                      oriItemList[_i].circleD = 14; //设置小圆点的默认值为14
                    }

                    var obj = {
                      index: _i,
                      text: oriItemList[_i].itemName,
                      //输入框中文字
                      px: oriItemList[_i].px,
                      //框框百分比的x
                      py: oriItemList[_i].py,
                      //框框百分比的y
                      x: parseInt(oriItemList[_i].px * that.origBlock.oriW),
                      //页面的x
                      y: parseInt(oriItemList[_i].py * that.origBlock.oriH),
                      //页面的y
                      uid: oriItemList[_i].uid,
                      width: Number(oriItemList[_i].width),
                      //旧：机泵图标宽；新：框框的宽
                      height: Number(oriItemList[_i].height),
                      //旧：机泵图标高；新：框框的高
                      circleD: Number(oriItemList[_i].circleD),
                      //小圆的直径
                      circleX: oriItemList[_i].circleX,
                      //小圆百分比的x
                      circleY: oriItemList[_i].circleY,
                      //小圆百分比的y
                      moveX: 0,
                      //相对原来的框的移动位置x
                      moveY: 0,
                      //相对原来的框的移动位置y
                      moveCircleX: 0,
                      //圆点相对原来的框的移动位置x
                      moveCircleY: 0,
                      //圆点相对原来的框的移动位置y
                      oriCircleX: parseInt(oriItemList[_i].circleX * that.origBlock.oriW),
                      //圆点初始x
                      oriCircleY: parseInt(oriItemList[_i].circleY * that.origBlock.oriH),
                      //圆点初始y
                      style: {
                        left: parseInt(oriItemList[_i].px * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[_i].py * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      circleStyle: {
                        left: parseInt(oriItemList[_i].circleX * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[_i].circleY * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      inputStyle: {
                        //更新input的高
                        height: Number(oriItemList[_i].height) / 2 + 'px'
                      }
                    };

                    for (var j = 0; j < res.position_list.length; j++) {
                      var typeId = res.position_list[j].pos_type + '_' + res.position_list[j].pos_id;

                      if (oriItemList[_i].uid == typeId) {
                        res.position_list[j].dragFlag = false;
                        obj.dragFlag = false;
                        that.MoveMsg.push(obj);
                      }
                    }
                  }
                }

                that.keepOverview(type); //上传图片信息
              };
            } else {
              that.overviewUrl = '';
            }

            that.choosePosList = that.sortPositionsName(res.position_list);

            for (var _i2 = 0; _i2 < that.choosePosList.length; _i2++) {
              that.choosePosList[_i2].itemType = that.choosePosList[_i2].pos_type;

              if (that.choosePosList[_i2].dragFlag === false) {} else {
                that.choosePosList[_i2].dragFlag = true;
              }
            }
          }
        } else if (res.msg == 1) {
          console.log("参数为空");
          swal({
            title: "提示",
            text: '上传失败',
            button: "确认"
          });
        } else if (res.msg == 2) {
          console.log("后台运行错误");
          swal({
            title: "提示",
            text: '上传失败',
            button: "确认"
          });
        } else if (res.msg == 3) {
          console.log("获取json数据时为空");
          swal({
            title: "提示",
            text: '上传失败',
            button: "确认"
          });
        }
      })["catch"](function (error) {
        console.log(error);
        $('#imgLocal')[0].value = "";
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //获取总貌图数据
    queryOverview: function queryOverview(type) {
      var that = this;
      var tidObj = {
        t_id: this.chooseFolder.t_id,
        type: type
      };
      this.$axios.post('queryPumpOverviewInfoByTId', tidObj).then(function (res) {
        if (type === 1) {
          that.overviewUrl = '';

          if (res.msg == 0) {
            that.MoveMsg = [];
            var result = res.folder.overview;

            if (!$.isEmptyObject(result)) {
              that.overviewUrl = result.bgurl;

              if (result.o_name) {
                that.o_name = result.o_name;
              } else {
                that.o_name = that.chooseFolder.t_name;
              }

              if (result.overviewFont) {
                that.overviewFont = result.overviewFont;
              } else {
                that.overviewFont = 20;
              } // that.overviewUrl = require("assets/img/overview_pump.jpg");


              var img_url = result.bgurl; // let img_url = require("assets/img/overview_pump.jpg");
              // 创建对象

              var img = new Image(); // 改变图片的src

              img.src = img_url; // 加载完成执行

              img.onload = function () {
                /* 获取图片的真实宽高，计算背景图区域 */
                that.computePicWidth(img);
                var oriItemList = result.itemList;

                if (oriItemList && oriItemList.length) {
                  for (var i = 0; i < oriItemList.length; i++) {
                    if (typeof oriItemList[i].circleD === "undefined") {
                      oriItemList[i].circleD = 14; //设置小圆点的默认值为14
                    }

                    var obj = {
                      index: i,
                      text: oriItemList[i].itemName,
                      //输入框中文字
                      px: oriItemList[i].px,
                      //框框百分比的x
                      py: oriItemList[i].py,
                      //框框百分比的y
                      x: parseInt(oriItemList[i].px * that.origBlock.oriW),
                      //页面的x
                      y: parseInt(oriItemList[i].py * that.origBlock.oriH),
                      //页面的y
                      uid: oriItemList[i].uid,
                      itemType: oriItemList[i].pump_type,
                      //机泵类型
                      width: Number(oriItemList[i].width),
                      //旧：机泵图标宽；新：框框的宽
                      height: Number(oriItemList[i].height),
                      //旧：机泵图标高；新：框框的高
                      circleD: Number(oriItemList[i].circleD),
                      //小圆的直径
                      circleX: oriItemList[i].circleX,
                      //小圆百分比的x
                      circleY: oriItemList[i].circleY,
                      //小圆百分比的y
                      moveX: 0,
                      //相对原来的框的移动位置x
                      moveY: 0,
                      //相对原来的框的移动位置y
                      moveCircleX: 0,
                      //圆点相对原来的框的移动位置x
                      moveCircleY: 0,
                      //圆点相对原来的框的移动位置y
                      oriCircleX: parseInt(oriItemList[i].circleX * that.origBlock.oriW),
                      //圆点初始x
                      oriCircleY: parseInt(oriItemList[i].circleY * that.origBlock.oriH),
                      //圆点初始y
                      style: {
                        left: parseInt(oriItemList[i].px * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].py * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      circleStyle: {
                        left: parseInt(oriItemList[i].circleX * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].circleY * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      inputStyle: {
                        //更新input的高
                        height: Number(oriItemList[i].height) / 2 + 'px'
                      }
                    };

                    for (var j = 0; j < res.pump_list.length; j++) {
                      if (oriItemList[i].uid == res.pump_list[j].pump_id) {
                        res.pump_list[j].dragFlag = false;
                        obj.dragFlag = false;
                        obj.mac_id = res.pump_list[j].mac_id;
                        obj.ch_class = res.pump_list[j].ch_class;
                        obj.pump_name = res.pump_list[j].pump_name;
                        that.MoveMsg.push(obj);
                      }
                    }
                  }
                }
              };
            } else {
              that.overviewUrl = "";
              that.o_name = that.chooseFolder.t_name;
            }

            that.choosePumpList = res.pump_list;

            if (that.choosePumpList.length > 0) {
              for (var i = 0; i < that.choosePumpList.length; i++) {
                // that.choosePumpList[i].url=require('assets/img/cement_machines/'+that.getPumpImg(that.choosePumpList[i].pump_type).machine+'.png');
                // that.choosePumpList[i].width=that.getPumpImg(that.choosePumpList[i].pump_type).width;
                // that.choosePumpList[i].height=that.getPumpImg(that.choosePumpList[i].pump_type).height;
                that.choosePumpList[i].itemType = that.choosePumpList[i].pump_type;

                if (that.choosePumpList[i].dragFlag === false) {} else {
                  that.choosePumpList[i].dragFlag = true;
                }
              }
            }
          }
        } else if (type === 2) {
          if (res.msg == 0) {
            that.choosePumpList = res.pump_list;
            that.searchPumpList = that.choosePumpList;

            if (that.choosePumpList.length > 0) {
              that.$refs.searchMacInput.value = that.sortPumpList[0].pump_name;

              if (that.chooseMac.pump_id != "") {
                //从总貌图带过来的pump信息
                that.selectMac(that.chooseMac);
              } else {
                that.chooseMac = that.sortPumpList[0];
                that.selectMac(that.chooseMac, 0);
              }
            } else {
              that.$refs.searchMacInput.value = '';
              that.choosePosList = [];
              that.MoveMsg = [];
              that.overviewUrl = '';
              that.chooseMac = {
                ch_class: "",
                mac_id: "",
                pump_id: "",
                pump_name: ""
              };
            }
          }
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //获取组织信息
    getTidData: function getTidData() {
      var that = this;
      var paramObj = null;
      paramObj = {
        t_ids: this.$store.state.tids
      };
      this.$axios.post('queryAllT_OverviewInfo', paramObj).then(function (res) {
        that.folderList1 = [];
        that.folderList2 = [];
        that.folderList3 = [];
        that.folderList4 = [];

        for (var i = 0; i < res.length; i++) {
          if (res[i].t_root == 1) {
            that.folderList1.push(res[i]);
          }
        }

        that.searchFolderList1 = that.folderList1.concat();
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //确定选择组织

    /**
     * chooseInfo:所选中的组织信息；
     * e:点击元素；
     * type:1一级组织，2二级组织，3三级组织，4四级组织；
     * pageType：1组织设置，2机泵设置
     * **/
    selectFolder: function selectFolder(chooseInfo, e, type, pageType) {
      $('pump_li').siblings().removeClass('active');
      var num = Number(type + 1);

      if (chooseInfo.child && chooseInfo.child.length) {
        this["folderList".concat(num)] = chooseInfo.child.concat();
        this["searchFolderList".concat(num)] = chooseInfo.child;
        this.$refs["searchInput".concat(num)].value = '';
      } else {
        if (this.$refs["searchInput".concat(num)]) {
          this["searchFolderList".concat(num)] = [];
          this.$refs["searchInput".concat(num)].value = '';
        }
      }

      if (e !== null) {
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
      }

      this.chooseFolder = chooseInfo;
      this.choosePumpList.length = 0; //切换组织时机泵列表清空

      if (type) this.$refs["searchInput".concat(type)].value = this.chooseFolder.t_name;
      this["isShow".concat(type)] = false;
      var that = this;
      var tidObj = {
        t_id: this.chooseFolder.t_id,
        type: pageType
      };
      this.$axios.post('queryPumpOverviewInfoByTId', tidObj).then(function (res) {
        if (pageType === 1) {
          that.overviewUrl = '';

          if (res.msg == 0) {
            that.MoveMsg = [];
            var result = res.folder.overview;

            if (!$.isEmptyObject(result)) {
              that.overviewUrl = result.bgurl;

              if (result.o_name) {
                that.o_name = result.o_name;
              } else {
                that.o_name = that.chooseFolder.t_name;
              }

              if (result.overviewFont) {
                that.overviewFont = result.overviewFont;
              } else {
                that.overviewFont = 20;
              } // that.overviewUrl = require("assets/img/overview_pump.jpg");


              var img_url = result.bgurl; // let img_url = require("assets/img/overview_pump.jpg");
              // 创建对象

              var img = new Image(); // 改变图片的src

              img.src = img_url; // 加载完成执行

              img.onload = function () {
                /* 获取图片的真实宽高，计算背景图区域 */
                that.computePicWidth(img);
                var oriItemList = result.itemList;

                if (oriItemList && oriItemList.length) {
                  for (var i = 0; i < oriItemList.length; i++) {
                    if (typeof oriItemList[i].circleD === "undefined") {
                      oriItemList[i].circleD = 14; //设置小圆点的默认值为14
                    }

                    var obj = {
                      index: i,
                      text: oriItemList[i].itemName,
                      //输入框中文字
                      px: oriItemList[i].px,
                      //框框百分比的x
                      py: oriItemList[i].py,
                      //框框百分比的y
                      x: parseInt(oriItemList[i].px * that.origBlock.oriW),
                      //页面的x
                      y: parseInt(oriItemList[i].py * that.origBlock.oriH),
                      //页面的y
                      uid: oriItemList[i].uid,
                      itemType: oriItemList[i].pump_type,
                      //机泵类型
                      width: Number(oriItemList[i].width),
                      //旧：机泵图标宽；新：框框的宽
                      height: Number(oriItemList[i].height),
                      //旧：机泵图标高；新：框框的高
                      circleD: Number(oriItemList[i].circleD),
                      //小圆的直径
                      circleX: oriItemList[i].circleX,
                      //小圆百分比的x
                      circleY: oriItemList[i].circleY,
                      //小圆百分比的y
                      moveX: 0,
                      //相对原来的框的移动位置x
                      moveY: 0,
                      //相对原来的框的移动位置y
                      moveCircleX: 0,
                      //圆点相对原来的框的移动位置x
                      moveCircleY: 0,
                      //圆点相对原来的框的移动位置y
                      oriCircleX: parseInt(oriItemList[i].circleX * that.origBlock.oriW),
                      //圆点初始x
                      oriCircleY: parseInt(oriItemList[i].circleY * that.origBlock.oriH),
                      //圆点初始y
                      style: {
                        left: parseInt(oriItemList[i].px * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].py * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      circleStyle: {
                        left: parseInt(oriItemList[i].circleX * that.origBlock.oriW) + 'px',
                        top: parseInt(oriItemList[i].circleY * that.origBlock.oriH) + 'px',
                        zIndex: 2
                      },
                      inputStyle: {
                        //更新input的高
                        height: Number(oriItemList[i].height) / 2 + 'px'
                      }
                    };

                    for (var j = 0; j < res.pump_list.length; j++) {
                      if (oriItemList[i].uid == res.pump_list[j].pump_id) {
                        res.pump_list[j].dragFlag = false;
                        obj.dragFlag = false;
                        obj.mac_id = res.pump_list[j].mac_id;
                        obj.ch_class = res.pump_list[j].ch_class;
                        obj.pump_name = res.pump_list[j].pump_name;
                        that.MoveMsg.push(obj);
                      }
                    }
                  }
                }
              };
            } else {
              that.overviewUrl = "";
              that.o_name = that.chooseFolder.t_name;
            }

            that.choosePumpList = res.pump_list;

            if (that.choosePumpList.length > 0) {
              for (var i = 0; i < that.choosePumpList.length; i++) {
                // that.choosePumpList[i].url=require('assets/img/cement_machines/'+that.getPumpImg(that.choosePumpList[i].pump_type).machine+'.png');
                // that.choosePumpList[i].width=that.getPumpImg(that.choosePumpList[i].pump_type).width;
                // that.choosePumpList[i].height=that.getPumpImg(that.choosePumpList[i].pump_type).height;
                that.choosePumpList[i].itemType = that.choosePumpList[i].pump_type;

                if (that.choosePumpList[i].dragFlag === false) {} else {
                  that.choosePumpList[i].dragFlag = true;
                }
              }
            }
          }
        } else if (pageType === 2) {
          if (res.msg == 0) {
            that.choosePumpList = res.pump_list;
            that.searchPumpList = that.choosePumpList;

            if (that.choosePumpList.length > 0) {
              that.$refs.searchMacInput.value = that.sortPumpList[0].pump_name;

              if (that.chooseMac.pump_id != "" && e === null) {
                //从总貌图带过来的pump信息
                that.selectMac(that.chooseMac);
              } else {
                that.chooseMac = that.sortPumpList[0];
                that.selectMac(that.chooseMac, 0);
              }
            } else {
              that.$refs.searchMacInput.value = '';
              that.choosePosList = [];
              that.MoveMsg = [];
              that.overviewUrl = '';
              that.chooseMac = {
                ch_class: "",
                mac_id: "",
                pump_id: "",
                pump_name: ""
              };
            }
          }
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //获取图片的真实宽高，计算背景图区域
    computePicWidth: function computePicWidth(img) {
      var imgW = img.width;
      var imgH = img.height;
      var p_w = $('#overview-pic').width();
      var p_h = $('#overview-pic').height();

      if (imgW <= p_w && imgH <= p_h) {
        this.origBlock.oriW = imgW;
        this.origBlock.oriH = imgH;
      } else {
        if (p_w / p_h > imgW / imgH) {
          this.origBlock.oriW = parseInt(imgW * p_h / imgH);
          this.origBlock.oriH = p_h;
        } else {
          this.origBlock.oriW = p_w;
          this.origBlock.oriH = parseInt(imgH * p_w / imgW);
        }
      }

      $('#move-block').css({
        'width': this.origBlock.oriW + 'px',
        'height': this.origBlock.oriH + 'px'
      });
    },
    // 选择标题字号
    pickFont: function pickFont(item) {
      this.overviewFont = item;
      this.isShowFont = false;
    },
    //选择机泵
    clickPump: function clickPump(pump, index) {
      $('.pump-li').eq(index).addClass('active').siblings().removeClass('active');
      this.choosePump = pump;
    },
    //点击选择组织输入框，选中状态改变
    addClass: function addClass(e) {
      $('.search').removeClass('active');
      e.currentTarget.classList.add('active');
    },
    openList: function openList(type, num) {
      for (var i = 1; i <= 4; i++) {
        if (i !== type) {
          //将其他选框下拉选项关闭
          this["isShow".concat(i)] = false;
        }
      }

      this["isShow".concat(type)] = !this["isShow".concat(type)];

      if (this["isShow".concat(type)]) {
        //如果组织下拉展开了，那么关闭机泵下拉选项
        this.isShow.macIsShow = false;
      }

      if (num === 2) {
        //机泵总貌图
        this.isShow.macIsShow = !this.isShow.macIsShow;
      }
    },
    // 左侧机组拖到总貌图位置

    /**
     * type: 1组织总貌；2：机泵总貌
     * **/
    drop: function drop(e, type) {
      var msg = this.dragMsg,
          x,
          y;

      if (msg) {
        x = e.offsetX - msg.left;
        y = e.offsetY - msg.top; // x = e.offsetX;
        // y = e.offsetY;

        if (this.overviewUrl != '') {
          var obj = {};

          if (type === 1) {
            msg.pump.dragFlag = false;
            obj = {
              x: x,
              y: y,
              uid: msg.uid,
              mac_id: msg.mac_id,
              ch_class: msg.ch_class,
              pump_name: msg.pump_name,
              itemType: msg.itemType,
              width: msg.width,
              height: msg.height,
              text: msg.text,
              url: msg.url,
              oriCircleX: x + 5,
              oriCircleY: y + 42,
              circleD: 14,
              //小圆的直径
              circleX: 0,
              //小圆百分比的x
              circleY: 0,
              //小圆百分比的y
              moveCircleX: 0,
              moveCircleY: 0,
              moveX: 0,
              moveY: 0,
              style: {
                left: x + 'px',
                top: y + 'px',
                zIndex: 2
              },
              circleStyle: {
                left: x + 5 + 'px',
                top: y + 42 + 'px',
                zIndex: 2
              }
            };
          } else if (type === 2) {
            msg.pos.dragFlag = false;
            obj = {
              x: e.offsetX - msg.left,
              y: e.offsetY - msg.top,
              uid: msg.uid,
              itemType: msg.itemType,
              width: msg.width,
              height: msg.height,
              text: msg.text,
              url: msg.url,
              oriCircleX: x + 5,
              oriCircleY: y + 42,
              circleD: 14,
              //小圆的直径
              circleX: 0,
              //小圆百分比的x
              circleY: 0,
              //小圆百分比的y
              moveCircleX: 0,
              moveCircleY: 0,
              moveX: 0,
              moveY: 0,
              style: {
                left: x + 'px',
                top: y + 'px',
                zIndex: 2
              },
              circleStyle: {
                left: x + 5 + 'px',
                top: y + 42 + 'px',
                zIndex: 2
              }
            };
          }

          this.MoveMsg.push(obj);
        }
        /*else{
            let item = this.MoveMsg[msg.index];
            if(!("width" in item)){
                item.width=$('.move-div').eq(msg.index).width();
                item.height=$('.move-div').eq(msg.index).height();
            }
            for (let i = 0, l = this.MoveMsg.length; i < l; i++) {
                if (i !== msg.index)
                    this.MoveMsg[i].style.zIndex = 2;
            }
            let tag = e.target;
              if (x <= item.width && y <= item.height) {
                if ($(tag).hasClass('move-div')) {
                    if (tag.style.left === item.style.left && tag.style.top === item.style.top) {
                        x += item.x;
                        y += item.y;
                    } else {
                        x += Number(tag.style.left.slice(0, -2)); y += Number(tag.style.top.slice(0, -2));
                    }
                }
                if (tag.tagName === 'IMG' || tag.tagName === 'P') {
                    let p = tag.parentNode;
                    if (p.style.left === item.style.left && p.style.top === item.style.top) {
                        x += (item.x + tag.offsetLeft);
                        y += (item.y + tag.offsetTop);
                    } else {
                        x += (Number(p.style.left.slice(0, -2)) + tag.offsetLeft);
                        y += (Number(p.style.top.slice(0, -2)) + tag.offsetTop);
                    }
                }
            }
            item.x = x;
            item.y = y;
            item.px = (x/this.origBlock.oriW).toFixed(4);//相对于背景图的x位置
            item.py = (y/this.origBlock.oriH).toFixed(4);//相对于背景图的y位置
            item.style = {
                left: x + 'px',
                top: y + 'px',
                zIndex: 3,
            }
        }*/

      }
    },

    /**
     * move-div选中事件
     * **/
    onActivated: function onActivated(item, index) {
      var _this4 = this;

      item.index = index;
      this.moveDivMsg.index = index;

      if (window.event.ctrlKey) {
        //按住ctrl键
        this.chooseItemList.push(item);
      } else {
        this.chooseItemList = [];
      }

      if (this.chooseItemList.length && this.basicItem !== null) {
        this.chooseItemList.forEach(function (item, index) {
          if (item.index == _this4.basicItem.index) {
            _this4.chooseItemList.splice(index, 1);
          }
        });
      }
    },

    /**
     * type: 1左对齐；2：水平居中，3：右对齐，4：顶部对齐，5：垂直居中，6：底部对齐
     * pageType:1,组织总貌图，2，机泵总貌图
     * **/
    calcPos: function calcPos(type, pageType) {
      var referL, referM, referR, referT, referMH, referB, width, height, moveX0, moveY0, style;
      var choosePos = this.chooseItemList;
      var divList = document.getElementsByClassName('move-div');
      var referItem = this.basicItem; //基准

      if (!choosePos.length || referItem === null) {
        return;
      }

      this.isClickCtrol = true;
      width = referItem.width; //第一个的框宽

      height = referItem.height; //第一个的框高

      referL = referItem.x + referItem.moveX;
      referT = referItem.y + referItem.moveY;
      referMH = referT + height / 2; //垂直的中间距离

      referR = referL + width; //右侧的坐标

      referM = referL + width / 2; //中间的坐标

      referB = referT + height; //底部的坐标

      var l = 0;

      switch (type) {
        case 0:
          //左对齐
          for (var i = 0; i < choosePos.length; i++) {
            var item = choosePos[i];

            if (item.moveX === 0) {
              item.x = referL;
              item.moveX = 0;
              item.style.left = referL + 'px';
            } else {
              l = referL - item.x;
              choosePos[i].moveX = l;

              for (var j = 0; j < divList.length; j++) {
                var index = divList[j].getAttribute('custom-id');

                if (Number(index) == item.index) {
                  divList[j].style.transform = "translate(".concat(l, "px,").concat(item.moveY, "px)");
                }
              }
            }
          }

          break;

        case 1:
          //中对齐
          for (var _i3 = 0; _i3 < choosePos.length; _i3++) {
            var _item = choosePos[_i3];

            if (_item.moveX === 0) {
              _item.x = referM;
              _item.moveX = 0;
              _item.style.left = referM + 'px';
            } else {
              l = referM - choosePos[_i3].width / 2 - choosePos[_i3].x;
              choosePos[_i3].moveX = l;

              for (var _j = 0; _j < divList.length; _j++) {
                var _index = divList[_j].getAttribute('custom-id');

                if (Number(_index) == _item.index) {
                  divList[_j].style.transform = "translate(".concat(l, "px,").concat(_item.moveY, "px)");
                }
              }
            }
          }

          break;

        case 2:
          //右对齐
          for (var _i4 = 0; _i4 < choosePos.length; _i4++) {
            var _item2 = choosePos[_i4];

            if (_item2.moveX === 0) {
              _item2.x = referR;
              _item2.moveX = 0;
              _item2.style.left = referR + 'px';
            } else {
              l = referR - choosePos[_i4].width - choosePos[_i4].x;
              choosePos[_i4].moveX = l;

              for (var _j2 = 0; _j2 < divList.length; _j2++) {
                var _index2 = divList[_j2].getAttribute('custom-id');

                if (Number(_index2) == _item2.index) {
                  divList[_j2].style.transform = "translate(".concat(l, "px,").concat(_item2.moveY, "px)");
                }
              }
            }
          }

          break;

        case 3:
          //上对齐
          for (var _i5 = 0; _i5 < choosePos.length; _i5++) {
            var _item3 = choosePos[_i5];

            if (_item3.moveY === 0) {
              _item3.y = referT;
              _item3.moveY = 0;
              _item3.style.top = referT + 'px';
            } else {
              l = referT - choosePos[_i5].y;
              choosePos[_i5].moveY = l;

              for (var _j3 = 0; _j3 < divList.length; _j3++) {
                var _index3 = divList[_j3].getAttribute('custom-id');

                if (Number(_index3) == _item3.index) {
                  divList[_j3].style.transform = "translate(".concat(_item3.moveX, "px,").concat(l, "px)");
                }
              }
            }
          }

          break;

        case 4:
          //垂直居中对齐
          for (var _i6 = 0; _i6 < choosePos.length; _i6++) {
            var _item4 = choosePos[_i6];

            if (_item4.moveY === 0) {
              _item4.y = referMH;
              _item4.moveY = 0;
              _item4.style.top = referMH + 'px';
            } else {
              l = referMH - choosePos[_i6].height / 2 - choosePos[_i6].y;
              choosePos[_i6].moveY = l;

              for (var _j4 = 0; _j4 < divList.length; _j4++) {
                var _index4 = divList[_j4].getAttribute('custom-id');

                if (Number(_index4) == _item4.index) {
                  divList[_j4].style.transform = "translate(".concat(_item4.moveX, "px,").concat(l, "px)");
                }
              }
            }
          }

          break;

        case 5:
          //下对齐
          for (var _i7 = 0; _i7 < choosePos.length; _i7++) {
            var _item5 = choosePos[_i7];

            if (_item5.moveY === 0) {
              _item5.y = referB;
              _item5.moveY = 0;
              _item5.style.top = referB + 'px';
            } else {
              l = referB - choosePos[_i7].height - choosePos[_i7].y;
              choosePos[_i7].moveY = l;

              for (var _j5 = 0; _j5 < divList.length; _j5++) {
                var _index5 = divList[_j5].getAttribute('custom-id');

                if (Number(_index5) == _item5.index) {
                  divList[_j5].style.transform = "translate(".concat(_item5.moveX, "px,").concat(l, "px)");
                }
              }
            }
          }

          break;
      }

      $('.move-div').removeClass('addActive'); //移除掉所有标红的框

      this.chooseItemList = [];
      this.keepOverview(pageType);
    },

    /*
    * 拖拽按钮type:1向上，2向右上，3右，4，右下，5下，6左下，7，左，8左上
    * */
    onResize: function onResize(x, y, width, height) {
      this.moveDivMsg.width = width;
      this.moveDivMsg.height = height;
      this.moveDivMsg.x = x;
      this.moveDivMsg.y = y;
    },
    onDrag: function onDrag(x, y) {
      this.moveDivMsg.x = x;
      this.moveDivMsg.y = y;
    },
    // 拖动左侧组件

    /**
     * type: 1组织总貌；2：机泵总貌
     * **/
    dragstart: function dragstart(item, index, e, type) {
      if (item.dragFlag) {
        this.dragMsg = null;
        var tag = e.target;
        this.dragMsg = {
          url: item.url,
          uid: item.pos_type + "_" + item.pos_id,
          itemType: item.pos_type,
          left: e.offsetX,
          top: e.offsetY,
          width: 70,
          height: 50,
          text: item.pos_name,
          type: index + 1,
          inputStyle: {
            height: '28px'
          }
        };

        if (type === 1) {
          this.dragMsg.itemType = item.pump_type;
          this.dragMsg.uid = item.pump_id;
          this.dragMsg.pump = item;
          this.dragMsg.text = item.pump_name;
          this.dragMsg.mac_id = item.mac_id;
          this.dragMsg.ch_class = item.ch_class;
          this.dragMsg.pump_name = item.pump_name;
        } else if (type === 2) {
          this.dragMsg.pos = item;
        }
      } else {
        var name = '';

        if (type === 1) {
          name = '机泵';
        } else if (type === 2) {
          name = '测点';
        }

        swal({
          title: "提示",
          text: "\u5F53\u524D".concat(name, "\u5DF2\u5B58\u5728\uFF01"),
          button: "确认"
        });
      }
    },
    dragover: function dragover() {},

    /**
     * 计算当前元素如果超过overview-pic区域，则显示在区域内
     * **/
    calcOrigPos: function calcOrigPos(item) {
      var dom = document.getElementById('move-block');
      var picDom = document.getElementById('overview-pic');
      var outWidth = picDom.clientWidth;
      var outHeight = picDom.clientHeight;
      var left = dom.offsetLeft; //图片距离画图区域左边距离

      var top = dom.offsetTop; //图片距离画图区域上边距离

      var leftOffset = item.x; //当前dom移动的距离父级元素的x;

      var topOffset = item.y; //当前dom移动的距离父级元素的y;

      var domWidth = this.origBlock.oriW; //图片宽度

      var domHeight = this.origBlock.oriH; //图片高度

      if (leftOffset < 0 && Math.abs(leftOffset) > left) {
        //左边超出,则赋值为最左边坐标
        item.x = -left;
      }

      if (topOffset < 0 && Math.abs(topOffset) > top) {
        //上边超出,则赋值为最上边坐标
        item.y = -top;
      }

      if (leftOffset > 0 && Number(leftOffset + left + item.width + 20) > outWidth) {
        //右边超出,则赋值为最右边坐标
        item.x = domWidth + left;
      }

      if (topOffset > 0 && Number(topOffset + top + item.height + 20) > outHeight) {
        //下边超出,则赋值为最下边坐标
        item.y = domHeight + top;
      }
    },

    /**
     * 控制拖动元素不能超过overview-pic区域
     * **/
    onDragStartCallback2: function onDragStartCallback2(x, y) {
      var dom = document.getElementById('move-block');
      var picDom = document.getElementById('overview-pic');
      var outWidth = picDom.clientWidth;
      var outHeight = picDom.clientHeight;
      var left = dom.offsetLeft; //图片距离画图区域左边距离

      var top = dom.offsetTop; //图片距离画图区域上边距离

      var item = this.MoveMsg[this.moveDivMsg.index]; //当前拖动dom信息

      var leftOffset = item.x + x; //当前dom移动的距离父级元素的x;

      var topOffset = item.y + y; //当前dom移动的距离父级元素的y;

      if (leftOffset < 0 && Math.abs(leftOffset) > left || topOffset < 0 && Math.abs(topOffset) > top || leftOffset > 0 && Number(leftOffset + left + item.width + 20) > outWidth || topOffset > 0 && Number(topOffset + top + item.height + 20) > outHeight) {
        return false;
      }
    },

    /**
     * 控制拖动元素不能超过move-block区域
     * **/
    onDragStartCallback: function onDragStartCallback(x, y) {
      var dom = document.getElementById('move-block');
      var picDom = document.getElementById('overview-pic');
      var outWidth = dom.clientWidth;
      var outHeight = dom.clientHeight;
      var left = dom.offsetLeft; //图片距离画图区域左边距离

      var top = dom.offsetTop; //图片距离画图区域上边距离

      var item = this.MoveMsg[this.moveDivMsg.index]; //当前拖动dom信息

      var leftOffset = item.x + x; //当前dom移动的距离父级元素的x;

      var topOffset = item.y + y; //当前dom移动的距离父级元素的y;

      if (leftOffset < 0 || topOffset < 0 || leftOffset > 0 && leftOffset > outWidth || topOffset > 0 && topOffset > outHeight) {
        return false;
      }
    },
    onDragstop: function onDragstop(item, index) {
      item.moveX = this.moveDivMsg.x;
      item.moveY = this.moveDivMsg.y;
    },
    onResizstop: function onResizstop(item, index) {
      item.moveX = this.moveDivMsg.x;
      item.moveY = this.moveDivMsg.y;
      item.width = this.moveDivMsg.width;
      item.height = this.moveDivMsg.height;
      item.inputStyle = {
        //更新input的高
        height: this.moveDivMsg.height / 2 + 'px'
      };
      this.$forceUpdate();
    },
    onDragcircle: function onDragcircle(x, y) {
      this.moveDivMsg.circleX = x;
      this.moveDivMsg.circleY = y;
    },
    onResizecircle: function onResizecircle(x, y, width, height) {
      this.moveDivMsg.circleD = width;
      this.moveDivMsg.circleX = x;
      this.moveDivMsg.circleY = y;
    },
    onResizstopcircle: function onResizstopcircle(item) {
      item.moveCircleX = this.moveDivMsg.circleX;
      item.moveCircleY = this.moveDivMsg.circleY;
      item.circleD = this.moveDivMsg.circleD;
    },
    onDragstopcircle: function onDragstopcircle(item) {
      item.moveCircleX = this.moveDivMsg.circleX;
      item.moveCircleY = this.moveDivMsg.circleY;
    },
    // 总貌图内部拖动

    /**
     * type: 1组织总貌；2：机泵总貌
     * **/
    dragScreen: function dragScreen(index, e, item, type) {
      this.dragMsg = null;
      var tag = e.currentTarget;

      if (type === 1) {
        this.dragMsg = {
          mac_id: item.mac_id,
          pump_id: item.pump_id,
          pump_name: item.pump_name,
          ch_class: item.ch_class,
          index: index,
          left: e.layerX,
          top: e.layerY,
          w: item.w,
          h: item.h,
          pump: item,
          inputStyle: item.inputStyle
        };
      } else if (type === 2) {
        this.dragMsg = {
          index: index,
          left: e.layerX,
          top: e.layerY,
          w: item.w,
          h: item.h,
          inputStyle: item.inputStyle
        };
      }

      this.MoveMsg[index].px = (e.layerX / this.origBlock.oriW).toFixed(4); //相对于背景图的x位置

      this.MoveMsg[index].py = (e.layerY / this.origBlock.oriH).toFixed(4); //相对于背景图的y位置
    },
    //禁止拖动背景图
    stopDrag: function stopDrag() {
      this.dragMsg = null;
      return false;
    },
    // 右键点击部件
    rightClick: function rightClick(item, index, e) {
      item.index = index;
      this.isRightClick = true;
      this.rightClickMsg = {
        index: index,
        data: item
      };
      this.$refs.rightMsg.style.left = item.x + e.layerX + 'px';
      this.$refs.rightMsg.style.top = item.y + e.layerY + 'px';
    },
    //设为基准
    addAsBasic: function addAsBasic() {
      this.basicItem = this.rightClickMsg.data;
      var divList = document.getElementsByClassName('move-div');

      for (var j = 0; j < divList.length; j++) {
        var index = divList[j].getAttribute('custom-id');

        if (Number(index) == this.rightClickMsg.index) {
          divList[j].classList.add('addActiveBasic');
        }
      }
    },
    // 删除组件
    delModelPos: function delModelPos() {
      this.isTip = true;
    },
    // 确定删除组件
    confirmTip: function confirmTip(type) {
      var rcm = this.rightClickMsg,
          model = this.MoveMsg,
          id,
          list = [];

      switch (type) {
        case 1:
          list = this.choosePumpList;
          break;

        case 2:
          list = this.choosePosList;
          break;
      }

      if (rcm.index >= 0 && rcm.data) {
        model.splice(rcm.index, 1);
        list.forEach(function (item) {
          if (type === 1) {
            id = item.pump_id;
          } else if (type === 2) {
            id = item.pos_type + '_' + item.pos_id;
          }

          if (id == rcm.data.uid) {
            item.dragFlag = true; //删除了该机泵，该机泵需要变更为可拖动状态
          }
        });
      }

      this.cancelClick();
      this.isTip = false;
    },
    // 取消点击机组组态效果
    cancelClick: function cancelClick() {
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      this.isShow.macIsShow = false; //机组下拉框显示隐藏= false;

      if (this.isRightClick) this.isRightClick = false;
      if (this.isShowFont) this.isShowFont = false;
      /*
      * 将多选时选中的框改变状态
      * */

      var divList = document.getElementsByClassName('move-div');

      for (var i = 0; i < this.chooseItemList.length; i++) {
        var item = this.chooseItemList[i];

        for (var j = 0; j < divList.length; j++) {
          var index = divList[j].getAttribute('custom-id');

          if (Number(index) == item.index) {
            divList[j].classList.add('addActive');
          }
        }
      }
    },
    //  机组组态保存警告框关闭
    closeAlarm: function closeAlarm() {
      this.isTip = false;
    },
    // 关闭搜索
    closeSearch: function closeSearch() {
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      this.isShow.macIsShow = false; //机组下拉框显示隐藏= false;
    },
    //模拟点击
    monidianji: function monidianji() {
      document.getElementById('imgLocal').click();
    },

    /**测点排序方法**/
    sortPositionsName: function sortPositionsName(arr) {
      var that = this;
      var sortArr = [];
      var pos_speed = []; //转速测点

      var pos_vibrate = []; //振动测点

      var pos_envelope = []; //包络测点

      var pos_vibrateOrder = []; //振动阶次测点

      var pos_envelopeOrder = []; //包络阶次测点

      var pos_samp = []; //长采样测点

      var pos_slosh = []; //晃度测点

      var pos_overturn = []; //倾覆测点

      var pos_inclinate = []; //倾角测点

      var pos_synthetic = []; //合成倾角测点

      var pos_temp = []; //合成倾角测点

      var pos_process = []; //过程量测点

      var pos_digital = []; //数字量测点

      var pos_crafts = []; //工艺量测点

      var pos_bolt = []; //螺栓测点

      for (var m = 0, posLen = arr.length; m < posLen; m++) {
        switch (Number(arr[m].pos_type)) {
          case 1:
            pos_speed.push(arr[m]);
            break;

          case 3:
            pos_vibrate.push(arr[m]);
            break;

          case 4:
            pos_envelope.push(arr[m]);
            break;

          case 8:
            pos_vibrateOrder.push(arr[m]);
            break;

          case 9:
            pos_envelopeOrder.push(arr[m]);
            break;

          case 200:
            pos_samp.push(arr[m]);
            break;

          case 6:
            pos_slosh.push(arr[m]);
            break;

          case 11:
            pos_overturn.push(arr[m]);
            break;

          case 12:
            pos_inclinate.push(arr[m]);
            break;

          case 13:
            pos_synthetic.push(arr[m]);
            break;

          case 7:
            pos_temp.push(arr[m]);
            break;

          case 2:
            pos_process.push(arr[m]);
            break;

          case 5:
            pos_digital.push(arr[m]);
            break;

          case 10:
            pos_crafts.push(arr[m]);
            break;

          case 14:
            pos_bolt.push(arr[m]);
            break;

          default:
            pos_speed.push(arr[m]);
            break;
        }
      }

      sortArr = pos_speed.concat(pos_vibrate, pos_envelope, pos_vibrateOrder, pos_envelopeOrder, pos_slosh, pos_samp, pos_overturn, pos_inclinate, pos_synthetic, pos_temp, pos_process, pos_digital, pos_crafts, pos_bolt);
      return sortArr;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (overviewCoal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=18-4a8c7584.js.map