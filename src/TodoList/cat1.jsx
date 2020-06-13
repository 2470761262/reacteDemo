
import React, { Component } from 'react';


class Cat extends Component {
    render() {
      const mouse = this.props.mouse;
      return (
          <div>
              我是1renderProps{mouse.x + ":" + mouse.y}
          </div>
      );
    }
  }

  export default Cat;