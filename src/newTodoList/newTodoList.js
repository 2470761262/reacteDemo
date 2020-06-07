import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index';
import { 
    changeInputValue, 
    changeListRemove, 
    changeListPush,
    getTodoList
} from '../store/actionCreates';
import NewTodoListUi from './newTodoListUi';


class NewTodoList extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handlePushList = this.handlePushList.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);

        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange (e) {
        this.setState(store.getState())
    }

    handleRemoveItem (index) {
        store.dispatch(changeListRemove(index));
    }

    handlePushList () {
        store.dispatch(changeListPush());
    }

    handleInputChange (e) {
        store.dispatch(changeInputValue(e.target.value));
    }

    componentDidMount(){
        store.dispatch(getTodoList());
    }

    render () {
        return <NewTodoListUi
            list={this.state.list}
            inputValue={this.state.inputValue}
            handlePushList={this.handlePushList}
            handleRemoveItem={this.handleRemoveItem}
            handleInputChange={this.handleInputChange}
        />
    }
}

export default NewTodoList;
