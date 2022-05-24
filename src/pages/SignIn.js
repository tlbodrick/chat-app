import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { db } from '../firebase.config.js'


function SignIn() {

    console.log(db)

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userData

    const onChange = e => {
        setUserData(prevFormData => ({
            ...prevFormData,
            [e.target.id]: e.target.value
        }))
    }

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        const auth = getAuth()

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate('/')
            }
        } catch (error) {
            toast.error('Could not authenticate')
            console.log(error)
        }
    }



    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="auth-container border rounded lg:w-1/3">
                <div className="auth-content p-16">
                    <p className="font-bold pb-6">Login</p>
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

                        <button className="w-full p-2 rounded-md mt-5 bg-blue-500 text-white">Login</button>
                    </form>

                    <div className="flex justify-center items-center flex-col text-gray-500">
                        <p className="text-xs mt-8">or continue with Google</p>
                        <button className="border rounded-full p-2 flex items-center mt-6">
                            <GoogleIcon />
                        </button>
                        <p className="text-xs mt-6">Don't have an account yet?
                        <Link to='/sign-up' className="text-blue-500"> Register</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn
