<template>
  <!-- 弹层 -->
  <el-dialog :title="showTitle" :visible="showDialog" @close="btnClick">
    <!-- 表单 -->
    <el-form ref="deptForm" label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" style="width:80%" @focus="getEmployeeSimple">
          <el-option v-for="item in peoples" :key="item.id" :label="item.username" :value="item.username" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <!-- 确认消息 -->
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button size="mini" @click="btnClick">取消</el-button>
        <el-button size="mini" type="primary" @click="btnConfirm">确认</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments, addDepartment, getDepartDetail } from '@/api/departments'
import { getEmployeeSimple } from '@/api/employees'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    // check dept name repeat
    const checkNameRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      console.log(this.treeNode)
      // 同级部门子节点
      const isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)
      isRepeat ? callback(new Error(`已经存在${value}！`)) : callback()
    }
    // check dept name repeat
    const checkCodeRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      // 同级部门子节点
      const isRepeat = depts.some(item => item.code === value && value)
      isRepeat ? callback(new Error(`已经存在部门编码${value}！`)) : callback()
    }
    return {
      peoples: [],
      formData: {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      //   校验规则
      rules: {
        name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' },
          { trigger: 'blur', validator: checkNameRepeat }],
        code: [{ required: true, message: 'code不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' },
          { trigger: 'blur', validator: checkCodeRepeat }],
        manager: [{ required: true, message: '负责人不能为空', trigger: 'blur' }],
        introduce: [{ required: true, message: '介绍不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' }]
      }
    }
  },
  computed: {
    showTitle() {
      return this.formData.id ? '编辑部门' : '新增子部门'
    }
  },
  methods: {
    // 获取负责人
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimple()
    },
    // 获取部门详情
    async getDepartDetail(id) {
      this.formData = await getDepartDetail(id)
    },
    btnConfirm() {
      this.$refs.deptForm.validate(async isValidate => {
        if (isValidate) {
          await addDepartment({ ...this.formData, pid: this.treeNode.id })
          this.$emit('addDepts')
          // 关闭弹窗
          this.$emit('update:showDialog', false)
        }
      })
    },
    btnClick() {
      this.$emit('update:showDialog', false)
      this.$refs.deptForm.resetFields()
    }
  }
}
</script>

<style>

</style>
