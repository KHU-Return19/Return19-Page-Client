import React, { useEffect } from "react";
import axios from "axios";

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
      
        useEffect(() => {
            axios.get("/api/users/auth").then(response => {
                console.log(response)
                if (!response.data.isAuth) {
                    if (option) {
                        props.history.push('/LandingPage')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (option === false)
                            props.history.push('/')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}