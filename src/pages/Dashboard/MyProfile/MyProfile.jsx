import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {

    const{user} = useAuth()

    return (
        <div className="">
        {
            user && <div className='flex flex-col '>

                
                <div className="avatar">
                    <div className="w-24 h- rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className='py-3'><span>{user?.displayName}</span></div>
                <div>
                    Role: User
                </div>
                </div>
        }
    </div>
    );
};

export default MyProfile;