<template>
    <div class="group-pane">
        <ul>
            <li v-for="(item, key) in list" :key="key" @dblclick="newChat(item)">
                <el-row>
                    <el-col :span="6">
                        <div class="avatar">
                            <img src="@/assets/images/defaultAvatar.png" width="32" height="32"/>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <el-row >
                            <el-col :span="19" class="groupName">
                                {{item.groupName}}
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            list:{
                type: Array,
                default: () =>{
                    return [
                        {
                            id: '0001',
                            avatar: "@/assets/images/defaultAvatar.png",
                            groupName: '诺克萨斯联盟',
                            sign: '这是一个个性签名',
                            lastTime: '19:20',
                            lastMsg: '今天天气是不是真不错！',
                            unreadNum: 2
                        },
                        {
                            id:'0002',
                            avatar: "@/assets/images/defaultAvatar.png",
                            groupName: '德玛西亚联盟',
                            sign: '不错的天气，不错的你我',
                            lastTime: '13:23',
                            lastMsg: '德玛西亚万岁！',
                            unreadNum: 5
                        },
                    ]
                }
            }
        },
        methods: {
            newChat(info){
                //TODO 调用父级公共方法，发起聊天，info 为对方信息
                console.log("发起聊天啦");
                console.log("对方ID为："+info.id+"\n对方昵称为:"+info.nickname+"\n对方个性签名为:"+info.sign);
            }
        }
    }
</script>
<style scoped lang="scss">
.group-pane{
    ul{
        margin-top: 4px;
        padding: 0;
        li{
            padding: 4px 0;
            user-select: none;
            -webkit-user-select: none;
        }
        li:hover{
            background: #F6F6F6;
            
        }
        .avatar{
            padding-right: 1px;
            text-align: center;
            border-radius: 50%;
            img{
                border-radius: 50%;
            }
        }
        .groupName{
            color: #333;
            font-size: 14px;
            line-height: 32px;
        }
    }
}
</style>