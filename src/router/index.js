import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  // customer
  {
    name: "customerDashboard",
    path: "/",
    component: () => import("../views/customer/dashboard.vue"),
    children: [
      {
        name: "index",
        path: "",
        component: () => import("../components/customer/page/index.vue")
      },
      // 商品區
      {
        name: "Products",
        path: "products/:type",
        component: () => import("../components/customer/page/products.vue"),
      },
      // 產品敘述 
      {
        name: "productDescription",
        path: "product/:pId",
        component: () => import("../components/customer/page/productdescription.vue"),
      },
      // look book
      {
        name: "Lookbook",
        path: "lookbook",
        component: () => import("../components/customer/page/lookbook.vue")
      },
      // 購物車頁面
      {
        name: "ProductCart",
        path: "/product_cart",
        component: () => import("../components/customer/page/cartpage.vue")
      },
      //訂單資料輸入
      {
        name: 'orderCreat',
        path: "/order_creat",
        component: () => import("../components/customer/page/createdOrder.vue")
      },
      // collection
      {
        name: "Collection",
        path: "/collection",
        component: () => import("../components/customer/page/collection.vue")
      },
      {
        neme: "CheckoutSuccess",
        path: "order/:oId",
        component: () => import("../components/customer/page/checkoutSuccess.vue")
      }
    ]
  },
  // manerger
  {
    name: "login",
    path: "/login",
    component: () => import("../views/manerger/login.vue"),
  },
  {
    name: "manergerDashboard",
    path: "/admin",
    component: () => import("../views/manerger/dashboard.vue"),
    children: [
      {
        name: "Header",
        path: "header",
        component: () => import("../components/manerger/page/header.vue"),
        meta: { requiresAuth: true },
      },
      {
        name: "ProducList",
        path: "products",
        component: () => import("../components/manerger/page/products.vue"),
        meta: { requiresAuth: true },
      },
      {
        name: "OrderList",
        path: "orders",
        component: () => import("../components/manerger/page/orders.vue"),
        meta: { requiresAuth: true },
      }
    ]
  },


]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
