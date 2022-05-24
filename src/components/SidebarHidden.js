import SearchIcon from '@mui/icons-material/Search';
import User from './User'
import SidebarChannel from './SidebarChannel'
import { useContext } from 'react'
import { Context } from '../SidebarContext'

function SidebarHidden() {
    const { showSidebar, onClick } = useContext(Context)


    return (
        <div className="flex">
            <div className={`bg-customblack h-screen flex flex-col sidebar-hidden ${!showSidebar ? "hidden" : ""} absolute z-10 w-2/3`}>

                <div className="flex items-center justify-between py-3.5 drop-shadow px-8">
                    <p className="text-lg">Channels</p>
                    <div className="flex items-center gap-2">
                        <button className="bg-customgray px-2 rounded text-xl">+</button>
                        <button className="bg-customgray px-2 rounded text-xl" onClick={onClick}>x</button>
                    </div>
                </div>

                <div className="bg-customgray p-3.5 mt-5 mb-9 rounded-lg flex items-center mx-8">
                    <SearchIcon />
                    <input
                        type="text" className="pl-3.5 bg-customgray w-full"
                        placeholder="Search"
                    />
                </div>

                <SidebarChannel />

                <User />
            </ div >

        </div>
    )
}

export default SidebarHidden
