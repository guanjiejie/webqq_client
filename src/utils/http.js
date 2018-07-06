
import Vue from 'vue'
import axios from 'axios'
import { toast } from '@/components/toast'
import { Loading } from 'element-ui'

import store from '@/store'
import router from '@/router'

import { local } from '@/utils/index'


axios.defaults.timeout = 30000;

axios.interceptors.request.use(function(config){

    return config;
}, function(error){

});
axios.interceptors.response.use(function(response){
    if(!response.data.success){
        toast({
            iconClass: 'el-icon-error',
            tips: response.data.message
        })
    }else{
        if(response.data.author && response.data.author == '1'){  //1为无权限，
            router.push({name: 'Login'});
        }
    }

    return response;
}, function(error){
    return Promise.reject(error);
});

export const $http = axios;

export default {
    install: function(vm){
        vm.prototype.$http = axios;
    }
}
