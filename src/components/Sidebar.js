import SearchIcon from '@mui/icons-material/Search';
import User from './User'
import SidebarChannel from './SidebarChannel'
import { useState } from 'react'

function Sidebar() {
    return (
        <div className="Sidebar bg-customblack h-screen w-1/4 flex flex-col">

            <div className="flex items-center justify-between py-3.5 drop-shadow px-8">
                <p className="text-lg">Channels</p>
                <button className="bg-customgray px-2 rounded text-xl">+</button>
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
        </div>
    )
}

export default Sidebar
