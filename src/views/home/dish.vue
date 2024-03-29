<template>
    <div>
        <!-- 面包屑 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜单详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="min-h-[calc(100vh-130px)]">
            <!-- 添加按钮 -->
            <el-button type="primary" class="mb-3" @click="centerDialogVisible = true">添加菜品</el-button>
            <!-- 表格数据 -->
            <el-table :data="tableData" border stripe @selection-change="handleSelectionChange">
                <el-table-column align="center" type="index" width="55" label="序号" />
                <el-table-column align="center" property="name" label="菜单" />
                <el-table-column align="center" property="price" label="价格" width="80" />
                <el-table-column align="center" property="" label="样品">
                    <template #default="scope">
                        <div class="flex justify-center items-center">
                            <img class="object-contain w-20 h-20" :src="'/img/' + scope.row.image">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column width="400" align="center" property="des" label="菜品简介" show-overflow-tooltip />
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-button type="danger" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 添加菜品对话框 -->
        <el-dialog @close="resetForm" v-model="centerDialogVisible" title="添加菜品" width="30%" center>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                <el-form-item label="菜名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入菜名" />
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="ruleForm.price" placeholder="请输入价格" />
                </el-form-item>
                <el-form-item label="描述" prop="price">
                    <el-input v-model="ruleForm.des" type="textarea" />
                </el-form-item>
                <el-form-item label="样品" label-width="50">
                    <el-upload :disabled="isFull" :limit="1" :on-exceed="handleExceed" :on-success="handleAvatarSuccess"
                        :headers="{ Authorization: token }" action="/api/upload" list-type="picture-card">
                        <el-icon>
                            <Plus />
                        </el-icon>
                        <template #file="{ file }">
                            <div>
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                        <el-icon><zoom-in /></el-icon>
                                    </span>
                                </span>
                            </div>
                        </template>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirmAddDish">确认</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 预览图片对话框 -->
        <el-dialog v-model="dialogVisible" title="图片预览" width="50%" center>
            <img class="w-1/2 translate-x-1/2" :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { ArrowRight, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules, UploadProps, UploadFile } from 'element-plus'
import { getDishList, addDish,delDish } from '../../api/request'
import { useRouter } from 'vue-router'
const router = useRouter()
interface DishType {
    deleted: number
    des: string
    image: string
    name: string
    price: number
    status: number
    favour: number
    id: string | number
}
interface RuleForm {
    name: string
    price: string | number
    des: string
    image: string
}
const centerDialogVisible = ref(false)
const dialogVisible = ref(false)
const isFull = ref(false)
const dialogImageUrl = ref('')
const multipleSelection = ref<DishType[]>([])
const handleSelectionChange = (val: DishType[]) => {
    multipleSelection.value = val
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
    if (response.status === 200) {
        ElMessage.success('上传成功')
        ruleForm.image = response.data
    }
}
const handleExceed: UploadProps['onExceed'] = (files) => {
    ElMessage.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + multipleSelection.value.length} 个文件`)
    isFull.value = true
}
const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}
const tableData = ref<Array<DishType>>([])
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    price: '',
    des: '',
    image: '',
})
const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    ],
    price: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    ],
})
const token = ref("Bearer " + localStorage.getItem('userId') as string)
onMounted(() => {
    let userId = localStorage.getItem('userId') as string
    if (!userId) {
        router.push('/admin/login')
    }
    getList()
})
const resetForm = () => {
    ruleFormRef.value?.resetFields()
}
const getList = async () => {
    let res = await getDishList()
    if (res.status === 200) {
        tableData.value = res.data.data.records
    }

}
// 删除菜品
const handleDelete = (id: number) => {
    ElMessageBox.confirm(
        '确认删除该菜品？',
        '删除菜品',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
        }
    )
        .then(async () => {
            await delDish(id)
            getList()
            ElMessage({
                type: 'success',
                message: '删除成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })
}
// 添加菜品
const confirmAddDish = async () => {
    let res = await addDish(ruleForm)
    if (res.status == 200) {
        ElMessage.success('添加成功')
        getList()
        centerDialogVisible.value = false
    }

}
</script>
<style scoped lang='less'>
:deep(.el-upload--picture-card) {
    --el-upload-picture-card-size: 100px
}

:deep(.el-upload-list--picture-card) {
    --el-upload-list-picture-card-size: 100px
}
</style>