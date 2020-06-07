import {
    CHANGEINPUTVALUE,
    CHANGELISTREMOVE,
    CHANGELISTPUSH,
    INITLIST
} from './actionType';
const defaultStatus = {
    inputValue:"",
    list:[]
}


// reducer 可以接受state  但是绝对不能修改state
export default (state = defaultStatus, action)=>{
    console.log(state,action);
    if(action.type === "@@INIT"){
        console.log(state,action,"redux 初始化");
    }else{
          /**
             * 这里copy了一个新的state
             * 然后操作新的state之后再返回给store
             * 并不是直接操作的state
             */
        if(action.type === CHANGEINPUTVALUE){
            const newState  = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }

        if(action.type === CHANGELISTPUSH){
            const newState  = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            return newState;
        }

        if(action.type === CHANGELISTREMOVE){
            const newState  = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value,1);
            return newState;
        }

        if(action.type === INITLIST){
            const newState  = JSON.parse(JSON.stringify(state));
            newState.list = action.value;
            return newState;
        }
    }
    return state;
}