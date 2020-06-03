import React, { Component, } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);

        //给inputChange重新设置this指向

        this.inputChange = this.inputChange.bind(this);

        this.inputCheckSubmit = this.inputCheckSubmit.bind(this);

        this.removeItem = this.removeItem.bind(this);

        this.callback = this.callback.bind(this);
        //state就是vue 的data里的数据
        this.state = {
            inputValue: "",
            list: []
        }
    }

    //input输入变化的监听事件
    inputChange (e) {
        //使用setState修改state里的数据
        const value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }

    //确定提交当前的input内容
    inputCheckSubmit () {
        //prevState代表修改数据之前的数据是怎么样的
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })

    }

    //删除当前的某一行
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
                    {...unfoldTransmit}
                    text={item}
                    index={index}
                    key={index}
                    parentRemoveIten={this.removeItem}
                ></TodoItem>)
        })
    }

    render (h) {
        return <section>
            <input
                type="text"
                placeholder="来给劳资输入点阳间的东西"
                value={this.state.inputValue}
                onChange={this.inputChange}
            />
            <button onClick={this.inputCheckSubmit}>提交</button>
            <ul>
                {
                    this.getTodiItem()
                }
            </ul>
        </section>

    }
}

export default TodoList;