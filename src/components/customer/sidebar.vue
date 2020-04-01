<template>
    <div>
        <div class="sidebar-block">
                <div class="sidebar-left">
                    <div class="left-box "></div>
                </div>
                <div class="sidebar-right">

                    <div class="right-box">
                        <div @click="cancelSidebar" class="sidebar-cancel">
                            <i class="fas fa-times fa-2x"></i>
                        </div>
                        <div class="sidebar-header">
                            <a @click.prevent="goPath('/')" class="header-item" href="#">
                                <h1>SKATEBOARD</h1>
                            </a>
                            <div class="btn-group">
                                <a class="item header-item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a class="item header-item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="item header-item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sidebar-body d-flex justify-content-center align-items-center">
                            <div>
                                <p class="text-white sidebar-text">2020 collection</p>
                                <ul class="">
                                    <li v-for="(i,k) in pathTarget" class="sidebar-text" :key="k">
                                        <a @click.prevent="goPath(i.path)" href="#">
                                            <h1>
                                                {{i.name}}
                                            </h1>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pathTarget:[
                // {
                //     name:"SKATEBOARD",
                //     path:"/"
                // },
                {
                    name:"LookBook",
                    path:"/lookbook"
                },
                {
                    name:"Shop",
                    path:"/products/all_items"
                },
                {
                    name:"Men",
                    path:"/products/men"
                },
                {
                    name:"Women",
                    path:"/products/women"
                },
            ],
        }
    },
    methods:{
        cancelSidebar(){
            this.$store.dispatch('removeSidebar');
        },
        goPath(path){
            const vm = this;
            vm.$store.dispatch('removeSidebar');
            vm.$router.push(path);
        }
    },
}
</script>
<style lang="scss">
    .sidebar-block{
        // display:none;
        visibility: hidden;
        overflow: hidden;
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        z-index:99;
        .sidebar-cancel{
            color:white;
            position:absolute;
            top:50%;
            right:40px;
            z-index:999;
        }
        .sidebar-cancel:hover{
            color:red;
        }
        .sidebar-left{
            position:absolute;
            top:0;
            left:0;
            width:50%;
             .left-box{
                position:absolute;
                top:0;
                left:0;
                background-position:center center;
                background-size:cover;
                background-image:url('../../assets/sobhan-joodi-2qnazLp1uBk-unsplash.jpg');
                width:100%;
                transform: scaleX(0);
                height:100vh;
            }
        }
        @media(max-width:576px){
            .sidebar-left{
                display:none;
            }
            .sidebar-cancel{
                top:20px;
                right:30px;
            }
        }
        .sidebar-right{
            position:absolute;
            top:0;
            left:50%;
            width:50%;
            .right-box{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                background-color:#212529;
                .sidebar-body{
                    margin-top:20%;
                    .sidebar-text{
                        opacity:0;
                    }
                    ul{
                    // padding-left:0;
                    list-style:none;
                    li{
                        a{
                            h1{
                                font-size:28px;
                            }
                            color:white;
                        }
                    }
                }
                }
                .sidebar-header{
                    padding:40px 40px;
                    width:100%;
                    height:100px;
                    display:flex;
                    .header-item{
                        opacity:0;
                    }
                    h1{
                            font-size:28px;
                            color:white;
                        }                    
                    .btn-group{
                        color:white;
                        display:flex;
                        margin-left:auto;
                        .item{
                            margin-left:15px;
                            color:white;
                            font-size:24px;
                        }
                    }
                }
                .link-items{
                    background-color:red;
                }
            }
        }
        @media(max-width:576px){
            .sidebar-right{
                left:0;
                width:100%;
                .right-box{
                    .sidebar-header{
                        padding:20px 20px;
                    flex-direction:column;
                    .btn-group{
                        margin:10px 20px 0 0;
                        // margin-left:20px;
                    }
                }
                }
            }
        }
    }
    .sidebar-block.i-fix{
        visibility: visible;
        .left-box{
            transform: scaleX(1);
        }
        // display:block;
    }
    // 淡出
    .scale-out-hor-left {
        -webkit-animation: scale-out-hor-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                animation: scale-out-hor-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }
    @-webkit-keyframes scale-out-hor-left {
        0% {
            -webkit-transform: scaleX(1);
                    transform: scaleX(1);
            -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleX(0);
                    transform: scaleX(0);
            -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
            opacity: 1;
        }
        }
        @keyframes scale-out-hor-left {
        0% {
            -webkit-transform: scaleX(1);
                    transform: scaleX(1);
            -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleX(0);
                    transform: scaleX(0);
            -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
            opacity: 1;
        }
    }
    // 淡出 end
    //淡入
    .scale-in-hor-right {
        -webkit-animation: scale-in-hor-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: scale-in-hor-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
   
    @-webkit-keyframes scale-in-hor-right {
        0% {
            -webkit-transform: scaleX(0);
                    transform: scaleX(0);
            -webkit-transform-origin: 100% 100%;
                    transform-origin: 100% 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleX(1);
                    transform: scaleX(1);
            -webkit-transform-origin: 100% 100%;
                    transform-origin: 100% 100%;
            opacity: 1;
        }
        }
        @keyframes scale-in-hor-right {
        0% {
            -webkit-transform: scaleX(0);
                    transform: scaleX(0);
            -webkit-transform-origin: 100% 100%;
                    transform-origin: 100% 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleX(1);
                    transform: scaleX(1);
            -webkit-transform-origin: 100% 100%;
                    transform-origin: 100% 100%;
            opacity: 1;
        }
    }
    // 淡入end
    // 字體淡入
    .scale-in-ver-bottom {
        -webkit-animation: scale-in-ver-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: scale-in-ver-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    
    @-webkit-keyframes scale-in-ver-bottom {
        0% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
        }
        50% {
             -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
        }
        100% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
        }
        }
        @keyframes scale-in-ver-bottom {
        0% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
        }
    }
// 字體淡入end
</style>