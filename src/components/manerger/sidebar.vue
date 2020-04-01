<template>
    <div>
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/admin/header">
                            <span data-feather="home"></span>
                            <i class="fas fa-photo-video"></i>
                                控制首頁標題
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/admin/products">
                            <span data-feather="home"></span>
                            <i class="fas fa-box-open"></i>
                                產品列表
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/admin/orders">
                            <span data-feather="home"></span>
                            <i class="fas fa-box-open"></i>
                                客戶訂單
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default{
    data(){
        return{
            active:"",
        }
    },
    methods:{
        changeSidebar(i){
            this.active = i ;
        }
    }
}
</script>