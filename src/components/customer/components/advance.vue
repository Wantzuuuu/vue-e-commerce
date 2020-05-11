<template>
    <div>
        <!-- advance section -->
         <section class="mt-4 advance">
           <div class="index-background-img bg-cover" :style="{backgroundImage:'url('+img+')'}">

            </div>
            <div :class="advanceDirection" class="content-box">
                <h1>{{title}}</h1>
                <h5 class="mt-3">{{description}}</h5>
                <div>
                    <!--<button @click="goPage('/products/men')" class="advance-btn mt-3">Shop Men</button>-->
                    <button @click="goPage(`/products/${type}`,category)" class="advance-btn mt-3">{{btnTitle}}</button>
                </div>
            </div>
        </section>
        <!-- advance section end-->
    </div>
</template>
<script>
export default{
    name:"ADVANCE",
    props:['title', "description", "img", "type", "btnTitle", "direction" ,"category"],
    // watch:{
    //     direction(){
    //         if(direction == 'right'){
    //             this.advanceDirection['a-1'] = true;
    //             this.advanceDirection['a-2'] = false;
    //         }else{
    //             this.advanceDirection['a-1'] = false;
    //             this.advanceDirection['a-2'] = true;
    //         }
    //     }
    // },
    data(){
        return{
            advanceDirection:{
                'a-1':false,
                'a-2':false,
            }
        }
    },
    methods:{
         goPage(path,target= "ALL"){
            const vm = this ;
            // console.log(path ,target);
            vm.$store.dispatch("productsModules/changeCategory",target);
            vm.$router.push(path);
        },
    },
    created(){
        if(this.direction == 'right'){
            this.advanceDirection['a-1'] = true;
            this.advanceDirection['a-2'] = false;
        }else{
            this.advanceDirection['a-1'] = false;
            this.advanceDirection['a-2'] = true;
        }
    }
}
</script>
<style>
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