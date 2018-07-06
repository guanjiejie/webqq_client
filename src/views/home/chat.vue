<template>
    <div class="chat">
        <el-row class="header">
            <el-col :span="24" class="t_c">
                知足常乐
            </el-col>
            <div class="close">
                <i class="el-icon-close"></i>
            </div>
        </el-row>
        <el-row class="chat-list">

        </el-row>
        <el-row class="chat-input">
            <el-row class="bars">

            </el-row>
            <el-row class="text">
                <el-input type="textarea" rows="3">
                </el-input>
            </el-row>
            <el-row class="chat-btns">
                <el-button size="small" class="send">发送</el-button>
                <el-button size="small">关闭</el-button>
            </el-row>
        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props: {

        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
.chat{
    width: 540px;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    border-radius: 5px;
    border: 2px solid #ddd;
    box-shadow: 0 0 5px #ddd;
    .header{
        height: 38px;
        line-height: 38px;
        background: #4FD6FE;
        color: #fff;
        font-size: 16px;
        border-radius: 4px 4px 0 0;
        .close{
            position: absolute;
            top: 0;
            right: 0;
            width: 34px;
            height: 32px;
            text-align: center;
            font-size: 18px;
            line-height: 32px;
        }
        .close:hover{
            background:#F85237;
        }
    }
    .chat-list{
        height: 350px;
        border-bottom: 1px solid #eee;
    }
    .chat-input{
        //height: 120px;
        .bars{
            height: 24px;
        }
        .text{
            padding-right: 2px;
            /deep/ textarea{
                border: 0;
                resize: none;
                font-size: 13px;
                color: #333;
                font-family: "微软雅黑";
            }
        }
        .chat-btns{
            margin-right: 8px;
            /deep/ button{
                float: right;
                margin: 8px;
                width: 80px;
                letter-spacing: 5px;
                font-size: 12px;
                color: #000;
                /deep/ span{
                    margin-right: -4px;
                }
            }
            .send{
                background: #23CBFE;
                color: #fff;
            }
        }
    }
}
</style>