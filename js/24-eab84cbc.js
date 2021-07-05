(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/ChainModel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/ChainModel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var components_common_xml2json_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/xml2json.min.js */ "./src/components/common/xml2json.min.js");
/* harmony import */ var components_common_xml2json_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(components_common_xml2json_min_js__WEBPACK_IMPORTED_MODULE_0__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ChainModel",
  props: ['baseInfo', 'isEdit', 'currentMachine', 'speedPos', 'currentChainModel', 'isSendStandChain'],
  data: function data() {
    return {
      img: {
        searchWhite: __webpack_require__(/*! assets/img/chainModel/searchWhite.svg */ "./src/assets/img/chainModel/searchWhite.svg"),
        chainModel: __webpack_require__(/*! assets/img/chainModel/chainModel.svg */ "./src/assets/img/chainModel/chainModel.svg"),
        more: __webpack_require__(/*! assets/img/chainModel/more.svg */ "./src/assets/img/chainModel/more.svg"),
        close: __webpack_require__(/*! assets/img/chainModel/close.svg */ "./src/assets/img/chainModel/close.svg"),
        down: __webpack_require__(/*! assets/img/chainModel/down.svg */ "./src/assets/img/chainModel/down.svg")
      },
      token: '',
      // token
      model: [],
      choiceModel: {
        //  当前选择的传动链模型
        index: -1,
        name: ''
      },
      driveChain: [],
      // 传动链模型
      addDriveChain: [],
      // 新增或复制传动链模型
      srcDriveChain: [],
      // 初始传动链模型数据
      deviceParams: [],
      bearingParams1: [],
      bearingParams2: [],
      images: [{
        title: '新建传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/addModel.svg */ "./src/assets/img/chainModel/addModel.svg")
      }, {
        title: '复制传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/copyModel.svg */ "./src/assets/img/chainModel/copyModel.svg")
      }, {
        title: '删除传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/delModel.svg */ "./src/assets/img/chainModel/delModel.svg")
      }, {
        title: '保存传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/saveModel.svg */ "./src/assets/img/chainModel/saveModel.svg")
      }, {
        title: '导入传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/importModel.svg */ "./src/assets/img/chainModel/importModel.svg")
      }, {
        title: '导出传动链模型',
        url: __webpack_require__(/*! assets/img/chainModel/exportModel.svg */ "./src/assets/img/chainModel/exportModel.svg")
      }],
      isShow: {
        isAlert: false,
        // 是否显示新建、复制弹窗
        isDevice: false,
        // 是否显示轴承库管理框
        showManufacturer: false,
        // 是否显示制造商下拉选项
        showDeviceModel: false,
        // 是否显示轴承型号下拉选项
        clickLikeManufacturer: false,
        // 是否点击制造商模糊查询下拉选项
        clickLikeDeviceModel: false,
        // 是否点击轴承型号模糊查询下拉选项
        isCustom: false,
        // 是否是自定义轴承
        isAlarm: false,
        // 删除警告框
        isAddRevise: false,
        // 是否显示添加或删除信息框
        viewDevice: true,
        // 是否显示设备参数
        viewBearing1: false,
        // 是否显示轴承参数
        viewBearing2: false,
        // 是否显示轴承参数
        isAlertDom: false,
        // 是否显示是否显示弹窗
        isAlertTip: false,
        // 是否显示导入传动链模型提示框
        isDeviceParams: true,
        // 是否显示设备参数
        isBearing1: false,
        // 是否显示轴承参数
        isBearing2: false // 是否显示轴承参数

      },
      operat: {
        title: '',
        // 弹窗标题
        modelName: '' // 模型名称

      },
      deviceMsg: [],
      //  轴承库信息
      devicePaging: [],
      // 轴承库分页信息
      page: {
        // 页数信息
        currentPage: 1,
        // 当前页数
        pageCount: 0 // 总页数

      },
      likeManufacturer: '',
      // 模糊查询制造商
      likeDeviceModel: '',
      // 模糊查询轴承型号
      origManufacturer: {},
      //获取到的初始的制造商和轴承型号信息
      manufacturer: [],
      // 模糊查询制造商列表
      productModel: [],
      // 模糊查询轴承型号列表
      choiceDevice: {
        // 当前选择轴承库信息
        data: null,
        index: -1,
        manufacturerIndex: -1
      },
      addReviseBtn: '',
      // 轴承库添加或修改按钮文字
      addReviseLeft: {
        pitch_diameter: '',
        // 节圆直径
        ball_diameter: '',
        // 滚珠直径
        br: '',
        // 滚珠数
        angle: '' // 接触角

      },
      pbUnit1: {
        // 英寸数值
        pitch_diameter: '',
        ball_diameter: ''
      },
      pbUnit0: {
        // 毫米数值
        pitch_diameter: '',
        ball_diameter: ''
      },
      addReviseMsg: {
        // 轴承库添加或修改信息
        manufacturer: '',
        // 制造商
        productModel: '',
        // 轴承型号
        ftf: '',
        // FTF
        bsf: '',
        // BSF
        bpfo: '',
        // BPFO
        bpfi: '',
        // BPFI
        diameter_unit: 0,
        // 单位
        system: 0,
        // 轴承类型
        id: '' // 轴承 id

      },
      selectUnit: [{
        // 单位选择
        c: '毫米',
        e: 'mm'
      }, {
        c: '英寸',
        e: 'in'
      }],
      timer: null,
      slecteName: ['速度测点', '部件分类', '位号'],
      posClassList: {
        '0': '公共',
        '1': '1轴',
        '2': '2轴',
        '3': '3轴',
        '4': '4轴'
      },
      //部件分类
      posLocList: {
        "255": '其它',
        '1': '1位',
        '2': '2位',
        '3': '3位',
        '4': '4位',
        '5': '5位',
        '6': '6位',
        '7': '7位',
        '8': '8位'
      } //安装位置

    };
  },
  methods: (_methods = {
    //弹出框可拖动
    moveAlertBox: function moveAlertBox(event) {
      var isMove = true;
      var abs_x = event.pageX - parseInt($("div.alertBox").css("left"));
      var abs_y = event.pageY - parseInt($("div.alertBox").css("top"));
      $(document).mousemove(function (event) {
        if (isMove) {
          var obj = $('div.alertBox');
          var left_x = event.pageX - abs_x;
          var top_y = event.pageY - abs_y;
          obj.css({
            'left': left_x,
            'top': top_y
          });
        }
      }).mouseup(function () {
        isMove = false;
      });
    },
    //  搜索传动链模型
    searchChainModel: function searchChainModel(e) {
      var val = e.currentTarget.value;
      var driveChain = this.driveChain,
          l = driveChain.length;

      if (val !== '') {
        for (var i = 0; i < l; i++) {
          if (driveChain[i].macModelName.indexOf(val) !== -1) {
            driveChain[i].isShow = true;
          } else {
            driveChain[i].isShow = false;
          }
        }
      } else {
        for (var _i = 0; _i < l; _i++) {
          driveChain[_i].isShow = true;
        }
      }
    },
    //  点击传动链模型
    getModel: function getModel(item, index) {
      var models = this.$refs.models;

      for (var i = 0, l = models.length; i < l; i++) {
        if (i === index) models[index].classList.add('check');else models[i].classList.remove('check');
      }

      if (index !== this.choiceModel.index) {
        this.choiceModel = {
          index: index,
          name: item.macModelName
        };
        this.deviceParams = [];
        this.bearingParams1 = [];
        this.bearingParams2 = [];
        var data = this.driveChain[index]; // if (item.itemList.length > 0) data = this.driveChain[index], true;

        this.$emit('viewModel', data);
      }

      console.log(this.driveChain);
    },
    // 双击传动链名称弹出修改传动链名称的框
    changeModelName: function changeModelName(item, index) {
      var models = this.$refs.models;

      for (var i = 0, l = models.length; i < l; i++) {
        if (i === index) models[index].classList.add('check');else models[i].classList.remove('check');
      }

      this.choiceModel = {
        index: index,
        name: item.macModelName
      };
      this.deviceParams = [];
      this.bearingParams1 = [];
      this.bearingParams2 = [];
      var data = this.driveChain[index]; // if (item.itemList.length > 0) data = this.driveChain[index], true;

      this.$emit('viewModel', data);

      if (item.system === 1) {
        this.operat.title = '修改传动链';
        this.operat.modelName = item.macModelName;
        this.isShow.isAlertDom = true;
        this.isShow.isAlert = true;
      }
    },
    // 取消点击传动链模型效果
    cancelModel: function cancelModel(e) {
      var models = this.$refs.models;

      for (var i = 0, l = models.length; i < l; i++) {
        models[i].classList.remove('check');
      }

      this.choiceModel = {
        index: -1,
        name: ''
      };
      this.$emit('viewModel', null);
    },
    // 点击载入当前机组
    viewEdit: function viewEdit() {
      if (this.choiceModel.index >= 0) this.$emit('showEdit');else swal({
        title: "提示",
        text: '请选择一个传动链模型!',
        button: "确认"
      });
    },
    // 设备类型
    modelType: function modelType(type) {
      var tName = ['叶轮', '轴', '固定连轴节', '测点', '齿轮', '行星齿轮', '轴承', '电机', '内齿圈行星齿轮', '差动行星齿轮'];
      return tName[type - 1];
    },
    // 省略小数点后位数
    fixed: function fixed(num, i) {
      var str = typeof num == 'number' ? num.toString() : num;
      var idx = str.indexOf('.');
      if (idx === -1) return str;else {
        return str.slice(0, idx + i + 1);
      }
    },
    // 判断数据是否为原始类型
    isStatic: function isStatic(val) {
      return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' || typeof val === 'undefined' || val === null;
    },
    // 复制对象
    cloneObj: function cloneObj(val, deep) {
      var _this = this;

      if (this.isStatic(val)) return val;

      if (Array.isArray(val)) {
        return val.map(function (item) {
          return deep ? _this.cloneObj(item, deep) : item;
        });
      } else if (_typeof(val) === 'object') {
        var wType = ['Error', 'Date', 'RegExp'];
        var type = Object.prototype.toString.call(val).slice(8, -1);
        if (wType.includes(type)) return new window[type](val);
        var tag = {};

        for (var key in val) {
          tag[key] = deep ? this.cloneObj(val[key], deep) : val[key];
        }

        return tag;
      }
    },
    // 获取传动链模型库
    getChainModel: function getChainModel() {
      var _this2 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var that = this;
      this.$axios.post('queryAllDriveChainModel').then(function (res) {
        var data = res.driveChain,
            msg = [];

        if (data != undefined && data.length > 0) {
          for (var i = 0, l = data.length; i < l; i++) {
            var item = data[i];
            msg.push({
              id: i,
              itemList: that.cloneObj(item.itemList, true),
              macModelId: item.macModelId,
              macModelName: item.macModelName,
              mac_id: item.mac_id,
              system: item.system,
              isShow: true
            });
          }

          that.srcDriveChain = _this2.cloneObj(msg, true);
          that.driveChain = _this2.cloneObj(msg.concat(_this2.addDriveChain), true);

          if (type) {
            var models = _this2.$refs.models;

            models[_this2.choiceModel.index].classList.remove('check');

            for (var _i2 = 0, _l = _this2.driveChain.length; _i2 < _l; _i2++) {
              var value = _this2.driveChain[_i2];

              if (value.macModelName === _this2.choiceModel.name) {
                models[_i2].classList.add('check');

                _this2.choiceModel.index = _i2;

                _this2.$emit('viewModel', value);

                break;
              }
            }
          } // type && this.$emit('viewModel', this.driveChain[this.choiceModel.index]);

        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    // 点击操作按钮
    operatModel: function operatModel(index) {
      this.driveChain[this.choiceModel.index].itemList = this.currentChainModel;
      var that = this,
          driveChain = this.driveChain,
          model = this.choiceModel,
          i = model.index,
          name = model.name !== '' ? model.name : this.currentMachine.name;

      switch (index) {
        case 0:
          // 新建传动链模型
          this.operat.title = '添加传动链';
          this.operat.modelName = '新建机组传动链' + driveChain.length;
          this.isShow.isAlertDom = true;
          this.isShow.isAlert = true;
          break;

        case 1:
          // 复制
          this.operat.title = '复制传动链';
          this.operat.modelName = 'Copy_' + name + '传动链';
          this.isShow.isAlertDom = true;
          this.isShow.isAlert = true;
          break;

        case 2:
          // 删除
          if (i === -1) {
            swal({
              title: "提示",
              text: '请选择一个列表中的传动链后再操作!',
              button: "确认"
            });
            return;
          } else {
            var msg = driveChain[i];
            var system = msg.system;

            if (system === 1) {
              if (msg.macModelId !== '' && msg.macModelId !== null) {
                var id = msg.macModelId;

                var _that = this;

                swal({
                  title: "警告",
                  text: "一但删除，该传动链数据将不保留！！！确定删除吗？",
                  buttons: {
                    sure: "确认",
                    cancel: "取消"
                  },
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    _that.$axios.post('deleteMachineModelById', id).then(function (res) {
                      switch (res.msg) {
                        case 0:
                          _that.getChainModel();

                          _that.choiceModel = {
                            index: -1,
                            name: ''
                          };
                          swal({
                            title: "提示",
                            text: '删除成功',
                            button: "确认"
                          });

                          _that.$emit('viewModel', null);

                          var models = _that.$refs.models;

                          _that.$nextTick(function () {
                            for (var _i3 = 0, l = models.length; _i3 < l; _i3++) {
                              models[_i3].classList.remove('check');
                            }
                          });

                          break;

                        case 1:
                          console.log('参数为空或错误');
                          swal({
                            title: "提示",
                            text: '删除失败!',
                            button: "确认"
                          });
                          break;

                        case 2:
                          console.log('后台错误');
                          swal({
                            title: "提示",
                            text: '删除失败!',
                            button: "确认"
                          });
                          break;
                      }
                    })["catch"](function (err) {
                      console.log(err);
                    });
                  }
                });
              } else {
                for (var idx = 0, l = this.addDriveChain.length; idx < l; idx++) {
                  if (this.addDriveChain[idx].id === driveChain[i].id) {
                    this.addDriveChain.splice(idx, 1);
                    break;
                  }
                }

                driveChain.splice(i, 1);
                swal({
                  title: "提示",
                  text: '删除成功',
                  button: "确认"
                });
                this.choiceModel = {
                  index: -1,
                  name: ''
                };
              }
            } else {
              swal({
                title: "提示",
                text: '系统默认传动链无法删除!',
                button: "确认"
              });
              return;
            }
          }

          break;

        case 3:
          // 保存
          var data = this.addDriveChain;
          this.$emit('editYes', 1);
          this.$nextTick(function () {
            if (this.isSendStandChain) {
              var chain = this.cloneObj(driveChain, true);

              var _iterator = _createForOfIteratorHelper(chain),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var val = _step.value;

                  if (val.system === 1) {
                    if (val.itemList.length > 64) {
                      swal({
                        title: "提示",
                        text: "\u4F20\u52A8\u94FE".concat(val.macModelName, "\u90E8\u4EF6\u6570\u4E0D\u5F97\u8D85\u8FC764\u4E2A!"),
                        button: "确认"
                      });
                      return;
                    }

                    for (var _j = 0, _l3 = val.itemList.length; _j < _l3; _j++) {
                      var item = val.itemList[_j];

                      if (item.x && item.y) {
                        var list = {
                          id: item.id,
                          isBaseDrag: item.isBaseDrag,
                          itemtype: item.type,
                          left: item.left,
                          left2: item.left2,
                          right: item.right,
                          name: item.name,
                          position_x: item.x.toString(),
                          position_y: item.y.toString(),
                          speedRate: item.speedRate.toString(),
                          scaleX: item.scaleX,

                          /*ch_class: item.ch_class,*/
                          ch_class: "0",
                          //传动链模型的ch_class==0
                          baseInfo: item.baseInfo
                        };

                        if (list.itemType === '5') {
                          list.up = item.up;
                          list.down = item.down;
                        }

                        val.itemList[_j] = list;
                      }
                    }

                    var isHas = false;

                    for (var _i5 = 0, _l4 = data.length; _i5 < _l4; _i5++) {
                      if (data[_i5].id === val.id) {
                        isHas = true;
                        data[_i5] = val;
                        break;
                      }
                    }

                    isHas || data.push(val);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var requestData = [];
              var len = this.srcDriveChain.length;

              for (var _i4 = 0, _l2 = data.length; _i4 < _l2; _i4++) {
                var value = data[_i4];
                var itemList = JSON.stringify(value.itemList);

                if (value.id >= len) {
                  requestData.push(value); //表示新增的传动链模型

                  continue;
                }

                for (var j = 0; j < len; j++) {
                  var srcValue = this.srcDriveChain[j];

                  if (value.id === srcValue.id) {
                    var srcItemList = JSON.stringify(srcValue.itemList);

                    if (itemList !== srcItemList || value.macModelName !== srcValue.macModelName) {
                      requestData.push(value);
                      break;
                    }
                  }
                }
              }

              if (requestData.length === 0) {
                swal({
                  title: "提示",
                  text: '传动链模型未改变!',
                  button: "确认"
                });
                return;
              }

              clearTimeout(this.timer);

              var _that2 = this;

              this.timer = setTimeout(function () {
                _that2.$axios.post('insertAndUpdateMachineModel', requestData).then(function (res) {
                  switch (res.msg) {
                    case 0:
                      _that2.getChainModel(true);

                      _that2.addDriveChain = [];
                      swal({
                        title: "提示",
                        text: '传动链模型更新成功!',
                        button: "确认"
                      });
                      /*this.$nextTick(() => {
                          this.$emit('viewModel', this.driveChain[this.choiceModel.index]);
                      })*/

                      break;

                    case 1:
                      console.log('参数为空或错误');
                      swal({
                        title: "提示",
                        text: '传动链模型更新失败!',
                        button: "确认"
                      });
                      break;

                    case 2:
                      console.log('后台错误');
                      swal({
                        title: "提示",
                        text: '传动链模型更新失败!',
                        button: "确认"
                      });
                      break;
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }, 100);
            }
          });
          break;

        case 4:
          // 导入
          if (i === -1) {
            swal({
              title: "提示",
              text: '请选择一个列表中的传动链后再操作!',
              button: "确认"
            });
          } else if (driveChain[i].system == 0) {
            swal({
              title: "提示",
              text: '系统默认传动链无法修改!',
              button: "确认"
            });
          } else {
            this.isShow.isAlertDom = true;
            this.isShow.isAlertTip = true;
          }

          break;

        case 5:
          // 导出
          this.$emit('exportChainModel', driveChain[i]);
          break;
      }
    },
    // 确定导入传动链模型
    yesUpload: function yesUpload() {
      this.$refs.uploadChainModel.click();
      this.isShow.isAlertDom = false;
      this.isShow.isAlertTip = false;
    },
    // 读取导入的传动链模型
    readChainModel: function readChainModel(e) {
      var file = e.currentTarget.files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      var that = this,
          index = this.choiceModel.index,
          fileFormat = file.name.slice(-4);

      reader.onload = function () {
        if (fileFormat === 'json') {
          // 读取 json
          var data = JSON.parse(this.result);

          if (data.itemList && data.itemList.length) {
            data.itemList.forEach(function (item) {
              // 导入的数据中转速部件该值置为”-1“，以免该传动链默认绑定了转速测点
              if (item.itemType == 4) {
                item.baseInfo.compNum = '-1';
              } //===========================================================================


              item.ch_class = '0';
            });
          }

          that.driveChain[index].itemList = data.itemList;
        } else if (fileFormat === '.xml') {
          // 读取 xml
          var x2js = new components_common_xml2json_min_js__WEBPACK_IMPORTED_MODULE_0___default.a();
          var jsonData = x2js.xml_str2json(this.result);
          var msg = [],
              item = jsonData.MachineModel.item;

          for (var i = 0, l = item.length; i < l; i++) {
            var base = {},
                val = item[i];

            switch (val['_itemtype']) {
              case '1':
                base = {
                  compNum: val['_compNum'],
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '2':
                base = {
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '3':
                base = {
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '4':
                base = {
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '5':
                base = {
                  gear_teeth_num: val['_gear_teeth_num'],
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '6':
                base = {
                  bpfi: val['_bpfi'],
                  bpfo: val['_bpfo'],
                  bsf: val['_bsf'],
                  ftf: val['_ftf'],
                  fix_teeth_num: val['_fix_teeth_num'],
                  manufacturer: val['_bearingCompany'],
                  plant_teeth_num: val['_plant_teeth_num'],
                  productModel: val['_bearingType'],
                  shaft_diameter: val['_shaft_diameter'],
                  sun_teeth_num: val['_sun_teeth_num'],
                  planet_num: val['_planet_num']
                };
                break;

              case '7':
                base = {
                  bpfi: val['_bpfi'],
                  bpfo: val['_bpfo'],
                  bsf: val['_bsf'],
                  ftf: val['_ftf'],
                  manufacturer: val['_bearingCompany'],
                  productModel: val['_bearingType'],
                  shaft_diameter: val['_shaft_diameter']
                };
                break;

              case '8':
                base = {
                  shaft_diameter: val['_shaft_diameter'],
                  manufacturer1: val['_fadongji_company1'],
                  productModel1: val['_fadongji_company2'],
                  manufacturer2: val['_fadongji_type1'],
                  productModel2: val['_fadongji_type2'],
                  ftf1: val['_comp1Freq1'],
                  bsf1: val['_comp1Freq2'],
                  bpfo1: val['_comp1Freq3'],
                  bpfi1: val['_comp1Freq4'],
                  ftf2: val['_comp2Freq1'],
                  bsf2: val['_comp2Freq2'],
                  bpfo2: val['_comp2Freq3'],
                  bpfi2: val['_comp2Freq4'],
                  shaft_diameter2: val['_shaft_diameter2']
                };
                break;

              case '9':
                base = {
                  bpfi: val['_bpfi'],
                  bpfo: val['_bpfo'],
                  bsf: val['_bsf'],
                  ftf: val['_ftf'],
                  fix_teeth_num: val['_fix_teeth_num'],
                  manufacturer: val['_bearingCompany'],
                  plant_teeth_num: val['_plant_teeth_num'],
                  productModel: val['_bearingType'],
                  shaft_diameter: val['_shaft_diameter'],
                  sun_teeth_num: val['_sun_teeth_num'],
                  planet_num: val['_planet_num']
                };
                break;

              case '10':
                base = {
                  bpfi: val['_bpfi'],
                  bpfo: val['_bpfo'],
                  bsf: val['_bsf'],
                  ftf: val['_ftf'],
                  fix_teeth_num: val['_fix_teeth_num'],
                  manufacturer: val['_bearingCompany'],
                  plant_teeth_num: val['_plant_teeth_num'],
                  productModel: val['_bearingType'],
                  shaft_diameter: val['_shaft_diameter'],
                  sun_teeth_num: val['_sun_teeth_num'],
                  planet_num: val['_planet_num']
                };
                break;
            }

            console.log(val);
            msg.push({
              ch_class: '',
              id: val['_id'].split('_')[1],
              //flex上的xml文件里的id是‘0_xx’形式，需要截取'_'后面的
              isBaseDrag: val['_isBaseDrag'],
              itemtype: val['_itemtype'],
              left: val['_left'] === undefined ? '' : val['_left'],
              left2: val['_left2'] === undefined ? '' : val['_left2'],
              name: val['_name'],
              position_x: val['_position_x'],
              position_y: val['_position_y'],
              right: val['_right'] === undefined ? '' : val['_right'],
              speedRate: val['_speedRate'],
              baseInfo: that.cloneObj(base, true)
            });
          }

          that.driveChain[index].itemList = that.cloneObj(msg, true);
          msg = null;
        }

        that.$emit('viewModel', that.driveChain[index]);
      };
    }
  }, _defineProperty(_methods, "isStatic", function isStatic(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined' || value === null;
  }), _defineProperty(_methods, "isArrayLike", function isArrayLike(value) {
    return value != null && this.isLength(value.length) && !this.isFunction(value);
  }), _defineProperty(_methods, "isFunction", function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
  }), _defineProperty(_methods, "isLength", function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
  }), _defineProperty(_methods, "getRawType", function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  }), _defineProperty(_methods, "unique", function unique(arr) {
    var _this3 = this;

    if (!this.isArrayLike(arr)) {
      //不是类数组对象
      return arr;
    }

    var result = [];
    var objarr = [];
    var obj = Object.create(null);
    arr.forEach(function (item) {
      if (_this3.isStatic(item)) {
        //是除了symbol外的原始数据
        var key = item + '_' + _this3.getRawType(item);

        if (!obj[key]) {
          obj[key] = true;
          result.push(item);
        }
      } else {
        //引用类型及symbol
        if (!objarr.includes(item)) {
          objarr.push(item);
          result.push(item);
        }
      }
    });
    return result;
  }), _defineProperty(_methods, "isPlainObject", function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }), _defineProperty(_methods, "isPrimitive", function isPrimitive(value) {
    return this.isStatic(value) || _typeof(value) === 'symbol';
  }), _defineProperty(_methods, "yes", function yes() {
    var _this4 = this;

    var modelNameArr = [];
    this.driveChain.forEach(function (item) {
      modelNameArr.push(item.macModelName);
    });

    if (this.operat.title === '修改传动链' && this.driveChain[this.choiceModel.index].macModelName == this.operat.modelName) {
      this.isShow.isAlertDom = false;
      this.isShow.isAlert = false;
      return;
    }

    if (modelNameArr.includes(this.operat.modelName)) {
      //新建传动链名称不能重复
      swal({
        title: "提示",
        text: '传动链名称重复!',
        button: "确认"
      });
    } else {
      if (this.operat.title === '添加传动链') {
        this.driveChain.push({
          mac_id: '',
          macModelId: '',
          id: this.driveChain.length,
          macModelName: this.operat.modelName,
          system: 1,
          itemList: [],
          isShow: true
        });
        this.addDriveChain.push({
          mac_id: '',
          macModelId: '',
          id: this.driveChain.length - 1,
          macModelName: this.operat.modelName,
          itemList: [],
          isShow: true
        });
        var idx = this.driveChain.length - 1;

        if (idx !== this.choiceModel.index) {
          this.choiceModel = {
            index: idx,
            name: this.operat.modelName
          };
          this.deviceParams = [];
          this.bearingParams1 = [];
          this.bearingParams2 = [];
          this.$emit('viewModel', this.driveChain[idx]);
          var models = this.$refs.models;
          this.$nextTick(function () {
            for (var i = 0, l = models.length; i < l; i++) {
              var num = this.driveChain.length - 1;
              if (i === num) models[num].classList.add('check');else models[i].classList.remove('check');
            }
          });
        }
      } else if (this.operat.title === '修改传动链') {
        this.driveChain[this.choiceModel.index].macModelName = this.operat.modelName;
        var data = [this.driveChain[this.choiceModel.index]];
        var that = this;
        this.$axios.post('insertAndUpdateMachineModel', data).then(function (res) {
          switch (res.msg) {
            case 0:
              that.getChainModel();
              _this4.addDriveChain = [];
              swal({
                title: "提示",
                text: '传动链模型更新成功!',
                button: "确认"
              });
              break;

            case 1:
              console.log('参数为空或错误');
              swal({
                title: "提示",
                text: '传动链模型更新失败!',
                button: "确认"
              });
              break;

            case 2:
              console.log('后台错误');
              swal({
                title: "提示",
                text: '传动链模型更新失败!',
                button: "确认"
              });
              break;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var list;
        var msg;
        var item;

        if (this.driveChain[this.choiceModel.index] === undefined) {
          msg = this.cloneObj(this.currentMachine, true);
          list = this.cloneObj(this.currentChainModel, true);
        } else {
          msg = this.driveChain[this.choiceModel.index];
          list = this.cloneObj(msg.itemList, true);
        }

        item = {
          mac_id: msg.mac_id,
          macModelId: null,
          id: this.driveChain.length,
          macModelName: this.operat.modelName,
          system: 1,
          itemList: this.cloneObj(list, true),
          isShow: true
        };
        this.driveChain.push(this.cloneObj(item, true));
        this.addDriveChain.push(this.cloneObj(item, true));
        msg = null;
        list = null;
        item = null;
        var _models = this.$refs.models;
        this.$nextTick(function () {
          for (var i = 0, l = _models.length; i < l; i++) {
            var num = this.driveChain.length - 1;
            this.choiceModel = {
              index: num,
              name: this.operat.modelName
            };
            if (i === num) _models[num].classList.add('check');else _models[i].classList.remove('check');
          }
        });
      }

      this.isShow.isAlertDom = false;
      this.isShow.isAlert = false;
    }
  }), _defineProperty(_methods, "no", function no() {
    this.isShow.isAlertDom = false;
    this.isShow.isAlert = false;
    this.isShow.isAlertTip = false;
  }), _defineProperty(_methods, "moreShow", function moreShow(str) {
    if (/(制造商|轴承品牌)/g.test(str)) return true;else return false;
  }), _defineProperty(_methods, "getDevice", function getDevice(index) {
    this.searchLike(true);
    this.isShow.isDevice = true;
    this.isShow.clickLikeManufacturer = true;
    this.choiceDevice.manufacturerIndex = index;
  }), _defineProperty(_methods, "closeDevice", function closeDevice() {
    this.likeManufacturer = ''; // 模糊查询制造商

    this.likeDeviceModel = ''; // 模糊查询轴承型号

    this.deviceMsg.length = 0;
    this.devicePaging.length = 0;
    this.isShow.isDevice = false;
    this.isShow.clickLikeDeviceModel = true;
  }), _defineProperty(_methods, "addDevice", function addDevice() {
    this.addReviseLeft = {
      pitch_diameter: '',
      // 节圆直径
      ball_diameter: '',
      // 滚珠直径
      br: '',
      // 滚珠数
      angle: '' // 接触角

    };
    this.pbUnit0 = {
      pitch_diameter: '',
      // 节圆直径
      ball_diameter: '' // 滚珠直径

    };
    this.pbUnit1 = {
      pitch_diameter: '',
      // 节圆直径
      ball_diameter: '' // 滚珠直径

    };
    this.addReviseMsg = {
      // 轴承库添加或修改信息
      manufacturer: '',
      // 制造商
      productModel: '',
      // 轴承型号
      ftf: '',
      // FTF
      bsf: '',
      // BSF
      bpfo: '',
      // BPFO
      bpfi: '',
      // BPFI
      diameter_unit: 0,
      // 单位
      system: 0,
      // 轴承类型
      id: '',
      // 轴承 id
      reserve: ''
    };
    this.addReviseBtn = '添加';
    this.isShow.isAddRevise = true;
  }), _defineProperty(_methods, "closeDeviceAlert", function closeDeviceAlert() {
    this.isShow.isAlarm = false;
  }), _defineProperty(_methods, "deletDeviceOk", function deletDeviceOk() {
    var _this5 = this;

    this.isShow.isCustom = false;
    var that = this;
    this.$axios.post('deleteBearingById', that.choiceDevice.data.id).then(function (res) {
      if (res.msg === 0) {
        var li = _this5.$refs.deviceList;

        for (var i = 0, l = li.length; i < l; i++) {
          li[i].classList.remove('checkDevice');
        }

        that.searchLike(true);
        swal({
          title: "提示",
          text: '删除成功!',
          button: "确认"
        });
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "deleteDevice", function deleteDevice() {
    this.isShow.isAlarm = true;
  }), _defineProperty(_methods, "reviseDevice", function reviseDevice() {
    var item = this.choiceDevice.data,
        br = item.br === -1 ? '' : item.br,
        a = item.angle === -1 ? '' : item.angle,
        p = item.pitch_diameter === -1 ? 0 : item.pitch_diameter,
        b = item.ball_diameter === -1 ? 0 : item.ball_diameter,
        pp = item.pitch_diameter === -1 ? '' : item.pitch_diameter,
        bb = item.ball_diameter === -1 ? '' : item.ball_diameter,
        ip = 3,
        id = 3;
    (p == '' || p === '0') && (p = 0);
    (b == '' || b === '0') && (b = 0);
    var p0 = p * 25.4,
        p1 = p / 25.4,
        b0 = b * 25.4,
        b1 = b / 25.4;

    if (item.diameter_unit == 1) {
      this.pbUnit1 = {
        pitch_diameter: p,
        ball_diameter: b
      };
      p0 > 10 && (ip = 2);
      b0 > 10 && (ib = 2);
      p0 > 100 && (ip = 1);
      b0 > 100 && (ib = 1);
      p0 > 1000 && (ip = 0);
      b0 > 1000 && (ib = 0);
      this.pbUnit0 = {
        pitch_diameter: p0.toFixed(ip),
        ball_diameter: b0.toFixed(id)
      };
      if (p === 0) this.pbUnit0.pitch_diameter = 0;else if (b === 0) this.pbUnit0.ball_diameter = 0;
    } else {
      this.pbUnit0 = {
        pitch_diameter: p,
        ball_diameter: b
      };
      p1 > 10 && (ip = 2);
      b1 > 10 && (ib = 2);
      p1 > 100 && (ip = 1);
      b1 > 100 && (ib = 1);
      p1 > 1000 && (ip = 0);
      b1 > 1000 && (ib = 0);
      this.pbUnit1 = {
        pitch_diameter: p1.toFixed(ip),
        ball_diameter: b1.toFixed(id)
      };
      if (p === 0) this.pbUnit1.pitch_diameter = 0;else if (b === 0) this.pbUnit1.ball_diameter = 0;
    }

    this.addReviseLeft = {
      pitch_diameter: pp,
      // 节圆直径
      ball_diameter: bb,
      // 滚珠直径
      br: br,
      // 滚珠数
      angle: a // 接触角

    };
    this.addReviseMsg = {
      manufacturer: item.manufacturer,
      // 制造商
      productModel: item.productModel,
      // 轴承型号
      ftf: item.ftf,
      // FTF
      bsf: item.bsf,
      // BSF
      bpfo: item.bpfo,
      // BPFO
      bpfi: item.bpfi,
      // BPFI
      diameter_unit: item.diameter_unit,
      // 单位
      system: item.system,
      // 轴承类型
      id: item.id,
      // 轴承 id
      reserve: item.reserve
    };
    this.addReviseBtn = '修改';
    this.isShow.isAddRevise = true;
  }), _defineProperty(_methods, "comfirmDevice", function comfirmDevice() {
    var data = this.choiceDevice,
        params = this.deviceParams,
        i = data.manufacturerIndex,
        bearing1 = this.bearingParams1,
        bearing2 = this.bearingParams2;

    if (data.index >= 0) {
      if (i === 4) {
        bearing2[0].name = data.data.ftf;
        bearing2[1].name = data.data.bsf;
        bearing2[2].name = data.data.bpfo;
        bearing2[3].name = data.data.bpfi;
      } else {
        bearing1[0].name = data.data.ftf;
        bearing1[1].name = data.data.bsf;
        bearing1[2].name = data.data.bpfo;
        bearing1[3].name = data.data.bpfi;
      }

      params[i].name = data.data.manufacturer;
      params[i + 1].name = data.data.productModel;
      this.changeParams();
      this.closeDevice();
    } else {
      swal({
        title: "提示",
        text: '请选择一个轴承!',
        button: "确认"
      });
    }
  }), _defineProperty(_methods, "setPaging", function setPaging(type) {
    var index = Number(this.page.currentPage);
    type === 'last' && --index;
    type === 'next' && ++index;
    index < 1 && (index = 1);
    index > this.page.pageCount && (index = this.page.pageCount);
    var s = (index - 1) * 10,
        e = index * 10;
    e >= this.deviceMsg.length && (e = this.deviceMsg.length);
    this.devicePaging = this.deviceMsg.slice(s, e);
    this.page.currentPage = index;
  }), _defineProperty(_methods, "getDeviceMsg", function getDeviceMsg() {
    var _this6 = this;

    this.isShow.isAlarm = false;
    var that = this;
    this.deviceMsg.length = 0;
    var params = null;
    params = {
      startNum: 1,
      offset: 10,
      manufacturer: null,
      productModel: null
    };
    this.$axios.post('queryAllBearingLib', params).then(function (res) {
      var data = res.bearing_lib;
      var msg = [];
      var manufacturer = [];
      var productModel = [];
      that.page = {
        currentPage: 1,
        pageCount: res.totalPage
      };

      for (var i = 0, l = data.length; i < l; i++) {
        if (data[i].system === 0) {
          msg.push(data[i]);
          manufacturer.push(data[i].manufacturer);
          productModel.push(data[i].productModel);
        }
      }

      for (var _i6 = 0, _l5 = data.length; _i6 < _l5; _i6++) {
        if (data[_i6].system === 1) {
          msg.push(data[_i6]);
          manufacturer.push(data[_i6].manufacturer);
          productModel.push(data[_i6].productModel);
        }
      }

      that.deviceMsg = _this6.cloneObj(msg, true);
      /*that.setPaging(1);*/

      that.getManufacterInfo();
      that.manufacturer = that.unique(manufacturer).sort(function (a, b) {
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
      }); //制造商下拉选项按照字母顺序不区分大小写排序

      that.productModel = that.unique(productModel);
      msg.length = 0;
      manufacturer = null;
      productModel = null;
      var li = _this6.$refs.deviceList;

      if (li) {
        for (var _i7 = 0, _l6 = li.length; _i7 < _l6; _i7++) {
          li[_i7].classList.remove('checkDevice');
        }
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "searchLike", function searchLike(flag) {
    var _this7 = this;

    this.isShow.isAlarm = false;
    var that = this;
    this.deviceMsg.length = 0;
    var params = null;

    if (that.likeManufacturer == "" && that.likeDeviceModel == "" && that.page.currentPage == 1) {
      params = {
        startNum: 1,
        offset: 10,
        manufacturer: null,
        productModel: null
      };
    } else {
      params = {
        startNum: that.page.currentPage,
        offset: 10,
        manufacturer: that.likeManufacturer,
        productModel: that.likeDeviceModel
      };
    }

    this.$axios.post('queryAllBearingLib', params).then(function (res) {
      var data = res.bearing_lib;
      var msg = [];
      that.page = {
        currentPage: that.page.currentPage,
        pageCount: res.totalPage
      };

      for (var i = 0, l = data.length; i < l; i++) {
        if (data[i].system === 0) {
          msg.push(data[i]);
        }
      }

      for (var _i8 = 0, _l7 = data.length; _i8 < _l7; _i8++) {
        if (data[_i8].system === 1) {
          msg.push(data[_i8]);
        }
      }

      that.deviceMsg = _this7.cloneObj(msg, true);

      if (flag) {
        that.getManufacterInfo();
      }

      msg.length = 0;
      var li = _this7.$refs.deviceList;

      if (li) {
        for (var _i9 = 0, _l8 = li.length; _i9 < _l8; _i9++) {
          li[_i9].classList.remove('checkDevice');
        }
      }
      /*that.choiceDevice= { // 当前选择轴承库信息
          data: null,
          index: -1,
          manufacturerIndex: -1,
      };*/


      that.isShow.isCustom = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "getManufacterInfo", function getManufacterInfo() {
    var that = this;
    this.$axios.post('queryCompanyAndType').then(function (res) {
      that.origManufacturer = res;
      var data = res;
      var manufacturer = [];
      var productModel = [];

      for (var key in data) {
        manufacturer.push(key);
        productModel = data[key];
      }

      that.manufacturer = manufacturer.sort(function (a, b) {
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
      }); //制造商下拉选项按照字母顺序不区分大小写排序

      that.productModel = productModel;
      manufacturer = null;
      productModel = null;
    })["catch"](function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "goSearchLike", function goSearchLike() {
    this.page.currentPage = 1;
    this.searchLike(false);
  }), _defineProperty(_methods, "goThisPage", function goThisPage() {
    this.searchLike(false);
  }), _defineProperty(_methods, "goLastPage", function goLastPage() {
    if (this.page.currentPage != 1) {
      this.page.currentPage = Number(this.page.currentPage - 1);
      this.searchLike(false);
    }
  }), _defineProperty(_methods, "goNextPage", function goNextPage() {
    if (this.page.currentPage != this.page.pageCount) {
      this.page.currentPage = Number(this.page.currentPage + 1);
      this.searchLike(false);
    }
  }), _defineProperty(_methods, "checkLikeManufacturer", function checkLikeManufacturer(value) {
    this.likeManufacturer = value;
    this.isShow.clickLikeManufacturer = true;
    this.isShow.showManufacturer = false;
    this.$refs.likeManufacturer.focus();

    for (var key in this.origManufacturer) {
      if (key == this.likeManufacturer) {
        this.productModel = this.origManufacturer[key].concat();
      }
    }
  }), _defineProperty(_methods, "checkLikeDeviceModel", function checkLikeDeviceModel(value) {
    this.likeDeviceModel = value;
    this.isShow.clickLikeDeviceModel = true;
    this.isShow.showDeviceModel = false;
    this.$refs.likeDeviceModel.focus();
  }), _defineProperty(_methods, "checkMsg", function checkMsg(item, index) {
    var li = this.$refs.deviceList;

    for (var i = 0, l = li.length; i < l; i++) {
      li[i].classList.remove('checkDevice');
    }

    li[index].classList.add('checkDevice');
    if (item.system === 0) this.isShow.isCustom = true;else this.isShow.isCustom = false;
    this.choiceDevice.index = index;
    this.choiceDevice.data = item;
  }), _defineProperty(_methods, "setCurrentPage", function setCurrentPage(e) {
    var val = e.currentTarget.value;

    if (isNaN(val)) {
      swal({
        title: "提示",
        text: '请输入数字!',
        button: "确认"
      });
      return;
    } else if (val === '' || val < 1) {
      val = 1;
    }

    this.page.currentPage = val;
    this.setPaging(val);
  }), _defineProperty(_methods, "setUnit", function setUnit() {
    if (this.addReviseMsg.diameter_unit == 1) {
      this.addReviseLeft.pitch_diameter = this.pbUnit1.pitch_diameter;
      this.addReviseLeft.ball_diameter = this.pbUnit1.ball_diameter;
    } else {
      this.addReviseLeft.pitch_diameter = this.pbUnit0.pitch_diameter;
      this.addReviseLeft.ball_diameter = this.pbUnit0.ball_diameter;
    }
  }), _defineProperty(_methods, "setParams", function setParams() {
    var p = this.addReviseLeft.pitch_diameter,
        b = this.addReviseLeft.ball_diameter,
        ip = 3,
        ib = 3,
        a = this.addReviseLeft.angle,
        br = this.addReviseLeft.br,
        ftf,
        bsf,
        bpfo,
        bpfi,
        param;
    (p == '' || p === '0') && (p = 0);
    (b == '' || b === '0') && (b = 0);
    (a == '' || a === '0') && (a = 0);
    (br == '' || br === '0') && (br = 0);
    var p0 = p * 25.4,
        p1 = p / 25.4,
        b0 = b * 25.4,
        b1 = b / 25.4;

    if (this.addReviseMsg.diameter_unit == 1) {
      this.pbUnit1 = {
        pitch_diameter: p,
        ball_diameter: b
      };
      p0 > 10 && (ip = 2);
      b0 > 10 && (ib = 2);
      p0 > 100 && (ip = 1);
      b0 > 100 && (ib = 1);
      p0 > 1000 && (ip = 0);
      b0 > 1000 && (ib = 0);
      this.pbUnit0 = {
        pitch_diameter: p0.toFixed(ip),
        ball_diameter: b0.toFixed(ib)
      };
      if (p === 0) this.pbUnit0.pitch_diameter = 0;else if (b === 0) this.pbUnit0.ball_diameter = 0;
      param = b0 / p0 * Math.cos(a * Math.PI / 180);
      ftf = 0.5 * (1 - param);
      bsf = p0 / (2 * b0) * (1 - param * param);
      bpfo = br / 2 * (1 - param);
      bpfi = br / 2 * (1 + param);
    } else {
      this.pbUnit0 = {
        pitch_diameter: p,
        ball_diameter: b
      };
      p1 > 10 && (ip = 2);
      b1 > 10 && (ib = 2);
      p1 > 100 && (ip = 1);
      b1 > 100 && (ib = 1);
      p1 > 1000 && (ip = 0);
      b1 > 1000 && (ib = 0);
      this.pbUnit1 = {
        pitch_diameter: p1.toFixed(ip),
        ball_diameter: b1.toFixed(ib)
      };
      if (p === 0) this.pbUnit1.pitch_diameter = 0;else if (b === 0) this.pbUnit1.ball_diameter = 0;
      param = b / p * Math.cos(a * Math.PI / 180);
      ftf = 0.5 * (1 - param);
      bsf = p / (2 * b) * (1 - param * param);
      bpfo = br / 2 * (1 - param);
      bpfi = br / 2 * (1 + param);
    }

    ftf = Math.round(ftf * 1000) / 1000;
    bsf = Math.round(bsf * 1000) / 1000;
    bpfo = Math.round(bpfo * 1000) / 1000;
    bpfi = Math.round(bpfi * 1000) / 1000;

    if (isNaN(ftf) || ftf == Infinity || ftf == -Infinity) {
      ftf = 0;
    }

    if (isNaN(bsf) || bsf == Infinity || bsf == -Infinity) {
      bsf = 0;
    }

    if (isNaN(bpfo) || bpfo == Infinity || bpfo == -Infinity) {
      bpfo = 0;
    }

    if (isNaN(bpfi) || bpfi == Infinity || bpfi == -Infinity) {
      bpfi = 0;
    }

    this.addReviseMsg.ftf = ftf;
    this.addReviseMsg.bsf = bsf;
    this.addReviseMsg.bpfo = bpfo;
    this.addReviseMsg.bpfi = bpfi;
  }), _defineProperty(_methods, "addReviseOk", function addReviseOk() {
    var left = this.addReviseLeft,
        msg = this.addReviseMsg,
        l = {},
        that = this;

    for (var key in left) {
      if (left[key] !== '') {
        if (left[key] <= 0) {
          switch (key) {
            case 'pitch_diameter':
              swal({
                title: "提示",
                text: '节圆直径必须是大于0的实数!',
                button: "确认"
              });
              return;

            case 'ball_diameter':
              swal({
                title: "提示",
                text: '滚珠直径必须是大于0的实数!',
                button: "确认"
              });
              return;

            case 'br':
              swal({
                title: "提示",
                text: '滚珠数必须是大于0的实数!',
                button: "确认"
              });
              return;
          }
        }

        l[key] = left[key];
      } else if (left[key] === '') {
        l[key] = -1;
      }
    }
    /**
     * 计算轴承型号字节数
     * **/


    var strModel = msg.productModel;
    var bytesCount = 0;

    for (var i = 0; i < strModel.length; i++) {
      var c = strModel.charAt(i);

      if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
        {
          bytesCount += 1;
        } else {
        bytesCount += 2;
      }
    }

    if (msg.manufacturer === '' || msg.manufacturer === null) {
      swal({
        title: "提示",
        text: '制造商不能为空!',
        button: "确认"
      });
      return;
    } else if (msg.productModel === '' || msg.productModel === null) {
      swal({
        title: "提示",
        text: '轴承型号不能为空!',
        button: "确认"
      });
      return;
    } else if (bytesCount > 20) {
      swal({
        title: "提示",
        text: '轴承型号字符串字节数不得超过20个!',
        button: "确认"
      });
      return;
    } else if (msg.ftf === '' || msg.ftf === null) {
      swal({
        title: "提示",
        text: 'FTF：必须为实数!',
        button: "确认"
      });
      return;
    } else if (msg.bsf === '' || msg.bsf === null) {
      swal({
        title: "提示",
        text: 'BSF：必须为实数!',
        button: "确认"
      });
      return;
    } else if (msg.bpfo === '' || msg.bpfo === null) {
      swal({
        title: "提示",
        text: 'BPFO：必须为实数!',
        button: "确认"
      });
      return;
    } else if (msg.bpfi === '' || msg.bpfi === null) {
      swal({
        title: "提示",
        text: 'BPFI：必须为实数!',
        button: "确认"
      });
      return;
    }

    var data = {
      angle: l.angle,
      ball_diameter: l.ball_diameter,
      pitch_diameter: l.pitch_diameter,
      br: l.br,
      id: msg.id,
      system: msg.system,
      reserve: msg.reserve,
      ftf: msg.ftf,
      bsf: msg.bsf,
      bpfo: msg.bpfo,
      bpfi: msg.bpfi,
      manufacturer: msg.manufacturer,
      productModel: msg.productModel,
      diameter_unit: msg.diameter_unit
    };
    this.$axios.post('insertAndUpdateBearing', data).then(function (res) {
      if (res.msg === 0) {
        that.searchLike(true);
        that.isShow.isAddRevise = false;
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }), _defineProperty(_methods, "isSetParams", function isSetParams(name) {
    if (name.indexOf('型号') === -1 && name.indexOf('品牌') === -1 && name !== '制造商') return true;else return false;
  }), _defineProperty(_methods, "viewDevice", function viewDevice() {
    this.$refs.deviceParams.classList.add('selectParams');
    this.$refs.bearing1.classList.remove('selectParams');
    this.$refs.bearing2.classList.remove('selectParams');
    this.isShow.isDeviceParams = true;
    this.isShow.isBearing1 = false;
    this.isShow.isBearing2 = false;
  }), _defineProperty(_methods, "viewBearing1", function viewBearing1(e) {
    this.$refs.deviceParams.classList.remove('selectParams');
    this.$refs.bearing1.classList.add('selectParams');
    this.$refs.bearing2.classList.remove('selectParams');
    this.isShow.isDeviceParams = false;
    this.isShow.isBearing1 = true;
    this.isShow.isBearing2 = false;
  }), _defineProperty(_methods, "viewBearing2", function viewBearing2(e) {
    this.$refs.deviceParams.classList.remove('selectParams');
    this.$refs.bearing1.classList.remove('selectParams');
    this.$refs.bearing2.classList.add('selectParams');
    this.isShow.isDeviceParams = false;
    this.isShow.isBearing1 = false;
    this.isShow.isBearing2 = true;
  }), _defineProperty(_methods, "setModelParams", function setModelParams(item, e) {
    if (this.choiceModel.index >= 0 && this.driveChain[this.choiceModel.index].system === 0) return;
    item.name = e.currentTarget.value;
    this.changeParams();
  }), _defineProperty(_methods, "changeParams", function changeParams() {
    var params = this.deviceParams,
        data = null,
        value = this.baseInfo,
        bearing1 = this.bearingParams1,
        bearing2 = this.bearingParams2;

    if (value !== null) {
      switch (value.type) {
        case '1':
          data = {
            compNum: params[2].name,
            shaft_diameter: params[3].name
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[4].name = this.posClassList[params[4].val];
            this.deviceParams[5].name = this.posLocList[params[5].val];
            data.pos_class = params[4].val;
            data.pos_loc = params[5].val;
          }

          break;

        case '2':
        case '3':
          data = {
            shaft_diameter: params[2].name
          };
          break;

        case '4':
          data = {
            compNum: params[2].val,
            shaft_diameter: params[3].name
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[4].name = this.posClassList[params[4].val];
            this.deviceParams[5].name = this.posLocList[params[5].val];
            data.pos_class = params[4].val;
            data.pos_loc = params[5].val;
          }

          break;

        case '5':
          data = {
            gear_teeth_num: params[2].name,
            shaft_diameter: params[3].name
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[4].name = this.posClassList[params[4].val];
            this.deviceParams[5].name = this.posLocList[params[5].val];
            data.pos_class = params[4].val;
            data.pos_loc = params[5].val;
          }

          break;

        case '6':
          data = {
            manufacturer: params[2].name,
            productModel: params[3].name,
            fix_teeth_num: params[4].name,
            plant_teeth_num: params[5].name,
            sun_teeth_num: params[6].name,
            planet_num: params[7].name,
            shaft_diameter: params[8].name,
            bearing1: {
              ftf: bearing1[0].name,
              bsf: bearing1[1].name,
              bpfo: bearing1[2].name,
              bpfi: bearing1[3].name
            }
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[8].name = this.posClassList[params[8].val];
            this.deviceParams[9].name = this.posLocList[params[9].val];
            data.pos_class = params[8].val;
            data.pos_loc = params[9].val;
          }

          break;

        case '7':
          data = {
            manufacturer: params[2].name,
            productModel: params[3].name,
            shaft_diameter: params[4].name,
            bearing1: {
              ftf: bearing1[0].name,
              bsf: bearing1[1].name,
              bpfo: bearing1[2].name,
              bpfi: bearing1[3].name
            }
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[5].name = this.posClassList[params[5].val];
            this.deviceParams[6].name = this.posLocList[params[6].val];
            data.pos_class = params[5].val;
            data.pos_loc = params[6].val;
          }

          break;

        case '8':
          data = {
            manufacturer1: params[2].name,
            productModel1: params[3].name,
            manufacturer2: params[4].name,
            productModel2: params[5].name,
            shaft_diameter: params[6].name,
            shaft_diameter2: params[7].name,
            bearing1: {
              ftf: bearing1[0].name,
              bsf: bearing1[1].name,
              bpfo: bearing1[2].name,
              bpfi: bearing1[3].name
            },
            bearing2: {
              ftf: bearing2[0].name,
              bsf: bearing2[1].name,
              bpfo: bearing2[2].name,
              bpfi: bearing2[3].name
            }
          };

          if (this.currentMachine.t_root == 2) {
            this.deviceParams[8].name = this.posClassList[params[8].val];
            this.deviceParams[9].name = this.posLocList[params[9].val];
            data.pos_class = params[8].val;
            data.pos_loc = params[9].val;
          }

          break;

        case '9':
          data = {
            manufacturer: params[2].name,
            productModel: params[3].name,
            fix_teeth_num: params[4].name,
            plant_teeth_num: params[5].name,
            sun_teeth_num: params[6].name,
            planet_num: params[7].name,
            shaft_diameter: params[8].name,
            bearing1: {
              ftf: bearing1[0].name,
              bsf: bearing1[1].name,
              bpfo: bearing1[2].name,
              bpfi: bearing1[3].name
            }
          };
          break;

        case '10':
          data = {
            manufacturer: params[2].name,
            productModel: params[3].name,
            fix_teeth_num: params[4].name,
            plant_teeth_num: params[5].name,
            sun_teeth_num: params[6].name,
            planet_num: params[7].name,
            shaft_diameter: params[8].name,
            bearing1: {
              ftf: bearing1[0].name,
              bsf: bearing1[1].name,
              bpfo: bearing1[2].name,
              bpfi: bearing1[3].name
            }
          };
          break;

        default:
          data = {};
          break;
      }

      data.type = value.type;
      data.id = value.id;
      value.name = params[0].name; //部件信息的名称也要更新

      data.name = params[0].name;
      this.$emit('setParams', data);
    }
  }), _methods),
  created: function created() {
    this.token = sessionStorage.getItem('token');
    this.getChainModel(); // this.getDeviceMsg();
  },
  watch: {
    baseInfo: {
      handler: function handler(val, oldVal) {
        var params = this.deviceParams,
            bearing1 = this.bearingParams1,
            bearing2 = this.bearingParams2;

        if (val) {
          this.viewDevice();
          this.deviceParams = [{
            title: '名称:',
            name: val.name
          }, {
            title: '类型:',
            name: this.modelType(val.type)
          }];
          this.bearingParams1.length = 0;
          this.bearingParams2.length = 0;
          var info = val.baseInfo;
          console.log(val);

          switch (val.type) {
            case '1':
              this.deviceParams.push({
                title: '叶片数目:',
                name: info.compNum
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              });

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '2':
            case '3':
              this.deviceParams.push({
                title: '轴径:',
                name: info.shaft_diameter
              });
              break;

            case '4':
              var idx;

              if (this.speedPos.length > 0) {
                this.speedPos.forEach(function (speed, index) {
                  if (speed.pos_id == info.compNum) idx = index;
                });
              }

              this.deviceParams.push({
                title: '速度测点',
                name: info.compNum >= 0 ? this.speedPos[idx].pos_name : '',
                val: info.compNum
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              });

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '5':
              this.deviceParams.push({
                title: '齿数:',
                name: info.gear_teeth_num
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              });

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '6':
              this.deviceParams = this.deviceParams.concat([{
                title: '制造商:',
                name: info.manufacturer
              }, {
                title: '型号:',
                name: info.productModel
              }, {
                title: '定齿数:',
                name: info.fix_teeth_num
              }, {
                title: '行星轮齿数:',
                name: info.plant_teeth_num
              }, {
                title: '太阳轮齿数:',
                name: info.sun_teeth_num
              }, {
                title: '行星轮个数:',
                name: info.planet_num
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              }]);
              this.bearingParams1 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi, 3)
              }];

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '7':
              this.deviceParams = this.deviceParams.concat([{
                title: '制造商:',
                name: info.manufacturer
              }, {
                title: '型号:',
                name: info.productModel
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              }]);
              this.bearingParams1 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi, 3)
              }];

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '8':
              this.deviceParams = this.deviceParams.concat([{
                title: '前轴承品牌:',
                name: info.manufacturer1
              }, {
                title: '前轴承型号:',
                name: info.productModel1
              }, {
                title: '后轴承品牌:',
                name: info.manufacturer2
              }, {
                title: '后轴承型号:',
                name: info.productModel2
              }, {
                title: '前轴径:',
                name: info.shaft_diameter
              }, {
                title: '后轴径:',
                name: info.shaft_diameter2
              }]);
              this.bearingParams1 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf1, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf1, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo1, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi1, 3)
              }];
              this.bearingParams2 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf2, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf2, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo2, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi2, 3)
              }];

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '9':
              this.deviceParams = this.deviceParams.concat([{
                title: '制造商:',
                name: info.manufacturer
              }, {
                title: '型号:',
                name: info.productModel
              }, {
                title: '定齿数:',
                name: info.fix_teeth_num
              }, {
                title: '行星轮齿数:',
                name: info.plant_teeth_num
              }, {
                title: '太阳轮齿数:',
                name: info.sun_teeth_num
              }, {
                title: '行星轮个数:',
                name: info.planet_num
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              }]);
              this.bearingParams1 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi, 3)
              }];

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;

            case '10':
              this.deviceParams = this.deviceParams.concat([{
                title: '制造商:',
                name: info.manufacturer
              }, {
                title: '型号:',
                name: info.productModel
              }, {
                title: '定齿数:',
                name: info.fix_teeth_num
              }, {
                title: '行星轮齿数:',
                name: info.plant_teeth_num
              }, {
                title: '太阳轮齿数:',
                name: info.sun_teeth_num
              }, {
                title: '行星轮个数:',
                name: info.planet_num
              }, {
                title: '轴径:',
                name: info.shaft_diameter
              }]);
              this.bearingParams1 = [{
                title: 'FTF:',
                name: this.fixed(info.ftf, 3)
              }, {
                title: 'BSF:',
                name: this.fixed(info.bsf, 3)
              }, {
                title: 'BPFO:',
                name: this.fixed(info.bpfo, 3)
              }, {
                title: 'BPFI:',
                name: this.fixed(info.bpfi, 3)
              }];

              if (this.currentMachine.t_root == 2) {
                this.deviceParams.push({
                  title: '部件分类',
                  name: this.posClassList[info.pos_class],
                  val: info.pos_class
                }, {
                  title: '位号',
                  name: this.posLocList[info.pos_loc],
                  val: info.pos_loc
                });
              }

              break;
          }

          ;
          this.deviceParams.push({
            title: '传动比:',
            name: val.speedRate
          });
        } else {
          this.deviceParams = [];
        }
      },
      deep: true
    },
    likeManufacturer: function likeManufacturer() {
      var data = this.deviceMsg;
      var msg = [];

      if (this.likeManufacturer === '') {
        for (var i = 0, l = data.length; i < l; i++) {
          msg.push(data[i].manufacturer);
        }
      } else {
        var reg = new RegExp(this.likeManufacturer, 'i', 'g');

        for (var _i10 = 0, _l9 = data.length; _i10 < _l9; _i10++) {
          // if (data[i].manufacturer.indexOf(this.likeManufacturer) !== -1)
          if (reg.test(data[_i10].manufacturer)) msg.push(data[_i10].manufacturer);
        }
      } // this.manufacturer = msg.concat();


      msg.length = 0;
      this.isShow.clickLikeManufacturer || (this.isShow.showManufacturer = true);
      this.isShow.clickLikeManufacturer = false;
    },
    likeDeviceModel: function likeDeviceModel() {
      var data = this.deviceMsg;
      var msg = [];

      if (this.likeDeviceModel === '') {
        for (var i = 0, l = data.length; i < l; i++) {
          msg.push(data[i].productModel);
        }
      } else {
        var reg = new RegExp(this.likeDeviceModel, 'i', 'g');

        for (var _i11 = 0, _l10 = data.length; _i11 < _l10; _i11++) {
          if (reg.test(data[_i11].productModel)) // if (data[i].productModel.indexOf(this.likeManufacturer) !== -1)
            msg.push(data[_i11].productModel);
        }
      }
      /*this.productModel = msg.concat();*/


      msg.length = 0;
      this.isShow.clickLikeDeviceModel || (this.isShow.showDeviceModel = true);
      this.isShow.clickLikeDeviceModel = false;
    },
    currentMachine: {
      handler: function handler(val) {
        if (val.name !== '') {
          this.choiceModel = {
            index: -1,
            name: ''
          };
          var models = this.$refs.models;

          if (models && models != undefined) {
            for (var i = 0, l = models.length; i < l; i++) {
              models[i].classList.remove('check');
            }
          }
        }
      },
      deep: true
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/Device.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/MyContentTitle */ "./src/components/common/MyContentTitle.vue");
/* harmony import */ var components_content_device_MyMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/content/device/MyMachine */ "./src/components/content/device/MyMachine.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "device",
  data: function data() {
    return {
      title: '数字双胞胎'
    };
  },
  created: function created() {
    this.$emit('ievent', 1);
  },
  methods: {
    getTitle: function getTitle(str) {
      this.title = str;
    }
  },
  mounted: function mounted() {// document.getElementById('content').style.height = window.innerHeight - document.getElementById('header').offsetHeight + 'px';
  },
  components: {
    MyMachine: components_content_device_MyMachine__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyContentTitle: components_common_MyContentTitle__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/MyMachine.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/MyMachine.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var components_content_device_ChainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/content/device/ChainModel */ "./src/components/content/device/ChainModel.vue");
/* harmony import */ var assets_lib_FileSave_FileSaver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/lib/FileSave/FileSaver.js */ "./src/assets/lib/FileSave/FileSaver.js");
/* harmony import */ var assets_lib_FileSave_FileSaver_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_lib_FileSave_FileSaver_js__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MyMachine",
  data: function data() {
    return {
      img: {
        edit: __webpack_require__(/*! assets/img/chainModel/edit.svg */ "./src/assets/img/chainModel/edit.svg")
      },
      show: false,
      //组织下拉框
      value: "",
      //所选组织
      chooseBaseModel: '',
      //所选基准模型
      hasMacChain: "",
      //所选基准模型是否有传动链
      modelShow: false,
      //基准模型下拉框
      token: '',
      // token
      organization: [],
      machine: [],
      // 机组信息
      choiceOrganization: '0_99',
      // 当前选择组织的信息
      isSendStandChain: true,
      //是否发送更改传动链模型的数据
      isShow: {
        // 显隐控制
        sync: false,
        // 是否隐藏同步按钮
        choiceMachine: -1,
        // 点击同步按钮时选择的机组下标
        params: 1,
        // 显示设备参数或轴承参数
        loadModel: false,
        // 是否显示传动链模型加载提示
        editModel: false,
        // 是否显示传动链编辑按钮
        isEdit: false,
        // 是否显示可编辑状态
        isRightClick: false,
        // 是否显示右键信息
        isClickBaseDrag: false,
        // 是否点击设置基准转速
        isAlert: false,
        // 是否显示弹窗
        isAlarm: false,
        // 是否显示编辑确认警告
        isTip: false,
        // 是否显示删除组件提示框
        isSaveChain: false,
        // 是否显示保存传动链错误信息框
        isRect: false // 是否显示框选

      },
      macOrModel: '',
      // 当前传动链是机组还是模型库
      choiceMachine: {
        // 当前选择的机组信息
        index: 0,
        name: '',
        chainName: '',
        t_root: ''
      },
      syncMachine: [],
      modelImg: [// 模型组件
      {
        url: __webpack_require__(/*! assets/img/chainModel/1.gif */ "./src/assets/img/chainModel/1.gif"),
        name: '叶轮',
        id: 0
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/2.gif */ "./src/assets/img/chainModel/2.gif"),
        name: '轴',
        id: 1
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/3.gif */ "./src/assets/img/chainModel/3.gif"),
        name: '固定联轴节',
        id: 2
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/4.gif */ "./src/assets/img/chainModel/4.gif"),
        name: '测点',
        id: 3
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/5.gif */ "./src/assets/img/chainModel/5.gif"),
        name: '齿轮',
        id: 4
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/6.gif */ "./src/assets/img/chainModel/6.gif"),
        name: '行星齿轮',
        id: 5
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/7.gif */ "./src/assets/img/chainModel/7.gif"),
        name: '轴承',
        id: 6
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/8.gif */ "./src/assets/img/chainModel/8.gif"),
        name: '电机',
        id: 7
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/6.gif */ "./src/assets/img/chainModel/6.gif"),
        name: '内齿圈行星齿轮',
        id: 8
      }, {
        url: __webpack_require__(/*! assets/img/chainModel/6.gif */ "./src/assets/img/chainModel/6.gif"),
        name: '差动行星齿轮',
        id: 9
      }],
      modelPos: [],
      // 模型位置信息
      deviceMsg: null,
      // 选中设备信息
      ctx: null,
      // 画笔
      driveChain: [],
      // 传动链模型库
      dragMsg: null,
      // 拖入传动链的组件图片信息
      chainModelMsg: {
        modelId: '',
        // 传动链模型 id
        macId: '',
        // 机组 id
        macModelName: '' // 传动链模型名称

      },
      saveModelPos: null,
      // 修改后的传动链信息
      rightClickMsg: {
        // 右键选中传动链组件
        index: -1,
        // 右键选中组件下标
        data: null // 右键选中组件信息

      },
      ids: [],
      // 当前传动链所有部件 id
      chainModel: null,
      // 当前选中传动链模型
      alertMsg: [],
      // 警告框信息
      rectStyle: {},
      // 传动链框选框样式(位置、大小)
      mousePos: null,
      // 框选时鼠标位置
      frameSelect: [],
      // 框选选中的组件下标
      isMove: false,
      // 是否框选状态
      isDown: false,
      // 是否按下鼠标框选
      speedPos: [],
      // 当前机组下所有转速测点
      chainModelSystem: 1,
      // 当前选中传动链模型 system
      baseDrag: {
        // 设置基准转速测点组件
        lt: null,
        // 左上角第一个组件
        bd: null,
        // 已设置基准转速测点组件
        sm: null // 测点组件 (itemtype: 4)

      },
      srcModelPos: [],
      // 传动链原始组态srcModelPos
      loadText: '',
      // 加载数据提示
      chainVal: "",
      //搜索传动链名称
      origMachine: [],
      //获取的原始机组传动链信息
      macChainName: "",
      //更改的传动链名
      red: 'red',
      clickFolder: false //是否点击组织刷新传动链

    };
  },
  computed: {
    sortMachine: function sortMachine() {
      return this.machine.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('name'));
    }
  },
  created: function created() {
    var that = this;

    window.onkeydown = function (e) {
      if (e.ctrlKey) {
        //其他几个类似shiftkey,altkey,metakey
        if (e.keyCode === 86) {
          //ctrl+v粘贴多部件
          var list = [];
          var frameList = [];
          var k = that.modelPos.length - 1;

          if (that.frameSelect.length) {
            for (var i = 0; i < that.modelPos.length; i++) {
              var item = that.modelPos[i];

              if (that.frameSelect.includes(i)) {
                var obj = JSON.parse(JSON.stringify(item)); //深度克隆一个对象

                obj.id = Number(that.modelPos.length + list.length + 1).toString();
                obj.style.zIndex += 1;
                obj.x += 10;
                obj.y += 10;
                obj.style.left = obj.x + 'px';
                obj.style.top = obj.y + 'px';
                list.push(obj);
                k += 1;
                frameList.push(k);
              }
            }

            that.modelPos = that.modelPos.concat(list);
            that.frameSelect = frameList;

            for (var _i = 0; _i < that.modelPos.length; _i++) {
              if (that.frameSelect.includes(_i)) {
                that.getModelMsg(_i);
              }
            }
          }
        }
      }
    };
  },
  methods: {
    closeShow: function closeShow() {
      this.show = false;
      this.modelShow = false;
    },
    openValue: function openValue() {
      this.show = !this.show;
    },
    openValue2: function openValue2() {
      this.modelShow = !this.modelShow;
      var machineIndex = parseInt(this.choiceMachine.index);
      this.$refs.machines[machineIndex] && this.$refs.machines[machineIndex].classList.remove('check');
      this.$refs.machines[machineIndex].classList.remove('active');
    },
    getvalue: function getvalue(index, item) {
      this.chainVal = '';
      this.value = item.name;
      this.choiceOrganization = item.id + '_' + item.tRoot;
      this.show = false;
      this.choiceMachine = {
        index: 0,
        name: '',
        chainName: '',
        t_root: ''
      };
      this.getFolder();
    },
    getModelValue: function getModelValue(index, item) {
      this.chooseBaseModel = item.model + '_' + item.name;
      this.modelShow = false;
      var data = {
        mac_id: item.macId,
        ch_class: item.chClass,
        t_root: item.chClass
      };
      this.ifHasMacChain(data);
    },
    // 判断机组是否有传动链
    ifHasMacChain: function ifHasMacChain(data) {
      var _this = this;

      this.$axios.post('queryDriveChainInfoByMachineId', data).then(function (res) {
        var driveChain = res.driveChain;

        if (driveChain) {
          var _data = res.driveChain.itemList;

          if (_data != undefined && _data.length > 0) {
            _this.hasMacChain = true;
          } else {
            _this.hasMacChain = false;
          }
        } else {
          _this.hasMacChain = false;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    //弹出框可拖动
    moveAlertBox: function moveAlertBox(event) {
      var isMove = true;
      var abs_x = event.pageX - parseInt($("div.alertBox").css("left"));
      var abs_y = event.pageY - parseInt($("div.alertBox").css("top"));
      $(document).mousemove(function (event) {
        if (isMove) {
          var obj = $('div.alertBox');
          var left_x = event.pageX - abs_x;
          var top_y = event.pageY - abs_y;
          obj.css({
            'left': left_x,
            'top': top_y
          });
        }
      }).mouseup(function () {
        isMove = false;
      });
    },
    //搜索传动链名称过滤
    searchMacChain: function searchMacChain() {
      var reg = RegExp(this.chainVal);
      var that = this;

      if (that.chainVal.length > 0) {
        that.machine = []; // 过滤需要的数据

        for (var i = 0; i < that.origMachine.length; i++) {
          if (reg.test(that.origMachine[i].model) || reg.test(that.origMachine[i].name)) {
            that.machine.push(that.origMachine[i]);
          }
        }
      } else {
        that.machine = that.origMachine.concat();
      }
    },
    //全选
    chooseAll: function chooseAll() {
      for (var i = 0; i < this.machine.length; i++) {
        this.machine[i].isCheck = true;
      }
    },
    //反选
    noChooseAll: function noChooseAll() {
      for (var i = 0; i < this.machine.length; i++) {
        this.machine[i].isCheck = !this.machine[i].isCheck;
      }
    },
    // 是否为函数
    isFunction: function isFunction(value) {
      return Object.prototype.toString.call(value) === '[object Function]';
    },
    // 是否为有效的数组长度
    isLength: function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
    },
    // 是否为类数组
    isArrayLike: function isArrayLike(value) {
      return value != null && this.isLength(value.length) && !this.isFunction(value);
    },
    // 获取数据类型
    getRawType: function getRawType(value) {
      return Object.prototype.toString.call(value).slice(8, -1);
    },
    // 判断数据是不是 Object 类型
    isPlainObject: function isPlainObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },
    // 检查是不是原始数据
    isPrimitive: function isPrimitive(value) {
      return this.isStatic(value) || _typeof(value) === 'symbol';
    },
    // 判断数据是否为原始类型
    isStatic: function isStatic(val) {
      return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' || typeof val === 'undefined' || val === null;
    },
    // 复制对象
    cloneObj: function cloneObj(val, deep) {
      var _this2 = this;

      if (this.isStatic(val)) return val;

      if (Array.isArray(val)) {
        return val.map(function (item) {
          return deep ? _this2.cloneObj(item, deep) : item;
        });
      } else if (_typeof(val) === 'object') {
        var wType = ['Error', 'Date', 'RegExp'];
        var type = Object.prototype.toString.call(val).slice(8, -1);
        if (wType.includes(type)) return new window[type](val);
        var tag = {};

        for (var key in val) {
          tag[key] = deep ? this.cloneObj(val[key], deep) : val[key];
        }

        return tag;
      }
    },
    //  选择组织 获取机组/机泵
    getFolder: function getFolder() {
      var _this3 = this;

      if (this.choiceOrganization !== '0_99') {
        var strArr = this.choiceOrganization.split('_');
        var params = {
          t_id: strArr[0],
          t_root: strArr[1]
        };
        this.deviceMsg = null;
        this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
        this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
        this.isShow.loadModel = true;
        this.isShow.editModel = false;
        /*this.choiceMachine = {
            index: 0,
            name: '',
            chainName: ''
        }*/

        this.machine.length = 0;
        this.modelPos.length = 0;
        var that = this;
        this.$axios.post('queryMachinesAndDriveChain', params).then(function (res) {
          var data = res.machine_driveChain_list;
          var msg = []; // l = data.length;

          if (data != undefined && data.length > 0) {
            var l = data.length;
            that.loadText = '数据加载中...';

            if (params.t_root === '1' || params.t_root === '2' || params.t_root === '-1') {
              for (var i = 0; i < l; i++) {
                msg.push({
                  chClass: data[i].ch_class,
                  pumpId: data[i].pump_id,
                  pumpName: data[i].pump_name,
                  name: data[i].pump_name,
                  //水泥展示pump_name而不是mac_name
                  macId: data[i].mac_id,
                  model: data[i].macModelName,
                  modelId: data[i].macModelId,
                  t_root: params.t_root,
                  isCheck: false
                });
              }
            } else {
              for (var _i2 = 0; _i2 < l; _i2++) {
                msg.push({
                  chClass: '0',
                  name: data[_i2].mac_me,
                  macId: data[_i2].mac_id,
                  model: data[_i2].macModelName,
                  modelId: data[_i2].macModelId,
                  t_root: params.t_root,
                  isCheck: false
                });
              }
            }

            if (that.choiceMachine.name === '' && that.choiceMachine.chainName === '') {
              // if (that.choiceMachine.name === '' && data[0].macModelName !== '') {
              that.choiceMachine = {
                name: data[0].mac_me,
                index: 0,
                chainName: data[0].macModelName,
                t_root: params.t_root
              };
            }

            that.origMachine = that.cloneObj(msg, true);
            that.machine = that.cloneObj(msg, true);
            var machineIndex;
            machineIndex = parseInt(that.choiceMachine.index);
            that.choiceMachine.chainName = that.sortMachine[machineIndex].model;
            setTimeout(function () {
              that.$refs.machines[machineIndex] && that.$refs.machines[machineIndex].classList.add('check');
              that.$refs.machines[machineIndex].classList.add('active');
            });
            msg.length = 0;
            that.getChain();
            _this3.chooseBaseModel = _this3.sortMachine[0].model + '_' + _this3.sortMachine[0].name;
            that.isShow.editModel = true;
          } else {
            that.isShow.editModel = true;
            that.loadText = '当前机组无传动链数据';
            that.ctx.model.clearRect(0, 0, that.$refs.modelCanvas.width, that.$refs.modelCanvas.height);
            that.ctx.operat.clearRect(0, 0, that.$refs.operat.width, that.$refs.operat.height);
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.isShow.loadModel = false;
        this.loadText = '';
        this.machine.length = 0;
        this.origMachine.length = 0;
        this.modelPos.length = 0;
        this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
        this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      }
    },
    //  点击同步按钮
    sync: function sync() {
      if (this.choiceOrganization !== '0_99') {
        this.isShow.sync = true;
        this.isShow.choiceMachine = this.choiceMachine.index;
        var that = this;
        this.machine.forEach(function (item, index) {
          that.$refs.machines[index].classList.remove('check');
          that.$refs.machines[index].classList.remove('active');
          var itemVal = item.model + '_' + item.name;

          if (itemVal == that.chooseBaseModel) {
            that.$refs.machines[index].classList.add('check');
            that.$refs.machines[index].classList.add('active');
            var chooseBaseMac = that.machine[index];
            var data = {
              mac_id: chooseBaseMac.macId,
              ch_class: chooseBaseMac.chClass,
              t_root: chooseBaseMac.t_root
            };
            that.ifHasMacChain(data);
          }
        });
      } else {
        swal({
          title: "提示",
          text: "请选择组织",
          button: "确认"
        });
      }
    },
    //  点击确认同步按钮
    yes: function yes() {
      if (this.choiceOrganization !== '0_99') {
        if (this.hasMacChain) {
          var machine = this.machine;
          var data = {
            selectedMachine: null,
            syncMachines: []
          };

          for (var i = 0, l = machine.length; i < l; i++) {
            var syncVal = machine[i].model + '_' + machine[i].name;

            if (syncVal == this.chooseBaseModel) {
              data.selectedMachine = {
                selectedMachineId: this.machine[i].macId,
                ch_class: this.machine[i].chClass,
                t_root: this.machine[i].t_root
              };
            }

            if (machine[i].isCheck) {
              if (this.machine[i].t_root == 1 || this.machine[i].t_root == 2 || this.machine[i].t_root == -1) {
                data.syncMachines.push({
                  syncMachineId: machine[i].macId,
                  ch_class: this.machine[i].chClass,
                  t_root: this.machine[i].t_root,
                  pump_name: this.machine[i].pumpName
                });
              } else {
                data.syncMachines.push({
                  syncMachineId: machine[i].macId,
                  ch_class: this.machine[i].chClass,
                  t_root: this.machine[i].t_root
                });
              }
            }
          }

          if (data.syncMachines.length === 0) {
            swal({
              title: "提示",
              text: "请选择需要被同步的传动链",
              button: "确认"
            });
            return;
          }

          if (data.selectedMachine === null) {
            swal({
              title: "提示",
              text: "请选择基准模型",
              button: "确认"
            });
            return;
          }

          var that = this;
          this.$axios.post('updateSyncDriveChain', data).then(function (res) {
            if (res.msg === 0) {
              swal({
                title: "提示",
                text: "同步成功",
                button: "确认"
              });

              for (var _i3 = 0, _l = machine.length; _i3 < _l; _i3++) {
                machine[_i3].isCheck && (machine[_i3].isCheck = false);
              }

              that.getFolder();
            } else if (res.msg === 1) {
              swal({
                title: "提示",
                text: "同步失败",
                button: "确认"
              });
            } else if (res.msg === 4) {
              swal({
                title: "提示",
                text: "".concat(res.macName, "\u673A\u7EC4\u540C\u6B65\u540E\u4F20\u52A8\u94FE\u6570\u91CF\u5C06\u8D85\u8FC764"),
                button: "确认"
              });

              for (var _i4 = 0, _l2 = machine.length; _i4 < _l2; _i4++) {
                machine[_i4].isCheck && (machine[_i4].isCheck = false);
              }

              that.getFolder();
            } else if (res.msg === 5) {
              swal({
                title: "提示",
                text: "绑定转速测点的机泵传动链不能作为同步基准",
                button: "确认"
              });

              for (var _i5 = 0, _l3 = machine.length; _i5 < _l3; _i5++) {
                machine[_i5].isCheck && (machine[_i5].isCheck = false);
              }

              that.getFolder();
            }
          })["catch"](function (err) {
            console.log(err);
          });
          this.$refs.machines[this.isShow.choiceMachine].classList.remove('active');
          this.isShow.sync = false;
          this.isShow.choiceMachine = -1;
        } else {
          swal({
            title: "提示",
            text: "所选基准模型没有传动链",
            button: "确认"
          });
        }
      } else {
        swal({
          title: "提示",
          text: "请选择组织",
          button: "确认"
        });
      }
    },
    //  点击取消同步按钮
    no: function no() {
      if (this.choiceOrganization != 0) {
        this.$refs.machines[this.isShow.choiceMachine].classList.remove('active');
        this.isShow.sync = false;
        this.isShow.choiceMachine = -1;
      } else {
        swal({
          title: "提示",
          text: "请选择组织",
          button: "确认"
        });
      }
    },
    //  点击机组
    getMachine: function getMachine(item, index) {
      // if (index !== this.choiceMachine.index || this.choiceMachine.name === '') {
      this.deviceMsg = null;
      var data = this.$refs.machines; // if (!this.isShow.sync) {

      this.choiceMachine = {
        index: index,
        name: item.name,
        chainName: item.model,
        t_root: item.t_root
      };
      this.choiceMachine.index = index;
      this.choiceMachine.name = item.name;
      this.choiceMachine.chainName = item.model;
      this.choiceMachine.t_root = item.t_root;
      this.chainModelSystem = 1;

      for (var i = 0, l = data.length; i < l; i++) {
        if (i === index) {
          data[i].classList.add('check');
          data[i].classList.add('active');
        } else {
          data[i].classList.remove('check');
          data[i].classList.remove('active');
        }
      }

      this.getChain(); // } else {
      //     for (let i = 0, l = data.length; i < l; i++) {
      //         if (i === index && i !== this.isShow.choiceMachine) data[i].classList.add('check');
      //         else data[i].classList.remove('check');
      //     }
      // }
      // }
    },
    //  获取同步机组
    getSync: function getSync(item, index) {
      if (this.isShow.sync) {
        item.isCheck = !item.isCheck;
      }
    },
    //  获取传动链组态
    getChain: function getChain() {
      this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
      this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      this.isShow.loadModel = true;
      this.isShow.editModel = false;
      var that = this,
          index = this.choiceMachine.index,
          data = {
        mac_id: this.sortMachine[index].macId,
        ch_class: this.sortMachine[index].chClass,
        t_root: this.sortMachine[index].t_root
      };
      this.modelPos.length = 0;
      this.$axios.post('queryDriveChainInfoByMachineId', data).then(function (res) {
        var driveChain = res.driveChain;

        if (driveChain) {
          that.chainModelMsg = {
            macModelId: res.driveChain.macModelId,
            mac_id: res.mac_id,
            macModelName: res.driveChain.macModelName
          };
          var _data2 = res.driveChain.itemList;
          var msg = []; // l = data.length;

          if (_data2 != undefined && _data2.length > 0) {
            that.loadText = '数据加载中...';

            for (var i = 0, l = _data2.length; i < l; i++) {
              var transform = '';

              if (Number(_data2[i].scaleX) === -1) {
                transform = 'rotateY(180deg)';
              } else {
                _data2[i].scaleX = 1;
                transform = '';
              }

              msg.push({
                url: that.modelImg[_data2[i].itemtype - 1].url,
                x: Number(_data2[i].position_x),
                y: Number(_data2[i].position_y),
                style: {
                  left: _data2[i].position_x + 'px',
                  top: _data2[i].position_y + 'px',
                  transform: transform,
                  zIndex: 2
                },
                line: that.linePos(_data2[i].itemtype),
                size: that.modelSize(_data2[i].itemtype),
                type: _data2[i].itemtype,
                id: _data2[i].id,
                left: _data2[i].left,
                right: _data2[i].right,
                left2: _data2[i].left2,
                baseInfo: _data2[i].baseInfo,
                name: _data2[i].name,
                ch_class: _data2[i].ch_class,
                speedRate: _data2[i].speedRate,
                isBaseDrag: _data2[i].isBaseDrag,
                scaleX: _data2[i].scaleX,
                //是否翻转
                up: null,
                down: null
              });
            }

            that.speedPos = res.positions;
            that.macOrModel = 'mac';
            that.srcModelPos = that.cloneObj(msg, true);
            that.modelPos = that.cloneObj(msg, true);
            that.isShow.editModel = true;
            that.drawModel();
            msg.length = 0;
          } else {
            that.isShow.editModel = true;
            that.loadText = '当前机组无传动链数据';
            that.ctx.model.clearRect(0, 0, that.$refs.modelCanvas.width, that.$refs.modelCanvas.height);
            that.ctx.operat.clearRect(0, 0, that.$refs.operat.width, that.$refs.operat.height);
          }
        } else {
          that.srcModelPos.length = 0;
          that.isShow.editModel = true;
          that.loadText = '当前机组无传动链数据';
          that.ctx.model.clearRect(0, 0, that.$refs.modelCanvas.width, that.$refs.modelCanvas.height);
          that.ctx.operat.clearRect(0, 0, that.$refs.operat.width, that.$refs.operat.height);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    // 判断连线位置
    linePos: function linePos(itemtype) {
      var pos = [{
        // 1.叶轮
        lx: 0,
        ly: 53,
        b: 96,
        rx: 75,
        ry: 53
      }, {
        // 2.轴
        lx: 0,
        ly: 15,
        b: 30,
        rx: 80,
        ry: 15
      }, {
        // 3.联轴器
        lx: 0,
        ly: 33,
        b: 66,
        rx: 70,
        ry: 33
      }, {
        // 4.速度
        lx: 0,
        ly: 48,
        b: 72,
        rx: 57,
        ry: 48
      }, {
        // 5.齿轮
        lx: 0,
        ly: 37,
        bx: 29,
        by: 74,
        b: 74,
        rx: 58,
        ry: 37,
        tx: 29,
        ty: 0
      }, {
        // 6.行星齿轮
        lx: 0,
        ly: 38,
        lx2: -5,
        ly2: 38,
        b: 76,
        rx: 70,
        ry: 38,
        rx2: 5,
        ry2: 38
      }, {
        // 7.轴承
        lx: 0,
        ly: 42,
        b: 84,
        rx: 70,
        ry: 42
      }, {
        // 8.发电机
        lx: 0,
        ly: 40,
        b: 80,
        rx: 132,
        ry: 40
      }, {
        // 9.内齿圈行星齿轮
        lx: 0,
        ly: 38,
        b: 76,
        rx: 70,
        ry: 38,
        x2: 5,
        y2: 38
      }, {
        // 10.差动行星齿轮
        lx: 0,
        ly: 38,
        lx2: -5,
        ly2: 38,
        rx: 70,
        ry: 38,
        rx2: 5,
        ry2: 38,
        b: 76
      }];
      return pos[itemtype - 1];
    },
    //  模型图大小
    modelSize: function modelSize(itemtype) {
      var size = [{
        w: 75,
        h: 96
      }, {
        w: 80,
        h: 30
      }, {
        w: 70,
        h: 64
      }, {
        w: 57,
        h: 72
      }, {
        w: 58,
        h: 74
      }, {
        w: 70,
        h: 76
      }, {
        w: 70,
        h: 84
      }, {
        w: 132,
        h: 80
      }, {
        w: 70,
        h: 76
      }, {
        w: 70,
        h: 76
      }];
      return size[itemtype - 1];
    },
    // 画模型图连线
    drawModel: function drawModel() {
      this.ctx.model.beginPath();
      this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
      this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      var model = this.modelPos;

      for (var i = 0, l = model.length; i < l; i++) {
        var item1 = model[i],
            line = item1.line,
            lx1 = item1.line.lx + item1.x,
            ly1 = item1.line.ly + item1.y,
            rx1 = item1.line.rx + item1.x,
            ry1 = item1.line.ry + item1.y,
            b1 = item1.line.b;

        if (item1.isBaseDrag === '1') {
          this.ctx.model.beginPath();
          this.ctx.model.arc(item1.x, item1.line.b + item1.y, 2, 0, Math.PI * 2);
          this.ctx.model.fill();
          this.ctx.model.beginPath();
        }

        for (var j = 0; j < l; j++) {
          var item2 = model[j],
              lx2 = item2.line.lx + item2.x,
              ly2 = item2.line.ly + item2.y,
              rx2 = item2.line.rx + item2.x,
              ry2 = item2.line.ry + item2.y,
              b2 = item2.line.b;

          if (Math.abs(lx2 - rx1) >= 5 && Math.abs(lx2 - rx1) <= 20 && ly2 === ry1) {
            item1.right = item2.id;
            item2.left = item1.id;
            this.ctx.model.moveTo(rx1, ry1);
            this.ctx.model.lineTo(lx2, ly2);
          } else if (Math.abs(lx1 - rx2) >= 5 && Math.abs(lx1 - rx2) <= 20 && ly1 === ry2) {
            item1.left = item2.id;
            item2.right = item1.id;
            this.ctx.model.moveTo(rx2, ry2);
            this.ctx.model.lineTo(lx1, ly1);
          }

          if (item1.type === '10' && (item2.type === '6' || item2.type === '9')) {
            if (ly2 === ly1 && lx1 > lx2 && (!item1.style.transform || item1.style.transform === '')) {
              item1.left2 = item2.id;
              this.ctx.model.moveTo(lx1 - 5, ly1);
              this.ctx.model.lineTo(lx1 - 5, item2.y - 2);
              this.ctx.model.moveTo(lx1 - 5, item2.y - 2);
              this.ctx.model.lineTo(lx2 - 5, item1.y - 2);
              this.ctx.model.moveTo(lx2 - 5, item1.y - 2);
              this.ctx.model.lineTo(lx2 - 5, ly2);
            } else if (ry2 === ry1 && rx2 > rx1 && item1.style.transform === 'rotateY(180deg)') {
              item1.left2 = item2.id;
              this.ctx.model.moveTo(rx1 + 5, ry1);
              this.ctx.model.lineTo(rx1 + 5, item1.y - 2);
              this.ctx.model.moveTo(rx1 + 5, item1.y - 2);
              this.ctx.model.lineTo(rx2 + 5, item2.y - 2);
              this.ctx.model.moveTo(rx2 + 5, item2.y - 2);
              this.ctx.model.lineTo(rx2 + 5, ry2);
            }
          }
        }

        if (item1.type === '5') {
          var tx1 = item1.line.tx + item1.x,
              ty1 = item1.line.ty + item1.y,
              bx1 = item1.line.bx + item1.x,
              by1 = item1.line.by + item1.y;

          for (var _j = 0; _j < l; _j++) {
            var _item = model[_j];

            if (_item.type == 5) {
              var _b = _item.line.b,
                  tx2 = _item.line.tx + _item.x,
                  ty2 = _item.line.ty + _item.y,
                  bx2 = _item.line.bx + _item.x,
                  by2 = _item.line.by + _item.y;

              if (Math.abs(ty2 - by1) >= 5 && Math.abs(ty2 - by1) <= 20 && tx2 === bx1) {
                this.ctx.model.moveTo(tx2, ty2);
                this.ctx.model.lineTo(bx1, by1);
                item1.down = _item.id;
                _item.up = item1.id;
                break;
              } else if (Math.abs(ty1 - by2) >= 5 && Math.abs(ty1 - by2) <= 20 && tx1 === bx2) {
                this.ctx.model.moveTo(tx1, ty1);
                this.ctx.model.lineTo(bx2, by2);
                item1.up = _item.id;
                _item.down = item1.id;
                break;
              }
            }
          }
        }

        this.ctx.model.stroke();
      }

      this.isShow.loadModel = false;
      this.isShow.editModel = true;
    },
    // 点击传动链组件
    getModelMsg: function getModelMsg(index, color) {
      // ctrl键+点击可以选中所有选中的
      if (window.event.ctrlKey) {
        if (this.frameSelect.indexOf(index) == -1) {
          this.frameSelect.push(index);
        }

        index = this.frameSelect;
        this.isMove = true;
      }

      this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      var model = this.modelPos,
          indexType = this.getRawType(index);
      this.ctx.operat.beginPath();
      this.ctx.operat.setLineDash([5]);

      if (color) {
        this.ctx.operat.strokeStyle = color;
      } else {
        this.ctx.operat.strokeStyle = "#000000";
      }

      if (indexType === 'Number') {
        this.isMove = false;
        this.frameSelect.length = 0;
        model[index].style.zIndex = 3;
        var s = model[index];
        var x = {
          min: s.x,
          max: s.x + s.size.w
        };
        var y = {
          min: s.y,
          max: s.y + s.size.h
        };
        this.ctx.operat.strokeRect(s.x, s.y, s.size.w + 1, s.size.h + 1);
        this.deviceMsg = {
          speedRate: s.speedRate,
          baseInfo: s.baseInfo,
          type: s.type,
          name: s.name,
          id: s.id
        };
      } else if (indexType === 'Array') {
        for (var i = 0, l = index.length; i < l; i++) {
          var _s = model[index[i]];
          var _x = {
            min: _s.x,
            max: _s.x + _s.size.w
          };
          var _y = {
            min: _s.y,
            max: _s.y + _s.size.h
          };
          this.ctx.operat.strokeRect(_s.x, _s.y, _s.size.w + 1, _s.size.h + 1);
        }

        this.deviceMsg = null;
      }
    },
    // 取消点击传动链组件效果
    cancelClick: function cancelClick() {
      if (this.isShow.isRightClick) this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);

      if (!this.isMove) {
        this.frameSelect.length = 0;
        this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      }

      this.isShow.isRightClick = false;
      this.deviceMsg = null;
      this.rightClickMsg = {
        index: -1,
        data: null
      };
    },
    // 点击编辑按钮
    edit: function edit() {
      this.$emit('getTitle', this.choiceMachine.name);
      this.isShow.isEdit = true;
      this.loadText = '';
    },
    // 传动链组态保存按钮
    editYes: function editYes(type) {
      var model = this.modelPos; // if (this.chainModelSystem === 0) {
      //     swal({
      //         title: "提示",
      //         text: "系统默认传动链无法提交,请选择一个自定义传动链!",
      //         button: "确认",
      //     });
      //     return;
      // }

      if (this.choiceMachine.chainName == '') {
        this.isShow.isAlert = false;
        this.isShow.isAlarm = false;
        swal({
          title: "提示",
          text: "\u4F20\u52A8\u94FE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A!",
          button: "确认"
        });
        return;
      }

      if (model.length > 0) {
        this.deviceMsg = null;
        this.getParams();
        var lt = null,
            // 左上角第一个部件
        bd = null,
            // 设置基准转速部件
        sm = null,
            // 转速测点部件
        length = Number.MAX_VALUE,
            isSpeed = false,
            isEmpty = true,
            chClass;

        if (type === 0) {
          if (this.machine.length > 0) {
            chClass = this.sortMachine[this.choiceMachine.index].chClass;
          } else {
            swal({
              title: "提示",
              text: "该组织下没有机组，不能提交操作!",
              button: "确认"
            });
            return;
          }
        } else {
          chClass = 0;
        }

        for (var i = 0, l = model.length; i < l; i++) {
          var item = model[i],
              s = Math.pow(item.x, 2) + Math.pow(item.x, 2),
              _type = item.type,
              baseDrag = item.isBaseDrag;
          item.ch_class !== '' && item.ch_class !== '0' && (chClass = item.ch_class);
          length > s && (length = s);
          _type === '4' && (sm = item);
          baseDrag === '1' && (bd = item);
          this.ids.push(item.id);
        }

        for (var _i6 = 0, _l4 = model.length; _i6 < _l4; _i6++) {
          var _item2 = model[_i6],
              _s2 = Math.pow(_item2.x, 2) + Math.pow(_item2.x, 2);

          (_item2.ch_class === '' || _item2.ch_class === '0' && chClass !== '') && (_item2.ch_class = chClass);
          _s2 === length && (lt = _item2);
        }

        var errFlag = this.inspectChain(lt, bd, sm);
        this.isSendStandChain = true;

        if (errFlag) {
          if (type === 0) {
            this.baseDrag = {
              lt: null,
              bd: null,
              sm: null
            };
            this.alertMsg.push('传动链有错误，不能提交操作!');
            this.isShow.isAlert = true;
            this.isShow.isSaveChain = true;
          } else if (type === 1) {
            this.alertMsg.push('传动链有错误，不能提交操作!');
            this.isShow.isAlert = true;
            this.isShow.isSaveChain = true;
            this.isSendStandChain = false;
          }
        } else {
          this.baseDrag = {
            lt: lt,
            bd: bd,
            sm: sm
          };

          if (type === 0) {
            this.isShow.isAlert = true;
            this.isShow.isAlarm = true;
          }
        }
      } else {
        if (type === 0) {
          this.isShow.isAlert = true;
          this.isShow.isAlarm = true;
        }
      }
    },
    // 检查传动链组态是否完整
    inspectChain: function inspectChain(first, speed, sm) {
      var model = this.modelPos,
          errFlags = false;
      this.alertMsg.length = 0;

      if (sm === null) {
        this.alertMsg.push('必须包含一个转速设备');
      }

      var drawIndexList = [];

      for (var i = 0, l = model.length; i < l; i++) {
        var errFlag = false;
        var item = model[i],
            baseInfo = item.baseInfo;
        var index = parseInt(item.id) - 1;

        switch (item.type) {
          case '1':
            if (baseInfo.compNum === '0') {
              this.alertMsg.push(item.name + '叶片数必须大于0!');
              errFlag = true;
            }

            break;

          case '5':
            if (baseInfo.gear_teeth_num === '0') {
              this.alertMsg.push(item.name + '齿数不能为零!');
              errFlag = true;
            }

            break;

          case '6':
            if (baseInfo.fix_teeth_num === '0') {
              this.alertMsg.push(item.name + '定轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.plant_teeth_num === '0') {
              this.alertMsg.push(item.name + '行星轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.sun_teeth_num === '0') {
              this.alertMsg.push(item.name + '冠形齿轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.planet_num === '0') {
              this.alertMsg.push(item.name + '行星轮个数不能为零!');
              errFlag = true;
            }

            if (baseInfo.manufacturer === '0') {
              this.alertMsg.push(item.name + '轴承生产厂家不能为空!');
              errFlag = true;
            }

            if (baseInfo.productModel === '0') {
              this.alertMsg.push(item.name + '轴承型号不能为空!');
              errFlag = true;
            }

            if (baseInfo.ftf === '') {
              this.alertMsg.push(item.name + '特征频率FTF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bsf === '') {
              this.alertMsg.push(item.name + '特征频率BSF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfo === '') {
              this.alertMsg.push(item.name + '特征频率BPFO不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfi === '') {
              this.alertMsg.push(item.name + '特征频率BPFI不能为空!');
              errFlag = true;
            }

            break;

          case '7':
            if (baseInfo.manufacturer === '0') {
              this.alertMsg.push(item.name + '轴承生产厂家不能为空!');
              errFlag = true;
            }

            if (baseInfo.productModel === '0') {
              this.alertMsg.push(item.name + '轴承型号不能为空!');
              errFlag = true;
            }

            if (baseInfo.ftf === '') {
              this.alertMsg.push(item.name + '特征频率FTF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bsf === '') {
              this.alertMsg.push(item.name + '特征频率BSF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfo === '') {
              this.alertMsg.push(item.name + '特征频率BPFO不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfi === '') {
              this.alertMsg.push(item.name + '特征频率BPFI不能为空!');
              errFlag = true;
            }

            break;

          case '8':
            if (baseInfo.manufacturer1 === '0') {
              this.alertMsg.push('前轴承生产厂家不能为空!');
              errFlag = true;
            }

            if (baseInfo.productModel1 === '0') {
              this.alertMsg.push('前轴承型号不能为空!');
              errFlag = true;
            }

            if (baseInfo.manufacturer2 === '0') {
              this.alertMsg.push('后轴承生产厂家不能为空!');
              errFlag = true;
            }

            if (baseInfo.productModel2 === '0') {
              this.alertMsg.push('后轴承型号不能为空!');
              errFlag = true;
            }

            if (baseInfo.ftf1 === '') {
              this.alertMsg.push('前轴承特征频率FTF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bsf1 === '') {
              this.alertMsg.push('前轴承特征频率BSF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfo1 === '') {
              this.alertMsg.push('前轴承特征频率BPFO不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfi1 === '') {
              this.alertMsg.push('前轴承特征频率BPFI不能为空!');
              errFlag = true;
            }

            if (baseInfo.shaft_diameter === '') {
              this.alertMsg.push('前轴承轴径不能为空!');
              errFlag = true;
            }

            if (baseInfo.ftf2 === '') {
              this.alertMsg.push('后轴承特征频率FTF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bsf2 === '') {
              this.alertMsg.push('后轴承特征频率BSF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfo2 === '') {
              this.alertMsg.push('后轴承特征频率BPFO不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfi2 === '') {
              this.alertMsg.push('后轴承特征频率BPFI不能为空!');
              errFlag = true;
            }

            if (baseInfo.shaft_diameter2 === '') {
              this.alertMsg.push('后轴承轴径不能为空!');
              errFlag = true;
            }

            break;

          case '9':
            if (baseInfo.fix_teeth_num === '0') {
              this.alertMsg.push(item.name + '定轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.plant_teeth_num === '0') {
              this.alertMsg.push(item.name + '行星轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.sun_teeth_num === '0') {
              this.alertMsg.push(item.name + '冠形齿轮齿数不能为零!');
              errFlag = true;
            }

            if (baseInfo.planet_num === '0') {
              this.alertMsg.push(item.name + '行星轮个数不能为零!');
              errFlag = true;
            }

            if (baseInfo.manufacturer === '0') {
              this.alertMsg.push(item.name + '轴承生产厂家不能为空!');
              errFlag = true;
            }

            if (baseInfo.productModel === '0') {
              this.alertMsg.push(item.name + '轴承型号不能为空!');
              errFlag = true;
            }

            if (baseInfo.ftf === '') {
              this.alertMsg.push(item.name + '特征频率FTF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bsf === '') {
              this.alertMsg.push(item.name + '特征频率BSF不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfo === '') {
              this.alertMsg.push(item.name + '特征频率BPFO不能为空!');
              errFlag = true;
            }

            if (baseInfo.bpfi === '') {
              this.alertMsg.push(item.name + '特征频率BPFI不能为空!');
              errFlag = true;
            }

            break;

          case '10':
            if (baseInfo.fix_teeth_num === '0') {
              this.alertMsg.push(item.name + '定轮齿数不能为零!');
              errFlag = true;
            }

            ;

            if (baseInfo.plant_teeth_num === '0') {
              this.alertMsg.push(item.name + '行星轮齿数不能为零!');
              errFlag = true;
            }

            ;

            if (baseInfo.sun_teeth_num === '0') {
              this.alertMsg.push(item.name + '冠形齿轮齿数不能为零!');
              errFlag = true;
            }

            ;

            if (baseInfo.planet_num === '0') {
              this.alertMsg.push(item.name + '行星轮个数不能为零!');
              errFlag = true;
            }

            ;

            if (baseInfo.manufacturer === '0') {
              this.alertMsg.push(item.name + '轴承生产厂家不能为空!');
              errFlag = true;
            }

            ;

            if (baseInfo.productModel === '0') {
              this.alertMsg.push(item.name + '轴承型号不能为空!');
              errFlag = true;
            }

            ;

            if (baseInfo.ftf === '') {
              this.alertMsg.push(item.name + '特征频率FTF不能为空!');
              errFlag = true;
            }

            ;

            if (baseInfo.bsf === '') {
              this.alertMsg.push(item.name + '特征频率BSF不能为空!');
              errFlag = true;
            }

            ;

            if (baseInfo.bpfo === '') {
              this.alertMsg.push(item.name + '特征频率BPFO不能为空!');
              errFlag = true;
            }

            ;

            if (baseInfo.bpfi === '') {
              this.alertMsg.push(item.name + '特征频率BPFI不能为空!');
              errFlag = true;
            }

            ;
            break;
        }

        if (errFlag) {
          drawIndexList.push(i);
        }
      }

      if (drawIndexList.length > 0) {
        this.getModelMsg(drawIndexList, this.red);
        errFlags = true;
      }
      /*设置默认基准转速，测试说不要设置，暂时注释*/
      // if (speed === null && sm !== null) sm.isBaseDrag = '1';
      // if (speed === null && sm === null) first.isBaseDrag = '1';


      return errFlags;
    },
    // 设置每个部件的 speedRate
    setSpeedRate: function setSpeedRate(lastItem, lastPos) {
      var model = this.modelPos,
          l = model.length,
          index,
          speedRate = lastItem.speedRate,
          tSpeedRate = speedRate,
          idType = lastItem.id.indexOf('_') !== -1 ? true : false,
          item = null,
          // 当前部件
      lastGear = 1,
          // 入口齿数(齿轮)
      thisGear = 1,
          // 当前齿数(齿轮)
      fix = 0,
          // 定齿数(行星轮)
      plant = 0,
          // 行星齿数(行星轮)
      sun = 0,
          // 太阳齿数(行星轮)
      lastFix = 0,
          // 前一行星轮定齿数(行星轮)
      lastPlant = 0,
          // 前一行星轮行星齿数(行星轮)
      lastSun = 0,
          // 前一行星轮太阳齿数(行星轮)
      left2 = null,
          // 前一行星齿轮
      baseRate = 1,
          // 当前部件基础转速比(输入/输出)
      plantRate = 1,
          // 当前行星轮传动比
      fixRate = 1,
          // 当前内齿圈传动比
      sunRate = 1,
          // 当前太阳轮传动比
      plant_num = 0,
          //个数(行星轮)
      lastRate = lastItem.speedRate;

      if (lastItem.up && lastPos !== 'up') {
        for (var i = 0; i < l; i++) {
          if (lastItem.up === model[i].id) {
            item = model[i];
            break;
          }
        }

        index = this.ids.indexOf(item.id);

        if (index != -1) {
          lastItem.type === '5' && (lastGear = lastItem.baseInfo.gear_teeth_num);
          item.type === '5' && (thisGear = item.baseInfo.gear_teeth_num);
          this.ids.splice(index, 1);
          item.speedRate = speedRate * lastGear / thisGear;
          this.setSpeedRate(item, 'down');
        }
      }

      if (lastItem.down && lastPos !== 'down') {
        for (var _i7 = 0; _i7 < l; _i7++) {
          if (lastItem.down === model[_i7].id) {
            item = model[_i7];
            break;
          }
        }

        index = this.ids.indexOf(item.id);

        if (index != -1) {
          lastItem.type === '5' && (lastGear = lastItem.baseInfo.gear_teeth_num);
          item.type === '5' && (thisGear = item.baseInfo.gear_teeth_num);
          this.ids.splice(index, 1);
          item.speedRate = speedRate * lastGear / thisGear;
          this.setSpeedRate(item, 'up');
        }
      }

      if (lastItem.left && lastPos !== 'left') {
        for (var _i8 = 0; _i8 < l; _i8++) {
          if (lastItem.left === model[_i8].id) {
            item = model[_i8];
            break;
          }
        }

        index = this.ids.indexOf(item.id);

        if (index != -1) {
          if (lastItem.type === '6' || lastItem.type === '9' || lastItem.type === '10' || lastItem.type === '11') {
            fix = lastItem.baseInfo.fix_teeth_num;
            plant = lastItem.baseInfo.plant_teeth_num;
            sun = lastItem.baseInfo.sun_teeth_num;
            plant_num = lastItem.baseInfo.plant_num;

            if (lastItem.type === '6') {
              baseRate = 1 / (1 + fix / sun);
              tSpeedRate = speedRate / baseRate;
            } else if (lastItem.type === '9') {
              baseRate = sun / fix;
              tSpeedRate = speedRate / baseRate;
            } else if (lastItem.type === '10' && lastItem.left2 != '') {
              var _left = null,
                  left22 = null;

              for (var _i9 = 0; _i9 < l; _i9++) {
                if (lastItem.left2 === model[_i9].type) {
                  _left = model[_i9];
                  break;
                }
              }

              plantRate = _left.speedRate;
              lastFix = _left.baseInfo.fix_teeth_num;
              lastPlant = _left.baseInfo.plant_teeth_num;
              lastSun = _left.baseInfo.sun_teeth_num;
              plant_num = _left.baseInfo.plant_num;

              switch (lef2.type) {
                case '11':
                  baseRate = (lastSun + lastFix) / lastSun;
                  fixRate = plantRate / baseRate; //上一级输出

                  break;

                case '6':
                  baseRate = 1 / (1 + lastFix / lastSun);
                  fixRate = plantRate / baseRate;
                  break;

                case '9':
                  baseRate = lastSun / lastFix;
                  fixRate = plantRate / baseRate;
                  break;

                case '10':
                  for (var _i10 = 0; _i10 < l; _i10++) {
                    if (_left.left2 === model[_i10].id) {
                      left22 = model[_i10];
                      break;
                    }
                  }

                  fixRate = (1 + lastFix / lastSun) * left22.speedRate + lastFix / lastFix * _left.speedRate;
                  break;
              }

              tSpeedRate = (1 + fix / sun) * plantRate + fix / sun * fixRate;
            }
          }

          this.ids.splice(index, 1);
          item.speedRate = tSpeedRate;
          this.setSpeedRate(item, 'right');
        }
      }

      if (lastItem.right && lastPos !== 'right') {
        for (var _i11 = 0; _i11 < l; _i11++) {
          if (lastItem.right === model[_i11].id) {
            item = model[_i11];
            break;
          }
        }

        index = this.ids.indexOf(item.id);

        if (index != -1) {
          if (lastItem.type === '6' || lastItem.type === '9' || lastItem.type === '10' || lastItem.type === '11') {
            fix = lastItem.baseInfo.fix_teeth_num;
            plant = lastItem.baseInfo.plant_teeth_num;
            sun = lastItem.baseInfo.sun_teeth_num;
            plant_num = lastItem.baseInfo.plant_num;

            if (lastItem.type === '11') {
              baseRate = (sun + fix) / sun;

              if (lastItem.scaleX == -1) {
                baseRate = 1 / baseRate;
              }

              tSpeedRate = lastRate / baseRate;
            } else if (lastItem.type === '6') {
              baseRate = 1 / (1 + fix / sun);

              if (lastItem.scaleX == -1) {
                baseRate = 1 / baseRate;
              }

              tSpeedRate = lastRate / baseRate;
            } else if (lastItem.type === '9') {
              baseRate = sun / fix;

              if (lastItem.scaleX == -1) {
                baseRate = 1 / baseRate;
              }

              tSpeedRate = lastRate / baseRate;
            } else if (lastItem.type === '10' && lastItem.left2 != '') {
              var _left2 = null,
                  _left3 = null;

              for (var _i12 = 0; _i12 < l; _i12++) {
                if (lastItem.left2 === model[_i12].id) {
                  _left2 = model[_i12];
                  break;
                }
              }

              plantRate = _left2.speedRate;
              lastFix = _left2.baseInfo.fix_teeth_num;
              lastPlant = _left2.baseInfo.plant_teeth_num;
              lastSun = _left2.baseInfo.sun_teeth_num;
              plant_num = _left2.baseInfo.plant_num;

              switch (_left2.type) {
                case '11':
                  baseRate = lastSun / (lastSun + lastFix);
                  fixRate = plantRate / baseRate; //上一级输出

                  break;

                case '6':
                  baseRate = 1 / (1 + lastFix / lastSun);
                  fixRate = plantRate / baseRate;
                  break;

                case '9':
                  baseRate = lastSun / lastFix;
                  fixRate = plantRate / baseRate;
                  break;

                case '10':
                  for (var _i13 = 0; _i13 < l; _i13++) {
                    if (_left2.left2 === model[_i13].id) {
                      _left3 = model[_i13];
                      break;
                    }
                  }

                  fixRate = (1 + lastFix / lastSun) * _left3.speedRate + lastFix / lastFix * _left2.speedRate;
                  break;
              }

              tSpeedRate = (1 + fix / sun) * plantRate + fix / sun * fixRate;
            }
          }

          this.ids.splice(index, 1);
          item.speedRate = tSpeedRate;
          this.setSpeedRate(item, 'left');
        }
      }
    },
    // 计算每个部件的 speedRate
    speedRateByBase: function speedRateByBase(baseRate) {
      var dv = baseRate.speedRate,
          model = this.modelPos;
      if (isNaN(dv)) return;

      for (var i = 0, l = model.length; i < l; i++) {
        model[i].speedRate /= dv;
      }
    },
    // 传动链组态取消按钮
    editNo: function editNo() {
      this.isShow.isEdit = false;
      this.modelPos = this.cloneObj(this.srcModelPos, true);
      this.drawModel();
      this.$emit('getTitle', '数字双胞胎');
    },
    // 传动链组态保存警告框确认
    confirmAlarm: function confirmAlarm() {
      var _this4 = this;

      this.chainVal = "";
      this.chainModelMsg.macModelName = this.choiceMachine.chainName;
      var model = this.modelPos,
          data = {
        mac_id: this.sortMachine[this.choiceMachine.index].macId
      },
          driveChain = this.cloneObj(this.chainModelMsg, true),
          itemList = [];

      if (model && model.length > 0) {
        var lt = this.baseDrag.lt;
        var bd = this.baseDrag.bd;
        var sm = this.baseDrag.sm;
        this.setSpeedRate(lt, 'left');
        if (bd != null) this.speedRateByBase(bd);else if (sm) this.speedRateByBase(sm);else this.speedRateByBase(lt);

        for (var i = 0, l = model.length; i < l; i++) {
          var item = model[i];
          itemList.push({
            id: item.id,
            isBaseDrag: item.isBaseDrag,
            itemtype: item.type,
            left: item.left,
            left2: item.left2,
            right: item.right,
            name: item.name,
            position_x: item.x.toString(),
            position_y: item.y.toString(),
            scaleX: item.scaleX,
            speedRate: item.speedRate.toString(),
            ch_class: this.sortMachine[this.choiceMachine.index].chClass,
            baseInfo: item.baseInfo
          });

          if (item.type === '5') {
            itemList[itemList.length - 1].up = item.up;
            itemList[itemList.length - 1].down = item.down;
          }
        }
      }

      if (itemList.length > 64) {
        swal({
          title: "提示",
          text: "\u4F20\u52A8\u94FE\u90E8\u4EF6\u6570\u4E0D\u5F97\u8D85\u8FC764\u4E2A!",
          button: "确认"
        });
        return;
      }

      driveChain.itemList = itemList;
      data.driveChain = driveChain;
      data.ch_class = this.sortMachine[this.choiceMachine.index].chClass;
      data.t_root = this.sortMachine[this.choiceMachine.index].t_root;
      var t_root = Number(this.sortMachine[this.choiceMachine.index].t_root);

      if (t_root === 1 || t_root === 2 || t_root === -1) {
        data.pump_name = this.sortMachine[this.choiceMachine.index].pumpName;
      }

      var that = this;
      this.$axios.post('updateDriveChainByMacId', data).then(function (res) {
        switch (res.msg) {
          case 0:
            _this4.isShow.isAlert = false;
            _this4.isShow.isAlarm = false;
            _this4.isShow.isEdit = false;
            _this4.isShow.editModel = true;

            _this4.$emit('getTitle', '数字双胞胎');

            swal({
              title: "提示",
              text: "".concat(that.choiceMachine.name, "\u4F20\u52A8\u94FE\u66F4\u65B0\u6210\u529F!"),
              button: "确认"
            });
            _this4.clickFolder = false;

            _this4.getFolder();

            break;

          case 1:
            console.log('参数为空或错误');
            swal({
              title: "提示",
              text: "\u66F4\u65B0\u5931\u8D25",
              button: "确认"
            });
            break;

          case 2:
            console.log('后台错误');
            swal({
              title: "提示",
              text: "\u66F4\u65B0\u5931\u8D25",
              button: "确认"
            });
            break;

          case 3:
            console.log('json数据为空');
            swal({
              title: "提示",
              text: "\u66F4\u65B0\u5931\u8D25",
              button: "确认"
            });
            break;

          case 4:
            swal({
              title: "提示",
              text: "\u4F20\u52A8\u94FE\u7EC4\u4EF6\u6570\u8D85\u8FC764\u4E2A",
              button: "确认"
            });
            break;
        }
      })["catch"](function (err) {
        console.log(err);
        swal({
          title: "提示",
          text: "\u66F4\u65B0\u5931\u8D25",
          button: "确认"
        });
      });
    },
    //  传动链组态保存警告框关闭
    closeAlarm: function closeAlarm() {
      this.isShow.isAlert = false;
      this.isShow.isAlarm = false;
      this.isShow.isTip = false;
      this.isShow.isSaveChain = false;
    },
    // 点击右上角传动链模型
    viewModel: function viewModel(model) {
      if (model !== null) {
        this.chainModelSystem = model.system;
        var list = model.itemList;

        if (this.$refs.machines && this.$refs.machines.length > 0) {
          this.$refs.machines[this.choiceMachine.index].classList.remove('check');
        }

        this.choiceMachine.name = '';
        this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
        this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
        this.modelPos.length = 0;
        this.chainModel = model; // if (list.length > 0) {

        this.macOrModel = 'model';
        this.isShow.loadModel = true;
        var msg = [];

        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i].url) msg.push(this.cloneObj(list[i], true));else {
            var itemObj = {
              url: this.modelImg[list[i].itemtype - 1].url,
              x: Number(list[i].position_x),
              y: Number(list[i].position_y),
              style: {
                left: list[i].position_x + 'px',
                top: list[i].position_y + 'px',
                zIndex: 2
              },
              line: this.linePos(list[i].itemtype),
              size: this.modelSize(list[i].itemtype),
              type: list[i].itemtype,
              id: list[i].id,
              left: list[i].left,
              right: list[i].right,
              left2: list[i].left2,
              baseInfo: this.cloneObj(list[i].baseInfo, true),
              name: list[i].name,
              ch_class: list[i].ch_class,
              speedRate: list[i].speedRate,
              isBaseDrag: list[i].isBaseDrag,
              up: null,
              down: null,
              scaleX: list[i].scaleX || 1 //是否翻转，若为“-1”,则翻转了

            };

            if (itemObj.scaleX === '-1' || itemObj.scaleX === -1) {
              itemObj.style.transform = itemObj.style.transform ? '' : 'rotateY(180deg)';
            }

            msg.push(itemObj);
          }
        }

        this.modelPos = this.cloneObj(msg, true);
        this.srcModelPos = this.cloneObj(msg, true);
        msg.length = 0;
        this.drawModel(); // }
      } else {
        this.modelPos = [];
        this.chainModelSystem = 1;
        this.ctx.model.clearRect(0, 0, this.$refs.modelCanvas.width, this.$refs.modelCanvas.height);
        this.ctx.operat.clearRect(0, 0, this.$refs.operat.width, this.$refs.operat.height);
      }
    },
    // 拖动左侧组件
    dragstart: function dragstart(item, index, e) {
      if (this.isShow.isEdit) {
        if (this.chainModelSystem === 0) return;
        this.dragMsg = null;
        this.dragMsg = {
          url: item.url,
          left: e.offsetX,
          top: e.offsetY,
          type: index + 1,
          scaleX: 1,
          transform: ''
        };
      }
    },
    dragover: function dragover() {},
    // 设置传动链组件信息
    setBaseInfo: function setBaseInfo(itemtype) {
      var baseInfo = [{
        compNum: '0',
        shaft_diameter: "300"
      }, {
        shaft_diameter: "300"
      }, {
        shaft_diameter: "300"
      }, {
        shaft_diameter: "300",
        compNum: '-1'
      }, {
        shaft_diameter: "300",
        gear_teeth_num: '0'
      }, {
        shaft_diameter: "300",
        manufacturer: '',
        productModel: '',
        fix_teeth_num: '0',
        plant_teeth_num: '0',
        sun_teeth_num: '0',
        plant_num: '0',
        ftf: '',
        bsf: '',
        bpfo: '',
        bpfi: ''
      }, {
        shaft_diameter: "300",
        manufacturer: '',
        productModel: '',
        ftf: '',
        bsf: '',
        bpfo: '',
        bpfi: ''
      }, {
        shaft_diameter: "300",
        shaft_diameter2: "300",
        manufacturer1: '',
        productModel1: '',
        manufacturer2: '',
        productModel2: '',
        ftf1: '',
        bsf1: '',
        bpfo1: '',
        bpfi1: '',
        ftf2: '',
        bsf2: '',
        bpfo2: '',
        bpfi2: ''
      }, {
        shaft_diameter: "300",
        manufacturer: '',
        productModel: '',
        fix_teeth_num: '0',
        plant_teeth_num: '0',
        sun_teeth_num: '0',
        plant_num: '0',
        ftf: '',
        bsf: '',
        bpfo: '',
        bpfi: ''
      }, {
        shaft_diameter: "300",
        manufacturer: '',
        productModel: '',
        fix_teeth_num: '0',
        plant_teeth_num: '0',
        sun_teeth_num: '0',
        plant_num: '0',
        ftf: '',
        bsf: '',
        bpfo: '',
        bpfi: ''
      }];
      return baseInfo[itemtype - 1];
    },
    // 传动链组态
    drop: function drop(e) {
      if (this.isShow.isEdit && this.chainModelSystem !== 0) {
        var msg = this.dragMsg,
            model = this.modelPos;

        for (var i = 0; i < model.length; i++) {
          if (model[i].scaleX === '-1' || model[i].scaleX === -1) {
            model[i].style.transform = 'rotateY(180deg)';
          } else {
            model[i].style.transform = '';
          }
        }

        if (msg) {
          this.cancelClick();
          var x = e.offsetX - msg.left,
              y = e.offsetY - msg.top;

          if (msg.url) {
            // 左边拖到右边
            var type = msg.type.toString();
            var id = 0,
                nameId = -1;
            var name = ['叶片', '轴', '固定联轴节', '测点', '齿轮', '行星齿轮', '轴承', '电机', '内齿圈行星齿轮', '差动行星齿轮'];

            for (var _i14 = 0, l = model.length; _i14 < l; _i14++) {
              var mId = model[_i14].id;

              var _name = Number(model[_i14].name.replace(/[^0-9]/ig, ''));

              if (id < mId) id = Number(mId);
              if (nameId < _name) nameId = Number(_name);
            }

            id++;
            nameId++;
            var data = {
              url: msg.url,
              x: x,
              y: y,
              style: {
                left: x + 'px',
                top: y + 'px',
                zIndex: 2,
                transform: msg.transform
              },
              isBaseDrag: '0',
              line: this.linePos(type),
              size: this.modelSize(type),
              type: type,
              id: id.toString(),
              left: '',
              right: '',
              left2: '',
              baseInfo: this.setBaseInfo(type),
              name: name[type - 1] + nameId,
              speedRate: '1',
              up: null,
              down: null,
              ch_class: '0',
              scaleX: msg.scaleX
            };
            model.push(data);
            if (this.macOrModel === 'model') this.chainModel.itemList.push(data);
            this.getModelMsg(this.modelPos.length - 1);
            this.dragMsg = null;
          } else {
            // 内部拖动
            var indexArr = this.frameSelect,
                tag = e.target;
            var item = model[msg.index];

            if (tag.tagName === 'IMG' && x <= item.size.w && y <= item.size.h) {
              if (tag.style.left === item.style.left && tag.style.top === item.style.top) {
                x += item.x, y += item.y;
              } else {
                x += Number(tag.style.left.slice(0, -2)), y += Number(tag.style.top.slice(0, -2));
              }
            }

            if (indexArr.length === 0) {
              for (var _i15 = 0, _l5 = model.length; _i15 < _l5; _i15++) {
                if (_i15 !== msg.index) model[_i15].style.zIndex = 2;
              }

              this.setModelPos(item, msg.index, x, y);
              /*if (this.macOrModel === 'model') this.chainModel.itemList[msg.index] = this.cloneObj(item, true);*/
              // console.log(this.chainModel);
            } else {
              var dx = x - item.x,
                  dy = y - item.y,
                  itemArr = [];
              var minX = Number.MAX_VALUE;
              var minY = Number.MAX_VALUE;

              for (var _i16 = 0, _l6 = indexArr.length; _i16 < _l6; _i16++) {
                var val = model[indexArr[_i16]];
                val.x < minX && (minX = val.x);
                val.y < minY && (minY = val.y);
                model[indexArr[_i16]].style.zIndex = 2;
              }

              if (minX + dx < 0 || minY + dy < 0) return;

              for (var _i17 = 0, _l7 = indexArr.length; _i17 < _l7; _i17++) {
                var _val = model[indexArr[_i17]];
                /*if(i==0 && val.x<0){//禁止拖动超出区域
                    return;
                }*/

                _val.x += dx;
                _val.y += dy;
                _val.style = {
                  left: _val.x + 'px',
                  top: _val.y + 'px',
                  zIndex: 3,
                  transform: _val.style.transform
                };
                var pos = this.setModelPos(_val, _i17, _val.x, _val.y);

                if (pos.x !== 0 || pos.y !== 0) {
                  itemArr.push(_val);

                  for (var j = 0; j < _l7; j++) {
                    if (j !== _i17) {
                      var moveModel = model[indexArr[j]];
                      moveModel.x += pos.x;
                      moveModel.y += pos.y;
                      moveModel.style = {
                        left: moveModel.x + 'px',
                        top: moveModel.y + 'px',
                        zIndex: 3,
                        transform: moveModel.style.transform
                      };
                    }
                  }
                }
              }
              /*for (let i = 0, l = indexArr.length; i < l; i++) {
                let val = model[indexArr[i]];
                this.setModelPos(val, i, val.x, val.y);
              }*/

            }

            if (this.macOrModel === 'model') this.chainModel.itemList = this.cloneObj(model, true);
            this.drawModel();
            indexArr.length > 0 ? this.getModelMsg(indexArr) : this.getModelMsg(msg.index);
          }
        }
      }
    },
    // 传动链拖动位置调整
    setModelPos: function setModelPos(item, index, x, y) {
      var model = this.modelPos,
          indexArr = this.frameSelect;
      var lx1 = item.line.lx + x,
          ly1 = item.line.ly + y,
          rx1 = item.line.rx + x,
          ry1 = item.line.ry + y,
          b1 = item.line.b + y;

      for (var i = 0, l = model.length; i < l; i++) {
        var isRepeat = false;

        for (var j = 0, len = indexArr.length; j < len; j++) {
          if (indexArr[j] === i) {
            isRepeat = true;
            break;
          }
        }

        if (i === index || isRepeat) continue;else {
          var item2 = model[i],
              lx2 = item2.line.lx + item2.x,
              ly2 = item2.line.ly + item2.y,
              rx2 = item2.line.rx + item2.x,
              ry2 = item2.line.ry + item2.y,
              b2 = item2.line.b;

          if (Math.abs(lx1 - rx2) >= 0 && Math.abs(lx1 - rx2) <= 30 && Math.abs(ly1 - ry2) >= 0 && Math.abs(ly1 - ry2) <= 30) {
            x = rx2 + 10;
            y += ry2 - ly1;
            item2.right = item.id;
            item.left = item2.id;
            break;
          }

          if (Math.abs(lx2 - rx1) >= 0 && Math.abs(lx2 - rx1) <= 30 && Math.abs(ly2 - ry1) >= 0 && Math.abs(ly2 - ry1) <= 30) {
            x = lx2 - 10 - item.line.rx;
            y += ly2 - ry1;
            item2.left = item.id;
            item.right = item2.id;
            break;
          }
        }
      }

      if (item.type === '5') {
        var tx1 = item.line.tx + x,
            ty1 = item.line.ty + y,
            bx1 = item.line.bx + x,
            by1 = item.line.by + y;

        for (var _i18 = 0, _l8 = model.length; _i18 < _l8; _i18++) {
          var _isRepeat = false;

          for (var _j2 = 0, _len = indexArr.length; _j2 < _len; _j2++) {
            if (indexArr[_j2] === _i18) {
              _isRepeat = true;
              break;
            }
          }

          if (_isRepeat || _i18 === index || model[_i18].type !== '5') continue;else {
            var _item3 = model[_i18],
                tx2 = _item3.line.tx + _item3.x,
                ty2 = _item3.line.ty + _item3.y,
                bx2 = _item3.line.bx + _item3.x,
                by2 = _item3.line.by + _item3.y;

            if (Math.abs(bx1 - tx2) >= 0 && Math.abs(bx1 - tx2) <= 30 && Math.abs(by1 - ty2) >= 0 && Math.abs(by1 - ty2) <= 30) {
              x += tx2 - bx1;
              y += ty2 - 10 - by1;
              break;
            }

            if (Math.abs(bx2 - tx1) >= 0 && Math.abs(bx2 - tx1) <= 30 && Math.abs(by2 - ty1) >= 0 && Math.abs(by2 - ty1) <= 30) {
              x += bx2 - tx1;
              y += by2 + 10 - ty1;
              break;
            }
          }
        }
      }

      var pos = {
        x: x - item.x,
        y: y - item.y
      };
      item.x = x;
      item.y = y;
      item.style = {
        left: x + 'px',
        top: y + 'px',
        zIndex: 3,
        transform: item.style.transform
      };

      if (this.frameSelect.length > 0) {
        return pos;
      }
    },
    // 传动链内部拖动
    dragScreen: function dragScreen(index, e, item) {
      if (this.isShow.isEdit) {
        this.dragMsg = null;
        this.dragMsg = {
          index: index,
          left: e.offsetX,
          top: e.offsetY,
          style: item.style,
          scaleX: item.scaleX
        };
      }
    },
    // 右键点击部件
    rightClick: function rightClick(item, index, e) {
      if (this.isShow.isEdit && this.chainModelSystem !== 0) {
        this.frameSelect.length = 0;
        this.isShow.isRightClick = true;
        this.rightClickMsg = {
          index: index,
          data: item
        };
        this.$refs.rightMsg.style.left = item.x + e.offsetX + 'px';
        this.$refs.rightMsg.style.top = item.y + e.offsetY + 'px';
        this.getModelMsg(index);
      }
    },
    // 设置基准转速
    setBaseDrag: function setBaseDrag() {
      var rcm = this.rightClickMsg,
          model = this.modelPos;
      this.isShow.isClickBaseDrag = true;

      if (rcm.index >= 0 && rcm.data) {
        var index = -1;

        if (rcm.data.isBaseDrag !== '1') {
          for (var i = 0, l = model.length; i < l; i++) {
            model[i].isBaseDrag = rcm.index !== i ? '0' : '1';

            if (this.chainModel) {
              this.chainModel.itemList[i].isBaseDrag = rcm.index !== i ? '0' : '1';
            }
          }
        }

        this.isShow.isRightClick = false;
        this.drawModel();
        this.getModelMsg(rcm.index);
        swal({
          title: "提示",
          text: "设置成功",
          button: "确认"
        });
      }
    },
    // 删除组件
    delModelPos: function delModelPos() {
      this.isShow.isRightClick = false;
      this.isShow.isAlert = true;
      this.isShow.isTip = true;
    },
    // 确定删除组件
    confirmTip: function confirmTip() {
      var rcm = this.rightClickMsg,
          model = this.modelPos,
          index = this.frameSelect;

      if (rcm.index >= 0 && rcm.data) {
        var id = model[rcm.index].id;

        for (var i = 0, l = model.length; i < l; i++) {
          var val = model[i];

          if (val.left === id) {
            val.left = '';
          }

          if (val.left2 === id) {
            val.left2 = '';
          }

          if (val.right === id) {
            val.right = '';
          }

          if (val.right2 === id) {
            val.right2 = '';
          }

          if (val.up === id) {
            val.up = '';
          }

          if (val.down === id) {
            val.down = '';
          }
        }

        model.splice(rcm.index, 1);
        /*if(this.chainModel){
            this.chainModel.itemList.splice(rcm.index, 1);
        }*/
      } else if (index.length > 0) {
        index.sort(function (a, b) {
          return b - a;
        });

        for (var _i19 = 0, _l9 = index.length; _i19 < _l9; _i19++) {
          var _id = model[index[_i19]].id;
          model.splice(index[_i19], 1);

          for (var j = 0, len = model.length; j < len; j++) {
            var _val2 = model[j];

            if (_val2.left === _id) {
              _val2.left = '';
            }

            if (_val2.left2 === _id) {
              _val2.left2 = '';
            }

            if (_val2.right === _id) {
              _val2.right = '';
            }

            if (_val2.right2 === _id) {
              _val2.right2 = '';
            }

            if (_val2.up === _id) {
              _val2.up = '';
            }

            if (_val2.down === _id) {
              _val2.down = '';
            }
          }
        }

        index.length = 0;
      }

      if (this.chainModel && this.chainModel.system !== 0) {
        //标准传动链system=0,不可更改
        this.chainModel.itemList = this.cloneObj(model, true);
      }

      this.drawModel();
      this.cancelClick();
      this.isShow.isAlert = false;
      this.isShow.isTip = false;
    },
    // 设置传动链信息
    setParams: function setParams(data) {
      this.saveModelPos = data;
      this.getParams();
    },
    // 获取传动链信息
    getParams: function getParams() {
      var data = this.saveModelPos;

      if (data) {
        var model = this.modelPos;

        for (var i = 0, l = model.length; i < l; i++) {
          if (model[i].id === data.id && model[i].type === data.type) {
            var item = model[i],
                bi = item.baseInfo;
            item.name = data.name;

            switch (data.type) {
              case '1':
                bi.compNum = data.compNum;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '2':
              case '3':
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '4':
                bi.compNum = data.compNum;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '5':
                bi.gear_teeth_num = data.gear_teeth_num;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '6':
                bi.manufacturer = data.manufacturer;
                bi.productModel = data.productModel;
                bi.fix_teeth_num = data.fix_teeth_num;
                bi.plant_teeth_num = data.plant_teeth_num;
                bi.sun_teeth_num = data.sun_teeth_num;
                bi.planet_num = data.planet_num;
                bi.ftf = data.bearing1.ftf;
                bi.bsf = data.bearing1.bsf;
                bi.bpfo = data.bearing1.bpfo;
                bi.bpfi = data.bearing1.bpfi;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '7':
                bi.manufacturer = data.manufacturer;
                bi.productModel = data.productModel;
                bi.ftf = data.bearing1.ftf;
                bi.bsf = data.bearing1.bsf;
                bi.bpfo = data.bearing1.bpfo;
                bi.bpfi = data.bearing1.bpfi;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '8':
                bi.manufacturer1 = data.manufacturer1;
                bi.productModel1 = data.productModel1;
                bi.manufacturer2 = data.manufacturer2;
                bi.productModel2 = data.productModel2;
                bi.ftf1 = data.bearing1.ftf;
                bi.bsf1 = data.bearing1.bsf;
                bi.bpfo1 = data.bearing1.bpfo;
                bi.bpfi1 = data.bearing1.bpfi;
                bi.shaft_diameter = data.shaft_diameter;
                bi.ftf2 = data.bearing2.ftf;
                bi.bsf2 = data.bearing2.bsf;
                bi.bpfo2 = data.bearing2.bpfo;
                bi.bpfi2 = data.bearing2.bpfi;
                bi.shaft_diameter2 = data.shaft_diameter2;
                break;

              case '9':
                bi.manufacturer = data.manufacturer;
                bi.productModel = data.productModel;
                bi.fix_teeth_num = data.fix_teeth_num;
                bi.plant_teeth_num = data.plant_teeth_num;
                bi.sun_teeth_num = data.sun_teeth_num;
                bi.planet_num = data.planet_num;
                bi.ftf = data.bearing1.ftf;
                bi.bsf = data.bearing1.bsf;
                bi.bpfo = data.bearing1.bpfo;
                bi.bpfi = data.bearing1.bpfi;
                bi.shaft_diameter = data.shaft_diameter;
                break;

              case '10':
                bi.manufacturer = data.manufacturer;
                bi.productModel = data.productModel;
                bi.fix_teeth_num = data.fix_teeth_num;
                bi.plant_teeth_num = data.plant_teeth_num;
                bi.sun_teeth_num = data.sun_teeth_num;
                bi.planet_num = data.planet_num;
                bi.ftf = data.bearing1.ftf;
                bi.bsf = data.bearing1.bsf;
                bi.bpfo = data.bearing1.bpfo;
                bi.bpfi = data.bearing1.bpfi;
                bi.shaft_diameter = data.shaft_diameter;
                break;
            }

            if (this.choiceOrganization.split('_')[1] == 2) {
              bi.pos_class = data.pos_class;
              bi.pos_loc = data.pos_loc;
            }

            break;
          }
        }

        this.chainModel && (this.chainModel.itemList = this.cloneObj(model, true));
      }
    },
    //  导出传动链模型
    exportChainModel: function exportChainModel(model) {
      var data = null,
          name;

      if (model) {
        name = model.macModelName + '.json';
        data = {
          macModelId: model.macModelId,
          macModelName: model.macModelName,
          mac_id: model.mac_id,
          system: model.system
        };
        data.itemList = this.cloneObj(model.itemList, true);
      } else {
        var machine = this.machine,
            i = this.choiceMachine.index,
            _model = this.modelPos;
        name = machine[i].model + '.json';
        data = {
          macModelId: machine[i].modelId,
          macModelName: machine[i].model,
          mac_id: '',
          system: 1
        };
        data.itemList = this.cloneObj(_model, true);
      }

      data = JSON.stringify(data);
      var blob = new Blob([data], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, name);
    },
    // 点击载入当前机组
    showEdit: function showEdit() {
      if (this.choiceOrganization !== '0_99') this.isShow.isEdit = true;else swal({
        title: "提示",
        text: "请选择一个机组",
        button: "确认"
      });
    },
    // del 键删除
    delModel: function delModel(index) {
      var that = this,
          model = this.modelPos;
      this.rightClickMsg = {
        index: index,
        data: model[index]
      };

      document.onkeyup = function (event) {
        if (that.isShow.isEdit && that.deviceMsg !== null) {
          var event = event || window.event || arguments.callee.arguments[0];

          if (event && event.keyCode == 46) {
            that.delModelPos();
          }
        }
      };
    },
    // 翻转模型
    rollingModel: function rollingModel() {
      var model = this.modelPos,
          checkId = this.deviceMsg.id,
          item = null,
          style = null;

      for (var i = 0, l = model.length; i < l; i++) {
        if (checkId === model[i].id) {
          item = model[i];
          item.scaleX = Number(item.scaleX);
          style = model[i].style;
          break;
        }
      }

      this.isShow.isRightClick = false;
      item.scaleX *= -1;
      style.transform = style.transform ? '' : 'rotateY(180deg)';
      this.drawModel();
    },
    // 框选按下鼠标
    down: function down(e) {
      if (e.target.tagName !== 'IMG' && this.isShow.isEdit && e.button === 0) {
        this.mousePos = {
          x: e.offsetX,
          y: e.offsetY
        };
        e.currentTarget.addEventListener('mousemove', this.move);
        this.isMove = false;
        this.isDown = true;
        this.cancelClick();
      }
    },
    // 框选移动鼠标
    move: function move(e) {
      this.isShow.isRect = true;
      var tag = e.target,
          x2 = this.mousePos.x,
          y2 = this.mousePos.y,
          x1,
          y1,
          mouseX = e.offsetX,
          mouseY = e.offsetY;

      if (tag.tagName === 'IMG') {
        mouseX = tag.offsetLeft + e.offsetX;
        mouseY = tag.offsetTop + e.offsetY;
      }

      if (mouseX > x2) {
        if (mouseY > y2) {
          x1 = mouseX - x2;
          y1 = mouseY - y2;
        } else {
          x1 = mouseX - x2;
          y1 = y2 - mouseY;
          y2 = mouseY;
        }
      } else {
        if (mouseY > y2) {
          x1 = x2 - mouseX;
          y1 = mouseY - y2;
          x2 = mouseX;
        } else {
          x1 = x2 - mouseX;
          y1 = y2 - mouseY;
          x2 = mouseX;
          y2 = mouseY;
        }
      }

      this.isMove = true;
      this.rectStyle = {
        width: x1 + 'px',
        height: y1 + 'px',
        left: x2 + 'px',
        top: y2 + 'px',
        "border-color": '#000'
      };
    },
    // 框选松开鼠标
    up: function up(e) {
      e.currentTarget.removeEventListener('mousemove', this.move);

      if (this.mousePos !== null && this.rectStyle !== null) {
        this.frameSelect.length = 0;
        var rect = this.rectStyle,
            model = this.modelPos,
            left = parseInt(rect.left),
            top = parseInt(rect.top),
            right = parseInt(rect.width) + left,
            bottom = parseInt(rect.height) + top;

        for (var i = 0, l = model.length; i < l; i++) {
          var x = model[i].x + model[i].size.w / 2,
              y = model[i].y + model[i].size.h / 2;

          if (x >= left && x <= right && y >= top && y <= bottom) {
            this.frameSelect.push(i);
          }
        }

        if (this.frameSelect.length > 0) {
          this.rightClickMsg = {
            index: -1,
            data: null
          };
          var that = this;

          document.onkeyup = function (event) {
            if (that.isShow.isEdit && that.frameSelect.length > 0) {
              var event = event || window.event || arguments.callee.arguments[0];

              if (event && event.keyCode == 46) {
                that.delModelPos();
              }
            }
          };

          this.getModelMsg(this.frameSelect);
        }
      }

      if (this.isDown) {
        this.rectStyle = null;
        this.mousePos = null;
        this.cancelClick();
        this.isDown = false;
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    /*this.$refs.om.style.height = window.innerHeight-140 + "px";*/
    this.$refs.modelCanvas.width = this.$refs.center.clientWidth * 4;
    this.$refs.modelCanvas.height = this.$refs.center.clientHeight * 4;
    this.$refs.operat.width = this.$refs.center.clientWidth * 4;
    this.$refs.operat.height = this.$refs.center.clientHeight * 4;
    this.ctx = {
      model: this.$refs.modelCanvas.getContext('2d'),
      operat: this.$refs.operat.getContext('2d')
    };

    if (this.$store.state.tids.length > 0) {
      this.token = sessionStorage.getItem('token');
      var that = this;
      var paramObj = null;
      paramObj = {
        t_ids: this.$store.state.tids
      };
      this.$axios.post('queryAllFolders', paramObj).then(function (res) {
        var data = res.folders,
            msg = [];

        if (data != undefined && data.length > 0) {
          for (var i = 0, l = data.length; i < l; i++) {
            msg.push({
              name: data[i].folderName,
              id: data[i].folderId,
              tRoot: data[i].t_root
            });
          }

          that.organization = _this5.organization.concat(msg);
          that.organization = that.organization.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareName"])('name'));
          that.choiceOrganization = that.organization[0].id + '_' + that.organization[0].tRoot;
          that.value = that.organization[0].name;
          that.getFolder();
        }

        msg = null;
        data = null;
      })["catch"](function (err) {
        console.log(err);
      });
    }

    ;
  },
  watch: {
    frameSelect: {
      handler: function handler(newValue, oldValue) {
        if (newValue.length > 0) {
          this.rightClickMsg = {
            index: -1,
            data: null
          };
          var that = this;

          document.onkeyup = function (event) {
            if (that.isShow.isEdit && that.frameSelect.length > 0) {
              var event = event || window.event || arguments.callee.arguments[0];

              if (event && event.keyCode == 46) {
                that.delModelPos();
              }
            }
          };
        }
      },
      deep: true
    }
  },
  components: {
    ChainModel: components_content_device_ChainModel__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "chainModel" }, [
      _c("input", {
        ref: "uploadChainModel",
        staticStyle: { display: "none" },
        attrs: { type: "file" },
        on: { change: _vm.readChainModel }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modelTitle" }, [
        _vm._v("传动链模型"),
        _c("input", {
          staticClass: "searchModel",
          attrs: { type: "text" },
          on: { input: _vm.searchChainModel }
        }),
        _c("img", {
          staticClass: "searchIcon",
          attrs: { src: _vm.img.searchWhite }
        })
      ]),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "modelList",
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.cancelModel($event)
            }
          }
        },
        _vm._l(_vm.driveChain, function(item, index) {
          return _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: item.isShow,
                  expression: "item.isShow"
                }
              ],
              key: index,
              ref: "models",
              refInFor: true,
              attrs: { title: item.macModelName },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.getModel(item, index)
                },
                dblclick: function($event) {
                  return _vm.changeModelName(item, index)
                }
              }
            },
            [
              _c("img", {
                staticClass: "modelImg",
                attrs: { src: _vm.img.chainModel, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "modelName" }, [
                _vm._v(_vm._s(item.macModelName))
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isEdit,
              expression: "isEdit"
            }
          ],
          staticClass: "operatModel"
        },
        _vm._l(_vm.images, function(item, index) {
          return _c("img", {
            attrs: { src: item.url, title: item.title, alt: "" },
            on: {
              click: function($event) {
                return _vm.operatModel(index)
              }
            }
          })
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isEdit,
              expression: "!isEdit"
            }
          ],
          staticClass: "loadModel",
          on: { click: _vm.viewEdit }
        },
        [_vm._v("载入当前机组")]
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
            value: !_vm.isEdit && _vm.deviceParams.length > 0,
            expression: "!isEdit && deviceParams.length > 0"
          }
        ],
        staticClass: "params"
      },
      [
        _c("div", { staticClass: "paramsTitle" }, [
          _c(
            "div",
            {
              ref: "deviceParams",
              staticClass: "deviceTitle selectParams",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.viewDevice($event)
                }
              }
            },
            [_vm._v("设备参数")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.baseInfo && _vm.baseInfo.type > 5,
                  expression: "baseInfo && baseInfo.type > 5"
                }
              ],
              ref: "bearing1",
              staticClass: "bearing1Title",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.viewBearing1($event)
                }
              }
            },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.baseInfo && _vm.baseInfo.type == 8,
                      expression: "baseInfo && baseInfo.type == 8"
                    }
                  ]
                },
                [_vm._v("前")]
              ),
              _vm._v("轴承参数")
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
                  value: _vm.baseInfo && _vm.baseInfo.type == 8,
                  expression: "baseInfo && baseInfo.type == 8"
                }
              ],
              ref: "bearing2",
              staticClass: "bearing2Title",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.viewBearing2($event)
                }
              }
            },
            [_vm._v("后轴承参数")]
          ),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.baseInfo && _vm.baseInfo.type != 8,
                expression: "baseInfo && baseInfo.type != 8"
              }
            ]
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "partLine" }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.isDeviceParams,
                expression: "isShow.isDeviceParams"
              }
            ],
            staticClass: "deviceParams"
          },
          [
            _c(
              "ul",
              { staticClass: "deviceMsg" },
              _vm._l(_vm.deviceParams, function(item) {
                return _c("li", [
                  _c("div", { staticClass: "itemTitle" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "itemName", attrs: { title: item.name } },
                    [_vm._v(_vm._s(item.name))]
                  )
                ])
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
                value: _vm.isShow.isBearing1,
                expression: "isShow.isBearing1"
              }
            ],
            staticClass: "bearingParams"
          },
          [
            _c(
              "ul",
              { staticClass: "bearingMsg" },
              _vm._l(_vm.bearingParams1, function(item) {
                return _c("li", [
                  _c("div", { staticClass: "itemTitle" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "itemName", attrs: { title: item.name } },
                    [_vm._v(_vm._s(item.name))]
                  )
                ])
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
                value: _vm.isShow.isBearing2,
                expression: "isShow.isBearing2"
              }
            ],
            staticClass: "bearingParams"
          },
          [
            _c(
              "ul",
              { staticClass: "bearingMsg" },
              _vm._l(_vm.bearingParams2, function(item) {
                return _c("li", [
                  _c("div", { staticClass: "itemTitle" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "itemName", attrs: { title: item.name } },
                    [_vm._v(_vm._s(item.name))]
                  )
                ])
              }),
              0
            )
          ]
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
            value: _vm.isEdit && _vm.deviceParams.length > 0,
            expression: "isEdit && deviceParams.length > 0"
          }
        ],
        staticClass: "setParams"
      },
      [
        _c("div", { staticClass: "modelTitle" }, [_vm._v("设备参数")]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "setDevice" },
          _vm._l(_vm.deviceParams, function(item, index) {
            return _c("li", [
              _c("div", { staticClass: "itemTitle" }, [
                _vm._v(_vm._s(item.title))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "itemName" }, [
                _c("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.isSetParams(item.title) &&
                        _vm.slecteName.indexOf(item.title) === -1,
                      expression:
                        "isSetParams(item.title) && slecteName.indexOf(item.title)===-1"
                    }
                  ],
                  attrs: {
                    type: "text",
                    disabled: index === 1 || item.title == "传动比:"
                  },
                  domProps: { value: item.name },
                  on: {
                    input: function($event) {
                      return _vm.setModelParams(item, $event)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: index !== 1 && !_vm.isSetParams(item.title),
                        expression: "index !== 1 && !isSetParams(item.title)"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(item.name))]
                ),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.moreShow(item.title),
                      expression: "moreShow(item.title)"
                    }
                  ],
                  attrs: { src: _vm.img.more, alt: "" },
                  on: {
                    click: function($event) {
                      return _vm.getDevice(index)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: index === 2 && item.title === "速度测点",
                        expression: 'index === 2 && item.title === "速度测点"'
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.val,
                        expression: "item.val"
                      }
                    ],
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
                          _vm.$set(
                            item,
                            "val",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.changeParams
                      ]
                    }
                  },
                  _vm._l(_vm.speedPos, function(val) {
                    return _c("option", { domProps: { value: val.pos_id } }, [
                      _vm._v(_vm._s(val.pos_name))
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.title === "部件分类",
                        expression: 'item.title === "部件分类"'
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.val,
                        expression: "item.val"
                      }
                    ],
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
                          _vm.$set(
                            item,
                            "val",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.changeParams
                      ]
                    }
                  },
                  _vm._l(_vm.posClassList, function(val, key) {
                    return _c("option", { domProps: { value: key } }, [
                      _vm._v(_vm._s(val))
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.title === "位号",
                        expression: 'item.title === "位号"'
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.val,
                        expression: "item.val"
                      }
                    ],
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
                          _vm.$set(
                            item,
                            "val",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.changeParams
                      ]
                    }
                  },
                  _vm._l(_vm.posLocList, function(val, key) {
                    return _c("option", { domProps: { value: key } }, [
                      _vm._v(_vm._s(val))
                    ])
                  }),
                  0
                )
              ])
            ])
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
            value: _vm.isShow.isAlertDom,
            expression: "isShow.isAlertDom"
          }
        ],
        staticClass: "alertDom"
      },
      [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.isAlert,
                expression: "isShow.isAlert"
              }
            ],
            staticClass: "alertBox editAlertBox"
          },
          [
            _c("div", { staticClass: "alertTitle" }, [
              _vm._v(_vm._s(_vm.operat.title) + " "),
              _c("img", {
                attrs: { src: _vm.img.close, alt: "" },
                on: { click: _vm.no }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "operatName" }, [
              _vm._v("模型名称:  "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.operat.modelName,
                    expression: "operat.modelName"
                  }
                ],
                staticClass: "editName",
                attrs: { type: "text" },
                domProps: { value: _vm.operat.modelName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.operat, "modelName", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "yesOrNo" }, [
              _c("button", { staticClass: "yes", on: { click: _vm.yes } }, [
                _vm._v("确定")
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "no", on: { click: _vm.no } }, [
                _vm._v("取消")
              ])
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
                value: _vm.isShow.isAlertTip,
                expression: "isShow.isAlertTip"
              }
            ],
            staticClass: "alertBox"
          },
          [
            _c("div", { staticClass: "alertTitle" }, [
              _vm._v("提示  "),
              _c("img", {
                attrs: { src: _vm.img.close, alt: "" },
                on: { click: _vm.no }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alertText" }, [
              _vm._v("导入传动链模型会覆盖当前传动链，确定继续？")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "yesOrNo" }, [
              _c(
                "button",
                { staticClass: "yes", on: { click: _vm.yesUpload } },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c("button", { staticClass: "no", on: { click: _vm.no } }, [
                _vm._v("取消")
              ])
            ])
          ]
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
            value: _vm.isShow.isDevice,
            expression: "isShow.isDevice"
          }
        ],
        staticClass: "deviceBack"
      },
      [
        _c(
          "div",
          {
            staticClass: "deviceBase alertBox",
            on: {
              click: function($event) {
                _vm.isShow.showManufacturer = false
                _vm.isShow.showDeviceModel = false
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "alertTitle",
                on: {
                  mousedown: function($event) {
                    return _vm.moveAlertBox($event)
                  }
                }
              },
              [
                _vm._v("轴承库管理 "),
                _c("img", {
                  attrs: { src: _vm.img.close, alt: "" },
                  on: { click: _vm.closeDevice }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "searchDevice" }, [
              _c("div", { staticClass: "searchManufacturer" }, [
                _vm._v("\n                    制造商\n                    "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.likeManufacturer,
                      expression: "likeManufacturer"
                    }
                  ],
                  ref: "likeManufacturer",
                  attrs: { type: "text" },
                  domProps: { value: _vm.likeManufacturer },
                  on: {
                    focus: function($event) {
                      _vm.isShow.showDeviceModel = false
                    },
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.goSearchLike($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.likeManufacturer = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: _vm.img.down, alt: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.isShow.showManufacturer = !_vm.isShow.showManufacturer
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShow.showManufacturer,
                        expression: "isShow.showManufacturer"
                      }
                    ]
                  },
                  _vm._l(_vm.manufacturer, function(item) {
                    return _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.checkLikeManufacturer(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "searchDeviceModel" }, [
                _vm._v("\n                    轴承型号\n                    "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.likeDeviceModel,
                      expression: "likeDeviceModel"
                    }
                  ],
                  ref: "likeDeviceModel",
                  attrs: { type: "text" },
                  domProps: { value: _vm.likeDeviceModel },
                  on: {
                    focus: function($event) {
                      _vm.isShow.showManufacturer = false
                    },
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.goSearchLike($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.likeDeviceModel = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: _vm.img.down, alt: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.isShow.showDeviceModel = !_vm.isShow.showDeviceModel
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShow.showDeviceModel,
                        expression: "isShow.showDeviceModel"
                      }
                    ]
                  },
                  _vm._l(_vm.productModel, function(item) {
                    return _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.checkLikeDeviceModel(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "searchBtn", on: { click: _vm.goSearchLike } },
                [_vm._v("搜索")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "subTitle" }, [
              _vm._v("\n                标准轴承库：\n                "),
              _c("div", { staticClass: "paging" }, [
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.page.currentPage) +
                      "/" +
                      _vm._s(_vm.page.pageCount)
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.page.currentPage,
                      expression: "page.currentPage"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.page.currentPage },
                  on: {
                    keyup: function($event) {
                      return _vm.goThisPage()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.page, "currentPage", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "upPage",
                    on: {
                      click: function($event) {
                        return _vm.goLastPage()
                      }
                    }
                  },
                  [_vm._v("上一页")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "downPage",
                    on: {
                      click: function($event) {
                        return _vm.goNextPage()
                      }
                    }
                  },
                  [_vm._v("下一页")]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "deviceList" },
              _vm._l(_vm.deviceMsg, function(item, index) {
                return _c(
                  "li",
                  {
                    ref: "deviceList",
                    refInFor: true,
                    class: "item" + (index % 2),
                    on: {
                      click: function($event) {
                        return _vm.checkMsg(item, index)
                      }
                    }
                  },
                  [
                    _c("div", [_vm._v(_vm._s(item.manufacturer))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(item.productModel))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(item.system === 0 ? "自定义轴承" : "标准轴承")
                      )
                    ])
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "foot" }, [
              _c("div", { staticClass: "foot-cont" }, [
                _c(
                  "button",
                  { staticClass: "btn", on: { click: _vm.addDevice } },
                  [_vm._v("添加")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isShow.isCustom,
                        expression: "!isShow.isCustom"
                      }
                    ],
                    staticClass: "btn default-btn",
                    attrs: { disabled: !_vm.isShow.isCustom }
                  },
                  [_vm._v("删除")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isShow.isCustom,
                        expression: "!isShow.isCustom"
                      }
                    ],
                    staticClass: "btn default-btn",
                    attrs: { disabled: !_vm.isShow.isCustom }
                  },
                  [_vm._v("修改")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShow.isCustom,
                        expression: "isShow.isCustom"
                      }
                    ],
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        _vm.isShow.isAlarm = true
                      }
                    }
                  },
                  [_vm._v("删除")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShow.isCustom,
                        expression: "isShow.isCustom"
                      }
                    ],
                    staticClass: "btn",
                    on: { click: _vm.reviseDevice }
                  },
                  [_vm._v("修改")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn", on: { click: _vm.comfirmDevice } },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn default-btn",
                    on: { click: _vm.closeDevice }
                  },
                  [_vm._v("取消")]
                )
              ])
            ])
          ]
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
            value: _vm.isShow.isAlarm,
            expression: "isShow.isAlarm"
          }
        ],
        staticClass: "alertBack"
      },
      [
        _c("div", { staticClass: "alertBox alertAlarm" }, [
          _c("div", { staticClass: "alertTitle" }, [
            _vm._v("警告  "),
            _c("img", {
              attrs: { src: _vm.img.close, alt: "" },
              on: { click: _vm.closeDeviceAlert }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "deviceAlertText" }, [
            _vm._v("\n                请确定是否删除此轴承？\n            ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "yesOrNo" }, [
            _c(
              "button",
              { staticClass: "yes", on: { click: _vm.deletDeviceOk } },
              [_vm._v("确定")]
            ),
            _c(
              "button",
              { staticClass: "no", on: { click: _vm.closeDeviceAlert } },
              [_vm._v("取消")]
            )
          ])
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
            value: _vm.isShow.isAddRevise,
            expression: "isShow.isAddRevise"
          }
        ],
        staticClass: "addReviseBack"
      },
      [
        _c("div", { staticClass: "addRevise" }, [
          _c("div", { staticClass: "addReviseTitle" }, [
            _vm._v("轴承属性 "),
            _c("img", {
              attrs: { src: _vm.img.close, alt: "" },
              on: {
                click: function($event) {
                  _vm.isShow.isAddRevise = false
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "addReviseList" }, [
            _c("li", [
              _c("div", [
                _vm._v("制造商： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.manufacturer,
                      expression: "addReviseMsg.manufacturer"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.manufacturer },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.addReviseMsg,
                        "manufacturer",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("轴承型号： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.productModel,
                      expression: "addReviseMsg.productModel"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.productModel },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.addReviseMsg,
                        "productModel",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v(
                  "\n                        单位：\n                        "
                ),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addReviseMsg.diameter_unit,
                        expression: "addReviseMsg.diameter_unit"
                      }
                    ],
                    attrs: { name: "", id: "" },
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
                          _vm.$set(
                            _vm.addReviseMsg,
                            "diameter_unit",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.setUnit
                      ]
                    }
                  },
                  _vm._l(_vm.selectUnit, function(item, index) {
                    return _c("option", { domProps: { value: index } }, [
                      _vm._v(_vm._s(item.c))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v(
                  "\n                        节圆直径：\n                        "
                ),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addReviseLeft.pitch_diameter,
                        expression: "addReviseLeft.pitch_diameter"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.addReviseLeft.pitch_diameter },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.addReviseLeft,
                            "pitch_diameter",
                            $event.target.value
                          )
                        },
                        _vm.setParams
                      ]
                    }
                  }),
                  _vm._v(
                    "\n                            [" +
                      _vm._s(_vm.selectUnit[_vm.addReviseMsg.diameter_unit].e) +
                      "]"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("FTF： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.ftf,
                      expression: "addReviseMsg.ftf"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.ftf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addReviseMsg, "ftf", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v(
                  "\n                        滚珠直径：\n                        "
                ),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addReviseLeft.ball_diameter,
                        expression: "addReviseLeft.ball_diameter"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.addReviseLeft.ball_diameter },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.addReviseLeft,
                            "ball_diameter",
                            $event.target.value
                          )
                        },
                        _vm.setParams
                      ]
                    }
                  }),
                  _vm._v(
                    "\n                            [" +
                      _vm._s(_vm.selectUnit[_vm.addReviseMsg.diameter_unit].e) +
                      "]"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("BSF： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.bsf,
                      expression: "addReviseMsg.bsf"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.bsf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addReviseMsg, "bsf", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v("滚珠数： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseLeft.br,
                      expression: "addReviseLeft.br"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseLeft.br },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.addReviseLeft, "br", $event.target.value)
                      },
                      _vm.setParams
                    ]
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("BPFO： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.bpfo,
                      expression: "addReviseMsg.bpfo"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.bpfo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addReviseMsg, "bpfo", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", [
                _vm._v(
                  "\n                        接触角：\n                        "
                ),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addReviseLeft.angle,
                        expression: "addReviseLeft.angle"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.addReviseLeft.angle },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.addReviseLeft,
                            "angle",
                            $event.target.value
                          )
                        },
                        _vm.setParams
                      ]
                    }
                  }),
                  _vm._v("[度]\n                        ")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("BPFI： "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addReviseMsg.bpfi,
                      expression: "addReviseMsg.bpfi"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.addReviseMsg.bpfi },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addReviseMsg, "bpfi", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "yesOrNo" }, [
            _c(
              "button",
              { staticClass: "yes", on: { click: _vm.addReviseOk } },
              [_vm._v(_vm._s(_vm.addReviseBtn))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "no",
                on: {
                  click: function($event) {
                    _vm.isShow.isAddRevise = false
                  }
                }
              },
              [_vm._v("取消")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "listTitle" }, [
      _c("li", { staticClass: "item" }, [
        _c("div", [_vm._v("制造商：")]),
        _c("div", [_vm._v("轴承型号：")]),
        _c("div", [_vm._v("类型：")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=template&id=508508d9&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/Device.vue?vue&type=template&id=508508d9& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "device-content" },
    [
      _c("my-content-title", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _c("my-machine", { on: { getTitle: _vm.getTitle } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    {
      ref: "om",
      staticClass: "om",
      on: {
        click: function($event) {
          return _vm.closeShow()
        }
      }
    },
    [
      _c("div", { staticClass: "left" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isShow.isEdit,
                expression: "!isShow.isEdit"
              }
            ],
            staticClass: "organization"
          },
          [
            _c(
              "div",
              {
                staticClass: "input",
                on: {
                  click: [
                    _vm.openValue,
                    function($event) {
                      $event.stopPropagation()
                    }
                  ]
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.value },
                  domProps: { value: _vm.value },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.value = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "iconfont icon-zhongzi-zhankai down-icon"
                })
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
                    value: _vm.show,
                    expression: "show"
                  }
                ],
                staticClass: "list"
              },
              [
                _c(
                  "ul",
                  _vm._l(_vm.organization, function(item, index) {
                    return _c(
                      "li",
                      {
                        key: item.index,
                        on: {
                          click: function($event) {
                            return _vm.getvalue(index, item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.name))]
                    )
                  }),
                  0
                )
              ]
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
                value: !_vm.isShow.isEdit,
                expression: "!isShow.isEdit"
              }
            ],
            staticClass: "search-chainName"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.chainVal,
                  expression: "chainVal"
                }
              ],
              staticClass: "chainName-input",
              attrs: { type: "text", placeholder: "搜索" },
              domProps: { value: _vm.chainVal },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.chainVal = $event.target.value
                  },
                  _vm.searchMacChain
                ]
              }
            }),
            _vm._v(" "),
            _c("i", {
              staticClass: "iconfont icon-zhongzi-sousuo search-icon",
              on: { click: _vm.searchMacChain }
            })
          ]
        ),
        _vm._v(" "),
        _vm.machine.length > 0
          ? _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isShow.isEdit,
                    expression: "!isShow.isEdit"
                  }
                ],
                staticClass: "machine"
              },
              _vm._l(_vm.sortMachine, function(item, index) {
                return _c(
                  "li",
                  {
                    ref: "machines",
                    refInFor: true,
                    staticClass: "machines",
                    class: {
                      active:
                        _vm.isShow.sync &&
                        item.model + "_" + item.name === _vm.chooseBaseModel
                    },
                    on: {
                      click: function($event) {
                        return _vm.getMachine(item, index)
                      }
                    }
                  },
                  [
                    _c("div", { attrs: { title: item.name } }, [
                      _c("i", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              !_vm.isShow.sync ||
                              item.model !== _vm.choiceMachine.index,
                            expression:
                              "!isShow.sync || item.model !== choiceMachine.index"
                          }
                        ],
                        staticClass: "iconfont icon-zhongzi_shebei chilun-icon"
                      }),
                      _vm._v(" "),
                      _c("i", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.isShow.sync &&
                              item.model === _vm.choiceMachine.index,
                            expression:
                              "isShow.sync && item.model === choiceMachine.index"
                          }
                        ],
                        staticClass:
                          "iconfont icon-zhongzi_shebei chilun-icon active"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "name" }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "model", attrs: { title: item.model } },
                      [
                        _c("span", { staticClass: "modelspan" }, [
                          _vm._v(_vm._s(item.model))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "syncMsg",
                            on: {
                              click: function($event) {
                                return _vm.getSync(item, index)
                              }
                            }
                          },
                          [
                            _vm.isShow.sync &&
                            item.model + "_" + item.name === _vm.chooseBaseModel
                              ? _c("div", { staticClass: "syncMachine" })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isShow.sync &&
                            item.model + "_" + item.name !== _vm.chooseBaseModel
                              ? _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.isCheck,
                                      expression: "item.isCheck"
                                    }
                                  ],
                                  staticClass: "checkSync",
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(item.isCheck)
                                      ? _vm._i(item.isCheck, null) > -1
                                      : item.isCheck
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = item.isCheck,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              item,
                                              "isCheck",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              item,
                                              "isCheck",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(item, "isCheck", $$c)
                                      }
                                    }
                                  }
                                })
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.isEdit,
                expression: "isShow.isEdit"
              }
            ]
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.choiceMachine.chainName,
                  expression: "choiceMachine.chainName"
                }
              ],
              staticClass: "chainName",
              attrs: { type: "text", placeholder: _vm.choiceMachine.chainName },
              domProps: { value: _vm.choiceMachine.chainName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.choiceMachine, "chainName", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "modelComponents" },
              _vm._l(_vm.modelImg, function(item, index) {
                return _c(
                  "li",
                  { staticClass: "component", attrs: { title: item.name } },
                  [
                    _c("img", {
                      ref: "modelImg",
                      refInFor: true,
                      attrs: { src: item.url, alt: "", draggable: "true" },
                      on: {
                        dragstart: function($event) {
                          return _vm.dragstart(item, index, $event)
                        }
                      }
                    })
                  ]
                )
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _vm.machine.length > 0
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isShow.isEdit,
                    expression: "!isShow.isEdit"
                  }
                ],
                staticClass: "deviceEditPart"
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShow.sync,
                        expression: "isShow.sync"
                      }
                    ],
                    staticClass: "isSync"
                  },
                  [
                    _c(
                      "button",
                      { staticClass: "blueBtn", on: { click: _vm.chooseAll } },
                      [_vm._v("全选")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "blueBtn",
                        on: { click: _vm.noChooseAll }
                      },
                      [_vm._v("反选")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "blueBtn", on: { click: _vm.yes } },
                      [_vm._v("确认")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "grayBtn", on: { click: _vm.no } },
                      [_vm._v("取消")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "baseModelControl" }, [
                  _c("span", [_vm._v("基准模型")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input",
                      on: {
                        click: [
                          _vm.openValue2,
                          function($event) {
                            $event.stopPropagation()
                          }
                        ]
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.chooseBaseModel,
                            expression: "chooseBaseModel"
                          }
                        ],
                        attrs: {
                          type: "text",
                          title: _vm.chooseBaseModel,
                          placeholder: _vm.chooseBaseModel
                        },
                        domProps: { value: _vm.chooseBaseModel },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.chooseBaseModel = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "iconfont icon-zhongzi-zhankai down-icon"
                      })
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
                          value: _vm.modelShow,
                          expression: "modelShow"
                        }
                      ],
                      staticClass: "list"
                    },
                    [
                      _c(
                        "ul",
                        _vm._l(_vm.sortMachine, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: item.index,
                              attrs: { title: item.model + "_" + item.name },
                              on: {
                                click: function($event) {
                                  return _vm.getModelValue(index, item)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.model + "_" + item.name))]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "blueBtn", on: { click: _vm.sync } },
                    [_vm._v("同步")]
                  )
                ])
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { ref: "center", staticClass: "center" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.loadModel,
                expression: "isShow.loadModel"
              }
            ],
            staticClass: "loading"
          },
          [_vm._v(_vm._s(_vm.loadText))]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "chain",
            on: {
              drop: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.drop($event)
              },
              dragover: function($event) {
                $event.preventDefault()
                return _vm.dragover($event)
              },
              click: function($event) {
                $event.stopPropagation()
                return _vm.cancelClick($event)
              },
              contextmenu: function($event) {
                $event.preventDefault()
              },
              mousedown: function($event) {
                $event.stopPropagation()
                return _vm.down($event)
              },
              mouseup: function($event) {
                $event.stopPropagation()
                return _vm.up($event)
              }
            }
          },
          [
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isShow.isRect,
                  expression: "isShow.isRect"
                }
              ],
              ref: "rect",
              staticClass: "rect",
              style: _vm.rectStyle
            }),
            _vm._v(" "),
            _vm._l(_vm.modelPos, function(item, index) {
              return _c("img", {
                style: item.style,
                attrs: { src: item.url, title: item.name, draggable: "true" },
                on: {
                  dragstart: function($event) {
                    return _vm.dragScreen(index, $event, item)
                  },
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.getModelMsg(index)
                  },
                  contextmenu: function($event) {
                    $event.preventDefault()
                    return _vm.rightClick(item, index, $event)
                  },
                  mousedown: function($event) {
                    $event.stopPropagation()
                    return _vm.delModel(index)
                  }
                }
              })
            }),
            _vm._v(" "),
            _c("canvas", { ref: "modelCanvas" }),
            _vm._v(" "),
            _c("canvas", { ref: "operat" })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.isRightClick,
                expression: "isShow.isRightClick"
              }
            ],
            ref: "rightMsg",
            staticClass: "rightBtn"
          },
          [
            _c(
              "li",
              {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.setBaseDrag($event)
                  }
                }
              },
              [_vm._v("设为基准转速")]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.rollingModel($event)
                  }
                }
              },
              [_vm._v("翻转")]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.delModelPos($event)
                  }
                }
              },
              [_vm._v("删除")]
            )
          ]
        ),
        _vm._v(" "),
        _c("i", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isShow.isEdit && _vm.isShow.editModel,
              expression: "!isShow.isEdit && isShow.editModel"
            }
          ],
          staticClass: "iconfont icon-bianji edit",
          attrs: { title: "编辑传动链" },
          on: { click: _vm.edit }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.isEdit,
                expression: "isShow.isEdit"
              }
            ],
            staticClass: "isEditDiv"
          },
          [
            _c(
              "button",
              {
                staticClass: "yes",
                on: {
                  click: function($event) {
                    return _vm.editYes(0)
                  }
                }
              },
              [_vm._v("保存")]
            ),
            _c("button", { staticClass: "no", on: { click: _vm.editNo } }, [
              _vm._v("取消")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right" },
        [
          _c("chain-model", {
            attrs: {
              baseInfo: _vm.deviceMsg,
              isEdit: _vm.isShow.isEdit,
              isSendStandChain: _vm.isSendStandChain,
              currentMachine: _vm.choiceMachine,
              currentChainModel: _vm.modelPos,
              speedPos: _vm.speedPos
            },
            on: {
              editYes: _vm.editYes,
              viewModel: _vm.viewModel,
              setParams: _vm.setParams,
              exportChainModel: _vm.exportChainModel,
              showEdit: _vm.showEdit
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isShow.isAlert,
              expression: "isShow.isAlert"
            }
          ],
          staticClass: "alertDom"
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isShow.isAlarm,
                  expression: "isShow.isAlarm"
                }
              ],
              staticClass: "alertBox alertAlarm"
            },
            [
              _c(
                "div",
                {
                  staticClass: "alertTitle",
                  on: {
                    mousedown: function($event) {
                      return _vm.moveAlertBox($event)
                    }
                  }
                },
                [
                  _vm._v("警告  "),
                  _c("img", {
                    attrs: { src: __webpack_require__(/*! assets/img/chainModel/close.svg */ "./src/assets/img/chainModel/close.svg") },
                    on: { click: _vm.closeAlarm }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "alertText" }, [
                _c("div", [
                  _vm._v(
                    "确定要修改" +
                      _vm._s(_vm.choiceMachine.name) +
                      "的传动链吗？"
                  )
                ]),
                _vm._v(" "),
                _c("div", [_vm._v("当前传动链一经替换后将不可恢复")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "yesOrNo" }, [
                _c(
                  "button",
                  { staticClass: "yes", on: { click: _vm.confirmAlarm } },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "no", on: { click: _vm.closeAlarm } },
                  [_vm._v("取消")]
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
                  value: _vm.isShow.isTip,
                  expression: "isShow.isTip"
                }
              ],
              staticClass: "alertBox alertTip"
            },
            [
              _c(
                "div",
                {
                  staticClass: "alertTitle",
                  on: {
                    mousedown: function($event) {
                      return _vm.moveAlertBox($event)
                    }
                  }
                },
                [
                  _vm._v("提示  "),
                  _c("img", {
                    attrs: { src: __webpack_require__(/*! assets/img/chainModel/close.svg */ "./src/assets/img/chainModel/close.svg") },
                    on: { click: _vm.closeAlarm }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "alertText" }, [
                _vm._v("\n                请确认是否删除该部件？\n            ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "yesOrNo" }, [
                _c(
                  "button",
                  { staticClass: "yes", on: { click: _vm.confirmTip } },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "no", on: { click: _vm.closeAlarm } },
                  [_vm._v("取消")]
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
                  value: _vm.isShow.isSaveChain,
                  expression: "isShow.isSaveChain"
                }
              ],
              staticClass: "alertBox alertSaveChain"
            },
            [
              _c(
                "div",
                {
                  staticClass: "alertTitle",
                  on: {
                    mousedown: function($event) {
                      return _vm.moveAlertBox($event)
                    }
                  }
                },
                [_vm._v("警告")]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "alertText" },
                _vm._l(_vm.alertMsg, function(item) {
                  return _c("li", [_vm._v(_vm._s(item))])
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "yesOrNo" }, [
                _c(
                  "button",
                  { staticClass: "yes", on: { click: _vm.closeAlarm } },
                  [_vm._v("确定")]
                )
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/img/chainModel/1.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/1.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhSwBgANUAAP////v7+/f39/Pz8+/v7+rq6ubm5uLi4t7e3tra2tbW1tLS0s7OzsrKysXFxcHBwb29vbm5ubW1tbGxsa2trampqaWlpaCgoJycnJiYmJSUlJCQkIyMjIiIiISEhICAgHt7e3d3d3Nzc29vb2tra2dnZ2NjY19fX1paWlZWVlJSUk5OTkpKSkZGRkJCQj4+Pjo6OjU1NTExMS0tLSkpKSUlJSEhIf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHADcALAAAAABLAGAAAAb/wJtwSCwabwKkILlkLo/QqHRKNTYHAwOiya16v2BicmGp3AhIZTLMblsFhEtrhhEYCISuex9mSlg0MTEOWnhqfIhVTRkuLDAwHQwKCnd6iZdvBx4sLS81JAwOCltOmKZiAQ0mLZ01KA0QogZca6eYAgAVJissLjMrEhKyeUy2pksZKCqsMzEWDRIMCMRPxpcCBRe7Lb4xGbAOCAaH1okCCRwmKr0yMRsLEaJ4TeXmCOnrLTA1IwsPEOKe1KrnRgCEDiRSrHDhKYQCB8PoEdwjQMKHEsp60RCxwB8lchPbEHDAgURGTygeJHDAoFK1kGwISPCQcIU+GigANqAkECYb/wAHJmQYcdIGiwgJGrSk5jMMAAQVKow4gYKTK4AQPhZr+gWAAgsXpqboVSOFgwQQlkrk6kVBhQkiMGpkAQEtz61sqxygEAGEiaovfklA8EDtwLxSADDAMCFEiRMrXsQ4aiArAiWIqwBwcOHBxRPrYFBW6jIzFQEHIECgCbnF5AgHJM06bPrIEgURWC+TgYIQA8O1pwzAzWGEiRSuSSw4IAtzcCjYGEDYEOIEchomFkAD/ty2AaUaxLKYEQIBg8Gzu0OPrQBDCGUqYoA48CCieigLJBiwAILqCvLMhTMObfed84AAE/iF3AsXpCbPS/cNgVoEBjywAVGsVIAARNNAGP8hEpUVsEB4J7DAQgUJFNYhgfcZoF82IpjAwgoUpLjUh1YYMIECCCK0AgoUOBCBNHngKEYB3wQwwQcnsIKBBGnNY6SEcTwAIwovuKBBMHdNKSEFFijQgTovkHBBZwwY4qUSEKCoAQqdkJDBlqMUOWUTC4zQgAEXlPDCCytkkJWUdy7RAAsfOODBBizEIAMF0axopEACkECCCCjA2QgFad3hXIFcIPAXCi64AIMLMsAggwqEUMNiXgIZQIIJf6mwTqmmqgqDCkWuZVoTDHgggl8k2NrIqanKoKwMLMxjCaxJcKCBtCBgWisLt5b6SKomGIIXW01oYMG4HAhrkowqHIv/qq6pSjObrzA9AUEwEFiAgQcciGBSVb3g+si2KNwI70RNfCWMBBZooAEIIGSKrbbrJqsqSy55SBATHkTjgAQY3EuTSev0e+q//2IgibdcLcHAlhBQ0HG5lhrriKkRs4tCNAoQ6tMSHFgAaccefJxRvxCP7K8w4ti5c6UeTMsBwyYUS+rMRldNswVpdZjyDSZUC4KltA5dNK6NNGIiC8FIYvHFAmSqTlUhG50sqqb20ku6Kvic1SwpC+CCrXgTbfWpZa+zjjJgUoxGU0ukS7MMuUqcatV2s1AVChpAWufWIPw7Obvs0uwCrY6rkOm4US6+NALK0rCs67AvmywHHGT0/7cLIIgbqerxwqFC6zLE7rrEMKCAwaV/k6oCBqjf2DuwwdMgfPDUcxu1Cy0z/zUGkBL56inFOADC79PHPrmtMEiABAGT3BtkmkrXw4UGNJkAg/Q02IC/8KqaKm7CGABIsHa3tmM8AQRBGx8g9kc98ykLW7MiAQgswAA7jGsan7JFEwgwLBDgY3LR0x/+GpiqUq1DghTImQAUwIEVfY8PSWCYB7/mCMgxzwP3I+HwIGfCrnFAGHyzFxoGBsMlDEsE5lqHsl42rYSR4FSuE40KylWqTCGQe+FYYQuZco0kCAuJIsCU4+ylAQyIi3niKiMHMLDGNaaLBVGrVhmjYQADBP/pWRQRAE2OuK9Tvaxj4wKTy1yWMACK62yZslTQLBApCmjAWS+cQhIcoMhq/cVUZOyYBDgVCygFg5GgRJgEQGCiRHYNBMwTBQQeSYw8EmBWX9uXqTqmMO5B6TeSgIgD5sXLYARDBHeDIwouJS1hQAAEdSygJJEQI33tyxG0tFfaKFHHOiIAAaOQxCR+AxFSJi9TYaSdMBiAzFaCoQkUGGbUMjVLNmoSZ3XEgzyrqYVqYlM6IDCh5YYpQQ8EUFEBiWQRlsBPWbogk0/CmbMOkQQ05CEPWgjF1GyVyH76TFHJFKga0oECdfzOBPZaY0JlE78pECCiDuiFaFygjAjmDmv/LayEIpZAK48+Co3SVKg5v3DS35DKbMqIWhjFRZKkRXIJBjDd3RBmRntBKiLKtI0dzAOBdK3UVn9RpAZWY9RlIsBwEPEZ8wKYlpwNsQ1JqKNPS2UiikaNBPiSgAYyKoUmEOIhm2QeI8taMY2KAalUVWndLKcCWiGQAh4wKovooYVdQipI4dhCK/3617SaxwFWZes+/1ItCoggoNBZwkkVIJ1gsOSakMxjEyIKARH0TzTY2qelMAACxVpBCWoNBWlBS9koMPaynXuE2Sg6TFTONT0D4cJJsXnNjBKxD7RgrQVC9zfC0uqHAfWQEx7qraj24RAolcC6ToUt0xWWBBwAo86rHopHcyiXtRL4nXCvCseuteRdtXFCWg0QiplMTrNYRS8ldpoZWtjBAHilwLZUVbmOprBi+T3EaM8DAUf8q62WM0GdCFzg95JWNa6dG2xV4AEilfRXT8ADNh3LgrmZjQWy8G7fRKuFh7TMA8RDVSx4giMmEOCaoYBUDf81Tk9NCQ/hdSSqmEWBIOVsTUhFMIV95gEwIW0cawKRlDcmVr1RIggAOw=="

/***/ }),

/***/ "./src/assets/img/chainModel/2.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/2.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/3.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/3.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/4.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/4.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhOQBIAMQAAPf39+/v7+bm5t7e3tbW1s7OzsXFxbm5ubW1tampqaCgoJiYmJCQkIiIiICAgHd3d29vb2dnZ19fX1ZWVk5OTkZGRj4+PjExMSkpKSEhIRkZGf///wAAAAAAAAAAAAAAACH5BAEHABsALAAAAAA5AEgAAAX/4CaOZGkC6Aao6mq+cCyPKEo81dXU6ez/pRUg0ZBUMJdLICB0AZ8yFGNCoeQwmIZAwIN6XyhFAnEoRCwXxpbJ+rpFAMFSLoCgLxPCgNt7e4cDBUQRSBcWFgUEck5+UAAVGhcRE2gZGZEIiYuNfw4VEZNoWBgJCQeKAZx/AEWTVxgOCwtle4yqMysMEhITOUmxYwUDqbdAKEW8r7EKCAa1xT9SExFWSbALwZvQuAAMoJSjDAsKZdrbMbm7FJQXGBALZARs51HdERIUojrYBqi29CRWNPhWQZQDZs7mAQTTTYEBBsrE9FvybyELAJYWSLhgSQFCRRUtoggggACCcQoW/zBglohJSIA1AgQ6kCClGFouLZ4YqSgBtlJkhOXUGVAFgQKJKFxAEHSPQqI0ABiYKoAQuX5b+kClMdVZAwsTDAgVsjXggANBHaAp469sCZMHDhiIkEOuv5cwAaAlg+BCvgRia+Glh8IAUzIJvM0S2mZr4TFjmEbOMWGYVpEBgEY+jKDmoQpsBqsCMKCm6VJiICdwkASCnKfnUJgWk7qU7ZrsEizRCYCAR5QpZ9v26EuPnLzAPSr3eNong8+oYBaQRR24debeWuuBzWlF9erLw/9OYuGA5W16GahXSV3cd5sKniNp4IzLmxQ1VKjfz/67//gTJBFWW47wYOB+CDLQgP8DD/DXn4IQFNIMgU+sUIADECin0S4QQPCAAw5UEcF6/iloyFKnHGdMDdRUQIElMMYoow4KJqheA4Ug9Ew0KwhQRRUWYJCBkETKaEkaNqqkFhoMAAZSflAyUkMvVlhhZIwawKiBBA3c6KUnSVAQj2UGGhgQAD/+KKQlRbIJ43xdxqmeAxKgYUGWeF6iJ54WtNDEIxUEGuiaVxrZwKGIHupABElwlKcGkF4CKaQQDBWHFYFaYcGbQ3JKqAOJJrpkkEWW2qmQLgkxQEGsCupqpi66WEUFICIKIqiLfoNpoBYUdMivFyhyHAquVilrFVQgu846EyyIq60PgALBBFQkOyv/pr1OgNQwLXzW66u7hovsreQyCAEohIyi7qmWMBUYC7242g4W83bqJgYSlEvuuaD8WgG11U7jQJPM0NICAb8GOemeDGcJy4cQM/hAtKCoxJ84DspykzMtBGBEr482rKc7+n4IIrqJ9adheGOU07EABzAgMYi9IjvBLtI+4KGHE+/MbwQW23QbaqXEpQkNAsxUEzYdNt20zlBPLLXOHUZwrsaRxWWAXHJNlYhTIywxAAFo1aSA1VU77TTVPv888DhBJULA3HTrsYd9cAAgUwFbM9WA2oC3zTa/GjdFxxqvUWSL3iURMJVc6J7Lr+SBn7vLBPEFE90qJCV91AJWS1u5wNPUoDHiTQXg7QcdY6MburSuoz0JeeoVrMgtIwlw9uuhB36GISlhkwm3xcQxQOzIuy5KlyuRk7oA6AmAgATJR86LgOtddR40YitA/ff3oLtLOxb0Z8p2scVxFMXhg0I9Gpi7Zwpj6SfNdwL37IKPBQ/Ex98YWOFOd1RgP7QELyUZE8OE+JAXkjiOJkt7jwIDo7qFiI1vkmmOKdhiDp2QJBB8owlatNYPYV2GKJ5DigrtpjjRAGQLA4jhFtYgwCeEAAA7"

/***/ }),

/***/ "./src/assets/img/chainModel/5.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/5.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/6.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/6.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/7.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/7.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/8.gif":
/*!*****************************************!*\
  !*** ./src/assets/img/chainModel/8.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/assets/img/chainModel/addModel.svg":
/*!************************************************!*\
  !*** ./src/assets/img/chainModel/addModel.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyODk4OTY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyNTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik03MjQuNDAwMDkgMEgxNzcuNzAwMDlDNzkuNjAwMDkgMC0wLjA5OTkxIDc5LjggMC4wMDAwOSAxNzcuOHY2NjguM0MwLjAwMDA5IDk0NC4yIDc5LjcwMDA5IDEwMjQgMTc3LjcwMDA5IDEwMjRoNjY4LjVjOTguMSAwIDE3Ny44LTc5LjggMTc3LjgtMTc3LjlWMjU3LjRINzI0LjQwMDA5VjB6IG03Ny4xIDQ2OS42djgwSDU1OC4wMDAwOXYyNDMuNWgtODBWNTQ5LjZIMjM0LjUwMDA5di04MEg0NzguMDAwMDlWMjI2aDgwdjI0My41aDI0My41eiIgcC1pZD0iMzI1NiIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTE0IiBjbGFzcz0ic2VsZWN0ZWQiIGZpbGw9IiNGNTM1MDAiPjwvcGF0aD48cGF0aCBkPSJNNzU5LjMwMDA5IDIyMi4zSDEwMjQuMDAwMDlMNzU5LjMwMDA5IDB6IiBwLWlkPSIzMjU3IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMTUiIGNsYXNzPSJzZWxlY3RlZCIgZmlsbD0iI0Y1MzUwMCI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/chainModel.svg":
/*!**************************************************!*\
  !*** ./src/assets/img/chainModel/chainModel.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyNTUyMTcwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik02NTUuOCAzNjYuN2MtMTguMy0xOC4zLTI4LjMtNDIuNS0yOC4zLTY4LjMgMC0yLjIgMC4xLTQuNCAwLjItNi42bC0yNjUuMSAyMDZoMi41YzQzLjQgMCA4NC4zIDE2LjkgMTE1IDQ3LjZzNDcuNiA3MS42IDQ3LjYgMTE1djIuM2wyMDQuMy0yNjhjLTIuNiAwLjItNS4yIDAuMy03LjkgMC4zLTI1LjggMC01MC0xMC4xLTY4LjMtMjguM3oiIHAtaWQ9IjE3NTkiIGZpbGw9IiMzNDNDNDUiPjwvcGF0aD48cGF0aCBkPSJNMzY1LjEgNTI5LjdjLTI1LjUgMC00OS4zIDcuMy02OS40IDIwbC0yMC40IDE1LjljLTI1LjEgMjMuOC00MC44IDU3LjUtNDAuOCA5NC43IDAgMzQuOSAxMy42IDY3LjcgMzguMyA5Mi40czU3LjUgMzguMyA5Mi40IDM4LjNjNzIgMCAxMzAuNi01OC42IDEzMC42LTEzMC42IDAtMzQuOS0xMy42LTY3LjctMzguMy05Mi40cy01Ny41LTM4LjMtOTIuNC0zOC4zeiBtMCAyMzMuM2MtMjcuNCAwLTUzLjItMTAuNy03Mi42LTMwLjEtMTkuNC0xOS40LTMwLjEtNDUuMi0zMC4xLTcyLjYgMC01Ni42IDQ2LTEwMi42IDEwMi42LTEwMi42IDI3LjQgMCA1My4yIDEwLjcgNzIuNiAzMC4xIDE5LjQgMTkuNCAzMC4xIDQ1LjIgMzAuMSA3Mi42IDAuMSA1Ni42LTQ2IDEwMi42LTEwMi42IDEwMi42eiIgcC1pZD0iMTc2MCIgZmlsbD0iIzM0M0M0NSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNjUuMSA1ODkuN2MtMzkgMC03MC42IDMxLjctNzAuNiA3MC42IDAgMTguOSA3LjMgMzYuNiAyMC43IDUwczMxLjEgMjAuNyA1MCAyMC43YzM5IDAgNzAuNi0zMS43IDcwLjYtNzAuNiAwLTE4LjktNy4zLTM2LjYtMjAuNy01MHMtMzEuMS0yMC43LTUwLTIwLjd6TTcyNC4yIDIzMy43Yy0xNi4xIDAtMzEuNCA1LjktNDMuMyAxNi42bDAuMSAwLjEtMS4xIDAuOGMtMC41IDAuNS0xIDAuOS0xLjQgMS40LTEyLjIgMTIuMi0xOC45IDI4LjQtMTguOSA0NS43IDAgMTcuMyA2LjcgMzMuNSAxOC45IDQ1LjdzMjguNCAxOC45IDQ1LjcgMTguOWMzNS42IDAgNjQuNi0yOSA2NC42LTY0LjYgMC0xNy4zLTYuNy0zMy41LTE4LjktNDUuNy0xMi4yLTEyLjItMjguNS0xOC45LTQ1LjctMTguOXoiIHAtaWQ9IjE3NjEiIGZpbGw9IiMzNDNDNDUiPjwvcGF0aD48cGF0aCBkPSJNNTExLjYgMC43QzIyOS4xIDAuNyAwIDIyOS44IDAgNTEyLjRTMjI5LjEgMTAyNCA1MTEuNiAxMDI0czUxMS42LTIyOS4xIDUxMS42LTUxMS42Uzc5NC4yIDAuNyA1MTEuNiAwLjd6IG0yOTEuNiAzNTMuNEw0OTQuNCA3NTkuMmwtMC4xLTAuMUM0NjQuNSA3OTggNDE3LjcgODIzIDM2NS4xIDgyM2MtNDMuNCAwLTg0LjMtMTYuOS0xMTUtNDcuNnMtNDcuNi03MS42LTQ3LjYtMTE1YzAtNDYuNSAxOS42LTg4LjQgNTAuOS0xMTguMWwxLjItMS4xYzctNi41IDE0LjUtMTIuMyAyMi42LTE3LjVMNjU5IDIyN2MxNy44LTE2LjMgNDAuOC0yNS4zIDY1LjEtMjUuMyAyNS44IDAgNTAuMSAxMC4xIDY4LjMgMjguMyAxOC4zIDE4LjMgMjguMyA0Mi41IDI4LjMgNjguMyAwLjEgMjAuOC02LjUgNDAtMTcuNSA1NS44eiIgcC1pZD0iMTc2MiIgZmlsbD0iIzM0M0M0NSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/close.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/chainModel/close.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAzMDc5MjA2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3OTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01NjAuNDM1MiA1MTIuNzE2OGwxNjkuMTY0OC0xNjkuMTY0OGMxMi44LTEyLjggMTIuOC0zMy40ODQ4IDAtNDYuMzg3Mi0xMi44LTEyLjgtMzMuNDg0OC0xMi44LTQ2LjM4NzIgMEw1MTQuMDQ4IDQ2Ni4zMjk2bC0xNjkuMDYyNC0xNjguOTZjLTEyLjgtMTIuOC0zMy40ODQ4LTEyLjgtNDYuMzg3MiAwLTEyLjggMTIuOC0xMi44IDMzLjQ4NDggMCA0Ni4zODcybDE2OS4xNjQ4IDE2OS4wNjI0LTE2OS4wNjI0IDE2OC45NmMtMTIuOCAxMi44LTEyLjggMzMuNDg0OCAwIDQ2LjM4NzIgMTIuOCAxMi44IDMzLjQ4NDggMTIuOCA0Ni4zODcyIDBsMTY5LjE2NDgtMTY5LjE2NDggMTY4Ljk2IDE2OS4wNjI0YzEyLjggMTIuOCAzMy40ODQ4IDEyLjggNDYuMzg3MiAwIDEyLjgtMTIuOCAxMi44LTMzLjQ4NDggMC00Ni4zODcybC0xNjkuMTY0OC0xNjguOTZ6IG0wIDAiIHAtaWQ9IjQ3OTgiIGZpbGw9IiNGNTM1MDAiPjwvcGF0aD48cGF0aCBkPSJNODM2LjMwMDggMTAwNS42NzA0SDE5MS4zODU2Yy05NC41MTUyIDAtMTcxLjQxNzYtNzYuOTAyNC0xNzEuNDE3Ni0xNzEuNDE3NnYtNjQ0LjA5NmMtMC4xMDI0LTk0LjUxNTIgNzYuOC0xNzEuNDE3NiAxNzEuNDE3Ni0xNzEuNDE3Nmg2NDUuMDE3NmM5NC41MTUyIDAgMTcxLjQxNzYgNzYuOTAyNCAxNzEuNDE3NiAxNzEuNDE3NnY2NDMuOTkzNmMtMC4xMDI0IDk0LjUxNTItNzcuMDA0OCAxNzEuNTItMTcxLjUyIDE3MS41MnpNMTkxLjM4NTYgOTUuODQ2NGMtNTEuOTE2OCAwLTk0LjIwOCA0Mi4yOTEyLTk0LjIwOCA5NC4yMDh2NjQzLjk5MzZjMCA1MS45MTY4IDQyLjI5MTIgOTQuMjA4IDk0LjIwOCA5NC4yMDhoNjQ1LjAxNzZjNTEuOTE2OCAwIDk0LjIwOC00Mi4yOTEyIDk0LjIwOC05NC4yMDhWMTkwLjA1NDRjMC01MS45MTY4LTQyLjI5MTItOTQuMjA4LTk0LjIwOC05NC4yMDhIMTkxLjM4NTZ6IG0wIDAiIHAtaWQ9IjQ3OTkiIGZpbGw9IiNGNTM1MDAiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "./src/assets/img/chainModel/copyModel.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/chainModel/copyModel.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyOTIzNzg3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04OTQuODAwOTM3IDEuMDk5MTQxSDM1Mi4xMjQ5MDJjLTY5Ljc0NTUxMSAwLTEyNy42MDAzMTIgNTcuODU0ODAxLTEyNy42MDAzMTIgMTI3LjYwMDMxM2g2MDUuNjI2ODU0YzM1Ljc3MjA1MyAwIDY0LjY0OTQ5MyAyOC4wNzgwNjQgNjQuNjQ5NDkzIDYzLjc1MDE5NVY4MzAuMzUxMjg4YzY5Ljc0NTUxMSAwIDEyNy42MDAzMTItNTcuODU0ODAxIDEyNy42MDAzMTItMTI3LjYwMDMxMlYxMjguNjk5NDU0YzAtNjkuNzQ1NTExLTU3Ljg1NDgwMS0xMjcuNTAwMzktMTI3LjYwMDMxMi0xMjcuNjAwMzEzek03MDkuMzQ1ODI0IDUxOC4yOTUwODJIMTM2LjA5MzY3N3YtNjMuNzUwMTk1aDU3NC4xNTE0NDR2NjMuNzUwMTk1aC0wLjg5OTI5N3ogbTAgMTkxLjM1MDUwN0gxMzYuMDkzNjc3di02My43NTAxOTVoNTc0LjE1MTQ0NHY2My43NTAxOTVoLTAuODk5Mjk3ek02NS41NDg3OSAxOTMuMzQ4OTQ2Yy0zNC44NzI3NTYgMC02My43NTAxOTUgMjguODc3NDQtNjMuNzUwMTk1IDYzLjc1MDE5NXY3MDEuNzUxNzU3YzAgMzQuODcyNzU2IDI4Ljg3NzQ0IDYzLjc1MDE5NSA2My43NTAxOTUgNjMuNzUwMTk1aDcwMS43NTE3NTZjMzQuODcyNzU2IDAgNjMuNzUwMTk1LTI4Ljg3NzQ0IDYzLjc1MDE5Ni02My43NTAxOTVWMjU2LjI5OTc2NmMwLTM0Ljg3Mjc1Ni0yOC44Nzc0NC02My43NTAxOTUtNjMuNzUwMTk2LTYzLjc1MDE5NUg2NS41NDg3OXYwLjc5OTM3NXogbTAgMCIgcC1pZD0iMzQ4NiIgZmlsbD0iIzU5N0REMiI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/delModel.svg":
/*!************************************************!*\
  !*** ./src/assets/img/chainModel/delModel.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyODYwNDkyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik03OTkuMTQzOTE3IDEyOC4wNzQ5ODVoLTU3NC44ODc3MTdjLTUyLjg4OTY3IDAtOTUuNzgxMjkzIDQyLjg5MTYyMy05NS43ODEyOTMgOTUuNzgxMjkzdjMxLjg5Mzc3MWg3NjYuNTUwMjgzdi0zMS44OTM3NzFjMC01Mi44ODk2Ny00Mi44OTE2MjMtOTUuNzgxMjkzLTk1Ljg4MTI3My05NS43ODEyOTNNNjMxLjc3NjYwNiA2NC4xODc0NjNMNjQ1Ljg3Mzg1MyAxNjQuOTY3NzhIMzc3LjUyNjI2NGwxNC4wOTcyNDctMTAwLjc4MDMxN2gyNDAuMTUzMDk1TTYzOS40NzUxMDMgMC4yOTk5NDFIMzgzLjkyNTAxNWMtMjYuMzk0ODQ1IDAtNTAuODkwMDYxIDIxLjI5NTg0MS01NC41ODkzMzggNDcuNDkwNzI1bC0xOC42OTYzNDkgMTMzLjY3Mzg5MmMtMy41OTkyOTcgMjYuMDk0OTAzIDE0Ljg5NzA5IDQ3LjQ5MDcyNCA0MS4yOTE5MzUgNDcuNDkwNzI0aDMxOS40Mzc2MWMyNi4zOTQ4NDUgMCA0NC45OTEyMTMtMjEuMjk1ODQxIDQxLjI5MTkzNS00Ny40OTA3MjRMNjkzLjk2NDQ2IDQ3Ljc5MDY2NkM2OTAuMzY1MTYzIDIxLjY5NTc2MyA2NjUuNzY5OTY3IDAuMjk5OTQxIDYzOS40NzUxMDMgMC4yOTk5NDFtMTc1LjY2NTY5IDMxOS40Mzc2MWgtNjA2Ljg4MTQ2OWMtMzUuMDkzMTQ2IDAtNjEuMjg4MDMgMjguNTk0NDE1LTU4LjA4ODY1NCA2My41ODc1ODFsNTIuMzg5NzY3IDU3NS4zODc2MTljMy4wOTkzOTUgMzQuOTkzMTY1IDM0LjQ5MzI2MyA2My41ODc1ODEgNjkuNjg2MzkgNjMuNTg3NTgxaDQ3OS4xMDY0MjRjMzUuMDkzMTQ2IDAgNjYuNDg3MDE0LTI4LjU5NDQxNSA2OS42ODYzOS02My41ODc1ODFsNTIuMzg5NzY3LTU3NS4zODc2MTljMi45OTk0MTQtMzQuOTkzMTY1LTIzLjE5NTQ3LTYzLjU4NzU4MS01OC4yODg2MTUtNjMuNTg3NTgxbS00MzEuMjE1Nzc4IDU3NC44ODc3MThoLTk1Ljc4MTI5M2wtMzEuODkzNzcxLTQ0Ny4xMTI2NzRIMzg0LjAyNDk5NWwtMC4wOTk5OCA0NDcuMTEyNjc0eiBtMTkxLjY2MjU2NiAwSDQ0Ny44MTI1MzdWNDQ3LjUxMjU5NWgxMjcuNzc1MDQ0djQ0Ny4xMTI2NzR6IG0xNTkuNjY4ODE0IDBoLTk1Ljc4MTI5MlY0NDcuNTEyNTk1aDEyNy43NzUwNDNsLTMxLjk5Mzc1MSA0NDcuMTEyNjc0eiBtMCAwIiBwLWlkPSIyOTg1IiBmaWxsPSIjRjUzNTAwIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./src/assets/img/chainModel/down.svg":
/*!********************************************!*\
  !*** ./src/assets/img/chainModel/down.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAzMDcwMTY2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2NzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDMzMC45YzAtMTkuMSA3LjItMzguMiAyMS43LTUyLjcgMjkuMS0yOS4xIDc2LjItMjkuMSAxMDUuMiAwbDM4NSAzODUgMzg1LjItMzg1YzI5LjEtMjkuMSA3Ni4yLTI5LjEgMTA1LjIgMHMyOS4xIDc2LjIgMCAxMDUuMkw1MTIgODczLjggMjEuOCAzODMuNEM3LjIgMzY4LjkgMCAzNDkuOCAwIDMzMC45eiIgcC1pZD0iNDY3MSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/edit.svg":
/*!********************************************!*\
  !*** ./src/assets/img/chainModel/edit.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyNjg3NTk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMDE1LjggNzAwLjlMODQ1LjEgNTMwLjJjLTUuNC01LjQtMTQuMy01LjQtMTkuNyAwTDY1NC43IDcwMC45aDE1My40djMxOC4zaDYzLjRWNzAwLjloMTQ0LjN6IiBwLWlkPSIxOTg1IiBmaWxsPSIjNTk3REQyIj48L3BhdGg+PHBhdGggZD0iTTk0NC4xIDVIODAuOEM0MS4xIDUgOC45IDMzLjQgOC45IDY4LjR2ODg3LjFjMCAzNSAzMi4yIDYzLjQgNzEuOSA2My40aDUwMy42di02My40SDgwLjhWNjguNEg5NDR2NTA2LjloNzEuOVY2OC40YzAuMS0zNS0zMi4xLTYzLjQtNzEuOC02My40eiIgcC1pZD0iMTk4NiIgZmlsbD0iIzU5N0REMiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNjcuOSAzNjYuN2g1NDcuNHY2OC40SDI2Ny45ek0yNjcuOSA2NDMuOWgyNTEuNXY2My40SDI2Ny45eiIgcC1pZD0iMTk4NyIgZmlsbD0iIzU5N0REMiI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/exportModel.svg":
/*!***************************************************!*\
  !*** ./src/assets/img/chainModel/exportModel.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAzMDA1NjA5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyMTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xNDguOCAxMDIyaDcyNy43YzczLjktMTIuNCAxMzIuNC03MC42IDE0NS41LTE0NC4zVjE0Ny4yQzEwMDguNyA3Mi4zIDk0OC40IDEzLjQgODcyLjggMi40SDE1Mi42Qzc1IDEzLjcgMTMuNSA3NS4zIDIuNSAxNTN2NzE4LjdDMTMuNCA5NDguMiA3MyAxMDA5LjIgMTQ4LjggMTAyMnogbS0zNi40LTkxMy4xSDkxMnY1MzguN0g2NjN2MTk1LjNIMzYxLjNWNjQ3LjZIMTEyLjRWMTA4Ljl6IiBwLWlkPSI0MjE3IiBmaWxsPSIjNTk3REQyIj48L3BhdGg+PHBhdGggZD0iTTQ1NSA1MTEuOGgxMTguNnYyODAuOEg0NTV6IiBwLWlkPSI0MjE4IiBmaWxsPSIjNTk3REQyIj48L3BhdGg+PHBhdGggZD0iTTI5NC42IDUxMi43bDIxOS42LTI3NyAyMTkuNiAyNzdIMjk0LjZ6IG0wIDAiIHAtaWQ9IjQyMTkiIGZpbGw9IiM1OTdERDIiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "./src/assets/img/chainModel/importModel.svg":
/*!***************************************************!*\
  !*** ./src/assets/img/chainModel/importModel.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyOTc0NjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NDYuOCAwSDE3OC4yQzgwLjEgMCAwLjQgNzkuOCAwLjUgMTc3Ljh2NjY4LjNjMCA5OC4xIDc5LjcgMTc3LjggMTc3LjcgMTc3LjhoNjY4LjVjOTguMSAwIDE3Ny44LTc5LjggMTc3LjgtMTc3LjlWMTc3LjhjMC05OC03OS43LTE3Ny44LTE3Ny43LTE3Ny44ek0zMjMuMyAzNDguNWMxNS42LTE1LjYgNDAuOS0xNS42IDU2LjYgMGw4OS41IDg5LjVWMTI1LjZjMC0yMi4xIDE3LjktNDAgNDAtNDBzNDAgMTcuOSA0MCA0MFY0MzhsODkuNS04OS41YzE1LjYtMTUuNiA0MC45LTE1LjYgNTYuNiAwIDE1LjYgMTUuNiAxNS42IDQwLjkgMCA1Ni42bC0xODYuMSAxODZMMzIzLjMgNDA1Yy0xNS42LTE1LjYtMTUuNi00MC45IDAtNTYuNXogbTU2MS45IDU4Ny45SDEzMy43di00MTZIMzg0djgwSDIwMy43djI1Nmg2MTEuNHYtMjU2SDYzNC45di04MGgyNTAuM3Y0MTZ6IiBwLWlkPSIzOTg4IiBmaWxsPSIjNTk3REQyIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./src/assets/img/chainModel/more.svg":
/*!********************************************!*\
  !*** ./src/assets/img/chainModel/more.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyODExNjkyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3NTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNi4wMDU4NTkzNzUiIGhlaWdodD0iNiI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODQ3LjA1MTkzIDBIMTc3Ljg0Nzk4NkM3OS42NzY3NDcgMC0wLjA5OTg4MSA3OS43NzY2MjggMC4wMDAwOSAxNzcuODQ3ODk2djY2OC4zMDQyMDhDMC4wMDAwOSA5NDQuMjIzMzcyIDc5Ljc3NjcxOCAxMDI0IDE3Ny44NDc5ODYgMTAyNGg2NjkuMTAzOTc0Yzk4LjE3MTIzOSAwIDE3Ny45NDc4NjctNzkuNzc2NjI4IDE3Ny45NDc4NjYtMTc3Ljk0Nzg2N1YxNzcuODQ3ODk2YzAtOTguMDcxMjY4LTc5Ljc3NjYyOC0xNzcuODQ3ODk2LTE3Ny44NDc4OTYtMTc3Ljg0Nzg5NnoiIHAtaWQ9IjI3NjAiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmk5IiBjbGFzcz0ic2VsZWN0ZWQiIGZpbGw9IiM1OTdERDIiPjwvcGF0aD48cGF0aCBkPSJNNDg4LjI1NzA0NiA4MDQuMzY0MzQ2Yy0xMC44OTY4MDggMC0yMS43OTM2MTUtNC4wOTg3OTktMzAuMDkxMTg0LTEyLjM5NjM2OC0xNi41OTUxMzgtMTYuNTk1MTM4LTE2LjU5NTEzOC00My40ODcyNiAwLTYwLjA4MjM5OGwyMTkuODM1NTk1LTIxOS44MzU1OTUtMjE5LjgzNTU5NS0yMTkuOTM1NTY1Yy0xNi41OTUxMzgtMTYuNTk1MTM4LTE2LjU5NTEzOC00My40ODcyNiAwLTYwLjA4MjM5OHM0My40ODcyNi0xNi41OTUxMzggNjAuMDgyMzk3IDBsMjgwLjAxNzk2NCAyODAuMDE3OTYzLTI4MC4wMTc5NjQgMjc5LjkxNzk5M2MtOC4yOTc1NjkgOC4yOTc1NjktMTkuMTk0Mzc3IDEyLjM5NjM2OC0yOS45OTEyMTMgMTIuMzk2MzY4eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMjc2MSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzUuMTMxMjA0IDgwNC4zNjQzNDZjLTEwLjg5NjgwOCAwLTIxLjc5MzYxNS00LjA5ODc5OS0zMC4wOTExODQtMTIuMzk2MzY4LTE2LjU5NTEzOC0xNi41OTUxMzgtMTYuNTk1MTM4LTQzLjQ4NzI2IDAtNjAuMDgyMzk4TDQyNC44NzU2MTUgNTEyLjA0OTk4NWwtMjE5LjczNTYyNS0yMTkuOTM1NTY1Yy0xNi41OTUxMzgtMTYuNTk1MTM4LTE2LjU5NTEzOC00My40ODcyNiAwLTYwLjA4MjM5OHM0My40ODcyNi0xNi41OTUxMzggNjAuMDgyMzk4IDBsMjgwLjAxNzk2NCAyODAuMDE3OTYzLTI4MC4wMTc5NjQgMjc5LjkxNzk5M2MtOC4yOTc1NjkgOC4yOTc1NjktMTkuMTk0Mzc3IDEyLjM5NjM2OC0zMC4wOTExODQgMTIuMzk2MzY4eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMjc2MiI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/img/chainModel/saveModel.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/chainModel/saveModel.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyOTUwNTkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3NjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xNzMuMiAyLjh2MzgzLjRjMCAzMS43IDMwLjMgNTcuNCA2Ny44IDU3LjRoNTQyLjVjMzcuNSAwIDY3LjgtMjUuNyA2Ny44LTU3LjRWMi44YzQ1IDAgODguMSAxNy45IDExOS45IDQ5LjcgMzEuOCAzMS44IDQ5LjcgNzQuOSA0OS43IDExOS45djY3OC4xYzAgNDUtMTcuOSA4OC4xLTQ5LjcgMTE5LjktMzEuOCAzMS44LTc0LjkgNDkuNy0xMTkuOSA0OS43SDE3My4yYy00NSAwLTg4LjEtMTcuOS0xMTkuOS00OS43LTMxLjgtMzEuOS00OS43LTc1LTQ5LjctMTE5LjlWMTcyLjNjMC00NSAxNy45LTg4LjEgNDkuNy0xMTkuOUM4NS4xIDIwLjcgMTI4LjIgMi44IDE3My4yIDIuOHogbTY3LjggMGg1NDIuNXYzNzNIMjQxVjIuOHogbTQ0MC44IDEzNS42Yy05IDAtMTcuNiAzLjYtMjQgOS45LTYuNCA2LjQtOS45IDE1LTkuOSAyNFYyNzRjMCAxOC43IDE1LjIgMzMuOSAzMy45IDMzLjlzMzMuOS0xNS4yIDMzLjktMzMuOVYxNzIuM2MwLTktMy42LTE3LjYtOS45LTI0LTYuNC02LjMtMTUuMS05LjktMjQtOS45eiBtMCAwIiBwLWlkPSIzNzY1IiBmaWxsPSIjNTk3REQyIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./src/assets/img/chainModel/searchWhite.svg":
/*!***************************************************!*\
  !*** ./src/assets/img/chainModel/searchWhite.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY5MzAyNzMzMzEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNiIgaGVpZ2h0PSI2Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00MjMuOTEwMjE4IDc2Ny4zNzU0MjdjOTEuNTM3NDI2IDAgMTc0LjQ4MDcyNi0zNS45NzU0MDcgMjM2LjAzODY0NS05NC4zMzU1MTNsMC4zOTk3MjcgMC40OTk2NTljMS41OTg5MDctMi40OTgyOTIgMy40OTc2MDktNC45OTY1ODQgNS42OTYxMDYtNy4xOTUwODIgMTYuNTg4NjYtMTYuNTg4NjYgNDMuNTcwMjE2LTE2LjU4ODY2IDYwLjE1ODg3NiAwbDI4NC4xMDU3ODcgMjgzLjgwNTk5MmMxNi41ODg2NiAxNi41ODg2NiAxNi41ODg2NiA0My41NzAyMTYgMCA2MC4xNTg4NzZzLTQzLjU3MDIxNiAxNi41ODg2Ni02MC4yNTg4MDggMEw2OTYuMDI0MjAyIDc1Ni4zODI5NDFjLTczLjM0OTg1OCA1OS45NTkwMTItMTY2Ljg4NTkxOCA5Ni4xMzQyODMtMjY5LjExNjAzNCA5Ni4xMzQyODRDMTkxLjU2OTA0NSA4NTIuNTE3MjI1IDAuNzk5NDUzIDY2MS44NDc1NjUgMC43OTk0NTMgNDI2LjcwODMwNSAwLjc5OTQ1MyAxOTEuNDY5MTEzIDE5MS41NjkwNDUgMC43OTk0NTMgNDI2LjkwODE2OCAwLjc5OTQ1MyA2NjIuMjQ3MjkyIDAuNzk5NDUzIDg1My4xMTY4MTUgMTkxLjQ2OTExMyA4NTMuMTE2ODE1IDQyNi43MDgzMDVjMCA0Ni4zNjgzMDMtOC4wOTQ0NjcgOTAuNzM3OTcyLTIxLjc4NTEwOCAxMzIuNDA5NDg2LTMuMDk3ODgyIDIwLjM4NjA2NC0yMC41ODU5MjggMzYuMDc1MzM5LTQxLjg3MTM3NyAzNi4wNzUzMzktMjMuNDgzOTQ3IDAtNDIuNTcwODk5LTE5LjA4Njk1Mi00Mi41NzA4OTktNDIuNTcwODk5bC0wLjM5OTcyNy0zLjg5NzMzNmMwLTQuMzk2OTk0IDAuODk5Mzg1LTguNDk0MTkzIDIuMDk4NTY2LTEyLjQ5MTQ2MWwtMC4xOTk4NjQtMC4wOTk5MzJjMTIuMTkxNjY2LTM1LjE3NTk1NCAxOS4wODY5NTItNzIuNzUwMjY4IDE5LjA4Njk1My0xMTIuMTIzMzUzIDAtMTg5LjU3MDQxMS0xNTMuNzk0ODY3LTM0My4yNjUzNDYtMzQzLjQ2NTIxLTM0My4yNjUzNDYtMTg5LjY3MDM0MyAwLTM0My40NjUyMDkgMTUzLjY5NDkzNS0zNDMuNDY1MjA5IDM0My4yNjUzNDYtMC4wOTk5MzIgMTg5LjY3MDM0MyAxNTMuNjk0OTM1IDM0My4zNjUyNzggMzQzLjM2NTI3OCAzNDMuMzY1Mjc4eiBtMCAwIiBwLWlkPSIyMjEwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./src/components/common/xml2json.min.js":
/*!***********************************************!*\
  !*** ./src/components/common/xml2json.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (a, b) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  return function (z) {
    var t = "1.2.0";
    z = z || {};
    i();
    u();

    function i() {
      if (z.escapeMode === undefined) {
        z.escapeMode = true;
      }

      z.attributePrefix = z.attributePrefix || "_";
      z.arrayAccessForm = z.arrayAccessForm || "none";
      z.emptyNodeForm = z.emptyNodeForm || "text";

      if (z.enableToStringFunc === undefined) {
        z.enableToStringFunc = true;
      }

      z.arrayAccessFormPaths = z.arrayAccessFormPaths || [];

      if (z.skipEmptyTextNodesForObj === undefined) {
        z.skipEmptyTextNodesForObj = true;
      }

      if (z.stripWhitespaces === undefined) {
        z.stripWhitespaces = true;
      }

      z.datetimeAccessFormPaths = z.datetimeAccessFormPaths || [];

      if (z.useDoubleQuotes === undefined) {
        z.useDoubleQuotes = false;
      }

      z.xmlElementsFilter = z.xmlElementsFilter || [];
      z.jsonPropertiesFilter = z.jsonPropertiesFilter || [];

      if (z.keepCData === undefined) {
        z.keepCData = false;
      }
    }

    var h = {
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      CDATA_SECTION_NODE: 4,
      COMMENT_NODE: 8,
      DOCUMENT_NODE: 9
    };

    function u() {}

    function x(B) {
      var C = B.localName;

      if (C == null) {
        C = B.baseName;
      }

      if (C == null || C == "") {
        C = B.nodeName;
      }

      return C;
    }

    function r(B) {
      return B.prefix;
    }

    function s(B) {
      if (typeof B == "string") {
        return B.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
      } else {
        return B;
      }
    }

    function k(B) {
      return B.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
    }

    function w(C, F, D, E) {
      var B = 0;

      for (; B < C.length; B++) {
        var G = C[B];

        if (typeof G === "string") {
          if (G == E) {
            break;
          }
        } else {
          if (G instanceof RegExp) {
            if (G.test(E)) {
              break;
            }
          } else {
            if (typeof G === "function") {
              if (G(F, D, E)) {
                break;
              }
            }
          }
        }
      }

      return B != C.length;
    }

    function n(D, B, C) {
      switch (z.arrayAccessForm) {
        case "property":
          if (!(D[B] instanceof Array)) {
            D[B + "_asArray"] = [D[B]];
          } else {
            D[B + "_asArray"] = D[B];
          }

          break;
      }

      if (!(D[B] instanceof Array) && z.arrayAccessFormPaths.length > 0) {
        if (w(z.arrayAccessFormPaths, D, B, C)) {
          D[B] = [D[B]];
        }
      }
    }

    function a(G) {
      var E = G.split(/[-T:+Z]/g);
      var F = new Date(E[0], E[1] - 1, E[2]);
      var D = E[5].split(".");
      F.setHours(E[3], E[4], D[0]);

      if (D.length > 1) {
        F.setMilliseconds(D[1]);
      }

      if (E[6] && E[7]) {
        var C = E[6] * 60 + Number(E[7]);
        var B = /\d\d-\d\d:\d\d$/.test(G) ? "-" : "+";
        C = 0 + (B == "-" ? -1 * C : C);
        F.setMinutes(F.getMinutes() - C - F.getTimezoneOffset());
      } else {
        if (G.indexOf("Z", G.length - 1) !== -1) {
          F = new Date(Date.UTC(F.getFullYear(), F.getMonth(), F.getDate(), F.getHours(), F.getMinutes(), F.getSeconds(), F.getMilliseconds()));
        }
      }

      return F;
    }

    function q(D, B, C) {
      if (z.datetimeAccessFormPaths.length > 0) {
        var E = C.split(".#")[0];

        if (w(z.datetimeAccessFormPaths, D, B, E)) {
          return a(D);
        } else {
          return D;
        }
      } else {
        return D;
      }
    }

    function b(E, C, B, D) {
      if (C == h.ELEMENT_NODE && z.xmlElementsFilter.length > 0) {
        return w(z.xmlElementsFilter, E, B, D);
      } else {
        return true;
      }
    }

    function A(D, J) {
      if (D.nodeType == h.DOCUMENT_NODE) {
        var K = new Object();
        var B = D.childNodes;

        for (var L = 0; L < B.length; L++) {
          var C = B.item(L);

          if (C.nodeType == h.ELEMENT_NODE) {
            var I = x(C);
            K[I] = A(C, I);
          }
        }

        return K;
      } else {
        if (D.nodeType == h.ELEMENT_NODE) {
          var K = new Object();
          K.__cnt = 0;
          var B = D.childNodes;

          for (var L = 0; L < B.length; L++) {
            var C = B.item(L);
            var I = x(C);

            if (C.nodeType != h.COMMENT_NODE) {
              var H = J + "." + I;

              if (b(K, C.nodeType, I, H)) {
                K.__cnt++;

                if (K[I] == null) {
                  K[I] = A(C, H);
                  n(K, I, H);
                } else {
                  if (K[I] != null) {
                    if (!(K[I] instanceof Array)) {
                      K[I] = [K[I]];
                      n(K, I, H);
                    }
                  }

                  K[I][K[I].length] = A(C, H);
                }
              }
            }
          }

          for (var E = 0; E < D.attributes.length; E++) {
            var F = D.attributes.item(E);
            K.__cnt++;
            K[z.attributePrefix + F.name] = F.value;
          }

          var G = r(D);

          if (G != null && G != "") {
            K.__cnt++;
            K.__prefix = G;
          }

          if (K["#text"] != null) {
            K.__text = K["#text"];

            if (K.__text instanceof Array) {
              K.__text = K.__text.join("\n");
            }

            if (z.stripWhitespaces) {
              K.__text = K.__text.trim();
            }

            delete K["#text"];

            if (z.arrayAccessForm == "property") {
              delete K["#text_asArray"];
            }

            K.__text = q(K.__text, I, J + "." + I);
          }

          if (K["#cdata-section"] != null) {
            K.__cdata = K["#cdata-section"];
            delete K["#cdata-section"];

            if (z.arrayAccessForm == "property") {
              delete K["#cdata-section_asArray"];
            }
          }

          if (K.__cnt == 0 && z.emptyNodeForm == "text") {
            K = "";
          } else {
            if (K.__cnt == 1 && K.__text != null) {
              K = K.__text;
            } else {
              if (K.__cnt == 1 && K.__cdata != null && !z.keepCData) {
                K = K.__cdata;
              } else {
                if (K.__cnt > 1 && K.__text != null && z.skipEmptyTextNodesForObj) {
                  if (z.stripWhitespaces && K.__text == "" || K.__text.trim() == "") {
                    delete K.__text;
                  }
                }
              }
            }
          }

          delete K.__cnt;

          if (z.enableToStringFunc && (K.__text != null || K.__cdata != null)) {
            K.toString = function () {
              return (this.__text != null ? this.__text : "") + (this.__cdata != null ? this.__cdata : "");
            };
          }

          return K;
        } else {
          if (D.nodeType == h.TEXT_NODE || D.nodeType == h.CDATA_SECTION_NODE) {
            return D.nodeValue;
          }
        }
      }
    }

    function o(I, F, H, C) {
      var E = "<" + (I != null && I.__prefix != null ? I.__prefix + ":" : "") + F;

      if (H != null) {
        for (var G = 0; G < H.length; G++) {
          var D = H[G];
          var B = I[D];

          if (z.escapeMode) {
            B = s(B);
          }

          E += " " + D.substr(z.attributePrefix.length) + "=";

          if (z.useDoubleQuotes) {
            E += '"' + B + '"';
          } else {
            E += "'" + B + "'";
          }
        }
      }

      if (!C) {
        E += ">";
      } else {
        E += "/>";
      }

      return E;
    }

    function j(C, B) {
      return "</" + (C.__prefix != null ? C.__prefix + ":" : "") + B + ">";
    }

    function v(C, B) {
      return C.indexOf(B, C.length - B.length) !== -1;
    }

    function y(C, B) {
      if (z.arrayAccessForm == "property" && v(B.toString(), "_asArray") || B.toString().indexOf(z.attributePrefix) == 0 || B.toString().indexOf("__") == 0 || C[B] instanceof Function) {
        return true;
      } else {
        return false;
      }
    }

    function m(D) {
      var C = 0;

      if (D instanceof Object) {
        for (var B in D) {
          if (y(D, B)) {
            continue;
          }

          C++;
        }
      }

      return C;
    }

    function l(D, B, C) {
      return z.jsonPropertiesFilter.length == 0 || C == "" || w(z.jsonPropertiesFilter, D, B, C);
    }

    function c(D) {
      var C = [];

      if (D instanceof Object) {
        for (var B in D) {
          if (B.toString().indexOf("__") == -1 && B.toString().indexOf(z.attributePrefix) == 0) {
            C.push(B);
          }
        }
      }

      return C;
    }

    function g(C) {
      var B = "";

      if (C.__cdata != null) {
        B += "<![CDATA[" + C.__cdata + "]]>";
      }

      if (C.__text != null) {
        if (z.escapeMode) {
          B += s(C.__text);
        } else {
          B += C.__text;
        }
      }

      return B;
    }

    function d(C) {
      var B = "";

      if (C instanceof Object) {
        B += g(C);
      } else {
        if (C != null) {
          if (z.escapeMode) {
            B += s(C);
          } else {
            B += C;
          }
        }
      }

      return B;
    }

    function p(C, B) {
      if (C === "") {
        return B;
      } else {
        return C + "." + B;
      }
    }

    function f(D, G, F, E) {
      var B = "";

      if (D.length == 0) {
        B += o(D, G, F, true);
      } else {
        for (var C = 0; C < D.length; C++) {
          B += o(D[C], G, c(D[C]), false);
          B += e(D[C], p(E, G));
          B += j(D[C], G);
        }
      }

      return B;
    }

    function e(I, H) {
      var B = "";
      var F = m(I);

      if (F > 0) {
        for (var E in I) {
          if (y(I, E) || H != "" && !l(I, E, p(H, E))) {
            continue;
          }

          var D = I[E];
          var G = c(D);

          if (D == null || D == undefined) {
            B += o(D, E, G, true);
          } else {
            if (D instanceof Object) {
              if (D instanceof Array) {
                B += f(D, E, G, H);
              } else {
                if (D instanceof Date) {
                  B += o(D, E, G, false);
                  B += D.toISOString();
                  B += j(D, E);
                } else {
                  var C = m(D);

                  if (C > 0 || D.__text != null || D.__cdata != null) {
                    B += o(D, E, G, false);
                    B += e(D, p(H, E));
                    B += j(D, E);
                  } else {
                    B += o(D, E, G, true);
                  }
                }
              }
            } else {
              B += o(D, E, G, false);
              B += d(D);
              B += j(D, E);
            }
          }
        }
      }

      B += d(I);
      return B;
    }

    this.parseXmlString = function (D) {
      var F = window.ActiveXObject || "ActiveXObject" in window;

      if (D === undefined) {
        return null;
      }

      var E;

      if (window.DOMParser) {
        var G = new window.DOMParser();
        var B = null;

        if (!F) {
          try {
            B = G.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
          } catch (C) {
            B = null;
          }
        }

        try {
          E = G.parseFromString(D, "text/xml");

          if (B != null && E.getElementsByTagNameNS(B, "parsererror").length > 0) {
            E = null;
          }
        } catch (C) {
          E = null;
        }
      } else {
        if (D.indexOf("<?") == 0) {
          D = D.substr(D.indexOf("?>") + 2);
        }

        E = new ActiveXObject("Microsoft.XMLDOM");
        E.async = "false";
        E.loadXML(D);
      }

      return E;
    };

    this.asArray = function (B) {
      if (B === undefined || B == null) {
        return [];
      } else {
        if (B instanceof Array) {
          return B;
        } else {
          return [B];
        }
      }
    };

    this.toXmlDateTime = function (B) {
      if (B instanceof Date) {
        return B.toISOString();
      } else {
        if (typeof B === "number") {
          return new Date(B).toISOString();
        } else {
          return null;
        }
      }
    };

    this.asDateTime = function (B) {
      if (typeof B == "string") {
        return a(B);
      } else {
        return B;
      }
    };

    this.xml2json = function (B) {
      return A(B);
    };

    this.xml_str2json = function (B) {
      var C = this.parseXmlString(B);

      if (C != null) {
        return this.xml2json(C);
      } else {
        return null;
      }
    };

    this.json2xml_str = function (B) {
      return e(B, "");
    };

    this.json2xml = function (C) {
      var B = this.json2xml_str(C);
      return this.parseXmlString(B);
    };

    this.getVersion = function () {
      return t;
    };
  };
});

/***/ }),

/***/ "./src/components/content/device/ChainModel.vue":
/*!******************************************************!*\
  !*** ./src/components/content/device/ChainModel.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChainModel.vue?vue&type=template&id=70b128eb&scoped=true& */ "./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true&");
/* harmony import */ var _ChainModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChainModel.vue?vue&type=script&lang=js& */ "./src/components/content/device/ChainModel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChainModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70b128eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/device/ChainModel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/device/ChainModel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/components/content/device/ChainModel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_ChainModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./ChainModel.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/ChainModel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_ChainModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./ChainModel.vue?vue&type=template&id=70b128eb&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/ChainModel.vue?vue&type=template&id=70b128eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_ChainModel_vue_vue_type_template_id_70b128eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/content/device/Device.vue":
/*!**************************************************!*\
  !*** ./src/components/content/device/Device.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device.vue?vue&type=template&id=508508d9& */ "./src/components/content/device/Device.vue?vue&type=template&id=508508d9&");
/* harmony import */ var _Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Device.vue?vue&type=script&lang=js& */ "./src/components/content/device/Device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Device.vue?vue&type=style&index=0&lang=scss& */ "./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/device/Device.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/device/Device.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/content/device/Device.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Device.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Device.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/content/device/Device.vue?vue&type=template&id=508508d9&":
/*!*********************************************************************************!*\
  !*** ./src/components/content/device/Device.vue?vue&type=template&id=508508d9& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Device.vue?vue&type=template&id=508508d9& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/Device.vue?vue&type=template&id=508508d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_508508d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/content/device/MyMachine.vue":
/*!*****************************************************!*\
  !*** ./src/components/content/device/MyMachine.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyMachine.vue?vue&type=template&id=05045348&scoped=true& */ "./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true&");
/* harmony import */ var _MyMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyMachine.vue?vue&type=script&lang=js& */ "./src/components/content/device/MyMachine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05045348",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/device/MyMachine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/device/MyMachine.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/components/content/device/MyMachine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyMachine.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/MyMachine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./MyMachine.vue?vue&type=template&id=05045348&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/content/device/MyMachine.vue?vue&type=template&id=05045348&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_MyMachine_vue_vue_type_template_id_05045348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=24-eab84cbc.js.map