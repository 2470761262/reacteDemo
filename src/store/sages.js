/**
 * 需要把异步放在redux里的异步代码
 * sage统一管理异步请求的一个文件
 */

 import { takeEvery,put } from 'redux-saga/effects';
 import { initList } from './actionCreates';
 import { GETINITLIST} from './actionType';
 import axios from 'axios';


/**
 * sage有点绕。
 *
 * 首先在newTodoList里调用的actions ==》 getTodoListSage
 * 这样sage会在store/index 里中间件.run()此文件会takeEvery第一个参数的type 需要和第一步的actions同一样
 * 就会执行getInitList
 * 然后在用put执行对应的action
 * put相当于dispatch
 */


 function* getInitList(){
    const res = yield axios.get("http://localhost:3000/");
    console.log(res);
    const action = initList(["我是sage","sage1","sage2",res.status]);
    yield put(action);
 }
function* mysage(){
    yield takeEvery(GETINITLIST,getInitList);
}

export default mysage