<template>
    <div>
        <div class="mt-6">
            <div class="container">
                <div class="category-list">
                   <!-- <div class="category-header text-center">
                        <h6>2020-1st collection</h6>
                    </div> -->
                    <ul class="category-items">
                        <li class="cartegory-item">
                            <a class="active" href="#">Shirt</a>
                        </li>
                        <li class="cartegory-item">
                            <a href="#">Shirt</a>
                        </li>
                        <li class="cartegory-item">
                            <a href="#">Shirt</a>
                        </li>
                        <li class="cartegory-item">
                            <a href="#">Shirt</a>
                        </li>
                        <li class="cartegory-item">
                            <a href="#">Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <section class="product-section">
                <div class="container">
                    <div class="row">
                        <productCard @emitProductModal="openQuickModal" :productData="i" v-for="i in filterProduct"></productCard>
                    </div>
                    </div>
                    
            </section>
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
                                    <img width="100%" :src="modalProduct.img" alt="">
                                </div>
                                <div class="col-md-6">
                                    <div class="info">
                                        <h5 class="title">{{modalProduct.title}}</h5>
                                        <p class="price">${{modalProduct.price}}</p>
                                        <div class="size-box d-flex">
                                            <div>size</div>
                                            <ul class="ml-auto size-list">
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                            </ul>
                                        </div>
                                        <div class="qty-box d-flex">
                                            <div>Quantity</div>
                                            <div class="qty-btn-group ml-auto">
                                                <button>-</button>
                                                <input type="number">
                                                <button>+</button>
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
import $ from "jquery";
import {mapActions,mapGetters} from "vuex";
import productCard from "../components/productCard"; 
export default {
    name:"MenProducts",
    data(){
        return {
            modalProduct:{},
        }
    },
    components:{
        productCard
    },
    methods:{
        openQuickModal(product){
            // console.log(tempProduct);
            console.log(product);
            this.modalProduct= product;
            $("#quickModal").modal("show");
        },
        ...mapActions("productsModules",["getProducts"])
    },
    computed:{
        // ...mapGetters("productsModules",['products']),
        filterProduct(){
            const products = this.$store.state.productsModules.products;
            return products.filter((v)=>{
                return v.type == "men";
            });
        }
    },
    created(){
        this.getProducts();
    }
}
</script>

<style lang="scss">
// .product-section{
//     background-color:#ddd;
// }
.category-list{
    width:100%;
    box-shadow:3px 3px 20px rgba(0,0,0,0.3); 
    padding:5px 5px 5px 5px;
    .category-items{
        margin-bottom:0;
        padding-left:0;
        text-align:center;
        li{
            display:inline-block;
            margin:0 5px 5px 5px;
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
        .close{
            position:absolute;
            z-index:10;
            top:5px;
            right:15px;
            outline:none;
        }
    }
}
.info{
    padding:20px 10px;
    .size-list{
        display:flex;
        li{
            a{
                display:inline-block;
                width:30px;
                height:30px;
                border:1px solid black;
                color:black;
                margin-right:10px;
                text-align:center;
                line-height:30px;
            }
        }
    }
    .qty-btn-group{
        input{
            width:40px;
        }
    }
}
</style>    