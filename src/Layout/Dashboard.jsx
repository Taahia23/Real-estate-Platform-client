import { FaBook, FaHome, FaListAlt, FaMoneyBillAlt, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useWishItem from "../hooks/useWishItem";
import useAdmin from "../hooks/useAdmin";
import useAgent from "../hooks/useAgent";

const Dashboard = () => {

    const [wish] = useWishItem();

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();


    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-pink-50">
                <ul className="menu space-y-5 p-5">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminProfile'}><FaUser></FaUser> Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageProperties'}> <FaShoppingCart></FaShoppingCart> Manage Properties</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}> <FaUsers></FaUsers>  Manage users</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageReviews'}> <FaBook></FaBook>  Manage Reviews</NavLink>
                            </li>

                        </> : isAgent ? <>
                            <li>
                                <NavLink to={'/dashboard/agentProfile'}><FaUser></FaUser> Agent Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addProperty'}> <FaShoppingCart></FaShoppingCart>  Add Properties</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addedProperties'}> <FaUsers></FaUsers>  My added properties</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/soldProperties'}> <FaBook></FaBook>   My sold properties.
                                </NavLink>
                            </li>

                        </>
                            : <>
                                <li>
                                    <NavLink to={'/dashboard/userProfile'}><FaUser></FaUser> My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/wish'}> <FaShoppingCart></FaShoppingCart>  My Wishlist ({wish.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/propertyBought'}> <FaMoneyBillAlt></FaMoneyBillAlt>  Property bought</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/userReview'}> <FaBook></FaBook>  My Reviews</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}> <FaHome></FaHome>  Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/allProperties'}><FaListAlt></FaListAlt>All Properties</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;