import React, { useEffect } from "react";
import axios from "axios";

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
      
        useEffect(() => {
            axios.get("/api/user/auth").then(response => {
                if (!response.data.isAuth) {
                    if (option) {
                        props.history.push('/LandingPage')
                    }
                } else {
                    if (option === false)
                            props.history.push('/')
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}