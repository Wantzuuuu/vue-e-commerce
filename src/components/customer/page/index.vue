<template>
    <div>
        <header class="header d-flex flex-column justify-content-center align-items-center">
            <div class="">
                <h1 class="text-white header-title">SKATEBOARD</h1>
            </div>
            <div class="scroll-group">
                <button @click="scrollHeader" id="headerScrollBtn" class="text-center text-white" data-position="#section1">
                    <h5>Scroll</h5>
                </button>
                <div class="scroll-line">
                    <div class="scroll-bar">
                    </div>
                </div>
            </div>
            <div class="header-dsc text-white text-center">
                SKATEBOARD VISUALUPARMORED
                <br>
                 COPYRIGHT© 2020 BY WAN. ALL ITEMS COLLECTIONS.
            </div>
        </header>
        <!-- lookbook section -->
        <section id="lookBookSection">
            <div class="top-mill bg-cover" :style="{backgroundImage:'url('+header.img+')'}">
                <div class="text-white text-center">
                    <h1>{{header.title}}</h1>
                    <h1>{{header.description}}</h1>
                    <button @click="goPage('/lookbook')" class="title-button">more</button>
                </div>
            </div>
        </section>
        <!-- lookbook section end-->
         <!--men advance-->
        <advance :title="men.title"  :description="men.description" :img="men.img" :type="'men'" :btnTitle="'Shop Men'" :category="'ALL'" :direction="'right'"></advance>
        <!--men advance end-->

         <!-- women advance -->
         <advance :title="women.title"  :description="women.description" :img="women.img" :type="'women'" :btnTitle="'Shop Women'" :category="'ALL'" :direction="'left'"></advance>
        <!-- women advance end-->

        <!-- skateboard advance -->
        <advance :title="skateboard.title"  :description="skateboard.description" :img="skateboard.img" :type="'all_items'" :btnTitle="'SKATEBOARD'" :category="'SKATEBOARD'" :direction="'left'"></advance>
        <!-- skateboard advance end-->
    </div>
</template>

<script>
import advance from '../components/advance.vue';
import {mapGetters,mapActions} from "vuex";
import $ from 'jquery';
export default {
    name:'index',
    components:{
        advance,
    },
    data(){
        return{
            position: 0,
        }
    },
    methods:{
        goPage(path){
            const vm = this ;
            // console.log(path);
            vm.$router.push(path);
        },
        scrollHeader(){
            let target = this.position;
            // console.log(target);
           $("html,body").animate({
            scrollTop: target
        }, 700);
        },
       ...mapActions("homeDataModules",["getHeaderData","getMenData","getWomenData","getSkateboard"])
    },
    computed:{
            ...mapGetters("homeDataModules",["header","men","women","skateboard"])
    },
    mounted(){
        this.position = $("#lookBookSection").offset().top;
        let indexPosition = $("#lookBookSection").offset().top;
        let lastScroll = 0 ;
        $(window).scroll(()=>{
            const nowScroll = $(window).scrollTop();
            // console.log(`now:${nowScroll}`,`last:${lastScroll}`)
            if(nowScroll >indexPosition-100){
                this.$store.dispatch("navbarScroll");
                if(nowScroll<lastScroll){
                        this.$store.dispatch("navbarScroll");
                }else{
                    this.$store.dispatch("removeNavbarClass");
                }
            }else{
                this.$store.dispatch("removeNavbarClass");
            }
            lastScroll = nowScroll ;
        })
    },
    created(){
        this.getHeaderData();
        this.getMenData();
        this.getWomenData();
        this.getSkateboard();
    }
}
</script>
<style lang="scss">
$primary-color:#0f1c30;
$secondary-color:#14431e;
$img-info:rgba(15, 28, 48,0.68);
$white:white;
.test-title.bounce{
    animation-duration: 1s;
    animation-iteration-count:infinite
}
.bg-top{
    background-position:top center;
    background-size:cover;
}
.header{
    position: relative;
    height:100vh;
    background-color:black;
    .header-dsc{
        position:absolute;
        bottom:10%;
    }
    /* background-color:#354926; */
    .scroll-group{
        position:relative;
        margin-top:100px;
        #headerScrollBtn{
            background-color:rgba(255, 255, 255, 0);
            border:none;
            outline: none;
        }
        #headerScrollBtn h5:hover{
            color:red;
        }
        .scroll-line{
            width:2px;
            height:65px;
            background-color:white;
            position:absolute;
            left:50%;
            overflow:hidden;
            .scroll-bar{
                position:absolute;
                top:0;
                left:0;
                width:2px;
                height:20px;
                background-color:red;
                animation-name: move;
                animation-duration:2.4s;
                animation-iteration-count:infinite;
            }
            @keyframes move{
                0%{
                    top:0;
                }
                100%{
                    top:100%;
                }
            }
        }
    }
}
.top-mill{
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-attachment:fixed;
    .title-button{
        color:white;
        width:125px;
        height:40px;
        background-color:rgba(255, 255, 255, 0);
    
    }
    .title-button:hover{
        color:rgb(196, 41, 41);
        border-color:rgb(196, 41, 41);
    }
}
@media(max-width:576px){
    .top-mill{
        background-attachment:scroll;
    }
}
.index-background-img{
    height:80vh;
    width:100%;
}

// advance section
.advance{
    position:relative;
    .content-box{
        position:absolute;
        color:$white;
        width:40%;
        text-align:center;
        .advance-btn{
            width:150px;
            height:50px;
            background-color:$primary-color;
            color:$white;
            border:none;
            border-radius:50px;
        }
        .advance-btn:hover{
            color:$primary-color;
            background-color:$white;
        }
    }
    .a-1{
        top:40px;
        right:30px;
    }
    .a-2{
         top:40px;
            left:30px;
    }
    @media(max-width:576px){
        .a-1,.a-2 {
            position:relative;
            top:0;
            left:0;
            padding:20px 0;
            width:100%;
            color:$primary-color;
        }
    }
}

</style>