<template>
    <div class="flex h-[100vh] flex-col justify-center items-center">
        <el-input v-model="loginForm.id" size="large" placeholder="请输入账号" :prefix-icon="User" />
        <el-input v-model="loginForm.password" class="my-2" size="large" placeholder="请输入密码" :prefix-icon="Lock" />
        <el-button class="w-[20rem]" type="primary" @click="goHome">登录</el-button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { login } from '.././api/request'
import { useRouter } from 'vue-router'
const router = useRouter()
interface UserType {
    id: string | number
    password: string
}
const loginForm = ref<UserType>({
    id: '',
    password: ''
})
const goHome = async () => {
    let res = await login(loginForm.value)
    console.log(res);
    
    if (res.status === 200) {
        localStorage.setItem('userId', res.data.data)
        ElMessage.success('登录成功')
        router.push('/admin/home')
    }
}
</script>
<style scoped lang="less">
:deep(.el-input) {
    width: 20rem;
}
</style>