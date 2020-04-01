<template>
    <div>
        <div class="admin-section mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form class="card h-100">
                            <div class="card-header">
                                首圖管理區
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="headerBigTitle">網頁主標題</label>
                                    <input v-model="header.title" type="text" class="form-control" id="headerBigTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="headerSmallTitle">網頁副標題</label>
                                    <input v-model="header.description" type="text" class="form-control" id="headerSmallTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="headerImg">圖片</label>
                                    <input v-model="header.img" type="text" class="form-control" id="headerImg" aria-describedby="emailHelp">
                                </div>
                                <button @click="updateIndexData(header,'header')" class="btn btn-primary">更新主圖區</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-header">首頁圖片</div>
                            <div class="card-body">
                                <div>
                                    <img width="100%" :src="header.img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- skateboard -->
                <div class="row mt-5">
                    <div class="col-md-6">
                        <form class="card h-100">
                            <div class="card-header">
                                滑板廣告牆
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="skateboardBigTitle">主標題</label>
                                    <input v-model="skateboard.title" type="text" class="form-control" id="skateboardBigTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="skateboardSmallTitle">廣告敘述</label>
                                    <input v-model="skateboard.description" type="text" class="form-control" id="skateboardSmallTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="skateboardImg">圖片</label>
                                    <input v-model="skateboard.img" type="text" class="form-control" id="skateboardImg" aria-describedby="emailHelp">
                                </div>
                                <button @click="updateIndexData(skateboard,'skateboard')" class="btn btn-primary">更新主圖區</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-header">滑板廣告圖片</div>
                            <div class="card-body">
                                <div>
                                    <img width="100%" :src="skateboard.img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- skateboard  end-->
                <!-- men -->
                <div class="row mt-5">
                    <div class="col-md-6">
                        <form class="card h-100">
                            <div class="card-header">
                                男生廣告牆 
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="menBigTitle">主標題</label>
                                    <input v-model="men.title" type="text" class="form-control" id="menBigTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="menSmallTitle">廣告敘述</label>
                                    <input v-model="men.description" type="text" class="form-control" id="menSmallTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="menImg">圖片</label>
                                    <input v-model="men.img" type="text" class="form-control" id="menImg" aria-describedby="emailHelp">
                                </div>
                                <button @click="updateIndexData(men,'men')" class="btn btn-primary">更新主圖區</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-header">男生廣告圖片</div>
                            <div class="card-body">
                                <div>
                                    <img width="100%" :src="men.img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- men end-->
                <!-- girl-->
                <div class="row mt-5">
                    <div class="col-md-6">
                        <form class="card h-100">
                            <div class="card-header">
                                女生廣告牆 
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="womenBigTitle">主標題</label>
                                    <input v-model="women.title" type="text" class="form-control" id="womenBigTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="womenSmallTitle">廣告敘述</label>
                                    <input v-model="women.description" type="text" class="form-control" id="womenSmallTitle" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="womenImg">圖片</label>
                                    <input v-model="women.img" type="text" class="form-control" id="womenImg" aria-describedby="emailHelp">
                                </div>
                                <button @click="updateIndexData(women,'women')" class="btn btn-primary">更新主圖區</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-header">女生廣告圖片</div>
                            <div class="card-body">
                                <div>
                                    <img width="100%" :src="women.img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- girl end-->
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
    export default{
        name:"headerDashboard",
        data(){
            return {
                tempData:{},
            }
        }, 
        methods:{
            updateIndexData(data,target){
                this.$store.dispatch("homeDataModules/updateIndexData",{data,target});
            },
            ...mapActions("homeDataModules",["getHeaderData","getMenData","getWomenData","getSkateboard"])
        },
        computed:{
           ...mapGetters("homeDataModules",["header","men","women","skateboard"])
        },
        created(){
            this.getHeaderData();
            this.getMenData();
            this.getWomenData();
            this.getSkateboard();
        }
    }
</script>