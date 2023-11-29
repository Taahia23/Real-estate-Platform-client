import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import userLogo from '../../../assets/images/trusted/user.png'
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }

    });
    return (
        <div className="space-y-5">
            <div className="">

                <div className="avatar block mb-10">
                    <div className="w-24 block mx-auto  rounded-full text-center">
                        <img className="" src={user?.photoURL} />
                    </div>
                </div>
            </div>
            <h2 className="text-3xl text-center">
                <span className="text-blue-800">Hi, welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }

            </h2>
            <div className="text-center ">
                <h1 className="text-2xl"> <span className="text-blue-800"> Your Role: </span>Admin</h1>
            </div>
            <div className='flex justify-evenly my-20'>
                <h1 className="text-3xl">All Users</h1>
                <h1 className="text-3xl">total: {users.length}</h1>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Role(Agent)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="avatar online">
                                        <div className="w-10 h-10 rounded-full">
                                            <img src={userLogo} />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {user.role === 'admin' ? "Admin" : user.role === 'agent' ? 'Agent' : 'user'}
                                </td>
                                <td> </td>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProfile;