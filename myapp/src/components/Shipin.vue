<template>
    <div class="content">
        <h1>{{result.text}}</h1>
            <a>知乎日报</a>
            <img style="width: 0.28rem; height:0.28rem;" src="../assets/images/b1.jpg" alt="">
            <span>,已认证的官方账号</span>
        <video :src="result.video" autoplay controls loop></video>
        <div class="pl">
            <h1>评论</h1>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.user.profile_image" alt="">
                    <span>{{item.user.username}}</span>
                    <p>{{item.content}}</p>
                    <span>评论时间：{{item.ctime}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "Shipin",
  data() {
    return {
      result: "",
      sid: "",
      list: ""
    };
  },
  mounted() {
    this.$http({
      url: "https://api.apiopen.top/getSingleJoke?sid=" + this.$route.query.sid,
      params: {}
    }).then(res => {
      console.log(res, 111);
      this.result = res.data.result;
    });
    this.$http({
      url:
        "https://www.apiopen.top/satinCommentApi?id=" + this.$route.query.sid,
      params: {}
    }).then(res => {
      console.log(res, 222);
      this.list = res.data.data.normal.list;
    });
  }
};
</script>
<style scoped>
.content {
  width: 7.5rem;
}
.content h1 {
  margin: 0.5rem 0.33rem 0.2rem;
}
.content a:nth-last-of-type(1) {
  margin-left: 0.33rem;
  margin-bottom: 0.1rem;
  display: inline-table;
}
video {
  width: 6.88rem;
  height: auto;
  margin-left: 0.33rem;
}
.pl h1 {
  font: 0.45rem/0.45rem 微软雅黑;
  color: blue;
}
.pl ul li {
  border-top: 1px solid #ccc;
  margin-top: 0.5rem;
  width: 6.88rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
}
.pl ul li img {
  width: 0.6rem;
  height: 0.6rem;
  margin: 0.2rem 0.1rem 0.2rem 0.1rem;
  border-radius: 0.3rem;
}
.pl ul li span {
  font: 0.38rem/0.38rem 微软雅黑;
  display: inline-block;
  margin-top: 0.31rem;
  color: #444;
}
.pl ul li p {
  font: 0.38rem/0.4rem 微软雅黑;
  margin-left: 1rem;
}
.pl ul li span:nth-of-type(2) {
  font: 0.34rem/0.4rem 微软雅黑;
  margin-left: 0.4rem;
}
</style>

