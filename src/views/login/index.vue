<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="roles"
          ref="loginForms"
        >
          <h1 class="hello">Hello</h1>
          <h2>欢迎来到{{ title }}</h2>
          <el-form-item prop="phone">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.phone"
              placeholder="手机号"
              :maxlength="11"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>

  <el-dialog
    v-model="dialogTableVisible"
    title="温馨提示"
    width="300"
    align-center
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <h1 style="font-size: 16px">
      <span style="color: red">{{ time }}</span
      >秒后跳转到主页面
    </h1>
  </el-dialog>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref, onMounted } from "vue";
// import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";
// import { timeStatus } from '@/utils/time'

// store
// const userStore = useUserStore()
// router
const router = useRouter();
// route
const route = useRoute();

const title = ref("软件工作室");

// 默认账号跟密码（写死）
const defaultAccount = ref({
  phone: "00000000000",
  password: "000000",
});

//收集账号与密码的数据
let loginForm = reactive({ phone: "", password: "" });

// 按钮loading
let loading = ref(false);

// from表单
const loginForms = ref();

let time = ref(3);
const dialogTableVisible = ref(false);
// 登录回调
const login = async () => {
  // 如果校验失败则，停止后面的代码
  const result = await loginForms.value.validate((v) => v);

  if (!result) {
    return;
  }

  console.log("验证通过", result);

  dialogTableVisible.value = true;

  setInterval(() => {
    if (time.value <= 0) {
      router.push("/home");
      time.value = 3;
    }

    time.value--;
  }, 1000);
};

// 自定义校验规则函数
// 用户名校验规则
// @ts-ignore
const validatorUserPhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    // alert("手机号不能为空")
    callback(new Error("手机号不能为空"));
    // } else if (!(/^1[3|4|5|6|7|8|9]\w{9}$/.test(value))) {  // 当也许需要判断手机号时
    // callback(new Error('手机号格式不正确'))
  } else if (value.length <= 10) {
    // alert("手机号长度为11位")
    callback(new Error("手机号长度为11位"));
  } else if (value != defaultAccount.value.phone) {
    callback(new Error("手机号输入错误"));
  } else {
    callback();
  }
};
// 密码校验规则
// @ts-ignore
const validatorPassword = (rule: any, value: any, callback: any) => {
  // if (!value) {
  //   callback(new Error('密码不能为空'))
  //   // } else if (!(/^1[3|4|5|6|7|8|9]\w{9}$/.test(value))) {  // 当也许需要判断手机号时
  //   // callback(new Error('手机号格式不正确'))
  // } else if (value.length <= 5) {
  //   callback(new Error('密码长度至少六位'))
  // } else {
  //   callback()
  // }
  if (!value) {
    // alert("密码不能为空")
    callback(new Error("密码不能为空"));
    // } else if (!(/^1[3|4|5|6|7|8|9]\w{9}$/.test(value))) {  // 当也许需要判断手机号时
    // callback(new Error('手机号格式不正确'))
  } else if (value.length <= 5) {
    // alert("密码长度至少六位")
    callback(new Error("密码长度至少六位"));
  } else if (value != defaultAccount.value.password) {
    callback(new Error("密码输入错误"));
  } else {
    callback();
  }
};
// 定义表单校验需要配置对象
const roles = {
  // 规则对象属性：
  // required: 代表这个字段务必要校验的
  // min: 文本长度至少多少位
  // max: 文本长度最多多少位
  // message: 错误的提示信息
  // trigger: 触发校验表单的时机 change->文本发生变化触发校验，blur->失去焦点的时候触发校验规则

  // 用户名
  phone: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' },
    { trigger: "change", validator: validatorUserPhone },
  ],
  // 密码
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', rigger: 'change' },
    { trigger: "change", validator: validatorPassword },
  ],
};
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("https://pic.imgdb.cn/item/6668e6dad9c307b7e9beec08.jpg")
    no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("https://pic.imgdb.cn/item/6668e733d9c307b7e9bf2d4b.png")
      no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}

.hello {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-size: 5rem;
  text-align: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    height: 3px;
    width: 0px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;
  }

  &:hover:before {
    width: 100%;
  }
}
</style>
