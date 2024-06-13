<template>
  <div class="container_">
    <div class="day">
      <img :src="day" height="100%" draggable="false" />
    </div>
    <div class="night">
      <img :src="night" height="100%" draggable="false" />
    </div>
    <div class="btn">
      <div class="arrow">&lt; &gt;</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import day from "@/assets/dayAndNight/day.png";
import night from "@/assets/dayAndNight/night.png";

onMounted(() => {
  //获取元素
  var container = document.querySelector(".container_");
  //晚上
  var night = document.querySelector(".night");
  //箭头的father
  var box = document.querySelector(".btn");
  //箭头
  var arrow = document.querySelector(".arrow");

  //绑定事件
  //鼠标按下
  arrow.onmousedown = function (e) {
    var Dx = e.clientX - box.offsetLeft;
    //鼠标移动
    document.onmousemove = function (e) {
      var Mx = e.clientX;
      var newl = Mx - Dx;
      //限制左边边限
      if (newl <= 0) {
        newl = 0;
      }
      //限制右边边限
      if (newl >= container.offsetWidth) {
        newl = container.offsetWidth;
      }

      //箭头移动
      box.style.left = newl + "px";
      //晚上的图片的宽度(增大和减小)
      night.style.width = newl + "px";
    };
    //鼠标抬起
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
  };
});
</script>
<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
// * {
//   padding: 0;
//   margin: 0;
//   user-select: none;
// }

// body {
//   height: 100vh;
//   width: 100vw;
//   background-color: #edf1f2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.container_ {
  height: 538px;
  width: 956px;
  position: relative;
}

.day {
  height: 100%;
  // width: 100%;
  position: absolute;
}

img {
}

.night {
  height: 100%;
  width: calc(100% / 2);
  position: absolute;
  overflow: hidden;
}

.btn {
  height: 100%;
  width: 5px;
  background-color: #00f5a0;
  position: absolute;
  left: calc(100% / 2);
  transform: translateX(-50%);
}

.btn .arrow {
  height: 60px;
  width: 60px;
  background-color: #00f5a0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -29px;
  text-align: center;
  line-height: 58px;
  border-radius: 50%;
  color: white;
  font-size: 32px;
  font-weight: bold;
  cursor: grab;
}
</style>
