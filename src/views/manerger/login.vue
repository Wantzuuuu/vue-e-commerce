<template>
  <div> 
        <div class="bg-box" style="height:100vh">
            <form class="box">
              <h1>Login</h1>
              <input v-model="user.username" type="text" placeholder="Username">
              <input v-model="user.password" type="password" placeholder="Password">
              <button @click="signIn">Signin</button>
            </form>
        </div>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
    name:"Login",
    data(){
        return{
            user:{
                username:"",
                password:"",
            }
        }
    },
    methods:{
          signIn(){
            const vm = this ;
            firebase.auth().signInWithEmailAndPassword(this.user.username, this.user.password).then((response)=>{
              console.log(response)
              console.log('成功')
              this.$router.push("/admin/header")
            })
            .catch((error)=>{
              console.log(error);
              console.log('錯誤')
              vm.user.username="";
              vm.user.password="";
            })
          }
        }
}
</script>
<style scoped>
.bg-box{
  height:100vh;
  width:100%;
  background-image:url('https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80');
  background-position:center center;
  background-size:cover;
}
h1{
  color:white;
}
.box{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:500px;
  padding:30px;
  background-color:#191919;
  text-align:center;
}
@media(max-width:576px){
  .box{
    width:96%;
  }
}
.box input{
  background:none;
  display:block;
  margin:20px auto;
  text-align:center;
  padding:14px 10px;
  width:200px;
  border-radius:24px;
  border:2px solid  #007cc0;
  outline:none;
  color:white;
  transition:all .3s ease;
}
.box input:focus{
   border:2px solid #2dde98 ;
  width:280px;
}
.box button{
   background:none;
  display:block;
  margin:20px auto;
  text-align:center;
  padding:14px 10px;
  width:100px;
  border-radius:24px;
  border:2px solid #2dde98;
  outline:none;
  color:white;
  transition:all .3s ease;
  cursor:pointer;
}
.box button:hover{
  background-color:#2dde98;
}
</style>