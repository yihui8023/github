<template>
    <div class="content">
        <div class="box1">
            <h1>3个章节</h1>
             <div class="neirong">
                 <h1>每周热门盘点</h1>
                 <ul>
                     <li><p>爱，死亡与三类人 | 知乎日报第 17 期</p></li>
                     <li><p>本周的热榜，简直是要了亲命 | 知乎日报第 16 期</p></li>
                     <li><p>《都挺好》，中国式家庭的扎心图鉴 | 知乎日报第 10 期</p></li>
                 </ul>
                  <ul v-if="isFlag">
                     <li><p>爱，死亡与三类人 | 知乎日报第 17 期</p></li>
                     <li><p>本周的热榜，简直是要了亲命 | 知乎日报第 16 期</p></li>
                     <li><p>《都挺好》，中国式家庭的扎心图鉴 | 知乎日报第 10 期</p></li>
                     <li><p>爱，死亡与三类人 | 知乎日报第 17 期</p></li>
                     <li><p>本周的热榜，简直是要了亲命 | 知乎日报第 16 期</p></li>
                     <li><p>《都挺好》，中国式家庭的扎心图鉴 | 知乎日报第 10 期</p></li>
                 </ul>
                 <div class="yy">
                     <a @click="vif" href="javascript:;" v-if="noFlag">展开阅读全文
                 <span style="display: inline-flex; align-items: center;">
                     ​<svg class="Zi Zi--ArrowDown" width="1.2em" height="1.2em" fill="currentColor" 
                     viewBox="0 0 24 24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 
                     0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 
                     0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd">
                     </path></svg></span>
                 </a>
                 </div>
             </div>
        </div>
        <div class="box1">
            <h1>编辑者</h1>
            <div class="neirong1">
                <ul>
                    <li>
                        <img src="../assets/images/c1.jpg" alt=""><p>知乎用户</p>
                    </li>
                    <li>
                        <img src="../assets/images/c1.jpg" alt="">
                        <p><span>曦希嘻</span><br>用心、真诚，勇敢、自信、尊重
                        <button>+关注她</button>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
            <a class="app" href="#">App内打开</a>
    </div>
</template>
<script>
export default {
     name: "Jinghua",
    data(){
        return {
        isFlag:false,
        noFlag:true,
        }
    },
    methods: {
      vif(){
          this.isFlag = ! this.isFlag
          this.noFlag = ! this.noFlag
      }
    }
}
</script>
<style scoped>
@import '../../static/suoyin';
</style>

