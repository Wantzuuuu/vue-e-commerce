<template>
    <div class="mt-6">
        <div class="container">
            <cartTable :cart="cart" :cartLen="cartLen" :deleteId="deleteId" @emitDeleteCart="deleteCart"></cartTable>
            <!-- footer-btn-group -->
            <div class="f-button-group row justify-content-around">
                <div class="col-12 col-md-4">
                    <router-link to="/products/all_items">
                        <div class="btn-item btn-shopping">
                            繼續購物
                        </div>
                    </router-link>
                </div>
                <div v-if="cartLen != 0" class="col-12 col-md-4">
                    <router-link to="/order_creat">
                        <div class="btn-item btn-checkout">
                            結帳去
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- footer-btn-group end-->
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex' ;
import cartTable from "../components/cartTable";
export default{
    name:"CartPage",
    data(){
        return{
            deleteId: "",
            date:[],
        }
    },
    components:{
        cartTable,
    },
    methods:{
        ...mapActions("cartModules",["getCart"]),
        deleteCart(id){
            this.$store.dispatch("cartModules/deleteCart",id);
            this.deleteId = id ;
        },
    },
    computed:{
        ...mapGetters("cartModules",["cart","cartLen"]),
    },
    created(){
        this.getCart();
    }
}
</script>
<style lang="scss" scope>
    $border-primary:#0f1c30;
    $border-line:#caccd1;
     .f-button-group{
                padding:50px 0;
                display:flex;
                justify-content:space-around;
                .btn-item{
                    text-align:center;
                    line-height:85px;
                    width:100%;
                    height:85px;
                    border:1px solid $border-primary;
                    // margin-left:15px;
                }
                .btn-shopping{
                    background-color:none;
                    transition:all .3s ease;
                }
                .btn-shopping:hover{
                    background-color:$border-primary;
                    color:white;
                }
                .btn-checkout{
                    background:$border-primary;
                    color:white;
                    transition:all .3s ease;
                }
                .btn-checkout:hover{
                    background-color:white;
                    color:$border-primary;
                }
        }
</style>