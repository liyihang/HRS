<template>
  <div class="dashboard-container">
    <div class="app-container" />
    <el-card class="tree-card">
      <!-- 用了一个行列布局 -->
      <tree-tools :tree-node="company" :is-root="true" />
      <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
        <tree-tools slot-scope="{ data }" :tree-node="data" />
      </el-tree>
    </el-card>
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/departments'
export default {
  components: {
    treeTools
  },
  data () {
    return {
      company: {
        name: '北京天通神策科技股份有限公司',
        manager: '负责人'
      },
      defaultProps: {
        label: 'name'
      },
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }]
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const res = await getDepartments()
      this.company = { name: res.companyName, manager: '负责人' }
      console.log(res)
    }
  }
}
</script>

<style>
.tree-card {
  font-size:14px;
}
</style>
