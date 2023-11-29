
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/home-logo.png'
import useAuth from '../../../hooks/useAuth';
import useWishItem from '../../../hooks/useWishItem';
import useAdmin from '../../../hooks/useAdmin';
import useAgent from '../../../hooks/useAgent';
const Navbar = () => {
    const { user, logOut } = useAuth();
    const [wish] = useWishItem()
    const [isAdmin] = useAdmin()
    const [isAgent] = useAgent()

    // const isAdmin = true;
    // const isAgent = false;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/allProperties'}>All Properties</Link></li>

        {
            user && !isAdmin && !isAgent && <li><Link to={'/dashboard/wish'}>Dashboard  {wish.length}</Link></li>
        }
        {
             user && isAdmin && !isAgent && <li><Link to={'/dashboard/adminProfile'}>Dashboard  {wish.length}</Link></li>
        }
        {
             user && !isAdmin && isAgent && <li><Link to={'/dashboard/agentProfile'}>Dashboard  {wish.length}</Link></li>
        }
        


        {/* <li><Link to={'/dashboard/wish'}>Dashboard {wish.length}</Link></li>
        <li><Link to={''}></Link></li> */}

    </>

    return (
        <div className=''>
            <div className="navbar fixed z-10  lg:text-white  bg-[#363062] lg:px-32 lg:py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex flex-row gap-10'>

                            {/* <img className="rounded" src={user?.photoURL} alt="" /> */}
                            <div className="avatar online">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <div className='py-3'><span>{user?.displayName}</span></div>
                            <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button> </div>
                            :
                            <> <li><Link to={'/login'}>Login</Link></li> </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;