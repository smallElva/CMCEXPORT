(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

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

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony import */ var components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/MyContentTitle */ "./src/components/common/MyContentTitle.vue");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
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
  name: "DgmBind",
  props: [],
  data: function data() {
    return {
      title: '采集器绑定',
      folderList: [],
      //组织列表
      dgmList: [],
      //机组采集器列表
      origionDgmList: [],
      //原始的机组采集器列表
      ch_lists: [],
      //通道列表
      tms_ch_list: {},
      //tms的通道列表
      folderSelected: '',
      //选中的组织
      editStatus: false,
      //编辑弹窗状态
      checkStatus: false,
      //查看弹窗状态
      searchVal: "",
      //搜索框中的值
      searchDgmVal: "",
      //机组采集器列表搜索值
      unbindDgmList: [],
      //渲染的未绑定传感器
      origionUnbindDgmList: [],
      //原始的未绑定采集器
      activeClass: {
        index: [],
        flag: false
      },
      //已绑定采集器选中的tr绑定active
      unbindActiveClass: -1,
      //可绑定采集器选中的tr绑定active
      chooseMachineId: "",
      //选中的机组id
      chooseTreeRoot: '',
      //选中的机组所在系统：0风电，1水泥
      chooseDgmType: [],
      //选中机组下绑定的采集器类型
      checkList: [],
      changeChaList: {},
      //编辑通道
      pumpHeaderList: ["子级名称", "机组名称", "ID", "IP", "类型", "已绑子级通道", "绑定子级", "操作"],
      //子级采集器绑定的表头
      sycTypeObj: [//同步类型选择对象列表
      {
        type: 1,
        text: "机组设置",
        status: true,
        readOnly: false,
        child: []
      }, {
        type: 5,
        text: "线路设置",
        status: true,
        readOnly: false,
        child: []
      }, {
        type: 2,
        text: "测点设置",
        status: true,
        readOnly: false,
        child: []
      }, {
        type: 3,
        text: "报警设置",
        status: true,
        readOnly: false,
        child: []
      }, {
        type: 4,
        text: "采集器设置",
        status: true,
        readOnly: false,
        child: [{
          type: 1,
          text: "DGU2000V1",
          status: true
        }, {
          type: 2,
          text: "DGU2200",
          status: true
        }, {
          type: 3,
          text: "DGU2000V2",
          status: true
        }, {
          type: 4,
          text: "MHD",
          status: true
        }, {
          type: 5,
          text: "DGU2600",
          status: true
        }, {
          type: 6,
          text: "E821",
          status: true
        }, {
          type: 7,
          text: "TMU2000",
          status: true
        }, {
          type: 8,
          text: "WHD",
          status: true
        }, {
          type: 9,
          text: "DGU2000E",
          status: true
        }, {
          type: 10,
          text: "WL9100",
          status: true
        }, {
          type: 13,
          text: "YHC5000",
          status: true
        }]
      }],
      selectedType: [],
      //所选择的同步类型列表
      selectedSycMacList: [],
      //所选择的需要同步的机组列表
      allMacList: [],
      //所有可选的
      selectedObj: "" + '_' + "",
      //所选择的基准对象
      isAlertDgm: false,
      //创建采集器弹窗
      dgmTypeList: [{
        value: -1,
        text: "--请选择--"
      }, {
        value: 1,
        text: "DGU2000V1"
      }, {
        value: 2,
        text: "DGU2200"
      }, {
        value: 3,
        text: "DGU2000V2"
      }, {
        value: 4,
        text: "MHD"
      }, {
        value: 5,
        text: "DGU2600"
      }, {
        value: 6,
        text: "E821"
      }, {
        value: 7,
        text: "TMU2000"
      }, {
        value: 8,
        text: "WHD"
      }, {
        value: 9,
        text: "DGU2000E"
      }, {
        value: 10,
        text: "WL9100"
      }, {
        value: 13,
        text: "YHC5000"
      }],
      //采集器列表
      selectDgmTypeVal: '',
      //所选择的采集器类型
      addDgmId: "",
      //创建的采集器ID
      addDgmIp: "",
      //创建的采集器IP
      chooseDgmTypeList: [],
      //过滤之后的采集器类型列表
      isAlertSyncType: false,
      //同步类型选择弹窗
      seDgmTypeList: [],
      //所选择的需要同步的采集器列表
      chTypeList: [//通道类型下拉选项
      {
        value: 0,
        text: '全16通道'
      }, {
        value: 1,
        text: '全8通道'
      }, {
        value: 2,
        text: '后8通道'
      }, {
        value: 3,
        text: '9通道'
      }],
      selectChTypeVal: 0,
      //通道类型默认选中全16通道
      rangeTypeList: [//量程类型下拉选项
      {
        value: 0,
        text: '普通4量程'
      }, {
        value: 1,
        text: '高精度多量程'
      }],
      selectRangeTypeVal: 1,
      //量程类型默认选中高精度多量程
      optionTypeList: [//叶轮类型下拉选项  '0': '温度(WiFi模式)','1':'过程量(WiFi模式)','2':'温度(zigbee模式)','3':'过程量(zigbee模式)'
      {
        value: 0,
        text: '温度(WiFi模式)'
      }, {
        value: 1,
        text: '过程量(WiFi模式)'
      }, {
        value: 2,
        text: '温度(zigbee模式)'
      }, {
        value: 3,
        text: '过程量(zigbee模式)'
      }],
      selectOptionTypeVal: 1,
      //叶轮类型默认选中高精度多量程
      force_type: 1,
      //是否强制导出，1是，0否
      line_type: 1,
      //是否选择线路设置，1是，0否
      selectHwabTypeVal: 3,
      //DGU2000E选中的ab版本号：DB=1，AB=3即为之前的基础版，目前DB版本号都是1，只需要设置ab版本号
      abTypeList: [0, //8振动+2温度+1转速+1串口
      1, //10振动+1转速+1串口
      2, //8振动+2温度+1转速+1串口
      3, //8振动+2过程量+1转速+1串口
      4 //14振动+1转速+1串口
      ]
    };
  },
  components: {
    MyContentTitle: components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.getAllUnbindDgm();
    this.selectDgmTypeVal = this.dgmTypeList[0].value;
  },
  mounted: function mounted() {
    this.getFirstDgmData();
    this.getAllMachine();
  },
  computed: {
    resultDgmList: function resultDgmList() {
      return this.dgmList.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('machine_name'));
    },
    sortFolderList: function sortFolderList() {
      return this.folderList.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('folderName'));
    }
  },
  methods: {
    //选择同步类型子类勾选框点击事件
    checkType: function checkType(item, childItem) {
      var flag = 0;
      var trueFlag = 0;

      for (var i = 0; i < item.child.length; i++) {
        if (!item.child[i].status) {
          flag++;
        }

        if (item.child[i].status) {
          trueFlag++;
        }
      }

      if (flag == item.child.length) {
        item.status = false;
      }

      if (trueFlag > 0) {
        item.status = true;
      }
    },
    //选择同步类型父类勾选框点击事件
    checkItemType: function checkItemType(item, sycTypeObj) {
      if (item.type == 2) {
        for (var i = 0; i < sycTypeObj.length; i++) {
          if (item.status && sycTypeObj[i].type === 1) {
            sycTypeObj[i].status = true;
          } else if (item.status && sycTypeObj[i].type === 3 && parseInt(this.selectedObj.split('_')[1]) > 0) {
            sycTypeObj[i].status = true;
          } else if (!item.status && sycTypeObj[i].type === 3) {
            sycTypeObj[i].status = false;
          }
        }
      } else if (item.type == 3 && item.status) {
        for (var _i = 0; _i < sycTypeObj.length; _i++) {
          if (sycTypeObj[_i].type === 1 || sycTypeObj[_i].type === 2) {
            sycTypeObj[_i].status = true;
          }
        }
      } else if (item.type === 1 && !item.status) {
        for (var _i2 = 0; _i2 < sycTypeObj.length; _i2++) {
          if (sycTypeObj[_i2].type === 2 || sycTypeObj[_i2].type === 3 || sycTypeObj[_i2].type === 5) {
            sycTypeObj[_i2].status = false;
          }
        }
      } else if (item.type === 4 && item.status) {
        for (var _i3 = 0; _i3 < item.child.length; _i3++) {
          item.child[_i3].status = true;
        }
      } else if (item.type === 4 && !item.status) {
        for (var _i4 = 0; _i4 < item.child.length; _i4++) {
          item.child[_i4].status = false;
        }
      } else if (item.type === 5) {
        this.line_type = item.status ? 1 : 0;

        if (item.status) {
          for (var _i5 = 0; _i5 < sycTypeObj.length; _i5++) {
            if (sycTypeObj[_i5].type === 1) {
              sycTypeObj[_i5].status = true;
            }
          }
        }
      }
    },
    //限定采集器最多8位
    changeNum: function changeNum() {
      //限制长度
      if (this.addDgmId.length > 8) {
        this.addDgmId = this.addDgmId.slice(0, 8);
      }

      if (this.addDgmId.length == 8) {
        this.$refs.addDgmId.classList.remove("errInput");
      }
    },
    //创建采集器弹窗
    openAlertDgm: function openAlertDgm() {
      this.isAlertDgm = true;
    },
    //关闭弹窗
    closeAlertDgm: function closeAlertDgm() {
      this.isAlertDgm = false;
    },
    //关闭过滤采集器弹窗
    closeAlertDgmType: function closeAlertDgmType() {
      this.isAlertDgmType = false;
    },
    //创建采集器提交
    addDgmInfo: function addDgmInfo() {
      var that = this;
      var token = sessionStorage.getItem('token');
      var paramObj = null;

      if (that.addDgmId == '' || that.addDgmIp == '' || that.selectDgmTypeVal == -1) {
        swal({
          title: "提示",
          text: '请将信息填写完整',
          button: "确认"
        });
        return false;
      } else if (that.addDgmId == '00000000') {
        swal({
          title: "提示",
          text: '采集器ID不能为8个0',
          button: "确认"
        });
        that.$refs.addDgmId.classList.add("errInput");
        return false;
      } else if (that.addDgmId.length < 8) {
        swal({
          title: "提示",
          text: '采集器ID需为8位数字',
          button: "确认"
        });
        that.$refs.addDgmId.classList.add("errInput");
        return false;
      } else {
        that.$refs.addDgmId.classList.remove("errInput");
        paramObj = {
          dgm_id: that.addDgmId,
          dgm_ip: that.addDgmIp,
          dgm_type: that.selectDgmTypeVal,
          hw_ch_type: that.selectChTypeVal,
          hw_range_type: that.selectRangeTypeVal,
          hw_options: that.selectOptionTypeVal,
          hw_ab_ver: that.selectHwabTypeVal //AB版本号

        };
        this.$axios.post('createFakeDgm', paramObj).then(function (res) {
          that.addDgmId = "";
          that.addDgmIp = "";
          that.selectDgmTypeVal = -1;

          if (res.msg == 0) {
            that.getAllUnbindDgm();
            that.isAlertDgm = false;
          } else if (res.msg == 1) {
            console.log("参数为空");
            swal({
              title: "提示",
              text: '创建失败',
              button: "确认"
            });
            that.isAlertDgm = false;
          } else if (res.msg == 2) {
            console.log("后台运行错误");
            swal({
              title: "提示",
              text: '创建失败',
              button: "确认"
            });
            that.isAlertDgm = false;
          } else if (res.msg == 3) {
            swal({
              title: "提示",
              text: '该ID号的采集器已存在',
              button: "确认"
            });
            return false;
          }

          ;
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },
    //全选
    checkAll: function checkAll(item) {
      item.status = !item.status;

      if (item.status) {
        for (var i = 0; i < item.ch_type_list.length; i++) {
          item.ch_type_list[i].status = true;
        }
      } else {
        for (var _i6 = 0; _i6 < item.ch_type_list.length; _i6++) {
          item.ch_type_list[_i6].status = false;
        }
      }
    },
    //tms通道全选
    checkAllTms: function checkAllTms(item) {
      item.status = !item.status;

      if (item.status) {
        for (var i = 0; i < item.ch_type_list.length; i++) {
          item.ch_type_list[i].status = true;
        }
      } else {
        for (var _i7 = 0; _i7 < item.ch_type_list.length; _i7++) {
          item.ch_type_list[_i7].status = false;
        }
      }

      this.$forceUpdate();
    },
    //获取所有的机组列表
    getAllMachine: function getAllMachine() {
      var that = this;
      var token = sessionStorage.getItem('token');
      var paramObj = null;
      paramObj = {
        t_ids: this.$store.state.tids
      };
      this.$axios.post('queryMachine', paramObj).then(function (res) {
        if (res != undefined && res.length > 0) {
          that.allMacList = res.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('mac_me'));
          ;
          that.selectedObj = that.allMacList[0].mac_id + '_' + that.allMacList[0].m_type;

          if (parseInt(that.allMacList[0].m_type) > 0) {
            that.sycTypeObj[2].readOnly = true;
          }
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //选择同步类型
    getSycType: function getSycType() {
      this.seDgmTypeList.length = 0;
      this.selectedType.length = 0;
      this.isAlertSyncType = false;

      for (var j = 0; j < this.sycTypeObj.length; j++) {
        if (this.sycTypeObj[j].status && this.sycTypeObj[j].type != 5) {
          this.selectedType.push(this.sycTypeObj[j].type);
        }

        if (this.sycTypeObj[j].type == 5) {
          this.line_type = this.sycTypeObj[j].status ? 1 : 0;
        }
      }

      for (var i = 0; i < this.sycTypeObj[4].child.length; i++) {
        if (this.sycTypeObj[4].child[i].status) {
          this.seDgmTypeList.push(this.sycTypeObj[4].child[i].type);
        }
      }
    },
    //选择同步对象
    getSycObj: function getSycObj(selectedObj) {
      this.selectedObj = selectedObj;

      if (parseInt(this.selectedObj.split('_')[1]) > 0) {
        this.sycTypeObj[3].readOnly = true;
      }
    },
    //同步弹窗按钮
    isAlertSync: function isAlertSync() {
      this.isAlertSyncType = true;
    },
    //关闭同步类型弹窗
    closeAlertSyncType: function closeAlertSyncType() {
      this.isAlertSyncType = false;
    },
    //点击同步按钮，同步机组数据
    sycMachine: function sycMachine() {
      this.getSycType();
      this.force_type ? this.force_type = 1 : this.force_type = 0;
      var sycObj = {
        machine_id: this.selectedObj.split('_')[0],
        m_type: this.selectedObj.split('_')[1],
        type_list: this.selectedType,
        param_list: this.selectedSycMacList,
        dgm_type_list: this.seDgmTypeList,
        force_type: this.force_type,
        line_type: this.line_type
      };

      if (sycObj.param_list.length == 0) {
        swal({
          title: "提示",
          text: '请选择需要同步的机组',
          button: "确认"
        });
      } else if (sycObj.type_list.length == 0) {
        swal({
          title: "提示",
          text: '请选择同步类型',
          button: "确认"
        });
      } else {
        this.$axios.post('copyMachine', sycObj).then(function (res) {
          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '同步成功',
              button: "确认"
            });
          } else if (res.msg == 1) {
            console.log('参数为空！');
            swal({
              title: "提示",
              text: '同步失败',
              button: "确认"
            });
          } else if (res.msg == 2) {
            console.log('后台运行错误!');
            swal({
              title: "提示",
              text: '同步失败',
              button: "确认"
            });
          } else if (res.msg == 5) {
            swal({
              title: "提示",
              text: '有采集器类型不匹配,同步失败',
              button: "确认"
            });
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },
    // 设置列表高度
    setStyle: function setStyle(item) {
      var l = item.rowspan;
      var h = 42 * l;
      var style = {
        height: h + 'px',
        'line-height': h + 'px'
      };
      return style;
    },
    checkMe: function checkMe(ch_type, status, ch_id, item, same_pre, ch_lists) {
      status = !status;

      if (status) {
        var flag = 0;

        if (same_pre === '-1') {
          for (var i = 0; i < item.ch_type_list.length; i++) {
            if (item.ch_type_list[i].ch_id == ch_id) {
              item.ch_type_list[i].status = true;
              break;
            }
          }

          for (var _i8 = 0; _i8 < item.ch_type_list.length; _i8++) {
            if (item.ch_type_list[_i8].status) {
              flag++;
            }
          }

          if (flag == item.ch_type_list.length) {
            item.status = true;
          } else {
            item.status = false;
          }
        } else {
          ch_lists.forEach(function (chTypeItem) {
            chTypeItem.ch_type_list.forEach(function (chTypeList) {
              if (chTypeList.same_pre == same_pre) {
                chTypeList.status = true;
              }
            });
          });
          ch_lists.forEach(function (chTypeItem) {
            chTypeItem.flag = 0;
            chTypeItem.ch_type_list.forEach(function (chTypeList) {
              if (chTypeList.status) {
                chTypeItem.flag++;
              }
            });
          });
          ch_lists.forEach(function (chTypeItem) {
            if (chTypeItem.flag == chTypeItem.ch_type_list.length) {
              chTypeItem.status = true;
            } else {
              chTypeItem.status = false;
            }
          });
        }
      } else {
        item.status = false;

        if (same_pre !== '-1') {
          ch_lists.forEach(function (chTypeItem) {
            chTypeItem.ch_type_list.forEach(function (chTypeList) {
              if (chTypeList.same_pre == same_pre) {
                chTypeList.status = false;
                chTypeItem.status = false;
              }
            });
          });
        }
      }
    },
    editDgm: function editDgm(ch_list, mac_id, dgm_id, ch_class, dgm_type) {
      var _this = this;

      //编辑采集器
      this.editStatus = true;
      this.ch_lists = [];

      if (Number(dgm_type) === 7) {
        //tms采集器按前置处理器进行选择
        this.tms_ch_list = {};

        if (ch_list.length > 0) {
          ch_list.forEach(function (item) {
            if (_this.tms_ch_list[item.pre_id] === undefined) {
              _this.tms_ch_list[item.pre_id] = {};
              _this.tms_ch_list[item.pre_id].ch_type_list = [];
            }

            var obj = {};

            if (item.ch_class != 0) {
              _this.tms_ch_list[item.pre_id].status = true;
              obj = {
                ch_class: item.ch_class,
                ch_id: item.ch_id,
                ch_name: item.ch_name,
                ch_type: item.ch_type,
                same_pre: item.same_pre,
                status: true
              };
            } else {
              _this.tms_ch_list[item.pre_id].status = false;
              obj = {
                ch_class: item.ch_class,
                ch_id: item.ch_id,
                ch_name: item.ch_name,
                ch_type: item.ch_type,
                same_pre: item.same_pre,
                status: false
              };
            }

            _this.tms_ch_list[item.pre_id].ch_class = ch_class;
            _this.tms_ch_list[item.pre_id].ch_type = item.ch_type;
            _this.tms_ch_list[item.pre_id].dgm_id = dgm_id;
            _this.tms_ch_list[item.pre_id].mac_id = mac_id;
            _this.tms_ch_list[item.pre_id].ch_type_name = '前置' + item.pre_id;

            _this.tms_ch_list[item.pre_id].ch_type_list.push(obj);
          });
        }

        for (var key in this.tms_ch_list) {
          this.tms_ch_list[key].ch_type_list.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('ch_name'));
        }

        return this.tms_ch_list;
      } else {
        var obj0 = {},
            obj1 = {},
            obj2 = {},
            obj3 = {},
            obj4 = {},
            obj5 = {},
            obj6 = {},
            obj7 = {},
            obj8 = {},
            obj9 = {},
            obj10 = {},
            obj11 = {},
            obj12 = {};
        obj0.ch_type_list = [];
        obj1.ch_type_list = [];
        obj2.ch_type_list = [];
        obj3.ch_type_list = [];
        obj4.ch_type_list = [];
        obj5.ch_type_list = [];
        obj6.ch_type_list = [];
        obj7.ch_type_list = [];
        obj8.ch_type_list = [];
        obj9.ch_type_list = [];
        obj10.ch_type_list = [];
        obj11.ch_type_list = [];
        obj12.ch_type_list = [];

        if (ch_list.length > 0) {
          for (var i = 0; i < ch_list.length; i++) {
            if (ch_list[i].ch_type == 0) {
              obj0.ch_type_name = "振动";

              if (ch_list[i].ch_class != 0) {
                obj0.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj0.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj0.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj0);
            } else if (ch_list[i].ch_type == 1) {
              obj1.ch_type_name = "过程量";

              if (ch_list[i].ch_class != 0) {
                obj1.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj1.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj1.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj1);
            } else if (ch_list[i].ch_type == 2) {
              obj2.ch_type_name = "转速";

              if (ch_list[i].ch_class != 0) {
                obj2.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj2.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj2.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj2);
            } else if (ch_list[i].ch_type == 3) {
              obj3.ch_type_name = "数字量";

              if (ch_list[i].ch_class != 0) {
                obj3.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj3.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj3.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj3);
            } else if (ch_list[i].ch_type == 4) {
              obj4.ch_type_name = "温度";

              if (ch_list[i].ch_class != 0) {
                obj4.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj4.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj4.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj4);
            } else if (ch_list[i].ch_type == 5) {
              obj5.ch_type_name = "外部集成设置";

              if (ch_list[i].ch_class != 0) {
                obj5.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj5.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj5.ch_type = ch_list[i].ch_type;

              if (dgm_type == 4 || dgm_type == 1) {
                this.ch_lists.push(obj5); //mhd采集器、v1采集器需要显示外部集成通道
              } else {// this.ch_lists.push(obj5);//暂时屏蔽外部集成通道
                }
            } else if (ch_list[i].ch_type == 6) {
              obj6.ch_type_name = "倾覆";

              if (ch_list[i].ch_class != 0) {
                obj6.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj6.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj6.ch_type = ch_list[i].ch_type; // this.ch_lists.push(obj6);//暂时屏蔽倾覆通道
            } else if (ch_list[i].ch_type == 7) {
              obj7.ch_type_name = "工艺量";

              if (ch_list[i].ch_class != 0) {
                obj7.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj7.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj7.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj7);
            } else if (ch_list[i].ch_type == 8) {
              obj8.ch_type_name = "螺栓";

              if (ch_list[i].ch_class != 0) {
                obj8.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj8.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj8.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj8);
            } else if (ch_list[i].ch_type == 9) {
              obj9.ch_type_name = "法兰";

              if (ch_list[i].ch_class != 0) {
                obj9.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj9.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj9.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj9);
            } else if (ch_list[i].ch_type == 10) {
              obj10.ch_type_name = "预处理器";

              if (ch_list[i].ch_class != 0) {
                obj10.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj10.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj10.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj10);
            } else if (ch_list[i].ch_type == 11) {
              obj11.ch_type_name = "长采样";

              if (ch_list[i].ch_class != 0) {
                obj11.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj11.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj11.ch_type = ch_list[i].ch_type; // this.ch_lists.push(obj11);//暂时将长采样的通道屏蔽
            } else if (ch_list[i].ch_type == 12) {
              obj12.ch_type_name = "mhd";

              if (ch_list[i].ch_class != 0) {
                obj12.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: true
                });
              } else {
                obj12.ch_type_list.push({
                  ch_class: ch_list[i].ch_class,
                  ch_id: ch_list[i].ch_id,
                  ch_name: ch_list[i].ch_name,
                  ch_type: ch_list[i].ch_type,
                  same_pre: ch_list[i].same_pre,
                  status: false
                });
              }

              obj12.ch_type = ch_list[i].ch_type;
              this.ch_lists.push(obj12);
            }
          }

          this.ch_lists = this.unique(this.ch_lists);

          for (var j = 0; j < this.ch_lists.length; j++) {
            var flag = 0; // this.ch_lists[j].ch_type_list.sort((a,b)=>{ return a.ch_id-b.ch_id});//将通道id升序排列

            this.ch_lists[j].ch_type_list.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareName"])('ch_name')); //将通道名升序排列

            for (var m = 0; m < this.ch_lists[j].ch_type_list.length; m++) {
              if (this.ch_lists[j].ch_type_list[m].status) {
                flag++;
              }
            }

            if (flag == this.ch_lists[j].ch_type_list.length) {
              this.ch_lists[j].status = true;
              this.ch_lists[j].mac_id = mac_id;
              this.ch_lists[j].dgm_id = dgm_id;
              this.ch_lists[j].ch_class = ch_class;
            } else {
              this.ch_lists[j].status = false;
              this.ch_lists[j].mac_id = mac_id;
              this.ch_lists[j].dgm_id = dgm_id;
              this.ch_lists[j].ch_class = ch_class;
            }
          }
        }

        return this.ch_lists;
      }
    },
    closeEdit: function closeEdit() {
      //关闭采集器弹窗
      this.editStatus = false;
    },
    bindChannel: function bindChannel() {
      var _this2 = this;

      //绑定通道
      this.changeChaList.ch_list = [];

      if (this.chooseTreeRoot == 2) {
        for (var key in this.tms_ch_list) {
          var ch_type_list = this.tms_ch_list[key].ch_type_list;

          for (var j = 0; j < ch_type_list.length; j++) {
            if (ch_type_list[j].status && ch_type_list[j].ch_class == 0) {
              this.changeChaList.t_id = this.folderSelected.split('_')[0];
              this.changeChaList.t_root = this.folderSelected.split('_')[1];
              this.changeChaList.mac_id = this.tms_ch_list[key].mac_id;
              this.changeChaList.dgm_id = this.tms_ch_list[key].dgm_id;
              this.changeChaList.ch_class = this.tms_ch_list[key].ch_class;
              this.changeChaList.ch_list.push({
                "ch_id": ch_type_list[j].ch_id,
                "ch_type": ch_type_list[j].ch_type
              });
            } else if (!ch_type_list[j].status && ch_type_list[j].ch_class != 0) {
              this.changeChaList.t_id = this.folderSelected.split('_')[0];
              this.changeChaList.t_root = this.folderSelected.split('_')[1];
              this.changeChaList.mac_id = this.tms_ch_list[key].mac_id;
              this.changeChaList.dgm_id = this.tms_ch_list[key].dgm_id;
              this.changeChaList.ch_class = this.tms_ch_list[key].ch_class;
              this.changeChaList.ch_list.push({
                "ch_id": ch_type_list[j].ch_id,
                "ch_type": ch_type_list[j].ch_type,
                "channel_class": "0"
              });
            }
          }
        }

        ;
      } else {
        for (var i = 0; i < this.ch_lists.length; i++) {
          for (var _j = 0; _j < this.ch_lists[i].ch_type_list.length; _j++) {
            if (this.ch_lists[i].ch_type_list[_j].status && this.ch_lists[i].ch_type_list[_j].ch_class == 0) {
              this.changeChaList.t_id = this.folderSelected.split('_')[0];
              this.changeChaList.t_root = this.folderSelected.split('_')[1];
              this.changeChaList.mac_id = this.ch_lists[i].mac_id;
              this.changeChaList.dgm_id = this.ch_lists[i].dgm_id;
              this.changeChaList.ch_class = this.ch_lists[i].ch_class;
              this.changeChaList.ch_list.push({
                "ch_id": this.ch_lists[i].ch_type_list[_j].ch_id,
                "ch_type": this.ch_lists[i].ch_type_list[_j].ch_type
              });
            } else if (!this.ch_lists[i].ch_type_list[_j].status && this.ch_lists[i].ch_type_list[_j].ch_class != 0) {
              this.changeChaList.t_id = this.folderSelected.split('_')[0];
              this.changeChaList.t_root = this.folderSelected.split('_')[1];
              this.changeChaList.mac_id = this.ch_lists[i].mac_id;
              this.changeChaList.dgm_id = this.ch_lists[i].dgm_id;
              this.changeChaList.ch_class = this.ch_lists[i].ch_class;
              this.changeChaList.ch_list.push({
                "ch_id": this.ch_lists[i].ch_type_list[_j].ch_id,
                "ch_type": this.ch_lists[i].ch_type_list[_j].ch_type,
                "channel_class": "0"
              });
            }
          }
        }

        ;
      }

      var that = this;

      if (!$.isEmptyObject(that.changeChaList)) {
        this.$axios.post('editPumpToDgm', that.changeChaList).then(function (res) {
          that.editStatus = false;

          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '编辑成功',
              button: "确认"
            });
            that.dgmList = [];
            var dgmListOrigion = res.folderInfo.pump_list;
            var noBgmObj = {};

            if (dgmListOrigion != undefined && dgmListOrigion.length > 0) {
              for (var _i9 = 0; _i9 < dgmListOrigion.length; _i9++) {
                if (dgmListOrigion[_i9].dgmList.length > 0) {
                  for (var _j2 = 0; _j2 < dgmListOrigion[_i9].dgmList.length; _j2++) {
                    var obj = {};
                    dgmListOrigion[_i9].dgmList[_j2].dgm_type_name = _this2.typeTodgmName(dgmListOrigion[_i9].dgmList[_j2].dgm_type);
                  }

                  if ('pump_name' in dgmListOrigion[_i9]) {
                    obj.pump_name = dgmListOrigion[_i9].pump_name;
                    obj.pump_id = dgmListOrigion[_i9].pump_id;
                  }

                  obj.ch_class = dgmListOrigion[_i9].ch_class;
                  obj.machine_id = dgmListOrigion[_i9].machine_id;
                  obj.machine_name = dgmListOrigion[_i9].machine_name;
                  obj.dgmList = dgmListOrigion[_i9].dgmList;
                  obj.m_type = dgmListOrigion[_i9].m_type;
                  obj.rowspan = dgmListOrigion[_i9].dgmList.length;
                  that.dgmList.push(obj);
                } else {
                  var noBgmObj = {};

                  if ('pump_name' in dgmListOrigion[_i9]) {
                    noBgmObj.pump_name = dgmListOrigion[_i9].pump_name;
                    noBgmObj.pump_id = dgmListOrigion[_i9].pump_id;
                  }

                  noBgmObj.machine_id = dgmListOrigion[_i9].machine_id;
                  noBgmObj.machine_name = dgmListOrigion[_i9].machine_name;
                  noBgmObj.m_type = dgmListOrigion[_i9].m_type;
                  noBgmObj.rowspan = 1;
                  noBgmObj.dgmList = "";
                  that.dgmList.push(noBgmObj);
                }
              }
            }

            console.log(that.dgmList);
          } else if (res.msg == 1) {
            console.log('参数为空！');
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
          if (arr[i].ch_type == res[j].ch_type) {
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
    active: function active(index) {
      this.unbindActiveClass = index; // 把当前点击元素的index，赋值给activeClass
    },
    unbindDgm: function unbindDgm(dgmId, machineId) {
      var that = this;
      var token = sessionStorage.getItem('token');
      var dgmData = {
        dgm_id: dgmId,
        machine_id: machineId
      };
      this.$axios.post('unbindDgm', dgmData).then(function (res) {
        if (res.msg == 0) {
          swal({
            title: "提示",
            text: '解绑成功',
            button: "确认"
          });
          that.chooseMachineId = '';
          that.chooseTreeRoot = '';
          that.activeClass = {
            index: [],
            flag: false
          }; //已绑定采集器选中的tr绑定active

          that.getFolderSelected();
          that.getAllUnbindDgm();
        } else if (res.msg == 1) {
          console.log('参数为空！');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //绑定采集器
    bindDgm: function bindDgm(dgmId, dgmType, item) {
      var that = this;
      var token = sessionStorage.getItem('token');

      if (!that.chooseMachineId) {
        swal({
          title: "提示",
          text: '请先选择需要绑定的机组',
          button: "确认"
        });
      }
      /*else if (this.chooseDgmType.indexOf(dgmType) > -1) {
          swal({
              title: "提示",
              text: '该机组下已经绑定了该类型采集器',
              button: "确认",
          });
      } */
      else if (parseInt(this.chooseTreeRoot) === 1 && dgmType == 2) {
          swal({
            title: "提示",
            text: '水泥机组不能绑定该类型采集器',
            button: "确认"
          });
        } else {
          var dgmData = {
            dgm_id: dgmId,
            machine_id: that.chooseMachineId,
            updateTime: item.updateTime,
            //更新时间
            dgm_name: item.dgm_name,
            //采集站名称
            dgm_type: item.dgm_type,
            // 采集器型号 1:振动采集器V1 DGU2000V1 2.叶轮采集器 DGU2200 3.振动采集器V2 DGU2000V2 4.MHD采集器 MHD 5.螺栓采集器 DGU2600
            dgm_ip: item.dgm_ip,
            // 采集器ip
            dgm_activity: item.dgm_activity,
            //采集器有效性 0:以绑定 1:未绑定
            baseInfo: item.baseInfo
          };
          this.$axios.post('bindDgm', dgmData).then(function (res) {
            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '采集器绑定成功',
                button: "确认"
              });
              that.getFolderSelected();
              that.getAllUnbindDgm();
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '采集器绑定失败',
                button: "确认"
              });
            }
            /*else if (res.msg == 3) {
                swal({
                    title: "提示",
                    text: '该机组下已经绑定了该类型采集器',
                    button: "确认",
                });
            }*/

          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        }
    },
    //删除采集器
    deleteDgm: function deleteDgm(dgmId, dgmType, item) {
      var that = this;

      if (item.deleteType === 1) {
        swal({
          title: "提示",
          text: '未注册的采集器不可删除',
          button: "确认"
        });
      } else {
        var params = 'dgm_id=' + dgmId;
        params = JSON.stringify(params);
        this.$axios.post('deleteDgm', dgmId).then(function (res) {
          if (res.msg == 0) {
            swal({
              title: "提示",
              text: '采集器删除成功',
              button: "确认"
            });
            that.getAllUnbindDgm();
          } else if (res.msg == 1) {
            console.log('参数为空！');
            swal({
              title: "提示",
              text: '采集器删除失败',
              button: "确认"
            });
          } else if (res.msg == 2) {
            console.log('后台错误！');
            swal({
              title: "提示",
              text: '采集器删除失败',
              button: "确认"
            });
          } else if (res.msg == 3) {
            swal({
              title: "提示",
              text: '该采集器已绑定机组，不可删除',
              button: "确认"
            });
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },
    getFirstDgmData: function getFirstDgmData() {
      var _this3 = this;

      var that = this;
      var token = sessionStorage.getItem('token');
      var paramObj = null;
      paramObj = {
        t_ids: that.$store.state.tids
      };
      this.$axios.post('queryAllDgmInfo', paramObj).then(function (res) {
        if (res.msg == 0) {
          if (res.folderInfo.folderList) {
            that.folderList = res.folderInfo.folderList;
            that.folderSelected = that.folderList[0].folderId + "_" + that.folderList[0].t_root;
          }

          if (that.folderSelected.split('_')[1] == 0 || that.folderSelected.split('_')[1] == null) {
            var dgmListOrigion = res.folderInfo.dgmList;

            if (dgmListOrigion != undefined && dgmListOrigion.length > 0) {
              for (var i = 0; i < dgmListOrigion.length; i++) {
                if (dgmListOrigion[i]["dgm"]) {
                  dgmListOrigion[i].dgm.dgm_type_name = _this3.typeTodgmName(dgmListOrigion[i].dgm.dgm_type);
                } else {
                  dgmListOrigion[i].dgm = "";
                }
              }

              that.dgmList = dgmListOrigion;
            }
          } else if (that.folderSelected.split('_')[1] == 1 || that.folderSelected.split('_')[1] == 2 || that.folderSelected.split('_')[1] == -1) {
            var _dgmListOrigion = res.folderInfo.pump_list;

            if (_dgmListOrigion != undefined && _dgmListOrigion.length > 0) {
              for (var _i10 = 0; _i10 < _dgmListOrigion.length; _i10++) {
                if (_dgmListOrigion[_i10].dgmList.length > 0) {
                  for (var j = 0; j < _dgmListOrigion[_i10].dgmList.length; j++) {
                    var obj = {};
                    _dgmListOrigion[_i10].dgmList[j].dgm_type_name = _this3.typeTodgmName(_dgmListOrigion[_i10].dgmList[j].dgm_type);
                  }

                  if ('pump_name' in _dgmListOrigion[_i10]) {
                    obj.pump_name = _dgmListOrigion[_i10].pump_name;
                    obj.pump_id = _dgmListOrigion[_i10].pump_id;
                  }

                  obj.ch_class = _dgmListOrigion[_i10].ch_class;
                  obj.machine_id = _dgmListOrigion[_i10].machine_id;
                  obj.machine_name = _dgmListOrigion[_i10].machine_name;
                  obj.dgmList = _dgmListOrigion[_i10].dgmList;
                  obj.m_type = _dgmListOrigion[_i10].m_type;
                  obj.rowspan = _dgmListOrigion[_i10].dgmList.length;
                  that.dgmList.push(obj);
                } else {
                  var noBgmObj = {};

                  if ('pump_name' in _dgmListOrigion[_i10]) {
                    noBgmObj.pump_name = _dgmListOrigion[_i10].pump_name;
                    noBgmObj.pump_id = _dgmListOrigion[_i10].pump_id;
                  }

                  noBgmObj.machine_id = _dgmListOrigion[_i10].machine_id;
                  noBgmObj.machine_name = _dgmListOrigion[_i10].machine_name;
                  noBgmObj.m_type = _dgmListOrigion[_i10].m_type;
                  noBgmObj.rowspan = 1;
                  noBgmObj.dgmList = "";
                  that.dgmList.push(noBgmObj);
                }
              }
            }
          }

          that.originDgmList = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneObj"])(that.dgmList, true);
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //采集器类型与采集器名称的对应关系
    typeTodgmName: function typeTodgmName(dgm_type) {
      var dgm_type_name = '';

      switch (parseInt(dgm_type)) {
        case 1:
          dgm_type_name = "DGU2000V1";
          break;

        case 2:
          dgm_type_name = "DGU2200";
          break;

        case 3:
          dgm_type_name = "DGU2000V2";
          break;

        case 4:
          dgm_type_name = "MHD";
          break;

        case 5:
          dgm_type_name = "DGU2600";
          break;

        case 6:
          dgm_type_name = "E821";
          break;

        case 7:
          dgm_type_name = "TMU2000";
          break;

        case 8:
          dgm_type_name = "WHD";
          break;

        case 9:
          dgm_type_name = "DGU2000E";
          break;

        case 10:
          dgm_type_name = "WL9100";
          break;

        case 13:
          dgm_type_name = "YHC5000";
          break;

        default:
          dgm_type_name = "DGU2000V1";
          break;
      }

      return dgm_type_name;
    },
    getFolderSelected: function getFolderSelected() {
      var _this4 = this;

      //获取选中的优惠券
      var folderSelectedObj = {
        "t_id": this.folderSelected.split('_')[0],
        "t_root": this.folderSelected.split('_')[1]
      };
      var that = this;
      that.dgmList = [];
      var token = sessionStorage.getItem('token');
      this.$axios.post('queryDgmInfo', folderSelectedObj).then(function (res) {
        if (res.msg == 0) {
          var dgmListOrigion;

          if ("dgmList" in res.folderInfo) {
            dgmListOrigion = res.folderInfo.dgmList;

            if (dgmListOrigion.length > 0) {
              for (var i = 0; i < dgmListOrigion.length; i++) {
                if (dgmListOrigion[i]["dgm"]) {
                  dgmListOrigion[i].dgm.dgm_type_name = _this4.typeTodgmName(dgmListOrigion[i].dgm.dgm_type);
                } else {
                  dgmListOrigion[i].dgm = "";
                }
              }
            }

            that.dgmList = dgmListOrigion;
          } else if ("pump_list" in res.folderInfo) {
            dgmListOrigion = res.folderInfo.pump_list;

            for (var _i11 = 0; _i11 < dgmListOrigion.length; _i11++) {
              if (dgmListOrigion[_i11].dgmList.length > 0) {
                for (var j = 0; j < dgmListOrigion[_i11].dgmList.length; j++) {
                  var obj = {};
                  dgmListOrigion[_i11].dgmList[j].dgm_type_name = _this4.typeTodgmName(dgmListOrigion[_i11].dgmList[j].dgm_type);
                }

                if ("pump_name" in dgmListOrigion[_i11]) {
                  obj.pump_name = dgmListOrigion[_i11].pump_name;
                  obj.pump_id = dgmListOrigion[_i11].pump_id;
                }

                obj.ch_class = dgmListOrigion[_i11].ch_class;
                obj.machine_id = dgmListOrigion[_i11].machine_id;
                obj.machine_name = dgmListOrigion[_i11].machine_name;
                obj.dgmList = dgmListOrigion[_i11].dgmList;
                obj.m_type = dgmListOrigion[_i11].m_type;
                obj.rowspan = dgmListOrigion[_i11].dgmList.length;
                that.dgmList.push(obj);
              } else {
                var noBgmObj = {};

                if ("pump_name" in dgmListOrigion[_i11]) {
                  noBgmObj.pump_name = dgmListOrigion[_i11].pump_name;
                  noBgmObj.pump_id = dgmListOrigion[_i11].pump_id;
                }

                noBgmObj.machine_id = dgmListOrigion[_i11].machine_id;
                noBgmObj.machine_name = dgmListOrigion[_i11].machine_name;
                noBgmObj.m_type = dgmListOrigion[_i11].m_type;
                noBgmObj.rowspan = 1;
                noBgmObj.dgmList = "";
                that.dgmList.push(noBgmObj);
              }
            }
          }

          that.originDgmList = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneObj"])(that.dgmList, true);
        } else if (res.msg == 1) {
          console.log('参数为空！');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    checkChannel: function checkChannel() {
      this.checkStatus = true;
    },
    //刷新未绑定采集器列表
    refreshDgm: function refreshDgm() {
      this.getAllUnbindDgm();
    },
    getAllUnbindDgm: function getAllUnbindDgm() {
      var _this5 = this;

      var that = this;
      that.origionUnbindDgmList = [];
      that.unbindDgmList = [];
      var token = sessionStorage.getItem('token');
      this.$axios.post('queryAllUnbindDgmInfo').then(function (res) {
        var dgmListOrigion = res;

        if (dgmListOrigion != undefined && dgmListOrigion.length > 0) {
          for (var i = 0; i < dgmListOrigion.length; i++) {
            dgmListOrigion[i].dgm_type_name = _this5.typeTodgmName(dgmListOrigion[i].dgm_type);
          }

          that.origionUnbindDgmList = dgmListOrigion.concat();
          that.unbindDgmList = that.origionUnbindDgmList.concat();
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    // 搜索未绑定采集器
    searchUnbindDgm: function searchUnbindDgm() {
      var that = this;

      if (that.searchVal.length > 0) {
        var reg = RegExp(this.searchVal);
        that.unbindDgmList = []; // 过滤需要的数据

        if (that.origionUnbindDgmList.length > 0) {
          for (var i = 0; i < that.origionUnbindDgmList.length; i++) {
            if (reg.test(that.origionUnbindDgmList[i].dgm_id) || reg.test(that.origionUnbindDgmList[i].dgm_ip) || reg.test(that.origionUnbindDgmList[i].dgm_type_name)) {
              that.unbindDgmList.push(that.origionUnbindDgmList[i]);
            }
          }
        }
      } else {
        that.unbindDgmList = that.origionUnbindDgmList.concat();
      }
    },
    // 搜索机组采集器列表
    searchDgm: function searchDgm() {
      var that = this;

      if (that.searchDgmVal.length > 0) {
        var reg = RegExp(this.searchDgmVal);
        that.dgmList = []; // 过滤需要的数据

        if (that.originDgmList.length > 0) {
          for (var i = 0; i < that.originDgmList.length; i++) {
            if (reg.test(that.originDgmList[i].pump_name) || reg.test(that.originDgmList[i].machine_name) || reg.test(that.originDgmList[i].dgm.dgm_id) || reg.test(that.originDgmList[i].dgm.dgm_ip) || reg.test(that.originDgmList[i].dgm.dgm_type_name)) {
              that.dgmList.push(that.originDgmList[i]);
            }
          }
        }
      } else {
        that.dgmList = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneObj"])(that.originDgmList, true);
      }
    },
    chooseMachine: function chooseMachine(t_root, machine_id, index, m_type) {
      this.chooseMachineId = machine_id;
      this.chooseTreeRoot = t_root;

      if (window.event.ctrlKey) {
        var idx = this.activeClass.index.indexOf(index);

        if (idx === -1) {
          this.activeClass.index.push(index);
          this.selectedSycMacList.push({
            "machine_id": machine_id,
            "m_type": m_type
          });
        } else {
          this.activeClass.index.splice(idx, 1);
          this.selectedSycMacList.splice(idx, 1);
        }

        this.activeClass.flag = true;
      } else {
        this.activeClass = {
          index: [index],
          flag: false
        };
        this.selectedSycMacList = [{
          "machine_id": machine_id,
          "m_type": m_type
        }];
      }

      this.chooseDgmType = [];

      if (t_root == 1 || t_root == 2 || t_root == -1) {
        for (var i = 0; i < this.dgmList.length; i++) {
          for (var j = 0; j < this.dgmList[i].dgmList.length; j++) {
            if (this.dgmList[i].machine_id == this.chooseMachineId) {
              this.chooseDgmType.push(this.dgmList[i].dgmList[j].dgm_type);
            }
          }
        }
      } else {
        for (var _i12 = 0; _i12 < this.dgmList.length; _i12++) {
          if (this.dgmList[_i12].machine_id == this.chooseMachineId) {
            this.chooseDgmType.push(this.dgmList[_i12].dgm.dgm_type);
          }
        }
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dgmBind-content" },
    [
      _c("my-content-title", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "myTree",
          attrs: { id: "myTree" },
          on: {
            click: function($event) {
              $event.stopPropagation()
            }
          }
        },
        [
          _c("div", { staticClass: "dgm-content clearfloat" }, [
            _c("div", { staticClass: "dgm-left" }, [
              _c("div", { staticClass: "dgm-header" }, [
                _c("div", { staticClass: "dgm-folder clearfloat" }, [
                  _c("span", { staticClass: "folder-span" }, [
                    _vm._v("组织名称")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.folderSelected,
                          expression: "folderSelected"
                        }
                      ],
                      staticClass: "folder-choice",
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.folderSelected = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          _vm.getFolderSelected
                        ]
                      }
                    },
                    _vm._l(_vm.sortFolderList, function(folder) {
                      return _c(
                        "option",
                        {
                          domProps: {
                            value: folder.folderId + "_" + folder.t_root
                          }
                        },
                        [_vm._v(_vm._s(folder.folderName))]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dgm-search" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchDgmVal,
                          expression: "searchDgmVal"
                        }
                      ],
                      staticClass: "dgm-input",
                      attrs: { type: "text", placeholder: "关键字" },
                      domProps: { value: _vm.searchDgmVal },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.searchDgm()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.searchDgmVal = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "search-icon",
                        on: {
                          click: function($event) {
                            return _vm.searchDgm()
                          }
                        }
                      },
                      [_c("i", { staticClass: "iconfont icon-zhongzi-sousuo" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "dgm-span" }, [
                    _vm._v("已绑定采集器")
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.folderSelected.split("_")[1] == 0 ||
              _vm.folderSelected.split("_")[1] == null ||
              _vm.folderSelected.split("_")[1] == 3
                ? _c("table", { staticClass: "dgm-table" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.resultDgmList, function(dgm, index) {
                        return _c(
                          "tr",
                          {
                            key: index,
                            class:
                              _vm.activeClass.index.includes(index) ||
                              (_vm.activeClass.flag &&
                                _vm.activeClass.index.includes(index))
                                ? "active"
                                : "",
                            on: {
                              click: function($event) {
                                _vm.chooseMachine(
                                  _vm.folderSelected.split("_")[1],
                                  dgm.machine_id,
                                  index,
                                  dgm.m_type
                                )
                              }
                            }
                          },
                          [
                            _c("td", [_vm._v(_vm._s(dgm.machine_name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(dgm.dgm != "" ? dgm.dgm.dgm_id : "")
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(dgm.dgm != "" ? dgm.dgm.dgm_ip : "")
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  dgm.dgm != "" ? dgm.dgm.dgm_type_name : ""
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  class: [
                                    "move-btn",
                                    { disable_btn: dgm.dgm == "" }
                                  ],
                                  attrs: { disabled: dgm.dgm == "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.unbindDgm(
                                        dgm.dgm.dgm_id,
                                        dgm.machine_id
                                      )
                                    }
                                  }
                                },
                                [_vm._v("解绑")]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.folderSelected.split("_")[1] != 0 &&
              _vm.folderSelected.split("_")[1] != 3
                ? _c("div", { staticClass: "bindingServer" }, [
                    _c(
                      "ul",
                      { staticClass: "tableTitle" },
                      _vm._l(_vm.pumpHeaderList, function(title) {
                        return _c("li", [_vm._v(_vm._s(title))])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "tableBody" },
                      _vm._l(_vm.resultDgmList, function(dgm, index) {
                        return _c(
                          "li",
                          {
                            key: dgm.pump_id,
                            ref: "tableRow",
                            refInFor: true,
                            staticClass: "tableRow",
                            class:
                              _vm.activeClass.index.includes(index) ||
                              (_vm.activeClass.flag &&
                                _vm.activeClass.index.includes(index))
                                ? "active"
                                : "",
                            on: {
                              click: function($event) {
                                _vm.chooseMachine(
                                  _vm.folderSelected.split("_")[1],
                                  dgm.machine_id,
                                  index,
                                  dgm.m_type
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "machineName",
                                style: _vm.setStyle(dgm),
                                attrs: { title: dgm.pump_name }
                              },
                              [_vm._v(_vm._s(dgm.pump_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "machineName",
                                style: _vm.setStyle(dgm),
                                attrs: { title: dgm.machine_name }
                              },
                              [_vm._v(_vm._s(dgm.machine_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "machineBindServer" },
                              [
                                dgm.dgmList == ""
                                  ? _c("ul", { staticClass: "bindServer" }, [
                                      _c("li"),
                                      _c("li"),
                                      _c("li"),
                                      _c("li")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(dgm.dgmList, function(item) {
                                  return _c(
                                    "ul",
                                    {
                                      key: item.dgm_id,
                                      staticClass: "bindServer"
                                    },
                                    [
                                      _c(
                                        "li",
                                        { attrs: { title: item.dgm_id } },
                                        [_vm._v(_vm._s(item.dgm_id))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { attrs: { title: item.dgm_ip } },
                                        [_vm._v(_vm._s(item.dgm_ip))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          attrs: { title: item.dgm_type_name }
                                        },
                                        [_vm._v(_vm._s(item.dgm_type_name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { attrs: { title: item.ch_used } },
                                        [_vm._v(_vm._s(item.ch_used))]
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "fixWidth" }, [
                              _c(
                                "ul",
                                [
                                  dgm.dgmList == ""
                                    ? _c("li", { staticClass: "untying" }, [
                                        _c(
                                          "button",
                                          {
                                            class: [
                                              "move-btn",
                                              { disable_btn: dgm.dgmList == "" }
                                            ],
                                            attrs: {
                                              disabled: dgm.dgmList == ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editDgm(
                                                  _vm.item.ch_list,
                                                  dgm.machine_id,
                                                  _vm.item.dgm_id,
                                                  dgm.ch_class,
                                                  _vm.item.dgm_type
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("选择")]
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(dgm.dgmList, function(item) {
                                    return _c(
                                      "li",
                                      { staticClass: "untying" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            class: [
                                              "move-btn",
                                              {
                                                disable_btn:
                                                  item == "" ||
                                                  item.ch_list.length == 0
                                              }
                                            ],
                                            attrs: {
                                              disabled:
                                                item == "" ||
                                                item.ch_list.length == 0
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editDgm(
                                                  item.ch_list,
                                                  dgm.machine_id,
                                                  item.dgm_id,
                                                  dgm.ch_class,
                                                  item.dgm_type
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("选择")]
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "fixWidth" }, [
                              _c(
                                "ul",
                                [
                                  dgm.dgmList == ""
                                    ? _c(
                                        "li",
                                        { staticClass: "untying untyingLast" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              class: [
                                                "move-btn",
                                                {
                                                  disable_btn: dgm.dgmList == ""
                                                }
                                              ],
                                              attrs: {
                                                disabled: dgm.dgmList == ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.unbindDgm(
                                                    _vm.item.dgm_id,
                                                    dgm.machine_id
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("解绑")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(dgm.dgmList, function(item) {
                                    return _c(
                                      "li",
                                      { staticClass: "untying untyingLast" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            class: [
                                              "move-btn",
                                              { disable_btn: item == "" }
                                            ],
                                            attrs: { disabled: item == "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.unbindDgm(
                                                  item.dgm_id,
                                                  dgm.machine_id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("解绑")]
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "synchronize" }, [
                _c("div", { staticClass: "syncDiv" }, [
                  _c("span", { staticClass: "syncLable" }, [
                    _vm._v("基准对象")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedObj,
                          expression: "selectedObj"
                        }
                      ],
                      staticClass: "typeSelect",
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedObj = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.getSycObj(_vm.selectedObj)
                          }
                        ]
                      }
                    },
                    _vm._l(_vm.allMacList, function(mac) {
                      return _c(
                        "option",
                        { domProps: { value: mac.mac_id + "_" + mac.m_type } },
                        [_vm._v(_vm._s(mac.mac_me))]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "edit-btn", on: { click: _vm.sycMachine } },
                  [_vm._v("同步")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editStatus,
                      expression: "editStatus"
                    }
                  ],
                  staticClass: "edit-block",
                  attrs: { id: "edit-block" }
                },
                [
                  _c("div", { staticClass: "edit-header" }, [
                    _c("span", { staticClass: "edit-name" }, [
                      _vm._v("绑定子级")
                    ]),
                    _vm._v(" "),
                    _c("i", {
                      staticClass: "iconfont icon-zhongzi-guanbi close-icon",
                      on: {
                        click: function($event) {
                          return _vm.closeEdit()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "edit-list" }, [
                    _c(
                      "ul",
                      [
                        _vm._l(_vm.ch_lists, function(item) {
                          return _c(
                            "li",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    Number(_vm.chooseTreeRoot) === 1 ||
                                    Number(_vm.chooseTreeRoot) === -1,
                                  expression:
                                    "Number(chooseTreeRoot)===1 || Number(chooseTreeRoot)===-1"
                                }
                              ],
                              staticClass: "channel-item"
                            },
                            [
                              _c("div", { staticClass: "channel-div" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.status,
                                      expression: "item.status"
                                    }
                                  ],
                                  attrs: {
                                    id: item.ch_type + "_" + item.ch_type_name,
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    value: item.ch_type,
                                    checked: Array.isArray(item.status)
                                      ? _vm._i(item.status, item.ch_type) > -1
                                      : item.status
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.checkAll(item)
                                    },
                                    change: function($event) {
                                      var $$a = item.status,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = item.ch_type,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              item,
                                              "status",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              item,
                                              "status",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(item, "status", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        item.ch_type + "_" + item.ch_type_name
                                    }
                                  },
                                  [_vm._v(_vm._s(item.ch_type_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                _vm._l(item.ch_type_list, function(chItem) {
                                  return _c("li", [
                                    _c("div", { staticClass: "channel-div2" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: chItem.status,
                                            expression: "chItem.status"
                                          }
                                        ],
                                        attrs: {
                                          id:
                                            chItem.ch_id + "_" + chItem.ch_name,
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          value: chItem.ch_type,
                                          checked: Array.isArray(chItem.status)
                                            ? _vm._i(
                                                chItem.status,
                                                chItem.ch_type
                                              ) > -1
                                            : chItem.status
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.checkMe(
                                              chItem.ch_type,
                                              chItem.status,
                                              chItem.ch_id,
                                              item,
                                              chItem.same_pre,
                                              _vm.ch_lists
                                            )
                                          },
                                          change: function($event) {
                                            var $$a = chItem.status,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = chItem.ch_type,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    chItem,
                                                    "status",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    chItem,
                                                    "status",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(chItem, "status", $$c)
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for:
                                              chItem.ch_id +
                                              "_" +
                                              chItem.ch_name
                                          }
                                        },
                                        [_vm._v(_vm._s(chItem.ch_name))]
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.tms_ch_list, function(value, key, index) {
                          return _c(
                            "li",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: Number(_vm.chooseTreeRoot) === 2,
                                  expression: "Number(chooseTreeRoot)===2"
                                }
                              ],
                              staticClass: "channel-item"
                            },
                            [
                              _c("div", { staticClass: "channel-div" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: value.status,
                                      expression: "value.status"
                                    }
                                  ],
                                  attrs: {
                                    id: value.ch_type_name,
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    checked: Array.isArray(value.status)
                                      ? _vm._i(value.status, null) > -1
                                      : value.status
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.checkAllTms(value)
                                    },
                                    change: function($event) {
                                      var $$a = value.status,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              value,
                                              "status",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              value,
                                              "status",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(value, "status", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: value.ch_type_name } },
                                  [_vm._v(_vm._s(value.ch_type_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                _vm._l(value.ch_type_list, function(chItem) {
                                  return _c("li", [
                                    _c("div", { staticClass: "channel-div2" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: chItem.status,
                                            expression: "chItem.status"
                                          }
                                        ],
                                        attrs: {
                                          id:
                                            chItem.ch_id + "_" + chItem.ch_name,
                                          type: "checkbox",
                                          disabled: "disabled"
                                        },
                                        domProps: {
                                          checked: Array.isArray(chItem.status)
                                            ? _vm._i(chItem.status, null) > -1
                                            : chItem.status
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = chItem.status,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    chItem,
                                                    "status",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    chItem,
                                                    "status",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(chItem, "status", $$c)
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for:
                                              chItem.ch_id +
                                              "_" +
                                              chItem.ch_name
                                          }
                                        },
                                        [_vm._v(_vm._s(chItem.ch_name))]
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "edit-controls" }, [
                    _c(
                      "button",
                      {
                        staticClass: "fail-btn",
                        on: {
                          click: function($event) {
                            return _vm.closeEdit()
                          }
                        }
                      },
                      [_vm._v("取消")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "ok-btn",
                        on: {
                          click: function($event) {
                            return _vm.bindChannel()
                          }
                        }
                      },
                      [_vm._v("确定")]
                    )
                  ])
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
                      value: _vm.isAlertSyncType,
                      expression: "isAlertSyncType"
                    }
                  ],
                  attrs: { id: "alertBox3" }
                },
                [
                  _c("div", { staticClass: "alertUser" }, [
                    _c("div", { staticClass: "alertUserTitle" }, [
                      _vm._v(
                        "\n                            同步类型选择\n                            "
                      ),
                      _c("i", {
                        staticClass:
                          "iconfont icon-zhongzi-guanbi closeAlertUser",
                        on: { click: _vm.closeAlertSyncType }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "alertCont" },
                      _vm._l(_vm.sycTypeObj, function(item) {
                        return _c(
                          "div",
                          { staticClass: "group" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.status,
                                  expression: "item.status"
                                }
                              ],
                              attrs: {
                                id: item.type,
                                type: "checkbox",
                                disabled: item.readOnly
                              },
                              domProps: {
                                value: item.value,
                                checked: Array.isArray(item.status)
                                  ? _vm._i(item.status, item.value) > -1
                                  : item.status
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = item.status,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = item.value,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            item,
                                            "status",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            item,
                                            "status",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(item, "status", $$c)
                                    }
                                  },
                                  function($event) {
                                    $event.stopPropagation()
                                    return _vm.checkItemType(
                                      item,
                                      _vm.sycTypeObj
                                    )
                                  }
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: item.type } }, [
                              _vm._v(_vm._s(item.text))
                            ]),
                            _vm._v(" "),
                            _vm._l(item.child, function(childItem) {
                              return _c("div", { staticClass: "group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: childItem.status,
                                      expression: "childItem.status"
                                    }
                                  ],
                                  attrs: {
                                    id: childItem.type + "_" + item.type,
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    value: childItem.value,
                                    checked: Array.isArray(childItem.status)
                                      ? _vm._i(
                                          childItem.status,
                                          childItem.value
                                        ) > -1
                                      : childItem.status
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$a = childItem.status,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = childItem.value,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                childItem,
                                                "status",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                childItem,
                                                "status",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(childItem, "status", $$c)
                                        }
                                      },
                                      function($event) {
                                        $event.stopPropagation()
                                        return _vm.checkType(item, childItem)
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: childItem.type + "_" + item.type
                                    }
                                  },
                                  [_vm._v(_vm._s(childItem.text))]
                                )
                              ])
                            })
                          ],
                          2
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "alertFoot" }, [
                      _c(
                        "button",
                        {
                          staticClass: "sure-btn",
                          on: { click: _vm.getSycType }
                        },
                        [_vm._v("确定")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "quit-btn",
                          on: { click: _vm.closeAlertSyncType }
                        },
                        [_vm._v("取消")]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dgm-right" }, [
              _c("div", { staticClass: "dgm-header" }, [
                _c("div", { staticClass: "dgm-folder clearfloat" }, [
                  _c(
                    "button",
                    {
                      staticClass: "addDgm-btn",
                      on: { click: _vm.openAlertDgm }
                    },
                    [_vm._v("创建采集器")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "addDgm-btn",
                      on: { click: _vm.refreshDgm }
                    },
                    [_vm._v("刷新")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dgm-search" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchVal,
                          expression: "searchVal"
                        }
                      ],
                      staticClass: "dgm-input",
                      attrs: { type: "text", placeholder: "关键字" },
                      domProps: { value: _vm.searchVal },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.searchUnbindDgm()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.searchVal = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "search-icon",
                        on: {
                          click: function($event) {
                            return _vm.searchUnbindDgm()
                          }
                        }
                      },
                      [_c("i", { staticClass: "iconfont icon-zhongzi-sousuo" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "dgm-span" }, [
                    _vm._v("可绑定采集器")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "dgm-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.unbindDgmList, function(item, index) {
                    return _c(
                      "tr",
                      {
                        key: index,
                        class: _vm.unbindActiveClass == index ? "active" : "",
                        on: {
                          click: function($event) {
                            return _vm.active(index)
                          }
                        }
                      },
                      [
                        _c("td", [_vm._v(_vm._s(item.dgm_id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.dgm_ip))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.dgm_type_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "move-btn",
                              on: {
                                click: function($event) {
                                  return _vm.bindDgm(
                                    item.dgm_id,
                                    item.dgm_type,
                                    item
                                  )
                                }
                              }
                            },
                            [_vm._v("绑定")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "move-btn deleteBtn",
                              on: {
                                click: function($event) {
                                  return _vm.deleteDgm(
                                    item.dgm_id,
                                    item.dgm_type,
                                    item
                                  )
                                }
                              }
                            },
                            [_vm._v("删除")]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isAlertDgm,
                      expression: "isAlertDgm"
                    }
                  ],
                  attrs: { id: "alertBox" }
                },
                [
                  _c("div", { staticClass: "alertUser" }, [
                    _c("div", { staticClass: "alertUserTitle" }, [
                      _vm._v(
                        "\n                            创建采集器\n                            "
                      ),
                      _c("i", {
                        staticClass:
                          "iconfont icon-zhongzi-guanbi closeAlertUser",
                        on: { click: _vm.closeAlertDgm }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "alertCont" }, [
                      _c("div", { staticClass: "inputGroup" }, [
                        _c("span", { staticClass: "dgmLable" }, [
                          _vm._v("ID:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.addDgmId,
                              expression: "addDgmId"
                            }
                          ],
                          ref: "addDgmId",
                          staticClass: "dgmInput",
                          attrs: { id: "addDgmId", type: "number" },
                          domProps: { value: _vm.addDgmId },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.addDgmId = $event.target.value
                              },
                              _vm.changeNum
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "inputGroup" }, [
                        _c("span", { staticClass: "dgmLable" }, [
                          _vm._v("IP:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.addDgmIp,
                              expression: "addDgmIp"
                            }
                          ],
                          staticClass: "dgmInput",
                          attrs: { id: "addDgmIp", type: "text" },
                          domProps: { value: _vm.addDgmIp },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.addDgmIp = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "inputGroup" }, [
                        _c("span", { staticClass: "dgmLable" }, [
                          _vm._v("类型:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectDgmTypeVal,
                                expression: "selectDgmTypeVal"
                              }
                            ],
                            staticClass: "dgmSelect",
                            attrs: { id: "addDgmType" },
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
                                _vm.selectDgmTypeVal = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.dgmTypeList, function(itemType) {
                            return _c(
                              "option",
                              { domProps: { value: itemType.value } },
                              [_vm._v(_vm._s(itemType.text))]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.selectDgmTypeVal === 3,
                              expression: "selectDgmTypeVal===3"
                            }
                          ],
                          staticClass: "inputGroup"
                        },
                        [
                          _c("span", { staticClass: "dgmLable" }, [
                            _vm._v("通道类型:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectChTypeVal,
                                  expression: "selectChTypeVal"
                                }
                              ],
                              staticClass: "dgmSelect",
                              attrs: { id: "addChType" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectChTypeVal = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.chTypeList, function(itemType) {
                              return _c(
                                "option",
                                { domProps: { value: itemType.value } },
                                [_vm._v(_vm._s(itemType.text))]
                              )
                            }),
                            0
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
                              value: _vm.selectDgmTypeVal === 3,
                              expression: "selectDgmTypeVal===3"
                            }
                          ],
                          staticClass: "inputGroup"
                        },
                        [
                          _c("span", { staticClass: "dgmLable" }, [
                            _vm._v("量程类型:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectRangeTypeVal,
                                  expression: "selectRangeTypeVal"
                                }
                              ],
                              staticClass: "dgmSelect",
                              attrs: { id: "addRangeType" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectRangeTypeVal = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.rangeTypeList, function(itemType) {
                              return _c(
                                "option",
                                { domProps: { value: itemType.value } },
                                [_vm._v(_vm._s(itemType.text))]
                              )
                            }),
                            0
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
                              value: _vm.selectDgmTypeVal === 2,
                              expression: "selectDgmTypeVal===2"
                            }
                          ],
                          staticClass: "inputGroup"
                        },
                        [
                          _c("span", { staticClass: "dgmLable" }, [
                            _vm._v("量程类型:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectOptionTypeVal,
                                  expression: "selectOptionTypeVal"
                                }
                              ],
                              staticClass: "dgmSelect",
                              attrs: { id: "addOptionType" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectOptionTypeVal = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.optionTypeList, function(itemType) {
                              return _c(
                                "option",
                                { domProps: { value: itemType.value } },
                                [_vm._v(_vm._s(itemType.text))]
                              )
                            }),
                            0
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
                              value: _vm.selectDgmTypeVal === 9,
                              expression: "selectDgmTypeVal===9"
                            }
                          ],
                          staticClass: "inputGroup"
                        },
                        [
                          _c("span", { staticClass: "dgmLable" }, [
                            _vm._v("AB版本:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectHwabTypeVal,
                                  expression: "selectHwabTypeVal"
                                }
                              ],
                              staticClass: "dgmSelect",
                              attrs: { id: "addOptionType" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectHwabTypeVal = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.abTypeList, function(itemType) {
                              return _c(
                                "option",
                                { domProps: { value: itemType } },
                                [_vm._v(_vm._s(itemType))]
                              )
                            }),
                            0
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "alertFoot" }, [
                      _c(
                        "button",
                        {
                          staticClass: "sure-btn",
                          on: { click: _vm.addDgmInfo }
                        },
                        [_vm._v("确定")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "quit-btn",
                          on: { click: _vm.closeAlertDgm }
                        },
                        [_vm._v("取消")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("机组名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("IP")]),
        _vm._v(" "),
        _c("th", [_vm._v("类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("操作")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("IP")]),
        _vm._v(" "),
        _c("th", { staticClass: "th_dgmType" }, [_vm._v("类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("操作")])
      ])
    ])
  }
]
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

/***/ "./src/components/content/system/dgmBind/DgmBind.vue":
/*!***********************************************************!*\
  !*** ./src/components/content/system/dgmBind/DgmBind.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DgmBind.vue?vue&type=template&id=0ac5f9b6& */ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6&");
/* harmony import */ var _DgmBind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DgmBind.vue?vue&type=script&lang=js& */ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DgmBind.vue?vue&type=style&index=0&lang=scss& */ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DgmBind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/system/dgmBind/DgmBind.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./DgmBind.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./DgmBind.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6&":
/*!******************************************************************************************!*\
  !*** ./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./DgmBind.vue?vue&type=template&id=0ac5f9b6& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgmBind/DgmBind.vue?vue&type=template&id=0ac5f9b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_DgmBind_vue_vue_type_template_id_0ac5f9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=41-15b53137.js.map