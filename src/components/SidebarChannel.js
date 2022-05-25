import { useContext } from 'react'
import { Context } from '../ChannelContext'

function SidebarChannel({ id, channelName, firstLetter }) {
    const { setChannelInfo } = useContext(Context)

    const handleSetChannelInfo = () => {
        setChannelInfo({
            channelId: id,
            channelName,
        })
    }

    return (
        <div className="flex items-center px-8 p-3 hover:bg-customgraymed" onClick={handleSetChannelInfo}>
            <p className="bg-customgray px-4 py-2 rounded-lg uppercase">{firstLetter}</p>
            <p className="ml-3 text-customlightgray font-bold text-sm lg:text-lg">{channelName}</p>
        </div>
    )
}

export default SidebarChannel
