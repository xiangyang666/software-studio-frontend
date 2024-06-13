<template>
  <div id="box">
    <div class="box0">
      <div class="iptbox">
        <span>&nbsp;</span>
        <div class="logo"></div>
        <div class="ipt01">
          <input type="text" placeholder="邮箱" />
        </div>
        <div class="ipt02">
          <input type="password" placeholder="密码" />
        </div>
        <input type="checkbox" class="checkbox" />
        <span>记住</span>
        <div class="btn">
          <input type="button" value="登录" />
        </div>
        <div class="aBox">
          <a href="javascript:;">忘记密码？</a>
        </div>
        <div class="bunText">
          <a href="javascript:;">未注册用户？创建用户</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
#box {
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box0 {
  height: 370px;
  width: 360px;
  /*border:1px solid red;*/
}
.iptbox {
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}
.logo {
  height: 40px;
  width: 100px;
  /*border:1px solid red;*/
  margin: 0px auto 0px;
  text-align: center;
  background: url(https://vuejs.org/images/logo.svg) no-repeat;
  background-size: contain;
  background-position-x: 50%;
}
.logo p {
  height: 40px;
  width: 100px;
  font-size: 25px;
}
.ipt01 {
  height: 45px;
  width: 300px;
  border: 1px solid #ccc;
  margin: 15px auto 0px;
}
.ipt01 > input {
  height: 45px;
  width: 280px;
  outline: none;
  border: 0px;
  margin-left: 20px;
}
.ipt02 {
  height: 45px;
  width: 300px;
  border: 1px solid #ccc;
  margin: 25px auto 0px;
}
.ipt02 > input {
  height: 45px;
  width: 280px;
  outline: none;
  border: 0px;
  margin-left: 20px;
}
.checkbox {
  width: 15px;
  height: 15px;
  margin: 30px 10px auto 28px;
}
.btn {
  height: 45px;
  width: 300px;
  /*border:1px solid red;*/
  margin: 20px auto;
}
.btn > input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: #615fe6;
  border: 0px;
  color: white;
  cursor: pointer;
}
.aBox {
  height: 20px;
  width: 100px;
  /*border:1px solid red;*/
  text-align: center;
  margin: 0px auto;
  font-size: 14px;
}
.aBox a {
  color: #000000;
}
.bunText {
  text-align: center;
  margin: 40px;
}
.bunText a {
  color: white;
  font-size: 14px;
}
</style>
