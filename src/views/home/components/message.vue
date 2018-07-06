<template>
    <div class="message-pane">
        <ul>
            <li v-for="(item, key) in list" :key="key" @dblclick="newChat(item)">
                <el-row>
                    <el-col :span="6">
                        <div class="avatar">
                            <img src="@/assets/images/defaultAvatar.png" width="40" height="40"/>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <el-row >
                            <el-col :span="19" class="nickname">
                                {{item.nickname}}
                            </el-col>
                            <el-col :span="5" class="time">
                                {{item.lastTime}}
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="20" class="last-msg">
                                {{item.lastMsg}}
                            </el-col>
                            <el-col v-if="item.unreadNum > 0" :span="3" class="t_r">
                                <div class="msg-tip">
                                    {{item.unreadNum}}
                                </div>
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
                            nickname: '知足常乐',
                            sign: '这是一个个性签名',
                            lastTime: '19:20',
                            lastMsg: '今天天气是不是真不错！',
                            unreadNum: 2
                        },
                        {
                            id:'0002',
                            avatar: "@/assets/images/defaultAvatar.png",
                            nickname: '德玛西亚',
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
.message-pane{
    ul{
        padding: 0;
        li{
            padding: 8px 0;
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
        .nickname{
            color: #333;
            font-size: 14px;
            line-height: 24px;
        }
        .time{
            color: #999;
            font-size: 12px;
            line-height: 24px;
        }
        .last-msg{
            color: #999;
            font-size: 12px;
        }
        .msg-tip{
            position: relative;
            top: -3px;
            display: inline-block;
            color: #fff;
            font-size: 12px;
            line-height: 13px;
            text-align: right;
            height: 14px;
            padding: 0 4px;
            border-radius: 7px;
            background: #FF0000;
        }
    }
}
</style>