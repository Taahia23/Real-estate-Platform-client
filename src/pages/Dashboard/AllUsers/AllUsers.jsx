import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }

    });
   

     // handle make admin 
     const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user}`)
        .then(res => {
            refetch()
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                Swal.fire(`${user.name} is admin now`);
            }
        })
    }
    // handle make admin 
     // handle make agent 
     const handleMakeAgent = user => {
        axiosSecure.patch(`/users/agent/${user}`)
        .then(res => {
            refetch()
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                Swal.fire(`${user.name} is agent now`);
            }
        })
    }
    // handle make agent 

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/users/${user}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div >
            <div className='flex justify-evenly my-4'>
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
                            <th>Role(Admin)</th>
                            <th>Role(Agent)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? "Admin" :
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-lg"><FaUsers></FaUsers></button>
                                    }
                                </td>
                                <td>
                                    {user.role === 'agent' ? "Agent" :
                                        <button onClick={() => handleMakeAgent(user._id)} className="btn btn-ghost btn-lg"><FaUsers></FaUsers></button>
                                    }
                                </td>
                                <td> <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;