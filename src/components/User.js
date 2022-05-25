import SettingsIcon from '@mui/icons-material/Settings';
import Settings from './Settings'
import { useState, useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { Context } from '../PhotoContext'

function User() {

    const { photoUrl } = useContext(Context)

    const [showSettings, setShowSettings] = useState(false)

    const onClick = () => {
        setShowSettings(prevSetting => !prevSetting)
    }


    const auth = getAuth()
    const currentUser = auth.currentUser





    return (
        <>
            <div className="flex items-center text-lg justify-between px-8 py-3.5 bg-customblacker mt-auto">
                <img src={photoUrl} alt="user" className="rounded-lg w-8 h-8" />
                <p className="text-customlightgray p-2 text-sm md:text-base">{currentUser.displayName}</p>
                <div>
                    <button onClick={onClick}><SettingsIcon /></button>

                    {showSettings && <Settings />}
                </div>
            </div>

        </>
    )
}

export default User
