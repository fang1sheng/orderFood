<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="my-3 flex items-center">
      <div class="min-w-fit">筛选订单：</div>
      <el-select style="width: 10%;" v-model="statusSelect" placeholder="请选择" @change="getList(statusSelect)" clearable @clear="getList">
        <el-option v-for="item in handkv" :key="item.value" :label="item.text" :value="item.value" />
      </el-select>
    </div>
    <div>
      <el-table :data="tableData" border stripe>
        <el-table-column align="center" width="100" property="tableNumber" label="桌号" show-overflow-tooltip />

        <el-table-column align="center" property="dishs" label="订单详情" show-overflow-tooltip />
        <el-table-column align="center" property="remark" label="备注" show-overflow-tooltip />

        <el-table-column align="center" property="phone" width="120" label="手机号" show-overflow-tooltip />
        <el-table-column align="center" width="120" label="总价格" show-overflow-tooltip>
          <template #default="scope">
            <span>{{ scope.row.totalAmount.toFixed(2) }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="状态" width="100">
          <template #default="scope">
            <el-tag :type="statusMap.get(scope.row.status)">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :formatter="dataformat" width="180" label="创建时间"
          property="createTime"></el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template #default="scope">
            <el-button type="primary" size="small" @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogVisible" title="修改状态" width="30%" center @close="statusValue = ''">
      <div class="mb-4">
        <span>当前状态: &nbsp;</span>
        <el-tag :type="statusMap.get(NewStatus)">{{ NewStatus }}</el-tag>
      </div>
      <div>
        <span>修改状态: &nbsp;</span>
        <el-select v-model="statusValue" clearable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handelerEdit">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { getOrderList, editOrder, removeDish } from '../../api/request'
import { ElMessage, ElMessageBox } from 'element-plus'
interface OrderType {
  deleted: number
  createTime: string
  remark: string
  dishs: string
  endTime: string
  phone: number
  status: number | string
  tableNumber: number
  id: string | number
  totalAmount: number
}
const statusSelect = ref<string>('')
const tableData = ref<Array<OrderType>>([])
const dialogVisible = ref(false)
const editId = ref<number | string>(0)
const NewStatus = ref<string>('等待确认')
const statusValue = ref('')
const dataformat = (a: any, b: any, cellValue: any, d: any) => {
  console.log(a, b, d)
  return new Date(cellValue).toLocaleString()
}
const statusMap = new Map([['等待确认', 'warning'], ['订单完成', 'success'], ['等待出餐', 'danger']])

const options = [
  {
    value: '等待确认',
    label: '等待确认',
  },
  {
    value: '订单完成',
    label: '订单完成',
  }, {
    value: '等待出餐',
    label: '等待出餐',
  }

]
onMounted(() => {
  getList()
})
const handkv = [
  { text: '等待确认', value: '等待确认' },
  { text: '等待出餐', value: '等待出餐' },
  { text: '订单完成', value: '订单完成' },
]

const getList = async (status = '') => {
  let res = await getOrderList(status)
  if (res.status === 200) {
    tableData.value = res.data.data.records
  }
}
// 删除订单
const handleDelete = (id: number) => {
  ElMessageBox.confirm(
    '确认删除该订单？',
    '删除订单',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await removeDish(id)
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
// 编辑按钮
const editBtn = (row: OrderType) => {
  dialogVisible.value = true
  editId.value = row.id
  NewStatus.value = row.status as string
}
// 确认修改状态
const handelerEdit = async () => {
  if (statusValue.value == '') {
    ElMessage.warning('请选择状态')
  } else {
    let res = await editOrder({ id: editId.value, status: statusValue.value })
    if (res.status == 200) {
      ElMessage.success('修改成功')
      dialogVisible.value = false
      getList()
    }
  }
}
</script>
<style scoped lang='less'>
:deep(.el-dialog--center .el-dialog__body) {
  text-align: center;
}
</style>