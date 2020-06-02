import React,{Component,} from 'react';


class TodoList extends Component{

    constructor(props){
        super(props);

        //给inputChange重新设置this指向

        this.inputChange = this.inputChange.bind(this);

        this.inputCheckSubmit = this.inputCheckSubmit.bind(this);

        this.removeItem = this.removeItem.bind(this);


        this.callback = this.callback.bind(this);
        //state就是vue 的data里的数据
        this.state = {
            inputValue:"",
            list:[]
        }
    }

    //input输入变化的监听事件
    inputChange(e){
        //使用setState修改state里的数据
        this.setState({
            inputValue: e.target.value
        })
    }

    //确定提交当前的input内容
    inputCheckSubmit(){
       // const {list,InputValue} = this.state;

        this.setState({
            list:[...this.state.list,this.state.inputValue],
            //inputValue:""
        })

        console.log(this.state);
    }

    //删除当前的某一行
    removeItem(item,index,$event){

        let list = [...this.state.list] ; //如果里面的内容都是基础类型 可以用展开来实现copy
        
        this.setState({
            list:list.splice(1,index)
        })
    }


    callback(fun,...arg){
       return fun.bind(this,...arg);
    }

    render(h) {
        return <section>
                <input 
                type="text" 
                placeholder="来给劳资输入点阳间的东西"
                value={this.state.inputValue}
                onChange={this.inputChange}
                />
                <button onClick={ this.inputCheckSubmit}>提交</button>
                <ul>
                    {
                        /**
                         * onClick={this.callback(this.removeItem,item,index)}
                         * 发现可以使用闭包来简单化每个方法来绑定this 暂未知道这样有什么后果
                         */
                        this.state.list.map((item,index) =>{
                              return  (
                            <li key={index} 
                               onClick={(e)=> this.removeItem(item,index,e) } >
                                {item}
                             </li>)
                        })
                    }
                </ul>
            </section>
       
    }
}

export default TodoList;