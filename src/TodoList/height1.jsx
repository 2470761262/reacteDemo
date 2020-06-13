
import React from 'react';
import heightCom from './heightCom';


const hei1 = heightCom("我是高级组件1",(props)=>{
    return (
        <div>{props.title}</div>
    )
});

export default hei1;