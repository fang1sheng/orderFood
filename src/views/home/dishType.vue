<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜品类型</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
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
    </div>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { getDishType, editDishType } from '../../api/request'
import { ElMessage, type TableInstance } from 'element-plus'
const tableLayout = ref<TableInstance['tableLayout']>('auto')
interface OrderType {
    "id": number,
    "name": string,
    "priority": number,
    "des": null | string,
    "deleted": number
}
const tableData = ref<Array<OrderType>>([])
const dialogVisible = ref(false)
const statusValue = ref('')
const rowData = ref({
    id: 0,
    name: "",
    priority: 0
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
</script>
<style scoped lang='less'>
:deep(.el-dialog--center .el-dialog__body) {
    text-align: center;
}
</style>