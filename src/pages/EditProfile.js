import { Link } from 'react-router-dom'

function EditProfile() {
    return (
        <div className="bg-customgray h-screen p-5">
            <header className="flex justify-between">
                <p>Back</p>
                <img src="" alt="user" />
            </header>

            <div className="pt-16 md:mx-20 lg:mx-60 xl:mx-80 2xl:mx-96">
                <div className="text-center">
                    <h1 className="text-2xl">Edit Info</h1>
                    <p>Changes will be reflected everywhere</p>
                </div>
                <div className="flex pt-10 items-center gap-5">
                    <img src="" alt="user" />
                    <p className="uppercase text-customlightgray">Change photo</p>
                </div>

                <form className="mt-8">
                    <div className="flex flex-col ">
                        <label>Name</label>
                        <input
                            type="text" placeholder="Enter your name..."
                            className="p-4 rounded-lg w-full"
                        />
                        <label className="mt-6">Email</label>
                        <input
                            type="email" placeholder="Enter your email..."
                            className="p-4 rounded-lg w-full"
                        />
                        <label className="mt-6">Password</label>
                        <input
                            type="password" placeholder="Enter your password..."
                            className="p-4 rounded-lg w-full"
                        />
                    </div>
                    <button className="bg-blue-500 rounded-lg mt-4 px-6 py-2">Save</button>
                </form>


            </div>
        </div>
    )
}

export default EditProfile
