
export const local = {
    set(key, value){
        window.localStorage[key] = value;
    },
    get(key, defaultValue){
        return window.localStorage[key] || defaultValue;
    },
    setObject(key, value){
        window.localStorage[key] = JSON.stringify(value);
    },
    getObject(key){
        return JSON.parse(window.localStorage[key] || {});
    },
    remove(key){
        window.localStorage.removeItem(key);
    },
    removeAll(){
        window.localStorage.clear();
    }
}

export const utils ={
    copy(data){
        return JSON.parse(JSON.stringify(data));
    },
    DATE(date , fmt){
        if(!date){ return ''}
        var date = new Date(date*1);
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
            }
        }
        return fmt;
    },
}

export default {
    install: function(vm){
        vm.prototype.$local = local;
        vm.prototype.$utils = utils;
    }
}