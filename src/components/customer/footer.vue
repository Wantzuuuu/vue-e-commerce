<template>
    <div>
        <footer class="pt-5 py-1">
                <div class="footer-category-list">
                    <div class="item all-item">
                        <a @click.prevent="goPage('ALL')" href="#">
                            <span>ALL ITEMS</span>
                        </a>
                    </div>
                    <div v-for="i in categorys" class="item">
                        <a @click.prevent="goPage(i)" href="#">
                            <span>{{i}}</span>
                        </a>
                    </div>
                </div>
                <div class="container">
                    <div class="social-group py-4 ">
                        <a class="item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                            FACEBOOK
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a class="item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                            INSTAGRAN
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="item" href="https://github.com/Wantzuuuu/vue-e-commerce" target="_blank">
                            GITHUB
                            <i class="fab fa-github"></i>
                        </a>
                        
                    </div>
                    <div class="text-center">@2020 by WAN</div>
                </div>
        </footer>
    </div>
</template>
<script>
import{mapGetters,mapActions} from "vuex";
import $ from "jquery";
    export default{
        name:"Footer",
        props:["path"],
        methods:{
            goPage(category){
                const vm = this ;
                if(this.path == '/products/all_items'){
                    vm.$store.dispatch("productsModules/changeCategory",category);
                    $("html,body").animate({
                        scrollTop:70
                    },700)
                }else if(this.path == '/products/men'){
                    vm.$store.dispatch("productsModules/changeCategory",category);
                    $("html,body").animate({
                        scrollTop:70
                    },700)
                }else if(this.path == '/products/women'){
                    vm.$store.dispatch("productsModules/changeCategory",category);
                    $("html,body").animate({
                        scrollTop:70
                    },700)
                }else{
                    vm.$router.push('/products/all_items');
                    vm.$store.dispatch("productsModules/changeCategory",category);
                }
                 
            },
            ...mapActions("productsModules",["getProducts"])
        },
        computed:{
            ...mapGetters("productsModules",["categorys"])
        },
        created(){
            this.getProducts();
        }
    }
</script>
<style lang="scss">
    $primary-color:#0f1c30;
    $secondary-color:#14431e;
    $friendly-color:#e5e5e5;
    footer{
        // margin-top:10px;
        border-top:2px solid $friendly-color;
        color:$primary-color;
        .footer-category-list{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            .item{
                padding:0 15px;
            }
        }
        .social-group{
            display:flex;
            justify-content:center;
            .item{
                padding:5px 15px;
                font-size:14px;
            }
        }
    }
    @media(max-width:800px){
                footer{
                    border-top:none;
                    .footer-category-list{
                            width:100%;
                            border-top:1px solid $friendly-color;
                            // border-right:1px solid $friendly-color;
                            // border-left:1px solid $friendly-color;
                            .item.all-item{
                                padding:10px 10px;
                                text-align:center;
                                width:100%;
                            }
                            .item{
                                padding:10px 10px;
                                text-align:center;
                                width:50%;
                                border-bottom:1px solid $friendly-color;
                            }
                            .item:nth-child(2n){
                                border-right:1px solid $friendly-color;
                            }
                    }
                }
                
        }
</style>