<template>
  <div class="main">
    <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
        <a href="">Forgot password</a>
      </a-form-item>
      <a-form-item>
        <div class="bottom">
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"> Log in </a-button>
          <span> Or <a href="">register now!</a></span>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
interface FormState {
  username: string
  password: string
  remember: boolean
}

const router = useRouter()
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: unknown) => {
  console.log('Success:', values)
  router.push('/')
}

const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    min-width: 500px;
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }
}
</style>
