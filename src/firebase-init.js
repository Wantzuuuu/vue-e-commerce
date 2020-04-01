import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import router from './router'
var firebaseConfig = {
    apiKey: process.env.VUE_APP_KEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_URL,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGID,
    appId: process.env.VUE_APP_APPID,
};
export const db = firebase.initializeApp(firebaseConfig).firestore()
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // console.log("firebase-init")
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    // console.log("有使用者");
                    // console.log(user.email);
                    next();
                } else {
                    // console.log("無使用者");
                    next({
                        path: "/login",
                    })
                }
            })
    } else {
        next();
    }
})