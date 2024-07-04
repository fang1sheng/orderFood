<template>
    <div>
        <!-- 面包屑 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜单详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="min-h-[calc(100vh-130px)]">
            <div class="flex items-center gap-10 mb-3">
                <!-- 添加按钮 -->
                <el-button type="primary" @click="centerDialogVisible = true">添加菜品</el-button>
                <div class="min-w-52 my-3 flex">
                    <div class="min-w-fit">筛选菜单：</div>
                    <el-select style="width: 100%;" v-model="statusSelect" placeholder="请选择" clearable @clear="getList"
                        @change="selectHandler">
                        <el-option v-for="item in dishTypeList" :key="item.id" :label="item.name" :value="item.name" />
                    </el-select>
                </div>
            </div>

            <!-- 表格数据 -->
            <el-table :data="tableData" border stripe @selection-change="handleSelectionChange">
                <el-table-column align="center" type="index" width="60" label="#" />
                <el-table-column align="center" property="name" label="菜单" />
                <el-table-column align="center" property="price" label="价格" />
                <el-table-column align="center" property="dishTypeName" label="类型" />
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
                        <el-button type="primary" size="small" @click="editBtn(scope.row)">编辑</el-button>
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
                <el-form-item label="类型" prop="dishType">
                    <el-checkbox-group v-model="ruleForm.dishType">
                        <el-checkbox border v-for="item in dishTypeList " :key="item.id" :label="item.name"
                            :value="item.id" />
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="描述" prop="price">
                    <el-input v-model="ruleForm.des" type="textarea" />
                </el-form-item>
                <el-form-item label="样品" label-width="50">
                    <el-upload ref="addUpload" :on-change="addHandleChange" :disabled="isFull" :limit="1"
                        :on-exceed="handleExceed" :file-list="fileList" :on-success="handleAvatarSuccess"
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
        <!-- 修改菜品对话框 -->
        <el-dialog @close="resetEditForm" v-model="editDialogVisible" title="修改菜品" width="30%" center>
            <el-form ref="editRuleFormRef" :model="editRuleForm" :rules="rules" class="demo-ruleForm">
                <el-form-item label="菜名" prop="name">
                    <el-input v-model="editRuleForm.name" placeholder="请输入菜名" />
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="editRuleForm.price" placeholder="请输入价格" />
                </el-form-item>
                <el-form-item label="类型" prop="dishType">
                    <el-checkbox-group v-model="editRuleForm.dishType">
                        <el-checkbox border v-for="item in dishTypeList " :key="item.id" :label="item.name"
                            :value="item.id" />
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="描述" prop="price">
                    <el-input v-model="editRuleForm.des" type="textarea" />
                </el-form-item>
                <el-form-item label="样品" label-width="50">
                    <el-upload ref="editUpload" :on-change="editHandleChange" :file-list="[{ url: editRuleFormImage }]"
                        :disabled="isFull" :limit="1" :on-exceed="editHandleExceed"
                        :on-success="editHandleAvatarSuccess" :headers="{ Authorization: token }" action="/api/upload"
                        list-type="picture-card">
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
                    <el-button @click="editDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirmEditDish">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { ArrowRight, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue'
import { ElMessage, ElMessageBox, genFileId } from 'element-plus'
import type { FormInstance, FormRules, UploadProps, UploadFile, UploadInstance, UploadRawFile } from 'element-plus'
import { getDishList, addDish, delDish, getDishType, editDish } from '../../api/request'
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
    dishTypeName: string
    id: string | number
}
interface OrderType {
    "id": number,
    "name": string,
    "priority": number,
    "des": null | string,
    "deleted": number
}
interface RuleForm {
    id: number
    name: string
    price: string | number
    des: string
    image: string
    dishType: Array<string> | string
}
const centerDialogVisible = ref(false)
const editDialogVisible = ref(false)
const dialogVisible = ref(false)
const isFull = ref(false)
const statusSelect = ref<string>('')
const dialogImageUrl = ref('')
const addUpload = ref<UploadInstance>()
const editUpload = ref<UploadInstance>()
const fileList = ref<UploadFile[]>([])
const editFileList = ref<UploadFile[]>([])
const editRuleFormImage = ref<string>("")
const dishTypeList = ref<OrderType[]>([])
const multipleSelection = ref<DishType[]>([])
const handleSelectionChange = (val: DishType[]) => {
    multipleSelection.value = val
}
const editRuleForm = ref({} as RuleForm)
// 添加菜单文件上传成功
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, file) => {
    if (response.status === 200) {
        // ElMessage.success('上传成功')
        ruleForm.image = response.data
    }
    fileList.value.push(file)
}
// 修改菜单文件上传成功
const editHandleAvatarSuccess: UploadProps['onSuccess'] = (response, file) => {
    if (response.status === 200) {
        ElMessage.success('上传成功')
        editRuleForm.value.image = response.data
    }
    editFileList.value.push(file)
}
const handleExceed: UploadProps['onExceed'] = (files) => {
    addUpload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    addUpload.value!.handleStart(file)
}
// 修改菜单文件上传超过数量时
const editHandleExceed: UploadProps['onExceed'] = (files) => {
    editUpload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    editUpload.value!.handleStart(file)
}
// 修改菜单文件发生变化
const editHandleChange: UploadProps['onChange'] = () => {
    editUpload.value!.submit()
}
// 添加菜单文件发生变化
const addHandleChange: UploadProps['onChange'] = () => {
    addUpload.value!.submit()
}
const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}
const tableData = ref<Array<DishType>>([])
const ruleFormRef = ref<FormInstance>()
const editRuleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    id: 0,
    name: '',
    price: '',
    des: '',
    image: '',
    dishType: []
})
const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    ],
    price: [
        { required: true, message: 'Please input Activity price', trigger: 'blur' },
    ],
    dishType: [{
        type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change',
    },
    ],
})
const token = ref("Bearer " + localStorage.getItem('userId') as string)
onMounted(() => {
    let userId = localStorage.getItem('userId') as string
    if (!userId) {
        router.push('/login')
    }
    getList()
    DishType()
})
// 重置添加菜单数据
const resetForm = () => {
    ruleFormRef.value?.resetFields()
    ruleForm.des = ''
    fileList.value = []
}
// 重置修改菜单数据
const resetEditForm = () => {
    editRuleFormRef.value?.resetFields()
    editFileList.value = []
}
// 获取列表数据
const getList = async () => {
    let res = await getDishList()
    if (res.status === 200) {
        tableData.value = res.data.data.records
        tableData.value.forEach((item: any) => {
            item.dishTypeName = [...item.dishType].map((item: any) => {
                return item.name
            }).join(' / ')
        })
    }
}
// 筛选菜单
const selectHandler = async (value: string) => {
    if (value) {
        let arr = tableData.value.filter((item: any) => {
            return item.dishTypeName.includes(value)
        })
        tableData.value = arr
    }
}
// 获取菜品类型
const DishType = async () => {
    let res = await getDishType()
    dishTypeList.value = res.data.data.records
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
    let arr = ruleForm
    arr.dishType = [...arr.dishType].join(',')
    let res = await addDish(arr)
    if (res.status == 200) {
        ElMessage.success('添加成功')
        getList()
        centerDialogVisible.value = false
    }

}
// 确认修改按钮
const confirmEditDish = async () => {
    const arr = editRuleForm.value
    arr.dishType = [...arr.dishType].join(',')
    let res = await editDish(arr)
    if (res.status == 200) {
        ElMessage.success('修改成功')
        editDialogVisible.value = false
        getList()
    }

}
// 编辑按钮
const editBtn = (row: RuleForm) => {
    editRuleFormImage.value = "https://food.281718.xyz/img/" + row.image
    editDialogVisible.value = true
    let obj = [...row.dishType]
    obj = obj.map((item: any) => {
        return item.priority
    })
    editRuleForm.value = {
        id: row.id,
        name: row.name,
        price: row.price,
        des: row.des,
        image: row.image,
        dishType: obj
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
:deep(.el-checkbox.is-bordered) {
    margin-bottom: 8px;
}
</style>