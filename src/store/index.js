import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../firebase-init"
import $ from "jquery"

import homeDataModules from "./homeData"
import productsModules from "./products"
import cartModules from "./cart"
import orderModules from "./order"
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    isLoading: false,
    logoLoading: false,
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    LOGOLOADING(state, status) {
      state.logoLoading = status;
    }
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    },
    updateLogoLoding(context, status) {
      msContentScript.commit("LOGOLOADING", status);
    },
    navbarScroll(context) {
      $(".index-navbar").addClass("i-fix");
      // console.log("ADDCLASS");
    },
    removeNavbarClass(context) {
      $(".index-navbar").removeClass("i-fix");
      // console.log("REMOVECLASS");
    },
    opdenSideBar(context) {
      $(".left-box").removeClass("scale-out-hor-left");
      $(".right-box").removeClass("scale-out-hor-left");
      setTimeout(() => {
        $(".sidebar-block").addClass("i-fix");
        $(".left-box").addClass("scale-in-hor-right");
        $(".right-box").addClass("scale-in-hor-right");
        setTimeout(() => {
          $(".header-item").addClass("scale-in-ver-bottom");
        }, 500)
        setTimeout(() => {
          $(".sidebar-text").addClass("scale-in-ver-bottom");
        }, 1000)
      }, 100)
    },
    removeSidebar(context) {
      $(".left-box").removeClass("scale-in-hor-right");
      $(".left-box").addClass("scale-out-hor-left");
      $(".right-box").removeClass("scale-in-hor-right");
      $(".right-box").addClass("scale-out-hor-left");
      $(".sidebar-text").removeClass("scale-in-ver-bottom");
      $(".header-item").removeClass("scale-in-ver-bottom");
      setTimeout(() => {
        $(".sidebar-block").removeClass("i-fix");
      }, 350)
    },
  },
  getters: {

  },
  modules: {
    homeDataModules,
    productsModules,
    cartModules,
    orderModules,
  }
})
