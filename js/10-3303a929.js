(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/components/content/system/machine/table/js/mac_columns.js":
/*!***********************************************************************!*\
  !*** ./src/components/content/system/machine/table/js/mac_columns.js ***!
  \***********************************************************************/
/*! exports provided: setHeaders, setColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaders", function() { return setHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumns", function() { return setColumns; });
/* 表头部分
 */
//设置 列头(公共)
function setHeaders(type) {
  var header;

  if (type == 1) {
    //机组设置-风电
    header = ['机组名称', '所属组织', '生产厂商', '机组型号', '传动链名称', '是否有效', '机组类型', '塔筒高度（m）', '齿轮箱型号', '齿轮箱厂商', '发电机型号', '发电机厂商', '叶片型号', '叶片厂商', '塔筒型号', '塔筒厂商'];
  } else if (type == 5) {
    //机组设置-水泥
    header = ['机组名称', '所属组织', '生产厂商', '机组型号', '是否有效'];
  } else if (type == 9) {
    //机组设置-通用
    header = ['机组名称', '所属组织', '生产厂商', '机组型号', '是否有效'];
  } else if (type == 6) {
    //机组设置-走行部
    header = ['机组名称', '所属组织', '车厢数量', '选择线路', '是否有效'];
  } else if (type == 7) {
    //机组设置-油气井
    header = ['机组名称', '所属组织', '是否有效', // '变比',
    '传感器垂深', '下井时间', 'cos Ø', 'η', '额定功率' // '沉没度系数'
    ];
  } else if (type == 2) {
    header = ['组织名称', '机组名称', '采集器类型', '工况名称', '工况参考测点1', '下限', '上限', '工况参考测点2', '下限', '上限', '波形存储（个/天）', '长采样存储（个/天）'];
  } else if (type == 3) {
    //机泵设置
    header = ['所属组织', '机组名称', '机泵名称', '是否有效', '机泵类型', '传动链名称', '部件数目', '品牌', 'PN号', 'SN号', '功率', '额定转速', '转速比', '生产日期', '其它'];
  } else if (type == 8) {
    //车厢设置
    header = ['所属组织', '机组名称', '车厢名称', '是否有效', '车厢类型', '传动链名称', '轮径（mm）', '上行车头', '下行车头', '车厢序号'];
  } else if (type == 4) {
    header = ['线路名称'];
  } else if (type == 10) {
    //通用子级设置
    header = ['所属组织', '机组名称', '子级名称', '是否有效'];
  }

  return header;
}
/* 表数据部分
 */
//设置columns（公共）（组织名称、机组名称、测点名称、采集器名称、测点类型、通道名称、是否有效、是否报警）

function setColumns(type, data) {
  var columns;

  if (type == 1) {
    //基本设置-风电
    columns = [{
      data: 'machine.mac_me'
    }, {
      data: 'machine.t_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.t_name_sources;
      }
    }, {
      data: 'machine.baseInfo.manufacturer'
    }, {
      data: 'machine.baseInfo.model_number'
    }, {
      data: 'machine.baseInfo.driveChain_name'
    }, {
      data: 'machine.mac_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.mac_activity_sources;
      }
    }, {
      data: 'machine.baseInfo.mac_type_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.baseInfo.mac_type_sources;
      }
    }, {
      data: 'machine.baseInfo.tower_high'
    }, {
      data: 'machine.baseInfo.model_gear'
    }, {
      data: 'machine.baseInfo.made_gear'
    }, {
      data: 'machine.baseInfo.model_generator'
    }, {
      data: 'machine.baseInfo.made_generator'
    }, {
      data: 'machine.baseInfo.model_vane'
    }, {
      data: 'machine.baseInfo.made_vane'
    }, {
      data: 'machine.baseInfo.model_tower'
    }, {
      data: 'machine.baseInfo.made_tower'
    }];
  } else if (type == 5) {
    //基本设置-水泥
    columns = [{
      data: 'machine.mac_me'
    }, {
      data: 'machine.t_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.t_name_sources;
      }
    }, {
      data: 'machine.baseInfo.manufacturer'
    }, {
      data: 'machine.baseInfo.model_number'
    }, {
      data: 'machine.mac_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.mac_activity_sources;
      }
    }];
  } else if (type == 9) {
    //基本设置-通用
    columns = [{
      data: 'machine.mac_me'
    }, {
      data: 'machine.t_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.t_name_sources;
      }
    }, {
      data: 'machine.baseInfo.manufacturer'
    }, {
      data: 'machine.baseInfo.model_number'
    }, {
      data: 'machine.mac_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.mac_activity_sources;
      }
    }];
  } else if (type == 6) {
    //基本设置-走行部
    columns = [{
      data: 'machine.mac_me'
    }, {
      data: 'machine.t_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.t_name_sources;
      }
    }, {
      data: 'machine.baseInfo.car_num_val',
      //车厢数量
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.baseInfo.car_num_sources;
      }
    }, {
      data: 'machine.line_id_val',
      //选择线路
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.line_id_sources;
      }
    }, {
      data: 'machine.mac_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.mac_activity_sources;
      }
    }];
  } else if (type == 7) {
    //基本设置-油气井
    columns = [{
      data: 'machine.mac_me'
    }, {
      data: 'machine.t_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.t_name_sources;
      }
    }, {
      data: 'machine.mac_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].machine.mac_activity_sources;
      }
    }, // {
    //     data: 'machine.baseInfo.ratio',//变比
    // },
    {
      data: 'machine.baseInfo.dgmDepth' //传感器垂深

    }, {
      data: 'machine.baseInfo.downTime',
      //下井时间
      type: 'time',
      timeFormat: 'YYYY-MM-DD HH:mm:ss',
      correctFormat: true
    }, {
      data: 'machine.baseInfo.cosc' //cos Ø

    }, {
      data: 'machine.baseInfo.eta' //η

    }, {
      data: 'machine.baseInfo.ratedPower' //额定功率

    } // {
    //     data: 'machine.baseInfo.sinkData',//沉没度系数
    // },
    ];
  } else if (type == 2) {
    //工况设置
    columns = [{
      data: "condition.t_name"
    }, {
      data: "condition.mac_me"
    }, {
      data: "condition.dgm_name",
      readOnly: true
    }, {
      data: 'condition.condition_state',
      type: 'checkbox',
      checkedTemplate: '1',
      uncheckedTemplate: '0',
      label: {
        position: 'after',
        property: "condition.condition_name"
      }
    }, {
      data: "condition.pos_name1",
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].condition.pos_sources1;
      }
    }, {
      data: "condition.conditionL_1"
    }, {
      data: "condition.conditionH_1"
    }, {
      data: "condition.pos_name2",
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].condition.pos_sources2;
      }
    }, {
      data: "condition.conditionL_2"
    }, {
      data: "condition.conditionH_2"
    }, {
      data: "condition.wavenum",
      type: 'numeric'
    }, {
      data: "condition.capturenum_val",
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].condition.capturenumSource;
      }
    }];
  } else if (type == 3) {
    columns = [{
      data: 'pump.folder_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.folder_sources;
      }
    }, {
      data: 'pump.machine_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.macName_sources;
      }
    }, {
      data: 'pump.pump_name'
    }, {
      data: 'pump.pump_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.pump_activity_sources;
      }
    }, {
      data: 'pump.pump_type_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.pump_type_sources;
      }
    }, {
      data: 'pump.driveChain_name'
    }, {
      data: 'pump.itemCount',
      readOnly: true
    }, //部件数目
    {
      data: 'pump.baseInfo.brand'
    }, {
      data: 'pump.baseInfo.pn'
    }, {
      data: 'pump.baseInfo.sn'
    }, {
      data: 'pump.baseInfo.power'
    }, {
      data: 'pump.baseInfo.rated_speed'
    }, {
      data: 'pump.baseInfo.speed_rate'
    }, {
      data: 'pump.baseInfo.mf_date'
    }, {
      data: 'pump.baseInfo.other'
    }];
  } else if (type == 10) {
    //通用子级设置
    columns = [{
      data: 'pump.folder_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.folder_sources;
      }
    }, {
      data: 'pump.machine_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.macName_sources;
      }
    }, {
      data: 'pump.pump_name'
    }, {
      data: 'pump.pump_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.pump_activity_sources;
      }
    }];
  } else if (type == 8) {
    columns = [{
      data: 'pump.folder_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.folder_sources;
      }
    }, {
      data: 'pump.machine_name',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.macName_sources;
      }
    }, {
      data: 'pump.pump_name'
    }, {
      data: 'pump.pump_activity_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.pump_activity_sources;
      }
    }, {
      data: 'pump.pump_type_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.pump_type_sources;
      }
    }, {
      data: 'pump.driveChain_name'
    }, {
      data: 'pump.baseInfo.car_wheel_d',
      type: 'numeric'
    }, {
      data: 'pump.baseInfo.if_head_val',
      //上行车头
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.baseInfo.if_head_sources;
      }
    }, {
      data: 'pump.baseInfo.if_end_val',
      //下行车头
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].pump.baseInfo.if_end_sources;
      }
    }, {
      data: 'pump.baseInfo.car_id'
    }];
  } else if (type == 4) {
    columns = [{
      data: 'tms.line_name'
    }];
  }

  return columns;
}

/***/ }),

/***/ "./src/components/content/system/machine/table/js/mac_hdtable.js":
/*!***********************************************************************!*\
  !*** ./src/components/content/system/machine/table/js/mac_hdtable.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return machdtable; });
/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
/* harmony import */ var common_hdtable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/hdtable.js */ "./src/common/hdtable.js");
/* harmony import */ var _mac_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mac_info.js */ "./src/components/content/system/machine/table/js/mac_info.js");
/* harmony import */ var _mac_columns_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mac_columns.js */ "./src/components/content/system/machine/table/js/mac_columns.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _mac_methods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mac_methods.js */ "./src/components/content/system/machine/table/js/mac_methods.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var deleteArray = []; //删除的信息数组

