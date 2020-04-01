<template>
    <div>
        <div class="cart-box py-3 text-primary">
            <slot name="table-title">
                <h1 class="text-center text-primary">購物車</h1>
            </slot>
            <!--cart-header-->
            <div class="cart-header d-none d-md-block">
                <div class="row justify-content-end">
                    <div class="col-3">
                        <h5 class="mb-0 text-center">
                            名稱
                        </h5>
                    </div>
                    <div class="col-3">
                        <h5 class="mb-0 text-center">
                            數量
                        </h5>
                    </div>
                    <div class="col-3">
                        <h5 class="mb-0 text-center">
                            價格
                        </h5>
                    </div>
                </div>
            </div>
            <!--cart-header end-->
            <!-- cart body -->
            <div class="cart-body p-3">
                <div v-if="cartLen==0" class="cart-content">
                    <div  class="h5 text-center">您的購物車是空的</div>
                </div>
                    <!-- product -->
                <div v-for="item in cart.carts" class="cart-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-6">
                                    <div class="cart-data">
                                        <a @click.prevent="goDescription(item.product_id)" href="#">
                                            <img width="150px" height="150px" :src="item.product.img" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div>
                                            <h5>{{item.product.title}}</h5>
                                            <div class="text-center">
                                                <small v-if="item.size != 'free'" class="d-block">SIZE : {{item.size}}</small>
                                                <slot name="remove-btn">
                                                    <a @click.prevent="deleteCart(item.id)" class="text-danger" href="#">
                                                        <span v-if="deleteId != item.id">移除</span>
                                                    </a>
                                                </slot>
                                                <span v-if="deleteId === item.id">
                                                        <i v-if="deleteId == item.id" class="fas fa-spinner fa-spin text-primary"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row h-100 mt-2 mt-md-0">
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div class="h5">{{item.qty}}件</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div class="h4 ml-2">{{item.product.price * item.qty |currency}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- product  end-->
            </div>
            <!-- cart body end-->

            <!-- cart cartfooter-->
            <div v-if="cartLen != 0" class="cart-footer py-3">
                <div class="row justify-content-end">
                    <div class="col-md-6">
                        <div class="form-row">
                            <div class="col-6">
                                <div>
                                    <div class="h6 mb-0 text-right">總計</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <div class="h6 mb-0 text-right">{{cart.total | currency}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- cart cartfooter end-->
        </div>
    </div>
</template>

<script>
    export default{
        name:"CartTable",
        props:['cart','cartLen',"deleteId"],
        methods:{
            deleteCart(id){
                this.$emit("emitDeleteCart",id);
            },
            goDescription(id){
                this.$router.push(`/product/${id}`);
            }
        }
    }
</script>

<style lang="scss" scope>
    $border-primary:#0f1c30;
    $border-line:#caccd1;
    .cart-box{
        .cart-header{
            padding:10px 0;
            border-top:1px solid  $border-line;
            border-bottom:1px solid  $border-line;
        }
            .cart-body{
                .cart-content{
                    border-bottom:1px solid  $border-line;
                    padding:10px;
                    .cart-data{
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }
            
        }
}
</style>