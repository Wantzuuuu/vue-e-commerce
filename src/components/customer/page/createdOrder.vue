<template>
    <div class="mt-6">
        <div class="container">
            <!--cart-table-->
            <section class="cart-table">
                 <cartTable :cart="cart" :cartLen="cartLen">
                    <h3 class="text-center" slot="table-title">
                        訂單商品
                    </h3>
                    <a href="#" class="d-none" slot="remove-btn"></a>
                </cartTable>
            </section>
            <!--cart-table end-->
            <!--customer data -->
            <section class="cutomer-form my-3">
                <h3 class="text-center">訂單資訊</h3>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <ValidationObserver v-slot="{ handleSubmit,validate }">
                             <form @submit.prevent="handleSubmit(createdOrder)">
                                <ValidationProvider name="email"  rules="required|email" v-slot="{ errors, failed }">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input :class="{'is-invalid':failed}" v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="請輸入 Email">
                                        <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider name="姓名" rules="required" v-slot="{errors,classes}">
                                    <div class="form-group">
                                        <label for="userName">收件人姓名</label>
                                        <input :class="classes" v-model="user.name" type="text" class="form-control" id="userName" placeholder="收件人名稱">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider name="電話" rules="required" v-slot="{errors,classes}">
                                    <div class="form-group">
                                        <label for="userPhone">收件人電話</label>
                                        <input :class="classes" v-model="user.tel" type="tel" class="form-control" id="userPhone" placeholder="收件人電話">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider name="地址" rules="required" v-slot="{errors,classes}">
                                    <div class="form-group">
                                        <label for="userAddress">收件人地址</label>
                                        <input :class="classes" v-model="user.address" type="text" class="form-control" id="userAddress" placeholder="收件人地址">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                                <div class="form-group">
                                    <label for="comment">留言</label>
                                    <textarea v-model="user.message" name="" id="comment" class="form-control" cols="30" rows="10"></textarea>
                                </div>
                                <div class="text-right">
                                    <button class="btn btn-danger" type="submit" >建立訂單</button>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </section>
            <!--customer data  end-->
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import cartTable from '../components/cartTable';
import { ValidationObserver,ValidationProvider} from 'vee-validate';
    export default{
        name:"CreatedOrder",
        components:{
            cartTable,
            ValidationObserver,
            ValidationProvider
        },
        data(){
            return{
                value:"",
                user:{
                    email:"",
                    name:"",
                    tel:"",
                    address:"",
                    message:"",
                }
            }
        },
        methods:{
            ...mapActions("cartModules",['getCart']),
            ...mapActions("orderModules",["getOrder"]),
            // test(){
            //     this.$refs.form.validate().then((success) => {
            //         if (success) {
            //         // 證成功後的行為包含 AJAX傳送、重製表單等等
            //         } else {
            //         // 驗證失敗產生的行為
            //         }
            //     });
            // },
            createdOrder(){
                const vm = this ;
                const timesTemp = parseInt(Date.now() / 1000);
                const order = {
                    user:vm.user,
                    products :vm.cart.carts,
                    total:vm.cart.total,
                    date: timesTemp ,
                }
                vm.$store.dispatch("orderModules/createdOrder", order);
            }
        },
        computed:{
            ...mapGetters("cartModules",['cart','cartLen'])
        },
        created(){
            this.getCart();
        }
    }
</script>