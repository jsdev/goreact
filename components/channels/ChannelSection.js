import React from 'react'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

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
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
};

export default ChannelSection