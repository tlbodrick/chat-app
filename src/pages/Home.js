import Sidebar from '../components/Sidebar'
import SidebarHidden from '../components/SidebarHidden'
import Chat from '../components/Chat'
import { useContext } from 'react'
import { Context } from '../SidebarContext'



function Home() {
    const { showSidebar } = useContext(Context)

    return (
        <div className="flex">
            <Sidebar />
            <SidebarHidden />
            <Chat />
        </div>
    )
}

export default Home
