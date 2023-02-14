<template>
    <div class="container">
        <div class="login-wrapper">
            <div class="header">Login</div>
            <div class="form-wrapper">
                <input type="text" name="username" placeholder="username" class="input-item" v-model="username">
                <input type="password" name="password" placeholder="password" class="input-item" v-model="password">
                <button class="btn" id="loginButton" @click="handleToHome">Login</button>
            </div>
        </div>
    </div>
</template>
<script>

// import { mapState,mapGetters } from 'vuex';
export default {
   data() {
      return {
        username:this.$store.state.username,
        password:this.$store.state.password
      }
   },
   created(){
   },
   computed:{
    // ...mapState(["username","password"]),
    // ...mapGetters(["username","password"])
   },
   methods:{
    handleToHome(){
        //设置 username,password
        this.$store.commit("getUser",{username:this.username,password:this.password})
        this.$router.push({
            name:"index",
        })
    }
   },
}
</script>
<style lang="css" scoped>
</style>
