function Message() {
    return (
        <div className="mx-16 my-12 flex gap-7">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="user" className="w-10 h-10 rounded-lg" />
            <div>
                <div className="flex gap-2.5 text-customlightgray items-center">
                    <p className="font-bold text-lg">Nellie Francis</p>
                    <p className="text-sm">yesterday at 2:29 AM</p>
                </div>
                <p className="mt-2">Suspendissse enim tellus, elementum quis dictum sed, sodales at mauris</p>
            </div>
        </div>
    )
}

export default Message
