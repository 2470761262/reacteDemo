import React,{Component} from 'react';
import 'antd/dist/antd.css';
// 引入redux 状态管理
import store from '../store/index';
//统一创建action
import {changeInputValue,changeListRemove,changeListPush,initList} from '../store/actionCreates';
//创建ui组件 主要负责 渲染页面
import NewTodoListUi from './newTodoListUi';
//映入axios
import axios from 'axios';

class NewTodoList  extends Component {
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handlePushList = this.handlePushList.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);

        this.state = store.getState();
        //当store发生变化的时候将会触发此方法
        store.subscribe(this.handleStoreChange);
    }
     // ajax请求可以都放在这里 
     componentDidMount(){
         //直接给的话会修改到store的里面的数据 
        // const arr = [...this.state.data];
        // arr[0] = 77777;
        // this.setState({
        //     data:[...arr]
        // })

        axios.get("http://localhost:3000/").then((e)=>{

            store.dispatch(initList(['我是mocks数据','嘻嘻','哈哈']))
            
       }).catch((e)=>{
           console.log(e);
       })
     }
     handleStoreChange(e){
        console.log("handleStoreChange---handleStoreChange",e);
        this.setState(()=>{
            // return{
            //     data:store.getState().list
            // }  
            return  store.getState()
        })
     }
     handleRemoveItem(index){
         console.log("我是删除");
         store.dispatch( changeListRemove(index));
     }

     handlePushList(){
         store.dispatch(changeListPush());
     }
     handleInputChange(e){
         
        //需要传递给store的参数
        store.dispatch(changeInputValue(e.target.value));
     }



     // 把组件拆分
     // render里的渲染部分全部拆出去作为一个子组件 只负责渲染
     // 而父组件管理数据的处理
    render(){
        return <NewTodoListUi 
        list={this.state.list}
        inputValue={this.state.inputValue}
        handlePushList={this.handlePushList}
        handleRemoveItem={this.handleRemoveItem}
        handleInputChange={this.handleInputChange}
                 />
    }
}

export default NewTodoList;
