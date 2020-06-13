import React from 'react';
import { ThemeContext} from './context1s';

export default function funContext (){
    //如果是函数式组件需要使用
    //Consumer来链接自己才能获取到注入的数据
    return (

        <ThemeContext.Consumer>
        {value => <div> {value.name} - {value.age} </div> }
        </ThemeContext.Consumer>
           
    )
}


