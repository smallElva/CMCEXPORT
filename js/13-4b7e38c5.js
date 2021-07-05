(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/viewInterface/assets/common/headCommon.js":
/*!*******************************************************!*\
  !*** ./src/viewInterface/assets/common/headCommon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/_@riophae_vue-treeselect@0.4.0@@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/_@riophae_vue-treeselect@0.4.0@@riophae/vue-treeselect/dist/vue-treeselect.css");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
// import the component
 // import the styles



var head = {
  components: {
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      options: [],
      //组织数据
      chooseMacList: [],
      //选择的机组列表
      chooseDgmList: [],
      //选择的采集器列表
      choosePosList: [],
      //选择的测点列表
      chooseTid: null,
      //所选的组织id
      chooseMacId: null,
      //所选的机组id
      choosePosTypeId: null,
      //所选的测点id
      chooseDgmId: null,
      //所选的采集器id
      chooseDgmType: null,
      //所选采集器类型
      selIndex: 0,
      //默认选中的测点index
      choosePosId: null,
      choosePosType: null,
      choosePosName: '',
      chooseIsRealType: 2,
      toggleText: '实时',
      currentPage: 1,
      //当前滚动页面
      noTips: '无选项' //   isReal:true,

    };
  },
  watch: {},
  beforeDestroy: function beforeDestroy() {},
  mounted: function mounted() {},
  computed: {
    reSetMacList: function reSetMacList() {
      var list = this.chooseMacList;

      if (list && list.length) {
        list.forEach(function (item) {
          item.id = item.mac_id;
          item.label = item.mac_me;
        });
      } else {
        list = [];
      }

      return list;
    },
    reSetDgmList: function reSetDgmList() {
      var _this = this;

      var list = this.chooseDgmList;

      if (list && list.length) {
        list.forEach(function (item) {
          item.id = item.dgm_type;
          item.dgmTypeName = _this.transDgmName(item.dgm_type, _this.chooseTree.t_root);
          item.label = item.dgmTypeName;
        });
      } else {
        list = [];
      }

      return list;
    },
    reSetPosList: function reSetPosList() {
      var list = this.choosePosList;

      if (list && list.length) {
        list.forEach(function (item) {
          item.id = item.pos_type + '_' + item.pos_id + '_' + item.mac_id;
          item.label = item.pos_name;
        });
      } else {
        list = [];
      }

      return list;
    },
    reDgmList: function reDgmList() {
      var list = this.chooseDgmList;

      if (list && list.length) {
        list.forEach(function (item) {
          item.id = item.dgm_id;
          item.label = item.dgm_name;
        });
      } else {
        list = [];
      }

      return list;
    }
  },
  methods: {
    //获取数据
    getHeadData: function getHeadData(type) {
      var that = this;
      var params = null;
      params = {
        type: type,
        t_ids: JSON.parse(sessionStorage.getItem('getTidList'))
      }; // that.options = that.$store.state.options;

      this.$axios.post('getPositionDataConfig', params).then(function (res) {
        if (res.msg === 0 && res.list && res.list.length) {
          that.options = that.getFolderList(res.list); // that.$store.commit("setOptions", that.options); //赋值给vuex

          that.setOrigData();
        } else {
          that.hasData = false;
          that.noLogData = true;
          console.log('请求失败');
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    //造数据
    setOrigData: function setOrigData() {
      this.choosePosType = null;
      this.choosePosTypeId = null;
      this.chooseDgmType = null;
      this.chooseDgmId = null;
      this.chooseTid = null;
      this.chooseFolderId = null;
      this.choosePos = {};
      this.selectPosition = {};
      this.toggleText = "实时"; //实时与历史按钮文字

      this.isReal = true; //是否实时

      this.flag_real = 1;
      this.chooseIsRealType = 2; //1是历史数据，2是实时数据

      if (this.options && this.options.length) {
        this.chooseTid = this.options[0].id;
        this.chooseTroot = this.options[0].t_root;
        this.chooseTname = this.options[0].t_name;
        this.chooseFolderId = this.options[0].t_id;
        this.chooseTree = this.options[0];
        this.chooseMacList = this.options[0].mac_list;

        if (this.chooseMacList && this.chooseMacList.length > 0) {
          this.chooseMacId = this.chooseMacList[0].mac_id;
          this.selectMachine = this.chooseMacList[0];
          this.chooseMacName = this.chooseMacList[0].mac_me;
          this.chooseDgmList = this.chooseMacList[0].dgms_list;
          this.choosePosList = this.chooseMacList[0].positions_list;
        }

        var linkInfo = this.$store.state.treeData;

        if (!$.isEmptyObject(linkInfo)) {
          this.chooseTree = linkInfo; //所选的组织id

          this.chooseTid = linkInfo.t_id; //所选的组织id

          this.chooseTroot = linkInfo.t_root; //所选的组织id
        }

        var isReal = this.$store.state.isReal;

        if (isReal) {
          this.isReal = true; //是否实时

          this.flag_real = 1;
          this.chooseIsRealType = 2;
          this.toggleText = "实时";
        } else {
          this.isReal = false; //是否实时

          this.flag_real = 0;
          this.chooseIsRealType = 1;
          this.toggleText = "历史";
        } // if(this.choosePosList && this.choosePosList.length){
        //     if($.isEmptyObject(this.choosePos) || this.choosePos == undefined){
        //         if(this.choosePosTypeId === null || this.choosePosTypeId == undefined){
        //             this.choosePos = this.choosePosList[0];
        //             this.selectPosition = this.choosePosList[0];
        //             this.choosePosTypeId = this.choosePosList[0].pos_type + '_' + this.choosePosList[0].pos_id  + '_' + this.chooseMacId;
        //             this.choosePosName = this.choosePosList[0].pos_name;//所选的测点名
        //         }
        //         else{
        //             let posType = this.choosePosTypeId.split('_')[0];
        //             let posId = this.choosePosTypeId.split('_')[1];
        //             let macId = this.choosePosTypeId.split('_')[2];
        //             this.choosePosList.forEach(item=>{
        //                 if(item.pos_type==posType && item.pos_id == posId && item.mac_id == macId){
        //                     this.choosePos = item;
        //                 }
        //             })
        //         }
        //     }
        //    else{
        //         this.selectPosition = this.choosePos;
        //         if(this.choosePosTypeId === null || this.choosePosTypeId == undefined){
        //             this.choosePosTypeId = this.choosePos.pos_type + '_' + this.choosePos.pos_id  + '_' + this.choosePos.mac_id;
        //             this.choosePosName = this.choosePos.pos_name;//所选的测点名
        //         }
        //    } 
        // }
        // if(this.chooseDgmList && this.chooseDgmList.length){
        //     this.chooseDgmId = this.chooseDgmList[0].dgm_id;
        //     this.chooseDgmType = this.chooseDgmList[0].dgm_type;
        //     this.choosePosType = -1;
        //     this.getPosTypeList(this.chooseDgmType);
        // }
        // if(this.choosePos){
        //     this.selectPosition = this.choosePos;
        // }
        // else{
        //     this.selectPosition = {};
        // }
        // this.selectMachineId = this.chooseMacId;
        // this.selectPositionId = this.choosePosTypeId;
        // this.selectPositionName = this.choosePosName; 


        this.$store.commit("setTreeData", this.chooseTree); //组织信息赋值给vuex

        this.setMacData(); // this.setPosData();     
      }
    },
    //递归组织
    getFolderList: function getFolderList(list) {
      var _this2 = this;

      if (list && list.length) {
        list.forEach(function (item) {
          item.id = item.t_id;
          item.label = item.t_name;
          item.status = false;

          if (item.children) {
            _this2.getFolderList(item.children);
          }
        });
      }

      return list;
    },
    //获取机组信息
    setMacData: function setMacData() {
      var _this3 = this;

      var params = null;
      this.chooseMacList = [];
      this.chooseMacId = null;
      this.selectMachine = {};
      this.chooseMacName = '';
      this.chooseDgmList = [];
      this.chooseDgmId = null;
      this.chooseDgmType = null;
      this.choosePosType = null;
      params = {
        t_id: this.chooseTid
      };
      this.$axios.post('getMachine', params).then(function (res) {
        if (res.msg === 0 && res.list && res.list.length) {
          _this3.chooseMacList = res.list;
          _this3.chooseMacId = _this3.chooseMacList[0].mac_id; // this.selectMachine = this.chooseMacList[0];
          // this.chooseMacName = this.chooseMacList[0].mac_me;
          // this.chooseDgmList = this.chooseMacList[0].dgms_list;

          var linkInfo = _this3.$store.state.macData;

          if (!$.isEmptyObject(linkInfo)) {
            _this3.chooseMacId = linkInfo.mac_id; //所选的机组id
          }

          _this3.chooseMacList.forEach(function (mac) {
            if (mac.mac_id == _this3.chooseMacId) {
              _this3.selectMachine = mac;
              _this3.chooseMacName = mac.mac_me;
              _this3.chooseDgmList = mac.dgms_list;
            }
          });

          if (_this3.chooseDgmList && _this3.chooseDgmList.length) {
            _this3.chooseDgmId = _this3.chooseDgmList[0].dgm_id;
            _this3.chooseDgmType = _this3.chooseDgmList[0].dgm_type;
            _this3.choosePosType = -1;

            _this3.getPosTypeList(_this3.chooseDgmType);
          } else {
            _this3.noLogData = true;
          }

          _this3.selectMachineId = _this3.chooseMacId;

          _this3.$store.commit("setMacData", _this3.selectMachine); //机组信息赋值给vuex


          _this3.setPosData();
        } else {
          _this3.hasData = false;
          _this3.noLogData = true;
          console.log('请求失败');
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    //获取测点信息
    setPosData: function setPosData() {
      var _this4 = this;

      var params = null;
      this.choosePosList = [];
      this.choosePos = {};
      this.choosePosTypeId = null;
      this.choosePosName = '';
      params = {
        mac_id: this.chooseMacId
      };
      this.$axios.post('getPosition', params).then(function (res) {
        if (res.msg === 0 && res.list && res.list.length) {
          _this4.choosePosList = res.list; // this.choosePos = this.choosePosList[0];

          _this4.choosePosTypeId = _this4.choosePosList[0].pos_type + '_' + _this4.choosePosList[0].pos_id + '_' + _this4.chooseMacId;
          _this4.choosePosName = _this4.choosePosList[0].pos_name; //所选的测点名

          var linkInfo = _this4.$store.state.posData;

          if (!$.isEmptyObject(linkInfo)) {
            _this4.choosePosTypeId = linkInfo.pos_type + '_' + linkInfo.pos_id + '_' + linkInfo.mac_id;
            ;
            _this4.choosePosName = linkInfo.pos_name;
          }

          var posType = _this4.choosePosTypeId.split('_')[0];

          var posId = _this4.choosePosTypeId.split('_')[1];

          var macId = _this4.choosePosTypeId.split('_')[2];

          _this4.choosePosList.forEach(function (item) {
            if (item.pos_type == posType && item.pos_id == posId && item.mac_id == macId) {
              _this4.choosePos = item;
              _this4.chooseTtPosLoc = item.tt_pos_loc;
            }
          });

          _this4.selectPosition = _this4.choosePos;
          _this4.selectPositionId = _this4.choosePosTypeId;
          _this4.selectPositionName = _this4.choosePosName;

          _this4.$store.commit("setPosData", _this4.choosePos); //测点信息赋值给vuex

        } else {
          _this4.hasData = false;
          console.log('请求失败');
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    //改变组织
    currDeptChange: function currDeptChange(node, instanceId) {
      this.chooseTid = node.id;
      this.chooseTroot = node.t_root;
      this.chooseMacList = node.mac_list;
      this.chooseTname = node.t_name;
      this.chooseTree = node;
      this.$store.commit("setTreeData", this.chooseTree); //组织信息赋值给vuex

      this.chooseMacId = null;
      this.chooseDgmId = null;
      this.chooseDgmType = null;
      this.chooseMac = {};
      this.selectPosition = {};
      this.choosePosName = '';
      this.choosePosTypeId = null;
      this.choosePos = {};
      this.choosePosType = null;
      this.chooseDgmList = [];
      this.posListType = [];
      this.currentPage = 1;

      if (this.chooseMacList && this.chooseMacList.length > 0) {
        this.chooseMacId = this.chooseMacList[0].mac_id;
        this.chooseMacName = this.chooseMacList[0].mac_me;
        this.chooseMac = this.chooseMacList[0];
        this.chooseDgmList = this.chooseMacList[0].dgms_list;
        this.choosePosList = this.chooseMacList[0].positions_list;

        if (this.choosePosList && this.choosePosList.length > 0) {
          this.choosePos = this.choosePosList[0];
          this.selectPosition = this.choosePosList[0];
          this.choosePosTypeId = this.choosePosList[0].pos_type + '_' + this.choosePosList[0].pos_id + '_' + this.chooseMacId;
          this.choosePosName = this.choosePosList[0].pos_name;
          this.chooseTtPosLoc = this.choosePosList[0].tt_pos_loc;
          this.chooseDgmType = this.choosePosList[0].dgm_type;
        }
      } // if(this.chooseDgmList && this.chooseDgmList.length>0){
      //     this.chooseDgmType = this.chooseDgmList[0].dgm_type;
      //     this.chooseDgmId = this.chooseDgmList[0].dgm_id;
      //     this.choosePosType = -1;
      //     this.getPosTypeList(this.chooseDgmType);
      // }


      this.selectMachineId = this.chooseMacId;
      this.selectMachine = this.chooseMac;
      this.$store.commit("setMacData", {}); //机组信息赋值给vuex

      this.$store.commit("setPosData", {}); //测点信息赋值给vuex

      this.setMacData();
    },
    //改变机组选择
    currMacChange: function currMacChange(node) {
      this.chooseMacId = node.id;
      this.chooseMac = node;
      this.chooseMacName = node.mac_me;
      this.chooseDgmList = node.dgms_list; // this.selectPosition = {};
      // this.choosePosName = '';
      // this.choosePosTypeId = null;
      // this.choosePos = {};

      this.choosePosType = null;
      this.chooseDgmType = null;

      if (this.chooseDgmList && this.chooseDgmList.length > 0) {
        this.chooseDgmType = this.chooseDgmList[0].dgm_type;
        this.chooseDgmId = this.chooseDgmList[0].dgm_id;
        this.choosePosType = -1;
        this.getPosTypeList(this.chooseDgmType);
      } // this.choosePosList = node.positions_list;
      // if(this.choosePosList && this.choosePosList.length>0){
      //     this.choosePos = this.choosePosList[0];
      //     this.selectPosition = this.choosePosList[0];
      //     this.choosePosTypeId = this.choosePosList[0].pos_type + '_' + this.choosePosList[0].pos_id + '_' +  this.chooseMacId;
      //     this.choosePosName = this.choosePosList[0].pos_name;
      //     this.chooseTtPosLoc = this.choosePosList[0].tt_pos_loc;
      //     this.chooseDgmType = this.choosePosList[0].dgm_type;
      // }
      // this.selectPositionId = this.choosePosTypeId;
      // this.selectPositionName = this.choosePosName;
      // this.selectMachineId = this.chooseMacId;


      this.selectMachine = this.chooseMac;
      this.$store.commit("setMacData", this.selectMachine); //机组信息赋值给vuex

      this.$store.commit("setPosData", {}); //测点信息赋值给vuex

      this.setPosData();
    },
    //改变采集器id
    dgmChange: function dgmChange(node) {
      this.chooseDgmId = node.id;
    },
    //改变采集器类型
    currDgmChange: function currDgmChange(node) {
      this.chooseDgmType = node.id;
      this.choosePosType = -1;
      this.getPosTypeList(this.chooseDgmType);
      this.getPosDataState();
    },
    //改变测点类型
    currPosChange: function currPosChange(node) {
      this.choosePosType = node.id;

      if (this.choosePosType != -1) {
        this.posInfoList = [];

        for (var i = 0; i < this.oriPosInfoList.length; i++) {
          if (this.oriPosInfoList[i].pos_type == this.choosePosType) {
            this.posInfoList.push(this.oriPosInfoList[i]);
          }
        }
      } else {
        this.posInfoList = this.oriPosInfoList.concat();
      }
    },
    //改变测点
    dataPosChange: function dataPosChange(node) {
      this.choosePosTypeId = node.id;
      this.choosePos = node;
      this.choosePosName = node.pos_name;
      this.selectPositionId = this.choosePosTypeId;
      this.selectPositionName = this.choosePosName;
      this.selectPosition = node;
      this.$store.commit("setPosData", this.choosePos); //测点信息赋值给vuex
    },
    //获取不同采集器下测点类型列表
    getPosTypeList: function getPosTypeList(dgmType) {
      this.posListType = [];

      switch (parseInt(dgmType)) {
        case 0:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 1:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 2,
            label: '过程量测点'
          }, {
            id: 5,
            label: '数字量测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 2:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 7,
            label: '温度/过程量测点'
          }, {
            id: 5,
            label: '数字量测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 3:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 8,
            label: '振动阶次测点'
          }, {
            id: 9,
            label: '包络阶次测点'
          }, {
            id: 200,
            label: '长采样测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 7,
            label: '温度测点'
          }, {
            id: 2,
            label: '过程量测点'
          }, {
            id: 5,
            label: '数字量测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 4:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 5:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 14,
            label: '螺栓测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 6:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 2,
            label: '过程量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 7:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 8,
            label: '振动阶次测点'
          }, {
            id: 9,
            label: '包络阶次测点'
          }, {
            id: 7,
            label: '温度测点'
          }, {
            id: 15,
            label: '冲击测点'
          }, {
            id: 16,
            label: '冲击阶次测点'
          }, {
            id: 17,
            label: '轨道波磨测点'
          }, {
            id: 18,
            label: '脱轨监测测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 8:
          //whd
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 9:
          //dgu2000e
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 8,
            label: '振动阶次测点'
          }, {
            id: 9,
            label: '包络阶次测点'
          }, {
            id: 200,
            label: '长采样测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 2,
            label: '过程量测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        case 13:
          //YHC5000
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 8,
            label: '振动阶次测点'
          }, {
            id: 9,
            label: '包络阶次测点'
          }, {
            id: 200,
            label: '长采样测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 7,
            label: '温度测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;

        default:
          this.posListType = [{
            id: -1,
            label: '全部'
          }, {
            id: 1,
            label: '转速测点'
          }, {
            id: 3,
            label: '振动测点'
          }, {
            id: 4,
            label: '包络测点'
          }, {
            id: 8,
            label: '振动阶次测点'
          }, {
            id: 9,
            label: '包络阶次测点'
          }, {
            id: 200,
            label: '长采样测点'
          }, {
            id: 6,
            label: '晃度测点'
          }, {
            id: 11,
            label: '倾覆测点'
          }, {
            id: 12,
            label: '倾角测点'
          }, {
            id: 13,
            label: '合成倾角测点'
          }, {
            id: 7,
            label: '温度测点'
          }, {
            id: 2,
            label: '过程量测点'
          }, {
            id: 5,
            label: '数字量测点'
          }, {
            id: 10,
            label: '工艺量测点'
          }, {
            id: 201,
            label: '智子'
          }];
          break;
      }
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

      var pos_shock = []; //冲击测点

      var pos_shockOrder = []; //冲击阶次测点

      var pos_rail = []; //轨道波磨测点

      for (var m = 0, posLen = arr.length; m < posLen; m++) {
        switch (arr[m].pos_type) {
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

          case 15:
            pos_shock.push(arr[m]);
            break;

          case 16:
            pos_shockOrder.push(arr[m]);
            break;

          case 17:
            pos_rail.push(arr[m]);
            break;

          default:
            pos_speed.push(arr[m]);
            break;
        }
      } //长采样没有数据，将长采样测点去掉


      pos_speed = pos_speed.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name')); //根据测点名的assic码排序

      pos_vibrate = pos_vibrate.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_envelope = pos_envelope.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_vibrateOrder = pos_vibrateOrder.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_envelopeOrder = pos_envelopeOrder.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_slosh = pos_slosh.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_overturn = pos_overturn.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_inclinate = pos_inclinate.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_synthetic = pos_synthetic.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_temp = pos_temp.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_process = pos_process.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_digital = pos_digital.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_crafts = pos_crafts.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_bolt = pos_bolt.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_shock = pos_shock.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_shockOrder = pos_shockOrder.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      pos_rail = pos_rail.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
      sortArr = pos_speed.concat(pos_vibrate, pos_envelope, pos_vibrateOrder, pos_envelopeOrder, pos_slosh, pos_overturn, pos_inclinate, pos_synthetic, pos_temp, pos_process, pos_digital, pos_crafts, pos_bolt, pos_shock, pos_shockOrder, pos_rail);

      if (sortArr.length > 0) {
        /**没有振动取第一个测点**/
        if (pos_vibrate.length == 0) {
          that.selIndex = 0;
        } else {
          that.selIndex = pos_speed.length;
        }
      }

      return sortArr;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (head);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=13-4b7e38c5.js.map