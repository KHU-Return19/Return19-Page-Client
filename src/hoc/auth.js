import React, { useEffect } from "react";
import axios from "axios";

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
      
        useEffect(() => {
            axios.get("/api/user/auth").then(response => {
                console.log(response)
                if (!response.data.isAuth) {
                    const isAuth = response.data.isAuth;
                    isAuth ? (!option && props.history.push('/')) : (option && props.history.push('/LandingPage'))
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}