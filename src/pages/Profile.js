import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className="bg-customgray h-screen p-5">
            <header className="flex justify-between">
                <p>Back</p>
                <img src="" alt="user" />
            </header>

            <div className="pt-16 md:mx-20 lg:mx-60 xl:mx-80 2xl:mx-96">
                <div className="text-center">
                    <h1 className="text-2xl">Personal Info</h1>
                    <p>Basic info, like your name and photo</p>
                </div>
                <div className="flex pt-10 items-center justify-between">
                    <div className="text-customlightgray">
                        <p className="text-2xl">Profile</p>
                        <p className="text-xs">Some info may be visible to other people</p>
                    </div>
                    <div className="border border-customlightgray rounded-md px-8 py-2"><Link to="/edit-profile">Edit</Link></div>
                </div>


                <div className="flex justify-between py-7 mt-16">
                    <p className="uppercase text-sm text-customlightgray">Photo</p>
                    <img src="" alt="user" />
                </div>
                <hr />

                <div className="flex justify-between py-7">
                    <p className="uppercase text-sm text-customlightgray">Name</p>
                    <p>Xanthe Neal</p>
                </div>
                <hr />


                <div className="flex justify-between py-7">
                    <p className="uppercase text-sm text-customlightgray">Email</p>
                    <p>xanthe.neal@gmail.com</p>
                </div>
                <hr />


                <div className="flex justify-between py-7">
                    <p className="uppercase text-sm text-customlightgray">Password</p>
                    <p>************</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
