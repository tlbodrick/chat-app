import SendIcon from '@mui/icons-material/Send';

function Message() {
    return (
        <div className="flex space-between pl-4 rounded-lg bg-customgraymed mx-10 mb-10">
            <input className="w-full bg-customgraymed" type="text" id="message" placeholder="Type a message here" />
            <div className="p-3 bg-blue-500 rounded-lg m-1.5 flex items-center"><SendIcon style={{ fontSize: 18 }} /></div>
        </div>
    )
}

export default Message
