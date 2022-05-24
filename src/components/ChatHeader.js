import { useContext } from 'react'
import { Context } from '../SidebarContext'
import MenuIcon from '@mui/icons-material/Menu';

function ChatHeader() {
    const { onClick } = useContext(Context)

    return (
        <div className="drop-shadow uppercase py-3.5 px-16 text-lg font-bold flex items-center">
            <button
                className="pr-4 hamburger"
                onClick={onClick}>
                <MenuIcon />
            </button>
            <p>Front-End Developers</p>
        </div>
    )
}

export default ChatHeader
