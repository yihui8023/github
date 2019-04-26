<template>
  <div id="app clearfix">
    <div class="box">
      <!-- logo -->
      <div class="logo clearfix">
      <a class="fl" href="#"><img src="../assets/images/logo1_03.jpg"></a>
      <div class="fr"><a href="#"><p>下载App</p></a>|<a @click="gozhuce"><span>注册或登录</span></a></div>
    </div>
    </div>
    <!-- 去除白边大盒子  知乎日报 -->
    <div class="wrap ">
      <div class="login clearfix">
          <div class="logina fl">
        <img src="../assets/images/logo.jpg">
          </div>
      <div class="fr loginb">
        <h1>知乎日报</h1>
           <p class="nryc">囊括近期知乎全站最新最热的优质讨论内容，并进行深入探讨，
           为知友们提供可信赖的优质解答，满足你的好奇心。</p>
           <p>107,265关注</p>
      </div>
    </div>
    <div class="banner">关注话题</div>
    </div>
        <div class="nav clearfix">
          <router-link to="Suoyin"><p>索引</p></router-link>
          <router-link to="Zhihu"><p>讨论</p></router-link>
          <router-link to="Jinghua"><p>精华</p></router-link>
          <router-link to="stop"><p>等待回答</p></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script scoped>
export default {
  name: "Index",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    gozhuce(){
      this.$router.push('/Zhuce')
    }
  },
};
</script>
<style>
@import '../../static/index';
</style>
