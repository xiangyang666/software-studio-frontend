<template>
  <div class="box_">
    <ul>
      <li
        style="
          background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?w=2452&h=920');
        "
      ></li>
      <li
        style="
          background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fc3e16fae19bca20536a4d1de9da943.jpg?thumb=1&w=1839&h=690&f=webp&q=90');
        "
      ></li>
      <li
        style="
          background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01a422c2d04a7668e6d1d4748aeadf61.jpg?thumb=1&w=1839&h=690&f=webp&q=90');
        "
      ></li>
      <li
        style="
          background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b82cdb12380866905927fb833a838be9.jpg?thumb=1&w=1839&h=690&f=webp&q=90');
        "
      ></li>
      <li
        style="
          background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bbedb4f08daf9ace5592655f01b71d1.jpg?thumb=1&w=1839&h=690&f=webp&q=90');
        "
      ></li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  var box = document.querySelector(".box_");
  var lis = document.querySelectorAll(".box_ ul li");

  for (var i = 0; i < lis.length; i++) {
    //移入
    lis[i].onmouseenter = function () {
      //排他思想
      for (var j = 0; j < lis.length; j++) {
        lis[j].style.width = "100px";
      }
      this.style.width = "1280px";
    };
    //移出
    lis[i].onmouseleave = function () {
      for (var k = 0; k < lis.length; k++) {
        lis[k].style.width = box.clientWidth / 5 + "px";
      }
    };
  }
});
</script>
<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.box_ {
  height: 300px;
  width: 1200px;
  margin: 30px auto;
}
.box_ ul {
  list-style: none;
  width: 1200px;
  overflow: hidden;
  display: flex;
}
.box_ ul li {
  height: 300px;
  width: calc(1200px / 5);
  background-color: #ccc;
  float: left;
  overflow: hidden;
  background-repeat: no-repeat;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background-size: cover;
  // transform: rotate(180deg);

  &:hover {
    // transform: rotate(180deg);
  }
}
</style>
