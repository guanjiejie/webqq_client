
/*
    mock数据
*/
var Mock = require('mockjs')

var jsonData = [{
    url: '/login',
    data: Mock.mock({
        success: true,
        message: 'login success'
    })
},
{
    url: '/userInfo',
    data: Mock.mock({
        name: 'jack',
        age: '12',
        //author: 1,
        success: true,
        message: 'author refuse'
    })
}
]

module.exports = jsonData;