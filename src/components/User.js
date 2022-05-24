import SettingsIcon from '@mui/icons-material/Settings';
import Settings from './Settings'
import { useState } from 'react'

function User() {
    const [showSettings, setShowSettings] = useState(false)

    const onClick = () => {
        setShowSettings(prevSetting => !prevSetting)
    }



    return (
        <>
            <div className="flex items-center text-lg justify-between px-8 py-3.5 bg-customblacker mt-auto">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="user" className="rounded-lg w-8 h-8" />
                <p className="text-customlightgray p-2 text-sm md:text-base">Xanthe Neal</p>
                <div>
                    <button onClick={onClick}><SettingsIcon /></button>

                    {showSettings && <Settings />}
                </div>
            </div>

        </>
    )
}

export default User
