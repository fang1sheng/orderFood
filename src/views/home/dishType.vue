<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜品类型</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <el-button type="primary" style="margin-bottom: 10px;" @click="centerDialogVisible = true">添加类型</el-button>
            <el-table :data="tableData" border stripe :table-layout="tableLayout">
                <el-table-column align="center" width="100" property="id" label="#" show-overflow-tooltip />
                <el-table-column align="center" property="name" label="类型" show-overflow-tooltip />
                <el-table-column align="center" property="priority" label="优先级" show-overflow-tooltip />
                <el-table-column align="center" label="操作" width="150">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="editBtn(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <el-dialog v-model="dialogVisible" title="修改类型" width="30%" center @close="statusValue = ''">
            <el-form :model="rowData" label-width="auto">
                <el-form-item label="当前类型：">
                    <el-input v-model="rowData.name" style="width: 100%;" placeholder="请选择修改类型">
                    </el-input>
                </el-form-item>
                <el-form-item label="当前优先级：">
                    <el-input-number style="width: 100%;" :min="0" v-model="rowData.priority" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confimEdit">确认</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 添加类型对话框 -->
        <el-dialog @close="resetForm" v-model="centerDialogVisible" title="添加类型" width="20%" center>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                <el-form-item label="类型名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入类型名" />
                </el-form-item>
                <el-form-item label="优先级" prop="priority">
                    <el-input-number style="width: 100%;" :min="0" v-model="ruleForm.priority" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirmAdd">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue';
import { getDishType, editDishType, addDishType } from '../../api/request'
import { ElMessage, FormInstance, FormRules, type TableInstance } from 'element-plus'
const tableLayout = ref<TableInstance['tableLayout']>('auto')
interface OrderType {
    "id": number,
    "name": string,
    "priority": number,
    "des": null | string,
    "deleted": number
}
const ruleFormRef = ref<FormInstance>()
const tableData = ref<Array<OrderType>>([])
const dialogVisible = ref(false)
const centerDialogVisible = ref(false)
const statusValue = ref('')
const rowData = ref({
    id: 0,
    name: "",
    priority: 0
})
type RuleForm = {
    name: string,
    priority: number
}
const ruleForm = reactive<RuleForm>({
    name: '',
    priority: 0
})
const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    ],
    priority: [
        { required: true, message: 'Please input Activity priority', min: 0, trigger: 'blur' },
    ],
})
onMounted(() => {
    getList()
})

const getList = async () => {
    let res = await getDishType()
    if (res.status === 200) {
        tableData.value = res.data.data.records
    }
}
const editBtn = (row: OrderType) => {
    dialogVisible.value = true
    rowData.value.id = row.id
    rowData.value.name = row.name
    rowData.value.priority = row.priority
}
const confimEdit = async () => {
    await editDishType(rowData.value)
    ElMessage.success('修改成功')
    dialogVisible.value = false
    getList()
}
const resetForm = () => {
    ruleFormRef.value?.resetFields()
}
const confirmAdd = async () => {
    let res = await addDishType(ruleForm)
    if (res.status === 200) {
        ElMessage.success('添加成功')
    }
    centerDialogVisible.value = false
    getList()

}
</script>
<style scoped lang='less'>
:deep(.el-dialog--center .el-dialog__body) {
    text-align: center;
}

</style>