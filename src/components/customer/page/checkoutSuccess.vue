<template>
    <div class="mt-7">
        
        <div class="row justify-content-center no-gutters">
            <div class="col-11 col-md-9">
                <h3 class="text-center">謝謝你的訂單</h3>
                <div class="order-box py-4 mt-5">
                    <h6 class="py-3 border-bottom text-center">你好{{nowOrder.user.name}}</h6>
                    <p>訂單建立時間 :{{nowOrder.date | date}}</p>
                    <p>訂單序號 : {{nowOrder.date}}</p>
                    <p>訂單ID : {{nowOrder.date}}</p>
                    <div class=" form-row">
                        <div class="col-md-8">
                            <div v-for="(i,k) in nowOrder.products" class="product-table border-top border-bottom py-4 mb-3">
                                <div class="form-row">
                                    <div class="col-3">
                                        <div class="item">
                                            <img :src="i.product.img" alt="">
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <div class="item">
                                            <div>
                                                <div class="mb-1">{{i.product.title}}</div>
                                                <div class="mb-1">尺寸: {{i.size}}</div>
                                                <span class="mr-5">{{i.product.price | currency}}x{{i.qty}}</span><span>小計{{i.product.price * i.qty | currency}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <h6 class="mb-0 p-3 bg-primary text-white">收件地址</h6>
                            <div class="p-3 address-data">
                                <div><span class="mr-3">收件人姓名:</span><span>{{nowOrder.user.name}}</span></div>
                                <div><span class="mr-3">收件人email:</span><span>{{nowOrder.user.email}}</span></div>
                                <div><span class="mr-3">收件人地址:</span><span>{{nowOrder.user.address}}</span></div>
                                <div><span class="mr-3">收件人電話:</span><span>{{nowOrder.user.tel}}</span></div>
                                <div><span class="mr-3">收件人備註:</span><span>{{nowOrder.user.message}}</span></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="price-card mt-3">
                                <div class="d-flex mb-3">
                                    <span class="mr-auto">小記</span><span>{{nowOrder.total | currency}}</span>
                                </div>
                                 <div class="d-flex mb-3">
                                    <span class="mr-auto">運費</span><span>0</span>
                                </div>
                                <div class="d-flex mb-4">
                                    <span class="mr-auto">手續費</span><span>0</span>
                                </div>
                                <div class="d-flex border-top">
                                    <span class="mr-auto">總計</span><h4 class="mb-0 text-danger">{{nowOrder.total | currency}}</h4>
                                </div>
                                <router-link to="/" class="mt-5 btn btn-outline-primary btn-block">返回首頁</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default{
        name:"CheckoutSuccess",
        data(){
            return{
                id:''
            }
        },
        methods:{
            getOrder(){
                const vm = this ;
                const oId = this.id;
                vm.$store.dispatch("orderModules/getNowOrder",oId);
            }
        },
        computed:{
            ...mapGetters("orderModules",["nowOrder"]),
        },
        created(){
            this.id = this.$route.params.oId;
            this.getOrder();
        }
    }
</script>

<style lang="scss">
$primary-color:#0f1c30;
$card-info:#f3f4f7;
    .product-table{
        .item{
            font-size:14px;
            height:100%;
            display:flex;
            align-items:center;
            img{
                width:100%;
                height:120px;
            }
        }
    }
    .address-data{
        font-size:14px;
    }
    .price-card{
        padding:15px 60px;;
        width:100%;
        background-color:$card-info;
        
    }
</style>