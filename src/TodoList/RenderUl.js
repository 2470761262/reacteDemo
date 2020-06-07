import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class RenderUl extends Component {
    render(){
    //    return  <div>
    //        我是RednerUl  ~~
    //           <div> {this.props.children}</div>
    //     </div>
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
        <div>{this.props.children} 嘻嘻</div> ,
            // A DOM element
            document.body,
          );
    }
}

export default RenderUl;