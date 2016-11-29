import React from 'react'
import User from './User'

class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>{
                this.props.users.map( chan =>{
                    return <User
                        user={chan}
                        key={chan.id}
                        {...this.props}
                    />
                })
            }</ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired,
    setUser: React.PropTypes.func.isRequired,
    activeUser: React.PropTypes.object.isRequired
};

export default UserList