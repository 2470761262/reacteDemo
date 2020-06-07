import React,{Component,Fragment} from 'react';
/**
 * Fragment
 * react 的 return 只能有一个根节点 但是又不想有多个div包裹  使用 Fragment 来占位解决 最终并不渲染
 */
import TodoList from './TodoList/TodoList';
import RenderUl from './TodoList/RenderUl';
import NewTodoList from './newTodoList/newTodoList';
class App extends Component {

    
    render(){
        return (
            <Fragment>
                 <TodoList></TodoList>
                 <div className="render-ul-content">
                     <RenderUl>
                        <div style={{marginTop:'100px'}}>我跳出之外</div>
                    </RenderUl>       
                 </div>
                <div style={{margin:'100px 0'}}>新的Todolist ------------------------------------ 我是分割线 嘻嘻</div>
                 <section>
                    <NewTodoList></NewTodoList>
                 </section>
            </Fragment>
        )
    }
}

export default App;
