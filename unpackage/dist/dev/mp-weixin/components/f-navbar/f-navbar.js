"use strict";
const common_vendor = require("../../common/vendor.js");
const mainPagePath = ["pages/index/index", "pages/map/map", "pages/order/order", "pages/my/myInfo"];
const homePath = "/pages/index/index";
const whiteList = ["#FFF", "#fff", "#FFFFFF", "#ffffff", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"];
const _sfc_main = {
  name: "f-navbar",
  props: {
    title: {
      type: String
    },
    // navbarType等于5透明背景时title是否显示
    isShowTransparentTitle: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    // 左边文字
    leftText: {
      type: String
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#fff"
    },
    // 背景图片
    image: {
      type: String
    },
    // 背景图片mode
    imageMode: {
      type: String,
      default: "aspectFill"
    },
    // 导航状态 0、默认固定在顶部 1、不固定在顶部 2、自定义点击事件 3、同时显示箭头和去首页按钮 4、不显示左侧内容 5、上拉渐变显示背景色
    navbarType: {
      type: [String, Number],
      default: 0
    },
    // 是否显示左侧内容
    isShowLeft: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    // 左边按钮icon
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    // 左边icon颜色
    leftIconColor: {
      type: String,
      default: "#303133"
    },
    // navbarType等于5透明背景时左边颜色
    transparentLeftColor: {
      type: String
    },
    // 屏幕滑动距离顶部距离(透明固定导航比传)
    scrollTop: {
      type: Number,
      default: 0
    },
    //导航字体颜色，字体颜色为白色的时候会把手机状态栏设置为白色，否则为黑色
    fontColor: {
      type: String,
      default: "#303133"
    },
    // navbarType等于5透明背景时title颜色
    transparentTitleColor: {
      type: String
    },
    titleWidth: {
      type: [String, Number],
      default: 400
    },
    fontSize: {
      type: [String, Number],
      default: 30
    },
    // 背景渐变色
    gradient: {
      type: String
    },
    // 是否设置防止塌陷高度
    isFillHeight: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    isCustomLeftClick: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    urls: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // systemInfo:base.systemInfo,
      systemInfo: {
        statusBarHeight: common_vendor.index.getSystemInfoSync().statusBarHeight,
        navBarH: common_vendor.index.getSystemInfoSync().statusBarHeight + 44,
        //菜单栏总高度--单位px
        titleBarHeight: 44
        //标题栏高度--单位px
      },
      //当前页面是否是第一个页面
      firstPage: false,
      //透明度值
      transparentValue: 0,
      iconLeft: "arrow-left",
      //左边icon
      // 上次显示的导航栏颜色
      lastFrontColor: "",
      //字体色
      navFontColor: "#303133",
      isWhite: false
      //是否白色
    };
  },
  watch: {
    leftIcon: {
      immediate: true,
      handler(val) {
        this.iconLeft = val;
      }
    },
    fontColor: {
      immediate: true,
      handler(val) {
        this.navFontColor = val;
        this.settingColor();
      }
    },
    navbarType: {
      immediate: true,
      handler(val) {
        console.log(val, "navbarType");
        if (val == 5) {
          if (this.scrollTop > 180) {
            this.transparentValue = 1;
          } else {
            this.transparentValue = this.scrollTop / 180;
          }
        }
      }
    },
    scrollTop(val) {
      this.pageScroll({
        scrollTop: val
      });
    }
  },
  computed: {
    leftColor() {
      let color = "#303133";
      if (this.leftIconColor == "#303133") {
        if (!whiteList.includes(this.bgColor) || this.gradient) {
          color = "#fff";
        }
      } else {
        color = this.leftIconColor;
      }
      return color;
    }
  },
  created() {
    this.pageScroll({
      scrollTop: this.scrollTop
    });
    let currentPages = getCurrentPages();
    let pageLen = currentPages.length;
    if (pageLen == 1 && !mainPagePath.includes(currentPages[0].route)) {
      this.firstPage = true;
      this.iconLeft = "home";
      console.log(this.firstPage, "this.firstPage");
    }
  },
  methods: {
    onBack() {
      if (this.firstPage) {
        common_vendor.index.reLaunch({
          url: homePath
        });
      } else {
        common_vendor.index.navigateBack();
      }
    },
    onHome() {
      common_vendor.index.switchTab({
        url: homePath
      });
    },
    leftClick() {
      if (this.navbarType == 2 || this.isCustomLeftClick) {
        this.$emit("leftClick");
      } else if (this.urls != "") {
        console.log(this.urls);
        if (this.urls == "/pages/index/index" || this.urls == "/pages/my/myInfo") {
          common_vendor.index.switchTab({
            url: this.urls
          });
        } else {
          common_vendor.index.navigateTo({
            url: this.urls
          });
        }
      } else {
        this.onBack();
      }
    },
    rightClick() {
      this.$emit("rightClick");
    },
    pageScroll(e) {
      if (this.navbarType == 5) {
        if (e.scrollTop && e.scrollTop > 0) {
          if (e.scrollTop > 180) {
            this.transparentValue = 1;
          } else {
            this.transparentValue = e.scrollTop / 180;
          }
        } else {
          this.transparentValue = 0;
        }
      }
    },
    //设置手机状态栏颜色
    settingColor() {
      let navColor = this.navFontColor;
      console.log(navColor, "settingColor");
      let frontColor = "#000000";
      if (whiteList.includes(navColor)) {
        frontColor = "#ffffff";
        this.isWhite = true;
      }
      if (this.lastFrontColor == frontColor) {
        return;
      }
      setTimeout(() => {
        this.lastFrontColor = frontColor;
        common_vendor.index.setNavigationBarColor({
          frontColor,
          backgroundColor: "#FFFFFF"
        });
      }, 150);
    }
  }
};
if (!Array) {
  const _component_u_icon = common_vendor.resolveComponent("u-icon");
  const _component_u_line = common_vendor.resolveComponent("u-line");
  (_component_u_icon + _component_u_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.image
  }, $props.image ? {
    b: $props.image,
    c: $props.imageMode,
    d: $data.systemInfo.navBarH + "px"
  } : {}, {
    e: $data.systemInfo.navBarH + "px",
    f: $props.bgColor,
    g: $props.gradient,
    h: $props.navbarType == 5 ? $data.transparentValue : "",
    i: $props.navbarType != 4 && $props.isShowLeft
  }, $props.navbarType != 4 && $props.isShowLeft ? common_vendor.e({
    j: $props.navbarType == 3
  }, $props.navbarType == 3 ? {
    k: common_vendor.p({
      name: "arrow-left",
      size: "19",
      color: $options.leftColor
    }),
    l: common_vendor.o((...args) => $options.onBack && $options.onBack(...args)),
    m: common_vendor.p({
      direction: "column",
      hairline: false,
      length: "16",
      margin: "0 8px",
      color: $data.isWhite ? "rgba(255,255,255,.3)" : "#dadbde"
    }),
    n: common_vendor.p({
      name: "home",
      size: "20",
      color: $options.leftColor
    }),
    o: common_vendor.o((...args) => $options.onHome && $options.onHome(...args)),
    p: $data.isWhite ? "rgba(255,255,255,.5)" : "#dadbde"
  } : common_vendor.e({
    q: "rgba(0,0,0," + ($props.navbarType == 5 ? 1 - $data.transparentValue > 0.4 ? 0.4 : 1 - $data.transparentValue : 0) + ")",
    r: $props.leftText
  }, $props.leftText ? {
    s: common_vendor.t($props.leftText),
    t: $options.leftColor
  } : {}, {
    v: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args))
  })) : {}, {
    w: common_vendor.t($props.title),
    x: common_vendor.s($props.isShowTransparentTitle ? {} : {
      opacity: $props.navbarType == 5 ? $data.transparentValue : ""
    }),
    y: common_vendor.s({
      color: $props.fontColor,
      width: $props.titleWidth + "rpx",
      fontSize: $props.fontSize + "rpx"
    }),
    z: $props.titleWidth + "rpx",
    A: common_vendor.o((...args) => $options.rightClick && $options.rightClick(...args)),
    B: $data.systemInfo.titleBarHeight + "px",
    C: $data.systemInfo.statusBarHeight + "px",
    D: common_vendor.n($props.navbarType == 1 ? "f-relative" : "f-fixed"),
    E: common_vendor.s($props.navbarType == 1 ? {
      height: $data.systemInfo.navBarH + "px"
    } : {
      paddingTop: $data.systemInfo.statusBarHeight + "px"
    }),
    F: $props.isFillHeight && $props.navbarType != 5 && $props.navbarType != 1
  }, $props.isFillHeight && $props.navbarType != 5 && $props.navbarType != 1 ? {
    G: $data.systemInfo.navBarH + "px"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-11026233"], ["__file", "D:/vue/uniapp/gyysh/components/f-navbar/f-navbar.vue"]]);
wx.createComponent(Component);
