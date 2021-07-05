(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/lib/jsMind/jsmind.js */ "./src/assets/lib/jsMind/jsmind.js");
/* harmony import */ var assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: "PositionTree",
  data: function data() {
    return {
      data: [{
        "id": "-1",
        "isroot": true,
        "topic": "顶级目录"
      }],
      macId: "",
      jm: null,
      mind: {},
      options: {},
      origData: [],
      changeTreeList: [],
      //修改的测点数据
      deleteTreeData: [],
      //删除的测点数据
      addTreeList: {},
      //新增的数据
      saveDelTreeList: {},
      //修改已经存在的测点的测点类型的数据
      isBtnShow: false,
      //添加节点按钮是否展示
      pos_type_list: [{
        type: 3,
        pos_type: "振动测点"
      }, {
        type: 4,
        pos_type: "包络测点"
      }, {
        type: 8,
        pos_type: "振动阶次测点"
      }, {
        type: 9,
        pos_type: "包络阶次测点"
      }, {
        type: 1,
        pos_type: "转速测点"
      }, {
        type: 200,
        pos_type: "长采样测点"
      }, {
        type: 6,
        pos_type: "晃度测点"
      }, {
        type: 11,
        pos_type: "倾覆测点"
      }, {
        type: 12,
        pos_type: "倾角测点"
      }, {
        type: 13,
        pos_type: "合成倾角测点"
      }, {
        type: 7,
        pos_type: "温度测点"
      }, {
        type: 2,
        pos_type: "过程量测点"
      }, {
        type: 5,
        pos_type: "数字量测点"
      }, {
        type: 10,
        pos_type: "工艺量测点"
      }],
      choosePosTypeVal: '',
      //右键选择的pos_type
      type_id_list: {},
      //该机组下对应测点类型下的pos_id集合
      isRightClick: false,
      //是否点击右键事件
      scrollTree: 0 //滚动距离

    };
  },
  mounted: function mounted() {
    var _this$$store$state$tr = _slicedToArray(this.$store.state.treePosition, 1);

    this.macId = _this$$store$state$tr[0];
    console.log(this.macId);
    var that = this;
    var wrap = document.getElementById('wrapper');
    var posTypeBlock = document.getElementById('pos_choose');
    var containerTree = document.getElementById('jsmind_container'); // that.isRightClick = false;

    posTypeBlock.style.display = 'none';
    /*containerTree.oncontextmenu = function(e){
        if(e.target.nodeName== "JMNODE"){
            var e = event || window.event;
            that.isRightClick = true;
            // posTypeBlock.style.display = "block";//右键更改测点类型功能暂时关闭
            wrap.style.left = e.clientX-185+'px';
            wrap.style.top = e.clientY-100 +'px';
            posTypeBlock.style.left = e.clientX-45+'px';
            posTypeBlock.style.top = e.clientY-60 +'px';
            return false;//取消右键点击的默认事件
        }
    };*/

    containerTree.onclick = function (e) {
      that.isRightClick = false;
      posTypeBlock.style.display = 'none';
      that.checkSelect();

      if (e.target.localName == "jmexpander") {
        that.isBtnShow = false;
      }
    };

    if (this.macId) {
      this.getMacData();
    } //鼠标滚轮缩放


    window.onmousewheel = document.onmousewheel = function (e) {
      e = e || window.event;

      if (e.wheelDelta) {
        //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
          //当滑轮向上滚动时
          that.jm.view.zoomIn();
        }

        if (e.wheelDelta < 0) {
          //当滑轮向下滚动时
          that.jm.view.zoomOut();
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        if (e.detail > 0) {
          //当滑轮向下滚动时
          that.jm.view.zoomOut();
        }

        if (e.detail < 0) {
          //当滑轮向上滚动时
          that.jm.view.zoomIn();
        }
      }
    };
  },
  updated: function updated() {
    this.scrollTree = $('.jsmind-inner').scrollTop();
  },
  methods: {
    choosePosType: function choosePosType(posType, posTypeName) {
      this.choosePosTypeVal = posType;
      this.$message.success("设置为" + posTypeName);
      var node = this.jm.get_selected_node();
      var newPodId = this.setPosId(this.type_id_list, node.data.type) + "_" + node.data.type;

      if (node.data.operate == 0) {
        //修改已经存在的测点的类型相当于删除旧的测点新增一个新的测点
        node.data.operate = 2;
        node.data.pos_old_type = node.data.pos_type;
        node.data.pos_old_id = node.data.pos_id;
        node.data.pos_id = this.setPosId(this.type_id_list, posType);
        node.data.pos_type = posType;
        node.data.type = posType;
        node.data.id = node.data.pos_id + "_" + posType;
      } else if (node.data.operate == 1) {
        //表示修改新增的测点的类型
        node.data.type = this.choosePosTypeVal;
        node.data.pos_type = this.choosePosTypeVal;
      }

      this.isRightClick = false;
      $('#pos_choose').css('display', 'none');
    },
    //还原
    resetZoom: function resetZoom() {
      this.jm.view.setZoom(1);
    },
    load_jsmind: function load_jsmind() {
      console.log(this.origData);
      $('#jsmind_container').empty();
      this.data = this.origData;
      this.mind = {
        "meta": {
          "name": "demo",
          "author": "hizzgdev@163.com",
          "version": "0.2"
        },
        "format": "node_array",
        "data": this.data
      };
      this.options = {
        container: 'jsmind_container',
        editable: true,
        theme: 'default',
        mode: "side",
        view: {
          hmargin: 20,
          // 思维导图距容器外框的最小水平距离
          vmargin: 20,
          // 思维导图距容器外框的最小垂直距离
          line_width: 1,
          // 思维导图线条的粗细
          line_color: '#000' // 思维导图线条的颜色

        },
        layout: {
          hspace: 50,
          // 节点之间的水平间距
          vspace: 20,
          // 节点之间的垂直间距
          pspace: 24 // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）

        }
      };
      this.jm = new assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.options); // 让 jm 显示这个 mind 即可

      this.jm.show(this.mind);
      var that = this;
      $('jmnodes jmnode').on("click", function () {
        var node = that.jm.get_selected_node(); // $('#control_btn').css('display','block');

        that.addBtn(node);
      });
      $('jmnodes jmnode').on("dblclick", function () {
        var node = that.jm.get_selected_node();
        return false;
      });
      that.checkSelect();
      $('.jsmind-inner').on('scroll', function () {
        that.isBtnShow = false;
      });
    },
    checkSelect: function checkSelect() {
      var selectNode = this.jm.get_selected_node();
      this.isBtnShow = false;

      if (selectNode != null || selectNode != undefined) {
        this.isBtnShow = true;
      }
    },
    getMacData: function getMacData() {
      var that = this;
      var token = sessionStorage.getItem('token');
      console.log(that.macId);
      var macObj = {
        'mac_id': that.macId
      };
      this.$axios.post('queryPositionInfoByMacId', macObj).then(function (res) {
        if (res.msg == 0) {
          var posList = res.machine;
          var objRoot = {}; //根节点：机组信息

          that.origData = [];
          objRoot.id = posList.mac_id;
          objRoot.isroot = true;
          objRoot.topic = posList.mac_me;
          that.origData.push(objRoot);
          that.type_id_list[1] = [];
          that.type_id_list[2] = [];
          that.type_id_list[3] = [];
          that.type_id_list[4] = [];
          that.type_id_list[5] = [];
          that.type_id_list[6] = [];
          that.type_id_list[7] = [];
          that.type_id_list[8] = [];
          that.type_id_list[9] = [];
          that.type_id_list[10] = [];
          that.type_id_list[11] = [];
          that.type_id_list[12] = [];
          that.type_id_list[13] = [];
          that.type_id_list[14] = [];
          that.type_id_list[15] = [];
          that.type_id_list[16] = [];
          that.type_id_list[17] = [];
          that.type_id_list[200] = [];
          that.type_id_list[18] = [];

          if (posList.dgm_list != undefined && posList.dgm_list.length > 0) {
            for (var i = 0; i < posList.dgm_list.length; i++) {
              var objDgm = {}; //第一层子节点：dgm信息

              objDgm.id = posList.dgm_list[i].dgm_id + "_" + posList.dgm_list[i].dgm_type;
              objDgm.topic = posList.dgm_list[i].dgm_name;
              objDgm.parentid = posList.mac_id;
              objDgm.type = posList.dgm_list[i].dgm_type;
              objDgm.indexMe = 1;
              that.origData.push(objDgm);

              if (posList.dgm_list[i].pos_ch_list != undefined && posList.dgm_list[i].pos_ch_list.length > 0) {
                for (var j = 0; j < posList.dgm_list[i].pos_ch_list.length; j++) {
                  var objCha = {}; //第二层子节点：通道信息

                  var objPos = {}; //第三层子节点：测点信息

                  objCha.mac_id = posList.mac_id;
                  objCha.m_type = posList.m_type;
                  objCha.mac_me = posList.mac_me;
                  objCha.dgm_id = posList.dgm_list[i].dgm_id;
                  objCha.dgm_type = posList.dgm_list[i].dgm_type;
                  objCha.dgm_name = posList.dgm_list[i].dgm_name;
                  objCha.ch_id = posList.dgm_list[i].pos_ch_list[j].ch_id;
                  objCha.ch_type = posList.dgm_list[i].pos_ch_list[j].ch_type;
                  objCha.ch_name = posList.dgm_list[i].pos_ch_list[j].ch_name;
                  objCha.id = posList.dgm_list[i].pos_ch_list[j].ch_id + "_" + posList.dgm_list[i].pos_ch_list[j].ch_type + "_" + posList.dgm_list[i].pos_ch_list[j].ch_name;
                  objCha.topic = posList.dgm_list[i].pos_ch_list[j].ch_name;
                  objCha.parentid = posList.dgm_list[i].dgm_id + "_" + posList.dgm_list[i].dgm_type;
                  objCha.type = posList.dgm_list[i].pos_ch_list[j].ch_type;
                  objCha.indexMe = 2;
                  objPos.id = posList.dgm_list[i].pos_ch_list[j].pos_id + "_" + posList.dgm_list[i].pos_ch_list[j].pos_type;
                  objPos.topic = posList.dgm_list[i].pos_ch_list[j].pos_name;
                  objPos.parentid = posList.dgm_list[i].pos_ch_list[j].ch_id + "_" + posList.dgm_list[i].pos_ch_list[j].ch_type + "_" + posList.dgm_list[i].pos_ch_list[j].ch_name;
                  objPos.type = posList.dgm_list[i].pos_ch_list[j].pos_type;
                  objPos.pos_type = posList.dgm_list[i].pos_ch_list[j].pos_type;
                  objPos.pos_id = posList.dgm_list[i].pos_ch_list[j].pos_id;
                  objPos.parentChType = posList.dgm_list[i].pos_ch_list[j].ch_type;
                  objPos.mac_id = posList.mac_id;
                  objPos.mac_me = posList.mac_me;
                  objPos.m_type = posList.m_type;
                  objPos.dgm_id = posList.dgm_list[i].dgm_id;
                  objPos.dgm_type = posList.dgm_list[i].dgm_type;
                  objPos.dgm_name = posList.dgm_list[i].dgm_name;
                  objPos.ch_id = posList.dgm_list[i].pos_ch_list[j].ch_id;
                  objPos.ch_type = posList.dgm_list[i].pos_ch_list[j].ch_type;
                  objPos.ch_name = posList.dgm_list[i].pos_ch_list[j].ch_name;
                  objPos.indexMe = 3;
                  objPos.operate = 0;
                  that.origData.push(objCha, objPos);
                  that.type_id_list[posList.dgm_list[i].pos_ch_list[j].pos_type].push(posList.dgm_list[i].pos_ch_list[j].pos_id);
                }
              }
            }

            that.origData = that.unique(that.origData);
            that.origData.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('topic')); //排序

            that.load_jsmind();
          } else {
            console.log('数据有误');
          }
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /*获取数据*/
    getThisData: function getThisData() {
      this.changeTreeList = []; //修改的测点数据
      // this.deleteTreeData= [];//删除的测点数据

      this.addTreeList = {}; //新增的数据

      var treeData = this.jm.get_data("node_array");
      console.log(treeData.data);
      var posTypeList = [3, 4, 6, 8, 9, 11, 12, 13, 15, 16];

      for (var i = 0; i < treeData.data.length; i++) {
        if (treeData.data[i].operate == 1) {
          console.log(treeData.data[i]);
          var obj = {};
          obj.baseInfo = {};
          obj.pos_type = treeData.data[i].pos_type;
          obj.updateTime = 0;
          obj.pos_id = treeData.data[i].pos_id; //测点id

          obj.pos_name = treeData.data[i].topic; //测点名称

          obj.mac_id = treeData.data[i].mac_id; //机组uid

          obj.m_type = treeData.data[i].m_type; //机组类型

          obj.dgm_type = treeData.data[i].dgm_type; //采集站类型：处理测点设置的差异化、测点数目等

          obj.dgm_id = treeData.data[i].dgm_id;
          obj.dgm_name = treeData.data[i].dgm_name;
          obj.ch_type = treeData.data[i].ch_type;
          obj.ch_id = treeData.data[i].ch_id;
          obj.ch_name = treeData.data[i].ch_name;
          obj.task_id = 0;
          obj.pos_activity = 0;
          obj.isalarm = 0;

          if (posTypeList.indexOf(treeData.data[i].pos_type) > -1) {
            obj.baseInfo.alarmList = [];
            obj.baseInfo.frequency = 1000;
            obj.baseInfo.spectral = 100;
            obj.baseInfo.resampling = 1;
            obj.baseInfo.posShow = "0";
            obj.baseInfo.filter = "1";
            obj.baseInfo.hanning = "1"; //是否汉宁窗

            obj.baseInfo.warn_grow = "20"; //预警梯度

            obj.baseInfo.alarm_grow = "20"; //报警梯度

            obj.baseInfo.band = [{}, {}, {}, {}, {}, {}, {}, {}];
            obj.baseInfo.band[0].dwOpt_freq_selected = 0;
            obj.baseInfo.band[0].dwOpt_freq_name = "频段1";
            obj.baseInfo.band[0].optfreq_type = 0;
            obj.baseInfo.band[0].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[0].dwOpt_freq_end = 10;
            obj.baseInfo.band[1].dwOpt_freq_selected = 0;
            obj.baseInfo.band[1].dwOpt_freq_name = "频段2";
            obj.baseInfo.band[1].optfreq_type = 0;
            obj.baseInfo.band[1].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[1].dwOpt_freq_end = 10;
            obj.baseInfo.band[2].dwOpt_freq_selected = 0;
            obj.baseInfo.band[2].dwOpt_freq_name = "频段3";
            obj.baseInfo.band[2].optfreq_type = 0;
            obj.baseInfo.band[2].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[2].dwOpt_freq_end = 10;
            obj.baseInfo.band[3].dwOpt_freq_selected = 0;
            obj.baseInfo.band[3].dwOpt_freq_name = "频段4";
            obj.baseInfo.band[3].optfreq_type = 0;
            obj.baseInfo.band[3].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[3].dwOpt_freq_end = 10;
            obj.baseInfo.band[4].dwOpt_freq_selected = 0;
            obj.baseInfo.band[4].dwOpt_freq_name = "频段5";
            obj.baseInfo.band[4].optfreq_type = 0;
            obj.baseInfo.band[4].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[4].dwOpt_freq_end = 10;
            obj.baseInfo.band[5].dwOpt_freq_selected = 0;
            obj.baseInfo.band[5].dwOpt_freq_name = "频段6";
            obj.baseInfo.band[5].optfreq_type = 0;
            obj.baseInfo.band[5].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[5].dwOpt_freq_end = 10;
            obj.baseInfo.band[6].dwOpt_freq_selected = 0;
            obj.baseInfo.band[6].dwOpt_freq_name = "频段7";
            obj.baseInfo.band[6].optfreq_type = 0;
            obj.baseInfo.band[6].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[6].dwOpt_freq_end = 10;
            obj.baseInfo.band[7].dwOpt_freq_selected = 0;
            obj.baseInfo.band[7].dwOpt_freq_name = "频段8";
            obj.baseInfo.band[7].optfreq_type = 0;
            obj.baseInfo.band[7].dwOpt_freq_begin = 0.1;
            obj.baseInfo.band[7].dwOpt_freq_end = 10;

            if (treeData.data[i].pos_type == 6 || treeData.data[i].pos_type == 12) {
              obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

              obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

              obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

              obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

              obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

              obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

              obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

              obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

              obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

              obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

              obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

              obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id
            } else if (treeData.data[i].pos_type == 11) {
              obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

              obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

              obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

              obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

              obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

              obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

              obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

              obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

              obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

              obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

              obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

              obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id

              obj.baseInfo.sUnitName = "mm"; //位移单位

              obj.baseInfo.self1 = "60"; //晃度X自振频率

              obj.baseInfo.self2 = "60"; //晃度Y自振频率
            } else if (treeData.data[i].pos_type == 13) {
              obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

              obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

              obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

              obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

              obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

              obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

              obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

              obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

              obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

              obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

              obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

              obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id

              obj.baseInfo.dip_model = "0"; //传感器类型

              obj.baseInfo.diameter = "4000"; //基础直径

              obj.baseInfo.offset_angle = "0"; //偏置角度

              obj.baseInfo.sourceType = "5"; //数据来源 0=振动通道 5=串口

              obj.baseInfo.offset1 = "10"; //倾角X偏移量

              obj.baseInfo.offset2 = "10"; //倾角Y偏移量

              obj.baseInfo.datamode1 = "0"; //过程量类型

              obj.baseInfo.datamode2 = "0";
              obj.baseInfo.slaveid1 = "0"; //从设备号

              obj.baseInfo.slaveid2 = "0";
            }

            this.addTreeList[i] = obj;
          } else if (treeData.data[i].pos_type == 5) {
            obj.baseInfo.posShow = "0";
            obj.baseInfo.calc_method = "0";
            obj.baseInfo.h_limit = "20"; //报警高

            obj.baseInfo.hh_limit = "10"; //预警高

            this.addTreeList[i] = obj;
          } else if (treeData.data[i].pos_type == 1) {
            obj.baseInfo.speedRate = "60";
            obj.baseInfo.baseRate = "1";
            this.addTreeList[i] = obj;
          } else if (treeData.data[i].pos_type == 2 || treeData.data[i].pos_type == 7) {
            obj.baseInfo.hh_limit = "20"; //报警高

            obj.baseInfo.hh_limit = "10"; //预警高

            obj.baseInfo.l_limit = "-10"; //预警低

            obj.baseInfo.ll_limit = "-20"; //报警低

            this.addTreeList[i] = obj;
          } else if (treeData.data[i].pos_type == 200) {
            obj.baseInfo.method = "0"; //采样方式 0=定时 1=手动

            obj.baseInfo.sequenceNum = "0"; //定时长采样序号

            this.addTreeList[i] = obj;
          } else if (treeData.data[i].pos_type == 10) {
            obj.baseInfo.byUnit = "0"; //单位索引

            obj.baseInfo.byUnitName = "℃"; //名称

            obj.baseInfo.unitNum = "4"; //数据有效位

            obj.baseInfo.hh_limit = "20"; //报警高

            obj.baseInfo.h_limit = "10"; //预警高

            obj.baseInfo.l_limit = "-10"; //预警低

            obj.baseInfo.ll_limit = "-20"; //报警低

            obj.baseInfo.hi_value = "100"; //工程量输入范围高

            obj.baseInfo.low_value = "-100"; //工程量输入范围低

            obj.baseInfo.ref_vol = "1000"; //信号输入范围高

            obj.baseInfo.ref_eng = "-1000"; //信号输入范围低

            obj.baseInfo.scale = "0"; //校正参数

            obj.baseInfo.corr = "1"; //零点偏移

            obj.baseInfo.dataaddress = "80001"; //数据地址

            obj.baseInfo.datamode = "0"; //过程量类型

            obj.baseInfo.slaveid = "5"; //从设备号

            obj.baseInfo.normal = "0"; //正常

            obj.baseInfo.value_left = "0"; //左比较值

            obj.baseInfo.value_right = "0"; //右比较值

            this.addTreeList[i] = obj;
          }
        } else if (treeData.data[i].operate == 2) {
          console.log(treeData.data[i].pos_old_type);

          if (treeData.data[i].pos_old_type == -1 && treeData.data[i].pos_old_id == -1) {
            var obj = {};
            obj.pos_id = treeData.data[i].pos_id; //测点id

            obj.pos_type = treeData.data[i].pos_type; //测点id

            obj.pos_name = treeData.data[i].topic; //测点名称

            obj.mac_id = treeData.data[i].mac_id; //机组uid

            obj.m_type = treeData.data[i].m_type; //机组类型

            obj.dgm_type = treeData.data[i].dgm_type; //采集站类型：处理测点设置的差异化、测点数目等

            obj.dgm_id = treeData.data[i].dgm_id;
            obj.dgm_name = treeData.data[i].dgm_name;
            obj.ch_type = treeData.data[i].ch_type;
            obj.ch_id = treeData.data[i].ch_id;
            obj.ch_name = treeData.data[i].ch_name;
            obj.pos_old_type = treeData.data[i].pos_old_type;
            obj.pos_old_id = treeData.data[i].pos_old_id;
            this.changeTreeList.push(obj);
          } else {
            var obj = {};
            obj.baseInfo = {};
            obj.pos_id = treeData.data[i].pos_id; //测点id

            obj.pos_type = treeData.data[i].pos_type; //测点id

            obj.pos_name = treeData.data[i].topic; //测点名称

            obj.mac_id = treeData.data[i].mac_id; //机组uid

            obj.m_type = treeData.data[i].m_type; //机组类型

            obj.dgm_type = treeData.data[i].dgm_type; //采集站类型：处理测点设置的差异化、测点数目等

            obj.dgm_id = treeData.data[i].dgm_id;
            obj.dgm_name = treeData.data[i].dgm_name;
            obj.ch_type = treeData.data[i].ch_type;
            obj.ch_id = treeData.data[i].ch_id;
            obj.ch_name = treeData.data[i].ch_name;
            obj.pos_old_type = treeData.data[i].pos_old_type;
            obj.pos_old_id = treeData.data[i].pos_old_id;
            obj.task_id = 0;
            obj.pos_activity = 0;
            obj.isalarm = 0;

            if (posTypeList.indexOf(treeData.data[i].pos_type) > -1) {
              obj.baseInfo.alarmList = [];
              obj.baseInfo.frequency = 1000;
              obj.baseInfo.spectral = 100;
              obj.baseInfo.resampling = 1;
              obj.baseInfo.posShow = "0";
              obj.baseInfo.filter = "1";
              obj.baseInfo.hanning = "1"; //是否汉宁窗

              obj.baseInfo.warn_grow = "20"; //预警梯度

              obj.baseInfo.alarm_grow = "20"; //报警梯度

              obj.baseInfo.band = [{}, {}, {}, {}, {}, {}, {}, {}];
              obj.baseInfo.band[0].dwOpt_freq_selected = 0;
              obj.baseInfo.band[0].dwOpt_freq_name = "频段1";
              obj.baseInfo.band[0].optfreq_type = 0;
              obj.baseInfo.band[0].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[0].dwOpt_freq_end = 10;
              obj.baseInfo.band[1].dwOpt_freq_selected = 0;
              obj.baseInfo.band[1].dwOpt_freq_name = "频段2";
              obj.baseInfo.band[1].optfreq_type = 0;
              obj.baseInfo.band[1].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[1].dwOpt_freq_end = 10;
              obj.baseInfo.band[2].dwOpt_freq_selected = 0;
              obj.baseInfo.band[2].dwOpt_freq_name = "频段3";
              obj.baseInfo.band[2].optfreq_type = 0;
              obj.baseInfo.band[2].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[2].dwOpt_freq_end = 10;
              obj.baseInfo.band[3].dwOpt_freq_selected = 0;
              obj.baseInfo.band[3].dwOpt_freq_name = "频段4";
              obj.baseInfo.band[3].optfreq_type = 0;
              obj.baseInfo.band[3].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[3].dwOpt_freq_end = 10;
              obj.baseInfo.band[4].dwOpt_freq_selected = 0;
              obj.baseInfo.band[4].dwOpt_freq_name = "频段5";
              obj.baseInfo.band[4].optfreq_type = 0;
              obj.baseInfo.band[4].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[4].dwOpt_freq_end = 10;
              obj.baseInfo.band[5].dwOpt_freq_selected = 0;
              obj.baseInfo.band[5].dwOpt_freq_name = "频段6";
              obj.baseInfo.band[5].optfreq_type = 0;
              obj.baseInfo.band[5].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[5].dwOpt_freq_end = 10;
              obj.baseInfo.band[6].dwOpt_freq_selected = 0;
              obj.baseInfo.band[6].dwOpt_freq_name = "频段7";
              obj.baseInfo.band[6].optfreq_type = 0;
              obj.baseInfo.band[6].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[6].dwOpt_freq_end = 10;
              obj.baseInfo.band[7].dwOpt_freq_selected = 0;
              obj.baseInfo.band[7].dwOpt_freq_name = "频段8";
              obj.baseInfo.band[7].optfreq_type = 0;
              obj.baseInfo.band[7].dwOpt_freq_begin = 0.1;
              obj.baseInfo.band[7].dwOpt_freq_end = 10;

              if (treeData.data[i].pos_type == 6 || treeData.data[i].pos_type == 12) {
                obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

                obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

                obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

                obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

                obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

                obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

                obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

                obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

                obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

                obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

                obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

                obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id
              } else if (treeData.data[i].pos_type == 11) {
                obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

                obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

                obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

                obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

                obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

                obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

                obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

                obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

                obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

                obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

                obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

                obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id

                obj.baseInfo.sUnitName = "mm"; //位移单位

                obj.baseInfo.self1 = "60"; //晃度X自振频率

                obj.baseInfo.self2 = "60"; //晃度Y自振频率
              } else if (treeData.data[i].pos_type == 13) {
                obj.baseInfo.tt_sensor_name = "倾覆传感器"; //传感器名称

                obj.baseInfo.tt_ch_type = "11"; //关联通道（虚拟） 倾覆或合成倾角的测点类型

                obj.baseInfo.tt_ch_id = "0"; //关联通道（虚拟） 倾覆或合成倾角的测点id

                obj.baseInfo.tt_pos_loc = "0"; //安装位置 塔顶、机舱、塔底

                obj.baseInfo.rock1_id = "0"; //晃度或倾角X id

                obj.baseInfo.rock2_id = "1"; //晃度或倾角Y id

                obj.baseInfo.rock1_pos_name = "晃度X"; //晃度或倾角X名称

                obj.baseInfo.rock2_pos_name = "晃度Y"; //晃度或倾角Y名称

                obj.baseInfo.rock1_ch_type = "0"; //倾角X通道类型

                obj.baseInfo.rock2_ch_type = "5"; //倾角Y通道类型

                obj.baseInfo.rock1_ch_id = "14"; //晃度或倾角X通道id

                obj.baseInfo.rock2_ch_id = "15"; //晃度或倾角Y通道id

                obj.baseInfo.dip_model = "0"; //传感器类型

                obj.baseInfo.diameter = "4000"; //基础直径

                obj.baseInfo.offset_angle = "0"; //偏置角度

                obj.baseInfo.sourceType = "5"; //数据来源 0=振动通道 5=串口

                obj.baseInfo.offset1 = "10"; //倾角X偏移量

                obj.baseInfo.offset2 = "10"; //倾角Y偏移量

                obj.baseInfo.datamode1 = "0"; //过程量类型

                obj.baseInfo.datamode2 = "0";
                obj.baseInfo.slaveid1 = "0"; //从设备号

                obj.baseInfo.slaveid2 = "0";
              }

              this.changeTreeList.push(obj);
            } else if (treeData.data[i].pos_type == 5) {
              obj.baseInfo.posShow = "0";
              obj.baseInfo.calc_method = "0";
              obj.baseInfo.h_limit = "20"; //报警高

              obj.baseInfo.hh_limit = "10"; //预警高

              this.changeTreeList.push(obj);
            } else if (treeData.data[i].pos_type == 1) {
              obj.baseInfo.speedRate = "60";
              obj.baseInfo.baseRate = "1";
              this.changeTreeList.push(obj);
            } else if (treeData.data[i].pos_type == 2 || treeData.data[i].pos_type == 7) {
              obj.baseInfo.hh_limit = "20"; //报警高

              obj.baseInfo.hh_limit = "10"; //预警高

              obj.baseInfo.l_limit = "-10"; //预警低

              obj.baseInfo.ll_limit = "-20"; //报警低

              this.changeTreeList.push(obj);
            } else if (treeData.data[i].pos_type == 200) {
              obj.baseInfo.method = "0"; //采样方式 0=定时 1=手动

              obj.baseInfo.sequenceNum = "0"; //定时长采样序号

              this.changeTreeList.push(obj);
            } else if (treeData.data[i].pos_type == 10) {
              obj.baseInfo.byUnit = "0"; //单位索引

              obj.baseInfo.byUnitName = "℃"; //名称

              obj.baseInfo.unitNum = "4"; //数据有效位

              obj.baseInfo.hh_limit = "20"; //报警高

              obj.baseInfo.h_limit = "10"; //预警高

              obj.baseInfo.l_limit = "-10"; //预警低

              obj.baseInfo.ll_limit = "-20"; //报警低

              obj.baseInfo.hi_value = "100"; //工程量输入范围高

              obj.baseInfo.low_value = "-100"; //工程量输入范围低

              obj.baseInfo.ref_vol = "1000"; //信号输入范围高

              obj.baseInfo.ref_eng = "-1000"; //信号输入范围低

              obj.baseInfo.scale = "0"; //校正参数

              obj.baseInfo.corr = "1"; //零点偏移

              obj.baseInfo.dataaddress = "80001"; //数据地址

              obj.baseInfo.datamode = "0"; //过程量类型

              obj.baseInfo.slaveid = "5"; //从设备号

              obj.baseInfo.normal = "0"; //正常

              obj.baseInfo.value_left = "0"; //左比较值

              obj.baseInfo.value_right = "0"; //右比较值

              this.changeTreeList.push(obj);
            }
          }
        }
      }

      ;
      var that = this;

      if (this.deleteTreeData.length == 0 && $.isEmptyObject(this.addTreeList) && this.changeTreeList.length == 0) {
        swal({
          title: "提示",
          text: '保存成功',
          button: "确认"
        });
      } //修改测点信息


      if (that.changeTreeList.length > 0) {
        that.$axios.post('saveDelNewPosition', that.changeTreeList).then(function (res) {
          that.changeTreeList = [];

          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '操作成功',
              button: "确认"
            });
          } else if (res.msg == 1) {
            console.log('参数为空！');
          } else if (res.msg == 2) {
            console.log('后台运行错误！');
          } else if (res.msg == 3) {
            console.log('获取json数据时为空！');
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } //新增测点信息


      if (!$.isEmptyObject(that.addTreeList)) {
        that.$axios.post('saveNewPosition', that.addTreeList).then(function (res) {
          that.addTreeList = [];

          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '操作成功',
              button: "确认"
            });
          } else if (res.msg == 1) {
            console.log('参数为空！');
          } else if (res.msg == 2) {
            console.log('后台运行错误！');
          } else if (res.msg == 3) {
            console.log('获取json数据时为空！');
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } //删除测点信息


      if (that.deleteTreeData.length > 0) {
        that.$axios.post('deletePosition', that.deleteTreeData).then(function (res) {
          that.deleteTreeData = [];

          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '删除成功！',
              button: "确认"
            });
          } else if (res.msg == 1) {
            console.log('参数为空！');
          } else if (res.msg == 2) {
            console.log('后台运行错误！');
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },

    /**
     * 给新增测点加pos_id的值
     * **/
    setPosId: function setPosId(type_id_list, typeNum) {
      var newPosId;

      if ($.isEmptyObject(type_id_list) || !type_id_list.hasOwnProperty(typeNum)) {
        newPosId = 0;
      } else {
        var posIdList = this.bubbleSort(type_id_list[typeNum]);

        if (posIdList.length > 0) {
          var maxPosId = posIdList[posIdList.length - 1];

          if (maxPosId == posIdList.length - 1) {
            newPosId = parseInt(posIdList[posIdList.length - 1] + 1);
          } else {
            for (var i = 0; i < posIdList.length; i++) {
              if (i < posIdList[i]) {
                newPosId = i;
                break;
              }
            }
          }
        } else {
          newPosId = 0;
        }
      }

      return newPosId;
    },
    //数组有小到大排序
    bubbleSort: function bubbleSort(arr) {
      var len = arr.length;

      for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            // 相邻元素两两对比
            var temp = arr[j + 1]; // 元素交换

            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
      }

      return arr;
    },

    /*数组去重*/
    unique: function unique(arr) {
      var res = [arr[0]];

      for (var i = 1; i < arr.length; i++) {
        var repeat = false;

        for (var j = 0; j < res.length; j++) {
          if (arr[i].id == res[j].id) {
            repeat = true;
            break;
          }
        }

        if (!repeat) {
          res.push(arr[i]);
        }
      }

      return res;
    },

    /*向前添加兄弟元素*/
    addBroBefore: function addBroBefore() {
      var node = this.jm.get_selected_node();
      var newPodId = this.setPosId(this.type_id_list, node.data.type) + "_" + node.data.type;
      console.log(node.data);
      var treeData = this.jm.get_data("node_array");

      for (var i = 0; i < treeData.data.length; i++) {
        if (treeData.data[i].id == newPodId) {
          newPodId = Number(this.setPosId(this.type_id_list, node.data.type) + 1) + "_" + node.data.type;
          break;
        }
      }

      var obj = {
        mac_id: node.data.mac_id,
        mac_me: node.data.mac_me,
        m_type: node.data.m_type,
        dgm_id: node.data.dgm_id,
        dgm_type: node.data.dgm_type,
        dgm_name: node.data.dgm_name,
        ch_id: node.data.ch_id,
        ch_type: node.data.ch_type,
        ch_name: node.data.ch_name,
        pos_type: node.data.type,
        pos_id: newPodId.split('_')[0],
        operate: 1
      };
      this.jm.insert_node_before(node, newPodId, "+", obj); // $('#control_btn').css('display','block');

      this.addBtn(node);
      $('jmnodes jmnode').off("click");
      var that = this;
      that.getRightClick();
      $('jmnodes jmnode').click(function () {
        var node = that.jm.get_selected_node();
        that.addBtn(node);
      });
    },

    /*向后添加兄弟元素*/
    addBroAfter: function addBroAfter() {
      var node = this.jm.get_selected_node();
      var newPodId = this.setPosId(this.type_id_list, node.data.type) + "_" + node.data.type;
      var treeData = this.jm.get_data("node_array");

      for (var i = 0; i < treeData.data.length; i++) {
        if (treeData.data[i].id == newPodId) {
          newPodId = Number(this.setPosId(this.type_id_list, node.data.type) + 1) + "_" + node.data.type;
          break;
        }
      }

      var obj = {
        mac_id: node.data.mac_id,
        mac_me: node.data.mac_me,
        m_type: node.data.m_type,
        dgm_id: node.data.dgm_id,
        dgm_type: node.data.dgm_type,
        dgm_name: node.data.dgm_name,
        ch_id: node.data.ch_id,
        ch_type: node.data.ch_type,
        ch_name: node.data.ch_name,
        pos_type: node.data.type,
        pos_id: newPodId.split('_')[0],
        operate: 1
      };
      this.jm.insert_node_after(node, newPodId, "+", obj); // $('#control_btn').css('display','block');

      this.addBtn(node);
      $('jmnodes jmnode').off("click");
      var that = this;
      that.getRightClick();
      $('jmnodes jmnode').click(function () {
        var node = that.jm.get_selected_node();
        that.addBtn(node);
      });
    },
    addBtn: function addBtn(node) {
      if (node) {
        this.isBtnShow = true;
        var scrollTopVal = $('.jsmind-inner').scrollTop();
        var lay_width = parseInt(node._data.view.width + 2);
        var lay_height = parseInt(node._data.view.height);
        var lay_left_up = parseInt(node._data.view.abs_x);
        var lay_top_up = parseInt(node._data.view.abs_y + 32 - scrollTopVal);
        var lay_left_down = parseInt(node._data.view.abs_x + node._data.view.width / 2);
        var lay_top_down = parseInt(node._data.view.abs_y + node._data.view.height + 48 - scrollTopVal);
        var lay_left_left = parseInt(node._data.view.abs_x - 40);
        var lay_top_left = parseInt(node._data.view.abs_y + node._data.view.height);
        var lay_left_right = parseInt(node._data.view.abs_x + node._data.view.width);
        var lay_top_right = parseInt(node._data.view.abs_y + node._data.view.height + 16 - scrollTopVal);

        if (node.data.indexMe == 2 || node.isroot && node.children.length == 0) {
          $('.right').css({
            "height": lay_height,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_right,
            "top": lay_top_right
          });
          $('.up').css({
            "z-index": -1
          });
          $('.down').css({
            "z-index": -1
          });
        } else if (node.data.indexMe == 3) {
          $('.right').css({
            "z-index": -1
          });
          $('.up').css({
            "width": lay_width,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_up,
            "top": lay_top_up
          });
          $('.down').css({
            "width": lay_width,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_up,
            "top": lay_top_down
          });
        }

        switch (parseInt(node.data.parentChType)) {
          case 1:
            this.pos_type_list = [{
              type: 1,
              pos_type: "转速测点"
            }, {
              type: 2,
              pos_type: "过程量测点"
            }];
            break;

          case 2:
            this.pos_type_list = [{
              type: 1,
              pos_type: "转速测点"
            }];
            break;

          case 3:
            this.pos_type_list = [{
              type: 1,
              pos_type: "转速测点"
            }, {
              type: 5,
              pos_type: "数字量测点"
            }];
            break;

          case 4:
            this.pos_type_list = [{
              type: 7,
              pos_type: "温度测点"
            }];
            break;

          case 5:
            this.pos_type_list = [{
              type: 12,
              pos_type: "倾角测点"
            }, {
              type: 10,
              pos_type: "工艺量测点"
            }];
            break;

          case 6:
            this.pos_type_list = [{
              type: 13,
              pos_type: "合成倾角测点"
            }];
            break;

          case 8:
            this.pos_type_list = [{
              type: 14,
              pos_type: "螺栓"
            }];
            break;

          case 11:
            this.pos_type_list = [{
              type: 200,
              pos_type: "长采样测点"
            }];
            break;

          case 0:
            this.pos_type_list = [{
              type: 3,
              pos_type: "振动测点"
            }, {
              type: 4,
              pos_type: "包络测点"
            }, {
              type: 8,
              pos_type: "振动阶次测点"
            }, {
              type: 9,
              pos_type: "包络阶次测点"
            }, {
              type: 6,
              pos_type: "晃度测点"
            }, {
              type: 12,
              pos_type: "倾角测点"
            }];
            break;
        }
      }
    },

    /*添加子元素*/
    addSon: function addSon() {
      var node = this.jm.get_selected_node();

      if (node) {
        var posType = "";

        switch (parseInt(node.data.ch_type)) {
          case 1:
            posType = 1;
            break;

          case 2:
            posType = 1;
            break;

          case 3:
            posType = 1;
            break;

          case 4:
            posType = 7;
            break;

          case 5:
            posType = 12;
            break;

          case 6:
            posType = 13;
            break;

          case 8:
            posType = 14;
            break;

          case 11:
            posType = 200;
            break;

          case 0:
            posType = 3;
            break;
        }

        var newPodId = this.setPosId(this.type_id_list, posType) + "_" + posType;
        var treeData = this.jm.get_data("node_array");

        for (var i = 0; i < treeData.data.length; i++) {
          if (treeData.data[i].id == newPodId) {
            newPodId = Number(this.setPosId(this.type_id_list, posType) + 1) + "_" + posType;
            break;
          }
        }

        var obj = {
          mac_id: node.data.mac_id,
          mac_me: node.data.mac_me,
          m_type: node.data.m_type,
          dgm_id: node.data.dgm_id,
          dgm_type: node.data.dgm_type,
          dgm_name: node.data.dgm_name,
          ch_id: node.data.ch_id,
          ch_type: node.data.ch_type,
          ch_name: node.data.ch_name,
          pos_type: posType,
          pos_id: newPodId.split('_')[0],
          operate: 1
        };
        this.jm.add_node(node.id, newPodId, "+", obj); // $('#control_btn').css('display','block');

        this.addBtn(node);
        var that = this;
        that.getRightClick();
        $('jmnodes jmnode').off("click");
        $('jmnodes jmnode').click(function () {
          var node = that.jm.get_selected_node();
          that.addBtn(node);
        });
        $("#clickExpandBtn").trigger('click');
      }
    },

    /*删除选中节点*/
    deleteItem: function deleteItem() {
      var node = this.jm.get_selected_node();
      var data = this.jm.get_data("node_array");

      if (node) {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].id != -1 && data.data[i].parentid == node.id) {
            // this.deleteTreeData.push(data.data[i].id);
            swal({
              title: "提示",
              text: '该组织下有子组织，不可删除！',
              button: "确认"
            });
            this.isRightClick = false;
            $('#pos_choose').css('display', 'none');
            return false;
          }
        }

        var obj = {
          mac_id: node.data.mac_id,
          position_type: node.data.pos_type,
          position_type_id: node.data.pos_type + "_" + node.data.pos_id,
          position_id: node.data.pos_id
        };
        this.deleteTreeData.push(obj);
        this.jm.remove_node(node.id); // $('#control_btn').css('display','none');

        $('#clickBtn').trigger("click");
      } else {
        swal({
          title: "提示",
          text: '请先选择想要删除的节点',
          button: "确认"
        });
      }

      this.isRightClick = false;
      $('#pos_choose').css('display', 'none');
    },
    bindClick: function bindClick() {
      $('jmnodes jmnode').click(function () {// $('#control_btn').css('display','block');
      });
    },
    clickExpand: function clickExpand() {
      $('jmnodes jmexpander').click(function () {// $('#control_btn').css('display','none');
      });
    },

    /*编辑选中节点*/
    editItem: function editItem() {
      var node = this.jm.get_selected_node();

      if (node) {
        this.jm.begin_edit(node.id);

        if (node.topic == "+") {} else {
          node.data.operate = 2;
          node.data.pos_old_type = -1;
          node.data.pos_old_id = -1;
        }
      } else {
        swal({
          title: "提示",
          text: '请先选择想要编辑的节点',
          button: "确认"
        });
      }

      this.isRightClick = false;
      $('#pos_choose').css('display', 'none');
    },

    /*右键事件*/
    getRightClick: function getRightClick() {
      var that = this;
      var wrap = document.getElementById('wrapper');
      var posTypeBlock = document.getElementById('pos_choose');
      var containerTree = document.getElementById('jsmind_container');
      $('jmnodes jmnode').off("contextmenu");
      $('jmnodes jmnode').contextmenu(function (e) {
        var e = event || window.event;
        e.preventDefault();
        var node = that.jm.get_selected_node();

        if (node.data.indexMe == 1 || node.data.indexMe == 2 || node.isroot) {
          return false;
        } else {
          that.isRightClick = true; // posTypeBlock.style.display = "block";//右键更改测点类型功能暂时关闭

          wrap.style.left = e.clientX - 185 + 'px';
          wrap.style.top = e.clientY - 100 + 'px';
          posTypeBlock.style.left = e.clientX - 45 + 'px';
          posTypeBlock.style.top = e.clientY - 60 + 'px';
          return false; //取消右键点击的默认事件
        }
      });
    }
  },
  watch: {
    data: function data() {
      this.$nextTick(function () {
        var that = this;
        that.getRightClick();
        $('jmnodes jmnode').off("click");
        $('jmnodes jmnode').click(function () {
          // $('#control_btn').css('display','block');
          var node = that.jm.get_selected_node();
          that.addBtn(node);
          that.checkSelect();
        });
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "myTree", attrs: { id: "myTree" } }, [
    _c(
      "button",
      {
        staticClass: "my-btn btn-active btn2",
        on: {
          click: function($event) {
            return _vm.getThisData()
          }
        }
      },
      [_vm._v("保存设置")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticStyle: { display: "none" },
        attrs: { id: "clickBtn" },
        on: {
          click: function($event) {
            return _vm.bindClick()
          }
        }
      },
      [_vm._v("点击")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticStyle: { display: "none" },
        attrs: { id: "clickExpandBtn" },
        on: {
          click: function($event) {
            return _vm.clickExpand()
          }
        }
      },
      [_vm._v("点击")]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "jsmind_container" } }),
    _vm._v(" "),
    _c("div", { attrs: { id: "control_btn" } }, [
      _c(
        "div",
        {
          staticClass: "up",
          attrs: { title: "向上添加节点" },
          on: {
            click: function($event) {
              return _vm.addBroBefore()
            }
          }
        },
        [_c("span", { staticClass: "up_angle" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "down",
          attrs: { title: "向下添加节点" },
          on: {
            click: function($event) {
              return _vm.addBroAfter()
            }
          }
        },
        [_c("span", { staticClass: "down_angle" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "right",
          attrs: { title: "添加子节点" },
          on: {
            click: function($event) {
              return _vm.addSon()
            }
          }
        },
        [_c("span", { staticClass: "right_angle" })]
      )
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn-reset",
        on: {
          click: function($event) {
            return _vm.resetZoom()
          }
        }
      },
      [_vm._v("重置")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isRightClick,
            expression: "isRightClick"
          }
        ],
        ref: "wrapper",
        staticClass: "right-click",
        attrs: { id: "wrapper" }
      },
      [
        _c(
          "a",
          {
            staticClass: "right-click-btn",
            on: {
              click: function($event) {
                return _vm.deleteItem()
              }
            }
          },
          [_vm._v("删除选中测点")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "right-click-btn",
            on: {
              click: function($event) {
                return _vm.editItem()
              }
            }
          },
          [_vm._v("编辑选中测点")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "ul",
      {
        ref: "posChoose",
        staticClass: "pos_choose",
        attrs: { id: "pos_choose" }
      },
      _vm._l(_vm.pos_type_list, function(item) {
        return _c(
          "li",
          {
            staticClass: "pos_item",
            on: {
              click: function($event) {
                return _vm.choosePosType(item.type, item.pos_type)
              }
            }
          },
          [_vm._v(_vm._s(item.pos_type))]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/content/system/position/PositionTree.vue":
/*!*****************************************************************!*\
  !*** ./src/components/content/system/position/PositionTree.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositionTree.vue?vue&type=template&id=373e3033&scoped=true& */ "./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true&");
/* harmony import */ var _PositionTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionTree.vue?vue&type=script&lang=js& */ "./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PositionTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "373e3033",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/system/position/PositionTree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_PositionTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./PositionTree.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/position/PositionTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_PositionTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./PositionTree.vue?vue&type=template&id=373e3033&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/position/PositionTree.vue?vue&type=template&id=373e3033&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_PositionTree_vue_vue_type_template_id_373e3033_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=114-882b42fb.js.map