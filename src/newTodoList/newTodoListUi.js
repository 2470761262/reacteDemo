import React from 'react';
import { Input,Button,List} from 'antd';

// class newTodoListUi extends Component{
//     render (){
//         return <div>
//         <Input placeholder="我是antd" value={this.props.inputValue} style={{width:"300px"}} onChange={this.props.handleInputChange}/>
//         <Button type="primary" onClick={this.props.handlePushList}>提交</Button>
        
//         <List
//             size="large"
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => <List.Item onClick={()=> {this.props.handleRemoveItem(index)}  }>{item}</List.Item>}
//             />
//     </div>
//     }
// }

// 如果一个组件只需要存在render函数 没有被的什么逻辑
// 是可以以下方式来创建组件 为无状态组件 币class创建组件性能更优
// 一般简单的返回jsx 或者 ui 组件 就可以直接这样使用 会接收父组件传递的props
const  newTodoListUi  =  (props)=>{
    return <div>
        <Input placeholder="我是antd" value={props.inputValue} style={{width:"300px"}} onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handlePushList}>提交</Button>
        <List
            size="large"
            bordered
            dataSource={props.list}
            renderItem={(item,index) => <List.Item onClick={()=> {props.handleRemoveItem(index)}  }>{item}</List.Item>}
            />
    </div>
}

export default newTodoListUi;