var colWidth = '';
function machdtable(el, property) {
  var data = property.getData();
  var type = Number(property.type);
  var fixNum;

  if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(type)) {
    fixNum = 2;
  } else {
    fixNum = 3;
  }

  ; //创建表格属性的实例

  var tableDataIns = new tableData(property); // 组装振动表格数据

  var vibTable = {
    // 表格右键菜单
    contextMenu: tableDataIns.contextMenu(),
    // 表格显示的数据
    data: data,
    fixedColumnsLeft: fixNum,
    //表格的列
    colHeaders: tableDataIns.colHeaders(),
    //数据渲染renderData
    columns: tableDataIns.columns(),
    //单元格属性设置
    cells: tableDataIns.cells(),
    //单击单元格或行/列标题后触发。如果单击行/列标题，则坐标索引为负。
    afterOnCellMouseUp: tableDataIns.afterOnCellMouseUp(),
    //过滤之后
    afterFilter: tableDataIns.afterFilter(),
    //新建行
    afterCreateRow: tableDataIns.afterCreateRow(),
    beforeChange: tableDataIns.beforeChange(),
    afterChange: tableDataIns.afterChange(),
    //移除行事件
    beforeRemoveRow: tableDataIns.beforeRemoveRow(),
    afterRemoveRow: tableDataIns.afterRemoveRow(),
    // 横向滚动之后
    afterScrollHorizontally: tableDataIns.afterScrollHorizontally(),
    //列宽改变
    afterColumnResize: tableDataIns.afterColumnResize(),
    //验证结束
    afterValidate: tableDataIns.afterValidate()
  };
  /**列宽设置**/
  //默认情况下自适应

  if (data.length === 0) {
    //如果表格没有数据，设置默认宽度，以免表头挤在一起
    vibTable.colWidths = '170';
  } else if (data.length && colWidth !== '') {
    //如果有数据，且拖动表格列宽的情况下，保存为拖动后的列宽
    vibTable.colWidths = colWidth;
  }

  return Object(common_hdtable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el, vibTable);
} //表格的方法

