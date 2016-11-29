import React from 'react'
import Channel from './Channel'

class ChannelList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>{
                this.props.channels.map( chan =>{
                    return <Channel
                        channel={chan}
                        key={chan.id}
                        {...this.props}
                    />
                })
            }</ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
};

export default ChannelList