(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var viewInterface_components_wave_WaveChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewInterface/components/wave/WaveChart */ "./src/viewInterface/components/wave/WaveChart.vue");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/_html2canvas@1.0.0-rc.7@html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.js");
/* harmony import */ var network_getApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! network/getApi */ "./src/network/getApi.js");
/* harmony import */ var _viewInterface_assets_common_headCommon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/viewInterface/assets/common/headCommon.js */ "./src/viewInterface/assets/common/headCommon.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'*/





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Wave",
  components: {
    WaveChart: viewInterface_components_wave_WaveChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_viewInterface_assets_common_headCommon_js__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      posOrderList: [8, 9, 16],
      //阶次测点类型:振动阶次，包络阶次，冲击阶次
      dataResult: [],
      //获取组织、机组原始信息
      folderList: [],
      //初始组织列表
      macList: {},
      //初始机组列表
      posList: {},
      //初始测点列表
      // chooseMacList:[],//选择的机组列表
      // choosePosList:[],//选择的测点列表
      // chooseTid:'',//所选的组织id
      chooseTroot: '',
      //所选组织的类型
      // chooseMacId:'',//所选的机组id
      // choosePosTypeId: "",//所选的测点id
      choosePosName: "",
      //所选的测点名
      // toggleText:'实时',//实时与历史按钮文字
      // chooseIsRealType:1,//1是历史数据，2是实时数据
      activeNum: 2,
      //当前界面的index
      noRealData: false,
      //有没有实时波形
      axisPointerColor: "#FA9A4D",
      //频谱图tooltip的标示线的颜色
      axisPointerColor_wave: "#FA9A4D",
      //波形图tooltip的标示线的颜色
      axisPointerColor_his: "#FA9A4D",
      //趋势图的tooltip的标示线的颜色
      click_offsetX: 0,
      //点击频谱图的点的x轴位置
      clickNum: 0,
      //点击的图标0表示没有点击，1表示波形图，2表示频谱图，3表示趋势图
      xIndex_history: 0,
      //点击的趋势图的点的横坐标下标
      xIndex: -1,
      //点击的频谱图的点的横坐标下标
      xValue: 0,
      //点击的频谱图的点的横坐标值
      xf_index: 0,
      //校准倍频时频谱图点击的点的横坐标下标
      xf_xValue: 0,
      //校准倍频时频谱图点击的点的横坐标值
      xIndexWave: 0,
      //点击的波形图的点的横坐标下标
      flag_wave_extend: 0,
      //时间差是否画周期性延展线
      flag_spec_extend: 0,
      //频谱图对称频率差是否画三条等间隔线
      arr_B: [],
      //倍频数组
      arr_C: [],
      //差频数组
      specType: 1,
      //频谱图类型：1频谱 2阶次
      spectrumStyle: 'line',
      //频谱图显示类型
      timeColor: "#fff",
      //时间差图标的颜色
      titleScale1: '最大化',
      //最大化按钮的提示文字
      iconScale1: 'path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7',
      //最大化的logo
      titleScale2: '最大化',
      //最大化按钮的提示文字
      iconScale2: 'path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7',
      //最大化的logo
      titleScale3: '最大化',
      //最大化按钮的提示文字
      iconScale3: 'path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7',
      //最大化的logo
      startTime: 0,
      endTime: 0,
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
      timeValue: [new Date(new Date() - 60 * 24 * 3600 * 1000), new Date()],
      //日历起止时间
      minSpeed: 0,
      maxSpeed: 2000,
      requestTime: 0,
      //时间节点，用于请求数据 0=实时
      timer: null,
      //计时器
      sourceWaveX: [],
      //原始波形
      sourceWaveY: [],
      waveX: [],
      waveY: [],
      //波形图数据
      historyData: [],
      //趋势图数据
      srcSpectrum: {},
      //不做汉宁窗的原始频谱，用于计算波形
      countSpectrum: {},
      //参与计算波形的频谱
      sourceSpectrumX: [],
      //原始频谱X
      sourceSpectrumY: [],
      scoreSpectrumY: [],
      //积分后的频谱Y
      spectrumX: [],
      //显示频谱X
      spectrumY: [],
      //频谱图数据
      machines: [],
      sortPositions: [],
      //测点重新排序
      selectMachine: {},
      //选中机组
      selectMachineId: '',
      //选中机组Id
      // gSelectMacId:"",
      selectPosition: {},
      //选中测点
      selectPositionId: '',
      //选中测点ID
      selectPositionName: '',
      //选中测点名称
      curSpeed: 0,
      //转速rpm
      last_xWave: {},
      //上一个选中点
      last_xWave_time: {},
      //时间差上一个选中点
      last_xSpec: {},
      //上一个选中点
      last_xSpec_time: {},
      //对称频率差上一个选中点
      oneFreq: 0,
      //1倍频
      fMaxFZ: 0,
      //最大幅值
      maxFreq: 0,
      //最大频率
      samples: 0,
      //总采样点数
      freqX: [],
      //频谱图X轴刻度值
      spectral: 0,
      //采样点数
      peakIndexArr: [],
      //自动寻峰10个坐标索引
      flag_real: 1,
      //实时状态
      flag_subTime: 0,
      //时间差
      flag_winFunc: 0,
      //汉宁窗
      flag_subFreq: 0,
      //频差
      flag_showGate: 1,
      //显示闸门，默认开启
      gateText: '开启闸门',
      //开启闸门的按钮文字
      flag_oneF: 0,
      //1倍频标记
      flag_nx: 0,
      //标注倍频
      flag_f_nx: {
        //阶比
        val: 0,
        isChange: false
      },
      // flag_f_nx: 0,//阶比
      flag_addLabel: 0,
      //添加标注
      // str_realState:"获取中",
      // str_realBtn:"停止",//实时按钮label
      nxArrayWave: [],
      //带标签竖线
      hide_low: 0,
      //低频过滤
      sc_power_a: 0,
      //有效频率初始下限
      power_a: -1,
      //有效频率下限
      power_b: 0,
      //有效频率上限
      nxArraySpec: [],
      //带标签竖线
      autoPeakNum: -1,
      //自动寻峰计数
      labelList: [],
      //标注列表
      unitSelect: "",
      //当前操作的单位
      unitSrc: "",
      //
      unitType: 1,
      //当前操作的图谱单位
      unitWave: "",
      //波形单位
      srcUnitWave: "",
      //设置的波形单位
      unitRms: "",
      //rms的单位
      unitXWave: "s",
      unitSpec: "",
      //频谱图单位
      srcUnitSpec: "",
      //设置的频谱单位
      unitXSpec: "Hz",
      unitTrend: "",
      //趋势图单位
      srcUnitTrend: '',
      // 设置的趋势图单位
      zoomStartXWave: 0,
      //波形图X轴缩放起始位置（百分比）
      zoomEndXWave: 100,
      //波形图X轴缩放结束位置（百分比）
      zoomStartXSpec: 0,
      //频谱图X轴缩放起始位置（百分比）
      zoomEndXSpec: 100,
      //频谱图X轴缩放结束位置（百分比）
      gearList: [],
      //啮合频率
      bearList: [],
      //轴承通过频率
      speedList: [],
      //转频
      failureList: [],
      //故障频率明细列表
      failureList_detail: [],
      //故障频率明细列表
      rotateSpeed: 0,
      //rpm
      validValue: 0,
      //rms
      changeTime: "",
      //初始化时间
      oriChangeTime: "",
      //初始原始时间
      showType1: 1,
      //是否显示全部
      showType2: 2,
      //是否显示全部
      showType3: 3,
      //是否显示全部
      flag_show: 0,
      //是否点击显示全部按钮
      freq_speed_failure: 0,
      //发电机输入轴转速
      interValNum_spectrumX: 1,
      //频谱图x轴刻度间隔值
      interValNum_waveX: 1,
      //波形图x轴刻度间隔值
      sourceHistoryY: [],
      // 历史数据原始y轴坐标值
      historyX: [],
      //历史数据x轴坐标值
      historyY: [],
      // 历史数据y轴坐标值
      freqXtrum: [],
      //x轴阶比功能时x轴的值
      selIndex: 0,
      //选中的测点下标
      hasPos: false,
      //是否有默认测点传入
      failureUnit: "Hz",
      //故障频率和故障明细的单位
      failureUnit_detail: "Hz",
      //故障频率明细的单位
      hd_speed: false,
      //转速测点的高密度波形，低密度波形
      click_num: 0,
      //记录点击次数
      name_type: "",
      //故障频率传动链名字尾缀，阶次测点显示“阶次”，其他测点显示“频率”
      name_type_speed: "",
      //故障频率传动链转速名字尾缀，阶次测点显示“动阶次”，其他测点显示“频”
      alarm_type: 1,
      //当前fft算法计算的频谱为峰值。0=有效值，1=峰值，2=峰峰值
      flag_addPeak: true,
      //校准倍频按钮，默认启用
      click_peak: "click",
      //校准倍频时tooltip为none，其他时候为“click”
      flag_toolTip: false,
      //频谱图toolTip的内容区域是否显示
      flag_his_toolTip: false,
      //趋势图的toolTip的内容区域是否显示
      flag_wave_toolTip: false,
      //波形图的toolTip的内容区域是否显示
      flag_keyBoard: false,
      //是否开启鼠标事件
      isLoading: true,
      // 是否显示趋势图加载提示
      search_data: {
        mac_id: -1,
        pos_name: "",
        value_type: -1,
        end_time: new Date(),
        start_time: new Date(new Date() - 60 * 24 * 3600 * 1000),
        max_speed: 2000,
        min_speed: 50,
        mac_name_y: "",
        pos_name_y: "",
        value_type_y: -1 // mac_type:1

      },
      isSetPower: false,
      // 是否设置有效频率
      choose_factory: {
        db_type: "root_test_127.0.0.1_3306_1",
        factory_id: 1535681473331,
        factory_name: "",
        country: "",
        province: "",
        normalNum: 0,
        warningNum: 0,
        alarmNum: 0,
        offNum: 0,
        allNum: 0,
        onNum: 0,
        type: 0,
        //现场类型 0风电；3水电；1水泥；4旋转机械设备
        factory_type: 1
      },
      choose_machine: {
        db_type: "",
        factory_id: -1,
        factory_name: "",
        factory_type: 1,
        machine_name: "",
        machine_type: 0,
        machine_id: "",
        pump_id: -1,
        line_idx: 1,
        station_id: -1,
        rate_speed: 1
      },
      choose_position: {
        db_type: "",
        //数据库类型
        factory_id: -1,
        //现场id
        factory_name: "",
        //现场名称
        factory_type: 1,
        //根据数据库类型返回现场类型 1：风电 4：水电 8：水泥厂
        machine_name: "",
        //机组名称
        machine_type: 0,
        //机组类型
        machine_id: -1,
        //机组id
        pump_id: -1,
        //机泵id
        station_id: -1,
        //水电机组绑定水电站id
        rate_speed: 1,
        //机泵额定转速
        position_name: "",
        //测点名称
        activity: -1,
        line_idx: 1,
        position_id: -1,
        //测点id
        position_type: -1,
        //测点类型
        key_id: -1,
        ///key id
        unit: "",
        unit_sensor: "",
        //传感器器类型单位
        flange_id: '',
        //法兰id
        flange_name: '',
        //法兰名称
        tower_channel: 1,
        //区分塔顶倾角和塔底沉降，2表示沉降
        angle_time: "2018-11-16 09:16:17",
        //倾角时间
        angle_val: 0,
        //倾角幅值
        angle_place: 0,
        //倾角相位
        rock1_id: 0,
        //倾角x轴id
        rock2_id: 0,
        //倾角y轴id
        offset_angle: 0,
        //偏置角度
        condition_rock: "其他工况：",
        //工况
        isWheel: false
      },
      toolTip: {
        // 点击提示信息
        backgroundColor: '#FA9A4D',
        fontStyle: {
          size: '12px'
        }
      },
      symbol: {
        color: ''
      },
      waveOptions: {
        title: {
          align: 'left',
          // 波形图标题离容器左侧距离
          fontSize: '20px',
          // 波形图标题字体大小
          color: '#999' //  波形图标题颜色

        },
        series: {
          fontSize: '12px' // 波形图坐标刻度字体大小

        },
        grid: {
          left: 80,
          // 波形图离容器左侧距离
          top: 80,
          // 波形图离容器上侧距离
          right: 30,
          // 波形图离容器右侧距离
          bottom: 60 // 波形图离容器下侧距离

        }
      },
      spectrumOptions: {
        title: {
          align: 'left',
          // 频谱图标题离容器左侧距离
          fontSize: '20px',
          //  频谱图标题字体大小
          color: '#999' //  频谱图标题颜色

        },
        series: {
          fontSize: '12px' // 频谱图坐标刻度字体大小

        },
        grid: {
          left: 80,
          // 频谱图离容器左侧距离
          top: 80,
          // 频谱图离容器上侧距离
          right: 30,
          // 频谱图离容器右侧距离
          bottom: 60 // 频谱图离容器下侧距离

        }
      },
      historyOptions: {
        title: {
          align: 'left',
          // 趋势图标题离容器左侧距离
          fontSize: '20px',
          //  趋势图标题字体大小
          color: '#999' //  趋势图标题颜色

        },
        series: {
          fontSize: '12px' // 趋势图坐标刻度字体大小

        },
        grid: {
          left: 80,
          // 趋势图离容器左侧距离
          top: 60,
          // 趋势图离容器上侧距离
          right: 30,
          // 趋势图离容器右侧距离
          bottom: 60 // 趋势图离容器下侧距离

        }
      },
      spectrumColor: {
        font: '#999',
        // 字体颜色
        background: '#131F4D',
        // 保存图片背景颜色
        line: '#3D77FF',
        // 图谱颜色
        yLine: '#fff',
        // 趋势图轴线颜色
        bLineColor: 'yellow',
        color: '#999' //轴线颜色

      },
      fileName: '',
      // 导出文件名称
      maxRestoreHeight: {
        maxHeight: '500px',
        // 最大化坐标高度
        waveHeight: '',
        // 波形图和频谱图还原后高度
        historyHeight: '220px' // 趋势图还原后高度

      },
      showSymbol: false,
      // 趋势图标识显示/隐藏
      spectrumXNum: 1,
      waveXNum: 1,
      changePos: false,
      // changeTrend: true,
      cutSpectrum: {},
      spectrumTools: [],
      selectPos: '',
      // 上一次选择的测点 (position_type + position_id + machine_id)
      allPos: [],
      // 所有测点
      sourceAllPower: [],
      // 所有测点原始频率
      allPower: [],
      // 所有测点频率
      posIndex: 0,
      // 当前测点下标
      boxShow: false,
      isRealAll: false,
      // 所有测点频率提示
      loadWave: true,
      // 波形频谱图加载提示
      changeTrend: false,
      // 是否只改变趋势图
      curPosFlag: null,
      // 当前选中测点
      curPosName: '',
      // 当前选中测点名字
      ifImportBaseWave: 2,
      //是否是导入的基准波形,1导入基准，2，非导入的基准
      baseInfo: {},
      //导入基准的解析信息
      isSampAlert: false,
      //采样设置弹窗
      chooseSampId: '',
      //选择的手动长采样的测点的通道id
      chooseSampFreq: '',
      //选择的手动长采样的分析频率
      chooseSampTime: '',
      //选择的手动长采样的采集时间
      captureFreqSources: utils_utils__WEBPACK_IMPORTED_MODULE_2__["captureFreqSourcesObj"] //手动长采样分析频率下拉选项

    };
  },
  created: function created() {
    this.$emit('ievent', this.activeNum);
  },
  mounted: function mounted() {
    this.getHeadData(2);
    this.spectrumTools = this.$refs.spectrumTools.children;
  },
  computed: {
    sortFolderList: function sortFolderList() {
      return this.folderList.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('t_name'));
    },
    sortMacList: function sortMacList() {
      return this.chooseMacList.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('mac_me'));
    },
    captureTimeSources: function captureTimeSources() {
      //手动长采样采集时间下拉选项
      return Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["freqToCaptureTime"])(this.chooseSampFreq);
    },
    //手动长采样测点列表
    sampPosList: function sampPosList() {
      var list = this.choosePosList;
      var arr = [];

      if (list && list.length) {
        list.forEach(function (pos) {
          if (pos.pos_type == 200 && Number(pos.capture_mode) === 1) {
            arr.push(pos);
          }
        });
      }

      return arr;
    },
    waveOption: function waveOption() {
      var that = this;

      if (!this.selectMachine.mac_me) {
        this.selectMachine.mac_me = '';
      }

      if (!this.selectPosition.pos_name) {
        this.selectPosition.pos_name = '';
      }

      this.fileName = this.selectMachine.mac_me + '_' + this.selectPosition.pos_name;
      return {
        // 图谱标题
        title: {
          show: true,
          // 是否显示标题
          name: '波形图',
          // 标题名字
          // 标题字体样式
          fontStyle: {
            weight: 'bold',
            // 粗细，默认 'bold'
            size: this.waveOptions.title.fontSize,
            // 大小，默认 '20px'
            family: 'sans-serif',
            // 字体，默认 'Arial'
            color: this.waveOptions.title.color,
            // 颜色，默认 '#000'
            align: this.waveOptions.title.align // 对齐方式，默认 'left'

          }
        },
        // 图谱位置
        grid: that.waveOptions.grid,
        // x 轴信息
        x: {
          name: this.unitXWave,
          // 名称(单位)
          type: 'category',
          // 坐标轴类型
          data: this.waveX,
          // 数据
          lineStyle: {
            // 轴线样式
            color: that.spectrumColor.font // 颜色，默认 '#000'

          },
          nameStyle: {
            // 名称(单位)字体样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.font,
            // 颜色，默认 '#000'
            size: this.waveOptions.series.fontSize
          }
        },
        // y 轴信息
        y: {
          name: this.unitWave,
          // 名称(单位)
          data: this.waveY,
          // 数据
          lineStyle: {
            // 轴线样式
            color: that.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.color,
            // 颜色，默认 '#000'
            size: this.waveOptions.series.fontSize
          },
          nameStyle: {
            // 名称(单位)字体样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          }
        },
        // 图谱信息
        series: {
          type: 'line',
          // 类型，默认 'line'
          lineStyle: {
            // 样式
            color: that.spectrumColor.line,
            // 颜色，默认 '#0032ff
            width: 1 // 粗细，默认 1

          },
          markLine: {
            // 标线
            data: [],
            lineStyle: {
              // 样式
              color: '#ebd662',
              // 颜色，默认 '#ebd662'
              width: 1 // 粗细，默认 1

            },
            fontStyle: {
              // 标注字体样式
              color: '#fff',
              // 颜色，默认 '#ebd662'
              size: '12px',
              // 大小，默认 '12px'
              family: 'Microsoft YaHei',
              // 字体，默认 'Microsoft YaHei'
              weight: 'normal' // 粗细，默认 'normal'

            }
          },
          // 闸门信息
          gateMsg: {
            isShow: this.flag_showGate,
            fStart: this.selectPosition.fStart,
            fWidth: this.selectPosition.fWidth,
            fThreshold: this.selectPosition.fThreshold,
            lineStyle: {
              color: 'red',
              // 颜色，默认 '#ebd662'
              width: 2 // 粗细，默认 1

            }
          },
          symbol: this.symbol
        },
        // 标注信息
        toolTip: {
          symbol: this.symbol,
          lineStyle: {
            // 标线样式
            color: this.axisPointerColor_wave // 颜色，默认 '#FA9A4D'

          },
          fontStyle: {
            size: this.toolTip.fontStyle.size,
            color: "#fff"
          },
          background: {
            // 提示框背景
            color: this.toolTip.backgroundColor // 颜色，默认 'rgba(50, 50, 50, 0.3)'

          },
          formatter: function formatter() {
            that.boxShow = false;
          }
        },
        tools: {
          // 开窗放大
          enlarge: {
            show: true,
            dom: document.getElementsByClassName('dataZoom')[0]
          },
          // 最大化 / 还原
          maxOrMin: {
            show: true,
            dom: document.getElementsByClassName('max')[0]
          },
          // 重置
          restore: {
            show: true,
            dom: document.getElementsByClassName('restore')[0]
          },
          // 时间差
          timeDifferent: {
            show: true,
            dom: document.getElementsByClassName('subTime')[0]
          },
          // 导出图片
          exportImage: {
            show: true,
            dom: document.getElementsByClassName('exportImage')[0],
            imageName: this.fileName + '-波形图',
            formatter: function formatter(bool) {
              if (bool) {
                that.keepPage();
              }
            }
          },
          // 导出数据
          exportData: {
            fileName: this.fileName,
            show: true,
            dom: document.getElementsByClassName('exportData')[0]
          },
          // 导出音频
          exportAudio: {
            fileName: this.fileName + '_音频',
            show: true,
            dom: document.getElementsByClassName('exportMusic')[0],
            maxFreq: this.maxFreq
          }
        },
        backgroundColor: that.spectrumColor.background,
        // 图谱背景颜色，默认 '#fff'
        changePos: this.changePos // 是否切换测点 / 机组，默认 false

      };
    },
    specturmOption: function specturmOption() {
      var that = this;

      if (!this.selectMachine.mac_me) {
        this.selectMachine.mac_me = '';
      }

      if (!this.selectPosition.pos_name) {
        this.selectPosition.pos_name = '';
      }

      this.fileName = this.selectMachine.mac_me + '_' + this.selectPosition.pos_name;
      return {
        // 图谱标题
        title: {
          show: true,
          // 是否显示标题
          name: '频谱图',
          // 标题名字
          // 标题字体样式
          fontStyle: {
            weight: 'bold',
            // 粗细，默认 'bold'
            size: this.spectrumOptions.title.fontSize,
            // 大小，默认 '20px'
            family: 'sans-serif',
            // 字体，默认 'Arial'
            color: this.spectrumOptions.title.color,
            // 颜色，默认 '#000'
            align: this.spectrumOptions.title.align // 对齐方式，默认 'left'

          }
        },
        // 图谱位置
        grid: that.spectrumOptions.grid,
        // x 轴信息
        x: {
          name: this.unitXSpec,
          // 名称(单位)
          type: 'category',
          // 坐标轴类型
          freqData: this.freqXtrum,
          // 阶比数据
          data: this.spectrumX,
          // 数据
          lineStyle: {
            // 轴线样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          },
          nameStyle: {
            // 名称(单位)字体样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.font,
            // 颜色，默认 '#000'
            size: this.spectrumOptions.series.fontSize
          }
        },
        // y 轴信息
        y: {
          name: this.unitSpec,
          // 名称(单位)
          data: this.spectrumY,
          // 数据
          lineStyle: {
            // 轴线样式
            color: that.spectrumColor.font // 颜色，默认 '#000'

          },
          nameStyle: {
            // 名称(单位)字体样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.font,
            // 颜色，默认 '#000'
            size: this.spectrumOptions.series.fontSize
          }
        },
        // 图谱信息
        series: {
          type: this.spectrumStyle,
          // 类型，默认 'line'
          lineStyle: {
            // 样式
            color: that.spectrumColor.line,
            // 颜色，默认 '#0032ff
            width: 1 // 粗细，默认 1

          },
          markLine: {
            // 标线
            data: this.nxArraySpec,
            lineStyle: {
              // 样式
              color: '#ebd662',
              // 颜色，默认 '#ebd662'
              width: 1 // 粗细，默认 1

            },
            fontStyle: {
              // 标注字体样式
              color: '#fff',
              // 颜色，默认 '#ebd662'
              size: '12px',
              // 大小，默认 '12px'
              family: 'Microsoft YaHei',
              // 字体，默认 'Microsoft YaHei'
              weight: 'normal' // 粗细，默认 'normal'

            }
          },
          dataMsg: {
            oneFreq: this.oneFreq,
            rotateSpeed: this.rotateSpeed,
            specType: this.specType,
            setPower: this.isSetPower,
            spectral: this.spectral
          },
          symbol: this.symbol
        },
        // 标注信息
        toolTip: {
          lineStyle: {
            // 标线样式
            color: this.axisPointerColor // 颜色，默认 '#FA9A4D'

          },
          symbol: this.symbol,
          background: {
            // 提示框背景
            color: this.toolTip.backgroundColor // 颜色，默认 'rgba(50, 50, 50, 0.3)'

          },
          fontStyle: {
            size: this.toolTip.fontStyle.size
          },
          formatter: function formatter() {
            that.boxShow = false;
          }
        },
        tools: {
          // 开窗放大
          enlarge: {
            show: true,
            dom: document.getElementsByClassName('dataZoom')[1]
          },
          // 最大化 / 还原
          maxOrMin: {
            show: true,
            dom: document.getElementsByClassName('max')[1]
          },
          // 重置
          restore: {
            show: true,
            dom: document.getElementsByClassName('restore')[1],
            formatter: function formatter(isRestore) {
              if (isRestore) {
                that.hide_low = 0;
                that.power_a = 0;
                that.power_b = 0;
                that.flag_f_nx.val = 1;
                that.specType == 1 && that.rotateSpeed !== 0 ? that.setFreq_or_nx(2) : that.makeFftData(2);
                document.getElementsByClassName('tool_list')[0].children[2].className = '';
                document.getElementsByClassName('tool_list')[0].children[0].className = '';
                document.getElementsByClassName('tool_list')[0].children[6].className = '';
              }
            }
          },
          // 差频
          subFreq: {
            show: true,
            dom: this.spectrumTools[0]
          },
          // 1倍频
          oneFreq: {
            show: true,
            dom: this.spectrumTools[3],
            formatter: function formatter(bool) {
              bool && (that.spectrumTools[6].className = '');
            }
          },
          // 标注倍频
          labelFreq: {
            show: true,
            dom: this.spectrumTools[6]
          },
          // 寻峰
          peakSearch: {
            show: true,
            dom: this.spectrumTools[9]
          },
          // 添加标注
          addLabel: {
            show: true,
            dom: this.spectrumTools[7]
          },
          // 取消标注
          cancelLabel: {
            show: true,
            dom: this.spectrumTools[8]
          },
          // 校准倍频
          setPeak: {
            show: true,
            dom: this.spectrumTools[10]
          },
          // 导出图片
          exportImage: {
            show: true,
            dom: document.getElementsByClassName('exportImage')[1],
            imageName: this.fileName + '-频谱图',
            formatter: function formatter(bool) {
              if (bool) {
                that.keepPage();
              }
            }
          },
          // 导出数据
          exportData: {
            fileName: this.fileName,
            show: true,
            dom: document.getElementsByClassName('exportData')[1]
          }
        },
        backgroundColor: that.spectrumColor.background,
        // 图谱背景颜色，默认 '#fff'
        changePos: this.changePos // 是否切换测点 / 机组，默认 false
        // isloading: function (res) {if (!res) that.$refs.loadWave.style.display = 'none'}

      };
    },
    historyOption: function historyOption() {
      var that = this;

      if (!this.selectMachine.mac_me) {
        this.selectMachine.mac_me = '';
      }

      if (!this.selectPosition.pos_name) {
        this.selectPosition.pos_name = '';
      }

      this.fileName = this.selectMachine.mac_me + '_' + this.selectPosition.pos_name;
      return {
        // 图谱标题
        title: {
          show: true,
          // 是否显示标题
          name: '趋势图',
          // 标题名字
          // 标题字体样式
          fontStyle: {
            weight: 'bold',
            // 粗细，默认 'bold'
            size: that.historyOptions.title.fontSize,
            // 大小，默认 '20px'
            family: 'sans-serif',
            // 字体，默认 'Arial'
            color: this.historyOptions.title.color,
            // 颜色，默认 '#000'
            align: that.historyOptions.title.align // 对齐方式，默认 'left'

          }
        },
        // 图谱位置
        grid: that.historyOptions.grid,
        // x 轴信息
        x: {
          type: 'time',
          // 坐标轴类型
          data: this.historyX,
          // 数据
          lineStyle: {
            // 轴线样式
            color: that.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.color,
            // 颜色，默认 '#000'
            size: this.historyOptions.series.fontSize
          }
        },
        // y 轴信息
        y: {
          name: this.unitTrend,
          // 名称(单位)
          data: this.historyY,
          // 数据
          lineStyle: {
            // 轴线样式
            color: that.spectrumColor.font // 颜色，默认 '#000'

          },
          wtype: 'wave_trend',
          nameStyle: {
            // 名称(单位)字体样式
            color: this.spectrumColor.font // 颜色，默认 '#000'

          },
          fontStyle: {
            // 刻度字体样式
            color: this.spectrumColor.color,
            // 颜色，默认 '#000'
            size: this.historyOptions.series.fontSize
          }
        },
        // 图谱信息
        series: {
          type: "line",
          // 类型，默认 'line'
          lineStyle: {
            // 样式
            color: that.spectrumColor.line,
            // 颜色，默认 '#0032ff
            width: 1 // 粗细，默认 1

          },
          markLine: {
            // 标线
            data: [],
            lineStyle: {
              // 样式
              color: '#ebd662',
              // 颜色，默认 '#ebd662'
              width: 1 // 粗细，默认 1

            },
            fontStyle: {
              // 标注字体样式
              color: '#FA9A4D',
              // 颜色，默认 '#ebd662'
              size: '12px',
              // 大小，默认 '12px'
              family: 'Microsoft YaHei',
              // 字体，默认 'Microsoft YaHei'
              weight: 'normal' // 粗细，默认 'normal'

            }
          },
          symbol: {
            show: true
          }
        },
        // 标注信息
        toolTip: {
          lineStyle: {
            // 标线样式
            color: this.axisPointerColor // 颜色，默认 '#FA9A4D'

          },
          background: {
            // 提示框背景
            color: this.toolTip.backgroundColor // 颜色，默认 'rgba(50, 50, 50, 0.3)'

          },
          fontStyle: {
            size: this.toolTip.fontStyle.size
          },
          formatter: function formatter(params) {
            that.boxShow = false;
            that.changePos = false;
            that.ifImportBaseWave = 2;

            if (that.flag_real == 1) {
              //点击趋势图时，强制停止实时按钮
              that.setRealBtn();
            }

            that.searchWave(params.val);
          },
          symbol: this.symbol
        },
        tools: {
          // 开窗放大
          enlarge: {
            show: true,
            dom: document.getElementsByClassName('dataZoom')[2]
          },
          // 最大化 / 还原
          maxOrMin: {
            show: true,
            dom: document.getElementsByClassName('max')[2]
          },
          // 重置
          restore: {
            show: true,
            dom: document.getElementsByClassName('restore')[2]
          },
          // 导出图片
          exportImage: {
            show: true,
            dom: document.getElementsByClassName('exportImage')[2],
            imageName: this.fileName + '-趋势图',
            formatter: function formatter(bool) {
              if (bool) {
                that.keepPage();
              }
            }
          }
        },
        backgroundColor: that.spectrumColor.background,
        // 图谱背景颜色，默认 '#fff'
        changePos: this.changePos // 是否切换测点 / 机组，默认 false

      };
    },
    tools: function tools() {
      return [{
        text: "对称频率差",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/dcplc.png */ "./src/viewInterface/assets/img/tool_icons/dcplc.png"),
        toolFunc: this.setDouble_sub_freq
      }, {
        text: "汉宁窗",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/hnc.png */ "./src/viewInterface/assets/img/tool_icons/hnc.png"),
        toolFunc: this.setHanning
      }, {
        text: "切换x轴阶比",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/qhxzqb.png */ "./src/viewInterface/assets/img/tool_icons/qhxzqb.png"),
        toolFunc: this.setFreq_or_nx
      }, {
        text: "定位到1倍频",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/dwdybp.png */ "./src/viewInterface/assets/img/tool_icons/dwdybp.png"),
        toolFunc: this.setTo_1_X
      }, {
        text: "低频过滤",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/dpgl.png */ "./src/viewInterface/assets/img/tool_icons/dpgl.png"),
        toolFunc: this.showHideLow
      }, {
        text: "有效频率设置",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/yxplzsz.png */ "./src/viewInterface/assets/img/tool_icons/yxplzsz.png"),
        toolFunc: this.showPowerRms
      }, {
        text: "标注倍频",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/bzbp.png */ "./src/viewInterface/assets/img/tool_icons/bzbp.png"),
        toolFunc: this.setLabel_nx
      }, {
        text: "添加标注",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/tjbz.png */ "./src/viewInterface/assets/img/tool_icons/tjbz.png"),
        toolFunc: this.setAdd_label
      }, {
        text: "取消所有标注",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/qxbz.png */ "./src/viewInterface/assets/img/tool_icons/qxbz.png"),
        toolFunc: this.setClear_label
      }, {
        text: "循环寻峰",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/xhxf.png */ "./src/viewInterface/assets/img/tool_icons/xhxf.png"),
        toolFunc: this.setAuto_tip
      }, {
        text: "校准倍频",
        icon: __webpack_require__(/*! viewInterface/assets/img/tool_icons/fztk.png */ "./src/viewInterface/assets/img/tool_icons/fztk.png"),
        toolFunc: this.setPeak_nx
      }];
    }
  },
  destroyed: function destroyed() {
    var that = this;
    clearInterval(that.timer); //离开界面时清掉实时数据的定时器

    that.timer = null;

    if (this.chooseTid && this.chooseTid != '') {
      var chooseDgmType;

      if (!$.isEmptyObject(this.selectPosition)) {
        chooseDgmType = this.selectPosition.dgm_type;
      } else {
        chooseDgmType = null;
      }

      this.paramsConfig = {
        chooseTree: this.chooseTree,
        chooseDgmList: this.chooseDgmList,
        choosePosList: this.choosePosList,
        choosePos: this.choosePos,
        chooseMacList: this.reSetMacList,
        chooseTid: this.chooseTid,
        chooseDgmType: chooseDgmType,
        chooseTroot: this.chooseTroot,
        chooseMacId: this.chooseMacId,
        choosePosTypeId: this.choosePosTypeId,
        //所选的测点id
        choosePosName: this.choosePosName,
        //所选的测点名
        toggleText: this.toggleText //实时与历史按钮文字

      };

      if (this.flag_real == 1) {
        this.paramsConfig.chooseIsRealType = 2;
        this.paramsConfig.isReal = true; //1是历史数据，2是实时数据
      } else {
        this.paramsConfig.chooseIsRealType = 1;
        this.paramsConfig.isReal = false; //1是历史数据，2是实时数据
      }
    } else {
      this.paramsConfig = {};
    }

    sessionStorage.setItem('paramsConfig', JSON.stringify(this.paramsConfig));
  },
  watch: {
    choosePosTypeId: function choosePosTypeId(val, oldVal) {
      if (val) {
        /**如果风场类型不是水电或者石化并且测点为转速测点的情况下有高低密度波形选择**/
        if (!$.isEmptyObject(this.selectPosition) && this.selectPosition.pos_type == 1) {
          $('#hd_choose').css('display', 'inline-block');
          /**如果测点为转速测点的情况下低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/

          if (this.hd_speed) {
            this.selectPosition.unitName[0] = "mV";
          } else {
            this.selectPosition.unitName[0] = "rpm";
          }
        } else {
          $('#hd_choose').css('display', 'none');
        }

        this.getOrigUnit();
        this.searchTrend();
      } else {
        this.historyData = [];
        this.historyX = [];
        this.historyY = [];
        this.waveX = [];
        this.waveY = [];
        this.spectrumX = [];
        this.spectrumY = []; // swal({
        //     title: "提示",
        //     text: '无测点',
        //      button: "确认",
        // });
      }
    }
  },
  methods: {
    //时间选择之后
    change: function change() {
      this.search_data.start_time = this.timeValue[0];
      this.search_data.end_time = this.timeValue[1];
      this.searchTrend();
    },
    //获取组织、机组信息
    // getHeadData() {
    //     let that = this;
    //     let params=null;
    //     that.selectPosition = {};
    //     that.selectMachine = {};
    //     params={
    //         type:2,
    //         t_ids:JSON.parse(sessionStorage.getItem('getTidList')),
    //     };
    //     this.$axios.post('getPositionDataConfig',params)
    //         .then(res => {
    //             if(res.msg===0){
    //                 that.dataResult = res.list;
    //                 let result = res.list;
    //                 if(result.length>0){
    //                     that.folderList.length=0;
    //                     for(let i=0;i<result.length; i++){
    //                         that.folderList.push({'t_id':result[i].t_id,'t_root':result[i].t_root,'t_name':result[i].t_name});
    //                         that.macList[result[i].t_id]=[];
    //                         if('mac_list' in result[i] && result[i].mac_list.length>0){
    //                             for(let j=0;j<result[i].mac_list.length;j++){
    //                                 that.macList[result[i].t_id].push({'mac_id':result[i].mac_list[j].mac_id,'mac_me':result[i].mac_list[j].mac_me});
    //                                 that.posList[result[i].mac_list[j].mac_id]=[];
    //                                 if('positions_list' in result[i].mac_list[j] && result[i].mac_list[j].positions_list.length>0){
    //                                     for(let m=0;m<result[i].mac_list[j].positions_list.length;m++){
    //                                         that.posList[result[i].mac_list[j].mac_id].push(result[i].mac_list[j].positions_list[m]);
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     that.chooseTid = that.sortFolderList[0].t_id;
    //                     that.chooseTroot = that.sortFolderList[0].t_root;
    //                     if(!$.isEmptyObject(that.macList)){
    //                         that.chooseMacList = that.macList[that.sortFolderList[0].t_id].concat();
    //                         if(that.chooseMacList.length>0){
    //                             that.chooseMacId = that.sortMacList[0].mac_id;
    //                             that.selectMachineId = that.sortMacList[0].mac_id;
    //                             that.selectMachine = that.sortMacList[0];
    //                             if(!$.isEmptyObject(that.posList)){
    //                                 that.choosePosList = that.posList[that.sortMacList[0].mac_id].concat();
    //                                 that.choosePosList = that.sortPositionsName(that.choosePosList);
    //                                 if(that.choosePosList.length>0){
    //                                     that.choosePosTypeId = that.choosePosList[this.selIndex].pos_type + '_' + that.choosePosList[this.selIndex].pos_id;
    //                                     that.choosePosName = that.choosePosList[this.selIndex].pos_name;
    //                                     that.selectPosition=that.choosePosList[this.selIndex];
    //                                     that.selectPositionId = that.choosePosList[this.selIndex].pos_type + '_' + that.choosePosList[this.selIndex].pos_id;
    //                                     that.selectPositionName = that.choosePosList[this.selIndex].pos_name;
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     let linkInfo = JSON.parse(sessionStorage.getItem('paramsConfig'));
    //                     if(!$.isEmptyObject(linkInfo)) {
    //                         that.selectPosition = {};
    //                         if (linkInfo.chooseTid != undefined && linkInfo.chooseMacId != undefined && linkInfo.chooseTid != "" && linkInfo.chooseMacId != "" && that.macList[linkInfo.chooseTid].length > 0) {
    //                             that.chooseTid = linkInfo.chooseTid;//所选的组织id
    //                             that.chooseTroot = linkInfo.chooseTroot;//所选的组织类型
    //                             that.chooseMacList = that.macList[that.chooseTid].concat();
    //                             that.chooseMacId = linkInfo.chooseMacId;//所选的机组id
    //                             that.chooseMacList.forEach(machine => {
    //                                 if (machine.mac_id == that.chooseMacId) {
    //                                     that.selectMachine = machine;
    //                                 }
    //                             });
    //                             that.selectMachineId = that.chooseMacId;
    //                             that.choosePosList = that.posList[that.chooseMacId].concat();
    //                             that.choosePosList = that.sortPositionsName(that.choosePosList);
    //                             if (linkInfo.hasOwnProperty("choosePosTypeId") && linkInfo.choosePosTypeId != '_') {
    //                                 let posType = linkInfo.choosePosTypeId.split('_')[0];
    //                                 let posId = linkInfo.choosePosTypeId.split('_')[1];
    //                                 let choosePosTypeId = "";
    //                                 if(that.choosePosList.length){
    //                                     that.choosePosList.forEach(position => {
    //                                         if (position.pos_type == posType && position.pos_id == posId) {
    //                                             choosePosTypeId = linkInfo.choosePosTypeId;
    //                                             that.selectPosition = position;
    //                                         }
    //                                     });
    //                                 }
    //                                 if (choosePosTypeId !== "") {
    //                                     that.choosePosTypeId = linkInfo.choosePosTypeId;//所选的测点id
    //                                     that.choosePosName = linkInfo.choosePosName;//所选的测点名
    //                                 } else {
    //                                     if(that.choosePosList.length){
    //                                         that.choosePosTypeId = that.choosePosList[this.selIndex].pos_type + '_' + that.choosePosList[this.selIndex].pos_id;
    //                                         that.choosePosName = that.choosePosList[this.selIndex].pos_name;//所选的测点名
    //                                         that.selectPosition = that.choosePosList[this.selIndex];
    //                                     }
    //                                 }
    //                                 that.toggleText = linkInfo.toggleText;//实时与历史按钮文字
    //                                 if (linkInfo.isReal == 1) {
    //                                     that.isReal = true;//是否实时
    //                                     that.flag_real = 1;
    //                                     that.chooseIsRealType = 2;
    //                                 } else {
    //                                     that.isReal = false;//是否实时
    //                                     that.flag_real = 0;
    //                                     that.chooseIsRealType = 1;
    //                                 }
    //                             } else {
    //                                 that.choosePosTypeId = that.choosePosList[this.selIndex].pos_type + '_' + that.choosePosList[this.selIndex].pos_id;
    //                                 that.choosePosName = that.choosePosList[this.selIndex].pos_name;//所选的测点名
    //                                 that.toggleText = "实时";//实时与历史按钮文字
    //                                 that.isReal = true;//是否实时
    //                                 that.flag_real = 1;
    //                                 that.chooseIsRealType = 2;//1是历史数据，2是实时数据
    //                                 that.selectPosition = that.choosePosList[this.selIndex];
    //                             }
    //                             if(that.choosePosList.length){
    //                                 for (let i = 0; i < that.choosePosList.length; i++) {
    //                                     if (that.choosePosList[i].pos_type == that.choosePosTypeId.split('_')[0] && that.choosePosList[i].pos_id == that.choosePosTypeId.split('_')[1]) {
    //                                         that.selectPosition = that.choosePosList[i];
    //                                     }
    //                                 }
    //                             }
    //                             that.selectPositionId = that.choosePosTypeId.split('_')[1];
    //                             that.selectPositionName = that.choosePosName;
    //                             /**如果风场类型不是水电或者石化并且测点为转速测点的情况下有高低密度波形选择**/
    //                             if (!$.isEmptyObject(that.selectPosition) && that.selectPosition.pos_type == 1) {
    //                                 $('#hd_choose').css('display', 'inline-block');
    //                                 /**如果测点为转速测点的情况下低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/
    //                                 if (that.hd_speed) {
    //                                     that.selectPosition.unitName[0] = "mV";
    //                                 } else {
    //                                     that.selectPosition.unitName[0] = "rpm";
    //                                 }
    //                             }
    //                             else {
    //                                 $('#hd_choose').css('display', 'none');
    //                             }
    //                         }
    //                         that.getOrigUnit();
    //                         that.searchTrend();
    //                     }
    //                     else{
    //                         that.getOrigUnit();
    //                         that.searchTrend();
    //                     }
    //                 }
    //                 else{
    //                     swal({
    //                         title: "提示",
    //                         text: '无数据',
    //                         button: "确认",
    //                     });
    //                 }
    //             }
    //         }).catch(err => {
    //         console.log(err)
    //     })
    // },
    //获取初始单位
    getOrigUnit: function getOrigUnit() {
      if (typeof this.selectPosition.unitName == "string") {
        //水电：如果返回的unit不是数组而是字符串就直接显示字符串
        this.unitTrend = this.selectPosition.unitName;
        this.unitWave = this.selectPosition.unitName;
        this.unitRms = this.selectPosition.unitName; //rms的单位

        this.unitSpec = this.selectPosition.unitName;
        this.srcUnitWave = this.selectPosition.unitName;
        this.srcUnitSpec = this.selectPosition.unitName;
      } else {
        var t_unitArr = [];
        var byIntegral = 0;
        var unit0 = "g"; //积分前单位

        var unit1 = "g"; //积分后单位

        if (this.selectPosition != null && typeof this.selectPosition !== "undefined" && !$.isEmptyObject(this.selectPosition)) {
          if (this.selectPosition.hasOwnProperty("power_a")) {
            if (this.selectPosition.power_a == "NaN" || this.selectPosition.power_a == null) {
              this.selectPosition.power_a = 0;
            }

            this.sc_power_a = parseInt(this.selectPosition.power_a);
          } else {
            this.sc_power_a = 0;
          }

          byIntegral = parseInt(this.selectPosition.byIntegral);

          if (this.power_a == -1) {
            this.power_a = this.sc_power_a;
          }

          if (this.power_a == "NaN") {
            this.power_a = 0;
          }

          if (this.sc_power_a == "NaN") {
            this.sc_power_a = 0;
          }

          unit0 = this.selectPosition.unitName[0];

          if (unit0 == "§") {
            unit0 = "gD";
          } else if (unit0 == "m/s?") {
            unit0 = "m/s²";
          }

          if (this.selectPosition && this.selectPosition.byIntegral && this.selectPosition.unitName) {
            unit1 = Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["getUnit1"])(byIntegral, unit0);
          } else {
            unit1 = unit0;
          }

          this.srcUnitWave = unit0;
          this.srcUnitSpec = unit0;
          this.srcUnitTrend = unit0;

          if (this.hd_speed) {
            this.unitTrend = "mV"; //高密度波形情况下，单位为“mV"
          }

          if ((this.selectPosition.dgm_type == 3 || this.selectPosition.dgm_type == 4 || this.selectPosition.dgm_type == 9) && this.selectPosition.pos_type == 3) {
            this.unitTrend = unit1; //振动传感器或者MHD传感器，DGU2000E采集器的振动测点的趋势图单位为积分后的单位

            this.unitWave = unit0;
            this.unitSpec = unit1;
            this.unitRms = unit1;
          } else if (this.selectPosition.dgm_type == 10 && this.selectPosition.pos_type == 3) {
            this.unitTrend = 'm/s²'; //WL9100振动的单位定死为'm/s²'

            this.unitWave = 'm/s²';
            this.unitSpec = 'm/s²';
            this.srcUnitWave = 'm/s²';
            this.srcUnitSpec = 'm/s²';
            this.srcUnitTrend = 'm/s²';
          } else {
            this.unitTrend = unit0; //趋势图都是有效值，用积分前单位

            this.unitWave = unit0;
            this.unitSpec = unit0;
            this.unitRms = unit0;
          }
        }
      }
    },
    //改变所选组织
    selectFolder: function selectFolder() {
      this.chooseMacList.length = 0;
      this.choosePosList.length = 0;
      this.selectPosition = {};
      var that = this;
      this.sortFolderList.forEach(function (folder) {
        if (folder.t_id == that.chooseTid) {
          that.chooseTroot = folder.t_root;
        }
      });

      if (!$.isEmptyObject(this.macList)) {
        this.chooseMacList = this.macList[this.chooseTid].concat();

        if (this.chooseMacList.length > 0) {
          this.chooseMacId = this.sortMacList[0].mac_id;
          this.selectMachineId = this.sortMacList[0].mac_id;
          this.selectMachine = this.sortMacList[0];

          if (!$.isEmptyObject(this.posList)) {
            this.choosePosList = this.posList[this.sortMacList[0].mac_id].concat();
            this.choosePosList = this.sortPositionsName(this.choosePosList);

            if (this.choosePosList.length > 0) {
              this.choosePosTypeId = this.choosePosList[this.selIndex].pos_type + '_' + this.choosePosList[this.selIndex].pos_id;
              this.choosePosName = this.choosePosList[this.selIndex].pos_name;
              this.selectPosition = this.choosePosList[this.selIndex];
              this.selectPositionId = this.choosePosList[this.selIndex].pos_type + '_' + this.choosePosList[this.selIndex].pos_id;
              this.selectPositionName = this.choosePosList[this.selIndex].pos_name;
            }
          }
        }
      }

      this.getOrigUnit();
      this.searchTrend();
    },
    //改变机组选择
    selectMac: function selectMac() {
      var _this = this;

      this.choosePosList.length = 0;
      this.selectPosition = {};
      this.chooseMacList.forEach(function (machine) {
        if (machine.mac_id == _this.chooseMacId) {
          _this.selectMachine = machine;
        }
      });

      if (!$.isEmptyObject(this.posList)) {
        this.choosePosList = this.posList[this.chooseMacId].concat();
        this.choosePosList = this.sortPositionsName(this.choosePosList);

        if (this.choosePosList.length > 0) {
          this.choosePosTypeId = this.choosePosList[this.selIndex].pos_type + '_' + this.choosePosList[this.selIndex].pos_id;
          this.choosePosName = this.choosePosList[this.selIndex].pos_name;
          this.selectPosition = this.choosePosList[this.selIndex];
          this.selectPositionId = this.choosePosList[this.selIndex].pos_type + '_' + this.choosePosList[this.selIndex].pos_id;
          this.selectPositionName = this.choosePosList[this.selIndex].pos_name;
          /**如果测点类型是阶次**/

          if (this.selectPosition.pos_type == 8 || this.selectPosition.pos_type == 9) {
            this.name_type = "阶次";
            this.name_type_speed = "动阶次";
          } else {
            this.name_type = "频率";
            this.name_type_speed = "频";
          } // if (this.choose_factory.factory_type == 8) {
          //     this.setSignalArr(this.selectMachine.xml_channel);
          // } else {
          //     this.setSignalArr(this.selectMachine.mach_model_xml);
          // }

          /**测点为阶次，显示柱状图，其他的测点显示折线图**/


          if (this.selectPosition.pos_type == 8 || this.selectPosition.pos_type == 9) {
            this.spectrumStyle = 'bar';
          } else {
            this.spectrumStyle = 'line';
          }
          /**长采样测点的处理，如果capture_mode=0是自动采样，=1是手动采样**/

          /*if (this.selectPosition.pos_type == 200) {
              if (this.selectPosition.capture_mode == 0) {
                  this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.capture_byId - 1);
                  this.selectPosition.pos_id = this.selectPosition.capture_byId - 1;
                  this.selectPositionName = this.selectPosition.pos_name;
              } else {
                  this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.channel_id + 16);
                  this.selectPosition.pos_id = parseInt(this.selectPosition.channel_id + 16);
                  this.selectPositionName = this.selectPosition.pos_name;
              }
          }*/
          // /**如果风场类型不是水电或者石化并且测点为转速测点的情况下有高低密度波形选择**/
          // if (this.choose_factory.factory_type != 4 && this.selectPosition.position_type == 1) {
          //     $('#hd_choose').css('display', 'inline-block');
          //     /**如果测点为转速测点的情况下低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/
          //     if (this.hd_speed) {
          //         this.selectPosition.unitName[0] = "mV";
          //     } else {
          //         this.selectPosition.unitName[0] = "rpm";
          //     }
          //
          // } else {
          //     $('#hd_choose').css('display', 'none');
          // }

        }
      }

      this.getOrigUnit();
      this.searchTrend();
    },
    //改变测点选择
    selectPosTypeId: function selectPosTypeId() {
      this.unitWave = "";
      this.unitSpec = "";
      this.hd_speed = false;
      this.changePos = true;
      this.selectPosition = {};

      if (this.choosePosTypeId != undefined) {
        for (var i = 0; i < this.choosePosList.length; i++) {
          if (this.choosePosList[i].pos_type == this.choosePosTypeId.split('_')[0] && this.choosePosList[i].pos_id == this.choosePosTypeId.split('_')[1]) {
            this.choosePosName = this.choosePosList[i].pos_name;
            this.selectPositionName = this.choosePosList[i].pos_name;
            this.selectPosition = this.choosePosList[i];
          }
        }

        this.requestTime = 0; //获取波形，0表示实时

        /**长采样测点的处理，如果capture_mode=0是自动采样，=1是手动采样**/
        // console.log(this.selectPosition);

        /*if (this.selectPosition.pos_type == 200) {
            if (this.selectPosition.capture_mode == 0) {
                this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.capture_byId - 1);
                this.selectPosition.pos_id = this.selectPosition.capture_byId - 1;
                this.selectPositionName = this.selectPosition.position_name;
            } else {
                this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.channel_id + 16);
                this.selectPosition.pos_id = parseInt(this.selectPosition.channel_id + 16);
                this.selectPositionName = this.selectPosition.pos_name;
            }
            this.choosePosTypeId = this.selectPositionId;
        }*/

        /**如果风场类型不是水电或者石化并且测点为转速测点的情况下有高低密度波形选择**/

        if (this.selectPosition.pos_type == 1) {
          /**如果是MHD采集器，转速则默认显示高密度**/
          if (this.selectPosition.dgm_type == 4) {
            this.hd_speed = true;
          }

          $('#hd_choose').css('display', 'inline-block');
          /**如果测点为转速测点的情况下低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/

          if (this.hd_speed) {
            this.selectPosition.unitName[0] = "mV";
          } else {
            this.selectPosition.unitName[0] = "rpm";
          }
        } else {
          $('#hd_choose').css('display', 'none');
        }
        /**如果测点类型是阶次**/


        if (this.selectPosition.pos_type == 8 || this.selectPosition.pos_type == 9) {
          this.name_type = "阶次";
          this.name_type_speed = "动阶次";
        } else if (this.selectPosition.pos_type == 4 || this.selectPosition.pos_type == 9) {
          this.selectPosition.unitName[0] = "gD";
          this.unitWave = "gD";
          this.unitSpec = "gD";
        } else {
          this.name_type = "频率";
          this.name_type_speed = "频";
        }
        /*if (this.choose_factory.factory_type == 8) {
            this.setSignalArr(this.selectMachine.xml_channel);
        } else {
            this.setSignalArr(this.selectMachine.mach_model_xml);
        }*/

      }

      ;
      this.getOrigUnit();
      this.searchTrend();
    },
    //切换按钮
    toggleBtn: function toggleBtn() {
      this.flag_real = Math.abs(this.flag_real - 1);

      if (this.flag_real) {
        this.toggleText = '实时';
        this.chooseIsRealType = 2;
      } else {
        this.toggleText = '历史';
        this.chooseIsRealType = 1;
      }
    },
    //转换日期方法
    translateDate: function translateDate(value) {
      value = new Date(value);
      value = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + this.fixTime(value.getDate()) + ' ' + this.fixTime(value.getHours()) + ':' + this.fixTime(value.getMinutes());
      return value;
    },
    //补0
    fixTime: function fixTime(str) {
      if (Number(str) < 10) {
        str = "0" + str;
      }

      return str;
    },
    hideBox: function hideBox(e) {
      this.boxShow = e.target.id === 'posName' || e.target.tagName === 'IMG' ? !this.boxShow : false;
    },
    allToCurPower: function allToCurPower() {
      for (var i = 0, _l = this.allPos.length; i < _l; i++) {
        if (this.selectPositionId.split('_')[0] == this.allPos[i].type && this.selectPositionId.split('_')[1] == this.allPos[i].id || this.allPos[i].name === this.curPosFlag.name && this.allPos[i].ppid == this.curPosFlag.ppid) {
          this.power_a = this.sourceAllPower[i].a;
          this.power_b = this.sourceAllPower[i].b;
          break;
        }
      }
    },
    setAllPower: function setAllPower() {
      if (this.allPower.length > 0) {
        if (this.posIndex === 0) {
          for (var i = 0, _l2 = this.allPos.length; i < _l2; i++) {
            this.curPosName = this.allPos[i].name;
            break;
          }
        } else {
          this.curPosName = this.allPos[this.posIndex].name;
        }

        for (var _i = 0, _l3 = this.allPos.length; _i < _l3; _i++) {
          if (this.curPosName === this.allPos[_i].name) {
            this.posIndex = _i;
            break;
          }
        }

        this.$refs.powerA.value = this.allPower[this.posIndex].a;
        this.$refs.powerB.value = this.allPower[this.posIndex].b;
        this.$refs.allPower.style.display = 'block';
      }
    },
    allPowerOk: function allPowerOk() {
      this.sourceAllPower = this.allPower;
      this.allToCurPower();
      this.makeFftData(2);
      this.$refs.allPower.style.display = 'none';
    },
    selectAllPos: function selectAllPos(e) {
      this.boxShow = false;
      this.posIndex = e.currentTarget.getAttribute('data-id');
      this.curPosName = this.allPos[this.posIndex].name; // this.$refs.curPos.title = this.allPos[this.posIndex].name;

      this.$refs.powerA.value = this.allPower[this.posIndex].a;
      this.$refs.powerB.value = this.allPower[this.posIndex].b;
    },
    setAllPowerA: function setAllPowerA(e) {
      if (this.isReal()) return;
      this.allPower[this.posIndex].a = Number(e.currentTarget.value);
    },
    setAllPowerB: function setAllPowerB(e) {
      if (this.isReal()) return;
      this.allPower[this.posIndex].b = Number(e.currentTarget.value);
    },
    isReal: function isReal() {
      var powerA, powerB;
      this.$refs.powerA && (powerA = Number(this.$refs.powerA.value));
      this.$refs.powerB && (powerB = Number(this.$refs.powerB.value));
      this.isRealAll = powerA > powerB && powerB !== 0;
      return powerA > powerB && powerB !== 0;
    },
    getMax: function getMax(num) {
      this.isLoading === num ? false : true;
    },
    sortMachines: function sortMachines(arr) {
      for (var j = 0; j < arr.length - 1; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
          if (parseInt(arr[i].m_me.replace(/[^0-9]/ig, "")) > parseInt(arr[i + 1].m_me.replace(/[^0-9]/ig, ""))) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    },
    searchWave: function searchWave(date) {
      //获取实时或历史波形
      this.requestTime = date;
      var that = this;
      var params = null;

      if (that.choosePosTypeId && that.choosePosTypeId != undefined) {
        params = {
          p_type: that.choosePosTypeId.split('_')[0],
          machine_id: that.chooseMacId,
          p_id: that.choosePosTypeId.split('_')[1],
          currTime: date,
          hd_wave: that.hd_speed
        };
        this.$axios.post('getWave', params).then(function (res) {
          that.initParams();

          if (res.msg === 0 && res.waveObject != null) {
            that.setWave(res, date);
          } else {
            that.sourceWaveX = [];
            that.sourceWaveY = [];
            that.waveX = [];
            that.waveY = [];
            that.sourceSpectrumX = [];
            that.sourceSpectrumY = [];
            that.spectrumX = [];
            that.spectrumY = [];

            if (that.flag_real == 1) {
              //选择不同的测点时，强制停止实时按钮
              that.setRealBtn();
            } // swal('没有波形')


            that.noRealData = true;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    setWave: function setWave(result, date) {
      var that = this;

      if (!$.isEmptyObject(result)) {
        // that.initParams();
        if (!that.changePos) {
          that.flag_subFreq && ($('.tool_list>li')[0].className = 'active');
          that.flag_nx && ($('.tool_list>li')[6].className = 'active');
        }

        var speed = result.value.speed;
        var t_time;

        if (that.choose_factory.factory_type == 4) {
          that.alarm_type = parseInt(that.selectPosition.alarm_type);
        }

        t_time = result.value.saveTime_Com;
        that.curSpeed = speed;
        that.rotateSpeed = Math.round(speed);

        if (that.choose_factory.factory_type != 4 && that.selectPosition.pos_type == 1) {
          that.validValue = -1;
        } else {
          that.validValue = Math.round(result.value.rms * 10000) / 10000;
        }

        that.oriChangeTime = t_time;
        that.changeTime = that.timetrans(t_time);
        that.oneFreq = speed == 0 ? 0.908 / 60 : speed / 60;
        var freq = result.waveObject.freq;
        that.maxFreq = freq;
        that.samples = result.waveObject.samples;
        var jcPosList = [8, 9, 16]; //阶次测点类型

        var posType = Number(that.selectPosition.pos_type);

        if (jcPosList.includes(posType)) {
          that.specType = 2;
          that.unitXWave = "smpl";
          that.unitXSpec = "NX";
          that.spectrumStyle = 'bar-line';
          that.unitXSpec = 'NX';
        } else {
          that.specType = 1;
          that.unitXWave = "s";
          that.unitXSpec = "Hz";
          that.spectrumStyle = 'line';
          that.unitXSpec = 'Hz';
        }

        if (that.selectPosition.pos_type == 14) {
          that.unitXWave = "μs";
        }

        if (that.specType == 2) {
          if (result.waveObject.cycles > 0 && result.waveObject.samples > 0) {
            that.spectral = result.waveObject.samples / result.waveObject.cycles;
          } else if (result.waveObject.b[2] > 0 && result.waveObject.samples) {
            that.spectral = result.waveObject.samples / result.waveObject.b[2];
          } else {
            that.spectral = 1;
          }
        }

        var wave_y = [];
        var wave_x = [];
        var len = wave_y.length;
        var i = 0;

        if (that.selectPosition.pos_type == 14) {
          wave_y = result.waveObject;
        } else {
          wave_y = result.waveObject.wave;
        }

        if (that.specType == 2) {
          var _len = wave_y.length;

          for (i = 0; i < _len; i++) {
            wave_x.push(i);
          }
        } else if (that.selectPosition.pos_type == 14) {
          var _len2 = wave_y.length;
          var t_y = [];
          var spaceTime = 10; //UT目前每隔10ns(spaceTime)采一个点，且转换成um显示波形横坐标(暂时写死，以后要改再说)

          var wStart = Number(that.selectPosition.wStart); //波形起始位置

          var wRange = Number(that.selectPosition.wRange); //波形范围

          for (var _i2 = 0; _i2 < _len2; _i2++) {
            var val_x = _i2 * spaceTime / 1000;

            if (val_x < wStart) {
              continue;
            }

            if (wRange > 0 && val_x > Number(wStart + wRange)) {
              continue;
            }

            wave_x.push(val_x);
            t_y.push(wave_y[_i2]);
          }

          wave_y = t_y;
        } else {
          var _len3 = wave_y.length;

          for (i = 0; i < _len3; i++) {
            wave_x.push(i / freq);
          }
        }

        that.sourceWaveX = wave_x;
        that.sourceWaveY = wave_y;
        that.waveX = wave_x;
        that.waveY = wave_y;
        that.setSrcSpectrum(); //计算原始频谱，用于计算波形

        that.setHanning(); //计算频谱

        $('.tool_list>li:nth-child(2)').addClass('active');
        $('.tool_list>li:nth-child(11)').addClass('active'); // that.waveSetIntervalNum();

        var newUnitWave = "";
        var newUnitSpec = "";
        /**波形图单位选择单位改变数据也要改变**/

        if (that.unitWave != that.srcUnitWave) {
          newUnitWave = that.unitWave;
          that.unitWave = that.srcUnitWave;
          that.setUnitSelect(newUnitWave, 1);
        }
        /**频谱图单位选择单位改变数据也要改变**/


        if (that.unitSpec != that.srcUnitSpec) {
          newUnitSpec = that.unitSpec;
          that.unitSpec = that.srcUnitSpec;
          that.setUnitSelect(newUnitSpec, 2);
        }

        that.choose_position.unit_sensor = that.unitWave;
        /*that.failureOk();*/
        //故障频率暂时屏蔽

        if (date == 0 && that.flag_real) {
          that.changePos = false;
          window.clearTimeout(that.timer);
          that.timer = null;
          that.timer = setTimeout(function () {
            that.searchWave(0);
          }, 5000);
        }

        that.noRealData = false;
      } else {
        that.noRealData = true;
        that.sourceWaveX = [];
        that.sourceWaveY = [];
        that.waveX = [];
        that.waveY = [];
        that.srcSpectrum = {};
        that.countSpectrum = {};
        that.sourceSpectrumX = [];
        that.sourceSpectrumY = [];
        that.scoreSpectrumY = [];
        that.spectrumX = [];
        that.spectrumY = [];
        swal({
          title: "提示",
          text: '请求波形失败',
          button: "确认"
        });

        if (that.flag_real == 1) {
          //选择不同的测点时，强制停止实时按钮
          that.setRealBtn();
        }
      }

      if (!this.changePos && this.flag_f_nx.isChange) {
        $('.tool_btn')[2].click();
      }
    },
    change_hd: function change_hd() {
      if ($('#hd_low_radio').is(":checked")) {
        this.hd_speed = false;
      } else {
        this.hd_speed = true;
      }
      /**如果是低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/


      if (this.hd_speed) {
        this.selectPosition.unitName[0] = "mV";
      } else {
        this.selectPosition.unitName[0] = "rpm";
      }

      this.requestTime = 0; //获取波形，0表示实时

      this.searchTrend();
    },
    buildTime: function buildTime(date) {
      var t = new Date(date);
      return t.getFullYear() + '-' + this.fixTime(t.getMonth() + 1) + '-' + this.fixTime(t.getDate());
    },
    //时间戳转化时分秒
    timestampToTime: function timestampToTime(timestamp) {
      if (timestamp != 0 && timestamp) {
        var date = new Date(timestamp);
      } else {
        var date = new Date(); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      }

      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var strDate = Y + M + D + h + m + s;
      return strDate;
    },
    hasWave: function hasWave(pos_type) {
      //测点过滤
      if (pos_type == 3 || pos_type == 4 || pos_type == 6 || pos_type == 8 || pos_type == 9 || pos_type == 12 || pos_type == 200 || pos_type == 1) {
        return true;
      } else {
        return false;
      }
    },
    setSelectVal: function setSelectVal(position) {
      if (position) {
        return position.position_type + "_" + position.position_id;
      }
    },
    isInArray: function isInArray(arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
          return true;
        }
      }

      return false;
    },
    initMacPosSet: function initMacPosSet() {
      //初始化选中机组和测点
      // console.log(this.selectMachineId);
      if (this.machines.length > 0) {
        var machines_id = [];

        for (var k = 0; k < this.machines.length; k++) {
          machines_id.push(this.machines[k].machine_id.split("_")[0]);
        } // console.log(this.isInArray(machines_id, this.choose_machine.machine_id));


        if (this.choose_machine.machine_id == "" || this.isInArray(machines_id, this.choose_machine.machine_id) == false) {
          //如果带过来的机组没有测点就默认显示第一个机组
          this.selectMachineId = this.machines[0].machine_id;
        }

        for (var i = 0; i < this.machines.length; i++) {
          if (this.machines[i].machine_id == this.selectMachineId) {
            this.selectMachine = this.machines[i];
            this.sortPositions = this.sortPositionsName(this.machines[i].c_machine_positions);
            /**如果测点类型是阶次，故障频率文案改变为阶次，其他为频率**/

            if (this.selectPosition.position_type == 8 || this.selectPosition.position_type == 9) {
              this.name_type = "阶次";
              this.name_type_speed = "动阶次";
            } else {
              this.name_type = "频率";
              this.name_type_speed = "频";
            }
            /**水泥厂的传动链“xml_channel”,其他的是“mach_model_xml”**/


            if (this.choose_factory.factory_type == 8) {
              this.setSignalArr(this.selectMachine.xml_channel);
            } else {
              this.setSignalArr(this.selectMachine.mach_model_xml);
            }

            break;
          }
        }

        var positions = this.sortPositions;

        if (this.selectPositionId == -1 || this.selectPositionId == "-1_-1" || this.choose_position.position_type == 2 || this.choose_position.position_type == 5 || this.choose_position.position_type == 7 || this.choose_position.position_type == 10 || this.choose_position.position_type == 11 || this.choose_position.position_type == 13 || this.choose_position.position_type == 200) {
          //没有带入测点，默认显示第一个振动测点
          this.selectPositionId = positions[this.selIndex].position_type + "_" + positions[this.selIndex].position_id;
          this.selectPosition = positions[this.selIndex];
          this.selectPositionName = positions[this.selIndex].position_name;
        } else {
          //选中带入的测点
          for (i = 0; i < positions.length; i++) {
            if (positions[i].position_id == Number(this.selectPositionId.split(/_/)[1]) && positions[i].position_type == Number(this.selectPositionId.split(/_/)[0])) {
              this.selectPosition = positions[i];
              this.selectPositionName = positions[i].position_name;
              break;
            }
          }
        } // console.log(this.selectPosition);

        /**当测点为阶次时显示柱状图**/


        if (this.selectPosition.position_type == 8 || this.selectPosition.position_type == 9) {
          this.spectrumStyle = 'bar-line';
          this.name_type = "阶次";
          this.name_type_speed = "动阶次";
        } else {
          this.spectrumStyle = 'line';
          this.name_type = "频率";
          this.name_type_speed = "频";
        }
        /**长采样测点的处理，如果capture_mode=0是自动采样，=1是手动采样**/


        if (this.selectPosition.position_type == 200) {
          if (this.selectPosition.xmlValMap.capture_mode == 0) {
            this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.xmlValMap.capture_byId - 1);
            this.selectPosition.position_id = this.selectPosition.xmlValMap.capture_byId - 1;
            this.selectPositionName = this.selectPosition.position_name;
          } else {
            this.selectPositionId = 200 + "_" + parseInt(this.selectPosition.channel_id + 16);
            this.selectPosition.position_id = parseInt(this.selectPosition.channel_id + 16);
            this.selectPositionName = this.selectPosition.position_name;
          }
        }
        /**如果风场类型不是水电或者石化并且测点为转速测点的情况下有高低密度波形选择**/


        if (this.selectPosition.position_type == 1) {
          $('#hd_choose').css('display', 'inline-block');
          /**如果低密度波形，单位为“rpm”,高密度波形，单位为“MV”**/

          if (this.hd_speed) {
            this.selectPosition.unitName[0] = "mV";
          } else {
            this.selectPosition.unitName[0] = "rpm";
          }
        } else {
          $('#hd_choose').css('display', 'none');
        }

        this.searchTrend();
      }
    },
    searchTrend: function searchTrend() {
      //搜索数据
      var that = this;
      var params = null;
      that.ifImportBaseWave = 2;

      if (this.choosePosTypeId && this.choosePosTypeId != undefined) {
        params = {
          p_type: this.choosePosTypeId.split('_')[0],
          machine_id: this.chooseMacId,
          p_id: this.choosePosTypeId.split('_')[1],
          endTime: new Date(this.search_data.end_time).getTime(),
          startTime: new Date(this.search_data.start_time).getTime(),
          hd_wave: this.hd_speed
        };
        this.$axios.post('getWaveValue', params).then(function (res) {
          if (res.msg === 0 && res.list.length > 0) {
            if (typeof that.selectPosition.unitName == "string") {
              //水电：如果返回的unit不是数组而是字符串就直接显示字符串
              that.unitTrend = that.selectPosition.unitName;
              that.srcUnitTrend = that.unitTrend;
            } else if (that.selectPosition.unitName === undefined) {
              that.unitTrend = 'g';
              that.srcUnitTrend = that.unitTrend;
            } else if (that.selectPosition.dgm_type == 10 && that.selectPosition.pos_type == 3) {
              that.unitTrend = 'm/s²'; //WL9100振动测点的单位定死为'm/s²'

              that.srcUnitTrend = that.unitTrend;
            } else {
              that.unitTrend = that.selectPosition.unitName[0];
              that.srcUnitTrend = that.unitTrend;
            }

            that.setTrend(res.list);
          } else {
            that.historyData = [];
            that.historyX = [];
            that.historyY = [];
            that.waveX = [];
            that.waveY = [];
            that.spectrumX = [];
            that.spectrumY = [];
            swal({
              title: "提示",
              text: '该时段内无历史数据',
              button: "确认"
            });
          }

          that.searchWave(that.requestTime); //获取波形
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    setTrend: function setTrend(result) {
      var that = this;

      if (result != null && result.length > 0) {
        var history_data = [];
        var historyXdata = [];
        var historyYdata = [];
        var value = 0;
        var startValue;
        var save_time;
        result.sort(function (a, b) {
          return a.saveTime_Com - b.saveTime_Com;
        });

        for (var i = 0, len = result.length; i < len; i++) {
          save_time = new Date(result[i].saveTime_Com);
          value = result[i].tempValue.toFixed(4);

          if (i == 0) {
            startValue = save_time;
          }

          history_data.push([result[i].saveTime_Com, value]);
          historyXdata.push(Number(result[i].saveTime_Com));
          historyYdata.push(Number(value));
        }

        that.sourceHistoryY = historyYdata;
        that.historyY = historyYdata;
        that.historyData = history_data;
        that.historyX = historyXdata;
        var newUnitWave = "";
        var newUnitSpec = "";
        /**趋势图单位选择单位改变数据也要改变**/

        if (that.unitTrend != that.srcUnitTrend) {
          newUnitSpec = that.unitTrend;
          that.unitTrend = that.srcUnitTrend;
          that.setUnitSelect(newUnitSpec, 3);
        } // that.searchWave(that.requestTime);//获取波形

      } else {
        that.historyData = [];
        that.historyX = [];
        that.waveX = [];
        that.waveY = [];
        that.spectrumX = [];
        that.spectrumY = [];
        swal({
          title: "提示",
          text: '该时段内无历史数据',
          button: "确认"
        });
      }
    },
    isPosVibSeries: function isPosVibSeries(position_type) {
      //是否为振动系的测点
      var isVibSeries = false;

      switch (position_type) {
        case 3:
        case 4:
        case 6:
        case 8:
        case 9:
        case 12:
          isVibSeries = true;
          break;
      }

      return isVibSeries;
    },

    /**测点排序方法**/
    sortPositionsName: function sortPositionsName(arr_result) {
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

      if (arr_result != null && arr_result.length > 0) {
        for (var m = 0, posLen = arr_result.length; m < posLen; m++) {
          var pos_type = arr_result[m].pos_type;

          switch (pos_type) {
            case 1:
              pos_speed.push(arr_result[m]);
              break;

            case 3:
              pos_vibrate.push(arr_result[m]);
              break;

            case 4:
              pos_envelope.push(arr_result[m]);
              break;

            case 8:
              pos_vibrateOrder.push(arr_result[m]);
              break;

            case 9:
              pos_envelopeOrder.push(arr_result[m]);
              break;

            case 200:
              pos_samp.push(arr_result[m]);
              break;

            case 6:
              pos_slosh.push(arr_result[m]);
              break;

            case 11:
              pos_overturn.push(arr_result[m]);
              break;

            case 12:
              pos_inclinate.push(arr_result[m]);
              break;

            case 13:
              pos_synthetic.push(arr_result[m]);
              break;

            case 7:
              pos_temp.push(arr_result[m]);
              break;

            case 2:
              pos_process.push(arr_result[m]);
              break;

            case 5:
              pos_digital.push(arr_result[m]);
              break;

            case 10:
              pos_crafts.push(arr_result[m]);
              break;

            case 14:
              pos_bolt.push(arr_result[m]);
              break;

            case 15:
              pos_shock.push(arr_result[m]);
              break;

            case 16:
              pos_shockOrder.push(arr_result[m]);
              break;

            case 17:
              pos_rail.push(arr_result[m]);
              break;

            default:
              break;
          }
        }

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
        pos_samp = pos_samp.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
        pos_shock = pos_shock.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
        pos_shockOrder = pos_shockOrder.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
        pos_rail = pos_rail.sort(Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareName"])('pos_name'));
        sortArr = pos_speed.concat(pos_vibrate, pos_envelope, pos_vibrateOrder, pos_envelopeOrder, pos_samp, pos_slosh, pos_overturn, pos_inclinate, pos_synthetic, pos_temp, pos_process, pos_digital, pos_crafts, pos_bolt, pos_shock, pos_shockOrder, pos_rail);

        if (sortArr.length > 0) {
          /**没有振动取第一个测点**/
          if (pos_vibrate.length == 0) {
            that.selIndex = 0;
          } else {
            that.selIndex = pos_speed.length;
          }
        }
      }

      return sortArr;
    },
    factory_type: function factory_type() {
      if (this.db_type.length > 0) {
        var db_strs = this.db_type.split(/_/ig);
        var db_type_n = Number(db_strs[db_strs.length - 1][0]);
        return db_type_n;
      }
    },
    removeItem: function removeItem(arr, item) {
      //数组中移除某特定元素的方法
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].dgm_type != item) {
          result.push(arr[i]);
        }
      }

      return result;
    },
    copyArr: function copyArr(arr) {
      //简单的复制数组对象方法
      var t_arr = [];
      var t_obj = {};

      for (var i = 0; i < arr.length; i++) {
        t_obj = {};
        t_obj = this.copyObj(arr[i]);
        t_arr.push(t_obj);
      }

      return t_arr;
    },
    copyObj: function copyObj(obj) {
      //简单的复制对象方法
      var t_obj = {};

      for (var key in obj) {
        t_obj[key] = obj[key];
      }

      return t_obj;
    },
    setSignalArr: function setSignalArr(xmlStr) {
      //构造故障频率树结构
      if (xmlStr == null || xmlStr == "") {
        return;
      }

      var xmlDoc;

      if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlStr, "text/xml");
      } else // Internet Explorer
        {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = false;
          xmlDoc.loadXML(xmlStr);
        }

      var model_xml = xmlDoc.childNodes[0];
      var itemList = model_xml.childNodes;
      this.gearList = [{
        id: 0,
        name: "啮合" + this.name_type,
        label: "啮合" + this.name_type,
        state: false,
        children: []
      }];
      this.bearList = [{
        id: 1,
        name: "轴承通过" + this.name_type,
        label: "轴承通过" + this.name_type,
        state: false,
        children: []
      }];
      this.speedList = [{
        id: 2,
        name: "转" + this.name_type_speed,
        label: "转" + this.name_type_speed,
        state: false,
        children: []
      }];
      var children_gear1 = [{
        id: 0,
        name: "啮合" + this.name_type,
        label: "",
        state: false,
        type: "GMF"
      }];
      var children_gear2 = [{
        id: 0,
        name: "定齿啮合" + this.name_type,
        label: "",
        state: false,
        type: "GMF"
      }, {
        id: 1,
        name: "太阳轮啮合" + this.name_type,
        label: "",
        state: false,
        type: "GMF"
      }];
      var children_bear = [{
        id: 0,
        name: "外环通过" + this.name_type,
        label: "",
        state: false,
        type: "BPFO"
      }, {
        id: 1,
        name: "内环通过" + this.name_type,
        label: "",
        state: false,
        type: "BPFI"
      }, {
        id: 2,
        name: "滚动体通过" + this.name_type,
        label: "",
        state: false,
        type: "BSF"
      }, {
        id: 3,
        name: "2倍滚动体通过" + this.name_type,
        label: "",
        state: false,
        type: "2xBSF"
      }, {
        id: 4,
        name: "保持架通过" + this.name_type,
        label: "",
        state: false,
        type: "FTF"
      }];
      var i = 0;
      var j = 0;
      var len = (itemList.length - 1) / 2;
      var itemType = -1; //部件类型

      var itemType2 = -1;
      var ids = [];
      var ids2 = [];
      var obj = {};
      var obj2 = {};
      var item = {}; //叶节点

      var t_children = [];
      var fix_teeth_num = 0; //定齿数（行星轮）

      var plant_teeth_num = 0; //行星齿数（行星轮）

      var sun_teeth_num = 0; //太阳齿数（行星轮）

      /**啮合频率**/

      for (i = 1; i <= len; i++) {
        itemType = Number(itemList[2 * i - 1].getAttribute("itemtype"));

        if (!(itemType == 5 || itemType == 6 || itemType == 9 || itemType == 10)) {
          continue;
        }

        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]);
        obj.name = itemList[2 * i - 1].getAttribute("name");
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.children = [];
        obj.parent = this.gearList;
        var gearBoth = false;

        if (itemType == 5) {
          //直齿
          for (j = 0; j < this.gearList[0].children.length; j++) {
            obj2 = this.gearList[0].children[j];

            if (obj2.itemType == 5) {
              if (Number(itemList[2 * i - 1].getAttribute("up")) == obj2.id || Number(itemList[2 * i - 1].getAttribute("down")) == obj2.id) {
                obj2.name = obj2.name + "/" + obj.name;
                gearBoth = true;
                break;
              }
            }
          }

          if (gearBoth) {
            continue;
          }

          t_children = this.copyArr(children_gear1);
          t_children[0].value = Number(itemList[2 * i - 1].getAttribute("gear_teeth_num"));
          t_children[0].speedRate = obj.speedRate;
          t_children[0].parent = obj;
          obj.children = this.copyArr(t_children);
        } else if (itemType == 6 || itemType == 9) {
          t_children = this.copyArr(children_gear2);
          t_children[0].value = Number(itemList[2 * i - 1].getAttribute("fix_teeth_num"));
          t_children[0].speedRate = obj.speedRate;
          t_children[0].parent = obj;
          t_children[1].value = Number(itemList[2 * i - 1].getAttribute("fix_teeth_num"));
          t_children[1].speedRate = obj.speedRate;
          t_children[1].parent = obj;
          obj.children = this.copyArr(t_children);
        } else if (itemType == 10) {
          for (j = 1; j < len; j++) {
            itemType2 = Number(itemList[2 * j - 1].getAttribute("itemtype"));

            if (!(itemType2 == 6 || itemType2 == 9 || itemType2 == 10)) {
              continue;
            }

            obj2 = {};
            ids2 = itemList[2 * j - 1].getAttribute("id").split("_");
            obj2.id = Number(ids2[ids2.length - 1]);

            if (Number(itemList[2 * i - 1].getAttribute("left2")) == obj2.id) {
              obj2.speedRate = Number(itemList[2 * j - 1].getAttribute("speedRate"));
              break;
            }
          }

          fix_teeth_num = Number(itemList[2 * i - 1].getAttribute("fix_teeth_num"));
          plant_teeth_num = Number(itemList[2 * i - 1].getAttribute("plant_teeth_num"));
          sun_teeth_num = Number(itemList[2 * i - 1].getAttribute("sun_teeth_num"));
          t_children = this.copyArr(children_gear2);
          t_children[0].value = fix_teeth_num;
          t_children[0].speedRate = obj.speedRate + obj2.speedRate;
          t_children[0].parent = obj;
          t_children[1].value = sun_teeth_num;
          t_children[1].speedRate = (1 + fix_teeth_num / sun_teeth_num) * obj2.speedRate + fix_teeth_num / sun_teeth_num * obj.speedRate - obj2.speedRate;
          t_children[1].parent = obj;
          obj.children = this.copyArr(t_children);
        }

        this.gearList[0].children.push(obj);
      }
      /**轴承通过频率**/

      /**轴承**/


      for (i = 1; i <= len; i++) {
        itemType = Number(itemList[2 * i - 1].getAttribute("itemtype"));

        if (itemType != 7) {
          continue;
        }

        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]);
        obj.name = itemList[2 * i - 1].getAttribute("name");
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.children = [];
        obj.parent = this.bearList;
        t_children = this.copyArr(children_bear);
        t_children[0].value = Number(itemList[2 * i - 1].getAttribute("bpfo"));
        t_children[0].speedRate = obj.speedRate;
        t_children[1].value = Number(itemList[2 * i - 1].getAttribute("bpfi"));
        t_children[1].speedRate = obj.speedRate;
        t_children[2].value = Number(itemList[2 * i - 1].getAttribute("bsf"));
        t_children[2].speedRate = obj.speedRate;
        t_children[3].value = 2 * Number(itemList[2 * i - 1].getAttribute("bsf"));
        t_children[3].speedRate = obj.speedRate;
        t_children[4].value = Number(itemList[2 * i - 1].getAttribute("ftf"));
        t_children[4].speedRate = obj.speedRate;
        obj.children = this.copyArr(t_children);
        this.bearList[0].children.push(obj);
      }
      /**发电机前、后轴承**/


      for (i = 1; i <= len; i++) {
        itemType = Number(itemList[2 * i - 1].getAttribute("itemtype"));

        if (itemType != 8) {
          continue;
        }
        /**前轴承**/


        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]) * 100 + 1;
        obj.name = itemList[2 * i - 1].getAttribute("name") + "前轴承";
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.children = [];
        t_children = this.copyArr(children_bear);
        t_children[0].value = Number(itemList[2 * i - 1].getAttribute("comp1Freq3"));
        t_children[0].speedRate = obj.speedRate;
        t_children[1].value = Number(itemList[2 * i - 1].getAttribute("comp1Freq4"));
        t_children[1].speedRate = obj.speedRate;
        t_children[2].value = Number(itemList[2 * i - 1].getAttribute("comp1Freq2"));
        t_children[2].speedRate = obj.speedRate;
        t_children[3].value = 2 * Number(itemList[2 * i - 1].getAttribute("comp1Freq2"));
        t_children[3].speedRate = obj.speedRate;
        t_children[4].value = Number(itemList[2 * i - 1].getAttribute("comp1Freq1"));
        t_children[4].speedRate = obj.speedRate;
        obj.children = this.copyArr(t_children);
        this.bearList[0].children.push(obj);
        /**后轴承**/

        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]) * 100 + 2;
        obj.name = itemList[2 * i - 1].getAttribute("name") + "后轴承";
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.children = [];
        t_children = this.copyArr(children_bear);
        t_children[0].value = Number(itemList[2 * i - 1].getAttribute("comp2Freq3"));
        t_children[0].speedRate = obj.speedRate;
        t_children[1].value = Number(itemList[2 * i - 1].getAttribute("comp2Freq4"));
        t_children[1].speedRate = obj.speedRate;
        t_children[2].value = Number(itemList[2 * i - 1].getAttribute("comp2Freq2"));
        t_children[2].speedRate = obj.speedRate;
        t_children[3].value = 2 * Number(itemList[2 * i - 1].getAttribute("comp2Freq2"));
        t_children[3].speedRate = obj.speedRate;
        t_children[4].value = Number(itemList[2 * i - 1].getAttribute("comp2Freq1"));
        t_children[4].speedRate = obj.speedRate;
        obj.children = this.copyArr(t_children);
        this.bearList[0].children.push(obj);
      }
      /**齿轮**/


      for (i = 1; i <= len; i++) {
        itemType = Number(itemList[2 * i - 1].getAttribute("itemtype"));

        if (!(itemType == 6 || itemType == 9 || itemType == 10)) {
          continue;
        }

        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]);
        obj.name = itemList[2 * i - 1].getAttribute("name");
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.children = [];
        t_children = this.copyArr(children_bear);

        if (itemType == 10) {
          for (j = 1; j < len; j++) {
            itemType2 = Number(itemList[2 * j - 1].getAttribute("itemtype"));

            if (!(itemType2 == 6 || itemType2 == 9 || itemType2 == 10)) {
              continue;
            }

            obj2 = {};
            ids2 = itemList[2 * j - 1].getAttribute("id").split("_");
            obj2.id = Number(ids2[ids2.length - 1]);

            if (Number(itemList[2 * i - 1].getAttribute("left2")) == obj2.id) {
              obj2.speedRate = Number(itemList[2 * j - 1].getAttribute("speedRate"));
              break;
            }
          }

          obj.speedRate = Math.abs(obj.speedRate - obj2.speedRate) * (Number(itemList[2 * i - 1].getAttribute("fix_teeth_num")) / Number(itemList[2 * i - 1].getAttribute("plant_teeth_num")));
        } else {
          obj.speedRate = obj.speedRate * Number(itemList[2 * i - 1].getAttribute("fix_teeth_num")) / Number(itemList[2 * i - 1].getAttribute("plant_teeth_num"));
        }

        t_children[0].value = Number(itemList[2 * i - 1].getAttribute("bpfo"));
        t_children[0].speedRate = obj.speedRate;
        t_children[1].value = Number(itemList[2 * i - 1].getAttribute("bpfi"));
        t_children[1].speedRate = obj.speedRate;
        t_children[2].value = Number(itemList[2 * i - 1].getAttribute("bsf"));
        t_children[2].speedRate = obj.speedRate;
        t_children[3].value = 2 * Number(itemList[2 * i - 1].getAttribute("bsf"));
        t_children[3].speedRate = obj.speedRate;
        t_children[4].value = Number(itemList[2 * i - 1].getAttribute("ftf"));
        t_children[4].speedRate = obj.speedRate;
        obj.children = this.copyArr(t_children);
        this.bearList[0].children.push(obj);
      }
      /**转频**/


      for (i = 1; i <= len; i++) {
        itemType = Number(itemList[2 * i - 1].getAttribute("itemtype"));

        if (itemType != 2) {
          continue;
        }

        obj = {};
        ids = itemList[2 * i - 1].getAttribute("id").split("_");
        obj.id = Number(ids[ids.length - 1]);
        obj.name = itemList[2 * i - 1].getAttribute("name") + "转" + this.name_type_speed;
        obj.label = "";
        obj.itemType = itemType;
        obj.state = false;
        obj.value = 1;
        obj.speedRate = Number(itemList[2 * i - 1].getAttribute("speedRate"));
        obj.type = "F";
        this.speedList[0].children.push(obj);
      }
    },
    initParams: function initParams() {
      //初始化参数
      this.noRealData = false; //是否有实时波形

      this.last_xWave = {}; //上一个选中点

      this.last_xSpec = {}; //上一个选中点

      this.oneFreq = 0; //1倍频

      this.fMaxFZ = 0; //最大幅值

      this.maxFreq = 0; //最大频率

      this.samples = 0; //谱线数

      this.peakIndexArr = []; //自动寻峰10个坐标索引

      this.flag_winFunc = 0; //汉宁窗

      this.flag_oneF = 0; //1倍频标记

      this.flag_f_nx.val = 0; //阶比

      this.flag_addLabel = 0; //添加标注

      this.nxArrayWave = []; //带标签竖线
      // this.spectrumXNum = this.interValNum_spectrumX;

      this.flag_show = 0;
      this.waveXNum = 1;
      this.interValNum_waveX = 1;
      this.spectrumXNum = 1;
      this.flag_addPeak = true;
      this.timeColor = this.spectrumColor.font;
      this.isSampAlert = false; //采样设置按钮关闭

      this.chooseSampId = ''; //选择的手动长采样的测点的通道id

      this.chooseSampFreq = ''; //选择的手动长采样的分析频率

      this.chooseSampTime = ''; //选择的手动长采样的采集时间

      if (this.changePos) {
        this.ifImportBaseWave = 2;
        this.flag_nx = 0; //标注倍频

        this.flag_subFreq = 0; //频差

        this.interValNum_spectrumX = 1;
        this.flag_f_nx.isChange = false;
        /* this.sc_power_a = 0;
         this.hide_low = 0; //低频过滤
         this.power_a = -1; //有效频率下限*/

        this.power_b = 0; //有效频率上限

        this.zoomStartXWave = 0; //波形图X轴缩放起始位置（百分比）

        this.zoomEndXWave = 100; //波形图X轴缩放结束位置（百分比）

        this.zoomStartXSpec = 0; //频谱图X轴缩放起始位置（百分比）

        this.zoomEndXSpec = 100; //频谱图X轴缩放结束位置（百分比）

        this.failureList.length = 0; //故障频率画线清除

        this.failureList_detail.length = 0; //故障频率明细列表

        this.nxArraySpec.length = 0; //带标签竖线

        this.freq_speed_failure = 0; //发电机输入轴转速

        if (this.choose_factory.type != 3) // 水电没有转速测点
          this.setSignalArr();
        $('#chooseYes').attr('checked', false);
        this.chooseSpeed();
      } // this.nxArraySpec = [];//带标签竖线


      this.autoPeakNum = -1; //自动寻峰计数

      this.labelList = []; //标注列表
      // this.unitSelect="g";//当前操作的单位
      // this.gearList=[],//啮合频率
      // this.bearList=[],//轴承通过频率
      // this.speedList=[],//转频

      this.rotateSpeed = 0;
      this.validValue = 0;
      this.changeTime = "";
      this.flag_toolTip = false;
      this.flag_wave_toolTip = false; // this.spectrumStyle = 'line';//阶比初始化为折线图
      // this.name_type= "频率";//故障频率传动链名字尾缀，阶次测点显示“阶次”，其他测点显示“频率”
      // this.name_type_speed= "频";//故障频率传动链转速名字尾缀，阶次测点显示“动阶次”，其他测点显示“频”

      if (this.selectPosition.pos_type != 1) {
        this.hd_speed = false; //转速测点的true高密度波形，false低密度波形
      }

      $('.tool_list li').removeClass('active'); //右侧功能键恢复未选中状态

      this.$nextTick(function () {
        this.keepPage();
      });
    },
    waveFFT: function waveFFT(data, freq, nFirst, nCount, mi) {
      if (this.selectPosition.pos_type == 14) {
        //2600螺栓测点没有频谱图,不参与fft计算
        return [[], [], []];
      }

      var nPointNumber = 1;

      for (var i = 0; i < mi; i++) {
        nPointNumber *= 2;
      }

      var pBegin = nFirst;
      var nWaveCount = data.length;
      if (nFirst >= nWaveCount) return -1;
      if (nFirst + nCount > nWaveCount) nCount = nWaveCount - nFirst;
      var all_count = nCount;
      var fDF = freq / nPointNumber;

      if (this.specType == 2) {
        fDF = fDF * this.spectral / this.maxFreq;
      } // 抽取


      var x_arr = [];
      var y_arr = []; // x_arr.length = (nPointNumber + 1);

      x_arr[0] = 0; // 插入空白点

      for (i = 0; i < nPointNumber - 1; i++) {
        // i * nCount 可能很大，超过int的范围
        // 因此用double进行计算
        var pos = i;
        pos = parseInt(pos * (nCount - 1) / nPointNumber);
        var ipos0 = pos;
        var ipos1 = ipos0 + 1;
        var v0 = data[pBegin + ipos0]; // // console.log(pBegin + ipos0);

        var v1 = data[pBegin + ipos1]; // 插值

        var t = pos - ipos0;
        var v = v0 + (v1 - v0) * t;
        x_arr.push(v);
      }

      x_arr.push(data[pBegin + nCount - 1]); // 插入最后一个点
      //			if (x_arr.length != (nPointNumber+1))
      //				return -1;
      // 计算平均值average，并且令x[i] -= average以消除直流分量

      var sum = 0;

      for (i = 1; i < x_arr.length; i++) {
        sum += x_arr[i];
      }

      var average = sum / nPointNumber;

      for (i = 1; i < x_arr.length; i++) {
        x_arr[i] -= average;
      } // y_arr.length = (nPointNumber + 1);


      this.offt(1, mi, x_arr, y_arr, nPointNumber); // 处理计算结果

      var t_fMaxFZ = 0;
      var number = parseInt(nPointNumber / 2.56);
      var OutX = [];
      var OutY = [];
      var OutPhase = [];
      var pAlarm = 1; //计算因数：默认峰值

      switch (this.alarm_type) {
        case 0:
          //有效值
          pAlarm = Math.sqrt(2) / 2;
          break;

        case 2:
          //峰峰值
          pAlarm = 2;
          break;
      } // OutX.length = number;
      // OutY.length = number;
      // OutPhase.length = number;


      for (i = 0; i < number; i++) {
        var xi = x_arr[i + 1];
        var yi = y_arr[i + 1]; // 频率
        // OutX.push(Math.round(i * fDF * 10000) / 10000);

        OutX.push(Math.ceil(i * fDF * 100000) / 100000); // 幅值 mantis 695 *4 改为 *2
        // OutY.push(Math.round(Math.sqrt(xi * xi + yi * yi) * 2 / nPointNumber * pAlarm * 1000000) / 1000000);

        OutY.push(Math.sqrt(Math.pow(xi, 2) + Math.pow(yi, 2)) * 2 / nPointNumber * pAlarm); // 相位 (弧度)

        OutPhase.push(Math.atan2(yi, xi)); // 最大幅值

        t_fMaxFZ = Math.max(OutY[i], t_fMaxFZ);
      }

      if (t_fMaxFZ < Number.NEGATIVE_INFINITY || t_fMaxFZ > Number.POSITIVE_INFINITY) {
        t_fMaxFZ = -1;
        this.fMaxFZ = t_fMaxFZ;
        return t_fMaxFZ;
      }

      this.fMaxFZ = t_fMaxFZ;
      return [OutX, OutY, OutPhase];
    },
    offt: function offt(dir, i_dianshu_mi, x, y, i_dianshu) {
      i_dianshu = i_dianshu || 0;
      var i, j, k, l, m, l1;
      var t1, t2, u1, u2, w1, w2, p2, z; // Calculate the number of points

      if (i_dianshu == 0) {
        i_dianshu = 1;

        for (i = 0; i < i_dianshu_mi; i++) {
          i_dianshu *= 2;
        }
      } // y.length = i_dianshu + 1;


      for (i = 0; i <= i_dianshu; i++) {
        y[i] = 0;
      }

      j = 1;

      for (l = 1; l <= i_dianshu - 1; l++) {
        if (l < j) {
          t1 = x[j]; //					t2 = y[j];

          x[j] = x[l]; //					y[j] = y[l];

          x[l] = t1; //					y[l] = t2;
        }

        k = i_dianshu >> 1;

        while (k < j) {
          j -= k;
          k = k >> 1;
        }

        j = j + k;
      }

      m = 1;

      for (i = 1; i <= i_dianshu_mi; i++) {
        u1 = 1;
        u2 = 0;
        k = m;
        m = m << 1;
        p2 = Math.PI / k;
        w1 = Math.cos(p2); //				w2 = (-Math.sin(p2));
        //				w2 = -w2;

        w2 = Math.sin(p2);

        for (j = 1; j <= k; j++) {
          for (l = j; l <= i_dianshu; l += m) {
            l1 = l + k;
            t1 = x[l1] * u1 - y[l1] * u2;
            t2 = x[l1] * u2 + y[l1] * u1;
            x[l1] = x[l] - t1;
            y[l1] = y[l] - t2;
            x[l] += t1;
            y[l] += t2;
          }

          z = u1 * w1 - u2 * w2;
          u2 = u1 * w2 + u2 * w1;
          u1 = z;
        }
      }
    },
    makeFftData: function makeFftData(type, arrayY) {
      //单位转换、低频过滤、有效频率上下限等处理

      /**arrayY=单位转换后的频谱数据**/
      var t_sourceSpectrumY = [];

      if (type == 1) {
        //单位转换
        t_sourceSpectrumY = arrayY.concat();
      } else {
        t_sourceSpectrumY = this.scoreSpectrumY.concat();
      }

      var i = 0;
      var len = t_sourceSpectrumY.length;
      var tmpSpectrumY = [];
      var tmpSpectrumX = [];
      var t_hideLow = this.hide_low;
      var a_index = 0;
      var b_index = 0;
      /**低频过滤**/

      for (i = 0; i < len; i++) {
        if (t_hideLow > 0 && this.sourceSpectrumX[i] <= t_hideLow) {
          tmpSpectrumY.push(0);
        } else {
          tmpSpectrumY.push(t_sourceSpectrumY[i]);
        }
      }
      /**有效频率上下限**/


      if (this.power_a == "NaN") {
        this.power_a = 0;
      }

      if (Number(this.power_a) < Number(this.power_b) || this.power_b == 0) {
        this.isSetPower = true;
        tmpSpectrumX = this.sourceSpectrumX.concat();

        if (Number(this.power_a) < tmpSpectrumX[tmpSpectrumX.length - 1]) {
          if (this.specType == 2) {
            a_index = this.indexOfArray(tmpSpectrumX, this.power_a, 1);
          } else {
            a_index = this.indexOfArray(tmpSpectrumX, this.power_a, 1);
          }

          if (this.power_b == 0) {
            b_index = tmpSpectrumX.length;
          } else {
            if (this.specType == 2) {
              b_index = this.indexOfArray(tmpSpectrumX, this.power_b, -1) + 1;
            } else {
              b_index = this.indexOfArray(tmpSpectrumX, this.power_b, -1) + 1;
            }
          }

          if (this.flag_f_nx.val == 1) {
            tmpSpectrumX = this.freqXtrum.slice(a_index, b_index);
          } else {
            tmpSpectrumX = tmpSpectrumX.slice(a_index, b_index);
          }

          tmpSpectrumY = tmpSpectrumY.slice(a_index, b_index);
        } else {
          if (this.flag_f_nx.val == 1) {
            tmpSpectrumX = this.freqXtrum;
          }

          tmpSpectrumY = this.sourceSpectrumY;
        }
      } else {}

      this.spectrumX = tmpSpectrumX;
      this.spectrumY = tmpSpectrumY; // this.labelLineSpec();
    },
    indexOfArray: function indexOfArray(arr, value, flag) {
      //获取最匹配点的下标

      /**flag=0，最近点；flag=1，右边最近点；flag=-1，左边最近点**/
      var index = -1;
      var flag_pm = false;
      var dx = Number.POSITIVE_INFINITY;

      for (var i = 0; i < arr.length; i++) {
        switch (flag) {
          case -1:
            flag_pm = arr[i] - value <= 0 ? dx > Math.abs(arr[i] - value) : false;
            break;

          case 0:
            flag_pm = dx > Math.abs(arr[i] - value);
            break;

          case 1:
            flag_pm = arr[i] - value >= 0 ? dx > Math.abs(arr[i] - value) : false;
            break;
        }

        if (flag_pm) {
          dx = Math.abs(arr[i] - value);
          index = i;

          if (dx == 0) {
            break;
          }
        }
      }

      return index;
    },
    getUnitIndex: function getUnitIndex(unitName) {
      //根据测点名称获取测点索引
      var unitIndex = 0;

      switch (unitName) {
        case "g":
          unitIndex = 0;
          break;

        case "m/s²":
          unitIndex = 1;
          break;

        case "mm/s":
          unitIndex = 2;
          break;

        case "μm":
          unitIndex = 3;
          break;
      }

      return unitIndex;
    },
    funDownload: function funDownload(content, filename) {
      //导出文件
      var eleLink = document.createElement('a'); // 创建隐藏的可下载链接

      eleLink.download = filename;
      eleLink.style.display = 'none';
      var blob = new Blob([content]); // 字符内容转变成blob地址

      eleLink.href = URL.createObjectURL(blob);
      document.body.appendChild(eleLink); // 触发点击

      eleLink.click();
      document.body.removeChild(eleLink); // 然后移除
    },
    getPeakIndexArr: function getPeakIndexArr(yArr, count) {
      //获取最大的峰值下标

      /*yArr=频谱y数组 count=需要获取的最大下标数目*/
      if (yArr.length <= 1) {
        return [0];
      }

      var indexArr = [],
          xVal = [];
      var t_yArr = []; //构造包含索引和y最大极值的数组

      var i = 0;
      var j = 0;
      var len = yArr.length;
      var obj = {};

      if (yArr[0] > yArr[1]) {
        obj.key = 0;
        obj.value = yArr[0];
        t_yArr.push(obj);
      }

      for (i = 1; i < len - 1; i++) {
        if (yArr[i] > yArr[i - 1] && yArr[i] > yArr[i + 1]) {
          obj = {};
          obj.key = i;
          obj.value = yArr[i];
          t_yArr.push(obj);
        }
      }

      if (yArr[len - 2] < yArr[len - 1]) {
        obj = {};
        obj.key = len - 1;
        obj.value = yArr[len - 1];
        t_yArr.push(obj);
      }

      len = t_yArr.length;

      for (i = 0; i < count; i++) {
        for (j = i + 1; j < len; j++) {
          if (t_yArr[i].value < t_yArr[j].value) {
            obj = t_yArr[i];
            t_yArr[i] = t_yArr[j];
            t_yArr[j] = obj;
          }
        }
      }

      if (count > len) {
        count = len;
      }

      if (this.spectrumX.length !== this.cutSpectrum.x.length) {
        for (i = 0; i < count; i++) {
          xVal.push(this.cutSpectrum.x[t_yArr[i].key]);
        }

        for (i = 0, l = xVal.length; i < l; i++) {
          indexArr.push(this.indexOfArray(this.spectrumX, xVal[i], 0));
        }
      } else {
        for (i = 0; i < count; i++) {
          indexArr.push(t_yArr[i].key);
        }
      }

      return indexArr;
    },

    /***
     * 采样设置
     * */
    hideSampOk: function hideSampOk() {
      var _this2 = this;

      var params = null;

      if (this.chooseSampId === "") {
        swal({
          title: "提示",
          text: '请选择需要采集的测点',
          button: "确认"
        });
        return false;
      } else if (this.chooseSampFreq == "") {
        swal({
          title: "提示",
          text: '请选择分析频率',
          button: "确认"
        });
        return false;
      } else if (this.chooseSampTime == "") {
        swal({
          title: "提示",
          text: '请选择采集时间',
          button: "确认"
        });
        return false;
      }

      params = {
        dgm_id: this.selectPosition.dgm_id,
        //采集器id
        channel_id: this.chooseSampId,
        //测点所在通道id
        time: this.chooseSampTime,
        //采集时间
        freq: this.chooseSampFreq //分析频率

      };
      network_getApi__WEBPACK_IMPORTED_MODULE_3__["default"].getCaptureWaveByClick(params).then(function (res) {
        _this2.isSampAlert = false;

        if (res.msg == 0) {
          swal({
            title: "提示",
            text: '开始采集',
            button: "确认"
          });
        } else if (res.msg == 1) {
          console.log('参数为空！');
        } else if (res.msg == 2) {
          console.log('后台运行错误！');
        } else if (res.msg == 3) {
          console.log('获取json数据时为空！');
        }
      })["catch"](function (err) {
        _this2.isSampAlert = false;
        console.log('请求错误', err);
      });
    },

    /***
     * 打开采样设置弹窗
     * */
    showSampAlert: function showSampAlert() {
      this.isSampAlert = true;
    },

    /***
     * 关闭采样设置弹窗
     * */
    closeSampAlert: function closeSampAlert() {
      this.isSampAlert = false;
    },
    closeAlert: function closeAlert(t_id) {
      //关闭弹窗
      $(t_id).css({
        "display": "none"
      });
    },
    integralWave: function integralWave(t_waveY, samples, deltaT, dcCorr, t_sourceIndex) {
      //波形积分
      var i = 0;
      var result = [dcCorr];

      if (t_sourceIndex == 0) {
        for (i = 0; i < samples; i++) {
          t_waveY[i] = t_waveY[i] * 9.8;
        }
      }

      for (i = 1; i < samples; i++) {
        result[i] = result[i - 1] + (t_waveY[i] + t_waveY[i - 1]) * deltaT / 2;
      }

      return result;
    },
    waveDCOut: function waveDCOut(t_waveY, len) {
      //去直流
      var i = 0;
      var avg = 0; // 求平均值

      for (i = 0; i < len; i++) {
        avg += t_waveY[i] / len;
      } //去掉直流量


      for (i = 0; i < len; i++) {
        t_waveY[i] = t_waveY[i] - avg;
      }

      return t_waveY;
    },
    integralFft: function integralFft(t_specY, len, deltaF, t_sourceIndex) {
      //频谱积分
      var i = 0;
      var result = [0]; //首次计算时 单位是g的时候乘以9.8 不是则不乘

      var g = 1;

      if (t_sourceIndex == 0) {
        g = 9.8;
      }

      for (i = 1; i < len; i++) {
        result[i] = t_specY[i] * g * 1000 / (2 * Math.PI * deltaF * i);
      }

      return result;
    },
    labelLineWave: function labelLineWave() {
      //带标签的竖线

      /**带标签的竖线**/
      if (this.nxArrayWave.length > 0) {
        this.nxArrayWave = [];
      }

      var t_nxArray = [];
      var index = -1;
      var i = 0;
      var nx0 = -1; //锁定光标位置

      var nx1 = -1; //画周期性延展线

      var index1 = -1;
      var dx = -1; //基准线和时间差线的距离

      /**画光标线**/

      if (this.flag_subTime == 1 && this.last_xWave != null && this.last_xWave.nx0 >= 0) {
        nx0 = this.last_xWave.nx0;
        index = this.indexOfArray(this.waveX, nx0, 0);
        t_nxArray.push({
          name: nx0 + "," + this.waveY[index].toFixed(4),
          xAxis: index
        });
        this.flag_wave_extend = 1;
      } else if (this.flag_subTime == 1 && this.last_xWave.nx0 == undefined) {
        //开启时间差功能前没有点击页面，将基准线定在0的位置
        index = 0;
        t_nxArray.push({
          name: 0 + "," + this.waveY[index].toFixed(4),
          xAxis: index
        });
        this.flag_wave_extend = 1;
      }
      /**画时间差的延展线**/


      if (this.flag_wave_extend && this.flag_subTime == 1 && this.last_xWave_time != null) {
        nx1 = this.last_xWave_time.nx0;

        if (nx1 != undefined) {
          index1 = this.indexOfArray(this.waveX, nx1, 0);
          dx = Math.abs(index1 - index);

          if (dx == 0) {
            return;
          }

          var x0 = index1 % dx;

          for (var x = x0; x < this.waveX.length; x += dx) {
            if (x == index) {
              continue;
            }

            t_nxArray.push({
              name: "",
              xAxis: x,
              lineStyle: {
                color: "red"
              }
            });
          }
        }
      }

      if (t_nxArray.length > 0) {
        this.nxArrayWave = t_nxArray;
      }
    },
    labelLineSpec: function labelLineSpec() {//带标签的竖线
    },
    setRealBtn: function setRealBtn() {
      //实时数据按钮响应
      this.flag_real = Math.abs(this.flag_real - 1);
      this.$store.commit('setIsReal', this.flag_real);

      if (this.flag_real == 1) {
        //实时
        this.getRealData();
      } else {
        this.stopRealData();
      }
    },
    getRealData: function getRealData() {
      //开始获取实时数据
      var that = this; // that.searchWave(0);

      if (that.flag_real) {
        that.toggleText = '实时';
        that.chooseIsRealType = 2;
      } else {
        that.toggleText = '历史';
        that.chooseIsRealType = 1;
      }

      clearInterval(that.timer);
      that.timer = null;
      this.timer = window.setInterval(function () {
        that.searchWave(0);
      }, 5000);
    },
    stopRealData: function stopRealData() {
      //停止获取实时数据
      this.toggleText = "历史";
      var that = this;
      clearInterval(that.timer);
      that.timer = null;
    },
    setSubTime: function setSubTime() {
      //波形时间差
      var that = this;
      that.flag_subTime = Math.abs(that.flag_subTime - 1);

      if (that.flag_subTime == 1) {
        that.timeColor = '#3bb5ff';
      } else {
        that.timeColor = that.spectrumColor.font;
      }

      that.labelLineWave();
    },
    setDataExport: function setDataExport(type) {
      //数据导出 type= 1波形，2频谱
      var str = "\uFEFFX,Y\r\n"; //导出数据（中文兼容）

      var fileName = this.fileName; //导出文件名

      var i = 0;
      var len = 0;

      if (type == 1) {
        fileName += "_波形.csv";
        len = this.waveY.length;

        for (i = 0; i < len; i++) {
          str += this.sourceWaveX[i] + "," + this.waveY[i].toFixed(4) * 1 + "\r\n";
        }
      } else {
        fileName += "_频谱.csv";
        len = this.scoreSpectrumY.length;

        for (i = 0; i < len; i++) {
          str += this.sourceSpectrumX[i] + "," + this.scoreSpectrumY[i].toFixed(4) * 1 + "\r\n";
        }
      }

      this.funDownload(str, fileName);
    },
    setDisplayAll: function setDisplayAll(type) {
      //显示全部
      var maxWidth = 100 % -20;
      var waveWidth = (window.innerWidth - 320) / 2 + 'px';

      if (this.flag_show % 2 == 0) {
        switch (type) {
          case 1:
            this.showType2 = 0;
            this.showType3 = 0;
            this.titleScale1 = "返回";
            this.iconScale1 = "path://M32.8,1.3L19.8,14.2 M19.8,19.8l12.9,12.9 M1.2,1.3l12.9,12.9 M1.3,32.7l12.9-12.9 M29.5,15.2H18.9V5.3 M28.8,18.9h-9.9v10.7   M5.2,15.2h9.9V4.5 M15.1,28.8v-9.9H4.4";
            $('.wave-chart').height(this.maxHeight).width(maxWidth + 'px').resize();

            if (this.xIndexWave) {
              this.wave_chart.dispatchAction({
                type: 'showTip',
                // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                seriesIndex: 0,
                // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                dataIndex: this.xIndexWave
              });
            }

            this.flag_show++;
            break;

          case 2:
            this.showType1 = 0;
            this.showType3 = 0;
            this.titleScale2 = "返回";
            this.iconScale2 = "path://M32.8,1.3L19.8,14.2 M19.8,19.8l12.9,12.9 M1.2,1.3l12.9,12.9 M1.3,32.7l12.9-12.9 M29.5,15.2H18.9V5.3 M28.8,18.9h-9.9v10.7   M5.2,15.2h9.9V4.5 M15.1,28.8v-9.9H4.4";
            $('.wave-chart').height(this.maxHeight).width(maxWidth + 'px').resize();

            if (this.xIndex) {
              this.chart.dispatchAction({
                type: 'showTip',
                // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                seriesIndex: 0,
                // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                dataIndex: this.xIndex
              });
            }

            this.flag_show++;
            break;

          case 3:
            this.showType1 = 0;
            this.showType2 = 0;
            this.titleScale3 = "返回";
            this.iconScale3 = "path://M32.8,1.3L19.8,14.2 M19.8,19.8l12.9,12.9 M1.2,1.3l12.9,12.9 M1.3,32.7l12.9-12.9 M29.5,15.2H18.9V5.3 M28.8,18.9h-9.9v10.7   M5.2,15.2h9.9V4.5 M15.1,28.8v-9.9H4.4";
            $('.wave-chart').height(this.maxHeight).width(maxWidth + 'px').resize();

            if (this.xIndex_history) {
              this.his_chart.dispatchAction({
                type: 'showTip',
                // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                seriesIndex: 0,
                // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                dataIndex: this.xIndex_history
              });
            }

            this.flag_show++;
            break;

          default:
            break;
        }
      } else {
        this.titleScale1 = "最大化";
        this.iconScale1 = "path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7";
        this.titleScale2 = "最大化";
        this.iconScale2 = "path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7";
        this.titleScale3 = "最大化";
        this.iconScale3 = "path://M18.9,15.2L31.8,2.2 M31.8,31.8L18.9,18.9 M15.1,15.2L2.2,2.2 M15.1,18.9L2.2,31.8 M22.1,1.3h10.7v9.9 M22.8,32.7h9.9V22.1   M11.1,1.3H1.2v10.7 M1.3,22.8v9.9h10.7";
        $('.wave-chart').show();
        this.showType1 = 1;
        this.showType2 = 2;
        this.showType3 = 3;
        $('.wave-chart').height(this.waveRestoreHeight).width(waveWidth).resize();
        $('.wave-chart:nth-child(3)').height(this.historyRestoreHeight).width(maxWidth + 'px').resize();

        if (this.xIndexWave) {
          this.wave_chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: 0,
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: this.xIndexWave
          });
        }

        if (this.xIndex) {
          this.chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: 0,
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: this.xIndex
          });
        }

        if (this.xIndex_history) {
          this.his_chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: 0,
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: this.xIndex_history
          });
        }

        this.flag_show++;
      }
    },
    setAudioExport: function setAudioExport() {
      //音频导出
      var i = 0;
      var max = Number.MIN_VALUE;
      var frequency = this.maxFreq; //采样频率

      var pointSize = 16; //采样点大小

      var channelNumber = 1; //声道数量

      var blockSize = channelNumber * pointSize / 8; //采样块大小

      var wave = this.sourceWaveY.concat(); //数据

      var length = wave.length * pointSize / 8; //数据长度

      var buffer = new Uint8Array(length + 44); //wav文件数据

      var view = new DataView(buffer.buffer); //数据视图

      buffer.set(new Uint8Array([0x52, 0x49, 0x46, 0x46])); //"RIFF"

      view.setUint32(4, wave.length + 44, true); //总长度

      buffer.set(new Uint8Array([0x57, 0x41, 0x56, 0x45]), 8); //"WAVE"

      buffer.set(new Uint8Array([0x66, 0x6D, 0x74, 0x20]), 12); //"fmt "

      view.setUint32(16, 16, true); //WAV头大小

      view.setUint16(20, 1, true); //编码方式

      view.setUint16(22, 1, true); //声道数量

      view.setUint32(24, frequency, true); //采样频率

      view.setUint32(28, frequency * blockSize, true); //每秒字节数

      view.setUint16(32, blockSize, true); //采样块大小

      view.setUint16(34, pointSize, true); //采样点大小

      buffer.set(new Uint8Array([0x64, 0x61, 0x74, 0x61]), 36); //"data"

      view.setUint32(40, length, true); //数据长度

      for (i = 0; i < wave.length; i++) {
        if (Math.abs(wave[i]) > max) {
          max = Math.abs(wave[i]);
        }
      }

      if (max == 0) {
        //波形坐标轴最小刻度为0.001
        max = 0.0001;
      }

      var xs = 32760 / max; //放大系数:short/max，short范围(-32768~32767)

      for (i = 0; i < wave.length; i++) {
        wave[i] = Math.round(wave[i] * xs); //数据
      }

      buffer.set(new Uint8Array(new Int16Array(wave).buffer), 44); //数据

      var fileName = this.fileName + "_音频.wav"; //导出文件名

      this.funDownload(buffer, fileName);
    },
    showUnitSelect: function showUnitSelect(type) {
      //单位选择 type= 1波形，2频谱,3趋势
      this.unitType = type;
      console.log(this.unitType);

      if (type == 1) {
        this.unitSelect = this.unitWave;
        this.unitSrc = this.srcUnitWave;
      } else if (type == 2) {
        this.unitSelect = this.unitSpec;
        this.unitSrc = this.srcUnitSpec;
      } else if (type == 3) {
        this.unitSelect = this.unitTrend;
        this.unitSrc = this.srcUnitTrend;
      }

      $("#unitSelect_alert").css({
        "display": "block"
      });
    },
    unitSelectOk: function unitSelectOk(t_id) {
      //确定
      this.setUnitSelect(this.unitSelect);
      this.closeAlert(t_id);
    },
    makeFilterWave: function makeFilterWave(dPi, outY) {
      //计算滤波波形
      var i = 0;
      var j = 0;
      var fftObj = {};
      var outX = this.srcSpectrum.outX.slice(0);
      var outP = this.srcSpectrum.outP.slice(0);
      var len = outY.length;

      for (i = 0; i < len; i++) {
        if (outX[i] < this.sc_power_a) {
          //低于最低取0
          outY[i] = 0;
        } else {
          break;
        }
      }

      if (len <= 6400) {
        fftObj.outY = outY.slice(0);
        fftObj.outX = outX.slice(0);
        fftObj.outP = outP.slice(0);
      } else {
        var indexArr = this.getMaxIndexArr(outY, 6400);
        var t_outY = [];
        var t_outX = [];
        var t_outP = [];

        for (j = 0; j < indexArr.length; j++) {
          i = indexArr[j];
          t_outY.push(outY[i]);
          t_outX.push(outX[i]);
          t_outP.push(outP[i]);
        }

        fftObj.outY = t_outY.slice(0);
        fftObj.outX = t_outX.slice(0);
        fftObj.outP = t_outP.slice(0);
      }

      this.countSpectrum = fftObj;
      this.makeWave();
    },
    getMaxIndexArr: function getMaxIndexArr(outY, len) {
      //获取最大值数组的索引表
      var i = 0;
      var indexArr = []; //需要返回的索引表

      if (len == 0 || outY == null || outY.length <= len) {
        return indexArr;
      }
      /**outY.length > len处理**/


      var minIndexs = []; //存储最大值中最小值的索引表（应对重复数据）

      var arr = outY.slice(0);
      /**按数值冒泡（升序）排序，只排末尾最大的len个点**/

      var t = 0;

      for (i = 0; i < len; i++) {
        for (j = 0; j < outY.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
          }
        }
      }

      var baseValue = arr[arr.length - len]; //最大值中最小的

      for (i = 0; i < outY.length; i++) {
        if (outY[i] > baseValue) {
          indexArr.push(i);
          continue;
        }

        if (outY[i] == baseValue) {
          minIndexs.push(i);
          continue;
        }
      }

      for (var j = 0; j < len - indexArr.length; j++) {
        i = minIndexs.pop();
        indexArr.push(i);
      }

      return indexArr;
    },
    makeWave: function makeWave() {
      //构造波形
      var i = 0;
      var j = 0;
      var len = this.countSpectrum.outY.length;
      var t_waveY = []; //需要返回的波形

      for (i = 0; i < this.samples; i++) {
        t_waveY.push(0);
      }

      for (j = 0; j < len; j++) {
        if (this.countSpectrum.outY[j] > 0) {
          var x_1 = 2 * Math.PI * this.countSpectrum.outX[j];

          for (i = 0; i < this.samples; i++) {
            var x = i / this.maxFreq * x_1 + this.countSpectrum.outP[j];
            var value = this.countSpectrum.outY[j] * Math.sin(x);
            t_waveY[i] += value;
          }
        }
      }

      this.waveY = t_waveY;
    },
    makeWaveY: function makeWaveY(t_waveY, freq) {
      //波形一次积分算法
      var fs = freq;
      var dt = 1 / fs;
      var t = [];
      var i = 0;

      for (i = 0; i < t_waveY.length; i++) {
        t.push(dt * i);
      }

      var x = t_waveY; // for (i = 0; i < t_waveY; i++) {
      //     x.push(Math.sin(2*Math.PI*160*t[i]));
      // }

      var N = x.length;
      this.waveDCOut(x, N);
      var y = [];

      for (i = 0; i < x.length - 1; i++) {
        y[0] = 0;
        y[i + 1] = Number(y[i]) + (Number(x[i + 1]) + Number(x[i])) / 2 / fs * 1000;
      }

      var xx = [[], []];
      xx[0][0] = N;
      xx[0][1] = this.sum(t);
      xx[1][0] = this.sum(t);
      var t_2 = [];
      var t_y = [];

      for (i = 0; i < t.length; i++) {
        t_2[i] = Number(t[i]) * Number(t[i]);
        t_y[i] = Number(t[i]) * Number(y[i]);
      }

      xx[1][1] = this.sum(t_2);
      var yy = [this.sum(y), this.sum(t_y)];

      var _xx = this.inverse(xx);

      var cof_1_1 = _xx[0][0] * yy[0] + _xx[0][1] * yy[1];
      var cof_2_1 = _xx[1][0] * yy[0] + _xx[1][1] * yy[1];

      for (i = 0; i < t.length - 1; i++) {
        y[i] = y[i] - (cof_2_1 * t[i] + cof_1_1);
      }

      return y;
    },
    GaussJordanEliminate: function GaussJordanEliminate(m, epsilon) {
      // Translated from:
      // http://elonen.iki.fi/code/misc-notes/python-gaussj/index.html
      var eps = typeof epsilon === 'undefined' ? 1e-10 : epsilon;
      var h = m.length;
      var w = m[0].length;
      var y = -1;
      var y2, x, c;

      while (++y < h) {
        // Pivot.
        var maxrow = y;
        y2 = y;

        while (++y2 < h) {
          if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) maxrow = y2;
        }

        var tmp = m[y];
        m[y] = m[maxrow];
        m[maxrow] = tmp; // Singular

        if (Math.abs(m[y][y]) <= eps) {
          return m;
        } // Eliminate column


        y2 = y;

        while (++y2 < h) {
          c = m[y2][y] / m[y][y];
          x = y - 1;

          while (++x < w) {
            m[y2][x] -= m[y][x] * c;
          }
        }
      } // Backsubstitute.


      y = h;

      while (--y >= 0) {
        c = m[y][y];
        y2 = -1;

        while (++y2 < y) {
          x = w;

          while (--x >= y) {
            m[y2][x] -= m[y][x] * m[y2][y] / c;
          }
        }

        m[y][y] /= c; // Normalize row

        x = h - 1;

        while (++x < w) {
          m[y][x] /= c;
        }
      }

      return m;
    },
    inverse: function inverse(m) {
      //求逆矩阵的方法
      var n = m.length,
          identity = this.identity(n),
          i; // AI

      for (i = 0; i < n; i++) {
        m[i] = m[i].concat(identity[i]);
      } // inv(IA)


      m = this.GaussJordanEliminate(m); // inv(A)

      for (i = 0; i < n; i++) {
        m[i] = m[i].slice(n);
      }

      return m;
    },
    identity: function identity(n) {
      var result = new Array(n);

      for (var i = 0; i < n; i++) {
        result[i] = new Array(n);

        for (var j = 0; j < n; j++) {
          result[i][j] = i === j ? 1 : 0;
        }
      }

      return result;
    },
    sum: function sum(arr) {
      //数组求和
      var s = 0;
      arr.forEach(function (val, idx, arr) {
        s += val;
      }, 0);
      return s;
    },
    setUnitSelect: function setUnitSelect(value, type) {
      //单位选择 type= 1波形，2频谱，3趋势
      this.changePos = false;
      var sourceIndex = -1;
      var oldIndex = -1;
      var newIndex = -1;
      var i = 0;
      var len = 0;
      var t_waveY = [];
      var t_specY = [];

      if (!type) {
        type = this.unitType;
      }

      if (type == 1) {
        // 波形
        sourceIndex = this.getUnitIndex(this.srcUnitWave);
        oldIndex = this.getUnitIndex(this.unitWave);
        newIndex = this.getUnitIndex(value);
        len = this.sourceWaveY.length;

        if (oldIndex != newIndex && (sourceIndex <= newIndex || sourceIndex == 1)) {
          if (sourceIndex == newIndex) {
            this.waveY = this.sourceWaveY.concat();
          } else if (newIndex == 0) {
            if (sourceIndex == 1) {
              for (i = 0; i < len; i++) {
                t_waveY.push(this.sourceWaveY[i] / 9.8);
              }
            }

            this.waveY = t_waveY;
          } else if (newIndex == 1) {
            if (sourceIndex == 0) {
              for (i = 0; i < len; i++) {
                t_waveY.push(this.sourceWaveY[i] * 9.8);
              }
            }

            this.waveY = t_waveY;
          } else if (newIndex == 2) {
            this.waveY = this.makeWaveY(this.sourceWaveY, this.maxFreq);
          } else if (newIndex == 3) {
            if (sourceIndex < 2) {
              t_waveY = this.makeWaveY(this.sourceWaveY, this.maxFreq);
            } else {
              t_waveY = this.sourceWaveY;
            }

            this.waveY = this.makeWaveY(t_waveY, this.maxFreq);
          }

          this.unitWave = value;
        }
      } else if (type == 2) {
        //频谱
        sourceIndex = this.getUnitIndex(this.srcUnitSpec);
        oldIndex = this.getUnitIndex(this.unitSpec);
        newIndex = this.getUnitIndex(value);
        len = this.sourceSpectrumY.length;

        if (oldIndex != newIndex && sourceIndex <= newIndex || sourceIndex == 1) {
          if (sourceIndex == newIndex) {
            t_specY = this.sourceSpectrumY.concat();
            this.makeFftData(1, t_specY);
          } else if (newIndex == 0) {
            if (sourceIndex == 1) {
              for (i = 0; i < len; i++) {
                t_specY.push(this.sourceSpectrumY[i] / 9.8);
              }
            }

            this.makeFftData(1, t_specY);
          } else if (newIndex == 1) {
            if (sourceIndex == 0) {
              for (i = 0; i < len; i++) {
                t_specY.push(this.sourceSpectrumY[i] * 9.8);
              }
            }

            this.makeFftData(1, t_specY);
          } else if (newIndex == 2) {
            t_specY = this.integralFft(this.sourceSpectrumY.concat(), len, this.maxFreq / this.samples, sourceIndex);
            this.makeFftData(1, t_specY);
          } else if (newIndex == 3) {
            if (sourceIndex < 2) {
              t_specY = this.integralFft(this.sourceSpectrumY.concat(), len, this.maxFreq / this.samples, sourceIndex);
            } else {
              t_specY = this.sourceSpectrumY.concat();
            }

            t_specY = this.integralFft(t_specY.concat(), len, this.maxFreq / this.samples, 2);
            this.makeFftData(1, t_specY);
          }

          this.scoreSpectrumY = t_specY;
          this.unitSpec = value;
        }
      } else if (type == 3) {
        // 趋势
        sourceIndex = this.getUnitIndex(this.srcUnitTrend);
        oldIndex = this.getUnitIndex(this.unitTrend);
        newIndex = this.getUnitIndex(value);
        len = this.historyY.length;

        if (oldIndex != newIndex && sourceIndex <= newIndex || sourceIndex == 1) {
          if (sourceIndex == newIndex) {
            t_specY = this.sourceHistoryY.concat();
          } else if (newIndex == 0) {
            if (sourceIndex == 1) {
              for (i = 0; i < len; i++) {
                t_specY.push(this.historyY[i] / 9.8);
              }
            }
          } else if (newIndex == 1) {
            if (sourceIndex == 0) {
              for (i = 0; i < len; i++) {
                t_specY.push(this.historyY[i] * 9.8);
              }
            }
          } else {
            this.unitTrend = value;
            return;
          }

          this.historyY = t_specY;
          this.unitTrend = value;
        }
      }
    },
    setDouble_sub_freq: function setDouble_sub_freq() {
      //对称频率差
      this.flag_subFreq = Math.abs(this.flag_subFreq - 1); // this.labelLineSpec();
    },
    showGate: function showGate() {
      //显示闸门
      this.flag_showGate = Math.abs(this.flag_showGate - 1);

      if (this.flag_showGate) {
        this.gateText = '开启闸门';
      } else {
        this.gateText = '关闭闸门';
      }
    },
    setSrcSpectrum: function setSrcSpectrum() {
      //计算原始频谱，不做汉宁窗，用于计算波形
      var tmpWaveY = [];
      var sum = 0;
      var aver = 0;
      var len = 1;
      var freq = this.maxFreq;
      var spectral = this.waveY.length; //data.getNumberFromConfig("spectral") * 2.56

      var mi = 0;
      var k = Math.floor(Math.log(spectral) / Math.LN2);
      var waveY = this.waveY.concat();

      if (Math.pow(2, k) === waveY.length) {
        for (; spectral > 1; spectral >>= 1) {
          mi++;
        }

        for (i = 0; i < mi; i++) {
          len = len * 2;
        }

        for (i = 0; i < len; i++) {
          tmpWaveY.push(this.waveY[i]);
        }

        if (tmpWaveY.length > 0) {
          for (i = 0; i < tmpWaveY.length; i++) {
            sum += tmpWaveY[i];
          }

          aver = sum / tmpWaveY.length;

          for (i = 0; i < tmpWaveY.length; i++) {
            tmpWaveY[i] -= aver;
          }
        }
      } else {
        var dValue = Math.pow(2, k + 1) - waveY.length;
        var d2 = dValue / 2;
        var before = [],
            after = [];

        for (var i = 0; i < dValue; i++) {
          i < d2 ? before.push(0) : after.push(0);
        }

        tmpWaveY = before.concat(waveY, after);
        len = tmpWaveY.length;
        mi = k + 1;
      }

      var specturm_data = this.waveFFT(tmpWaveY, freq, 0, len, mi);
      this.srcSpectrum = {};
      this.srcSpectrum.outX = specturm_data[0];
      this.srcSpectrum.outY = specturm_data[1];
      this.srcSpectrum.outP = specturm_data[2];
    },
    setHanning: function setHanning() {
      this.flag_winFunc = Math.abs(this.flag_winFunc - 1);
      var i = 0;
      var tmpWaveY = [];
      var sum = 0;
      var aver = 0;
      var len = 1;
      var freq = this.maxFreq;
      var spectral = this.waveY.length; //data.getNumberFromConfig("spectral") * 2.56

      var mi = 0;
      var k = Math.floor(Math.log(spectral) / Math.LN2);
      var waveY = this.waveY.concat();

      if (Math.pow(2, k) === waveY.length) {
        for (; spectral > 1; spectral >>= 1) {
          mi++;
        }

        for (i = 0; i < mi; i++) {
          len = len * 2;
        }

        for (i = 0; i < len; i++) {
          tmpWaveY.push(this.waveY[i]);
        }

        if (tmpWaveY.length > 0) {
          for (i = 0; i < tmpWaveY.length; i++) {
            sum += tmpWaveY[i];
          }

          aver = sum / tmpWaveY.length;

          for (i = 0; i < tmpWaveY.length; i++) {
            tmpWaveY[i] -= aver;
          }
        }
      } else {
        var dValue = Math.pow(2, k + 1) - waveY.length;
        var d2 = dValue / 2;
        var before = [],
            after = [];

        for (var i = 0; i < dValue; i++) {
          i < d2 ? before.push(0) : after.push(0);
        }

        tmpWaveY = before.concat(waveY, after);
        len = tmpWaveY.length;
        mi = k + 1;
      }

      if (this.flag_winFunc == 1) {
        for (i = 0; i < len; i++) {
          tmpWaveY[i] = tmpWaveY[i] * (0.5 - 0.5 * Math.cos(2 * Math.PI * i / len));
        }
      }

      var tmpSpectrumY = [];
      var specturm_data = this.waveFFT(tmpWaveY, freq, 0, len, mi);
      tmpSpectrumY = specturm_data[1];
      len = tmpSpectrumY.length;

      if (this.flag_winFunc == 1) {
        //加汉宁窗后，幅值补偿
        for (i = 0; i < len; i++) {
          tmpSpectrumY[i] *= 2;
        }

        if (this.fMaxFZ != -1) {
          this.fMaxFZ *= 2;
        }
      }

      this.sourceSpectrumX = specturm_data[0];
      this.sourceSpectrumY = tmpSpectrumY;
      this.scoreSpectrumY = tmpSpectrumY;
      this.spectrumX = specturm_data[0];
      this.spectrumY = tmpSpectrumY;
      var freqXtrumValue = 0;
      this.freqXtrum = [];

      if (this.rotateSpeed != 0) {
        for (var j = 0; j < this.sourceSpectrumX.length; j++) {
          freqXtrumValue = Math.round(this.sourceSpectrumX[j] * 60 / this.rotateSpeed * 10000) / 10000;
          this.freqXtrum.push(freqXtrumValue);
        }
      } else {
        this.freqXtrum = specturm_data[0];
      }

      this.allToCurPower();
      this.makeFftData(2);

      if (this.unitSpec != this.srcUnitSpec) {
        var newUnitSpec = this.unitSpec;
        this.unitSpec = this.srcUnitSpec;
        this.setUnitSelect(newUnitSpec, 2);
      }
      /*当点击汉宁窗时，数据会重汇，导致tooltip会消失。现处理为当启用峰值停靠时取消tooltip,当关闭峰值停靠时重新tooltip*/

      /*if(this.flag_addPeak){
      this.click_peak = "click";
      if(this.xIndex>0){
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: this.xIndex,
      });
      }
      setTimeout(function(){
      this.click_peak = "none";
      },1000);
      }else {
      if(this.xIndex>0){
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: this.xIndex,
      });
      }
      }*/

    },
    setFreq_or_nx: function setFreq_or_nx(type) {
      //切换阶比
      this.changePos = false;
      this.changeTrend = false;
      this.flag_f_nx.val = Math.abs(this.flag_f_nx.val - 1);

      if (this.rotateSpeed == 0) {
        swal({
          title: "提示",
          text: '转速为0，切换为阶比功能不可用',
          button: "确认"
        });
        this.flag_f_nx.val = 0;
        return;
      } else if (this.rotateSpeed == 1000000000) {
        if (type !== 2) {
          swal({
            title: "提示",
            text: '无转速，切换为阶比功能不可用',
            button: "确认"
          });
        }

        this.flag_f_nx.val = 0;
        return;
      } else if (this.rotateSpeed != 0 && this.posOrderList.includes(Number(this.selectPosition.pos_type))) {
        swal({
          title: "提示",
          text: '已为阶比，切换为阶比功能不可用',
          button: "确认"
        });
        this.flag_f_nx.val = 0;
        return;
      } else {
        if (this.flag_f_nx.val == 1) {
          //阶比
          this.spectrumStyle = 'bar-line';
          this.unitXSpec = 'NX';
          this.spectrumX = this.freqXtrum;
          /*this.setIntervalNum();
          if(this.spectrumX.length>50000){
          this.spectrumStyle = 'line';
          // /!*this.specturmOption.series[0].large = true;*!/
          }else{
          this.spectrumStyle = 'bar-line';
          /!*if(this.specturmOption.series[0].large){
          delete this.specturmOption.series[0].large;
          }*!/
          }*/

          this.flag_f_nx.isChange = true;
        } else {
          this.spectrumStyle = 'line';
          this.unitXSpec = 'Hz';
          this.spectrumX = this.sourceSpectrumX; // this.setIntervalNum();

          /*if (this.specturmOption.series[0].large) {
          delete this.specturmOption.series[0].large;
          }*/

          this.flag_f_nx.isChange = false;
        }
      } // console.log(this.specturmOption.series[0]);

      /*当点击切换阶比时，数据会重汇，导致tooltip会消失。现处理为当启用峰值停靠时取消tooltip,当关闭峰值停靠时重新tooltip*/


      if (this.flag_f_nx.val) {
        this.name_type = "倍频";
        this.failureUnit_detail = "NX";
      }

      this.makeFftData(2);
      /*this.$nextTick(function () {
      if(this.power_a=="NaN"){
        this.power_a = 0;
      }
      // this.setPowerRms(this.power_a,this.power_b);
      /!*this.failureOk();*!/
      if(this.click_num>1){
        this.failureOk();
      }
      setTimeout(function () {
        if(this.clickNum!=3){
            if(this.flag_addPeak){
                this.click_peak = "click";
                if(this.xIndex>0){
                    this.chart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: this.xIndex,
                    });
                }
                setTimeout(function(){
                    this.click_peak = "none";
                },1000);
            }
            else {
                if(this.xIndex>0){
                    this.chart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: this.xIndex,
                    });
                }
            }
        }
      })
      });*/
    },
    setTo_1_X: function setTo_1_X() {//定位1倍频

      /*if (this.rotateSpeed == 0) { //如果转速为0，定位一倍频功能不可用
      // this.flag_oneF = 0;
      swal('转速为0，定位1倍频功能不可用！');
      } else {
      this.flag_oneF = Math.abs(this.flag_oneF - 1);
      this.labelLineSpec();
      }*/
    },
    showHideLow: function showHideLow() {
      //显示低频过滤设置窗口
      $("#hide_low_alert").css({
        "display": "block"
      }); // this.hideLowOk();
    },
    hideLowOk: function hideLowOk(t_id) {
      //确定
      // this.setHideLow(this.hide_low);
      this.changePos = false;
      this.changeTrend = false;

      if (Number(this.power_a) > Number(this.power_b) && this.power_b != 0) {
        return;
      }

      for (var i = 0, _l4 = this.allPos.length; i < _l4; i++) {
        if (this.selectPositionId.split('_')[0] == this.allPos[i].type && this.selectPositionId.split('_')[1] == this.allPos[i].id) {
          this.sourceAllPower[i].a = this.power_a;
          this.sourceAllPower[i].b = this.power_b;
          break;
        }
      }

      this.setPowerRms(this.power_a, this.power_b);
      this.closeAlert(t_id);
    },
    showPowerRms: function showPowerRms() {
      //有效频率上下限窗口
      if (this.power_a == -1) {
        this.power_a = 0;
      }

      $("#powerRms_alert").css({
        "display": "block"
      });
    },
    powerRmsOk: function powerRmsOk(t_id) {
      //确定
      this.changePos = false;
      this.changeTrend = false;

      if (Number(this.power_a) > Number(this.power_b) && this.power_b != 0) {
        return;
      }

      for (var i = 0, _l5 = this.allPos.length; i < _l5; i++) {
        if (this.selectPositionId.split('_')[0] == this.allPos[i].type && this.selectPositionId.split('_')[1] == this.allPos[i].id || this.allPos[i].name === this.curPosFlag.name && this.allPos[i].ppid == this.curPosFlag.ppid) {
          this.sourceAllPower[i].a = this.power_a;
          this.sourceAllPower[i].b = this.power_b;
          break;
        }
      }

      this.setPowerRms(this.power_a, this.power_b);
      /*当启用有效频率差时，标注倍频的点如果超出范围应该过滤掉*/

      /*var rms_labelList = [];
      for(var i=0;i<this.labelList.length;i++){
      if(this.spectrumX[Number(this.labelList[i].coord[0])]>this.spectrumX[this.spectrumX.length-1] || this.spectrumX[Number(this.labelList[i].coord[0])]< this.spectrumX[0] ){
      continue;
      }
      else{
      rms_labelList.push(this.labelList[i]);
      }
      }
      this.labelList = rms_labelList;*/

      this.closeAlert(t_id);
      /*当点有效频率时，数据会重汇，导致tooltip会消失。现处理为当启用峰值停靠时取消tooltip,当关闭峰值停靠时重新tooltip*/
      // this.locationIndex();
    },
    setPowerRms: function setPowerRms(a, b) {
      //设置有效频率上下限
      this.power_a = a;
      this.power_b = b;
      this.peakIndexArr.length = 0;
      this.autoPeakNum = -1;
      $($('.tool_list > li')[9]).removeClass("active");
      this.labelLineSpec();
      this.makeFftData(2); // this.setIntervalNum();
    },
    setLabel_nx: function setLabel_nx() {
      //标注倍频
      this.flag_nx = Math.abs(this.flag_nx - 1); // this.labelLineSpec();
    },
    setAuto_tip: function setAuto_tip() {//循环寻峰
      // this.peakIndexArr = this.getPeakIndexArr(this.spectrumY,10);

      /*this.peakIndexArr = this.getPeakIndexArr(this.cutSpectrum.y,10);
      this.autoPeakNum++;
      if(this.autoPeakNum >= 10){
      this.autoPeakNum = -1;
      }
      this.labelLineSpec();*/
    },
    setAdd_label: function setAdd_label() {
      //添加标注
      this.flag_addLabel = Math.abs(this.flag_addLabel - 1);
    },
    setClear_label: function setClear_label() {
      //取消所有标注
      this.labelList = new Array();
    },
    setPeak_nx: function setPeak_nx() {
      this.flag_addPeak = !this.flag_addPeak;
      this.peak_tooltip();
    },
    peak_tooltip: function peak_tooltip() {
      if (this.flag_addPeak) {
        this.click_peak = "none";
      } else {
        this.click_peak = "click";
      }
    },
    timetrans: function timetrans(date) {
      var date = new Date(date); //如果date为10位不需要乘1000

      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    keepPage: function keepPage() {
      var that = this;

      if (that.selectMachine && that.selectPosition) {
        that.fileName = that.selectMachine.mac_me + '_' + that.selectPosition.pos_name;
        var fileName = that.fileName + "_深入分析图.png"; //导出文件名
        // console.log(fileName);

        setTimeout(function () {
          var canvas2 = document.createElement("canvas");

          var _canvas = document.querySelector('.line_box');

          if (_canvas) {
            var w = parseInt(window.getComputedStyle(_canvas).width);
            var h = parseInt(window.getComputedStyle(_canvas).height); //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了

            canvas2.width = w * 2;
            canvas2.height = h * 2;
            canvas2.style.width = w + "px";
            canvas2.style.height = h + "px"; //context的参数修改,translate指的是偏移量

            var context = canvas2.getContext("2d");
            context.scale(2, 2);
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.querySelector('.line_box'), {
              backgroundColor: that.backgroundColor
            }, {
              canvas: canvas2
            }).then(function (canvas) {
              //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
              if (document.querySelector("#keep_download") != undefined) {
                document.querySelector("#keep_download").setAttribute('href', canvas.toDataURL());
                document.querySelector("#keep_download").setAttribute('download', fileName);
              }
            });
            $('#keep_download').click();
          }
        }, 600);
      }
    },
    showFailureAlert: function showFailureAlert() {
      this.click_num = Number(this.click_num + 1);

      if (this.click_num == 1) {
        //如果是第一次点击，发电机输入轴转速初始化为rpm
        this.freq_speed_failure = this.rotateSpeed;
        this.failureOk();
      }

      if (this.selectPosition.dgm_type == 2) {
        $('#failure_alert').css('display', 'none');
        $('#failure_alert_dolt').css('display', 'block');
      } else {
        $('#failure_alert_dolt').css('display', 'none');
        $('#failure_alert').css('display', 'block');
      }
    },
    setFailure_alert: function setFailure_alert() {
      //故障频率弹窗
      $('#failure_detail_alert').css('display', 'block');
    },
    clear_failure: function clear_failure(t_id) {
      this.failureList = [];
      this.nxArraySpec = [];
      $('#failure_alert_dolt').css('display', 'none');
    },
    failureOk: function failureOk() {
      //确定
      this.failureList = [];
      this.failureList_detail = [];
      var i = 0;
      var j = 0;
      var t_num = 0;
      var t_x = 0; //计算频率

      var t_index = 0; //索引

      var t_child = {};
      var t_item = {};
      var t_obj = {};
      var flag_checked = false;
      var xArr = this.sourceSpectrumX;
      /**叶片的情况**/

      if (this.selectPosition.dgm_type == 2) {
        this.failureList = [];
        var freq_value;
        var blade_index;
        var blade_x;
        var blade_y;

        for (var k = 0; k < 6; k++) {
          var blade_obj = {};
          freq_value = Number($("#freq" + k).val().trim());

          if (freq_value < xArr[xArr.length - 1] || freq_value == xArr[xArr.length - 1]) {
            blade_index = this.indexOfArray(xArr, freq_value, 0);
            blade_x = Number(xArr[blade_index]).toFixed(2);
            blade_y = Number(this.sourceSpectrumY[blade_index]).toFixed(5);
            blade_obj.id = k;
            blade_obj.num = "BPF" + "." + (k + 1);
            blade_obj.name = "通过频率" + (k + 1);
            blade_obj.index = blade_index;
            blade_obj.x = blade_x;
            blade_obj.y = blade_y;
            this.failureList.push(blade_obj);
          }
        }
      } else {
        //非叶片的情况
        var t_curSpeedRate = 1;

        if (this.specType == 2 && this.isPosVibSeries(this.selectPosition.position_type)) {
          t_curSpeedRate = this.selectPosition.speedRate;
        }

        if (this.gearList[0].state == true && this.gearList[0].children.length > 0) {
          t_num = 0;
          /* console.log(this.gearList[0]);*/

          for (i = 0; i < this.gearList[0].children.length; i++) {
            t_child = this.gearList[0].children[i];

            if (t_child.state == false) {
              continue;
            }

            for (j = 0; j < t_child.children.length; j++) {
              t_item = t_child.children[j];

              if (t_item.state == false) {
                continue;
              }

              t_num++;
              t_obj = {};
              t_obj.id = t_item.id;
              t_obj.num = t_item.type + "." + t_num;
              t_obj.name = t_child.name + "/" + t_item.name;

              if (this.specType == 2) {
                t_x = t_item.value * t_item.speedRate / t_curSpeedRate;
              } else if (this.flag_f_nx.isChange) {
                t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / this.rotateSpeed;
                xArr = this.freqXtrum;
              } else {
                t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / 60;
              }

              if (t_x <= xArr[xArr.length - 1]) {
                t_index = this.indexOfArray(xArr, t_x, 0);
                t_obj.index = t_index;
                t_obj.x = Number(xArr[t_index]).toFixed(2);
                t_obj.y = Number(this.sourceSpectrumY[t_index]).toFixed(5);
                this.failureList.push(t_obj);
              }
            }
          }
        }

        if (this.bearList[0].state == true && this.bearList[0].children.length > 0) {
          t_num = 1;

          for (i = 0; i < this.bearList[0].children.length; i++) {
            t_child = this.bearList[0].children[i];

            if (t_child.state == false) {
              continue;
            }

            flag_checked = false;

            for (j = 0; j < t_child.children.length; j++) {
              t_item = t_child.children[j];

              if (t_item.state == false) {
                continue;
              }

              t_obj = {};
              t_obj.id = t_item.id;
              t_obj.num = t_item.type + "." + t_num;
              t_obj.name = t_child.name + "/" + t_item.name;

              if (this.specType == 2) {
                t_x = t_item.value * t_item.speedRate / t_curSpeedRate;
              } else if (this.flag_f_nx.isChange) {
                t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / this.rotateSpeed;
                xArr = this.freqXtrum;
              } else {
                t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / 60;
              }

              if (t_x <= xArr[xArr.length - 1]) {
                t_index = this.indexOfArray(xArr, t_x, 0);
                t_obj.index = t_index;
                t_obj.x = Number(xArr[t_index]).toFixed(2);
                t_obj.y = Number(this.sourceSpectrumY[t_index]).toFixed(5);
                this.failureList.push(t_obj);
              }

              flag_checked = true;
            }

            if (flag_checked) {
              t_num++;
            }
          }
        }

        if (this.speedList[0].state == true && this.speedList[0].children.length > 0) {
          t_num = 0;

          for (j = 0; j < this.speedList[0].children.length; j++) {
            t_item = this.speedList[0].children[j];

            if (t_item.state == false) {
              continue;
            }

            t_num++;
            t_obj = {};
            t_obj.id = t_item.id;
            t_obj.num = t_item.type + "." + t_num;
            t_obj.name = t_item.name;

            if (this.specType == 2) {
              t_x = t_item.value * t_item.speedRate / t_curSpeedRate;
            } else if (this.flag_f_nx.isChange) {
              t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / this.rotateSpeed;
              xArr = this.freqXtrum;
            } else {
              t_x = t_item.value * t_item.speedRate * this.freq_speed_failure / 60;
            }

            if (t_x <= xArr[xArr.length - 1]) {
              t_index = this.indexOfArray(xArr, t_x, 0);
              t_obj.index = t_index;
              t_obj.x = Number(xArr[t_index]).toFixed(2);
              t_obj.y = Number(this.sourceSpectrumY[t_index]).toFixed(5);
              this.failureList.push(t_obj);
            }
          }
        }
      }

      this.failureList_detail = this.failureList;
      this.labelLineSpec(); // this.closeAlert(t_id);
    },
    toggleList: function toggleList(obj, number) {
      //故障那个频率弹窗中点击列表下拉
      var el = obj.target;
      var failureList = '.failure_list' + number;

      if (number == 2) {
        $(el).toggleClass('f-iconJian f-iconJia1');
      } else {
        $(el).toggleClass('f-iconJia f-iconJian');
      }

      $(el).parent().find(failureList).slideToggle();
    },
    checkChange: function checkChange(flag, list, child, item) {
      var nextState = false; //点击事件后的勾选状态

      var i = 0;
      var j = 0;
      var t_list = {};
      var t_child = {};
      var t_item = {};
      var flag_one_check = false; //至少有一个选中

      switch (flag) {
        case 0:
          //根节点
          nextState = !list.state;

          if (list.children.length > 0) {
            for (i = 0; i < list.children.length; i++) {
              t_child = list.children[i];
              t_child.state = nextState;

              if (t_child.hasOwnProperty("children") && t_child.children.length > 0) {
                for (j = 0; j < t_child.children.length; j++) {
                  t_item = t_child.children[j];
                  t_item.state = nextState;
                }
              }
            }
          }

          break;

        case 1:
          //子节点
          nextState = !child.state;

          if (child.hasOwnProperty("children") && child.children.length > 0) {
            for (j = 0; j < child.children.length; j++) {
              t_item = child.children[j];
              t_item.state = nextState;
            }
          }

          if (nextState == false) {
            for (i = 0; i < list.children.length; i++) {
              t_child = list.children[i];

              if (t_child.id == child.id) {
                continue;
              }

              if (t_child.state == true) {
                flag_one_check = true;
                break;
              }
            }

            if (flag_one_check) {
              list.state = true;
            } else {
              list.state = false;
            }
          } else {
            list.state = true;
          }

          break;

        case 2:
          //叶节点
          nextState = !item.state;

          if (nextState == false) {
            flag_one_check = false;

            for (j = 0; j < child.children.length; j++) {
              t_item = child.children[j];

              if (t_item.id == item.id) {
                continue;
              }

              if (t_item.state == true) {
                flag_one_check = true;
                break;
              }
            }

            if (flag_one_check) {
              child.state = true;
            } else {
              child.state = false;
            }
          } else {
            child.state = true;
          }

          if (child.state == false) {
            flag_one_check = false;

            for (i = 0; i < list.children.length; i++) {
              t_child = list.children[i];

              if (t_child.id == child.id) {
                continue;
              }

              if (t_child.state == true) {
                flag_one_check = true;
                break;
              }
            }

            if (flag_one_check) {
              list.state = true;
            } else {
              list.state = false;
            }
          } else {
            list.state = true;
          }

          break;
      }

      ;
      this.$nextTick(function () {
        this.checkedNum();
      });
    },
    checkedNum: function checkedNum() {
      /**选中项的相同单位的序号赋值如：GMF.1/GMF.2**/
      var k = 0;
      var l = 0;
      var t_num = 0;
      var t_child_num = {};
      var t_item_num = {};
      var flag_checked = false; // console.log(this.gearList[0]);

      if (this.gearList[0].state == true && this.gearList[0].children.length > 0) {
        t_num = 0;

        for (k = 0; k < this.gearList[0].children.length; k++) {
          t_child_num = this.gearList[0].children[k];

          if (t_child_num.state == false) {
            continue;
          }

          for (l = 0; l < t_child_num.children.length; l++) {
            t_item_num = t_child_num.children[l];

            if (t_item_num.state == false) {
              continue;
            }

            t_num++;
            t_item_num.label = t_num;
          }
        }
      }

      if (this.bearList[0].state == true && this.bearList[0].children.length > 0) {
        t_num = 1;

        for (k = 0; k < this.bearList[0].children.length; k++) {
          t_child_num = this.bearList[0].children[k];

          if (t_child_num.state == false) {
            continue;
          }

          flag_checked = false;

          for (l = 0; l < t_child_num.children.length; l++) {
            t_item_num = t_child_num.children[l];

            if (t_item_num.state == false) {
              continue;
            }

            flag_checked = true;
            t_item_num.label = t_num;
          }

          if (flag_checked) {
            t_num++;
          }
        }
      }

      if (this.speedList[0].state == true && this.speedList[0].children.length > 0) {
        t_num = 0;

        for (l = 0; l < this.speedList[0].children.length; l++) {
          t_item_num = this.speedList[0].children[l];

          if (t_item_num.state == false) {
            continue;
          }

          t_num++;
          t_item_num.label = t_num;
        }
      }

      this.failureOk();
    },
    checkAll: function checkAll(number, list) {
      var nextState = !list.state; //点击事件后的勾选状态

      var i = 0;
      var j = 0;
      var child = {};
      var item = {};

      if (list.children.length > 0) {
        for (i = 0; i < list.children.length; i++) {
          child = list.children[i];
          child.state = nextState;

          if (child.hasOwnProperty("children") && child.children.length > 0) {
            for (j = 0; j < child.children.length; j++) {
              item = child.children[j];
              item.state = nextState;
            }
          }
        }
      }
    },
    chooseSpeed: function chooseSpeed() {
      //是否启用模拟转速
      if ($('#chooseYes').is(':checked')) {
        //如果选中了启用模拟转速，这输入框可输入数字
        $('#failure_speed_number').attr('disabled', false);
      } else {
        $('#failure_speed_number').attr('disabled', true);
      }
    },
    labelChanges: function labelChanges(item) {
      if (this.selectPosition.position_type == 8 || this.selectPosition.position_type == 9) {
        this.failureUnit = "NX"; //当测点为振动阶次或者包络阶次时，故障频率和故障明细的单位要改变

        this.failureUnit_detail = "NX";
      } else if (this.flag_f_nx.val) {
        this.failureUnit_detail = "NX";
        this.failureUnit = 'NX';
      } else {
        this.failureUnit = "Hz";
        this.name_type = "频率";
        this.failureUnit_detail = "Hz";
      }

      var freq = 0;

      if (this.specType == 2) {
        var t_curSpeedRate = 1;

        if (this.isPosVibSeries(this.selectPosition.position_type)) {
          t_curSpeedRate = this.selectPosition.speedRate;
        }

        freq = (item.value * item.speedRate / t_curSpeedRate).toFixed(2);
      } else {
        freq = (item.value * item.speedRate * this.freq_speed_failure / 60).toFixed(2);
        this.flag_f_nx.val && (freq = (freq * 60 / this.rotateSpeed).toFixed(2));
      }

      var types = "(" + item.type + "." + item.label + ")";
      var labelValue = types + freq + this.failureUnit;
      return labelValue;
    },
    addActive: function addActive(event, index) {
      var target = event.currentTarget;
      /**对称频率差**/

      if (index == 0 || index == 1 || index == 6 || index == 10) {
        $(target).toggleClass('active');
      }

      if (index == 9) {
        //点击循环寻峰
        $(target).addClass('active');

        if (this.autoPeakNum == -1) {
          $(target).removeClass("active");
        }
      }

      if (index == 2 && this.rotateSpeed == 0) {
        //点击切换为阶比功能
        swal({
          title: "提示",
          text: '当前转速为0，切换为x轴阶比不可用',
          button: "确认"
        });
      } else if (index == 2 && this.rotateSpeed != 0 && !this.posOrderList.includes(Number(this.selectPosition.pos_type))) {
        $(target).toggleClass('active');
      }

      if (index == 3 && this.rotateSpeed == 0) {
        //点击切换为1倍频功能
        swal({
          title: "提示",
          text: '当前转速为0，切换为1倍频不可用',
          button: "确认"
        });
      }
    },
    //2600设为基准
    setBaseWave: function setBaseWave(baseInfo, type) {
      type = Number(type); //type==1:导入基准波形；2非导入的波形；3：导入基准并覆盖参数

      var params = null;
      params = {
        type: type,
        dgm_id: this.selectPosition.dgm_id,
        ch_id: this.selectPosition.ch_id,
        time: this.oriChangeTime,
        pos_name: this.selectPosition.pos_name,
        pos_id: this.selectPosition.pos_id,
        mac_id: this.chooseMacId
      };

      switch (type) {
        case 3:
          params.temperature = baseInfo.temperature;
          params.wave_x = baseInfo.wave_x;
          params.wave_y = this.waveY;
          params.spaceTime = baseInfo.spaceTime;
          params.fGain = baseInfo.fGain;
          params.fStart = baseInfo.fStart;
          params.fWidth = baseInfo.fWidth;
          params.fThreshold = baseInfo.fThreshold;
          break;

        case 1:
          params.temperature = baseInfo.temperature;
          params.wave_x = baseInfo.wave_x;
          params.wave_y = this.waveY;
          break;
      }

      if (type !== 2) {
        params.time = 0;
      }

      this.$getApi.setBasicWave(params).then(function (res) {
        if (res.msg === 0) {
          swal({
            title: "提示",
            text: '设置成功',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '设置失败',
            button: "确认"
          });
        }
      })["catch"](function (err) {
        console.log('请求错误', err);
      });
    },
    // 2600手动采集波形
    getBaseWave: function getBaseWave() {
      var params = null;
      params = {
        dgm_id: this.selectPosition.dgm_id,
        channel: this.selectPosition.ch_id
      };
      this.$getApi.clickToDgmData(params).then(function (res) {
        if (res.msg === 0) {
          swal({
            title: "提示",
            text: '设置成功',
            button: "确认"
          });
        } else {
          swal({
            title: "提示",
            text: '设置失败',
            button: "确认"
          });
        }
      });
    },
    // 2600导入基准
    importBaseWave: function importBaseWave() {
      document.getElementById('waveSelect_alert').style.display = 'block'; //模拟点击
    },
    waveSelectOk: function waveSelectOk(dom) {
      this.closeAlert(dom);
      document.getElementById('fileLocal').click();
    },
    //解析导入的基准波形
    selectFile: function selectFile(event) {
      //基准波形上传文件
      var that = this;
      var selectedFile = {}; //当前选中的文件

      var target = event.target;
      that.waveX = [];
      that.waveY = [];

      if (that.p_isIE() && !target.files) {
        var filePath = target.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        selectedFile = fileSystem.GetFile(filePath);
      } else {
        selectedFile = target.files;
      }

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
          var datas = event.target.result;
          var tmpArr = datas.split("\n");
          var len = tmpArr.length;
          var tObj = [];
          var value1; //key

          var i = 0;
          var baseInfo = {}; //波形的基本信息

          for (i = 0; i < len; i++) {
            tObj = [];
            tObj = tmpArr[i].split(",");

            if (tObj.length < 2) {
              continue;
            }

            value1 = tObj[0];

            if (value1 == 'dataBegin') {
              i++;
              break;
            }

            baseInfo[value1] = tObj[1];
          }

          if (baseInfo["fileType"] != 101) {
            swal({
              title: "提示",
              text: '请选择基准波形的文件',
              button: "确认"
            });
            return;
          }

          that.baseInfo = baseInfo;
          var t_spaceTime = Number(baseInfo["spaceTime"]);
          var _axisX = [];
          var _axisY = [];
          that.baseInfo.wave_x = [];

          for (; i < len; i++) {
            tObj = [];
            tObj = tmpArr[i].split(",");

            if (tObj.length < 2) {
              continue;
            }

            value1 = tObj[0];

            if (value1 == 'dataEnd') {
              i++;
              break;
            }

            that.baseInfo.wave_x.push(Number(value1));

            _axisX.push(Number(value1) * t_spaceTime / 1000);

            _axisY.push(tObj[1]);
          }

          that.flag_real = 1; //关闭实时

          that.setRealBtn(); // that.ifImportBaseWave = 1;//导入的基准

          that.waveX = _axisX;
          that.waveY = _axisY;
          that.noRealData = false;
          that.unitXWave = "μs";
          that.unitWave = "KN";
          target.value = '';
        };
      }
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
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, swal) {/* harmony import */ var assets_lib_waveChart_myCharts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/lib/waveChart/myCharts.js */ "./src/assets/lib/waveChart/myCharts.js");
/* harmony import */ var assets_lib_waveChart_myCharts_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_lib_waveChart_myCharts_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
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
  name: "WaveChart",
  props: ['option', 'otp', 'height', 'type', 'change', 'position'],
  data: function data() {
    return {
      /*waveChart: {}*/
      chart: null,
      title: {
        selectUnit: '单位选择',
        subTime: '时间差',
        exportMusic: '音频导出',
        exportData: '数据导出',
        restore: '重置',
        saveImage: '保存为图片',
        enlarge: '放大',
        setAllPower: '所有测点有效频率',
        showGate: '显示闸门'
      },
      maxData: {
        title: '最大化',
        flag: 1
      },
      subTimeFlag: 0,
      factoryType: 0 //现场类型 0风电；3水电；1水泥；4旋转机械设备

    };
  },
  mounted: function mounted() {
    this.chart = assets_lib_waveChart_myCharts_js__WEBPACK_IMPORTED_MODULE_0___default.a.init(this.$el);
    this.chart.setOption(this.option);
  },
  watch: {
    //观察option的变化
    option: {
      handler: function handler() {
        this.chart.setOption(this.option);

        if (this.option.x.data.length > 0 && this.option.y.data.length > 0 && this.otp == 2) {
          $('.loadWave').css('display', 'none');
        }
      },
      deep: true //对象内部属性的监听，关键。

    },
    type: function type() {
      this.title.subTime = this.type === 2 ? '点数差' : '时间差';
    },
    change: function change() {
      if (this.change) {
        document.getElementsByClassName('subTime')[0].classList.remove('active');
        this.subTimeFlag = 0;
      }
    }
  },
  methods: {
    maxOrMin: function maxOrMin(e) {
      var thisWave = e.currentTarget.parentNode;
      var waveWidth = (window.innerWidth - 350) / 2 + 'px';
      var wave = document.getElementsByClassName('wave-chart');

      if (this.maxData.flag) {
        this.maxData.title = '返回';
        e.currentTarget.classList.add('back');
        thisWave.style.height = this.height.maxHeight;
        thisWave.style.width = '100%';

        switch (this.otp) {
          case 1:
            wave[1].style.display = 'none';
            wave[2].style.display = 'none';
            break;

          case 2:
            wave[0].style.display = 'none';
            wave[2].style.display = 'none';
            break;

          case 3:
            wave[0].style.display = 'none';
            wave[1].style.display = 'none';
            break;
        }
      } else {
        this.maxData.title = '最大化';
        e.currentTarget.classList.remove('back');

        if (this.otp === 3) {
          thisWave.style.height = this.height.historyHeight;
          thisWave.style.width = '100%';
        } else {
          thisWave.style.height = this.height.waveHeight;
          thisWave.style.width = waveWidth;
        }

        for (var i = 0, l = wave.length; i < l; i++) {
          wave[i].style.display = 'block';
        }
      }

      this.$emit('get-max', this.maxData.flag);
      this.maxData.flag = Math.abs(--this.maxData.flag);
    },
    setUnit: function setUnit() {
      var noUnitPosType = [200, 1, 4, 9, 12, 15, 16];
      var posType = Number(this.position.pos_type);

      if (this.factoryType != 3 && noUnitPosType.includes(posType)) {
        swal('当前测点类型，单位选择不可用');
      } else if (this.position.dgm_type == 10 && this.position.pos_type == 3) {
        swal('当前测点类型，单位选择不可用');
      } else {
        this.$emit('set-unit', this.otp);
      }
    },
    subTime: function subTime(e) {
      if (this.subTimeFlag === 1) {
        e.currentTarget.classList.remove('active');
        this.subTimeFlag = 0;
      } else {
        this.subTimeFlag ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active');
        this.subTimeFlag = Math.abs(--this.subTimeFlag);
      }
    },
    setPower: function setPower() {
      this.$emit('set-power');
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.6.0@jquery/dist/jquery.js"), __webpack_require__(/*! sweetalert */ "./node_modules/_sweetalert@2.1.2@sweetalert/dist/sweetalert.min.js")))

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "wave-content" } }, [
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
            _c("span", { staticClass: "lableName" }, [_vm._v("测点名称：")]),
            _vm._v(" "),
            _c("treeselect", {
              staticClass: "select-header",
              attrs: {
                noOptionsText: _vm.noTips,
                multiple: false,
                options: _vm.reSetPosList,
                clearable: false,
                placeholder: "请选择测点"
              },
              on: { select: _vm.dataPosChange },
              model: {
                value: _vm.choosePosTypeId,
                callback: function($$v) {
                  _vm.choosePosTypeId = $$v
                },
                expression: "choosePosTypeId"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "speed_choose_div", attrs: { id: "hd_choose" } },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hd_speed,
                  expression: "hd_speed"
                }
              ],
              staticClass: "hd_select",
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
                    _vm.hd_speed = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    return _vm.change_hd()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "false", id: "hd_low_radio" } }, [
                _vm._v("低密度波形")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "true", id: "hd_high_radio" } }, [
                _vm._v("高密度波形")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.selectPosition.pos_type == 200,
              expression: "selectPosition.pos_type == 200"
            }
          ],
          staticClass: "btn_samp",
          on: { click: _vm.showSampAlert }
        },
        [_vm._v("采样设置")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-time" },
        [
          _c("span", [_vm._v("起止时间：")]),
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
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.flag_real ? "dashDivSelectd" : "dashDiv"],
          on: { click: _vm.setRealBtn }
        },
        [
          _c("span", { staticClass: "dashSpan" }),
          _vm._v(" "),
          _c("span", { staticClass: "dashText" }, [
            _vm._v(_vm._s(_vm.toggleText))
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { attrs: { id: "wavespecturm_box" } }, [
        _c(
          "div",
          { staticClass: "line_box" },
          [
            _c("wave-chart", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showType1 == 1,
                  expression: "showType1 == 1"
                }
              ],
              ref: "chart1",
              attrs: {
                position: _vm.selectPosition,
                otp: 1,
                option: _vm.waveOption,
                height: _vm.maxRestoreHeight,
                type: _vm.specType,
                change: _vm.changePos
              },
              on: {
                "set-unit": function($event) {
                  return _vm.showUnitSelect(1)
                },
                "get-max": _vm.getMax
              }
            }),
            _vm._v(" "),
            _c("wave-chart", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showType2 == 2,
                  expression: "showType2 == 2"
                }
              ],
              ref: "chart2",
              staticStyle: { float: "right" },
              attrs: {
                position: _vm.selectPosition,
                otp: 2,
                option: _vm.specturmOption,
                height: _vm.maxRestoreHeight
              },
              on: {
                "set-unit": function($event) {
                  return _vm.showUnitSelect(2)
                },
                "get-max": _vm.getMax,
                "set-power": _vm.setAllPower
              }
            }),
            _vm._v(" "),
            _c("wave-chart", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showType3 == 3,
                  expression: "showType3 == 3"
                }
              ],
              ref: "chart3",
              attrs: {
                position: _vm.selectPosition,
                otp: 3,
                option: _vm.historyOption,
                height: _vm.maxRestoreHeight
              },
              on: {
                "set-unit": function($event) {
                  return _vm.showUnitSelect(3)
                },
                "get-max": _vm.getMax
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.noRealData,
                    expression: "noRealData"
                  }
                ],
                staticClass: "noNowData"
              },
              [_vm._v("没有实时波形")]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "waveTimeText" }, [
              _vm._v(_vm._s(_vm.changeTime))
            ]),
            _vm._v(" "),
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
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectPosition.pos_type == 14,
                    expression: "selectPosition.pos_type==14"
                  }
                ],
                staticClass: "wave-btn btn-gate",
                on: {
                  click: function($event) {
                    return _vm.showGate()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.gateText))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectPosition.pos_type == 14,
                    expression: "selectPosition.pos_type==14"
                  }
                ],
                staticClass: "wave-btn btn-import",
                on: { click: _vm.importBaseWave }
              },
              [_vm._v("导入基准")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectPosition.pos_type == 14,
                    expression: "selectPosition.pos_type==14"
                  }
                ],
                staticClass: "wave-btn btn-set",
                on: {
                  click: function($event) {
                    return _vm.setBaseWave(_vm.baseInfo, _vm.ifImportBaseWave)
                  }
                }
              },
              [_vm._v("设为基准")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectPosition.pos_type == 14,
                    expression: "selectPosition.pos_type==14"
                  }
                ],
                staticClass: "wave-btn btn-get",
                on: { click: _vm.getBaseWave }
              },
              [_vm._v("采集波形")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tool_box" }, [
          _c(
            "ul",
            { ref: "spectrumTools", staticClass: "tool_list" },
            _vm._l(_vm.tools, function(tool, index) {
              return _c(
                "li",
                {
                  on: {
                    click: function($event) {
                      tool.toolFunc()
                      _vm.addActive($event, index)
                    }
                  }
                },
                [
                  _c("img", {
                    ref: "tool_btn",
                    refInFor: true,
                    staticClass: "tool_btn",
                    attrs: { title: tool.text, src: tool.icon }
                  })
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "allPower",
            staticClass: "alert_box",
            staticStyle: { display: "none" },
            attrs: { id: "allPower_alert" },
            on: { click: _vm.hideBox }
          },
          [
            _c("div", { staticClass: "alert_box_header" }, [
              _c("div", { staticClass: "alert_box_header_left am-u-lg-8" }, [
                _c("i", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "所有测点有效阶次"
                        : "所有测点有效频率"
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "alert_box_header_right am-u-lg-4" }, [
                _c("span", {
                  staticClass: "alert_box_close",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#allPower_alert")
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("div", { staticClass: "allPos" }, [
                _vm._v("\n                        测点："),
                _c(
                  "div",
                  {
                    ref: "curPos",
                    attrs: { title: _vm.curPosName, id: "posName" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.curPosName) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.boxShow,
                        expression: "boxShow"
                      }
                    ],
                    ref: "selectBox",
                    staticClass: "allPosBox"
                  },
                  _vm._l(_vm.allPos, function(item, index) {
                    return _c(
                      "li",
                      {
                        attrs: { "data-id": index, title: item.name },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.selectAllPos($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(item.name) +
                            "\n                            "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("下限："),
                _c("input", {
                  ref: "powerA",
                  attrs: { type: "text" },
                  on: { input: _vm.setAllPowerA }
                }),
                _vm._v(" "),
                _c("i", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "NX"
                        : "Hz"
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("上限："),
                _c("input", {
                  ref: "powerB",
                  attrs: { type: "text" },
                  on: { input: _vm.setAllPowerB }
                }),
                _vm._v(" "),
                _c("i", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "NX"
                        : "Hz"
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isRealAll,
                      expression: "isRealAll"
                    }
                  ],
                  staticClass: "alert_box_tips"
                },
                [_vm._v("\n                        上限需要大于下限")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c("button", { on: { click: _vm.allPowerOk } }, [_vm._v("确定")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#allPower_alert")
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "alert_box",
            staticStyle: { display: "none" },
            attrs: { id: "hide_low_alert" }
          },
          [
            _c(
              "div",
              {
                staticClass: "alert_box_header",
                domProps: {
                  textContent: _vm._s(
                    _vm.posOrderList.includes(
                      Number(_vm.selectPosition.pos_type)
                    )
                      ? "低阶次过滤"
                      : "低频过滤"
                  )
                }
              },
              [
                _c("div", { staticClass: "alert_box_header_right" }, [
                  _c("span", {
                    staticClass: "alert_box_close",
                    on: {
                      click: function($event) {
                        return _vm.closeAlert("#hide_low_alert")
                      }
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("div", [
                _c("span", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "过滤阶次"
                        : "过滤频率"
                    )
                  }
                }),
                _vm._v("："),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.hide_low,
                      expression: "hide_low"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.hide_low },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.hide_low = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.hideLowOk("#hide_low_alert")
                    }
                  }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#hide_low_alert")
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "alert_box",
            staticStyle: { display: "none" },
            attrs: { id: "powerRms_alert" }
          },
          [
            _c("div", {
              staticClass: "alert_box_header",
              domProps: {
                textContent: _vm._s(
                  _vm.posOrderList.includes(Number(_vm.selectPosition.pos_type))
                    ? "有效阶次"
                    : "有效频率"
                )
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("p", [
                _vm._v("下限："),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.power_a,
                      expression: "power_a"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.power_a },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.power_a = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "NX"
                        : "Hz"
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("上限："),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.power_b,
                      expression: "power_b"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.power_b },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.power_b = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  domProps: {
                    textContent: _vm._s(
                      _vm.posOrderList.includes(
                        Number(_vm.selectPosition.pos_type)
                      )
                        ? "NX"
                        : "Hz"
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        Number(_vm.power_a) > Number(_vm.power_b) &&
                        _vm.power_b != 0,
                      expression: "Number(power_a)>Number(power_b)&&power_b!=0"
                    }
                  ],
                  staticClass: "alert_box_tips",
                  attrs: { id: "alert_tips" }
                },
                [_vm._v("上限需要大于下限\n                    ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.powerRmsOk("#powerRms_alert")
                    }
                  }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#powerRms_alert")
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "alert_box",
            staticStyle: { display: "none" },
            attrs: { id: "unitSelect_alert" }
          },
          [
            _c("div", { staticClass: "alert_box_header" }, [
              _vm._v("\n                    单位选择\n                ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("p", [
                _vm._v("单位选择：\n                        "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.unitSelect,
                        expression: "unitSelect"
                      }
                    ],
                    attrs: { id: "unit_select" },
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
                          _vm.unitSelect = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {}
                      ]
                    }
                  },
                  [
                    _c(
                      "option",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.unitSrc == "g" ||
                              _vm.unitSrc == "m/s²" ||
                              _vm.unitSrc == "m/s2",
                            expression:
                              "unitSrc=='g' || unitSrc=='m/s²' || unitSrc=='m/s2'"
                          }
                        ],
                        attrs: { value: "g" }
                      },
                      [_vm._v("g")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.unitSrc == "g" ||
                              _vm.unitSrc == "m/s²" ||
                              _vm.unitSrc == "m/s2",
                            expression:
                              "unitSrc=='g' || unitSrc=='m/s²' || unitSrc=='m/s2'"
                          }
                        ],
                        attrs: { value: "m/s²" }
                      },
                      [_vm._v("m/s²\n                            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.unitType != 3
                                ? _vm.specType == 2
                                  ? _vm.unitSrc == "mm/s"
                                  : _vm.unitSrc == "gD" ||
                                    _vm.unitSrc == "°" ||
                                    _vm.unitSrc == "mV" ||
                                    _vm.unitSrc == "rpm"
                                  ? false
                                  : true
                                : false,
                            expression:
                              "unitType != 3 ? specType==2 ? unitSrc=='mm/s' : unitSrc=='gD' || unitSrc=='°' || unitSrc == 'mV' || unitSrc == 'rpm' ? false: true : false"
                          }
                        ],
                        attrs: { value: "mm/s" }
                      },
                      [_vm._v("\n                                mm/s")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.unitType != 3
                                ? _vm.specType == 2
                                  ? _vm.unitSrc == "μm"
                                  : _vm.unitSrc == "gD" ||
                                    _vm.unitSrc == "°" ||
                                    _vm.unitSrc == "mV" ||
                                    _vm.unitSrc == "rpm"
                                  ? false
                                  : true
                                : false,
                            expression:
                              "unitType != 3 ? specType==2 ? unitSrc=='μm': unitSrc=='gD' || unitSrc=='°' || unitSrc == 'mV' || unitSrc == 'rpm' ? false : true : false"
                          }
                        ],
                        attrs: { value: "μm" }
                      },
                      [_vm._v("\n                                μm")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.unitSelectOk("#unitSelect_alert")
                    }
                  }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#unitSelect_alert")
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "alert_box",
            staticStyle: { display: "none" },
            attrs: { id: "waveSelect_alert" }
          },
          [
            _c("div", { staticClass: "alert_box_header" }, [
              _vm._v("\n                    选择导入方式\n                ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("div", { staticClass: "waveAlert_div" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ifImportBaseWave,
                        expression: "ifImportBaseWave"
                      }
                    ],
                    attrs: { type: "radio", name: "radios", value: "1" },
                    domProps: { checked: _vm._q(_vm.ifImportBaseWave, "1") },
                    on: {
                      change: function($event) {
                        _vm.ifImportBaseWave = "1"
                      }
                    }
                  }),
                  _vm._v("导入基准波形")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "waveAlert_div" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ifImportBaseWave,
                        expression: "ifImportBaseWave"
                      }
                    ],
                    attrs: { type: "radio", name: "radios", value: "3" },
                    domProps: { checked: _vm._q(_vm.ifImportBaseWave, "3") },
                    on: {
                      change: function($event) {
                        _vm.ifImportBaseWave = "3"
                      }
                    }
                  }),
                  _vm._v("导入基准波形并覆盖参数")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.waveSelectOk("#waveSelect_alert")
                    }
                  }
                },
                [_vm._v("确定")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeAlert("#waveSelect_alert")
                    }
                  }
                },
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
                value: _vm.isSampAlert,
                expression: "isSampAlert"
              }
            ],
            staticClass: "alert_box",
            attrs: { id: "samp_alert" }
          },
          [
            _c(
              "div",
              {
                staticClass: "alert_box_header",
                domProps: { textContent: _vm._s("采样设置") }
              },
              [
                _c("div", { staticClass: "alert_box_header_right" }, [
                  _c("span", {
                    staticClass: "alert_box_close",
                    on: {
                      click: function($event) {
                        return _vm.closeAlert("#samp_alert")
                      }
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_content" }, [
              _c("div", { staticClass: "select-group" }, [
                _c("span", { staticClass: "lableName" }, [
                  _vm._v("测点选择：")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chooseSampId,
                        expression: "chooseSampId"
                      }
                    ],
                    staticClass: "select",
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
                        _vm.chooseSampId = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.sampPosList, function(item) {
                    return _c(
                      "option",
                      {
                        attrs: { title: item.pos_name },
                        domProps: { value: item.ch_id }
                      },
                      [_vm._v(_vm._s(item.pos_name))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "select-group" }, [
                _c("span", { staticClass: "lableName" }, [
                  _vm._v("分析频率：")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chooseSampFreq,
                        expression: "chooseSampFreq"
                      }
                    ],
                    staticClass: "select",
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
                        _vm.chooseSampFreq = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.captureFreqSources, function(val, key) {
                    return _c(
                      "option",
                      { attrs: { title: val }, domProps: { value: key } },
                      [_vm._v(_vm._s(val))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "select-group" }, [
                _c("span", { staticClass: "lableName" }, [
                  _vm._v("采集时间：")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chooseSampTime,
                        expression: "chooseSampTime"
                      }
                    ],
                    staticClass: "select",
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
                        _vm.chooseSampTime = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.captureTimeSources, function(val, key) {
                    return _c(
                      "option",
                      { attrs: { title: key }, domProps: { value: val } },
                      [_vm._v(_vm._s(key))]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "alert_box_footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.hideSampOk()
                    }
                  }
                },
                [_vm._v("开始采集")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "cancel_btn",
                  on: {
                    click: function($event) {
                      return _vm.closeSampAlert()
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "am-btn am-btn-default line_info_btn keep_btn",
        staticStyle: { visibility: "hidden" },
        attrs: { id: "keep_download" }
      },
      [_c("span", { staticClass: "tool_icon" }), _vm._v(" 保存页面")]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044& ***!
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
  return _c("div", { staticClass: "wave-chart" }, [
    _c("span", {
      staticClass: "selectUnit",
      attrs: { title: _vm.title.selectUnit },
      on: { click: _vm.setUnit }
    }),
    _vm._v(" "),
    _c("span", {
      staticClass: "max",
      attrs: { title: _vm.maxData.title },
      on: { click: _vm.maxOrMin }
    }),
    _vm._v(" "),
    _vm.otp === 1
      ? _c("span", {
          staticClass: "exportMusic",
          attrs: { title: _vm.title.exportMusic }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.otp !== 3
      ? _c("span", {
          staticClass: "exportData",
          attrs: { title: _vm.title.exportData }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("span", { staticClass: "restore", attrs: { title: _vm.title.restore } }),
    _vm._v(" "),
    _c("span", {
      staticClass: "dataZoom",
      attrs: { title: _vm.title.enlarge }
    }),
    _vm._v(" "),
    _c("span", {
      staticClass: "exportImage",
      attrs: { title: _vm.title.saveImage }
    }),
    _vm._v(" "),
    _vm.otp === 1
      ? _c("span", {
          staticClass: "subTime",
          attrs: { title: _vm.title.subTime },
          on: { click: _vm.subTime }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/lib/waveChart/myCharts.js":
/*!**********************************************!*\
  !*** ./src/assets/lib/waveChart/myCharts.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* version1.1:
  1. 代码优化;
  2. 一张图可显示多条数据;
  3. 增加3D图谱显示; */
(function (global, factory) {
  "use strict";

  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  "use strict";

  var chart = function chart(dom) {
    var _this5 = this;

    var option = {
      type: {
        chart: ""
        /* 1.波形频谱图 2.对比分析 */
        ,
        chartType: ""
        /* 波形（wave）,频谱（spectrum） */

      },
      // 图谱标题
      title: {
        show: false,
        // 是否显示标题
        name: "",
        // 标题名字
        // 标题字体样式
        fontStyle: {
          weight: "bold",
          // 粗细，默认 'bold'
          size: "20px",
          // 大小，默认 '20px'
          family: "Arial",
          // 字体，默认 'Arial'
          color: "#000",
          // 颜色，默认 '#000'
          align: "left" // 对齐方式，默认 'left'

        }
      },
      // 图谱位置
      grid: {
        top: 60,
        // 离容器上边距离，默认 60
        right: "10%",
        // 离容器右边距离，默认 '10%
        left: "10%",
        // 离容器左边距离，默认 '10%'
        bottom: 60 // 离容器下边距离，默认 60

      },
      // x 轴信息
      x: {
        name: "",
        // 名称(单位)
        name2: "",
        // 补充文字
        nameStyle: {
          // 名称(单位)字体样式
          color: "#000",
          // 颜色，默认 '#000''
          size: "12px",
          // 大小，默认 '12px'
          family: "Arial",
          // 字体，默认 'Arial'
          weight: "bold",
          // 粗细，默认 'bold'
          bottom: "15",
          // 单位位置
          bottom2: "30",
          // 单位位置
          align: "center" // 对齐方式

        },
        type: "category",
        // 坐标轴类型，默认'category'
        data: [],
        // 数据
        fontStyle: {
          // 刻度字体样式
          color: "#000",
          // 颜色，默认 '#000'
          size: "12px",
          // 大小，默认 '12px'
          family: "Arial" // 字体，默认 'Arial'

        },
        lineStyle: {
          // 轴线样式
          color: "#000",
          // 颜色，默认 '#000'
          width: 1 // 粗细，默认 1

        },
        range: {
          max: 0,
          min: 0
        }
      },
      // y 轴信息
      y: {
        name: "",
        // 名称(单位)
        name2: "",
        // 补充文字
        nameStyle: {
          // 名称(单位)字体样式
          color: "#000",
          // 颜色，默认 '#000'
          size: "12px",
          // 大小，默认 '12px'
          family: "Arial",
          // 字体，默认 'Arial'
          weight: "bold",
          // 粗细，默认 'bold'
          align: "center" // 对齐方式

        },
        data: [],
        // 数据
        fontStyle: {
          // 刻度字体样式
          color: "#000",
          // 颜色，默认 '#000'
          size: "12px",
          // 大小，默认 '12px'
          family: "Arial",
          // 字体，默认 'Arial'
          weight: "normal" // 粗细，默认 'normal'

        },
        lineStyle: {
          // 轴线样式
          color: "#000",
          // 颜色，默认 '#000'
          width: 1 // 粗细，默认 1

        },
        splitLineStyle: {
          // 坐标轴分隔线
          color: "#c1c1c1",
          // 颜色，默认 '#c1c1c1'
          width: 1 // 粗细，默认 1

        },

        /* 报警线 */
        markLine: [
          /* {
          data: '',
          lineStyle: {
            color: '',
            width: 1,
          }
          } */
        ]
      },
      // 图谱信息
      series: {
        type: "line",
        // 类型，默认 'line' 'scatter'(散点图)  'bar'(柱状图)  'bar-line'(阶次)
        coordinateSystem: "rectanguler"
        /* 坐标系类型, 默认'rectanguler'; 可选: 'rectanguler'(直角坐标系), 'circle'(倾角分布图), 'circleLine'(圆周图), */
        ,
        lineStyle: {
          // 样式
          color: "#0032ff",
          // 颜色，默认 '#0032ff
          width: 1 // 粗细，默认 1

        },
        markLine: {
          // 标线
          data: [],
          lineStyle: {
            // 样式
            color: "#ebd662",
            // 颜色，默认 '#ebd662'
            width: 1 // 粗细，默认 1

          },
          fontStyle: {
            // 标注字体样式
            color: "#0032ff",
            // 颜色，默认 '#ebd662'
            size: "12px",
            // 大小，默认 '12px'
            family: "Microsoft YaHei",
            // 字体，默认 'Microsoft YaHei'
            weight: "normal" // 粗细，默认 'normal'

          }
        },
        fontStyle: {
          /* 字体样式(coordinateSystem === 'circle') */
          color: "#000"
          /* 颜色 */
          ,
          size: "14px"
          /* 大小 */
          ,
          faimly: "Microsoft YaHei"
          /* 字体 */

        },
        dataMsg: {
          // 数据信息
          oneFreq: 0,
          // 一倍频
          rotateSpeed: 0,
          // 转速
          specType: 1,
          // 频谱图类型
          spectral: 0,
          // 采样点数
          setPower: false // 是否设置有效频段，默认 false

        },
        gateMsg: {
          // 闸门数据信息
          isShow: 0,
          //是否画闸门
          fStart: 0,
          //闸门起始点
          fWidth: 0,
          //闸门宽度
          fThreshold: 0,
          //闸门高度
          lineStyle: {
            color: 'red',
            // 颜色，默认 '#ebd662'
            width: 2 // 粗细，默认 1

          }
        },
        symbol: {
          show: false,
          color: "",
          size: 3
        },
        unit: ""
        /* 特征值单位 */
        ,
        data: {
          /* 倾角分布图、沉降跟踪图数据 */
          amplitude: []
          /* 幅值 */
          ,
          phase: []
          /* 相位 */
          ,
          color: []
          /* 点和报警线的颜色 */
          ,
          maxAmplitude: 0.1
          /* 最大2倍幅值 */

        },
        circleAlarm: [
          /* {
          data: '',
          lineStyle: {
            width: 1,
            color: '',
          }
          } */
        ]
        /* 圆周图报警线 */
        ,
        posName: []
        /* 如果有多组数据, 测点名 */
        ,
        isRestore: true
        /* 是否刷新图谱 */

      },
      // 标注信息
      toolTip: {
        isShow: true
        /* 是否启用点击效果 */
        ,
        symbol: {
          show: true,
          color: "",
          size: 3
        },
        lineStyle: {
          // 标线样式
          color: "#FA9A4D",
          // 颜色，默认 '#FA9A4D'
          width: 1 // 粗细，默认 1

        },
        fontStyle: {
          // 标注字体样式
          color: "#fff",
          // 颜色，默认 '#fff'
          size: "12px",
          // 大小，默认 '12px'
          family: "Microsoft YaHei",
          // 字体，默认 'Microsoft YaHei'
          weight: "normal" // 粗细，默认 'normal'

        },
        background: {
          // 提示框背景
          color: "rgba(50, 50, 50, 0.3)" // 颜色，默认 'rgba(50, 50, 50, 0.3)'

        },
        formatter: function formatter(params) {},
        // 单击, params = {key: number, val: number} =>  key: 下标，val: x 值
        dblHandler: function dblHandler(params) {} // 双击, params = {key: number, val: number} =>  key: 下标，val: x 值

      },
      tools: {
        // 开窗放大
        enlarge: {
          show: false,
          dom: null
        },
        // 最大化 / 还原
        maxOrMin: {
          show: false,
          dom: null
        },
        // 重置
        restore: {
          show: false,
          dom: null,
          formatter: function formatter(isRestore) {}
        },
        // 时间差
        timeDifferent: {
          show: false,
          dom: null,
          formatter: function formatter(isTimeDifferent) {}
        },
        // 差频
        subFreq: {
          show: false,
          dom: null,
          formatter: function formatter(isSubFreq) {}
        },
        // 1倍频
        oneFreq: {
          show: false,
          dom: null,
          formatter: function formatter(isOneFreq) {}
        },
        // 标注倍频
        labelFreq: {
          show: false,
          dom: null,
          formatter: function formatter(isLabelFreq) {}
        },
        // 寻峰
        peakSearch: {
          show: false,
          dom: null
        },
        // 添加标注
        addLabel: {
          show: false,
          dom: null
        },
        // 取消标注
        cancelLabel: {
          show: false,
          dom: null
        },
        // 校准倍频
        setPeak: {
          show: false,
          dom: null
        },
        // 导出图片
        exportImage: {
          show: false,
          dom: null,
          imageName: ""
        },
        // 导出数据
        exportData: {
          fileName: "",
          show: false,
          dom: null
        },
        // 导出音频
        exportAudio: {
          fileName: "",
          show: false,
          dom: null,
          maxFreq: null
        },
        //转速脉冲
        speedPulse: {
          show: false,
          dom: null,
          formatter: function formatter(isSpeedPulse) {}
        }
      },
      backgroundColor: "rgba(255, 255, 255, 0)",
      // 图谱背景颜色，默认 '#fff'
      changePos: false,
      // 是否切换测点 / 机组，默认 false
      resize: null
    };

    var _chart = function _chart(dom) {
      var _this = this;

      if (!dom) return;
      this._dom = {
        name: dom,
        id: null,
        width: 0,
        height: 0
      };
      this._computeParams = {
        extremum: {},
        // x、y轴边界值：{x:{min, max}, y:{min, max}}
        proportion: {} // 坐标系数：{x:{b, k}, y:{b, k}}

      };
      this._flag = {
        spectrumXName: "",
        // 频谱图 x 轴单位
        spectrumYName: "",
        // 频谱图 y 轴单位
        dataLength: 0,
        // x 轴数据长度
        zoom: 0,
        // 是否开窗放大  1：放大
        click: 1,
        // 是否点击画线  1： 画线
        line: {
          // 鼠标或点击位置对应 x 轴下标和值
          key: -1
          /* 对应数据所在数组的索引 */
          ,
          val: -1
          /* x轴对应的值 */
          ,
          idx: undefined
          /* 多组数据时对应数组的索引 */

        },
        firstCommon: {
          /* 用于记录对比分析图首次普通点击 */
          // 鼠标或点击位置对应 x 轴下标和值
          key: -1
          /* 对应数据所在数组的索引 */
          ,
          val: -1
          /* x轴对应的值 */
          ,
          idx: undefined
          /* 多组数据时对应数组的索引 */

        },
        last_xWave: {
          // 启用时间差上一次点击的 x 轴下标和值
          key: -1,
          val: -1,
          idx: undefined
          /* 多组数据时对应数组的索引 */

        },
        labelLine: {
          // 标线信息
          spectrum: [],
          // 频谱图倍频、差频标线信息
          wave: [] // 波形图时间差标线信息

        },
        maxMin: 0,
        // 是否最大化  1：最大化
        addPeak: [],
        // 添加标注, 每次鼠标点击的 x 轴下标和值
        muchaddPeak: [],
        // 多条数据时添加标注，相较于addPeak多了一个index多组数据时对应数组的索引
        addPeakPos: [],
        // 添加标注, 需要标注的点位置信息
        dragLabel: false,
        // 是否拖动已填加标注的框
        peakIndexArr: [],
        // 循环寻峰标线信息
        arr_B: [],
        // 倍频数组
        arr_C: [],
        // 差频数组
        subFreqAxis: -1,
        // 多组数据时差频的数据索引
        toolCheck: -1,
        // 最后选择的 tool：0 => 点击；1 => 1倍频；2 => 标注倍频；3 => 寻峰
        tools: {
          flag_subFreq: 0,
          // 是否启用差频  1：启用
          flag_oneF: 0,
          // 是否启用一倍频  1：启用
          flag_nx: 0,
          // 是否启用倍频  1：倍频
          autoPeakNum: -1,
          // 循环寻峰计数
          flag_addPeak: false,
          // 是否启用校准倍频
          flag_subTime: 0,
          // 是否启用时间(点数)差  1：启用
          flag_wave_extend: 0,
          // 时间差是否画周期性延展线
          flag_wave_Pulse: 0 //是否开启转速脉冲 1：启用

        }
      };
      this._scope = {
        // 数据尺寸
        v: {
          // x 轴
          x: {
            start: null,
            // 最小值
            end: null,
            // 最大值
            length: null // 数据长度

          },
          // y 轴
          y: {
            start: null,
            // 最小值
            end: null,
            // 最大值
            length: null // 数据长度

          }
        },
        // 图谱尺寸
        r: {
          r: null,
          // 最右侧位置
          w: null,
          // 宽度
          b: null,
          // 最下侧位置
          h: null,
          // 高度
          x: null,
          // 纵向中心点位置(圆心x)
          y: null,
          // 横向中心点位置(圆心y)
          rs: null // 最大半径

        }
      };
      this._movePos = {
        x: {
          oldVal: 0,
          newVal: 0,
          move: 0,
          source: 0,
          addLabel: 0
        },
        y: {
          oldVal: 0,
          newVal: 0,
          move: 0,
          source: 0,
          addLabel: 0
        }
      };
      this._option = null;
      this._drawTools = {
        canvas: {},
        ctx: {} // toolDom: null

      };
      this.axis = {
        /* 倾角分布图(沉降跟踪图)每个点坐标 */
        x: []
        /* x坐标 */
        ,
        y: []
        /* y坐标 */
        ,
        index: []
        /* 对应数据下标 */

      }; // 快捷键组合键

      this.code = {
        code1: 0,
        code2: 0
      };
      this.event = {
        dom: {
          // 点击画线
          click: function click(e) {
            e.stopPropagation();
            var opt = _this._option;
            var series = opt.series;
            var r = _this._scope.r;
            var dx = e.offsetX;
            var dy = e.offsetY;

            if (series.coordinateSystem === "rectanguler") {
              if (!_this._flag.zoom && opt && opt.x.data.length > 0 && !_this._flag.dragLabel) {
                var dValue;
                if (dx >= opt.grid.left && dx <= r.r) dValue = _this.findNearbyPoint(dx, dy);else return;

                if (_this._flag.tools.flag_addPeak) {
                  dValue.key = _this.fft_indexOfWaveX(dValue.val, _this._option.y.data[dValue.key], 1);
                  dValue.val = _this._option.x.data[dValue.key];
                }

                if (dx >= opt.grid.left && dx <= r.r && dy >= opt.grid.top && dy <= r.b) {
                  _this._flag.line = {
                    val: dValue.val,
                    key: dValue.key,
                    idx: dValue.index
                  };
                } else {
                  return;
                }

                if (_this._flag.click) {
                  if (dx >= _this._option.grid.left && dx <= r.r && dy >= _this._option.grid.top && dy <= r.b) {
                    _this._option.tools.timeDifferent.show && _this._option.tools.timeDifferent.dom && _this.labelLineWave();

                    if (_this._option.tools.subFreq.show && _this._option.tools.subFreq.dom || _this._option.tools.labelFreq.show && _this._option.tools.labelFreq.dom || _this._option.tools.oneFreq.show && _this._option.tools.oneFreq.dom || _this._option.tools.peakSearch.show && _this._option.tools.peakSearch.dom) {
                      _this.labelLineSpec();
                    }

                    if (_this._flag.tools.flag_subTime || _this._flag.tools.flag_subFreq || _this._flag.tools.flag_nx) {
                      _this.drawLabelLine();
                    } else {
                      _this._flag.toolCheck = 0;
                      _this._flag.firstCommon = {
                        val: dValue.val,
                        key: dValue.key,
                        idx: dValue.index
                      };

                      _this.drawLine(_this._flag.line);
                    }
                  }
                }

                opt.toolTip.formatter(_this._flag.line, "click");
              }
            } else if (series.coordinateSystem === "circle") {
              if (opt && series.data.amplitude.length > 0) {
                var axis = _this.axis;
                var ax = axis.x;
                var ay = axis.y;
                var _r = _this._scope.r;
                var rx = _r.x;
                var ry = _r.y;
                var rs = _r.rs;

                if (Math.pow(dx - rx, 2) + Math.pow(dy - ry, 2) <= Math.pow(rs, 2)) {
                  var min = {
                    x: 0,
                    y: 0,
                    index: null,
                    value: Number.MAX_VALUE
                  };

                  for (var _i = 0, l = ax.length; _i < l; _i++) {
                    var d = Math.pow(ax[_i] - dx, 2) + Math.pow(ay[_i] - dy, 2);

                    if (min.value > d) {
                      min = {
                        x: ax[_i],
                        y: ay[_i],
                        index: axis.index[_i],
                        value: d
                      };
                    }
                  }

                  _this.drawPoint(min);
                }
              }
            } else if (series.coordinateSystem === "circleLine") {
              if (opt && series.data.phase.length > 0) {
                var _axis = _this.axis;
                var _ax = _axis.x;
                var _ay = _axis.y;
                var _r2 = _this._scope.r;
                var _rx = _r2.x;
                var _ry = _r2.y;
                var _rs = _r2.rs;

                if (Math.pow(dx - _rx, 2) + Math.pow(dy - _ry, 2) <= Math.pow(_rs, 2)) {
                  var _min = {
                    x: 0,
                    y: 0,
                    index: null,
                    value: Number.MAX_VALUE
                  };

                  for (var _i2 = 0, _l = _ay.length; _i2 < _l; _i2++) {
                    var _d = Math.pow(_ax[_i2].oVal - dx, 2) + Math.pow(_ay[_i2].oVal - dy, 2);

                    if (_min.value > _d) {
                      _min = {
                        x: _ax[_i2].oVal,
                        y: _ay[_i2].oVal,
                        index: _axis.index[_i2],
                        value: _d
                      };
                    }
                  }

                  _this.drawPoint(_min, series.coordinateSystem);
                }
              }
            }
          },
          // 鼠标按下
          mousedown: function mousedown(e) {
            var flag = _this._flag;
            flag.dragLabel = false;
            var movePos = _this._movePos;
            movePos.x.move = 0;
            movePos.x.source = e.offsetX;
            movePos.y.source = e.offsetY;
            movePos.x.oldVal = e.offsetX;
            movePos.y.oldVal = e.offsetY;

            for (var _i3 = 0, l = flag.addPeakPos.length; _i3 < l; _i3++) {
              var val = flag.addPeakPos[_i3];

              if (e.offsetX >= val.x && e.offsetX <= val.x + 110 && e.offsetY >= val.y && e.offsetY <= val.y + 40) {
                val.flag = 1;
                flag.click = 0;
                break;
              } else {
                flag.click = 1;
              }
            }

            _this.addEvent(window, "mousemove", _this.event.dom.mousemove);
          },
          // 拖动图谱 & 开窗放大 handler
          mousemove: function () {
            var time = 50;
            var lastTime = new Date().valueOf();
            return function (e) {
              /* 节流函数 */
              var nowTime = new Date().valueOf(); // if (nowTime - lastTime < time) {
              //   return;
              // }

              lastTime = nowTime;
              e.stopPropagation();
              var dx = e.offsetX;
              var dy = e.offsetY;
              var opt = _this._option;
              var r = _this._scope.r;
              /* 出界的判断 */

              if (dx >= opt.grid.left && dx <= r.r && dy >= opt.grid.top && dy <= r.b + 30) {} else {
                _this.removeEvent(window, "mousemove", _this.event.dom.mousemove);
              }

              var multiple = 0;

              if (opt && opt.x.data.length > 0 && e.target.nodeName === "CANVAS") {
                var moveX = _this._movePos.x,
                    moveY = _this._movePos.y,
                    flag = _this._flag,
                    scope = _this._scope,
                    scopeR = scope.r,
                    scopeV = scope.v,
                    prop = _this._computeParams.proportion,
                    propX = prop.x,
                    propY = prop.y,
                    extrX = _this._computeParams.extremum.x,
                    yArr = opt.y.data;
                moveX.newVal = e.offsetX;
                moveX.move = moveX.newVal - moveX.oldVal;
                moveY.newVal = e.offsetY;
                moveY.move = moveY.newVal - moveY.oldVal;

                if (moveY.source >= scopeR.b && moveY.source <= scopeR.b + 30) {
                  // 拖动 x 轴
                  multiple = Math.abs((moveX.newVal - propX.b) / propX.k - (moveX.oldVal - propX.b) / propX.k);

                  if (moveX.move === 0) {
                    return;
                  } else if (moveX.move > 0) {
                    if (scopeV.x.start - multiple <= extrX.min) {
                      scopeV.x.start = extrX.min;
                      scopeV.x.end -= scopeV.x.start - extrX.min;
                    } else {
                      scopeV.x.start -= multiple;
                      scopeV.x.end -= multiple;
                      moveX.oldVal = e.offsetX;
                    }
                  } else {
                    if (scopeV.x.end + multiple >= extrX.max) {
                      scopeV.x.end = extrX.max;
                      scopeV.x.start += extrX.max - scopeV.x.end;
                    } else {
                      scopeV.x.start += multiple;
                      scopeV.x.end += multiple;
                      moveX.oldVal = e.offsetX;
                    }
                  }

                  var data = {
                    min: Number.MAX_VALUE,
                    max: Number.MIN_VALUE * -1
                  },
                      l = yArr.length;
                  _this._option.x.type !== "category" && (data.min = 0);

                  if (_typeof(yArr[0]) === "object" && yArr[0].length >= 0) {
                    data.start = _this.findNearbyPoint(opt.grid.left, scopeR.b).key;
                    data.end = _this.findNearbyPoint(scopeR.r, scopeR.b).key + 1;

                    for (var _i4 = 0; _i4 < l; _i4++) {
                      data.data = yArr[_i4].slice(data.start, data.end);
                      var len = data.data.length;

                      for (var j = 0; j < len; j++) {
                        var val = data.data[j];
                        data.min > val && (data.min = parseFloat(val));
                        data.max < val && (data.max = parseFloat(val));
                      }
                    }
                  } else {
                    data.start = _this.findNearbyPoint(opt.grid.left, scopeR.b).key;
                    data.end = _this.findNearbyPoint(scopeR.r, scopeR.b).key + 1;
                    data.data = yArr.slice(data.start, data.end);

                    for (var _i5 = 0; _i5 < l; _i5++) {
                      var _val = data.data[_i5];
                      data.min > _val && (data.min = parseFloat(_val));
                      data.max < _val && (data.max = parseFloat(_val));
                    }
                  }

                  scopeV.y.start = data.min;
                  scopeV.y.end = data.max + (data.max - data.min) / 10;
                  flag.click = 1;

                  _this.restoreAll(2);
                } else if (moveX.source < opt.grid.left) {
                  // 拖动 y 轴
                  multiple = Math.abs((moveY.newVal - propY.b) / propY.k - (moveY.oldVal - propY.b) / propY.k);

                  if (moveY.move === 0) {
                    return;
                  } else if (moveY.move < 0) {
                    scopeV.y.start -= multiple;
                    scopeV.y.end -= multiple;
                  } else {
                    scopeV.y.start += multiple;
                    scopeV.y.end += multiple;
                  }

                  moveY.oldVal = e.offsetY;
                  flag.click = 1;

                  _this.mappingY(2);

                  _this.drawAxis();

                  _this.drawMarkY(); //重画报警线


                  _this.drawWave();

                  _this.zoomLine();
                } else if (moveX.source >= opt.grid.left && moveX.source <= scopeR.r && moveY.source >= opt.grid.top && moveY.source < scopeR.b) {
                  if (flag.zoom) {
                    // 开窗放大
                    _this.drawEnlargement(1);
                  } else {
                    var addPeakPos = flag.addPeakPos,
                        _l2 = addPeakPos.length;

                    if (_l2 > 0) {
                      var isAddPeak = false;

                      for (var _i6 = 0; _i6 < _l2; _i6++) {
                        var _val2 = addPeakPos[_i6];

                        if (moveX.oldVal >= _val2.x && moveX.oldVal <= _val2.x + 110 && moveY.oldVal >= _val2.y && moveY.oldVal <= _val2.y + 40 && _val2.flag) {
                          isAddPeak = true;
                          _val2.x += moveX.move;
                          _val2.y += moveY.move;

                          _this.drawAddLabel(2);

                          moveX.oldVal = moveX.newVal;
                          moveY.oldVal = moveY.newVal;
                          flag.dragLabel = true;
                          break;
                        }
                      }
                    }

                    if (!flag.dragLabel) {
                      flag.tools.flag_subTime && _this.labelLineSpec();

                      var dVal = _this.findNearbyPoint(moveX.newVal, moveY.newVal);

                      if (flag.tools.flag_addPeak) {
                        if (dVal.index === undefined) {
                          dVal.key = _this.fft_indexOfWaveX(dVal.val, opt.y.data[dVal.key], 1);
                          dVal.val = opt.x.data[dVal.key];
                        } else {
                          dVal.key = _this.fft_indexOfWaveX(dVal.val, opt.y.data[dVal.index][dVal.key], 1);
                          dVal.val = opt.x.data[dVal.index][dVal.key];
                        }
                      }

                      flag.line = {
                        key: dVal.key,
                        val: dVal.val,
                        idx: dVal.index
                      }; // opt.toolTip.formatter(flag.line);

                      _this.zoomLine();
                    }
                    /* } else {
                      flag.tools.flag_subTime && this.labelLineSpec();
                      let dVal = this.findNearbyPoint(moveX.newVal, moveY.newVal);
                      if (flag.tools.flag_addPeak) {
                        if (dVal.index === undefined) {
                          dVal.key = this.fft_indexOfWaveX(dVal.val, opt.y.data[dVal.key], 1)
                          dVal.val = opt.x.data[dVal.key];
                        } else {
                          dVal.key = this.fft_indexOfWaveX(dVal.val, opt.y.data[dVal.index][dVal.key], 1)
                          dVal.val = opt.x.data[dVal.index][dVal.key];
                        }
                      }
                      flag.line = {
                        key: dVal.key,
                        val: dVal.val,
                        idx: dVal.index,
                      }
                      this.zoomLine();
                    } */

                  }
                } else {
                  return;
                } // 拖动图谱或者开窗放大时重画故障频率


                _this._option.series.markLine.data.length > 0 && _this.drawMarkLine();
              } else {
                return;
              }
            };
          }(),
          // 鼠标松开
          mouseup: function mouseup() {
            _this.removeEvent(window, "mousemove", _this.event.dom.mousemove);

            var flag = _this._flag;

            for (var _i7 = 0, l = flag.addPeakPos.length; _i7 < l; _i7++) {
              if (flag.addPeakPos[_i7].flag) {
                flag.addPeakPos[_i7].flag = 0;
                break;
              }
            }

            _this.drawEnlargement();

            if (flag.zoom && _this._movePos.x.source >= _this._option.grid.left && _this._movePos.x.source <= _this._scope.r.r && _this._movePos.y.source >= _this._option.grid.top && _this._movePos.y.source < _this._scope.r.b) {
              _this.windowEnlargement();
            }

            if (flag.zoom) {
              setTimeout(function () {
                flag.zoom = 0;
                flag.click = 1;
              });
            }
          },
          // 缩放
          zoom: function zoom(e) {
            e.stopPropagation();
            var dx = e.offsetX;
            var dy = e.offsetY;
            var zoomVal = e.deltaY;
            var multiple = null;
            var type = 2,
                opt = _this._option;
            var xArr = opt.x.data;

            if (opt && xArr.length > 0) {
              if (dx >= opt.grid.left && dx <= _this._scope.r.r && dy >= opt.grid.top && dy <= _this._scope.r.b + 30) {
                var dVal = _this.findNearbyPoint(dx, dy); // 鼠标点在当前波形上的位置索引


                multiple = {
                  start: (dVal.val - _this._scope.v.x.start) * 0.1,
                  end: (_this._scope.v.x.end - dVal.val) * 0.1
                };
                var start, end;

                if (zoomVal < 0) {
                  start = _this._scope.v.x.start + multiple.start;
                  end = _this._scope.v.x.end - multiple.end;

                  if (start >= end || 0 >= end) {
                    return;
                  } else {
                    _this._scope.v.x.start = start;
                    _this._scope.v.x.end = end;
                    type = 2;
                  }
                } else {
                  start = _this._scope.v.x.start - multiple.start;
                  end = _this._scope.v.x.end + multiple.end;

                  if (start < _this._computeParams.extremum.x.min || end > _this._computeParams.extremum.x.max) {
                    type = 1;
                  } else {
                    _this._scope.v.x.start = start;
                    _this._scope.v.x.end = end;
                    type = 2;
                  }
                }

                _this.mappingX(type);

                var data = {
                  min: Number.MAX_VALUE,
                  max: Number.MIN_VALUE
                };

                if (dVal.index !== undefined) {
                  var yArr = opt.y.data;

                  for (var _i8 = 0, l = yArr.length; _i8 < l; _i8++) {
                    var yValue = yArr[_i8];
                    data.start = _this.findNearbyPoint(opt.grid.left, 0, _i8).key;
                    data.end = _this.findNearbyPoint(_this._scope.r.r, 0, _i8).key + 1;

                    if (data.start > data.end) {
                      var s = data.start;
                      data.start = data.end;
                      data.end = s;
                    }

                    data.data = yValue.slice(data.start, data.end);

                    for (var j = 0, len = data.data.length; j < len; j++) {
                      var val = data.data[j];
                      data.min > Number(val) && (data.min = Number(val));
                      data.max < Number(val) && (data.max = Number(val));
                    }

                    data.max === Number.MIN_VALUE && (data.max = 0);
                  }
                } else {
                  data.start = _this.findNearbyPoint(opt.grid.left).key;
                  data.end = _this.findNearbyPoint(_this._scope.r.r).key + 1;

                  if (data.start > data.end) {
                    var _s = data.start;
                    data.start = data.end;
                    data.end = _s;
                  }

                  data.data = opt.y.data.slice(data.start, data.end);

                  for (var _i9 = 0, _l3 = data.data.length; _i9 < _l3; _i9++) {
                    var _val3 = data.data[_i9];
                    data.min > Number(_val3) && (data.min = Number(_val3));
                    data.max < Number(_val3) && (data.max = Number(_val3));
                  }

                  data.max === Number.MIN_VALUE && (data.max = 0);
                }

                _this._scope.v.y.start = data.min;
                _this._scope.v.y.end = data.max + (data.max - data.min) / 10;

                _this.mappingY(type);
              }

              _this.drawAxis();

              _this.drawWave();

              _this.drawMarkY(); //重画报警线


              _this.zoomLine();
            }
          },
          // 监听按键
          keydown: function keydown(e) {
            // Esc: key === 'Escape', keyCode === 27
            // left: key === 'ArrowLeft', keyCode === 37
            // right: key === 'ArrowRight', keyCode === 39
            // up: key === 'ArrowUp', keyCode === 38
            // down: key === 'ArrowDown', keyCode === 40
            // w:keyCode === 87 选框放大快捷键
            var flag = _this._flag;
            var flagLine = flag.line;
            var xArr = _this._option.x.data;
            var option = _this._option;
            flagLine.idx !== undefined && (xArr = xArr[flagLine.idx]); // 组合键

            if (e.keyCode === 32) {
              /* 空格 */
              _this.code.code1 = 32;
            }

            if (e.keyCode === 49) {
              /* 1 */
              _this.code.code2 = 49;
            }

            if (e.keyCode === 73) {
              /* i */
              _this.code.code2 = 73;
            }

            if (e.keyCode === 69) {
              /* e */
              _this.code.code2 = 69;
            }

            if (e.keyCode === 65) {
              /* a */
              _this.code.code2 = 65;
            }

            if (_this.code.code1 === 32 && _this.code.code2 === 49) {
              /* 空格+1 一倍频 */
              if (option.type.chartType == "spectrum" && option.type.chart == 1) {
                _this.event.tool.oneFreq();
              }

              _this.code.code1 = 0;
              _this.code.code2 = 0;
            } else if (_this.code.code1 === 32 && _this.code.code2 === 73) {
              /* 空格+i 导出图片 */
              _this.event.tool.exportImage();

              _this.code.code1 = 0;
              _this.code.code2 = 0;
            } else if (_this.code.code1 === 32 && _this.code.code2 === 65) {
              /* 空格+a 导出音频 */
              if (option.type.chartType == "wave" && option.type.chart == 1) {
                _this.event.tool.exportAudio();
              }

              _this.code.code1 = 0;
              _this.code.code2 = 0;
            } else if (_this.code.code1 === 32 && _this.code.code2 === 69) {
              /* 空格+e 导出数据 */
              _this.event.tool.exportData();

              _this.code.code1 = 0;
              _this.code.code2 = 0;
            }

            if (e.key === "Escape" && e.keyCode === 27) {
              flagLine.key = -1;
              flagLine.val = -1;
              flagLine.idx = undefined;
              var layer = ["background", // 背景
              "data", // 数据
              "foreground", // 前景
              "failure", // 故障频率
              "subFreq", // 差频信息
              "nxFreq", // 倍频信息
              "click", // 操作(点击画线)
              "pulse", // 转速脉冲
              "gate", // 闸门
              "zoom" // 操作(开窗放大)
              ];

              for (var _i10 = 2, l = layer.length; _i10 < l; _i10++) {
                _this._drawTools.ctx[layer[_i10]].clearRect(0, 0, dom.width, dom.height);
              }

              flag.addPeak.length = 0;
              flag.tools.flag_subTime = 0;
              flag.tools.flag_subFreq = 0;
              flag.tools.flag_nx = 0;
              flag.labelLine.spectrum.length = 0;
              flag.tools.flag_wave_Pulse = 0; //转速脉冲关闭

              _this.zoomLine();

              _this._option.tools.restore.formatter(true);
            } else if (e.key === "ArrowLeft" && e.keyCode === 37) {
              --flagLine.key;
              flagLine.val = xArr[flagLine.key];

              if (flag.tools.flag_subFreq == 0) {
                --flag.arr_B[0]; //键盘左右键移动后变化arr_B,消除了左右键移动的影响对差频的影响
              }

              _this._option.toolTip.formatter(flagLine);

              _this.zoomLine();
            } else if (e.key === "ArrowRight" && e.keyCode === 39) {
              ++flagLine.key;
              flagLine.val = xArr[flagLine.key];

              if (flag.tools.flag_subFreq == 0) {
                ++flag.arr_B[0];
              } // ++flagLine.key;
              // ++flag.arr_B[0];
              // flagLine.val = xArr[flagLine.key];


              _this._option.toolTip.formatter(flagLine);

              _this.zoomLine();
            } else if (e.keyCode == 87) {
              /* w,选框放大 */
              _this._flag.zoom = Math.abs(--_this._flag.zoom);
              _this._flag.click = Math.abs(--_this._flag.click);
            } else if (e.keyCode == 68) {
              /* d,寻峰 */
              if (option.type.chartType == "spectrum" && option.type.chart == 1) {
                _this.event.tool.peakSearch();
              }
            } else if (e.keyCode === 72) {
              /* h,倍频 */
              if (option.type.chartType == "spectrum") {
                _this.event.tool.labelFreq();

                var className = option.tools.labelFreq.dom.className.split(" ");

                if (option.type.chart == 1) {
                  if (className.indexOf("check-icon") == -1) {
                    _this.addClass(option.tools.labelFreq.dom, "check-icon");
                  } else {
                    _this.removeClass(option.tools.labelFreq.dom, "check-icon");
                  }
                } else if (option.type.chart == 2) {
                  if (className.indexOf("chart-btn-active") == -1) {
                    _this.addClass(option.tools.labelFreq.dom, "chart-btn-active");
                  } else {
                    _this.removeClass(option.tools.labelFreq.dom, "chart-btn-active");
                  }
                }
              }
            } else if (e.keyCode === 82) {
              /* r,重置 */
              _this.event.tool.restore();
            }
          },
          // 柱状图鼠标移入
          barMove: function barMove(e) {
            var params = _this._computeParams.proportion;
            var opt = _this._option;
            var xArr = opt.x.data;
            var yArr = opt.y.data;
            var scope = _this._scope;
            var vx = scope.v.x;
            var ex = e.offsetX;
            var ey = e.offsetY;
            var yk = params.y.k;
            var yb = params.y.b;
            var clickCtx = _this._drawTools.ctx.click;

            if (opt.toolTip.isShow) {
              clickCtx.clearRect(0, 0, _this._dom.width, _this._dom.height);

              for (var _i11 = 0, l = yArr.length; _i11 < l; _i11++) {
                var y = yArr[_i11] * yk + yb;
                var x = scope.v.x.length * _i11 + opt.grid.left;

                if (ex >= x && ex <= x + vx.start && ey <= scope.r.b && ey >= y) {
                  var lineX = vx.start / 2 + x;

                  if (parseInt(lineX) === parseFloat(lineX)) {
                    lineX += 0.5;
                  }

                  var ot = opt.toolTip;
                  clickCtx.beginPath();
                  clickCtx.fillStyle = "#4975c5";
                  clickCtx.fillRect(x, y, vx.start, scope.r.b - y);
                  var xVal = xArr[_i11];
                  var tree = xVal[0];
                  var mac = xVal[1];
                  var pos = xVal[2];
                  var W = Math.max(clickCtx.measureText(tree).width, clickCtx.measureText(mac).width, clickCtx.measureText(pos).width) + 20;
                  var bx = ex + 30;
                  var by = ey + 30;

                  if (bx + W >= scope.r.r) {
                    bx = ex - W - 30;
                  }

                  if (by + 80 >= scope.r.b) {
                    by = ey - 110;
                  }

                  clickCtx.fillStyle = ot.background.color;
                  clickCtx.fillRect(bx, by, W, 80);
                  clickCtx.font = "".concat(ot.fontStyle.size, " ").concat(ot.fontStyle.family, " ").concat(ot.fontStyle.weight);
                  clickCtx.fillStyle = ot.fontStyle.color;
                  clickCtx.textBaseline = "top";
                  clickCtx.fillText(tree, bx + 10, by + 5);
                  clickCtx.fillText(mac, bx + 10, by + 25);
                  clickCtx.fillText(pos, bx + 10, by + 45);
                  clickCtx.fillText("".concat(_this.round(yArr[_i11], 4)).concat(opt.y.name[_i11]), bx + 10, by + 65);
                  break;
                }
              }
            }
          },
          // 柱状图双击
          barDblclick: function barDblclick(e) {
            var params = _this._computeParams.proportion;
            var opt = _this._option;
            var xArr = opt.x.data;
            var yArr = opt.y.data;
            var scope = _this._scope;
            var vx = scope.v.x;
            var ex = e.offsetX;
            var ey = e.offsetY;
            var yk = params.y.k;
            var yb = params.y.b;

            if (opt.toolTip.isShow) {
              for (var _i12 = 0, l = yArr.length; _i12 < l; _i12++) {
                var y = yArr[_i12] * yk + yb;
                var x = scope.v.x.length * _i12 + opt.grid.left;

                if (ex >= x && ex <= x + vx.start && ey <= scope.r.b && ey >= y) {
                  var xVal = xArr[_i12];
                  var yVal = yArr[_i12];
                  opt.toolTip.formatter({
                    xVal: xVal,
                    yVal: yVal
                  });
                  break;
                }
              }
            }
          },
          // 折线图双击
          lineDblclick: function lineDblclick(e) {
            e.stopPropagation();
            var opt = _this._option;
            var r = _this._scope.r;
            var dx = e.offsetX;
            var dy = e.offsetY;

            if (dx >= opt.grid.left && dx <= r.r && dy >= opt.grid.top && dy <= r.b) {
              var dValue = _this.findNearbyPoint(dx, dy);

              _this._flag.line = {
                val: dValue.val,
                key: dValue.key,
                idx: dValue.index
              };
              opt.toolTip.dblHandler(_this._flag.line, "dblclick");
            }
          }
        },
        tool: {
          // 开窗放大
          enlarge: function enlarge(e) {
            e.stopPropagation();
            _this._flag.zoom = Math.abs(--_this._flag.zoom);
            _this._flag.click = Math.abs(--_this._flag.click);
          },
          // 最大化 / 还原
          maxOrMin: function maxOrMin() {
            _this.resize();
          },
          // 重置
          restore: function restore() {
            var flag = _this._flag;
            flag.click = 1;
            flag.toolCheck = -1;
            flag.zoom = 0;
            flag.line = {
              key: -1,
              val: -1
            };
            var layer = _this._drawTools.ctx;

            for (var key in layer) {
              layer[key].clearRect(0, 0, _this._dom.width, _this._dom.height);
            }

            flag.addPeakPos.length = 0;
            flag.addPeak.length = 0;
            flag.tools.flag_subTime = 0;
            flag.tools.flag_wave_Pulse = 0;
            /* 重置关闭转速脉冲  */

            _this._option.tools.speedPulse && _this._option.tools.speedPulse.data && (_this._option.tools.speedPulse.data.speedPulse = false);
            flag.tools.flag_subFreq = 0;
            flag.tools.flag_nx = 0;
            flag.labelLine.spectrum.length = 0;
            flag.last_xWave = {
              key: -1,
              val: -1,
              idx: undefined
            };

            _this._option.tools.restore.formatter(true);

            _this.restoreAll(1);
          },
          // 时间差
          timeDifferent: function timeDifferent() {
            var flag = _this._flag,
                tools = flag.tools,
                line = flag.line;
            tools.flag_subTime = Math.abs(--tools.flag_subTime);
            tools.flag_subTime && (flag.last_xWave = {
              key: line.key,
              val: line.val,
              idx: line.idx
            });

            _this._option.tools.timeDifferent.formatter(Boolean(tools.flag_subTime));

            _this.labelLineWave();

            _this.drawLabelLine();
          },
          // 循环寻峰
          peakSearch: function peakSearch() {
            var flag = _this._flag,
                opt = _this._option;
            flag.peakIndexArr = _this.getPeakIndexArr(opt.y.data, 10);
            flag.tools.autoPeakNum++;

            if (flag.tools.autoPeakNum >= 10) {
              flag.tools.autoPeakNum = -1;
            }

            _this.labelLineSpec();

            var peakSearch = -1;

            for (var _i13 = 0, l = flag.labelLine.spectrum.length; _i13 < l; _i13++) {
              if (flag.labelLine.spectrum[_i13].name.indexOf("p") != -1) {
                peakSearch = _i13;
                break;
              }
            }

            if (peakSearch > -1) {
              flag.line = {
                key: flag.labelLine.spectrum[peakSearch].xAxis,
                val: opt.x.data[flag.labelLine.spectrum[peakSearch].xAxis]
              };

              _this.labelLineSpec();
            }

            _this._drawTools.ctx.click.clearRect(0, 0, _this._dom.width, _this._dom.height);

            if (flag.tools.autoPeakNum == -1) {
              return;
            }

            _this.drawLine(flag.line);
          },
          // 一倍频
          oneFreq: function oneFreq() {
            var opt = _this._option;

            if (opt.series.dataMsg.rotateSpeed == 0) {
              return;
            } else {
              var flag = _this._flag,
                  paramsX = _this._computeParams.proportion.x;
              flag.tools.flag_oneF = Math.abs(flag.tools.flag_oneF - 1);
              flag.toolCheck = 1;
              var index = -1,
                  t_nxArray = [];

              if (opt.series.dataMsg.specType == 2 || opt.x.name == "NX") {
                //阶次、阶比
                index = _this.indexOfArray(opt.x.data, 1, 0);
              } else {
                index = _this.indexOfArray(opt.x.data, opt.series.dataMsg.oneFreq, 0);
              }

              t_nxArray.push({
                name: "1x",
                xAxis: index
              });

              _this._drawTools.ctx.click.clearRect(0, 0, _this._dom.width, _this._dom.height);

              var x = paramsX.k * opt.x.data[t_nxArray[0].xAxis] + paramsX.b;
              flag.line = {
                key: t_nxArray[0].xAxis,
                val: opt.x.data[t_nxArray[0].xAxis]
              };

              _this.labelLineSpec();

              if (x && x >= opt.grid.left && x <= _this._scope.r.r) {
                _this.drawLine(flag.line);
              } // 标注倍频开启状态画标注倍频


              if (flag.tools.flag_nx === 1) {
                _this.drawLabelLine();
              } // flag.tools.flag_nx = 0;


              opt.tools.oneFreq.formatter(true);
            }
          },
          // 差频
          subFreq: function subFreq() {
            var flag = _this._flag,
                tools = flag.tools;
            tools.flag_subFreq = Math.abs(--tools.flag_subFreq);
            flag.toolCheck = 2;
            Boolean(tools.flag_subFreq) || (flag.subFreqAxis = -1);

            _this._option.tools.subFreq.formatter(Boolean(tools.flag_subFreq));

            tools.flag_subFreq ? _this.labelLineSpec() : _this.drawLabelLine();
          },
          // 倍频
          labelFreq: function labelFreq() {
            var flag = _this._flag;
            flag.tools.flag_nx = Math.abs(--flag.tools.flag_nx);
            flag.toolCheck = 2;

            _this._option.tools.labelFreq.formatter(Boolean(flag.tools.flag_nx));

            _this.labelLineSpec();

            _this.drawLabelLine();
          },
          // 添加标注
          addLabel: function addLabel(e) {
            e.stopPropagation();

            if (_this._flag.line.key > -1) {
              _this.drawAddLabel(1);
            }
          },
          // 取消标注
          cancelLabel: function cancelLabel() {
            _this._flag.addPeak.length = 0;
            _this._flag.addPeakPos.length = 0;

            _this._drawTools.ctx.foreground.clearRect(0, 0, _this._dom.width, _this._dom.height);
          },
          // 校准倍频
          setPeak: function setPeak() {
            _this._flag.tools.flag_addPeak = !_this._flag.tools.flag_addPeak;
          },
          // 导出图片
          exportImage: function exportImage() {
            var img = new Image();
            var opt = _this._option;
            var dom = _this._dom;
            var canvas = document.createElement("canvas");
            canvas.setAttribute("height", dom.height);
            canvas.setAttribute("width", dom.width);
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = opt.backgroundColor;
            ctx.fillRect(0, 0, dom.width, dom.height);

            for (var key in _this._drawTools.canvas) {
              ctx.drawImage(_this._drawTools.canvas[key], 0, 0);
            }

            img.src = canvas.toDataURL("image/png", 1.0);
            var downLoad = document.createElement("a");
            var ImgName = opt.tools.exportImage.imageName;

            if (Array.isArray(ImgName)) {
              var strArr = [];

              for (var _i14 = 0, l = ImageName.length; _i14 < l; _i14++) {
                var nameValue = ImageName[_i14];

                if (strArr.includes(nameValue)) {
                  ImageName.splice(-1, 1);
                  _i14--;
                } else {
                  strArr.push(nameValue);
                }
              }

              fileName = ImgName.join("_");
            }

            downLoad.href = img.src;
            downLoad.download = opt.tools.exportImage.imageName === "" ? opt.title.name : opt.tools.exportImage.imageName;
            +".png";
            downLoad.dispatchEvent(new MouseEvent("click"));
          },
          // 数据导出
          exportData: function exportData() {
            var opt = _this._option;
            var str = ""; //导出数据（中文兼容）

            var name = opt.tools.exportData.fileName;
            var fileName = ""; //导出文件名

            var dataX = opt.x.data;
            var dataY = opt.y.data;
            var l = dataX.length;

            if (_this.getDataType(dataX[0]) === "Array") {
              var p = 0;
              /* 最长一组数据长度 */

              str += "\uFEFF";

              for (var _i15 = 0; _i15 < l; _i15++) {
                var len = dataX[_i15].length;
                p < len && (p = len);
                str += "X,Y,";
                fileName += _i15 === 0 ? "".concat(name[_i15]) : "-".concat(name[_i15]);
              }

              fileName += ".csv";
              str += "\r\n";

              for (var i = 0; i < p; i++) {
                for (var j = 0; j < l; j++) {
                  var x = dataX[j][i] || "";
                  var y = dataY[j][i] || "";
                  str += "".concat(x, ",").concat(y.toFixed(4) * 1);
                }

                str += "\r\n";
              }
            } else {
              fileName = "".concat(name, ".csv");
              str += "\uFEFFX,Y\r\n";

              for (var i = 0; i < l; i++) {
                str += dataX[i] + "," + dataY[i].toFixed(4) * 1 + "\r\n";
              }
            }

            _this.funDownload(str, fileName);
          },
          // 音频导出
          exportAudio: function exportAudio() {
            var opt = _this._option;
            var audio = opt.tools.exportAudio;
            var freq = audio.maxFreq; //采样频率

            var wave = _this.cloneObj(opt.y.data, true); //数据


            var buffer = null;
            var name = audio.fileName;
            var fileName = "";

            if (_this.getDataType(freq) === "Array") {
              for (var _i16 = 0, l = wave.length; _i16 < l; _i16++) {
                buffer = _this.setAudio(freq[_i16], wave[_i16]);
                fileName = "".concat(name[_i16], ".wav");

                _this.funDownload(buffer, fileName);
              }
            } else {
              buffer = _this.setAudio(freq, wave);
              fileName = "".concat(name, ".wav"); //导出文件名

              _this.funDownload(buffer, fileName);
            }
          },
          // 转速脉冲
          speedPulse: function speedPulse() {
            var flag = _this._flag,
                tools = flag.tools,
                line = flag.line;
            var opt = _this._option;
            flag.tools.flag_wave_Pulse = Number(_this._option.tools.speedPulse.data.speedPulse);

            if (_this._option.tools.speedPulse.data.XArray.length > 0) {
              flag.tools.flag_wave_Pulse = Math.abs(--flag.tools.flag_wave_Pulse);

              _this._option.tools.speedPulse.formatter(Boolean(flag.tools.flag_wave_Pulse));
            } else {
              flag.tools.flag_wave_Pulse = false;
            }

            _this.drawWavePulse();
          }
        }
      };
      this.creat(dom);
      return this;
    };

    _chart.prototype = {
      constructor: _chart,
      // 判断数据类型
      getDataType: function getDataType(data) {
        return Object.prototype.toString.call(data).slice(8, -1);
      },
      // 保留小数
      round: function round(num) {
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
      },
      // 添加class
      addClass: function addClass(el, _class) {
        var elClassArr = el.className.split(" "); // 把字符串转成数组格式

        var classArr = _class.split(" "); // 把字符串转成数组格式


        classArr.forEach(function (item) {
          if (elClassArr.indexOf(item) === -1) {
            // 避免奇怪的类型混入
            elClassArr.push(String(item));
          }
        });
        el.className = elClassArr.join(" "); // 把原数组拼接成字符串

        return el; // 返回dom元素
      },
      // 删除class属性
      removeClass: function removeClass(el, _class) {
        var elClassArr = el.className.split(" ");

        var classArr = _class.split(" ");

        classArr.forEach(function (item) {
          var index = elClassArr.indexOf(item); // 大于0的时候，为对象的索引值

          if (index > -1) {
            elClassArr.splice(index, 1);
          }
        });
        el.className = elClassArr.join(" ");
        return el;
      },
      // 判断数据是否为原始类型
      isStatic: function isStatic(val) {
        return typeof val === "string" || typeof val === "number" || typeof val === "boolean" || typeof val === "undefined" || val === null;
      },
      // 复制对象
      cloneObj: function cloneObj(val, deep) {
        var _this2 = this;

        if (this.isStatic(val)) return val;
        if (Array.isArray(val)) return val.map(function (item) {
          return deep ? _this2.cloneObj(item, deep) : item;
        });else if (_typeof(val) === "object") {
          var wType = ["Error", "Date", "RegExp"];
          var type = Object.prototype.toString.call(val).slice(8, -1);
          if (wType.includes(type)) return new window[type](val);
          var tag = {};

          for (var key in val) {
            tag[key] = deep ? this.cloneObj(val[key], deep) : val[key];
          }

          return tag;
        }
      },
      // 获取 dom, 绑定监听事件, 创建 canvas
      creat: function creat(dom) {
        if (typeof dom === "undefined") return;
        var _dom = this._dom;
        _dom.id = "windit_" + new Date().valueOf();

        for (var _i17 = 0, _l4 = dom.children.length; _i17 < _l4; _i17++) {
          var child = dom.children[_i17];

          if (child.nodeName === "DIV") {
            dom.removeChild(child);
            _i17--;
            _l4 = dom.children.length;
          }
        }

        _dom.height = Math.round(dom.clientHeight);
        _dom.width = Math.round(dom.clientWidth);
        dom.style.position = "relative";
        var layer = ["background", // 背景
        "data", // 数据
        "foreground", // 前景
        "failure", // 故障频率
        "subFreq", // 差频信息
        "nxFreq", // 倍频信息
        "click", // 操作(点击画线)
        "pulse", //转速脉冲
        "gate", // 闸门
        "zoom" // 操作(开窗放大)
        ];
        var div = document.createElement("div"); // 去除标线

        div.setAttribute("style", "height: " + _dom.height + "px;width: " + _dom.width + "px;outline: none;");
        div.setAttribute("tabindex", 1);

        for (var i = 0, l = layer.length; i < l; i++) {
          var canvas = document.createElement("canvas");
          canvas.setAttribute("height", _dom.height);
          canvas.setAttribute("width", _dom.width);
          canvas.setAttribute("style", "position: absolute");
          this._drawTools.canvas[layer[i]] = canvas;
          this._drawTools.ctx[layer[i]] = canvas.getContext("2d");
          div.appendChild(canvas);
          dom.appendChild(div);
        }
      },
      // 处理 option
      setOption: function setOption(opt1) {
        var opt2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : option;
        if (!opt1) return; // this.destory();

        var flag = this._flag;
        var mark = opt1.series.markLine;
        var isMarkSame = true; //markLine 是否相同

        if (mark && mark.data) {
          // 长度相同可能是切换
          if (mark.data.length == opt2.series.markLine.data.length) {// for (let i = 0, len = mark.data.length; i < len; i++) {
            //   if (opt2.series.markLine.data[i].name !== mark.data[i].name || opt2.series.markLine.data[i].xAxis !== mark.data[i].xAxis) {
            //       isMarkSame = false
            //     }
            // }
          } else {
            isMarkSame = false;
          }
        }

        if (opt1.x.data.length != opt2.x.data.length) {
          isMarkSame = true;
        }

        if (!isMarkSame) {
          this._option = this.mergeOption(opt2, opt1);
          this._option.resize = this.resize; // 防止合并opt2和opt1后，opt1的markLine无数据取了opt2数据

          this._option.series.markLine.data = mark.data;
          var _coordinateSystem = this._option.series.coordinateSystem;

          if (_coordinateSystem === "rectanguler") {
            this.drawMarkLine();
          } else if (_coordinateSystem === "circle") {
            this.getNearPoint(mark.data);
          }

          return;
        }

        if (opt1.series.isRestore === false) return;
        var opt = this._option = this.mergeOption(opt2, opt1);
        mark && (opt.series.markLine.data = mark.data);
        if (opt.x.type === "bar" && opt.x.data.length > 12) return;
        this._option.resize = this.resize;
        var coordinateSystem = opt.series.coordinateSystem;

        if (opt.x.data) {
          flag.dataLength || (flag.dataLength = opt.x.data.length);
        }

        flag.spectrumXName === "" && (flag.spectrumXName = opt.x.name);
        flag.spectrumYName === "" && (flag.spectrumYName = opt.y.name);
        var dom = this._dom;
        opt.series.dataMsg.rotateSpeed == 0 && (opt.series.dataMsg.rotateSpeed = 1);
        this.initParams();
        var grid = opt.grid;

        for (var key in grid) {
          if (typeof grid[key] === "string") {
            opt.grid[key] = key === "left" || key === "right" ? dom.width * grid[key].slice(0, grid[key].indexOf("%")) / 100 : dom.height * grid[key].slice(0, grid[key].indexOf("%")) / 100;
          }
        }

        var tools = opt.tools;

        for (var k in tools) {
          if (k === "setPower" || k === "hideLow") continue;
          var value = tools[k];

          if (value.dom && value.show) {
            // k === "setPeak" && (flag.tools.flag_addPeak = value.show);
            this.addEvent(value.dom, "click", this.event.tool[k]);
          }
        }

        this._scope.r = {
          r: dom.width - opt.grid.right,
          w: dom.width - opt.grid.right - opt.grid.left,
          b: dom.height - opt.grid.bottom,
          h: dom.height - opt.grid.top - opt.grid.bottom,
          x: null,
          y: null,
          rs: null
        };
        var r = this._scope.r;
        var wr = r.w / 2;
        var hr = r.h / 2;
        r.x = wr + opt.grid.left;
        r.y = hr + opt.grid.top;
        r.rs = Math.min(wr, hr);
        opt.series.type === "bar" && (r.b -= 60); // 点击画线(描点)

        opt.series.type !== "bar" && opt.toolTip.isShow && this.addEvent(dom.name, "click", this.event.dom.click);
        var layer = this._drawTools.ctx;

        for (var _key in layer) {
          layer[_key].clearRect(0, 0, this._dom.width, this._dom.height);
        }

        if (coordinateSystem === "rectanguler") {
          if (opt.series.type !== "bar") {
            // 拖动图谱 & 开窗放大 handler
            this.addEvent(dom.name, "mousedown", this.event.dom.mousedown);
            this.addEvent(dom.name, "mouseup", this.event.dom.mouseup); // 双击

            this.addEvent(dom.name, "dblclick", this.event.dom.lineDblclick); // 缩放

            this.addEvent(dom.name, "mousewheel", this.event.dom.zoom); // dom.name.addEventListener('mousewheel', this.event.dom.zoom, false);

            var div = dom.name.children;
            this.addEvent(div[div.length - 1], "keydown", this.event.dom.keydown);
          } else if (opt.series.type === "bar") {
            this.addEvent(dom.name, "mousemove", this.event.dom.barMove);
            this.addEvent(dom.name, "dblclick", this.event.dom.barDblclick);
          }

          if (opt.x.data !== undefined && opt.x.data !== null && opt.y.data !== undefined && opt.y.data !== null) {
            this.restoreAll(1);
            this.drawMarkLine();
            /* 画报警线 */

            /* const markY = opt.y.markLine;
            if (markY && markY[0].data !== '') {
              this.drawMarkY();
            } */
          }
        } else if (coordinateSystem === "circle") {
          this.restoreAll();
          opt.series.circleAlarm.length > 0 && this.drawCircleAlarm();
        } else if (coordinateSystem === "circleLine") {
          this.restoreAll();
        }
      },
      // 初始化参数
      initParams: function initParams() {
        var flag = this._flag;
        var opt = this._option;

        if (opt.changePos) {
          flag.spectrumXName = "";
          flag.line = {
            key: -1,
            val: -1,
            idx: undefined // idx:0

          };
          flag.arr_B.length = 0;
          flag.arr_C.length = 0;
          flag.toolCheck = -1;
          flag.tools.autoPeakNum = -1;
          flag.addPeak.length = 0;
          flag.addPeakPos.length = 0;
          flag.labelLine = {
            spectrum: [],
            wave: []
          };
          flag.last_xWave = {
            key: -1,
            val: -1,
            idx: undefined
          };
          flag.maxMin = 0;
          flag.peakIndexArr = [];
          flag.tools.flag_subFreq = 0;
          flag.tools.flag_oneF = 0;
          flag.tools.flag_subTime = 0;
          flag.tools.flag_wave_extend = 0;
          flag.tools.flag_nx = 0;
        }

        if (opt.x.data && opt.x.data.length > 0) {
          if (this.getDataType(opt.x.data[0]) === "Array" && opt.x.data[flag.line.idx] != undefined) {
            var congruenceName = {
              x: false,
              y: false
            };

            if (this.getDataType(opt.x.name) === "Array") {
              congruenceName.x = opt.x.name.sort().toString() === flag.spectrumXName.sort().toString();
            } else {
              congruenceName.x = opt.x.name === flag.spectrumXName;
            }

            if (this.getDataType(opt.y.name) === "Array") {
              congruenceName.y = opt.y.name.toString() === flag.spectrumYName.sort().toString();
            } else {
              congruenceName.y = opt.y.name === flag.spectrumYName;
            }

            if (congruenceName.x && congruenceName.y) {
              if (flag.line.key === -1) {
                flag.line.val = undefined;
              } else {
                flag.line.val = opt.x.data[flag.line.idx][flag.line.key];
              }
            } else {
              if (flag.line.key > -1) {
                flag.line.key = this.indexOfArray(opt.x.data[flag.line.idx], flag.line.val, 0); // flag.spectrumXName = opt.x.name[flag.line.idx];
                // flag.spectrumYName = opt.y.name[flag.line.idx];
                //推入spectrumXName

                flag.spectrumXName = [];
                flag.spectrumYName = [];
                flag.spectrumXName.push(opt.x.name[flag.line.idx]);
                flag.spectrumYName.push(opt.y.name[flag.line.idx]);
              }
            }
          } else {
            if (opt.x.name === flag.spectrumXName || opt.y.name === flag.spectrumYName) {
              flag.line.val = opt.x.data[flag.line.key];
            } else {
              //spectrumXName置空
              flag.spectrumXName = "";
              flag.spectrumYName = "";
              flag.line.key = this.indexOfArray(opt.x.data, flag.line.val, 0);
              flag.spectrumXName = opt.x.name;
              flag.spectrumYName = opt.y.name;
            }
          }
        }

        flag.subFreqAxis = -1;
        flag.zoom = 0;
        flag.click = 1;
        this._scope = {
          // 数据尺寸
          v: {
            // x 轴
            x: {
              start: null,
              // 最小值
              end: null,
              // 最大值
              length: null // 数据长度

            },
            // y 轴
            y: {
              start: null,
              // 最小值
              end: null,
              // 最大值
              length: null // 数据长度

            }
          },
          // 图谱尺寸
          r: {
            r: null,
            // 最右侧位置
            w: null,
            // 宽度
            b: null,
            // 最下侧位置
            h: null // 高度

          }
        };
        this._movePos = {
          x: {
            oldVal: 0,
            newVal: 0,
            move: 0,
            source: 0,
            addLabel: 0
          },
          y: {
            oldVal: 0,
            newVal: 0,
            move: 0,
            source: 0,
            addLabel: 0
          }
        };
        var drawTools = this._drawTools.ctx;

        for (var key in drawTools) {
          drawTools[key].clearRect(0, 0, this._dom.width, this._dom.height);
        }
      },
      // 深度合并对象
      mergeOption: function mergeOption(FirstOBJ, SecondOBJ) {
        for (var key in SecondOBJ) {
          FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ? this.mergeOption(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
        }

        return FirstOBJ;
      },
      // 计算时间格式
      formatDateStr: function formatDateStr(date) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var time = {},
            str;
        time.yy = new Date(date).getFullYear();
        time.mm = new Date(date).getMonth() + 1;
        time.mm < 10 && (time.mm = "0" + time.mm);
        time.dd = new Date(date).getDate();
        time.dd < 10 && (time.dd = "0" + time.dd);
        str = type === 3 ? time.mm + "-" + time.dd : time.yy + "-" + time.mm + "-" + time.dd;

        if (type === 2 || type === 3) {
          time.h = new Date(date).getHours();
          time.h < 10 && (time.h = "0" + time.h);
          time.m = new Date(date).getMinutes();
          time.m < 10 && (time.m = "0" + time.m);
          time.s = new Date(date).getSeconds();
          time.s < 10 && (time.s = "0" + time.s);
          str += " " + time.h + ":" + time.m + ":" + time.s;
        }

        return str;
      },
      // 初始化
      restoreAll: function restoreAll(type) {
        var coordinateSystem = this._option.series.coordinateSystem;

        if (coordinateSystem === "rectanguler") {
          this.mappingX(type);
          this.mappingY(type);
          this.drawAxis();
          this.drawWave();
          this.zoomLine();
          /* 画报警线 */

          this.drawMarkY();
        } else if (coordinateSystem === "circle") {
          this.drawCircle();
          this.drawPoints();
        } else if (coordinateSystem === "circleLine") {
          this.drawCircleAxios();
          this.drawPointsLine();
        }
      },
      // 计算 x 轴比例
      mappingX: function mappingX(type) {
        // type：1 => 初始化；2 => 缩放；
        var scope = this._scope,
            params = this._computeParams;

        if (type === 1) {
          var opt = this._option;
          var optX = opt.x;
          var arr = optX.data;
          var l = arr.length;

          if (opt.series.type !== "bar") {
            params.extremum.x = {
              min: Number.MAX_VALUE,
              max: 0
            };
            var _i18 = 0;

            if (this.getDataType(arr[0]) === "Array") {
              for (; _i18 < l; _i18++) {
                var value = arr[_i18];

                for (var j = 0, len = value.length; j < len; j++) {
                  var val = value[j];
                  params.extremum.x.max < val && (params.extremum.x.max = val);
                  params.extremum.x.min > val && (params.extremum.x.min = val);
                }
              }
            } else {
              var range = optX.range;

              if (l === 1) {
                params.extremum.x.max = range.max;
                params.extremum.x.min = range.min;

                if (opt.x.type === "time") {
                  params.extremum.x.min = arr[0] - 60 * 60 * 24;
                  params.extremum.x.max = arr[0] + 60 * 60 * 24;
                }
              } else {
                for (; _i18 < l; _i18++) {
                  var _val4 = arr[_i18];
                  params.extremum.x.max < _val4 && (params.extremum.x.max = _val4);
                  params.extremum.x.min > _val4 && (params.extremum.x.min = _val4);
                }
              }
            }

            if (params.extremum.x.max === 0) {
              params.extremum.x.max = 1;
            }

            var divider = params.extremum.x.max - params.extremum.x.min;
            /* 如果所有的点X坐标都是相同的话，那么手动将固定距离为2 */

            if (divider == 0) {
              params.extremum.x.min = params.extremum.x.min - 1;
              params.extremum.x.max = params.extremum.x.max + 1;
              divider = 2;
            }

            var k = scope.r.w / divider;
            var b = (scope.r.r + this._option.grid.left - k * (params.extremum.x.max + params.extremum.x.min)) / 2;
            params.proportion.x = {
              k: k,
              b: b
            };
            scope.v.x.start = params.extremum.x.min;
            scope.v.x.end = params.extremum.x.max;
            scope.v.x.length = divider;
          } else {
            var bar = scope.r.w / l;
            var barWidth = bar / 2;
            var space = bar / 2;

            if (bar > 80) {
              bar > 80 && (barWidth = 40);
              space = bar - barWidth;
            }

            params.extremum.x = {
              min: barWidth,
              max: space
            };
            scope.v.x.start = params.extremum.x.min;
            scope.v.x.end = params.extremum.x.max;
            scope.v.x.length = bar;
          }
        } else {
          var _k = scope.r.w / (scope.v.x.end - scope.v.x.start);

          var _b = (scope.r.r + this._option.grid.left - _k * (scope.v.x.end + scope.v.x.start)) / 2;

          scope.v.x.length = scope.v.x.end - scope.v.x.start;
          params.proportion.x = {
            k: _k,
            b: _b
          };
        }
      },
      // 计算 y 轴比例
      mappingY: function mappingY(type) {
        // type：1 => 初始化；2 => 缩放；
        var wMarkLine = this._option.y.markLine;
        var scope = this._scope,
            params = this._computeParams;

        if (type === 1) {
          var arr = this._option.y.data;
          var l = arr.length;

          if (this._option.x.type === "category") {
            params.extremum.y = {
              min: Number.MAX_VALUE,
              max: Number.MAX_VALUE * -1
            };

            for (var _i19 = 0; _i19 < l; _i19++) {
              var val = arr[_i19];

              if (this.getDataType(arr[0]) === "Array") {
                for (var j = 0, len = val.length; j < len; j++) {
                  var value = val[j];
                  params.extremum.y.max < value && (params.extremum.y.max = Number(value));
                  params.extremum.y.min > value && (params.extremum.y.min = Number(value));
                }
              } else if (Number(val) || Number(val) === 0) {
                params.extremum.y.max < val && (params.extremum.y.max = Number(val));
                params.extremum.y.min > val && (params.extremum.y.min = Number(val));
              } else continue;
            } // 防止统计列表最小值不画柱体的现象


            if (this._option.series.type === "bar") {
              if (params.extremum.y.min == 0) {
                params.extremum.y.min = params.extremum.y.min - 0.02;
              } else {
                params.extremum.y.min = params.extremum.y.min - Math.abs(params.extremum.y.min);
              }
            } // if (this._option.series.type === "bar") params.extremum.y.min = 0;

          } else {
            params.extremum.y = {
              min: 0,
              max: Number.MAX_VALUE * -1
            };

            for (var _i20 = 0; _i20 < l; _i20++) {
              var _val5 = arr[_i20];

              if (this.getDataType(arr[0]) === "Array") {
                for (var _j = 0, _len = _val5.length; _j < _len; _j++) {
                  var _value = _val5[_j];
                  params.extremum.y.max < _value && (params.extremum.y.max = Number(_value));
                  params.extremum.y.min > _value && (params.extremum.y.min = Number(_value));
                }
              } else {
                params.extremum.y.max < _val5 && (params.extremum.y.max = Number(_val5)); // 图谱为波形频谱图中的趋势图时，循环取最小值（防止负值为最大值，0为最小值的情况）

                if (this._option.y.wtype && this._option.y.wtype == "wave_trend") {
                  params.extremum.y.min > _val5 && (params.extremum.y.min = Number(_val5));
                }
              }
            }
          }
          /* 如果最大最小值相同 */


          if (params.extremum.y.max === params.extremum.y.min) {
            params.extremum.y.max += 0.3;
            params.extremum.y.min -= 0.3;
          }
          /* 如果有报警线，需要画出报警线 */


          if (wMarkLine) {
            var min, max;
            wMarkLine.forEach(function (item, index) {
              if (index === 0) {
                min = item.data;
                max = item.data;
              } else {
                if (min > item.data) {
                  min = item.data;
                }

                if (max < item.data) {
                  max = item.data;
                }
              }
            });
            /* 如果数据在最大最小值 之外，则报警门限为最大最小值 */

            if (min < params.extremum.y.min) {
              params.extremum.y.min = min;
            }

            if (max > params.extremum.y.max) {
              params.extremum.y.max = max;
            }
          }

          var mutiple = (params.extremum.y.max - params.extremum.y.min) / 10;
          scope.v.y.start = params.extremum.y.min;
          scope.v.y.end = this.round(params.extremum.y.max + mutiple, 7);
          var k = scope.r.h / (scope.v.y.start - scope.v.y.end);
          scope.v.y.start === scope.v.y.end && (k = 0);
          var b = scope.r.b - scope.v.y.start * k;
          params.proportion.y = {
            k: k,
            b: b
          };
        } else {
          var _k2, _b2;

          var n = scope.v.y.start === scope.v.y.end ? -1 : scope.v.y.start - scope.v.y.end;
          _k2 = scope.r.h / n;
          _b2 = scope.r.b - scope.v.y.start * _k2;
          params.proportion.y = {
            k: _k2,
            b: _b2
          };
        }

        scope.v.y.length = scope.v.y.end - scope.v.y.start;
      },
      // 画坐标系
      drawAxis: function drawAxis() {
        var _this3 = this;

        var backCtx = this._drawTools.ctx.background;
        var opt = this._option;
        var scope = this._scope;
        var stationInfo = opt.y.stationInfo;
        backCtx.clearRect(0, 0, this._dom.width, this._dom.height); //  画 y 轴

        var nameX = "";
        var nameXArr = [];
        var nameY = "";
        var nameYArr = [];

        if (this.getDataType(opt.x.name) === "Array") {
          var _iterator = _createForOfIteratorHelper(opt.x.name),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var name = _step.value;

              if (!nameXArr.includes(name)) {
                nameX += "".concat(name, "/");
                nameXArr.push(name);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          nameX = nameX.slice(0, -1);
        } else {
          nameX = opt.x.name;
        }

        if (this.getDataType(opt.y.name) === "Array") {
          var _iterator2 = _createForOfIteratorHelper(opt.y.name),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _name = _step2.value;

              if (!nameYArr.includes(_name)) {
                nameY += "".concat(_name, "/");
                nameYArr.push(_name);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          nameY = nameY.slice(0, -1);
        } else {
          nameY = opt.y.name;
        }

        backCtx.beginPath();
        backCtx.save();
        backCtx.lineWidth = opt.y.lineStyle.width;
        backCtx.strokeStyle = opt.y.lineStyle.color;
        backCtx.moveTo(opt.grid.left + 0.5, this._scope.r.b + 0.5); // 原点

        backCtx.lineTo(opt.grid.left + 0.5, opt.grid.top); // y 轴

        backCtx.stroke();
        backCtx.restore();
        backCtx.font = opt.y.nameStyle.weight + " " + opt.y.nameStyle.size + " " + opt.y.nameStyle.family;
        backCtx.textBaseline = "bottom";
        backCtx.textAlign = opt.y.nameStyle.align;
        backCtx.fillStyle = opt.y.nameStyle.color;

        if (opt.y.name2 && opt.y.name2 != "") {
          if (opt.series.type !== "bar") {
            backCtx.fillText(nameY, opt.grid.left, opt.grid.top - 20);
            backCtx.fillText(opt.y.name2, opt.grid.left, opt.grid.top - 5);
          } else {
            var offset = backCtx.measureText(nameY);
            backCtx.fillText(nameY, opt.grid.left, opt.grid.top - 5);
            backCtx.textAlign = "left";
            backCtx.fillText(opt.y.name2, opt.grid.left + offset.width, opt.grid.top - 5);
          }
        } else {
          backCtx.fillText(nameY, opt.grid.left, opt.grid.top - 5);
        } //  画 x 轴


        backCtx.beginPath();
        backCtx.lineWidth = opt.x.lineStyle.width;
        backCtx.strokeStyle = opt.x.lineStyle.color;
        backCtx.moveTo(opt.grid.left + 0.5, this._scope.r.b + 0.5); // 原点

        backCtx.lineTo(this._scope.r.r + 0.5, this._scope.r.b + 0.5); // x 轴

        backCtx.font = opt.x.nameStyle.weight + " " + opt.x.nameStyle.size + " " + opt.x.nameStyle.family;
        backCtx.textBaseline = "middle";
        backCtx.textAlign = "right";
        backCtx.fillStyle = opt.x.nameStyle.color;
        backCtx.fillText(nameX, this._scope.r.r, this._scope.r.b + Number(opt.x.nameStyle.bottom));
        backCtx.fillText(opt.x.name2, this._scope.r.r, this._scope.r.b + Number(opt.x.nameStyle.bottom2));
        backCtx.stroke();
        backCtx.restore(); //  图谱标题

        if (opt.title.show && opt.title.name !== "") {
          backCtx.beginPath();
          backCtx.font = opt.title.fontStyle.weight + " " + opt.title.fontStyle.size + " " + opt.title.fontStyle.family;
          backCtx.textAlign = opt.title.fontStyle.align;
          backCtx.fillStyle = opt.title.fontStyle.color;
          backCtx.textBaseline = "top";
          var x;

          switch (opt.title.fontStyle.align) {
            case "left":
              x = 0;
              break;

            case "center":
              x = this._dom.width / 2;
              break;

            case "right":
              x = this._dom.width;
              break;
          }

          backCtx.fillText(opt.title.name, x, 5);
        }

        if (opt.x.data === undefined || opt.y.data.length === 0) {
          return;
        }

        backCtx.beginPath();
        backCtx.lineWidth = opt.x.lineStyle.width;
        backCtx.strokeStyle = opt.x.lineStyle.color;
        backCtx.textAlign = "center";
        backCtx.textBaseline = "middle";
        backCtx.save();
        var position = {
          x: {},
          y: {}
        };
        var fontLen = {
          x: 0,
          y: 0
        }; //  计算 x 轴刻度

        if (opt.series.type !== "bar") {
          position.x.iSegNum = Math.round(this._scope.r.w / 25);
          position.x.minSeg = this._scope.v.x.length / position.x.iSegNum;
          position.x.mi = Math.round(Math.log(position.x.minSeg) * Math.LOG10E);
          position.x.nScale = Math.pow(10, position.x.mi);
          position.x.seg = position.x.nScale / 5;
          position.x.seg < position.x.minSeg && (position.x.seg = position.x.nScale / 2);
          position.x.seg < position.x.minSeg && (position.x.seg = position.x.nScale);
          position.x.seg < position.x.minSeg && (position.x.seg = position.x.nScale * 2);
          position.x.seg < position.x.minSeg && (position.x.seg = position.x.nScale * 5);
          position.x.seg < position.x.minSeg && (position.x.seg = position.x.nScale * 10);
          position.x.seg = parseFloat(position.x.seg.toPrecision(7).toString()); //  画 x 轴刻度

          backCtx.font = opt.x.fontStyle.size + " " + opt.x.fontStyle.family;
          backCtx.fillStyle = opt.x.fontStyle.color;
          var timeLen = this._scope.v.x.end - this._scope.v.x.start;
          var start = opt.x.type === "time" ? this._scope.v.x.start : 0;

          for (var _i21 = start, j = 0, l = this._scope.v.x.end - position.x.seg; _i21 < l; _i21 += position.x.seg, j++) {
            var _x = _i21 * this._computeParams.proportion.x.k + this._computeParams.proportion.x.b;

            if (_x >= opt.grid.left && _x <= this._scope.r.r - 30) {
              // 不要挡住单位
              if (opt.x.type === "category" && j % 2 === 0) {
                var _font = parseFloat(_i21.toPrecision(6)).toString();

                if (_font.indexOf(".") !== -1) {
                  var fl = _font.slice(_font.indexOf("."));

                  fontLen.x <= fl.length ? fontLen.x = fl.length : _font = _font + "0";
                } else {
                  if (fontLen.x > 0) {
                    var zero = ".";

                    for (var k = 1; k < fontLen.x; k++) {
                      zero += "0";
                    }

                    _font = _font + zero;
                  } else if (position.x.seg < 0.5) {
                    _font += ".0";
                  }
                }

                backCtx.fillText(_font, _x, this._scope.r.b + 15);
                backCtx.moveTo(_x + 0.5, this._scope.r.b);
                backCtx.lineTo(_x + 0.5, this._scope.r.b + 5);
              } else if (opt.x.type === "time" && j % 5 === 0) {
                var _font2 = timeLen > 86400000 ? this.formatDateStr(_i21, 1) : this.formatDateStr(_i21, 3);

                backCtx.fillText(_font2, _x, this._scope.r.b + 15);
                backCtx.moveTo(_x + 0.5, this._scope.r.b);
                backCtx.lineTo(_x + 0.5, this._scope.r.b + 5);
              }
            }
          }
          /* 画站点信息 */


          if (stationInfo) {
            stationInfo.forEach(function (item) {
              if (item.distance < start || item.distance > _this3._scope.v.x.end - position.x.seg) return;
              /* item.符合 的站点 */

              var distance = item.distance;
              var font = item.station_name;
              var x = distance * _this3._computeParams.proportion.x.k + _this3._computeParams.proportion.x.b;
              backCtx.fillText(font, x, _this3._scope.r.b + 40);
            });
          }

          backCtx.stroke();
          backCtx.restore();
        } else {
          if (opt.x.xshow === false) {
            // 画 x 轴刻度
            backCtx.beginPath();
            backCtx.font = opt.x.fontStyle.size + " " + opt.x.fontStyle.family;
            backCtx.fillStyle = opt.x.fontStyle.color;
            backCtx.textAlign = "center";
            backCtx.textBaseline = "top";

            for (var _i22 = 0, _l5 = opt.x.data.length; _i22 < _l5; _i22++) {
              var value = opt.x.data[_i22]; // x轴分数据量赋值柱状图与序号会存在错位的现象

              var _x2 = scope.v.x.length * _i22 + opt.grid.left + 20;

              if (opt.x.data.length > 10) {
                _x2 = scope.v.x.length * _i22 + opt.grid.left + scope.v.x.length / 4;
              } // for (let j = 0, len = value.length; j < len; j++) {
              //   let text = value[j];
              //   if (text.length > 6) {
              //     text = `${text.slice(0, 7)}...`;
              //   }


              var a = _i22 + 1;
              backCtx.fillText(a, _x2, scope.r.b + 18 + 1.5); // }
            }
          } else {
            // 画 x 轴刻度
            backCtx.beginPath();
            backCtx.font = opt.x.fontStyle.size + " " + opt.x.fontStyle.family;
            backCtx.fillStyle = opt.x.fontStyle.color;
            backCtx.textAlign = "center";
            backCtx.textBaseline = "top";

            for (var _i23 = 0, _l6 = opt.x.data.length; _i23 < _l6; _i23++) {
              var _value2 = opt.x.data[_i23];

              var _x3 = scope.v.x.length * _i23 + opt.grid.left + 20;

              for (var _j2 = 0, len = _value2.length; _j2 < len; _j2++) {
                var text = _value2[_j2];

                if (text.length > 6) {
                  text = "".concat(text.slice(0, 7), "...");
                }

                backCtx.fillText(text, _x3, scope.r.b + 18 * _j2 + 1.5);
              }
            }
          }
        } //  计算 y 轴刻度

        /* 20等分，每份的长度 */


        position.y.iSegNum = Math.round(this._scope.r.h / 20);
        /* 最大最小值距离 */

        position.y.minSeg = this._scope.v.y.length / position.y.iSegNum;
        position.y.mi = Math.round(Math.log(position.y.minSeg) * Math.LOG10E);
        position.nScaleY = Math.pow(10, position.y.mi); // 刻度

        position.y.seg = position.nScaleY / 5;
        position.y.seg < position.y.minSeg && (position.y.seg = position.nScaleY / 2);
        position.y.seg < position.y.minSeg && (position.y.seg = position.nScaleY);
        position.y.seg < position.y.minSeg && (position.y.seg = position.nScaleY * 2);
        position.y.seg < position.y.minSeg && (position.y.seg = position.nScaleY * 5);
        position.y.seg < position.y.minSeg && (position.y.seg = position.nScaleY * 10);
        /* 7位长度 */

        position.y.seg = parseFloat(position.y.seg.toPrecision(7).toString()); //  画 y 轴刻度

        backCtx.font = opt.y.fontStyle.size + " " + opt.y.fontStyle.family;
        backCtx.textAlign = "right";
        backCtx.fillStyle = opt.y.fontStyle.color;
        var interval = (this._scope.v.y.end - this._scope.v.y.start) / position.y.seg > 7 ? 2 : 1;
        position.y.seg <= 0.00001 && (position.y.seg = 0.00001);
        var font = "";

        for (var _i24 = this._scope.v.y.end, _j3 = 0; _i24 >= this._scope.v.y.start; _j3++) {
          var y = this.round(_i24 * this._computeParams.proportion.y.k + this._computeParams.proportion.y.b);

          if (y <= this._scope.r.b && y >= opt.grid.top && _j3 % interval === 0 && _j3 !== 0 && _i24 !== font) {
            font = this.round(_i24);
            /* if (font.indexOf('.') !== -1) {
              let fl = font.slice(font.indexOf('.'))
              fontLen.y <= fl.length ?
                fontLen.y = font.slice(font.indexOf('.')).length :
                font = font + '0'
            } else {
              if (fontLen.y > 0) {
                let zero = '.'
                for (let k = 1; k < fontLen.y; k++) {
                  zero += '0'
                }
                font = font + zero
              }
            } */

            /* font > 0 ?
              backCtx.fillText(font, opt.grid.left - 10, y + 0.5) : */

            backCtx.fillText(font, opt.grid.left - 10, y + 0.5);
            backCtx.moveTo(opt.grid.left, y + 0.5);
            backCtx.lineTo(opt.grid.left - 5, y + 0.5);
          }

          _i24 = this.round(_i24 - position.y.seg, 7);
        }
        /* for (let i = 0, j = 0; i <= this._scope.v.y.end; i += position.y.seg, j++) {
          let y = i * this._computeParams.proportion.y.k + this._computeParams.proportion.y.b;
          let font = parseFloat(i.toPrecision(7)).toString();
          if (y <= this._scope.r.b && y >= opt.grid.top && j % interval === 0) {
            if (font.indexOf('.') !== -1) {
              let fl = font.slice(font.indexOf('.'))
              fontLen.y <= fl.length ?
                fontLen.y = font.slice(font.indexOf('.')).length :
                font = font + '0'
            } else {
              if (fontLen.y > 0) {
                let zero = '.'
                for (let k = 1; k < fontLen.y; k++) {
                  zero += '0'
                }
                font = font + zero
              }
            }
            font > 0 ?
              backCtx.fillText(font, opt.grid.left - 10, y + 0.5) :
              font < 0 ?
              backCtx.fillText(font, opt.grid.left - 10, y + 0.5) :
              backCtx.fillText(0, opt.grid.left - 10, y + 0.5)
            backCtx.moveTo(opt.grid.left, y + 0.5)
            backCtx.lineTo(opt.grid.left - 5, y + 0.5)
          }
        } */


        backCtx.stroke();
        backCtx.beginPath();
        backCtx.strokeStyle = opt.y.splitLineStyle.color;
        backCtx.lineWidth = opt.y.splitLineStyle.width; // 刻度标线 （y轴）

        for (var _i25 = this._scope.v.y.end, _j4 = 0; _i25 >= this._scope.v.y.start; _i25 -= position.y.seg, _j4++) {
          var _y = this.round(_i25 * this._computeParams.proportion.y.k + this._computeParams.proportion.y.b);

          var fonts = Math.round(_i25 * 1000000) / 1000000;

          if (_y <= this._scope.r.b && _y >= opt.grid.top && _j4 % interval === 0 && _j4 !== 0 && fonts !== font) {
            font = fonts;
            backCtx.moveTo(opt.grid.left, _y + 0.5);
            backCtx.lineTo(this._scope.r.r, _y + 0.5);
          }
        }
        /* for (let i = 0, j = 0; i <= this._scope.v.y.end; i += position.y.seg, j++) {
          let y = i * this._computeParams.proportion.y.k + this._computeParams.proportion.y.b;
          if (y <= this._scope.r.b && y >= opt.grid.top && j % interval === 0) {
            backCtx.moveTo(opt.grid.left, y + 0.5)
            backCtx.lineTo(this._scope.r.r, y + 0.5)
          }
        } */


        backCtx.stroke();
      },
      // 点击画线
      drawLine: function drawLine(res) {
        var params = this._computeParams.proportion,
            opt = this._option,
            clickCtx = this._drawTools.ctx.click,
            xOVal = params.x.k * res.val + params.x.b;
        var scopeR = this._scope.r;
        var line = {
          x: {
            oldVal: res.key == 0 ? xOVal + 0.5 : xOVal,
            newVal: xOVal
          },
          y: {
            oldVal: opt.grid.top,
            newVal: scopeR.b
          }
        };
        var circle = {
          x: xOVal,
          y: []
        },
            yVal = [];
        clickCtx.clearRect(0, 0, this._dom.width, this._dom.height);

        if (res.idx !== undefined) {
          var posName = opt.series.posName;
          var str = [];
          var minX = Number.MAX_VALUE;
          var minY = Number.MAX_VALUE;
          var maxX = Number.MAX_VALUE * -1;
          var maxY = Number.MAX_VALUE * -1;
          var unit = opt.y.name;

          for (var _i26 = 0, _l7 = opt.y.data.length; _i26 < _l7; _i26++) {
            var valueX = opt.x.data[_i26];
            var valueY = opt.y.data[_i26];
            var valueSpeed = void 0;

            if (opt.y.speed && opt.y.speed[_i26]) {
              valueSpeed = opt.y.speed[_i26];
            } // const valueSpeed = opt.y.speed[i];


            for (var j = 0, len = valueY.length; j < len; j++) {
              var valX = valueX[j];
              var valY = valueY[j];

              if (j === res.key && valX === res.val) {
                if (valY < minY) {
                  minY = valY;
                  minX = valX;
                }

                if (valY > maxY) {
                  maxY = valY;
                  maxX = valX;
                }

                var vY = this.round(valY, 4);
                circle.y.push(valY * params.y.k + params.y.b);

                if (valueSpeed && valueSpeed[j] !== undefined) {
                  str.push("".concat(posName[_i26], "\uFF1A").concat(vY).concat(unit[_i26], "/\u8F6C\u901F\uFF1A").concat(valueSpeed[j], "rpm"));
                } else {
                  str.push("".concat(posName[_i26], "\uFF1A").concat(vY).concat(unit[_i26]));
                } // if (valueSpeed && valueSpeed[j] !== undefined) {
                //   str.push(`转速：${valueSpeed[j]}rpm`);
                // }
                // yVal.push(typeof valY === 'number' ? Number(valY.toFixed(4)).toString() : valY);


                break;
              }
            }
          }

          var l = str.length;

          if (l > 0) {
            var tt = opt.toolTip;
            var size = tt.symbol.size;
            var text = this.round(res.val, 4);
            var w = text.toString().length * 12;
            clickCtx.beginPath();
            clickCtx.strokeStyle = tt.lineStyle.color; // 画线

            if (tt.symbol.show) {
              clickCtx.moveTo(line.x.oldVal, line.y.oldVal);

              for (var _i27 = 0; _i27 < l; _i27++) {
                clickCtx.lineTo(xOVal, circle.y[_i27] - size);
                clickCtx.moveTo(opt.grid.left, circle.y[_i27]);
                clickCtx.lineTo(xOVal - size, circle.y[_i27]);
                clickCtx.moveTo(xOVal + size, circle.y[_i27]);
                clickCtx.lineTo(scopeR.r, circle.y[_i27]);
                clickCtx.moveTo(xOVal, circle.y[_i27] + size);
              }

              clickCtx.lineTo(xOVal, line.y.newVal);
              clickCtx.stroke();

              for (var _i28 = 0; _i28 < l; _i28++) {
                clickCtx.beginPath();
                clickCtx.fillStyle = tt.symbol.color !== "" ? tt.symbol.color : tt.lineStyle.color;
                clickCtx.arc(xOVal, circle.y[_i28], size, 0, Math.PI * 2);
                clickCtx.fill();
              }
            } else {
              clickCtx.moveTo(line.x.oldVal, line.y.oldVal);
              clickCtx.lineTo(xOVal, line.y.newVal);

              for (var _i29 = 0; _i29 < l; _i29++) {
                clickCtx.moveTo(opt.grid.left, circle.y[_i29]);
                clickCtx.lineTo(scopeR.r, circle.y[_i29]);
              }

              clickCtx.stroke();
            } // 横坐标


            var rectX = line.x.oldVal - w / 2;
            var rectY = line.y.newVal + 1;
            var alignX = "center";

            if (rectX + w > scopeR.r) {
              rectX -= w / 2;
              alignX = "right";
            }

            clickCtx.beginPath();
            clickCtx.fillStyle = tt.background.color;
            clickCtx.fillRect(rectX, rectY, w, 20);
            clickCtx.fillStyle = tt.fontStyle.color;
            clickCtx.font = tt.fontStyle.weight + " " + tt.fontStyle.size + " " + tt.fontStyle.family;
            clickCtx.textBaseline = "top";
            clickCtx.textAlign = alignX;

            if (opt.x.type === "category") {
              clickCtx.fillText(text, line.x.oldVal, line.y.newVal + 5);
            } else if (opt.x.type === "time") {
              clickCtx.fillText(this.formatDateStr(res.val, 2), line.x.oldVal, line.y.newVal + 5);
            } // 浮窗信息


            w = 0;

            var _iterator3 = _createForOfIteratorHelper(str),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var value = _step3.value;
                var offset = clickCtx.measureText(value).width + 10;
                offset > w && (w = offset);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            maxX = maxX * params.x.k + params.x.b;
            maxY = maxY * params.y.k + params.y.b;
            minX = minX * params.x.k + params.x.b;
            minY = minY * params.y.k + params.y.b;
            var h = l * 30;
            var x = 0;
            var y = 0;
            var separate = scopeR.h * 2 / 3 + opt.grid.top;

            if (minY >= separate) {
              x = maxX + 20;
              y = maxY - 20 - h;
            } else {
              x = minX + 20;
              y = minY + 20;
            }

            if (y < opt.grid.top) {
              y = opt.grid.top;
            } else if (y + h > scopeR.b) {
              y -= 40 + h + opt.grid.bottom;
            }

            if (x + w + 100 >= scopeR.r) {
              x -= w + 40;
            }

            clickCtx.beginPath();
            clickCtx.fillStyle = tt.background.color;
            clickCtx.fillRect(x, y, w, h);
            clickCtx.fillStyle = tt.fontStyle.color;
            clickCtx.textAlign = "left";
            clickCtx.textBaseline = "top";

            for (var _i30 = 0; _i30 < l; _i30++) {
              var ty = _i30 === 0 ? 8 : _i30 * 30 + 8;
              clickCtx.fillText(str[_i30], x + 6, y + ty);
            }
          }
        } else {
          yVal = typeof opt.y.data[res.key] === "number" ? [Number(opt.y.data[res.key].toFixed(4)).toString()] : [opt.y.data[res.key]];
          circle = {
            x: xOVal,
            y: [opt.y.data[res.key] * params.y.k + params.y.b]
          };
          var _l8 = circle.y.length;
          var isDraw = false;

          for (var _i31 = 0; _i31 < _l8; _i31++) {
            var _value3 = circle.y[_i31]; // +0.1防止散点图的点位于0轴出校值

            if (_value3 >= opt.grid.top && _value3 <= this._scope.r.b + 0.1) {
              isDraw = true;
              break;
            }
          }

          if (line.x.oldVal >= opt.grid.left && line.x.oldVal <= this._scope.r.r && isDraw) {
            // 画线
            if (opt.toolTip.symbol.show) {
              var _l10 = circle.y.length;
              var _size = opt.toolTip.symbol.size;
              clickCtx.beginPath();
              clickCtx.lineWidth = 1;
              clickCtx.strokeStyle = opt.toolTip.lineStyle.color; // 竖线

              clickCtx.moveTo(line.x.oldVal, line.y.oldVal);

              for (var _i32 = 0; _i32 < _l10; _i32++) {
                clickCtx.lineTo(line.x.newVal, circle.y[_i32] - _size);
                clickCtx.moveTo(line.x.newVal, circle.y[_i32] + _size);
              }

              clickCtx.lineTo(line.x.newVal, line.y.newVal); // 横线

              for (var _i33 = 0; _i33 < _l10; _i33++) {
                clickCtx.moveTo(opt.grid.left, circle.y[_i33]);
                clickCtx.lineTo(circle.x - _size, circle.y[_i33]);
                clickCtx.moveTo(circle.x + _size, circle.y[_i33]);
                clickCtx.lineTo(this._scope.r.r, circle.y[_i33]);
              }

              clickCtx.stroke(); // symbol

              for (var _i34 = 0; _i34 < _l10; _i34++) {
                clickCtx.beginPath();
                clickCtx.arc(circle.x, circle.y[_i34], _size, 0, 2 * Math.PI);
                clickCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : opt.toolTip.lineStyle.color;
                clickCtx.fill();
                clickCtx.moveTo(line.x.oldVal, circle.y[_i34] + _size);
                clickCtx.lineTo(line.x.newVal, line.y.newVal);
              }

              clickCtx.stroke();
            } else {
              clickCtx.beginPath();
              clickCtx.lineWidth = 1;
              clickCtx.strokeStyle = opt.toolTip.lineStyle.color;
              clickCtx.moveTo(line.x.oldVal, line.y.oldVal);
              clickCtx.lineTo(line.x.newVal, line.y.newVal);
              clickCtx.moveTo(opt.grid.left, circle.y);
              clickCtx.lineTo(this._scope.r.r, circle.y);
              clickCtx.stroke();
            } // 画坐标值


            var _l9 = yVal.length;
            var num = 0;

            for (var _i35 = 0; _i35 < _l9; _i35++) {
              yVal[_i35].length > num && (num = yVal[_i35].length);
            }

            var width = num === 1 ? 14 : num >= 5 ? num * 10 - 10 : num * 10;
            clickCtx.beginPath();
            clickCtx.fillStyle = opt.toolTip.background.color;

            for (var _i36 = 0; _i36 < circle.y.length; _i36++) {
              clickCtx.fillRect(opt.grid.left - width - 1, circle.y[_i36] - 10, width, 20);
            }

            clickCtx.font = opt.toolTip.fontStyle.weight + " " + opt.toolTip.fontStyle.size + " " + opt.toolTip.fontStyle.family;

            var _text = this.round(res.val, 4);

            var _w = _text.toString().length * 12;

            if (opt.x.type === "category") {
              var _rectX = line.x.oldVal - _w / 2;

              var _rectY = line.y.newVal + 1;

              var _alignX = "center";

              if (_rectX + _w > scopeR.r) {
                _rectX -= _w / 2;
                _alignX = "right";
              }

              clickCtx.fillStyle = opt.toolTip.background.color;
              clickCtx.fillRect(_rectX, _rectY, _w, 20);
              clickCtx.fillStyle = opt.toolTip.fontStyle.color;
              clickCtx.textBaseline = "top";
              clickCtx.textAlign = _alignX;
              clickCtx.fillText(_text, line.x.oldVal, line.y.newVal + 5);
              clickCtx.textBaseline = "middle";
              clickCtx.textAlign = "right";

              for (var _i37 = 0; _i37 < yVal.length; _i37++) {
                clickCtx.fillText(this.round(yVal[_i37], 4), opt.grid.left - 5, circle.y[_i37]);
              }
            } else if (opt.x.type === "time") {
              var _rectX2 = line.x.oldVal - _w / 2;

              var _rectY2 = line.y.newVal + 1;

              var _alignX2 = "center";

              if (_rectX2 + _w > scopeR.r) {
                _rectX2 -= _w / 2;
                _alignX2 = "right";
              }

              clickCtx.fillStyle = opt.toolTip.background.color;
              clickCtx.fillRect(_rectX2, _rectY2, _w, 20);
              clickCtx.fillStyle = opt.toolTip.fontStyle.color;
              clickCtx.textBaseline = "middle";
              clickCtx.textAlign = "right";

              for (var _i38 = 0; _i38 < yVal.length; _i38++) {
                clickCtx.fillText(this.round(yVal[_i38], 4), opt.grid.left - 5, circle.y[_i38]);
              }

              clickCtx.textBaseline = "top";
              clickCtx.textAlign = _alignX2;
              clickCtx.fillText(this.formatDateStr(res.val, 2), line.x.oldVal, line.y.newVal + 5);
            }
          }
        }
      },

      /* 趋势图多个图谱之间的连接，给下标志，画坐标线 */
      drawLineByX: function drawLineByX(xVal) {
        var obj = {
          val: 0,
          // 当前 x 轴坐标
          key: 0,
          // 当前位置下标
          idx: 0 // 鼠标位置距离最近点距离

        };
        var Xarray = this._option.x.data[0];

        for (var _i39 = 0; _i39 < Xarray.length; _i39++) {
          if (Xarray[_i39] === xVal) {
            obj.val = xVal;
            obj.key = _i39;
            this.drawLine(obj);
            break;
          }
        }
      },
      // 画波形图
      drawWave: function drawWave() {
        var params = this._computeParams.proportion;
        var dataCtx = this._drawTools.ctx.data;
        var opt = this._option;
        var xArr = opt.x.data || [];
        var xBArr = opt.x.dataSymbol || []; //有波形的点

        var yArr = opt.y.data || [];
        var series = opt.series;
        var color = series.lineStyle.color;
        var yk = params.y.k;
        var yb = params.y.b;
        dataCtx.clearRect(0, 0, this._dom.width, this._dom.height);

        if (series.type === "bar") {
          var scope = this._scope;
          var vx = scope.v.x;
          dataCtx.beginPath();
          dataCtx.lineWidth = series.lineStyle.width;
          dataCtx.fillStyle = this.getDataType(color) === "Array" ? color[i] : color;

          for (var _i40 = 0, l = yArr.length; _i40 < l; _i40++) {
            var _y2 = yArr[_i40] * yk + yb;

            var _x4 = scope.v.x.length * _i40 + opt.grid.left;

            dataCtx.fillRect(_x4, _y2, vx.start, scope.r.b - _y2);
          }

          return;
        }

        var xk = params.x.k;
        var xb = params.x.b;
        var scopeV = this._scope.v;
        var real = this._scope.r;
        var x, y;
        var left = scopeV.x.start;
        var right = scopeV.x.end;
        var top = scopeV.y.end;
        var bottom = scopeV.y.start;
        var dx = 1;

        if (series.type === "line") {
          if (this.getDataType(xArr[0]) === "Array") {
            for (var _i41 = xArr.length; _i41--;) {
              var val = xArr[_i41];
              dataCtx.beginPath();
              dataCtx.lineWidth = series.lineStyle.width;
              dataCtx.strokeStyle = this.getDataType(color) === "Array" ? color[_i41] : color;

              for (var j = val.length; j--;) {
                if (j === 0) break;
                var value = val[j];
                var xn = val[j - 1],
                    yo = yArr[_i41][j],
                    yn = yArr[_i41][j - 1];

                if (xn >= left && value <= right && xn <= right && value >= left && yn <= top && yn >= bottom && yo >= bottom && yo <= top) {
                  x = {
                    oVal: xk * value + xb,
                    nVal: xk * xn + xb
                  };
                  y = {
                    oVal: yo * yk + yb,
                    nVal: yn * yk + yb
                  };
                  dataCtx.moveTo(x.oVal, y.oVal);
                  dataCtx.lineTo(x.nVal, y.nVal);
                }
              }

              dataCtx.stroke();
            }

            if (series.symbol.show) {
              for (var _i42 = 0, _l11 = xArr.length; _i42 < _l11; _i42++) {
                var _value4 = xArr[_i42];

                for (var _j5 = 0, len = _value4.length; _j5 < len; _j5++) {
                  y = yArr[_i42][_j5];
                  var _val6 = _value4[_j5];
                  /* 后加的判断，如果有则进入，来画趋势图有波形的点 */

                  if (opt.x.dataSymbol !== undefined) {
                    var XB = opt.x.dataSymbol[_i42];
                    /* 如果有波形，才会画点 */

                    if (XB.includes(_val6)) {
                      if (_val6 >= left && _val6 <= right && y <= top && y >= bottom) {
                        _val6 = _val6 * xk + xb;
                        y = y * yk + yb;
                        dataCtx.beginPath();
                        dataCtx.strokeStyle = series.lineStyle.color[_i42];
                        dataCtx.fillStyle = series.symbol.color === "" ? "#fff" : series.symbol.color;
                        dataCtx.arc(_val6, y, 3, 0, 2 * Math.PI);
                        dataCtx.stroke();
                        dataCtx.fill();
                      }
                    }
                  } else {
                    if (_val6 >= left && _val6 <= right && y <= top && y >= bottom) {
                      _val6 = _val6 * xk + xb;
                      y = y * yk + yb;
                      dataCtx.beginPath();
                      dataCtx.strokeStyle = series.lineStyle.color[_i42];
                      dataCtx.fillStyle = series.symbol.color === "" ? "#fff" : series.symbol.color;
                      dataCtx.arc(_val6, y, 3, 0, 2 * Math.PI);
                      dataCtx.stroke();
                      dataCtx.fill();
                    }
                  }
                }
              }
            }
          } else if (Number(xArr[0]) || Number(xArr[0]) === 0) {
            // 
            dataCtx.beginPath();
            dataCtx.lineWidth = series.lineStyle.width;
            dataCtx.strokeStyle = series.lineStyle.color;
            var tmp_r = xk * xArr[1] + xb - (xk * xArr[0] + xb);
            /* 第一个点与第二个点的像素差 */

            if (tmp_r < 1) {
              if (tmp_r <= Number.MIN_VALUE) return;
              dx = Math.ceil(1 / tmp_r); //两个点的距离像素的倒数(向上取整)
              // 当缩到足够小时，坐标转换会出现精度问题，导致dx过大
              // 当dx大到一定程度，将使得下面的循环变量i不能递增，从而死机
              // dx 超出波形点的长度是无意义的，因此作如下限制

              if (dx > xArr.length) dx = xArr.length;
            }

            var _l12 = xArr.length;

            if (_l12 > 1) {
              for (var _i43 = _l12; _i43 > 0; _i43 = _i43 - dx) {
                var _val7 = xArr[_i43];
                var max_y = -Number.MAX_VALUE;
                var min_y = Number.MAX_VALUE;

                if (dx > 1) {
                  // 取y值得最大值和最小值
                  var b = _i43;
                  var e = b - dx;

                  if (b > xArr.length) {
                    b = xArr.lengt;
                  }

                  if (e < 0) {
                    e = 0;
                  }

                  for (var _j6 = b; _j6 > e; _j6--) {
                    var _y3 = yArr[_j6];
                    if (_y3 > max_y) max_y = _y3;
                    if (_y3 < min_y) min_y = _y3;
                  }

                  if ( // xn >= left &&
                  // xn <= right &&
                  _val7 >= left && _val7 <= right && max_y <= top && max_y >= bottom && min_y >= bottom && min_y <= top) {
                    x = {
                      oVal: xk * _val7 + xb,
                      nVal: xk * _val7 + xb
                    };
                    y = {
                      oVal: yk * min_y + yb,
                      nVal: yk * max_y + yb
                    };
                    dataCtx.lineTo(x.oVal, y.oVal);
                    dataCtx.moveTo(x.oVal, y.oVal);
                    dataCtx.lineTo(x.nVal, y.nVal);
                  }
                } else {
                  var _xn = xArr[_i43 - 1],
                      _yo = yArr[_i43],
                      _yn = yArr[_i43 - 1];

                  if (_xn >= left && _xn <= right && _val7 >= left && _val7 <= right && _yn <= top && _yn >= bottom && _yo >= bottom && _yo <= top) {
                    x = {
                      oVal: xk * _val7 + xb,
                      nVal: xk * _xn + xb
                    };
                    y = {
                      oVal: _yo * yk + yb,
                      nVal: _yn * yk + yb
                    };
                    dataCtx.moveTo(x.oVal, y.oVal);
                    dataCtx.lineTo(x.nVal, y.nVal);
                  }
                }
              }
              /* for (let i = l; i--;) {
                const val = xArr[i];
                if (i === 0) break;
                let xn = xArr[i - 1],
                  yo = yArr[i],
                  yn = yArr[i - 1];
                if (
                  xn >= left &&
                  xn <= right &&
                  val >= left &&
                  val <= right &&
                  yn <= top &&
                  yn >= bottom &&
                  yo >= bottom &&
                  yo <= top
                ) {
                  x = {
                    oVal: xk * val + xb,
                    nVal: xk * xn + xb
                  };
                  y = {
                    oVal: yo * yk + yb,
                    nVal: yn * yk + yb
                  };
                  dataCtx.moveTo(x.oVal, y.oVal);
                  dataCtx.lineTo(x.nVal, y.nVal);
                }
              } */


              dataCtx.stroke();
            }

            if (series.symbol.show) {
              for (var _i44 = 0, _l13 = xArr.length; _i44 < _l13; _i44++) {
                var _val8 = xArr[_i44];
                y = yArr[_i44];

                if (_val8 >= left && _val8 <= right && y <= top && y >= bottom) {
                  _val8 = _val8 * xk + xb;
                  y = y * yk + yb;
                  dataCtx.beginPath();
                  dataCtx.strokeStyle = series.lineStyle.color;
                  dataCtx.fillStyle = series.symbol.color === "" ? "#fff" : series.symbol.color;
                  dataCtx.arc(_val8, y, 3, 0, 2 * Math.PI);
                  dataCtx.stroke();
                  dataCtx.fill();
                }
              }
            }
          }
        } else if (series.type === "bar-line") {
          dataCtx.beginPath();
          dataCtx.lineWidth = series.lineStyle.width;
          dataCtx.strokeStyle = series.lineStyle.color;

          for (var _i45 = 0, _l14 = xArr.length; _i45 < _l14; _i45++) {
            var _val9 = xArr[_i45];
            y = yArr[_i45];
            var cy = yb <= real.b ? yb : real.b;

            if (_val9 >= left && _val9 <= right && y <= top && y >= bottom) {
              _val9 = _val9 * xk + xb;
              y = y * yk + yb;
              dataCtx.moveTo(_val9, cy);
              dataCtx.lineTo(_val9, y + 1);
            }
          }

          dataCtx.stroke();
        } else if (series.type === "scatter") {
          //散点图
          for (var _i46 = xArr.length; _i46--;) {
            var _val10 = xArr[_i46];
            if (_i46 === 0) break;
            var _xn2 = xArr[_i46 - 1],
                _yo2 = yArr[_i46],
                _yn2 = yArr[_i46 - 1];

            if (_val10 >= left && _val10 <= right && _yo2 >= bottom && _yo2 <= top) {
              x = {
                oVal: xk * _val10 + xb
              };
              y = {
                oVal: _yo2 * yk + yb
              };
              dataCtx.beginPath();
              dataCtx.fillStyle = series.symbol.color;
              dataCtx.arc(x.oVal, y.oVal, series.symbol.size, 0, Math.PI * 2, true);
              dataCtx.fill();
              dataCtx.closePath(); //注意此处
            }
          }
        }
      },
      // 查找距离鼠标位置最近点
      findNearbyPoint: function findNearbyPoint(dx, dy) {
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var v1,
            v2,
            dValue = {
          val: 0,
          // 当前 x 轴坐标
          key: 0,
          // 当前位置下标
          dx: 0 // 鼠标位置距离最近点距离

        };
        var arrX = this._option.x.data;
        var arrY = this._option.y.data;
        var paramsX = this._computeParams.proportion.x;
        var paramsY = this._computeParams.proportion.y;
        var xk = paramsX.k;
        var xb = paramsX.b;
        var yk = paramsY.k;
        var yb = paramsY.b;
        var l = arrX.length;

        if (this.getDataType(arrX[0]) === "Array" && index === -1) {
          var key = this._flag.subFreqAxis;

          if (key !== -1) {
            var valX = arrX[key];
            var _l15 = valX.length;
            debugger;

            for (var i = _l15; i--;) {
              if (i === _l15 - 1) {
                v1 = Math.abs(valX[i] * xk + xb - dx);
                v2 = Math.abs(valX[i - 1] * xk + xb - dx);
                dValue = v1 > v2 ? {
                  index: key,
                  val: valX[i - 1],
                  key: i - 1,
                  dx: v2
                } : {
                  index: key,
                  val: valX[i],
                  key: i,
                  dx: v1
                };
              } else {
                v1 = Math.abs(valX[i] * xk + xb - dx);
                if (dValue.dx > v1) dValue = {
                  index: key,
                  val: valX[i],
                  key: i,
                  dx: v1
                };
              }
            }
            /* 二分法取 */
            // let ax = (dx - xb) / xk
            // let key = this.binarySerach(valX, ax);
            // dValue = {
            //   val: arrX[key],
            //   key,
            //   index: key,
            // }

          } else {
            for (var _i47 = l; _i47--;) {
              var _valX = arrX[_i47];
              var valY = arrY[_i47];
              var len = _valX.length;
              /* for (let j = len; j--;) {
                const vx1 = (valX[j] * xk + xb - dx) ** 2;
                const vy1 = (valY[j] * yk + yb - dy) ** 2;
                if (i === l - 1 && j === len - 1) {
                  const vx2 = (valX[j - 1] * xk + xb - dx) ** 2;
                  const vy2 = (valY[j - 1] * yk + yb - dy) ** 2;
                  v1 = vx1 + vy1;
                  v2 = vx2 + vy2;
                  if (v1 > v2) {
                    dValue = {
                      val: valX[j - 1],
                      key: j - 1,
                      dx: v2,
                      index: i,
                      valY: valY[j - 1]
                    };
                  } else {
                    dValue = {
                      val: valX[j],
                      key: j,
                      dx: v1,
                      index: i,
                      valY: valY[j]
                    };
                  }
                } else {
                  v1 = vx1 + vy1;
                  if (dValue.dx > v1) {
                    dValue = {
                      val: valX[j],
                      key: j,
                      dx: v1,
                      index: i,
                      valY: valY[j]
                    };
                  }
                }
              }*/

              var ax = (dx - xb) / xk;

              var _key2 = this.binarySerach(_valX, ax);

              dValue = {
                val: _valX[_key2],
                key: _key2,
                index: _i47,
                valY: valY[_key2]
              };
            }
          }
        } else {
          if (index !== -1) {
            arrX = arrX[index];
            l = arrX.length;
          }
          /* 二分法取值 */
          //ax为dx转坐标值


          var _ax2 = (dx - xb) / xk;

          var _key3 = this.binarySerach(arrX, _ax2);

          dValue = {
            val: arrX[_key3],
            key: _key3
          }; // 散点图

          /* 根据x值取x的下标，根据下表确定一个范围，在范围内数据根据距离值点 */

          if (this._option.series.type == "scatter" && dy != undefined) {
            var keyMax, keyMin;

            if (arrX.length < 10) {
              keyMax = arrX.length - 1;
              keyMin = 0;
            } else if (arrX.length < 100) {
              if (_key3 > 5) {
                keyMax = _key3 + 5;
                keyMax > arrX.length - 1 ? keyMax = arrX.length - 1 : "";
                keyMin = _key3 - 4 + (keyMax - arrX.length);
              } else {
                keyMin = 0;
                keyMax = 9;
              }
            } else {
              var dKeyPercent = 5;
              var dKeyLen = Math.floor(arrX.length * dKeyPercent / 100);
              keyMin = _key3 - dKeyLen < 0 ? 0 : _key3 - dKeyLen;
              keyMax = _key3 + dKeyLen >= arrX.length ? arrX.length - 1 : _key3 + dKeyLen;
            }

            var arrXSplice = arrX.slice(keyMin, keyMax + 1);
            var arrYSplice = arrY.slice(keyMin, keyMax + 1);

            for (var j = arrXSplice.length; j--;) {
              var vx1 = Math.pow(arrXSplice[j] * xk + xb - dx, 2);
              var vy1 = Math.pow(arrYSplice[j] * yk + yb - dy, 2);

              if (j === arrXSplice.length - 1) {
                var vx2 = Math.pow(arrXSplice[j - 1] * xk + xb - dx, 2);
                var vy2 = Math.pow(arrYSplice[j - 1] * yk + yb - dy, 2);
                v1 = Math.sqrt(vx1 + vy1);
                v2 = Math.sqrt(vx2 + vy2);

                if (v1 > v2) {
                  dValue = {
                    val: arrXSplice[j - 1],
                    key: j - 1 + keyMin,
                    dx: v2
                  };
                } else {
                  dValue = {
                    val: arrXSplice[j],
                    key: j + keyMin,
                    dx: v1
                  };
                }
              } else {
                v1 = Math.sqrt(vx1 + vy1);

                if (dValue.dx > v1) {
                  dValue = {
                    val: arrXSplice[j],
                    key: j + keyMin,
                    dx: v1
                  };
                }
              }
            } // for (var i = arrSplice.length; i--;) {
            //   if (i === arrSplice.length - 1) {
            //     v1 = Math.abs(arrSplice[i] * yk + yb - dy);
            //     v2 = Math.abs(arrSplice[i - 1] * yk + yb - dy);
            //     dValue =
            //       v1 > v2
            //         ? {
            //         val: arrX[i - 1 + keyMin],
            //         key: i - 1 + keyMin,
            //           dx: v2
            //         }
            //         : {
            //         val: arrX[i + keyMin],
            //         key: i + keyMin,
            //           dx: v1
            //         };
            //   } else {
            //     v1 = Math.abs(arrSplice[i] * yk + yb - dy);
            //     if (dValue.dx > v1)
            //       dValue = {
            //         val: arrX[i + keyMin],
            //         key: i + keyMin,
            //         dx: v1
            //       };
            //   }
            // }

          } // for (var i = l; i--;) {
          //   if (i === l - 1) {
          //     v1 = Math.abs(arrX[i] * xk + xb - dx);
          //     v2 = Math.abs(arrX[i - 1] * xk + xb - dx);
          //     dValue =
          //       v1 > v2
          //         ? {
          //           val: arrX[i - 1],
          //           key: i - 1,
          //           dx: v2
          //         }
          //         : {
          //           val: arrX[i],
          //           key: i,
          //           dx: v1
          //         };
          //   } else {
          //     v1 = Math.abs(arrX[i] * xk + xb - dx);
          //     if (dValue.dx > v1)
          //       dValue = {
          //         val: arrX[i],
          //         key: i,
          //         dx: v1
          //       };
          //   }
          // }

        }

        return dValue; // val：在 x 轴上的值；key：在 x 轴上的索引；dx：鼠标位置到点的距离；index: 多条线时对应谱线的索引
      },
      binarySerach: function binarySerach(arrX, dx) {
        var l = 1,
            r = arrX.length - 2;
        if (arrX.length === 1) return 0;

        while (l <= r) {
          var mid = parseInt((l + r) / 2);
          /* 只有一个点的时候就返回这个点的值 */

          if (dx === arrX[mid]) return mid;else if (dx < arrX[mid]) r = mid - 1;else if (dx > arrX[mid]) l = mid + 1;
        }

        return Math.abs(dx - arrX[r]) < Math.abs(arrX[l] - dx) ? r : l; // let r = arrX.length, l=0
        //   while (r > 0) { { // divide and conquer, find half that contains answer
        //     var _Count2 = r / 2;
        //     let mid = l + _Count2;
        //     if (a[mid] < x)
        //       l = ++mid, r -= _Count2 + 1;
        //     else
        //       r = _Count2;
        //   }
        //   return (l);
        // }
      },
      // 界面调整重新画线
      zoomLine: function zoomLine() {
        var flag = this._flag;

        this._drawTools.ctx.click.clearRect(0, 0, this._dom.width, this._dom.height);

        this._drawTools.ctx.gate.clearRect(0, 0, this._dom.width, this._dom.height);

        switch (flag.toolCheck) {
          case 0:
            var params = this._computeParams.proportion,
                left = this._option.grid.left,
                xOVal = params.x.k * flag.line.val + params.x.b;

            if (xOVal > left) {
              this.drawLine(flag.line);
            }

            break;

          case 1:
            this.event.tool.oneFreq();
            break;

          case 2:
            (flag.tools.flag_nx || flag.tools.flag_subFreq) && this.labelLineSpec();
            flag.tools.flag_subTime && this.labelLineWave();
            this.drawLabelLine();
            break;

          case 3:
            this.event.tool.peakSearch();
            break;
        }

        flag.tools.flag_wave_Pulse && this.drawWavePulse();
        flag.addPeakPos.length > 0 && this.drawAddLabel(2);
        this._option.series.markLine.data.length > 0 && this.drawMarkLine();
        this._option.series.gateMsg.isShow && this.drawGateLine();
      },
      // 绘制开窗放大范围
      drawEnlargement: function drawEnlargement(type) {
        var zoomCtx = this._drawTools.ctx.zoom,
            scope = this._scope,
            opt = this._option,
            moveX = this._movePos.x,
            moveY = this._movePos.y,
            paramsX = this._computeParams.proportion.x;
        zoomCtx.clearRect(0, 0, this._dom.width, this._dom.height);

        if (type) {
          this._flag.click = 0;
          zoomCtx.fillStyle = "rgba(0, 0, 0, 0.2)";

          if (moveX.newVal >= opt.grid.left && moveX.newVal <= scope.r.r) {
            var pos = {
              oldPos: this.findNearbyPoint(moveX.oldVal, moveY.oldVal),
              newPos: this.findNearbyPoint(moveX.newVal, moveY.newVal)
            };
            var yArr = [];
            var num = {
              min: Number.MAX_VALUE,
              max: Number.MAX_VALUE * -1
            };

            if (pos.oldPos.index === undefined && pos.newPos.index === undefined) {
              if (pos.oldPos.key === pos.newPos.key) {
                if (moveX.move >= 0) {
                  pos.newPos.key++;
                  pos.newPos.val = opt.x.data[pos.newPos.key];
                } else {
                  pos.newPos.key--;
                  pos.newPos.val = opt.x.data[pos.newPos.key];
                }
              }

              moveX.move >= 0 ? yArr = opt.y.data.slice(pos.oldPos.key, pos.newPos.key + 1) : yArr = opt.y.data.slice(pos.newPos.key, pos.oldPos.key + 1);

              for (var _i48 = 0, l = yArr.length; _i48 < l; _i48++) {
                var val = yArr[_i48];
                num.max < val && (num.max = val);
                num.min > val && (num.min = val);
              }
            } else {
              if (pos.oldPos.key === pos.newPos.key) {
                return;
              } else {
                var start = 0;
                var end = -1;

                if (moveX.move >= 0) {
                  pos.newPos.key++;
                  pos.newPos.val = opt.x.data[pos.newPos.index][pos.newPos.key];
                  start = pos.oldPos.key;
                  end = pos.newPos.key;
                } else {
                  pos.newPos.key--;
                  pos.newPos.val = opt.x.data[pos.newPos.index][pos.newPos.key];
                  start = pos.newPos.key;
                  end = pos.oldPos.key;
                }

                for (var _i49 = 0, _l16 = opt.y.data.length; _i49 < _l16; _i49++) {
                  var data = opt.y.data[_i49].slice(start, end);

                  for (var j = 0, len = data.length; j < len; j++) {
                    var _val11 = data[j];
                    num.max < _val11 && (num.max = _val11);
                    num.min > _val11 && (num.min = _val11);
                  }
                }
              } // if (moveX.move >= 0) {

              /* for (let i = 0, l = opt.y.data.length; i < l; i++) {
                const data = opt.y.data.slice(pos.oldPos.key, pos.newPos.key + 1);
                for (let j = 0, len = data.length; j < len; j++) {
                  const val = data[j];
                  num.max < val && (num.max = val);
                  num.min > val && (num.min = val);
                }
              } */
              // }

            }

            scope.v.y.end = num.max;
            scope.v.y.start = num.min;
            moveX.oldVal = pos.oldPos.val * paramsX.k + paramsX.b;
            moveX.newVal = pos.newPos.val * paramsX.k + paramsX.b;
            moveX.move = moveX.newVal - moveX.oldVal;
            moveX.move >= 0 ? zoomCtx.fillRect(moveX.oldVal, opt.grid.top, moveX.move, scope.r.h) : zoomCtx.fillRect(moveX.newVal, opt.grid.top, Math.abs(moveX.move), scope.r.h);
          }
        }
      },
      // 开窗放大
      windowEnlargement: function windowEnlargement() {
        var rx = {
          start: null,
          end: null
        };
        var moveX = this._movePos.x,
            paramsX = this._computeParams.proportion.x,
            scope = this._scope;
        if (moveX.move === 0) return;

        if (moveX.move > 0) {
          rx.start = (moveX.oldVal - paramsX.b) / paramsX.k;
          rx.end = (moveX.newVal - paramsX.b) / paramsX.k;
        } else {
          rx.start = (moveX.newVal - paramsX.b) / paramsX.k;
          rx.end = (moveX.oldVal - paramsX.b) / paramsX.k;
        }

        scope.v.x.start = rx.start;
        scope.v.x.end = rx.end + (rx.end - rx.start) / 10;
        this.mappingX(2);
        this.mappingY(2);
        this.drawAxis();
        this.drawWave();
        this.zoomLine();
      },

      /*当前点坐标
      type=0，普通光标 type=1，标注倍频*/
      fft_indexOfWaveX: function fft_indexOfWaveX(valueX, valueY, type) {
        try {
          var optX = this._option.x,
              optY = this._option.y;
          var xArr = optX.data;
          var yArr = optY.data;

          if (this.getDataType(xArr[0]) === "Array") {
            xArr = xArr[this._flag.line.idx]; // if (xArr.length >= this._flag.line.key) {

            yArr = yArr[this._flag.line.idx];
            /* } else {
              for (let i = 0, l = opt.x.data.length; i < l; i++) {
                const value = opt.x.data[i];
                if (value[this._flag.line.key]) {
                  xArr = value;
                  yArr = opt.y.data[i];
                  break;
                }
              }
            } */
          }

          if (null == xArr || xArr.length == 0) {
            return -1;
          }

          var di = xArr.length / 800;

          if (type == 1) {
            di = Math.round(di / 4);
          }

          if (di < 3) {
            di = 3;
          }

          var tmpIndex = this.indexOfArray(xArr, valueX, 0);
          if (tmpIndex >= xArr.length) tmpIndex = xArr.length;else if (tmpIndex > 0) {
            if (Math.abs(xArr[tmpIndex] - valueX) > Math.abs(xArr[tmpIndex - 1] - valueX)) {
              tmpIndex = tmpIndex - 1;
            }
          }
          var index_a = tmpIndex - di;
          var index_b = tmpIndex + di;
          var index = tmpIndex;

          if (index_a <= 0) {
            index_a = 0;
          }

          if (index_b >= yArr.length) {
            index_b = yArr.length - 1;
          }

          for (var i = index_a; i <= index_b; i++) {
            if (yArr[i] > yArr[index]) {
              index = i;
            }
          }

          return index;
        } catch (err) {}

        return -1;
      },
      // 找最近点索引
      indexOfArray: function indexOfArray(arr, value, flag) {
        if (arr) {
          //获取最匹配点的下标

          /* flag=0，最近点；flag=1，右边最近点；flag=-1，左边最近点 */
          var index = -1;
          var flag_pm = false;
          var dx = Number.POSITIVE_INFINITY; //无穷大

          for (var i = 0; i < arr.length; i++) {
            switch (flag) {
              case -1:
                flag_pm = arr[i] - value <= 0 ? dx > Math.abs(arr[i] - value) : false;
                break;

              case 0:
                flag_pm = dx > Math.abs(arr[i] - value);
                break;

              case 1:
                flag_pm = arr[i] - value >= 0 ? dx > Math.abs(arr[i] - value) : false;
                break;
            }

            if (flag_pm) {
              dx = Math.abs(arr[i] - value);
              index = i;

              if (dx == 0) {
                break;
              }
            }
          }

          return index;
        }
      },
      // 计算波形图时间差
      labelLineWave: function labelLineWave() {
        //带标签的竖线

        /**带标签的竖线**/
        var _flag = this._flag;
        _flag.labelLine.wave.length > 0 && (_flag.labelLine.wave.length = 0);
        var t_nxArray = [];
        var index = -1;
        var i = 0;
        var nx0 = -1; //锁定光标位置

        var nx1 = -1; //画周期性延展线

        var index1 = -1;
        var dx = -1; //基准线和时间差线的距离

        /**画光标线**/

        if (_flag.tools.flag_subTime == 1 && _flag.last_xWave.key != -1) {
          nx0 = _flag.last_xWave.val;
          index = _flag.last_xWave.key;
          t_nxArray.push({
            name: nx0 + "," + index.toFixed(4),
            xAxis: index
          });
          _flag.tools.flag_wave_extend = 1;
        } else if (_flag.tools.flag_subTime == 1 && _flag.last_xWave.key == -1) {
          //开启时间差功能前没有点击页面，将基准线定在0的位置
          // 对比分析多条数据的情况_flag.firstCommon.idx != undefined
          if (this.getDataType(this._option.x.data[0]) == "Array") {
            if (_flag.firstCommon.idx == undefined) _flag.firstCommon.idx = 0;
            _flag.last_xWave = {
              key: 0,
              val: this._option.x.data[_flag.firstCommon.idx][0]
            };
            t_nxArray.push({
              name: 0 + "," + this._option.x.data[_flag.firstCommon.idx][0].toFixed(4),
              xAxis: 0
            });
          } else {
            _flag.last_xWave = {
              key: 0,
              val: this._option.x.data[0]
            };
            t_nxArray.push({
              name: 0 + "," + this._option.x.data[0].toFixed(4),
              xAxis: 0
            });
          }

          _flag.tools.flag_wave_extend = 1;
        }
        /**画时间差的延展线**/


        if (_flag.tools.flag_wave_extend && _flag.tools.flag_subTime == 1 && _flag.line.key !== _flag.last_xWave.key) {
          if (_flag.line.val != -1) {
            index1 = _flag.line.key;
            dx = Math.abs(index1 - index);

            if (dx == 0) {
              return;
            }

            var x0 = index1 % dx;

            if (this.getDataType(this._option.x.data[0]) != "Array") {
              for (var x = x0; x < this._option.x.data.length; x += dx) {
                if (x == index) {
                  continue;
                }

                t_nxArray.push({
                  name: "",
                  xAxis: x,
                  lineStyle: {
                    color: "red"
                  }
                });
              }
            } else {
              /* 防止对比分析图删除数据后数据缺失报错 */
              if (this._option.x.data[_flag.firstCommon.idx]) {
                for (var x = x0; x < this._option.x.data[_flag.firstCommon.idx].length; x += dx) {
                  if (x == index) {
                    continue;
                  }

                  t_nxArray.push({
                    name: "",
                    xAxis: x,
                    lineStyle: {
                      color: "red"
                    }
                  });
                }
              }
            }
          }
        }

        if (t_nxArray.length > 0) {
          _flag.labelLine.wave = t_nxArray;
        }
      },
      // 计算频谱图差频、倍频、一倍频等
      labelLineSpec: function labelLineSpec() {
        //带标签的竖线

        /**带标签的竖线**/
        var _flag = this._flag,
            opt = this._option;
        _flag.labelLine.spectrum.length > 0 && (_flag.labelLine.spectrum.length = 0);
        var t_nxArray = [];
        var index = -1;
        var i = 0;
        var index1 = -1; //第二次点击三条等距线的光标的下标

        var dx = -1; //基准线和对称频率差线的距离

        /**自动寻峰**/

        if (_flag.peakIndexArr.length > _flag.tools.autoPeakNum) {
          t_nxArray.push({
            name: _flag.tools.autoPeakNum + 1 + "p",
            xAxis: _flag.peakIndexArr[_flag.tools.autoPeakNum]
          });
        }

        if (_flag.tools.autoPeakNum == -1) {
          //初始化不自动寻峰；当点击循环寻峰次数超过10次就取消寻峰
          t_nxArray.length = 0;
        }
        /*获取倍频和差频的index*/


        if (_flag.tools.flag_subFreq == 1) {
          //启用了差频
          _flag.arr_C = [];

          if (_flag.arr_B[0] >= 0 && _flag.arr_B[0] != -1) {} else {
            _flag.arr_B[0] = 0;
          }

          var indexB0 = _flag.arr_B[0];

          if (_flag.tools.flag_nx == 1) {
            //同时开启了倍频的效果
            _flag.arr_B = [];

            if (_flag.line.idx != undefined) {
              // for (var i = 0; i < 10; i++) {
              //   var index_b = indexB0 * (i + 1);
              //   if (index_b >= opt.x.data[_flag.line.idx].length) {
              //     break;
              //   }
              //   _flag.arr_B.push(index_b);
              // }
              for (var i = 0; i < 10; i++) {
                var index_b; // 对比分析图多图谱情况

                index_b = this.indexOfArray(opt.x.data[_flag.line.idx], opt.x.data[_flag.line.idx][indexB0] * (i + 1), 0); // 防止倍频超出边界时错误的取到数组最大值

                if (opt.x.data[_flag.line.idx][opt.x.data[_flag.line.idx].length - 1] < opt.x.data[_flag.line.idx][indexB0] * (i + 1)) {
                  break;
                }

                _flag.arr_B.push(index_b);
              }
            } else {
              for (var i = 0; i < 10; i++) {
                var index_b; // 对比分析图多图谱情况

                index_b = this.indexOfArray(opt.x.data, opt.x.data[indexB0] * (i + 1), 0); // 防止倍频超出边界时错误的取到数组最大值

                if (opt.x.data[opt.x.data.length - 1] < opt.x.data[indexB0] * (i + 1)) {
                  break;
                }

                _flag.arr_B.push(index_b);
              }
            }
          }

          index = _flag.arr_B[0];
          index1 = _flag.line.key;
          dx = Math.abs(index1 - index);

          if (dx != 0) {
            var x0 = index1 % dx; //左边界第一条线

            var x_left = index - 3 * dx;
            var x_right = index + 3 * dx;

            if (x_left < x0) {
              x_left = x0;
            }

            var xArr = opt.x.data;
            /* if (x_right > opt.x.data.length) {
              x_right = opt.x.data.length;
            } */
            //判断点击对称频率差后点击图谱在进行操作

            if (_flag.line.idx && _flag.line.idx != "") {
              if (this.getDataType(xArr[0]) === "Array") {
                // 防止对比分析图删除图谱后拿不到当前图谱的值
                if (xArr[_flag.line.idx]) {
                  x_right > xArr[_flag.line.idx].length && (x_right = xArr[_flag.line.idx].length);
                }
              } else {
                x_right > xArr.length && (x_right = xArr.length);
              }
            } // if(x_right>this.cutSpectrum.x.length){
            //     x_right = this.cutSpectrum.x.length;
            // }


            for (var x = x_left; x <= x_right; x += dx) {
              var item = {};

              if (x == index) {
                item.line = true;
                item.value = x;
              } else {
                item.line = false;
                item.value = x;
              }

              _flag.arr_C.push(item);
            }
          } else {
            _flag.line.idx !== undefined && (_flag.subFreqAxis = _flag.line.idx); // 如果差频为0则只画做差频的标线

            _flag.arr_C.push({
              line: true,
              value: index
            });
          }
        } else if (_flag.tools.flag_nx == 1) {
          //启用了倍频
          _flag.arr_B = [];

          for (var i = 0; i < 10; i++) {
            if (_flag.line.val == -1) {
              _flag.arr_B = [];
            } else {
              if (opt.series.dataMsg.specType == 2) {
                //阶次
                if (_flag.line.idx == undefined) {
                  if (_flag.line.val * (i + 1) >= opt.series.dataMsg.spectral / 2.56) {
                    break;
                  }
                } else {
                  if (_flag.line.val * (i + 1) >= opt.x.data[_flag.line.idx][opt.x.data[_flag.line.idx].length - 1]) {
                    break;
                  }
                }
              } else {
                // 若取值大于图谱x轴最大值
                // 对比分析图多图谱情况
                if (_flag.line.idx == undefined) {
                  if (_flag.line.val * (i + 1) >= opt.x.data[opt.x.data.length - 1]) {
                    break;
                  }
                } else {
                  if (_flag.line.val * (i + 1) >= opt.x.data[_flag.line.idx][opt.x.data[_flag.line.idx].length - 1]) {
                    break;
                  }
                }
              }

              if (_flag.tools.flag_nx == 0 && i > 0) {
                break;
              }

              var index_b_nx; // 对比分析图多图谱情况

              if (_flag.line.idx == undefined) {
                index_b_nx = this.indexOfArray(opt.x.data, _flag.line.val * (i + 1), 0);
              } else {
                index_b_nx = this.indexOfArray(opt.x.data[_flag.line.idx], _flag.line.val * (i + 1), 0);
              }

              _flag.arr_B.push(index_b_nx);
            }
          }
        } else {
          _flag.arr_B[0] = _flag.line.key;
        }
        /**标注倍频**/


        if (_flag.tools.flag_nx == 1) {
          var max_arr = new Array(_flag.arr_B.length);

          for (i = 0; i < _flag.arr_B.length; i++) {
            var _index = _flag.arr_B[i] >= 0 ? _flag.arr_B[i] : 0; // 对比分析图多图谱情况


            var dataX = void 0,
                dataY = void 0,
                dataXName = void 0;

            if (_flag.line.idx == undefined) {
              dataX = opt.x.data;
              dataY = opt.y.data;
              dataXName = opt.x.name;
            } else {
              dataX = opt.x.data[_flag.line.idx];
              dataY = opt.y.data[_flag.line.idx];
              dataXName = opt.x.name[_flag.line.idx];
            }

            max_arr[i] = this.fft_indexOfWaveX(dataX[_index], dataY[_index], 1); //标注倍频时校准倍频

            if (_flag.tools.flag_addPeak) {
              //启用了校准倍频
              if (i == 0) {
                t_nxArray.push({
                  xAxis: _index,
                  name: i + 1 + "X" + "," + Number(dataX[_index]).toFixed(4) + dataXName + "," + dataY[_index].toFixed(4),
                  lineStyle: {
                    color: opt.toolTip.lineStyle.color
                  }
                });
              } else {
                t_nxArray.push({
                  name: i + 1 + "X" + "," + Number(dataX[max_arr[i]]).toFixed(4) + dataXName + "," + dataY[max_arr[i]].toFixed(4),
                  xAxis: max_arr[i],
                  lineStyle: {
                    color: opt.toolTip.lineStyle.color
                  }
                });
              }
            } else {
              //取消了校准倍频
              t_nxArray.push({
                name: i + 1 + "X" + "," + Number(dataX[_index]).toFixed(4) + dataXName + "," + dataY[_index].toFixed(4),
                xAxis: _index,
                lineStyle: {
                  color: opt.toolTip.lineStyle.color
                }
              });
            }
          }
        }
        /*画对称频率差的三条等距线*/


        if (_flag.tools.flag_subFreq == 1) {
          var _xArr = [];
          var yArr = []; // if (_flag.line.idx && _flag.line.idx != '') {

          _xArr = opt.x.data;
          yArr = opt.y.data;

          if (this.getDataType(_xArr[0]) === "Array") {
            _xArr = _flag.line.idx ? opt.x.data[_flag.line.idx] : opt.x.data[0]; // if (xArr.length >= _flag.line.key) {

            yArr = _flag.line.idx ? opt.y.data[_flag.line.idx] : opt.x.data[0];
            /* } else {
              for (let i = 0, l = opt.x.data.length; i < l; i++) {
                const value = opt.x.data[i];
                if (value[_flag.line.key]) {
                  xArr = value;
                  yArr = opt.y.data[i];
                  break;
                }
              }
            } */
          }

          var max_sub_arr = new Array(_flag.arr_C.length);

          for (i = 0; i < _flag.arr_C.length; i++) {
            max_sub_arr[i] = this.fft_indexOfWaveX(_xArr[_flag.arr_C[i].value], yArr[_flag.arr_C[i].value], 1); //对称频率差时校准倍频

            if (_flag.arr_C[i].line == true) {
              if (_flag.tools.flag_nx == 1) {
                t_nxArray.push({
                  name: "",
                  xAxis: _flag.arr_C[i].value
                });
              } else {
                t_nxArray.push({
                  name: _xArr[_flag.arr_C[i].value].toFixed(4) + "," + yArr[_flag.arr_C[i].value].toFixed(4),
                  xAxis: _flag.arr_C[i].value
                });
              }
            } else {
              t_nxArray.push({
                name: "",
                xAxis: _flag.arr_C[i].value,
                lineStyle: {
                  color: "red"
                }
              });
            }
          }
        }

        if (t_nxArray.length > 0) {
          _flag.labelLine.spectrum = t_nxArray;
        }
      },
      // 时间(点数)差、差频和倍频画线
      drawLabelLine: function drawLabelLine() {
        var subCtx = this._drawTools.ctx.subFreq,
            clickCtx = this._drawTools.ctx.click,
            flag = this._flag,
            opt = this._option,
            optX = opt.x,
            optY = opt.y,
            scopeR = this._scope.r,
            params = this._computeParams.proportion,
            xk = params.x.k,
            xb = params.x.b,
            yk = params.y.k,
            yb = params.y.b;
        var flagLine = flag.line;
        subCtx.clearRect(0, 0, this._dom.width, this._dom.height);
        clickCtx.clearRect(0, 0, this._dom.width, this._dom.height); // 时间差

        if (flag.tools.flag_subTime && opt.tools.timeDifferent.show && flag.line.key > -1) {
          if (flag.last_xWave.key !== flag.line.key) {
            var font = null; // 增加考虑对比分析图 /* optX.data[flag.firstCommon.idx] != undefined 防止对比分析图删除数据后出现数据缺失 */

            if (optX.name === "s" || flag.line.idx != undefined && flag.firstCommon.idx != undefined && optX.name[flag.line.idx] == "s" && optX.data[flag.firstCommon.idx] != undefined) {
              if (flag.line.idx == undefined) {
                font = {
                  x: optX.data[flag.line.key] * xk + xb,
                  time: "时间：" + this.round(optX.data[flag.line.key]) + optX.name,
                  timeDif: "时间差：" + Math.round(Math.abs(flag.line.val - optX.data[flag.last_xWave.key]) * 10000) / 10000 + optX.name,
                  subFreq: "频率差：" + Math.round(1 / Math.abs(flag.last_xWave.val - flag.line.val) * 10000) / 10000 + "Hz",
                  amplitude: "幅值：" + Math.round(optY.data[flag.line.key] * 10000) / 10000 + optY.name
                };
                if (flag.last_xWave.key === -1) font.timeDif = "时间差：" + Math.round(Math.abs(flag.line.val - optX.data[0]) * 10000) / 10000 + optX.name;
              } else {
                if (flag.last_xWave.idx == undefined) flag.last_xWave.idx = 0;
                font = {
                  x: optX.data[flag.firstCommon.idx][flag.line.key] * xk + xb,
                  time: "时间：" + this.round(optX.data[flag.firstCommon.idx][flag.line.key]) + optX.name[flag.firstCommon.idx],
                  timeDif: "时间差：" + Math.round(Math.abs(flag.line.val - optX.data[flag.firstCommon.idx][flag.last_xWave.key]) * 10000) / 10000 + optX.name,
                  subFreq: "频率差：" + Math.round(1 / Math.abs(flag.last_xWave.val - flag.line.val) * 10000) / 10000 + "Hz",
                  amplitude: []
                };

                for (var _i50 = 0; _i50 < optX.data.length; _i50++) {
                  var valueX = optX.data[_i50];
                  var valueY = optY.data[_i50];

                  for (var j = 0; j < valueY.length; j++) {
                    var valX = valueX[j];
                    var valY = valueY[j];

                    if (j == flag.line.key && valX == flag.line.val) {
                      font.amplitude.push(["\u5E45\u503C".concat(font.amplitude.length, "\uFF1A").concat(this.round(valY * 10000 / 10000) + optY.name)]);
                    }
                  }
                }

                if (flag.last_xWave.key === -1) font.timeDif = "时间差：" + Math.round(Math.abs(flag.line.val - optX.data[flag.firstCommon.idx][0]) * 10000) / 10000 + optX.name;
              }

              font.x - opt.grid.left >= scopeR.w / 2 && (font.x -= 150);

              if (font.x >= opt.grid.left && font.x + 150 <= scopeR.r) {
                if (this.getDataType(font.amplitude) != "Array") {
                  subCtx.beginPath();
                  subCtx.fillStyle = opt.toolTip.background.color;
                  subCtx.fillRect(font.x, opt.grid.top, 150, 70);
                  subCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family; // subCtx.fillStyle = opt.series.lineStyle.color;

                  subCtx.fillStyle = opt.backgroundColor;
                  subCtx.textBaseline = "top";
                  subCtx.fillText(font.time, font.x + 10, opt.grid.top + 8);
                  subCtx.fillText(font.timeDif, font.x + 10, opt.grid.top + 23);
                  subCtx.fillText(font.subFreq, font.x + 10, opt.grid.top + 38);
                  subCtx.fillText(font.amplitude, font.x + 10, opt.grid.top + 53);
                } else {
                  subCtx.beginPath();
                  subCtx.fillStyle = opt.toolTip.background.color;
                  subCtx.fillRect(font.x, opt.grid.top, 150, 60 + 20 * font.amplitude.length);
                  subCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family; // subCtx.fillStyle = opt.series.lineStyle.color;

                  subCtx.fillStyle = opt.backgroundColor;
                  subCtx.textBaseline = "top";
                  subCtx.fillText(font.time, font.x + 10, opt.grid.top + 8);
                  subCtx.fillText(font.timeDif, font.x + 10, opt.grid.top + 23);
                  subCtx.fillText(font.subFreq, font.x + 10, opt.grid.top + 38);

                  for (var _i51 = 0; _i51 < font.amplitude.length; _i51++) {
                    subCtx.fillText(font.amplitude[_i51], font.x + 10, opt.grid.top + 38 + 20 * (_i51 + 1));
                  }
                }
              }
            } else if (optX.name === "smpl" || flag.line.idx != undefined && flag.firstCommon.idx != undefined && optX.name[flag.line.idx] == "smpl" && optX.data[flag.firstCommon.idx] != undefined) {
              if (flag.line.idx == undefined) {
                font = {
                  x: flag.line.val * xk + xb,
                  time: "点序：" + this.round(flag.line.val),
                  timeDif: "点数差：" + this.round(flag.line.val - optX.data[flag.last_xWave.key]),
                  amplitude: "波形值：" + this.round(optY.data[flag.line.key])
                };
                if (flag.last_xWave.key === -1) font.timeDif = "点数差：" + this.round(flag.line.val - optX.data[0]);
              } else {
                if (flag.last_xWave.idx == undefined) flag.last_xWave.idx = 0;
                font = {
                  x: flag.line.val * xk + xb,
                  time: "点序：" + this.round(flag.line.val),
                  timeDif: "点数差：" + this.round(flag.line.val - optX.data[flag.firstCommon.idx][flag.last_xWave.key]),
                  amplitude: [] //"波形值：" + this.round(optY.data[flag.firstCommon.idx][flag.line.key])

                };

                for (var _i52 = 0; _i52 < optX.data.length; _i52++) {
                  var _valueX = optX.data[_i52];
                  var _valueY = optY.data[_i52];

                  for (var _j7 = 0; _j7 < _valueY.length; _j7++) {
                    var _valX2 = _valueX[_j7];
                    var _valY = _valueY[_j7];

                    if (_j7 == flag.line.key && _valX2 == flag.line.val) {
                      font.amplitude.push(["\u6CE2\u5F62\u503C".concat(font.amplitude.length, "\uFF1A").concat(this.round(_valY))]);
                    }
                  }
                }

                if (flag.last_xWave.key === -1) font.timeDif = "点数差：" + this.round(flag.line.val - optX.data[flag.firstCommon.idx][0]);
              }

              if (flag.last_xWave.key === -1) font.timeDif = "点数差：" + this.round(flag.line.val - optX.data[flag.firstCommon.idx][0]);
              font.x - opt.grid.left >= scopeR.w / 2 && (font.x -= 106);

              if (font.x >= opt.grid.left && font.x + 110 <= scopeR.r) {
                if (this.getDataType(font.amplitude) != "Array") {
                  subCtx.beginPath();
                  subCtx.fillStyle = opt.toolTip.background.color;
                  subCtx.fillRect(font.x, opt.grid.top, 106, 60);
                  subCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family;
                  subCtx.fillStyle = opt.series.lineStyle.color;
                  subCtx.textBaseline = "top";
                  subCtx.fillText(font.time, font.x + 10, opt.grid.top + 8);
                  subCtx.fillText(font.timeDif, font.x + 10, opt.grid.top + 23);
                  subCtx.fillText(font.amplitude, font.x + 10, opt.grid.top + 38);
                } else {
                  subCtx.beginPath();
                  subCtx.fillStyle = opt.toolTip.background.color;
                  subCtx.fillRect(font.x, opt.grid.top, 106, 50 + 20 * font.amplitude.length);
                  subCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family;
                  subCtx.fillStyle = opt.series.lineStyle.color;
                  subCtx.textBaseline = "top";
                  subCtx.fillText(font.time, font.x + 10, opt.grid.top + 8);
                  subCtx.fillText(font.timeDif, font.x + 10, opt.grid.top + 23);

                  for (var _i53 = 0; _i53 < font.amplitude.length; _i53++) {
                    subCtx.fillText(font.amplitude[_i53], font.x + 10, opt.grid.top + 38 + 20 * (_i53 + 1));
                  }
                }
              }
            }
          }

          if (opt.toolTip.symbol.show) {
            var size = opt.toolTip.symbol.size;

            for (var _i54 = 1, l = flag.labelLine.wave.length; _i54 < l; _i54++) {
              // 对比分析图多条数据情况
              var line = {
                x: optX.data[flag.labelLine.wave[_i54].xAxis] * xk + xb,
                y: optY.data[flag.labelLine.wave[_i54].xAxis] * yk + yb
              };
              var line1 = {
                x: optX.data[flag.labelLine.wave[_i54].xAxis] * xk + xb,
                y: optY.data[flag.labelLine.wave[_i54].xAxis] * yk + yb
              };

              if (flag.line.idx != undefined && flag.firstCommon.idx != undefined) {
                var x1 = [],
                    y1 = []; // 用百分比取下标

                var maxX = 0;
                var maxIndex = 0;
                var maxLength = -1; // 获取x值最大的值与最大值的长度和下标

                for (var k = 0; k < optX.data.length; k++) {
                  if (optX.data[k][optX.data[k].length - 1] > maxX) {
                    maxX = optX.data[k][optX.data[k].length - 1];
                    maxLength = optX.data[k].length;
                    maxIndex = k;
                  }
                }

                for (var _k3 = 0; _k3 < optX.data.length; _k3++) {
                  var _valueX2 = optX.data[_k3];
                  var _valueY2 = optY.data[_k3];
                  var index = Math.round(_valueX2.length * optX.data[flag.firstCommon.idx][optX.data[flag.firstCommon.idx].length - 1] * flag.labelLine.wave[_i54].xAxis / (optX.data[flag.firstCommon.idx].length * _valueX2[_valueX2.length - 1])); // if (maxIndex == flag.firstCommon.idx ){
                  //   //通过百分比计算下标：选中的点/选中下表长度 = index/当前下标长度
                  //   index = flag.labelLine.wave[i].xAxis * optX.data[k].length / maxX;
                  // } else {
                  //   index = flag.labelLine.wave[i].xAxis * optX.data[k].length / optX.data[flag.firstCommon.idx].length
                  // }

                  x1.push(optX.data[_k3][index] * xk + xb);
                  y1.push(optY.data[_k3][index] * yk + yb); // for (let j = 0; j < valueY.length; j++) {
                  //   const valX = valueX[j];
                  //   const valY = valueY[j];
                  //   if (valX == optX.data[flag.firstCommon.idx][flag.labelLine.wave[i].xAxis]) {
                  //     x1.push(optX.data[k][j] * xk + xb,)
                  //     y1.push(optY.data[k][j] * yk + yb)
                  //   }
                  // }
                }

                line1 = {
                  x: x1,
                  y: y1
                };
                line = {
                  x: optX.data[flag.firstCommon.idx][flag.labelLine.wave[_i54].xAxis] * xk + xb,
                  y: optY.data[flag.firstCommon.idx][flag.labelLine.wave[_i54].xAxis] * yk + yb
                };
              }

              if (line.x >= opt.grid.left && line.x <= scopeR.r && line.y >= opt.grid.top && line.y <= scopeR.b) {
                subCtx.beginPath();
                subCtx.strokeStyle = flag.labelLine.wave[_i54].lineStyle.color;
                subCtx.fillStyle = flag.labelLine.wave[_i54].lineStyle.color;
                subCtx.moveTo(line.x, opt.grid.top);
                subCtx.lineTo(line.x, line.y - size);
                subCtx.stroke();

                if (this.getDataType(line1.x) == "Array") {
                  for (var _j8 = 0; _j8 < line1.x.length; _j8++) {
                    subCtx.beginPath();
                    subCtx.arc(line1.x[_j8], line1.y[_j8], size, 0, 2 * Math.PI);
                    subCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : flag.labelLine.wave[_j8].lineStyle.color;
                    subCtx.fill();
                  }
                } else {
                  subCtx.beginPath();
                  subCtx.arc(line.x, line.y, size, 0, 2 * Math.PI);
                  subCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : flag.labelLine.wave[_i54].lineStyle.color;
                  subCtx.fill();
                }

                subCtx.moveTo(line.x, line.y + size);
                subCtx.lineTo(line.x, scopeR.b);
                subCtx.stroke();
              }
            }
          } else {
            subCtx.beginPath();

            for (var _i55 = 1, _l17 = flag.labelLine.wave.length; _i55 < _l17; _i55++) {
              if (_i55 === 0) break; // 对比分析图多条数据情况

              var x = optX.data;
              var y = optY.data;

              if (flag.line.idx != undefined && flag.firstCommon.idx != undefined) {
                x = optX.data[flag.firstCommon.idx];
                y = optY.data[flag.firstCommon.idx];
              }

              var _line = {
                x: x[flag.labelLine.wave[_i55].xAxis] * xk + xb,
                y: y[flag.labelLine.wave[_i55].xAxis] * yk + yb
              };

              if (_line.x >= opt.grid.left && _line.x <= scopeR.r && _line.y >= opt.grid.top && _line.y <= scopeR.b) {
                subCtx.strokeStyle = flag.labelLine.wave[_i55].lineStyle.color;
                subCtx.fillStyle = flag.labelLine.wave[_i55].lineStyle.color;
                subCtx.moveTo(_line.x, opt.grid.top);
                subCtx.lineTo(_line.x, scopeR.b);
              }
            }

            subCtx.stroke();
          }

          this.drawLine(flag.last_xWave);
        } // 差频


        if (flag.tools.flag_subFreq && opt.tools.subFreq.show && flagLine.key > -1) {
          var unit = optX.name;
          var xArr = optX.data;
          var yArr = optY.data;
          var isArrData = this.getDataType(xArr[0]) === "Array";

          if (isArrData) {
            xArr = xArr[flagLine.idx];
            yArr = yArr[flagLine.idx];
          }

          var _font3 = {
            x: xArr[flagLine.key] * xk + xb,
            amplitude: "\u5E45\u503C\uFF1A".concat(this.round(yArr[flagLine.key])),
            subFreq: "\u5DEE\u9891\uFF1A".concat(this.round(flagLine.val - xArr[flag.arr_B[0]])).concat(unit)
          };
          var height = 70;
          var _index2 = 0; // 防止倍频出现无限大

          if (opt.series.dataMsg.rotateSpeed === 0) {
            opt.series.dataMsg.rotateSpeed = 1;
          }

          if (this.getDataType(unit) === "Array") {
            _font3 = {
              x: xArr[flagLine.key] * xk + xb,
              freq: "\u9891\u7387\uFF1A".concat(this.round(flagLine.val)).concat(unit[flagLine.idx]),
              subFreq: "\u5DEE\u9891\uFF1A".concat(this.round(flagLine.val - xArr[flag.arr_B[0]])).concat(unit[flagLine.idx])
            };

            for (var _i56 = 0, _l18 = optY.data.length; _i56 < _l18; _i56++) {
              var value = optY.data[_i56];

              if (value[flagLine.key]) {
                _font3["amplitude".concat(_i56 + 1)] = "\u5E45\u503C\uFF1A".concat(this.round(value[flagLine.key]));
                _index2++;
              }
            }

            height = (_index2 + 3) * 15;
          } else if (unit === "NX") {
            _font3.freq = "\u9891\u7387\uFF1A".concat(this.round(flagLine.val * opt.series.dataMsg.rotateSpeed / 60), "Hz");
            _font3.nxFreq = "\u500D\u9891\uFF1A".concat(this.round(flagLine.val)).concat(unit);
          } else {
            _font3.freq = "\u9891\u7387\uFF1A".concat(this.round(flagLine.val)).concat(unit);
            _font3.nxFreq = "\u500D\u9891\uFF1A".concat(this.round(flagLine.val * 60 / opt.series.dataMsg.rotateSpeed), "NX");
          }

          _font3.x - opt.grid.left >= scopeR.w / 2 && (_font3.x -= 125);

          if (_font3.x >= opt.grid.left && _font3.x + 125 <= scopeR.r) {
            subCtx.beginPath();
            subCtx.lineWidth = 1;
            subCtx.fillStyle = opt.toolTip.background.color;
            subCtx.fillRect(_font3.x, opt.grid.top, 130, height);
            subCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family;
            subCtx.fillStyle = opt.series.markLine.fontStyle.color;
            subCtx.textBaseline = "top";
            subCtx.fillText(_font3.freq, _font3.x + 10, opt.grid.top + 8);

            if (isArrData) {
              subCtx.fillText(_font3.subFreq, _font3.x + 10, opt.grid.top + 23);
              _index2 = 0;

              for (var key in _font3) {
                if (key.indexOf("amplitude") > -1) {
                  subCtx.fillText(_font3[key], _font3.x + 10, opt.grid.top + 38 + 15 * _index2);
                  _index2++;
                }
              }
            } else {
              subCtx.fillText(_font3.nxFreq, _font3.x + 10, opt.grid.top + 23);
              subCtx.fillText(_font3.subFreq, _font3.x + 10, opt.grid.top + 38);
              subCtx.fillText(_font3.amplitude, _font3.x + 10, opt.grid.top + 53);
            }
          }

          if (opt.toolTip.symbol.show) {
            var _size2 = opt.toolTip.symbol.size;

            for (var _i57 = 0, _l19 = flag.labelLine.spectrum.length; _i57 < _l19; _i57++) {
              if (flag.labelLine.spectrum[_i57].name === "" && flag.labelLine.spectrum[_i57].lineStyle) {
                subCtx.strokeStyle = flag.labelLine.spectrum[_i57].lineStyle.color;
                subCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : flag.labelLine.spectrum[_i57].lineStyle.color;
                _index2 = flag.labelLine.spectrum[_i57].xAxis;

                var _x5 = xArr[_index2] * xk + xb;

                var _y4 = yArr[_index2] * yk + yb;

                if (!_x5) {
                  for (var _j9 = 0, len = optX.data.length; _j9 < len; _j9++) {
                    var _value5 = optX.data[_j9][_index2];

                    if (_value5) {
                      _x5 = _value5 * xk + xb;
                      _y4 = _value5 * yk + yb;
                      break;
                    }
                  }
                }

                if (_x5 && _y4 && _x5 >= opt.grid.left && _x5 <= scopeR.r && _y4 >= opt.grid.top && _y4 <= scopeR.b) {
                  subCtx.beginPath();
                  subCtx.moveTo(_x5, opt.grid.top);
                  subCtx.lineTo(_x5, _y4 - _size2);
                  subCtx.stroke();
                  subCtx.beginPath();
                  subCtx.arc(_x5, _y4, _size2, 0, 2 * Math.PI);
                  subCtx.fill();
                  subCtx.moveTo(_x5, _y4 + _size2);
                  subCtx.lineTo(_x5, scopeR.b);
                  subCtx.stroke();
                }
              }

              if (!flag.labelLine.spectrum[_i57].lineStyle && flag.labelLine.spectrum[_i57].name.indexOf("p") === -1 && flag.labelLine.spectrum[_i57].name.indexOf("x") === -1) {
                _index2 = flag.labelLine.spectrum[_i57].xAxis;

                var _x6 = xArr[_index2] * xk + xb;

                var _y5 = yArr[_index2] * yk + yb;

                if (!_x6) {
                  for (var _j10 = 0, _len2 = optX.data.length; _j10 < _len2; _j10++) {
                    var _value6 = optX.data[_j10][_index2];

                    if (_value6) {
                      _x6 = _value6 * xk + xb;
                      _y5 = _value6 * yk + yb;
                      break;
                    }
                  }
                }

                if (_x6 && _y5 && _x6 >= opt.grid.left && _x6 <= scopeR.r && _y5 >= opt.grid.top && _y5 <= scopeR.b) {
                  subCtx.beginPath();
                  subCtx.strokeStyle = opt.toolTip.lineStyle.color;
                  subCtx.moveTo(_x6, opt.grid.top);
                  subCtx.lineTo(_x6, _y5 - _size2);
                  subCtx.stroke();
                  subCtx.beginPath();
                  subCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : opt.toolTip.lineStyle.color;
                  subCtx.arc(_x6, _y5, _size2, 0, 2 * Math.PI);
                  subCtx.fill();
                  subCtx.moveTo(_x6, _y5 + _size2);
                  subCtx.lineTo(_x6, scopeR.b);
                  subCtx.stroke();
                }
              }
            }
          } else {
            for (var _i58 = 0, _l20 = flag.labelLine.spectrum.length; _i58 < _l20; _i58++) {
              if (flag.labelLine.spectrum[_i58].name === "" && flag.labelLine.spectrum[_i58].lineStyle) {
                subCtx.strokeStyle = flag.labelLine.spectrum[_i58].lineStyle.color;
                subCtx.fillStyle = flag.labelLine.spectrum[_i58].lineStyle.color;

                var _x7 = xArr[flag.labelLine.spectrum[_i58].xAxis] * xk + xb;

                var _y6 = yArr[flag.labelLine.spectrum[_i58].xAxis] * yk + yb;

                if (_x7 >= opt.grid.left && _x7 <= scopeR.r && _y6 >= opt.grid.top && _y6 <= scopeR.b) {
                  subCtx.beginPath();
                  subCtx.moveTo(_x7, opt.grid.top);
                  subCtx.lineTo(_x7, scopeR.b);
                  subCtx.stroke();
                }
              }

              if (!flag.labelLine.spectrum[_i58].lineStyle && flag.labelLine.spectrum[_i58].name.indexOf("p") === -1 && flag.labelLine.spectrum[_i58].name.indexOf("x") === -1) {
                var oneLine = {
                  x: xArr[flag.labelLine.spectrum[_i58].xAxis] * xk + xb,
                  y: yArr[flag.labelLine.spectrum[_i58].xAxis] * yk + yb
                };

                if (oneLine.x >= opt.grid.left && oneLine.x <= scopeR.r && oneLine.y >= opt.grid.top && oneLine.y <= scopeR.b) {
                  subCtx.beginPath();
                  subCtx.strokeStyle = opt.toolTip.lineStyle.color;
                  subCtx.moveTo(oneLine.x, opt.grid.top);
                  subCtx.lineTo(oneLine.x, scopeR.b);
                  subCtx.stroke();
                }
              }
            }
          }
        } // 倍频


        if (flag.tools.flag_nx && opt.tools.labelFreq.show) {
          if (opt.toolTip.symbol.show) {
            var _size3 = opt.toolTip.symbol.size;

            for (var _i59 = 0, _l21 = flag.labelLine.spectrum.length; _i59 < _l21; _i59++) {
              if (flag.labelLine.spectrum[_i59].name !== "" && flag.labelLine.spectrum[_i59].lineStyle) {
                // 适应对比分析图多图谱
                var _x8 = void 0,
                    _y7 = void 0;

                if (flag.line.idx == undefined) {
                  _x8 = optX.data[flag.labelLine.spectrum[_i59].xAxis] * xk + xb;
                  _y7 = optY.data[flag.labelLine.spectrum[_i59].xAxis] * yk + yb;
                } else {
                  _x8 = optX.data[flag.line.idx][flag.labelLine.spectrum[_i59].xAxis] * xk + xb;
                  _y7 = optY.data[flag.line.idx][flag.labelLine.spectrum[_i59].xAxis] * yk + yb;
                }

                if (_x8 > opt.grid.left && _x8 <= scopeR.r && _y7 >= opt.grid.top && _y7 <= scopeR.b) {
                  var _font4 = flag.labelLine.spectrum[_i59].name;
                  var color = flag.labelLine.spectrum[_i59].lineStyle.color;
                  clickCtx.beginPath();
                  clickCtx.lineWidth = 1;
                  clickCtx.strokeStyle = color;
                  clickCtx.fillStyle = color;
                  clickCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family;
                  clickCtx.save();
                  clickCtx.moveTo(_x8, opt.grid.top);
                  clickCtx.lineTo(_x8, _y7 - _size3);
                  clickCtx.translate(_x8 - scopeR.h, 110 + opt.grid.top);
                  clickCtx.rotate(-90 * Math.PI / 180);
                  clickCtx.textAlign = "right";
                  clickCtx.textBaseline = "bottom";
                  clickCtx.fillText(_font4, 40 + opt.grid.top, scopeR.h);
                  clickCtx.restore();
                  clickCtx.stroke();
                  clickCtx.beginPath();
                  clickCtx.arc(_x8, _y7, _size3, 0, 2 * Math.PI);
                  clickCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : color;
                  clickCtx.fill();
                  clickCtx.moveTo(_x8, _y7 + _size3);
                  clickCtx.lineTo(_x8, scopeR.b);
                  clickCtx.stroke();
                }
              }
            }
          } else {
            for (var _i60 = 0, _l22 = flag.labelLine.spectrum.length; _i60 < _l22; _i60++) {
              if (flag.labelLine.spectrum[_i60].name !== "" && flag.labelLine.spectrum[_i60].lineStyle) {
                // 适应对比分析图多图谱
                var _x9 = void 0,
                    _y8 = void 0;

                if (flag.line.idx == undefined) {
                  _x9 = optX.data[flag.labelLine.spectrum[_i60].xAxis] * xk + xb;
                  _y8 = optY.data[flag.labelLine.spectrum[_i60].xAxis] * yk + yb;
                } else {
                  _x9 = optX.data[flag.line.idx][flag.labelLine.spectrum[_i60].xAxis] * xk + xb;
                  _y8 = optY.data[flag.line.idx][flag.labelLine.spectrum[_i60].xAxis] * yk + yb;
                }

                if (_x9 > opt.grid.left && _x9 <= scopeR.r && _y8 >= opt.grid.top && _y8 <= scopeR.b) {
                  var _font5 = flag.labelLine.spectrum[_i60].name;
                  var _color = flag.labelLine.spectrum[_i60].lineStyle.color;
                  clickCtx.beginPath();
                  clickCtx.lineWidth = 1;
                  clickCtx.strokeStyle = _color;
                  clickCtx.fillStyle = _color;
                  clickCtx.fillStyle = _color;
                  clickCtx.font = optY.fontStyle.size + " " + optY.fontStyle.family;
                  clickCtx.save();
                  clickCtx.moveTo(_x9, opt.grid.top);
                  clickCtx.lineTo(_x9, scopeR.b);
                  clickCtx.translate(_x9 - scopeR.h, 110 + opt.grid.top);
                  clickCtx.rotate(-90 * Math.PI / 180);
                  clickCtx.textAlign = "right";
                  clickCtx.textBaseline = "bottom";
                  clickCtx.fillText(_font5, 40 + opt.grid.top, scopeR.h);
                  clickCtx.restore();
                  clickCtx.stroke();
                }
              }
            }
          }
        }

        flag.toolCheck = 2;
      },
      drawWavePulse: function drawWavePulse() {
        var pulse = this._drawTools.ctx.pulse,
            flag = this._flag,
            opt = this._option,
            optX = opt.x,
            optY = opt.y,
            scopeR = this._scope.r,
            params = this._computeParams.proportion,
            xk = params.x.k,
            xb = params.x.b,
            yk = params.y.k,
            yb = params.y.b;
        var flagLine = flag.line;
        pulse.clearRect(0, 0, this._dom.width, this._dom.height);
        flag.tools.flag_wave_Pulse = Number(opt.tools.speedPulse.data.speedPulse); // 转速脉冲

        if (flag.tools.flag_wave_Pulse && opt.tools.speedPulse.show) {
          var size = opt.toolTip.symbol.size;

          if (opt.toolTip.symbol.show) {
            var _size4 = opt.toolTip.symbol.size;
            var xArray = this._option.tools.speedPulse.data.XArray; //转速脉冲点X轴数据

            var yArray = this._option.tools.speedPulse.data.YArray;
            var xArr = optX.data; //X轴数据

            var speedPulesIndex = 0; //转速脉冲点X轴数据下标

            for (var _i61 = 0, l = xArr.length; _i61 < l; _i61++) {
              if (xArr[_i61] == xArray[speedPulesIndex]) {
                var x = xArray[speedPulesIndex] * xk + xb;
                var y = yArray[speedPulesIndex] * yk + yb;

                if (x > opt.grid.left && x <= scopeR.r && y >= opt.grid.top && y <= scopeR.b) {
                  pulse.beginPath();
                  pulse.arc(x, y, _size4, 0, 2 * Math.PI);
                  pulse.strokeStyle = opt.series.markLine.lineStyle.color;
                  pulse.fillStyle = opt.series.markLine.lineStyle.color;
                  pulse.fill();
                  pulse.stroke();
                }

                speedPulesIndex++;
              }
            }
          }
        }
      },
      //数据时标注信息(增加多条数据时数组数据下标的判断)
      drawAddLabel: function drawAddLabel() {
        var _this4 = this;

        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        // type：1 => 点击添加标注；2 => 点击最大化
        var _flag = this._flag,
            opt = this._option,
            foreCtx = this._drawTools.ctx.foreground;
        var l = _flag.addPeak.length;
        var size = {
          width: this._scope.v.x.end.toFixed(4).length >= 8 ? 120 : 110,
          height: 40
        };
        var n = ~~(this._scope.r.w / (size.width + 10));
        var xArr = opt.x.data;
        var yArr = opt.y.data;
        var xMax = xArr[xArr.length - 1];

        if (type === 1 && l < n) {
          if (l !== 0) {
            for (var _i62 = 0; _i62 < l; _i62++) {
              if (_flag.addPeak[_i62] === _flag.line.key) {
                return;
              }
            }

            _flag.addPeak.push(_flag.line.key);

            _flag.muchaddPeak.push({
              key: _flag.line.key,
              idx: _flag.line.idx
            });

            l++;
          } else if (l === n) {
            return;
          } else {
            _flag.addPeak.push(_flag.line.key);

            _flag.muchaddPeak.push({
              key: _flag.line.key,
              idx: _flag.line.idx
            });

            l++;
          } // 排序


          _flag.addPeak.sort(function (a, b) {
            return a - b;
          });

          _flag.addPeakPos.length = 0;

          if (Array.isArray(xArr[0])) {
            var _loop = function _loop(_i63) {
              var idx = void 0;
              var xFreq = void 0;

              _flag.muchaddPeak.forEach(function (item) {
                if (item.key === _flag.addPeak[_i63]) {
                  idx = item.idx;
                }
              });

              if (idx !== undefined) {
                xFreq = xArr[idx][_flag.addPeak[_i63]];
              }

              if (!xFreq) {
                // 若当前下标下的x值不存在取
                for (var j = 0, len = xArr.length; j < len; j++) {
                  var value = xArr[j];

                  if (j !== idx && value[_flag.addPeak[_i63]]) {
                    xFreq = value[_flag.addPeak[_i63]];
                    break;
                  }
                }
              }

              _flag.addPeakPos.push({
                xName: opt.x.name[idx],
                freq: _this4.round(xFreq),
                x: _i63 * (size.width + 5) + opt.grid.left + 0.5,
                y: opt.grid.top,
                flag: 0
              });
            };

            //多组数据
            for (var _i63 = 0; _i63 < l; _i63++) {
              _loop(_i63);
            }
          } else {
            //一组数据
            for (var _i64 = 0; _i64 < l; _i64++) {
              _flag.addPeakPos.push({
                xName: opt.x.name,
                freq: this.round(opt.x.data[_flag.addPeak[_i64]]),
                x: _i64 * (size.width + 5) + opt.grid.left + 0.5,
                y: opt.grid.top,
                flag: 0
              });
            }
          }
        } else if (type === 2) {
          var movePos = null,
              peak = null,
              flag = -1;

          for (var _i65 = 0; _i65 < l; _i65++) {
            if (_flag.addPeakPos[_i65].flag) {
              peak = _flag.addPeak[_i65];
              movePos = _flag.addPeakPos[_i65];
              flag = _i65;

              _flag.addPeak.splice(_i65, 1);

              _flag.addPeakPos.splice(_i65, 1);

              break;
            }
          }

          if (flag > -1) {
            _flag.addPeak.push(peak);

            _flag.addPeakPos.push(movePos);
          }
        }

        if (opt.series.dataMsg.setPower && opt.x.name === _flag.addPeakPos[0].xName) {
          for (var _i66 = 0, len = xArr.length; _i66 < len; _i66++) {
            for (var j = 0, length = _flag.addPeakPos.length; j < length; j++) {
              if (_flag.addPeakPos[j].freq == xArr[_i66]) {
                // 若x值与xArr数组相同，将下标推入addPeak
                _flag.addPeak[j] = _i66;
                break;
              }
            }
          }
        }

        foreCtx.clearRect(0, 0, this._dom.width, this._dom.height);
        foreCtx.beginPath();
        foreCtx.font = opt.series.markLine.fontStyle.size + " " + opt.series.markLine.fontStyle.family;
        foreCtx.textBaseline = "top";
        foreCtx.strokeStyle = opt.series.markLine.lineStyle.color;
        var line = {
          x: null,
          y: null
        };
        var freqObj = {
          Hz: "频率：",
          NX: "倍频：",
          ms: "时间："
        };
        var freq = freqObj[opt.x.name];

        if (Array.isArray(xArr[0])) {
          freq = freqObj[opt.x.name[_flag.line.idx]];
        }

        var proportion = this._computeParams.proportion;
        var xk = proportion.x.k;
        var xb = proportion.x.b;
        var yk = proportion.y.k;
        var yb = proportion.y.b;

        if (Array.isArray(xArr[0])) {
          var _loop2 = function _loop2(_i67) {
            var halfWidth = _flag.addPeakPos[_i67].x + size.width / 2;
            var arr = [];
            var m = 0;
            var idx = void 0;

            _flag.muchaddPeak.forEach(function (item) {
              if (item.key === _flag.addPeak[_i67]) {
                idx = item.idx;
              }
            });

            if (idx !== undefined) {
              var y = yArr[idx][_flag.addPeak[_i67]];

              if (y !== undefined) {
                arr.push({
                  dy: m,
                  val: _this4.round(y)
                });
                line = {
                  x: xArr[idx][_flag.addPeak[_i67]] * xk + xb,
                  y: yArr[idx][_flag.addPeak[_i67]] * yk + yb
                };
                m += 15;
              }
            }

            var length = arr.length;
            foreCtx.fillStyle = opt.series.markLine.lineStyle.color;
            foreCtx.fillRect(_flag.addPeakPos[_i67].x, _flag.addPeakPos[_i67].y, size.width, size.height + (length - 1) * 20);
            foreCtx.fillStyle = opt.series.markLine.fontStyle.color;
            foreCtx.fillText("".concat(freq).concat(_flag.addPeakPos[_i67].freq).concat(opt.x.name[idx]), _flag.addPeakPos[_i67].x + 5, _flag.addPeakPos[_i67].y + 8);

            for (var _j11 = 0; _j11 < length; _j11++) {
              var value = arr[_j11];
              foreCtx.fillText("幅值：" + value.val, _flag.addPeakPos[_i67].x + 5, _flag.addPeakPos[_i67].y + 23 + value.dy);
            }

            foreCtx.moveTo(halfWidth, _flag.addPeakPos[_i67].y + size.height + (length - 1) * 20);
            foreCtx.lineTo(line.x, line.y);
          };

          for (var _i67 = 0; _i67 < l; _i67++) {
            _loop2(_i67);
          }
        } else {
          for (var _i68 = 0; _i68 < l; _i68++) {
            if (xArr.length < _flag.addPeak[_i68] && opt.series.dataMsg.setPower || _flag.addPeakPos[_i68].freq > xMax && _flag.addPeakPos.xName === opt.x.name) continue;
            var halfWidth = _flag.addPeakPos[_i68].x + size.width / 2;
            line = {
              x: xArr[_flag.addPeak[_i68]] * xk + xb,
              y: yArr[_flag.addPeak[_i68]] * yk + yb
            };
            foreCtx.fillStyle = opt.series.markLine.lineStyle.color;
            foreCtx.fillRect(_flag.addPeakPos[_i68].x, _flag.addPeakPos[_i68].y, size.width, size.height);
            foreCtx.fillStyle = opt.series.markLine.fontStyle.color;
            foreCtx.fillText("".concat(freq).concat(_flag.addPeakPos[_i68].freq).concat(opt.x.name), _flag.addPeakPos[_i68].x + 5, _flag.addPeakPos[_i68].y + 8);
            foreCtx.fillText("幅值：" + opt.y.data[_flag.addPeak[_i68]].toFixed(4) + opt.y.name, _flag.addPeakPos[_i68].x + 5, _flag.addPeakPos[_i68].y + 23);
            foreCtx.moveTo(halfWidth, _flag.addPeakPos[_i68].y + size.height);
            foreCtx.lineTo(line.x, line.y);
          }
        }

        foreCtx.stroke();

        if (opt.toolTip.symbol.show) {
          //描点
          foreCtx.strokeStyle = opt.toolTip.lineStyle.color;
          foreCtx.fillStyle = opt.toolTip.symbol.color !== "" ? opt.toolTip.symbol.color : opt.toolTip.lineStyle.color;

          if (Array.isArray(xArr[0])) {
            var _loop3 = function _loop3(_i69) {
              foreCtx.beginPath(); // for (let j = 0, len = xArr.length; j < len; j++) {

              var idx = void 0;

              _flag.muchaddPeak.forEach(function (item) {
                if (item.key === _flag.addPeak[_i69]) {
                  idx = item.idx;
                }
              });

              if (idx !== undefined) {
                var xValue = xArr[idx][_flag.addPeak[_i69]];

                if (xValue) {
                  line = {
                    x: xValue * xk + xb,
                    y: yArr[idx][_flag.addPeak[_i69]] * yk + yb
                  };
                }
              } // }


              foreCtx.arc(line.x, line.y, opt.toolTip.symbol.size, 0, 2 * Math.PI);
              foreCtx.fill();
            };

            for (var _i69 = 0; _i69 < l; _i69++) {
              _loop3(_i69);
            }
          } else {
            for (var _i70 = 0; _i70 < l; _i70++) {
              foreCtx.beginPath();
              line = {
                x: xArr[_flag.addPeak[_i70]] * xk + xb,
                y: yArr[_flag.addPeak[_i70]] * yk + yb
              };
              foreCtx.arc(line.x, line.y, opt.toolTip.symbol.size, 0, 2 * Math.PI);
              foreCtx.fill();
            }
          }
        }

        foreCtx.clearRect(0, 0, this._dom.width, opt.grid.top);
        foreCtx.clearRect(0, opt.grid.top, opt.grid.left, this._dom.height - opt.grid.top);
        foreCtx.clearRect(opt.grid.left, this._scope.r.b, this._dom.width - opt.grid.left, opt.grid.bottom);
        foreCtx.clearRect(this._scope.r.r, opt.grid.top, opt.grid.right, this._scope.r.h);
      },
      // 绘制添加标注信息(原)

      /* drawAddLabel: function (type = 1) { // type：1 => 点击添加标注；2 => 点击最大化
        let _flag = this._flag,
          opt = this._option,
          foreCtx = this._drawTools.ctx.foreground;
        let l = _flag.addPeak.length;
        let size = {
          width: this._scope.v.x.end.toFixed(4).length >= 8 ? 120 : 110,
          height: 40,
        };
        let n = ~~(this._scope.r.w / (size.width + 10))
        let xArr = opt.x.data;
        let yArr = opt.y.data;
        let xMax = xArr[xArr.length - 1];
        if (type === 1 && l < n) {
          if (l !== 0) {
            for (let i = 0; i < l; i++) {
              if (_flag.addPeak[i] === _flag.line.key) {
                return;
              }
            }
            _flag.addPeak.push(_flag.line.key)
            l++;
          } else if (l === n) {
            return
          } else {
            _flag.addPeak.push(_flag.line.key)
            l++;
          }
          _flag.addPeak.sort((a, b) => {
            return a - b
          })
          _flag.addPeakPos.length = 0;
          if (Array.isArray(xArr[0])) {
            for (let i = 0; i < l; i++) {
              let xFreq = xArr[_flag.line.idx][_flag.addPeak[i]];
              if (!xFreq) {
                for (let j = 0, len = xArr.length; j < len; j++) {
                  const value = xArr[j];
                  if (j !== _flag.line.idx && value[_flag.addPeak[i]]) {
                    xFreq = value[_flag.addPeak[i]];
                    break;
                  }
                }
              }
              _flag.addPeakPos.push({
                xName: opt.x.name[_flag.line.idx],
                freq: this.round(xFreq),
                x: i * (size.width + 5) + opt.grid.left + 0.5,
                y: opt.grid.top,
                flag: 0
              })
            }
          } else {
            for (let i = 0; i < l; i++) {
              _flag.addPeakPos.push({
                xName: opt.x.name,
                freq: this.round(opt.x.data[_flag.addPeak[i]]),
                x: i * (size.width + 5) + opt.grid.left + 0.5,
                y: opt.grid.top,
                flag: 0
              })
            }
          }
        } else if (type === 2) {
          let movePos = null,
            peak = null,
            flag = -1;
          for (let i = 0; i < l; i++) {
            if (_flag.addPeakPos[i].flag) {
              peak = _flag.addPeak[i];
              movePos = _flag.addPeakPos[i];
              flag = i;
              _flag.addPeak.splice(i, 1);
              _flag.addPeakPos.splice(i, 1);
              break;
            }
          }
          if (flag > -1) {
            _flag.addPeak.push(peak);
            _flag.addPeakPos.push(movePos);
          }
        }
        if (opt.series.dataMsg.setPower && opt.x.name === _flag.addPeakPos[0].xName) {
          for (let i = 0, len = xArr.length; i < len; i++) {
            for (let j = 0, length = _flag.addPeakPos.length; j < length; j++) {
              if (_flag.addPeakPos[j].freq == xArr[i]) {
                _flag.addPeak[j] = i;
                break;
              }
            }
          }
        }
        foreCtx.clearRect(0, 0, this._dom.width, this._dom.height);
        foreCtx.beginPath();
        foreCtx.font = opt.series.markLine.fontStyle.size +
          ' ' + opt.series.markLine.fontStyle.family;
        foreCtx.textBaseline = 'top';
        foreCtx.strokeStyle = opt.series.markLine.lineStyle.color;
        let line = {
          x: null,
          y: null
        }
        const freqObj = {
          Hz: '频率：',
          NX: '倍频：',
          ms: '时间：',
        }
        let freq = freqObj[opt.x.name];
        if (Array.isArray(xArr[0])) {
          freq = freqObj[opt.x.name[_flag.line.idx]];
        }
        const proportion = this._computeParams.proportion;
        const xk = proportion.x.k;
        const xb = proportion.x.b;
        const yk = proportion.y.k;
        const yb = proportion.y.b;
        if (Array.isArray(xArr[0])) {
          for (let i = 0; i < l; i++) {
            let halfWidth = _flag.addPeakPos[i].x + size.width / 2;
            let arr = [];
            let m = 0;
            for (let j = 0, len = yArr.length; j < len; j++) {
              const y = yArr[j][_flag.addPeak[i]];
              if (y !== undefined) {
                arr.push({
                  dy: m,
                  val: this.round(y),
                })
                line = {
                  x: xArr[j][_flag.addPeak[i]] * xk + xb,
                  y: yArr[j][_flag.addPeak[i]] * yk + yb,
                }
                m += 15;
                // break;
              }
            }
            const length = arr.length;
            foreCtx.fillStyle = opt.series.markLine.lineStyle.color
            foreCtx.fillRect(_flag.addPeakPos[i].x, _flag.addPeakPos[i].y, size.width, size.height + (length - 1) * 20);
            foreCtx.fillStyle = opt.series.markLine.fontStyle.color;
            foreCtx.fillText(`${freq}${_flag.addPeakPos[i].freq}${opt.x.name[_flag.line.idx]}`, _flag.addPeakPos[i].x + 5, _flag.addPeakPos[i].y + 8);
            for (let j = 0; j < length; j++) {
              const value = arr[j];
              foreCtx.fillText('幅值：' + value.val, _flag.addPeakPos[i].x + 5, _flag.addPeakPos[i].y + 23 + value.dy)
            }
            foreCtx.moveTo(halfWidth, _flag.addPeakPos[i].y + size.height + (length - 1) * 20);
            foreCtx.lineTo(line.x, line.y);
          }
        } else {
          for (let i = 0; i < l; i++) {
            if (
              (xArr.length < _flag.addPeak[i] &&
                opt.series.dataMsg.setPower) ||
              (_flag.addPeakPos[i].freq > xMax &&
                _flag.addPeakPos.xName === opt.x.name)
            ) continue;
            let halfWidth = _flag.addPeakPos[i].x + size.width / 2;
            line = {
              x: xArr[_flag.addPeak[i]] * xk + xb,
              y: yArr[_flag.addPeak[i]] * yk + yb
            }
            foreCtx.fillStyle = opt.series.markLine.lineStyle.color
            foreCtx.fillRect(_flag.addPeakPos[i].x, _flag.addPeakPos[i].y, size.width, size.height)
            foreCtx.fillStyle = opt.series.markLine.fontStyle.color;
            foreCtx.fillText(`${freq}${_flag.addPeakPos[i].freq}${opt.x.name}`, _flag.addPeakPos[i].x + 5, _flag.addPeakPos[i].y + 8);
            foreCtx.fillText('幅值：' + opt.y.data[_flag.addPeak[i]].toFixed(4) + opt.y.name, _flag.addPeakPos[i].x + 5, _flag.addPeakPos[i].y + 23);
            foreCtx.moveTo(halfWidth, _flag.addPeakPos[i].y + size.height);
            foreCtx.lineTo(line.x, line.y);
          }
        }
        foreCtx.stroke();
        if (opt.toolTip.symbol.show) {
          foreCtx.strokeStyle = opt.toolTip.lineStyle.color;
          foreCtx.fillStyle = opt.toolTip.symbol.color !== '' ? opt.toolTip.symbol.color : opt.toolTip.lineStyle.color;
          if (Array.isArray(xArr[0])) {
            for (let i = 0; i < l; i++) {
              foreCtx.beginPath();
              for (let j = 0, len = xArr.length; j < len; j++) {
                const xValue = xArr[j][_flag.addPeak[i]];
                if (xValue) {
                  line = {
                    x: xValue * xk + xb,
                    y: yArr[j][_flag.addPeak[i]] * yk + yb,
                  }
                }
              }
              foreCtx.arc(line.x, line.y, opt.toolTip.symbol.size, 0, 2 * Math.PI);
              foreCtx.fill();
            }
          } else {
            for (let i = 0; i < l; i++) {
              foreCtx.beginPath();
              line = {
                x: xArr[_flag.addPeak[i]] * xk + xb,
                y: yArr[_flag.addPeak[i]] * yk + yb
              }
              foreCtx.arc(line.x, line.y, opt.toolTip.symbol.size, 0, 2 * Math.PI);
              foreCtx.fill();
            }
          }
        }
        foreCtx.clearRect(0, 0, this._dom.width, opt.grid.top);
        foreCtx.clearRect(0, opt.grid.top, opt.grid.left, this._dom.height - opt.grid.top);
        foreCtx.clearRect(opt.grid.left, this._scope.r.b, this._dom.width - opt.grid.left, opt.grid.bottom);
        foreCtx.clearRect(this._scope.r.r, opt.grid.top, opt.grid.right, this._scope.r.h);
      }, */
      // 获取最大的峰值下标
      getPeakIndexArr: function getPeakIndexArr(yArr, count) {
        /!*yArr=频谱y数组 count=需要获取的最大下标数目*!/;

        if (yArr.length <= 1) {
          return [0];
        }

        var indexArr = [],
            xVal = [];
        var t_yArr = []; //构造包含索引和y最大极值的数组

        var i = 0;
        var j = 0;
        var len = yArr.length;
        var obj = {};

        if (yArr[0] > yArr[1]) {
          obj.key = 0;
          obj.value = yArr[0];
          t_yArr.push(obj);
        }

        for (i = 1; i < len - 1; i++) {
          if (yArr[i] > yArr[i - 1] && yArr[i] > yArr[i + 1]) {
            obj = {};
            obj.key = i;
            obj.value = yArr[i];
            t_yArr.push(obj);
          }
        }

        if (yArr[len - 2] < yArr[len - 1]) {
          obj = {};
          obj.key = len - 1;
          obj.value = yArr[len - 1];
          t_yArr.push(obj);
        }

        len = t_yArr.length;

        for (i = 0; i < count; i++) {
          for (j = i + 1; j < len; j++) {
            if (t_yArr[i].value < t_yArr[j].value) {
              obj = t_yArr[i];
              t_yArr[i] = t_yArr[j];
              t_yArr[j] = obj;
            }
          }
        }

        if (count > len) {
          count = len;
        }

        for (i = 0; i < count; i++) {
          indexArr.push(t_yArr[i].key);
        }

        return indexArr;
      },
      // 设置导出音频信息
      setAudio: function setAudio(freq, data) {
        var l = data.length;
        var max = Number.MIN_VALUE;
        var pointSize = 16; //采样点大小

        var length = l * pointSize / 8; //数据长度

        var channelNumber = 1; //声道数量

        var blockSize = channelNumber * pointSize / 8; //采样块大小

        var buffer = new Uint8Array(length + 44); //wav文件数据

        var view = new DataView(buffer.buffer); //数据视图

        buffer.set(new Uint8Array([0x52, 0x49, 0x46, 0x46])); //"RIFF"

        view.setUint32(4, l + 44, true); //总长度

        buffer.set(new Uint8Array([0x57, 0x41, 0x56, 0x45]), 8); //"WAVE"

        buffer.set(new Uint8Array([0x66, 0x6d, 0x74, 0x20]), 12); //"fmt "

        view.setUint32(16, 16, true); //WAV头大小

        view.setUint16(20, 1, true); //编码方式

        view.setUint16(22, 1, true); //声道数量

        view.setUint32(24, freq, true); //采样频率

        view.setUint32(28, freq * blockSize, true); //每秒字节数

        view.setUint16(32, blockSize, true); //采样块大小

        view.setUint16(34, pointSize, true); //采样点大小

        buffer.set(new Uint8Array([0x64, 0x61, 0x74, 0x61]), 36); //"data"

        view.setUint32(40, length, true); //数据长度

        for (var _i71 = 0; _i71 < l; _i71++) {
          if (Math.abs(data[_i71]) > max) {
            max = Math.abs(data[_i71]);
          }
        }

        if (max == 0) {
          //波形坐标轴最小刻度为0.001
          max = 0.0001;
        }

        var xs = 32760 / max; //放大系数:short/max，short范围(-32768~32767)

        for (var _i72 = 0; _i72 < l; _i72++) {
          data[_i72] = Math.round(data[_i72] * xs); //数据
        }

        buffer.set(new Uint8Array(new Int16Array(data).buffer), 44); //数据

        return buffer;
      },
      // 导出文件
      funDownload: function funDownload(content, filename) {
        var eleLink = document.createElement("a"); // 创建隐藏的可下载链接

        eleLink.download = filename;
        eleLink.style.display = "none";
        var blob = new Blob([content]); // 字符内容转变成blob地址

        eleLink.href = URL.createObjectURL(blob);
        eleLink.dispatchEvent(new MouseEvent("click"));
      },
      // 画标线
      drawMarkLine: function drawMarkLine() {
        var opt = this._option;
        var arr = opt.series.markLine.data;
        var failCtx = this._drawTools.ctx.failure;
        failCtx.clearRect(0, 0, this._dom.width, this._dom.height);
        if (arr.length === 0) return;
        var coordinateSystem = opt.series.coordinateSystem;
        var scopeR = this._scope.r;

        if (coordinateSystem === "rectanguler") {
          var paramsX = this._computeParams.proportion.x;
          var paramsY = this._computeParams.proportion.y;
          var extreme = {
            max: opt.x.data[opt.x.data.length - 1],
            min: opt.x.data[0]
          };
          var l = arr.length;

          if (arr && l > 0) {
            if (l === 1 && arr[0].name === undefined) {
              var value = arr[0];
              var dValue = {
                val: value.val,
                key: value.key,
                dex: 0
              };
              this.drawLine(dValue);
              this._flag.line = {
                key: arr[0].key,
                val: arr[0].val,
                idx: undefined
              };
              this._flag.toolCheck = 0;
              arr.length = 0;
            } else {
              var lineStyle = opt.series.markLine.lineStyle;
              var fontStyle = opt.series.markLine.fontStyle;

              for (var _i73 = 0; _i73 < l; _i73++) {
                var x = opt.x.data[arr[_i73].xAxis] * paramsX.k + paramsX.b + 0.5;
                var y = opt.y.data[arr[_i73].xAxis] * paramsY.k + paramsY.b;

                if (x >= opt.grid.left && x <= scopeR.r && y >= opt.grid.top && y <= scopeR.b) {
                  failCtx.beginPath();
                  failCtx.lineWidth = 1;
                  failCtx.strokeStyle = lineStyle.color;
                  failCtx.fillStyle = lineStyle.color; //设定故障频率文字颜色

                  failCtx.font = fontStyle.weight + " " + fontStyle.size + " " + fontStyle.family;
                  failCtx.save();
                  failCtx.moveTo(x, opt.grid.top);
                  failCtx.lineTo(x, y - 3);
                  failCtx.translate(x - scopeR.h, 110 + opt.grid.top);
                  failCtx.rotate(-90 * Math.PI / 180);
                  failCtx.textAlign = "right";
                  failCtx.textBaseline = "bottom";
                  failCtx.fillText(arr[_i73].name, 40 + opt.grid.top, scopeR.h);
                  failCtx.restore();
                  failCtx.stroke();
                  failCtx.beginPath();
                  failCtx.fillStyle = lineStyle.color;
                  failCtx.arc(x, y, 3, 0, 2 * Math.PI);
                  failCtx.fill();
                  failCtx.moveTo(x, y + 3);
                  failCtx.lineTo(x, scopeR.b);
                  failCtx.stroke();
                }
              }
            }

            this._flag.tools.flag_subFreq && this.drawLabelLine();
          }
        } else if (coordinateSystem === "circle") {
          var color = opt.series.data.color;

          for (var _i74 = 0, _l23 = arr.length; _i74 < _l23; _i74++) {
            failCtx.beginPath();

            var _iterator4 = _createForOfIteratorHelper(arr[_i74]),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var val = _step4.value;
                failCtx.strokeStyle = color[_i74];
                failCtx.arc(scopeR.x, scopeR.y, val, 0, 2 * Math.PI);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          failCtx.stroke();
        } else if (coordinateSystem === "circleLine") {
          var _color2 = opt.series.data.color;

          for (var _i75 = 0, _l24 = arr.length; _i75 < _l24; _i75++) {
            failCtx.beginPath();

            var _iterator5 = _createForOfIteratorHelper(arr[_i75]),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _val12 = _step5.value;
                failCtx.strokeStyle = _color2[_i75];
                failCtx.arc(scopeR.x, scopeR.y, _val12, 0, 2 * Math.PI);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          failCtx.stroke();
        }
      },
      // 画闸门
      drawGateLine: function drawGateLine() {
        var opt = this._option;
        var line = opt.series.gateMsg;
        var coordinateSystem = opt.series.coordinateSystem;
        var scopeR = this._scope.r;

        if (line.isShow && opt.x.data.length) {
          if (coordinateSystem === "rectanguler") {
            var paramsX = this._computeParams.proportion.x;
            var paramsY = this._computeParams.proportion.y;
            var foreCtx = this._drawTools.ctx.gate;
            var gateLineStart = {
              x: line.fStart * paramsX.k + paramsX.b,
              y: line.fThreshold * paramsY.k + paramsY.b
            };
            var gateLineEnd = {
              x: (Number(line.fStart) + Number(line.fWidth)) * paramsX.k + paramsX.b,
              y: line.fThreshold * paramsY.k + paramsY.b
            };
            foreCtx.clearRect(0, 0, this._dom.width, this._dom.height);

            if (gateLineStart.x >= opt.grid.left && gateLineStart.x <= scopeR.r && gateLineStart.y >= opt.grid.top && gateLineStart.y <= scopeR.b) {
              foreCtx.beginPath();
              foreCtx.strokeStyle = line.lineStyle.color;
              foreCtx.lineWidth = line.lineStyle.width;
              foreCtx.fillStyle = line.lineStyle.color;
              foreCtx.moveTo(gateLineStart.x, gateLineStart.y);
              foreCtx.arc(gateLineStart.x - 2, gateLineStart.y, 2, 0, 2 * Math.PI);
              foreCtx.fillStyle = line.lineStyle.color; //设置填充颜色

              foreCtx.fill(); //开始填充

              foreCtx.lineTo(gateLineEnd.x, gateLineEnd.y);
              foreCtx.moveTo(Number(gateLineEnd.x + 2), gateLineEnd.y);
              foreCtx.arc(Number(gateLineEnd.x + 2), gateLineEnd.y, 2, 0, 2 * Math.PI);
              foreCtx.fillStyle = line.lineStyle.color; //设置填充颜色

              foreCtx.fill(); //开始填充

              foreCtx.stroke();
            }
          }
        }
      },
      // 关闭闸门
      closeGate: function closeGate() {
        _this5._option.series.gateMsg.isShow = 0;

        _this5._drawTools.ctx.gate.clearRect(0, 0, _this5._dom.width, _this5._dom.height);
      },
      // 圆周图坐标(背景)
      drawCircleAxios: function drawCircleAxios() {
        var opt = this._option;
        var dom = this._dom;
        var backCtx = this._drawTools.ctx.background;
        var sr = this._scope.r;
        var x = sr.x;
        var y = sr.y;
        var r = sr.rs;
        var line = opt.series.lineStyle;
        var font = opt.series.fontStyle;
        backCtx.clearRect(0, 0, dom.width, dom.height);
        backCtx.beginPath();
        backCtx.strokeStyle = line.color;
        backCtx.lineWidth = line.width;
        backCtx.fillStyle = font.color;
        backCtx.arc(x, y, r, 0, 2 * Math.PI);
        backCtx.moveTo(x - r, y);
        backCtx.lineTo(x + r, y);
        backCtx.moveTo(x, y - r);
        backCtx.lineTo(x, y + r);
        backCtx.stroke();
        backCtx.font = "".concat(font.size, " ").concat(font.family);
        backCtx.textAlign = "center";
        backCtx.textBaseline = "bottom";
        backCtx.fillText("∠0°", x, y - r);
        backCtx.textBaseline = "top";
        backCtx.fillText("∠180°", x, y + r + 2);
        backCtx.textAlign = "left";
        backCtx.textBaseline = "middle";
        backCtx.fillText("∠90°", x + r + 2, y);
        backCtx.textAlign = "right";
        backCtx.fillText("∠270°", x - r - 2, y);
        backCtx.beginPath();
        backCtx.arc(x, y, r / 2, 0, 2 * Math.PI);
        backCtx.stroke();
        backCtx.beginPath();
        backCtx.arc(x, y, 3 * r / 4, 0, 2 * Math.PI);
        backCtx.stroke();
      },
      // 圆周图数据
      drawPointsLine: function drawPointsLine() {
        var dom = this._dom;
        var series = this._option.series;
        var sr = this._scope.r;
        var rx = sr.x;
        /* 圆心x */

        var ry = sr.y;
        /* 圆心y */

        var rr = sr.rs;
        /* 半径 */

        var data = series.data;
        var amplitude = data.amplitude;
        /* x轴角度 */

        var phase = data.phase;
        /* y轴的幅值 */

        var dataCtx = this._drawTools.ctx.data;
        var max = data.maxAmplitude;
        var min = data.minAmplitude;
        var PP = data.PP;
        /* 四分之一的半径对应的幅值大小 */

        var axis = this.axis;
        axis.x.length = 0;
        axis.y.length = 0;
        axis.index.length = 0;

        if (amplitude === undefined || phase === undefined || phase.length === 0) {
          return;
        }

        dataCtx.clearRect(0, 0, dom.width, dom.height);

        for (var _i76 = 0, l = phase.length; _i76 < l; _i76++) {
          var Aarr = amplitude;
          var Parr = phase[_i76];
          var color = data.color;
          dataCtx.lineWidth = series.lineStyle.width;
          dataCtx.fillStyle = color;
          dataCtx.strokeStyle = color;

          if (this.getDataType(Parr) === "Array") {
            for (var j = 0, len = Parr.length; j < len; j++) {
              dataCtx.beginPath();
              var A = 360 / len * j; //每个点对应在坐标系内的角度

              var yVal = Parr[j]; //波形的幅值

              var nyVal = Parr[j + 1]; //下一个波形的幅值

              var nA = 360 / len * (j + 1); //下一个点对应在坐标系内的角度

              if (j === len - 1) {
                nyVal = Parr[0];
              }

              var x = void 0;
              var y = void 0;
              x = {
                oVal: rx + (3 * PP + yVal) * rr / 4 / PP * Math.sin(A * Math.PI / 180),
                nVal: rx + (3 * PP + nyVal) * rr / 4 / PP * Math.sin(nA * Math.PI / 180)
              };
              y = {
                oVal: ry - (3 * PP + yVal) * rr / 4 / PP * Math.cos(A * Math.PI / 180),
                nVal: ry - (3 * PP + nyVal) * rr / 4 / PP * Math.cos(nA * Math.PI / 180)
              };
              dataCtx.moveTo(x.oVal, y.oVal);
              dataCtx.lineTo(x.nVal, y.nVal);
              axis.x.push(x);
              axis.y.push(y);
              axis.index.push({
                i: _i76,
                j: j
              });
              dataCtx.stroke();
            }
          }
        }

        var text = "".concat(this.round(max)).concat(series.unit);
        var font = series.fontStyle;
        dataCtx.beginPath();
        dataCtx.fillStyle = font.color;
        dataCtx.font = "".concat(font.size, " ").concat(font.family);
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text, rx + rr * Math.cos(45 * Math.PI / 180), ry - rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text, rx + rr * Math.cos(45 * Math.PI / 180), ry + rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text, rx - rr * Math.cos(45 * Math.PI / 180), ry - rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text, rx - rr * Math.cos(45 * Math.PI / 180), ry + rr * Math.sin(45 * Math.PI / 180));
        var text2 = -text;
        dataCtx.beginPath();
        dataCtx.fillStyle = font.color;
        dataCtx.font = "".concat(font.size, " ").concat(font.family);
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text2, rx + rr / 2 * Math.cos(45 * Math.PI / 180) - 20, ry - rr / 2 * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text2, rx + rr / 2 * Math.cos(45 * Math.PI / 180) - 20, ry + rr / 2 * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text2, rx - rr / 2 * Math.cos(45 * Math.PI / 180) + 20, ry - rr / 2 * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text2, rx - rr / 2 * Math.cos(45 * Math.PI / 180) + 20, ry + rr / 2 * Math.sin(45 * Math.PI / 180));
      },
      // 倾角分布图(沉降跟踪图)坐标(背景)
      drawCircle: function drawCircle() {
        var opt = this._option;
        var dom = this._dom;
        var backCtx = this._drawTools.ctx.background;
        var sr = this._scope.r;
        var x = sr.x;
        var y = sr.y;
        var r = sr.rs;
        var line = opt.series.lineStyle;
        var font = opt.series.fontStyle;
        backCtx.clearRect(0, 0, dom.width, dom.height);
        backCtx.beginPath();
        backCtx.strokeStyle = line.color;
        backCtx.lineWidth = line.width;
        backCtx.fillStyle = font.color;
        backCtx.arc(x, y, r, 0, 2 * Math.PI);
        backCtx.moveTo(x - r, y);
        backCtx.lineTo(x + r, y);
        backCtx.moveTo(x, y - r);
        backCtx.lineTo(x, y + r);
        backCtx.stroke();
        backCtx.font = "".concat(font.size, " ").concat(font.family);
        backCtx.textAlign = "center";
        backCtx.textBaseline = "bottom";
        backCtx.fillText("N ∠0°", x, y - r);
        backCtx.textBaseline = "top";
        backCtx.fillText("S ∠180°", x, y + r + 2);
        backCtx.textAlign = "left";
        backCtx.textBaseline = "middle";
        backCtx.fillText("E ∠90°", x + r + 2, y);
        backCtx.textAlign = "right";
        backCtx.fillText("W ∠270°", x - r - 2, y);
      },
      // 倾角分布图(沉降跟踪图)数据
      drawPoints: function drawPoints() {
        var dom = this._dom;
        var series = this._option.series;
        var sr = this._scope.r;
        var rx = sr.x;
        /* 圆心x */

        var ry = sr.y;
        /* 圆心y */

        var rr = sr.rs;
        /* 半径 */

        var data = series.data;
        var amplitude = data.amplitude;
        /* 幅值 */

        var phase = data.phase;
        /* 相位 */

        var dataCtx = this._drawTools.ctx.data;
        var max = data.maxAmplitude;
        var axis = this.axis;
        axis.x.length = 0;
        axis.y.length = 0;
        axis.index.length = 0;

        if (amplitude === undefined || amplitude.length === 0 || phase === undefined || phase.length === 0) {
          return;
        }

        dataCtx.clearRect(0, 0, dom.width, dom.height);

        for (var _i77 = 0, l = phase.length; _i77 < l; _i77++) {
          var Aarr = amplitude[_i77];
          var Parr = phase[_i77];
          var color = data.color[_i77];
          /* 散点图的点的颜色 */

          dataCtx.fillStyle = color;

          for (var j = 0, len = Aarr.length; j < len; j++) {
            dataCtx.beginPath();
            var A = Aarr[j];
            var P = Parr[j];
            var x = rx + A / max * rr * Math.sin(P * Math.PI / 180);
            var y = ry - A / max * rr * Math.cos(P * Math.PI / 180);
            axis.x.push(x);
            axis.y.push(y);
            axis.index.push({
              i: _i77,
              j: j
            });
            dataCtx.arc(x, y, 2, 0, 2 * Math.PI);
            dataCtx.fill();
          }
        }

        var text = "".concat(this.round(max)).concat(series.unit);
        var font = series.fontStyle;
        dataCtx.beginPath();
        dataCtx.fillStyle = font.color;
        dataCtx.font = "".concat(font.size, " ").concat(font.family);
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text, rx + rr * Math.cos(45 * Math.PI / 180), ry - rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "left";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text, rx + rr * Math.cos(45 * Math.PI / 180), ry + rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "bottom";
        dataCtx.fillText(text, rx - rr * Math.cos(45 * Math.PI / 180), ry - rr * Math.sin(45 * Math.PI / 180));
        dataCtx.textAlign = "right";
        dataCtx.textBaseline = "top";
        dataCtx.fillText(text, rx - rr * Math.cos(45 * Math.PI / 180), ry + rr * Math.sin(45 * Math.PI / 180));
      },
      // 倾角分布图(沉降跟踪图)鼠标最近点
      getNearPoint: function getNearPoint(data) {
        var axis = this.axis;
        var ax = axis.x;
        var ay = axis.y;
        var msg = {
          x: ax[data[0].key],
          y: ay[data[0].key],
          index: axis.index[data[0].key]
        };
        this.drawPoint(msg);
      },
      // 圆周图报警线
      drawCircleAlarm: function drawCircleAlarm() {
        var series = this._option.series;
        var data = series.circleAlarm;
        var ctx = this._drawTools.ctx.failure;
        var scope = this._scope.r;
        var rx = scope.x;
        var ry = scope.y;
        ctx.clearRect(0, 0, dom.width, dom.height);

        for (var _i78 = 0, l = data.length; _i78 < l; _i78++) {
          for (var j = 0; j < 2; j++) {
            var value = data[_i78];
            if (value.data >= series.data.maxAmplitude) continue;
            var r = scope.rs * value.data / series.data.maxAmplitude;
            ctx.beginPath();
            ctx.lineStyle = value.lineStyle.width;
            ctx.strokeStyle = value.lineStyle.color;
            ctx.arc(rx, ry, r, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
      },
      // 倾角分布图(沉降跟踪图)点击描点
      drawPoint: function drawPoint(msg, type) {
        var dom = this._dom;
        var clickCtx = this._drawTools.ctx.click;
        clickCtx.clearRect(0, 0, dom.width, dom.height);
        clickCtx.beginPath();
        clickCtx.fillStyle = "red";
        clickCtx.arc(msg.x, msg.y, 3, 0, 2 * Math.PI);
        clickCtx.fill();

        if (type == "circleLine") {
          this._option.toolTip.formatter({
            value: this._option.series.data.phase[msg.index.i][msg.index.j]
          });
        } else {
          this._option.toolTip.formatter({
            index1: msg.index.i,
            index2: msg.index.j
          });

          this._option.series.markLine.data.length = 0;
        }
      },
      // 刷新图谱
      resize: function resize() {
        var dom = this._dom;
        var opt = this._option;
        var grid = opt.grid;
        this.creat(dom.name); // 重新添加了keydom的事件监听，解决刷新图谱后出现无法监听keydom时间的问题

        if (opt.series.type !== "bar") {
          var div = dom.name.children;
          this.removeEvent(div[div.length - 1], "keydown", this.event.dom.keydown);
          this.addEvent(div[div.length - 1], "keydown", this.event.dom.keydown);
        }

        this._scope.r = {
          r: dom.width - grid.right,
          w: dom.width - grid.right - grid.left,
          b: dom.height - grid.bottom,
          h: dom.height - grid.top - grid.bottom,
          x: null,
          y: null,
          rs: null
        };
        var r = this._scope.r;
        var wr = r.w / 2;
        var hr = r.h / 2;
        r.x = wr + grid.left;
        r.y = hr + grid.top;
        r.rs = Math.min(wr, hr);
        var isBar = opt.series.type === "bar";
        isBar && (r.b -= 60);
        var type = isBar ? 1 : 2;
        this.restoreAll(type); // 防止resize()后故障频率没有画

        this._option.series.markLine.data.length > 0 && this.drawMarkLine();
      },
      // 取缩放后符合条件的y值集合
      getYdata: function getYdata(x1, x2) {
        var xArr = this._option.x.data;
        var yArr = this._option.y.data;
        var result = [];

        for (var _i79 = 0; _i79 < xArr.length; _i79++) {
          if (x1 <= xArr[_i79] && xArr[_i79] <= x2) {
            result.push(yArr[_i79]);
          }
        }

        return result;
      },

      /*
        判断dom是否已绑定某事件，如果未绑定则绑定
        el          HTMLElement   绑定事件的HTML元素
        eventType   String        事件类型
        fn          Function      事件绑定的方法
        isRepeat    Boolean       是否允许同类事件重复绑定
        useCapture  Boolean       是否在捕获阶段触发
      */
      addEvent: function addEvent(el, eventType, fn) {
        var isRepeat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var useCapture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var errorStr = "";

        if (!el || !eventType || !fn) {
          errorStr = "传入参数错误";
        } else if (_typeof(el) !== "object") {
          errorStr = "el 不是对象";
        } else if (typeof eventType !== "string") {
          errorStr = "事件类型错误";
        } else if (typeof fn !== "function") {
          errorStr = "fn 不是函数";
        }

        if (errorStr !== "") {
          throw new Error(errorStr);
        }

        if (el.eventList === undefined) {
          el.eventList = {};
        }

        if (!isRepeat) {
          for (var key in el.eventList) {
            if (key === eventType) {
              /* this.removeEvent(el, eventType, fn);
              break; */
              return "该事件已绑定";
            }
          }
        } // 添加绑定事件


        el.eventList[eventType] = 1;
        el.addEventListener(eventType, fn, useCapture);
      },
      // 移除监听事件
      removeEvent: function removeEvent(el, eventType, fn) {
        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var errorStr = "";

        if (!el || !eventType || !fn) {
          errorStr = "传入参数错误";
        } else if (_typeof(el) !== "object") {
          errorStr = "el 不是HTML对象";
        } else if (typeof eventType !== "string") {
          errorStr = "事件类型错误";
        } else if (typeof fn !== "function") {
          errorStr = "fn 不是函数";
        }

        if (errorStr !== "") {
          throw new Error(errorStr);
        }

        if (el.eventList) {
          delete el.eventList[eventType];
        }

        el.removeEventListener(eventType, fn, useCapture);
      },
      // 销毁(释放dom已绑定事件)
      destory: function destory() {
        var dom = this._dom.name;
        var eventList = dom.eventList;

        if (eventList) {
          var eventName = {
            click: "click",
            mousedown: "mousedown",
            mouseup: "mouseup",
            mousewheel: "zoom",
            dblclick: "lineDblclick"
          };

          for (var key in eventList) {
            this.removeEvent(dom, key, this.event.dom[eventName[key]]);
          }

          this.removeEvent(window, "mousemove", this.event.dom.mousemove);
        }

        var div = dom.children[dom.children.length - 1];

        if (div.eventList) {
          this.removeEvent(div, "keydown", this.event.dom.keydown);
        }

        if (this._option) {
          var tools = this._option.tools;

          for (var _key4 in tools) {
            var value = tools[_key4];

            if (value.dom && value.show) {
              this.removeEvent(value.dom, "click", this.event.tool[_key4]);
            }
          }

          if (this._option.series.type === "bar") {
            this.removeEvent(dom, "mousemove", this.event.dom.barMove);
          }
        }
      },
      // 画Y轴标线
      drawMarkY: function drawMarkY() {
        var opt = this._option;
        var data = opt.y.markLine;
        if (!data) return;
        var failCtx = this._drawTools.ctx.failure;
        var grid = opt.grid;
        var paramsY = this._computeParams.proportion.y;
        failCtx.clearRect(0, 0, this._dom.width, this._dom.height);

        for (var _i80 = 0, l = data.length; _i80 < l; _i80++) {
          var value = data[_i80];
          failCtx.beginPath();
          failCtx.strokeStyle = value.lineStyle.color;
          failCtx.lineWidth = value.lineStyle.width;
          failCtx.moveTo(grid.left, value.data * paramsY.k + paramsY.b);
          failCtx.lineTo(this._scope.r.r, value.data * paramsY.k + paramsY.b);
          failCtx.stroke();
        }
      }
    };
    return new _chart(dom);
  };

  function init(dom) {
    if (dom) {
      return this(dom);
    }
  }

  chart.init = init;
  return chart;
});

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/bzbp.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/bzbp.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bzbp-cf0ba.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/dcplc.png":
/*!***********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/dcplc.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dcplc-a16d0.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/dpgl.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/dpgl.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dpgl-37e47.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/dwdybp.png":
/*!************************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/dwdybp.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dwdybp-bbbf1.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/fztk.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/fztk.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fztk-d40f5.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/hnc.png":
/*!*********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/hnc.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hnc-72332.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/qhxzqb.png":
/*!************************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/qhxzqb.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qhxzqb-47731.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/qxbz.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/qxbz.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qxbz-07af9.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/tjbz.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/tjbz.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tjbz-74159.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/xhxf.png":
/*!**********************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/xhxf.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xhxf-2d4f4.png";

/***/ }),

/***/ "./src/viewInterface/assets/img/tool_icons/yxplzsz.png":
/*!*************************************************************!*\
  !*** ./src/viewInterface/assets/img/tool_icons/yxplzsz.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/yxplzsz-5439f.png";

/***/ }),

/***/ "./src/viewInterface/components/wave/Wave.vue":
/*!****************************************************!*\
  !*** ./src/viewInterface/components/wave/Wave.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wave.vue?vue&type=template&id=09e070ea& */ "./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea&");
/* harmony import */ var _Wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wave.vue?vue&type=script&lang=js& */ "./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wave.vue?vue&type=style&index=0&lang=scss& */ "./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/viewInterface/components/wave/Wave.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Wave.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js??ref--3-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Wave.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_mini-css-extract-plugin@0.8.2@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea&":
/*!***********************************************************************************!*\
  !*** ./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Wave.vue?vue&type=template&id=09e070ea& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/Wave.vue?vue&type=template&id=09e070ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Wave_vue_vue_type_template_id_09e070ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/viewInterface/components/wave/WaveChart.vue":
/*!*********************************************************!*\
  !*** ./src/viewInterface/components/wave/WaveChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaveChart.vue?vue&type=template&id=462bf044& */ "./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044&");
/* harmony import */ var _WaveChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveChart.vue?vue&type=script&lang=js& */ "./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaveChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/viewInterface/components/wave/WaveChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_WaveChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--1-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./WaveChart.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/WaveChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_WaveChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044&":
/*!****************************************************************************************!*\
  !*** ./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./WaveChart.vue?vue&type=template&id=462bf044& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/viewInterface/components/wave/WaveChart.vue?vue&type=template&id=462bf044&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_WaveChart_vue_vue_type_template_id_462bf044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=30-bac90aef.js.map