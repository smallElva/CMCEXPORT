(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _viewInterface_assets_common_headCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/viewInterface/assets/common/headCommon.js */ "./src/viewInterface/assets/common/headCommon.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Record",
  components: {},
  mixins: [_viewInterface_assets_common_headCommon_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      dataResult: [],
      //获取组织、机组原始信息
      folderList: [],
      //初始组织列表
      macList: {},
      //初始机组列表
      dgmList: {},
      //初始采集器列表
      // chooseMacList:[],//选择的机组列表
      // chooseDgmList:[],//选择的采集器列表
      // chooseTid:'',//所选的组织id
      chooseTroot: '',
      //所选组织的类型
      // chooseMacId:'',//所选的机组id
      // chooseDgmId: "",//所选的采集器id
      // chooseDgmType: "",//所选采集器类型
      lastData: [],
      //最后显示的数据列表
      activeNum: 4,
      //当前界面的index
      recordVal: '',
      //搜索的内容
      origRecordList: [],
      //获取到的所有的日志列表信息
      params: {
        m: '',
        n: ''
      },
      noLogData: false,
      //是否有日志数据
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近半年',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近1年',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      timeValue: [new Date(new Date() - 3 * 24 * 3600 * 1000), new Date()]
    };
  },
  created: function created() {
    this.$emit('ievent', this.activeNum);
  },
  mounted: function mounted() {
    this.getHeadData(2);
  },
  watch: {
    chooseDgmId: function chooseDgmId(val, oldVal) {
      if (val) {
        this.getPosData();
      } else {
        this.lastData = [];
        this.origRecordList = [];
        this.noLogData = true;
      }
    }
  },
  methods: {
    //获取日志信息
    getPosData: function getPosData() {
      var that = this;

      if (that.chooseMacId !== '' && that.chooseDgmId !== '') {
        var params = null;
        params = {
          machine_id: that.chooseMacId,
          dgm_id: that.chooseDgmId,
          start_time: that.timeValue[0].getTime(),
          end_time: that.timeValue[1].getTime()
        };
        that.noLogData = false;
        this.$axios.post('getLog', params).then(function (res) {
          that.lastData = [];

          if (res.msg === 0 && res.list.length > 0) {
            for (var i = 0; i < res.list.length; i++) {
              var obj = {};
              obj.index = Number(i + 1);
              obj.time = that.translateDate(res.list[i].savetime_com);

              if (that.chooseTroot == 2) {
                var info = {};

                if (res.list[i].info) {
                  info = JSON.parse(res.list[i].info);
                }

                obj.detail = that.descLabel(res.list[i].code, info);
                obj.desc = res.list[i].desc;
              } else {
                obj.detail = that.descLabel(res.list[i].code);
              }

              that.lastData.push(obj);
            }

            that.origRecordList = that.lastData.concat();
          } else {
            that.noLogData = true;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    //时间过滤
    change: function change() {
      this.getPosData();
    },
    //搜索日志
    searchRecord: function searchRecord() {
      var reg = RegExp(this.recordVal);
      var that = this;

      if (that.recordVal.length > 0) {
        that.lastData = []; // 过滤需要的数据

        for (var i = 0; i < that.origRecordList.length; i++) {
          if (reg.test(that.origRecordList[i].detail) || reg.test(that.origRecordList[i].desc)) {
            that.lastData.push(that.origRecordList[i]);
          }
        }
      } else {
        that.lastData = that.origRecordList.concat();
      }
    },
    //转换日期方法
    translateDate: function translateDate(value) {
      value = new Date(value);
      value = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + this.fixTime(value.getDate()) + ' ' + this.fixTime(value.getHours()) + ':' + this.fixTime(value.getMinutes()) + ':' + this.fixTime(value.getSeconds());
      return value;
    },
    //补0
    fixTime: function fixTime(str) {
      if (Number(str) < 10) {
        str = "0" + str;
      }

      return str;
    },
    //导出数据
    tableToExcel: function tableToExcel() {
      var _this = this;

      var macName = '';

      if (this.chooseMacList.length) {
        this.chooseMacList.forEach(function (mac) {
          if (mac.mac_id == _this.chooseMacId) {
            macName = mac.mac_me;
          }
        });
      } //要导出的json数据


      var jsonData = this.lastData; //列标题，逗号隔开，每一个逗号就是隔开一个单元格

      var str = "\u5E8F\u53F7,\u65F6\u95F4,\u4E8B\u4EF6\u63CF\u8FF0\n";

      if (this.chooseTroot == 2) {
        str = "\u5E8F\u53F7,\u65F6\u95F4,\u4E8B\u4EF6\u63CF\u8FF0,\u8F85\u52A9\u4FE1\u606F\n";
      } //增加\t为了不让表格显示科学计数法或者其他格式


      for (var i = 0; i < jsonData.length; i++) {
        for (var item in jsonData[i]) {
          str += "".concat(jsonData[i][item] + '\t', ",");
        }

        str += '\n';
      } //encodeURIComponent解决中文乱码


      var uri = "data:text/csv;charset=utf-8,\uFEFF" + encodeURIComponent(str); //通过创建a标签实现

      var link = document.createElement("a");
      link.href = uri; //对下载的文件命名

      link.download = "".concat(macName, "_").concat(this.chooseDgmId, "\u8BBE\u5907\u65E5\u5FD7\u8868.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    //code对应的事件描述
    getCode: function getCode(m, info) {
      var pre_id, index1, value1;

      if (info !== null && info !== undefined) {
        pre_id = info.sub_id;
        index1 = Number(info.index1 + 1);
        value1 = info.value1;
      }

      var codeObj = {
        "500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8981\u8BBE\u7F6E\u7B49\u5F85\u8D85\u65F6"),
        "501": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u53D1\u9001\u7A7A\u95F2\u7B49\u5F85\u8D85\u65F6"),
        "502": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u503E\u89D2\u8981\u6570\u636E\u8D85\u65F6"),
        "1000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m, " ").concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u81EA\u68C0\u5F02\u5E38"),
        "-1000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m, " ").concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u81EA\u68C0\u6B63\u5E38"),
        "1100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m, " ").concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u81EA\u68C0\u5F02\u5E38"),
        "-1100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m, " ").concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u81EA\u68C0\u6B63\u5E38"),
        "2012": "与远程服务器网络通讯异常",
        "2017": "服务器硬盘空间不足",
        "2100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "RS232 \u521D\u59CB\u5316\u9519\u8BEF"),
        "0": "未描述",
        "-2100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "RS232 \u521D\u59CB\u5316\u6062\u590D\u6B63\u5E38"),
        "2103": "倾覆设备已拔出",
        "-2103": "倾覆设备已接入",
        "2104": "倾覆设备运行不正常",
        "-2104": "倾覆设备运行恢复正常",
        "2200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u952E\u76F8").concat(this.params.m, "\u91C7\u96C6\u7684\u8F6C\u901F\u9519\u8BEF"),
        "-2200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u952E\u76F8").concat(this.params.m, "\u91C7\u96C6\u7684\u8F6C\u901F\u6062\u590D\u6B63\u5E38"),
        "-2102": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u786C\u4EF6\u7A0B\u5E8F\u8BBE\u7F6E\u6210\u529F"),
        "2102": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u786C\u4EF6\u7A0B\u5E8F\u8BBE\u7F6E\u5931\u8D25"),
        "2300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u91C7\u96C6\u4F4E\u9891\u4FE1\u53F7\u9519\u8BEF"),
        "-2300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u91C7\u96C6\u4F4E\u9891\u4FE1\u53F7\u6062\u590D\u6B63\u5E38"),
        "2400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u91C7\u96C6\u9AD8\u9891\u4FE1\u53F7\u9519\u8BEF"),
        "-2400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u91C7\u96C6\u9AD8\u9891\u4FE1\u53F7\u6062\u590D\u6B63\u5E38"),
        "2500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u8F6C\u901F\u8D85\u8FC7\u6700\u9AD8\u8F6C\u901F\u76841.5\u500D"),
        "-2500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u8F6C\u901F\u8D85\u8FC7\u6700\u9AD8\u8F6C\u901F1.5\u500D\u6062\u590D\u6B63\u5E38"),
        "3000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668FPGA\u81EA\u68C0\u5931\u8D25"),
        "-3000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668FPGA\u81EA\u68C0\u6B63\u5E38"),
        "3001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668SRAM\u81EA\u68C0\u5931\u8D25"),
        "-3001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668SRAM\u81EA\u68C0\u6B63\u5E38"),
        "3100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u7684GAP\u7535\u538B\u4E0D\u5728\u6B63\u5E38\u8303\u56F4"),
        "-3100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u7684GAP\u7535\u538B\u6062\u590D\u5230\u6B63\u5E38\u8303\u56F4"),
        "3200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7684GAP\u7535\u538B\u4E0D\u5728\u6B63\u5E38\u8303\u56F4"),
        "-3200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7684GAP\u7535\u538B\u6062\u590D\u5230\u6B63\u5E38\u8303\u56F4"),
        "3250": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u4F20\u611F\u5668\u7535\u7F06\u6545\u969C"),
        "-3250": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u4F20\u611F\u5668\u7535\u7F06\u6545\u969C\u6062\u590D"),
        "3300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8FC7\u7A0B\u91CF\u901A\u9053").concat(this.params.m, "\u7684\u503C\u4E0D\u5728\u6B63\u5E38\u8303\u56F4"),
        "-3300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8FC7\u7A0B\u91CF\u901A\u9053").concat(this.params.m, "\u7684\u503C\u6062\u590D\u5230\u6B63\u5E38\u8303\u56F4"),
        "3400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u6CA1\u6709\u4FE1\u53F7"),
        "-3400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u6062\u590D\u5230\u6709\u4FE1\u53F7"),
        "3500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u81EA\u68C0\u5931\u8D25"),
        "-3500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6C\u901F\u901A\u9053").concat(this.params.m, "\u81EA\u68C0\u6B63\u5E38"),
        "3600": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u9891\u7387\u81EA\u68C0\u5931\u8D25"),
        "-3600": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u9891\u7387\u81EA\u68C0\u6B63\u5E38"),
        "3700": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7EBF\u8DEF\u65AD\u8DEF"),
        "-3700": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7EBF\u8DEF\u6B63\u5E38"),
        "3800": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u4F20\u611F\u5668\u81EA\u68C0\u5931\u8D25"),
        "-3800": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u4F20\u611F\u5668\u81EA\u68C0\u6B63\u5E38"),
        "3900": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u504F\u7F6E\u81EA\u68C0\u5931\u8D25"),
        "-3900": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u504F\u7F6E\u81EA\u68C0\u6B63\u5E38"),
        "4000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7EBF\u8DEF\u77ED\u8DEF"),
        "4100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668TCP/IP\u901A\u8BAF\u9519\u8BEF"),
        "-4100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668TCP/IP\u901A\u8BAF\u6062\u590D\u6B63\u5E38"),
        "4200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "\u901A\u8BAFCRC\u6548\u9A8C\u9519"),
        "-4200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "\u901A\u8BAFCRC\u6548\u9A8C\u6062\u590D\u6B63\u5E38"),
        "4300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "\u901A\u8BAF\u8D85\u65F6"),
        "-4300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3").concat(this.params.m, "\u901A\u8BAF\u4ECE\u8D85\u65F6\u6062\u590D"),
        "4400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668TCP/IP\u901A\u8BAF\u8D85\u65F6"),
        "-4400": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668TCP/IP\u901A\u8BAF\u4ECE\u8D85\u65F6\u6062\u590D"),
        "5000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u91CD\u65B0\u542F\u52A8"),
        "5001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8BBE\u7F6E\u5DF2\u7ECF\u88AB\u4FEE\u6539"),
        "5002": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8BBE\u7F6E\u9519\u8BEF"),
        "5003": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u786C\u4EF6\u63A5\u89E6\u5F02\u5E38"),
        "5006": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8F6F\u542F\u52A8"),
        "5007": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668rtclient\u8F6F\u542F\u52A8"),
        "5010": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668main\u8F6F\u542F\u52A8"),
        "5011": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668main\u5B50\u8FDB\u7A0B\u8F6F\u542F\u52A8"),
        "5018": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668serial\u8F6F\u542F\u52A8"),
        "5019": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u4E32\u53E3\u4E8C\u7684serial\u8F6F\u542F\u52A8"),
        "5020": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668client\u8F6F\u542F\u52A8"),
        "5021": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668rtclient\u8F6F\u542F\u52A8"),
        "5022": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668hd\u8F6F\u542F\u52A8"),
        "5030": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u81EA\u68C0\u5F00\u59CB"),
        "5031": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u81EA\u68C0\u7ED3\u675F"),
        "5100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\uFF0C\u8FDB\u884C\u4E86\u7075\u654F\u76D1\u6D4B\u5B50\u5B66\u4E60"),
        "5260": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u63A5\u5165"),
        "5261": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u65AD\u5F00"),
        "5262": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u8BF7\u6C42\u8D85\u65F6"),
        "5300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668").concat(this.params.m, "\u53F7\u5207\u6362\u677F\u5FC3\u8DF3\u5305"),
        "-5300": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668").concat(this.params.m, "\u53F7\u5207\u6362\u677F\u5FC3\u8DF3\u5305\u5931\u8D25"),
        "5800": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u4FE1\u53F7").concat(this.params.m, "\uFF0C\u8FDB\u884C\u4E86\u7075\u654F\u76D1\u6D4B\u5B50\u5B66\u4E60"),
        "5900": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u8F6F\u4EF6\u4FEE\u6B63\u7248\u672C\u53F7").concat(this.params.m),
        "6000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u8F6F\u4EF6\u7248\u672C\u66F4\u65B0"),
        "6001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u786C\u4EF6\u7A0B\u5E8F\u5347\u7EA7\u6210\u529F"),
        "6002": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u786C\u4EF6\u7A0B\u5E8F\u5347\u7EA7\u5931\u8D25"),
        "6100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u8F6F\u4EF6\u7248\u672C\u53F7").concat(this.params.m),
        "7100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u786C\u4EF6\u7A0B\u5E8F\u7248\u672C\u53F7").concat(this.params.m),
        "7500": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7684\u786C\u4EF6AB\u7248\u672C\u53F7").concat(this.params.m),
        "8000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u91C7\u96C6\u67D0\u4E2A\u901A\u9053(ID=").concat(this.params.m, ")\u7684\u6CE2\u5F62"),
        "8016": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u91C7\u96C6\u67D0\u4E2A\u632F\u52A8\u901A\u9053(ID=").concat(this.params.m, ")").concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u7684\u6CE2\u5F62"),
        "8032": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u91C7\u96C6\u67D0\u4E2A\u952E\u76F8(ID=").concat(this.params.m, ")\u7684\u6CE2\u5F62"),
        "8100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u89E6\u53D1\u9ED1\u76D2\u5B50\u5B58\u50A8"),
        "8200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u5254\u9664\u6BDB\u523A"),
        "9000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u540C\u6B65\u65F6\u95F4"),
        "9001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7EE7\u7535\u56681\u5904\u4E8E\u65AD\u5F00\u62A5\u8B66\u72B6\u6001"),
        "-9001": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7EE7\u7535\u56681\u5904\u4E8E\u6B63\u5E38\u95ED\u5408\u72B6\u6001"),
        "9002": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7EE7\u7535\u56682\u5904\u4E8E\u65AD\u5F00\u62A5\u8B66\u72B6\u6001"),
        "-9002": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u7EE7\u7535\u56682\u5904\u4E8E\u6B63\u5E38\u95ED\u5408\u72B6\u6001"),
        "9003": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053\u62A5\u8B66\u706F\u5904\u4E8E\u7EA2\u8272\u62A5\u8B66\u72B6\u6001"),
        "-9003": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053\u62A5\u8B66\u706F\u5904\u4E8E\u5173\u95ED\u72B6\u6001"),
        "9004": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u72B6\u6001\u8FD0\u884C\u706F\u5904\u4E8E\u7070\u8272\u6B63\u5E38\u72B6\u6001"),
        "9005": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u72B6\u6001\u8FD0\u884C\u706F\u5904\u4E8E\u7EA2\u8272\u62A5\u8B66\u72B6\u6001"),
        "9006": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u72B6\u6001\u8FD0\u884C\u706F\u5904\u4E8E\u9EC4\u8272\u62A5\u8B66\u72B6\u6001"),
        "9007": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6309\u952E\u6E05\u9664\u62A5\u8B66"),
        "9008": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u901A\u9053").concat(this.params.m, "\u4F20\u611F\u5668\u6216\u7EBF\u7F06\u51FA\u73B0\u5F02\u5E38"),
        "-9008": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u901A\u9053").concat(this.params.m, "\u4F20\u611F\u5668\u6216\u7EBF\u7F06\u6B63\u5E38"),
        "9009": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u901A\u9053").concat(this.params.m, "\u4F20\u611F\u5668\u6216\u7EBF\u7F06\u51FA\u73B0\u5F02\u5E38"),
        "-9009": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u901A\u9053").concat(this.params.m, "\u4F20\u611F\u5668\u6216\u7EBF\u7F06\u6B63\u5E38"),
        "10000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u8FDE\u7EED\u91C7\u96C6\u67D0\u4E2A\u901A\u9053(ID=").concat(this.params.m, ")\u7684\u6CE2\u5F62").concat(this.params.n, "\u5206\u949F"),
        "11600": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u8FDE\u7EED\u91C7\u96C6\u67D0\u4E2A\u632F\u52A8\u901A\u9053(ID=").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', ")\u7684\u6CE2\u5F62").concat(this.params.n, "\u5206\u949F"),
        "12100": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u5854\u9876\u5355\u65B9\u5411\u5CF0\u503C\u89D2\u5EA6\u8D85\u8FC70.5\u5EA6"),
        "13200": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u624B\u5DE5\u8FDE\u7EED\u91C7\u96C6\u67D0\u4E2A\u952E\u76F8(ID=").concat(this.params.m, ")\u7684\u6CE2\u5F62").concat(this.params.n, "\u5206\u949F"),
        "14000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u91CF\u7A0B").concat(this.params.n, "\u81EA\u68C0\u5931\u8D25"),
        "-14000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u632F\u52A8\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getVibChNum(this.params.m) : '', "\u91CF\u7A0B").concat(this.params.n, "\u81EA\u68C0\u6B63\u5E38"),
        "15000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u91CF\u7A0B").concat(this.params.n, "\u81EA\u68C0\u5931\u8D25"),
        "-15000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u6E29\u5EA6\u901A\u9053").concat(this.params.m).concat(this.chooseDgmType == 3 ? this.getTempChNum(this.params.m) : '', "\u91CF\u7A0B\u81EA\u68C0\u6B63\u5E38"),
        "26000": "".concat(this.chooseDgmId, "\u91C7\u96C6\u5668\u87BA\u6813\u901A\u9053").concat(this.params.m, "\u8BF7\u6C42\u8D85\u65F6"),
        //tms
        "1": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u91CD\u542F"),
        "2": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u4E3B\u673A\uFF08id=").concat(pre_id, "\uFF09\u91CD\u542F"),
        "3": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u81EA\u68C0\u901A\u8FC7"),
        "4": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u4E3B\u673A\uFF08id=").concat(pre_id, "\uFF09\u81EA\u68C0\u901A\u8FC7"),
        "5": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u524D\u7F6E\u81EA\u68C0\u5931\u8D25"),
        "6": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u4E3B\u673A\uFF08id=").concat(pre_id, "\uFF09\u81EA\u68C0\u5931\u8D25"),
        "7": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u632F\u52A8\u901A\u9053").concat(index1, "\u4F20\u611F\u5668\u7EBF\u7F06\u81EA\u68C0\u5931\u8D25\uFF0C\u7535\u538B\u503C\uFF1A").concat(value1, "V"),
        "8": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u632F\u52A8\u901A\u9053").concat(index1, "\u4F20\u611F\u5668\u81EA\u68C0\u5931\u8D25\uFF0C\u7535\u538B\u503C\uFF1A").concat(value1, "V"),
        "9": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u6E29\u5EA6\u901A\u9053").concat(index1, "\u4F20\u611F\u5668\u81EA\u68C0\u5931\u8D25\uFF0C\u7535\u538B\u503C\uFF1A").concat(value1, "V"),
        "10": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u632F\u52A8\u901A\u9053").concat(index1, "\u632F\u52A8\u4FE1\u53F7\u81EA\u68C0\u5931\u8D25"),
        "11": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u5347\u7EA7\u6210\u529F"),
        "12": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u4E3B\u673A\uFF08id=").concat(pre_id, "\uFF09\u5347\u7EA7\u6210\u529F"),
        "13": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u6E29\u5EA6\u901A\u9053\u81EA\u68C0\u901A\u8FC7"),
        "14": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u524D\u7F6E\uFF08id=").concat(pre_id, "\uFF09\u632F\u52A8\u901A\u9053\u81EA\u68C0\u901A\u8FC7"),
        "15": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u4E0B\u7684\u4E3B\u673A\uFF08id=").concat(pre_id, "\uFF09SD\u5361\u81EA\u68C0\u5931\u8D25"),
        "16": "\u5217\u8F66\uFF08id=".concat(this.chooseDgmId, "\uFF09\u8C03\u8BD5\u4FE1\u606F")
      };
      return codeObj[m];
    },

    /**
     * 事件描述显示函数
     *
     * */
    descLabel: function descLabel(code, info) {
      var codeStr;
      var codeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 2017]; //tms采集器

      if (codeArr.includes(code)) {
        return this.getCode(code, info);
      }

      codeStr = this.formatInfo(code);
      return codeStr;
    },

    /**
     * 格式化语言包SystemLogErrorCode的code
     * */
    formatInfo: function formatInfo(num) {
      var tmpArr = [0, num];

      switch (num) {
        case 500:
        case 501:
        case 502:
        case -2102:
        case 2102:
        case 2017:
        case -2103:
        case 2103:
        case -2104:
        case 2104:
        case 4100:
        case -4100:
        case 4400:
        case -4400:
        case 5000:
        case 5001:
        case 5002:
        case 5003:
        case 5006:
        case 5007:
        case 5010:
        case 5011:
        case 5018:
        case 5019:
        case 5020:
        case 5021:
        case 5022:
        case 5023:
        case 5024:
        case 5030:
        case 5031:
        case 5260:
        case 5261:
        case 5262:
        case 6000:
        case 6001:
        case 6002:
        case 2012:
        case 9000:
        case 9001:
        case -9001:
        case 9002:
        case -9002:
        case 9003:
        case -9003:
        case 9004:
        case 9005:
        case 9006:
        case 9007:
        case 9008:
        case -9008:
        case 9009:
        case -9009:
        case 12100:
          tmpArr = this.subCode(num, num);
          break;

        default:
          if (num >= 1000 && num <= 1099) tmpArr = this.subCode(num, 1000, 2, 2);else if (num <= -1000 && num >= -1099) tmpArr = this.subCode(num, -2100, 3, 2);else if (num >= 1100 && num <= 1199) tmpArr = this.subCode(num, 1100, 2, 2);else if (num <= -1100 && num >= -1199) tmpArr = this.subCode(num, -1100, 3, 2);else if (num >= 2100 && num <= 2199) tmpArr = this.subCode(num, 2100, 2, 2);else if (num <= -2100 && num >= -2199) tmpArr = this.subCode(num, -2100, 3, 2);else if (num >= 2200 && num <= 2299) tmpArr = this.subCode(num, 2100, 2, 2);else if (num <= -2200 && num >= -2299) tmpArr = this.subCode(num, 2100, 3, 2);else if (num >= 2300 && num <= 2399) tmpArr = this.subCode(num, 2300, 2, 2);else if (num <= -2300 && num >= -2399) tmpArr = this.subCode(num, -2300, 3, 2);else if (num >= 2400 && num <= 2499) tmpArr = this.subCode(num, 2400, 2, 2);else if (num <= -2400 && num >= -2499) tmpArr = this.subCode(num, -2400, 3, 2);else if (num >= 2500 && num <= 2599) tmpArr = this.subCode(num, 2500, 2, 2);else if (num <= -2500 && num >= -2599) tmpArr = this.subCode(num, -2500, 3, 2);else if (num >= 3100 && num <= 3199) tmpArr = this.subCode(num, 3100, 2, 2);else if (num <= -3100 && num >= -3199) tmpArr = this.subCode(num, -3100, 3, 2);else if (num >= 3200 && num <= 3249) tmpArr = this.subCode(num, 3200, 2, 2);else if (num <= -3200 && num >= -3249) tmpArr = this.subCode(num, -3200, 3, 2);else if (num >= 3250 && num <= 3299) tmpArr = this.subCode(num, 3250, 2, 2);else if (num <= -3250 && num >= -3299) tmpArr = this.subCode(num, -3250, 3, 2);else if (num >= 3300 && num <= 3399) tmpArr = this.subCode(num, 3300, 2, 2);else if (num <= -3300 && num >= -3399) tmpArr = this.subCode(num, -3300, 3, 2);else if (num >= 3400 && num <= 3499) tmpArr = this.subCode(num, 3400, 2, 2);else if (num <= -3400 && num >= -3499) tmpArr = this.subCode(num, -3400, 3, 2);else if (num >= 3500 && num <= 3599) tmpArr = this.subCode(num, 3500, 2, 2);else if (num <= -3500 && num >= -3599) tmpArr = this.subCode(num, -3500, 3, 2);else if (num >= 3600 && num <= 3699) tmpArr = this.subCode(num, 3600, 2, 2);else if (num <= -3600 && num >= -3699) tmpArr = this.subCode(num, -3600, 3, 2);else if (num >= 3700 && num <= 3799) tmpArr = this.subCode(num, 3700, 2, 2);else if (num <= -3700 && num >= -3799) tmpArr = this.subCode(num, -3700, 3, 2);else if (num >= 3800 && num <= 3899) tmpArr = this.subCode(num, 3800, 2, 2);else if (num <= -3800 && num >= -3899) tmpArr = this.subCode(num, -3800, 3, 2);else if (num >= 3900 && num <= 3999) tmpArr = this.subCode(num, 3900, 2, 2);else if (num <= -3900 && num >= -3999) tmpArr = this.subCode(num, -3900, 3, 2);else if (num >= 4000 && num <= 4099) tmpArr = this.subCode(num, 4000, 2, 2);else if (num >= 4200 && num <= 4299) tmpArr = this.subCode(num, 4200, 2, 2);else if (num <= -4200 && num >= -4299) tmpArr = this.subCode(num, -4200, 3, 2);else if (num >= 4200 && num <= 4299) tmpArr = this.subCode(num, 4200, 2, 2);else if (num <= -3400 && num >= -3499) tmpArr = this.subCode(num, -3400, 3, 2);else if (num >= 5100 && num <= 5199) tmpArr = this.subCode(num, 5100, 2, 2);else if (num >= 5300 && num <= 5399) tmpArr = this.subCode(num, 5300, 2, 2);else if (num >= -5399 && num <= -5300) tmpArr = this.subCode(num, -5300, 3, 2);else if (num >= 5800 && num <= 5899) tmpArr = this.subCode(num, 5800, 2, 2);else if (num >= 5900 && num <= 5999) tmpArr = this.subCode(num, 5900, 2, 2);else if (num >= 6100 && num <= 6999) tmpArr = this.subCode(num, 6100, 1, 3);else if (num >= 7000 && num <= 7499) tmpArr = this.subCode(num, 7100, 1, 3);else if (num >= 7500 && num <= 7999) tmpArr = this.subCode(num - 500, 7500, 1, 3);else if (num >= 8000 && num <= 8015) tmpArr = this.subCode(num, 8000, 2, 2);else if (num >= 8016 && num <= 8031) tmpArr = this.subCode(num, 8016, 2, 2);else if (num >= 8032 && num <= 8039) tmpArr = this.subCode(num, 8032, 2, 2);else if (num >= 8100 && num <= 8199) tmpArr = this.subCode(num, 8100, 2, 2);else if (num >= 8200 && num <= 8299) tmpArr = this.subCode(num, 8200, 2, 2);else if (num >= 14000 && num <= 14999) tmpArr = this.subCode(num, 14000, 3, 2, 2, 1);else if (num <= -14000 && num >= -14999) tmpArr = this.subCode(num, -14000, 4, 2, 3, 1);else if (num >= 15000 && num <= 15999) tmpArr = this.subCode(num, 15000, 3, 2, 2, 1);else if (num <= -15000 && num >= -15999) tmpArr = this.subCode(num, -15000, 4, 2, 3, 1);else if (num >= 26000 && num <= 27999) tmpArr = this.subCode(num, 26000, 2, 3);
          break;
      }

      this.params.m = tmpArr[1];
      this.params.n = tmpArr[2];
      var codeStr = this.getCode(tmpArr[0]);

      if (codeStr.indexOf('通道') >= 0) {
        if (this.chooseDgmType == 5) {
          //2600采集器通道不加1
          this.params.m = Number(tmpArr[1]);
        } else {
          this.params.m = Number(Number(tmpArr[1]) + 1);
        }

        codeStr = this.getCode(tmpArr[0]);
      }

      return codeStr;
    },

    /**
     * 根据code 格式化数组，包含code，和截取的数字
     * @code	code
     * @returnCode	返回码
     * @startIndex	第1个替换的截取字符的开始位置
     * @len	截取字符长度
     * @secondIndex 第2个替换的截取字符的开始位置
     * @secondLen 第2个截取字符长度
     * */
    subCode: function subCode(code, returnCode, startIndex, len, secondIndex, secondLen) {
      var tmpArr = [];
      tmpArr.push(returnCode);
      var tmpCode1 = Number(code.toString().substr(startIndex, len));

      if (Math.abs(code) >= 3250 && Math.abs(code) <= 3299) {
        tmpCode1 -= 50;
      }

      if (Math.abs(code) >= 26000 && Math.abs(code) <= 27999) {
        tmpCode1 = code - 26000;
      }

      tmpArr.push(tmpCode1);
      tmpArr.push(code.toString().substr(secondIndex, secondLen));
      return tmpArr;
    },

    /**
      * 丝印 @chId 振动通道
      */
    getVibChNum: function getVibChNum(ch_id) {
      var tempStr = '';
      var tempNum = Number(ch_id - 1);
      var tValue = '';

      if (tempNum < 8) {
        tValue = (tempNum + 8) * 2 + 1;
        tempStr = "A" + tValue;
      } else if (tempNum < 16) {
        tValue = (tempNum - 8) * 2 + 1;

        if (tValue < 10) {
          tempStr = "A0" + tValue;
        } else {
          tempStr = "A" + tValue;
        }
      } else if (tempNum < 24) {
        tValue = (tempNum - 8) * 2 + 2;
        tempStr = "A" + tValue;
      } else if (tempNum < 32) {
        tValue = (tempNum - 24) * 2 + 2;

        if (tValue < 10) {
          tempStr = "A0" + tValue;
        } else {
          tempStr = "A" + tValue;
        }
      } else if (tempNum < 36) {
        tValue = tempNum - 32 + 1;
        tempStr = "IN" + tValue;
      }

      return '(' + tempStr + ')';
    },

    /**
      * 丝印 @chId 温度通道
      */
    getTempChNum: function getTempChNum(ch_id) {
      var tempStr = '';
      var tempNum = Number(ch_id - 1);
      var tValue = "";

      if (tempNum < 8) {
        tValue = (tempNum + 8) * 2 + 2;
        tempStr = "A" + tValue;
      } else if (tempNum < 16) {
        tValue = (tempNum - 8) * 2 + 2;

        if (tValue < 10) {
          tempStr = "A0" + tValue;
        } else {
          tempStr = "A" + tValue;
        }
      }

      return '(' + tempStr + ')';
    }
  }
});

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "record-content" } }, [
    _c("header", { staticClass: "myHeader-data" }, [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "div",
          { staticClass: "select-group" },
          [
            _c("span", { staticClass: "lableName" }, [_vm._v("组织：")]),
            _vm._v(" "),
            _c("treeselect", {
              staticClass: "select-header",
              attrs: {
                noOptionsText: _vm.noTips,
                multiple: false,
                options: _vm.options,
                clearable: false,
                placeholder: "请选择组织"
              },
              on: { select: _vm.currDeptChange },
              model: {
                value: _vm.chooseTid,
                callback: function($$v) {
                  _vm.chooseTid = $$v
                },
                expression: "chooseTid"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "select-group" },
          [
            _c("span", { staticClass: "lableName" }, [_vm._v("机组：")]),
            _vm._v(" "),
            _c("treeselect", {
              staticClass: "select-header",
              attrs: {
                noOptionsText: _vm.noTips,
                multiple: false,
                options: _vm.reSetMacList,
                clearable: false,
                placeholder: "请选择机组"
              },
              on: { select: _vm.currMacChange },
              model: {
                value: _vm.chooseMacId,
                callback: function($$v) {
                  _vm.chooseMacId = $$v
                },
                expression: "chooseMacId"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "select-group" },
          [
            _c("span", { staticClass: "lableName" }, [_vm._v("采集器：")]),
            _vm._v(" "),
            _c("treeselect", {
              staticClass: "select-header",
              attrs: {
                noOptionsText: _vm.noTips,
                multiple: false,
                options: _vm.reDgmList,
                clearable: false,
                placeholder: "请选择采集器"
              },
              on: { select: _vm.dgmChange },
              model: {
                value: _vm.chooseDgmId,
                callback: function($$v) {
                  _vm.chooseDgmId = $$v
                },
                expression: "chooseDgmId"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "header-time" },
          [
            _c("span", [_vm._v("时间选择：")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "datetimerange",
                "picker-options": _vm.pickerOptions,
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
                align: "right"
              },
              on: {
                change: function($event) {
                  return _vm.change()
                }
              },
              model: {
                value: _vm.timeValue,
                callback: function($$v) {
                  _vm.timeValue = $$v
                },
                expression: "timeValue"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "search-div" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.recordVal,
              expression: "recordVal"
            }
          ],
          staticClass: "record-input",
          attrs: { type: "text", placeholder: "关键字" },
          domProps: { value: _vm.recordVal },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.recordVal = $event.target.value
              },
              _vm.searchRecord
            ]
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "iconfont icon-zhongzi-sousuo search-icon",
          on: { click: _vm.searchRecord }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "headerBtn", on: { click: _vm.tableToExcel } },
        [_vm._v("导出数据")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "table_block" }, [
        _c("table", { staticClass: "index_table" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("序号")]),
              _vm._v(" "),
              _c("th", [_vm._v("时间")]),
              _vm._v(" "),
              _c("th", [_vm._v("事件描述")]),
              _vm._v(" "),
              _c(
                "th",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.chooseTroot == 2,
                      expression: "chooseTroot==2"
                    }
                  ]
                },
                [_vm._v("辅助信息")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.lastData, function(item) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(item.index))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.time))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.detail))]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.chooseTroot == 2,
                        expression: "chooseTroot==2"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(item.desc))]
                )
              ])
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
                value: _vm.noLogData,
                expression: "noLogData"
              }
            ],
            staticClass: "noData"
          },
          [_vm._v("当前机组无日志")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/viewInterface/components/record/Record.vue":
/*!********************************************************!*\
  !*** ./src/viewInterface/components/record/Record.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Record.vue?vue&type=template&id=5221e22c& */ "./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c&");
/* harmony import */ var _Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Record.vue?vue&type=script&lang=js& */ "./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Record.vue?vue&type=style&index=0&lang=scss& */ "./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/viewInterface/components/record/Record.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Record.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Record.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c&":
/*!***************************************************************************************!*\
  !*** ./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Record.vue?vue&type=template&id=5221e22c& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/record/Record.vue?vue&type=template&id=5221e22c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_5221e22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=63-4a212aa0.js.map