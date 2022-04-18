import React from "react";

export const useFetching = (callback) => {
    let [isLoading, setLoading] = React.useState(false);
    let [error, setError] = React.useState("");

    const fetching = async () => {

        try {
            setLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
       
    }
    return [fetching,isLoading,error];
}