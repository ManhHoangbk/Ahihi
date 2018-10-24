
import { handleRequest } from './api-request';
const url_base = 'http://localhost:3001/';

export const getAllUsers = () => {
    const api = {
        method: 'get',
        url: url_base + 'get-all-users'
    }
    console.log('api: ', api)
    return (dispatch) =>
        handleRequest(api, (err, datas) => {
            console.log('datas: ', datas)
            console.log('err: ', err)
            if (err) {
                return dispatch({ type: 'GET_ALL_USER', userInfos: [], })
            }
            
            return dispatch({ type: 'GET_ALL_USER', userInfos: datas, })
        })

}