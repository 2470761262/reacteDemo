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
         return <li  onClick={this.removeItem}>
             {this.props.text}/{this.props.index}
            </li>
    }
      //删除当前的某一行
    removeItem(){
        this.props.parentRemoveIten(this.props.index)
    }
}

//设置Props 传递属性类型
//PropTypes.arrayOf 可以联合类型
// react 有点傻逼
TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    index:PropTypes.arrayOf(PropTypes.number,PropTypes.string) ,
    parentRemoveIten:PropTypes.func
}

//设置Props 默认值
TodoItem.defalutProps ={
    test:'hellow React'
}

export default TodoItem;