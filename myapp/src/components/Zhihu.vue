<template>
  <div class="content">
    <div class="box1">
      <div class="title clearfix"><p class="fl">热门排序</p><span class="fr">切换为时间排序</span></div>
      <div class="main">
        <ul class="rb">
          <li v-for="(item,index) in result" :key="index" @click="goSee(item.sid)">
            <h1>{{item.text}}</h1>
            <img :src="item.thumbnail" alt=""> 
            <a>知乎日报</a>
            <img style="width: 0.28rem; height:0.28rem; margin-top:0.2rem" src="../assets/images/b1.jpg" alt="">
            <span>,已认证的官方账号</span>
            <img :src="item.thumbnail" alt="">
            <span class="Label-icon Label-iconColor--positive" style=" color: #c2a469;">
              <span style="display: inline-flex; align-items: center;">​
                <svg class="Zi Zi--LabelEditorRecommendation Label-iconImg" 
                fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12.868 2.899l6.597 3.8c.537.31.868.881.868
                 1.5v7.602c0 .619-.33 1.19-.868 1.5l-6.597 3.8c-.537.31-1.199.31-1.736
                  0l-6.597-3.8a1.731 1.731 0 0 1-.868-1.5V8.199c0-.619.33-1.19.868-1.5l6.597-3.8a1.74
                  1.74 0 0 1 1.736 0zm-2.614 11.85a.29.29 0 0 1 .255.148l1.239 2.207a.289.289 0 0
                  0 .504 0l1.24-2.207a.29.29 0 0 1 .254-.148l2.52.023a.29.29 0 0 0 .253-.434l-1.284-2.192a.288.288
                  0 0 1 0-.292l1.284-2.192a.288.288 0 0 0-.253-.434l-2.52.023a.29.29 0 0 1-.255-.148l-1.239-2.207a.289.289
                  0 0 0-.504 0l-1.24 2.207a.29.29 0 0 1-.254.148l-2.52-.023a.29.29 0 0 0-.253.434l1.284 2.192a.288.288 0
                  0 1 0 .292L7.48 14.338a.288.288 0 0 0 .253.434l2.52-.023z" fill-rule="evenodd"  width="30" height="30" color='#c2a469'>
              </path></svg></span>编辑推荐 </span>
              <span>本来这篇回答我想写成文章的，不过写到一半忽然想起来这个问题，于是搬到这里。 
              自打击封建迷信以来，知乎神秘学板块一片凋零，当然，原来水平就不怎么样，现在…</span>
                <button href="#"><svg class="Zi Zi--TriangleUp VoteButton-TriangleUp" 
                  fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                    <path d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 
                      3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 
                      13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 
                      1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z" fill-rule="evenodd">
                    </path></svg>
                     赞同1.7k
                </button>
                 <button href="#">
                   <svg class="Zi Zi--TriangleDown" fill="currentColor"
                      viewBox="0 0 24 24" width="10" height="10">
                      <path d="M20.044 3H3.956C2.876 3 2 3.517 2 
                          4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 
                          1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896
                          0-1.386-.876-1.9-1.956-1.9z" fill-rule="evenodd">
                      </path>
                    </svg></button>
                 <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772
                    1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605
                    0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7
                    9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd">
                  </path>
                  <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409
                   0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 
                   0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd">
                  </path>
                  <svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 
                      0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 
                      9.108-10.759 8.063z" fill-rule="evenodd">
                    </path></svg>
                 <a href="#"><span>评论 87</span></a>
                 <svg class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                   <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 
                      1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 
                      1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd">
                   </path></svg>
          </li>
        </ul>
      </div>
    </div>
    <a class="app" href="#">App内打开</a>
  </div>
</template>
<script>
export default {
  name: "Zhihu",
  data() {
    return {
      result: ""
    };
  },
  mounted() {
    this.$http({
      url: "https://api.apiopen.top/getJoke?page=3&count=20&type=video",
      params: {}
    }).then(res => {
      console.log(res, 111);
      this.result = res.data.result;
    });
  },
  methods: {
    goSee(sid) {
      this.$router.push({
        path: "/Shipin",
        query: {
          sid: sid
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../static/Zhihu";
</style>