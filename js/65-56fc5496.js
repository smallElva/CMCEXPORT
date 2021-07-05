(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/lib/jsMind/jsmind.js */ "./src/assets/lib/jsMind/jsmind.js");
/* harmony import */ var assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/js/mac_methods.js */ "./src/components/content/system/machine/table/js/mac_methods.js");
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
  name: "MachineTree",
  data: function data() {
    return {
      data: [{
        "id": "-1",
        "isroot": true,
        "topic": "顶级目录"
      }],
      isShow: false,
      //是否可见机组
      macTid: "",
      macTname: "",
      macTypes: "",
      machineChoose: [],
      pumpData: [],
      folderData: {},
      sourceName: [],
      rootId: '',
      rootTopic: "",
      jm: null,
      mind: {},
      options: {},
      changeTreeData: {},
      //修改的普通机组的数组对象
      editTreeData: [],
      deleteTreeData: [],
      //删除的普通机组的数组列表
      changePumpData: {},
      //修改的机泵的对象
      addPumpData: {},
      //新增的机泵对象
      deletePumpData: [],
      //删除的机泵数组列表
      editTreeList: [],
      isBtnShow: false,
      //添加节点按钮是否展示
      isRightClick: false,
      //是否点击右键事件
      macTids: [],
      //所有的组织id列表
      scrollTree: 0,
      //思维导图滚动距离
      obj: {
        flag: false,
        name: "",
        treeBtn: true
      },
      ifClickSave: false,
      //是否点击了保存按钮
      userType: parseInt(sessionStorage.getItem('userType')),
      //用户类型，超级用户为0
      selectNodeInfo: {
        //选中的站点信息
        isShow: false,
        station_id: '',
        station_name: '',
        station_interval: '',
        trackList: [] //轨道信息

      },
      trackAttr: {
        '0': '折返轨',
        '1': '站台',
        '2': '转换轨'
      }
    };
  },
  mounted: function mounted() {
    var treeMac = this.$store.state.treeMac;

    if (treeMac.length == 0) {
      this.macTypes = 1;
    } else {
      var _treeMac = _slicedToArray(treeMac, 3);

      this.macTid = _treeMac[0];
      this.macTname = _treeMac[1];
      this.macTypes = _treeMac[2];
    }

    this.getFolderData();
    var that = this;
    var containerTree = document.getElementById('jsmind_container');
    that.isRightClick = false;

    containerTree.oncontextmenu = function (e) {
      if (e.target.nodeName == "JMNODE") {
        var e = event || window.event;
        that.isRightClick = true;
        that.$refs.wrapper.style.left = e.clientX - 185 + 'px';
        that.$refs.wrapper.style.top = e.clientY - 100 + 'px';
        return false; //取消右键点击的默认事件
      }
    };

    containerTree.onclick = function (e) {
      that.isRightClick = false;
      that.checkSelect();

      if (e.target.localName == "jmexpander") {
        that.isBtnShow = false;
      }
    }; //鼠标滚轮缩放


    containerTree.onmousewheel = containerTree.onmousewheel = function (e) {
      that.isBtnShow = false; //缩放状态操作按钮隐藏

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
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (!this.ifClickSave && (!$.isEmptyObject(this.changeTreeData) || !$.isEmptyObject(this.changePumpData) || !$.isEmptyObject(this.addPumpData))) {
      swal({
        title: "警告",
        text: "正在离开本页面，本页面内所有未保存数据都会丢失。",
        buttons: {
          sure: "确认",
          cancel: "取消"
        },
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          next();
        } else {
          window.history.go(1);
        }
      });
    } else {
      next();
    }
  },
  updated: function updated() {
    this.scrollTree = $('.jsmind-inner').scrollTop();
  },
  watch: {
    data: {
      handler: function handler(value, oldValue) {
        if (this.data.length) {
          this.$nextTick(function () {
            var that = this;
            $('jmnodes jmnode').off("click");
            $('jmnodes jmnode').click(function () {
              var node = that.jm.get_selected_node();
              that.addBtn(node);
              that.checkSelect();
            });
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    load_jsmind: function load_jsmind() {
      var _this = this;

      $('#jsmind_container').empty();
      this.machineChoose = [];
      this.data = [];
      var t_root = 0;

      if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["MacTypeBtn"].includes(Number(this.macTypes))) {
        if (this.parentMachine.length > 0) {
          for (var i = 0; i < this.parentMachine.length; i++) {
            if (this.macTid) {
              var macId = void 0;

              if (this.macTid.toString().indexOf('_') > -1) {
                macId = this.macTid.split('_')[0];
              } else {
                macId = this.macTid;
              }

              if (this.parentMachine[i].t_id == macId) {
                this.rootId = macId;
                this.rootTopic = this.parentMachine[i].t_name;
                this.machineChoose.push(this.parentMachine[i]);
              } else if (this.macTids.indexOf(macId) == -1) {
                this.rootId = macId;
                this.rootTopic = this.macTname;
              }
            } else {
              if (this.macTypes == 1 && this.parentMachine[i].t_root == 0) {
                this.rootTopic = this.parentMachine[i].t_name;
                this.rootId = this.parentMachine[i].t_id;
                this.machineChoose.push(this.parentMachine[i]);
                break;
              }

              if (this.macTypes == 5 && this.parentMachine[i].t_root == 1) {
                this.rootTopic = this.parentMachine[i].t_name;
                this.rootId = this.parentMachine[i].t_id;
                this.machineChoose.push(this.parentMachine[i]);
                break;
              }

              if (this.macTypes == 6 && this.parentMachine[i].t_root == 2) {
                this.rootTopic = this.parentMachine[i].t_name;
                this.rootId = this.parentMachine[i].t_id;
                this.machineChoose.push(this.parentMachine[i]);
                break;
              }

              if (this.macTypes == 7 && this.parentMachine[i].t_root == 3) {
                this.rootTopic = this.parentMachine[i].t_name;
                this.rootId = this.parentMachine[i].t_id;
                this.machineChoose.push(this.parentMachine[i]);
                break;
              }

              if (this.macTypes == 9 && this.parentMachine[i].t_root == -1) {
                this.rootTopic = this.parentMachine[i].t_name;
                this.rootId = this.parentMachine[i].t_id;
                this.machineChoose.push(this.parentMachine[i]);
                break;
              }
            }
          }
        } else {
          this.rootId = this.macTid;
          this.rootTopic = this.macTname;
        }

        if (this.macTypes == 1) {
          t_root = 0;
        } else if (this.macTypes == 5) {
          t_root = 1;
        } else if (this.macTypes == 6) {
          t_root = 2;
        } else if (this.macTypes == 7) {
          t_root = 3;
        } else if (this.macTypes == 9) {
          t_root = -1;
        }

        this.data = [{
          "id": this.rootId,
          "isroot": true,
          "topic": this.rootTopic,
          "t_root": t_root
        }];

        for (var _i2 = 0; _i2 < this.machineChoose.length; _i2++) {
          var obj = {};
          obj.id = this.machineChoose[_i2].mac_id;
          obj.topic = this.machineChoose[_i2].mac_me;
          obj.parentid = this.rootId;
          obj.operate = 0;
          obj.updateTime = this.machineChoose[_i2].updateTime; //机组uid

          obj.t_id = this.machineChoose[_i2].t_id; //直属组织uid

          obj.t_name = this.machineChoose[_i2].t_name;
          obj.t_root = this.machineChoose[_i2].t_root;
          obj.mac_me = this.machineChoose[_i2].mac_me; //机组名称

          obj.mac_id = this.machineChoose[_i2].mac_id; //机组名称

          obj.m_type = this.machineChoose[_i2].m_type; //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组)

          obj.mac_activity = this.machineChoose[_i2].mac_activity; //机组状态 0:正常 1：禁用

          obj.flag = this.machineChoose[_i2].flag; //机组是否绑定采集器，1有，0没有

          obj.baseInfo = this.machineChoose[_i2].baseInfo;
          obj.condition = this.machineChoose[_i2].condition; //工况

          this.data.push(obj);
        }
      } else if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(this.macTypes))) {
        var objRoot = {}; //根节点：组织信息

        this.pumpData = [];
        var origData = [];

        for (var _i3 = 0; _i3 < this.parentMachine.length; _i3++) {
          if (this.macTid) {
            var _macId = void 0;

            if (this.macTid.toString().indexOf('_') > -1) {
              _macId = this.macTid.split('_')[0];
            } else {
              _macId = this.macTid;
            }

            if (this.parentMachine[_i3].folder_id == _macId) {
              this.rootId = _macId;
              this.rootTopic = this.parentMachine[_i3].folder_name;
            } else if (this.macTids.indexOf(_macId) == -1) {
              this.rootId = _macId;
              this.rootTopic = this.macTname;
            }
          } else {
            if (this.macTypes == 3 && this.parentMachine[_i3].t_root == 1) {
              this.rootTopic = this.parentMachine[_i3].folder_name;
              this.rootId = this.parentMachine[_i3].folder_id;
              break;
            }

            if (this.macTypes == 8 && this.parentMachine[_i3].t_root == 2) {
              this.rootTopic = this.parentMachine[_i3].folder_name;
              this.rootId = this.parentMachine[_i3].folder_id;
              break;
            }

            if (this.macTypes == 10 && this.parentMachine[_i3].t_root == -1) {
              this.rootTopic = this.parentMachine[_i3].folder_name;
              this.rootId = this.parentMachine[_i3].folder_id;
              break;
            }
          }

          if (this.parentMachine[_i3].folder_id == this.rootId) {
            this.pumpData.push(this.parentMachine[_i3]);
          }

          if (this.macTypes == 3) {
            t_root = 1;
          } else if (this.macTypes == 8) {
            t_root = 2;
          } else if (this.macTypes == 10) {
            t_root = -1;
          }

          objRoot = {
            "id": this.rootId,
            "isroot": true,
            "topic": this.rootTopic,
            "t_root": t_root
          };
        }

        origData.push(objRoot);

        for (var _i4 = 0; _i4 < this.pumpData.length; _i4++) {
          var macObj = {};
          var pumpObj = {};
          macObj.id = this.pumpData[_i4].machine_id;
          macObj.topic = this.pumpData[_i4].machine_name;
          macObj.parentid = this.rootId;
          macObj.folder_id = this.pumpData[_i4].folder_id;
          macObj.folder_name = this.pumpData[_i4].folder_name;
          macObj.machine_id = this.pumpData[_i4].machine_id;
          macObj.machine_name = this.pumpData[_i4].machine_name;
          macObj.t_root = this.pumpData[_i4].t_root;
          macObj.ch_class = this.pumpData[_i4].pump.ch_class;
          macObj.mac_id = this.pumpData[_i4].pump.mac_id;
          macObj.pump_activity = this.pumpData[_i4].pump.pump_activity;
          macObj.pump_id = this.pumpData[_i4].pump.pump_id;
          macObj.pump_name = this.pumpData[_i4].pump.pump_name;
          macObj.pump_type = this.pumpData[_i4].pump.pump_type;
          macObj.driveChain_name = this.pumpData[_i4].pump.driveChain_name; //传动链名称

          macObj.updateTime = this.pumpData[_i4].pump.updateTime;
          macObj.baseInfo = this.pumpData[_i4].pump.baseInfo;
          macObj.indexMe = 2;
          pumpObj.operate = 0;
          pumpObj.id = this.pumpData[_i4].pump.pump_id;
          pumpObj.topic = this.pumpData[_i4].pump.pump_name;
          pumpObj.parentid = this.pumpData[_i4].machine_id;
          pumpObj.folder_id = this.pumpData[_i4].folder_id;
          pumpObj.folder_name = this.pumpData[_i4].folder_name;
          pumpObj.machine_id = this.pumpData[_i4].machine_id;
          pumpObj.machine_name = this.pumpData[_i4].machine_name;
          pumpObj.t_root = this.pumpData[_i4].t_root;
          pumpObj.ch_class = this.pumpData[_i4].pump.ch_class;
          pumpObj.mac_id = this.pumpData[_i4].pump.mac_id;
          pumpObj.pump_activity = this.pumpData[_i4].pump.pump_activity;
          pumpObj.pump_id = this.pumpData[_i4].pump.pump_id;
          pumpObj.pump_name = this.pumpData[_i4].pump.pump_name;
          pumpObj.pump_type = this.pumpData[_i4].pump.pump_type;
          pumpObj.driveChain_name = this.pumpData[_i4].pump.driveChain_name; //传动链名称

          pumpObj.updateTime = this.pumpData[_i4].pump.updateTime;
          pumpObj.baseInfo = this.pumpData[_i4].pump.baseInfo;
          pumpObj.indexMe = 3;
          origData.push(macObj, pumpObj);
        }

        origData = this.unique(origData);
        this.data = origData;
      } else if (this.macTypes == 4) {
        if (this.parentMachine.length) {
          this.parentMachine.forEach(function (station) {
            if (Number(station.station_id) === 1) {
              objRoot = {
                "id": 1,
                "isroot": true,
                "topic": station.station_name,
                "t_root": t_root,
                "station_interval": 0,
                "trackList": station.trackList
              };

              _this.data.push(objRoot);
            } else {
              var _obj = {
                id: station.station_id,
                topic: station.station_name,
                parentid: station.last_id,
                station_interval: station.station_interval,
                operate: 0,
                trackList: station.trackList
              };

              _this.data.push(_obj);
            }
          });
        } else {
          objRoot = {
            "id": 1,
            "isroot": true,
            "topic": '首站',
            "t_root": t_root,
            "station_interval": 0
          };
          this.data.push(objRoot);
        }
      }

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

        },
        shortcut: {
          enable: false //禁用快捷键

        }
      };
      this.jm = new assets_lib_jsMind_jsmind_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.options); // 让 jm 显示这个 mind 即可

      this.jm.show(this.mind);
      var that = this;
      $('jmnodes jmnode').on("click", function () {
        that.checkSelect();
        that.addBtn(node);
      });
      $('jmnodes jmnode').on("dblclick", function () {
        var node = that.jm.get_selected_node();

        if (!node.isroot) {
          var linkObj = [node.id, node.topic];
          that.$store.commit('setTreePosition', linkObj);
          that.$router.push({
            name: "positiontree"
          });
        }
      });
      $('#jsmind_container').on('dragend', function (event) {
        var node = that.jm.get_selected_node();
        var data = that.jm.get_data('node_array');

        if (node) {
          for (var _i5 = 0; _i5 < data.data.length; _i5++) {
            if (that.editTreeList.indexOf(node.id) == -1 && data.data[_i5].id == node.id) {
              that.editTreeList.push(node.id);
            }
          }
        }
      });
      that.checkSelect();
      $('.jsmind-inner').on('scroll', function () {
        that.isBtnShow = false;
      });
    },
    //判断是否有选中
    checkSelect: function checkSelect() {
      var selectNode = this.jm.get_selected_node();

      if (selectNode != null || selectNode != undefined) {
        if (this.jm.shortcut.jm.view.actualZoom !== 1) {
          this.isBtnShow = false; //缩放状态隐藏
        } else {
          this.isBtnShow = true;
        }

        this.selectNodeInfo.isShow = true;
        this.selectNodeInfo.station_id = selectNode.id;
        this.selectNodeInfo.station_name = selectNode.topic;
        this.selectNodeInfo.station_interval = selectNode.data.station_interval;
        this.selectNodeInfo.trackList = selectNode.data.trackList;
      } else {
        this.isBtnShow = false;
        this.selectNodeInfo.isShow = false;
      }
    },
    //编辑每个站点信息
    editStation: function editStation() {
      var selectNode = this.jm.get_node(this.selectNodeInfo.station_id);

      if (selectNode != null || selectNode != undefined) {
        selectNode.data.station_interval = this.selectNodeInfo.station_interval;
      }
    },
    //添加设备
    addDevice: function addDevice() {
      var selectNode = this.jm.get_node(this.selectNodeInfo.station_id);
      var obj = {
        deviceName: '',
        deviceId: '',
        deviceAttr: '0'
      };

      if (selectNode != null || selectNode != undefined) {
        if (this.selectNodeInfo.trackList === null || typeof this.selectNodeInfo.trackList === "undefined") {
          this.selectNodeInfo.trackList = [];
        }

        ;
        this.selectNodeInfo.trackList.push(obj);
        selectNode.data.trackList = this.selectNodeInfo.trackList;
      }
    },
    //删除设备
    delDevice: function delDevice(track, index) {
      var selectNode = this.jm.get_node(this.selectNodeInfo.station_id);

      if (selectNode != null || selectNode != undefined) {
        this.selectNodeInfo.trackList.splice(index, 1); //删除该项

        selectNode.data.trackList = this.selectNodeInfo.trackList;
      }
    },
    //还原
    resetZoom: function resetZoom() {
      this.jm.view.setZoom(1);
    },
    getMacData: function getMacData() {
      var that = this;
      that.parentMachine = [];
      that.macTids.length = 0;

      if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["MacTypeBtn"].includes(Number(this.macTypes))) {
        switch (Number(this.macTypes)) {
          case 1:
            this.obj.name = "VibMac";
            break;

          case 5:
            this.obj.name = "CementMac";
            break;

          case 6:
            this.obj.name = "RailMac";
            break;

          case 7:
            this.obj.name = "OilMac";
            break;

          case 9:
            this.obj.name = "CommonMac";
            break;
        }

        this.$emit('listenToChildEvent', this.obj);
        var paramObj = null;
        paramObj = {
          t_ids: that.$store.state.tids
        };
        that.$axios.post('queryAllMachine', paramObj).then(function (res) {
          if (res && res.machine_list && res.machine_list.length) {
            that.parentMachine = res.machine_list;

            for (var i = 0; i < res.machine_list.length; i++) {
              that.macTids.push(res.machine_list[i].t_id);
            }

            that.load_jsmind();
          } else {
            console.log('数据错误！');
            that.isShow = true;
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(this.macTypes))) {
        switch (Number(this.macTypes)) {
          case 3:
            this.obj.name = "Pump";
            break;

          case 8:
            this.obj.name = "Car";
            break;

          case 10:
            this.obj.name = "ComsonMac";
            break;
        }

        this.$emit('listenToChildEvent', this.obj);
        var _paramObj = null;
        _paramObj = {
          t_ids: that.$store.state.tids
        };
        that.$axios.post('queryPumps', _paramObj).then(function (res) {
          if (res != undefined && res.length > 0) {
            that.parentMachine = res;

            for (var i = 0; i < res.length; i++) {
              that.macTids.push(res[i].t_id);
            }

            that.load_jsmind();
          } else {
            console.log('数据错误！');
            that.isShow = true;
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (this.macTypes == 4) {
        this.obj.name = "RailLine";
        that.$axios.post('queryLineByLineId', that.macTid).then(function (res) {
          if (res != undefined && res.length) {
            that.parentMachine = res[0].stations;
            that.load_jsmind();
          } else {
            console.log('数据错误！');
            that.isShow = true;
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
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

    /*获取数据*/
    getThisData: function getThisData(macTypes) {
      this.ifClickSave = true; //点击了保存将值改为true

      var that = this;
      var treeData = this.jm.get_data("node_array");
      var macNameList = []; //机组名集合

      var pumpNameList = {}; //同一组织下机泵名集合

      if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(macTypes))) {
        for (var i = 0; i < treeData.data.length; i++) {
          if (!treeData.data[i].isroot) {
            var mac_id = treeData.data[i].machine_id;

            if (!pumpNameList[mac_id]) {
              pumpNameList[mac_id] = [];
            }

            pumpNameList[mac_id].push(treeData.data[i].topic);
          }
        }
      } else if (macTypes == 4) {
        for (var _i6 = 0; _i6 < treeData.data.length; _i6++) {
          macNameList.push(treeData.data[_i6].topic);
        }
      } else {
        for (var _i7 = 0; _i7 < treeData.data.length; _i7++) {
          if (!treeData.data[_i7].isroot) {
            macNameList.push(treeData.data[_i7].topic);
          }
        }
      }

      var arr = this.staticNumber(macNameList);

      if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["MacTypeBtn"].includes(Number(macTypes))) {
        this.changeTreeData = {};

        for (var _i8 = 0; _i8 < treeData.data.length; _i8++) {
          if (treeData.data[_i8].isroot) {
            continue;
          }

          var macObj = {
            updateTime: treeData.data[_i8].updateTime,
            //更新时间
            t_id: treeData.data[_i8].t_id,
            //直属组织uid
            t_name: treeData.data[_i8].t_name,
            //上级组织名称
            t_root: treeData.data[_i8].t_root,
            //上级组织类型
            mac_me: treeData.data[_i8].topic,
            //机组名称
            m_type: treeData.data[_i8].m_type,
            //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组
            mac_activity: treeData.data[_i8].mac_activity,
            //机组状态 0:正常 1：禁用
            mac_id: treeData.data[_i8].mac_id,
            //机组uid
            //机组状态 0:正常 1：禁用
            baseInfo: treeData.data[_i8].baseInfo,
            condition: treeData.data[_i8].condition
          };

          if (treeData.data[_i8].topic == "") {
            swal({
              title: "提示",
              text: "\u673A\u7EC4\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
              button: "确认"
            });
            return false;
          } else if (arr[treeData.data[_i8].topic] >= 2) {
            swal({
              title: "提示",
              text: "".concat(treeData.data[_i8].topic, "\uFF1A\u673A\u7EC4\u540D\u4E0D\u80FD\u91CD\u590D\uFF01"),
              button: "确认"
            });
            return false;
          } else {
            if (treeData.data[_i8].operate == 1 || treeData.data[_i8].operate == 2) {
              this.changeTreeData[_i8] = macObj;
            }
          }
        }

        if (!$.isEmptyObject(that.changeTreeData)) {
          //添加组织和修改组织
          that.changeTreeData.t_ids = that.$store.state.tids;
          that.$axios.post('saveNewMachine', that.changeTreeData).then(function (res) {
            that.changeTreeData = {};

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                that.getMacData();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台程序运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      } else if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(macTypes))) {
        for (var _i9 = 0; _i9 < treeData.data.length; _i9++) {
          if (treeData.data[_i9].isroot) {
            continue;
          }

          var pumpObj = {
            folder_id: treeData.data[_i9].folder_id.toString(),
            //直属组织uid
            folder_name: treeData.data[_i9].folder_name,
            //上级组织名称
            machine_id: treeData.data[_i9].machine_id,
            machine_name: treeData.data[_i9].machine_name,
            t_root: treeData.data[_i9].t_root.toString(),
            driveChain_name: treeData.data[_i9].driveChain_name,
            //传动链名称
            pump: {
              updateTime: treeData.data[_i9].updateTime.toString(),
              //更新时间
              ch_class: treeData.data[_i9].ch_class,
              mac_id: treeData.data[_i9].mac_id,
              pump_activity: treeData.data[_i9].pump_activity.toString(),
              pump_id: treeData.data[_i9].pump_id,
              pump_name: treeData.data[_i9].topic,
              pump_type: treeData.data[_i9].pump_type.toString(),
              baseInfo: treeData.data[_i9].baseInfo
            }
          };
          var arr2 = void 0;

          if (pumpNameList[treeData.data[_i9].machine_id] != undefined && pumpNameList[treeData.data[_i9].machine_id].length > 0) {
            arr2 = this.staticNumber(pumpNameList[treeData.data[_i9].machine_id]);
          }

          if (treeData.data[_i9].topic == "") {
            swal({
              title: "提示",
              text: "\u673A\u6CF5\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
              button: "确认"
            });
            return false;
          } else if (arr2[treeData.data[_i9].topic] >= 2) {
            swal({
              title: "提示",
              text: "".concat(treeData.data[_i9].topic, "\uFF1A\u673A\u6CF5\u540D\u4E0D\u80FD\u91CD\u590D\uFF01"),
              button: "确认"
            });
            return false;
          } else {
            if (treeData.data[_i9].operate == 2) {
              this.changePumpData[_i9] = pumpObj;
            } else if (treeData.data[_i9].operate == 1) {
              this.addPumpData[_i9] = pumpObj;
            }
          }
        }

        if ($.isEmptyObject(this.changePumpData) && $.isEmptyObject(this.addPumpData)) {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }

        if (!$.isEmptyObject(that.changePumpData)) {
          that.$axios.post('updatePumps', that.changePumpData).then(function (res) {
            that.changePumpData = {};

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '操作成功',
                button: "确认"
              }).then(function (value) {
                that.getMacData();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '操作失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台程序错误！');
              swal({
                title: "提示",
                text: '操作失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        } //新增测点信息


        if (!$.isEmptyObject(that.addPumpData)) {
          that.addPumpData.t_ids = that.$store.state.tids;
          this.$axios.post('createPumps', that.addPumpData).then(function (res) {
            that.addPumpData = {};

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '操作成功',
                button: "确认"
              }).then(function (value) {
                that.getMacData();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '操作失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台程序错误！');
              swal({
                title: "提示",
                text: '操作失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        }
      } else if (macTypes == 4) {
        this.changeTreeData = {};
        this.changeTreeData[this.macTid] = {};
        this.changeTreeData[this.macTid].line_id = this.macTid;
        this.changeTreeData[this.macTid].line_name = this.macTname;
        this.changeTreeData[this.macTid].stations = [];

        for (var _i10 = 0; _i10 < treeData.data.length; _i10++) {
          var obj = {};
          if (treeData.data[_i10].station_interval == '') treeData.data[_i10].station_interval = 0; //如果站点间距为空则设为0

          obj = {
            station_id: treeData.data[_i10].id,
            //站点id
            station_name: treeData.data[_i10].topic,
            //站点名称
            station_interval: treeData.data[_i10].station_interval,
            //站点间距
            trackList: treeData.data[_i10].trackList //轨道信息

          };

          if (treeData.data[_i10].isroot) {
            obj.last_id = 0; //上一站id
          } else {
            obj.last_id = treeData.data[_i10].parentid; //上一站id
          }

          if (treeData.data[_i10].topic == "") {
            swal({
              title: "提示",
              text: "\u7AD9\u70B9\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
              button: "确认"
            });
            return false;
          } else if (arr[treeData.data[_i10].topic] > 1) {
            swal({
              title: "提示",
              text: "".concat(treeData.data[_i10].topic, "\uFF1A\u7AD9\u70B9\u540D\u4E0D\u80FD\u91CD\u590D\uFF01"),
              button: "确认"
            });
            return false;
          } else {
            this.changeTreeData[this.macTid].stations.push(obj);
          }
        }

        if (!$.isEmptyObject(that.changeTreeData)) {
          //添加组织和修改组织
          that.$axios.post('createLines', that.changeTreeData).then(function (res) {
            that.changeTreeData = {};

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                that.getMacData();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台程序运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      }
    },
    getFolderData: function getFolderData() {
      var that = this;
      var paramObj = null;
      paramObj = {
        t_ids: that.$store.state.tids
      };
      that.$axios.post('queryAllFolder', paramObj).then(function (res) {
        if (res != undefined && res.length > 0) {
          that.isShow = false;

          for (var i = 0; i < res.length; i++) {
            that.folderData[res[i].t_id] = res[i].t_name;
            that.sourceName.push({
              't_id': res[i].t_id,
              't_name': res[i].t_name
            });
          }

          if (that.macTid == "") {
            that.macTid = that.sourceName[0].t_id;
            that.macTname = that.sourceName[0].t_name;
          }

          that.getMacData();
        } else {
          that.isShow = true;
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /*向前添加兄弟元素*/
    addBroBefore: function addBroBefore() {
      var node = this.jm.get_selected_node();
      var data = this.jm.get_data("node_array").data;
      var id = Math.ceil(Math.random() * 10000) + "B";
      var obj = {};

      if (node && node.id == "-1") {
        swal({
          title: "提示",
          text: '已是第一级',
          button: "确认"
        });
      } else if (node && node.id != "-1") {
        if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(this.macTypes))) {
          //表示机泵或者tms的车厢
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            folder_id: this.rootId,
            folder_name: this.rootTopic,
            machine_id: node.data.machine_id,
            machine_name: node.data.machine_name,
            t_root: node.data.t_root,
            mac_id: node.data.mac_id,
            //机组uid
            ch_class: node.data.ch_class,
            pump_activity: node.data.pump_activity,
            pump_id: id,
            pump_name: "",
            pump_type: node.data.pump_type,
            driveChain_name: "",
            //传动链名称
            baseInfo: {
              brand: "",
              //品牌
              pn: "",
              //PN号
              sn: "",
              //SN号
              power: "",
              //功率
              rated_speed: "1",
              //额定转速
              speed_rate: "",
              //转速比
              mf_date: "",
              //生产日期
              other: "",
              //其它
              car_id: "" //车厢号

            }
          };
        } else if (this.macTypes == 4) {
          id = Number(data.length + 1);
          obj = {
            operate: 1,
            station_id: id,
            //站点id
            station_name: '',
            //站点名称
            last_id: Number(node.parent.id),
            //上一个站点的id
            station_interval: 0
          };
        } else {
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            t_root: node.data.t_root,
            t_id: this.rootId,
            //直属组织uid
            t_name: this.rootTopic,
            //上级组织名称
            mac_me: "",
            //机组名称
            m_type: 0,
            //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组
            mac_activity: 0,
            //机组状态 0:正常 1：禁用
            mac_id: id,
            //机组uid
            //机组状态 0:正常 1：禁用
            baseInfo: {
              driveChain_name: "",
              //传动链名称
              manufacturer: "",
              model_number: "",
              mac_type: 0,
              model_gear: "",
              made_gear: "",
              model_generator: "",
              made_generator: "",
              model_vane: "",
              made_vane: "",
              model_tower: "",
              made_tower: "",
              tower_high: 65,
              car_num: '4',
              //油气井
              ratio: '',
              dgmDepth: '',
              downTime: '',
              cosc: '',
              eta: '',
              ratedPower: '',
              sinkData: ''
            },
            condition: [] //工况信息

          };
        }

        this.jm.insert_node_before(node, id, "+", obj);
        this.ifClickSave = false; //新增了元素将值改为false

        this.isBtnShow = true;
        this.addBtn(node);
        $('jmnodes jmnode').off("click");
        var that = this;
        $('jmnodes jmnode').click(function () {
          that.checkSelect();
          var node = that.jm.get_selected_node();
          that.addBtn(node);
        });
      }
    },

    /*向后添加兄弟元素*/
    addBroAfter: function addBroAfter() {
      var node = this.jm.get_selected_node();
      var obj = {};
      var data = this.jm.get_data("node_array").data;
      var id = Math.ceil(Math.random() * 10000) + "B";

      if (node && node.id == "-1") {
        swal({
          title: "提示",
          text: '已是第一级',
          button: "确认"
        });
      } else if (node && node.id != "-1") {
        if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(this.macTypes))) {
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            folder_id: this.rootId,
            folder_name: this.rootTopic,
            machine_id: node.data.machine_id,
            machine_name: node.data.machine_name,
            t_root: node.data.t_root,
            mac_id: node.data.mac_id,
            //机组uid
            ch_class: node.data.ch_class,
            pump_activity: node.data.pump_activity,
            pump_id: id,
            pump_name: "",
            pump_type: node.data.pump_type,
            driveChain_name: "",
            //传动链名称
            baseInfo: {
              brand: "",
              //品牌
              pn: "",
              //PN号
              sn: "",
              //SN号
              power: "",
              //功率
              rated_speed: "1",
              //额定转速
              speed_rate: "",
              //转速比
              mf_date: "",
              //生产日期
              other: "",
              //其它
              car_id: "" //车厢号

            }
          };
        } else if (this.macTypes == 4) {
          id = Number(data.length + 1);
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            station_id: id,
            //站点id
            station_name: '',
            //站点名称
            station_interval: 0,
            //站点间距
            last_id: Number(node.parent.id) //上一个站点的id

          };
        } else {
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            t_root: node.data.t_root,
            t_id: this.rootId,
            //直属组织uid
            t_name: this.rootTopic,
            //上级组织名称
            mac_me: "",
            //机组名称
            m_type: 0,
            //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组
            mac_activity: 0,
            //机组状态 0:正常 1：禁用
            mac_id: id,
            //机组uid
            //机组状态 0:正常 1：禁用
            baseInfo: {
              driveChain_name: "",
              //传动链名称
              manufacturer: "",
              model_number: "",
              mac_type: 0,
              model_gear: "",
              made_gear: "",
              model_generator: "",
              made_generator: "",
              model_vane: "",
              made_vane: "",
              model_tower: "",
              made_tower: "",
              tower_high: 65,
              car_num: '4',
              //油气井
              ratio: '',
              dgmDepth: '',
              downTime: '',
              cosc: '',
              eta: '',
              ratedPower: '',
              sinkData: ''
            },
            condition: [] //工况信息

          };
        }

        this.jm.insert_node_after(node, id, "+", obj);
        var offsetTop = $('.jsmind-inner').scrollTop(); //树状图距离上边的距离

        $('.jsmind-inner').scrollTop(offsetTop + 100); //每次向下新增加一个让滚动条滚动到最底部

        this.ifClickSave = false; //新增了元素将值改为false

        $('#control_btn').css('display', 'block');
        this.addBtn(node);
        $('jmnodes jmnode').off("click");
        var that = this;
        $('jmnodes jmnode').click(function () {
          that.checkSelect();
          var node = that.jm.get_selected_node();
          that.addBtn(node);
        });
      }
    },
    addBtn: function addBtn(node) {
      this.isBtnShow = true;
      var scrollTopVal = $('.jsmind-inner').scrollTop(); //dom向下滚动的距离

      var scrollLeftVal = $('.jsmind-inner').scrollLeft(); //dom向右滚动的距离

      var lay_width = parseInt(node._data.view.width + 2);
      var lay_height = parseInt(node._data.view.height);
      var lay_left_up = parseInt(node._data.view.abs_x - scrollLeftVal);
      var lay_top_up = parseInt(node._data.view.abs_y + 32 - scrollTopVal);
      var lay_left_down = parseInt(node._data.view.abs_x + node._data.view.width / 2);
      var lay_top_down = parseInt(node._data.view.abs_y + node._data.view.height + 48 - scrollTopVal);
      var lay_left_left = parseInt(node._data.view.abs_x - 40);
      var lay_top_left = parseInt(node._data.view.abs_y + node._data.view.height);
      var lay_left_right = parseInt(node._data.view.abs_x + node._data.view.width - scrollLeftVal);
      var lay_top_right = parseInt(node._data.view.abs_y + node._data.view.height + 16 - scrollTopVal);

      if (node.data.indexMe) {
        if (node.data.indexMe == 2) {
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
      } else if (node.isroot) {
        $('.up').css({
          "z-index": -1
        });
        $('.down').css({
          "z-index": -1
        });

        if (node.children.length === 0) {
          $('.right').css({
            "height": lay_height,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_right,
            "top": lay_top_right
          });
        } else if (this.macTypes == 4) {
          //站点设置
          $('.right').css({
            "height": lay_height,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_right,
            "top": lay_top_right
          });
        } else {
          $('.right').css({
            "z-index": -1
          });
        }
      } else {
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

        if (this.macTypes == 4) {
          //站点设置
          $('.right').css({
            "height": lay_height,
            "position": "absolute",
            "z-index": 9,
            "left": lay_left_right,
            "top": lay_top_right
          });
        } else {
          $('.right').css({
            "z-index": -1
          });
        }
      }
    },

    /*添加子元素*/
    addSon: function addSon() {
      var node = this.jm.get_selected_node();
      var obj = {};
      var id = Math.ceil(Math.random() * 10000) + "B";
      var data = this.jm.get_data("node_array").data;

      if (node) {
        if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(this.macTypes))) {
          //表示机泵/车厢
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            folder_id: this.rootId,
            folder_name: this.rootTopic,
            machine_id: node.data.machine_id,
            machine_name: node.data.machine_name,
            t_root: node.data.t_root,
            mac_id: node.data.mac_id,
            //机组uid
            ch_class: node.data.ch_class,
            pump_activity: node.data.pump_activity,
            pump_id: Math.ceil(Math.random() * 10000) + "B",
            pump_name: "",
            pump_type: node.data.pump_type,
            driveChain_name: "",
            //传动链名称
            baseInfo: {
              brand: "",
              //品牌
              pn: "",
              //PN号
              sn: "",
              //SN号
              power: "",
              //功率
              rated_speed: "1",
              //额定转速
              speed_rate: "",
              //转速比
              mf_date: "",
              //生产日期
              other: "",
              //其它
              car_id: ""
            }
          };
        } else if (this.macTypes == 4) {
          id = Number(data.length + 1);
          obj = {
            operate: 1,
            station_id: id,
            //站点id
            station_name: '',
            //站点名称
            last_id: Number(node.id),
            //上一个站点的id
            station_interval: 0,
            trackList: [] //轨道信息

          };
        } else {
          obj = {
            operate: 1,
            updateTime: 0,
            //更新时间
            t_id: this.rootId,
            //直属组织uid
            t_name: this.rootTopic,
            //上级组织名称
            mac_me: "",
            //机组名称
            m_type: 0,
            //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组
            mac_activity: 0,
            //机组状态 0:正常 1：禁用
            mac_id: Math.ceil(Math.random() * 10000) + "B",
            //机组uid
            //机组状态 0:正常 1：禁用
            baseInfo: {
              driveChain_name: "",
              //传动链名称
              manufacturer: "",
              model_number: "",
              mac_type: 0,
              model_gear: "",
              made_gear: "",
              model_generator: "",
              made_generator: "",
              model_vane: "",
              made_vane: "",
              model_tower: "",
              made_tower: "",
              tower_high: 65,
              car_num: '4',
              //油气井
              ratio: '',
              dgmDepth: '',
              downTime: '',
              cosc: '',
              eta: '',
              ratedPower: '',
              sinkData: ''
            },
            condition: [] //工况信息

          };
        }

        this.jm.add_node(node, id, "+", obj);
        var offsetLeft = $('.jsmind-inner').scrollLeft(); //树状图距离左边的距离

        $('.jsmind-inner').scrollLeft(offsetLeft + 250); //每次向右新增加一个让滚动条滚动到最右边

        this.ifClickSave = false; //新增了元素将值改为false

        $('#control_btn').css('display', 'block');
        this.addBtn(node);
        var that = this;
        $('jmnodes jmnode').off("click");
        $('jmnodes jmnode').click(function () {
          that.checkSelect();
          var node = that.jm.get_selected_node();
          that.addBtn(node);
        });
        $("#clickExpandBtn").trigger('click');
      }
    },

    /*删除选中节点*/
    deleteItem: function deleteItem() {
      var _this2 = this;

      var node = this.jm.get_selected_node();
      var that = this;
      var data = this.jm.get_data("node_array");

      if (node) {
        var obj = {};

        if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_1__["PumpTypeBtn"].includes(Number(that.macTypes))) {
          if (node.data.indexMe == 2) {
            swal({
              title: "提示",
              text: "\u8BE5\u673A\u7EC4\u4E0D\u53EF\u5220\u9664",
              button: "确认"
            });
            $('#wrapper').css('display', 'none');
            return false;
          } else if (node.isroot) {
            swal({
              title: "提示",
              text: "\u7EC4\u7EC7\u4E0D\u53EF\u5220\u9664",
              button: "确认"
            });
            $('#wrapper').css('display', 'none');
            return false;
          }

          obj = {
            mac_id: node.data.mac_id,
            pump_id: node.data.pump_id
          };
          this.deletePumpData.push(obj); //删除测点信息

          if (this.deletePumpData.length > 0) {
            var _that = this;

            swal({
              title: "警告",
              text: "一旦删除，该机组数据将不保留！！！确定删除吗?",
              buttons: {
                sure: "确认",
                cancel: "取消"
              },
              dangerMode: true
            }).then(function (willDelete) {
              if (willDelete) {
                _that.$axios.post('deletePumps', _that.deletePumpData).then(function (res) {
                  _that.deletePumpData = [];

                  if (res.msg == 0) {
                    _this2.jm.remove_node(node.id);

                    swal({
                      title: "提示",
                      text: '删除成功',
                      button: "确认"
                    }).then(function (value) {
                      _that.getMacData();
                    });
                  } else if (res.msg == 1) {
                    console.log('参数为空！');
                    swal({
                      title: "提示",
                      text: '删除失败',
                      button: "确认"
                    });
                  } else if (res.msg == 2) {
                    console.log('后台程序错误！');
                    swal({
                      title: "提示",
                      text: '删除失败',
                      button: "确认"
                    });
                  }
                })["catch"](function (err) {
                  console.log('请求错误', err);
                });

                $('#control_btn').css('display', 'none');
                $('#clickBtn').trigger("click");
              }
            });
          }
        } else if (that.macTypes == 4) {
          this.isBtnShow = false;
          $('#wrapper').css('display', 'none');
          this.jm.remove_node(node.id); // that.getThisData(that.macTypes);
        } else {
          if (node.data.flag == 1) {
            swal({
              title: "提示",
              text: "\u8BE5\u673A\u7EC4\u7ED1\u5B9A\u4E86\u91C7\u96C6\u5668\uFF0C\u4E0D\u53EF\u5220\u9664",
              button: "确认"
            });
            $('#wrapper').css('display', 'none');
            return false;
          } else if (node.isroot) {
            swal({
              title: "提示",
              text: "\u7EC4\u7EC7\u4E0D\u53EF\u5220\u9664",
              button: "确认"
            });
            $('#wrapper').css('display', 'none');
            return false;
          }

          this.deleteTreeData.push(node.id);
          swal({
            title: "警告",
            text: "一旦删除，该机组数据将不保留！！！确定删除吗?",
            buttons: {
              sure: "确认",
              cancel: "取消"
            },
            dangerMode: true
          }).then(function (willDelete) {
            if (willDelete) {
              var paramObj = null;
              var _that2 = _this2;
              paramObj = {
                json: _that2.deleteTreeData,
                t_ids: _that2.$store.state.tids
              };

              _this2.$axios.post('deleteMachine', paramObj).then(function (res) {
                _that2.deleteTreeData = []; //请求过后将删除列表置空

                if (res.msg == 0) {
                  _this2.jm.remove_node(node.id);

                  swal({
                    title: "提示",
                    text: '删除成功',
                    button: "确认"
                  }).then(function (value) {
                    _that2.getMacData();
                  });
                } else if (res.msg == 1) {
                  console.log('参数为空！');
                  swal({
                    title: "提示",
                    text: '删除失败',
                    button: "确认"
                  });
                } else if (res.msg == 2) {
                  console.log('后台运行错误！');
                  swal({
                    title: "提示",
                    text: '删除失败',
                    button: "确认"
                  });
                }
              })["catch"](function (err) {
                console.log('请求错误', err);
              });

              $('#control_btn').css('display', 'none');
              $('#clickBtn').trigger("click");
            }
          });
        }
      } else {
        swal({
          title: "提示",
          text: '请先选择想要删除的节点',
          button: "确认"
        });
      }

      $('#wrapper').css('display', 'none');
    },
    bindClick: function bindClick() {
      var that = this;
      $('jmnodes jmnode').click(function () {
        that.checkSelect();
      });
    },
    clickExpand: function clickExpand() {
      $('jmnodes jmexpander').click(function () {
        $('#control_btn').css('display', 'none');
      });
    },
    //数组中元素的个数
    staticNumber: function staticNumber(arr) {
      return arr.reduce(function (prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
      }, {});
    },

    /*编辑选中节点*/
    editItem: function editItem() {
      var node = this.jm.get_selected_node();

      if (node) {
        if (node.isroot && this.macTypes != 4) {
          swal({
            title: "提示",
            text: "\u7EC4\u7EC7\u540D\u4E0D\u53EF\u7F16\u8F91",
            button: "确认"
          });
        } else if (node.data.indexMe == 2) {
          swal({
            title: "提示",
            text: "\u673A\u7EC4\u540D\u4E0D\u53EF\u7F16\u8F91",
            button: "确认"
          });
        } else {
          this.jm.begin_edit(node.id);

          if (node.data.operate != 1) {
            node.data.operate = 2;
          }

          this.ifClickSave = false; //新增了元素将值改为false
        }
      } else {
        swal({
          title: "提示",
          text: '请先选择想要编辑的节点',
          button: "确认"
        });
      }

      $('#wrapper').css('display', 'none');
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    { ref: "content", staticClass: "myTree", attrs: { id: "myTree" } },
    [
      _c(
        "button",
        {
          staticClass: "my-btn btn-active btn2",
          on: {
            click: function($event) {
              return _vm.getThisData(_vm.macTypes)
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
      _c("div", { ref: "jsmind", attrs: { id: "jsmind_container" } }),
      _vm._v(" "),
      _vm.isShow
        ? _c("div", { staticClass: "noData" }, [
            _vm._v("系统中没有可建该类型机组的设备!")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isBtnShow,
              expression: "isBtnShow"
            }
          ],
          attrs: { id: "control_btn" }
        },
        [
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
        ]
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
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.userType === 0,
                  expression: "userType===0"
                }
              ],
              staticClass: "right-click-btn",
              on: {
                click: function($event) {
                  return _vm.deleteItem()
                }
              }
            },
            [_vm._v("删除选中节点")]
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
            [_vm._v("编辑选中节点")]
          )
        ]
      ),
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
              value: _vm.macTypes == 4 && _vm.selectNodeInfo.isShow,
              expression: "macTypes==4 && selectNodeInfo.isShow"
            }
          ],
          ref: "station",
          staticClass: "edit-station",
          attrs: { id: "editStation" },
          on: {
            click: function($event) {
              $event.stopPropagation()
            }
          }
        },
        [
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.macTname) + "-站点属性编辑")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "edit-content" }, [
            _c("div", { staticClass: "edit-block" }, [
              _c("span", { staticClass: "edit-label" }, [_vm._v("站点名称：")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.selectNodeInfo.station_name))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectNodeInfo.station_id != 1,
                    expression: "selectNodeInfo.station_id != 1"
                  }
                ],
                staticClass: "edit-block"
              },
              [
                _c("span", { staticClass: "edit-label" }, [
                  _vm._v("站点间距：")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectNodeInfo.station_interval,
                      expression: "selectNodeInfo.station_interval"
                    }
                  ],
                  staticClass: "edit-input",
                  domProps: { value: _vm.selectNodeInfo.station_interval },
                  on: {
                    change: function($event) {
                      return _vm.editStation()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.selectNodeInfo,
                        "station_interval",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("m")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "addDevice", on: { click: _vm.addDevice } },
              [_vm._v("+添加设备")]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "device-list" },
              _vm._l(_vm.selectNodeInfo.trackList, function(track, index) {
                return _c("li", { key: index, staticClass: "device" }, [
                  _c("div", { staticClass: "edit-block" }, [
                    _c("span", { staticClass: "edit-label" }, [
                      _vm._v("设备名称：")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: track.deviceName,
                          expression: "track.deviceName"
                        }
                      ],
                      staticClass: "edit-input",
                      attrs: { title: track.deviceName },
                      domProps: { value: track.deviceName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(track, "deviceName", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "edit-block" }, [
                    _c("span", { staticClass: "edit-label" }, [
                      _vm._v("设备ID：")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: track.deviceId,
                          expression: "track.deviceId"
                        }
                      ],
                      staticClass: "edit-input",
                      attrs: { title: track.deviceId },
                      domProps: { value: track.deviceId },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(track, "deviceId", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "addDevice delBtn",
                        on: {
                          click: function($event) {
                            return _vm.delDevice(track, index)
                          }
                        }
                      },
                      [_vm._v("删除设备")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "edit-block" }, [
                    _c("span", { staticClass: "edit-label" }, [
                      _vm._v("设备属性：")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: track.deviceAttr,
                            expression: "track.deviceAttr"
                          }
                        ],
                        staticClass: "edit-select",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              track,
                              "deviceAttr",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.trackAttr, function(value, key) {
                        return _c("option", { domProps: { value: key } }, [
                          _vm._v(_vm._s(value))
                        ])
                      }),
                      0
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/content/system/machine/MachineTree.vue":
/*!***************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTree.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true& */ "./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true&");
/* harmony import */ var _MachineTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MachineTree.vue?vue&type=script&lang=js& */ "./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MachineTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0936b2ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/system/machine/MachineTree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MachineTree.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTree.vue?vue&type=template&id=0936b2ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTree_vue_vue_type_template_id_0936b2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/content/system/machine/table/js/mac_methods.js":
/*!***********************************************************************!*\
  !*** ./src/components/content/system/machine/table/js/mac_methods.js ***!
  \***********************************************************************/
/*! exports provided: dgmType_name, optfreq_type, filterFolder, MacTypeBtn, PumpTypeBtn, reRenderSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dgmType_name", function() { return dgmType_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optfreq_type", function() { return optfreq_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFolder", function() { return filterFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacTypeBtn", function() { return MacTypeBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpTypeBtn", function() { return PumpTypeBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reRenderSelectOption", function() { return reRenderSelectOption; });
//采集器类型名称转化
function dgmType_name(type, t_root) {
  var dgmType_name = '';

  switch (parseInt(type)) {
    case 1:
      dgmType_name = "DGU2000V1";
      break;

    case 2:
      dgmType_name = "DGU2200";
      break;

    case 3:
      dgmType_name = "DGU2000V2";
      break;

    case 4:
      if (parseInt(t_root) === 1) {
        dgmType_name = "DGU2100E";
      } else {
        dgmType_name = "MHD";
      }

      break;

    case 5:
      dgmType_name = "DGU2600";
      break;

    case 6:
      dgmType_name = "E821";
      break;

    case 7:
      dgmType_name = "TMU2000";
      break;

    case 9:
      dgmType_name = "DGU2000E";
      break;

    case 10:
      dgmType_name = "WL9100";
      break;

    case 13:
      dgmType_name = "YHC5000";
      break;
  }

  return dgmType_name;
}
/**
 * *频段类型转换
 * **/

function optfreq_type(val) {
  var optfreqTypeVal = "";

  switch (val) {
    case "0":
      optfreqTypeVal = "能量有效值";
      break;

    case "1":
      optfreqTypeVal = "速度值";
      break;

    case "2":
      optfreqTypeVal = "加速度值";
      break;
  }

  return optfreqTypeVal;
}
/**
 * *组织过滤
 * **/

function filterFolder(folderData, type) {
  var folderDataObj = {};
  var t_root;

  for (var key in folderData) {
    t_root = Number(key.split('_')[1]);

    switch (Number(type)) {
      case 1:
        if (t_root === 0) {
          folderDataObj[key] = folderData[key];
        }

        break;

      case 5:
      case 3:
        if (t_root === 1) {
          folderDataObj[key] = folderData[key];
        }

        break;

      case 6:
      case 8:
        if (t_root === 2) {
          folderDataObj[key] = folderData[key];
        }

        break;

      case 7:
        if (t_root === 3) {
          folderDataObj[key] = folderData[key];
        }

        break;

      case 9:
      case 10:
        if (t_root === -1) {
          folderDataObj[key] = folderData[key];
        }

        break;
    }
  }

  return folderDataObj;
}
/**
 * *不同组织类型的机组级别类型
 * **/

var MacTypeBtn = [1, 5, 6, 7, 9];
/**
 * *不同组织类型的机泵级别类型
 * **/

var PumpTypeBtn = [3, 8, 10];
function reRenderSelectOption(hot, data) {
  //重新渲染selectOption,让每个option
  var cellMeta = hot.getCellMetaAtRow(0);
  var rows = data.length;
  cellMeta.forEach(function (item) {
    if (item.prop == "pump.t_name") {
      //组织
      for (var i = 0; i <= rows; i++) {
        hot.setCellMeta(i, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].pump.t_name_sources;
        });
      }
    }

    if (item.prop == "pump.mac_me") {
      //机组
      for (var _i = 0; _i < rows; _i++) {
        hot.setCellMeta(_i, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].pump.macName_sources;
        });
      }
    }

    if (item.prop == "pump.pump_type_val") {
      //子级类型
      for (var _i2 = 0; _i2 < rows; _i2++) {
        hot.setCellMeta(_i2, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].pump.pump_type_sources;
        });
      }
    }

    if (item.prop == "condition.pos_name1") {
      //工况参考测点1
      for (var _i3 = 0; _i3 < rows; _i3++) {
        hot.setCellMeta(_i3, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].condition.pos_sources1;
        });
      }
    }

    if (item.prop == "condition.pos_name2") {
      //工况参考测点2
      for (var _i4 = 0; _i4 < rows; _i4++) {
        hot.setCellMeta(_i4, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].condition.pos_sources2;
        });
      }
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=65-56fc5496.js.map