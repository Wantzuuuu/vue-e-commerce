import { db } from "../firebase-init"
import router from "../router/index"
export default {
    namespaced: true,
    state: {
        orders: [],
        nowOrder: {
            user: {},
            products: []
        },
    },
    mutations: {
        ORDERS(state, payload) {
            state.orders = payload;
        },
        NOWORDER(state, payload) {
            state.nowOrder = payload;
        }
    },
    actions: {
        getOrder(context) {
            context.commit("LOADING", true, { root: true });
            db
                .collection("order")
                .get()
                .then(doc => {
                    const list = [];
                    doc.forEach(v => {
                        const order = v.data();
                        // console.log(v.id);
                        order.id = v.id;
                        list.push(order);
                    })
                    // console.log(list);
                    context.commit("ORDERS", list);
                    context.commit("LOADING", false, { root: true });
                })
                .catch(errors => {
                    console.log(errors);
                    alert("資料讀取錯誤");
                    context.commit("LOADING", false, { root: true });
                })
        },
        createdOrder(context, order) {
            db
                .collection('order')
                .add(order)
                .then(doc => {
                    // console.log(doc.id);
                    const oId = doc.id;
                    router.push(`/order/${oId}`);
                    const cart = {
                        carts: [],
                        total: 0
                    }
                    db
                        .doc("website/cart")
                        .update(cart)
                        .then(doc => {
                            context.dispatch("cartModules/getCart", null, { root: true })
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getNowOrder(context, oId) {
            db
                .doc(`order/${oId}`)
                .get()
                .then(v => {
                    const order = v.data();
                    context.commit("NOWORDER", order);
                    // console.log(order);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    getters: {
        orders(state) {
            return state.orders;
        },
        nowOrder(state) {
            return state.nowOrder;
        }
    }
}