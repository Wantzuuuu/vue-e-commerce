<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/admin/header">SKATEBOARD</router-link>
            
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <a @click="signOut" class="nav-link" href="#">Sign out</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    methods:{
        signOut(){
            firebase
            .auth()
            .signOut()
            .then((response)=>{
                alert("登出成功")
                this.$router.push("/login")
            })
            .catch((error)=>{
                alert("錯誤")
            })
        }
    }
}
</script>