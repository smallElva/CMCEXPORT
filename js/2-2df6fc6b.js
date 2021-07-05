(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: translateTree, addSessionStorage, find_key, getRowInfoByIndex, setChangeCellResult, addRows, m_formate, compareName, isStatic, cloneObj, distinct, codeObj, round, getTime, debounce, throttle, getUnit, captureFreqSourcesObj, freqToCaptureTime, getUnit1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTree", function() { return translateTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSessionStorage", function() { return addSessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find_key", function() { return find_key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowInfoByIndex", function() { return getRowInfoByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChangeCellResult", function() { return setChangeCellResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRows", function() { return addRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m_formate", function() { return m_formate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareName", function() { return compareName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStatic", function() { return isStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObj", function() { return cloneObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeObj", function() { return codeObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit", function() { return getUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureFreqSourcesObj", function() { return captureFreqSourcesObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freqToCaptureTime", function() { return freqToCaptureTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit1", function() { return getUnit1; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function translateTree(data) {
  //通过t_pid来组树结构
  var array = [];

  var insert = function insert(children, parents) {
    parents.forEach(function (parent) {
      children.forEach(function (child, index) {
        if (child.t_pid == parent.t_id) {
          var temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          insert(temp, [child]);
          typeof parent.children !== 'undefined' ? parent.children.push(child) : parent.children = [child];
        }
      });
    });
  };
  /* 含有顶级组织的排序有顶级组织的权限 */


  var parents = data.filter(function (item) {
    return !parseInt(item.t_pid);
  });
  var children = data.filter(function (item) {
    return item.t_pid;
  });
  insert(children, parents);
  array.push.apply(array, _toConsumableArray(parents));
  return array;
} //处理sessionstorage超出限制的问题

function addSessionStorage(key, storeObj) {
  //定义一个前缀，表示只删除自己定义的缓存
  var cachePrefix = 'SERVICE_QR_'; // sessionStorage对大小是有限制的，所以要进行try catch
  // 500KB左右的东西保存起来就会令到Resources变卡
  // 2M左右就可以令到Resources卡死，操作不了
  // 5M就到了Chrome的极限
  // 超过之后会抛出如下异常：
  // DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'basket-http://file.com/ykq/wap/v3Templates/timeout/timeout/large.js' exceeded the quota

  try {
    sessionStorage.setItem(cachePrefix + key, JSON.stringify(storeObj));
  } catch (e) {
    // sessionStorage容量不够，根据保存的时间删除已缓存到 sessionStorage
    if (e.name.toUpperCase().indexOf('QUOTA') >= 0) {
      var item;
      var tempArr = []; // 先把所有的缓存对象来出来，放到 tempArr 里

      for (item in sessionStorage) {
        if (item.indexOf(cachePrefix) === 0) {
          tempArr.push(JSON.parse(sessionStorage[item]));
        }
      } // 如果有缓存对象


      if (tempArr.length) {
        // 按缓存时间升序排列数组
        tempArr.sort(function (a, b) {
          return a.stamp - b.stamp;
        }); // 删除缓存时间最早的

        sessionStorage.removeItem(tempArr[0].key); // 删除后在再添加，利用递归完成

        addSessionStorage(key, storeObj);
      }
    }
  }
}
function find_key(value, valueArr, keyArr) {
  //h-下拉框选key的方法
  if (valueArr.indexOf(value) != -1) {
    return keyArr[valueArr.indexOf(value)];
  }

  console.log('下拉框取key失败，返回undefined');
  return;
}
function getRowInfoByIndex(index, data, hot) {
  //获取hdtable,行真实信息的方法
  var physicalRow = hot.toPhysicalRow(index);
  var info = data[physicalRow];
  return info;
}
/*
 修改下拉选项前判断幅值
 @param valueSource下拉选项的值列表
 @param valueSource_key下拉选项的key列表
 @param change_newVal下拉选项更改后的值
 @param change_index更改的行号
 * */

function setChangeCellResult(valueSource, valueSource_key, change_newVal, change_index) {
  var valueArr = valueSource;
  var keyArr = valueSource_key;
  var index = valueArr.indexOf(change_newVal);

  if (index == -1) {
    swal({
      title: "提示",
      text: "\u7B2C".concat(change_index + 1, "\u884C\u4E0D\u5B58\u5728\u8BE5\u9009\u9879!"),
      button: "确认"
    });
    return false;
  } else {
    return keyArr[index];
  }
}
function addRows(hot, data, row) {
  if (row == -1) {
    //通过点击新建按钮进入的方法，默认在最后一行添加
    row = 0;
  }

  hot.alter('insert_row', row);
}
/**
 * 四舍五入
 * 返回数值
 */

function m_formate(value, num) {
  if (value == null) {
    return "无数据";
  } else if (typeof value === 'number') {
    var t_value = Math.abs(value);

    if (t_value >= Math.pow(10, 8) || t_value <= -Math.pow(10, 8)) {
      //超出8位用科学计数法表示
      return "无数据";
    }

    if (num == 255) {
      //num=255，采用默认规则保留有效位
      if (value == 0) {
        //直接返回0值
        return 0;
      } else if (value >= 1000) {
        //保留整数
        num = 0;
      } else if (value >= 10) {
        //保留1位小数
        num = 1;
      } else {
        //保留3个有效数字
        num = 0;
        t_value = value;

        while (Math.abs(t_value) < 1) {
          t_value *= 10;
          num++;
        }

        num += 2;
      }
    }

    var len_value = Math.pow(10, num);
    return Math.round(value * len_value) / len_value;
  } else {
    return value;
  }
}
/**
 * 对象根据值进行排序名称
 * */

function compareName(property) {
  return function (a, b) {
    var nameA = a[property].toUpperCase(); // ignore upper and lowercase

    var nameB = b[property].toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };
} // 判断数据是否为原始类型

function isStatic(val) {
  return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean' || typeof val === 'undefined' || val === null;
} // 深度复制对象

function cloneObj(val, deep) {
  if (isStatic(val)) return val;

  if (Array.isArray(val)) {
    return val.map(function (item) {
      return deep ? cloneObj(item, deep) : item;
    });
  } else if (_typeof(val) === 'object') {
    var wType = ['Error', 'Date', 'RegExp'];
    var type = Object.prototype.toString.call(val).slice(8, -1);
    if (wType.includes(type)) return new window[type](val);
    var tag = {};

    for (var key in val) {
      tag[key] = deep ? cloneObj(val[key], deep) : val[key];
    }

    return tag;
  }
} // 数组去重方法

function distinct(a, b) {
  var arr = a.concat(b);
  var result = [];
  var obj = {};

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;

      if (!obj[i]) {
        result.push(i);
        obj[i] = 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
} // 特征值表

function codeObj(t_root, dgmType) {
  /* 测点类型对应特征值 */
  var railPosType = [3, 4, 8, 9, 15, 16];
  var code = {};

  if (dgmType == 10) {
    /* WL9100采集器 */
    code = {
      2: [
      /* 过程量 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'value',
        name: '过程量值',
        code: 8000,
        check: true
      }
      /* 过程量值 */
      ],
      3: [
      /* 振动 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'vib_rms',
        name: '加速度有效值',
        code: 57006,
        check: true
      },
      /* 加速度有效值 */
      {
        filed: 'vib_rms1',
        name: '速度有效值',
        code: 57007,
        check: true
      },
      /* 速度有效值 */
      {
        filed: 'vib_rms2',
        name: '位移有效值',
        code: 57008,
        check: true
      },
      /* 位移有效值 */
      {
        filed: 'vib_k',
        name: '峭度',
        code: 57009,
        check: true
      },
      /* 峭度 */
      {
        filed: 'sv',
        name: '包络',
        code: 57010,
        check: true
      }
      /* 包络 */
      ]
    };
  } else {
    code = {
      1: [
      /* 转速 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed_value',
        name: '测点转速值',
        code: 16000,
        check: true
      },
      /* 转速测点转速值 */
      {
        filed: 'speed_dc',
        name: '转速直流量',
        code: 28000,
        check: false
      }
      /* 转速直流量 */
      ],
      2: [
      /* 过程量 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'value',
        name: '过程量值',
        code: 8000,
        check: true
      }
      /* 过程量值 */
      ],
      3: [
      /* 振动 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'vib_rms',
        name: '有效值',
        code: 2000,
        check: true
      },
      /* 振动有效值 */
      {
        filed: 'vib_p',
        name: '峰值',
        code: 3000,
        check: true
      },
      /* 振动峰值 */
      {
        filed: 'vib_pp',
        name: '峰峰值',
        code: 4000,
        check: true
      },
      /* 振动峰峰值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'vib_pf',
        name: '峰值因数',
        code: 15000,
        check: true
      },
      /* 峰值因数=振动峰值/振动有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'vib_k',
        name: '峭度',
        code: 24000,
        check: true
      },
      /* 峭度 */
      {
        filed: 'vib_cf',
        name: '裕度',
        code: 25000,
        check: true
      },
      /* 裕度 */
      {
        filed: 'vib_sf',
        name: '歪度',
        code: 26000,
        check: true
      },
      /* 歪度 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'vib_rms1',
        name: '1x幅值',
        code: 53000,
        check: false
      },
      /* 1x幅值 */
      {
        filed: 'vib_rms2',
        name: '1x相位',
        code: 54000,
        check: false
      },
      /* 1x相位 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }],
      4: [
      /* 包络 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'spm_rms',
        name: '包络解调值',
        code: 5000,
        check: true
      },
      /* 包络解调值 */
      {
        filed: 'spm_pp',
        name: '包络特征值',
        code: 6000,
        check: true
      },
      /* 包络特征值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'sv0',
        name: '1x幅值',
        code: 55000,
        check: false
      },
      /* 1x幅值 */
      {
        filed: 'sv1',
        name: '1x相位',
        code: 56000,
        check: false
      },
      /* 1x相位 */
      {
        filed: 'sv0',
        name: '保持架对外环',
        code: 52001,
        check: false
      },
      /* 保持架对外环频率 */
      {
        filed: 'sv1',
        name: '保持架对内环',
        code: 52002,
        check: false
      },
      /* 保持架对内环频率 */
      {
        filed: 'sv2',
        name: '外环内滚道',
        code: 52003,
        check: false
      },
      /* 外环内滚道频率 */
      {
        filed: 'sv3',
        name: '内环外滚道',
        code: 52004,
        check: false
      },
      /* 内环外滚道频率 */
      {
        filed: 'sv4',
        name: '滚单',
        code: 52005,
        check: false
      },
      /* 滚单频率 */
      {
        filed: 'sv5',
        name: '滚双',
        code: 52006,
        check: false
      },
      /* 滚双频率 */
      {
        filed: 'sv6',
        name: '踏面',
        code: 52007,
        check: false
      },
      /* 踏面频率 */
      {
        filed: 'sv7',
        name: '邻轴齿轮',
        code: 52008,
        check: false
      },
      /* 邻轴齿轮频率 */
      {
        filed: 'sv8',
        name: '本轴齿轮',
        code: 52009,
        check: false
      },
      /* 本轴齿轮频率 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }],
      5: [
      /* 数字量 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'digital_value',
        name: '数字量值',
        code: 7000,
        check: true
      }
      /* 数字量值 */
      ],
      6: [
      /* 晃度 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'rock_rms',
        name: '有效值',
        code: 9000,
        check: true
      },
      /* 晃度有效值 */
      {
        filed: 'rock_p',
        name: '峰值',
        code: 10000,
        check: true
      },
      /* 晃度峰值 */
      {
        filed: 'rock_pp',
        name: '峰峰值',
        code: 11000,
        check: true
      },
      /* 晃度峰峰值 */
      {
        filed: 'rock_s',
        name: '位移',
        code: 29000,
        check: true
      },
      /* 晃度位移 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }],
      7: [
      /* 温度 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'value',
        name: '温度值',
        code: 23000,
        check: true
      }
      /* 温度值 */
      ],
      8: [
      /* 振动阶次 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'vib_rms',
        name: '有效值',
        code: 2000,
        check: true
      },
      /* 振动有效值 */
      {
        filed: 'vib_p',
        name: '峰值',
        code: 3000,
        check: true
      },
      /* 振动峰值 */
      {
        filed: 'vib_pp',
        name: '峰峰值',
        code: 4000,
        check: true
      },
      /* 振动峰峰值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'vib_pf',
        name: '峰值因数',
        code: 15000,
        check: true
      },
      /* 峰值因数=振动峰值/振动有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'vib_k',
        name: '峭度',
        code: 24000,
        check: true
      },
      /* 峭度 */
      {
        filed: 'vib_cf',
        name: '裕度',
        code: 25000,
        check: true
      },
      /* 裕度 */
      {
        filed: 'vib_sf',
        name: '歪度',
        code: 26000,
        check: true
      },
      /* 歪度 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }],
      9: [
      /* 包络阶次 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'spm_rms',
        name: '包络解调值',
        code: 5000,
        check: true
      },
      /* 包络有效值 */
      {
        filed: 'spm_pp',
        name: '包络特征值',
        code: 6000,
        check: true
      },
      /* 包络峰峰值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }, {
        filed: 'sv0',
        name: '保持架对外环',
        code: 52001,
        check: false
      },
      /* 保持架对外环频率 */
      {
        filed: 'sv1',
        name: '保持架对内环',
        code: 52002,
        check: false
      },
      /* 保持架对内环频率 */
      {
        filed: 'sv2',
        name: '外环内滚道',
        code: 52003,
        check: false
      },
      /* 外环内滚道频率 */
      {
        filed: 'sv3',
        name: '内环外滚道',
        code: 52004,
        check: false
      },
      /* 内环外滚道频率 */
      {
        filed: 'sv4',
        name: '滚单',
        code: 52005,
        check: false
      },
      /* 滚单频率 */
      {
        filed: 'sv5',
        name: '滚双',
        code: 52006,
        check: false
      },
      /* 滚双频率 */
      {
        filed: 'sv6',
        name: '踏面',
        code: 52007,
        check: false
      },
      /* 踏面频率 */
      {
        filed: 'sv7',
        name: '邻轴齿轮',
        code: 52008,
        check: false
      },
      /* 邻轴齿轮频率 */
      {
        filed: 'sv8',
        name: '本轴齿轮',
        code: 52009,
        check: false
      }
      /* 本轴齿轮频率 */
      ],
      10: [
      /* 工艺量 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'value',
        name: '工艺量',
        code: 27000,
        check: true
      }
      /* 工艺量 */
      ],
      11: [
      /* 倾覆 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'overturn_rms',
        name: '有效值',
        code: 20000,
        check: true
      },
      /* 倾覆值 */
      {
        filed: 'overturn_p',
        name: '峰值',
        code: 30000,
        check: true
      },
      /* 倾覆峰值 */
      {
        filed: 'overturn_pp',
        name: '峰峰值',
        code: 31000,
        check: true
      },
      /* 倾覆峰峰值 */
      {
        filed: 'overturn_s',
        name: '位移',
        code: 32000,
        check: true
      },
      /* 倾覆位移值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }],
      12: [
      /* 倾角 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'rock_rms',
        name: '有效值',
        code: 33000,
        check: true
      },
      /* 倾角有效值 */
      {
        filed: 'rock_p',
        name: '峰值',
        code: 34000,
        check: true
      },
      /* 倾角峰值 */
      {
        filed: 'rock_pp',
        name: '峰峰值',
        code: 35000,
        check: true
      },
      /* 倾角峰峰值 */
      {
        filed: 'rock_avg',
        name: '平均值',
        code: 36000,
        check: true
      },
      /* 倾角平均值 */
      {
        filed: 'rock_s',
        name: '位移',
        code: 47000,
        check: true
      },
      /* 倾角位移值 */
      {
        filed: 'temperature',
        name: '温度值',
        code: 51000,
        check: true
      },
      /* 温度值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }],
      13: [
      /* 合成倾角 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'overturn_rms',
        name: '有效值',
        code: 37000,
        check: true
      },
      /* 合成倾角有效值 */
      {
        filed: 'overturn_p',
        name: '峰值',
        code: 38000,
        check: true
      },
      /* 合成倾角峰值 */
      {
        filed: 'overturn_pp',
        name: '峰峰值',
        code: 39000,
        check: true
      },
      /* 合成倾角峰峰值 */
      {
        filed: 'rock_avg',
        name: ['平均值', '沉降角度'],
        code: 40000,
        check: true
      },
      /* 合成倾角平均值/沉降角度 */
      {
        filed: 'rock_pp',
        name: '沉降量',
        code: 43000,
        check: true
      },
      /* （合成）沉降量 */
      {
        filed: 'rock_rms',
        name: '平均值方位',
        code: 41000,
        check: true
      },
      /* （合成）平均值相位 */
      {
        filed: 'rock_p',
        name: '峰值方位',
        code: 42000,
        check: true
      },
      /* （合成）峰值相位 */
      {
        filed: 'overturn_s',
        name: '位移',
        code: 48000,
        check: true
      },
      /* （合成）倾角位移值 */
      {
        filed: 'temperature',
        name: '温度值',
        code: 51000,
        check: true
      },
      /* 温度值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }],
      14: [
      /* 螺栓 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed_value',
        name: '预紧力值',
        code: 44000,
        check: true
      },
      /* 预紧力值 */
      {
        filed: 'speed_dc',
        name: '温度值',
        code: 45000,
        check: true
      }
      /* 温度值 */
      ],
      15: [
      /* 冲击 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'spm_rms',
        name: '包络解调值',
        code: 5000,
        check: true
      },
      /* 包络解调值 */
      {
        filed: 'spm_pp',
        name: '包络特征值',
        code: 6000,
        check: true
      },
      /* 包络特征值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      // {filed: 'sv0', name: '1x幅值', code: 55000, check: false}, /* 1x幅值 */
      // {filed: 'sv1', name: '1x相位', code: 56000, check: false}, /* 1x相位 */
      {
        filed: 'sv0',
        name: '保持架对外环',
        code: 52001,
        check: false
      },
      /* 保持架对外环频率 */
      {
        filed: 'sv1',
        name: '保持架对内环',
        code: 52002,
        check: false
      },
      /* 保持架对内环频率 */
      {
        filed: 'sv2',
        name: '外环内滚道',
        code: 52003,
        check: false
      },
      /* 外环内滚道频率 */
      {
        filed: 'sv3',
        name: '内环外滚道',
        code: 52004,
        check: false
      },
      /* 内环外滚道频率 */
      {
        filed: 'sv4',
        name: '滚单',
        code: 52005,
        check: false
      },
      /* 滚单频率 */
      {
        filed: 'sv5',
        name: '滚双',
        code: 52006,
        check: false
      },
      /* 滚双频率 */
      {
        filed: 'sv6',
        name: '踏面',
        code: 52007,
        check: false
      },
      /* 踏面频率 */
      {
        filed: 'sv7',
        name: '邻轴齿轮',
        code: 52008,
        check: false
      },
      /* 邻轴齿轮频率 */
      {
        filed: 'sv8',
        name: '本轴齿轮',
        code: 52009,
        check: false
      },
      /* 本轴齿轮频率 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }],
      16: [
      /* 冲击阶次 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'spm_rms',
        name: '包络解调值',
        code: 5000,
        check: true
      },
      /* 包络有效值 */
      {
        filed: 'spm_pp',
        name: '包络特征值',
        code: 6000,
        check: true
      },
      /* 包络峰峰值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }, {
        filed: 'sv0',
        name: '保持架对外环',
        code: 52001,
        check: false
      },
      /* 保持架对外环频率 */
      {
        filed: 'sv1',
        name: '保持架对内环',
        code: 52002,
        check: false
      },
      /* 保持架对内环频率 */
      {
        filed: 'sv2',
        name: '外环内滚道',
        code: 52003,
        check: false
      },
      /* 外环内滚道频率 */
      {
        filed: 'sv3',
        name: '内环外滚道',
        code: 52004,
        check: false
      },
      /* 内环外滚道频率 */
      {
        filed: 'sv4',
        name: '滚单',
        code: 52005,
        check: false
      },
      /* 滚单频率 */
      {
        filed: 'sv5',
        name: '滚双',
        code: 52006,
        check: false
      },
      /* 滚双频率 */
      {
        filed: 'sv6',
        name: '踏面',
        code: 52007,
        check: false
      },
      /* /踏面频率 */
      {
        filed: 'sv7',
        name: '邻轴齿轮',
        code: 52008,
        check: false
      },
      /* 邻轴齿轮频率 */
      {
        filed: 'sv8',
        name: '本轴齿轮',
        code: 52009,
        check: false
      }
      /* 本轴齿轮频率 */
      ],
      17: [
      /* 轨道波磨 */
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'vib_rms',
        name: '有效值',
        code: 2000,
        check: true
      },
      /* 振动有效值 */
      {
        filed: 'vib_p',
        name: '峰值',
        code: 3000,
        check: true
      },
      /* 振动峰值 */
      {
        filed: 'vib_pp',
        name: '峰峰值',
        code: 4000,
        check: true
      },
      /* 振动峰峰值 */
      {
        filed: 'vib_pf',
        name: '峰值因数',
        code: 15000,
        check: true
      },
      /* 峰值因数=振动峰值/振动有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'vib_k',
        name: '峭度',
        code: 24000,
        check: true
      },
      /* 峭度 */
      {
        filed: 'vib_cf',
        name: '裕度',
        code: 25000,
        check: true
      },
      /* 裕度 */
      {
        filed: 'vib_sf',
        name: '歪度',
        code: 26000,
        check: true
      },
      /* 歪度 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: "from_sta",
        name: "上一站编号",
        code: 57002,
        check: true
      }, {
        filed: "to_sta",
        name: "下一站编号",
        code: 57003,
        check: true
      }, {
        filed: "from_distance",
        name: "上一站距离",
        code: 57004,
        check: true
      }, {
        filed: "to_distance",
        name: "下一站距离",
        code: 57005,
        check: true
      }],
      18: [//脱轨检测测点
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'speed',
        name: '转速',
        code: 1000,
        check: true
      },
      /* 转速（振动和包络字段） */
      {
        filed: 'vib_rms',
        name: '有效值',
        code: 2000,
        check: true
      },
      /* 振动有效值 */
      {
        filed: 'vib_p',
        name: '峰值',
        code: 3000,
        check: true
      },
      /* 振动峰值 */
      {
        filed: 'vib_pp',
        name: '峰峰值',
        code: 4000,
        check: true
      },
      /* 振动峰峰值 */
      {
        filed: 'pow_rms',
        name: '能量有效值',
        code: 19000,
        check: true
      },
      /* 能量有效值 */
      {
        filed: 'vib_pf',
        name: '峰值因数',
        code: 15000,
        check: true
      },
      /* 峰值因数=振动峰值/振动有效值 */
      {
        filed: 'gap',
        name: '偏置电压',
        code: 14000,
        check: true
      },
      /* 偏置电压 */
      {
        filed: 'vib_k',
        name: '峭度',
        code: 24000,
        check: true
      },
      /* 峭度 */
      {
        filed: 'vib_cf',
        name: '裕度',
        code: 25000,
        check: true
      },
      /* 裕度 */
      {
        filed: 'vib_sf',
        name: '歪度',
        code: 26000,
        check: true
      },
      /* 歪度 */
      {
        filed: 'sv',
        name: '冲击值',
        code: 46000,
        check: true
      },
      /* 冲击值 */
      {
        filed: 'vib_rms1',
        name: '1x幅值',
        code: 53000,
        check: false
      },
      /* 1x幅值 */
      {
        filed: 'vib_rms2',
        name: '1x相位',
        code: 54000,
        check: false
      },
      /* 1x相位 */
      {
        filed: 'vib_vsx1',
        name: '频段1-1',
        code: 12001,
        check: false
      },
      /* 可选频段频谱幅值可选频段n */
      {
        filed: 'vib_vsx1_scale',
        name: '频段1-2',
        code: 13001,
        check: false
      },
      /* 可选频段频谱幅值最大值与频谱幅值的比值可选频段n */
      {
        filed: 'vib_vsx2',
        name: '频段2-1',
        code: 12002,
        check: false
      }, {
        filed: 'vib_vsx2_scale',
        name: '频段2-2',
        code: 13002,
        check: false
      }, {
        filed: 'vib_vsx3',
        name: '频段3-1',
        code: 12003,
        check: false
      }, {
        filed: 'vib_vsx3_scale',
        name: '频段3-2',
        code: 13003,
        check: false
      }, {
        filed: 'vib_vsx4',
        name: '频段4-1',
        code: 12004,
        check: false
      }, {
        filed: 'vib_vsx4_scale',
        name: '频段4-2',
        code: 13004,
        check: false
      }, {
        filed: 'vib_vsx5',
        name: '频段5-1',
        code: 12005,
        check: false
      }, {
        filed: 'vib_vsx5_scale',
        name: '频段5-2',
        code: 13005,
        check: false
      }, {
        filed: 'vib_vsx6',
        name: '频段6-1',
        code: 12006,
        check: false
      }, {
        filed: 'vib_vsx6_scale',
        name: '频段6-2',
        code: 13006,
        check: false
      }, {
        filed: 'vib_vsx7',
        name: '频段7-1',
        code: 12007,
        check: false
      }, {
        filed: 'vib_vsx7_scale',
        name: '频段7-2',
        code: 13007,
        check: false
      }, {
        filed: 'vib_vsx8',
        name: '频段8-1',
        code: 12008,
        check: false
      }, {
        filed: 'vib_vsx8_scale',
        name: '频段8-2',
        code: 13008,
        check: false
      }],
      201: [//智子测点
      {
        filed: 'saveTime_Com',
        name: '时间',
        code: 0,
        check: true
      }, {
        filed: 'value',
        name: '智子值',
        code: 58000,
        check: true
      }
      /* 智子值用来做故障预测 */
      ]
    };
  }

  if (t_root == 2) {
    //tms的测点需要加上温度/温升特征值
    var objTemp1 = {
      filed: 'temperature',
      name: '温度',
      code: 57000,
      check: true
    };
    var objTemp2 = {
      filed: 'temperature_rise',
      name: '温升',
      code: 57001,
      check: true
    };

    for (var key in code) {
      key = Number(key);

      if (railPosType.includes(key)) {
        code[key].push(objTemp1, objTemp2);
      }
    }
  }

  if (dgmType != 1) {
    //只有2000v1采集器的包络测点才有1x相位和1x幅值这2种特征值
    var arr = code[4];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].code === 55000) {
        //code==55000/code===56000
        arr.splice(i, 2);
      }
    }
  }

  return code;
} // 保留小数

function round(num) {
  var dig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 255;
  var val = Math.abs(num);

  if (val >= Math.pow(10, 8) || val <= Math.pow(10, -8) || val === 0) {
    return num;
  }

  if (dig === 255) {
    dig = 0;
    var value = val;

    while (value < 1) {
      value *= 10;
      dig++;
    }

    dig += 2;
    val >= 1000 && (dig = 0);
    val >= 10 && (dig = 1);
  }

  var len = Math.pow(10, dig);
  return Math.round(num * len) / len;
} // 处理时间格式

function getTime(date) {
  var time = new Date(date);
  var YY = time.getFullYear();
  var MM = time.getMonth() + 1;
  MM < 10 && (MM = '0' + MM);
  var DD = time.getDate();
  DD < 10 && (DD = '0' + DD);
  var hh = time.getHours();
  hh < 10 && (hh = '0' + hh);
  var mm = time.getMinutes();
  mm < 10 && (mm = '0' + mm);
  var ss = time.getSeconds();
  if (date === 1578647264789) console.log(ss);
  ss < 10 && (ss = '0' + ss);
  return "".concat(YY, "-").concat(MM, "-").concat(DD, "  ").concat(hh, ":").concat(mm, ":").concat(ss);
}
/**
 * @desc 函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param func 需要执行的函数
 * @param wait 延迟执行时间（毫秒）
 * @param immediate---true 表立即执行，false 表非立即执行
 **/

/**
 * 函数防抖
 */

function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  var delay = delay || 200;
  return function () {
    var args = arguments;
    var that = this; // 清除上一次延时器

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
/**
 * 函数节流
 */

function throttle(fn, delay) {
  var lastTime;
  var timer;
  var delay = delay || 200;
  return function () {
    var args = arguments; // 记录当前函数触发的时间

    var nowTime = Date.now();

    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // 记录上一次函数触发的时间
        lastTime = nowTime; // 修正this指向问题

        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
}
/**
 * 默认特征值列表
 */

var defaultCode = {
  /* 趋势图默认code */
  1: {
    filed: "speed_value",
    name: "测点转速值",
    code: 16000
  }
  /* 转速测点转速值 */
  ,
  2: {
    filed: "value",
    name: "过程量值",
    code: 8000
  }
  /* 过程量值 */
  ,
  3: {
    filed: "vib_rms",
    name: "有效值",
    code: 2000
  }
  /* 振动有效值 */
  ,
  4: {
    filed: "spm_rms",
    name: "包络解调值",
    code: 5000
  }
  /* 包络解调值 */
  ,
  5: {
    filed: "digital_value",
    name: "数字量值",
    code: 7000
  }
  /* 数字量值 */
  ,
  6: {
    filed: "rock_rms",
    name: "有效值",
    code: 9000
  }
  /* 晃度有效值 */
  ,
  7: {
    filed: "value",
    name: "温度值",
    code: 23000
  }
  /* 温度值 */
  ,
  8: {
    filed: "vib_rms",
    name: "有效值",
    code: 2000
  }
  /* 振动有效值 */
  ,
  9: {
    filed: "spm_rms",
    name: "包络解调值",
    code: 5000
  }
  /* 包络有效值 */
  ,
  10: {
    filed: "value",
    name: "工艺量",
    code: 27000
  }
  /* 工艺量 */
  ,
  11: {
    filed: "overturn_rms",
    name: "有效值",
    code: 20000
  }
  /* 倾覆值 */
  ,
  12: {
    filed: "rock_rms",
    name: "有效值",
    code: 33000
  }
  /* 倾角有效值 */
  ,
  13: {
    filed: "overturn_rms",
    name: "有效值",
    code: 37000
  }
  /* 合成倾角有效值 */
  ,
  14: {
    filed: "speed_value",
    name: "预紧力值",
    code: 44000
  }
  /* 预紧力值 */
  ,
  15: {
    filed: "spm_rms",
    name: "包络解调值",
    code: 5000
  }
  /* 冲击测点 */
  ,
  16: {
    filed: "spm_rms",
    name: "包络解调值",
    code: 5000
  }
  /* 包络有效值 */
  ,
  17: {
    filed: "vib_rms",
    name: "有效值",
    code: 2000
  }
  /* 轨道波磨测点 */
  ,
  200: {
    filed: "vib_rms",
    name: "有效值",
    code: 2000
  }
  /* 长采样有效值 */

};
/**
 * 单位处理
 * **/

function getUnit(code, pos) {
  var tempUnit = pos.t_unitName; // cmc的倾覆、晃度、倾角、合成倾角的"位移"单位都改成“mm”

  switch (code) {
    case -1:
      return;

    case 0:
      return "t(s)";

    case 1000:
      return "rpm";

    case 14000:
      return "V";

    case 15000:
      return "";

    case 16000:
      return "rpm";

    case 17000:
    case 18000:
      return "";

    case 24000:
    case 25000:
    case 26000:
      return "";
    // case 20000:

    case 30000:
    case 31000:
      return "g";

    case 21000:
      return "m/s";

    case 22000:
      return "W";

    case 28000:
      return "V";

    case 29000:
    case 32000:
      return "mm";

    case 33000:
    case 34000:
    case 35000:
    case 36000:
    case 37000:
    case 38000:
    case 39000:
    case 40000:
      return "°";

    case 41000:
    case 42000:
      return "∠°";

    case 43000:
      return "mm";

    case 47000:
    case 48000:
      return "mm";

    case 45000:
    case 51000:
      return "℃";

    case 52000:
      return "dB";

    case 54000:
    case 56000:
      return "°";

    case 46000:
      //冲击值
      return "dB";

    case 57000:
      if (tempUnit) {
        //温度的单位根据设置的单位进行变化
        return tempUnit;
      } else {
        return "℃";
      }

    case 57001:
      //温升
      return "k";

    /*站点信息没有单位*/

    case 57002:
    case 57003:
    case 57004:
    case 57005:
      return "";

    case 57006:
      //加速度有效值
      return "m/s²";

    case 57007:
      //速度有效值
      return "mm/s";

    case 57008:
      //位移有效值
      return "μm";

    case 57009:
      //峭度
      return "";

    case 57010:
      //包络
      return "gD";

    default:
      if (code >= 12000 && code < 14000) {
        return "g";
      }

  }

  var type = pos.position_type;

  if (type === 4 || type === 9) {
    return "gD";
  }

  if (type === 12 || type === 13) {
    return "°";
  } // 倾覆


  if (type === 11) {
    return getUnit(defaultCode[pos.ch_type].code);
  }

  var unitName = "";

  if (pos.unitName) {
    unitName = pos.unitName[0]; //默认取第一个

    if (unitName == "m/s?") {
      unitName = "m/s²";
    }

    if (code === 2000 || code === 9000 || code === 20000) {
      //振动、振动阶次、晃度、倾覆、轨道波磨测点的有效值需要计算积分后的单位
      unitName = getUnit1(pos.byIntegral, unitName);
    }

    return unitName;
  } else {
    return "";
  }
}
/**
 * 长采样分析频率下拉列表
 * **/

var captureFreqSourcesObj = {
  "0": "500Hz",
  "1": "1000Hz",
  "2": "2000Hz",
  "3": "4000Hz",
  "4": "8000Hz",
  "5": "16000Hz",
  "6": "32000Hz",
  "7": "12800Hz"
}; //分析频率

/**
 * @freqToCaptureTime
 * param@capture_freq=分析频率
 *返回采样时间列表
 * **/

function freqToCaptureTime(capture_freq) {
  var captureTimeSource = {};

  switch (parseInt(capture_freq)) {
    case 7:
      // captureTimeSource={"0":"2秒","1":"4秒","2":"8秒","3":"16秒","4":"32秒","5":"64秒","6":"128秒","7":"256秒"};
      captureTimeSource = {
        "2秒": "0",
        "4秒": "1",
        "8秒": "2",
        "16秒": "3",
        "32秒": "4",
        "64秒": "5",
        "128秒": "6",
        "256秒": "7"
      };
      break;

    case 0:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒","3":"409.6秒","4":"819.2秒","5":"1638.4秒","6":"3276.8秒","7":"6553.6秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2",
        "409.6秒": "3",
        "819.2秒": "4",
        "1638.4秒": "5",
        "3276.8秒": "6",
        "6553.6秒": "7"
      };
      break;

    case 1:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒","3":"409.6秒","4":"819.2秒","5":"1638.4秒","6":"3276.8秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2",
        "409.6秒": "3",
        "819.2秒": "4",
        "1638.4秒": "5",
        "3276.8秒": "6"
      };
      break;

    case 2:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒","3":"409.6秒","4":"819.2秒","5":"1638.4秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2",
        "409.6秒": "3",
        "819.2秒": "4",
        "1638.4秒": "5"
      };
      break;

    case 3:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒","3":"409.6秒","4":"819.2秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2",
        "409.6秒": "3",
        "819.2秒": "4"
      };
      break;

    case 4:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒","3":"409.6秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2",
        "409.6秒": "3"
      };
      break;

    case 5:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒","2":"204.8秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1",
        "204.8秒": "2"
      };
      break;

    case 6:
      // captureTimeSource={"8":"2.56秒","11":"5.12秒","9":"12.8秒","10":"25.6秒","0":"51.2秒","1":"102.4秒"};
      captureTimeSource = {
        "2.56秒": "8",
        "5.12秒": "11",
        "12.8秒": "9",
        "25.6秒": "10",
        "51.2秒": "0",
        "102.4秒": "1"
      };
      break;
  }

  return captureTimeSource;
}
/**
 * @getUnit1 计算积分后的单位
 * param@byIntergal=积分设置：0不积分，1一次积分，2二次积分；unit:传感器单位
 *返回采样时间列表
 * **/

function getUnit1(byIntergal, unit) {
  //构造积分后单位
  if (unit == "§") {
    unit = "gD";
  } else if (unit == "m/s?") {
    unit = "m/s²";
  }

  var unit1 = unit;

  switch (unit) {
    case "μm":
      //位移
      break;

    case "mm/s":
      //速度
      if (byIntergal == 1) {
        unit1 = "μm";
      }

      break;

    case "m/s²":
      //加速度且不积分
      break;

    case "g":
      //加速度
      if (byIntergal == 2) {
        unit1 = "μm";
      } else if (byIntergal == 1) {
        unit1 = "mm/s";
      }

      break;
  }

  return unit1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ })

}]);
//# sourceMappingURL=2-2df6fc6b.js.map