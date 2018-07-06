
import Mock from 'mockjs'

Mock.mock('api/login', {
    'success': true,
    'message': 'login success'
})

export default Mock;