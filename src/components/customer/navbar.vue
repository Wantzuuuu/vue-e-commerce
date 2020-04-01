<template>
    <div>
        <div :class="navbarClass" class="global-navbar">
            <h5 class="mb-0">
                <router-link to="/">
                    <div class="logo">
                        SKATEBOARD
                    </div>
                </router-link>
            </h5>
             <div class="navbar-list ml-auto">
                <ul class="nav-text d-none d-md-flex">
                    <li class="">
                        <router-link to="/products/all_items"  href="#">
                            ITEM
                        </router-link>
                    </li>
                    <li class="mr-0">
                        <router-link to="/lookbook" href="#">
                            LOOK BOOK
                        </router-link>
                    </li>
                </ul>
                <ul>
                    <li class="cart-btn">
                        <router-link to="/product_cart">
                            <i class="fas fa-shopping-bag"></i>
                            <span v-if="cartLen != 0" class="badge badge-danger">{{cartLen}}</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/collection" :class="{'text-danger':favoriteLen}" class="heart">
                            <i class=" fas fa-heart "></i>
                        </router-link>
                    </li>
                     <li class="">
                        <a @click.prevent="openSidebar"  href="#">
                            <i class="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery" ;
export default {
    name:"Navbar",
    props:['navbarState','path',"cartLen","favoriteLen"],
    watch:{
        path(){
                if(this.navbarState){
                    this.navbarClass['navbar-light'] = false;
                    this.navbarClass['index-navbar'] = true;
                }else{
                    this.navbarClass['navbar-light'] = true;
                    this.navbarClass['index-navbar'] = false;
                }
        }
    },
    data(){
        return{
            navbarClass:{
                'navbar-light':false,
                'index-navbar':false,
            }
        }
    },
    methods:{
        openSidebar(){
            this.$store.dispatch("opdenSideBar");
        }
    },
    mounted(){
        let lastScroll = 0 ;
            $(window).scroll(()=>{
                let nowScroll = $(window).scrollTop();
                if(nowScroll > lastScroll){
                    $(".navbar-light").addClass("i-fix");
                }else{
                    $(".navbar-light").removeClass("i-fix");
                }
                // console.log(nowScroll, lastScroll);
                lastScroll = nowScroll ;
            })
    },
    created(){
        if(this.navbarState){
            this.navbarClass['index-navbar'] = true;
            this.navbarClass["navbar-light"]=false;
        }else{
            this.navbarClass['index-navbar'] = false;
            this.navbarClass["navbar-light"]=true;
        }
    }
}
</script>

<style lang="scss">
    $primary-color:#0f1c30;
    $secondary-color:#14431e;
    $img-info:rgba(15, 28, 48,0.68);
    $white:white;
    $hover-color:#8f8484;
    *{
        a:hover{
            text-decoration:none;
        }
    }
    .global-navbar{
        position:fixed;
        top:0;
        left:0;
        z-index:30;
        width:100%;
        height:60px;
        display:flex;
        align-items:center;
        padding:2px 50px;
        .logo{
            width:150px;
            padding:5px;
            color:$primary-color;
            text-align:center;
            transition:all .3s ease;
        }
        .navbar-list{
            display:flex;
            align-items:center;
            .nav-text{
                margin-top:3px;
                margin-right:50px;
                a{
                    font-weight:500;
                    font-size:14px;
                }
            }
            ul{
                margin-bottom:0;
                list-style:none;
                display:flex;
                align-items:center;
                padding-left:0px;
                li{
                    // &:nth-child(1),&:nth-child(2){
                    //     margin-right:30px;
                    // }
                    margin-right:30px;
                    a{
                        font-size:18px;
                        transition:color .3s ease;
                        filters:brightness(.5);
                    }
                    &:hover{
                        a{
                            color:$hover-color;
                        }
                    }
                }
                .cart-btn{
                    position:relative;
                    .badge{
                        position:absolute;
                        top:-10px;
                        right:-14px;
                    }
                }
            }
        }
    }
     @media(max-width:576px){
        .global-navbar{
             padding:2px 20px;
        }
    }
    .global-navbar.index-navbar{
        background-color:rgba(255,255,255,0);
        transition:all .3s ease;
        .logo{
            opacity:0;
            transition:all .3s ease;
        }
        .navbar-list{
            ul{
                li{
                    a{
                        color:$white;
                        transition:color .3s ease;
                        // filters:brightness(.5);
                    }
                    &:hover{
                        a{
                            color:$hover-color;
                        }
                    }
                }
            }
        }
    }
    .global-navbar.index-navbar.i-fix{
        background-color:rgba(255,255,255,1);
        .logo{
            opacity:1;
        }
        // .nav-text{
        //     .border-item{
        //         border-right:1px solid $primary-color;
        //     }
        // }
        .navbar-list{
            .nav-text{
                opacity:1;
            }
            a{
                color:$primary-color;
            }
        }
    }
    .global-navbar.navbar-light{
        background-color:rgba(255,255,255,1);
        transition:all .3s ease;
        .logo{
            opacity:1;
            transition:all .3s ease;
        }
        .navbar-list{
            ul{
                li{
                    a{
                        color:$primary-color;
                        transition:color .3s ease;
                        filters:brightness(.5);
                    }
                    &:hover{
                        a{
                            color:$hover-color;
                        }
                    }
                }
            }
        }
    }
    .global-navbar.navbar-light.i-fix{
        background-color:rgba(255,255,255,0);
         .logo{
            opacity:0;
            transition:all .3s ease;
        }
        .navbar-list{
            ul{
                li{
                    a{
                        color:$primary-color;
                        transition:color .3s ease;
                        filters:brightness(.5);
                    }
                    &:hover{
                        a{
                            color:$hover-color;
                        }
                    }
                }
            }
        }
    }
</style>