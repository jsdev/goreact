import React from 'react'
import ChannelSection from './channels/ChannelSection'
import UserSection from './users/UserSection'
import MessageSection from './messages/MessageSection'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            messages: [],
            users: [],
            activeUser: {},
            activeChannel: {},
            connected: false
        };
    }
    componentDidMount(){
        let ws = new WebSocket('ws://echo.websocket.org');
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
    }
    message(e){

    }
    open(){
        this.setState({connected: true});
    }
    close(){
        this.setState({connected: false});
    }
    addChannel(name){
        let {channels} = this.state;
        channels.push({ id: channels.length, name });
        this.setState({channels});
    }
    setChannel(activeChannel){
        this.setState({activeChannel});
    }
    addUser(name){
        let {users} = this.state;
        users.push({ id: users.length, name });
        this.setState({users});
    }
    setUser(activeUser){
        this.setState({activeUser});
    }
    addMessage(message){
        let {messages, users} = this.state,
            createdAt = new Date,
            author = users.length > 0 ? users[0].name: 'anonymous';
        messages.push({ id: messages.length, message, createdAt, author });
        this.setState({messages});
    }
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection
                        {...this.state}
                        addUser={this.addUser.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                </div>
                <MessageSection
                    {...this.state}/>
                    addMessage={this.addMessage.bind(this)}
            </div>
            )
    }
}

export default App

