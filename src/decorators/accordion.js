import React, {Component} from 'react';

export default ComponentWrapper => class Accordion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            openItemId: props.defaultOpenId
        }
    }

    toggleOpenItem = (openItemId) => ev => {
        this.setState({ 
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });
    }

    render(){
        return <ComponentWrapper
            {...this.props} 
            {...this.state} 
            toggleOpenItem = {this.toggleOpenItem} 
            openItemId = {this.state.openItemId}
        />
    }
}