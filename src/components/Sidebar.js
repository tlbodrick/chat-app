import SearchIcon from '@mui/icons-material/Search';
import User from './User'
import SidebarChannel from './SidebarChannel'
import { useState, useEffect } from 'react'
import { db } from '../firebase.config.js'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'

function Sidebar() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'channels'), (snapshot) => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))

    }, [])

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name')

        if (channelName) {
            addDoc(collection(db, 'channels'), {
                channelName
            })
        }
    }

    return (
        <div className="Sidebar bg-customblack h-screen w-1/4 flex flex-col">

            <div className="flex items-center justify-between py-3.5 drop-shadow px-8">
                <p className="text-lg">Channels</p>
                <button
                    className="bg-customgray px-2 rounded text-xl"
                    onClick={handleAddChannel}
                >+</button>
            </div>

            {channels.map(({ id, channel }) => (
                <SidebarChannel key={id} id={id} channelName={channel.channelName} firstLetter={channel.channelName.charAt(0)} />
            ))}
            <User />
        </div>
    )
}

export default Sidebar
