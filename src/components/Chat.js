import ChatHeader from './ChatHeader'
import ChatLog from './ChatLog'
import MessageInput from './MessageInput'

function Chat() {
    return (
        <div className="flex flex-col w-full bg-customgray h-screen">
            <ChatHeader />
            <ChatLog />
            <MessageInput />
        </div>
    )
}

export default Chat
