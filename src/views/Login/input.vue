<template>
 <section class="menu menu-dark w-75 h-50">
  <div
   class="item w-100 h-100 rounded-3 d-flex align-items-center justify-content-center"
  >
   <a-form-model
    class="w-50"
    ref="loginForm"
    :rules="rules"
    :model="loginForm"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
   >
    <a-form-model-item class="mb-6" :colon="false" prop="username">
     <span class="text-body" slot="label">用户名</span>
     <a-input
      size="large"
      allow-clear
      v-model="loginForm.username"
      placeholder="请输入用户名"
     />
    </a-form-model-item>
    <a-form-model-item class="mb-6" :colon="false" prop="password">
     <span class="text-body" slot="label">密码</span>
     <a-input-password
      v-model="loginForm.password"
      size="large"
      allow-clear
      placeholder="请输入密码"
     />
    </a-form-model-item>
    <a-form-model-item class="mb-0" :wrapper-col="{ span: 14, offset: 4 }">
     <a-button
      block
      size="large"
      type="primary"
      :loading="loading"
      @click="handleClick"
     >
      登录
     </a-button>
    </a-form-model-item>
   </a-form-model>
  </div>
 </section>
</template>

<script>
import {
 queryUserInfo,
 queryUserAuth,
 queryUserAuthCallBack,
} from '@/api/login';

export default {
 data() {
  return {
   loginForm: {
    username: '',
    password: '',
   },
   loading: false,
   rules: {
    username: [
     { required: true, message: '请输入用户名', trigger: 'blur' },
     // { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
   },
  };
 },
 mounted() {},
 methods: {
  handleClick() {
   this.$refs.loginForm.validate((valid) => {
    if (valid) {
     this.loading = true;
     queryUserAuth(this.loginForm).then((route) => {
      queryUserAuthCallBack(route).then((res) => {
       this.loading = false;
       console.log(res);
      });
      // 模拟测试登录
      // queryUserInfo(this.loginForm.username).then((res) => {
      //  console.log(res);
      //  this.$message.success('登录成功');
      //  this.$store.commit('Login', res);
      //  this.$router.push({ path: '/' });
      // });
     });
    } else {
     return false;
    }
   });
  },
 },
};
</script>
