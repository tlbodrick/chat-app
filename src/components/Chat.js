import ChatHeader from './ChatHeader'
import ChatLog from './ChatLog'
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react'
import { Context } from '../ChannelContext'
import { db } from '../firebase.config'
import { serverTimestamp, collection, addDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


function Chat() {
    const [input, setInput] = useState('')

    const { channelId, channelName } = useContext(Context)

    const auth = getAuth()
    const currentUser = auth.currentUser

    const sender = {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        id: currentUser.uid
    }

    const sendMessage = async (e) => {
        e.preventDefault()

        try {
            const docRef = doc(db, "channels", channelId)
            const colRef = collection(docRef, "messages")

            await addDoc(colRef, {
                timestamp: serverTimestamp(),
                message: input,
                user: sender,
            })

            setInput('')
        } catch (error) {
            console.log(error)
        }



    }


    return (
        <div className="flex flex-col w-full bg-customgray h-screen">
            <ChatHeader />
            <ChatLog />

            <form onSubmit={sendMessage} className="flex space-between pl-4 rounded-lg bg-customgraymed mx-10 mb-10">
                <input
                    className="w-full bg-customgraymed"
                    type="text"
                    id="message"
                    value={input}
                    disabled={!channelId}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <button className="p-3 bg-blue-500 rounded-lg m-1.5 flex items-center" onClick={sendMessage}><SendIcon style={{ fontSize: 18 }} /></button>
            </form>
        </div>
    )
}

export default Chat
