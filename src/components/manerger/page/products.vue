<template>
    <div>
        <!-- modal -->
             <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                        <div class="modal-header bg-dark text-white">
                            <h5 class="modal-title" id="exampleModalLabel">
                            <span>{{modalNameState}}</span>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="image">輸入圖片網址</label>
                                    <input v-model="tempProduct.img" type="text" class="form-control" id="image"
                                    placeholder="請輸入圖片連結">
                        </div>
                        
                        <img :src="tempProduct.img" class="img-fluid" alt="">
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input v-model="tempProduct.title" type="text" class="form-control" id="title"
                            placeholder="請輸入標題">
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input v-model="tempProduct.category" type="text" class="form-control" id="category"
                            placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">性別</label>
                            <input v-model="tempProduct.type"  type="unit" class="form-control" id="unit"
                            placeholder="請輸入單位">
                        </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="origin_price">原價</label>
                            <input v-model.number="tempProduct.oringin_price" type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input v-model.number="tempProduct.price" type="number" class="form-control" id="price"
                            placeholder="請輸入售價">
                        </div>
                        </div>
                        <hr>

                        <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea v-model="tempProduct.description" type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea  type="text" class="form-control"  id="content"
                            placeholder="請輸入產品說明內容"></textarea>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input :true-value="1" :false-value="0" class="form-check-input" type="checkbox"
                            id="is_enabled">
                            <label class="form-check-label" for="is_enabled">
                            是否啟用
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button @click="updateProduct(tempProduct)" type="button" class="btn btn-primary">確認</button>
                </div>
                </div>
            </div>
        </div>
        <!-- modal end-->
        <div class="text-right my-2 py-2">
            <button @click="openProductModal(true)" class="btn btn-outline-primary mr-4">
                新增
            </button>
        </div>
        <table class="table mt-4">
                <thead>
                    <th width="160">分類</th>
                    <th width="100">性別</th>
                    <th>名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="160" class="text-center">編輯</th>
                </thead>
                <tbody>
                    <tr v-for="i in pageProducts[currenPage]">
                        <td>{{i.category}}</td>
                        <td>{{i.type}}</td>
                        <td>{{i.title}}</td>
                        <td>{{i.oringin_price | currency}}</td>
                        <td>{{i.price | currency}}</td>
                        <td class="text-center">
                            <div class="btn-group">
                                <button @click="openProductModal(false,i)" class="btn btn-outline-primary">編輯</button>
                                <button @click="deleteProduct(i.id)" class="btn btn-outline-danger">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li :class="{'disabled':currenPage <= 0}" class="page-item">
                    <a @click.prevent="currenPage -= 1" class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="{'active':currenPage == page-1 }" v-for="page in pageProducts.length"><a @click.prevent="currenPage = page-1" class="page-link" href="#">{{page}}</a></li>
                <li class="page-item" :class="{'disabled':currenPage >= pageProducts.length - 1}">
                    <a @click.prevent="currenPage += 1" class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import $ from 'jquery';
export default {
    name:'products',
    data(){
        return {
            tempProduct:{},
            isNew:false,
            productModalName:"",
            currenPage: 0 ,
        }
    },
    methods:{
        openProductModal(isNew,product){
            const vm = this ;
            if(isNew){
                vm.tempProduct = {};
                vm.isNew = true;
            }else{
                vm.tempProduct = Object.assign({},product);
                vm.isNew = false;
            }
             $('#productModal').modal('show');
        },
        updateProduct(tempProduct){
            // console.log(tempProduct);
            const vm = this ;
            const isNew = vm.isNew;
            const pId = tempProduct.id
            const order =vm.products.length;
            this.$store.dispatch("productsModules/updateProduct",{tempProduct,isNew,pId});
            $('#productModal').modal("hide");
        },
        deleteProduct(pId){
            this.$store.dispatch("productsModules/deleteProduct",pId);
        },
       ...mapActions("productsModules",["getProducts",]),
    },
    computed:{
        modalNameState(){
            const vm = this;
            if(vm.isNew){
                return vm.productModalName = "新增產品";
            }else{
                return vm.productModalName = "編輯產品";
            }
        },
        ...mapGetters("productsModules",["products","pageProducts"]),
    },
    created(){
        this.getProducts();
    }
}
</script>