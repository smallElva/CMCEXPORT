(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/content/system/dgm/table/js/dgm_columns.js":
/*!*******************************************************************!*\
  !*** ./src/components/content/system/dgm/table/js/dgm_columns.js ***!
  \*******************************************************************/
/*! exports provided: setHeaders, setColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaders", function() { return setHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumns", function() { return setColumns; });
var index;
function setHeaders(type) {
  var header = [];

  switch (type) {
    case 1:
      //采集器信息
      header = ['产品ID', '采集器名称', 'IP地址', '特征值实时上传间隔', '特征值存储时间间隔', '波形实时上传间隔', '波形存储时间间隔', '黑匣子存储时间间隔', '断网数据缓存间隔', '离线数据上传系统', '离线数据可上传时间-开始', '离线数据可上传时间-结束', 'Modbus输出', '同步状态', '软件主版本号', '软件修订版本号', 'DB板版本号', 'AB板版本号', '通道类型', '量程类型', '叶轮类型'];
      break;

    case 2:
      //振动设置
      header = ['采集器名称', '采集器ID', '主机ID', '通道名称', '通道号', '开启轨道波磨', '部件分类', '安装位置', '关联车轮', '关联部件1', '关联部件2', '关联部件3', '关联部件4', '关联部件5', '关联部件6', '关联部件7', '关联部件8', '关联部件9', '关联部件10', '传感器类型', '灵敏系数', '灵敏系数单位', '硬件积分', '是否积分', '单位', '信号增益', '硬件滤波', '软件滤波', '参考间隙电压', '电压范围高', '电压范围低', '阶次滤波', '有效频率下限', '有效频率上限', '能量有效值计算时间', '零漂', '交流校正系数', '直流校正系数', '积分量程', '是否转温度'];
      break;

    case 3:
      //温度设置
      header = ['采集器名称', '通道名称', '通道号', '部件分类', '安装位置', '关联部件', '单位', '过程量类型', '信号输入范围高', '信号输入范围低', '工程量输入范围高', '工程量输入范围低', '校正系数', '零漂', '增益', '是否转振动'];
      break;

    case 4:
      //过程量设置
      header = ['采集器名称', '通道名称', '通道号', '传感器类型', '单位', '过程量类型', '信号输入范围高（B-X）', '信号输入范围低（A-X）', '工程量输入范围高（B-Y）', '工程量输入范围低（A-Y）', '校正系数', '零漂', '是否转振动'];
      break;

    case 5:
      //转速设置
      header = ['采集器名称', '通道名称', '单位', '键相增益', '关联部件', '比较电压', '触发类型', '极性', '高密度采样', '数据来源', '转速比', '最高转速', '最低转速', '电压范围高', '电压范围低', '零漂', '交流校正系数', '直流校正系数'];
      break;

    case 6:
      //数字量设置
      header = ['采集器名称', '通道名称', '单位', '数字量类型', '数字量状态', '自检输出', '信号绑定', '信号传输'];
      break;

    case 7:
      //串口设置
      header = ['采集器名称', '模块名称', '类型', // 'IP地址',
      // '端口号',
      '数据位', '停止位', '波特率', '奇偶校验', '传输方式', '设备选择', '从设备号'];
      break;

    case 9:
      //长采样设置
      header = ['采集器名称', '采集间隔', '分析频率', '采样时间', '通道'];
      break;

    case 10:
      //前置处理器设置
      header = ['采集器名称', '采集器ID', '所属主机', '设备ID', '设备名称', '车厢号', '设备所在位', '状态'];
      break;

    case 11:
      //mhd从设置
      header = ['从设备名称', '设备ID', '主设备', 'Modbus输出'];
      break;

    case 12:
      //tms连续采样设置
      header = ['机组', '所属组织', '前置处理器', '车厢', '通道', '采样率KHz'];
      break;

    case 13:
      //采集设置
      header = ['采集器名称', '塔筒连接法兰数目', '信号接收频率', '检波方式', '工作模式', '滤波模式', '激励电压', '脉冲重复频率模式', '采样深度', '触发模式', '阻抗匹配使能开关', '激励强度', '收发模式', '阻抗匹配值', '脉冲粗延时', '脉冲精延时', '脉宽', '脉冲重复频率', '指定某个闸门', '测量模式', '检测缺陷时指定某个闸门', '检测缺陷时报警逻辑', '闸门抑制开关', '抑制次数', '用于指定报警源', '测量参数测量模式', '测量判断', '功能开关', '板卡的主从关系'];
      break;

    case 14:
      //法兰设置
      header = ['采集器名称', '法兰名称', '部件分类', '安装位置', '螺栓数目'];
      break;

    case 15:
      //预处理设置
      header = ['采集器名称', '预处理器名称', '预处理器ID', '安装位置', '螺栓计数位置起始', '螺栓计数位置结束', '采集方式'];
      break;

    case 16:
      //螺栓设置
      header = ['采集器名称', '通道名称', '螺栓ID', '安装位置', '预处理器控制', '采集控制ID', '关联通道', '螺栓计数', '传感器类型', '单位', '高密度采样', '采样长度', '测量模式', '波形模式', '总长', '标称长度', '直径', '夹紧长度', '闸门的起始坐标点', '闸门的宽度', '闸门的高度', '增益', '电缆长度', '电缆系数', '前置数量', '前置系数', '校准数值', '波形起始', '波形范围'];
      break;

    case 17:
      //E821从设备
      header = ['从设备名称', '设备ID', '主设备', 'S/N', '设备识别码'];
      break;

    case 18:
      //外部集成设置
      header = ['采集器名称', '模块名称', '类型', 'IP地址', '端口号', '数据位', '停止位', '波特率', '奇偶校验', '传输方式', '设备选择', '从设备号'];
      break;

    case 999:
      //拟合系数设置设置
      header = ['产品ID', '采集器名称', '型号名称', '版本号', '算法类型'];
      break;

    case 19:
      //轨道波磨采样
      header = ['采集器名称', '采集器ID', '波磨采样触发类型', '开始时间（年-月-日 时:分:秒）', '周期（天）', '分析频率(Hz)', '谱线数', '报站间隔(s)', '定位精度（m）', '单程时间(min)'];
      break;

    case 20:
      //主机设置
      header = ['采集器名称', '采集器ID', '设备ID', '主机IP', '设备名称', '车厢号', '状态', '转速接口', //   'X11',
      //   'X12',
      '绑定车厢'];
      break;

    case 21:
      //从机设置
      header = ['采集器名称', '采集器ID', '设备ID', '分机IP', '设备名称', '车厢号', '状态', '转速接口', //   'X11',
      //   'X12',
      '所属主机', '绑定车厢'];
      break;

    case 22:
      //WL9100采集器信息
      header = ['产品ID', '采集器名称', 'IP地址', '版本号', '采样频率', '采样时间（s）', '特征值采集间隔（s）', '是否发送特征值', '波形采集间隔（s）', '是否发送波形状态', '运行模式', '连接超时等待时间（s）', 'IEPE稳定时间（s）', '报警下的采集间隔（s）', '温度补偿值', '版本号'];
      break;
  }

  if (config.company === 1 && type == 1) {
    var goldWindHead = ['倾角特征值实时上传间隔', '倾角特征值存储时间间隔', '倾角波形实时上传间隔', '倾角波形存储时间间隔', '长采样时间间隔'];
    index = header.indexOf('断网数据缓存间隔');
    goldWindHead.unshift(index, 0);
    Array.prototype.splice.apply(header, goldWindHead);
  }

  return header;
}
function setColumns(type, data) {
  var columns = [];

  switch (type) {
    case 1:
      //采集器信息
      columns = [{
        data: 'dgm.dgm_id'
      }, {
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.dgm_ip'
      }, {
        data: 'dgm.byRealtime_TZ_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.realTimeSources;
        }
      }, {
        data: 'dgm.byVector_TZ_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byVectorSources;
        }
      }, {
        data: 'dgm.byRealtime_Wave_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.waveIntrvlSources;
        }
      }, {
        data: 'dgm.byVector_Wave_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.bvWaveIntrvlSources;
        }
      }, {
        data: 'dgm.byBlack_Data_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byBlackSources;
        }
      }, {
        data: 'dgm.flash_intrvl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.fleshSources;
        }
      }, {
        data: 'dgm.offline_mode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.offline_modeSources;
        },
        readOnly: true
      }, {
        data: 'dgm.offline_send_start',
        type: 'time',
        timeFormat: 'HH:mm:ss',
        correctFormat: true,
        readOnly: true
      }, {
        data: 'dgm.offline_send_end',
        type: 'time',
        timeFormat: 'HH:mm:ss',
        correctFormat: true,
        readOnly: true
      }, {
        data: 'dgm.if_output_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.ifOutputSources;
        },
        readOnly: true
      }, {
        data: 'dgm.dgm_state',
        readOnly: true
      }, {
        data: 'dgm.sf_main_ver',
        readOnly: true
      }, {
        data: 'dgm.sf_fix_ver',
        readOnly: true
      }, {
        data: 'dgm.hw_db_ver',
        readOnly: true
      }, {
        data: 'dgm.hw_ab_ver',
        readOnly: true
      }, {
        data: 'dgm.hw_ch_type_val',
        readOnly: true
      }, {
        data: 'dgm.hw_range_type_val',
        readOnly: true
      }, {
        data: 'dgm.hw_options_val',
        //dgu2200支持类型
        readOnly: true
      }];
      break;

    case 2:
      //振动设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.dgm_id',
        readOnly: true
      }, {
        data: 'dgm.host_id',
        readOnly: true
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.rowName',
        readOnly: true
      }, {
        data: "dgm.if_activity_val",
        //是否开启轨道波磨
        editor: 'select',
        readOnly: true,
        selectOptions: function selectOptions(row) {
          return data[row].dgm.if_activity_sources;
        }
      }, {
        data: 'dgm.pos_class_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posClassSources;
        }
      }, {
        data: 'dgm.pos_loc_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posLocSources;
        }
      }, {
        data: 'dgm.tms_wheel'
      }, //关联车轮
      {
        data: 'dgm.pos_part_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part1_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part2_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part3_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part4_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part5_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part6_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part7_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part8_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.pos_part9_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.bySensorType_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.sensorSources;
        }
      }, {
        data: 'dgm.dwVib_Scale'
      }, {
        data: 'dgm.scale_unit',
        readOnly: true
      }, {
        data: 'dgm.byHwIntegral_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byHwIntegralSources;
        },
        readOnly: true
      }, {
        data: 'dgm.byIntegral_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.integralSources;
        }
      }, {
        data: 'dgm.byUnitName',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.unitSources;
        }
      }, {
        data: 'dgm.byVib_Signal_Zoom_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.vibSignalZoomSources;
        }
      }, {
        data: 'dgm.byHw_Filter_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.hwFilterSources;
        }
      }, {
        data: 'dgm.bySw_Filter_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.swFilterSources;
        }
      }, {
        data: 'dgm.dwRef_gap'
      }, {
        data: 'dgm.shHi_vol'
      }, {
        data: 'dgm.shLo_vil'
      }, {
        data: 'dgm.order_filter'
      }, {
        data: 'dgm.power_a'
      }, {
        data: 'dgm.power_b'
      }, {
        data: 'dgm.power_time_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.powerTimeSources;
        }
      }, {
        data: 'dgm.dwVib_Null_shift'
      }, //零漂
      {
        data: 'dgm.dwVib_Ac_corr'
      }, //交流校正系数
      {
        data: 'dgm.dwVib_Dc_corr'
      }, //直流校正系数
      {
        data: 'dgm.int_zoom_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.intZoomSources;
        },
        readOnly: true
      }, {
        data: 'dgm.trans_ch_type_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.transChTypeSources;
        },
        readOnly: true
      }];
      break;

    case 3:
      //温度设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.rowName',
        readOnly: true
      }, {
        data: 'dgm.pos_class_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posClassSources;
        }
      }, {
        data: 'dgm.pos_loc_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posLocSources;
        }
      }, {
        data: 'dgm.pos_part_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.byUnitName',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.unitSources;
        }
      }, {
        data: 'dgm.byStaType_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byStaTypeSources;
        }
      }, {
        data: 'dgm.dwHi_signal_value'
      }, {
        data: 'dgm.dwLow_signal_value'
      }, {
        data: 'dgm.dwHi_eng_value'
      }, {
        data: 'dgm.dwLow_eng_value'
      }, {
        data: 'dgm.dwCorr'
      }, {
        data: 'dgm.dwNull_shift'
      }, {
        data: 'dgm.range_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.rangeSources;
        }
      }, {
        data: 'dgm.trans_ch_type_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.transChTypeSources;
        },
        readOnly: true
      }];
      break;

    case 4:
      //过程量设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.rowName'
      }, //通道号
      {
        data: 'dgm.bySensorType821_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.sensorSources;
        }
      }, {
        data: 'dgm.byUnitName_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byUnitNameSources;
        }
      }, {
        data: 'dgm.byStaType_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byStaTypeSources;
        }
      }, {
        data: 'dgm.dwHi_signal_value'
      }, {
        data: 'dgm.dwLow_signal_value'
      }, {
        data: 'dgm.dwHi_eng_value'
      }, {
        data: 'dgm.dwLow_eng_value'
      }, {
        data: 'dgm.dwCorr'
      }, {
        data: 'dgm.dwNull_shift'
      }, {
        data: 'dgm.trans_ch_type_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.transChTypeSources;
        },
        readOnly: true
      }];
      break;

    case 5:
      //转速设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.byUnitName_val'
      }, {
        data: 'dgm.byStrong_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byStrongSources;
        }
      }, {
        data: 'dgm.pos_part_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posPartSources;
        }
      }, {
        data: 'dgm.dwCompre_volt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dwCompreVoltSources;
        }
      }, {
        data: 'dgm.reverse_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.reverseSources;
        },
        readOnly: true
      }, {
        data: 'dgm.polar_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.polarSources;
        }
      }, {
        data: 'dgm.high_density_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.highDensitySources;
        }
      }, {
        data: 'dgm.chan_type_val',
        //数据来源，仅tms有
        editor: 'select',
        readOnly: true,
        selectOptions: function selectOptions(row) {
          return data[row].dgm.chanTypeSources;
        }
      }, {
        data: 'dgm.speedRate',
        //转速比
        readOnly: true
      }, {
        data: 'dgm.max_speed'
      }, {
        data: 'dgm.min_speed'
      }, {
        data: 'dgm.shHi_vol'
      }, {
        data: 'dgm.shLo_vil'
      }, {
        data: 'dgm.dwSpeed_Null_shift'
      }, //零漂
      {
        data: 'dgm.dwSpeed_Ac_corr'
      }, //交流校正系数
      {
        data: 'dgm.dwSpeed_Dc_corr'
      } //直流校正系数
      ];
      break;

    case 6:
      //数字量设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.byUnitName_val'
      }, {
        data: 'dgm.byDigitalType_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byDigitalTypeSources;
        }
      }, {
        data: 'dgm.byifpower_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byifpowerSources;
        }
      }, {
        data: 'dgm.byifalarm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byifalarmsources;
        }
      }, {
        data: 'dgm.bybindch_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.bybindchSources;
        }
      }, {
        data: 'dgm.bybindtype_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.bybindtypeSources;
        }
      }];
      break;

    case 7:
      //串口设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.dest_type_val',
        readOnly: true
      }, // {data: 'dgm.dest_ip'},
      // {data: 'dgm.dest_port'},
      {
        data: 'dgm.databit_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.databitSources;
        }
      }, {
        data: 'dgm.stopbit_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.stopbitSources;
        }
      }, {
        data: 'dgm.baudrate_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.baudrateSources;
        }
      }, {
        data: 'dgm.parity_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.paritySources;
        }
      }, {
        data: 'dgm.mode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.modeSources;
        }
      }, {
        data: 'dgm.masterslave_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.masterslaveSources;
        }
      }, {
        data: 'dgm.slaveid'
      }];
      break;

    case 9:
      //长采样设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.capture_type_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.captureTypeSources;
        }
      }, {
        data: 'dgm.capture_freq_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.captureFreqSources;
        }
      }, {
        data: 'dgm.capture_time_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.captureTimeSources;
        }
      }, {
        data: 'dgm.ch1',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.channelSources;
        }
      }];
      break;

    case 10:
      //前置处理器设置
      columns = [{
        data: 'dgm.dgm_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dgmSources;
        }
      }, {
        data: 'dgm.dgm_id',
        readOnly: true
      }, {
        data: 'dgm.host_id_val',
        //所属主机id
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.host_id_sources;
        }
      }, {
        data: 'dgm.pre_id'
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.car_id'
      }, {
        data: 'dgm.dev_id'
      }, {
        data: 'dgm.status_val' //状态:0在线；1离线

      }];
      break;

    case 20:
      //主机设置
      columns = [{
        data: 'dgm.dgm_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dgmSources;
        }
      }, {
        data: 'dgm.dgm_id',
        readOnly: true
      }, {
        data: 'dgm.pre_id'
      }, {
        data: 'dgm.netHostIp'
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.car_id'
      }, {
        data: 'dgm.status_val' //状态:0在线；1离线

      }, {
        data: 'dgm.speed_from_val',
        //转速来源
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.speed_from_sources;
        }
      }, //   {
      //      data: 'dgm.X11_val',//x11
      //      editor:'select',
      //      selectOptions: row =>data[row].dgm.X11_sources
      //   },
      //   {
      //     data: 'dgm.X12_val',//x12
      //     editor:'select',
      //     readOnly: true,
      //     selectOptions: row =>data[row].dgm.X12_sources
      //   },
      {
        data: 'dgm.ch_class_val',
        //绑定车厢
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.ch_class_sources;
        }
      }];
      break;

    case 21:
      //从机设置
      columns = [{
        data: 'dgm.dgm_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dgmSources;
        }
      }, {
        data: 'dgm.dgm_id',
        readOnly: true
      }, {
        data: 'dgm.pre_id'
      }, {
        data: 'dgm.netHostIp'
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.car_id'
      }, {
        data: 'dgm.status_val' //状态:0在线；1离线

      }, {
        data: 'dgm.speed_from_val',
        //转速来源
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.speed_from_sources;
        }
      }, //   {
      //     data: 'dgm.X11_val',//x11
      //     editor:'select',
      //     selectOptions: row =>data[row].dgm.X11_sources
      //   },
      //   {
      //     data: 'dgm.X12_val',//x12
      //     editor:'select',
      //     readOnly: true,
      //     selectOptions: row =>data[row].dgm.X12_sources
      //   },
      {
        data: 'dgm.host_id_val',
        //所属主机id
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.host_id_sources;
        }
      }, {
        data: 'dgm.ch_class_val',
        //绑定车厢
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.ch_class_sources;
        }
      }];
      break;

    case 11:
      //主从设置
      columns = [{
        data: 'dgm.byName'
      }, {
        data: 'dgm.mhd_id'
      }, {
        data: 'dgm.mainMhd',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.mhdSources;
        }
      }, {
        data: 'dgm.if_output_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.ifOutputSources;
        }
      }];
      break;

    case 12:
      //连续采集设置
      columns = [{
        data: 'dgm.mac_me'
      }, {
        data: 'dgm.t_name'
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.carName'
      }, {
        data: 'dgm.chName'
      }, {
        data: 'dgm.capture_freq',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.captureFreqSources;
        }
      }];
      break;

    case 13:
      //2600采集设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        //塔筒连接法兰数目
        data: 'dgm.tower_flange_sum'
      }, {
        //信号接收频率
        data: 'dgm.frq_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.frqSources;
        }
      }, {
        //检波方式
        data: 'dgm.wm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.wmSources;
        }
      }, {
        //工作模式
        data: 'dgm.wkm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.wkmSources;
        }
      }, {
        //滤波模式
        data: 'dgm.flm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.flmSources;
        }
      }, {
        //激励电压
        data: 'dgm.ev_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.evSources;
        }
      }, {
        //脉冲重复频率模式
        data: 'dgm.pm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.pmSources;
        }
      }, {
        //采样深度
        data: 'dgm.sl_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.slSources;
        }
      }, {
        //触发模式
        data: 'dgm.tm_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.tmSources;
        }
      }, {
        //阻抗匹配使能开关
        data: 'dgm.swDamping_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.swDampingSources;
        }
      }, {
        //激励强度
        data: 'dgm.ext_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.extSources;
        }
      }, {
        //收发模式
        data: 'dgm.pulserCtx_md_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.pulserCtx_mdSources;
        }
      }, {
        //阻抗匹配值
        data: 'dgm.iDamping'
      }, {
        //脉冲粗延时
        data: 'dgm.iPulseCoarseDly'
      }, {
        //脉冲精延时
        data: 'dgm.iPulseFineDly'
      }, {
        //脉宽
        data: 'dgm.iPulseWdh'
      }, {
        //脉冲重复频率
        data: 'dgm.iPRF'
      }, {
        //指定某个闸门
        data: 'dgm.gateMode_gt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.gateMode_gtSources;
        }
      }, {
        //测量模式
        data: 'dgm.gateMode_md_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.gateMode_mdSources;
        }
      }, {
        //检测缺陷时的判别策略:指定某个闸门
        data: 'dgm.gateFlawJudge_gt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.gateFlawJudge_gtSources;
        }
      }, {
        //检测缺陷时的判别策略:报警逻辑
        data: 'dgm.lg_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.lgSources;
        }
      }, {
        //检测缺陷时的判别策略:闸门抑制功能使能标志
        data: 'dgm.swSuppressCnt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.swSuppressCntSources;
        }
      }, {
        //抑制次数
        data: 'dgm.iSupCnt'
      }, {
        //用于指定报警源
        data: 'dgm.measurementCtx_gt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.measurementCtx_gtSources;
        }
      }, {
        //测量参数测量模式
        data: 'dgm.measurementCtx_md_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.measurementCtx_mdSources;
        }
      }, {
        //测量参数测量判断
        data: 'dgm.jd_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.jdSources;
        }
      }, {
        //测量参数设置功能开关
        data: 'dgm.sw_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.swSources;
        }
      }, {
        //设置板卡的主从关系
        data: 'dgm.role_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.roleSources;
        }
      }];
      break;

    case 14:
      //2600法兰设置
      columns = [{
        data: 'dgm.dgm_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dgmSources;
        }
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.pos_class2600_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posClassSources;
        }
      }, {
        data: 'dgm.pos_loc_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posLocSources;
        }
      }, {
        data: 'dgm.bolt_sum'
      }];
      break;

    case 15:
      //2600预处理设置
      columns = [{
        data: 'dgm.dgm_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.dgmSources;
        }
      }, {
        data: 'dgm.byName'
      }, {
        data: 'dgm.preps_id'
      }, {
        data: 'dgm.flange_name',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.flangeSources;
        }
      }, {
        data: 'dgm.bolt_num_beigin'
      }, {
        data: 'dgm.bolt_num_end'
      }, {
        data: 'dgm.collect_mode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.collectModeSources;
        }
      }];
      break;

    case 16:
      //2600螺栓设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.boltID'
      }, {
        data: 'dgm.bolt_pos_loc_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.posLocSources;
        }
      }, {
        data: 'dgm.preps_id_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.prepsIdSources;
        }
      }, {
        data: 'dgm.ac_id'
      }, {
        data: 'dgm.b_id_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.bIdSources;
        }
      }, {
        data: 'dgm.bolt_num'
      }, {
        data: 'dgm.bySensorTypeBolt_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.bySensorTypeSources;
        }
      }, {
        data: 'dgm.byUnitName',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.byUnitNameSources;
        }
      }, {
        data: 'dgm.highSamp_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.highSampSources;
        }
      }, {
        data: 'dgm.scanLength'
      }, {
        data: 'dgm.stressType_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.stressTypeSources;
        }
      }, {
        data: 'dgm.readMode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.readModeSources;
        }
      }, {
        data: 'dgm.totalLen'
      }, {
        data: 'dgm.fBoltLength'
      }, {
        data: 'dgm.fDiameter'
      }, {
        data: 'dgm.clampLen'
      }, {
        data: 'dgm.fStart'
      }, {
        data: 'dgm.fWidth'
      }, {
        data: 'dgm.fThreshold' //

      }, {
        data: 'dgm.fGain'
      }, {
        data: 'dgm.cableLen'
      }, {
        data: 'dgm.cableCoeff'
      }, {
        data: 'dgm.preQuantity'
      }, {
        data: 'dgm.preCoeff'
      }, {
        data: 'dgm.offsetValue'
      }, {
        data: 'dgm.wStart'
      }, {
        data: 'dgm.wRange'
      }];
      break;

    case 17:
      //E821主从设置
      columns = [{
        data: 'dgm.byName'
      }, {
        data: 'dgm.MS_id'
      }, {
        data: 'dgm.main821',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.main821Sources;
        }
      }, {
        data: 'dgm.SN'
      }, {
        data: 'dgm.SNA'
      }];
      break;

    case 18:
      //外部集成设置
      columns = [{
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.ch_name'
      }, {
        data: 'dgm.dest_type_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.destTypeSources;
        }
      }, {
        data: 'dgm.dest_ip'
      }, {
        data: 'dgm.dest_port'
      }, {
        data: 'dgm.databit_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.databitSources;
        }
      }, {
        data: 'dgm.stopbit_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.stopbitSources;
        }
      }, {
        data: 'dgm.baudrate_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.baudrateSources;
        }
      }, {
        data: 'dgm.parity_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.paritySources;
        }
      }, {
        data: 'dgm.mode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.modeSources;
        }
      }, {
        data: 'dgm.masterslave_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.masterslaveSources;
        }
      }, {
        data: 'dgm.slaveid'
      }];
      break;

    case 999:
      //拟合系数信息
      columns = [{
        data: 'dgm.dgm_id'
      }, {
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.modelName'
      }, {
        data: 'dgm.version'
      }, {
        data: 'dgm.fitting'
      }];
      break;

    case 19:
      //轨道波磨采样
      columns = [{
        data: 'dgm.dgm_name',
        readOnly: true
      }, {
        data: 'dgm.dgm_id',
        readOnly: true
      }, {
        data: 'dgm.cap_type_val',
        //波磨采样触发类型
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.cap_type_sources;
        }
      }, {
        data: 'dgm.start_time',
        //开始时间
        type: 'time',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
        correctFormat: true
      }, {
        data: 'dgm.period',
        //周期
        type: 'numeric'
      }, {
        data: "dgm.frequency",
        //分析频率
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.frequency_sources;
        }
      }, {
        data: "dgm.spectral",
        //谱线数
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.spectral_sources;
        }
      }, {
        data: 'dgm.station_interval',
        //报站间隔
        readOnly: true
      }, {
        data: "dgm.pos_accuracy",
        //定位精度
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.pos_accuracy_sources;
        }
      }, {
        data: 'dgm.oneway_time',
        //单程时间(min)
        type: 'numeric'
      }];
      break;

    case 22:
      //WL9100采集器信息
      columns = [{
        data: 'dgm.dgm_id'
      }, {
        data: 'dgm.dgm_name'
      }, {
        data: 'dgm.dgm_ip'
      }, {
        data: 'dgm.sf_main_ver',
        readOnly: true
      }, {
        //采样频率
        data: 'dgm.freq',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.freqSources;
        }
      }, {
        //采样时间
        data: 'dgm.sample',
        readOnly: true
      }, {
        //特征值采集间隔
        data: 'dgm.vector_intrvl'
      }, {
        //是否发送特征值
        data: 'dgm.vector_status_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.vector_status_Sources;
        }
      }, {
        //波形采集间隔
        data: 'dgm.wave_intrvl'
      }, {
        //是否发送波形状态
        data: 'dgm.wave_status_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.wave_status_Sources;
        }
      }, {
        //运行模式
        data: 'dgm.run_mode_val',
        editor: 'select',
        selectOptions: function selectOptions(row) {
          return data[row].dgm.run_mode_Sources;
        }
      }, {
        //连接超时等待时间
        data: 'dgm.wait_timeout'
      }, {
        //IEPE稳定时间
        data: 'dgm.IEPE_time'
      }, {
        //报警下的采集间隔
        data: 'dgm.alarm_intrvl'
      }, {
        //温度补偿值
        data: 'dgm.temperature_comp'
      }];
      break;
  }

  if (config.company === 1 && type == 1) {
    var goldWindColumn = [{
      data: 'dgm.rt_tz_angle_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].dgm.rt_tz_angleSources;
      },
      readOnly: true
    }, {
      data: 'dgm.his_tz_angle_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].dgm.his_tz_angleSources;
      },
      readOnly: true
    }, {
      data: 'dgm.rt_wave_angle_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].dgm.rt_wave_angleSources;
      },
      readOnly: true
    }, {
      data: 'dgm.his_wave_angle_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].dgm.his_wave_angleSources;
      },
      readOnly: true
    }, {
      data: 'dgm.his_long_cap_val',
      editor: 'select',
      selectOptions: function selectOptions(row) {
        return data[row].dgm.his_long_capSources;
      },
      readOnly: true
    }];
    goldWindColumn.unshift(index, 0);
    Array.prototype.splice.apply(columns, goldWindColumn);
  }

  return columns;
}

/***/ }),

