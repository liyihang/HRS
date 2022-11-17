<template>
  <!-- 弹层 -->
  <el-dialog title="新增部门" :visible="showDialog">
    <!-- 表单 -->
    <el-form label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" style="width:80%" />
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <!-- 确认消息 -->
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button size="mini">取消</el-button>
        <el-button size="mini" type="primary">确认</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      //   校验规则
      rules: {
        name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' }],
        code: [{ required: true, message: 'code不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' }],
        manager: [{ required: true, message: '负责人不能为空', trigger: 'blur' }],
        introduce: [{ required: true, message: '介绍不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度为1-50字符', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style>

</style>
