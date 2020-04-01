import { db } from "../firebase-init"

export default {
    namespaced: true,
    state: {
        headerData: {},
        menData: {},
        womenData: {},
        skateboardData: {},
    },
    mutations: {
        HEADERDATA(state, payload) {
            state.headerData = payload;
        },
        MENDATA(state, payload) {
            state.menData = payload;
        },
        WOMENDATA(state, payload) {
            state.womenData = payload;
        },
        SKATEBOARDDATA(state, payload) {
            state.skateboardData = payload;
        }
    },
    actions: {
        getHeaderData(context) {
            context.commit("LOGOLOADING", true, { root: true });
            context.commit("LOADING", true, { root: true });
            db
                .collection("website")
                .doc("header")
                .get()
                .then((doc) => {
                    const data = doc.data();
                    context.commit("HEADERDATA", data);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
                .catch((erros) => {
                    alert("發生錯誤");
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
        },
        getSkateboard(context) {
            context.commit("LOGOLOADING", true, { root: true });
            context.commit("LOADING", true, { root: true });
            db
                .collection("website")
                .doc("skateboard")
                .get()
                .then((doc) => {
                    const data = doc.data();
                    context.commit("SKATEBOARDDATA", data);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
                .catch((erros) => {
                    alert("發生錯誤");
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
        },
        getMenData(context) {
            context.commit("LOGOLOADING", true, { root: true });
            context.commit("LOADING", true, { root: true });
            db
                .doc("website/men")
                .get()
                .then((doc) => {
                    const menData = doc.data();
                    context.commit("MENDATA", menData);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
                .catch(error => {
                    console.log(error);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
        },
        getWomenData(context) {
            context.commit("LOGOLOADING", true, { root: true });
            context.commit("LOADING", true, { root: true });
            db
                .doc("website/women")
                .get()
                .then((doc) => {
                    const data = doc.data();
                    context.commit("WOMENDATA", data);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
                .catch(error => {
                    console.log(error);
                    context.commit("LOGOLOADING", false, { root: true });
                    context.commit("LOADING", false, { root: true });
                })
        },
        updateIndexData(context, { data, target }) {
            // console.log(target);
            let methods = ""
            if (target == "header") {
                methods = "getHeaderData";
            } else if (target == "men") {
                methods = "getMenData";
            } else if (target == "skateboard") {
                methods = "getSkateboard";
            } else {
                methods = 'getWomenData';
            }
            // console.log(methods);
            const targetData = {
                img: data.img,
                description: data.description,
                title: data.title
            }
            // console.log(targetData);
            context.commit("LOADING", true, { root: true });
            db
                .doc(`website/${target}`)
                .update(targetData)
                .then((response) => {
                    context.commit("LOADING", false, { root: true });
                    context.dispatch(methods);
                    alert("更新成功")
                })
                .catch((error) => {
                    context.commit("LOADING", false, { root: true });
                    context.dispatch(methods);
                    alert("更新錯誤");
                    console.log(error);
                })
        },
    },
    getters: {
        header(state) {
            return state.headerData;
        },
        men(state) {
            return state.menData;
        },
        women(state) {
            return state.womenData;
        },
        skateboard(state) {
            return state.skateboardData;
        }
    },
}