/***/ "./src/components/content/system/dgm/table/js/dgm_hdtable.js":
/*!*******************************************************************!*\
  !*** ./src/components/content/system/dgm/table/js/dgm_hdtable.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dgmhdtable; });
/* harmony import */ var common_hdtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/hdtable.js */ "./src/common/hdtable.js");
/* harmony import */ var _dgm_columns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dgm_columns.js */ "./src/components/content/system/dgm/table/js/dgm_columns.js");
/* harmony import */ var _dgm_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dgm_info.js */ "./src/components/content/system/dgm/table/js/dgm_info.js");
/* harmony import */ var utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dgm_methods.js */ "./src/components/content/system/dgm/table/js/dgm_methods.js");
/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var colWidth = '';
function dgmhdtable(el, property) {
  // console.log(new Handsontable());
  var data = property.getData(); //创建表格属性的实例

  var tableDataIns = new tableData(property); // 组装振动表格数据

  var vibTable = {
    // 表格显示的数据
    data: data,
    contextMenu: tableDataIns.contextMenu(),
    //表格的列
    colHeaders: tableDataIns.colHeaders(),
    fixedColumnsLeft: 2,
    //数据渲染renderData
    columns: tableDataIns.columns(),
    // or
    hiddenColumns: {
      // show where are hidden columns
      indicators: true
    },
    //单元格属性设置
    cells: tableDataIns.cells(),
    //单击单元格或行/列标题后触发。如果单击行/列标题，则坐标索引为负。
    afterOnCellMouseUp: tableDataIns.afterOnCellMouseUp(),
    afterCreateRow: tableDataIns.afterCreateRow(),
    //过滤之后
    afterFilter: tableDataIns.afterFilter(),
    beforeChange: tableDataIns.beforeChange(),
    afterChange: tableDataIns.afterChange(),
    afterScrollHorizontally: tableDataIns.afterScrollHorizontally(),
    //列宽改变
    afterColumnResize: tableDataIns.afterColumnResize(),
    //单元格验证之后
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

  return Object(common_hdtable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el, vibTable);
}
var deleteArray = []; //删除的信息列表

var numPropArr2 = ['dgm.dwSpeed_Null_shift', 'dgm.dwSpeed_Dc_corr', 'dgm.dwCorr', 'dgm.dwVib_Null_shift', 'dgm.dwVib_Dc_corr']; //直流，漂流集合

var tableData = /*#__PURE__*/function () {
  function tableData(property) {
    _classCallCheck(this, tableData);

    this.type = property.type;
    this.getData = property.getData;
    this.getHot = property.getHot;
    this.changeList = property.changeList;
    this.MHDList = property.MHDList;
    this.E821List = property.E821List;
    this.tmsList = property.tmsList;
    this.tmsHostList = property.tmsHostList;
    this.tmsPumpList = property.tmsPumpList;
    this.dgmList = property.dgmList;
    this.flangeList = property.flangeList;
    this.defaultDgmInfo = property.defaultDgmInfo;
    this.router = property.router;
    this.fittingInfo = property.fittingInfo;
    this.select821Info = property.select821Info;
    this.selectDgmInfo = property.selectDgmInfo;
    this.btnData = property.btnData;
  }
  /* 表格的数据渲染 */


  _createClass(tableData, [{
    key: "colHeaders",
    value: function colHeaders() {
      return Object(_dgm_columns_js__WEBPACK_IMPORTED_MODULE_1__["setHeaders"])(this.type);
    }
  }, {
    key: "columns",
    value: function columns() {
      return Object(_dgm_columns_js__WEBPACK_IMPORTED_MODULE_1__["setColumns"])(this.type, this.getData());
    }
    /* 表格的方法渲染 */
    //振动的单元格渲染

  }, {
    key: "cells",
    value: function cells() {
      var that = this;
      return function (row, col, prop) {
        var data = that.getData();
        if (data.length == 0) return;
        var type = Number(that.type);
        var cellProperties = this;
        /*下拉框表头集合*/

        var selectProps = ['dgm.byRealtime_TZ_intrvl_val', 'dgm.byVector_TZ_intrvl_val', 'dgm.byRealtime_Wave_intrvl_val', 'dgm.byVector_Wave_intrvl_val', 'dgm.byBlack_Data_intrvl_val', 'dgm.flash_intrvl_val', 'dgm.offline_mode_val', 'dgm.if_output_val', 'dgm.if_activity_val', 'dgm.pos_class_val', 'dgm.pos_loc_val', 'dgm.pos_part_val', 'dgm.pos_part1_val', 'dgm.pos_part2_val', 'dgm.pos_part3_val', 'dgm.pos_part4_val', 'dgm.pos_part5_val', 'dgm.pos_part6_val', 'dgm.pos_part7_val', 'dgm.pos_part8_val', 'dgm.pos_part9_val', 'dgm.bySensorType_val', 'dgm.byHwIntegral_val', 'dgm.byIntegral_val', 'dgm.byUnitName', 'dgm.byVib_Signal_Zoom_val', 'dgm.byHw_Filter_val', 'dgm.bySw_Filter_val', 'dgm.power_time_val', 'dgm.int_zoom_val', 'dgm.trans_ch_type_val', 'dgm.byStaType_val', 'dgm.range_val', 'dgm.bySensorType821_val', 'dgm.byUnitName_val', 'dgm.byStrong_val', 'dgm.dwCompre_volt_val', 'dgm.reverse_val', 'dgm.polar_val', 'dgm.high_density_val', 'dgm.chan_type_val', 'dgm.byDigitalType_val', 'dgm.byifpower_val', 'dgm.byifalarm_val', 'dgm.bybindch_val', 'dgm.bybindtype_val', 'dgm.databit_val', 'dgm.stopbit_val', 'dgm.baudrate_val', 'dgm.parity_val', 'dgm.mode_val', 'dgm.masterslave_val', 'dgm.capture_type_val', 'dgm.capture_freq_val', 'dgm.capture_time_val', 'dgm.ch1', 'dgm.host_id_val', 'dgm.speed_from_val', 'dgm.ch_class_val', 'dgm.speed_from_val', 'dgm.host_id_val', 'dgm.mainMhd', 'dgm.if_output_val', 'dgm.capture_freq', 'dgm.frq_val', 'dgm.wm_val', 'dgm.wkm_val', 'dgm.flm_val', 'dgm.ev_val', 'dgm.pm_val', 'dgm.sl_val', 'dgm.tm_val', 'dgm.swDamping_val', 'dgm.ext_val', 'dgm.pulserCtx_md_val', 'dgm.gateMode_gt_val', 'dgm.gateMode_md_val', 'dgm.gateFlawJudge_gt_val', 'dgm.lg_val', 'dgm.swSuppressCnt_val', 'dgm.measurementCtx_gt_val', 'dgm.measurementCtx_md_val', 'dgm.jd_val', 'dgm.sw_val', 'dgm.role_val', 'dgm.pos_class2600_val', 'dgm.flange_name', 'dgm.collect_mode_val', 'dgm.bolt_pos_loc_val', 'dgm.preps_id_val', 'dgm.b_id_val', 'dgm.bySensorTypeBolt_val', 'dgm.highSamp_val', 'dgm.stressType_val', 'dgm.readMode_val', 'dgm.main821', 'dgm.dest_type_val', 'dgm.databit_val', 'dgm.stopbit_val', 'dgm.baudrate_val', 'dgm.parity_val', 'dgm.mode_val', 'dgm.masterslave_val', 'dgm.frequency', 'dgm.spectral', 'dgm.pos_accuracy', 'dgm.freq', 'dgm.vector_status_val', 'dgm.wave_status_val', 'dgm.run_mode_val', 'dgm.rt_tz_angle_val', 'dgm.his_tz_angle_val', 'dgm.rt_wave_angle_val', 'dgm.his_wave_angle_val', 'dgm.his_long_cap_val', 'dgm.cap_type_val', 'dgm.X11_val', 'dgm.X12_val'];

        if (selectProps.includes(prop)) {
          cellProperties.editor = 'select';
        }

        var dgmNameList = [10, 15, 20, 21]; //采集器名称下拉选项的类型集合

        if (dgmNameList.includes(type) && prop == 'dgm.dgm_name') {
          cellProperties.editor = 'select';
        }

        if (type != 11 && type != 17 && col == 0) {
          //组织，机组，采集器，测点类型禁止编辑
          cellProperties.readOnly = true;
        }

        if (type == 1 && col == 2) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && col == 3) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && data[row].dgm.byDigitalType == 0 && data[row].dgm.dgm_type == 3 && (col == 4 || col == 5 || col == 6)) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && data[row].dgm.byDigitalType == 1 && data[row].dgm.dgm_type == 3 && col == 7) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && data[row].dgm.dgm_type != 3 && (col == 5 || col == 6 || col == 7)) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && data[row].dgm.dgm_type == 4 && col == 5) {
          cellProperties.readOnly = false;
        }

        if (type == 2 && data[row].dgm.dgm_type == 2 && prop == 'dgm.order_filter') {
          cellProperties.readOnly = true;
        }

        if (type == 2 && data[row].dgm.dgm_type == 4 && (prop == 'dgm.byHw_Filter_val' || prop == 'dgm.bySw_Filter_val' || prop == 'dgm.order_filter')) {
          cellProperties.readOnly = true;
        }

        if (type == 6 && data[row].dgm.dgm_type == 4 && prop == "dgm.byifpower_val") {
          cellProperties.readOnly = true;
        }

        if (type == 7 && data[row].dgm.dgm_type == 4 && (prop == "dgm.dest_type_val" || prop == "dgm.dest_ip" || prop == "dgm.dest_port")) {
          cellProperties.readOnly = true;
        }

        if (type == 7 && data[row].dgm.dgm_type == 1) {
          if (data[row].dgm.dest_type != 0) {
            cellProperties.readOnly = true;
          }
        }

        if (type == 5 && data[row].dgm.dgm_type == 4 && prop == "dgm.min_speed") {
          cellProperties.readOnly = true;
        }

        if (type == 5 && data[row].dgm.dgm_type == 7 && (prop == "dgm.chan_type_val" || prop == "dgm.speedRate")) {
          cellProperties.readOnly = false;
        }

        if (type == 1 && data[row].dgm.dgm_type == 4 && (prop == "dgm.flash_intrvl_val" || prop == "dgm.sf_fix_ver" || prop == "dgm.sf_main_ver" || prop == "dgm.hw_db_ver" || prop == "dgm.hw_ab_ver" || prop == "dgm.hw_ch_type" || prop == "dgm.hw_range_type")) {
          cellProperties.readOnly = true;
        }

        if (type == 1 && data[row].dgm.dgm_type == 5 && (prop == "dgm.byRealtime_TZ_intrvl_val" || prop == "dgm.byRealtime_Wave_intrvl_val" || prop == "dgm.byBlack_Data_intrvl_val" || prop == "dgm.sf_fix_ver" || prop == "dgm.sf_main_ver" || prop == "dgm.hw_db_ver" || prop == "dgm.hw_ab_ver" || prop == "dgm.hw_ch_type" || prop == "dgm.hw_range_type")) {
          cellProperties.readOnly = true;
        }

        if (type == 1 && data[row].dgm.dgm_type == 6 && col > 4) {
          cellProperties.readOnly = true;
        }

        if (type == 1 && data[row].dgm.dgm_type == 0 && col > 7) {
          cellProperties.readOnly = true;
        }

        if (type == 1) {
          if (data[row].dgm.dgm_type == 4 && prop == "dgm.if_output_val") {
            cellProperties.readOnly = false;
          }

          if (data[row].dgm.dgm_type == 7 && (prop == "dgm.mvb_car_id" || prop == "dgm.host_car_type_val" || prop == "dgm.offline_mode_val" || prop == "dgm.offline_send_start" || prop == "dgm.offline_send_end")) {
            //暂时只有tms可以设置这个值：修改校正系数/mvb所在车厢号
            cellProperties.readOnly = false;
          }
          /*金风现场 采集器dguv2,dgu2000e倾角时间存储、长采样时间存储可编辑*/


          if (config.company === 1 && (data[row].dgm.dgm_type == 3 || data[row].dgm.dgm_type == 9) && (prop == "dgm.rt_tz_angle_val" || prop == "dgm.his_tz_angle_val" || prop == "dgm.rt_wave_angle_val" || prop == "dgm.his_wave_angle_val" || prop == "dgm.his_long_cap_val")) {
            cellProperties.readOnly = false;
          }
        }

        if (type == 2) {
          if (data[row].dgm.dgm_type == 4 && (prop == "dgm.int_zoom_val" || prop == "dgm.byHwIntegral_val")) {
            cellProperties.readOnly = false;
          }

          if (prop == "dgm.trans_ch_type_val") {
            //如果trans_ch_type==3表示9通道，则不可转
            if (data[row].dgm.ch_id >= 16 && data[row].dgm.trans_ch_type != 3) {
              cellProperties.readOnly = false;
            }

            if (data[row].dgm.dgm_type == 7) {
              //tms采集器的振动通道默认振动且不可转
              cellProperties.readOnly = true;
            }
          }

          if (data[row].dgm.dgm_type == 1 && prop == "dgm.order_filter") {
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type == 2 && prop == "dgm.byIntegral_val") {
            //dgu2200没有积分
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type == 7 && prop == 'dgm.if_activity_val') {
            //是否开启轨道波磨
            cellProperties.readOnly = false;
          }
          /*if(data[row].dgm.t_root==1 && (prop=="dgm.pos_class_val" || prop=="dgm.pos_loc_val")){
            cellProperties.readOnly  = true;
          }*/

        }

        if (type == 3) {
          if (data[row].dgm.dgm_type == 3 && data[row].dgm.trans_ch_type != 3 && prop == "dgm.trans_ch_type_val") {
            //如果trans_ch_type==3表示9通道，则不可转
            cellProperties.readOnly = false;
          }

          if (data[row].dgm.t_root == 1 && (prop == "dgm.pos_class_val" || prop == "dgm.pos_loc_val")) {
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type != 7 && prop == "dgm.pos_part_val") {
            cellProperties.readOnly = true;
          }
        }

        if (type == 4) {
          /*if(data[row].dgm.dgm_type==1 && (prop=="dgm.dwHi_signal_value")){
            cellProperties.readOnly  = true;
          }*/
          if (data[row].dgm.dgm_type == 3 && prop == "dgm.trans_ch_type_val") {
            cellProperties.readOnly = false;
          }

          if (prop == "dgm.rowName") {
            cellProperties.readOnly = true;
          }

          if (prop == "dgm.byUnitName_val") {
            if (data[row].dgm.byUnitName_val == '自定义' || data[row].dgm.dgm_type != 6 && data[row].dgm.dgm_type != 9) {
              cellProperties.editor = 'text';
            } else {
              cellProperties.editor = 'select';
            }
          }

          if (prop == "dgm.bySensorType821_val") {
            if (data[row].dgm.dgm_type != 6 && data[row].dgm.dgm_type != 9) {
              cellProperties.readOnly = true;
            } else {
              cellProperties.editor = 'select';
            }
          }

          if (data[row].dgm.dgm_type == 6 && prop == "dgm.byStaType_val") {
            //过程量类型E821不可编辑
            cellProperties.readOnly = true;
          }
        }

        if (type == 5) {
          if ((data[row].dgm.dgm_type == 4 || data[row].dgm.dgm_type == 1) && prop == "dgm.byStrong_val") {
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type == 1 && (prop == "dgm.polar_val" || prop == "dgm.high_density_val" || prop == "dgm.max_speed" || prop == "dgm.min_speed")) {
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type == 1 && prop == "dgm.reverse_val") {
            cellProperties.readOnly = false;
          }

          if (data[row].dgm.dgm_type != 7 && prop == "dgm.pos_part_val") {
            cellProperties.readOnly = true;
          }

          if (data[row].dgm.dgm_type == 7 && prop == "dgm.dwCompre_volt_val") {
            //tms的比较电压值固定为2.4v不可设置
            cellProperties.readOnly = true;
          }
        }

        if (type == 6) {
          if (data[row].dgm.dgm_type == 1 && data[row].dgm.byDigitalType == 0 && prop == "dgm.byifpower_val") {
            cellProperties.readOnly = true;
          }
        }

        if (type == 10 || type == 15 || type == 14 || type == 20 || type == 21) {
          if (col == 0 && data[row].dgm.operate == 1) {
            cellProperties.readOnly = false;
          }
        }

        if (type == 10 && (prop == "dgm.status_val" || prop == "dgm.have_cfg_val")) {
          cellProperties.readOnly = true;
        }

        if (type == 20 && (prop == "dgm.status_val" || prop == "dgm.have_cfg_val")) {
          cellProperties.readOnly = true;
        }

        if (type == 21 && (prop == "dgm.status_val" || prop == "dgm.have_cfg_val")) {
          cellProperties.readOnly = true;
        } // if((type==20  || type==21) && prop=="dgm.X11_val"){
        //   if(data[row].dgm.speed_from == 1 || data[row].dgm.speed_from == 3){//转速接口选择"电压转速"/"电流转速"时，X11和X12都为输出且不可编辑
        //     cellProperties.readOnly  = true;
        //   }
        //   else{
        //     cellProperties.readOnly  = false;
        //   }
        // }


        if (type == 11) {
          if (row != -1 && data[row].dgm.operate == 0 && (prop == "dgm.mhd_id" || prop == "dgm.mainMhd")) {
            cellProperties.readOnly = true;
          }
        }

        if (type == 17) {
          if (row != -1 && data[row].dgm.operate == 0 && (prop == "dgm.MS_id" || prop == "dgm.main821" || prop == "dgm.SNA")) {
            cellProperties.readOnly = true;
          }
        }

        if (type == 999) {
          cellProperties.readOnly = true;
        }

        return cellProperties;
      };
    } //右键功能

  }, {
    key: "contextMenu",
    value: function contextMenu() {
      var that = this;
      var userType = parseInt(sessionStorage.getItem('userType'));
      that.type = Number(that.type);
      var typeList = [11, 10, 20, 21, 14, 15, 17, 18];

      if (!typeList.includes(that.type)) {
        return {
          items: {
            'freeze_column': {
              name: '固定列'
            },
            "unfreeze_column": {
              name: '取消列固定'
            },
            "hidden_column": {
              name: '隐藏列',
              callback: function callback(key, options) {
                var index = options[0].start.col;
                var arr = [];
                var amount = parseInt(options[0].end.col - options[0].start.col) + 1;

                if (index != null) {
                  for (var i = 0; i < amount; i++) {
                    arr.push(Number(index + i));
                  }

                  var plugin = that.getHot().getPlugin('hiddenColumns');
                  plugin.hideColumns(arr);
                  that.getHot().render();
                }
              }
            },
            "show_column": {
              name: '显示列',
              callback: function callback(key, options) {
                var plugin = that.getHot().getPlugin('hiddenColumns');
                var arr = plugin.getHiddenColumns();

                if (arr) {
                  plugin.showColumns(arr);
                  that.getHot().render();
                }
              }
            }
          }
        };
      } else if (that.type == 18) {
        if (userType === 0) {
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
                    text: "一但删除，该数据将不保留！！！确定删除吗？",
                    buttons: {
                      sure: "确认",
                      cancel: "取消"
                    },
                    dangerMode: true
                  }).then(function (willDelete) {
                    if (willDelete) {
                      var index = options[0].start.row;
                      var amount = parseInt(options[0].end.row - options[0].start.row) + 1;
                      var deleteData = that.changeList.deleteData;
                      deleteArray = [];

                      if (index != null) {
                        for (var i = 0; i < amount; i++) {
                          var defaultInfo = that.getDgmInfoByIndex(index + i);

                          if (defaultInfo.bindCount > 0) {
                            swal({
                              title: "提示",
                              text: "该通道下已建该类型测点，不可删除",
                              button: "确认"
                            });
                            return false;
                          }

                          var obj = {};
                          obj.ch_id = defaultInfo.ch_id;
                          obj.ch_name = defaultInfo.ch_name;
                          deleteData.push(obj);
                          deleteArray.push(defaultInfo);
                        }
                      }

                      if (deleteData.length > 0) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteDefaultChannel(deleteData).then(function (res) {
                          deleteData = [];

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
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
                    } else {
                      return false;
                    }
                  });
                }
              },
              "clearData": {
                name: "清零",
                callback: function callback(key, options) {
                  var index = options[0].start.row;
                  deleteArray = [];

                  if (index != null) {
                    var defaultInfo = that.getDgmInfoByIndex(index);

                    if (defaultInfo.dest_type == 2 || defaultInfo.dest_type == 4) {
                      var params = null;
                      params = {
                        ip: defaultInfo.dest_ip,
                        port: defaultInfo.dest_port,
                        slaveid: defaultInfo.slaveid
                      };
                      network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].resetOil(params).then(function (res) {
                        if (res.msg == 0) {
                          swal({
                            title: "提示",
                            text: "操作成功",
                            button: "确认"
                          });
                        } else if (res.msg == 1) {
                          console.log('参数为空！');
                          swal({
                            title: "提示",
                            text: "IP和端口号不能为空",
                            button: "确认"
                          });
                        } else if (res.msg == 2) {
                          console.log('后台运行错误！');
                          swal({
                            title: "提示",
                            text: "IP地址或端口设置错误，清零失败",
                            button: "确认"
                          });
                        }
                      })["catch"](function (err) {
                        console.log('请求错误', err);
                      });
                    } else {
                      swal({
                        title: "提示",
                        text: "非油液采集器，无此操作",
                        button: "确认"
                      });
                    }
                  }
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
        } else {
          return {
            items: {
              "row_above": {
                name: "插入新行"
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
      } else {
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
                  text: "一但删除，该数据将不保留！！！确定删除吗？",
                  buttons: {
                    sure: "确认",
                    cancel: "取消"
                  },
                  dangerMode: true
                }).then(function (willDelete) {
                  if (willDelete) {
                    var index = options[0].start.row;
                    var amount = parseInt(options[0].end.row - options[0].start.row) + 1;
                    var deleteData = that.changeList.deleteData;
                    var changeMhd = that.changeList.changeMhd;
                    deleteArray = [];
                    var deleteFlange = {};
                    deleteFlange.bolt = [];

                    if (index != null) {
                      for (var i = 0; i < amount; i++) {
                        if (that.type == 11) {
                          var mhdInfo = that.getDgmInfoByIndex(index + i);
                          var obj = {};
                          obj.master_id = mhdInfo.mainMhd;
                          obj.slaver_id = mhdInfo.mhd_id;
                          obj.byId = mhdInfo.byId;
                          deleteData.push(obj);
                          deleteArray.push(mhdInfo);
                        }

                        if (that.type == 17) {
                          var E821Info = that.getDgmInfoByIndex(index + i);
                          var _obj = {};
                          _obj.master_id = E821Info.main821;
                          _obj.slaver_id = E821Info.MS_id;
                          _obj.byId = E821Info.byId;
                          deleteData.push(_obj);
                          deleteArray.push(E821Info);
                        }

                        if (that.type == 10 || that.type == 20 || that.type == 21) {
                          var tmsInfo = that.getDgmInfoByIndex(index + i);
                          var _obj2 = {};
                          _obj2.dgm_id = tmsInfo.dgm_id;
                          _obj2.byId = tmsInfo.byId;
                          deleteData.push(_obj2);
                          deleteArray.push(tmsInfo);
                        }

                        if (that.type == 14 || that.type == 15) {
                          var flangeInfo = that.getDgmInfoByIndex(index + i);

                          if (that.type == 14) {
                            deleteFlange.type = 1;
                          } else {
                            deleteFlange.type = 2;
                          }

                          var _obj3 = {};
                          _obj3.dgm_id = flangeInfo.dgm_id;
                          _obj3.byId = flangeInfo.byId;
                          deleteFlange.bolt.push(_obj3);
                          deleteArray.push(flangeInfo);
                        }
                      }
                    }

                    if (deleteData.length > 0 || deleteFlange.bolt.length) {
                      if (that.type === 11) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteMHDList(deleteData).then(function (res) {
                          that.changeList.deleteData.splice(0, that.changeList.deleteData.length); // deleteData=[];

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
                            });
                            that.remove_remake();
                          } else if (res.msg == 1) {
                            console.log('参数为空！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 2) {
                            console.log('后台运行错误！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 3) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "从设备通道绑了测点,不能删除",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          }
                        })["catch"](function (err) {
                          console.log('请求错误', err);
                        });
                      }

                      if (that.type === 17) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteE821List(deleteData).then(function (res) {
                          deleteData = [];

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          } else if (res.msg == 1) {
                            console.log('参数为空！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 2) {
                            console.log('后台运行错误！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 3) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "从设备通道绑了测点,不能删除",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          }
                        })["catch"](function (err) {
                          console.log('请求错误', err);
                        });
                      }

                      if (that.type === 10) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteTMSList(deleteData).then(function (res) {
                          that.changeList.deleteData.splice(0, that.changeList.deleteData.length);

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
                            });
                            that.remove_remake();
                          } else if (res.msg == 1) {
                            console.log('参数为空！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 2) {
                            console.log('后台运行错误！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 3) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "此前置处理器绑了测点,不能删除",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          }
                        })["catch"](function (err) {
                          console.log('请求错误', err);
                        });
                      }

                      if (that.type === 20 || that.type === 21) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteTMSHostList(deleteData).then(function (res) {
                          that.changeList.deleteData.splice(0, that.changeList.deleteData.length);

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
                            });
                            that.remove_remake();
                          } else if (res.msg == 1) {
                            console.log('参数为空！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 2) {
                            console.log('后台运行错误！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 3) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "此前置处理器绑了测点,不能删除",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          }
                        })["catch"](function (err) {
                          console.log('请求错误', err);
                        });
                      }

                      if (that.type === 14 || that.type === 15) {
                        network_getApi__WEBPACK_IMPORTED_MODULE_5__["default"].deleteBoltList(deleteFlange).then(function (res) {
                          deleteFlange = {};

                          if (res.msg == 0) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "删除成功",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          } else if (res.msg == 1) {
                            console.log('参数为空！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 2) {
                            console.log('后台运行错误！');
                            swal({
                              title: "提示",
                              text: "删除失败",
                              button: "确认"
                            });
                          } else if (res.msg == 3) {
                            that.getHot().alter("remove_row", index, amount);
                            swal({
                              title: "提示",
                              text: "此前置处理器绑了测点,不能删除",
                              button: "确认"
                            }).then(function (value) {
                              that.router.go(0);
                            });
                          }
                        })["catch"](function (err) {
                          console.log('请求错误', err);
                        });
                      }
                    }
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
    } // 列宽被改变后

  }, {
    key: "afterColumnResize",
    value: function afterColumnResize() {
      var that = this;
      return function (condition) {
        var hot = that.getHot();
        colWidth = hot.getColWidth(condition); //修改拖动后的列宽
      };
    } //点击单元格之后输出该行信息（共用）

  }, {
    key: "afterOnCellMouseUp",
    value: function afterOnCellMouseUp() {
      var that = this;
      return function (e, coords, td) {
        if (coords.row >= 0) {
          var dgm = that.getDgmInfoByIndex(coords.row);
          var physicalRow = that.getHot().toPhysicalRow(coords.row);
          /*let data = that.getData();
          console.log(physicalRow)*/

          that.selectDgmInfo.type = that.type;

          if (that.type == 1) {
            if (dgm.dgm_type == 2 || dgm.dgm_type == 3 || dgm.dgm_type == 7 || dgm.dgm_type == 9 || dgm.dgm_type == 13) {
              //dgu2200,dgu2000v2,tmu2000,dgu2000E,YHC5000采集器获取版本号信息
              that.selectDgmInfo.verShow = true;
              that.selectDgmInfo.dgm_type = dgm.dgm_type;
              that.selectDgmInfo.dgm_id = dgm.dgm_id;
            } else {
              that.selectDgmInfo.verShow = false;
            }

            if (coords.col === 0) {
              var dgmTypeList = dgm.dgm_type;
              var hwOption = Number(dgm.hw_options);

              if (dgmTypeList != undefined) {
                var chTypeBtn = [];

                switch (Number(dgmTypeList)) {
                  case 0:
                    chTypeBtn = [1, 18];
                    break;

                  case 1:
                    chTypeBtn = [1, 2, 4, 5, 6];
                    break;

                  case 2:
                    if (hwOption === 0 || hwOption === 2) {
                      chTypeBtn = [1, 2, 3, 6, 7];
                    } else if (hwOption === 1 || hwOption === 3) {
                      chTypeBtn = [1, 2, 4, 6, 7];
                    }

                    break;

                  case 3:
                    chTypeBtn = [1, 2, 3, 4, 5, 6, 7, 9];
                    break;

                  case 4:
                    chTypeBtn = [1, 2, 4, 5, 6, 7, 11];
                    break;

                  case 5:
                    chTypeBtn = [1, 13, 14, 15, 16];
                    break;

                  case 6:
                    chTypeBtn = [1, 4, 17];
                    break;

                  case 7:
                    chTypeBtn = [1, 2, 3, 5, 10, 19, 20, 21];
                    break;

                  case 8:
                    chTypeBtn = [1, 7];
                    break;

                  case 9:
                    chTypeBtn = [1, 2, 4, 5, 7, 9];
                    break;

                  case 13:
                    chTypeBtn = [1, 2, 3, 5, 7, 9];
                    break;
                }

                sessionStorage.setItem('chTypeBtn', JSON.stringify(chTypeBtn));
                that.btnData.forEach(function (btnInfo) {
                  if (!chTypeBtn.includes(btnInfo.type)) {
                    btnInfo.none = false;
                  } else {
                    btnInfo.none = true;
                  }
                });
              }
            }
          }

          if (that.type == 16 && dgm.dgm_type == 5) {
            that.fittingInfo.push({
              dgm_id: dgm.dgm_id.toString(),
              dgm_name: dgm.dgm_name
            });
            sessionStorage.setItem('fittingInfo', JSON.stringify(that.fittingInfo));
          }

          if (that.type == 17) {
            that.select821Info.master_id = dgm.main821;
            that.select821Info.slaver_id = dgm.MS_id;
            that.select821Info.num = physicalRow;
          }

          if (that.type == 19) {
            that.selectDgmInfo.dgm_type = dgm.dgm_type;
            that.selectDgmInfo.dgm_id = dgm.dgm_id;
          }
        }
      };
    } // 过滤的方法(有待优化)（共用）

  }, {
    key: "afterFilter",
    value: function afterFilter() {
      var that = this;
      return function (condition) {
        var hot = that.getHot();
        var data = that.getData();
        var dgm_id_list = [];
        var dgmNameSource = {};
        data.forEach(function (dgm) {
          dgmNameSource[dgm.dgm.dgm_name] = dgm.dgm.dgm_id;
        });
        condition.forEach(function (item) {
          if (/dgm_name/.test(hot.colToProp(item.column))) {
            /* 如果过滤的是采集器名称 */
            item.conditions[0].args[0].forEach(function (dgm_name) {
              //获取采集器名称
              dgm_id_list.push(dgmNameSource[dgm_name]);
            });
            sessionStorage.setItem('filter_dgm_name', JSON.stringify(condition));
          }

          if (/dgm_id/.test(hot.colToProp(item.column))) {
            /* 如果过滤的是采集器ID */
            item.conditions[0].args[0].forEach(function (dgm_id) {
              //获取采集器名称
              dgm_id_list.push(dgm_id);
            });
          }
        });
        sessionStorage.setItem('dgm_id', JSON.stringify(dgm_id_list));
        hot.view.wt.wtOverlays.adjustElementsSize(true);
      };
    } //创建测点之后的方法(共用)

  }, {
    key: "afterCreateRow",
    value: function afterCreateRow() {
      var that = this;
      return function (index, amount, source) {
        //添加行事件
        // console.log('afterCreateRow');
        var data = that.getData();
        var changeData = that.changeList.changeData;
        var addData = that.changeList.addMhd;
        var addTmsData = that.changeList.addTms;
        var mhdList = that.MHDList;
        var tmsList = that.tmsList;
        var dgmList = that.dgmList;
        var flangeList = that.flangeList;
        var E821List = that.E821List;
        var defaultDgmInfo = that.defaultDgmInfo; //默认采集器的信息

        var addDefault = that.changeList.addDefaultDgm;
        var hot = that.getHot();
        var physicalRow = hot.toPhysicalRow(index);

        if (that.type == 11) {
          var dgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createMHD"])(mhdList, data);
          addData.push(dgm);
          data[physicalRow].dgm = dgm;
        }

        if (that.type == 10 || that.type == 20 || that.type == 21) {
          var _dgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createTms"])(tmsList, that.type, data);

          addTmsData.push(_dgm);
          data[physicalRow].dgm = _dgm;
        }

        if (that.type == 14) {
          var _dgm2 = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createFlange"])(dgmList, data);

          var sendDgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["changeDgm"])(that.type, _dgm2, index);
          data[physicalRow].dgm = _dgm2;
          changeData[data.length] = sendDgm;
        }

        if (that.type == 15) {
          var _dgm3 = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createPreps"])(dgmList, flangeList, data);

          var _sendDgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["changeDgm"])(that.type, _dgm3, index);

          data[physicalRow].dgm = _dgm3;
          changeData[data.length] = _sendDgm;
        }

        if (that.type == 17) {
          var _dgm4 = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createE821"])(E821List, data.length);

          addData.push(_dgm4);
          data[physicalRow].dgm = _dgm4;
        }

        if (that.type == 18) {
          var _dgm5 = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["createServerDgm"])(defaultDgmInfo);

          addDefault.push(_dgm5);
          data[physicalRow].dgm = _dgm5;
        }

        Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["reRenderSelectOption"])(hot, data);
      };
    } //改变数据的时候拼装数据结构（共用）

  }, {
    key: "beforeChange",
    value: function beforeChange() {
      var that = this;
      return function (changes, source) {
        var hot = that.getHot();
        var data = that.getData();
        var change_index;
        var change_prop;
        var change_oldVal;
        var change_newVal;
        var flag;
        var reg = new RegExp("^[+]{0,1}(\\d+)$"); //非负整数

        var regNum = new RegExp("^([0-9])+(\\.[0-9]+)?$"); //非负数字

        var regNo0 = new RegExp("^[1-9]{1}[0-9]*$|^0{1}\.{1}[0-9]+$|^[1-9]{1}[0-9]*\.{1}[0-9]+$"); //大于0的数字
        // console.log('beforeChange');

        var mhd_idList = []; //mhd的id

        var bolt_dgmList = {};
        var flange_idList = {};

        if (that.type == 11) {
          data.forEach(function (item) {
            if (item.dgm.mhd_id) {
              mhd_idList.push(item.dgm.mhd_id);
            }
          });
        }

        if (that.type == 14) {
          //法兰设置
          data.forEach(function (item) {
            if (!flange_idList[item.dgm.dgm_id]) {
              flange_idList[item.dgm.dgm_id] = [];
            }

            if (item.dgm.pos_loc != 255) {
              //公共除外
              flange_idList[item.dgm.dgm_id].push(item.dgm.pos_loc);
            }
          });
        }

        if (that.type == 16) {
          data.forEach(function (item) {
            if (!bolt_dgmList[item.dgm.dgm_id]) {
              bolt_dgmList[item.dgm.dgm_id] = [];
            }

            bolt_dgmList[item.dgm.dgm_id].push(item.dgm.highSamp);
          });
        }

        var _loop = function _loop(i) {
          var physicalRow = hot.toPhysicalRow(changes[i][0]);
          var columnVal = hot.propToCol(changes[i][1]);
          change_index = changes[i][0];
          change_prop = changes[i][1];
          change_oldVal = changes[i][2];
          change_newVal = changes[i][3];

          if (change_oldVal == change_newVal) {
            return "continue";
          }

          var dgm = that.getDgmInfoByIndex(change_index);
          /*type==1*/

          if (that.type == 14 && change_prop == "dgm.dgm_name") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.dgmSources, dgm.dgmSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dgm_id = flag;
            }
          }
          /*金风现场 采集器dguv2,dgu2000e倾角时间存储、长采样时间存储可编辑*/


          if (config.company === 1) {
            if (change_prop == "dgm.rt_tz_angle_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.rt_tz_angleSources, dgm.rt_tz_angleSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.rt_tz_angle = flag;
              }
            }

            if (change_prop == "dgm.his_tz_angle_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.his_tz_angleSources, dgm.his_tz_angleSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.his_tz_angle = flag;
              }
            }

            if (change_prop == "dgm.rt_wave_angle_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.rt_wave_angleSources, dgm.rt_wave_angleSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.rt_wave_angle = flag;
              }
            }

            if (change_prop == "dgm.his_wave_angle_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.his_wave_angleSources, dgm.his_wave_angleSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.his_wave_angle = flag;
              }
            }

            if (change_prop == "dgm.his_long_cap_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.his_long_capSources, dgm.his_long_capSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.his_long_cap = flag;
              }
            }
          } //主机列表


          if (that.type == 20 && change_prop == "dgm.dgm_name") {
            var tmsPumpList = that.tmsPumpList;
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.dgmSources, dgm.dgmSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dgm_id = flag;
              dgm.ch_class_val = '';
              dgm.ch_class = '';
              var pumpListSource = tmsPumpList[dgm.dgm_id]; //更新车厢下拉列表

              if (pumpListSource) {
                dgm.ch_class_sources = Object.values(pumpListSource);
                dgm.ch_class_sources_key = Object.keys(pumpListSource);
              }
            }
          } //前置和分机列表


          if ((that.type == 10 || that.type == 21) && change_prop == "dgm.dgm_name") {
            var tmsHostList = that.tmsHostList;
            var _tmsPumpList = that.tmsPumpList;
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.dgmSources, dgm.dgmSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dgm_id = flag;
              dgm.host_id_val = '';
              dgm.host_id = '';
              var hostListSource = tmsHostList[dgm.dgm_id]; //更新主机下拉列表

              if (hostListSource) {
                dgm.host_id_sources = Object.values(hostListSource);
                dgm.host_id_sources_key = Object.keys(hostListSource);
              }

              if (that.type == 21) {
                dgm.ch_class_val = '';
                dgm.ch_class = '';
                var _pumpListSource = _tmsPumpList[dgm.dgm_id]; //更新车厢下拉列表

                if (_pumpListSource) {
                  dgm.ch_class_sources = Object.values(_pumpListSource);
                  dgm.ch_class_sources_key = Object.keys(_pumpListSource);
                }
              }
            }
          }

          if (change_prop == "dgm.byRealtime_TZ_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.realTimeSources, dgm.realTimeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byRealtime_TZ_intrvl = flag;
            }
          }

          if (change_prop == "dgm.byVector_TZ_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byVectorSources, dgm.byVectorSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byVector_TZ_intrvl = flag;
            }
          }

          if (change_prop == "dgm.byRealtime_Wave_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.waveIntrvlSources, dgm.waveIntrvlSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byRealtime_Wave_intrvl = flag;
            }
          }

          if (change_prop == "dgm.byVector_Wave_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.bvWaveIntrvlSources, dgm.bvWaveIntrvlSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byVector_Wave_intrvl = flag;
            }
          }

          if (change_prop == "dgm.byBlack_Data_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byBlackSources, dgm.byBlackSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byBlack_Data_intrvl = flag;
            }
          }

          if (change_prop == "dgm.flash_intrvl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.fleshSources, dgm.fleshSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.flash_intrvl = flag;
            }
          }

          if (change_prop == "dgm.if_output_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.ifOutputSources, dgm.ifOutputSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.if_output = flag;
            }
          }

          if (change_prop == "dgm.offline_mode_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.offline_modeSources, dgm.offline_modeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.offline_mode = flag;
            }
          }
          /*type==2*/


          if (change_prop == "dgm.pos_class_val") {
            if ((change_newVal == "塔筒" || change_oldVal == "塔筒") && dgm.bind_count != 0) {
              swal({
                title: "提示",
                text: "\u8BE5\u901A\u9053\u4E0B\u5DF2\u5EFA\u6D4B\u70B9\uFF0C\u4E0D\u53EF\u4FEE\u6539",
                button: "确认"
              });
              return {
                v: false
              };
            }

            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posClassSources, dgm.posClassSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              var posLocSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["posClassToPosLoc"])(flag, dgm.dgm_type, dgm.t_root);
              dgm.pos_class = flag;
              dgm.pos_loc = Object.keys(posLocSource)[0];
              dgm.pos_loc_val = Object.values(posLocSource)[0];
              dgm.posLocSources = Object.values(posLocSource);
              dgm.posLocSources_key = Object.keys(posLocSource);

              if (flag == 4 && dgm.t_root != 2) {
                dgm.pos_loc = '';
                dgm.pos_loc_val = "";
              }
            }
          }

          if (change_prop == "dgm.pos_loc_val") {
            var posLoc = ['机舱X', '机舱Y', '塔顶X', '塔顶Y', '塔底X', '塔底Y', '塔筒1X', '塔筒1Y', '塔筒2X', '塔筒2Y', '塔筒3X', '塔筒3Y', '塔筒4X', '塔筒4Y', '塔筒5X', '塔筒5Y'];

            if ((posLoc.includes(change_newVal) || posLoc.includes(change_oldVal)) && dgm.bind_count != 0) {
              swal({
                title: "提示",
                text: "\u8BE5\u901A\u9053\u4E0B\u5DF2\u5EFA\u6D4B\u70B9\uFF0C\u4E0D\u53EF\u4FEE\u6539",
                button: "确认"
              });
              return {
                v: false
              };
            }

            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posLocSources, dgm.posLocSources_key, change_newVal, change_index);
            var posLocList = [];

            if (flag === false) {
              return {
                v: false
              };
            } else {
              /*if(dgm.pos_class==4){
                data.forEach(dgmItem =>{
                  if(dgm.dgm_id == dgmItem.dgm.dgm_id){
                    posLocList.push(dgmItem.dgm.pos_loc_val)
                  }
                });
                if(posLocList.indexOf(change_newVal)>-1){
                  swal({
                    title: "提示",
                    text: `该位置已绑`,
                    button: "确认",
                  });
                  return false;
                }
                else{
                  dgm.pos_loc = flag;
                  dgm.pos_loc_val = change_newVal;
                }
              }
              else{*/
              dgm.pos_loc = flag;
              dgm.pos_loc_val = change_newVal;
              /*}*/
            }
          }

          if (change_prop == "dgm.bySensorType_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.sensorSources, dgm.sensorSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bySensorType = flag;
              dgm.scale_unit = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["sensorType"])(dgm.bySensorType)[1];
              dgm.scale_unit_val = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["sensorType"])(dgm.bySensorType)[2];
              dgm.byIntegral = "0";
              dgm.byIntegral_val = "不积分";
              var integralSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["unitToSources"])(dgm.scale_unit, dgm.byIntegral, dgm.dgm_type)[1];
              var unitSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["unitToSources"])(dgm.scale_unit, dgm.byIntegral, dgm.dgm_type)[0];
              dgm.byUnitName = Object.values(unitSource)[0];
              dgm.byUnit = Object.keys(unitSource)[0];
              dgm.integralSources = Object.values(integralSource);
              dgm.integralSources_key = Object.keys(integralSource);
              dgm.byHwIntegralSources = Object.values(integralSource);
              dgm.byHwIntegralSources_key = Object.keys(integralSource);
              dgm.unitSources = Object.values(unitSource);
              dgm.unitSources_key = Object.keys(unitSource);

              if (dgm.dgm_type == 4) {
                dgm.byHwIntegral = "0";
                dgm.byHwIntegral_val = "不积分";
              }
            }
          }

          if (change_prop == "dgm.byIntegral_val") {
            //软件积分
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.integralSources, dgm.integralSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byIntegral = flag;

              if (flag == 1 && dgm.dgm_type == 4) {
                //mhd软件积分与硬件积分二选一
                dgm.byHwIntegral = "0";
                dgm.byHwIntegral_val = "不积分";
              }

              var _unitSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["unitToSources"])(dgm.scale_unit, dgm.byIntegral, dgm.dgm_type)[0];
              dgm.byUnit = Object.keys(_unitSource)[0];
              dgm.byUnitName = Object.values(_unitSource)[0];
              dgm.unitSources = Object.values(_unitSource);
              dgm.unitSources_key = Object.keys(_unitSource);
            }
          }

          if (change_prop == "dgm.byUnitName") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.unitSources, dgm.unitSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byUnit = flag;
            }
          }

          if (change_prop == "dgm.byVib_Signal_Zoom_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.vibSignalZoomSources, dgm.vibSignalZoomSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byVib_Signal_Zoom = flag;
            }
          }

          if (change_prop == "dgm.dwVib_Scale") {
            if (!regNo0.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u6B63\u6570"),
                button: "确认"
              });
              return {
                v: false
              };
            }

            dgm.vibSignalZoomSources = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["getVibSignalZoom"])(dgm.vibSignalZoomMaxVal, change_newVal);
            dgm.byVib_Signal_Zoom_val = dgm.vibSignalZoomSources[Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["getIndexOfArr"])(dgm.vibSignalZoomSources_key, dgm.byVib_Signal_Zoom)]; //信号增益
          }

          if (change_prop == "dgm.dwSpeed_Ac_corr" || change_prop == "dgm.dwVib_Ac_corr" || change_prop == "dgm.ac_corr") {
            if (!regNo0.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u6B63\u6570"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (change_prop == "dgm.byHw_Filter_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.hwFilterSources, dgm.hwFilterSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byHw_Filter = flag;
            }
          }

          if (change_prop == "dgm.bySw_Filter_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.swFilterSources, dgm.swFilterSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bySw_Filter = flag;
            }
          }

          if (change_prop == "dgm.power_time_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.powerTimeSources, dgm.powerTimeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.power_time = flag;
            }
          }

          if (change_prop == "dgm.pos_part_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.pos_part = flag;

              if (flag == '255') {
                for (var k = 1; k < 10; k++) {
                  dgm["pos_part".concat(k)] = '255';
                  dgm["pos_part".concat(k, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part1_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              if (dgm.pos_part == "255" || dgm.pos_part == "") {
                swal({
                  title: "提示",
                  text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF61",
                  button: "确认"
                });
                return {
                  v: false
                };
              } else {
                dgm.pos_part1 = flag;

                if (flag == '255') {
                  for (var _k = 2; _k < 10; _k++) {
                    dgm["pos_part".concat(_k)] = '255';
                    dgm["pos_part".concat(_k, "_val")] = '无';
                  }
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part2_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              if (dgm["pos_part"] == "255" || dgm["pos_part"] == "") {
                swal({
                  title: "提示",
                  text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF61",
                  button: "确认"
                });
                return {
                  v: false
                };
              }

              if (dgm["pos_part1"] == "255" || dgm["pos_part1"] == "") {
                swal({
                  title: "提示",
                  text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF62",
                  button: "确认"
                });
                return {
                  v: false
                };
              }

              dgm.pos_part2 = flag;

              if (flag == '255') {
                for (var _k2 = 3; _k2 < 10; _k2++) {
                  dgm["pos_part".concat(_k2)] = '255';
                  dgm["pos_part".concat(_k2, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part3_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k3 = 1; _k3 < 3; _k3++) {
                if (dgm["pos_part".concat(_k3)] == "255" || dgm["pos_part".concat(_k3)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k3 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part3 = flag;

              if (flag == '255') {
                for (var _k4 = 4; _k4 < 10; _k4++) {
                  dgm["pos_part".concat(_k4)] = '255';
                  dgm["pos_part".concat(_k4, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part4_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k5 = 1; _k5 < 4; _k5++) {
                if (dgm["pos_part".concat(_k5)] == "255" || dgm["pos_part".concat(_k5)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k5 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part4 = flag;

              if (flag == '255') {
                for (var _k6 = 5; _k6 < 10; _k6++) {
                  dgm["pos_part".concat(_k6)] = '255';
                  dgm["pos_part".concat(_k6, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part5_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k7 = 1; _k7 < 5; _k7++) {
                if (dgm["pos_part".concat(_k7)] == "255" || dgm["pos_part".concat(_k7)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k7 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part5 = flag;

              if (flag == '255') {
                for (var _k8 = 6; _k8 < 10; _k8++) {
                  dgm["pos_part".concat(_k8)] = '255';
                  dgm["pos_part".concat(_k8, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part6_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k9 = 1; _k9 < 6; _k9++) {
                if (dgm["pos_part".concat(_k9)] == "255" || dgm["pos_part".concat(_k9)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k9 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part6 = flag;

              if (flag == '255') {
                for (var _k10 = 7; _k10 < 10; _k10++) {
                  dgm["pos_part".concat(_k10)] = '255';
                  dgm["pos_part".concat(_k10, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part7_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k11 = 1; _k11 < 7; _k11++) {
                if (dgm["pos_part".concat(_k11)] == "255" || dgm["pos_part".concat(_k11)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k11 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part7 = flag;

              if (flag == '255') {
                for (var _k12 = 8; _k12 < 10; _k12++) {
                  dgm["pos_part".concat(_k12)] = '255';
                  dgm["pos_part".concat(_k12, "_val")] = '无';
                }
              }
            }
          }

          if (change_prop == "dgm.pos_part8_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k13 = 1; _k13 < 8; _k13++) {
                if (dgm["pos_part".concat(_k13)] == "255" || dgm["pos_part".concat(_k13)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k13 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }

              dgm.pos_part8 = flag;

              if (flag == '255') {
                dgm["pos_part9"] = '255';
                dgm["pos_part9_val"] = '无';
              }
            }
          }

          if (change_prop == "dgm.pos_part9_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posPartSources, dgm.posPartSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              for (var _k14 = 1; _k14 < 9; _k14++) {
                if (dgm["pos_part".concat(_k14)] == "255" || dgm["pos_part".concat(_k14)] == "") {
                  swal({
                    title: "提示",
                    text: "\u8BF7\u5148\u9009\u62E9\u5173\u8054\u90E8\u4EF6".concat(Number(_k14 + 1)),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                } else {
                  dgm.pos_part9 = flag;
                }
              }
            }
          }

          if (change_prop == "dgm.byHwIntegral_val") {
            //硬件积分
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byHwIntegralSources, dgm.byHwIntegralSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byHwIntegral = flag;

              if (flag == 1 && dgm.dgm_type == 4) {
                //mhd软件积分与硬件积分二选一
                dgm.byIntegral = "0";
                dgm.byIntegral_val = "不积分";
              }

              var _unitSource2 = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["unitToSources"])(dgm.scale_unit, dgm.byHwIntegral, dgm.dgm_type)[0];
              dgm.byUnit = Object.keys(_unitSource2)[0];
              dgm.byUnitName = Object.values(_unitSource2)[0];
              dgm.unitSources = Object.values(_unitSource2);
              dgm.unitSources_key = Object.keys(_unitSource2);
            }
          }

          if (change_prop == "dgm.trans_ch_type_val") {
            if (dgm.bind_count != 0) {
              swal({
                title: "提示",
                text: "\u8BE5\u901A\u9053\u4E0B\u5DF2\u5EFA\u8BE5\u7C7B\u578B\u6D4B\u70B9\uFF0C\u4E0D\u53EF\u8F6C",
                button: "确认"
              });
              return {
                v: false
              };
            }

            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.transChTypeSources, dgm.transChTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.trans_ch_type = flag;
            }
          }

          if (change_prop == "dgm.int_zoom_val") {
            //积分量程
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.intZoomSources, dgm.intZoomSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.int_zoom = flag;
            }
          }
          /*type==3*/


          if (change_prop == "dgm.byStaType_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byStaTypeSources, dgm.byStaTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byStaType = flag;
            }
          }

          if (change_prop == "dgm.range_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.rangeSources, dgm.rangeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.range = flag;
            }
          }

          if (change_prop == 'dgm.dwNull_shift') {
            //零漂
            if (isNaN(Number(change_newVal))) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }
          /*type==4*/


          if (change_prop == "dgm.dwLow_signal_value" || change_prop == "dgm.dwLow_eng_value" || change_prop == "dgm.dwHi_signal_value" || change_prop == "dgm.dwHi_eng_value") {
            var _reg = new RegExp(/(^[\-0-9][0-9]*(.[0-9]+)?)$/); //正负数字正则


            if (!_reg.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (that.type == 4) {
            if (change_prop == "dgm.bySensorType821_val") {
              flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.sensorSources, dgm.sensorSources_key, change_newVal, change_index);

              if (flag === false) {
                return {
                  v: false
                };
              } else {
                dgm.bySensorType = flag;
                var byUnitNameSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["unitToSources"])(null, null, dgm.dgm_type, dgm.bySensorType)[0];
                dgm.byUnitNameSources = Object.values(byUnitNameSource);
                dgm.byUnitNameSources_key = Object.keys(byUnitNameSource);
                dgm.byUnit = Object.keys(byUnitNameSource)[0]; //单位

                dgm.byUnitName_val = Object.values(byUnitNameSource)[0]; //单位名称
              }
            }

            if (change_prop == "dgm.dwLow_signal_value") {
              if (Number(change_newVal) >= dgm.dwHi_signal_value) {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884C\uFF0C\u4FE1\u53F7\u8F93\u5165\u8303\u56F4\u9AD8\u5E94\u5927\u4E8E\u4FE1\u53F7\u8F93\u5165\u8303\u56F4\u4F4E"),
                  button: "确认"
                });
                return {
                  v: false
                };
              }
            }

            if (change_prop == "dgm.dwHi_signal_value") {
              if (Number(change_newVal) <= dgm.dwLow_signal_value) {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884C\uFF0C\u4FE1\u53F7\u8F93\u5165\u8303\u56F4\u9AD8\u5E94\u5927\u4E8E\u4FE1\u53F7\u8F93\u5165\u8303\u56F4\u4F4E"),
                  button: "确认"
                });
                return {
                  v: false
                };
              }
            }

            if (change_prop == "dgm.dwLow_eng_value") {
              if (Number(change_newVal) >= dgm.dwHi_eng_value) {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884C\uFF0C\u5DE5\u7A0B\u91CF\u8F93\u5165\u8303\u56F4\u9AD8\u5E94\u5927\u4E8E\u5DE5\u7A0B\u91CF\u8F93\u5165\u8303\u56F4\u4F4E"),
                  button: "确认"
                });
                return {
                  v: false
                };
              }
            }

            if (change_prop == "dgm.dwHi_eng_value") {
              if (Number(change_newVal) <= dgm.dwLow_eng_value) {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884C\uFF0C\u5DE5\u7A0B\u91CF\u8F93\u5165\u8303\u56F4\u9AD8\u5E94\u5927\u4E8E\u5DE5\u7A0B\u91CF\u8F93\u5165\u8303\u56F4\u4F4E"),
                  button: "确认"
                });
                return {
                  v: false
                };
              }
            }
          }
          /*type==5*/


          if (change_prop == "dgm.byStrong_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byStrongSources, dgm.byStrongSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byStrong = flag;
            }
          }

          if (change_prop == "dgm.chan_type_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.chanTypeSources, dgm.chanTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.chan_type = flag;
            }
          }

          if (change_prop == "dgm.reverse_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.reverseSources, dgm.reverseSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.reverse = flag;
            }
          }

          if (change_prop == "dgm.dwCompre_volt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.dwCompreVoltSources, dgm.dwCompreVoltSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dwCompre_volt = flag;
            }
          }

          if (change_prop == "dgm.polar_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.polarSources, dgm.polarSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.polar = flag;
            }
          }

          if (change_prop == "dgm.high_density_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.highDensitySources, dgm.highDensitySources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.high_density = flag;
            }
          }
          /*type==6*/


          if (change_prop == "dgm.byDigitalType_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byDigitalTypeSources, dgm.byDigitalTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byDigitalType = flag;
            }
          }

          if (change_prop == "dgm.byifpower_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byifpowerSources, dgm.byifpowerSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byifpower = flag;
            }
          }

          if (change_prop == "dgm.byifalarm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byifalarmsources, dgm.byifalarmsources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byifalarm = flag;
            }
          }

          if (change_prop == "dgm.bybindch_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.bybindchSources, dgm.bybindchSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bybindch = flag;
            }
          }

          if (change_prop == "dgm.bybindtype_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.bybindtypeSources, dgm.bybindtypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bybindtype = flag;
            }
          }
          /*type==7*/


          if (change_prop == "dgm.dest_type_val") {
            //type==18 外部集成设置
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.destTypeSources, dgm.destTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dest_type = flag;
              var databitSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["destToDatabit"])(dgm.dest_type);
              dgm.databit = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["getArrFromObj"])(databitSource)[0][0], dgm.databit_val = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["getArrFromObj"])(databitSource)[1][0], //数据位
              dgm.databitSources = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["getArrFromObj"])(databitSource)[1];
              dgm.databitSources_key = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["getArrFromObj"])(databitSource)[0];
            }
          }

          if (change_prop == "dgm.databit_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.databitSources, dgm.databitSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.databit = flag;
            }
          }

          if (change_prop == "dgm.stopbit_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.stopbitSources, dgm.stopbitSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.stopbit = flag;
            }
          }

          if (change_prop == "dgm.baudrate_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.baudrateSources, dgm.baudrateSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.baudrate = flag;
            }
          }

          if (change_prop == "dgm.parity_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.paritySources, dgm.paritySources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.parity = flag;
            }
          }

          if (change_prop == "dgm.mode_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.modeSources, dgm.modeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.mode = flag;
            }
          }

          if (change_prop == "dgm.masterslave_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.masterslaveSources, dgm.masterslaveSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.masterslave = flag;
            }
          }
          /*type==9*/


          if (change_prop == "dgm.capture_type_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.captureTypeSources, dgm.captureTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.capture_type = flag;
            }
          }

          if (change_prop == "dgm.capture_freq_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.captureFreqSources, dgm.captureFreqSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.capture_freq = flag;
              var captureTimeSource = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["freqToCaptureTime"])(dgm.capture_freq);
              dgm.capture_time = Object.values(captureTimeSource)[0];
              dgm.capture_time_val = Object.keys(captureTimeSource)[0];
              dgm.captureTimeSources = Object.keys(captureTimeSource);
              dgm.captureTimeSources_key = Object.values(captureTimeSource);
            }
          }

          if (change_prop == "dgm.capture_time_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.captureTimeSources, dgm.captureTimeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.capture_time = flag;
              dgm.capture_time_val = change_newVal;
            }
          }

          if (change_prop == "dgm.ch1") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.channelSources, dgm.channelSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.ch1_val = flag;
              dgm.ch1 = change_newVal;
            }
          }
          /*type==11*/


          if (change_prop == "dgm.mhd_id") {
            var _reg2 = new RegExp("^[0-9]*$");

            if (!_reg2.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u6570\u5B57"),
                button: "确认"
              });
            } else {
              if (change_newVal.length !== 8) {
                swal({
                  title: "提示",
                  text: "ID\u9700\u4E3A8\u4F4D\u6570\u5B57",
                  button: "确认"
                });
              }

              if (mhd_idList.indexOf(change_newVal) != -1) {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884Cid\u91CD\u540D"),
                  button: "确认"
                });
              }
            }
          }
          /*type==13*/


          if (change_prop == "dgm.frq_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.frqSources, dgm.frqSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.frq = flag;
            }
          }

          if (change_prop == "dgm.wm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.wmSources, dgm.wmSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.wm = flag;
            }
          }

          if (change_prop == "dgm.wkm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.wkmSources, dgm.wkmSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.wkm = flag;
            }
          }

          if (change_prop == "dgm.flm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.flmSources, dgm.flmSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.flm = flag;
            }
          }

          if (change_prop == "dgm.ev_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.evSources, dgm.evSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.ev = flag;
            }
          }

          if (change_prop == "dgm.pm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.pmSources, dgm.pmSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.pm = flag;
            }
          }

          if (change_prop == "dgm.sl_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.slSources, dgm.slSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.sl = flag;
            }
          }

          if (change_prop == "dgm.tm_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.tmSources, dgm.tmSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.tm = flag;
            }
          }

          if (change_prop == "dgm.swDamping_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.swDampingSources, dgm.swDampingSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.swDamping = flag;
            }
          }

          if (change_prop == "dgm.ext_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.extSources, dgm.extSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.ext = flag;
            }
          }

          if (change_prop == "dgm.pulserCtx_md_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.pulserCtx_mdSources, dgm.pulserCtx_mdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.pulserCtx_md = flag;
            }
          }

          if (change_prop == "dgm.gateMode_gt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.gateMode_gtSources, dgm.gateMode_gtSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.gateMode_gt = flag;
            }
          }

          if (change_prop == "dgm.gateMode_md_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.gateMode_mdSources, dgm.gateMode_mdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.gateMode_md = flag;
            }
          }

          if (change_prop == "dgm.gateFlawJudge_gt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.gateFlawJudge_gtSources, dgm.gateFlawJudge_gtSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.gateFlawJudge_gt = flag;
            }
          }

          if (change_prop == "dgm.lg_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.lgSources, dgm.lgSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.lg = flag;
            }
          }

          if (change_prop == "dgm.swSuppressCnt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.swSuppressCntSources, dgm.swSuppressCntSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.swSuppressCnt = flag;
            }
          }

          if (change_prop == "dgm.measurementCtx_gt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.measurementCtx_gtSources, dgm.measurementCtx_gtSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.measurementCtx_gt = flag;
            }
          }

          if (change_prop == "dgm.measurementCtx_md_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.measurementCtx_mdSources, dgm.measurementCtx_mdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.measurementCtx_md = flag;
            }
          }

          if (change_prop == "dgm.jd_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.jdSources, dgm.jdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.jd = flag;
            }
          }

          if (change_prop == "dgm.sw_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.swSources, dgm.swSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.sw = flag;
            }
          }

          if (change_prop == "dgm.role_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.roleSources, dgm.roleSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.role = flag;
            }
          }
          /*type==14*/


          if (change_prop == "dgm.pos_class2600_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posClassSources, dgm.posClassSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              var _posLocSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["posClassToPosLoc"])(flag, 5, dgm.t_root);

              var this_flange_posLoc = flange_idList[dgm.dgm_id];

              if (flag != 0) {
                for (var key in _posLocSource) {
                  if (this_flange_posLoc.includes(key)) {
                    delete _posLocSource[key];
                  }
                }
              }

              dgm.pos_class2600 = flag;
              dgm.pos_loc = ''; //安装位置置空

              dgm.pos_loc_val = ''; //安装位置置空

              dgm.posLocSources = Object.values(_posLocSource);
              dgm.posLocSources_key = Object.keys(_posLocSource);
            }
          }
          /*type==15*/


          if (that.type == 15 && change_prop == "dgm.dgm_name") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.dgmSources, dgm.dgmSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.dgm_id = flag;
              dgm.flange_id = Object.keys(that.flangeList[dgm.dgm_id])[0];
              dgm.flange_name = Object.values(that.flangeList[dgm.dgm_id])[0];
              dgm.flangeSources = Object.values(that.flangeList[dgm.dgm_id]);
              dgm.flangeSources_keys = Object.keys(that.flangeList[dgm.dgm_id]);
            }
          }

          if (change_prop == "dgm.flange_name") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.flangeSources, dgm.flangeSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.flange_id = flag;
            }
          }

          if (change_prop == "dgm.collect_mode_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.collectModeSources, dgm.collectModeSources_keys, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.collect_mode = flag;
            }
          }
          /*type==16*/


          if (change_prop == "dgm.bolt_pos_loc_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.posLocSources, dgm.posLocSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bolt_pos_loc = flag;
              dgm.flange_id = flag;
              dgm.prepsIdSources = Object.values(dgm.flange_prepsIdSources[dgm.bolt_pos_loc]);
              dgm.prepsIdSources_key = Object.keys(dgm.flange_prepsIdSources[dgm.bolt_pos_loc]);
              dgm.preps_id = dgm.prepsIdSources_key[0]; //预处理器控制

              dgm.preps_id_val = dgm.prepsIdSources[0]; //预处理器控制
            }
          }

          if (change_prop == "dgm.preps_id_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.prepsIdSources, dgm.prepsIdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.preps_id = flag;
            }
          }

          if (change_prop == "dgm.b_id_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.bIdSources, dgm.bIdSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.b_id = flag;
              data.forEach(function (item, index) {
                if (item.dgm.dgm_id == dgm.dgm_id && item.dgm.ch_id == dgm.b_id) {
                  item.dgm.b_id = dgm.ch_id;
                  item.dgm.b_id_val = dgm.ch_name;
                  var sendDgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["changeDgm"])(that.type, item.dgm, index);
                  var changeMachineId = sendDgm.machineId + "_" + index;
                  var chType_chId = sendDgm.ch_type + "_" + sendDgm.ch_id;
                  var changeData = that.changeList.changeData;
                  var changeDgmId = item.dgm.dgm_id;
                  changeData[changeMachineId] = {};
                  changeData["type"] = that.type;
                  changeData[changeMachineId][changeDgmId] = {};
                  changeData[changeMachineId][changeDgmId][chType_chId] = sendDgm;
                }
              });
            }
          }

          if (change_prop == "dgm.bySensorTypeBolt_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.bySensorTypeSources, dgm.bySensorTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.bySensorType = flag;
            }
          }

          if (that.type == 16 && change_prop == "dgm.byUnitName") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.byUnitNameSources, dgm.byUnitNameSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.byUnit = flag;
            }
          }

          if (change_prop == "dgm.highSamp_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.highSampSources, dgm.highSampSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.highSamp = flag;
            }
          }

          if (change_prop == "dgm.scanLength") {
            var _reg3 = new RegExp(/(^[\-0-9][0-9]*(.[0-9]+)?)$/); //正负数字正则


            if (!_reg3.test(change_newVal) || change_newVal > 300000) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E300000\u7684\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (change_prop == "dgm.stressType_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.stressTypeSources, dgm.stressTypeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.stressType = flag;
            }
          }

          if (change_prop == "dgm.readMode_val") {
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.readModeSources, dgm.readModeSources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.readMode = flag;
            }
          }

          if (change_prop == "dgm.boltID") {
            var chineseReg = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

            if (chineseReg.test(change_newVal)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u87BA\u6813ID\u4E0D\u80FD\u4E3A\u4E2D\u6587"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (change_prop == "dgm.highSamp_val") {
            //螺栓设置的高密度采样，同一采集器下只能有一个通道可设为高密度采样
            if (change_newVal === "是" && bolt_dgmList[dgm.dgm_id].includes('1')) {
              swal({
                title: "提示",
                text: "\u540C\u4E00\u91C7\u96C6\u5668\u4E0B\u53EA\u80FD\u6709\u4E00\u4E2A\u901A\u9053\u53EF\u8BBE\u4E3A\u9AD8\u5BC6\u5EA6\u91C7\u6837",
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          var numPropArr = ['dgm.car_id', 'dgm.dev_id', 'dgm.dev_id', 'dgm.tower_flange_sum', 'dgm.iDamping', 'dgm.iPulseCoarseDly', 'dgm.iPulseFineDly', 'dgm.iPulseWdh', 'dgm.iPRF', 'dgm.iSupCnt', 'dgm.bolt_sum', 'dgm.preps_id', 'dgm.bolt_num_beigin', 'dgm.bolt_num_end', 'dgm.ac_id', 'dgm.bolt_num', 'dgm.fGain', 'dgm.preQuantity', 'dgm.vector_intrvl', 'dgm.wave_intrvl', 'dgm.wait_timeout', 'dgm.IEPE_time', 'dgm.alarm_intrvl'];

          if (numPropArr.indexOf(change_prop) > -1) {
            if (!reg.test(change_newVal)) {
              if (change_prop == "dgm.car_id") {
                swal({
                  title: "提示",
                  text: "\u7B2C".concat(change_index + 1, "\u884C\u8F66\u53A2\u53F7\u9700\u4E3A\u975E\u8D1F\u6574\u6570"),
                  button: "确认"
                });
                return {
                  v: false
                };
              }

              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u975E\u8D1F\u6574\u6570"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          var boltValidate = ['dgm.totalLen', 'dgm.fBoltLength', 'dgm.fDiameter', 'dgm.clampLen', 'dgm.fStart', 'dgm.fWidth', 'dgm.fThreshold', 'dgm.cableLen', 'dgm.cableCoeff', 'dgm.preCoeff', 'dgm.offsetValue', 'dgm.wStart', 'dgm.wRange']; //螺栓设置需验证为非负数字的选项

          if (numPropArr2.includes(change_prop) || boltValidate.includes(change_prop)) {
            var val = Number(change_newVal);

            if (!regNum.test(val)) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u975E\u8D1F\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (change_prop == "dgm.car_id") {
            if (change_newVal > 19) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u51650-19\u7684\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          if (change_prop == "dgm.dev_id") {
            if (change_newVal > 9) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u51650-9\u7684\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }
          /*type==19*/


          if (change_prop == "dgm.if_activity_val") {
            //是否开启轨道波磨
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.if_activity_sources, dgm.if_activity_sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.if_activity = flag;
            }
          }

          if (change_prop == "dgm.cap_type_val") {
            //波磨采样触发类型
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.cap_type_sources, dgm.cap_type_sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.cap_type = flag;
            }
          } // if (change_prop == 'dgm.start_time') {//验证日期格式：-年-月-日
          //   let r=change_newVal.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          //   if(r==null){
          //     swal({
          //       title: "提示",
          //       text: `第${change_index+1}行请输入正确的日期格式，例如：2008-08-08`,
          //       button: "确认",
          //     });
          //     return false;
          //   }
          //   let d=new Date(r[1],r[3]-1,r[4]);
          //   let num = (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
          //   if(num==0){
          //     swal({
          //       title: "提示",
          //       text: `第${change_index+1}行请输入正确的日期格式，例如：2008-08-08`,
          //       button: "确认",
          //     });
          //     return false;
          //   }
          // }

          /*type==20 || 21*/


          if (change_prop == "dgm.speed_from_val") {
            //转速接口
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.speed_from_sources, dgm.speed_from_sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.speed_from = flag; // if(flag==1 || flag==3){
              //   dgm.X11 =  dgm.X12 = "1";
              //   dgm.X11_val = dgm.X12_val ='输出';
              // }
              // else{
              //   dgm.X11 = "1";
              //   dgm.X11_val ='输出';
              //   dgm.X12 = "0";
              //   dgm.X12_val ='输入';
              // }
            }
          } // if(change_prop=="dgm.X11_val"){//X11
          //   flag = setChangeCellResult(dgm.X11_sources,dgm.X11_sources_key,change_newVal,change_index);
          //   if(flag === false) { return false}
          //   else {
          //     dgm.X11 = flag;
          //     if(flag==1){
          //       dgm.X12 = "0";
          //       dgm.X12_val ='输入';
          //     }
          //     else{
          //       dgm.X12 = "1";
          //       dgm.X12_val = '输出';
          //     }
          //   }
          // }


          if (change_prop == "dgm.host_id_val") {
            //所属主机
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.host_id_sources, dgm.host_id_sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.host_id = flag;
            }
          }

          if (change_prop == "dgm.ch_class_val") {
            //绑定车厢
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.ch_class_sources, dgm.ch_class_sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.ch_class = flag;
            }
          }

          if (change_prop == "dgm.frequency") {
            //轨道波磨分析频率
            Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["compute_frequency_spectral"])(change_newVal, dgm.spectral, dgm);
          }

          if (change_prop == "dgm.spectral") {
            //轨道波磨谱线数
            Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["compute_frequency_spectral"])(dgm.frequency, change_newVal, dgm);
          }

          if (change_prop == "dgm.oneway_time") {
            //轨道波磨单程时间
            var max_time = Number(dgm.maxTime);

            if (Number(change_newVal) > max_time) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u5355\u7A0B\u65F6\u95F4\u4E0D\u5F97\u8D85\u8FC7\u6700\u5927\u503C").concat(max_time),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }
          /*type==22 */


          if (change_prop == "dgm.freq") {
            //采样频率
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.freqSources, dgm.freqSources, Number(change_newVal), change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.freq = Number(change_newVal);
            }
          }

          if (change_prop == "dgm.vector_status_val") {
            //是否发送特征值
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.vector_status_Sources, dgm.vector_status_Sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.vector_status = flag;
            }
          }

          if (change_prop == "dgm.wave_status_val") {
            //是否发送特征值
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.wave_status_Sources, dgm.wave_status_Sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.wave_status = flag;
            }
          }

          if (change_prop == "dgm.run_mode_val") {
            //运行模式
            flag = Object(utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["setChangeCellResult"])(dgm.run_mode_Sources, dgm.run_mode_Sources_key, change_newVal, change_index);

            if (flag === false) {
              return {
                v: false
              };
            } else {
              dgm.run_mode = flag;
            }
          }

          if (change_prop == "dgm.vector_intrvl" || change_prop == "dgm.wave_intrvl" || change_prop == "dgm.alarm_intrvl") {
            /* ‘特征值采集间隔’和‘波形采集间隔’和‘报警下的采集间隔’1-65535，单位秒*/
            if (change_newVal > 65535 || change_newVal < 1) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u51651-65535\u7684\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            } else {
              if (change_prop == "dgm.vector_intrvl") {
                //如果正在输入的是‘特征值采集间隔’，则将对应的‘波形采集间隔’设置为同样的值，表示1倍
                dgm.wave_intrvl = change_newVal;
              }

              if (change_prop == "dgm.wave_intrvl") {
                //如果正在输入的是‘波形采集间隔’，必须为特征值采集间隔的整数倍
                if (Number(change_newVal) % Number(dgm.vector_intrvl) != 0) {
                  swal({
                    title: "提示",
                    text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u5165\u2018\u7279\u5F81\u503C\u91C7\u96C6\u95F4\u9694\u2019\u7684\u6574\u6570\u500D"),
                    button: "确认"
                  });
                  return {
                    v: false
                  };
                }
              }
            }
          }

          if (change_prop == "dgm.wait_timeout" || change_prop == "dgm.IEPE_time") {
            /* ‘连接超时等待时间’和‘IEPE稳定时间’1-255，单位秒*/
            if (change_newVal > 255 || change_newVal < 1) {
              swal({
                title: "提示",
                text: "\u7B2C".concat(change_index + 1, "\u884C\u8BF7\u8F93\u51651-255\u7684\u6570\u5B57"),
                button: "确认"
              });
              return {
                v: false
              };
            }
          }

          hot.setCellMeta(changes[i][0], columnVal, 'className', 'red-color');
        };

        for (var i = 0; i < changes.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
          if (_typeof(_ret) === "object") return _ret.v;
        }
      };
    } //改变数据后的方法 （共用）

  }, {
    key: "afterChange",
    value: function afterChange() {
      var that = this;
      return function (changes, source) {
        //修改数据事件
        // console.log('afterChange');
        var changeData = that.changeList.changeData;
        var changeMhd = that.changeList.changeMhd;
        var changeTms = that.changeList.changeTms;
        var addDefaultData = that.changeList.addDefaultDgm;
        var change_oldVal;
        var change_newVal;
        var flange_idList = {};

        if (changes) {
          for (var i = 0; i < changes.length; i++) {
            change_oldVal = changes[i][2];
            change_newVal = changes[i][3];

            if (change_oldVal == change_newVal) {
              continue;
            }

            var hot = that.getHot();
            var data = that.getData();
            var dgm = that.getDgmInfoByIndex(changes[i][0]);
            var columnVal = hot.propToCol(changes[i][1]);
            var physicalRow = hot.toPhysicalRow(changes[i][0]);
            var sendDgm = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_2__["changeDgm"])(that.type, dgm, changes[i][0]);
            var changeMachineId = sendDgm.machineId + "_" + physicalRow;
            var chType_chId = sendDgm.ch_type + "_" + sendDgm.ch_id;
            var changeDgmId = dgm.dgm_id;
            var typeList = [1, 11, 10, 20, 21, 13, 14, 15, 17, 18, 19, 22];
            that.type = Number(that.type);

            if (that.type == 14) {
              //法兰设置
              data.forEach(function (item) {
                if (!flange_idList[item.dgm.dgm_id]) {
                  flange_idList[item.dgm.dgm_id] = [];
                }

                if (item.dgm.pos_loc != 255) {
                  //公共除外
                  flange_idList[item.dgm.dgm_id].push(item.dgm.pos_loc);
                }
              });
              data.forEach(function (model) {
                var posLocSource = Object(_dgm_methods_js__WEBPACK_IMPORTED_MODULE_4__["posClassToPosLoc"])(model.dgm.pos_class2600, 5, model.dgm.t_root);
                var this_flange_posLoc = flange_idList[model.dgm.dgm_id];

                if (model.dgm.pos_class2600 != 0) {
                  for (var key in posLocSource) {
                    if (this_flange_posLoc.includes(key) && model.dgm.pos_loc != key) {
                      delete posLocSource[key];
                    }
                  }

                  model.dgm.posLocSources = Object.values(posLocSource);
                  model.dgm.posLocSources_key = Object.keys(posLocSource);
                }
              });
            }

            if (!typeList.includes(that.type)) {
              changeData[changeMachineId] = {};
              changeData["type"] = that.type;
              changeData[changeMachineId][changeDgmId] = {};
              changeData[changeMachineId][changeDgmId][chType_chId] = sendDgm;

              if (that.type == 2 || that.type == 3 || that.type == 4) {
                changeData[changeMachineId][changeDgmId]["ch_id"] = sendDgm.ch_id;
                changeData[changeMachineId][changeDgmId]["trans_ch_type"] = dgm.trans_ch_type;
              }
            } else if (that.type == 10 || that.type == 20 || that.type == 21) {
              //前置处理器/主机/从机设置
              changeTms[sendDgm.index] = sendDgm;
            } else if (that.type == 11) {
              //mhd主从设置
              changeMhd[sendDgm.index] = sendDgm;
            } else if (that.type == 17) {
              //E821主从设置
              changeMhd[physicalRow] = sendDgm;
            } else if (that.type == 13) {
              //采集设置
              changeData[changeDgmId] = sendDgm;
            } else if (that.type == 14 || that.type == 15) {
              //法兰设置,预处理器设置
              changeData[sendDgm.index] = sendDgm;
            } else if (that.type == 18) {
              if (sendDgm.operate) {
                addDefaultData[physicalRow] = sendDgm;
              } else {
                changeData[changeMachineId] = {};
                changeData["type"] = that.type;
                changeData[changeMachineId][changeDgmId] = {};
                changeData[changeMachineId][changeDgmId][chType_chId] = sendDgm;
              }
            } else {
              changeData[changeMachineId] = {};
              changeData["type"] = that.type;
              changeData[changeMachineId][changeDgmId] = sendDgm;
            }
          }

          ;
        }
      };
    }
    /* 根据索引行获取真实数据和物理行 (共用)*/

  }, {
    key: "getDgmInfoByIndex",
    value: function getDgmInfoByIndex(index) {
      var hot = this.getHot();
      var data = this.getData();
      var physicalRow = hot.toPhysicalRow(index);
      var dgm = data[physicalRow].dgm;
      return dgm;
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
    /* 验证单元格之后*/

  }, {
    key: "afterValidate",
    value: function afterValidate() {
      var that = this;
      return function (isValid, value, row, prop, source) {
        if (!isValid) {
          if (prop == 'dgm.start_time') {
            swal({
              title: "提示",
              text: "\u683C\u5F0F\u9700\u4E3A\uFF1A\u5E74-\u6708-\u65E5 \u65F6:\u5206:\u79D2",
              button: "确认"
            });
          }

          if (prop == 'dgm.period' || prop == 'dgm.oneway_time') {
            swal({
              title: "提示",
              text: "\u8BF7\u8F93\u5165\u6570\u5B57",
              button: "确认"
            });
          }

          if (prop == 'dgm.offline_send_start' || prop == 'dgm.offline_send_end') {
            swal({
              title: "提示",
              text: "\u683C\u5F0F\u9700\u4E3A\uFF1A\u65F6\uFF1A\u5206\uFF1A\u79D2",
              button: "确认"
            });
          }

          that.changeList.isValidObj = {
            isValidResult: isValid,
            //校验是否正确
            prop: prop,
            row: row
          };
        } else {
          if (row == that.changeList.isValidObj.row && prop == that.changeList.isValidObj.prop) {
            that.changeList.isValidObj.isValidResult = isValid;
          }
        }
      };
    }
    /**
     * 删除一条之后要做的一些还原数组的方法
     */

  }, {
    key: "remove_remake",
    value: function remove_remake() {
      var data; //

      var type = Number(this.type);
      var that = this;
      /* 删除changeData 和addData里面的数据 */

      for (var i = 0; i < deleteArray.length; i++) {
        switch (type) {
          case 11:
            //mhd从设备
            data = deleteArray[i];
            var changeMhd = this.changeList.changeMhd;
            var addMhd = this.changeList.addMhd;

            if (addMhd.length) {
              addMhd.forEach(function (tms, index) {
                if (tms.toString() === data.toString()) {
                  that.changeList.addMhd.splice(index, 1);
                }
              });
            }

            if (!$.isEmptyObject(changeMhd)) {
              var dataItems = {
                if_output: data.if_output,
                mhd_id: data.mhd_id,
                byName: data.byName,
                byId: data.byId,
                mainMhd: data.mainMhd
              };

              for (var key in changeMhd) {
                var changeItem = {
                  if_output: changeMhd[key].if_output,
                  mhd_id: changeMhd[key].mhd_id,
                  byName: changeMhd[key].byName,
                  byId: changeMhd[key].byId,
                  mainMhd: changeMhd[key].mainMhd
                };

                if (JSON.stringify(changeItem) === JSON.stringify(dataItems)) {
                  delete that.changeList.changeMhd[key];
                }
              }
            }

            break;

          case 10:
          case 20:
          case 21:
            //前置/主机/从机
            data = deleteArray[i];
            var changeTms = this.changeList.changeTms;
            var addTmsData = this.changeList.addTms;

            if (addTmsData.length) {
              addTmsData.forEach(function (tms, index) {
                if (tms.toString() === data.toString()) {
                  that.changeList.addTms.splice(index, 1);
                }
              });
            }

            if (!$.isEmptyObject(changeTms)) {
              var dataItem = {
                byId: data.byId,
                byName: data.byName,
                car_id: data.car_id,
                dev_id: data.dev_id,
                dgm_id: data.dgm_id,
                pre_id: data.pre_id,
                status: data.status
              };

              for (var _key in changeTms) {
                var _changeItem = {
                  byId: changeTms[_key].byId,
                  byName: changeTms[_key].byName,
                  car_id: changeTms[_key].car_id,
                  dev_id: changeTms[_key].dev_id,
                  dgm_id: changeTms[_key].dgm_id,
                  pre_id: changeTms[_key].pre_id,
                  status: changeTms[_key].status
                };

                if (JSON.stringify(_changeItem) === JSON.stringify(dataItem)) {
                  delete that.changeList.changeTms[_key];
                }
              }
            }

            break;
        }
      }
    }
  }]);

  return tableData;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/content/system/dgm/table/js/dgm_mixin.js":
