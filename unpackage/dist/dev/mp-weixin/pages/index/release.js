"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      itemList: [
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布交友",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布跑腿",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布兼职 ",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布全职/简历",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布本地服务",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布问答求助",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: " 发布资讯",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布广告",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "发布其他",
          url: ""
        }
      ]
    };
  }
};
if (!Array) {
  const _easycom_f_navbar2 = common_vendor.resolveComponent("f-navbar");
  _easycom_f_navbar2();
}
const _easycom_f_navbar = () => "../../components/f-navbar/f-navbar.js";
if (!Math) {
  _easycom_f_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "发布栏",
      fontColor: "#ffffff",
      bgColor: "#ffa200",
      scrollTop: $data.scrollTop,
      navbarType: "0"
    }),
    b: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => _ctx.onJump(item.url))
      };
    }),
    c: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => _ctx.onJump(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aefa05e0"], ["__file", "D:/vue/uniapp/gyysh/pages/index/release.vue"]]);
wx.createPage(MiniProgramPage);
