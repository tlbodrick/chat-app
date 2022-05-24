import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function User() {
    return (
        <div className="flex items-center text-lg justify-between px-8 py-3.5 bg-customblacker mt-auto">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="rounded-lg w-8 h-8" />
            <p className="text-customlightgray p-2 text-sm md:text-base">Xanthe Neal</p>
            <KeyboardArrowDownIcon />
        </div>
    )
}

export default User
