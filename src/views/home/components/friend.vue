<template>
    <div class="friend-pane">
        <ul class="group-list">
            <!-- 分组列表 -->
            <li v-for="(group, key) in groupList" :key="key">
                <el-row class="group-name"  @click.native="switchGroup(key)">
                    <el-col :span="3" class="t_c">
                        <i class="el-icon-arrow-right" v-if="!group.isOpen"></i>
                        <i class="el-icon-arrow-up" v-else></i>
                    </el-col>
                    <el-col :span="20">
                        {{group.name}}
                    </el-col>
                </el-row>
                <ul class="member-list" v-if="group.isOpen">
                    <!-- 组内好友 -->
                    <li v-for="(item, key) in list" :key="key" @dblclick="newChat(item)">
                        <!-- TODO 好友分组 -->
                        <el-row @click="test()">
                            <el-col :span="6">
                                <div class="avatar">
                                    <img src="@/assets/images/defaultAvatar.png" width="40" height="40" />
                                </div>
                            </el-col>
                            <el-col :span="18">
                                <el-row>
                                    <el-col :span="23" class="nickname">
                                        {{item.nickname}}
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="20" class="sign">
                                        {{item.sign}}
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            groupList: [
                {
                    name: "我的好友",
                    isOpen: false
                },
                {
                    name: "好友分组",
                    isOpen: false
                }
            ]
        };
    },
    props: {
        list: {
            type: Array,
            default: () => {
                return [
                    {
                        id: "0001",
                        avatar: "@/assets/images/defaultAvatar.png",
                        nickname: "知足常乐",
                        sign: "这是一个个性签名",
                        lastTime: "19:20",
                        lastMsg: "今天天气是不是真不错！",
                        unreadNum: 2
                    },
                    {
                        id: "0002",
                        avatar: "@/assets/images/defaultAvatar.png",
                        nickname: "德玛西亚",
                        sign: "不错的天气，不错的你我",
                        lastTime: "13:23",
                        lastMsg: "德玛西亚万岁！",
                        unreadNum: 5
                    }
                ];
            }
        }
    },
    methods: {
        newChat(info) {
            //TODO 调用父级公共方法，发起聊天，info 为对方信息
            console.log("发起聊天啦");
            console.log(
                "对方ID为：" +
                    info.id +
                    "\n对方昵称为:" +
                    info.nickname +
                    "\n对方个性签名为:" +
                    info.sign
            );
        },
        switchGroup(key) {
            console.log("key: "+ key);
            if (
                typeof this.groupList[key].isOpen == "undefined" ||
                !this.groupList[key].isOpen
            ) {
                this.groupList[key].isOpen = true;
            } else {
                this.groupList[key].isOpen = false;
            }
        },
        test(){
            console.log("2222");
        }
    }
};
</script>
<style scoped lang="scss">
.friend-pane {
    ul.group-list {
        padding: 0;
        .group-name{
            font-size: 14px;
            line-height: 30px;
            user-select: none;
            -webkit-user-select: none;
        }
        ul.member-list {
            padding: 0;
            li {
                padding: 8px 0;
                user-select: none;
                -webkit-user-select: none;
            }
            li:hover {
                background: #f6f6f6;
            }
            .avatar {
                padding-right: 1px;
                text-align: center;
                border-radius: 50%;
                img {
                    border-radius: 50%;
                }
            }
            .nickname {
                color: #333;
                font-size: 14px;
                line-height: 24px;
            }
            .sign {
                color: #999;
                font-size: 12px;
            }
        }
    }
}
</style>