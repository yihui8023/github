<template>
<div class="wrap1">
    <div class="header1"> 
        <a @click="$router.go(-1)" class="fr"> 
             <svg viewBox="0 0 14 14" class="Icon Icon--remove" width="14" height="14" aria-hidden="true" style="fill: rgb(255, 255, 255); height: 14px; width: 14px;"><title></title><g><path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path></g></svg>
        </a>
        <h1>登录知乎</h1>
        <p>发现更多可信赖的解答</p>
    </div>
    <div class="main">
        <div class="main1">
            <select class="el">
    <option value="中国 +86">中国 +86</option>
    <option value="美国 +1">美国 +1</option>
    <option value="日本 +81">日本 +81</option>
    <option value="中国香港 +852">中国香港 +852</option>
    <option value="中国澳门 +853">中国澳门 +853</option>
    <option value="中国台湾 +886">中国台湾 +886</option>
    <option value="马来西亚 +60">马来西亚 +60</option>
    <option value="澳大利亚 +61">澳大利亚 +61</option>
    <option value="加拿大 +1">加拿大 +1</option>
    <option value="英国 +44">英国 +44</option>
    <option value="新加坡 +65">新加坡 +65</option>
    <option value="德国 +49">德国 +49</option>
    <option value="俄罗斯 +7">俄罗斯 +7</option>
    <option value="埃及 +20">埃及 +20</option>
    <option value="南非 +27">南非 +27</option>
    <option value="希腊 +30">希腊 +30</option>
    <option value="荷兰 +31">荷兰 +31</option>
    <option value="比利时 +32">比利时 +32</option>
    <option value="法国 +33">法国 +33</option>
    <option value="西班牙 +34">西班牙 +34</option>
    <option value="匈牙利 +36">匈牙利 +36</option>
    <option value="意大利 +39">意大利 +39</option>
    <option value="罗马尼亚 +40">罗马尼亚 +40</option>
    <option value="瑞士 +41">瑞士 +41</option>
    <option value="奥地利 +43">奥地利 +43</option>
    <option value="丹麦 +45">丹麦 +45</option>
    <option value="瑞典 +46">瑞典 +46</option>
    <option value="挪威 +47">挪威 +47</option>
    <option value="波兰 +48">波兰 +48</option>
    <option value="秘鲁 +51">秘鲁 +51</option>
   </select>
   <input class="in1" type="text" placeholder="输入手机号" v-model="name"/>
        </div>
        <span>
            <input class="in2" type="text" placeholder="输入6位验证码" v-model="yanzh"/>
        </span>
        <button @click="senda">发送验证码</button>
        <div class="pp1">
          <p>未注册手机验证后自动登录</p>
        <p>注册即同意 <a href="">《知乎协议》</a><a href="">《隐私保护指引》</a></p>  
        </div>
        <a @click="sendb" href="#">登录</a>
        <div class="mm clearfix">
            <a class="fl" href="">密码登录</a>
            <a class="fl fff" href="">需要帮助</a>
        </div>
        <div class="sj">
            <a href="">社交账号</a>
            <a href="">注册机构</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      yanzh: ""
    };
  },
  methods: {
    senda() {
      var reg = /^1(3|4|5|7|8)\d{9}$/;
      if (this.name == "") {
        alert("请输入手机号码");
      } else if (!reg.test(this.name)) {
          console.log(reg.test(this.name))
        alert("手机号输入有误");
      } else {
        alert("已发送验证码，请注意查收");
      }
    },
    sendb() {
      var reg = /^1(3|4|5|7|8)\d{9}$/;
      var yan = /^\d{6}$/;
      if (this.name == "") {
        alert("请输入手机号码");
      } else if (!reg.test(this.name)) {
        alert("手机号码格式不正确");
      } else if (this.yanzh == "") {
        alert("请输入验证码");
      } else if (!yan.test(this.yanzh)) {
        alert("验证码不正确");
      } else {
        this.$router.push("/Zhihu");
      }
    }
  }
};
</script>
<style scoped>
@import "../../static/zhuce";
</style>
