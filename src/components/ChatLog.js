import Message from './Message'
import { useState, useContext, useEffect } from 'react'
import { Context } from '../ChannelContext'
import { db } from '../firebase.config'
import { query, doc, onSnapshot, orderBy, collection } from '@firebase/firestore'


function ChatLog() {
    const [messages, setMessages] = useState([])
    const { channelId } = useContext(Context)

    useEffect(() => {
        if (channelId) {
            const q = query(collection(db, "channels", channelId, "messages"), orderBy('timestamp', 'asc'))

            const unsub = onSnapshot(q, (snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }

    }, [channelId])

    return (
        <div className="flex-1">
            {messages.map(msg => (
                <Message timestamp={msg.timestamp} message={msg.message} user={msg.user} />
            ))}
        </div>
    )
}

export default ChatLog
