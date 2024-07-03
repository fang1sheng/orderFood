<template>
  <!-- 面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>数据报表</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="grid gap-5 grid-cols-3">
    <div :style="{backgroundColor:colorObj[key]}" class="bg-red-400 h-32 rounded-md flex items-center px-3" v-for="(item,key) of orderNumList" :key="item">
      <div class="text-white">
        <p class="text-3xl mb-3">{{ item }}</p>
        <p>{{ key }}</p>
      </div>
    </div>
  </div>
  <div class="grid my-3">
    <div class="flex-1 py-3 h-96 border rounded-md" id="zx"></div>
  </div>
  <div>
    <div class="w-full py-3 h-96 border rounded-md" id="cont"></div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted, ref,reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { getOrderNum,getSale,getSunSale } from "../../api/request"
let zxChart:any,contChart:any
onMounted(() => {
   zxChart= echarts.init(document.getElementById('zx'))
   contChart = echarts.init(document.getElementById('cont'))
  getOrderNums()
  getSales()
  getSevenSale()
  zxChart.setOption(zxOption);
  contChart.setOption(contOption);
})
const orderNumList=ref([])
const sevenSale=ref<Array<string>>([])
const colorObj: { [key: string]: string }={
  "等待确认":'red',
  "订单完成":'green',
  "等待出餐":'orange',
}
const zxOption = reactive({
  title: {
    text: '菜品销量排行',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  series: [
    {
      // name: '菜品销量排行',
      type: 'bar',
      data: [1, 2, 3, 4, 5, 6]
    }
  ]
})
const contOption = reactive({
  title: {
    text: '7天销售额',
    left:"center"
  },
  tooltip: {
    trigger: 'axis'
  },

  xAxis: {
    type: 'category',
    data: sevenSale.value
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820.00, 932, 901, 934.5, 1293.5, 1330.1, 1920.00],
      type: 'line',
      smooth: true
    }
  ]
})
// 获取订单数量
const getOrderNums = async () => {
  let res = await getOrderNum()
  orderNumList.value=res.data.data
} 
// 获取销售数据
const getSales = async () => {
  let res = await getSale()
  let data=res.data.data
  const sortedEntries = Object.entries(data).sort((a: any, b:any) => a[1] - b[1]);
  data = Object.fromEntries(sortedEntries);
 zxOption.yAxis.data=Object.keys(data)
  zxOption.series[0].data=Object.values(data)
  zxChart.setOption(zxOption);
} 
// 获取7天销售数据
const getSevenSale = async () => {
  let res = await getSunSale()
  contOption.xAxis.data=res.data.data.reverse().map((i:any)=>{
    return i.date
  })
  contOption.series[0].data=res.data.data.map((i:any)=>{
    return i.total
  })
  contChart.setOption(contOption);
} 
</script>
<style scoped lang='less'></style>