import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";

const useProperty = () => {
    // const [property, setProperty] = useState([]);
    // const [loading, setLoading] = useState(true);




    // useEffect(() => {
    //     fetch('https://homez-server.vercel.app/property')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProperty(data);
    //             setLoading(false);
    //         })
    // }, []);

    // by tan stack
    const axiosSecure = useAxiosPublic()

    const {data: property=[], isPending: loading, refetch} = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await axiosSecure('/property')
            return res.data
        }
    })



    return [property, loading, refetch]
};

export default useProperty;