<template>
    <div class="login-container">
        <div class="login-wrapper">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>

export default {
   data() {
    return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { type: "string", required:true, trigger: 'blur', message:'请输入正确的账号名' }
          ],
          password: [
            { type: "string", required:true, trigger: 'blur', message:'请输入正确的密码' }
          ]
        }
      };
   },
   created(){
   },
   methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid,fields) => {
          if (valid) {
            const { username, password } = this.ruleForm;
            this.$store.dispatch("login", {
                username,
                password
            });
          } else {
            // 提示
            this.message({
                message:"请输入正确的字段",
                type:"error"
            });
            // 清空失败的字段
            for (const key in fields) {
                this.ruleForm[key] = "";
            }
            // 清空失败的字段的校验提示
            this.$refs.ruleForm.clearValidate(fields);
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
   }
}
</script>
<style lang="css" scoped>
    .login-container{
        margin: 0 auto;
        width: 600px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 50px;
        border: 1px solid;
    }
    .login-wrapper{
        width: 90%;
    }
</style>
