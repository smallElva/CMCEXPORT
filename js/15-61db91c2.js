(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony import */ var components_common_MyLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/MyLoading */ "./src/components/common/MyLoading.vue");
/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/js/mac_methods.js */ "./src/components/content/system/machine/table/js/mac_methods.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "machinetable",
  inject: ['reload'],
  data: function data() {
    return {
      title: '机组设置',
      addBtnName: '新建机组',
      ins: '',
      //切换按钮active
      name: 'VibMac',
      isAdd: false,
      isShow: false,
      btnName: "切换树状图",
      btnData: [//按钮初始化
      {
        type: 1,
        textBtn: "基本设置-风电",
        name: 'VibMac',
        isShow: false
      }, {
        type: 5,
        textBtn: "基本设置-工业设备",
        name: 'CementMac',
        isShow: false
      }, {
        type: 6,
        textBtn: "基本设置-走行部",
        name: 'RailMac',
        isShow: false
      }, {
        type: 7,
        textBtn: "基本设置-油气井",
        name: 'OilMac',
        isShow: false
      }, {
        type: 9,
        textBtn: "基本设置-通用",
        name: 'CommonMac',
        isShow: false
      }, {
        type: 2,
        textBtn: "工况设置",
        name: 'Condition',
        isShow: true
      }, {
        type: 3,
        textBtn: "工业设备子级设置",
        name: 'Pump',
        isShow: false
      }, {
        type: 8,
        textBtn: "车厢设置",
        name: 'Car',
        isShow: false
      }, {
        type: 10,
        textBtn: "通用子级设置",
        name: 'ComsonMac',
        isShow: false
      }, {
        type: 4,
        textBtn: "线路设置",
        name: 'RailLine',
        isShow: false
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
      obj: {
        name: '',
        chName: '',
        flag: false,
        treeBtn: false
      },
      saveDisabled: false,
      //保存按钮是否可点击
      sameName: '',
      //（机组/机泵/子级/车厢。。。）同名的名称
      loading: true //加载中

    };
  },
  watch: {
    '$store.state.customInfo': {
      handler: function handler(value, oldValue) {
        if (value) {
          if (value.chooseMacBtn) {
            this.btnData = value.chooseMacBtn;
          }
        }
      },
      deep: true,
      immediate: true
    }
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
    this.getTroot();
    this.setBtnContentPosition();
  },
  methods: {
    //改变loading状态，将值传给子组件
    changeLoading: function changeLoading(msg) {
      this.loading = msg;
    },
    getTroot: function getTroot() {
      var tRoot = JSON.parse(sessionStorage.getItem('tRootList')); //组织类型集合，用来判断机组设置界面显示哪些内容，以及默认打开什么界面;

      var vibType = [1, 2]; //风电系统

      var cementType = [5, 2, 3]; //水泥系统

      var RailType = [6, 2, 8, 4]; //轨交系统

      var OilType = [7, 2]; //油气井系统

      var ComType = [2, 9, 10]; //通用系统

      if (tRoot && tRoot.length) {
        this.btnData.forEach(function (btn) {
          if (tRoot.includes(0) && vibType.includes(btn.type)) {
            btn.isShow = true;
          }

          if (tRoot.includes(1) && cementType.includes(btn.type)) {
            btn.isShow = true;
          }

          if (tRoot.includes(2) && RailType.includes(btn.type)) {
            btn.isShow = true;
          }

          if (tRoot.includes(3) && OilType.includes(btn.type)) {
            btn.isShow = true;
          }

          if (tRoot.includes(-1) && ComType.includes(btn.type)) {
            btn.isShow = true;
          }
        });
      } else {
        this.btnData.forEach(function (btn) {
          btn.isShow = true;
        });
      }
    },
    getTable: function getTable(name) {
      //点击下标签的时候改变active，改变路由，刷新之后路由不变，active不变，点击左边测点设置 active会有问题
      this.isAdd = false; //工况设置不可以添加

      this.obj = {
        name: name,
        flag: false
      };
      this.statePage(name); // this.$refs.child.$store.commit('setTreeMac', []);
    },
    add: function add() {
      return Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["addRows"])(this.$refs.child.hot, this.$refs.child.data, -1);
    },
    save: function save() {
      var _this2 = this;

      /* 保存按钮 */
      if (!this.$refs.child.changeList.isValidResult) {
        //单元格验证错误
        swal({
          title: "提示",
          text: '格式不正确',
          button: "确认"
        });
        return;
      }

      var changeData = this.$refs.child.changeList.changeData;
      var changeConData = this.$refs.child.changeList.changeConData;
      var addData = this.$refs.child.changeList.addData;
      var type = this.$refs.child.type;
      var that = this;

      if ($.isEmptyObject(changeData) && $.isEmptyObject(addData) && changeConData.length == 0) {
        swal({
          title: "提示",
          text: '保存成功',
          button: "确认"
        });
      } else {
        if (that.checkName(type)) {
          var text = '存在同一组织下机组名重复';

          switch (Number(type)) {
            case 1:
            case 5:
            case 6:
            case 7:
            case 9:
              text = "\u5B58\u5728\u540C\u4E00\u7EC4\u7EC7\u4E0B\u673A\u7EC4\u540D\"".concat(that.sameName, "\"\u91CD\u590D");
              break;

            case 3:
              text = "\u5B58\u5728\u540C\u4E00\u7EC4\u7EC7\u4E0B\u673A\u6CF5\u540D\"".concat(that.sameName, "\"\u91CD\u590D");
              break;

            case 8:
              text = "\u5B58\u5728\u540C\u4E00\u673A\u7EC4\u4E0B\u8F66\u53A2\u540D\"".concat(that.sameName, "\"\u91CD\u590D");
              break;

            case 10:
              text = "\u5B58\u5728\u540C\u4E00\u673A\u7EC4\u4E0B\u5B50\u7EA7\u540D\"".concat(that.sameName, "\"\u91CD\u590D");
              break;

            case 4:
              text = "\u5B58\u5728\u7EBF\u8DEF\u540D\u79F0\"".concat(that.sameName, "\"\u91CD\u590D");
              break;
          }

          swal({
            title: "提示",
            text: text,
            button: "确认"
          });
          return;
        }

        if (!$.isEmptyObject(changeData)) {
          var flag;

          if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__["MacTypeBtn"].includes(Number(type))) {
            //新建和修改机组信息
            flag = this.check(changeData);

            if (flag) {
              changeData.t_ids = this.$store.state.tids;
              this.saveDisabled = true; //发送请求前按钮不可点击

              network_getApi__WEBPACK_IMPORTED_MODULE_1__["default"].saveNewMachine(changeData).then(function (res) {
                that.saveDisabled = false; //按钮恢复可点击状态

                if (res.msg == 0) {
                  var _text = '保存成功';

                  if (type == 6) {
                    //走行部
                    _text = '保存成功，接下来需要进行线路设置';
                  }

                  swal({
                    title: "提示",
                    text: "".concat(_text),
                    button: "确认"
                  }).then(function (value) {
                    // this.$router.go(0)
                    _this2.reload();
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
                that.saveDisabled = false; //按钮恢复可点击状态

                console.log('请求错误', err);
              });
            }
          } else if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__["PumpTypeBtn"].includes(Number(type))) {
            //修改机泵信息
            if (type === 8) {
              //车厢
              flag = this.checkIfHeadEnd() && this.checkPumpName(changeData, type);
            } else {
              flag = this.checkPumpName(changeData);
            }

            if (flag) {
              this.saveDisabled = true; //发送请求前按钮不可点击

              network_getApi__WEBPACK_IMPORTED_MODULE_1__["default"].updatePumps(changeData).then(function (res) {
                that.saveDisabled = false; //按钮恢复可点击状态

                if (res.msg == 0) {
                  swal({
                    title: "提示",
                    text: '保存成功',
                    button: "确认"
                  }).then(function (value) {
                    _this2.$router.go(0);
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
                that.saveDisabled = false; //按钮恢复可点击状态

                console.log('请求错误', err);
              });
            }
          } else if (Number(type) === 4) {
            //修改线路信息
            flag = this.checkLinesName(changeData);

            if (flag) {
              this.saveDisabled = true; //发送请求前按钮不可点击

              network_getApi__WEBPACK_IMPORTED_MODULE_1__["default"].createLines(changeData).then(function (res) {
                that.saveDisabled = false; //按钮恢复可点击状态

                if (res.msg == 0) {
                  swal({
                    title: "提示",
                    text: '保存成功',
                    button: "确认"
                  }).then(function (value) {
                    _this2.$router.go(0);
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
                that.saveDisabled = false; //按钮恢复可点击状态

                console.log('请求错误', err);
              });
            }
          }
        } //修改工况信息


        if (changeConData.length > 0) {
          var _flag = this.checkCondition(changeConData);

          if (_flag) {
            this.saveDisabled = true; //发送请求前按钮不可点击

            network_getApi__WEBPACK_IMPORTED_MODULE_1__["default"].updateCondition(changeConData).then(function (res) {
              that.saveDisabled = false; //按钮恢复可点击状态

              if (res.msg == 0) {
                swal({
                  title: "提示",
                  text: '保存成功',
                  button: "确认"
                }).then(function (value) {
                  _this2.$router.go(0);
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
              that.saveDisabled = false; //按钮恢复可点击状态

              console.log('请求错误', err);
            });
          }
        } //新增机泵信息


        if (!$.isEmptyObject(addData) && _table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__["PumpTypeBtn"].includes(Number(type))) {
          var _flag2 = true;

          if (type === 8) {
            _flag2 = this.checkIfHeadEnd() && this.checkPumpName(addData, type) && this.checkCarNum(this.$refs.child.data, addData);
          } else {
            _flag2 = this.checkPumpName(addData);
          }

          if (_flag2) {
            addData.t_ids = this.$store.state.tids;
            this.saveDisabled = true; //发送请求前按钮不可点击

            network_getApi__WEBPACK_IMPORTED_MODULE_1__["default"].createPumps(addData).then(function (res) {
              that.saveDisabled = false; //按钮恢复可点击状态

              if (res.msg == 0) {
                swal({
                  title: "提示",
                  text: '保存成功',
                  button: "确认"
                }).then(function (value) {
                  _this2.$router.go(0);
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
              that.saveDisabled = false; //按钮恢复可点击状态

              console.log('请求错误', err);
            });
          }
        }
      }
    },
    updateIsShow: function updateIsShow(value) {
      this.isShow = value;
    },
    check: function check(mac_list) {
      for (var key in mac_list) {
        if (!mac_list[key].mac_me && key != "t_ids") {
          swal({
            title: "提示",
            text: '未设置机组名',
            button: "确认"
          });
          return false;
        }
      }

      return true;
    },
    //验证机泵名是否为空
    checkPumpName: function checkPumpName(pumpList, type) {
      if (type == 8) {
        for (var key in pumpList) {
          if (!pumpList[key].pump.baseInfo.car_wheel_d) {
            swal({
              title: "提示",
              text: "\u8F66\u53A2'".concat(pumpList[key].pump.pump_name, "'\u8F6E\u5F84\u4E0D\u80FD\u4E3A\u7A7A"),
              button: "确认"
            });
            return false;
          }
        }
      }

      for (var _key in pumpList) {
        if (!pumpList[_key].pump.pump_name) {
          swal({
            title: "提示",
            text: "\u673A\u7EC4'".concat(pumpList[_key].machine_name, "'\u4E0B\u6709\u5B50\u7EA7\u672A\u8BBE\u7F6E\u5B50\u7EA7\u540D"),
            button: "确认"
          });
          return false;
        }
      }

      return true;
    },
    //验证车厢数目
    checkCarNum: function checkCarNum(data, addData) {
      var macObj = {};
      data.forEach(function (mac) {
        if (!macObj[mac.pump.mac_id]) {
          macObj[mac.pump.mac_id] = [];
        }

        macObj[mac.pump.mac_id].push(mac);
      });

      var _loop = function _loop(key) {
        var carInfo = addData[key];
        var list = macObj[carInfo.machine_id];
        list.forEach(function (mac) {
          if (mac.pump.car_num) {
            carInfo.car_num = mac.pump.car_num;
          }
        });

        if (macObj[carInfo.machine_id].length > Number(carInfo.car_num)) {
          swal({
            title: "提示",
            text: "\u673A\u7EC4'".concat(carInfo.machine_name, "'\u8F66\u53A2\u6570\u76EE\u4E0D\u5F97\u8D85\u8FC7\u8F66\u53A2\u8282\u6570").concat(carInfo.car_num),
            button: "确认"
          });
          return {
            v: false
          };
        }
      };

      for (var key in addData) {
        var _ret = _loop(key);

        if (_typeof(_ret) === "object") return _ret.v;
      }

      return true;
    },
    //验证工况上下限的方法
    checkCondition: function checkCondition(conList) {
      var a1;
      var b1;
      var c1;
      var d1;
      var a2;
      var b2;
      var c2;
      var d2;

      for (var m = 0; m < conList.length; m++) {
        var condition = conList[m].condition;
        var mac_me = conList[m].mac_me;

        if (Number(condition.pos_type1) > 0 && Number(condition.pos_type2) > 0) {
          //参考1+参考2
          for (var i = 1; i <= 3; i++) {
            for (var j = i + 1; j <= 4; j++) {
              a1 = Number(condition["conditionL_1_" + i]);
              b1 = Number(condition["conditionH_1_" + i]);
              c1 = Number(condition["conditionL_2_" + i]);
              d1 = Number(condition["conditionH_2_" + i]);
              a2 = Number(condition["conditionL_1_" + j]);
              b2 = Number(condition["conditionH_1_" + j]);
              c2 = Number(condition["conditionL_2_" + j]);
              d2 = Number(condition["conditionH_2_" + j]);

              if (!(a1 >= b2 || a2 >= b1 || c1 >= d2 || c2 >= d1)) {
                swal({
                  title: "提示",
                  text: "\u673A\u7EC4'".concat(mac_me, "'\u7684\u5DE5\u51B5\u533A\u95F4\u6709\u4EA4\u53C9"),
                  button: "确认"
                });
                return false;
                break;
              }
            }
          }
        } else if (Number(condition.pos_type1) > 0) {
          //参考1
          for (var _i = 1; _i <= 3; _i++) {
            for (var _j = _i + 1; _j <= 4; _j++) {
              a1 = Number(condition["conditionL_1_" + _i]);
              b1 = Number(condition["conditionH_1_" + _i]);
              a2 = Number(condition["conditionL_1_" + _j]);
              b2 = Number(condition["conditionH_1_" + _j]);

              if (!(a1 >= b2 || a2 >= b1)) {
                swal({
                  title: "提示",
                  text: "\u673A\u7EC4'".concat(mac_me, "'\u7684\u5DE5\u51B5\u533A\u95F4\u6709\u4EA4\u53C9"),
                  button: "确认"
                });
                return false;
                break;
              }
            }
          }
        } else if (Number(condition.pos_type2) > 0) {
          //参考2
          for (var _i2 = 1; _i2 <= 3; _i2++) {
            for (var _j2 = _i2 + 1; _j2 <= 4; _j2++) {
              a1 = Number(condition["conditionL_2_" + _i2]);
              b1 = Number(condition["conditionH_2_" + _i2]);
              a2 = Number(condition["conditionL_2_" + _j2]);
              b2 = Number(condition["conditionH_2_" + _j2]);

              if (!(a1 >= b2 || a2 >= b1)) {
                swal({
                  title: "提示",
                  text: "\u673A\u7EC4'".concat(mac_me, "'\u7684\u5DE5\u51B5\u533A\u95F4\u6709\u4EA4\u53C9"),
                  button: "确认"
                });
                return false;
                break;
              }
            }
          }
        }

        return true;
      }
    },
    //验证线路名称不能重复
    checkLinesName: function checkLinesName(tmsList) {
      for (var key in tmsList) {
        if (!tmsList[key].line_name) {
          swal({
            title: "提示",
            text: "\u7EBF\u8DEF\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
            button: "确认"
          });
          return false;
        }
      }

      return true;
    },
    //验证同一机组下只能有一个车厢为机头或者机尾
    checkIfHeadEnd: function checkIfHeadEnd() {
      var data = this.$refs.child.data;
      var headPumps = {};
      data.forEach(function (item) {
        if (!headPumps["".concat(item.pump.mac_id, "_0")]) {
          headPumps["".concat(item.pump.mac_id, "_0")] = [];
        }

        if (!headPumps["".concat(item.pump.mac_id, "_1")]) {
          headPumps["".concat(item.pump.mac_id, "_1")] = [];
        }

        var ifHead = item.pump.baseInfo.if_head;
        var ifEnd = item.pump.baseInfo.if_end;

        if (ifHead && Number(ifHead) === 1) {
          headPumps["".concat(item.pump.mac_id, "_0")].push(item.pump.machine_name);
        }

        if (ifEnd && Number(ifEnd) === 1) {
          headPumps["".concat(item.pump.mac_id, "_1")].push(item.pump.machine_name);
        }
      }); // console.log(headPumps)

      for (var key in headPumps) {
        if (headPumps[key].length > 1) {
          var m = key.split('_')[1];
          var text = '上行车头';

          if (m === '0') {
            text = '上行车头';
          } else {
            text = '下行车头';
          }

          var macName = headPumps[key][0];
          swal({
            title: "提示",
            text: "\u673A\u7EC4".concat(macName, "\u5B58\u57282\u4E2A\u8F66\u53A2\u4E3A").concat(text),
            button: "确认"
          });
          return false;
        }
      }

      return true;
    },
    //页面状态
    statePage: function statePage(name) {
      switch (name) {
        case "Condition":
          this.isAdd = true;
          this.obj.flag = true;
          this.obj.treeBtn = false;
          this.obj.chName = "工况设置";
          this.title = '工况设置';
          break;

        case "VibMac":
        case "CementMac":
        case "RailMac":
        case "OilMac":
        case "CommonMac":
          this.obj.chName = "机组设置";
          this.obj.treeBtn = true;
          this.title = '机组设置';
          this.addBtnName = '新建机组';
          break;

        case 'Pump':
          this.obj.chName = "机泵设置";
          this.obj.treeBtn = true;
          this.title = '机泵设置';
          this.addBtnName = '新建机泵';
          break;

        case 'Car':
          this.obj.chName = "车厢设置";
          this.obj.treeBtn = true;
          this.title = '车厢设置';
          this.addBtnName = '新建车厢';
          break;

        case 'RailLine':
          this.obj.treeBtn = true;
          this.obj.chName = "线路设置";
          this.title = '线路设置';
          this.addBtnName = '新建线路';
          this.obj.type = 4;
          break;

        case 'ComsonMac':
          this.obj.treeBtn = true;
          this.obj.chName = "通用子级设置";
          this.title = '子级设置';
          this.addBtnName = '新建子级';
          break;

        default:
          break;
      }

      this.$emit('listenToChildEvent', this.obj);
    },
    //验证统一组织下的机组名不能重复
    checkName: function checkName(type) {
      type = Number(type);
      var folder_pumpName = {}; //不同组织下的机泵名集合

      var folder_macName = {}; //不同组织下的机组名集合

      var linesName = []; //线路名集合

      var data = this.$refs.child.data;

      if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__["MacTypeBtn"].includes(type)) {
        data.forEach(function (item) {
          if (!folder_macName[item.machine.t_id]) {
            folder_macName[item.machine.t_id] = [];
          }

          if (item.machine.mac_me) {
            folder_macName[item.machine.t_id].push(item.machine.mac_me);
          }
        });

        for (var key in folder_macName) {
          if (this.isRepeat(folder_macName[key])) {
            return true;
          }
        }
      } else if (_table_js_mac_methods_js__WEBPACK_IMPORTED_MODULE_3__["PumpTypeBtn"].includes(type)) {
        data.forEach(function (item) {
          if (!folder_pumpName[item.pump.folder_id]) {
            folder_pumpName[item.pump.folder_id] = [];
          }

          if (item.pump.pump_name) {
            folder_pumpName[item.pump.folder_id].push(item.pump.pump_name);
          }
        });

        for (var _key2 in folder_pumpName) {
          if (this.isRepeat(folder_pumpName[_key2])) return true;
        }
      } else if (type === 4) {
        data.forEach(function (item) {
          if (item.tms.line_name) {
            linesName.push(item.tms.line_name);
          }
        });
        if (this.isRepeat(linesName)) return true;
      }
    },
    //数组元素是否重复
    isRepeat: function isRepeat(arr) {
      var hash = {};
      this.sameName = '';

      for (var i in arr) {
        if (hash[arr[i]]) {
          this.sameName = arr[i];
          return true;
        }

        hash[arr[i]] = true;
      }

      return false;
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
      var leftVal = btnContent.left;
      this.btnData.forEach(function (item, index) {
        if (item.name == that.name) {
          num = index;
        }
      });
      $('.btn-content').css('left', leftVal - 50 * num);

      if (leftVal >= 60) {
        this.leftClass = {
          "left-btn": true,
          "active": false,
          "disable": true
        };
      }
    }
  },
  components: {
    MyLoading: components_common_MyLoading__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "button",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isShow && !_vm.isAdd,
              expression: "!isShow && !isAdd"
            }
          ],
          staticClass: "my-btn blue-btn btn1 ",
          class: { btn2: !_vm.obj.treeBtn },
          on: { click: _vm.add }
        },
        [_vm._v(_vm._s(_vm.addBtnName))]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "my-btn btn-active btn2",
          class: { toRight: !_vm.obj.treeBtn },
          attrs: { disabled: _vm.saveDisabled },
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
            on: { "child-msg": _vm.updateIsShow }
          }),
          _vm._v(" "),
          _vm.isShow
            ? _c("div", { staticClass: "noData" }, [
                _vm._v("系统中没有可建该类型机组的设备!")
              ])
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
                key: index,
                staticClass: "con-dgm-btn",
                attrs: { to: { path: btn.name } },
                nativeOn: {
                  click: function($event) {
                    return _vm.getTable(btn.name, btn.type)
                  }
                }
              },
              [_vm._v(" " + _vm._s(btn.textBtn))]
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./src/components/content/system/machine/MachineTable.vue":
/*!****************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTable.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MachineTable.vue?vue&type=template&id=093c74ce&scoped=true& */ "./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true&");
/* harmony import */ var _MachineTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MachineTable.vue?vue&type=script&lang=js& */ "./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss& */ "./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MachineTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "093c74ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/system/machine/MachineTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MachineTable.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=style&index=0&id=093c74ce&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_style_index_0_id_093c74ce_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MachineTable.vue?vue&type=template&id=093c74ce&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/system/machine/MachineTable.vue?vue&type=template&id=093c74ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MachineTable_vue_vue_type_template_id_093c74ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=15-61db91c2.js.map