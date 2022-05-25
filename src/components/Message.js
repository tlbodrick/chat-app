function Message({ timestamp, message, user }) {
    return (
        <div className="mx-16 my-12 flex gap-7">
            <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-lg" />
            <div>
                <div className="flex gap-2.5 text-customlightgray items-center">
                    <p className="font-bold text-lg">{user.displayName}</p>
                    <p className="text-xs">{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                <p className="mt-2">{message}</p>
            </div>
        </div>
    )
}

export default Message
