import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'


function Settings() {
    const navigate = useNavigate()

    const onClick = () => {
        try {
            const auth = getAuth()
            signOut(auth)
            navigate('/sign-in')

        } catch (error) {
            toast.error('Could not sign out.')
            console.log(error)
        }
    }


    return (
        <div className="absolute bg-customgray p-2 bottom-14 rounded-lg">
            <div className="flex p-3.5 mb-2 mt-4 mx-4 gap-2 text-sm items-center bg-customgraymed w-40 rounded-md cursor-pointer">
                <AccountCircleIcon />
                <Link to="/profile">My Profile</Link>
            </div>
            <div className="flex p-3.5 mt-2 mb-4 mx-4 gap-2 text-sm items-center w-40 rounded-md text-red-600 cursor-pointer" onClick={onClick}>
                <LogoutIcon />
                <p>Logout</p>
            </div>
        </div >
    )
}

export default Settings