var tableData = /*#__PURE__*/function () {
  function tableData(property) {
    _classCallCheck(this, tableData);

    this.type = property.type;
    this.tids = property.tids;
    this.getData = property.getData;
    this.getHot = property.getHot;
    this.initList = property.initList;
    this.changeList = property.changeList;
    this.router = property.router;
    this.store = property.store;
  }

  _createClass(tableData, [{
    key: "contextMenu",
    value: function contextMenu() {
      var that = this;
      var userType = parseInt(sessionStorage.getItem('userType'));

      if (that.type == 2) {
        return {
          items: {
            'freeze_column': {
              name: '固定列'
            },
            "unfreeze_column": {
              name: '取消列固定'
            }
          }
        };
      } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(that.type))) {
        return {
          items: {
            "row_above": {
              name: "插入新行"
            },
            "remove_row": {
              name: '删除这行',
              callback: function callback(key, options) {
                swal({
                  title: "警告",
                  text: "一但删除，该机组数据将不保留！！！确定删除吗？",
                  buttons: {
                    sure: "确认",
                    cancel: "取消"
                  },
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    options.forEach(function (option) {
                      var index = option.start.row;
                      var amount = parseInt(option.end.row - option.start.row) + 1;
                      that.getHot().alter("remove_row", index, amount);
                    });
                  } else {
                    return false;
                  }
                });
              }
            },
            'freeze_column': {
              name: '固定列'
            },
            "unfreeze_column": {
              name: '取消列固定'
            }
          }
        };
      } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(that.type))) {
        return {
          items: {
            "row_above": {
              name: "插入新行"
            },
            "remove_row": {
              name: '删除这行',
              callback: function callback(key, options) {
                swal({
                  title: "警告",
                  text: "当前机组一经删除，该数据也将不保留。确定删除吗？",
                  buttons: {
                    sure: "确认",
                    cancel: "取消"
                  },
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    options.forEach(function (option) {
                      var index = option.start.row;
                      var amount = parseInt(option.end.row - option.start.row) + 1;
                      that.getHot().alter("remove_row", index, amount);
                    });
                  } else {
                    return false;
                  }
                });
              }
            },
            'freeze_column': {
              name: '固定列'
            },
            "unfreeze_column": {
              name: '取消列固定'
            }
          }
        };
      } else if (that.type == 4) {
        return {
          items: {
            "row_above": {
              name: "插入新行"
            },
            "remove_row": {
              name: '删除这行',
              callback: function callback(key, options) {
                swal({
                  title: "警告",
                  text: "当前机组一经删除，该数据也将不保留。确定删除吗？",
                  buttons: {
                    sure: "确认",
                    cancel: "取消"
                  },
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    options.forEach(function (option) {
                      var index = option.start.row;
                      var amount = parseInt(option.end.row - option.start.row) + 1;
                      that.getHot().alter("remove_row", index, amount);
                    });
                  } else {
                    return false;
                  }
                });
              }
            },
            'freeze_column': {
              name: '固定列'
            },
            "unfreeze_column": {
              name: '取消列固定'
            }
          }
        };
      }
    }
    /* 表格的数据渲染 */

  }, {
    key: "colHeaders",
    value: function colHeaders() {
      return Object(_mac_columns_js__WEBPACK_IMPORTED_MODULE_3__["setHeaders"])(this.type);
    }
  }, {
    key: "columns",
    value: function columns() {
      return Object(_mac_columns_js__WEBPACK_IMPORTED_MODULE_3__["setColumns"])(this.type, this.getData());
    }
    /* 表格的方法渲染 */
    //振动的单元格渲染

  }, {
    key: "cells",
    value: function cells() {
      var that = this;
      return function (row, col, prop) {
        var data = that.getData();
        var selectProps = ['machine.t_name', 'machine.mac_activity_val', 'machine.baseInfo.mac_type_val', 'machine.baseInfo.car_num_val', 'machine.line_id_val', "condition.pos_name1", "condition.pos_name2", "condition.capturenum_val", 'pump.folder_name', 'pump.machine_name', 'pump.pump_activity_val', 'pump.pump_type_val', 'pump.pump_type_val', 'pump.baseInfo.if_head_val', 'pump.baseInfo.if_end_val'];
        if (data.length == 0) return;
        var type = that.type;
        var cellProperties = this;

        if (type == 2) {
          if (col == 0 || col == 1) {
            cellProperties.readOnly = true;
          } //其他工况的状态和上下限不可编辑


          if (row != -1 && Number(row + 1) % 5 === 0 && (prop == 'condition.condition_state' || prop == 'condition.conditionL_1' || prop == 'condition.conditionH_1' || prop == 'condition.conditionL_2' || prop == 'condition.conditionH_2')) {
            cellProperties.readOnly = true;
          } //v1采集器只有一个参考测点可编辑，另一个禁止编辑


          if (row != -1 && data[row].condition.dgm_type == 1 && (prop == 'condition.conditionL_2' || prop == 'condition.conditionH_2' || prop == 'condition.pos_name2' || prop == 'condition.capturenum_val')) {
            cellProperties.readOnly = true;
          }
        }

        if (type == 3) {
          if (col == 0 || col == 1 || Number(data[row].pump.item) === 0 && prop == 'pump.driveChain_name') {
            cellProperties.readOnly = true;
          }

          if (prop == 'pump.baseInfo.brand' || prop == 'pump.baseInfo.pn' || prop == 'pump.baseInfo.sn' || prop == 'pump.baseInfo.power' || prop == 'pump.baseInfo.rated_speed' || prop == 'pump.baseInfo.speed_rate' || prop == 'pump.baseInfo.mf_date' || prop == 'pump.baseInfo.other') {
            if (data[row].pump.t_root == 2) {
              //走行部参数不可设
              cellProperties.readOnly = true;
            } else if (data[row].pump.t_root == 1) {
              //水泥可设
              cellProperties.readOnly = false;
            }
          }

          if (prop == 'pump.baseInfo.car_id') {
            if (data[row].pump.t_root == 2) {
              //走行部参数不可设
              cellProperties.readOnly = false;
            } else if (data[row].pump.t_root == 1) {
              //水泥可设
              cellProperties.readOnly = true;
            }
          }

          if (row != -1 && data[row].pump.operate == 1 && (col == 0 || col == 1)) {
            cellProperties.readOnly = false;
          }
        }

        if (type == 4) {
          if (row != -1 && data[row].tms.operate == 1 && (col == 0 || col == 1)) {
            cellProperties.readOnly = false;
          }
        }

        if (type == 8) {
          /*车厢建好之后不可更改组织*/
          if (row != -1 && data[row].pump.operate == 0 && (col == 0 || col == 1)) {
            cellProperties.readOnly = true;
          }
        }

        if (selectProps.includes(prop)) {
          cellProperties.editor = 'select';
        }

        return cellProperties;
      };
    } //点击单元格之后输出该行信息（共用）

  }, {
    key: "afterOnCellMouseUp",
    value: function afterOnCellMouseUp() {
      var that = this;
      return function (e, coords, td) {
        if (coords.row >= 0) {
          var row_info = that.getPositionByIndex(coords.row, that.type);
          var t_root = row_info.t_root;
          var folderType = that.type;
          var linkObj = [];

          if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(folderType))) {
            linkObj = [row_info.t_id, row_info.t_name, folderType];
          } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(folderType))) {
            linkObj = [row_info.folder_id, row_info.folder_name, folderType];
          } else if (folderType === 4) {
            linkObj = [row_info.line_id, row_info.line_name, folderType];
          }

          that.store.commit('setTreeMac', linkObj);
        }
      };
    } // 过滤的方法(有待优化)（共用）

  }, {
    key: "afterFilter",
    value: function afterFilter() {
      var that = this;
      return function (condition) {
        var hot = that.getHot();

        if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(parseInt(that.type))) {
          sessionStorage.setItem('filter_type1', JSON.stringify(condition));
        } else if (parseInt(that.type) === 2) {
          sessionStorage.setItem('filter_type2', JSON.stringify(condition));
        } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(parseInt(that.type))) {
          sessionStorage.setItem('filter_type3', JSON.stringify(condition));
        }

        hot.view.wt.wtOverlays.adjustElementsSize(true);
      };
    } // 列宽被改变后

  }, {
    key: "afterColumnResize",
    value: function afterColumnResize() {
      var that = this;
      return function (condition) {
        var hot = that.getHot();
        colWidth = hot.getColWidth(condition); //修改拖动后的列宽
      };
    } //创建测点之后的方法(共用)

  }, {
    key: "afterCreateRow",
    value: function afterCreateRow() {
      var that = this;
      return function (index, amount, source) {
        //添加行事件
        var data = that.getData();
        var hot = that.getHot();
        var changeData = that.changeList.changeData;
        var addData = that.changeList.addData;
        var physicalRow = hot.toPhysicalRow(index);

        if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(that.type))) {
          var machine = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["createMac"])(that.type, that.initList.folderData, data.length);
          changeData[machine.mac_id] = machine;
          data[physicalRow].machine = machine;
        } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(that.type))) {
          var pump = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["createPump"])(that.type, that.initList.pumpFolderData, that.initList.pump_macNameList, that.initList.pump_macIdList, that.initList, data.length);
          data[physicalRow].pump = pump;
          var sendPump = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["changePump"])(that.type, pump, index);
          addData[sendPump.pump.pump_id] = sendPump;
        } else if (that.type == 4) {
          var tms = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["createTms"])(that.type, data.length);
          data[physicalRow].tms = tms;
          changeData[tms.index] = tms;
        }
      };
    } //删除测点之前的方法,将要删除的方法存到deleteVData（共用）

  }, {
    key: "beforeRemoveRow",
    value: function beforeRemoveRow() {
      var that = this;
      return function (index, amount) {
        var deleteData = that.changeList.deleteData;
        deleteArray = [];

        if (index != null) {
          for (var i = 0; i < amount; i++) {
            if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(that.type))) {
              var machine = that.getPositionByIndex(index + i, 1);

              if (machine.flag === 1) {
                swal({
                  title: "提示",
                  text: "该机组绑定了采集器，不可删除！",
                  button: "确认"
                });
                return false;
              } else {
                deleteData.push(machine.mac_id);
                deleteArray.push(machine);
              }
            } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(that.type))) {
              var pump = that.getPositionByIndex(index + i, 3);
              var obj = {};
              obj.mac_id = pump.mac_id;
              obj.pump_id = pump.pump_id;
              deleteData.push(obj);
              deleteArray.push(pump);
            } else if (that.type == 4) {
              var tms = that.getPositionByIndex(index + i, 4);
              var _obj = {};
              _obj.index = tms.index;
              _obj.line_id = tms.line_id;
              _obj.line_name = tms.line_name;
              deleteData.push(_obj);
              deleteArray.push(tms);
            }
          }
        }
      };
    } //删除测点方法 发送请求（共用）

  }, {
    key: "afterRemoveRow",
    value: function afterRemoveRow() {
      var that = this;
      return function () {
        var deleteData = that.changeList.deleteData;
        /*let macType = [1,5,6,7];
        let pumpType = [3,8];*/

        if (deleteData.length > 0 && _mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(that.type))) {
          network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].deleteMachine(deleteData, that.tids).then(function (res) {
            if (res.msg == 0) {
              swal({
                title: "提示",
                text: "删除机组成功",
                button: "确认"
              }).then(function (value) {
                // that.router.go(0)
                that.remove_remake();
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

        if (deleteData.length > 0 && _mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(that.type))) {
          network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].deletePumps(deleteData).then(function (res) {
            if (res.msg == 0) {
              swal({
                title: "提示",
                text: "删除子集成功",
                button: "确认"
              }).then(function (value) {
                that.remove_remake();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
            }
          });
        }

        if (deleteData.length > 0 && that.type === 4) {
          network_getApi__WEBPACK_IMPORTED_MODULE_0__["default"].deleteLines(deleteData).then(function (res) {
            if (res.msg == 0) {
              swal({
                title: "提示",
                text: "删除线路成功",
                button: "确认"
              }).then(function (value) {
                that.remove_remake();
              });
            } else if (res.msg == 1) {
              console.log('参数为空！');
            } else if (res.msg == 2) {
              console.log('后台运行错误！');
            }
          });
        }
      };
    } //改变数据的时候拼装数据结构（共用）

  }, {
    key: "beforeChange",
    value: function beforeChange() {
      var that = this;
      return function (changes, source) {
        var change_index;
        var change_prop;
        var change_oldVal;
        var change_newVal;
        var flag;
        var hot = that.getHot();
        var data = that.getData(); //创建更改组织、机组、采集器、通道、任务的联动实例

        for (var i = 0; i < changes.length; i++) {
          var physicalRow = hot.toPhysicalRow(changes[i][0]);
          var columnVal = hot.propToCol(changes[i][1]);
          change_index = changes[i][0];
          change_prop = changes[i][1];
          change_oldVal = changes[i][2];
          change_newVal = changes[i][3];

          if (change_oldVal == change_newVal) {
            continue;
          }

          var modVals = Number(change_index + 1) % 5;
          var cellInfo = that.getPositionByIndex(change_index, that.type); //机组

          if (change_prop == "machine.baseInfo.driveChain_name") {
            //机组传动链名称不能为空
            if (change_newVal == '' || change_newVal === null) {
              swal({
                title: "提示",
                text: "\u4F20\u52A8\u94FE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return false;
            }
          }

          if (change_prop == "machine.t_name") {
            //修改组织
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.t_name_sources, cellInfo.t_name_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              if (cellInfo.operate !== 1 && cellInfo.t_root != flag.split('_')[1]) {
                //不是新建的修改组织时需要判断是不是同一组织类型
                swal({
                  title: "提示",
                  text: "\u8BF7\u9009\u62E9\u540C\u4E00\u7EC4\u7EC7\u7C7B\u578B\u7684\u7EC4\u7EC7",
                  button: "确认"
                });
                return false;
              }

              cellInfo.t_id = flag.split('_')[0];
              cellInfo.t_root = flag.split('_')[1];

              if (cellInfo.t_root == 1 || cellInfo.t_root == 2) {
                //水泥，走行部的机组类型塔筒高度置空
                cellInfo.baseInfo.mac_type_val = "";
                cellInfo.baseInfo.mac_type = "";
                cellInfo.baseInfo.tower_high = "";
              } else if (cellInfo.t_root == 0) {
                cellInfo.baseInfo.mac_type_val = "双馈";
                cellInfo.baseInfo.mac_type = "0";
                cellInfo.baseInfo.tower_high = "65";
              }
            }
          }

          if (change_prop == "machine.baseInfo.car_num_val") {
            //修改车厢数量
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.baseInfo.car_num_sources, cellInfo.baseInfo.car_num_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.baseInfo.car_num = flag;
            }
          }

          if (change_prop == "machine.line_id_val") {
            //修改线路选择
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.line_id_sources, cellInfo.line_id_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.line_id = flag;
            }
          }

          if (change_prop == "machine.mac_activity_val") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.mac_activity_sources, cellInfo.mac_activity_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.mac_activity = flag;
            }
          }

          if (change_prop == "machine.baseInfo.mac_type_val") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.baseInfo.mac_type_sources, cellInfo.baseInfo.mac_type_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.baseInfo.mac_type = flag;
            }
          } //机泵


          if (change_prop == "pump.folder_name") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.folder_sources, cellInfo.folder_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.folder_id = flag.split('_')[0];
              cellInfo.t_root = flag.split('_')[1]; // cellInfo.pump_type_val = '运行泵';
              // cellInfo.pump_type = '1';

              cellInfo.baseInfo.rated_speed = 1;
              var t_id = cellInfo.folder_id + '_' + cellInfo.t_root;
              that.update_t_name(cellInfo, change_newVal, t_id);
              var pump_type_source = PUMP_TYPE_SOURCE;

              if (cellInfo.t_root == 2) {
                cellInfo.baseInfo.rated_speed = '';
                pump_type_source = {
                  '1': 'TC',
                  '2': 'T',
                  '3': 'MP',
                  '4': 'M',
                  '5': 'MCP',
                  '6': 'MC'
                };
              } else if (cellInfo.t_root == 1) {
                pump_type_source = PUMP_TYPE_SOURCE;
              }

              cellInfo.pump_type = Object.keys(pump_type_source)[0];
              cellInfo.pump_type_val = Object.values(pump_type_source)[0]; //水泥：机泵类型 1=运行泵 2=备用泵；走行部：车厢类型  '1':'TC','2':'T','3':'MP','4':'M','5':'MCP','6':'MC_1','7':'MC_2'

              cellInfo.pump_type_sources = Object.values(pump_type_source);
              cellInfo.pump_type_sources_key = Object.keys(pump_type_source);
            }
          }

          if (change_prop == "pump.machine_name") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.macName_sources, cellInfo.macName_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.machine_id = flag;
              cellInfo.mac_id = flag;
              cellInfo.car_num = that.initList.carData[flag];
            }
          }

          if (change_prop == "pump.pump_type_val") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.pump_type_sources, cellInfo.pump_type_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.pump_type = flag;
            }
          }

          if (change_prop == "pump.pump_activity_val") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.pump_activity_sources, cellInfo.pump_activity_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.pump_activity = flag;
            }
          }

          if (change_prop == "pump.driveChain_name") {
            //机组传动链名称不能为空
            if (change_newVal == '' || change_newVal === null) {
              swal({
                title: "提示",
                text: "\u4F20\u52A8\u94FE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
                button: "确认"
              });
              return false;
            }
          }

          if (change_prop == "pump.baseInfo.if_head_val") {
            //是否上下行车头
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.baseInfo.if_head_sources, cellInfo.baseInfo.if_head_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.baseInfo.if_head = flag;
            }
          }

          if (change_prop == "pump.baseInfo.if_end_val") {
            //是否上下行车头
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.baseInfo.if_end_sources, cellInfo.baseInfo.if_end_sources_key, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.baseInfo.if_end = flag;
            }
          } //车厢


          var regNum = new RegExp("^([0-9])+(\\.[0-9]+)?$"); //非负数字

          if (change_prop == 'pump.baseInfo.car_wheel_d') {
            var val = Number(change_newVal);

            if (!regNum.test(val)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u975E\u8D1F\u6570\u5B57"),
                button: "确认"
              });
              return false;
            }
          } //工况


          if (change_prop == "condition.pos_name1") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.condition.pos_sources1, cellInfo.condition.pos_sources_key1, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              if (change_newVal != "无" && change_newVal == cellInfo.condition.pos_name2) {
                swal({
                  title: "提示",
                  text: "\u53C2\u8003\u6D4B\u70B9\u91CD\u590D",
                  button: "确认"
                });
                return false;
              } else {
                var changeConditionList = [];

                for (var _i = 0; _i < data.length; _i++) {
                  if (parseInt(_i / 5) == parseInt(physicalRow / 5)) {
                    changeConditionList.push(data[_i]);
                  }
                }

                changeConditionList.forEach(function (item) {
                  item.condition.pos_id1 = flag.split('_')[0];
                  item.condition.pos_type1 = flag.split('_')[1];
                  item.condition.pos_name1 = change_newVal;
                });
              }
            }
          }

          if (change_prop == "condition.pos_name2") {
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.condition.pos_sources2, cellInfo.condition.pos_sources_key2, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              if (change_newVal != "无" && change_newVal == cellInfo.condition.pos_name1) {
                swal({
                  title: "提示",
                  text: "\u53C2\u8003\u6D4B\u70B9\u91CD\u590D",
                  button: "确认"
                });
                return false;
              } else {
                var _changeConditionList = [];

                for (var _i2 = 0; _i2 < data.length; _i2++) {
                  if (parseInt(_i2 / 5) == parseInt(physicalRow / 5)) {
                    _changeConditionList.push(data[_i2]);
                  }
                }

                _changeConditionList.forEach(function (item) {
                  item.condition.pos_id2 = flag.split('_')[0];
                  item.condition.pos_type2 = flag.split('_')[1];
                  item.condition.pos_name2 = change_newVal;
                });
              }
            }
          }

          if (change_prop == "condition.capturenum_val") {
            //长采样存储
            flag = Object(utils_utils__WEBPACK_IMPORTED_MODULE_4__["setChangeCellResult"])(cellInfo.condition.capturenumSource, cellInfo.condition.capturenumSourceKey, change_newVal, change_index);

            if (flag === false) {
              return false;
            } else {
              cellInfo.condition.capturenum = Number(flag);
            }
          }

          if (change_prop == "condition.wavenum") {
            //波形存储
            var re = /^[0-9]+$/; //判断字符串是否为正整数（包括0）

            if (!re.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u8BF7\u8F93\u5165\u6574\u6570",
                button: "确认"
              });
              return false;
            }

            var newNum = parseInt(change_newVal);

            if (newNum > 300 || newNum < 0) {
              swal({
                title: "提示",
                text: '请输入0~300的整数',
                button: "确认"
              });
              return false;
            } else {
              change_newVal = newNum;
              cellInfo.condition.wavenum = newNum;
            }
          } //参考测点1的下限


          if (change_prop == "condition.conditionL_1") {
            var re = /^[0-9]+.?[0-9]*/; //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/

            if (!re.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u8BF7\u8F93\u5165\u6570\u5B57",
                button: "确认"
              });
              return false;
            }

            if (cellInfo.condition.dgm_type == 1 && modVals != 1) {
              if (change_index !== 0) {
                var lastCellInfo = that.getPositionByIndex(Number(change_index - 1), that.type);

                if (Number(change_newVal) <= lastCellInfo.condition.conditionL_1 || Number(change_newVal) >= cellInfo.condition.conditionH_1) {
                  swal({
                    title: "提示",
                    text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                    button: "确认"
                  });
                  return false;
                }

                lastCellInfo.condition.conditionH_1 = change_newVal;
              }
            } else if (cellInfo.condition.dgm_type != 1) {
              if (Number(change_newVal) >= cellInfo.condition.conditionH_1) {
                swal({
                  title: "提示",
                  text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                  button: "确认"
                });
                return false;
              }
            }
          } //参考测点2的下限


          if (change_prop == "condition.conditionL_2") {
            var re = /^[0-9]+.?[0-9]*/; //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/

            if (!re.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u8BF7\u8F93\u5165\u6570\u5B57",
                button: "确认"
              });
              return false;
            }

            if (cellInfo.condition.dgm_type != 1) {
              if (Number(change_newVal) >= cellInfo.condition.conditionH_2) {
                swal({
                  title: "提示",
                  text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                  button: "确认"
                });
                return false;
              }
            }
          } //参考测点1的上限


          if (change_prop == "condition.conditionH_1") {
            var re = /^[0-9]+.?[0-9]*/; //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/

            if (!re.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u8BF7\u8F93\u5165\u6570\u5B57",
                button: "确认"
              });
              return false;
            }

            if (cellInfo.condition.dgm_type == 1 && modVals != 4) {
              var nextCellInfo = that.getPositionByIndex(Number(change_index + 1), that.type);

              if (Number(change_newVal) >= nextCellInfo.condition.conditionH_1 || Number(change_newVal) <= cellInfo.condition.conditionL_1) {
                swal({
                  title: "提示",
                  text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                  button: "确认"
                });
                return false;
              }

              nextCellInfo.condition.conditionL_1 = change_newVal;
            } else if (cellInfo.condition.dgm_type != 1) {
              if (Number(change_newVal) <= cellInfo.condition.conditionL_1) {
                swal({
                  title: "提示",
                  text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                  button: "确认"
                });
                return false;
              }
            }
          } //参考测点2的上限


          if (change_prop == "condition.conditionH_2") {
            var re = /^[0-9]+.?[0-9]*/; //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/

            if (!re.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u8BF7\u8F93\u5165\u6570\u5B57",
                button: "确认"
              });
              return false;
            }

            if (cellInfo.condition.dgm_type != 1) {
              if (Number(change_newVal) <= cellInfo.condition.conditionL_2) {
                swal({
                  title: "提示",
                  text: "\u4E0B\u9650\u5E94\u5C0F\u4E8E\u4E0A\u9650",
                  button: "确认"
                });
                return false;
              }
            }
          }

          hot.setCellMeta(physicalRow, columnVal, 'className', 'red-color');
        }
      };
    } //改变数据后的方法 （共用）

  }, {
    key: "afterChange",
    value: function afterChange() {
      var that = this;
      return function (changes, source) {
        //修改数据事件
        var changeData = that.changeList.changeData;
        var changeConData = that.changeList.changeConData;
        var addData = that.changeList.addData;

        if (changes) {
          changes.forEach(function (change) {
            var hot = that.getHot();
            var physicalRow = hot.toPhysicalRow(change[0]);

            if (change[2] != change[3]) {
              if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(that.type))) {
                var machine = that.getPositionByIndex(change[0], 1);
                var sendMac = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["changeMac"])(that.type, machine, change[0]);
                changeData[sendMac.mac_id] = sendMac;
              }

              if (that.type == 2) {
                var condition = that.getPositionByIndex(change[0], 2);

                if (change[1] == "condition.wavenum") {
                  var newNum = parseInt(change[3]);

                  if (newNum > 300 || newNum < 0) {
                    swal({
                      title: "提示",
                      text: '请输入0~300的整数',
                      button: "确认"
                    });
                    return false;
                  } else {
                    change[3] = newNum;
                    condition.condition.wavenum = newNum;
                  }
                }

                var changeMachineId = condition.condition.mac_id;
                var changeMacMe = condition.condition.mac_me;
                var data = that.getData();
                var changeConditionList = [];
                var dataObj = {};
                var conditionObj = {};
                dataObj.mac_id = changeMachineId;
                dataObj.mac_me = changeMacMe;

                if (changeConData.length > 0) {
                  changeConData.some(function (item, i) {
                    //去重
                    if (item.mac_id == changeMachineId && item.dgm_type == condition.condition.dgm_type) {
                      changeConData.splice(i, 1);
                      return true; //立即终止这个数组的后续循环
                    }
                  });
                }

                for (var i = 0; i < data.length; i++) {
                  if (parseInt(i / 5) == parseInt(physicalRow / 5)) {
                    changeConditionList.push(data[i]);
                  }
                }

                for (var n = 0; n < changeConditionList.length; n++) {
                  conditionObj["capturenum_".concat(n + 1)] = changeConditionList[n].condition['capturenum'];
                  conditionObj["wavenum_".concat(n + 1)] = changeConditionList[n].condition['wavenum'];

                  if (n == 4) {
                    continue;
                  }

                  if (changeConditionList[n].condition['condition_state'] == undefined) {
                    changeConditionList[n].condition['condition_state'] = 0;
                  }

                  conditionObj["conditionH_1_".concat(n + 1)] = changeConditionList[n].condition['conditionH_1'];
                  conditionObj["conditionH_2_".concat(n + 1)] = changeConditionList[n].condition['conditionH_2'];
                  conditionObj["conditionL_1_".concat(n + 1)] = changeConditionList[n].condition['conditionL_1'];
                  conditionObj["conditionL_2_".concat(n + 1)] = changeConditionList[n].condition['conditionL_2'];
                  conditionObj["condition_1_".concat(n + 1)] = changeConditionList[n].condition['condition_state'];
                  conditionObj["condition_2_".concat(n + 1)] = changeConditionList[n].condition['condition_state'];
                }

                conditionObj['dgm_type'] = condition.condition.dgm_type;
                conditionObj['pos_id1'] = condition.condition.pos_id1;
                conditionObj['pos_type1'] = condition.condition.pos_type1;
                conditionObj['pos_name1'] = condition.condition.pos_name1;
                conditionObj['pos_id2'] = condition.condition.pos_id2;
                conditionObj['pos_type2'] = condition.condition.pos_type2;
                conditionObj['pos_name2'] = condition.condition.pos_name2;
                dataObj.condition = conditionObj;
                dataObj.dgm_type = condition.condition.dgm_type;
                changeConData.push(dataObj);
              }

              if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(that.type))) {
                var pump = that.getPositionByIndex(change[0], 3);
                var sendPump = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["changePump"])(that.type, pump, change[0]);

                if (pump.operate == 0) {
                  changeData[sendPump.pump.pump_id] = sendPump;
                } else if (pump.operate == 1) {
                  addData[sendPump.pump.pump_id] = sendPump;
                }
              }

              if (that.type == 4) {
                var tms = that.getPositionByIndex(change[0], 4);
                var sendTms = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_2__["changeTms"])(that.type, tms, tms.index);

                if (sendTms.index === undefined) {
                  sendTms.index = physicalRow;
                }

                changeData[sendTms.index] = sendTms;
              }
            }
          });
        }
      };
    }
  }, {
    key: "afterValidate",
    value: function afterValidate() {
      var that = this;
      return function (isValid, value, row, prop, source) {
        if (!isValid) {
          if (prop == 'machine.baseInfo.downTime') {
            swal({
              title: "提示",
              text: "\u683C\u5F0F\u9700\u4E3A\uFF1A\u5E74-\u6708-\u65E5  \u65F6\uFF1A\u5206\uFF1A\u79D2",
              button: "确认"
            });
          }
        }

        that.changeList.isValidResult = isValid;
      };
    }
    /* 横向滚动之后*/

  }, {
    key: "afterScrollHorizontally",
    value: function afterScrollHorizontally() {
      var that = this;
      return function () {
        //修改数据事件
        var wtHolder = document.getElementsByClassName('wtHolder')[0];
        var scrollLeft = wtHolder.scrollLeft;
        var wtWidth = wtHolder.clientWidth;

        if (scrollLeft > wtWidth) {
          //当滚动超出表格宽度之后重新渲染，防止点击表格单元表头错行
          that.getHot().render();
        }
      };
    }
    /* 根据索引行获取真实数据和物理行 (共用)*/

  }, {
    key: "getPositionByIndex",
    value: function getPositionByIndex(index, type) {
      var hot = this.getHot();
      var data = this.getData();
      var physicalRow = hot.toPhysicalRow(index);
      var info;

      if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(Number(type))) {
        info = data[physicalRow].machine;
      } else if (type == 2) {
        info = data[physicalRow];
      } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(Number(type))) {
        info = data[physicalRow].pump;
      } else if (type == 4) {
        info = data[physicalRow].tms;
      }

      return info;
    } // 改变组织

  }, {
    key: "update_t_name",
    value: function update_t_name(pump, t_name, t_id) {
      pump.folder_name = t_name;
      pump.folder_id = t_id;
      this.update_macName_source(pump, t_name, t_id);
    } //更改机组源

  }, {
    key: "update_macName_source",
    value: function update_macName_source(pump, t_name, t_id) {
      var macName_source_key = this.initList.pump_macIdList[t_id];
      var macName_source = this.initList.pump_macNameList[t_name];
      pump.macName_sources = macName_source; //保存机组源

      pump.macName_sources_key = macName_source_key; //保存机组源

      pump.mac_id = macName_source_key[0];
      pump.machine_id = macName_source_key[0];
      pump.machine_name = macName_source[0];
      pump.car_num = this.initList.carData[macName_source_key[0]];
    }
  }, {
    key: "deepClone",
    value: function deepClone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    /**
     * 删除一条之后要做的一些还原素组的方法
     */

  }, {
    key: "remove_remake",
    value: function remove_remake() {
      var machine; //机组

      var pump; //子集

      var station; //站点

      var type = Number(this.type);
      /* 删除changeData 和addData里面的数据 */

      for (var i = 0; i < deleteArray.length; i++) {
        if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["MacTypeBtn"].includes(type)) {
          machine = deleteArray[i];
          delete this.changeList.changeData[machine.mac_id];
        } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_5__["PumpTypeBtn"].includes(type)) {
          pump = deleteArray[i];

          if (pump.operate == 0) {
            //旧子集
            delete this.changeList.changeData[pump.pump_id];
          } else if (pump.operate == 1) {
            //新建子集
            delete this.changeList.addData[pump.pump_id];
          }
        } else if (type === 4) {
          station = deleteArray[i];
          delete this.changeList.changeData[station.index];
        }
      }
      /* 重置删除数据的数组 */


      while (this.changeList.deleteData.length) {
        this.changeList.deleteData.pop();
      }
    }
  }]);

  return tableData;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./src/components/content/system/machine/table/js/mac_info.js":
