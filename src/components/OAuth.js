import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import GoogleIcon from '@mui/icons-material/Google';


function OAuth() {

    const navigate = useNavigate()

    const onGoogleClick = async (e) => {
        console.log('clicked')
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            const user = result.user;

            // check if user exists already in database
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //if user doesn't exist, create user in database
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            navigate('/')

        } catch (error) {
            toast.error('Could not authenticate with Google.')
            console.log(error)
        }
    }


    return (
        <>
            <p className="text-xs mt-8">or continue with Google</p>
            <button
                className="border rounded-full p-2 flex items-center mt-6"
                onClick={onGoogleClick}
            ><GoogleIcon /></button>
        </>
    )
}

export default OAuth
