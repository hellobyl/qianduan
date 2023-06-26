"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bannerList: [
        {
          image: "../../static/other/1.jpg"
        },
        {
          image: "../../static/other/2.jpg"
        },
        {
          image: "../../static/other/3.jpg"
        }
      ],
      itemList: [
        {
          image: "../../static/projectIcon/1.jpg",
          name: "同城跑腿",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "低价快递",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "兼职全职",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "同城服务",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "二手集市",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "公益助农",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "玩乐美食",
          url: ""
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "同城外卖",
          url: "/pages/my/myAccount"
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "水果鲜花",
          url: "/pages/my/myAccount"
        },
        {
          image: "../../static/projectIcon/1.jpg",
          name: "问答求助",
          url: "/pages/my/myAccount"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onJump(url) {
      common_vendor.index.navigateTo({
        url: "release"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bannerList, (item, index, i0) => {
      return {
        a: item.image
      };
    }),
    b: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.onJump(item.url))
      };
    }),
    c: common_vendor.o(($event) => $options.onJump("/release"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/vue/uniapp/gyysh/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
