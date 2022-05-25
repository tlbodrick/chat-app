import Sidebar from '../components/Sidebar'
import SidebarHidden from '../components/SidebarHidden'
import Chat from '../components/Chat'
import { getAuth } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { Context } from '../PhotoContext'



function Home() {

    const auth = getAuth()

    const { setPhotoUrl, photoUrl } = useContext(Context)

    useEffect(() => {
        if (auth.currentUser && auth.currentUser.photoURL) {
            setPhotoUrl(auth.currentUser.photoURL)
            console.log('set photo')
        }
    }, [photoUrl, auth.currentUser])

    return (
        <div className="flex">
            <Sidebar />
            <SidebarHidden />
            <Chat />
        </div>
    )
}

export default Home
