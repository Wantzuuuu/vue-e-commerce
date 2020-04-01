<template>
    <div>
        <div class="mt-2">
            <table class="table">
                <thead>
                    <th width="180">email</th>
                    <th width="120">姓名</th>
                    <th width="190">地址</th>
                    <th width="150">電話</th>
                    <th width="120">金額</th>
                    <th width="120">日期</th>
                    <th>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="(i,k) in orders" :key="k">
                        <td>{{i.user.email}}</td>
                        <td>{{i.user.name}}</td>
                        <td>{{i.user.address}}</td>
                        <td>{{i.user.tel}}</td>
                        <td>{{i.total | currency}}</td>
                        <td>{{i.date | date}}</td>
                        <td>
                            <ul>
                                <li v-for="p in i.products">{{p.product.title}} size:{{p.size}} {{p.qty}}個</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions ,mapGetters} from 'vuex';
    export default{
        name:"OrderList",
        methods:{
            ...mapActions("orderModules",["getOrder"]),
        },
        computed:{
            ...mapGetters("orderModules",["orders"]),
        },
        created(){
            this.getOrder();
        }
    }
</script>