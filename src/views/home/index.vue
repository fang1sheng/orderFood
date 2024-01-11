<template>
    <div class="common-layout">
        <el-container>
            <el-header class="flex justify-between items-center bg-slate-800">
                <div class="flex items-center">
                    <h2 class="text-2xl text-slate-300 tracking-widest">吃货联盟管理系统</h2>
                    <el-icon>
                        <Dish class="text-slate-100 mt-1 ml-1" />
                    </el-icon>
                </div>
                <div class="flex items-center">
                     <span class="text-slate-300 tracking-widest">admin 欢迎您！</span>
                     <el-button type="primary" size="small" @click="logout">退出</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px" class="h-[calc(100vh-60px)] bg-slate-800">
                    <el-menu :default-openeds="['1-1']" active-text-color="#ffd04b" background-color="#545c64"
                        class="el-menu-vertical-demo" text-color="#fff">
                        <el-sub-menu index="1-1">
                            <template #title>
                                <el-icon>
                                    <ForkSpoon class="text-slate-100 mt-1" />
                                </el-icon>
                                订单管理</template>
                            <el-menu-item index="1-4-1" @click="router.push('/admin/dish')">
                                <el-icon>
                                    <IceCreamRound class="text-slate-100" />
                                </el-icon>
                                菜品详情
                            </el-menu-item>
                            <el-menu-item index="1-4-2" @click="router.push('/admin/order')">
                                <el-icon>
                                    <IceCreamRound class="text-slate-100" />
                                </el-icon>
                                订单详情
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main class="h-[calc(100vh-60px)]">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script setup lang='ts'>
import { Dish, IceCreamRound, ForkSpoon } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
    localStorage.removeItem('userId')
    router.push('/admin/login')
}
</script>
<style scoped lang='less'>
:deep(.el-menu) {
    background: rgb(30, 41, 59);
    border-right: 0;
}
</style>