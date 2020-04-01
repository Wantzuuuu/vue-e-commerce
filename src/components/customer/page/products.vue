<template>
    <div>
        <header class="mt-7">
           
            <div class="container">
                <div class="header-img" :style="{backgroundImage:'url('+header[typeTarget].img+')'}">
                    <div class="header-img-title">
                        <h1>{{header[typeTarget].title}} / {{categoryTarget}}</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="mt-3">
            <div class="container">
                <div class="category-list">
                    <ul class="category-items">
                        <li class="cartegory-item mt-2">
                            <a @click.prevent="changeCategory('ALL')" :class="{'active': categoryTarget === 'ALL'}" href="#">ALL</a>
                        </li>
                        <li v-for="i in categorys" class="cartegory-item mt-2">
                            <a @click.prevent="changeCategory(i)" :class="{'active': i === categoryTarget}" href="#">{{i}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <!-- product section -->
                 <section class="product-section py-3">
                    <div class="row">
                        <productCard @emitProductModal="openQuickModal" @emitAddCart="addCart" @emitGoDs="goDescription" @emitFavorite="addFavorite" @emitRemoveFavorite="removeFavorite" :favoriteProduct="localList"  :productData="i" :num="k" v-for="(i,k) in filterProduct[currenPage]" :key="k"></productCard>
                    </div>
                    <div class="p-pagination">
                         <ul>
                            <li :class="{'item-arrow':currenPage <= 0}">
                                <a  @click.prevent="currenPage -= 1"  href="#">
                                    <i class="fas fa-long-arrow-alt-left"></i>
                                </a>
                            </li>
                            <li v-for="page in filterProduct.length" :class="{'active': currenPage==page -1}">
                                <a @click.prevent="currenPage = page - 1" href="#">{{page}}</a>
                            </li>
                            <li :class="{'item-arrow':currenPage >= filterProduct.length - 1}" class="">
                                <a  @click.prevent="currenPage += 1" href="#">
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- product section  end-->
                
                <!-- seenproduct section -->
                <section v-if="seenLocal.length != 0" class="favorite-section py-3">
                <hr>
                    <h4 class="text-muted text-center">您曾經看過的商品</h4>
                    <div class="row">
                        <productCard @emitProductModal="openQuickModal" @emitAddCart="addCart" @emitGoDs="goDescription" @emitFavorite="addFavorite" @emitRemoveFavorite="removeFavorite" :favoriteProduct="localList" v-for="i in seenLocal" :productData="i"></productCard>
                    </div>
                </section>
                <!-- seenproduct section  end-->
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade show" id="quickModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <div id="quickViewCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                                        <ol class="carousel-indicators">
                                            <li v-for="(item , index) in slideData" data-target="#quickViewCarousel" :data-slide-to="index" :class="{'active': carousel == index}"></li>
                                            <!--
                                                <li data-target="#quickViewCarousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#quickViewCarousel" data-slide-to="1"></li>
                                                <li data-target="#quickViewCarousel" data-slide-to="2"></li>
                                            -->
                                        </ol>
                                        <div class="carousel-inner">
                                            <div v-for="(item , index) in slideData" :key="index" :class="{'active': carousel == index}" class="carousel-item">
                                                <img width="100%" height="450px" :src="item" class="d-block w-100" alt="...">
                                            </div>
                                            <!--
                                                <div class="carousel-item active">
                                                    <img width="100%" height="450px" :src="modalProduct.img" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img width="100%" height="450px" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img width="100%" height="450px" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="d-block w-100" alt="...">
                                                </div>
                                             -->
                                        </div>
                                        <a class="carousel-control-prev" href="#quickViewCarousel" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#quickViewCarousel" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info">
                                        <h5 class="title">{{modalProduct.title}}</h5>
                                        <div class="price">
                                            <span class="mr-3">{{modalProduct.price | currency}}</span>
                                            <del v-if="modalProduct.price != modalProduct.oringin_price" class="text-muted">{{modalProduct.oringin_price | currency}}</del>
                                        </div>
                                        <div class="mb-2 pt-4 border-top">
                                            <div class="size-box d-flex">
                                                <div v-if = "sizeItem">size</div>
                                                <ul v-if = "sizeItem" class="size-list">
                                                    <li :class="{'active':size == 'S'}"><a @click.prevent="size = 'S'" href="#">S</a></li>
                                                    <li :class="{'active':size == 'M'}"><a @click.prevent="size = 'M'" href="#">M</a></li>
                                                    <li :class="{'active':size == 'L'}"><a @click.prevent="size = 'L'" href="#">L</a></li>
                                                </ul>
                                            </div>
                                            <div class="qty-box d-flex">
                                                <div>Quantity</div>
                                                <div class="qty-input-group ml-auto">
                                                    <button @click="addCount(0)" :class="{'disabled':qty<=1}" class="remove-btn qty-btn">-</button>
                                                    <input v-model.number="qty" class="qty-input" type="number">
                                                    <button @click="addCount(1)" class="qty-btn">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4 border-bottom">
                                            <a class="d-flex mt-3 collapse-btn" data-toggle="collapse" href="#collapseDescription" role="button" aria-expanded="false" aria-controls="collapseDescription">
                                                <div class="mr-auto">Detail</div>
                                                <span class="add">+</span>
                                            </a>
                                            <div class="collapse" id="collapseDescription">
                                                <div class="p-3">
                                                    {{modalProduct.description}}
                                                </div>
                                            </div>
                                        </div>
                                        <button @click="goDescription(modalProduct.id,modalProduct.title)" class="btn btn-outline-primary btn-block">productdetail</button>
                                    </div>
                                    <div class="addCart-btn">
                                        <button @click="addCart(modalProduct.id , qty ,size)" class="btn btn-danger btn-block">Add To bag</button>
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
    import $ from "jquery";
    import {mapActions,mapGetters} from "vuex";
    import productCard from "../components/productCard"; 
    import { Carousel, Slide } from 'vue-carousel';
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name:"Products",
        watch :{
            '$route'(to , from){
                this.typeTarget = this.$route.params.type;
                this.$store.dispatch("productsModules/changeCategory","ALL");
                this.currenPage = 0 ;
            },
            currenPage(){
                let target = this.position - 70 ;
                // console.log(target);
                $("html,body").animate({
                    scrollTop: target
                }, 700);
            }
        },
        data(){
            return {
                modalProduct:{},
                sizeItem:false,
                size:"S",
                qty:0,
                currenPage: 0 ,
                position:0,
                typeTarget:"",
                header:{
                    "all_items":{
                        title:"2020 collection",
                        img:"https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    "men":{
                        title:"Men",
                        img:"https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    },
                    "women":{
                        title:"Women",
                        img:"https://images.unsplash.com/photo-1527058054345-f870ffe763eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                    }
                },
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                     navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                carousel:0,
                slideData:[
                    "",
                    "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
                    "https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
                    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                ],
            }
        },
        components:{
            productCard,
            Carousel,
            Slide,
            swiper,
            swiperSlide
        },
        methods:{
            openQuickModal(product){
                // console.log(product);
                this.modalProduct= product;
                this.slideData[0]=product.img;
                this.qty= 1;
                // 當產品沒有尺寸時設為free有尺寸時一開始設為s
                if(product.category =='hat'||product.category =='skateboard'||product.category == 'ACCESSORIES'){
                    this.sizeItem = false;
                    this.size = 'free' ;
                }else{
                    this.sizeItem = true;
                    this.size = 'S' ;
                }
                $('#quickViewCarousel').carousel(0);
                $("#quickModal").modal("show");
                $("#collapseDescription").collapse('hide');
            },
            removeQuickModal(){
                $("#quickModal").modal("hide");
            },
            goDescription(pId,product){
                const vm = this ;
                $("#quickModal").modal("hide");
                vm.$router.push(`/product/${pId}`);
                const key = "seenProduct"
                vm.$store.dispatch("productsModules/addFavorite",{key,product});
            },
            addCount(num){
                const vm = this ;
                if(num == 1){
                    vm.qty +=1 ;
                }else if(num == 0 && vm.qty>1){
                    vm.qty -= 1 ;
                }
            },
            addCart(id , qty , size){
                // console.log(id , qty);
                if(qty < 1){
                    qty = 1
                }
                this.$store.dispatch("cartModules/addCart",{id,qty,size});
                this.removeQuickModal();
            },
            addFavorite(key,product){
                const vm = this ;
                // console.log(product);
                // console.log(key);
                vm.$store.dispatch("productsModules/addFavorite",{key,product});
            },
            removeFavorite(key,product){
                const vm = this ;
                vm.$store.dispatch("productsModules/removeFavorite",{key,product});
            },
            changeCategory(category){
                this.$store.dispatch("productsModules/changeCategory",category);
                this.currenPage = 0 ;
            },
            getSeenProduct(){
                this.$store.dispatch("productsModules/getLocalstorage","seenProduct");
            },
            ...mapActions("productsModules",["getProducts"])
        },
        computed:{
            ...mapGetters("productsModules",['products',"categorys","categoryTarget","seenLocal","favoriteProduct"]),
            filterProduct(){
                const vm = this ;
                const products = this.$store.state.productsModules.products ;
                let typeItems = [];
                if(vm.typeTarget == "all_items"){
                    typeItems = products;
                }else{
                    typeItems = products.filter(v=>{
                        return v.type == vm.typeTarget ;
                    })
                }
                let cateItems = [];
                if(vm.categoryTarget == "ALL"){
                    cateItems = typeItems;
                }else{
                        cateItems = typeItems.filter(v=>{
                            return v.category.toUpperCase() == vm.categoryTarget ;
                        })
                }
                // console.log(cateItems);
                let currenList = []
                cateItems.forEach((v,i) => {
                    if(i % 8 === 0){
                        currenList.push([]);
                    }
                    let page = parseInt(i / 8);
                    currenList[page].push(v);
                })
                return currenList ;
            },
            localList(){
                return this.$store.state.productsModules.favoriteTitle;
            },
        },
        mounted(){
            this.position = $('.category-list').offset().top;
            
        },
        created(){
            this.typeTarget = this.$route.params.type;
            this.getProducts();
            this. getSeenProduct();
        }
    }
</script>

<style lang="scss">
$primary-color:#0f1c30;
$white:white;
.header-img{
    width:100%;
    height:400px;
    background-size:cover;
    background-position:center center;
    position:relative;
    .header-img-title{
        position:absolute;
        bottom:0px;
        left:0px;
        padding:10px 25px;
        background-color:$primary-color;
        color:white;
        h1{
            margin-bottom:0;
            font-weight:500;
            font-size:16px;
        }
    }
}
@media(max-width:576px){
    .header-img{
        .header-img-title{
            h1{
                font-size:16px;
            }
        }
    }
}
.category-list{
    width:100%;
    box-shadow:3px 3px 20px rgba(0,0,0,0.3); 
    padding:20px 10px;
    .category-items{
        margin-bottom:0;
        padding-left:0;
        text-align:center;
        li{
            display:inline-block;
            margin:0 5px 0 5px;
            a{
                padding:15px;
                color:black;
            }
            a:hover{
                color:red;
            }
             a.active{
                color:red;
            }
        }
    }
}
#quickModal{
    .modal-content{
        position:relative;
        color:$primary-color;
        .close{
            position:absolute;
            z-index:10;
            top:5px;
            right:15px;
            outline:none;
        }
    }
}
    #quickViewCarousel{
        .carousel-indicators{
            li{
                border-radius:50%;
                width:10px;
                height:10px;
            }
        }
    }
  </style>
