<template>
    <div class="mt-7">
        <div class="container">
            <div class="row py-5">
                <div class="col-md-6">
                    <lingallery :width="500" :height="500" :items="[
                        {src: product.img, thumbnail: product.img},
                        {src: slideData[2], thumbnail: slideData[2],},
                        {src: slideData[3], thumbnail: slideData[3]}
                    ]"/>
                </div>
                <div class="col-md-6">
                    <div class="info lg-info">
                        <h5 class="title">{{product.title}}</h5>
                        <div class="price">
                            <span>{{product.price | currency}}</span>
                            <del v-if="product.price != product.oringin_price" class="ml-3">{{product.oringin_price | currency}}</del>
                        </div>
                        <div class="mb-2 py-4 border-top">
                            <div v-if="itemSize.itemSize" class="size-box d-flex">
                                <div >size</div>
                                <ul class="size-list">
                                    <li :class="{'active':itemSize.size == 'S'}"><a @click.prevent="itemSize.size = 'S'" href="#">S</a></li>
                                    <li :class="{'active':itemSize.size == 'M'}"><a @click.prevent="itemSize.size = 'M'" href="#">M</a></li>
                                    <li :class="{'active':itemSize.size == 'L'}"><a @click.prevent="itemSize.size = 'L'" href="#">L</a></li>
                                </ul>
                            </div>
                            <div class="qty-box d-flex mt-3">
                                    <div>Quantity</div>
                                    <div class="qty-input-group ml-auto">
                                        <button @click="addCount(0)" :class="{'disabled':qty<=1}" class="remove-btn qty-btn">-</button>
                                        <input v-model.number="qty" class="qty-input" type="number">
                                        <button @click="addCount(1)" class="qty-btn">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-description mt-3 border-bottom">
                                <div>detail</div>
                                <p class="p-3 text-muted">{{product.description}}</p>
                            </div>
                            <button @click="addCart(product.id ,qty , itemSize.size)" class="btn btn-block btn-danger">Add to Bag</button>
                        </div>
                    </div>
            </div>
        </div>
        <hr v-if="seenLocal.length > 1">
        <div v-if="seenLocal.length != 1" class="container">
            <section class="seen-product py-4">
                <h4 class="text-muted text-center mb-3">您曾經看過的商品</h4>
                <div class="form-row">
                    <div v-if="i.title != product.title" v-for="(i,k) in seenLocal" :key="k" class="col-md-3 mt-3">
                        <a @click.prevent="goDescription(i.id)" href="#">
                            <div class="seen-product-card">
                                <img :src="i.img" alt="">
                                <div class="card-content">
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
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
import Lingallery from 'lingallery';
import productCard from '../components/productCard.vue';
export default {
    name:"ProductDescription",
    data(){
        return {
            id:"",
            qty: 1 ,
            width:500,
            height:500,
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
    },
    methods:{
        getProduct(){
            this.$store.dispatch("productsModules/getProduct",this.id);
        },
         getSeenProduct(){
            this.$store.dispatch("productsModules/getLocalstorage",'seenProduct');
        },
        addCount(num){
            if(num == 0 && this.qty >1){
                this.qty -= 1 ;
            }else if (num == 1){
                this.qty += 1 ;
            }
        },
        addCart(id ,qty ,size){
            const vm = this ;
            if(qty < 1){
                qty = 1
            }
            // console.log(id , qty ,size);
            vm.$store.dispatch("cartModules/addCart",{id ,qty , size});
            // console.log(size);
            vm.qty = 1 ;
        },
        goDescription(pId){
            const vm = this;
            this.$router.push(`/product/${pId}`);
            vm.id = pId ;
            vm.getProduct();
        }
    },
    computed:{
        ...mapGetters("productsModules",['product','itemSize','seenLocal']),
    },
    created(){
        // console.log(this.$route.params.pId);
        this.id = this.$route.params.pId ;
        this.getProduct();
        this.getSeenProduct();
    }
}
</script>
<style lang="scss">
$primary-color:#0f1c30;
$secondary-color:#14431e;
$img-info:rgba($primary-color,.5);
$white:white;
.breadcrumb{
      background-color: #af715b24;
    }
    .lingallery figure{
      height: 500px;
      @media (max-width: 576px){
        height: 400px !important;   
      }
      img{
        min-height: 500px;
        max-height: 500px !important;
        object-fit: cover;
        @media (max-width: 576px){
          min-height: 400px;  
          max-height: 400px !important; 
        }
      }
    }
 .lingallery_thumbnails_content{
      text-align: center;
      margin-top: 20px !important;
}
    .seen-product-card{
        position:relative;
        overflow:hidden;
        border-radius:8px;
        img{
            width:100%;
            height:400px;
        }
        &:hover{
            .card-content{
                bottom:0;
            }
        }
        .card-content{
             width:100%;
            position:absolute;
            left:0;
            right:0;
            bottom:-58px;
            background-color:$img-info;
            color:$white;
            padding:15px;
            border-radius:8px;
            transition:all .3s ease;
        }
        .title{
            display:flex;
            justify-content:space-between;
            font-size:18px;
        }
}
</style>