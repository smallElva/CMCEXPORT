(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/components/content/system/position/table/js/pos_info.js":
/*!*********************************************************************!*\
  !*** ./src/components/content/system/position/table/js/pos_info.js ***!
  \*********************************************************************/
/*! exports provided: over_pos_loc_ch, syn_pos_loc_ch, tmsPosList, getPositionInfo, createPosition, changePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "over_pos_loc_ch", function() { return over_pos_loc_ch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syn_pos_loc_ch", function() { return syn_pos_loc_ch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tmsPosList", function() { return tmsPosList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionInfo", function() { return getPositionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPosition", function() { return createPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePosition", function() { return changePosition; });
/* harmony import */ var _pos_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos_methods.js */ "./src/components/content/system/position/table/js/pos_methods.js");

/* 固定参数 */

var isalarm_choose = {
  '0': '不报警',
  '1': '报警'
};
var isalarm_vib_choose = {
  '0': '不报警',
  '1': '报警',
  '2': '仅屏蔽故障频率报警',
  '3': '仅屏蔽特征值报警'
}; //振动、包络、阶次、倾角、晃度  这些测点有波形显示这四个选项

var resampling_choose = {
  '0': '是',
  '1': '否'
};
var pos_activity_choose = {
  '0': '有效',
  '1': '无效'
};
var task_id_choose = {};
/*金风现场，'任务3'改为'长采样'*/

if (config.company === 1) {
  task_id_choose = {
    '0': '任务1',
    '1': '任务2',
    '2': '长采样'
  };
} else {
  task_id_choose = {
    '0': '任务1',
    '1': '任务2',
    '2': '任务3'
  };
}

var optfreq_type_choose = {
  '0': '能量有效值',
  '1': '速度值',
  '2': '加速度值'
};
var band_factor_type_choose = {
  '0': '频段因数',
  '1': '速度值',
  '2': '加速度值'
};
var filter_choose = {
  '0': '滤波器1',
  '1': '滤波器2',
  '2': '滤波器3'
};
var dip_model_choose = {
  '0': 'WindIT 2917BV',
  '1': 'WindIT 2917BH',
  '2': 'WindIT 2917TV-9',
  '3': 'WindIT 2917TV-18',
  '4': 'WindIT 2914BH',
  '5': 'WindIT 2918TH'
};
var sourceType_choose = {
  '0': '振动通道',
  '5': '串口'
};
var datamode_choose = {
  '0': '读保持寄存器',
  '1': '输入寄存器',
  '2': '亚当模块'
};
var calc_method_choose = {
  '0': '计数',
  '1': '高低电平'
};
var method_choose = {
  '0': '定时采样',
  '1': '手动采样'
};
var tt_pos_loc_source = {
  '0': '机舱',
  '1': '塔顶',
  '2': '塔底',
  '3': '塔筒1',
  '4': '塔筒2',
  '5': '塔筒3',
  '6': '塔筒4',
  '7': '塔筒5'
};
var if_show_source = {
  '0': '不显示',
  '1': '显示'
};
var over_pos_loc_ch = ["机舱", "塔顶", "塔筒1", "塔筒2", "塔筒3", "塔筒4", "塔筒5"];
var syn_pos_loc_ch = ["机舱", "塔顶", "塔底", "塔筒1", "塔筒2", "塔筒3", "塔筒4", "塔筒5"];
var pos_loc = {
  "15": "机舱X",
  "16": "机舱Y",
  "17": "塔顶X",
  "18": "塔顶Y",
  "24": "塔底X",
  "25": "塔底Y",
  "45": "塔筒1X",
  "46": "塔筒1Y",
  "47": "塔筒2X",
  "48": "塔筒2Y",
  "49": "塔筒3X",
  "50": "塔筒3Y",
  "51": "塔筒4X",
  "52": "塔筒4Y",
  "53": "塔筒5X",
  "54": "塔筒5Y",
  'dd': "module_name",
  'kk': "module_id"
};
var tmsPosList = [3, 4, 8, 9, 15, 16, 1, 7, 17]; //tms采集器的测点类型集合

var trendAlarm_source = {
  '1000': '转速',
  '2000': '有效值',
  '3000': '峰值',
  '4000': '峰峰值',
  '19000': '能量有效值',
  '15000': '峰值因数',
  '14000': '偏置电压',
  '24000': '峭度',
  '25000': '裕度',
  '26000': '歪度',
  '46000': '冲击值',
  '53000': '1x幅值',
  '54000': '1x相位',
  '12001': '频段1-1',
  '13001': '频段1-2',
  '12002': '频段2-1',
  '13002': '频段2-2',
  '12003': '频段3-1',
  '13003': '频段3-2',
  '12004': '频段4-1',
  '13004': '频段4-2',
  '12005': '频段5-1',
  '13005': '频段5-2',
  '12006': '频段6-1',
  '13006': '频段6-2',
  '12007': '频段7-1',
  '13007': '频段7-2',
  '12008': '频段8-1',
  '13008': '频段8-2'
};
var sensor_id_source = {
  '0': '无',
  '1': 'ZXA07油液传感器',
  '101': '电表',
  '102': '变频器',
  '103': '智能电表',
  '104': '斯伦贝谢传感器',
  '105': '海利普变频器'
};
var datatypeSource = {
  "1": "Float",
  "2": "Byte",
  "3": "Short",
  "4": "Int",
  "5": "Double"
};
var shock_threshold_source = [60, 80, 100]; //脱轨的冲击阈值

