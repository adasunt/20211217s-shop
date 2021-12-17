<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
  export default {
    components:{
      Header,
      Footer
    },
    data(){
      return{
        msg:"111"
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
