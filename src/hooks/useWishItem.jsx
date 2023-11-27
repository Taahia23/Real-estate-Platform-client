import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useWishItem = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    //tan stack query
    const{refetch , data: wish=[]} = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/wishes?email=${user.email}`)
            return res.data
        }

    })
    return [wish, refetch]

};

export default useWishItem;