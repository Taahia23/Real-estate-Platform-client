import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMakeOffer = () => {
    // const [makeOffer, setMakeOffer] = useState([]);
    // const [loading, setLoading] = useState(true);




    // useEffect(() => {
    //     fetch('https://homez-server.vercel.app/makeOffer')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMakeOffer(data);
    //             setLoading(false);
    //         })
    // }, []);


    // return [makeOffer, loading]


    // experiment
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const{refetch , data: makeOffer=[]} = useQuery({
        queryKey: ['makeOffer', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/makeOffer?email=${user.email}`)
            return res.data
        }

    })
    return [makeOffer, refetch]
    // experiment
};

export default useMakeOffer;