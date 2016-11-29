import React from 'react'
import Message from './Message'

class MessageList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>{
                this.props.messages.map( message =>{
                    return <Message
                        message={message}
                        key={message.id}
                        {...this.props}
                    />
                })
            }</ul>
        )
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
};

export default MessageList