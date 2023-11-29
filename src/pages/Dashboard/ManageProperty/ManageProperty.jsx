import { FaCheck, FaSignOutAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProperty from "../../../hooks/useProperty";
import { ImCross } from "react-icons/im";

const ManageProperty = () => {
    const [property] = useProperty();
    return (
        <div>
            <SectionTitle heading={'Manage Properties'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Agent Name</th>
                                <th>Agent Email</th>
                                <th>Price range</th>
                                <th>Verify</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                property.map((item, index) => <tr key={item._id}>
                                    <th>{index+1}</th>
                                    <th>
                                        {item.propertyTitle}
                                    </th>
                                    <td>
                                       {item.location}
                                    </td>
                                    <td>
                                    {item.agentName}

                                    </td>
                                    <td> {item.agentEmail}</td>
                                    <td> {item.priceRange}</td>
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><FaCheck /></button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><ImCross /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProperty;