(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

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

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyLoading.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MyLoading",
  props: ['isLoad'],
  data: function data() {
    return {};
  },
  methods: {
    cancelLoad: function cancelLoad() {
      this.$emit('changeLoad', false);
    }
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony import */ var components_common_MyLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/MyLoading */ "./src/components/common/MyLoading.vue");
/* harmony import */ var components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/MyContentTitle */ "./src/components/common/MyContentTitle.vue");
/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
/* harmony import */ var _table_js_dgm_methods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/js/dgm_methods.js */ "./src/components/content/system/dgm/table/js/dgm_methods.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dgm",
  inject: ['reload'],
  data: function data() {
    return {
      title: '采集器设置',
      ins: 0,
      //切换按钮active
      name: 'vib',
      isAdd: false,
      isShow: false,
      chooseShow: false,
      //采集器tab
      handIsShow: false,
      //手动获取按钮是否显示
      fitBtn: {
        //拟合系数按钮
        type: 999,
        textBtn: "拟合系数",
        name: 'fitinfo',
        isDgm: true,
        isShow: true
      },
      flangeBtn: {
        //法兰设置按钮
        type: 16,
        textBtn: "螺栓设置",
        name: 'boltch',
        isDgm: true,
        isShow: true
      },
      fitBtnShow: false,
      //拟合系数按钮是否显示
      fittingInfo: [],
      //拟合系数选中的采集器信息
      fitShow: false,
      //拟合系数界面的选择文件和采集器信息按钮是否显示
      nsShow: false,
      //e821获取识别码按钮是否显现
      selectDgmInfo: {
        verShow: false,
        //获取版本信息，叶轮采集器dgu2200和dgu2000v2有
        dgm_type: "",
        dgm_id: "",
        type: "" //当前选择的type

      },
      btnData: [//按钮初始化
      {
        type: 1,
        textBtn: "采集器信息",
        name: 'dgminfo',
        isDgm: true,
        isShow: true
      }, {
        type: 22,
        textBtn: "WL9100采集器设置",
        name: 'Wl9100ch',
        isDgm: true,
        isShow: true
      }, {
        type: 20,
        textBtn: "主机设置",
        name: 'mainch',
        isDgm: true,
        isShow: true
      }, {
        type: 21,
        textBtn: "分机设置",
        name: 'slavech',
        isDgm: true,
        isShow: true
      }, {
        type: 10,
        textBtn: "前置处理器",
        name: 'prech',
        isDgm: true,
        isShow: true
      }, {
        type: 2,
        textBtn: "振动设置",
        name: 'vibch',
        isDgm: true,
        isShow: true
      }, {
        type: 3,
        textBtn: "温度设置",
        name: 'tempch',
        isDgm: true,
        isShow: true
      }, {
        type: 4,
        textBtn: "过程量设置",
        name: 'stach',
        isDgm: true,
        isShow: true
      }, {
        type: 5,
        textBtn: "转速设置",
        name: 'speedch',
        isDgm: true,
        isShow: true
      }, {
        type: 6,
        textBtn: "数字量设置",
        name: 'digch',
        isDgm: true,
        isShow: true
      }, {
        type: 7,
        textBtn: "串口设置",
        name: 'modch',
        isDgm: true,
        isShow: true
      }, // {type:8,textBtn:"工艺量设置"},
      {
        type: 9,
        textBtn: "长采样设置",
        name: 'capturech',
        isDgm: true,
        isShow: true
      }, {
        type: 11,
        textBtn: "MHD从设备",
        name: 'prinsub',
        isDgm: true,
        isShow: true
      }, // {type:12,textBtn:"连续采集",name:'collectch',isDgm: true, isShow:true},
      {
        type: 13,
        textBtn: "螺栓采集设置",
        name: 'gatherch',
        isDgm: true,
        isShow: true
      }, {
        type: 14,
        textBtn: "法兰设置",
        name: 'flangech',
        isDgm: true,
        isShow: true
      }, {
        type: 15,
        textBtn: "预处理器设置",
        name: 'prepsch',
        isDgm: true,
        isShow: true
      }, {
        type: 16,
        textBtn: "螺栓设置",
        name: 'boltch',
        isDgm: true,
        isShow: true
      }, {
        type: 17,
        textBtn: "E821从设备",
        name: 'prinsub821',
        isDgm: true,
        isShow: true
      }, {
        type: 18,
        textBtn: "外部集成设置",
        name: 'ExteInter',
        isDgm: true,
        isShow: true
      }, {
        type: 19,
        textBtn: "轨道波磨采样",
        name: 'railch',
        isDgm: true,
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
      fileContent: [],
      //拟合系数上传的文件
      tmsList: {},
      //tms的采集器列表
      selectTmsId: '',
      //选中的前置处理器的id
      select821Info: {
        master_id: '',
        slaver_id: '',
        num: ''
      },
      //e821从设备界面选中的采集器信息
      ifBtnDisabled: false,
      //按钮是否可点击
      ifGetTmsAll: false,
      //获取前置按钮是否可点击
      preText: '获取设备',
      //获取前置的点击按钮的文字
      loading: true //加载中

    };
  },
  mounted: function mounted() {
    var _this = this;

    // 在点击标题的时候放大并重新渲染表格
    this.$bus.$on('reloadtable', function () {
      if (_this.$refs.child) {
        _this.$refs.child.hot.render();
      }
    });
    this.name = this.$route.name; //刷新的时候让button 的active 正确

    this.statePage(this.name);
    var chTypeBtn = JSON.parse(sessionStorage.getItem('chTypeBtn'));

    if (chTypeBtn !== null) {
      this.btnData.forEach(function (btnInfo) {
        btnInfo.isShow = true;

        if (!chTypeBtn.includes(btnInfo.type)) {
          btnInfo.isShow = false;
        }
      });
    } else {
      this.setBtnContentPosition();
    }
  },
  watch: {
    "$route": "fetchData",
    '$store.state.customInfo': {
      handler: function handler(value, oldValue) {
        if (value) {
          if (value.chooseDgmBtn) {
            this.btnData = value.chooseDgmBtn;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    //改变loading状态，将值传给子组件
    changeLoading: function changeLoading(msg) {
      this.loading = msg;
    },
    getTmsAll: function getTmsAll() {
      //手动获取前置处理器信息
      this.ifGetTmsAll = true;
      this.preText = "获取中...";
      var that = this;

      if (this.$route.name == 'prech') {
        this.$getApi.updateTMSPre(this.selectTmsId).then(function (res) {
          that.ifGetTmsAll = false;
          that.preText = "获取设备";

          if (res.msg === 0) {
            swal({
              title: "提示",
              text: "\u83B7\u53D6\u8BBE\u5907\u6210\u529F",
              button: "确认"
            }).then(function (value) {
              that.reload();
            });
          } else if (res.msg === 4) {
            swal({
              title: "提示",
              text: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6",
              button: "确认"
            });
          }
        })["catch"](function (err) {
          that.ifGetTmsAll = false;
          that.preText = "获取设备";
          console.log('failed', err);
          swal({
            title: "提示",
            text: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6",
            button: "确认"
          });
        });
      } else {
        this.$getApi.updateTMSHost(this.selectTmsId).then(function (res) {
          that.ifGetTmsAll = false;
          that.preText = "获取设备";

          if (res.msg === 0) {
            swal({
              title: "提示",
              text: "\u83B7\u53D6\u8BBE\u5907\u6210\u529F",
              button: "确认"
            }).then(function (value) {
              that.reload();
            });
          } else if (res.msg === 4) {
            swal({
              title: "提示",
              text: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6",
              button: "确认"
            });
          }
        })["catch"](function (err) {
          that.ifGetTmsAll = false;
          that.preText = "获取设备";
          console.log('failed', err);
          swal({
            title: "提示",
            text: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6",
            button: "确认"
          });
        });
      }
    },
    getNSnum: function getNSnum() {
      var _this2 = this;

      //获取识别码
      var params = null;

      if (this.select821Info.master_id === '' || this.select821Info.slaver_id === '') {
        swal({
          title: "提示",
          text: "\u8BF7\u5148\u9009\u62E9\u8BBE\u5907",
          button: "确认"
        });
        return;
      }

      params = {
        master_id: this.select821Info.master_id,
        slaver_id: this.select821Info.slaver_id
      };
      var index = this.select821Info.num;
      this.$getApi.getNSDgmInfo(params).then(function (res) {
        if (res.msg == 0) {
          if (res.SNA != undefined && res.SNA != '') {
            _this2.$set(_this2.$refs.child.data[index].dgm, 'SNA', res.SNA);

            _this2.$set(_this2.$refs.child.changeList.changeMhd, index, _this2.$refs.child.data[index].dgm);

            _this2.$refs.child.hot.render();
          } else {
            swal({
              title: "提示",
              text: "\u83B7\u53D6\u7684\u8BC6\u522B\u7801\u4E3A\u7A7A",
              button: "确认"
            });
          }
        } else {
          swal({
            title: "提示",
            text: "\u83B7\u53D6\u7684\u8BC6\u522B\u7801\u5931\u8D25",
            button: "确认"
          });
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },

    /**
     * 收到采集波磨数据(轨道波磨)
     */
    getCorrugation: function getCorrugation() {
      var _this3 = this;

      var params = {
        dgm_type: this.selectDgmInfo.dgm_type,
        dgm_id: this.selectDgmInfo.dgm_id //采集器id

      };
      var that = this;
      network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].getCorrugationByClick(params).then(function (res) {
        if (res.msg == 0) {
          swal({
            title: "提示",
            text: "".concat(_this3.selectDgmInfo.dgm_id, "\u624B\u52A8\u91C7\u6837\u547D\u4EE4\u53D1\u9001\u6210\u529F"),
            button: "确认"
          }).then(function (value) {
            that.reload();
          });
        } else if (res.msg == 1) {
          console.log('参数为空！');
        } else if (res.msg == 2) {
          console.log('后台运行错误！');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    getDgmVersion: function getDgmVersion() {
      //获取版本信息
      var params = {
        dgm_type: this.selectDgmInfo.dgm_type,
        //只有叶轮采集器和2000V2采集器 能获取版本
        dgm_id: this.selectDgmInfo.dgm_id //采集器id

      };
      var that = this;
      network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].getDgmVersionInfo(params).then(function (res) {
        if (res.msg == 0) {
          swal({
            title: "提示",
            text: "\u83B7\u53D6\u7248\u672C\u4FE1\u606F\u6210\u529F",
            button: "确认"
          }).then(function (value) {
            that.reload();
          });
        } else if (res.msg == 1) {
          console.log('参数为空！');
        } else if (res.msg == 2) {
          console.log('后台运行错误！');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    selectFile: function selectFile(event) {
      //拟合系数上传文件
      var that = this;
      var selectedFile = {}; //当前选中的文件

      var target = event.target;
      this.fileContent = [];

      if (sessionStorage.getItem('fittingInfo')) {
        that.fittingInfo = JSON.parse(sessionStorage.getItem('fittingInfo'));
      }

      if (that.p_isIE() && !target.files) {
        var filePath = target.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        selectedFile = fileSystem.GetFile(filePath);
      } else {
        selectedFile = target.files;
      } // target.value = null;


      that.$refs.child.hot.destroy(); //清除实例

      for (var i = 0; i < selectedFile.length; i++) {
        var size = selectedFile[i].size / 1024;

        if (size > 2000) {
          swal({
            title: "提示",
            text: '附件不能大于2M',
            button: "确认"
          });
          target.value = "";
          return;
        }

        var fileName = selectedFile[i].name;
        var suffixName = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();

        if (suffixName != "csv") {
          swal({
            title: "提示",
            text: '请选择csv格式文件上传！',
            button: "确认"
          });
          target.value = "";
          return;
        }

        var reader = new FileReader(); //这是核心,读取操作就是由它完成.

        reader.readAsText(selectedFile[i]); //读取文件的内容,也可以读取文件的URL

        reader.onload = function (event) {
          //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
          // showFile();
          var datas = event.target.result;
          var rows = datas.split("\n"); //所有行

          var len = rows.length;
          var row = []; //每一行

          var dgm = {};
          var obj = {};
          that.fittingInfo.forEach(function (fit) {
            obj.dgm_id = fit.dgm_id;
            dgm = {
              dgm_id: fit.dgm_id,
              //采集器uid
              dgm_name: fit.dgm_name //采集站名称

            };

            for (var _i = 0; _i < len; _i++) {
              row = [];
              row = rows[_i].split(",");

              if (that.p_atob(row[0]) == 'standardLen') {
                dgm['fBoltLength'] = that.p_atob(row[1]);
              } else if (that.p_atob(row[0]) == 'diameter') {
                dgm['fDiameter'] = that.p_atob(row[1]);
              } else if (that.p_atob(row[0]) == 'fitting') {
                dgm[that.p_atob(row[0])] = '算法' + that.p_atob(row[1]);
              } else {
                dgm[that.p_atob(row[0])] = that.p_atob(row[1]);
              }

              obj[that.p_atob(row[0])] = that.p_atob(row[1]);
            }
          });
          that.fileContent.push(obj);
          var oriData = that.$refs.child.data;

          for (var j = 0; j < oriData.length; j++) {
            if (oriData[j].dgm.fBoltLength == dgm.fBoltLength && oriData[j].dgm.fDiameter == dgm.fDiameter) {
              that.$refs.child.data.splice(j, 1);
            }
          }

          that.$refs.child.data.push({
            dgm: dgm
          });
          that.$refs.child.filter_by_dgmName();
          that.$refs.child.renderTable();
          target.value = null; //清空避免二次点击同一文件没反应
        };
      }
    },
    chooseFile: function chooseFile() {
      document.getElementById('fileLocal').click(); //模拟点击
    },
    getTable: function getTable(name, isDgm) {
      //点击下标签的时候改变active，改变路由，刷新之后路由不变，active不变
      this.isShow = !isDgm;
      this.isAdd = false; //工况设置不可以添加

      this.selectDgmInfo.type = '';
      this.statePage(name);
    },
    add: function add() {
      return Object(_table_js_dgm_methods_js__WEBPACK_IMPORTED_MODULE_3__["addRows"])(this.$refs.child.hot, this.$refs.child.data, -1);
    },
    save: function save() {
      var _this4 = this;

      /* 保存按钮 */
      if (!this.$refs.child.changeList.isValidObj.isValidResult) {
        //单元格验证错误
        swal({
          title: "提示",
          text: '格式不正确',
          button: "确认"
        });
        return;
      }

      var changeData = this.$refs.child.changeList.changeData;
      var changeMhdData = this.$refs.child.changeList.changeMhd;
      var changeTmsData = this.$refs.child.changeList.changeTms;
      var addData = this.$refs.child.changeList.addMhd;
      var addTmsData = this.$refs.child.changeList.addTms;
      var addDefaultDgm = this.$refs.child.changeList.addDefaultDgm;
      var type = Number(this.$refs.child.type);
      var flag = this.checkPosLoc();
      var that = this;
      var typeList = [11, 17, 10, 20, 21, 13, 14, 15, 18, 999];

      if (flag && !typeList.includes(type)) {
        //修改采集器信息
        if (!$.isEmptyObject(changeData)) {
          that.ifBtnDisabled = true; //请求前按钮不可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateDgm(changeData).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                _this4.$refs.child.changeList.changeData = {};

                _this4.reload();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

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

      if (type == 11) {
        //修改mhd从设备采集器信息
        if (!$.isEmptyObject(changeMhdData)) {
          var changeMhdList = [];

          for (var i in changeMhdData) {
            if (changeMhdData[i].byName == "") {
              swal({
                title: "提示",
                text: "\u8BBE\u5907\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else if (changeMhdData[i].mhd_id == "") {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else if (changeMhdData[i].mhd_id.length !== 8) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u9700\u4E3A8\u4F4D\u6570\u5B57",
                button: "确认"
              });
              break;
            } else if (changeMhdData[i].mainMhd == "") {
              swal({
                title: "提示",
                text: "\u4E3B\u8BBE\u5907\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else {
              var obj = {};
              obj[changeMhdData[i].mainMhd] = {};
              obj[changeMhdData[i].mainMhd][changeMhdData[i].mhd_id] = {
                if_output: changeMhdData[i].if_output,
                mhd_id: changeMhdData[i].mhd_id,
                byName: changeMhdData[i].byName,
                byId: changeMhdData[i].byId
              };
              changeMhdList.push(obj);
            }
          }

          if (changeMhdList.length > 0) {
            that.ifBtnDisabled = true; //请求前按钮不可点击

            network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateMHDList(changeMhdList).then(function (res) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              if (res.msg == 0) {
                swal({
                  title: "提示",
                  text: '保存成功',
                  button: "确认"
                }).then(function (value) {
                  _this4.$refs.child.changeList.changeMhd = {};
                  _this4.$refs.child.changeList.addMhd = [];

                  _this4.reload();
                });
              } else if (res.msg == 1) {
                console.log('参数为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 2) {
                console.log('后台运行错误！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 3) {
                console.log('获取json数据时为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              }
            })["catch"](function (err) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              console.log('请求错误', err);
            });
          }
        } else if (addData.length > 0 && $.isEmptyObject(changeMhdData)) {
          swal({
            title: "提示",
            text: '信息未填写完整',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      }

      if (type == 17) {
        //修改mhd从设备采集器信息
        if (!$.isEmptyObject(changeMhdData)) {
          var _changeMhdList = [];

          for (var _i2 in changeMhdData) {
            if (changeMhdData[_i2].byName == "") {
              swal({
                title: "提示",
                text: "\u8BBE\u5907\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else if (changeMhdData[_i2].MS_id == "") {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else if (changeMhdData[_i2].MS_id.length !== 8) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u9700\u4E3A8\u4F4D\u6570\u5B57",
                button: "确认"
              });
              break;
            } else if (changeMhdData[_i2].main821 == "") {
              swal({
                title: "提示",
                text: "\u4E3B\u8BBE\u5907\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              break;
            } else if (changeMhdData[_i2].main821 == changeMhdData[_i2].MS_id) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907ID\u4E0E\u4E3B\u8BBE\u5907\u4E0D\u80FD\u91CD\u590D",
                button: "确认"
              });
              break;
            } else {
              var _obj = {};
              _obj[changeMhdData[_i2].main821] = {};
              _obj[changeMhdData[_i2].main821][changeMhdData[_i2].MS_id] = {
                SNA: changeMhdData[_i2].SNA,
                SN: changeMhdData[_i2].SN,
                updateTime: changeMhdData[_i2].updateTime,
                MS_id: changeMhdData[_i2].MS_id,
                byName: changeMhdData[_i2].byName,
                byId: changeMhdData[_i2].byId
              };

              _changeMhdList.push(_obj);
            }
          }

          if (_changeMhdList.length > 0) {
            that.ifBtnDisabled = true; //请求后按钮可点击

            network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateE821List(_changeMhdList).then(function (res) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              if (res.msg == 0) {
                swal({
                  title: "提示",
                  text: '保存成功',
                  button: "确认"
                }).then(function (value) {
                  _this4.$refs.child.changeList.changeMhd = {};
                  _this4.$refs.child.changeList.addMhd = [];

                  _this4.reload();
                });
              } else if (res.msg == 1) {
                console.log('参数为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 2) {
                console.log('后台运行错误！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 3) {
                console.log('获取json数据时为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              }
            })["catch"](function (err) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              console.log('请求错误', err);
            });
          }
        } else if (addData.length > 0 && $.isEmptyObject(changeMhdData)) {
          swal({
            title: "提示",
            text: '信息未填写完整',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      }

      if (type == 10 || type == 20 || type == 21) {
        var allPreList = this.$refs.child.tmsPreIdList; //修改前置处理器信息

        if (!$.isEmptyObject(changeTmsData)) {
          var counts = function counts(arr, value) {
            return arr.reduce(function (a, v) {
              return v === value ? a + 1 : a + 0;
            }, 0);
          };

          var preIdList = []; //设备id集合

          var preNameList = []; //设备名称集合

          var preIdCarList = {}; //同一个采集器下前置处理器车厢号集合

          var reg = new RegExp("^[0-9]*$");
          var data = this.$refs.child.data;
          data.forEach(function (item) {
            /*if(!preIdList[item.dgm.dgm_id]){
                preIdList[item.dgm.dgm_id]=[];
            }*/
            if (!preNameList[item.dgm.dgm_id]) {
              preNameList[item.dgm.dgm_id] = [];
            }

            if (!preIdCarList[item.dgm.dgm_id + '_' + item.dgm.car_id]) {
              preIdCarList[item.dgm.dgm_id + '_' + item.dgm.car_id] = [];
            }

            if (item.dgm.pre_id) {
              preIdList.push(item.dgm.pre_id);
            }

            if (item.dgm.byName) {
              preNameList.push(item.dgm.byName);
            }

            if (item.dgm.dev_id !== '') {
              preIdCarList[item.dgm.dgm_id + '_' + item.dgm.car_id].push(item.dgm.dev_id);
            }
          });
          preIdList = preIdList.concat(allPreList); //所有的

          for (var _i3 in changeTmsData) {
            if (changeTmsData[_i3].byName == "") {
              swal({
                title: "提示",
                text: "\u8BBE\u5907\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (changeTmsData[_i3].dgm_id == "") {
              swal({
                title: "提示",
                text: "\u91C7\u96C6\u5668\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (changeTmsData[_i3].host_id == "") {
              swal({
                title: "提示",
                text: "\u6240\u5C5E\u4E3B\u673A\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (changeTmsData[_i3].ch_class == "" && type != 10) {
              swal({
                title: "提示",
                text: "\u7ED1\u5B9A\u8F66\u53A2\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (!reg.test(changeTmsData[_i3].pre_id)) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u9700\u4E3A8\u4F4D\u6570\u5B57",
                button: "确认"
              });
              return;
            } else if (changeTmsData[_i3].pre_id.length !== 8) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id\u9700\u4E3A8\u4F4D\u6570\u5B57",
                button: "确认"
              });
              return;
            }

            if (counts(preIdList, changeTmsData[_i3].pre_id) > 1) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907id".concat(changeTmsData[_i3].pre_id, "\u91CD\u540D"),
                button: "确认"
              });
              return;
            }

            if (counts(preNameList, changeTmsData[_i3].byName) > 1) {
              swal({
                title: "提示",
                text: "\u8BBE\u5907\u540D\u79F0\u91CD\u590D",
                button: "确认"
              });
              return;
            } //一个车厢暂时只有四个前置处理器，车厢与前置对应关系不能重复


            if (counts(preIdCarList[changeTmsData[_i3].dgm_id + '_' + changeTmsData[_i3].car_id], changeTmsData[_i3].dev_id) > 1) {
              swal({
                title: "提示",
                text: "\u8F66\u53A2\u53F7\u548C\u8BBE\u5907\u53F7\u8BBE\u7F6E\u91CD\u590D",
                button: "确认"
              });
              return;
            }
          }

          if (!$.isEmptyObject(changeTmsData)) {
            that.ifBtnDisabled = true; //请求后按钮可点击

            if (type == 10) {
              network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateTMSList(changeTmsData).then(function (res) {
                that.ifBtnDisabled = false; //请求后按钮可点击

                if (res.msg == 0) {
                  swal({
                    title: "提示",
                    text: '保存成功',
                    button: "确认"
                  }).then(function (value) {
                    _this4.$refs.child.changeList.changeTms = {};
                    _this4.$refs.child.changeList.addTms = [];

                    _this4.reload();
                  });
                } else if (res.msg == 1) {
                  console.log('参数为空！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                } else if (res.msg == 2) {
                  console.log('后台运行错误！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                } else if (res.msg == 3) {
                  console.log('获取json数据时为空！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                }
              })["catch"](function (err) {
                that.ifBtnDisabled = false; //请求后按钮可点击

                console.log('请求错误', err);
              });
            } else {
              network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].createTMSHost(changeTmsData).then(function (res) {
                that.ifBtnDisabled = false; //请求后按钮可点击

                if (res.msg == 0) {
                  swal({
                    title: "提示",
                    text: '保存成功',
                    button: "确认"
                  }).then(function (value) {
                    _this4.$refs.child.changeList.changeTms = {};
                    _this4.$refs.child.changeList.addTms = [];

                    _this4.reload();
                  });
                } else if (res.msg == 1) {
                  console.log('参数为空！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                } else if (res.msg == 2) {
                  console.log('后台运行错误！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                } else if (res.msg == 3) {
                  console.log('获取json数据时为空！');
                  swal({
                    title: "提示",
                    text: '保存失败',
                    button: "确认"
                  });
                }
              })["catch"](function (err) {
                that.ifBtnDisabled = false; //请求后按钮可点击

                console.log('请求错误', err);
              });
            }
          }
        } else if (addTmsData.length > 0 && $.isEmptyObject(changeTmsData)) {
          swal({
            title: "提示",
            text: '信息未填写完整',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      }

      if (type == 13) {
        if (!$.isEmptyObject(changeData)) {
          that.ifBtnDisabled = true; //请求后按钮可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoltConfig(changeData).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                _this4.$refs.child.changeList.changeData = {}; // this.$router.go(0)

                _this4.reload();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

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

      if (flag && type == 14) {
        if (!$.isEmptyObject(changeData)) {
          that.ifBtnDisabled = true; //请求后按钮可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoltFlange(changeData).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                _this4.$refs.child.changeList.changeData = {}; // this.$router.go(0)

                _this4.reload();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

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

      if (type == 15) {
        //修改预处理器信息
        if (!$.isEmptyObject(changeData)) {
          var _counts = function _counts(arr, value) {
            return arr.reduce(function (a, v) {
              return v === value ? a + 1 : a + 0;
            }, 0);
          };

          var _preIdList = {}; //前置处理器id集合

          var _preNameList = {}; //前置处理器名称集合

          var _data = this.$refs.child.data;

          for (var _i4 = 0; _i4 < _data.length; _i4++) {
            var item = _data[_i4];

            if (item.dgm.byName == "") {
              swal({
                title: "提示",
                text: "\u9884\u5904\u7406\u5668\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (item.dgm.dgm_id == "") {
              swal({
                title: "提示",
                text: "\u91C7\u96C6\u5668\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            } else if (item.dgm.preps_id == "") {
              swal({
                title: "提示",
                text: "\u9884\u5904\u7406\u5668id\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return;
            }

            if (!_preIdList[item.dgm.dgm_id]) {
              _preIdList[item.dgm.dgm_id] = [];
            }

            if (!_preNameList[item.dgm.dgm_id]) {
              _preNameList[item.dgm.dgm_id] = [];
            }

            if (item.dgm.preps_id) {
              _preIdList[item.dgm.dgm_id].push(item.dgm.preps_id);
            }

            if (item.dgm.byName) {
              _preNameList[item.dgm.dgm_id].push(item.dgm.byName);
            }
          }

          for (var _i5 in changeData) {
            if (_counts(_preIdList[changeData[_i5].dgm_id], changeData[_i5].preps_id) > 1) {
              swal({
                title: "提示",
                text: "\u9884\u5904\u7406\u5668id\u91CD\u540D",
                button: "确认"
              });
              return;
            }

            if (_counts(_preNameList[changeData[_i5].dgm_id], changeData[_i5].byName) > 1) {
              swal({
                title: "提示",
                text: "\u9884\u5904\u7406\u5668\u540D\u79F0\u91CD\u590D",
                button: "确认"
              });
              return;
            }
          }

          if (!$.isEmptyObject(changeData)) {
            that.ifBtnDisabled = true; //请求后按钮可点击

            network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoltPreprocessor(changeData).then(function (res) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              if (res.msg == 0) {
                swal({
                  title: "提示",
                  text: '保存成功',
                  button: "确认"
                }).then(function (value) {
                  _this4.$refs.child.changeList.changeData = {};

                  _this4.reload();
                });
              } else if (res.msg == 1) {
                console.log('参数为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 2) {
                console.log('后台运行错误！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              } else if (res.msg == 3) {
                console.log('获取json数据时为空！');
                swal({
                  title: "提示",
                  text: '保存失败',
                  button: "确认"
                });
              }
            })["catch"](function (err) {
              that.ifBtnDisabled = false; //请求后按钮可点击

              console.log('请求错误', err);
            });
          }
        } else {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }
      }

      if (type == 999) {
        if (this.fileContent.length !== 0) {
          that.ifBtnDisabled = true; //请求后按钮可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoltFitting(this.fileContent).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

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

      if (flag && type == 18) {
        if ($.isEmptyObject(changeData) && addDefaultDgm.length === 0) {
          swal({
            title: "提示",
            text: '保存成功',
            button: "确认"
          });
        }

        if (!$.isEmptyObject(changeData)) {
          that.ifBtnDisabled = true; //请求后按钮可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].updateDgm(changeData).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                _this4.$refs.child.changeList.changeData = {};

                _this4.reload();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            console.log('请求错误', err);
          });
        }

        if (addDefaultDgm.length !== 0) {
          that.ifBtnDisabled = true; //请求后按钮可点击

          network_getApi__WEBPACK_IMPORTED_MODULE_2__["default"].addDefaultChannel(addDefaultDgm).then(function (res) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            if (res.msg == 0) {
              swal({
                title: "提示",
                text: '保存成功',
                button: "确认"
              }).then(function (value) {
                _this4.$refs.child.changeList.addDefaultDgm = [];

                _this4.reload();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            } else if (res.msg == 3) {
              console.log('获取json数据时为空！');
              swal({
                title: "提示",
                text: '保存失败',
                button: "确认"
              });
            }
          })["catch"](function (err) {
            that.ifBtnDisabled = false; //请求后按钮可点击

            console.log('请求错误', err);
          });
        }
      }
    },
    updateIsShow: function updateIsShow(type, isDgm) {
      for (var i = 0; i < this.btnData.length; i++) {
        if (this.btnData[i].type == type) {
          this.isShow = !isDgm; //是否存在该设备

          /* 存储这个值，keep-active,组件不刷新，下次点击的时候取该值 */

          this.btnData[i].isDgm = isDgm;
        }
      }
    },
    checkPosLoc: function checkPosLoc() {
      var data = this.$refs.child.data;
      var type = this.$refs.child.type;
      var posLocList = {}; //安装位置集合

      var dgmNameList = []; //采集器名称集合

      var chNameList = {}; //不同采集器通道名集合

      var railChList = {}; //不同前置处理器轨道波磨通道列表

      var counts = function counts(arr, value) {
        return arr.reduce(function (a, v) {
          return v === value ? a + 1 : a + 0;
        }, 0);
      };

      var len = data.length;

      if (type == 1) {
        for (var i = 0; i < len; i++) {
          var item = data[i];

          if (item.dgm.dgm_name == '' || item.dgm.dgm_name == null) {
            swal({
              title: "提示",
              text: '采集器名称不能为空',
              button: "确认"
            });
            return false;
          }
          /*else if(item.dgm.dgm_type==7 && (item.dgm.mvb_car_id===''|| item.dgm.mvb_car_id===undefined || item.dgm.mvb_car_id===null)){
              swal({
                  title: "提示",
                  text: `TMU采集器${item.dgm.dgm_id}的mvb所在车厢号不能为空`,
                  button: "确认",
              });
              return false;
          }*/
          else {
              dgmNameList.push(item.dgm.dgm_name);
            }
        }

        var arrNum = this.getRepeatNum(dgmNameList);

        for (var _i6 in arrNum) {
          if (arrNum[_i6] > 1) {
            swal({
              title: "提示",
              text: "\u91C7\u96C6\u5668\u540D\u79F0:'".concat(_i6, "'\u91CD\u590D"),
              button: "确认"
            });
            return false;
          }
        }

        return true;
      } else if (type == 2 || type == 3) {
        for (var _i7 = 0; _i7 < len; _i7++) {
          var _item = data[_i7];

          if (_item.dgm.ch_name == '' || _item.dgm.ch_name == null) {
            swal({
              title: "提示",
              text: '通道名称不能为空',
              button: "确认"
            });
            return false;
          } else {
            if (_item.dgm.dgm_type == 7 && !railChList[_item.dgm.pre_id]) {
              railChList[_item.dgm.pre_id] = [];
            }

            if (_item.dgm.dgm_type == 7 && !chNameList[_item.dgm.host_id]) {
              chNameList[_item.dgm.host_id] = [];
            }

            if (!chNameList[_item.dgm.dgm_id] && _item.dgm.dgm_type != 7) {
              chNameList[_item.dgm.dgm_id] = [];
            }

            if (_item.dgm.dgm_type == 7 && _item.dgm.if_activity == 1) {
              railChList[_item.dgm.pre_id].push(_item);
            }

            if (_item.dgm.dgm_type == 7) {
              chNameList[_item.dgm.host_id].push(_item.dgm.ch_name);
            } else {
              chNameList[_item.dgm.dgm_id].push(_item.dgm.ch_name);
            }
          }

          if (_item.dgm.pos_class == 4) {
            if (!posLocList[_item.dgm.dgm_id]) {
              posLocList[_item.dgm.dgm_id] = [];
            }

            posLocList[_item.dgm.dgm_id].push(_item.dgm.pos_loc);
          }
        }

        for (var key in posLocList) {
          var posLocResult = posLocList[key];
          var pos15 = counts(posLocResult, '15');
          var pos16 = counts(posLocResult, '16');
          var pos17 = counts(posLocResult, '17');
          var pos18 = counts(posLocResult, '18');
          var pos24 = counts(posLocResult, '24');
          var pos25 = counts(posLocResult, '25');
          var pos45 = counts(posLocResult, '45');
          var pos46 = counts(posLocResult, '46');
          var pos47 = counts(posLocResult, '47');
          var pos48 = counts(posLocResult, '48');
          var pos49 = counts(posLocResult, '49');
          var pos50 = counts(posLocResult, '50');
          var pos51 = counts(posLocResult, '51');
          var pos52 = counts(posLocResult, '52');
          var pos53 = counts(posLocResult, '53');
          var pos54 = counts(posLocResult, '54');
          var posEmpty = counts(posLocResult, '');

          if (pos15 > 1 || pos16 > 1 || pos17 > 1 || pos18 > 1 || pos24 > 1 || pos25 > 1 || pos45 > 1 || pos46 > 1 || pos47 > 1 || pos48 > 1 || pos49 > 1 || pos50 > 1 || pos51 > 1 || pos52 > 1 || pos53 > 1 || pos54 > 1) {
            swal({
              title: "提示",
              text: '塔筒的安装位置不能重复设置',
              button: "确认"
            });
            return false;
          }

          if (pos15 != pos16 || pos17 != pos18 || pos24 != pos25 || pos45 != pos46 || pos47 != pos48 || pos49 != pos50 || pos51 != pos52 || pos53 != pos54) {
            swal({
              title: "提示",
              text: '塔筒的安装位置必须为机舱、塔顶、塔筒或塔底的X、Y成对设置',
              button: "确认"
            });
            return false;
          }

          if (posEmpty > 0) {
            swal({
              title: "提示",
              text: '塔筒的安装位置不能为空',
              button: "确认"
            });
            return false;
          }
        }

        for (var _key in chNameList) {
          var chNameResult = chNameList[_key];

          var _arrNum = this.getRepeatNum(chNameResult);

          for (var _i8 in _arrNum) {
            if (_arrNum[_i8] > 1) {
              // console.log(key)
              console.log(chNameList[_key]);
              swal({
                title: "提示",
                text: "\u901A\u9053\u540D\u79F0:'".concat(_i8, "'\u91CD\u590D"),
                button: "确认"
              });
              return false;
            }
          }
        }

        for (var _key2 in railChList) {
          var chRailChList = railChList[_key2];

          if (chRailChList.length) {
            console.log(chRailChList[0]);
            var maxRailChNum = chRailChList[0].dgm.maxChannelSize;

            if (chRailChList.length > maxRailChNum) {
              swal({
                title: "提示",
                text: "\u524D\u7F6E".concat(_key2, "\u4E0B\u7684\u8F68\u9053\u6CE2\u78E8\u6570\u91CF\u4E0D\u5F97\u5927\u4E8E").concat(maxRailChNum),
                button: "确认"
              });
              return false;
            }
          }
        }

        return true;
      } else if (type == 4 || type == 5 || type == 6 || type == 7 || type == 18) {
        var _len = data.length;

        for (var _i9 = 0; _i9 < _len; _i9++) {
          var _item2 = data[_i9];

          if (_item2.dgm.ch_name == '' || _item2.dgm.ch_name == null) {
            swal({
              title: "提示",
              text: '通道名称不能为空',
              button: "确认"
            });
            return false;
          } else {
            if (!chNameList[_item2.dgm.dgm_id]) {
              chNameList[_item2.dgm.dgm_id] = [];
            }

            chNameList[_item2.dgm.dgm_id].push(_item2.dgm.ch_name);
          }
        }

        for (var _key3 in chNameList) {
          var _chNameResult = chNameList[_key3];

          var _arrNum2 = this.getRepeatNum(_chNameResult);

          for (var _i10 in _arrNum2) {
            if (_arrNum2[_i10] > 1) {
              swal({
                title: "提示",
                text: "\u901A\u9053\u540D\u79F0:'".concat(_i10, "'\u91CD\u590D"),
                button: "确认"
              });
              return false;
            }
          }
        }

        return true;
      } else if (type == 14) {
        for (var _i11 = 0; _i11 < len; _i11++) {
          var _item3 = data[_i11];

          if (_item3.dgm.byName == '' || _item3.dgm.byName == null) {
            swal({
              title: "提示",
              text: '法兰名称不能为空',
              button: "确认"
            });
            return false;
          }

          if (_item3.dgm.pos_loc == '' || _item3.dgm.pos_loc == null) {
            swal({
              title: "提示",
              text: '安装位置不能为空',
              button: "确认"
            });
            return false;
          }
          /*if(item.dgm.pos_class2600==4){
              if(!posLocList[item.dgm.dgm_id]){
                  posLocList[item.dgm.dgm_id]=[]
              }
              posLocList[item.dgm.dgm_id].push(item.dgm.pos_loc)
          }*/

        }
        /*for(let key in posLocList ){
            let posLocResult = posLocList[key];
            let pos31 = counts(posLocResult,'31');
            let pos32 = counts(posLocResult,'32');
            let pos33 = counts(posLocResult,'33');
            let pos34 = counts(posLocResult,'34');
            let pos35 = counts(posLocResult,'35');
            let pos36 = counts(posLocResult,'36');
            let pos37 = counts(posLocResult,'37');
            let pos38 = counts(posLocResult,'38');
            let posEmpty = counts(posLocResult,'');
             if(pos31 > 1 || pos32 > 1 || pos33 > 1 || pos34 > 1 || pos35 >1 || pos36 >1 || pos37 >1 || pos38 >1)
            {
                swal({
                    title: "提示",
                    text: '塔筒的安装位置不能重复设置',
                    button: "确认",
                });
                return false
            }
             if((pos31 != pos32) || (pos33 != pos34) || (pos35 != pos36) || (pos37 != pos38))
            {
                swal({
                    title: "提示",
                    text: '塔筒的安装位置必须成对设置',
                    button: "确认",
                });
                return false
            }
             if(posEmpty>0){
                swal({
                    title: "提示",
                    text: '塔筒的安装位置不能为空',
                    button: "确认",
                });
                return false
            }
        }*/


        return true;
      } else if (type == 19) {
        for (var _i12 = 0; _i12 < len; _i12++) {
          var _item4 = data[_i12];

          if (_item4.dgm.oneway_time == '' || _item4.dgm.oneway_time == null) {
            swal({
              title: "提示",
              text: '单程时间不能为空',
              button: "确认"
            });
            return false;
          }
        }

        return true;
      } else {
        return true;
      }
    },
    getRepeatNum: function getRepeatNum(arr) {
      return arr.reduce(function (prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
      }, {});
    },
    chooseBtn: function chooseBtn(e) {
      if (e.target.className == "top-btn") {
        this.chooseShow = !this.chooseShow;
      } else {
        this.chooseShow = false;
      }
    },

    /* 鼠标移动之后 */
    mouseUp: function mouseUp(e) {
      var btnContent = $('.btn-content').position();
      var leftVal = btnContent.left;

      if (leftVal < 40) {
        this.leftClass = {
          "left-btn": true,
          "active": true,
          "disable": false
        };
        this.rightClass = {
          "right-btn": true,
          "active": false
        };
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

      this.$forceUpdate();
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
      var num;
      var that = this;
      var btnContent = $('.btn-content').position();
      var btnConWidth = $('.btn-content').width();
      this.btnData.forEach(function (item, index) {
        if (item.name == that.name) {
          num = index;
        }
      });

      if (btnContent != undefined) {
        var leftVal = 60;

        if (btnConWidth >= 1000 && num >= 10) {
          leftVal = 60 - 50 * num;
          $('.btn-content').css('left', leftVal);
        }

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
    },

    /**
     *	每个界面按钮的状态
     */
    statePage: function statePage(name) {
      var _this5 = this;

      var type = 10;

      if (name == "prech") {
        type = 10;
      } else if (name == "mainch") {
        type = 20;
      } else if (name == "slavech") {
        type = 21;
      }

      switch (name) {
        case "prinsub":
        case "flangech":
        case "prepsch":
          this.isAdd = true;
          this.fitShow = false;
          this.nsShow = false;
          this.handIsShow = false;
          this.isShow = false;
          this.selectDgmInfo.verShow = false;
          sessionStorage.removeItem('fittingInfo');
          break;

        case "prinsub821":
          this.nsShow = true;
          this.isAdd = true;
          this.handIsShow = false;
          this.fitShow = false;
          this.selectDgmInfo.verShow = false;
          sessionStorage.removeItem('fittingInfo');
          break;

        case "prech":
        case "mainch":
        case "slavech":
          this.nsShow = false;
          this.isAdd = true;
          this.handIsShow = true;
          this.fitShow = false;
          this.selectDgmInfo.verShow = false;
          this.$getApi.queryModelByType(type, this.$store.state.tids).then(function (res) {
            _this5.tmsList = {};
            var tmsInfo = res.tmsDgmInfo;

            if (tmsInfo && tmsInfo.length) {
              _this5.selectTmsId = tmsInfo[0].dgm_id;
              tmsInfo.forEach(function (tms) {
                _this5.$set(_this5.tmsList, tms.dgm_id, tms.dgm_name);
              });
            } else {
              _this5.$emit("child-msg", _this5.type, false);
            }
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
          sessionStorage.removeItem('fittingInfo');
          break;

        case "fitInfo":
          this.nsShow = false;
          this.fitShow = true;
          this.fitBtnShow = false;
          this.selectDgmInfo.verShow = false;
          break;

        case "boltch":
          this.nsShow = false;
          this.fitBtnShow = true;
          this.fitShow = false;
          this.selectDgmInfo.verShow = false;
          sessionStorage.removeItem('fittingInfo');
          break;

        case "ExteInter":
          this.isAdd = true;
          this.nsShow = false;
          this.handIsShow = false;
          this.fitShow = false;
          this.fitBtnShow = false;
          this.selectDgmInfo.verShow = false;
          sessionStorage.removeItem('fittingInfo');
          break;

        default:
          this.nsShow = false;
          this.isAdd = false;
          this.handIsShow = false;
          this.fitShow = false;
          this.fitBtnShow = false;
          this.selectDgmInfo.verShow = false;
          sessionStorage.removeItem('fittingInfo');
          break;
      }

      ;
    },

    /**
     *	浏览器及版本信息
     */
    p_browser: function p_browser() {
      var userAgent = navigator.userAgent.toLowerCase();
      var t_browser = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
      };
      return t_browser;
    },

    /**
     * 判断是否为IE浏览器
     */
    p_isIE: function p_isIE() {
      var t_browser = this.p_browser();
      return t_browser.msie;
    },

    /**
     * Base64编码
     * @param value
     * @returns {string}
     */
    p_btoa: function p_btoa(value) {
      var b64_code = window.btoa(encodeURIComponent(value));
      return b64_code;
    },

    /**
     *  Base64解码
     * @param b64_code
     * @returns {string}
     */
    p_atob: function p_atob(b64_code) {
      var value = decodeURIComponent(window.atob(b64_code));
      return value;
    },
    fetchData: function fetchData() {
      if (this.$route.name == 'dgminfo') {
        this.nsShow = false;
        this.isAdd = false;
        this.handIsShow = false;
        this.fitShow = false;
        this.fitBtnShow = false;
        this.selectDgmInfo.verShow = false;
        sessionStorage.removeItem('fittingInfo');
      }
    }
  },
  components: {
    MyContentTitle: components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyLoading: components_common_MyLoading__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isLoad,
            expression: "isLoad"
          }
        ],
        staticClass: "loadingBlock"
      },
      [
        _c("div", { attrs: { id: "loading-center" } }, [
          _c(
            "div",
            {
              ref: "loadingAbsolute",
              attrs: { id: "loading-center-absolute" }
            },
            [
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "object" }),
              _vm._v(" "),
              _c("div", { staticClass: "loadfont" }, [
                _vm._v("页面加载中,可"),
                _c("a", { on: { click: _vm.cancelLoad } }, [_vm._v("取消")])
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dgms-content" },
    [
      _c("my-content-title", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "myContentCenter" } }, [
        _c(
          "div",
          { staticClass: "myTable", attrs: { id: "myTable" } },
          [
            _c("input", {
              staticClass: "input-loc-file",
              attrs: {
                name: "fileLocal",
                id: "fileLocal",
                type: "file",
                multiple: "multiple"
              },
              on: {
                change: function($event) {
                  return _vm.selectFile($event)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "router-link",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.fitBtnShow,
                    expression: "fitBtnShow"
                  }
                ],
                staticClass: "my-btn-a btn-active btn6",
                attrs: { to: { path: _vm.fitBtn.name } },
                on: {
                  click: function($event) {
                    return _vm.getTable(_vm.fitBtn.name, _vm.fitBtn.isDgm)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.fitBtn.textBtn))]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.fitShow,
                    expression: "fitShow"
                  }
                ],
                staticClass: "my-btn-a btn-active btn7",
                attrs: { to: { path: _vm.flangeBtn.name } },
                nativeOn: {
                  click: function($event) {
                    return _vm.getTable(_vm.flangeBtn.name, _vm.flangeBtn.isDgm)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.flangeBtn.textBtn))]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.handIsShow && !_vm.isShow,
                    expression: "handIsShow && !isShow"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectTmsId,
                    expression: "selectTmsId"
                  }
                ],
                staticClass: "my-btn btn-active btn8",
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
                    _vm.selectTmsId = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.tmsList, function(val, key) {
                return _c("option", { domProps: { value: key } }, [
                  _vm._v(_vm._s(val))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.nsShow,
                    expression: "nsShow"
                  }
                ],
                staticClass: "my-btn btn-active btn7",
                on: {
                  click: function($event) {
                    return _vm.getNSnum()
                  }
                }
              },
              [_vm._v("获取识别码")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.fitShow,
                    expression: "fitShow"
                  }
                ],
                staticClass: "my-btn btn-active btn6",
                attrs: { id: "getFile" },
                on: {
                  click: function($event) {
                    return _vm.chooseFile()
                  }
                }
              },
              [_vm._v("选择文件")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.handIsShow && !_vm.isShow,
                    expression: "handIsShow && !isShow"
                  }
                ],
                staticClass: "my-btn btn-active btn7",
                attrs: { disabled: _vm.ifGetTmsAll },
                on: { click: _vm.getTmsAll }
              },
              [_vm._v(_vm._s(_vm.preText))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isAdd && !_vm.isShow,
                    expression: "isAdd && !isShow"
                  }
                ],
                staticClass: "my-btn blue-btn btn6",
                on: { click: _vm.add }
              },
              [_vm._v("新建设备")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectDgmInfo.verShow,
                    expression: "selectDgmInfo.verShow"
                  }
                ],
                staticClass: "my-btn btn-active btn6",
                on: { click: _vm.getDgmVersion }
              },
              [_vm._v("获取版本信息")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectDgmInfo.type == 19,
                    expression: "selectDgmInfo.type==19"
                  }
                ],
                staticClass: "my-btn btn-active btn6",
                on: { click: _vm.getCorrugation }
              },
              [_vm._v("手动波磨采样")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "my-btn btn-active btn3",
                attrs: { disabled: _vm.ifBtnDisabled },
                on: { click: _vm.save }
              },
              [_vm._v("保存设置")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { id: "tableContent" } },
              [
                _c("router-view", {
                  ref: "child",
                  on: { "child-msg": _vm.updateIsShow },
                  nativeOn: {
                    click: function($event) {
                      return _vm.chooseBtn($event)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.isShow
                  ? _c(
                      "div",
                      { staticClass: "noData", attrs: { id: "noData" } },
                      [_vm._v("系统中没有该通道的设备!")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("my-loading", {
                  attrs: { isLoad: _vm.loading },
                  on: {
                    changeLoad: function($event) {
                      return _vm.changeLoading($event)
                    }
                  }
                })
              ],
              1
            ),
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
                    },
                    mouseup: function($event) {
                      return _vm.mouseUp($event)
                    }
                  }
                },
                _vm._l(_vm.btnData, function(btn, index) {
                  return _c(
                    "router-link",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: btn.isShow,
                          expression: "btn.isShow"
                        }
                      ],
                      key: btn.type,
                      staticClass: "con-dgm-btn",
                      attrs: { to: { path: btn.name } },
                      nativeOn: {
                        click: function($event) {
                          return _vm.getTable(btn.name, btn.isDgm)
                        }
                      }
                    },
                    [_vm._v(_vm._s(btn.textBtn))]
                  )
                }),
                1
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
          ],
          1
        )
      ])
    ],
    1
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

/***/ "./src/components/common/MyLoading.vue":
/*!*********************************************!*\
  !*** ./src/components/common/MyLoading.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true& */ "./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true&");
/* harmony import */ var _MyLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyLoading.vue?vue&type=script&lang=js& */ "./src/components/common/MyLoading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css& */ "./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a0d74bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/MyLoading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/MyLoading.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/common/MyLoading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyLoading.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--2-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=style&index=0&id=3a0d74bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_style_index_0_id_3a0d74bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/common/MyLoading.vue?vue&type=template&id=3a0d74bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyLoading_vue_vue_type_template_id_3a0d74bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/content/system/dgm/Dgm.vue":
/*!***************************************************!*\
  !*** ./src/components/content/system/dgm/Dgm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dgm.vue?vue&type=template&id=661629eb& */ "./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb&");
/* harmony import */ var _Dgm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dgm.vue?vue&type=script&lang=js& */ "./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dgm.vue?vue&type=style&index=0&lang=scss& */ "./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dgm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/system/dgm/Dgm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Dgm.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Dgm.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb&":
/*!**********************************************************************************!*\
  !*** ./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Dgm.vue?vue&type=template&id=661629eb& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/dgm/Dgm.vue?vue&type=template&id=661629eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Dgm_vue_vue_type_template_id_661629eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=32-eefe9829.js.map