/*!********************************************************************!*\
  !*** ./src/components/content/system/machine/table/js/mac_info.js ***!
  \********************************************************************/
/*! exports provided: getMacInfo, createMac, changeMac, getConInfo, getPumpInfo, createPump, changePump, getTmsInfo, createTms, changeTms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMacInfo", function() { return getMacInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMac", function() { return createMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMac", function() { return changeMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConInfo", function() { return getConInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPumpInfo", function() { return getPumpInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPump", function() { return createPump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePump", function() { return changePump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTmsInfo", function() { return getTmsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTms", function() { return createTms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTms", function() { return changeTms; });
/* harmony import */ var _mac_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mac_methods.js */ "./src/components/content/system/machine/table/js/mac_methods.js");
/* harmony import */ var _components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/content/system/dgm/table/js/dgm_info */ "./src/components/content/system/dgm/table/js/dgm_info.js");


/* 固定参数 */

var mac_activity_source = {
  "0": "正常",
  "1": "禁用"
}; //机组状态

var mac_type_source = {
  '0': '双馈',
  '1': '直驱',
  '2': '半直驱'
}; //机组类型选择

var capturenum_source = [['500', '少于1'], ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']]; //长采样存储下拉选项

var car_num_source = {
  '4': '4节车厢',
  '6': '6节车厢',
  '8': '8节车厢'
}; //车厢数量

var line_id_source = {}; //线路选择下拉选项

var if_headEnd_source = {
  '0': '否',
  '1': '是'
}; //是否上下行车头
// export {PUMP_TYPE_SOURCE};

function getMacInfo(res, folderData, type, lineList) {
  var data = []; //机组集合

  console.log(folderData);

  if (res != undefined && !$.isEmptyObject(folderData) && res.machine_list && res.machine_list.length) {
    var machine = {}; //单个机组信息

    type = Number(type);
    line_id_source = lineList;

    for (var i = 0; i < res.machine_list.length; i++) {
      var mac = res.machine_list[i];

      if (type === 1 && mac.t_root != 0) {
        continue;
      }

      if (type === 5 && mac.t_root != 1) {
        continue;
      }

      if (type === 6 && mac.t_root != 2) {
        continue;
      }

      if (type === 7 && mac.t_root != 3) {
        continue;
      }

      if (type === 9 && mac.t_root != -1) {
        continue;
      }

      machine = {
        operate: 0,
        flag: mac.flag,
        //机组是否绑定采集器，1有，0没有
        updateTime: mac.updateTime,
        //更新时间
        t_id: mac.t_id,
        //直属组织uid
        t_name: mac.t_name,
        //上级组织名称
        t_old_id: mac.t_id,
        //修改以前的t_id
        t_name_sources: Object.values(folderData),
        t_name_sources_key: Object.keys(folderData),
        t_root: mac.t_root,
        mac_me: mac.mac_me,
        //机组名称
        m_type: mac.m_type,
        //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组)
        mac_activity: mac.mac_activity,
        mac_activity_val: mac_activity_source[mac.mac_activity],
        //机组状态 0:正常 1：禁用
        mac_activity_sources: Object.values(mac_activity_source),
        mac_activity_sources_key: Object.keys(mac_activity_source),
        mac_id: mac.mac_id,
        //机组uid
        line_id: mac.line_id,
        line_id_val: line_id_source[mac.line_id],
        //线路选择
        line_id_sources: Object.values(line_id_source),
        line_id_sources_key: Object.keys(line_id_source),
        baseInfo: {
          driveChain_name: mac.baseInfo.driveChain_name,
          manufacturer: mac.baseInfo.manufacturer,
          model_number: mac.baseInfo.model_number,
          mac_type: mac.baseInfo.mac_type,
          mac_type_val: mac_type_source[mac.baseInfo.mac_type],
          mac_type_sources: Object.values(mac_type_source),
          mac_type_sources_key: Object.keys(mac_type_source),
          car_num_val: car_num_source[mac.baseInfo.car_num],
          car_num: mac.baseInfo.car_num,
          car_num_sources: Object.values(car_num_source),
          car_num_sources_key: Object.keys(car_num_source),
          model_gear: mac.baseInfo.model_gear,
          made_gear: mac.baseInfo.made_gear,
          model_generator: mac.baseInfo.model_generator,
          made_generator: mac.baseInfo.made_generator,
          model_vane: mac.baseInfo.model_vane,
          made_vane: mac.baseInfo.made_vane,
          model_tower: mac.baseInfo.model_tower,
          made_tower: mac.baseInfo.made_tower,
          tower_high: mac.baseInfo.tower_high,
          // ratio:mac.baseInfo.ratio,
          dgmDepth: mac.baseInfo.dgmDepth,
          downTime: mac.baseInfo.downTime,
          cosc: mac.baseInfo.cosc,
          eta: mac.baseInfo.eta,
          ratedPower: mac.baseInfo.ratedPower // sinkData:mac.baseInfo.sinkData,

        },
        condition: mac.condition
      };
      data.push({
        machine: machine
      });
    }
  }

  return [data];
}
function createMac(type, folderData, index) {
  if ($.isEmptyObject(folderData)) {
    console.log('没有组织');
  } else {
    console.log(folderData);
    var t_name_source = Object.values(folderData);
    var t_name_source_key = Object.keys(folderData);
    var _mac_activity_source = {
      "0": "正常",
      "1": "禁用"
    };
    var _mac_type_source = {
      '0': '双馈',
      '1': '直驱',
      '2': '半直驱'
    };
    var machine = {
      operate: 1,
      updateTime: 0,
      //更新时间
      t_id: t_name_source_key[0].split('_')[0],
      //直属组织uid
      t_old_id: "C",
      t_name: t_name_source[0],
      //上级组织名称
      t_root: t_name_source_key[0].split('_')[1],
      t_name_sources: t_name_source,
      t_name_sources_key: t_name_source_key,
      mac_me: "",
      //机组名称
      m_type: 0,
      //机组类型，0:风机机组 (1振动机组 2倾覆机组 3组合机组（先倾覆后振动） 4组合机组（先振动后倾覆） 7叶轮机组)
      mac_activity: '0',
      //机组状态 0:正常 1：禁用
      mac_activity_val: '正常',
      mac_activity_sources: Object.values(_mac_activity_source),
      mac_activity_sources_key: Object.keys(_mac_activity_source),
      mac_id: index + "B",
      //机组uid
      //机组状态 0:正常 1：禁用
      line_id_val: '',
      line_id: "",
      //线路选择
      line_id_sources: Object.values(line_id_source),
      line_id_sources_key: Object.keys(line_id_source),
      baseInfo: {
        manufacturer: "",
        model_number: "",
        driveChain_name: "",
        //传动链名称
        car_num_val: '4节车厢',
        car_num: '4',
        car_num_sources: Object.values(car_num_source),
        car_num_sources_key: Object.keys(car_num_source),
        mac_type_val: t_name_source_key[0].split('_')[1] == 1 ? "" : '双馈',
        mac_type: t_name_source_key[0].split('_')[1] == 1 ? "" : '0',
        mac_type_sources: Object.values(_mac_type_source),
        mac_type_sources_key: Object.keys(_mac_type_source),
        model_gear: "",
        made_gear: "",
        model_generator: "",
        made_generator: "",
        model_vane: "",
        made_vane: "",
        model_tower: "",
        made_tower: "",
        tower_high: t_name_source_key[0].split('_')[1] == 1 ? "" : "65",
        // ratio:'',
        dgmDepth: '',
        downTime: '',
        cosc: '',
        eta: '',
        ratedPower: '' // sinkData:'',

      },
      condition: [] //工况信息

    };

    if (machine.t_root == 2) {
      machine.baseInfo.mac_type_val = '';
      machine.baseInfo.mac_type = '';
      machine.baseInfo.tower_high = '';
    }

    if (machine.t_root == 0) {
      machine.baseInfo.car_num_val = '';
      machine.baseInfo.car_num = '';
    }

    return machine;
  }
}
function changeMac(type, oldMac, index) {
  var num = index + 1;
  var machine = {};
  machine.m_type = oldMac.m_type;
  machine.mac_activity = oldMac.mac_activity;
  machine.mac_id = oldMac.mac_id;
  machine.mac_me = oldMac.mac_me;
  machine.t_id = oldMac.t_id;
  machine.t_name = oldMac.t_name;
  machine.t_root = oldMac.t_root;
  machine.t_old_id = oldMac.t_old_id;
  machine.updateTime = oldMac.updateTime;
  machine.line_id = oldMac.line_id; //线路选择

  machine.baseInfo = {
    car_num: oldMac.baseInfo.car_num,
    driveChain_name: oldMac.baseInfo.driveChain_name,
    mac_type: oldMac.baseInfo.mac_type,
    made_gear: oldMac.baseInfo.made_gear,
    made_generator: oldMac.baseInfo.made_generator,
    made_tower: oldMac.baseInfo.made_tower,
    made_vane: oldMac.baseInfo.made_vane,
    manufacturer: oldMac.baseInfo.manufacturer,
    model_gear: oldMac.baseInfo.model_gear,
    model_generator: oldMac.baseInfo.model_generator,
    model_number: oldMac.baseInfo.model_number,
    model_tower: oldMac.baseInfo.model_tower,
    model_vane: oldMac.baseInfo.model_vane,

    /*tower_flange_sum: oldMac.baseInfo.tower_flange_sum,*/
    tower_high: oldMac.baseInfo.tower_high,
    // ratio:oldMac.baseInfo.ratio,
    dgmDepth: oldMac.baseInfo.dgmDepth,
    downTime: oldMac.baseInfo.downTime,
    cosc: oldMac.baseInfo.cosc,
    eta: oldMac.baseInfo.eta,
    ratedPower: oldMac.baseInfo.ratedPower // sinkData:oldMac.baseInfo.sinkData,

  };
  return machine;
}
function getConInfo(res) {
  var data = [];
  var posList = [];
  var condition = {};

  if (res === undefined) {
    console.log('数据错误！');
  } else {
    if (res.length > 0) {
      var _loop = function _loop(i) {
        if (res[i].machine_info != undefined) {
          var _loop2 = function _loop2(j) {
            if (res[i].machine_info[j].condition != undefined) {
              if (res[i].machine_info[j].condition.length > 0) {
                for (var m = 0; m < res[i].machine_info[j].condition.length; m++) {
                  posList = res[i].machine_info[j].pos_list;
                  res[i].machine_info[j].posListSource = {
                    "-1_0_3": "无"
                  };

                  if (posList != undefined && posList.length > 0) {
                    posList.forEach(function (pos) {
                      res[i].machine_info[j].posListSource[pos.pos_id + '_' + pos.pos_type + '_' + pos.dgm_type] = pos.pos_name;
                    });
                  }

                  for (var n = 0; n < 5; n++) {
                    condition = {
                      t_id: res[i].t_id,
                      //直属组织uid
                      t_name: res[i].t_name,
                      //机组名称
                      t_root: res[i].t_root,
                      //组织类型
                      mac_id: res[i].machine_info[j].mac_id,
                      mac_me: res[i].machine_info[j].mac_me
                    };

                    if (res[i].machine_info[j].condition[m].dgm_type == 4) {
                      //mhd采集器没有工况，过滤掉
                      continue;
                    }

                    condition['dgm_type'] = res[i].machine_info[j].condition[m].dgm_type;
                    condition['dgm_name'] = Object(_mac_methods_js__WEBPACK_IMPORTED_MODULE_0__["dgmType_name"])(res[i].machine_info[j].condition[m].dgm_type, res[i].t_root);
                    condition['pos_id1'] = res[i].machine_info[j].condition[m]['pos_id1'];
                    condition['pos_name1'] = res[i].machine_info[j].condition[m]['pos_name1'];
                    condition['pos_type1'] = res[i].machine_info[j].condition[m]['pos_type1'];
                    condition['pos_sources1'] = Object.values(res[i].machine_info[j].posListSource);
                    condition['pos_sources_key1'] = Object.keys(res[i].machine_info[j].posListSource);
                    condition['pos_id2'] = res[i].machine_info[j].condition[m]['pos_id2'];
                    condition['pos_name2'] = res[i].machine_info[j].condition[m]['pos_name2'];
                    condition['pos_type2'] = res[i].machine_info[j].condition[m]['pos_type2'];
                    condition['pos_sources2'] = Object.values(res[i].machine_info[j].posListSource);
                    condition['pos_sources_key2'] = Object.keys(res[i].machine_info[j].posListSource);

                    if (n == 4) {
                      condition['condition_name'] = "其他工况";
                      condition["condition_state"] = 0;
                      condition["conditionH_1"] = null;
                      condition["conditionH_2"] = null;
                      condition["conditionL_1"] = null;
                      condition["conditionL_2"] = null;
                    } else {
                      condition['condition_name'] = "工况#" + (n + 1);
                      condition['condition_state'] = res[i].machine_info[j].condition[m]["condition_1_".concat(n + 1)];
                      condition["conditionH_1"] = res[i].machine_info[j].condition[m]["conditionH_1_".concat(n + 1)];
                      condition["conditionH_2"] = res[i].machine_info[j].condition[m]["conditionH_2_".concat(n + 1)];
                      condition["conditionL_1"] = res[i].machine_info[j].condition[m]["conditionL_1_".concat(n + 1)];
                      condition["conditionL_2"] = res[i].machine_info[j].condition[m]["conditionL_2_".concat(n + 1)];
                    }

                    var index = Object(_components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__["getIndexOfArr"])(Object(_components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__["getArrFromObj"])(capturenum_source)[0], res[i].machine_info[j].condition[m]["capturenum_".concat(n + 1)]);
                    condition['capturenum'] = res[i].machine_info[j].condition[m]["capturenum_".concat(n + 1)];
                    condition['capturenum_val'] = Object(_components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__["getArrFromObj"])(capturenum_source)[1][index];
                    condition['capturenumSource'] = Object(_components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__["getArrFromObj"])(capturenum_source)[1];
                    condition['capturenumSourceKey'] = Object(_components_content_system_dgm_table_js_dgm_info__WEBPACK_IMPORTED_MODULE_1__["getArrFromObj"])(capturenum_source)[0];
                    condition['wavenum'] = res[i].machine_info[j].condition[m]["wavenum_".concat(n + 1)];
                    data.push({
                      condition: condition
                    });
                  } // return[data];

                }
              }
            } else {
              console.log(j + ':condition数据错误！');
            }
          };

          for (var j = 0; j < res[i].machine_info.length; j++) {
            _loop2(j);
          }
        } else {
          console.log(i + ':machine_info数据错误！');
        }
      };

      for (var i = 0; i < res.length; i++) {
        _loop(i);
      }

      return [data];
    }
  }
}
function getPumpInfo(res, folderData, pump_macNameList, pump_macIdList, type) {
  var pump_type_source = PUMP_TYPE_SOURCE;
  var pump_activity_source = {
    '0': '有效',
    '1': '无效'
  };
  var data = [];

  if (res == undefined) {
    console.log('数据错误');
  } else {
    if (res.length > 0 && !$.isEmptyObject(folderData)) {
      var pump = {};

      for (var i = 0; i < res.length; i++) {
        var macSource = pump_macNameList[res[i].folder_name];
        var macSource_key = pump_macIdList[res[i].folder_id + '_' + res[i].t_root];

        if (type === 3 && res[i].t_root != 1) {
          continue;
        }

        if (type === 8 && res[i].t_root != 2) {
          continue;
        }

        if (type === 10 && res[i].t_root != -1) {
          continue;
        }

        if (res[i].t_root == 2) {
          res[i].pump.baseInfo.rated_speed = ""; //tms没有额定转速，将值置空

          pump_type_source = {
            '1': 'TC',
            '2': 'T',
            '3': 'MP',
            '4': 'M',
            '5': 'MCP',
            '6': 'MC'
          };
        } else if (res[i].t_root == 1) {
          pump_type_source = PUMP_TYPE_SOURCE;
        }

        pump = {
          operate: 0,
          folder_id: res[i].folder_id + '_' + res[i].t_root,
          folder_name: res[i].folder_name,
          folder_sources: Object.values(folderData),
          folder_sources_key: Object.keys(folderData),
          machine_id: res[i].machine_id,
          machine_name: res[i].machine_name,
          t_root: res[i].t_root,
          updateTime: res[i].pump.updateTime,
          //更新时间
          mac_id: res[i].pump.mac_id,
          //机组uid
          macName_sources: macSource,
          macName_sources_key: macSource_key,
          pump_name: res[i].pump.pump_name,
          //机泵名称
          pump_id: res[i].pump.pump_id,
          //机泵uid
          pump_type: res[i].pump.pump_type,
          pump_type_val: pump_type_source[res[i].pump.pump_type],
          //水泥：机泵类型 1=运行泵 2=备用泵；走行部：车厢类型  '1':'TC','2':'T','3':'MP','4':'M','5':'MCP','6':'MC_1','7':'MC_2'
          pump_type_sources: Object.values(pump_type_source),
          pump_type_sources_key: Object.keys(pump_type_source),
          pump_activity: res[i].pump.pump_activity,
          pump_activity_val: pump_activity_source[res[i].pump.pump_activity],
          //机泵状态 0:正常 1：禁用
          pump_activity_sources: Object.values(pump_activity_source),
          pump_activity_sources_key: Object.keys(pump_activity_source),
          ch_class: res[i].pump.ch_class,
          item: res[i].pump.item,
          // 是否有传动链：0表示机泵没有传动链，1为有传动链
          driveChain_name: res[i].pump.driveChain_name,
          //传动链名称
          itemCount: res[i].pump.itemCount,
          //部件数目
          car_num: res[i].car_num,
          //tms的车厢数量
          baseInfo: {
            car_id: res[i].pump.baseInfo.car_id,
            //车厢序号
            brand: res[i].pump.baseInfo.brand,
            //品牌
            pn: res[i].pump.baseInfo.pn,
            //PN号
            sn: res[i].pump.baseInfo.sn,
            //SN号
            power: res[i].pump.baseInfo.power,
            //功率
            rated_speed: res[i].pump.baseInfo.rated_speed,
            //额定转速
            speed_rate: res[i].pump.baseInfo.speed_rate,
            //转速比
            mf_date: res[i].pump.baseInfo.mf_date,
            //生产日期
            other: res[i].pump.baseInfo.other,
            //其它
            car_wheel_d: res[i].pump.baseInfo.car_wheel_d,
            //轮径
            if_head: res[i].pump.baseInfo.if_head,
            if_head_val: if_headEnd_source[res[i].pump.baseInfo.if_head],
            //上行车头 0:否 1：是
            if_head_sources: Object.values(if_headEnd_source),
            if_head_sources_key: Object.keys(if_headEnd_source),
            if_end: res[i].pump.baseInfo.if_end,
            if_end_val: if_headEnd_source[res[i].pump.baseInfo.if_end],
            //下行车头 0:否 1：是
            if_end_sources: Object.values(if_headEnd_source),
            if_end_sources_key: Object.keys(if_headEnd_source)
          }
        };
        data.push({
          pump: pump
        });
      }
    }

    return [data];
  }
}
function createPump(type, folderData, pump_macNameList, pump_macIdList, initList, index) {
  var pump_type_source = PUMP_TYPE_SOURCE;
  var pump_activity_source = {
    '0': '有效',
    '1': '无效'
  };
  var macSource = pump_macNameList[Object.values(folderData)[0]];
  var macSource_key = pump_macIdList[Object.keys(folderData)[0]];
  var t_root = Object.keys(folderData)[0].split('_')[1];
  var car_num = initList.carData[macSource_key[0]];

  if (t_root == 2) {
    pump_type_source = {
      '1': 'TC',
      '2': 'T',
      '3': 'MP',
      '4': 'M',
      '5': 'MCP',
      '6': 'MC'
    };
  }

  var pump = {
    operate: 1,
    folder_id: Object.keys(folderData)[0],
    folder_name: Object.values(folderData)[0],
    folder_sources: Object.values(folderData),
    folder_sources_key: Object.keys(folderData),
    machine_id: macSource_key[0],
    machine_name: macSource[0],
    updateTime: 0,
    //更新时间
    t_root: t_root,
    mac_id: macSource_key[0],
    //机组uid
    macName_sources: macSource,
    macName_sources_key: macSource_key,
    pump_name: "",
    //机泵名称
    pump_id: index + "A",
    //机泵uid
    pump_type_val: Object.values(pump_type_source)[0],
    pump_type: Object.keys(pump_type_source)[0],
    //水泥：机泵类型 1=运行泵 2=备用泵；走行部：车厢类型  1=动车，2=拖车，3=MC-1、4=MC-2
    pump_type_sources: Object.values(pump_type_source),
    pump_type_sources_key: Object.keys(pump_type_source),
    pump_activity_val: Object.values(pump_activity_source)[0],
    pump_activity: Object.keys(pump_activity_source)[0],
    //机泵状态 0:正常 1：禁用
    pump_activity_sources: Object.values(pump_activity_source),
    pump_activity_sources_key: Object.keys(pump_activity_source),
    ch_class: 0,
    item: 0,
    driveChain_name: "",
    //传动链名称
    itemCount: 0,
    //部件数目
    car_num: car_num,
    //tms的车厢数目
    baseInfo: {
      brand: "",
      //品牌
      pn: "",
      //PN号
      sn: "",
      //SN号
      power: "",
      //功率
      rated_speed: 1,
      //额定转速
      speed_rate: "",
      //转速比
      mf_date: "",
      //生产日期
      other: "",
      //其它
      if_head: '0',
      if_head_val: '否',
      //上行车头 0:否 1：是
      if_head_sources: Object.values(if_headEnd_source),
      if_head_sources_key: Object.keys(if_headEnd_source),
      if_end: '0',
      if_end_val: '否',
      //下行车头 0:否 1：是
      if_end_sources: Object.values(if_headEnd_source),
      if_end_sources_key: Object.keys(if_headEnd_source)
    }
  };

  if (pump.t_root == 2) {
    pump.baseInfo.car_id = ''; //车厢序号

    pump.baseInfo.rated_speed = '';
    pump.itemCount = '';
    pump.baseInfo.car_wheel_d = '840'; //轮径
  }

  return pump;
}
function changePump(type, oldPump, index) {
  var pump = {
    folder_id: oldPump.folder_id.split('_')[0],
    folder_name: oldPump.folder_name,
    machine_id: oldPump.machine_id,
    machine_name: oldPump.machine_name,
    t_root: oldPump.t_root,
    pump: {
      ch_class: oldPump.ch_class,
      mac_id: oldPump.mac_id,
      pump_activity: oldPump.pump_activity,
      pump_id: oldPump.pump_id,
      pump_name: oldPump.pump_name,
      pump_type: oldPump.pump_type,
      updateTime: oldPump.updateTime,
      driveChain_name: oldPump.driveChain_name,
      //传动链名称
      itemCount: oldPump.itemCount,
      //部件数目
      baseInfo: {
        brand: oldPump.baseInfo.brand,
        mf_date: oldPump.baseInfo.mf_date,
        other: oldPump.baseInfo.other,
        pn: oldPump.baseInfo.pn,
        power: oldPump.baseInfo.power,
        rated_speed: oldPump.baseInfo.rated_speed,
        sn: oldPump.baseInfo.sn,
        speed_rate: oldPump.baseInfo.speed_rate
      }
    }
  };

  if (oldPump.t_root == 2) {
    pump.pump.baseInfo.if_head = oldPump.baseInfo.if_head; //上行车头

    pump.pump.baseInfo.if_end = oldPump.baseInfo.if_end; //下行车头

    pump.pump.baseInfo.car_id = oldPump.baseInfo.car_id;
    pump.pump.baseInfo.car_wheel_d = oldPump.baseInfo.car_wheel_d;
    pump.pump.car_num = oldPump.car_num;
  }

  return pump;
}
function getTmsInfo(res) {
  var data = [];

  if (res == undefined) {
    console.log('数据错误');
  } else {
    var tms = {};

    if (res.length > 0) {
      res.forEach(function (item) {
        tms = {
          operate: 0,
          line_id: item.line_id,
          line_name: item.line_name,
          stations: item.stations //站点信息

        };
        data.push({
          tms: tms
        });
      });
    }

    return [data];
  }
}
function createTms(type, index) {
  var tms = {
    index: index,
    operate: 1,
    line_id: -1,
    line_name: '',
    stations: []
  };
  return tms;
}
function changeTms(type, oldTms, index) {
  var tms = {
    index: index,
    line_id: oldTms.line_id,
    line_name: oldTms.line_name,
    stations: oldTms.stations
  };
  return tms;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

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

/***/ }),

