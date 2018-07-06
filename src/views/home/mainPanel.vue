<template>
    <div class="main">
        <el-row class="header">
            <el-col :offset="21" :span="3" class="t_c close">
                <i class="el-icon-close"></i>
            </el-col>
        </el-row>
        <el-row class="userInfo">
            <el-col :span="6" class="t_r">
                <div class="avatar">
                    <img src="@/assets/images/defaultAvatar.png" width="48" height="48"/>
                </div>
            </el-col>
            <el-col :offset="1" :span="16">
                <el-row class="nickname">知足常乐</el-row>
                <el-row class="sign">顺其自然！随便随便！</el-row>
            </el-col>
        </el-row>
        <el-row :class="[isSearchFocus ? 'search-focus' : 'search']">
            <el-input 
                ref="search"
                placeholder="搜索"
                prefix-icon="el-icon-search"
                clearable
                size="mini"
                @focus="isSearchFocus = true"
                @blur="isSearchFocus = false"
                @clear="searchClear"
            >
            </el-input>
        </el-row>
        <el-row class="tabs">
            <el-tabs value="message">
                <el-tab-pane label="消息" name="message">
                    <message-pane></message-pane>
                </el-tab-pane>
                <el-tab-pane label="好友" name="friend">
                    <friend-pane></friend-pane>
                </el-tab-pane>
                <el-tab-pane label="群组" name="group">
                    <group-pane></group-pane>
                </el-tab-pane>
            </el-tabs>
        </el-row>


        <!-- <button @click="test">testtttt</button> -->
    </div>
</template>

<script>
import messagePane from './components/message'
import friendPane from './components/friend'
import groupPane from './components/group'
export default {
    data(){
        return {
            isSearchFocus: false
        }
    },
    created(){
        this.queryInfo();
    },
    components: {
        messagePane,
        friendPane,
        groupPane,
    },
    methods: {
        queryInfo() {
            this.$http.get("/api/userInfo").then(res => {
                console.log(res.data);
            });
        },
        searchFocus(){
            console.log("focus");
            this.isSearchFocus = true;
        },
        searchClear(){
            console.log("clear");
            this.isSearchFocus = false;
            setTimeout(() => {this.$refs.search.blur();},10)
            
        },
        test(){
            this.$refs.search.focus();
        }
    }
}

</script>

<style scoped lang="scss">
.main {
    position: absolute;
    top: 80px;
    right: 50px;
    width: 252px;
    height: 600px;
    border-radius: 7px;
    border: 2px solid #ddd;
    box-shadow: 0 0 5px #ddd;
    .header{
        height: 24px;
        background:  #23CBFE;
        border-radius: 5px 5px 0 0 ;
        .close{
            font-size: 18px;
            line-height: 24px;
            color: #fff;
            border-radius: 0 5px 0 0 ;
        }
        .close:hover{
            background:#F85237;
            color: #fff;
        }
    }
    .userInfo{
        padding-top: 10px;
        background: #23CBFE;
        height: 70px;
        .avatar{
            padding-right: 1px;
            img{
                border-radius: 50%;
            }
        }
        .nickname{
            color: #fff;
            font-size: 16px;
            line-height: 26px;
            font-weight: bold;
        }
        .sign{
            color: #fff;
            font-size: 12px;
            line-height: 18px;
        }
    }
    .search{
        /deep/ .el-input__icon{
            color: #fff;
            font-size: 14px;
        }
        /deep/ .el-input__inner{
            color: #fff;
            font-size: 12px;
            border: 0px;
            border-radius: 0;
            background: #4FD6FE;
        }
        /deep/ input::-webkit-input-placeholder{
            color:#fff;
        }
    }
    .search-focus{
        /deep/ .el-input__icon{
            color: #999;
            font-size: 14px;
        }
        /deep/ .el-input__inner{
            color: #333;
            border: 0px;
            border-radius: 0;
            background: #fff;
        }
        /deep/ input::-webkit-input-placeholder{
            color:#fff;
        }
    }
    .tabs{
        /deep/ .el-tabs__header{
            margin-bottom: 5px;
        }
        /deep/ .el-tabs__nav{
            width: 100%;
        }
        /deep/ .el-tabs__item {
            width: 33.333%;
            text-align: center;
            color: #999;
            user-select: none;
        }
        /deep/ .el-tabs__item.is-active{
            color: #4FD6FE;
        }
        /deep/ .el-tabs__active-bar{
            background-color: #4FD6FE;
        }
        /deep/ .el-tabs__nav-wrap::after{
            height: 1px;
            background-color: #eee;
        }
    }
    
}
</style>