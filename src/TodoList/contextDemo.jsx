import React,{Component}  from 'react';
import { ThemeContext} from './context1s';
class ContextDemo extends Component {
    static contextType = ThemeContext;
    render(){
        return <div>
         我是注入进来的： name  {this.context.name} <br/>
         我是注入进来的： age  {this.context.age} 
        </div> 
    }
}
//ContextDemo.contextType = ThemeContext;

export default ContextDemo;