function getPositionInfo(res, type) {
  if (type == 17) {
    optfreq_type_choose = {
      '0': '有效值'
    };
    band_factor_type_choose = {
      '0': '频段因数'
    };
  } else {
    optfreq_type_choose = {
      '0': '能量有效值',
      '1': '速度值',
      '2': '加速度值'
    };
    band_factor_type_choose = {
      '0': '频段因数',
      '1': '速度值',
      '2': '加速度值'
    };
  }

  if (res.msg == 0) {
    var pos_folderList = {}; //所有的组织列表，组织里面存组织ID和组织name

    var pos_machineList = {}; //所有的机组列表,（组织id：[{机组type，机组name，机组ID}]）

    var pos_dgmList = {}; //所有的采集器列表（机组id：[{采集器id,采集器name，采集器type}]）

    var pos_chaList = {}; //所有的通道列表{采集器id:[所有通道]key:ch_name,value:ch_id,ch_type

    var pos_chaIdList = {}; //所有的通道列表{采集器id:[所有通道]key:ch_id,ch_type,value:ch_name

    var cap_chaList = {}; //长采样序号对应振动的通道列表，根据ID来查询

    var cap_sequenceNum = {}; //长采样序号列表

    var rock_chaList = {}; //晃度的通道列表

    var pos_dgmIdList = []; //临时存储（tId_macId_dgmID）唯一的采集器

    var mac_pos_id_list = {}; //一个机组下面的该类型所有通道id，保证新建测点的id不冲突

    var rock_pos_id_list = {}; //一个机组下面 存放晃度和倾角的pos_id的列表

    var task_idSources = {}; //一个通道下面所有的任务，保证任务不冲突{dgm_id:{ch_name:{[task_id_sources],[indexs]}}}

    var invalidPos = []; //失效测点集合

    var data = []; //测点集合

    var position = {}; //单个测点

    var rock_list = {}; //存放倾角测点

    var cc_mod_id_list = {}; //工艺量的关联组态结合（工艺量通道集合）

    if (!res.new_position_list.length > 0) {
      return;
    } else {
      //组织数据结构（多machine_info.positions属性）
      res.new_position_list.forEach(function (new_position) {
        pos_folderList[new_position.t_name] = new_position.t_id;
        pos_machineList[new_position.t_name] = {};
        new_position.machine_info.forEach(function (machine_info) {
          pos_machineList[new_position.t_name][machine_info.mac_me] = {
            'mac_id': machine_info.mac_id,
            'm_type': machine_info.m_type
          };
          mac_pos_id_list[machine_info.mac_id] = []; //获得所有mac_id 的集合对象(额外用途)测点Id列表

          rock_pos_id_list[machine_info.mac_id] = [];
          pos_dgmList[machine_info.mac_id] = {};

          if (type == 10 || type == 13 || type == 12) {
            //倾角、合成倾角、工艺量测点需要加上虚拟采集器的通道
            if (res.model != undefined) {
              machine_info.bindDgm_list.push(res.model);
            }
          }

          machine_info.bindDgm_list.forEach(function (bindDgm_list) {
            pos_dgmIdList.push(new_position.t_id + '_' + machine_info.mac_id + '_' + bindDgm_list.dgm_id); //获取所有的采集器id，不存在采集器的测点屏蔽

            pos_dgmList[machine_info.mac_id][bindDgm_list.dgm_name] = {
              "dgm_id": bindDgm_list.dgm_id,
              "dgm_type": bindDgm_list.dgm_type
            };

            if (type == 11 || type == 13) {
              //倾覆或者倾角的组织结构方式不一样
              rock_chaList[bindDgm_list.dgm_id] = {};

              for (var key in pos_loc) {
                rock_chaList[bindDgm_list.dgm_id][pos_loc[key]] = {};
              }
            }

            pos_chaList[bindDgm_list.dgm_id] = {};
            pos_chaIdList[bindDgm_list.dgm_id] = {};
            cap_chaList[bindDgm_list.dgm_id] = {};
            cap_sequenceNum[bindDgm_list.dgm_id] = {};
            task_idSources[bindDgm_list.dgm_id] = {};
            cc_mod_id_list[bindDgm_list.dgm_id] = {};
            var taskArr = [3, 4, 8, 9, 15, 16]; //振动、包络、阶次,冲击

            if (type == 10) {
              if (bindDgm_list.ch_list && bindDgm_list.ch_list.length) {
                bindDgm_list.ch_list.forEach(function (channel) {
                  var ch_name = channel.ch_name;
                  var ch_id = channel.ch_id;
                  var ch_type = channel.ch_type;
                  cc_mod_id_list[bindDgm_list.dgm_id][ch_name] = {
                    "ch_id": ch_id,
                    "ch_type": ch_type
                  };
                });
              }
            }

            if (bindDgm_list.channel_list && bindDgm_list.channel_list.length) {
              bindDgm_list.channel_list.forEach(function (channel) {
                var ch_name = channel.ch_name;
                var ch_id = channel.ch_id;
                var ch_type = channel.ch_type;

                if (type == 11) {
                  //如果是倾覆测点
                  over_pos_loc_ch.forEach(function (item) {
                    if (bindDgm_list.dgm_type == 1 || bindDgm_list.dgm_type == 4) {
                      task_idSources[bindDgm_list.dgm_id][item] = ["0"];
                    } else {
                      task_idSources[bindDgm_list.dgm_id][item] = ["0", "1", "2"];
                    }
                  });
                } else if (taskArr.indexOf(type) > -1 && (bindDgm_list.dgm_type == 2 || bindDgm_list.dgm_type == 3 || bindDgm_list.dgm_type == 7 || bindDgm_list.dgm_type == 9 || bindDgm_list.dgm_type == 13)) {
                  task_idSources[bindDgm_list.dgm_id][ch_name] = ["0", "1", "2"]; //制造一个全满的任务,DGU2200 DGU2000V2 tms2000三个任务
                } else {
                  task_idSources[bindDgm_list.dgm_id][ch_name] = ["0"]; //其他只有一个任务（暂时没用）
                }

                if (type == 11 || type == 13) {
                  //仅在机舱、塔顶、塔底形成任务
                  if (pos_loc[channel.pos_loc] !== undefined) {
                    rock_chaList[bindDgm_list.dgm_id][pos_loc[channel.pos_loc]] = {
                      "ch_id": ch_id,
                      "ch_name": ch_name,
                      "ch_type": ch_type
                    };
                  }

                  if (ch_type == "5" || ch_type == '14') {
                    //串口||虚拟采集器
                    rock_chaList[bindDgm_list.dgm_id]["module_name"][ch_name] = {
                      "ch_id": ch_id,
                      "ch_type": ch_type
                    };
                    rock_chaList[bindDgm_list.dgm_id]["module_id"][ch_id] = {
                      "ch_name": ch_name,
                      "ch_type": ch_type
                    };
                  }
                }

                if (type == 200) {
                  //长采样的通道
                  if (ch_type == "0") {
                    //振动通道
                    pos_chaList[bindDgm_list.dgm_id][ch_name] = {
                      "ch_id": ch_id,
                      "ch_type": ch_type
                    };
                    pos_chaIdList[bindDgm_list.dgm_id][ch_id + '_' + ch_type] = {
                      "ch_id": ch_id,
                      "ch_type": ch_type,
                      "ch_name": ch_name
                    };
                    cap_chaList[bindDgm_list.dgm_id][ch_id] = {
                      "ch_name": ch_name
                    };
                  } else if (ch_type == "11" && channel.ch1 != 255 && channel.ch1 != null) {
                    //长采样序号通道
                    cap_sequenceNum[bindDgm_list.dgm_id][ch_id] = {
                      "vib_id": channel.ch1
                    };
                  }
                } else {
                  pos_chaList[bindDgm_list.dgm_id][ch_name] = {
                    "ch_id": ch_id,
                    "ch_type": ch_type
                  };
                  pos_chaIdList[bindDgm_list.dgm_id][ch_id + '_' + ch_type] = {
                    "ch_id": ch_id,
                    "ch_type": ch_type,
                    "ch_name": ch_name
                  };
                }
              });
            }
          });
        });
      });
      res.position_list.forEach(function (position_list) {
        //第一遍遍历在任务集合中删除已经存在的任务
        position_list.machine_info.forEach(function (machine_info) {
          machine_info.positions.forEach(function (positions) {
            if (!pos_dgmIdList.includes(position_list.t_id + '_' + positions.mac_id + '_' + positions.dgm_id)) {
              //如果这个测点绑定的采集器不存在则跳过这个测点
              return;
            } else if (!mac_pos_id_list[machine_info.mac_id]) {
              //没机组的测点直接删除
              console.log("没有机组" + position_list.t_id, positions);
              return;
            } else {
              var pos_tast = task_idSources[positions.dgm_id][positions.ch_name]; //删除集合中对应的任务

              if (pos_tast instanceof Array && pos_tast.indexOf(positions.task_id) != -1) {
                //集合中存在这个测点的任务
                pos_tast.splice(pos_tast.indexOf(positions.task_id), 1); //删除这个任务
              } else if (positions.task_id === "") {
                console.log('没有task_id');
              } else if (positions.task_id == 0) {
                console.log('任务1', positions);
              } else {
                console.log('重复任务,或没有该通道', positions);
              }
            }
          });
        });
      });
      res.position_list.forEach(function (position_list) {
        position_list.machine_info.forEach(function (machine_info) {
          if (type == 11 || type == 13) {
            //如果是倾覆和倾角测点，需要循环出rock_list
            machine_info.rock_list.forEach(function (rock_pos) {
              var key = "".concat(rock_pos.mac_id, "_").concat(rock_pos.pos_type, "_").concat(rock_pos.pos_id);
              rock_list[key] = rock_pos;
            });
          }

          machine_info.positions.forEach(function (positions) {
            //获取每个机组的测点ID,id就是数组的下标
            if (positions.baseInfo && Object.keys(positions.baseInfo).length == 0) {
              positions.t_name = position_list.t_name;
              positions.mac_name = machine_info.mac_me;
              invalidPos.push(positions);
              console.log("baseInfo为空", positions);
              return;
            }

            var baseInfo = positions.baseInfo;

            if (!mac_pos_id_list[machine_info.mac_id]) {
              //没机组的测点直接忽略
              console.log("缺少机组" + position_list.t_id, positions);
              /* 将失效测点保存起来统一处理 */

              positions.t_name = position_list.t_name;
              positions.mac_name = machine_info.mac_me;
              invalidPos.push(positions);
              return;
            }
            /* 搜集rock pos_id */


            if (type == 11 || type == 13) {
              //如果是倾覆和合成倾角，需要保存对应的晃度和倾角的pos_id
              rock_pos_id_list[machine_info.mac_id][baseInfo.rock1_id] = baseInfo.rock1_id;
              rock_pos_id_list[machine_info.mac_id][baseInfo.rock2_id] = baseInfo.rock2_id;
            }

            mac_pos_id_list[machine_info.mac_id][positions.pos_id] = positions.pos_id; // 组装测点id 的集合，保证新建测点的id不重复

            /* 不显示没有采集器的测点 */

            if (!pos_dgmIdList.includes(position_list.t_id + '_' + positions.mac_id + '_' + positions.dgm_id)) {
              //没采集器的测点屏蔽
              console.log("缺少采集器", positions);
              positions.t_name = position_list.t_name;
              positions.mac_name = machine_info.mac_me;
              invalidPos.push(positions);
              return;
            }
            /* 不显示没有通道的测点 */


            if (pos_chaIdList[positions.dgm_id][positions.ch_id + '_' + positions.ch_type] === undefined) {
              console.log('该测点缺少通道', positions);
              positions.t_name = position_list.t_name;
              positions.mac_name = machine_info.mac_me;
              invalidPos.push(positions);
              return;
            }

            var task_id_sources = task_idSources[positions.dgm_id][positions.ch_name]; //克隆这个数组

            if (task_id_sources) {
              task_id_sources = task_id_sources.slice(); //添加上自己任务的id

              task_id_sources.push(positions.task_id);
              task_id_sources = Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["taskArray"])(task_id_sources); //数组排序
            } //获取每个测点的可选通道 ch_sources


            var ch_sources = [];
            var cc_mod_sources = [];

            if (type == 11) {
              ch_sources = over_pos_loc_ch;
            } else if (type == 13) {
              ch_sources = syn_pos_loc_ch;
            } else {
              ch_sources = Object.keys(pos_chaList[positions.dgm_id]);

              if (type == 10) {
                cc_mod_sources = Object.keys(cc_mod_id_list[positions.dgm_id]).sort(); //虚拟采集器没有关联组态，给默认值

                if (Number(positions.dgm_type) === 0) {
                  cc_mod_sources = ['d1_mod_01'];
                }
              }
            }

            position = {
              operate: 0,
              //可修改行标记
              oldInfo: {},
              //标记测点修改之前的信息
              updateTime: positions.updateTime,
              t_id: position_list.t_id,
              t_name: position_list.t_name,
              t_sources: Object.keys(pos_folderList).sort(),
              m_type: positions.m_type,
              mac_id: positions.mac_id,
              mac_me: machine_info.mac_me,
              macName_sources: [],
              dgm_id: positions.dgm_id,
              dgm_type: positions.dgm_type,
              dgm_name: positions.dgm_name,
              dgm_sources: [],
              ch_id: positions.ch_id,
              ch_type: positions.ch_type,
              ch_name: positions.ch_name,
              ch_sources: ch_sources.sort(),
              pos_id: positions.pos_id,
              pos_name: positions.pos_name,
              pos_type: type,
              pos_type_name: Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["posType_name"])(type),
              pos_activity: positions.pos_activity == "" ? "0" : positions.pos_activity,
              pos_activity_val: positions.pos_activity == "" ? pos_activity_choose["0"] : pos_activity_choose[positions.pos_activity],
              //是否有效
              pos_activity_sources: Object.values(pos_activity_choose),
              pos_activity_sources_key: Object.keys(pos_activity_choose),
              isalarm: positions.isalarm == "" ? "0" : positions.isalarm,
              isalarm_val: positions.isalarm == "" ? isalarm_vib_choose["0"] : isalarm_vib_choose[positions.isalarm],
              //是否报警
              isalarm_sources: Object.values(isalarm_choose),
              isalarm_sources_key: Object.keys(isalarm_choose),
              old_task_id: positions.task_id,
              task_id: positions.task_id,
              task_id_val: task_id_choose[positions.task_id],
              //任务Id
              task_id_sources: task_id_sources,
              //每个通道的任务id源，不包括自身的任务
              task_id_choose: Object.values(task_id_choose),
              task_id_choose_key: Object.keys(task_id_choose),
              // alarm_smooth_a:baseInfo.alarm_smooth_a,//报警投票机制a
              // alarm_smooth_b:baseInfo.alarm_smooth_b,//报警投票机制b
              baseInfo: {}
            };

            if (type == 3 || type == 15 || type == 4 || type == 8 || type == 16 || type == 9 || type == 6 || type == 11 || type == 12 || type == 13 || type == 17) {
              //振动系列测点
              //组测点数据
              position.isalarm_sources = Object.values(isalarm_vib_choose);
              position.isalarm_sources_key = Object.keys(isalarm_vib_choose);
              var frequency_source = Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["frequencySources"])(positions, baseInfo.filter);
              position.baseInfo = {
                alarmList: baseInfo.alarmList,
                alarm_smooth_a: baseInfo.alarm_smooth_a,
                //报警投票机制a
                alarm_smooth_b: baseInfo.alarm_smooth_b,
                //报警投票机制b
                filter: baseInfo.filter,
                filter_val: filter_choose[baseInfo.filter],
                filter_sources: Object.values(filter_choose),
                filter_sources_key: Object.keys(filter_choose),
                frequency: baseInfo.frequency,
                //分析频率 采样周期(order)
                frequency_val: frequency_source[baseInfo.frequency],
                frequency_sources: Object.values(frequency_source),
                frequency_sources_key: Object.keys(frequency_source),
                spectral: baseInfo.spectral,
                //谱线数 采样点数(order)
                spectral_sources: Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["spectralSources"])(positions.dgm_type, positions.pos_type),
                resampling: baseInfo.resampling,
                resampling_val: resampling_choose[baseInfo.resampling],
                resampling_sources: Object.values(resampling_choose),
                resampling_sources_key: Object.keys(resampling_choose)
              };

              if (type == 3) {
                //振动测点微信报警信息
                if (baseInfo.trendAlarm == undefined || baseInfo.trendAlarm == null) {
                  baseInfo.trendAlarm = 2000;
                }

                Object.assign(position.baseInfo, {
                  levelRms: baseInfo.levelRms,
                  //过滤阈值：这个可以填小数
                  areaRatio: baseInfo.areaRatio,
                  //增长百分比：正数，填20，就是20%的意思
                  sampHours: baseInfo.sampHours,
                  //平均值计算时间：正整数，多少小时的意思
                  death_time: baseInfo.death_time,
                  //死区时间，单位小时，新增：正整数
                  packn: baseInfo.packn,
                  //连续n包，新增：正整数
                  trendAlarm: baseInfo.trendAlarm,
                  //趋势报警特征值
                  trendAlarm_val: trendAlarm_source[baseInfo.trendAlarm],
                  trendAlarm_sources: Object.values(trendAlarm_source),
                  trendAlarm_sources_key: Object.keys(trendAlarm_source)
                });
              }

              Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["computed__frequency_spectral"])(position);

              for (var k = 0; k < 8; k++) {
                var band = baseInfo.band;
                position.baseInfo["band".concat(k)] = {
                  dwOpt_freq_selected: band[k].dwOpt_freq_selected == "" ? "0" : band[k].dwOpt_freq_selected,
                  //是否选择频段
                  dwOpt_freq_name: band[k].dwOpt_freq_name == "" ? "\u9891\u6BB51-".concat(k + 1) : band[k].dwOpt_freq_name,
                  //是否有频段名称
                  optfreq_type: band[k].optfreq_type == "" ? "0" : band[k].optfreq_type,
                  //频段类型，如果没有默认给能量有效值
                  optfreq_type_val: band[k].optfreq_type == "" ? optfreq_type_choose['0'] : optfreq_type_choose[band[k].optfreq_type],
                  optfreq_type_sources: Object.values(optfreq_type_choose),
                  optfreq_type_sources_key: Object.keys(optfreq_type_choose),
                  band_factor_name: band[k].band_factor_name == "" ? "\u9891\u6BB52-".concat(k + 1) : band[k].band_factor_name,
                  //是否有频段名称
                  band_factor_type: band[k].band_factor_type == "" ? "0" : band[k].band_factor_type,
                  //频段类型，如果没有默认给能量有效值
                  band_factor_type_val: band[k].band_factor_type == "" ? band_factor_type_choose['0'] : band_factor_type_choose[band[k].band_factor_type],
                  band_factor_type_sources: Object.values(band_factor_type_choose),
                  band_factor_type_sources_key: Object.keys(band_factor_type_choose),
                  dwOpt_freq_begin: band[k].dwOpt_freq_begin == "" ? "0.1" : band[k].dwOpt_freq_begin,
                  dwOpt_freq_end: band[k].dwOpt_freq_end == "" ? "10" : band[k].dwOpt_freq_end
                };
              }

              if (type == 6 || type == 12) {
                // 晃度和倾角的共同属性
                Object.assign(position.baseInfo, {
                  tower_H: baseInfo.tower_H,
                  //安装高度
                  tt_sensor_name: baseInfo.tt_sensor_name,
                  //传感器名称
                  tt_ch_type: baseInfo.tt_ch_type,
                  // 关联通道（虚拟） 倾覆或合成倾角的测点类型
                  tt_ch_id: baseInfo.tt_ch_id,
                  //关联通道（虚拟） 倾覆或合成倾角的测点id
                  tt_pos_loc: baseInfo.tt_pos_loc //安装位置 塔顶、机舱、塔底

                });
              }

              if (type == 11 || type == 13) {
                //倾覆和合成倾角共有部分
                Object.assign(position.baseInfo, {
                  tt_sensor_name: baseInfo.tt_sensor_name,
                  //传感器名称
                  tt_ch_type: baseInfo.tt_ch_type,
                  // 关联通道（虚拟） 倾覆或合成倾角的测点类型
                  tt_ch_id: baseInfo.tt_ch_id,
                  //关联通道（虚拟） 倾覆或合成倾角的测点id
                  tt_pos_loc: baseInfo.tt_pos_loc,
                  //安装位置 塔顶、机舱、塔底
                  tt_pos_loc_source: Object.values(tt_pos_loc_source),
                  tt_pos_loc_source_key: Object.keys(tt_pos_loc_source),
                  rock1_id: baseInfo.rock1_id,
                  rock1_pos_name: baseInfo.rock1_pos_name,
                  // 晃度X名称
                  rock1_ch_id: baseInfo.rock1_ch_id,
                  rock2_id: baseInfo.rock2_id,
                  rock2_pos_name: baseInfo.rock2_pos_name,
                  // 晃度Y名称
                  rock2_ch_id: baseInfo.rock2_ch_id,
                  tower_H: baseInfo.tower_H //安装高度

                });

                if (type == 11) {
                  //倾覆独有部分
                  Object.assign(position.baseInfo, {
                    rock1_ch_name: rock_chaList[positions.dgm_id][positions.ch_name + "X"].ch_name,
                    //晃度X关联通道名称
                    rock1_ch_type: rock_chaList[positions.dgm_id][positions.ch_name + "X"].ch_type,
                    //关联通道的类型
                    rock2_ch_name: rock_chaList[positions.dgm_id][positions.ch_name + "Y"].ch_name,
                    //晃度Y关联通道
                    rock2_ch_type: rock_chaList[positions.dgm_id][positions.ch_name + "Y"].ch_type,
                    //关联通道的类型
                    sUnitName: baseInfo.sUnitName,
                    self1: baseInfo.self1,
                    self2: baseInfo.self2
                  });
                }

                if (type == 13) {
                  //合成倾角独有部分
                  var rock1_ch_name;
                  var rock2_ch_name;
                  var rock_ch_type;
                  var rockSource;

                  if (baseInfo.sourceType == 5) {
                    //串口
                    var moduleList = rock_chaList[position.dgm_id]['module_name'];
                    rockSource = Object.keys(moduleList);
                    rock1_ch_name = rock2_ch_name = rock_chaList[positions.dgm_id]["module_id"][baseInfo.rock1_ch_id].ch_name;
                    rock_ch_type = 5; //串口通道
                  } else if (baseInfo.sourceType == 0) {
                    //振动
                    rock1_ch_name = rock_chaList[positions.dgm_id][positions.ch_name + "X"].ch_name;
                    rock2_ch_name = rock_chaList[positions.dgm_id][positions.ch_name + "Y"].ch_name;
                    rock_ch_type = 0; //振动通道
                  }

                  Object.assign(position.baseInfo, {
                    rock1_ch_name: rock1_ch_name,
                    //
                    rock1_ch_type: rock_ch_type,
                    rock2_ch_name: rock2_ch_name,
                    //晃度Y关联通道
                    rock2_ch_type: rock_ch_type,
                    rock1_ch_sources: rockSource,
                    //rock可选通道
                    rock2_ch_sources: rockSource,
                    offset_angle: baseInfo.offset_angle,
                    //偏置角度
                    dip_model: baseInfo.dip_model,
                    //传感器类型
                    dip_model_val: dip_model_choose[baseInfo.dip_model],
                    dip_model_sources: Object.values(dip_model_choose),
                    dip_model_sources_key: Object.keys(dip_model_choose),
                    sourceType: baseInfo.sourceType,
                    //数据来源
                    sourceType_val: sourceType_choose[baseInfo.sourceType],
                    sourceType_sources: Object.values(sourceType_choose),
                    sourceType_sources_key: Object.keys(sourceType_choose),
                    diameter: baseInfo.diameter,
                    //基础直径
                    offset1: baseInfo.offset1,
                    //偏移量1
                    slaveid1: baseInfo.slaveid1,
                    //从设备号1
                    offset2: baseInfo.offset2,
                    //偏移量2
                    slaveid2: baseInfo.slaveid2,
                    //从设备号2
                    datamode1: baseInfo.datamode1,
                    //过程量类型
                    datamode1_val: datamode_choose[baseInfo.datamode1],
                    datamode1_sources: Object.values(datamode_choose),
                    datamode1_sources_key: Object.keys(datamode_choose),
                    datamode2: baseInfo.datamode2,
                    datamode2_val: datamode_choose[baseInfo.datamode2],
                    datamode2_sources: Object.values(datamode_choose),
                    datamode2_sources_key: Object.keys(datamode_choose)
                  });
                }
              }
            }

            if (type == 1) {
              //转速测点
              position.baseInfo = {
                baseRate: baseInfo.baseRate,
                byUnit: baseInfo.byUnit,
                speedRate: baseInfo.speedRate,
                min_speed: baseInfo.min_speed,
                max_speed: baseInfo.max_speed,
                svibsList: baseInfo.svibsList
              };

              if (positions.dgm_type == 7) {
                position.baseInfo.speedRate = ''; //tms的转速测点的转速比放到了通道设置里面，将转速测点的转速比置空
              }
            }

            if (type == 7 || type == 2) {
              //温度过程量测点
              position.baseInfo = {
                h_limit: baseInfo.h_limit,
                hh_limit: baseInfo.hh_limit,
                hhh_limit: baseInfo.hhh_limit,
                l_limit: baseInfo.l_limit,
                ll_limit: baseInfo.ll_limit,
                lll_limit: baseInfo.lll_limit
              };
            }

            if (type == 5) {
              //数字量
              position.baseInfo = {
                hh_limit: baseInfo.hh_limit,
                h_limit: baseInfo.h_limit,
                calc_method: baseInfo.calc_method,
                calc_method_val: calc_method_choose[baseInfo.calc_method],
                calc_method_sources: Object.values(calc_method_choose),
                calc_method_sources_key: Object.keys(calc_method_choose)
              };
            }

            if (type == 14) {
              //螺栓测点
              position.baseInfo = {
                alarmList: baseInfo.alarmList,
                alarm_smooth_a: baseInfo.alarm_smooth_a,
                alarm_smooth_b: baseInfo.alarm_smooth_b,
                posShow: baseInfo.posShow,
                alarm_grow: baseInfo.alarm_grow,
                warn_grow: baseInfo.warn_grow
              };
            }

            if (type == 10) {
              //工艺量测点
              position.baseInfo = {
                byUnit: baseInfo.byUnit,
                //单位索引
                normal: baseInfo.normal,
                //过程量正常类型转换
                byUnitName: baseInfo.byUnitName,
                //名称
                unitNum: baseInfo.unitNum,
                //数据有效位
                hh_limit: baseInfo.hh_limit,
                //报警高
                h_limit: baseInfo.h_limit,
                //预警高
                l_limit: baseInfo.l_limit,
                //预警低
                ll_limit: baseInfo.ll_limit,
                //报警低
                hi_value: baseInfo.hi_value,
                //工程量输入范围高
                low_value: baseInfo.low_value,
                //工程量输入范围低
                ref_vol: baseInfo.ref_vol,
                //信号输入范围高
                ref_eng: baseInfo.ref_eng,
                //信号输入范围低
                scale: baseInfo.scale,
                //校正参数
                corr: baseInfo.corr,
                //零点偏移
                dataaddress: baseInfo.dataaddress,
                //数据地址
                datatype: baseInfo.datatype,
                //数据类型
                datatype_val: datatypeSource[baseInfo.datatype],
                datatype_sources: Object.values(datatypeSource),
                datatype_sources_key: Object.keys(datatypeSource),
                datamode: baseInfo.datamode,
                //过程量类型
                datamode_val: datamode_choose[baseInfo.datamode],
                datamode_sources: Object.values(datamode_choose),
                datamode_sources_key: Object.keys(datamode_choose),
                slaveid: baseInfo.slaveid,
                //从设备号
                value_left: baseInfo.value_left,
                //左比较值
                value_right: baseInfo.value_right,
                //右比较值
                sensor_id: baseInfo.sensor_id,
                //传感器类型
                sensor_id_val: sensor_id_source[baseInfo.sensor_id],
                sensorId_sources: Object.values(sensor_id_source),
                sensorId_sources_key: Object.keys(sensor_id_source),
                cc_mod_id: baseInfo.cc_mod_id,
                cc_mod_id_val: cc_mod_sources[baseInfo.cc_mod_id],
                cc_mod_id_sources: cc_mod_sources
              };
            }

            if (type == 200) {
              //长采样测点
              var capture_byId = baseInfo.capture_byId;
              var capture_sources = [];
              var capture_chName_sources = [];

              if (baseInfo.capture_mode == 0) {
                //定时采样

                /* 序号可选 */
                capture_sources = Object.keys(cap_sequenceNum[positions.dgm_id]);
                /* 通道不可选 */

                capture_chName_sources = [positions.ch_name];
              } else if (baseInfo.capture_mode == 1) {
                /* 序号不可选 */
                capture_sources = [];
                /* 通道可选 */

                capture_chName_sources = Object.keys(pos_chaList[positions.dgm_id]);
              }

              position.baseInfo = {
                capture_mode: baseInfo.capture_mode,
                //采样方式 0=定时 1=手动
                method_val: method_choose[baseInfo.capture_mode],
                method_sources: Object.values(method_choose),
                method_sources_key: Object.keys(method_choose),
                capture_byId: capture_byId,
                //定时长采样序号
                capture_sources: capture_sources,
                //定时长采样序号可选
                capture_chName: positions.ch_name,
                //定时长采样通道
                capture_chName_sources: capture_chName_sources //长采样通道的可选

              };
            }

            if (type == 18) {
              //脱轨检测测点
              position.isalarm = "1";
              position.isalarm_val = "报警";
              position.baseInfo = {
                sleeper_len: baseInfo.sleeper_len,
                shock_threshold: baseInfo.shock_threshold,
                shock_threshold_sources: shock_threshold_source,
                shock_num: baseInfo.shock_num
              };
            }

            if (tmsPosList.includes(type)) {
              //tms采集器包含的测点类型加上‘数码管显示’
              if (positions.dgm_type != 7) {
                baseInfo.if_show = ""; //非tms采集器下的测点这个属性值置空
              }

              Object.assign(position.baseInfo, {
                if_show: baseInfo.if_show,
                //数码管显示
                if_show_val: if_show_source[baseInfo.if_show],
                if_show_sources: Object.values(if_show_source),
                if_show_sources_key: Object.keys(if_show_source)
              });
            }

            data.push(position);
          });
        });
      });
      return {
        pos_folderList: pos_folderList,
        pos_machineList: pos_machineList,
        pos_dgmList: pos_dgmList,
        pos_chaList: pos_chaList,
        mac_pos_id_list: mac_pos_id_list,
        task_idSources: task_idSources,
        rock_chaList: rock_chaList,
        cap_sequenceNum: cap_sequenceNum,
        cap_chaList: cap_chaList,
        rock_pos_id_list: rock_pos_id_list,
        rock_list: rock_list,
        invalidPos: invalidPos,
        cc_mod_id_list: cc_mod_id_list,
        data: data
      };
    }
  }
}
function createPosition(type) {
  if (type == 17) {
    optfreq_type_choose = {
      '0': '有效值'
    };
    band_factor_type_choose = {
      '0': '频段因数'
    };
  } else {
    optfreq_type_choose = {
      '0': '能量有效值',
      '1': '速度值',
      '2': '加速度值'
    };
    band_factor_type_choose = {
      '0': '频段因数',
      '1': '速度值',
      '2': '加速度值'
    };
  }

  var position = {
    operate: 1,
    oldInfo: {},
    //标记测点修改之前的信息
    updateTime: 0,
    //未添加的属性在后续函数中添加
    t_id: '',
    t_name: '',
    t_sources: '',
    //下拉列表
    mac_id: '',
    m_type: '',
    mac_me: '',
    macName_sources: {},
    //下拉列表
    dgm_id: '',
    dgm_type: '',
    dgm_name: '',
    dgm_sources: {},
    //下拉列表
    ch_id: "",
    ch_type: "",
    ch_name: '',
    ch_sources: {},
    pos_id: "",
    pos_name: "",
    pos_type: type,
    pos_type_name: Object(_pos_methods_js__WEBPACK_IMPORTED_MODULE_0__["posType_name"])(type),
    pos_activity: "0",
    pos_activity_val: "有效",
    pos_activity_sources: Object.values(pos_activity_choose),
    pos_activity_sources_key: Object.keys(pos_activity_choose),
    isalarm: "0",
    isalarm_val: "不报警",
    isalarm_sources: Object.values(isalarm_choose),
    isalarm_sources_key: Object.keys(isalarm_choose),
    task_id: "",
    task_id_old: "",
    task_id_val: "",
    task_id_sources: "",
    task_id_choose: Object.values(task_id_choose),
    task_id_choose_key: Object.keys(task_id_choose),
    baseInfo: {
      posShow: "0",
      //是否显示在总貌图
      alarm_smooth_a: '5',
      alarm_smooth_b: '5',
      alarmList: [],
      //报警值

      /* 转速 */
      speedRate: '1',
      baseRate: '1',
      byUnit: 'rpm',
      min_speed: 7,
      max_speed: 25,
      svibsList: [],

      /* 温度过程量系列 */
      hhh_limit: "30",
      hh_limit: "20",
      h_limit: "10",
      l_limit: "-10",
      ll_limit: "-20",
      lll_limit: "-30",

      /* 数字量系列 */
      calc_method: "0",
      //计算方式
      calc_method_val: "计数",
      calc_method_sources: Object.values(calc_method_choose),
      calc_method_sources_key: Object.keys(calc_method_choose),
      // hh_limit:"20",//报警（高）
      // h_limit:"10",//预警（高）

      /* 振动测点 */
      levelRms: '0',
      //过滤阈值：这个可以填小数
      areaRatio: '20',
      //增长百分比：正数，填20，就是20%的意思
      sampHours: '24',
      //平均值计算时间：正整数，多少小时的意思
      death_time: '4',
      //死区时间，单位小时，新增：正整数
      packn: '2',
      //连续n包，新增：正整数
      trendAlarm: 2000,
      //趋势报警特征值
      trendAlarm_val: trendAlarm_source[2000],
      trendAlarm_sources: Object.values(trendAlarm_source),
      trendAlarm_sources_key: Object.keys(trendAlarm_source),

      /* 振动系列 */
      frequency: "",
      frequency_val: "",
      frequency_sources: "",
      spectral: "",
      spectral_val: "",
      spectral_sources: "",
      filter: "0",
      filter_val: "滤波器1",
      filter_sources: Object.values(filter_choose),
      filter_sources_key: Object.keys(filter_choose),
      order: "",
      specOrder: "",
      //过采样
      resampling: '0',
      resampling_val: '是',
      resampling_sources: Object.values(resampling_choose),
      resampling_sources_key: Object.keys(resampling_choose),

      /* 工艺量 */
      // byUnit: "0",//单位索引
      byUnitName: "m",
      //名称
      unitNum: "4",
      //数据有效位
      // hh_limit: "20",//报警高 (上面有)
      // h_limit: "10",//预警高
      // l_limit:"-10",//预警低
      // ll_limit:"-20",//报警低
      hi_value: "1000",
      //工程量输入范围高
      low_value: "-1000",
      //工程量输入范围低
      ref_vol: "1000",
      //信号输入范围高
      ref_eng: "-1000",
      //信号输入范围低
      corr: "1",
      //校正参数
      scale: "0",
      //零点偏移
      dataaddress: "40001",
      //数据地址
      datamode: "0",
      //过程量类型
      datamode_val: "读保持寄存器",
      datamode_sources: Object.values(datamode_choose),
      datamode_sources_key: Object.keys(datamode_choose),
      slaveid: "1",
      //从设备号
      normal: "0",
      //正常
      value_left: "0",
      //左比较值
      value_right: "0",
      //右比较值

      /* 倾覆和合成倾角的测点 */
      tt_sensor_name: "",
      //传感器名称
      tt_ch_type: type,
      // 关联通道（虚拟） 倾覆或合成倾角的测点类型
      tt_ch_id: "",
      //关联通道（虚拟） 倾覆或合成倾角的测点id
      tt_pos_loc: "",
      //安装位置 塔顶、机舱、塔底
      tt_pos_loc_source: Object.values(tt_pos_loc_source),
      tt_pos_loc_source_key: Object.keys(tt_pos_loc_source),
      rock1_id: "",
      rock1_pos_name: "",
      // 晃度倾角X名称
      rock1_ch_id: "",
      rock1_ch_name: " ",
      //晃度倾角X关联通道名称
      rock1_ch_sources: "",
      rock2_id: "",
      rock2_pos_name: "",
      // 晃度倾角Y名称
      rock2_ch_id: "",
      rock2_ch_name: "  ",
      //晃度倾角Y关联通道
      rock2_ch_sources: "",
      sUnitName: "mm",
      self1: "0",
      self2: "0",

      /* 合成倾角部分 */
      offset_angle: 0,
      //偏置角度
      dip_model: "0",
      //传感器类型
      dip_model_val: "WindIT 2917BV",
      dip_model_sources: Object.values(dip_model_choose),
      dip_model_sources_key: Object.keys(dip_model_choose),
      sourceType: '5',
      //数据来源
      sourceType_val: '串口',
      sourceType_sources: Object.values(sourceType_choose),
      sourceType_sources_key: Object.keys(sourceType_choose),
      diameter: 4000,
      //基础直径
      offset1: 0,
      //偏移量1
      slaveid1: 1,
      //从设备号1
      offset2: 0,
      //偏移量2
      slaveid2: 1,
      //从设备号2
      datamode1: '0',
      //过程量类型 '读保持寄存器'
      datamode1_val: '读保持寄存器',
      datamode1_sources: Object.values(datamode_choose),
      datamode1_sources_key: Object.keys(datamode_choose),
      datamode2: '0',
      datamode2_val: '读保持寄存器',
      datamode2_sources: Object.values(datamode_choose),
      datamode2_sources_key: Object.keys(datamode_choose),

      /* 长采样默认值 */
      capture_mode: "1",
      method_val: "手动采样",
      method_sources: Object.values(method_choose),
      method_sources_key: Object.keys(method_choose),
      capture_byId: '1',
      //定时长采样序号
      capture_sources: "",
      //定时长采样序号可选
      capture_chName: "",
      //定时长采样通道
      capture_chName_sources: [] //长采样通道的可选

    }
  };
  var dwOpt_freq_begin, dwOpt_freq_end;

  for (var i = 0; i < 8; i++) {
    if (i == 0) {
      dwOpt_freq_begin = '0.1';
      dwOpt_freq_end = '10';
    } else if (i == 1) {
      dwOpt_freq_begin = '10';
      dwOpt_freq_end = '2000';
    } else if (i == 2) {
      dwOpt_freq_begin = '10';
      dwOpt_freq_end = '5000';
    } else {
      dwOpt_freq_begin = "".concat(i * 10);
      dwOpt_freq_end = "".concat((i + 1) * 10);
    }

    position.baseInfo["band".concat(i)] = {
      dwOpt_freq_selected: "0",
      dwOpt_freq_name: "\u9891\u6BB5".concat(i + 1, "-1"),
      optfreq_type_val: optfreq_type_choose['0'],
      optfreq_type: "0",
      optfreq_type_sources: Object.values(optfreq_type_choose),
      optfreq_type_sources_key: Object.keys(optfreq_type_choose),
      band_factor_name: "\u9891\u6BB5".concat(i + 1, "-2"),
      band_factor_type_val: "频段因数",
      band_factor_type: "0",
      band_factor_type_sources: Object.values(band_factor_type_choose),
      band_factor_type_sources_key: Object.keys(band_factor_type_choose),
      dwOpt_freq_begin: dwOpt_freq_begin,
      dwOpt_freq_end: dwOpt_freq_end
    };
  }

  if (type == 10) {
    position.baseInfo.byUnit = "0";
    position.baseInfo.sensor_id = "0";
    position.baseInfo.sensor_id_val = "无";
    position.baseInfo.sensorId_sources = Object.values(sensor_id_source);
    position.baseInfo.sensorId_sources_key = Object.keys(sensor_id_source);
    position.baseInfo.datatype = '1'; //数据类型

    position.baseInfo.datatype_val = 'Float';
    position.baseInfo.datatype_sources = Object.values(datatypeSource);
    position.baseInfo.datatype_sources_key = Object.keys(datatypeSource);
    position.baseInfo.cc_mod_id = '0'; //关联组态

    position.baseInfo.cc_mod_id_val = 'd1_mod_01';
    position.baseInfo.cc_mod_id_sources = ['d1_mod_01'];
  }

  if (type == 3 || type == 15 || type == 4 || type == 8 || type == 16 || type == 9 || type == 6 || type == 11 || type == 12 || type == 13 || type == 17) {
    //振动系报警值较多
    position.isalarm_sources = Object.values(isalarm_vib_choose);
    position.isalarm_sources_key = Object.keys(isalarm_vib_choose);
  }

  if (type == 6 || type == 12 || type == 13 || type == 11) {
    position.baseInfo.tower_H = '65'; //安装高度
  }

  if (tmsPosList.includes(type)) {
    //tms采集器包含的测点类型加上‘数码管显示’
    position.baseInfo.if_show = '0'; //数码管显示

    position.baseInfo.if_show_val = "不显示";
    position.baseInfo.if_show_sources = Object.values(if_show_source);
    position.baseInfo.if_show_sources_key = Object.keys(if_show_source);
  }

  if (type == 18) {
    /* 脱轨监测测点 */
    position.isalarm = "1";
    position.isalarm_val = "报警";
    position.baseInfo.sleeper_len = 500;
    position.baseInfo.shock_threshold = 80;
    position.baseInfo.shock_threshold_sources = shock_threshold_source;
    position.baseInfo.shock_num = 2;
  }

  if (position.dgm_type != 7) {
    //非tms采集器这个属性值置空
    position.baseInfo.if_show = ''; //数码管显示

    position.baseInfo.if_show_val = ''; //数码管显示
  } else {
    position.baseInfo.speedRate = ''; //tms的转速测点的转速比放到了通道设置里面，将转速测点的转速比置空

    position.baseInfo.if_show = '0'; //数码管显示

    position.baseInfo.if_show_val = '不显示'; //数码管显示
  }

  return position;
}
function changePosition(type, oldPosition) {
  var position = {};
  position.index = oldPosition.index;
  position.updateTime = oldPosition.updateTime;
  position.mac_id = oldPosition.mac_id; //机组uid

  position.m_type = Number(oldPosition.m_type); //机组uid

  position.dgm_type = Number(oldPosition.dgm_type); //采集站类型：处理测点设置的差异化、测点数目等

  position.dgm_id = Number(oldPosition.dgm_id);
  position.dgm_name = oldPosition.dgm_name;

  if (oldPosition.ch_id != '') {
    position.ch_id = Number(oldPosition.ch_id); //通道
  } else {
    position.ch_id = oldPosition.ch_id; //通道
  }

  position.ch_type = Number(oldPosition.ch_type);
  position.ch_name = oldPosition.ch_name;
  position.pos_id = Number(oldPosition.pos_id);
  position.pos_type = Number(type);
  position.pos_name = oldPosition.pos_name; //测点名称

  position.old_task_id = oldPosition.old_task_id; //没改之前的任务

  if (oldPosition.task_id != '') {
    position.task_id = oldPosition.task_id; //任务
  } else {
    position.task_id = 0; //任务
  }

  position.pos_activity = Number(oldPosition.pos_activity); //是否有效

  position.isalarm = Number(oldPosition.isalarm); //报警

  if (type == 3 || type == 15 || type == 4 || type == 8 || type == 16 || type == 9 || type == 6 || type == 12 || type == 11 || type == 13 || type == 17) {
    //振动系列
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      alarmList: oldPosition.baseInfo.alarmList,
      // resampling: '0',//重新采样
      posShow: "0",
      //是否显示在总貌图
      filter: oldPosition.baseInfo.filter,
      hanning: "1",
      //是否汉宁窗
      warn_grow: "20",
      //预警梯度
      alarm_grow: "20",
      //报警梯度
      frequency: oldPosition.baseInfo.frequency,
      spectral: oldPosition.baseInfo.spectral,
      resampling: oldPosition.baseInfo.resampling,
      //过采样
      band: []
    };

    for (var i = 0; i < 8; i++) {
      position.baseInfo.band[i] = {
        lineNum: String(i + 1),
        dwOpt_freq_selected: oldPosition.baseInfo["band".concat(i)].dwOpt_freq_selected,
        dwOpt_freq_name: oldPosition.baseInfo["band".concat(i)].dwOpt_freq_name,
        optfreq_type: oldPosition.baseInfo["band".concat(i)].optfreq_type,
        band_factor_name: oldPosition.baseInfo["band".concat(i)].band_factor_name,
        band_factor_type: oldPosition.baseInfo["band".concat(i)].band_factor_type,
        dwOpt_freq_begin: oldPosition.baseInfo["band".concat(i)].dwOpt_freq_begin,
        dwOpt_freq_end: oldPosition.baseInfo["band".concat(i)].dwOpt_freq_end
      };
    }

    if (type == 3) {
      //微信报警信息
      Object.assign(position.baseInfo, {
        levelRms: oldPosition.baseInfo.levelRms,
        //过滤阈值：这个可以填小数
        areaRatio: oldPosition.baseInfo.areaRatio,
        //增长百分比：正数，填20，就是20%的意思
        sampHours: oldPosition.baseInfo.sampHours,
        //平均值计算时间：正整数，多少小时的意思
        death_time: oldPosition.baseInfo.death_time,
        //死区时间，单位小时，新增：正整数
        packn: oldPosition.baseInfo.packn,
        //连续n包，新增：正整数
        trendAlarm: oldPosition.baseInfo.trendAlarm //趋势报警特征值

      });
    }

    if (type == 6 || type == 12) {
      // 晃度和倾角的共同属性
      Object.assign(position.baseInfo, {
        tower_H: oldPosition.baseInfo.tower_H,
        //安装高度
        tt_sensor_name: oldPosition.baseInfo.tt_sensor_name,
        //传感器名称
        tt_ch_type: oldPosition.baseInfo.tt_ch_type,
        // 关联通道（虚拟） 倾覆或合成倾角的测点类型
        tt_ch_id: oldPosition.baseInfo.tt_ch_id,
        //关联通道（虚拟） 倾覆或合成倾角的测点id
        tt_pos_loc: oldPosition.baseInfo.tt_pos_loc //安装位置 塔顶、机舱、塔底

      });
    }

    if (type == 11 || type == 13) {
      //倾覆和合成倾角
      Object.assign(position.baseInfo, {
        tt_sensor_name: oldPosition.baseInfo.tt_sensor_name,
        //传感器名称
        tt_ch_type: oldPosition.baseInfo.tt_ch_type,
        // 关联通道（虚拟） 倾覆或合成倾角的测点类型
        tt_ch_id: oldPosition.baseInfo.tt_ch_id,
        //关联通道（虚拟） 倾覆或合成倾角的测点id
        tt_pos_loc: oldPosition.baseInfo.tt_pos_loc,
        //安装位置 塔顶、机舱、塔底
        rock1_id: oldPosition.baseInfo.rock1_id,
        rock1_pos_name: oldPosition.baseInfo.rock1_pos_name,
        rock1_ch_id: oldPosition.baseInfo.rock1_ch_id,
        rock1_ch_name: oldPosition.baseInfo.rock1_ch_name,
        rock1_ch_type: oldPosition.baseInfo.rock1_ch_type,
        rock2_id: oldPosition.baseInfo.rock2_id,
        rock2_pos_name: oldPosition.baseInfo.rock2_pos_name,
        rock2_ch_id: oldPosition.baseInfo.rock2_ch_id,
        rock2_ch_name: oldPosition.baseInfo.rock2_ch_name,
        rock2_ch_type: oldPosition.baseInfo.rock2_ch_type,
        tower_H: oldPosition.baseInfo.tower_H //安装高度

      });

      if (type == 11) {
        //倾覆独有部分
        Object.assign(position.baseInfo, {
          sUnitName: oldPosition.baseInfo.sUnitName,
          self1: oldPosition.baseInfo.self1,
          self2: oldPosition.baseInfo.self2
        });
      }

      if (type == 13) {
        //合成倾角独有部分
        Object.assign(position.baseInfo, {
          offset_angle: oldPosition.baseInfo.offset_angle,
          //偏置角度
          dip_model: oldPosition.baseInfo.dip_model,
          //传感器类型
          sourceType: oldPosition.baseInfo.sourceType,
          //数据来源
          diameter: oldPosition.baseInfo.diameter,
          //基础直径
          offset1: oldPosition.baseInfo.offset1,
          //偏移量1
          slaveid1: oldPosition.baseInfo.slaveid1,
          //从设备号1
          offset2: oldPosition.baseInfo.offset2,
          //偏移量2
          slaveid2: oldPosition.baseInfo.slaveid2,
          //从设备号2
          datamode1: oldPosition.baseInfo.datamode1,
          //过程量类型
          datamode2: oldPosition.baseInfo.datamode2
        });
      }
    }
  } else if (type == 1) {
    //转速系列
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      speedRate: oldPosition.baseInfo.speedRate,
      baseRate: oldPosition.baseInfo.baseRate,
      byUnit: oldPosition.baseInfo.byUnit,
      min_speed: oldPosition.baseInfo.min_speed,
      max_speed: oldPosition.baseInfo.max_speed,
      svibsList: oldPosition.baseInfo.svibsList
    };
  } else if (type == 7 || type == 2) {
    //温度过程量测点
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      h_limit: oldPosition.baseInfo.h_limit,
      hh_limit: oldPosition.baseInfo.hh_limit,
      hhh_limit: oldPosition.baseInfo.hhh_limit,
      l_limit: oldPosition.baseInfo.l_limit,
      ll_limit: oldPosition.baseInfo.ll_limit,
      lll_limit: oldPosition.baseInfo.lll_limit
    };
  } else if (type == 5) {
    //数字量
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      hh_limit: oldPosition.baseInfo.hh_limit,
      h_limit: oldPosition.baseInfo.h_limit,
      calc_method: oldPosition.baseInfo.calc_method
    };
  } else if (type == 10) {
    //工艺量
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      posShow: oldPosition.baseInfo.posShow,
      //是否显示在总貌图
      byUnit: oldPosition.baseInfo.byUnit,
      //单位索引
      byUnitName: oldPosition.baseInfo.byUnitName,
      //名称
      unitNum: oldPosition.baseInfo.unitNum,
      //数据有效位
      hh_limit: oldPosition.baseInfo.hh_limit,
      //报警高
      h_limit: oldPosition.baseInfo.h_limit,
      //预警高
      l_limit: oldPosition.baseInfo.l_limit,
      //预警低
      ll_limit: oldPosition.baseInfo.ll_limit,
      //报警低
      hi_value: oldPosition.baseInfo.hi_value,
      //工程量输入范围高
      low_value: oldPosition.baseInfo.low_value,
      //工程量输入范围低
      ref_vol: oldPosition.baseInfo.ref_vol,
      //信号输入范围高
      ref_eng: oldPosition.baseInfo.ref_eng,
      //信号输入范围低
      scale: oldPosition.baseInfo.scale,
      //校正参数
      corr: oldPosition.baseInfo.corr,
      //零点偏移
      dataaddress: oldPosition.baseInfo.dataaddress,
      //数据地址
      datamode: oldPosition.baseInfo.datamode,
      slaveid: oldPosition.baseInfo.slaveid,
      //从设备号
      normal: oldPosition.baseInfo.normal,
      value_left: oldPosition.baseInfo.value_left,
      //左比较值
      value_right: oldPosition.baseInfo.value_right,
      //右比较值
      sensor_id: oldPosition.baseInfo.sensor_id,
      //传感器类型
      datatype: oldPosition.baseInfo.datatype,
      //数据类型
      cc_mod_id: oldPosition.baseInfo.cc_mod_id //关联组态

    };
  } else if (type == 200) {
    //长采样
    position.baseInfo = {
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      capture_mode: oldPosition.baseInfo.capture_mode,
      capture_byId: oldPosition.baseInfo.capture_byId
    };
  } else if (type == 14) {
    //螺栓测点
    position.baseInfo = {
      alarmList: oldPosition.baseInfo.alarmList,
      alarm_smooth_a: oldPosition.baseInfo.alarm_smooth_a,
      alarm_smooth_b: oldPosition.baseInfo.alarm_smooth_b,
      posShow: oldPosition.baseInfo.posShow,
      alarm_grow: oldPosition.baseInfo.alarm_grow,
      warn_grow: oldPosition.baseInfo.warn_grow
    };
  } else if (type == 18) {
    //脱轨监测测点
    position.isalarm = "1";
    position.isalarm_val = "报警";
    position.baseInfo = {
      sleeper_len: oldPosition.baseInfo.sleeper_len,
      shock_threshold: oldPosition.baseInfo.shock_threshold,
      shock_num: oldPosition.baseInfo.shock_num
    };
  }

  if (tmsPosList.includes(type)) {
    //tms采集器包含的测点类型加上‘数码管显示’
    position.baseInfo.if_show = oldPosition.baseInfo.if_show; //数码管显示
  }
  /* 加入共同的baseInfo属性 */


  position.baseInfo.alarmList = oldPosition.baseInfo.alarmList; // console.log(position)

  return position;
}

