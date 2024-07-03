<template>
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight" class="mb-4">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="grid gap-5 grid-cols-4">
        <div class="bg-red-400 h-32 rounded-md flex items-center px-3" v-for="_ in 4">
            <div class="text-white">
                <p class="text-3xl mb-3">3</p>
                <p>今日完成订单数</p>
            </div>
        </div>
    </div>
    <div class="grid gap-5 grid-cols-3 my-3">
        <div class="flex-1 p-2 h-96 border rounded-md" id="zx"></div>
        <div class="flex-1 p-2 h-96 border rounded-md" id="bt"></div>
        <div class="flex-1 p-2 h-96 border rounded-md" id="ld"></div>
    </div>
    <div>
        <div class="w-full p-3 h-96 border rounded-md" id="cont"></div>
    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
onMounted(() => {
    const zxChart = echarts.init(document.getElementById('zx'))
    const btChart = echarts.init(document.getElementById('bt'))
    const ldChart = echarts.init(document.getElementById('ld'))
    const contChart = echarts.init(document.getElementById('cont'))
    const zxOption = {
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
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [

    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
    }
    const btOption = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    }
    const ldOption = {
  legend: {
    data: ['1', '2']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '1'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '2'
        }
      ]
    }
  ]
    }
    const contOption = {
        title: {
      text: '销售额'
    },  
    tooltip: {
      trigger: 'axis'
    },
  
  xAxis: {
    type: 'category',
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1920],
      type: 'line',
      smooth: true
    }
  ]
    }
    zxChart.setOption(zxOption);
    btChart.setOption(btOption);
    ldChart.setOption(ldOption);
    contChart.setOption(contOption);

})
</script>
<style scoped lang='less'></style>