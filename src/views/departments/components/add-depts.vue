<template>
  <!-- 弹层 -->
  <el-dialog title="新增部门" :visible="true">
    <!-- 表单 -->
    <el-form label-width="120px">
      <el-form-item label="部门名称">
        <el-input style="width:80%" />
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input style="width:80%" />
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-select style="width:80%" />
      </el-form-item>
      <el-form-item label="部门介绍">
        <el-input style="width:80%" type="textarea" :rows="3" />
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

}
</script>

<style>

</style>