/***/ "./src/components/content/system/machine/table/js/mac_mixin.js":
/*!*********************************************************************!*\
  !*** ./src/components/content/system/machine/table/js/mac_mixin.js ***!
  \*********************************************************************/
/*! exports provided: macMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macMixin", function() { return macMixin; });
/* harmony import */ var _mac_hdtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mac_hdtable.js */ "./src/components/content/system/machine/table/js/mac_hdtable.js");
/* harmony import */ var _mac_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mac_info.js */ "./src/components/content/system/machine/table/js/mac_info.js");
/* harmony import */ var _mac_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mac_methods.js */ "./src/components/content/system/machine/table/js/mac_methods.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var macMixin = {
  data: function data() {
    return {
      hot: {},
      //hottable对象
      data: [],
      //hottable的data数据
      initList: {
        folderData: {},
        //组织信息下拉选项
        pumpFolderData: {},
        //机泵组织列表
        pumpMacData: {},
        //机泵机组列表
        pump_macNameList: {},
        //机泵所有的组织对应的机组列表
        pump_macIdList: {},
        //机泵所有的组织对应的机组列表
        lineList: {},
        //线路列表
        carData: {} //car_num列表

      },
      changeList: {
        changeData: {},
        //修改的数据
        changeConData: [],
        //修改的工况的信息
        deleteData: [],
        //删除的数据
        addData: {},
        //新增的数据
        sortMacList: [],
        //过滤机组名列表
        sortDgmList: [],
        //过滤采集器列表
        sameName: {},
        //同一组织下机组同名列表
        isValidResult: true //表格中单元格验证是否正确

      },
      timer: null,
      //定时器
      scroll: 0 //滚动距离

    };
  },
  mounted: function mounted() {
    if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["PumpTypeBtn"].includes(Number(this.type))) {
      this.getPumpFolderData();
    } else if (this.type == 4) {
      this.getTmsFolderData();
    } else if (this.type == 2) {
      this.getListData(this.type);
    } else {
      this.getFolderData();
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    var changeData = this.changeList.changeData;
    var changeConData = this.changeList.changeConData;
    var addData = this.changeList.addData;

    if (!$.isEmptyObject(changeData) || !$.isEmptyObject(addData) || changeConData.length !== 0) {
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
  beforeDestroy: function beforeDestroy() {
    this.hot = null;

    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    getFolderData: function getFolderData() {
      var _this = this;

      this.$getApi.queryAllFolder(this.$store.state.tids).then(function (res) {
        if (res !== undefined) {
          if (res.length === 0) {
            _this.$emit("child-msg", true);
          } else {
            //渲染表格
            if (res.length > 0) {
              for (var i = 0; i < res.length; i++) {
                if (_this.type == 1 && res[i].t_root == 0) {
                  _this.initList.folderData[res[i].t_id + '_' + res[i].t_root] = res[i].t_name;
                }

                if (_this.type == 5 && res[i].t_root == 1) {
                  _this.initList.folderData[res[i].t_id + '_' + res[i].t_root] = res[i].t_name;
                }

                if (_this.type == 6 && res[i].t_root == 2) {
                  _this.initList.folderData[res[i].t_id + '_' + res[i].t_root] = res[i].t_name;
                }

                if (_this.type == 7 && res[i].t_root == 3) {
                  _this.initList.folderData[res[i].t_id + '_' + res[i].t_root] = res[i].t_name;
                }

                if (_this.type == 9 && res[i].t_root == -1) {
                  _this.initList.folderData[res[i].t_id + '_' + res[i].t_root] = res[i].t_name;
                }
              }

              if ($.isEmptyObject(_this.initList.folderData)) {
                _this.$emit("child-msg", true);
              } else {
                _this.$emit("child-msg", false);

                _this.getListData(_this.type);
              }
            }
          }
        } else {
          console.log('组织数据错误');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    getPumpFolderData: function getPumpFolderData() {
      var _this2 = this;

      var params = null;
      params = {
        t_ids: this.$store.state.tids,
        t_root: 1
      };
      this.$getApi.queryTreeIdAndMacId(params).then(function (res) {
        if (res !== undefined) {
          if (res.length === 0) {
            _this2.$emit("child-msg", true);
          } else {
            //渲染表格
            res.forEach(function (folder) {
              if (_this2.type == 3 && folder.t_root == 1) {
                _this2.initList.pumpFolderData[folder.t_id + '_' + folder.t_root] = folder.t_name;
                _this2.initList.pump_macNameList[folder.t_name] = [];
                _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root] = [];

                if (folder.machine_list !== undefined && folder.machine_list.length > 0) {
                  folder.machine_list.forEach(function (machine) {
                    _this2.initList.pumpMacData[machine.mac_id + '_' + machine.m_type] = machine.mac_me;

                    _this2.initList.pump_macNameList[folder.t_name].push(machine.mac_me);

                    _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root].push(machine.mac_id);
                  });
                }
              }

              if (_this2.type == 8 && folder.t_root == 2) {
                _this2.initList.pumpFolderData[folder.t_id + '_' + folder.t_root] = folder.t_name;
                _this2.initList.pump_macNameList[folder.t_name] = [];
                _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root] = [];

                if (folder.machine_list !== undefined && folder.machine_list.length > 0) {
                  folder.machine_list.forEach(function (machine) {
                    _this2.initList.pumpMacData[machine.mac_id + '_' + machine.m_type] = machine.mac_me;

                    _this2.initList.pump_macNameList[folder.t_name].push(machine.mac_me);

                    _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root].push(machine.mac_id);

                    _this2.initList.carData[machine.mac_id] = machine.car_num;
                  });
                }
              }

              if (_this2.type == 10 && folder.t_root == -1) {
                _this2.initList.pumpFolderData[folder.t_id + '_' + folder.t_root] = folder.t_name;
                _this2.initList.pump_macNameList[folder.t_name] = [];
                _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root] = [];

                if (folder.machine_list !== undefined && folder.machine_list.length > 0) {
                  folder.machine_list.forEach(function (machine) {
                    _this2.initList.pumpMacData[machine.mac_id + '_' + machine.m_type] = machine.mac_me;

                    _this2.initList.pump_macNameList[folder.t_name].push(machine.mac_me);

                    _this2.initList.pump_macIdList[folder.t_id + '_' + folder.t_root].push(machine.mac_id);
                  });
                }
              }
            });

            if ($.isEmptyObject(_this2.initList.pumpFolderData)) {
              _this2.$emit("child-msg", true);
            } else {
              _this2.$emit("child-msg", false);

              _this2.getListData(_this2.type);
            }
          }
        } else {
          console.log('组织数据错误');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    getTmsFolderData: function getTmsFolderData() {
      var _this3 = this;

      var params = null;
      params = {
        t_ids: this.$store.state.tids,
        t_root: 2
      };
      this.$getApi.queryTreeIdAndMacId(params).then(function (res) {
        if (res !== undefined) {
          if (res.length === 0) {
            _this3.$emit("child-msg", true);
          } else {
            //渲染表格
            _this3.$emit("child-msg", false);

            if (res.length > 0) {
              res.forEach(function (folder) {
                _this3.initList.pumpFolderData[folder.t_id + '_' + folder.t_root] = folder.t_name;
                _this3.initList.pump_macNameList[folder.t_name] = [];
                _this3.initList.pump_macIdList[folder.t_id + '_' + folder.t_root] = [];

                if (folder.machine_list !== undefined && folder.machine_list.length > 0) {
                  folder.machine_list.forEach(function (machine) {
                    _this3.initList.pumpMacData[machine.mac_id + '_' + machine.m_type] = machine.mac_me;

                    _this3.initList.pump_macNameList[folder.t_name].push(machine.mac_me);

                    _this3.initList.pump_macIdList[folder.t_id + '_' + folder.t_root].push(machine.mac_id);

                    _this3.initList.carData[machine.mac_id] = machine.car_num;
                  });
                }
              });

              _this3.getListData(_this3.type);
            }
          }
        } else {
          console.log('组织数据错误');
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    getListData: function getListData(type) {
      var _this4 = this;

      type = Number(type);
      var loadTime = false;
      var that = this;
      this.timer = setTimeout(function () {
        //一秒钟之内有返回就不用显示加载动画
        if (!loadTime) {
          that.$parent.loading = true; //开启加载中
        }
      }, 500);

      if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["MacTypeBtn"].includes(type)) {
        this.$getApi.queryAllMachine(this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this4.$parent.loading = false; //关闭加载中

          if (res && res.line_list && res.line_list.length) {
            //走行部的线路选择下拉列表
            res.line_list.forEach(function (line) {
              that.initList.lineList[line.line_id] = line.line_name;
            });
          }

          var result = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_1__["getMacInfo"])(res, _this4.initList.folderData, type, that.initList.lineList); //获取机组信息

          var linkObj = ["", "", type];

          if (res && res.machine_list && res.machine_list.length) {
            for (var i = 0; i < res.machine_list.length; i++) {
              if (type == 1 && res.machine_list[i].t_root == 0) {
                linkObj = [res.machine_list[i].t_id, res.machine_list[i].t_name, type];
                break;
              }

              if (type == 5 && res.machine_list[i].t_root == 1) {
                linkObj = [res.machine_list[i].t_id, res.machine_list[i].t_name, type];
                break;
              }

              if (type == 6 && res.machine_list[i].t_root == 2) {
                linkObj = [res.machine_list[i].t_id, res.machine_list[i].t_name, type];
                break;
              }

              if (type == 7 && res.machine_list[i].t_root == 3) {
                linkObj = [res.machine_list[i].t_id, res.machine_list[i].t_name, type];
                break;
              }
            }
          }

          _this4.$store.commit('setTreeMac', linkObj); //组织position结构


          var _result = _slicedToArray(result, 1);

          _this4.data = _result[0];

          _this4.renderTable();
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 2) {
        this.$getApi.queryAllCondition(this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this4.$parent.loading = false; //关闭加载中

          var result = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_1__["getConInfo"])(res);

          if (!result) {
            _this4.$emit("child-msg", true);
          } else {
            //组织position结构
            var _result2 = _slicedToArray(result, 1);

            _this4.data = _result2[0];

            //渲染表格
            _this4.$emit("child-msg", false);

            _this4.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["PumpTypeBtn"].includes(type)) {
        this.$getApi.queryPumps(this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this4.$parent.loading = false; //关闭加载中

          if ($.isEmptyObject(_this4.initList.pump_macNameList)) {
            _this4.$emit("child-msg", true);
          } else {
            var result = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_1__["getPumpInfo"])(res, _this4.initList.pumpFolderData, _this4.initList.pump_macNameList, _this4.initList.pump_macIdList, type); //有点问题

            var linkObj = ["", "", type];

            if (res.length > 0) {
              for (var i = 0; i < res.length; i++) {
                if (type == 3 && res[i].t_root == 1) {
                  linkObj = [res[i].folder_id, res[i].folder_name, type];
                  break;
                }

                if (type == 8 && res[i].t_root == 2) {
                  linkObj = [res[i].folder_id, res[i].folder_name, type];
                  break;
                }
              }
            }

            _this4.$store.commit('setTreeMac', linkObj);

            var _result3 = _slicedToArray(result, 1);

            _this4.data = _result3[0];

            _this4.renderTable(); //渲染表格


            _this4.$emit("child-msg", false);
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 4) {
        this.$getApi.queryLines().then(function (res) {
          loadTime = true;
          _this4.$parent.loading = false; //关闭加载中

          var result = Object(_mac_info_js__WEBPACK_IMPORTED_MODULE_1__["getTmsInfo"])(res);

          if (res.length > 0) {
            var linkObj = [res[0].line_id, res[0].line_name, 4];

            _this4.$store.commit('setTreeMac', linkObj);
          } else {
            var _linkObj = ["", "", 4];

            _this4.$store.commit('setTreeMac', _linkObj);
          }

          var _result4 = _slicedToArray(result, 1);

          _this4.data = _result4[0];

          _this4.renderTable(); //渲染表格


          _this4.$emit("child-msg", false);
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },

    /* 渲染表格 */
    renderTable: function renderTable() {
      var _this5 = this;

      if (this.$route.path.indexOf('machine') < 0) {
        //非当前页面不渲染
        return;
      }

      var HotTable = document.getElementById('HotTable');
      var property = {
        type: this.type,
        tids: this.$store.state.tids,
        getData: this.getData,
        getHot: this.getHot,
        initList: this.initList,
        changeList: this.changeList,
        router: this.$router,
        store: this.$store
      }; //创建table

      this.hot = new _mac_hdtable_js__WEBPACK_IMPORTED_MODULE_0__["default"](HotTable, property);
      Object(_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["reRenderSelectOption"])(this.hot, this.data);
      /* 监听滚动事件 */

      var wtHolder = document.getElementsByClassName('wtHolder')[0];
      wtHolder.addEventListener('scroll', function (e) {
        _this5.hot.destroyEditor(); //处理当选择下拉框后拖动滚动条框框会跟着跑的问题

      });
      this.filterRows(this.hot, this.data); //保留过滤结果
    },
    //保留过滤后的结果
    filterRows: function filterRows(hot, data) {
      var filtersPlugin = hot.getPlugin('filters');
      /*const macTypeList = [1,5,6,7];//机组类型
      const pumpTypeList = [3,8];//机泵、车厢*/

      if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["MacTypeBtn"].includes(Number(this.type)) && sessionStorage.getItem('filter_type1')) {
        var filterArr = JSON.parse(sessionStorage.getItem('filter_type1'));
        filterArr.forEach(function (condition) {
          filtersPlugin.addCondition(condition.column, condition.conditions[0].name, condition.conditions[0].args, condition.operations);
        });
        filtersPlugin.filter();
      } else if (this.type == 2 && sessionStorage.getItem('filter_type2')) {
        var _filterArr = JSON.parse(sessionStorage.getItem('filter_type2'));

        _filterArr.forEach(function (condition) {
          filtersPlugin.addCondition(condition.column, condition.conditions[0].name, condition.conditions[0].args, condition.operations);
        });

        filtersPlugin.filter();
      } else if (_mac_methods_js__WEBPACK_IMPORTED_MODULE_2__["PumpTypeBtn"].includes(Number(this.type)) && sessionStorage.getItem('filter_type3')) {
        var _filterArr2 = JSON.parse(sessionStorage.getItem('filter_type3'));

        _filterArr2.forEach(function (condition) {
          filtersPlugin.addCondition(condition.column, condition.conditions[0].name, condition.conditions[0].args, condition.operations);
        });

        filtersPlugin.filter();
      }
    },
    //获取data
    getData: function getData() {
      return this.data;
    },

    /* 获取hot实例 */
    getHot: function getHot() {
      return this.hot;
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ })

}]);
//# sourceMappingURL=10-3303a929.js.map