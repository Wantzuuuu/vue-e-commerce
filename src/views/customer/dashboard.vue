<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div :class="{'logo-run':logoLoading}" class="loading-logo">
            <div class="box-logo scale-in-hor-center">SKATEBOARD</div>
        </div>
        <navbar :navbarState="navbarState" :path="path" :cartLen="cartLen" :favoriteLen="favoriteLen"></navbar>
        <!-- sidebar-btn
        <div :class="sidebarBtnState" @click="toggleSidebar" class="sidebar-btn">
                <i class="fas fa-bars"></i>
        </div> -->
        <sidebar></sidebar>
            <router-view></router-view>
        <foot :path="path"></foot>
    </div>
</template>

<script>
import navbar from "../../components/customer/navbar";
import sidebar from "../../components/customer/sidebar";
import foot from "../../components/customer/footer";
import $ from "jquery";
import {mapActions,mapGetters} from "vuex";
export default{
    neme:"CustomerDashboard",
    components:{
        navbar,
        sidebar,
        foot,
    },
    data(){
        return{
            path:"",
            type:"",
            // sidebarBtnClass:{
            //     "sidebar-btn-white":true,
            //     "sidebar-btn-dark":false,
            // }
        }
    },
    methods:{
        toggleSidebar(){
            this.$store.dispatch("opdenSideBar");
        },
        getFavorite(){
            this.$store.dispatch("productsModules/getLocalstorage","productTitle");
        },
        ...mapActions("cartModules",["getCart"]),
    },
    computed:{
         isLoading(){
            return this.$store.state.isLoading;
        },
        logoLoading(){
            return this.$store.state.logoLoading;
        },
        // sidebarBtnState(){
        //     const vm = this ;
        //     let newState=vm.sidebarBtnClass;
        //     if(vm.path === "/"){
        //         newState['sidebar-btn-white']=true;
        //         newState['sidebar-btn-dark']=false;
        //         return newState;
        //     }else{
        //         newState['sidebar-btn-white']=false;
        //         newState['sidebar-btn-dark']=true;
        //         return newState;
        //     }
        // },
        navbarState(){
            const vm = this;
            if(vm.path==="/"){
                return true;
            }else{
                return false;
            }
        },
        favoriteLen(){
            let len = this.favoriteTitle.length
            if(len !==0){
                return true ;
            }else{
                return false ;
            }
        },
        ...mapGetters("cartModules",["cart","cartLen"]),
        ...mapGetters("productsModules",["favoriteTitle"]),
    },
    created(){
        this.path = this.$route.path;
        this.getCart();
        this.getFavorite();
    },
    watch:{
        '$route' (to,from){
            this.path = this.$route.path;
            this.type = this.$route.params.type;
        }
    }
}
</script>

<style lang='scss'>
    $hover-color:#8f8484;
    $primary-color:#0f1c30;
    $white:white;
    .sidebar-btn{
        font-size:30px;
        position:fixed;
        top:50%;
        right:40px;
        z-index:98;
        background:none;
        border:none;
    }
    .loading-logo{
        display:none;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:#f5f5f3;
        justify-content:center;
        align-items:center;
        .box-logo{
            width:160px;
            height:65px;
            background-color:$primary-color;
            color:$white;
            line-height:65px;
            text-align:center;
            font-size:22px;
        }
        .scale-in-hor-left {
            -webkit-animation: scale-in-hor-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
            animation: scale-in-hor-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
        }
                /* ----------------------------------------------
        * Generated by Animista on 2020-3-11 20:32:12
        * Licensed under FreeBSD License.
        * See http://animista.net/license for more info. 
        * w: http://animista.net, t: @cssanimista
        * ---------------------------------------------- */

        /**
        * ----------------------------------------
        * animation scale-in-hor-left
        * ----------------------------------------
        */
        @-webkit-keyframes scale-in-hor-left {
            0% {
                -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                -webkit-transform-origin: 0% 0%;
                        transform-origin: 0% 0%;
                opacity: 1;
            }
            100% {
                -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                -webkit-transform-origin: 0% 0%;
                        transform-origin: 0% 0%;
                opacity: 1;
            }
        }
            @keyframes scale-in-hor-left {
            0% {
                -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                -webkit-transform-origin: 0% 0%;
                        transform-origin: 0% 0%;
                opacity: 1;
            }
            100% {
                -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                -webkit-transform-origin: 0% 0%;
                        transform-origin: 0% 0%;
                opacity: 1;
            }
        }
        .scale-in-hor-center {
            -webkit-animation: scale-in-hor-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
                    animation: scale-in-hor-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
        }
        /* ----------------------------------------------
            * Generated by Animista on 2020-3-11 20:38:56
            * Licensed under FreeBSD License.
            * See http://animista.net/license for more info. 
            * w: http://animista.net, t: @cssanimista
            * ---------------------------------------------- */

            /**
            * ----------------------------------------
            * animation scale-in-hor-center
            * ----------------------------------------
            */
            @-webkit-keyframes scale-in-hor-center {
            0% {
                -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                opacity: 1;
            }
            100% {
                -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                opacity: 1;
            }
            }
            @keyframes scale-in-hor-center {
            0% {
                -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                opacity: 1;
            }
            100% {
                -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                opacity: 1;
            }
            }


    }
    .loading-logo.logo-run{
        display:flex;
        z-index:1000;
    }
    
    .sidebar-btn-white{
        color:white;
    }
    .sidebar-btn-dark{
        color:black;
    }
    .sidebar-btn:hover{
        cursor:pointer;
        color:$hover-color;
    }
    @media(max-width:576px){
        .sidebar-btn{
            display:none;
        }
    }
</style>