import {
    CHANGEINPUTVALUE,
    CHANGELISTREMOVE,
    CHANGELISTPUSH,
    INITLIST,
    GETINITLIST
} from './actionType';
import axios from 'axios';

export const changeInputValue = (value)=>{
    return {
        type:CHANGEINPUTVALUE,
        value
    }
}

export const changeListRemove = (value)=>{
    return {
        type:CHANGELISTREMOVE,
        value
    }
}

export const changeListPush = (value)=>{
    return {
        type:CHANGELISTPUSH,
        value
    }
}

export const initList = (value) => {
    return {
        type:INITLIST,
        value:value
    }
}

// 使用redux-thunk 之后
// 将可以返回一个函数,可以将异步的ajax代码写在这里
// 并且返回的函数接收一个dispatch
export const getTodoList  = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/").then((e)=>{

           dispatch(initList(['我是mocks数据thunk','嘻嘻thunk','哈哈thunk','我是thunk']))
       }).catch((e)=>{
           console.log(e);
       })
    }
}

export const getTodoListSage = () => {
    return {
        type:GETINITLIST
    }
}