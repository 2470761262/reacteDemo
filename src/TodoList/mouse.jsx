
import React, { Component } from 'react';



class Move extends Component {

    constructor(props){

        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state  = {
            x:0,
            y:0
        }

    }
    handleMouseMove(e){
        e.persist();
        this.setState(()=>{
            return {
                x: e.clientX,
                y: e.clientY
            }
        })
    }
    render () {

        const { render } = this.props;
        const renderList = render(this.state)
        return (<div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

            <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
             {/* {render(this.state)} 官网的第一种直接传递一个render组件 */}
            {renderList[0]}
            <div>11</div>
            {renderList[1]}
            {this.props.children}
            </div>
        )
    }
}

export default Move;