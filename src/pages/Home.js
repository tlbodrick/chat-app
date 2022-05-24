import Sidebar from '../components/Sidebar'
import SidebarHidden from '../components/SidebarHidden'
import Chat from '../components/Chat'



function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <SidebarHidden />
            <Chat />
        </div>
    )
}

export default Home
