import React, { Component, Fragment } from 'react';
/**
 * Fragment
 * react 的 return 只能有一个根节点 但是又不想有多个div包裹  使用 Fragment 来占位解决 最终并不渲染
 */
import TodoList from './TodoList/TodoList';
import RenderUl from './TodoList/RenderUl';
import NewTodoList from './newTodoList/newTodoList';
import Move from './TodoList/mouse';
import Cat from './TodoList/cat';
import Cat1 from './TodoList/cat1';
import PopContent1 from './TodoList/popContent.jsx';
import ContextDemo from './TodoList/contextDemo';
import FunContext  from './TodoList/funcContext';
//经过包裹的高阶组件
//在渲染组件之前包装一次 在渲染之前做什么处理 等等。。
import Hei1 from './TodoList/height1'; 

import Jd from './TodoList/Jd.jsx';
import Jd2 from './TodoList/Jd2.jsx';

import { ThemeContext} from './TodoList/context1s';

class App extends Component {

   
    constructor(props){
        super(props);

        this.state  ={
            dynamicCom: <Jd title="我是动态1"></Jd>
        }
    }

    // componentDidMount(){
    //     console.log(this);
    // }

    render () {
        return (
            <Fragment>
                <TodoList></TodoList>
                <div className="render-ul-content">
                    <RenderUl>
                        <div style={{ marginTop: '100px' }}>我跳出之外</div>
                    </RenderUl>
                </div>
                <div style={{ margin: '100px 0' }}>新的Todolist ------------------------------------ 我是分割线 嘻嘻</div>
                <section>
                    <NewTodoList></NewTodoList>
                </section>
                <section>
                    <Move render={mouse => ([<Cat mouse={mouse} />, <Cat1 mouse={mouse} />])}>

                        <p>我是直接传递的child</p>
                    </Move>
                </section>

                <div style={splitLine}>--------我是分割线- Render Props-----</div>
                {/* 
                    实现vue传递参数作用域插槽特性 
                    render传递数组是我自己想到的，但是有什么负作用暂未知
                    render传递数组可以实现多个带参数的作用域插槽
                */}
                <PopContent1 render={
                    (scope) => <p>{scope}</p>
                }
                    left={<p>我在按钮上面哈哈</p>}
                    right={<p>我在按钮下面哈哈</p>}
                />


                <div style={splitLine}>--------我是分割线- Context-----</div>
                {/* 
                    1. value的值最好是放到state里面不是写死然后在这里
                    2. 子组件需要修改注入的value可以在父级这样

                      1.1  定义好需要设置的逻辑
                        this.toggleTheme = () => {
                            this.setState(state => ({
                                theme:
                                state.theme === themes.dark
                                    ? themes.light
                                    : themes.dark,
                            }));
                        };

                     1.2   State 也包含了更新函数，因此它会被传递进 context provider。
                        this.state = {
                            theme: themes.light,
                            toggleTheme: this.toggleTheme,
                        };

                    1.3 ThemeContext.Provider value={this.state}

                 */}
                <ThemeContext.Provider value={{name:1,age:5}}>
                    <ContextDemo></ContextDemo>
                    <FunContext />
                </ThemeContext.Provider>



                <div style={splitLine}>---------高阶组件---------</div>


                <Hei1 />

                <div style={splitLine}>---------动态切换组件实验---------</div>

                    {this.state.dynamicCom}
                 <button onClick={this.switchDynamic}>切换组件喽</button>
            </Fragment>
        )
    }
    switchDynamic = () => {
        this.setState((是的)=>{
            console.log(是的);
            return {
                dynamicCom:<Jd2 title="我是动态2哈哈"></Jd2>
            }
        })
    }
}

const splitLine = {
    margin: "50px"
}

export default App;
