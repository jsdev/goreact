import React from 'react'
import ChannelForm from './MessageForm'
import ChannelList from './MessageList'

class ChannelSection extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    addMessage: React.PropTypes.func.isRequired
};

export default ChannelSection