import { useState, createContext, useEffect } from 'react'

const Context = createContext()

function ChannelContextProvider({ children }) {
    const [channelInfo, setChannelInfo] = useState({
        channelId: '',
        channelName: '',
    })

    const { channelId, channelName } = channelInfo

    return (
        <Context.Provider value={{ channelInfo, setChannelInfo, channelId, channelName }}>
            {children}
        </Context.Provider>
    )
}

export { ChannelContextProvider, Context }