/***/ }),

/***/ "./src/components/content/system/position/table/js/pos_methods.js":
/*!************************************************************************!*\
  !*** ./src/components/content/system/position/table/js/pos_methods.js ***!
  \************************************************************************/
/*! exports provided: posType_name, frequencySources, spectralSources, taskId, taskArray, computed__frequency_spectral, addRows, reRenderSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posType_name", function() { return posType_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frequencySources", function() { return frequencySources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectralSources", function() { return spectralSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskId", function() { return taskId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskArray", function() { return taskArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed__frequency_spectral", function() { return computed__frequency_spectral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRows", function() { return addRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reRenderSelectOption", function() { return reRenderSelectOption; });
/* harmony import */ var _pos_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos_info.js */ "./src/components/content/system/position/table/js/pos_info.js");


function addRows(hot, data, row, type) {
  if (row == -1) {
    //通过点击新建按钮进入的方法，默认在最后一行添加
    row = 0;
    /* 在第一行添加新增行 */
  }

  hot.alter('insert_row', row);
  setTimeout(function () {
    hot.view.wt.wtTable.draw(); //为了让新加行渲染正确
  }); // setTimeout(function(){
  //   hot.render();//为了让新加行渲染正确
  // });

  reRenderSelectOption(hot, data, type, row, true);
}

