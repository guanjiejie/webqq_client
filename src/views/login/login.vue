<template>
    <div class="login">
        <el-row :gutter="10">
            <el-col :offset="2" :span="5" class="t_r">用户名：</el-col>
            <el-col :span="14">
                <el-input type="text" size="small" v-model="userName" placeholder="请输入用户名"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :offset="2" :span="5" class="t_r">密码：</el-col>
            <el-col :span="14">
                <el-input type="password" size="small" v-model="password" placeholder="请输入密码"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="primary" @click="login">登录</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            password: ""
        };
    },
    created() {},
    methods: {
        login() {
            this.$http
                .get("/api/login", {
                    params: { userName: this.userName, password: this.password }
                })
                .then(res => {
                    if (res.data.success) {
                        this.$router.push({ name: "Home", params: {} });
                    }
                });
        }
    }
};
</script>

<style scope lang="scss">
.login {
    margin-top: 150px;
    width: 400px;
    padding: 50px 30px 30px;
    border: 2px solid #e1e1e1;
    border-radius: 10px;
    line-height: 30px;
    .el-row {
        margin-bottom: 20px;
        text-align: center;
    }
    button {
        margin-top: 20px;
        margin-bottom: -10px;
        width: 150px;
    }
}
</style>
