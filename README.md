# vue-e-commerce 衣服電商網站
### DEMO : [SKATEBOARD-E-COMMERCE](https://wantzuuuu.github.io/vue-e-commerce/#/ "Title")
## 作品介紹
#### 參考其他電商UI配置，讓使用者能夠直覺地使用網頁
#### 串接firebase來做網站功能，管理者透過登入驗證來進行網站管理，並將廣靠牆、產品、訂單資料放在database裡存放頁面架構功能
   
   [前台](https://wantzuuuu.github.io/vue-e-commerce/#/)
   * 首頁形象頁面
   * 商品總覽
     * 商品分類
     * 商品加入我的最愛，使用者在下次打開頁面時還會有記錄存在
     * 商品快速瀏覽，在任何裝置都可以使用快速瀏覽商品，得知商品資訊並可以選擇尺寸和數量加入購物車
     * 商品有進行分頁，避免頁面過長
     * 進入產品敘述頁面，會顯示瀏覽過的商品，提醒使用者曾經看過的商品
   * 商品目錄
     * 使用css display grid -- 桌上型裝置 : 形成雜誌風的頁面
     * 使用css display flex 來做響應式設計 -- 行動裝置 : 清楚呈現目錄商品
   * 購物車頁面
      * 當商品重複加入時，並不會重複顯示商品清單條，並且會找到對應的尺寸，然後加入對應商品正確的數量
      * 可在結帳前時，移除商品
   * 成立訂單
      * email以及資料必填項目未填寫時，會停醒填寫，並且不會成立訂單，直到表單驗證通過
   * 我的最愛頁面
      * 在商品總覽加入喜愛的商品，都會呈現
      * 可移除曾經加入喜愛的商品
   
  [後台](https://wantzuuuu.github.io/vue-e-commerce/#/login)
  * 登入頁面
     * 透過firebase提供的登入驗證，來進入管理者頁面
  * 首頁形象頁面動態修改
     * 以依據不同主題切換首頁圖片、標題、敘述等...
  * 商品管理
     * 新增、修改、移除商品
   * 訂單管理
     * 清楚的讀取客戶留下的訂單資料


## 使用技術
* vue.js 
* vue cli3
* javascrpit (ES6, localstorage)
* api(firebase)
* jquery
* sass
* css (grid, flex)
* bootstrap 4
* rwd

## 使用套件
* vue router
* vue vuex
* firebase
* lingallery
* vee-validate
* vue-carousel

## 圖片來源
[UNSPLASH](https://unsplash.com "Title")
   
