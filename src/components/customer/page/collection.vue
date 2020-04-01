<template>
    <div>
        <div class="collection-bg-img mb-3 mt-6">
            <div class="collection-section">
                <div class="collection-content">
                    <div class="card-bg"></div>
                    <h1 class="pl-3 py-4 text-white border-bottom">YOUR FAVORITE</h1>
                    <div class="container">
                        <div class="collection-post text-white">
                            <div class="data">
                                <div >{{favoriteLen}}</div>
                                <span class="text-white">collection</span>
                            </div>
                            <div class="data">
                                <div >{{cartLen}}</div>
                                <span class="text-white">cart</span>
                            </div>
                        </div>
                        <div v-if="favoriteLen == 0" class="no-text-box"></div>
                        <div class="row">
                            <div v-for="(i , k) in favoriteProduct" :key="k" class="col-md-4 col-lg-3 mt-3">
                                <div class="collection-card">
                                    <a @click.prevent="removeFavorite(i.title,'productTitle')" href="#">
                                        <i class="remove-collection fas fa-times"></i>
                                    </a>
                                    <a @click.prevent="goDescription(i.id)" href="#">
                                        <img width="100%" height="350px" :src="i.img" alt="">
                                    </a>    
                                    <div class="collection-info">
                                        <div class="title">
                                            <div>
                                                {{i.title}}
                                            </div>
                                            <div>
                                                {{i.price | currency}}
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapActions , mapGetters} from 'vuex' ;
    export default{
        name:"Collections",
        data(){
            return {
                // localList : JSON.parse(localStorage.getItem("productTitle")) || [],
            }
        },
        methods:{
            ...mapActions("productsModules",['getProducts']),
            goDescription(pId){
                const vm = this ;
                vm.$router.push(`/product/${pId}`);
            },
            getFavorite(){
                this.$store.dispatch("productsModules/getLocalstorage","productTitle");
            },
            removeFavorite(product,key){
                const vm = this ;
                vm.$store.dispatch("productsModules/removeFavorite",{key,product});
            }
        },
        computed:{
            ...mapGetters("productsModules",['favoriteTitle','favoriteProduct']),
             ...mapGetters("cartModules",["cartLen"]),
            favoriteLen(){
                return this.favoriteProduct.length ;
            },
        },
        created(){
            this.getProducts();
            this.getFavorite();
        }
    }
</script>

<style lang="scss">
$primary-color:#0f1c30;
$secondary-color:#14431e;
$img-info:rgba($primary-color,.5);
$white:white;
$bg-img:url("https://images.unsplash.com/photo-1573691138222-741a6db847d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");

    .collection-bg-img{
        background-position:top center;
        background-size:cover;
        background-image:$bg-img;
        height:100vh;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .collection-section{
        position:relative;
        z-index:1;
        overflow-y:scroll;
        // overflow-x:hidden;
        width:964px;
        max-width:90%;
        max-height:550px;
        box-shadow:3px 15px 25px rgba(black,0.65);
        border-radius:8px;
        .collection-content{
            .no-text-box{
                height:300px;
            }
            .collection-post{
                display:flex;
                .data{
                    width:100px;
                    text-align:center;
                }
            }
            padding:10px;
            // height:2000px;
            background-color:rgba($primary-color,.5);
            position:relative;
        }
        
    }
    .card-bg{
            position:absolute;
            z-index:-2;
            top:0;
            left:0;
            right:0;
            bottom:0;
            overflow:hidden;
            &:after{
                content:"";
                position:absolute;
                top:-20px;
                left:-20px;
                right:-20px;
                bottom:-20px;
                background-image:$bg-img;
                background-attachment:fixed;
                background-position:top center;
                background-size:cover;
                filter:blur(10px);
            }
    }
     .collection-card{
        width:100% ;
        position:relative;
        overflow:hidden;
        img{
            border-radius:8px;
        }
        .remove-collection{
            position:absolute;
            z-index:10;
            top:15px;
            right:15px;
            color:$white;
            opacity:0;
            transition:all .3s ease ;
            font-size:22px;
        }
        .collection-info{
            position:absolute;
            left:0;
            right:0;
            bottom:-58px;
            background-color:$img-info;
            color:$white;
            padding:15px;
            border-radius:8px;
            transition:all .3s ease;
            .title{
                display:flex;
                justify-content:space-between;
                font-size:18px;
            }
        }
        &:hover{
            .collection-info{
                bottom:0;
            }
            .remove-collection{
                opacity:1;
            }
        }
    }
    @media(max-width:768px){
        .collection-card{
            .remove-collection{
                opacity:1;
            }
            .collection-info{
                display:none;
            }
        }
    }
</style>