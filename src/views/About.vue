<template>
  <el-container>
    <el-header>
      <el-row>
        <TopBar></TopBar>
      </el-row>
      <el-row>
        <MyHeader></MyHeader>
      </el-row>
    </el-header>
    <el-main style="margin-top: 50px">
      <div>



        <h1>axios请求</h1>
        <div>
          <el-button type="primary" @click="userLogin">登录</el-button>
          <el-button type="primary" @click="getUser">获取用户</el-button>
        </div>
      </div>
      <router-link :to="{path:'/miaosha'}">秒杀</router-link>
      <router-link to="/hottui">热门推荐</router-link>
      <router-link to="/xiang">产品详情</router-link>
    </el-main>
  </el-container>

</template>

<script>
  import  MyHeader  from '@/components/MyHeader.vue'
  import  TopBar  from '@/components/TopBar.vue'
  export default {
    name: "caseSix",
    data (){
      return {

        user: {},
        token: ''//token,可以放VUEX，本地存储等
      }
    },
    components:{
      MyHeader,TopBar

    },

    methods:{
      userLogin (){
        let that = this;
        this.$axios.post('/api/user/login',
                this.qs.stringify({
                  usernameOrTel: 'lisi',
                  password: '123'
                })
        )
                .then((res)=>{
                  console.log(res)
                  console.log(res.headers)
                  // 获取token，并存储

                  sessionStorage.setItem('token',res.headers['authenticate'])
                })
                .catch((res)=>{
                  console.log(res)
                })

      },
      getUser(){
        this.$axios.get('/api/user'
                // ,
                // {
                //     headers: {
                //         //后端自验证token的有效期，失效时，就不能正常调用 接口。
                //         // 'authenticate': this.token
                //         'authenticate': sessionStorage.getItem('token')
                //     }
                // }
        )
                .then((res)=>{
                  console.log(res)
                  if(res.data.code === 200){
                    alert(res.data.msg);
                  }
                })
                .catch((res)=>{
                  console.log(res)
                })
      },

    },

  }
</script>

<style scoped>

</style>