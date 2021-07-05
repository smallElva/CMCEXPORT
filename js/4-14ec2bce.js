(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/content/system/dgm/table/js/dgm_methods.js":
/*!*******************************************************************!*\
  !*** ./src/components/content/system/dgm/table/js/dgm_methods.js ***!
  \*******************************************************************/
/*! exports provided: dgmSnycState, sensorType, sensorTypeSource, integral, mode, posClassToPosLoc, posSidePosLoc, getPosLoc, findKey, unitToSources, destToDatabit, dgmBtn_name, dgmChType_name, rangeType_name, compareId, getChNum, getVibChNum, getTempChNum, getVibSignalZoom, compute_frequency_spectral, timeFor, unformatTimes, addRows, reRenderSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dgmSnycState", function() { return dgmSnycState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorType", function() { return sensorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorTypeSource", function() { return sensorTypeSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integral", function() { return integral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mode", function() { return mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posClassToPosLoc", function() { return posClassToPosLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posSidePosLoc", function() { return posSidePosLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosLoc", function() { return getPosLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitToSources", function() { return unitToSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destToDatabit", function() { return destToDatabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dgmBtn_name", function() { return dgmBtn_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dgmChType_name", function() { return dgmChType_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeType_name", function() { return rangeType_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareId", function() { return compareId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChNum", function() { return getChNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVibChNum", function() { return getVibChNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTempChNum", function() { return getTempChNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVibSignalZoom", function() { return getVibSignalZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_frequency_spectral", function() { return compute_frequency_spectral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFor", function() { return timeFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unformatTimes", function() { return unformatTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRows", function() { return addRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reRenderSelectOption", function() { return reRenderSelectOption; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 同步状态 @dgmSnycState
 * 值与信息的转化
 * param@val=从后台获取的值
 *
 * **/
function dgmSnycState(val) {
  var modeVal = "";

  if (Number(val) === 0) {
    modeVal = "已同步";
  } else if (val == "") {
    modeVal = "";
  } else {
    modeVal = "未同步";
  }

  return modeVal;
}
/**
  * 传感器类型 @sensorType
  * 值与信息的转化
  * param@val=从后台获取的值
  *
  * **/

function sensorType(val) {
  var sensorVal = "";
  var sensorUnit = "";

  switch (val + "") {
    case "0":
      sensorVal = "位移";
      sensorUnit = "mV/μm";
      break;

    case "1":
      sensorVal = "速度";
      sensorUnit = "mV/(mm/s)";
      break;

    case "2":
      sensorVal = "加速度";
      sensorUnit = "mV/g";
      break;

    case "3":
      sensorVal = "温度";
      sensorUnit = "℃";
      break;

    case "4":
      sensorVal = "电流";
      sensorUnit = "mA";
      break;

    case "5":
      sensorVal = "频率";
      sensorUnit = "Hz";
      break;

    case "6":
      sensorVal = "电压";
      sensorUnit = "V";
      break;

    case "13":
      sensorVal = "纵波";
      sensorUnit = "kN";
      break;

    case "14":
      sensorVal = "横波";
      sensorUnit = "kN";
      break;

    case "127":
      sensorVal = "其它";
      sensorUnit = "自定义";
      break;

    default:
      sensorVal = "";
      sensorUnit = "";
      break;
  }

  return [sensorVal, sensorUnit, val];
}
/**
 * 传感器类型下拉选项 @sensorTypeSource
 * 值与信息的转化
 * param@dgmType=采集器类型
 *
 * **/

function sensorTypeSource(dgmType, type) {
  var sensorSource = {};

  if (dgmType == 5) {
    //dgu2600
    sensorSource = {
      '13': '纵波',
      '14': '横波'
    };
  } else if (dgmType == 6) {
    //e821
    sensorSource = {
      '0': '位移',
      '1': '速度',
      '2': '加速度',
      '3': '温度',
      '4': '电流',
      '5': '频率',
      '127': '其它'
    };
  } else if (dgmType == 9) {
    //DGU2000E
    if (type == 2) {
      //振动设置
      sensorSource = {
        '0': '位移',
        '1': '速度',
        '2': '加速度'
      }; //传感器类型下拉选项
    } else {
      //过程量设置
      sensorSource = {
        '0': '位移',
        '1': '速度',
        '2': '加速度',
        '3': '温度',
        '4': '电流',
        '5': '频率',
        '6': '电压',
        '127': '其它'
      };
    }
  } else {
    sensorSource = {
      '0': '位移',
      '1': '速度',
      '2': '加速度'
    }; //传感器类型下拉选项
  }

  return sensorSource;
}
/**
  * 是否积分@integral
  * 值与信息的转化
  * param@val=从后台获取的值
  * param@type=采集器类型
  * **/

function integral(val) {
  var integralVal = "";

  switch (val + "") {
    case "0":
      integralVal = "不积分";
      break;

    case "1":
      integralVal = "一次积分";
      break;

    case "2":
      integralVal = "二次积分";
      break;

    default:
      integralVal = "不积分";
      break;
  }

  return integralVal;
}
/**
  *传输方式 @mode
  * 值与信息的转化
  *
  * param@val=从后台获取的值
  *
  * **/

function mode(val) {
  var modeVal = "";

  switch (val + "") {
    case "0":
      modeVal = "字符串方式";
      break;

    case "1":
      modeVal = "二进制方式";
      break;
  }

  return modeVal;
}
/**
 * 已知posClass求posLocSource @posClassToPosLoc
 * param@posClass=部件分类值,dgmType采集器类型，t_root组织类型
 *
 * **/

function posClassToPosLoc(posClass, dgmType, t_root) {
  var posLocSource = {};

  if (dgmType == 7) {
    //tmu2000
    posLocSource = {
      "255": '其它',
      '1': '1位',
      '2': '2位',
      '3': '3位',
      '4': '4位',
      '5': '5位',
      '6': '6位',
      '7': '7位',
      '8': '8位'
    };
    return posLocSource;
  } else {
    switch (posClass + "") {
      case "0":
        posLocSource = {
          "255": '其它'
        };
        break;

      case "1":
        posLocSource = {
          '0': '主轴承径向',
          '19': '主轴承1径向',
          '26': '主轴承1轴向',
          '20': '主轴承2径向',
          '27': '主轴承2轴向'
        };
        break;

      case "2":
        posLocSource = {
          '1': '输入轴轴承径向',
          '2': '内齿圈径向',
          '3': '低速轴轴承径向',
          '4': '低速轴轴承轴向',
          '5': '中间轴轴承径向',
          '6': '中间轴轴承轴向',
          '28': '高速轴前轴承径向',
          '7': '高速轴轴承径向',
          '8': '高速轴轴承轴向',
          '9': '一级行星内齿圈径向',
          '10': '二级行星内齿圈径向'
        };
        break;

      case "3":
        posLocSource = {
          '11': '传动端轴承径向水平',
          '12': '传动端轴承径向垂直',
          '29': '传动端轴承轴向',
          '13': '自由端轴承径向水平',
          '14': '自由端轴承径向垂直'
        };
        break;

      case "4":
        if (dgmType == 5) {
          posLocSource = {
            '31': '顶部法兰',
            '32': '底部法兰',
            '33': '基础环顶部法兰',
            '34': '基础环底部法兰',
            '35': '联接法兰1',
            '36': '联接法兰2',
            '37': '联接法兰3',
            '38': '联接法兰4'
          };
        } else {
          // 新增加的塔筒位置塔筒1x-5x
          posLocSource = {
            '15': '机舱X',
            '16': '机舱Y',
            '17': '塔顶X',
            '18': '塔顶Y',
            '24': '塔底X',
            '25': '塔底Y',
            '45': '塔筒1X',
            '46': '塔筒1Y',
            '47': '塔筒2X',
            '48': '塔筒2Y',
            '49': '塔筒3X',
            '50': '塔筒3Y',
            '51': '塔筒4X',
            '52': '塔筒4Y',
            '53': '塔筒5X',
            '54': '塔筒5Y'
          };
        }

        break;

      case "5":
        if (dgmType == 5) {
          posLocSource = {
            '39': '叶片1法兰1',
            '40': '叶片2法兰1',
            '41': '叶片3法兰1',
            '42': '叶片1法兰2',
            '43': '叶片2法兰2',
            '44': '叶片3法兰2'
          };
        } else {
          posLocSource = {
            '21': '叶片1',
            '22': '叶片2',
            '23': '叶片3',
            '30': '轮毂'
          };
        }

        break;
    }
  }

  return posLocSource;
}
/**
 * 塔筒的关联位置需要成对选择
 * **/

function posSidePosLoc(posLoc) {
  var posLocSource = {
    '15': '机舱X',
    '16': '机舱Y',
    '17': '塔顶X',
    '18': '塔顶Y',
    '24': '塔底X',
    '25': '塔底Y',
    '45': '塔筒1X',
    '46': '塔筒1Y',
    '47': '塔筒2X',
    '48': '塔筒2Y',
    '49': '塔筒3X',
    '50': '塔筒3Y',
    '51': '塔筒4X',
    '52': '塔筒4Y',
    '53': '塔筒5X',
    '54': '塔筒5Y'
  };

  switch (posLoc + "") {
    case "15":
      posLocSource = {
        '16': '机舱Y'
      };
      break;

    case "16":
      posLocSource = {
        '15': '机舱X'
      };
      break;

    case "17":
      posLocSource = {
        '18': '塔顶Y'
      };
      break;

    case "18":
      posLocSource = {
        '17': '塔顶X'
      };
      break;

    case "24":
      posLocSource = {
        '25': '塔底Y'
      };
      break;

    case "25":
      posLocSource = {
        '24': '塔底X'
      };
      break;
  }

  return posLocSource;
}
/**
* 已知dgm_type求posClassSource @getPosLoc
* param@posClass=部件分类值
    *dgm_type: dgu2000=1,dgu2200=2,dgu2001=3,mhd=4,dgu2600=5
    dgm_type:1,// 采集器型号 1:振动采集器V1 2.叶轮采集器 3.振动采集器V2 4.MHD采集器 5.螺栓采集器 6.821E 7.tms采集器
    chId：通道Id;
    t_root:组织类型
    * **/

function getPosLoc(dgmType, chId, t_root) {
  var posClassSource = {};

  if (Number(t_root) === 1) {
    posClassSource = {
      '0': '公共',
      '4': '塔筒'
    };
    return posClassSource;
  }

  switch (dgmType + "") {
    case "1":
      if (chId == 10 || chId == 11) {
        posClassSource = {
          '0': '公共',
          '1': '主轴',
          '2': '齿轮箱',
          '3': '发电机',
          '4': '塔筒'
        };
      } else {
        posClassSource = {
          '0': '公共',
          '1': '主轴',
          '2': '齿轮箱',
          '3': '发电机'
        };
      }

      break;

    case "2":
      posClassSource = {
        '0': '公共',
        '5': '叶轮'
      };
      break;

    case "3":
    case "9":
    case "13":
      posClassSource = {
        '0': '公共',
        '1': '主轴',
        '2': '齿轮箱',
        '3': '发电机',
        '4': '塔筒'
      };
      break;

    case "4":
      posClassSource = {
        '0': '公共',
        '1': '主轴',
        '2': '齿轮箱',
        '3': '发电机',
        '4': '塔筒'
      };
      break;

    case "5":
      posClassSource = {
        '0': '公共',
        '4': '塔筒',
        '5': '叶轮'
      };
      break;

    case "7":
      posClassSource = {
        '0': '公共',
        '1': '1轴',
        '2': '2轴',
        '3': '3轴',
        '4': '4轴'
      };
      break;

    case "10":
      posClassSource = {
        '0': '公共'
      };
      break;
  }

  return posClassSource;
}
/**
 * 对象已知值求key
 * **/

function findKey(value, data) {
  for (var key in data) {
    if (data[key] == value) {
      return key;
    }
  }
}
/**
 * 求 unitSource和integralSource @unitToSources
 * param@灵敏系数单位=sensorUnit
 * param@积分参数=byIntegral
 * 返回数组：第一项表示积分单位下拉列表；第二项表示积分下拉列表
 * **/

function unitToSources(sensorUnit, byIntegral, dgmType, sensorType) {
  var unitSource = {};
  var integralSource = {};

  if (dgmType == 5 || dgmType == 6) {
    switch (sensorType + '') {
      case "2":
        unitSource = {
          "1": "g",
          "2": "m/s²"
        };
        break;

      case "1":
        unitSource = {
          "3": "mm/s"
        };
        break;

      case "0":
        unitSource = {
          "4": "μm",
          '9': 'mm'
        };
        break;

      case "3":
        unitSource = {
          "6": "℃",
          '7': '℉'
        };
        break;

      case "13":
      case "14":
        unitSource = {
          "8": "kN"
        };
        break;

      case "4":
        unitSource = {
          "10": "mA",
          '11': 'A',
          '12': 'kA'
        };
        break;

      case "5":
        unitSource = {
          "13": "Hz"
        };
        break;

      case "6":
        unitSource = {
          "14": "V",
          "15": "mV"
        };
        break;

      case "127":
        unitSource = {
          "0": "自定义"
        };
        break;
    }
  } else {
    if (dgmType == 7) {
      switch (sensorType + '') {
        case "2":
          unitSource = {
            "1": "g",
            "2": "m/s²"
          };
          break;

        case "1":
          unitSource = {
            "3": "mm/s"
          };
          break;

        case "0":
          unitSource = {
            "4": "μm",
            '9': 'mm'
          };
          break;

        case "3":
          unitSource = {
            "6": "℃",
            '7': '℉'
          };
          break;

        case "13":
        case "14":
          unitSource = {
            "8": "kN"
          };
          break;

        case "4":
          unitSource = {
            "10": "mA",
            '11': 'A',
            '12': 'kA'
          };
          break;

        case "5":
          unitSource = {
            "13": "Hz"
          };
          break;

        case "127":
          unitSource = {
            "0": "自定义"
          };
          break;
      }
    }

    if (dgmType == 9 || dgmType == 13) {
      switch (sensorType + '') {
        case "2":
          unitSource = {
            "1": "g",
            "2": "m/s²"
          };
          break;

        case "1":
          unitSource = {
            "3": "mm/s"
          };
          break;

        case "0":
          unitSource = {
            "4": "μm",
            '9': 'mm'
          };
          break;

        case "3":
          unitSource = {
            "6": "℃",
            '7': '℉'
          };
          break;

        case "13":
        case "14":
          unitSource = {
            "8": "kN"
          };
          break;

        case "4":
          unitSource = {
            "10": "mA",
            '11': 'A',
            '12': 'kA'
          };
          break;

        case "5":
          unitSource = {
            "13": "Hz"
          };
          break;

        case "6":
          unitSource = {
            "14": "V",
            "15": "mV"
          };
          break;

        case "127":
          unitSource = {
            "0": "自定义"
          };
          break;
      }
    }

    if (sensorUnit == "mV/g") {
      if (dgmType == 4) {
        integralSource = {
          "0": "不积分",
          "1": "积分"
        };
      } else {
        integralSource = {
          "0": "不积分",
          "1": "一次积分",
          "2": "二次积分"
        };
      }

      switch (byIntegral) {
        case "0":
          unitSource = {
            "1": "g",
            "2": "m/s²"
          };
          break;

        case "1":
          unitSource = {
            "3": "mm/s"
          };
          break;

        case "2":
          unitSource = {
            "4": "μm"
          };
          break;
      }
    } else if (sensorUnit == "mV/μm") {
      integralSource = {
        "0": "不积分"
      };
      unitSource = {
        "4": "μm"
      };
    } else if (sensorUnit == "mV/(mm/s)") {
      if (dgmType == 4) {
        integralSource = {
          "0": "不积分",
          "1": "积分"
        };
      } else {
        integralSource = {
          "0": "不积分",
          "1": "一次积分"
        };
      }

      switch (byIntegral) {
        case "0":
          unitSource = {
            "3": "mm/s"
          };
          break;

        case "1":
          unitSource = {
            "4": "μm"
          };
          break;
      }
    }
  }

  return [unitSource, integralSource];
}
/**
 * @destToDatabit
 * param@destType=外部集成器类型
 *返回数据位列表
 * **/

function destToDatabit(destType) {
  var databitSource = [];

  if (Number(destType) === 0) {
    databitSource = [["8", "8"], ["7", "7"], ["6", "6"], ["5", "5"]];
  } else {
    databitSource = [["4", "Float"], ["1", "Byte"], ["2", "Short"], ["3", "Int"], ["5", "Double"]];
  }

  return databitSource;
} //采集器设置按钮文本转化

/**
 *
 * @param type
 * @returns {string}
 * {type:1,textBtn:"采集器信息",name:'dgminfo'},
 {type:2,textBtn:"振动设置",name:'vibch'},
 {type:3,textBtn:"温度设置",name:'tempch'},
 {type:4,textBtn:"过程量设置",name:'stach'},
 {type:5,textBtn:"转速设置",name:'speedch'},
 {type:6,textBtn:"数字量设置",name:'digch'},
 {type:7,textBtn:"外部集成设置",name:'modch'},
 // {type:8,textBtn:"工艺量设置"},
 {type:9,textBtn:"长采样设置",name:'capturech'},
 */

function dgmBtn_name(type) {
  var dgmBtn_name = '';

  switch (parseInt(type)) {
    case 1:
      dgmBtn_name = "采集器信息";
      break;

    case 2:
      dgmBtn_name = "振动设置";
      break;

    case 3:
      dgmBtn_name = "温度设置";
      break;

    case 4:
      dgmBtn_name = "过程量设置";
      break;

    case 5:
      dgmBtn_name = "转速设置";
      break;

    case 6:
      dgmBtn_name = "数字量设置";
      break;

    case 7:
      dgmBtn_name = "外部集成设置";
      break;

    case 8:
      dgmBtn_name = "工艺量设置";
      break;

    case 9:
      dgmBtn_name = "长采样设置";
      break;

    case 10:
      dgmBtn_name = "前置处理器";
      break;

    case 11:
      dgmBtn_name = "MHD从设备";
      break;

    case 12:
      dgmBtn_name = "连续采集";
      break;

    case 13:
      dgmBtn_name = "采集设置";
      break;

    case 14:
      dgmBtn_name = "法兰设置";
      break;

    case 15:
      dgmBtn_name = "预处理器设置";
      break;

    case 16:
      dgmBtn_name = "螺栓设置";
      break;
  }

  return dgmBtn_name;
}
/**
 * 通道类型转换
 * */

function dgmChType_name(type) {
  var dgmChType_name = '';

  switch (parseInt(type)) {
    case 1:
      dgmChType_name = "全8通道";
      break;

    case 2:
      dgmChType_name = "后8通道";
      break;

    case 3:
      dgmChType_name = "9通道";
      break;

    case 0:
      dgmChType_name = "全16通道";
      break;
  }

  return dgmChType_name;
}
/**
 * 量程类型转换
 * */

function rangeType_name(type) {
  var rangeType_name = '';

  switch (parseInt(type)) {
    case 0:
      rangeType_name = "普通4量程";
      break;

    case 1:
      rangeType_name = "高精度多量程";
      break;
  }

  return rangeType_name;
}
/**
 * 对象根据值进行排序id
 * */

function compareId(val) {
  // val表示要通过那个参数来对比呢
  return function (a, b) {
    return a[val] - b[val]; // 倒序 b[val]-a[val]    正序  a[val] - b[val]
  };
}
/**
  * 丝印 @chId  过程量
  */

function getChNum(item, dgmType) {
  var tempStr;
  var tempNum = Number(item.ch_id);
  var tValue = tempNum + 1;

  switch (Number(dgmType)) {
    case 2:
      //2200
      tempStr = "CH" + tValue;
      break;

    case 1:
      //DGU200V1
      tempStr = "IN" + (tValue - 12);
      break;

    case 3:
      //DGU200V2
      tempStr = "IN" + tValue;
      break;

    case 6:
      //E821
      if (tValue < 10) {
        tempStr = "A0" + tValue;
      } else {
        tempStr = "A" + tValue;
      }

      break;

    case 9:
      //DGU2000E
      tempStr = "IN" + tValue;
      break;

    case 10:
      //WL9100
      if (tempNum == 0) {
        tempStr = "温度";
      } else if (tempNum == 1) {
        tempStr = "电量";
      }

      break;
  }

  return tempStr;
}
/**
  * 丝印 @chId 振动通道
  */

function getVibChNum(item) {
  var tempStr = '';
  var tempNum = Number(item.ch_id);
  var tValue = '';
  var intNum;
  var dgmType = Number(item.dgmInfo.dgm_type);

  switch (dgmType) {
    case 1:
      tempStr = "CH" + (tempNum + 1);
      break;

    case 2:
      tempStr = "CH" + (tempNum + 1);
      break;

    case 3:
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

      break;

    case 4:
      intNum = parseInt(tempNum / 2) + 1;
      tValue = Number(tempNum % 2 + 1);
      tempStr = intNum + "-VIB" + tValue;
      break;

    case 7:
      intNum = parseInt(tempNum / 4);
      tValue = Number(tempNum % 4 + 1);
      tempStr = item.pre_id + "-S" + tValue;
      break;

    case 9:
    case 13:
      if (tempNum < 16) {
        tValue = Number(tempNum + 1);

        if (tValue < 10) {
          tempStr = "A0" + tValue;
        } else {
          tempStr = "A" + tValue;
        }
      }

      break;

    case 10:
      //WL9100采集器
      if (tempNum === 0) {
        tempStr = "Z轴";
      } else if (tempNum === 1) {
        tempStr = "X轴";
      } else if (tempNum === 2) {
        tempStr = "Y轴";
      }

  }

  return tempStr;
}
/**
  * 丝印 @chId 温度通道
  */

function getTempChNum(item) {
  var tempStr = '';
  var tempNum = Number(item.ch_id);
  var tValue = "";
  var dgmType = Number(item.dgmInfo.dgm_type);
  var intNum;

  switch (dgmType) {
    case 2:
      tempStr = "CH" + (tempNum + 1);
      break;

    case 3:
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

      break;

    case 7:
      intNum = parseInt(tempNum / 5);
      tValue = Number(tempNum % 5 + 1);

      if (Number(tempNum + 1) % 5 === 0) {
        // intNum = parseInt(tempNum / 5 ) + 1;
        // tValue = Number(tempNum % 5 + 1 );
        tempStr = item.pre_id + "-环温";
      } else {
        // intNum = parseInt(tempNum / 4 ) + 1;
        // tValue = Number(tempNum % 4 + 1 );
        tempStr = item.pre_id + "-S" + tValue;
      }

      break;

    case 13:
      tempStr = "Temp" + (tempNum + 1);
      break;
  }

  return tempStr;
}
/**
  * 量程（信号增益） @arr 增益最大值集合  @dwVib_Scale 灵敏系数
  */

function getVibSignalZoom(arr, dwVib_Scale) {
  var result = [];
  arr.forEach(function (item) {
    var n = Number(item);

    if (!isNaN(n)) {
      var num = n / dwVib_Scale + 'g';
      result.push(num);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
  * 计算报站间隔
  */

function compute_frequency_spectral(frequency, spectral, dgm) {
  spectral = Number(spectral);
  frequency = Number(frequency);

  if (isNaN(spectral) || isNaN(frequency) || frequency == 0) {
    dgm.station_interval = ''; //如果是无效值则显示''
  } else {
    dgm.station_interval = (Number(spectral) / Number(frequency)).toFixed(1);
  }
}
/**
  * 将时间输入值转换成HH:mm格式
  */

function timeFor(s) {
  var t = "";

  if (s > -1) {
    var hour = Math.floor(s / 3600);
    var min = Math.floor(s / 60) % 60;
    var sec = s % 60;
    var day = parseInt(hour / 24);

    if (day > 0) {
      hour = hour - 24 * day;
      t += day + ":" + hour + ":";
    } else {
      t += hour + ":";
    }

    if (min < 10) {
      t += "0";
    }

    t += min + ":";

    if (sec < 10) {
      t += "0";
    }

    t += sec;
  }

  return t;
}
/**
  * 将HH:mm格式转换成数字
  */

function unformatTimes(string) {
  if (string instanceof String || _typeof(string).toLowerCase() == 'string') {
    var timeArray = string.split(':'),
        seconds = 0; // turn hours and minutes into seconds and add them all up

    if (timeArray.length === 3) {
      // hours
      seconds = seconds + Number(timeArray[0]) * 60 * 60; // minutes

      seconds = seconds + Number(timeArray[1]) * 60; // seconds

      seconds = seconds + Number(timeArray[2]);
    } else if (timeArray.length === 2) {
      //  Time format is HHmm.
      seconds = Number(timeArray[0]) * 100 + Number(timeArray[1]);
    }

    return Number(seconds);
  }
}
function addRows(hot, data, row) {
  if (row == -1) {
    //通过点击新建按钮进入的方法，默认在最后一行添加
    row = 0;
  }

  hot.alter('insert_row', row);
  reRenderSelectOption(hot, data);
}
/*渲染下拉选项*/

function reRenderSelectOption(hot, data) {
  //重新渲染selectOption,让每个option
  var cellMeta = hot.getCellMetaAtRow(0);
  var rows = data.length;
  cellMeta.forEach(function (item) {
    if (item.prop == "dgm.byRealtime_TZ_intrvl_val") {
      //特征值实时上传间隔的下拉选项
      for (var i = 0; i <= rows; i++) {
        hot.setCellMeta(i, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.realTimeSources;
        });
      }
    }

    if (item.prop == "dgm.byVector_TZ_intrvl_val") {
      //特征值存储时间间隔的下拉选项
      for (var _i = 0; _i <= rows; _i++) {
        hot.setCellMeta(_i, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byVectorSources;
        });
      }
    }

    if (item.prop == "dgm.byRealtime_Wave_intrvl_val") {
      //波形实时上传间隔
      for (var _i2 = 0; _i2 <= rows; _i2++) {
        hot.setCellMeta(_i2, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.waveIntrvlSources;
        });
      }
    }

    if (item.prop == "dgm.byVector_Wave_intrvl_val") {
      //波形存储时间间隔
      for (var _i3 = 0; _i3 <= rows; _i3++) {
        hot.setCellMeta(_i3, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.bvWaveIntrvlSources;
        });
      }
    }

    if (item.prop == "dgm.pos_class_val") {
      //安装分类
      for (var _i4 = 0; _i4 <= rows; _i4++) {
        hot.setCellMeta(_i4, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.posClassSources;
        });
      }
    }

    if (item.prop == "dgm.pos_loc_val") {
      //安装位置
      for (var _i5 = 0; _i5 <= rows; _i5++) {
        hot.setCellMeta(_i5, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.posLocSources;
        });
      }
    }

    if (item.prop == "dgm.pos_part_val" || item.prop == "dgm.pos_part1_val" || item.prop == "dgm.pos_part2_val" || item.prop == "dgm.pos_part3_val" || item.prop == "dgm.pos_part4_val" || item.prop == "dgm.pos_part5_val" || item.prop == "dgm.pos_part6_val" || item.prop == "dgm.pos_part7_val" || item.prop == "dgm.pos_part8_val" || item.prop == "dgm.pos_part9_val") {
      //关联部件
      for (var _i6 = 0; _i6 <= rows; _i6++) {
        hot.setCellMeta(_i6, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.posPartSources;
        });
      }
    }

    if (item.prop == "dgm.byHw_Filter_val") {
      //硬件滤波
      for (var _i7 = 0; _i7 <= rows; _i7++) {
        hot.setCellMeta(_i7, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.hwFilterSources;
        });
      }
    }

    if (item.prop == "dgm.byVib_Signal_Zoom_val") {
      //信号增益
      for (var _i8 = 0; _i8 <= rows; _i8++) {
        hot.setCellMeta(_i8, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.vibSignalZoomSources;
        });
      }
    }

    if (item.prop == "dgm.range_val") {
      //信号增益
      for (var _i9 = 0; _i9 <= rows; _i9++) {
        hot.setCellMeta(_i9, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.rangeSources;
        });
      }
    }

    if (item.prop == "dgm.byStaType_val") {
      //过程量类型
      for (var _i10 = 0; _i10 <= rows; _i10++) {
        hot.setCellMeta(_i10, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byStaTypeSources;
        });
      }
    }

    if (item.prop == "dgm.byStrong_val") {
      //键相增益
      for (var _i11 = 0; _i11 <= rows; _i11++) {
        hot.setCellMeta(_i11, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byStrongSources;
        });
      }
    }

    if (item.prop == "dgm.byifpower_val") {
      //数字量状态
      for (var _i12 = 0; _i12 <= rows; _i12++) {
        hot.setCellMeta(_i12, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byifpowerSources;
        });
      }
    }

    if (item.prop == "dgm.byifalarm_val") {
      //自检输出
      for (var _i13 = 0; _i13 <= rows; _i13++) {
        hot.setCellMeta(_i13, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byifalarmsources;
        });
      }
    }

    if (item.prop == "dgm.capture_time_val") {
      //采样时间
      for (var _i14 = 0; _i14 <= rows; _i14++) {
        hot.setCellMeta(_i14, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.captureTimeSources;
        });
      }
    }

    if (item.prop == "dgm.ch1_val") {
      //通道名
      for (var _i15 = 0; _i15 <= rows; _i15++) {
        hot.setCellMeta(_i15, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.channelSources;
        });
      }
    }

    if (item.prop == "dgm.byIntegral_val") {
      //积分
      for (var _i16 = 0; _i16 < rows; _i16++) {
        hot.setCellMeta(_i16, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.integralSources;
        });
      }
    }

    if (item.prop == "dgm.unitName") {
      //单位
      for (var _i17 = 0; _i17 < rows; _i17++) {
        hot.setCellMeta(_i17, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.unitSources;
        });
      }
    }

    if (item.prop == "dgm.byUnitName_val") {
      //E821单位
      for (var _i18 = 0; _i18 < rows; _i18++) {
        hot.setCellMeta(_i18, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byUnitNameSources;
        });
      }
    }

    if (item.prop == "dgm.databit_val") {
      //数据位
      for (var _i19 = 0; _i19 < rows; _i19++) {
        hot.setCellMeta(_i19, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.databitSources;
        });
      }
    }

    if (item.prop == "dgm.capture_time_val") {
      //采集时间
      for (var _i20 = 0; _i20 < rows; _i20++) {
        hot.setCellMeta(_i20, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.captureTimeSources;
        });
      }
    }

    if (item.prop == "dgm.mainMhd") {
      //主设备：mhd下拉选项
      for (var _i21 = 0; _i21 < rows; _i21++) {
        hot.setCellMeta(_i21, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.mhdSources;
        });
      }
    }

    if (item.prop == "dgm.int_zoom_val") {
      //mhd积分量程
      for (var _i22 = 0; _i22 < rows; _i22++) {
        hot.setCellMeta(_i22, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.intZoomSources;
        });
      }
    }

    if (item.prop == "dgm.dest_type_val") {
      //外部集成设置的类型选项
      for (var _i23 = 0; _i23 < rows; _i23++) {
        hot.setCellMeta(_i23, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.destTypeSources;
        });
      }
    }

    if (item.prop == "dgm.preps_id_val") {
      //螺栓设置的预处理器设置
      for (var _i24 = 0; _i24 < rows; _i24++) {
        hot.setCellMeta(_i24, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.prepsIdSources;
        });
      }
    }

    if (item.prop == "dgm.bolt_pos_loc_val") {
      //螺栓设置的安装位置
      for (var _i25 = 0; _i25 < rows; _i25++) {
        hot.setCellMeta(_i25, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.posLocSources;
        });
      }
    }

    if (item.prop == "dgm.b_id_val") {
      //螺栓设置的关联通道
      for (var _i26 = 0; _i26 < rows; _i26++) {
        hot.setCellMeta(_i26, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.bIdSources;
        });
      }
    }

    if (item.prop == "dgm.bySensorType821_val") {
      //e821的过程量设置的传感器类型下拉选项
      for (var _i27 = 0; _i27 < rows; _i27++) {
        hot.setCellMeta(_i27, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.sensorSources;
        });
      }
    }

    if (item.prop == "dgm.byUnitName_val") {
      //e821的过程量设置的传感器类型下拉选项
      for (var _i28 = 0; _i28 < rows; _i28++) {
        hot.setCellMeta(_i28, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.byUnitNameSources;
        });
      }
    }

    if (item.prop == "dgm.ch1") {
      //长采样通道下拉选项
      for (var _i29 = 0; _i29 < rows; _i29++) {
        hot.setCellMeta(_i29, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.channelSources;
        });
      }
    }

    if (item.prop == "dgm.host_id_val") {
      //主机下拉选项
      for (var _i30 = 0; _i30 < rows; _i30++) {
        hot.setCellMeta(_i30, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.host_id_sources;
        });
      }
    }

    if (item.prop == "dgm.ch_class_val") {
      //车厢下拉选项
      for (var _i31 = 0; _i31 < rows; _i31++) {
        hot.setCellMeta(_i31, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.ch_class_sources;
        });
      }
    }

    if (item.prop == "dgm.dwCompre_volt_val") {
      //比较电压
      for (var _i32 = 0; _i32 < rows; _i32++) {
        hot.setCellMeta(_i32, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.dwCompreVoltSources;
        });
      }
    }

    if (item.prop == "dgm.bySw_Filter_val") {
      //软件滤波
      for (var _i33 = 0; _i33 < rows; _i33++) {
        hot.setCellMeta(_i33, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.swFilterSources;
        });
      }
    }

    if (item.prop == "dgm.cap_type_val") {
      //波磨采样触发类型
      for (var _i34 = 0; _i34 < rows; _i34++) {
        hot.setCellMeta(_i34, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.cap_type_sources;
        });
      }
    }

    if (item.prop == "dgm.trans_ch_type_val") {
      //通道互转
      for (var _i35 = 0; _i35 < rows; _i35++) {
        hot.setCellMeta(_i35, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.transChTypeSources;
        });
      }
    } //金风现场的=============================================start


    if (item.prop == "dgm.rt_tz_angle_val") {
      //倾角特征值实时上传间隔
      for (var _i36 = 0; _i36 < rows; _i36++) {
        hot.setCellMeta(_i36, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.rt_tz_angleSources;
        });
      }
    }

    if (item.prop == "dgm.his_tz_angle_val") {
      //倾角特征值存储时间间隔
      for (var _i37 = 0; _i37 < rows; _i37++) {
        hot.setCellMeta(_i37, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.his_tz_angleSources;
        });
      }
    }

    if (item.prop == "dgm.rt_wave_angle_val") {
      //倾角波形实时上传间隔
      for (var _i38 = 0; _i38 < rows; _i38++) {
        hot.setCellMeta(_i38, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.rt_wave_angleSources;
        });
      }
    }

    if (item.prop == "dgm.his_wave_angle_val") {
      //倾角波形存储时间间隔
      for (var _i39 = 0; _i39 < rows; _i39++) {
        hot.setCellMeta(_i39, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.his_wave_angleSources;
        });
      }
    }

    if (item.prop == "dgm.his_long_cap_val") {
      //长采样时间间隔
      for (var _i40 = 0; _i40 < rows; _i40++) {
        hot.setCellMeta(_i40, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm.his_long_capSources;
        });
      }
    } //金风现场的=============================================end

  });
}

/***/ })

}]);
//# sourceMappingURL=4-14ec2bce.js.map