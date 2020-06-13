import React, { Component } from 'react';

const heightCom = (title, View) => {

    class heightCompoent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                flag: false,
                delay: 3000
            }


            setTimeout(() => {

                this.setState((pervState) => {
                    return {
                        flag: !pervState.flag
                    }
                })

            }, this.state.delay)
        }

        render () {
            return (
                this.state.flag ? <View title={title}/> : 'loading...'
            )
        }
    }

    return heightCompoent;
}

export default heightCom;

