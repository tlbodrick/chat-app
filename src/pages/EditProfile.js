import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { storage, upload } from '../firebase.config.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth, updateProfile, updateEmail, updatePassword, reauthenticateWithCredential } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Context } from '../PhotoContext.js'

function EditProfile() {
    const auth = getAuth()


    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { photoUrl, setPhotoUrl } = useContext(Context)

    const { name, email, password } = userData

    const [photo, setPhoto] = useState(null)

    function changeImage(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }

        console.log('changed')
    }

    const onChange = (e) => {
        setUserData(prevData => ({
            ...prevData,
            [e.target.id]: e.target.value
        }))
    }

    console.log(auth.currentUser)


    const navigate = useNavigate()
    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            if (photo) {
                upload(photo, auth.currentUser)
            }
            await updateProfile(auth.currentUser, {
                displayName: name,
            })
            await updateEmail(auth.currentUser, email)
            await updatePassword(auth.currentUser, password)
            navigate('/profile')
        }

        catch (error) {
            console.log(error)
            toast.error('This information is sensitive. To update your user information, please log in and try again.')
            navigate('/sign-in')
        }

    }

    return (
        <div className="bg-customgray h-screen p-5">
            <header className="flex justify-between">
                <Link to="/">Back</Link>
                <img src={photoUrl} className="w-10 h-10" alt="user" />
            </header>

            <div className="pt-16 md:mx-20 lg:mx-60 xl:mx-80 2xl:mx-96">
                <div className="text-center">
                    <h1 className="text-2xl">Edit Info</h1>
                    <p>Changes will be reflected everywhere</p>
                </div>
                <div className="flex pt-10 items-center gap-5">
                    <img src={photoUrl} className="w-20 h-20 rounded-lg" alt="user" />
                    <input type="file" className="uppercase text-customlightgray" onChange={changeImage} />
                </div>

                <form className="mt-8" onSubmit={onSubmit}>
                    <div className="flex flex-col ">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Enter your name..."
                            className="p-4 rounded-lg w-full border mt-2"
                            onChange={onChange}
                        />
                        <label className="mt-6">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter your email..."
                            className="p-4 rounded-lg w-full border mt-2"
                            onChange={onChange}
                        />
                        <label className="mt-6">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Enter your password..."
                            className="p-4 rounded-lg w-full border mt-2"
                            onChange={onChange}
                        />
                    </div>
                    <button className="bg-blue-500 rounded-lg mt-4 px-6 py-2">Save</button>
                </form>


            </div>
        </div>
    )
}

export default EditProfile