function reRenderSelectOption(hot, data, type, newRow, isnew) {
  //重新渲染selectOption,让每个option
  var cellMeta = hot.getCellMetaAtRow(0);
  var rows = data.length - 1;
  cellMeta.forEach(function (item) {
    if (item.prop == "t_name") {
      //组织
      if (isnew) {
        //新建行的时候的遍历 一条数据
        hot.setCellMeta(newRow, item.col, "readOnly", false); //第一条的组织要可编辑

        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].t_sources;
        });
      } else {
        for (var i = 0; i < rows; i++) {
          //第一次创建hot时候的遍历 全部数据
          hot.setCellMeta(i, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].t_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "mac_me") {
      //机组
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "readOnly", false); //第一条的机组要可编辑

        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].macName_sources;
        });
      } else {
        for (var _i = 0; _i < rows; _i++) {
          hot.setCellMeta(_i, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].macName_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "dgm_name") {
      //采集器
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "readOnly", false); //第一条的采集器要可编辑

        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].dgm_sources;
        });
      } else {
        for (var _i2 = 0; _i2 < rows; _i2++) {
          hot.setCellMeta(_i2, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].dgm_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "ch_name") {
      //通道
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].ch_sources;
        });
      } else {
        for (var _i3 = 0; _i3 < rows; _i3++) {
          hot.setCellMeta(_i3, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].ch_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "task_id_val") {
      //任务标识
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].task_id_sources;
        });
      } else {
        for (var _i4 = 0; _i4 < rows; _i4++) {
          hot.setCellMeta(_i4, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].task_id_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "baseInfo.frequency_val") {
      //分析频率
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].baseInfo.frequency_sources;
        });
      } else {
        for (var _i5 = 0; _i5 < rows; _i5++) {
          hot.setCellMeta(_i5, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].baseInfo.frequency_sources;
          }); // hot.setCellMeta(i,item.col,"selectOptions",row=>{ return  ['12.5','14',4.4]})
        }
      }

      return;
    }

    if (item.prop == "baseInfo.cc_mod_id_val") {
      //关联组态
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].baseInfo.cc_mod_id_sources;
        });
      } else {
        for (var _i6 = 0; _i6 < rows; _i6++) {
          hot.setCellMeta(_i6, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].baseInfo.cc_mod_id_sources;
          });
        }
      }

      return;
    }

    if (item.prop == "baseInfo.spectral") {
      //谱线数
      if (isnew) {
        //新建行的时候的遍历
        hot.setCellMeta(newRow, item.col, "selectOptions", function (row) {
          return data[hot.toPhysicalRow(row)].baseInfo.spectral_sources;
        });
      } else {
        for (var _i7 = 0; _i7 < rows; _i7++) {
          hot.setCellMeta(_i7, item.col, "selectOptions", function (row) {
            return data[hot.toPhysicalRow(row)].baseInfo.spectral_sources;
          });
        }
      }

      return;
    }
    /* 转速通道 */


    if (type == 1) {
      if (item.col >= 8) {
        //最大最小转速
        for (var _i8 = 0; _i8 < rows; _i8++) {
          var rowNum = hot.toPhysicalRow(_i8);

          if (data[rowNum].ch_type == 13) {
            hot.setCellMeta(_i8, item.col, "readOnly", false);
          } else {
            hot.setCellMeta(_i8, item.col, "readOnly", true);
          }
        }
      }
      /* tms转速比禁止修改且置空 */


      if (item.prop == 'baseInfo.speedRate') {
        for (var _i9 = 0; _i9 < rows; _i9++) {
          var _rowNum = hot.toPhysicalRow(_i9);

          if (data[_rowNum].dgm_type == 7) {
            hot.setCellMeta(_i9, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i9, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 振动测点 */


    if (type == 3) {
      if (item.col >= 8) {
        //WL9100 屏蔽分析频率后面的所有选项
        for (var _i10 = 0; _i10 < rows; _i10++) {
          var _rowNum2 = hot.toPhysicalRow(_i10);

          if (data[_rowNum2].dgm_type == 10) {
            hot.setCellMeta(_i10, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i10, item.col, "readOnly", false);

            if (item.col == 10 || item.col == 11) {
              hot.setCellMeta(_i10, item.col, "readOnly", true);
            }

            if (item.col >= 13) {
              //MHD 屏蔽频段
              if (data[_rowNum2].dgm_type == 4) {
                hot.setCellMeta(_i10, item.col, "readOnly", true);
              }
            }
          }
        }
      }
    }
    /* 数字量 */


    if (type == 5) {
      /* V1数字量，计算方式报警禁止修改且置空 */
      if (item.col == 7 || item.col == 8 || item.col == 9) {
        for (var _i11 = 0; _i11 < rows; _i11++) {
          var _rowNum3 = hot.toPhysicalRow(_i11);

          if (data[_rowNum3].dgm_type == 1 || data[_rowNum3].dgm_type == 2) {
            hot.setCellMeta(_i11, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i11, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 晃度 和倾角测点测点 */


    if (type == 6 || type == 12) {
      if (item.col == 3 || item.col == 4 || item.col == 5) {
        //晃度和倾角的通道禁止编辑 是否有效 测点名称
        for (var _i12 = 0; _i12 < rows; _i12++) {
          hot.setCellMeta(_i12, item.col, "readOnly", true);
        }
      } //MHD频段禁止编辑


      if (item.col >= 14) {
        for (var _i13 = 0; _i13 < rows; _i13++) {
          var _rowNum4 = hot.toPhysicalRow(_i13);

          if (data[_rowNum4].dgm_type == 4) {
            hot.setCellMeta(_i13, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i13, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 倾覆 */


    if (type == 11) {
      //MHD频段禁止编辑
      if (item.col >= 22) {
        for (var _i14 = 0; _i14 < rows; _i14++) {
          var _rowNum5 = hot.toPhysicalRow(_i14);

          if (data[_rowNum5].dgm_type == 4) {
            hot.setCellMeta(_i14, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i14, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 温度 */


    if (type == 7) {
      //MHD频段禁止编辑
      if (item.prop == 'isalarm_val') {
        for (var _i15 = 0; _i15 < rows; _i15++) {
          var _rowNum6 = hot.toPhysicalRow(_i15);

          if (data[_rowNum6].dgm_type == 7) {
            hot.setCellMeta(_i15, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i15, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 轨道波磨 */


    if (type == 17) {
      //已经建好的测点通道禁止编辑
      if (item.prop == 'ch_name') {
        for (var _i16 = 0; _i16 < rows; _i16++) {
          var _rowNum7 = hot.toPhysicalRow(_i16);

          if (data[_rowNum7].operate == 1) {
            hot.setCellMeta(_i16, item.col, "readOnly", false);
          } else if (data[_rowNum7].operate == 0) {
            hot.setCellMeta(_i16, item.col, "readOnly", true);
          }
        }
      }
    }
    /* 合成倾角 */


    if (type == 13) {
      //18X关联通道 、23Y关联通道,13传感器类型、20X从设备号 、21过程量类型 25Y从设备号、26Y过程量类型
      if (item.col == 18 || item.col == 23 || item.col == 13 || item.col == 20 || item.col == 21 || item.col == 25 || item.col == 26) {
        for (var _i17 = 0; _i17 < rows; _i17++) {
          var _rowNum8 = hot.toPhysicalRow(_i17);

          if (data[_rowNum8].baseInfo.sourceType == 0) {
            hot.setCellMeta(_i17, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i17, item.col, "readOnly", false);
          }
        }
      }
      /* MHD频段禁止编辑 */


      if (item.col >= 28) {
        for (var _i18 = 0; _i18 < rows; _i18++) {
          var _rowNum9 = hot.toPhysicalRow(_i18);

          if (data[_rowNum9].dgm_type == 4) {
            hot.setCellMeta(_i18, item.col, "readOnly", true);
          } else {
            hot.setCellMeta(_i18, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 长采样 */


    if (type == 200) {
      for (var _i19 = 0; _i19 < rows; _i19++) {
        var _rowNum10 = hot.toPhysicalRow(_i19);
        /* 新建测点采集方式可以更改 */


        if (item.col == 4) {
          //
          if (data[_rowNum10].operate == 1) {
            hot.setCellMeta(_i19, item.col, "readOnly", false);
          } else if (data[_rowNum10].operate == 0) {
            hot.setCellMeta(_i19, item.col, "readOnly", true);
          }
        }
        /* 定时采集 */


        if (data[_rowNum10].baseInfo.capture_mode == 0) {
          if (item.col == 6) {
            /* 序号可以编辑 */
            hot.setCellMeta(_i19, item.col, "readOnly", false);
          }

          if (item.col == 7) {
            /* 通道禁止编辑 */
            hot.setCellMeta(_i19, item.col, "readOnly", true);
          }
        }
        /* 手动采集 */


        if (data[_rowNum10].baseInfo.capture_mode == 1) {
          if (item.col == 6) {
            /* 序号禁止编辑 */
            hot.setCellMeta(_i19, item.col, "readOnly", true);
          }

          if (item.col == 7) {
            /* 通道可以编辑 */
            hot.setCellMeta(_i19, item.col, "readOnly", false);
          }
        }
      }
    }
    /* 脱轨检测测点 */


    if (type == 18) {
      //报警默认报警且禁止编辑
      if (item.prop == 'isalarm_val') {
        for (var _i20 = 0; _i20 < rows; _i20++) {
          hot.setCellMeta(_i20, item.col, "readOnly", true);
        }
      }
    }
    /*tms的测点类型需要加上“数码管显示”字段，其他类型的不可编辑*/


    if (_pos_info_js__WEBPACK_IMPORTED_MODULE_0__["tmsPosList"].includes(type) && item.prop == 'baseInfo.if_show_val') {
      for (var _i21 = 0; _i21 < rows; _i21++) {
        var _rowNum11 = hot.toPhysicalRow(_i21);

        if (data[_rowNum11].dgm_type != 7) {
          //非tms采集器的“数码管显示”不可编辑
          hot.setCellMeta(_i21, item.col, "readOnly", true);
        } else {
          hot.setCellMeta(_i21, item.col, "readOnly", false);
        }
      }
    }
  });
} //测点类型名称转化


function posType_name(type) {
  var postType_name = '';

  switch (parseInt(type)) {
    case 3:
      postType_name = "振动测点";
      break;

    case 4:
      postType_name = "包络测点";
      break;

    case 8:
      postType_name = "振动阶次测点";
      break;

    case 9:
      postType_name = "包络阶次测点";
      break;

    case 1:
      postType_name = "转速测点";
      break;

    case 200:
      postType_name = "长采样测点";
      break;

    case 6:
      postType_name = "晃度测点";
      break;

    case 11:
      postType_name = "倾覆测点";
      break;

    case 12:
      postType_name = "倾角测点";
      break;

    case 13:
      postType_name = "合成倾角测点";
      break;

    case 7:
      postType_name = "温度测点";
      break;

    case 2:
      postType_name = "过程量测点";
      break;

    case 5:
      postType_name = "数字量测点";
      break;

    case 10:
      postType_name = "工艺量测点";
      break;

    case 14:
      postType_name = "螺栓测点";
      break;

    case 15:
      postType_name = "冲击测点";
      break;

    case 16:
      postType_name = "冲击阶次测点";
      break;

    case 17:
      postType_name = "轨道波磨测点";
      break;

    case 18:
      postType_name = "脱轨监测测点";
      break;
  }

  return postType_name;
}
/**
   * *分析频率下拉选项
   * dgm_type：采集器类型；
   * posType：测点类型；分振动系的测点和包络类型测点
   * filter：滤波器；0,1,2（包络类型测点有）
   *
   * **/


function frequencySources(position, filter) {
  var dgm_type = position.dgm_type;
  var posType = position.pos_type;
  var frequency_sources = {};

  if (dgm_type == 1) {
    //dgu2000采集器
    frequency_sources = {
      '10': '10',
      '20': '20',
      '50': '50',
      '100': '100',
      '200': '200',
      '500': '500',
      '1000': '1K',
      '2000': '2K',
      '5000': '5K',
      '10000': '10K'
    };

    if (posType == 4) {
      //包络测点

      /* 滤波器 */
      if (filter == 0) {
        frequency_sources = {
          '10': '10',
          '20': '20',
          '50': '50',
          '100': '100',
          '200': '200',
          '500': '500'
        };
      } else if (filter == 1) {
        frequency_sources = {
          '10': '10',
          '20': '20',
          '50': '50',
          '100': '100',
          '200': '200',
          '500': '500',
          '1000': '1K',
          '2000': '2K'
        };
      } else if (filter == 2) {
        frequency_sources = {
          '50': '50',
          '100': '100',
          '200': '200',
          '500': '500',
          '1000': '1K',
          '2000': '2K',
          '5000': '5K',
          '10000': '10K'
        };
      }
    }
  }

  if (dgm_type == 2) {
    frequency_sources = {
      '10': '10',
      '20': '20',
      '50': '50',
      '100': '100',
      '200': '200',
      '500': '500',
      '1000': '1K',
      '2000': '2K'
    };
  } else if (dgm_type == 3 || dgm_type == 7 || dgm_type == 9 || dgm_type == 10 || dgm_type == 13) {
    //v2和tms、DGU2000E、WL9100、YHC5000
    if (posType == 3 || posType == 6 || posType == 11 || posType == 12 || posType == 13 || posType == 15) {
      //振动系测点,冲击测点
      frequency_sources = {
        '10': '10',
        '20': '20',
        '50': '50',
        '100': '100',
        '200': '200',
        '500': '500',
        '1000': '1K',
        '2000': '2K',
        '4000': '4K',
        '8000': '8K',
        '16000': '16K',
        '32000': '32K'
      };

      if (dgm_type == 3) {
        //dgu2000v2新增5k,10k，满足明阳现场的需求
        frequency_sources = {
          '10': '10',
          '20': '20',
          '50': '50',
          '100': '100',
          '200': '200',
          '500': '500',
          '1000': '1K',
          '2000': '2K',
          '4000': '4K',
          '5000': '5K',
          '8000': '8K',
          '10000': '10k',
          '16000': '16K',
          '32000': '32K'
        };
      }
      /*金风现场，采集器v2和DGU2000E的定制版*/


      if (config.company === 1 && (dgm_type == 3 || dgm_type == 9)) {
        frequency_sources = {
          '10': '10',
          '20': '20',
          '50': '50',
          '100': '100',
          '200': '200',
          '500': '500',
          '1000': '1K',
          '2000': '2K',
          '4000': '4K',
          '8000': '8K',
          '10000': '10k',
          '16000': '16K',
          '32000': '32K'
        };
      }
    } else if (posType == 4) {
      //包络测点,

      /* 滤波器 */
      if (filter == 0) {
        frequency_sources = {
          '12': '12.5',
          '25': '25',
          '50': '50',
          '100': '100',
          '200': '200'
        };
      } else if (filter == 1) {
        frequency_sources = {
          '12': '12.5',
          '25': '25',
          '50': '50',
          '100': '100',
          '200': '200',
          '400': '400',
          '800': '800',
          '1600': '1.6K',
          '3200': '3.2K'
        };
      } else if (filter == 2) {
        frequency_sources = {
          '12': '12.5',
          '25': '25',
          '50': '50',
          '100': '100',
          '200': '200',
          '400': '400',
          '800': '800',
          '1600': '1.6K',
          '3200': '3.2K',
          '6400': '6.4K',
          '12800': '12.8K'
        };
      }
    } else if (posType == 8 || posType == 16 || posType == 9) {
      //周期数
      frequency_sources = {
        '1': '1',
        '2': '2',
        '4': '4',
        '8': '8',
        '16': '16',
        '32': '32',
        '64': '64',
        '128': '128',
        '256': '256',
        '512': '512',
        '1024': '1024'
      };
    }
  } else if (dgm_type == 4) {
    frequency_sources = {
      '10': '10',
      '20': '20',
      '50': '50',
      '100': '100',
      '200': '200',
      '500': '500',
      '1000': '1K',
      '2000': '2K',
      '4000': '4K'
    };
  }

  if (posType == 13 && position.baseInfo.sourceType == 5) {
    /* 串口时，合成倾角的分析频率只有20 */
    frequency_sources = {
      '20': '20'
    };
  }

  if (posType == 12 && dgm_type == 0) {
    /* 串口时默认采集器的倾角的分析频率暂时写死为20 */
    frequency_sources = {
      '20': '20'
    };
  }

  return frequency_sources;
}
/**
   * *谱线数下拉选项
   * dgm_type：采集器类型；
   *
   * **/


function spectralSources(dgm_type, pos_type) {
  var spectral_source = [];

  if (dgm_type == 3 || dgm_type == 7 || dgm_type == 9 || dgm_type == 10 || dgm_type == 13) {
    if (pos_type == 8 || pos_type == 9 || pos_type == 16) {
      spectral_source = ['32', '64', '128', '256', '512', '1024', '2048'];
    } else {
      spectral_source = ['100', '200', '400', '800', '1600', '3200', '6400', '12800', '25600', '51200'];
      /* 金风现场谱线数定制*/

      if (config.company === 1) {
        spectral_source = ['100', '200', '400', '800', '1600', '3200', '6400', '12800', '19200', '25600', '51200', '102400', '204800', '409600'];
      }
    }
  } else if (dgm_type == 4) {
    spectral_source = ['100', '200', '400', '800', '1600', '3200'];
  } else if (dgm_type == 1) {
    spectral_source = ['100', '200', '400', '800', '1600', '3200', '6400', '12800', '25600', '51200', '102400'];

    if (pos_type == 13) {
      //v1采集器合成倾角谱线数屏蔽100/200
      spectral_source = ['400', '800', '1600', '3200', '6400', '12800', '25600', '51200', '102400'];
    }
  } else if (Number(dgm_type) === 0) {
    if (pos_type == 13) {
      //外部集成采集器合成倾角谱线数屏蔽100/200
      spectral_source = ['400', '800', '1600', '3200', '6400', '12800', '25600', '51200', '102400'];
    } else {
      spectral_source = ['100', '200', '400', '800', '1600', '3200', '6400', '12800', '25600', '51200', '102400'];
    }
  } else {
    spectral_source = ['100', '200', '400', '800', '1600', '3200', '6400', '12800', '25600', '51200', '102400'];
  }

  return spectral_source;
}
/* 计算采样周期和谱线分辨率 */


function computed__frequency_spectral(position) {
  /* 当是叶轮采集器 */
  var frequency, spectral;

  if (position.dgm_type == 2) {
    frequency = position.baseInfo.frequency * 2.5;
    spectral = position.baseInfo.spectral * 2.56;
  } else {
    frequency = position.baseInfo.frequency;
    spectral = position.baseInfo.spectral;
  }

  position.baseInfo.order = (spectral / frequency).toFixed(2) + "s";
  position.baseInfo.specOrder = (frequency / spectral).toFixed(4) + "Hz";
}
/**
 * *任务标识转换
 * **/


function taskId(val) {
  var taskIdVal = "";

  switch (parseInt(val)) {
    case 0:
      taskIdVal = "任务1";
      break;

    case 1:
      taskIdVal = "任务2";
      break;

    case 2:
      taskIdVal = "任务3";
      /*金风现场的'任务3'改成'长采样'*/

      if (config.company === 1) {
        taskIdVal = "长采样";
      }

      break;
  }

  return taskIdVal;
}
/* 将数字任务数组除去空元素，并排序，并转化为文字数组 */


function taskArray(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    return [];
  } else {
    var result = [];
    arr.sort();
    arr.forEach(function (el) {
      result.push(taskId(parseInt(el)));
    });
    return result;
  }
}



/***/ })

}]);
//# sourceMappingURL=7-85f516e5.js.map