import React, { Component } from "react";
//用于效验props的传递数据类型
import PropTypes from 'prop-types';
/**
    (<li key={index} dangerouslySetInnberHTML={{__html:item}}></li>)
*/
class TodoItem extends Component {

    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }
    render () {
        console.log("child ==> render");
         return <li  onClick={this.removeItem} style={this.props.style}>
             {this.props.text}/{this.props.index}
            </li>
    }
      //删除当前的某一行
    removeItem(){
        this.props.parentRemoveIten(this.props.index)
    }
    hahxixi(){
        console.log(this,"我是子组件哈哈哈");
    }

    // 这个生命周期执行的条件是
    // 1.当前这个组件接收了父组件传递的参数
    // 2.父组件的render函数重新执行了,这个生命周期才会执行
    // 3.一定要之前存在。才会执行
    UNSAFE_componentWillReceiveProps(){
        console.log("child ==> componentWillReceiveProps");
    }    

    // 在组件即将被挂载到页面的时刻执行  只在第一次挂载的时候执行
    UNSAFE_componentWillMount(){
        console.log("child ==> componentWillMount ==> 在组件即将被挂载到页面的时刻执行");
    }
    // 在组件挂载完成之后执行 只在第一次挂载的时候执行
    componentDidMount(){
        console.log("child ==> componentDidMount ==> 在组件挂载完成之后执行");
    }

    // 只有在组件被更新之前执行 需要返回一个bool true 更新 false 不更新
    // false 之后的生命周期函数将都不会执行
    // componentWillUpdate render componentDidUpdate 将不执行
    // 父组件被更新的时候子组件也会被更新
    //  有时候子组件不需要被更新但是也会被更新 这样会消耗没必要的性能
    // 通过此生命周期来判断是否需要更新 true 更新 false 不更新
    // 虽然react底层会有虚拟dom比对没有变化不会渲染真实的dom
    // 但是添加判断之后这样会节省虚拟dom比对的性能。体验更好
    shouldComponentUpdate(nextProps,nextState){
        console.log("child ==> shouldComponentUpdate ==> 组件被更新之前执行");
        if(nextProps.text !== this.props.text){
            return true;
        }else{
            return false;
        }
    }

    //在组件更新之前 shouldComponentUpdate执行之后 执行
    UNSAFE_componentWillUpdate(){
        console.log("child ==> componentWillUpdate ==> 在组件更新之前并且shouldComponentUpdate之后执行");
    }

    //组件更新完成之后执行 也就是render执行完成之后
    componentDidUpdate(){
        console.log("child ==> componentDidUpdate ==> 组件更新完成之后执行");
    }

     //在组件被移除的前一刻执行
     componentWillUnmount(){
        console.log("child ==> componentWillUnmount ==> 在组件被移除的前一刻执行");
    }
}

//设置Props 传递属性类型
//PropTypes.oneOfType 可以联合类型
// react 有点傻逼
TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    index:PropTypes.oneOfType([PropTypes.number,PropTypes.string]) ,
    parentRemoveIten:PropTypes.func
}

//设置Props 默认值
TodoItem.defalutProps ={
    test:'hellow React'
}

export default TodoItem;