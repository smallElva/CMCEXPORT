(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
/* harmony import */ var assets_lib_pinyin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/lib/pinyin.js */ "./src/assets/lib/pinyin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "regulateAll",
  data: function data() {
    return {
      title: '校正系数计算',
      btnData: [//按钮初始化
      {
        type: 1,
        textBtn: "DGU2000V1校正系数",
        active: true,
        isShow: true
      }, {
        type: 3,
        textBtn: "DGU2000V2校正系数",
        active: false,
        isShow: true
      }, {
        type: 2,
        textBtn: "DGU2200校正系数",
        active: false,
        isShow: true
      }, {
        type: 7,
        textBtn: "TMU2000校正系数",
        active: false,
        isShow: true
      }, {
        type: 9,
        textBtn: "DGU2000E校正系数",
        active: false,
        isShow: true
      }, {
        type: 13,
        textBtn: "YHC5000校正系数",
        active: false,
        isShow: true
      }],
      leftClass: {
        "left-btn": true,
        "active": false,
        "disable": false
      },
      rightClass: {
        "right-btn": true,
        "active": false,
        "disable": false
      },
      selectDgm: {
        dgm_id: '',
        dgm_type: '',
        dgm_name: "",
        machine_id: ""
      },
      //所选中的dgm
      selectChTypeVal: '',
      //所选中的通道类型
      rowList: [],
      dgmList: [],
      //采集器列表
      searchDgmList: [],
      chList: {},
      //初始通道信息
      chooseChList: [],
      //所选通道类型下的通道信息
      data_step: 0,
      //按钮的执行步骤，0初始状态，实时关闭，
      timer: null,
      //定时器
      curObj: {},
      //当前所选择的通道信息
      oriChList: [] //初始通道信息

    };
  },
  watch: {
    '$store.state.customInfo': {
      handler: function handler(value, oldValue) {
        if (value) {
          if (value.regulateBtn) {
            this.btnData = value.regulateBtn;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {
    this.getTable(this.btnData[0]);
    this.setBtnContentPosition();
  },
  destroyed: function destroyed() {
    this.data_step = 0;
    var that = this;
    clearInterval(that.timer);

    if (that.timer) {
      setTimeout(function () {
        clearInterval(that.timer);
      }, 500);
    }
  },
  methods: {
    // 获取采集器信息
    getTable: function getTable(btn) {
      var _this = this;

      //点击下标签的时候改变active，改变路由，刷新之后路由不变，active不变，点击左边测点设置 active会有问题
      this.btnData.forEach(function (btn) {
        btn.active = false;
      });
      btn.active = true;
      this.initParams(); //切换采集器类型按钮，则初始化数据

      var params = {
        type: btn.type,
        t_ids: this.$store.state.tids
      };
      network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].getCorrectionFactor(params).then(function (res) {
        if (res && res.length) {
          _this.dgmList = res;

          _this.dgmList.forEach(function (dgm) {
            dgm.active = false;
          });

          _this.searchDgmList = _this.dgmList.concat();
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //重置校正系数
    resetRegulate: function resetRegulate() {
      var _this2 = this;

      var params = [];
      this.oriChList.forEach(function (ch) {
        var obj = {
          machine_id: _this2.selectDgm.machine_id,
          dgm_id: _this2.selectDgm.dgm_id,
          dgm_type: _this2.selectDgm.dgm_type,
          ch_id: ch.ch_id,
          ch_type: ch.ch_type,
          null_shift: "0",
          corr: "1"
        };
        params.push(obj);
      });
      network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].saveCorrectionFactorByDgmId(params).then(function (res) {
        if (res.state === 0) {
          swal({
            title: "提示",
            text: '重置校正系数成功',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '重置校正系数失败',
            button: "确认"
          });
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /**
     * 初始化
     */
    initParams: function initParams() {
      this.selectDgm = {
        dgm_id: '',
        dgm_type: '',
        dgm_name: "",
        machine_id: ""
      }; //所选中的dgm

      this.selectChTypeVal = ''; //所选中的通道类型

      this.rowList = [];
      this.dgmList = []; //采集器列表

      this.searchDgmList = [];
      this.chList = {}; //初始通道信息

      this.chooseChList = []; //所选通道类型下的通道信息

      this.data_step = 0; //按钮的执行步骤，0初始状态，实时关闭，

      this.timer = null; //定时器

      this.curObj = {}; //当前所选择的通道信息
    },
    // 过滤采集器
    searchDgm: function searchDgm() {
      var search_text = this.$refs.searchInput.value;

      if (search_text.length > 0) {
        var test_atr = new RegExp(search_text);
        this.searchDgmList = [];

        for (var i = 0; i < this.dgmList.length; i++) {
          if (test_atr.test(this.dgmList[i].dgm_id) || Object(assets_lib_pinyin_js__WEBPACK_IMPORTED_MODULE_2__["ConvertPinyin"])(this.dgmList[i].dgm_id).indexOf(search_text) >= 0) {
            this.searchDgmList.push(this.dgmList[i]);
          }
        }
      } else {
        this.searchDgmList = this.dgmList.concat();
      }
    },
    //获取采集器通道信息
    getChList: function getChList() {
      var _this3 = this;

      var params = {
        dgm_id: this.selectDgm.dgm_id,
        dgm_type: this.selectDgm.dgm_type,
        machine_id: this.selectDgm.machine_id
      };
      network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].getCorrectionFactorByDgmId(params).then(function (res) {
        var list = res.list;

        if (list && list.length) {
          _this3.oriChList = list.concat();

          if (_this3.data_step === 0) {
            list.forEach(function (item) {
              if (!_this3.chList[item.ch_type]) {
                _this3.chList[item.ch_type] = [];
              }

              item.output1 = '';
              item.output2 = '';
              item.c_output2 = '';
              item.ac_corr = '';
              item.null_shift = '';
              item.check = true;

              _this3.chList[item.ch_type].push(item);
            });
          } else {
            var prop = "";
            var list2 = _this3.chooseChList; //显示的通道数据

            switch (Number(_this3.data_step)) {
              case 1:
                prop = "output1";
                break;

              case 2:
                prop = "output2";
                break;

              case 5:
                prop = "c_output1";
                break;

              case 6:
                prop = "c_output2";
                break;

              default:
                prop = "start";
                break;
            }

            for (var i = 0; i < list.length; i++) {
              //请求得到的数据
              for (var j = 0; j < list2.length; j++) {
                if (list2[j].ch_id == list[i].ch_id && list2[j].ch_type == list[i].ch_type) {
                  var item = list2[j];
                  item[prop] = list[i].outValue;

                  if (Number(_this3.data_step) === 6) {
                    var input2 = Number(_this3.curObj.input2);
                    var c_output2 = Number(item.outValue);
                    var errorNum = Math.abs(c_output2 - input2);
                    var rangeValue = Number(_this3.curObj.range);
                    /*let errorMin = Number(this.curObj.range.split('-')[0]);
                    let errorMax = Number(this.curObj.range.split('-')[1]);*/

                    var errorMin = input2 - Number(rangeValue * input2 / 100);
                    var errorMax = Number(input2 + Number(rangeValue * input2 / 100));

                    if (errorNum < errorMin || errorNum > errorMax) {
                      item.error = true;
                    } else {
                      item.error = false;
                    }
                  }
                }
              }
            }

            _this3.$forceUpdate();
          }
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    //新建行
    addRow: function addRow() {
      if ($.isEmptyObject(this.chList)) {
        swal({
          title: "提示",
          text: '该采集器下没有建测点',
          button: "确认"
        });
        return;
      }

      if (this.selectDgm.dgm_id == '') {
        swal({
          title: "提示",
          text: '请先选择需要设置校正系数的采集器',
          button: "确认"
        });
        return;
      }

      if (this.rowList.length) {
        this.rowList.forEach(function (item) {
          item.active = 0;
        });
      }

      var obj = {
        selectChType: '0',
        chTypeList: this.getChTypeList(this.selectDgm.dgm_type),
        selectRangeType: '',
        rangeTypeList: this.getRangeTypeList(this.selectDgm, 0),
        input1: '10',
        input2: '20',
        range: '1',
        active: 1
      };
      this.rowList.push(obj);
      this.curObj = obj;

      if (this.chList[obj.selectChType]) {
        this.chooseChList = this.chList[obj.selectChType];
      }
    },
    //量程下拉选项
    getRangeTypeList: function getRangeTypeList(dgmInfo, chType) {
      var obj = {};
      var dgmType = Number(dgmInfo.dgm_type);

      switch (Number(chType)) {
        case 0:
          //振动通道
          if (dgmType === 1) {
            obj = {
              '2': '10000g',
              '3': '2000g',
              '4': '400g',
              '5': '80g',
              '6': '50000g'
            };
          } else if (dgmType === 2) {
            if (dgmInfo.hw_db_ver == 100) {
              obj = {
                '0': '自动量程',
                '50': '40000g',
                '51': '32000g',
                '1': '25600g',
                '52': '16000g',
                '53': '8000g',
                '54': '4000g',
                '55': '2000g',
                '56': '1000g',
                '57': '500g',
                '58': '250g',
                '59': '125g',
                '11': '25g',
                '42': '5g'
              };
            } else {
              obj = {
                '0': '自动量程',
                '1': '20000g',
                '9': '2000g',
                '25': '250g',
                '29': '25g'
              };
            }
          } else if (dgmType === 3) {
            if (parseInt(dgmInfo.hw_db_ver) <= 100 && dgmInfo.hw_range_type == 0) {
              //group1=0 group2=0
              obj = {
                '0': '自动量程',
                '1': '8000g',
                '2': '1600g',
                '3': '320g'
              };
            } else if (parseInt(dgmInfo.hw_db_ver) <= 100 && dgmInfo.hw_range_type != 0) {
              //group1=0 group2=1
              obj = {
                '0': '自动量程',
                '1': '25600g',
                '2': '12800g',
                '3': '8000g',
                '4': '6400g',
                '5': '5120g',
                '6': '3200g',
                '7': '2560g',
                '8': '1600g',
                '9': '1280g',
                '10': '800g',
                '11': '640g',
                '12': '400g',
                '13': '320g',
                '14': '200g',
                '15': '160g',
                '16': '100g',
                '17': '80g',
                '18': '50g',
                '19': '40g',
                '20': '25g',
                '21': '20g',
                '22': '10g',
                '23': '5g'
              };
            } else if (parseInt(dgmInfo.hw_db_ver) > 100 && dgmInfo.hw_range_type == 0) {
              //group1=1 group2=0
              obj = {
                '0': '自动量程',
                '1': '8000g',
                '2': '1600g',
                '3': '320g',
                '4': '64g'
              };
            } else if (parseInt(dgmInfo.hw_db_ver) > 100 && dgmInfo.hw_range_type != 0) {
              //group1=1 group2=1
              obj = {
                '0': '自动量程',
                '1': '16000g',
                '2': '8000g',
                '3': '4000g',
                '4': '3200g',
                '5': '2000g',
                '6': '1600g',
                '7': '1000g',
                '8': '800g',
                '9': '640g',
                '10': '500g',
                '11': '400g',
                '12': '320g',
                '13': '250g',
                '14': '200g',
                '15': '160g',
                '16': '125g',
                '17': '100g',
                '18': '80g',
                '19': '62.5g',
                '20': '50g',
                '21': '40g',
                '22': '31.25g',
                '23': '25g',
                '24': '20g',
                '25': '15.625g',
                '26': '12.5g',
                '27': '10g',
                '28': '6.25g',
                '29': '5g',
                '30': '3.125g',
                '31': '2.5g',
                '32': '1.25g',
                '33': '0.625g'
              };
            }
          } else if (dgmType === 7) {
            obj = {
              '255': '固定量程'
            };
          } else if (dgmType === 9 || dgmType === 13) {
            obj = {
              '0': '10000g',
              '1': '100g'
            };
          }

          break;

        case 4:
          //温度通道
          if (dgmType === 2) {
            if (dgmInfo.hw_db_ver == 0) {
              obj = {
                "0": "4000mV",
                "1": "20000mV",
                "2": "2000mV",
                "3": "1000mV"
              };
            } else {
              obj = {
                "0": "2000mV",
                "1": "20000mV"
              };
            }
          } else if (dgmType === 3 || dgmType === 9) {
            obj = {
              "0": "16000mV",
              "1": "8000mV",
              "2": "4000mV"
            };
          } else if (dgmType == 7 || dgmType === 13) {
            obj = {
              "255": "固定量程"
            };
          }

          break;

        case 1:
          //过程量通道
          if (dgmType === 1) {
            obj = {
              '0': '1~5V',
              '1': '-20~20V',
              '2': '4~20mA'
            };
          } else if (dgmType === 2) {
            obj = {
              '2': '4~20mA',
              '3': '-10~10V'
            };
          } else if (dgmType === 9) {
            obj = {
              '1': '0~5V',
              '2': '4~20mA'
            };
          } else {
            obj = {
              '1': '-20~20V',
              '2': '4~20mA'
            };
          }

          break;

        default:
          console.log('数据错误');
          break;
      }

      ;
      return obj;
    },
    //通道类型下拉
    getChTypeList: function getChTypeList(dgmType) {
      var obj = {};

      switch (Number(dgmType)) {
        case 1:
          //dgu2000v1
          obj = {
            '0': '振动通道',
            '1': '过程量通道'
          };
          break;

        case 2:
          //dgu2200
          obj = {
            '0': '振动通道',
            '1': '过程量通道',
            '4': '温度通道'
          };
          break;

        case 3:
          //dgu2000v2
          obj = {
            '0': '振动通道',
            '1': '过程量通道',
            '4': '温度通道'
          };
          break;

        case 7:
          //tmu2000
          obj = {
            '0': '振动通道',
            '4': '温度通道'
          };
          break;

        case 9:
          //DGU2000E
          obj = {
            '0': '振动通道',
            '1': '温度/过程量通道'
          };
          break;

        case 13:
          //YHC5000
          obj = {
            '0': '振动通道',
            '4': '温度'
          };
          break;

        default:
          console.log('数据错误');
          break;
      }

      ;
      return obj;
    },
    //修改通道类型，更改量程下拉选项
    changeChType: function changeChType(item) {
      var chType = Number(item.selectChType);
      item.rangeTypeList = this.getRangeTypeList(this.selectDgm, chType);
      item.selectRangeType = '';

      if (this.chList[item.selectChType]) {
        this.chooseChList = this.chList[item.selectChType];
      } else {
        this.chooseChList = [];
      }

      this.selectChTypeVal = item.chTypeList[item.selectChType];
      this.onReset();
    },
    // 修改量程
    changeRangeType: function changeRangeType(item) {
      var rangeTypeList = [];
      this.selectChTypeVal = '';

      var counts = function counts(arr, value) {
        return arr.reduce(function (a, v) {
          return v === value ? a + 1 : a + 0;
        }, 0);
      };

      if (this.rowList.length) {
        this.rowList.forEach(function (obj) {
          var ch_range = obj.selectChType + '_' + obj.selectRangeType;
          rangeTypeList.push(ch_range);
        });

        if (counts(rangeTypeList, item.selectChType + '_' + item.selectRangeType) > 1) {
          swal({
            title: "提示",
            text: '量程类型不得重复',
            button: "确认"
          });
          item.selectRangeType = '';
          return;
        }
      }

      if (item.selectRangeType !== undefined) {
        this.selectChTypeVal = item.chTypeList[item.selectChType] + item.rangeTypeList[item.selectRangeType];
      } else {
        this.selectChTypeVal = item.chTypeList[item.selectChType];
      }
    },
    // 删除行
    deleteRow: function deleteRow(index) {
      this.rowList.splice(index, 1);
      this.selectChTypeVal = '';
      this.chooseChList = [];

      if (this.chList[this.curObj.selectChType]) {
        var chList = this.chList[this.curObj.selectChType];
        chList.forEach(function (item) {
          item.output1 = '';
          item.output2 = '';
          item.c_output2 = '';
          item.ac_corr = '';
          item.null_shift = '';
        });
      }

      this.curObj = {};
      this.data_step = 0;
      var that = this;
      clearInterval(that.timer);

      if (that.timer) {
        setTimeout(function () {
          clearInterval(that.timer);
        }, 500);
      }
    },
    // 点击表格效果
    addClass: function addClass(item) {
      this.rowList.forEach(function (item) {
        item.active = 0;
      });
      item.active = 1;

      if (item.chTypeList[item.selectChType] && item.rangeTypeList[item.selectRangeType]) {
        this.selectChTypeVal = item.chTypeList[item.selectChType] + item.rangeTypeList[item.selectRangeType];
      }

      this.curObj = item;

      if (this.chList[item.selectChType]) {
        this.chooseChList = this.chList[item.selectChType];
      }
    },
    // 选择采集器
    chooseDgm: function chooseDgm(dgm) {
      this.searchDgmList.forEach(function (dgm) {
        dgm.active = false;
      });
      dgm.active = true;
      this.selectDgm = dgm; //重新选择采集器，需要初始化一些信息

      this.selectChTypeVal = ''; //所选中的通道类型

      this.rowList = [];
      this.chList = {}; //初始通道信息

      this.chooseChList = []; //所选通道类型下的通道信息

      this.data_step = 0; //按钮的执行步骤，0初始状态，实时关闭，

      var that = this;
      clearInterval(that.timer);

      if (that.timer) {
        setTimeout(function () {
          clearInterval(that.timer);
        }, 500);
      }

      that.curObj = {}; //当前所选择的通道信息

      that.getChList();
    },
    // 开始获取实时数据
    startRealData: function startRealData() {
      var that = this;
      that.timer !== null && clearInterval(that.timer);
      that.timer = null;

      if (this.chooseChList === undefined || this.chooseChList.length === 0) {
        swal({
          title: "提示",
          text: '该通道类型下未建测点',
          button: "确认"
        });
        return;
      }

      if (this.curObj.selectRangeType === '' || this.curObj.selectRangeType === undefined) {
        swal({
          title: "提示",
          text: '量程不得为空',
          button: "确认"
        });
        return;
      } else if (this.curObj.input1 == '' || this.curObj.input2 == '') {
        swal({
          title: "提示",
          text: '输入1和输入2不得为空',
          button: "确认"
        });
        return;
      }

      this.data_step = 1;

      if (this.chList[this.curObj.selectChType]) {
        this.chooseChList = this.chList[this.curObj.selectChType];
      }

      var params = {
        machine_id: this.selectDgm.machine_id,
        //机组id,
        dgm_id: this.selectDgm.dgm_id,
        //采集器id,
        dgm_type: this.selectDgm.dgm_type,
        //采集器类型,
        ch_type: this.curObj.selectChType,
        //通道类型,
        range: this.curObj.selectRangeType //量程信息

      };
      network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].saveRang(params).then(function (res) {
        that.timer = setInterval(function () {
          that.getChList();
        }, 3000);
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /**
     * 重置
     */
    onReset: function onReset() {
      if (this.chooseChList === undefined || this.chooseChList.length === 0) {
        swal({
          title: "提示",
          text: '该通道类型下未建测点',
          button: "确认"
        });
        return;
      }

      this.data_step = 0;
      this.chooseChList.forEach(function (item) {
        item.output1 = '';
        item.output2 = '';
        item.c_output2 = '';
        item.ac_corr = '';
        item.null_shift = '';
        item.check = true;
      });
      var that = this;
      clearInterval(that.timer);

      if (that.timer) {
        setTimeout(function () {
          clearInterval(that.timer);
        }, 500);
      }

      this.$forceUpdate();
    },

    /**
     * 固定输出1
     */
    fixOutput1: function fixOutput1() {
      this.data_step = 2;
    },

    /**
     * 固定输出2
     */
    fixOutput2: function fixOutput2() {
      this.data_step = 3;
    },

    /**
     * 固定校正输出2
     */
    fixC_output2: function fixC_output2() {
      this.data_step = 0;
      var that = this;
      clearInterval(that.timer);
      that.timer = null;
    },

    /**
     * 计算校正系数
     */
    calCorrect: function calCorrect() {
      var ch_type = Number(this.curObj.selectChType);
      var input1 = Number(this.curObj.input1);
      var input2 = Number(this.curObj.input2);
      var output1;
      var output2;
      var k_a;
      var k_b;
      this.chooseChList.forEach(function (obj) {
        output1 = Number(obj.output1);
        output2 = Number(obj.output2);

        if (ch_type == 0) {
          //振动不计算零漂
          obj.null_shift = 0;
          k_a = input1 * output1 + input2 * output2;
          k_b = output1 * output1 + output2 * output2;
          obj.ac_corr = Object(utils_utils__WEBPACK_IMPORTED_MODULE_1__["round"])(k_a / k_b, 4);
        } else {
          k_a = input1 - input2;
          k_b = output1 - output2;
          obj.ac_corr = Object(utils_utils__WEBPACK_IMPORTED_MODULE_1__["round"])(k_a / k_b, 4);
          obj.null_shift = Number(output1 * obj.ac_corr - input1);
        }

        if (obj.output1 == "" || obj.output2 == "" || output1 == 0 || output2 == 0 || k_b === 0) {
          obj.ac_corr = 1;
          obj.null_shift = 0;
        }

        obj.null_shift = Object(utils_utils__WEBPACK_IMPORTED_MODULE_1__["round"])(obj.null_shift, 4); // if(obj.output1=="" || obj.output2=="" || output1==0 || output2==0){
        //     obj.ac_corr = 1;
        //     obj.null_shift = 0;
        // }
        // else{
        //     let k_a = input1*output1+input2*output2;
        //     let k_b = output1*output1+output2*output2;
        //     obj.ac_corr = round(k_a/k_b,4);
        //     if(ch_type==2){
        //         let null_shift = (k_a/k_b)*output1-input1;
        //         obj.null_shift = round(null_shift,4);
        //     }
        //     else{
        //         obj.null_shift = 0;
        //     }
        // }
      });
      this.data_step = 4;
    },

    /**
     * 保存矫正系数
     */
    save: function save() {
      var _this4 = this;

      this.data_step = 6;
      var params = [];
      this.chooseChList.forEach(function (ch) {
        if (ch.check) {
          var obj = {
            machine_id: _this4.selectDgm.machine_id,
            dgm_id: _this4.selectDgm.dgm_id,
            dgm_type: _this4.selectDgm.dgm_type,
            ch_id: ch.ch_id,
            ch_type: ch.ch_type,
            null_shift: Number(ch.null_shift),
            corr: Number(ch.ac_corr)
          };
          params.push(obj);
        }
      });
      network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].saveCorrectionFactorByDgmId(params).then(function (res) {
        if (res.state === 0) {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '保存失败',
            button: "确认"
          });
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /* 左右拖动 */
    mouseMove: function mouseMove(e) {
      var odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置

      var disX = e.clientX - odiv.offsetLeft;
      var maxWidth = document.getElementsByClassName('controls-btn')[0].offsetWidth - 120;

      document.onmousemove = function (e) {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        var left = e.clientX - disX;

        if (left < 80 && left > -maxWidth) {
          //移动当前元素
          odiv.style.left = left + 'px';
        }
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    toLeft: function toLeft() {
      //向左移动
      var btnContent = $('.btn-content').position();
      var leftVal = btnContent.left;

      if (leftVal < 60) {
        this.leftClass = {
          "left-btn": true,
          "active": true,
          "disable": false
        };
        this.rightClass = {
          "right-btn": true,
          "active": false
        };
        $('.btn-content').css('left', leftVal + 50);
      } else {
        this.leftClass = {
          "left-btn": true,
          "active": false,
          "disable": true
        };
        this.rightClass = {
          "right-btn": true,
          "active": false
        };
      }
    },
    toRight: function toRight() {
      //向右移动
      var btnContent = $('.btn-content').position();
      var btnConWidth = $('.btn-content').width();
      var leftVal = btnContent.left;
      $('.btn-content').css('left', leftVal - 50);

      if (leftVal >= 100) {
        this.leftClass = {
          "left-btn": true,
          "active": false,
          "disable": true
        };
        this.rightClass = {
          "right-btn": true,
          "active": true
        };
      } else if (Math.abs(leftVal) > btnConWidth - 150) {
        this.leftClass = {
          "left-btn": true,
          "active": false,
          "disable": false
        };
        this.rightClass = {
          "right-btn": true,
          "active": true,
          "disable": true
        };
      } else {
        this.leftClass = {
          "left-btn": true,
          "active": false // "disable" : false,

        };
        this.rightClass = {
          "right-btn": true,
          "active": true
        };
      }
    },
    setBtnContentPosition: function setBtnContentPosition() {
      var btnContent = $('.btn-content').position();
      var btnConWidth = $('.btn-content').width();
      var leftVal = btnContent.left;

      if (leftVal >= 60) {
        this.leftClass = {
          "left-btn": true,
          "active": false,
          "disable": true
        };
      }

      if (Math.abs(leftVal) > btnConWidth - 150) {
        this.rightClass = {
          "right-btn": true,
          "active": true,
          "disable": true
        };
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "myTable", attrs: { id: "myTable" } }, [
      _c("div", { attrs: { id: "tableContent" } }, [
        _c("div", { staticClass: "regulate-block" }, [
          _c("div", { staticClass: "regulate-left" }, [
            _c(
              "div",
              {
                staticClass: "search",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _c("input", {
                  ref: "searchInput",
                  staticClass: "over-search-input",
                  attrs: { type: "text", placeholder: "搜索" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "iconfont icon-zhongzi-sousuo search-icon",
                  on: { click: _vm.searchDgm }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "search-result" },
              _vm._l(_vm.searchDgmList, function(dgm) {
                return _c(
                  "li",
                  {
                    staticClass: "search-li",
                    class: dgm.active ? "active" : "",
                    on: {
                      click: function($event) {
                        return _vm.chooseDgm(dgm)
                      }
                    }
                  },
                  [_vm._v(_vm._s(dgm.dgm_id))]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "regulate-right" }, [
            _c("div", { staticClass: "setRegulate" }, [
              _c("div", { staticClass: "header" }, [
                _c("div", { staticClass: "header-text" }, [
                  _vm._v(
                    "\n                                校正系数设置 - " +
                      _vm._s(_vm.selectDgm.dgm_id) +
                      "\n                            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "regulate-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.resetRegulate()
                        }
                      }
                    },
                    [_vm._v("重置校正系数")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.addRow()
                        }
                      }
                    },
                    [_vm._v("新建行")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: {
                        disabled:
                          _vm.chooseChList === undefined ||
                          _vm.chooseChList.length === 0
                      },
                      on: {
                        click: function($event) {
                          return _vm.startRealData()
                        }
                      }
                    },
                    [_vm._v("开始")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: {
                        disabled:
                          _vm.chooseChList === undefined ||
                          _vm.chooseChList.length === 0
                      },
                      on: {
                        click: function($event) {
                          return _vm.onReset()
                        }
                      }
                    },
                    [_vm._v("重置")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "regulate-table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.rowList, function(item, index) {
                    return _c(
                      "tr",
                      {
                        class: item.active === 1 ? "active" : "",
                        on: {
                          click: function($event) {
                            return _vm.addClass(item)
                          }
                        }
                      },
                      [
                        _c("td", { staticClass: "indexNum" }, [
                          _vm._v(_vm._s(Number(index + 1)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.selectChType,
                                  expression: "item.selectChType"
                                }
                              ],
                              staticClass: "rangeSelect",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      item,
                                      "selectChType",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeChType(item)
                                  }
                                ]
                              }
                            },
                            _vm._l(item.chTypeList, function(value, key) {
                              return _c(
                                "option",
                                { domProps: { value: key } },
                                [_vm._v(_vm._s(value))]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.selectRangeType,
                                  expression: "item.selectRangeType"
                                }
                              ],
                              staticClass: "rangeSelect",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      item,
                                      "selectRangeType",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeRangeType(item)
                                  }
                                ]
                              }
                            },
                            _vm._l(item.rangeTypeList, function(value, key) {
                              return _c(
                                "option",
                                { domProps: { value: key } },
                                [_vm._v(_vm._s(value))]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.input1,
                                expression: "item.input1"
                              }
                            ],
                            staticClass: "table-input",
                            domProps: { value: item.input1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "input1", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.input2,
                                expression: "item.input2"
                              }
                            ],
                            staticClass: "table-input",
                            domProps: { value: item.input2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "input2", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.range,
                                expression: "item.range"
                              }
                            ],
                            staticClass: "table-input",
                            domProps: { value: item.range },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "range", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "deleteBtn",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.deleteRow(index)
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "setRegulate" }, [
              _c("div", { staticClass: "header" }, [
                _c("div", { staticClass: "header-text" }, [
                  _vm._v(
                    "\n                                校正系数计算 - " +
                      _vm._s(_vm.selectChTypeVal) +
                      "\n                            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "regulate-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { disabled: _vm.data_step != 1 },
                      on: {
                        click: function($event) {
                          return _vm.fixOutput1()
                        }
                      }
                    },
                    [_vm._v("保存输出1")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { disabled: _vm.data_step != 2 },
                      on: {
                        click: function($event) {
                          return _vm.fixOutput2()
                        }
                      }
                    },
                    [_vm._v("保存输出2")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { disabled: _vm.data_step != 3 },
                      on: {
                        click: function($event) {
                          return _vm.calCorrect()
                        }
                      }
                    },
                    [_vm._v("计算")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { disabled: _vm.data_step != 4 },
                      on: {
                        click: function($event) {
                          return _vm.save()
                        }
                      }
                    },
                    [_vm._v("保存")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { disabled: _vm.data_step != 6 },
                      on: {
                        click: function($event) {
                          return _vm.fixC_output2()
                        }
                      }
                    },
                    [_vm._v("校正输出2")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "regulate-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.chooseChList, function(ch, index) {
                    return _c("tr", [
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: ch.check,
                              expression: "ch.check"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(ch.check)
                              ? _vm._i(ch.check, null) > -1
                              : ch.check
                          },
                          on: {
                            change: function($event) {
                              var $$a = ch.check,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(ch, "check", $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      ch,
                                      "check",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(ch, "check", $$c)
                              }
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { title: ch.ch_name } }, [
                        _vm._v(_vm._s(ch.ch_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { title: ch.output1 } }, [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(ch.output1) +
                            "\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { title: ch.output2 } }, [
                        _vm._v(_vm._s(ch.output2))
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { title: ch.ac_corr } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: ch.ac_corr,
                              expression: "ch.ac_corr"
                            }
                          ],
                          staticClass: "table-input",
                          domProps: { value: ch.ac_corr },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(ch, "ac_corr", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { title: ch.null_shift } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: ch.null_shift,
                              expression: "ch.null_shift"
                            }
                          ],
                          staticClass: "table-input",
                          domProps: { value: ch.null_shift },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(ch, "null_shift", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          class: ch.error ? "error" : "",
                          attrs: { title: ch.c_output2 }
                        },
                        [_vm._v(_vm._s(ch.c_output2))]
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "controls-btn" }, [
        _c("div", { staticClass: "push-controls" }, [
          _c(
            "button",
            {
              class: _vm.leftClass,
              attrs: { disabled: _vm.leftClass.disable },
              on: {
                click: function($event) {
                  return _vm.toLeft()
                }
              }
            },
            [_vm._v(" < ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "btn-content",
            on: {
              mousedown: function($event) {
                return _vm.mouseMove($event)
              }
            }
          },
          _vm._l(_vm.btnData, function(btn, index) {
            return _c(
              "button",
              {
                key: index,
                staticClass: "con-dgm-btn",
                class: btn.active ? "active" : "",
                on: {
                  click: function($event) {
                    return _vm.getTable(btn)
                  }
                }
              },
              [_vm._v(" " + _vm._s(btn.textBtn))]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "push-controls push-right" }, [
          _c(
            "button",
            {
              class: _vm.rightClass,
              attrs: { disabled: _vm.rightClass.disable },
              on: {
                click: function($event) {
                  return _vm.toRight()
                }
              }
            },
            [_vm._v(" > ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "indexNum" }, [_vm._v("序号")]),
        _vm._v(" "),
        _c("th", [_vm._v("通道类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("量程")]),
        _vm._v(" "),
        _c("th", [_vm._v("输入1(mV)")]),
        _vm._v(" "),
        _c("th", [_vm._v("输入2(mV)")]),
        _vm._v(" "),
        _c("th", [_vm._v("误差范围(%)")]),
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
        _c("th", [_vm._v("筛选")]),
        _vm._v(" "),
        _c("th", [_vm._v("通道名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("输出1")]),
        _vm._v(" "),
        _c("th", [_vm._v("输出2")]),
        _vm._v(" "),
        _c("th", [_vm._v("交流校正系数")]),
        _vm._v(" "),
        _c("th", [_vm._v("零点漂移")]),
        _vm._v(" "),
        _c("th", [_vm._v("校正输出2")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/components/content/regulate/regulateAll.vue":
/*!*********************************************************!*\
  !*** ./src/components/content/regulate/regulateAll.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regulateAll.vue?vue&type=template&id=332969f8&scoped=true& */ "./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true&");
/* harmony import */ var _regulateAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regulateAll.vue?vue&type=script&lang=js& */ "./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css& */ "./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _regulateAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "332969f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/regulate/regulateAll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./regulateAll.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=style&index=0&id=332969f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_style_index_0_id_332969f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./regulateAll.vue?vue&type=template&id=332969f8&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/regulate/regulateAll.vue?vue&type=template&id=332969f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_regulateAll_vue_vue_type_template_id_332969f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=21-d87476f9.js.map