/*!*****************************************************************!*\
  !*** ./src/components/content/system/dgm/table/js/dgm_mixin.js ***!
  \*****************************************************************/
/*! exports provided: dgmMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(swal, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dgmMixin", function() { return dgmMixin; });
/* harmony import */ var _dgm_hdtable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dgm_hdtable.js */ "./src/components/content/system/dgm/table/js/dgm_hdtable.js");
/* harmony import */ var _dgm_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dgm_info.js */ "./src/components/content/system/dgm/table/js/dgm_info.js");
/* harmony import */ var _components_content_system_dgm_table_js_dgm_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/content/system/dgm/table/js/dgm_methods */ "./src/components/content/system/dgm/table/js/dgm_methods.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");




var dgmMixin = {
  data: function data() {
    return {
      hot: {},
      //hottable对象
      data: [],
      //hottable的data数据
      changeList: {
        changeData: {},
        //修改的数据
        sortMacList: [],
        //过滤机组名列表
        sortDgmList: [],
        //过滤采集器列表
        changeMhd: {},
        //MHD主从设置修改的数据
        changeTms: {},
        //tms前置处理器修改的数据
        addMhd: [],
        //MHD主从设置新建
        addTms: [],
        //tms前置处理器新建
        deleteData: [],
        //mhd主从设置删除的数据
        addDefaultDgm: [],
        //新建虚拟采集器通道（type==18)
        isValidObj: {
          isValidResult: true,
          //校验是否正确
          prop: '',
          row: ''
        }
      },
      MHDList: [],
      //mhd采集器主从设置中主设备下拉选项
      E821List: [],
      //E821采集器主从设置中主设备下拉选项
      tmsList: {},
      //tms采集器前置处理器的下拉选项
      tmsHostList: {},
      //tms采集器前置处理器与分机设备的主机选择的下拉选项
      tmsPumpList: {},
      //tms采集器主机与分机车厢选择下拉选项
      tmsPreIdList: [],
      //tms采集器设备（主机/分机/前置）id集合
      dgmList: {},
      //法兰设置、预处理器设置采集器下拉选项
      defaultDgmInfo: {},
      //默认采集器信息
      flangeList: {},
      //预处理器设置法兰下拉选项
      scroll: 0,
      //滚动距离
      timer: null //定时器

    };
  },
  destroyed: function destroyed() {
    this.$store.commit('clearSroll', 'dgm');

    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  activated: function activated() {
    var wtHolder = document.getElementsByClassName('wtHolder')[0];

    if (wtHolder) {
      var state = this.$store.state.scroll['dgm'][this.type];
      wtHolder.scrollTop = state === undefined ? 0 : state.scrollTop;
      wtHolder.scrollLeft = state === undefined ? 0 : state.scrollLeft;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (to.name === 'fitInfo') {
      if (this.$parent.fittingInfo.length === 0) {
        swal({
          title: "提示",
          text: "\u8BF7\u5148\u9009\u62E9\u91C7\u96C6\u5668",
          button: "确认"
        });
        return;
      } else {
        this.$parent.fitShow = true;
        this.$parent.fitBtnShow = false;
        next();
      }
    }

    if (!$.isEmptyObject(this.changeList.changeData)) {
      swal({
        title: "警告",
        text: "".concat(Object(_components_content_system_dgm_table_js_dgm_methods__WEBPACK_IMPORTED_MODULE_2__["dgmBtn_name"])(this.type), "\u672A\u4FDD\u5B58"),
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
  mounted: function mounted() {
    this.getListData(this.type);
  },
  methods: {
    getListData: function getListData(type) {
      var _this = this;

      var loadTime = false;
      var that = this;
      this.timer = setTimeout(function () {
        //一秒钟之内有返回就不用显示加载动画
        if (!loadTime) {
          that.$parent.loading = true; //开启加载中
        }
      }, 500);

      if (type == 11) {
        this.$getApi.getMHDDgmInfo().then(function (res) {
          loadTime = true;
          _this.$parent.loading = false; //关闭加载中

          var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[0];
          var canBuild = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[1];
          _this.MHDList = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[2];

          if (!canBuild) {
            _this.$emit("child-msg", _this.type, false);
          } else {
            //组织dgm结构
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true); // this.filter_by_dgmName();


            _this.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 13 || type == 14 || type == 15) {
        var params = type - 12;
        this.$getApi.queryBoltList(params, this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this.$parent.loading = false; //关闭加载中

          var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getDgmInfo"])(res, type); //组织dgm结构

          if (type == 14) {
            _this.dgmList = {};
            var dgmInfo = res.dgm_list;

            if (dgmInfo.length) {
              dgmInfo.forEach(function (dgm) {
                _this.dgmList[dgm.dgm_id] = dgm.dgm_name;
              });
            } else {
              _this.$emit("child-msg", _this.type, false);
            }
          }

          if (type == 15) {
            _this.dgmList = {};
            _this.flangeList = {};
            var _dgmInfo = res.dgm_list;

            if (_dgmInfo.length) {
              _dgmInfo.forEach(function (dgm) {
                _this.dgmList[dgm.dgm_id] = dgm.dgm_name;
                _this.flangeList[dgm.dgm_id] = {};
                _this.flangeList[dgm.dgm_id][255] = '无';
                dgm.flangeList.forEach(function (flange) {
                  _this.flangeList[dgm.dgm_id][flange.byId] = flange.byName;
                });
              });
            } else {
              _this.$emit("child-msg", _this.type, false);
            }
          }

          if (!result.length && type == 13) {
            _this.$emit("child-msg", _this.type, false);
          } else {
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true); // this.filter_by_dgmName();


            _this.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 16) {
        this.$getApi.queryBoltChannel(this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this.$parent.loading = false; //关闭加载中

          var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getDgmInfo"])(res, type);

          if (!result.length) {
            _this.$emit("child-msg", _this.type, false);
          } else {
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true); // this.filter_by_dgmName();


            _this.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 17) {
        this.$getApi.getE821DgmInfo().then(function (res) {
          loadTime = true;
          _this.$parent.loading = false; //关闭加载中

          var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[0];
          var canBuild = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[1];
          _this.E821List = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getMHDInfo"])(res, type)[2];

          if (!canBuild) {
            _this.$emit("child-msg", _this.type, false);
          } else {
            //组织dgm结构
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true); // this.filter_by_dgmName();


            _this.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      } else if (type == 999) {
        var _params = [];
        var fitSession;

        if (sessionStorage.getItem('fittingInfo')) {
          fitSession = JSON.parse(sessionStorage.getItem('fittingInfo'));
        }

        var dgmList = fitSession;

        if (dgmList && dgmList.length > 0) {
          dgmList.forEach(function (dgm) {
            _params.push(dgm.dgm_id.toString());
          });
          _params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["distinct"])(_params, []); //去除重复的采集器

          this.$getApi.queryBoltFittingList(_params).then(function (res) {
            loadTime = true;
            _this.$parent.loading = false; //关闭加载中

            var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getDgmInfo"])(res, type);
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true); // this.filter_by_dgmName();


            _this.renderTable();
          })["catch"](function (err) {
            console.log('请求错误', err);
          });
        }
      } else {
        this.$getApi.queryModelByType(type, this.$store.state.tids).then(function (res) {
          loadTime = true;
          _this.$parent.loading = false; //关闭加载中

          var result = Object(_dgm_info_js__WEBPACK_IMPORTED_MODULE_1__["getDgmInfo"])(res, type);

          if (type == 18) {
            _this.defaultDgmInfo = res.dgm;
          } //组织dgm结构


          if (type == 10 || type == 20 || type == 21) {
            _this.tmsList = {}; //采集器列表

            _this.tmsHostList = {}; //主机列表

            _this.tmsPumpList = {}; //车厢列表

            _this.tmsPreIdList = res.allPre; //采集器主机/分机/前置id集合

            var tmsInfo = res.tmsDgmInfo;
            var hostLists = {}; //主机列表

            var pumpLists = {}; //车厢列表

            if (tmsInfo && tmsInfo.length) {
              tmsInfo.forEach(function (tms) {
                _this.tmsList[tms.dgm_id] = tms.dgm_name;
                hostLists[tms.dgm_id] = tms.main_host;
                pumpLists[tms.dgm_id] = tms.pump;
              });

              var _loop = function _loop(key) {
                if (hostLists[key] && hostLists[key].length) {
                  _this.tmsHostList[key] = {};
                  var hostList = hostLists[key];
                  hostList.forEach(function (host) {
                    _this.tmsHostList[key][host.pre_id] = host.byName;
                  });
                }
              };

              for (var key in hostLists) {
                _loop(key);
              }

              var _loop2 = function _loop2(_key) {
                if (pumpLists[_key] && pumpLists[_key].length) {
                  _this.tmsPumpList[_key] = {};
                  var pumpList = pumpLists[_key];
                  pumpList.forEach(function (pump) {
                    _this.tmsPumpList[_key][pump.ch_class] = pump.pump_name;
                  });
                }
              };

              for (var _key in pumpLists) {
                _loop2(_key);
              }
            } else {
              _this.$emit("child-msg", _this.type, false);
            }
          }

          if (!result.length) {
            if (type != 18 && type != 10 && type != 20 && type != 21) {
              _this.$emit("child-msg", _this.type, false);
            } else {
              //渲染表格
              _this.renderTable();
            }
          } else {
            _this.data = result; //渲染表格

            _this.$emit("child-msg", _this.type, true);

            _this.renderTable();
          }
        })["catch"](function (err) {
          console.log('请求错误', err);
        });
      }
    },

    /* 渲染表格 */
    renderTable: function renderTable() {
      var _this2 = this;

      if (this.$route.path.indexOf('dgm') < 0) {
        //非当前页面不渲染
        return;
      }

      var HotTable = document.getElementById('HotTable');
      var property = {
        type: this.type,
        getData: this.getData,
        getHot: this.getHot,
        changeList: this.changeList,
        MHDList: this.MHDList,
        E821List: this.E821List,
        tmsList: this.tmsList,
        tmsHostList: this.tmsHostList,
        tmsPumpList: this.tmsPumpList,
        dgmList: this.dgmList,
        defaultDgmInfo: this.defaultDgmInfo,
        flangeList: this.flangeList,
        fittingInfo: this.$parent.fittingInfo,
        select821Info: this.$parent.select821Info,
        selectDgmInfo: this.$parent.selectDgmInfo,
        btnData: this.$parent.btnData,
        router: this.$router
      }; //创建table

      this.hot = new _dgm_hdtable_js__WEBPACK_IMPORTED_MODULE_0__["default"](HotTable, property);
      Object(_components_content_system_dgm_table_js_dgm_methods__WEBPACK_IMPORTED_MODULE_2__["reRenderSelectOption"])(this.hot, this.data);
      /* 监听滚动事件 */

      var wtHolder = document.getElementsByClassName('wtHolder')[0];
      wtHolder.addEventListener('scroll', function (e) {
        var scrollTop = wtHolder.scrollTop;
        var scrollLeft = wtHolder.scrollLeft;
        var paload = {
          scrollType: 'dgm',
          type: _this2.type,
          scrollTop: scrollTop,
          scrollLeft: scrollLeft
        };

        _this2.$store.commit('setScroll', paload);

        _this2.hot.destroyEditor(); //处理当选择下拉框后拖动滚动条框框会跟着跑的问题

      });
      this.filterRows(this.hot); //保留过滤结果
    },

    /* 加载的时候根据dgm_name 来过滤数据 */
    filter_by_dgmName: function filter_by_dgmName() {
      var _this3 = this;

      var data = [];
      if (!sessionStorage.getItem('dgm_id')) return;
      /* 没有这一选项返回  */

      var dgm_ids = JSON.parse(sessionStorage.getItem('dgm_id'));
      if (dgm_ids.length == 0) return;
      /* 选项为空，返回 */

      dgm_ids.forEach(function (dgm_id) {
        _this3.data.forEach(function (dgm) {
          if (dgm.dgm.dgm_id == dgm_id) {
            data.push(dgm);
          }
        });
      });
      this.data = data;
    },
    //保留过滤后的结果
    filterRows: function filterRows(hot) {
      var _this4 = this;

      var filtersPlugin = hot.getPlugin('filters');

      if (sessionStorage.getItem('filter_dgm_name')) {
        var filterArr = JSON.parse(sessionStorage.getItem('filter_dgm_name'));
        filterArr.forEach(function (condition) {
          if (_this4.type == 1) {
            filtersPlugin.addCondition(1, condition.conditions[0].name, condition.conditions[0].args, condition.operations);
          } else {
            filtersPlugin.addCondition(0, condition.conditions[0].name, condition.conditions[0].args, condition.operations);
          }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=6-515258c9.js.map