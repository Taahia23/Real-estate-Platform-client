import useAuth from "../../../hooks/useAuth";

const AgentProfile = () => {
    const { user } = useAuth()

    return (
        <div className="">
            {
                user && <div className='flex flex-col '>


                    <div className="avatar block m-auto mb-10">
                        <div className="w-24 h- rounded-full text-center">
                            <img className="" src={user?.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl text-center">
                            <span className="text-blue-800">Hi, welcome </span>
                            {
                                user?.displayName ? user.displayName : 'Back'
                            }
                        </h2>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl"> <span className="text-blue-800"> Your Role: </span>Agent</h1>
                    </div>
                </div>
            }
        </div>
    )
};

export default AgentProfile;