import { db } from "../firebase-init"

export default {
    namespaced: true,
    state: {
        cartData: {},
        cartLen: 0,
    },
    mutations: {
        CARTDATA(state, payload) {
            state.cartData = payload;
        },
        CARTLEN(state, payload) {
            state.cartLen = payload;
        }
    },
    actions: {
        getCart(context) {
            context.commit("LOADING", true, { root: true });
            db
                .doc("website/cart")
                .get()
                .then((doc) => {
                    let cart = doc.data();
                    context.commit("CARTDATA", cart);
                    // 購物車總數
                    var cartLen = 0;
                    cart.carts.forEach(v => {
                        cartLen += v.qty;
                    })
                    // console.log(cartLen);
                    context.commit("CARTLEN", cartLen);
                    context.commit("LOADING", false, { root: true });
                })
                .catch((error) => {
                    alert("發生錯誤");
                    context.commit("LOADING", false, { root: true });
                })
        },
        addCart(context, { id, qty, size }) {
            //console.log(size);
            context.commit("LOADING", true, { root: true });
            let pId = id;
            let pQty = qty;
            let pSize = size;
            db
                .doc(`products/${pId}`)
                .get()
                .then((doc) => {
                    let product = doc.data();
                    db
                        .doc("website/cart")
                        .get()
                        .then(doc => {
                            // console.log(product);
                            let carts = doc.data().carts;
                            let totalPrice = 0;
                            // 找購物車裡面的重複商品
                            let productReapeat = carts.map(v => {
                                return v.product_id
                            }).indexOf(pId);
                            //重複的尺寸
                            let sizeRepeat = carts.map(v => {
                                return v.size;
                            }).indexOf(pSize);
                            //console.log(`pId:${productReapeat}`);
                            //console.log(`size${sizeRepeat}`);
                            //定要加入購物車的函數
                            const cartPush = (productId, product, productQty, productSize) => {
                                const timestamp = Math.floor(Date.now());
                                carts.push({
                                    product_id: productId,
                                    product: product,
                                    id: timestamp,
                                    qty: productQty,
                                    size: productSize,
                                })
                            }
                            if (productReapeat == -1) {
                                cartPush(pId, product, pQty, pSize);

                            } else if (productReapeat != -1 && sizeRepeat == -1) {
                                const timestamp = Math.floor(Date.now());
                                cartPush(pId, product, pQty, pSize);
                            } else {
                                //carts[productReapeat].qty = carts[productReapeat].qty + pQty;
                                carts.forEach(v => {
                                    if (v.size == pSize && v.product_id == pId) {
                                        v.qty += pQty;
                                        // console.log(v);
                                    }
                                })
                            }
                            carts.forEach(v => {
                                totalPrice += v.product.price * v.qty;
                            })
                            //console.log(totalPrice);
                            // console.log(carts);
                            const cart = {
                                carts: carts,
                                total: totalPrice
                            }
                            // console.log(cart);
                            db
                                .doc("website/cart")
                                .update(cart)
                                .then(response => {
                                    // console.log("加入購物車成功");
                                    context.dispatch("getCart");
                                    context.commit("LOADING", false, { root: true });
                                })
                                .catch(errors => {
                                    console.log('發生錯誤');
                                    context.dispatch("getCart");
                                    context.commit("LOADING", false, { root: true });
                                })
                        })
                        .catch(errors => {
                            console.log(errors);
                            context.commit("LOADING", false, { root: true });
                        })
                })
                .catch((errors) => {
                    console.log(errors);
                })
        },
        deleteCart(context, id) {
            // console.log(id);
            db
                .doc("website/cart")
                .get()
                .then(doc => {
                    let carts = doc.data().carts;
                    let totalPrice = 0;
                    let delIndex = carts.map(doc => {
                        return doc.id
                    }).indexOf(id);
                    // console.log(delIndex);
                    carts.splice(delIndex, 1);
                    carts.forEach(v => {
                        totalPrice += v.product.price * v.qty;
                    })
                    // console.log(totalPrice);
                    let cart = {
                        carts: carts,
                        total: totalPrice
                    }
                    // console.log(cart);
                    db
                        .doc("website/cart")
                        .update(cart)
                        .then((response) => {
                            context.dispatch("getCart");
                            // console.log("刪除成功");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    getters: {
        cart(state) {
            return state.cartData;
        },
        cartLen(state) {
            return state.cartLen;
        }
    },
}