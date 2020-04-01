<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <Navbar></Navbar>
        <div class="row">
            <Sidebar></Sidebar>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import Navbar from '../../components/manerger/navbar.vue'
import Sidebar from '../../components/manerger/sidebar.vue'
export default{
    name:"ManergerDashboard",
    components:{
        Navbar,
        Sidebar,
    },
    computed:{
        isLoading(){
            return this.$store.state.isLoading;
        }
    }
}
</script>