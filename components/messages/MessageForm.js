import React from 'react'

class MessageForm extends React.Component{
    constructor(props){
        super(props);
    }
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.message;
        const messageName = node.value;
        this.props.addMessage(messageName);
        node.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input
                        className='form-control messages'
                        placeholder='Add Message'
                        type='text'
                        ref='message'
                    />
                </div>

            </form>
        )
    }
}

MessageForm.propTypes = {
    addMessage: React.PropTypes.func.isRequired
};

export default MessageForm