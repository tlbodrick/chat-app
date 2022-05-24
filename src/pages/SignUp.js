import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useState } from 'react'

function SignUp() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userData

    const onChange = e => {
        setUserData(prevUserData => ({
            ...prevUserData,
            [e.target.id]: e.target.value
        }))

    }

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user;

            navigate('/')

        } catch (error) {
            toast.error('Can not sign up.')
        }

    }


    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="auth-container border rounded lg:w-1/3">
                <div className="auth-content p-16">
                    <p className="font-bold pb-6">Join thousands of chatters now</p>
                    <form className="text-gray-500" onSubmit={onSubmit}>
                        <div className="p-3 border flex items-center rounded-md">
                            <LocalPostOfficeIcon />
                            <input
                                type="email" placeholder="Email"
                                className="ml-2"
                                id="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="p-3 border flex items-center mt-2 rounded-md">
                            <LockIcon />
                            <input
                                type="password" placeholder="Password"
                                className="ml-2"
                                id="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <button className="w-full p-2 rounded-md mt-5 bg-blue-500 text-white">Start chatting now</button>
                    </form>

                    <div className="flex justify-center items-center flex-col text-gray-500">
                        <p className="text-xs mt-8">or continue with Google</p>
                        <button className="border rounded-full p-2 flex items-center mt-6">
                            <GoogleIcon />
                        </button>
                        <p className="text-xs mt-6">Already a member?
                        <Link to='/sign-in' className="text-blue-500"> Login</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp
