import React, { Component, } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
class TodoList extends Component {

    constructor(props) {
        super(props);

        // 给inputChange重新设置this指向

        this.inputChange = this.inputChange.bind(this);

        this.inputCheckSubmit = this.inputCheckSubmit.bind(this);

        this.removeItem = this.removeItem.bind(this);

        this.callback = this.callback.bind(this);

        this.myRef = React.createRef();
        //state就是vue 的data里的数据
        this.state = {
            inputValue: "",
            list: ['谢谢你']
        }
    }
    // 这个生命周期执行的条件是
    // 1.当前这个组件接收了父组件传递的参数
    // 2.父组件的render函数重新执行了,这个生命周期才会执行
    // 3.一定要之前存在。才会执行
    UNSAFE_componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }    

    // 在组件即将被挂载到页面的时刻执行  只在第一次挂载的时候执行
    UNSAFE_componentWillMount(){
        console.log("componentWillMount ==> 在组件即将被挂载到页面的时刻执行");
    }
    // 在组件挂载完成之后执行 只在第一次挂载的时候执行
    // ajax请求都放在这里
    componentDidMount(){
        console.log(this.TodoItemDom,"this.TodoItemDom");
        console.log(this.myRef,"myRef");
        console.log("componentDidMount ==> 在组件挂载完成之后执行");
        
        axios.get("http://localhost:3000/").then((e)=>{

            console.log("接口请求成功",e);

            this.setState(()=>{
                return {
                    list:['我是mocks数据','嘻嘻','哈哈']
                }
            })
             
        }).catch(()=>{
            console.log("接口请求失败");
        })
    }

    // 只有在组件被更新之前执行 需要返回一个bool true 更新 false 不更新
    // false 之后的生命周期函数将都不会执行
    // componentWillUpdate render componentDidUpdate 将不执行
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate ==> 组件被更新之前执行");
        return true;
    }

    //在组件更新之前 shouldComponentUpdate执行之后 执行
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate ==> 在组件更新之前并且shouldComponentUpdate之后执行");
    }

    render (h) {
        console.log("render");
        return <section>
            <input
                type="text"
                placeholder="来给劳资输入点阳间的东西"
                value={this.state.inputValue}
                onChange={this.inputChange}
                ref={(e)=>{ this.inputDom = e}}
            />
            <button onClick={this.inputCheckSubmit}>提交</button>
            <ul>
                {
                    this.getTodiItem()
                }
            </ul>
        </section>

    }

    //组件更新完成之后执行 也就是render执行完成之后
    componentDidUpdate(){
        console.log("componentDidUpdate ==> 组件更新完成之后执行");
    }

    //在组件被移除的前一刻执行
    componentWillUnmount(){
        console.log("componentWillUnmount ==> 在组件被移除的前一刻执行");
    }


    // input输入变化的监听事件
    inputChange (e) {

        //使用setState修改state里的数据
        const value = e.target.value;

        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }

    // 确定提交当前的input内容
    inputCheckSubmit () {

         //使用ref来获取dom

         console.log(this.inputDom,"this.inputDom");

         //不能像Vue可以把ref挂载组件上获取组件实例，react 获得的是undefined
 
         console.log(this.TodoItemDom,"this.TodoItemDom");
         this.TodoItemDom.hahxixi();

        //prevState代表修改数据之前的数据是怎么样的
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        },()=>{
            console.log('这里是setState的回调,代表页面已经更新完毕');
        })

    }

    // 删除当前的某一行
    removeItem (index) {
       
        //prevState代表修改数据之前的数据是怎么样的
        this.setState((prevState) => {

            let list = [...prevState.list]; //如果里面的内容都是基础类型 可以用展开来实现copy
            
            list.splice(index, 1)

            return {
                list
            }
        })
    }


    callback (fun, ...arg) {
        return fun.bind(this, ...arg);
    }


    //拆分代码 让代码更简单
    getTodiItem () {
        //如果属性很多可以都写在一起然后在展开传递
        const unfoldTransmit = {
            xixi: 1,
            gogo: 3
        }
        /**
        * 传递的属性值可以随便取。
        * 然后子组件通过props获取属性值
        */
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    style={{height:"50px",border:'1px solid red'}}
                    {...unfoldTransmit}
                    text={item}
                    index={index}
                    key={index}
                    parentRemoveIten={this.removeItem}
                    ref={(e)=> this.TodoItemDom = e}
                ></TodoItem>)
        })
    }
    
}

export default TodoList;