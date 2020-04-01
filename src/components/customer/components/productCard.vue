<template>
        <div class="col-lg-3 col-md-4 col-12 mt-3">
            <div :id="productData.id" :data-num="num" class="product-card">
                <div class="product-header">
                    <a @click.prevent="goDescription(productData.id,productData.title)" href="#">
                        <img :src="productData.img" alt="productImg">
                    </a>
                    <div class="cards-btn">
                        <div @click="addCart(productData.id,productData.category)" class="add-cart card-btn"><i class="fas fa-shopping-bag"></i></div>
                        <div v-if="!isFavorite" @click="addFavorite('productTitle',productData.title)" class="favorite-btn card-btn"><i class=" fas fa-heart"></i></div>
                        <div v-else @click="removeFavorite('productTitle',productData.title)" class="card-btn remove-btn text-danger"><i class=" fas fa-heart"></i></div>
                    </div>
                    <button :data-id="productData.id" @click="openQuiclModal($event,productData)" class="more-btn">
                        <i class="far fa-eye"></i>
                        Quick view
                    </button>
                </div>
                <div class="product-body">
                    <a @click.prevent="goDescription(productData.id,productData.title)" href="#">
                        <h6 class="product-title">{{productData.title}}</h6>
                    </a>
                    <div class="product-price">
                        <span class="price">{{productData.price | currency}}</span>
                        <del v-if="productData.price != productData.oringin_price" class="og-price">{{productData.oringin_price | currency}}</del>
                        <div class="border-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script> 
import $ from 'jquery' ;
export default {
    name:"ProductCard",
    props:["productData" , "favoriteProduct","num"],
    data(){
        return {
        }
    },
    methods:{
        openQuiclModal(e,product){
            this.$emit("emitProductModal",product);
            //  console.log(e.target.getAttribute('data-id'))
            // const id = product.id;
            // console.log(id);
            // let num = parseInt($(`#${id}`).attr("data-num"));
            // console.log(num);
            // let pId = $(`#${id}`).attr("data-id");
            // console.log(pId);
        },
        addCart(id , category, qty=1 ){
            let size = "";
            if(category =='hat'||category =='skateboard'||category == 'ACCESSORIES'){
                size = "free";
            }else{
                size = "S";
            }
            //console.log(size);
            this.$emit("emitAddCart", id ,qty ,size);
        },
        goDescription(pId,title){
            // console.log(pId);
            // console.log(title);
            this.$emit("emitGoDs",pId,title);
        },
        addFavorite(key,productTitle){
            this.$emit("emitFavorite",key,productTitle);
        },
        removeFavorite(key,productTitle){
            this.$emit("emitRemoveFavorite",key,productTitle);
        }
    },
    computed : {
        isFavorite(){
            const vm = this ;
            const title = vm.productData.title ;
            const favorite = vm.favoriteProduct ;
            // return favorite;
            const index = favorite.indexOf(title);
            if(index != -1){
                return true ;
            }else{
                return false ;
            }
        }
    }
}
</script>