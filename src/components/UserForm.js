import React from 'react';

class UserForm extends React.Component {
    state = {
        username: ''
    }

    render(){
       return(
           <div>
               Name: <input type = 'text' value = {this.state.username} onChange = {this.handleUserChange} />
           </div>
       ) 
    }

    handleUserChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm