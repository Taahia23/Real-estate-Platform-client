import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAgent from "../hooks/useAgent";

const AgentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAgent, isAgentLoading] = useAgent();
    const location = useLocation()
    if(loading || isAgentLoading){
        return <span className="loading loading-spinner text-error"></span>
    }

    if(user && isAgent) {
        return children;
    }


    return  <Navigate to={'/'} state={{from: location}} replace></Navigate>
};


export default AgentRoute;