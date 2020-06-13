import React, { Component ,Fragment } from 'react';

class PopContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            flag:false,
            text:"我是一串文本是通过render Props 传递出来的"
        }
    }
    render () {
        return this.switchContent();
    }

    handleSwitch = () =>{
        this.setState((prevState)=>{
            return {
                flag:!prevState.flag
            }
        })
    }

    switchContent(){
        const { flag,text } = this.state;
        const { render,left,right }  = this.props;
        return(
            //需要一个根
            <Fragment>
                {
                    flag ? <div style={PopContentStyle}>
                        {render(text)}
                    </div> : null
                }
               {left} <button onClick={ this.handleSwitch}>开关显示弹框</button> {right}
            </Fragment>
        )
    }

    
}

const PopContentStyle = {
    position: "absolute",
    width: "300px",
    height:"300px",
    top: "50%",
    left: "50%",
    background: "red"
}

export default PopContent;