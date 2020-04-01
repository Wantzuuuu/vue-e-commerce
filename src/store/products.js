import { db } from "../firebase-init.js"

export default {
    namespaced: true,
    state: {
        products: [],
        product: {},
        categorys: [],
        pageProducts: [],
        currenPage: 0,
        categoryTarget: "ALL",
        itemSize: {},
        favoriteTitle: [],
        seenProduct: [],
    },
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PRODUCT(state, payload) {
            state.product = payload;
        },
        ITEMSIZE(state, payload) {
            state.itemSize = payload;
        },
        CATEGORYS(state, payload) {
            state.categorys = payload;
        },
        CATEGORYTARGET(state, payload) {
            state.categoryTarget = payload;
        },
        PAGEPRODUCTS(state, payload) {
            state.pageProducts = payload;
        },
        FAVORITEPRODUCT(state, payload) {
            state.favoriteTitle = payload;
        },
        SEENPRODUCT(state, payload) {
            state.seenProduct = payload;
        }
    },
    actions: {
        getProducts(context) {
            context.commit("LOADING", true, { root: true });
            db
                .collection("products")
                .orderBy("order")
                .get()
                .then((doc) => {
                    let list = [];
                    doc.forEach((v) => {
                        const product = v.data();
                        product.id = v.id;
                        // console.log(v.id);
                        list.push(product);
                    })
                    // console.log(list);
                    context.commit("PRODUCTS", list)
                    context.commit("LOADING", false, { root: true });
                    // 產品分類
                    const categorys = new Set();
                    list.forEach((v, i) => {
                        let upper = v.category.toUpperCase();
                        categorys.add(upper);
                        // console.log(categorys);
                    })
                    context.commit("CATEGORYS", Array.from(categorys));
                    // 做產品分頁
                    let newData = [];
                    list.forEach((v, i) => {
                        if (i % 8 === 0) {
                            newData.push([]);
                        }
                        let page = parseInt(i / 8);
                        newData[page].push(v);
                    })
                    context.commit("PAGEPRODUCTS", newData);
                })
                .catch((error) => {
                    alert(error);
                    context.commit("LOADING", false, { root: true });
                })
        },
        updateProduct(context, { tempProduct, isNew, pId }) {
            // console.log(this.state.productsModules.products.length);
            context.commit("LOADING", true, { root: true });
            if (isNew) {
                let order = this.state.productsModules.products.length;
                tempProduct.order = order + 1;
                db
                    .collection("products")
                    .add(tempProduct)
                    .then((doc) => {
                        context.dispatch("getProducts");
                        context.commit("LOADING", false, { root: true });
                        console.log(doc.id);
                        alert("新增成功");
                    })
                    .catch((errors) => {
                        context.dispatch("getProducts");
                        context.commit("LOADING", false, { root: true });
                        alert("新增發生錯誤");
                    })
            } else {
                db
                    .collection("products")
                    .doc(`${pId}`)
                    .update(tempProduct)
                    .then((response) => {
                        alert("產品更新成功");
                        context.dispatch("getProducts");
                        context.commit("LOADING", false, { root: true });
                    })
                    .catch((error) => {
                        alert("產品更新資料錯誤");
                        context.dispatch("getProducts");
                        context.commit("LOADING", false, { root: true });
                    })
            }
        },
        deleteProduct(context, pId) {
            context.commit("LOADING", true, { root: true });
            db
                .doc(`products/${pId}`)
                .delete()
                .then((response) => {
                    alert("刪除產品成功");
                    context.dispatch("getProducts");
                    context.commit("LOADING", false, { root: true });
                })
                .catch((errors) => {
                    alert("刪除產品錯誤");
                    console.log(errors)
                    context.dispatch("getProducts");
                    context.commit("LOADING", false, { root: true });
                })
        },
        changeCategory(context, target) {
            context.commit("CATEGORYTARGET", target);
        },
        // 取得單一產品
        getProduct(context, pId) {
            context.commit("LOADING", true, { root: true });
            context.commit("PRODUCT", {});
            db
                .collection('products')
                .doc(pId)
                .get()
                .then(doc => {
                    const product = doc.data();
                    context.commit('PRODUCT', product);
                    // itemsize
                    if (product.category == 'hat' || product.category == 'skateboard' || product.category == 'ACCESSORIES') {
                        context.commit("ITEMSIZE", {
                            itemSize: false,
                            size: "free"
                        })
                    } else {
                        context.commit("ITEMSIZE", {
                            itemSize: true,
                            size: "S"
                        })
                    }
                    context.commit("LOADING", false, { root: true })
                })
                .catch(error => {
                    console.log(error);
                    alert("發生錯誤");
                    context.commit("LOADING", false, { root: true })
                })
        },
        // FAVORITEPRODUCT
        setLocalstorage(context, { key, array }) {
            const str = JSON.stringify(array);
            localStorage.setItem(key, str);
            context.dispatch("getLocalstorage", key);
        },
        getLocalstorage(context, key) {
            const parseArray = JSON.parse(localStorage.getItem(key)) || [];
            if (key == "productTitle") {
                context.commit("FAVORITEPRODUCT", parseArray);
            } else if (key == "seenProduct") {
                context.commit("SEENPRODUCT", parseArray);
            }
        },
        addFavorite(context, { key, product }) {
            const array = JSON.parse(localStorage.getItem(key)) || [];
            // console.log(key)
            // console.log(array);
            // console.log(product);
            let len = array.length;
            if (key == "seenProduct") {
                if (array.indexOf(product) == -1) {
                    if (len < 4) {
                        array.push(product);
                        context.dispatch("setLocalstorage", { key, array });
                    } else {
                        array.splice(0, 1);
                        array.push(product);
                        context.dispatch("setLocalstorage", { key, array });
                    }
                }
            } else {
                if (array.indexOf(product) == -1) {
                    array.push(product)
                }
                context.dispatch("setLocalstorage", { key, array });
            }
        },
        removeFavorite(context, { key, product }) {
            const array = JSON.parse(localStorage.getItem(key)) || [];
            const index = array.indexOf(product);
            array.splice(index, 1)
            context.dispatch("setLocalstorage", { key, array });
        }
    },
    getters: {
        products(state) {
            return state.products;
        },
        product(state) {
            return state.product;
        },
        itemSize(state) {
            return state.itemSize;
        },
        categorys(state) {
            return state.categorys;
        },
        pageProducts(state) {
            return state.pageProducts;
        },
        currenPage(state) {
            return state.currenPage;
        },
        categoryTarget(state) {
            return state.categoryTarget;
        },
        favoriteTitle(state) {
            return state.favoriteTitle;
        },
        seenLocal(state) {
            const list = []
            const products = state.products;
            const seenProduct = state.seenProduct;
            seenProduct.forEach(v => {
                products.forEach(d => {
                    if (v == d.title) {
                        list.push(d);
                    }
                })
            })
            return list;
        },
        favoriteProduct(state) {
            const favorite = state.favoriteTitle;
            const products = state.products;
            const list = [];
            favorite.forEach(v => {
                products.forEach(d => {
                    if (v == d.title) {
                        list.push(d);
                    }
                })
            })
            return list;
        }
    },
}