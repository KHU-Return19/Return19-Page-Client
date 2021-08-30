import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
const MemberPage = (props) =>{
    const [members, setMembers] = useState([])

    useEffect(() =>{
            axios.get("/api/users/all")
            .then(response =>{
                if(response.data.success){
                    setMembers(response.data.users)
                }
                
            })
            .catch((error)=>{console.log(error)})
    }, [])
    return(
        <div>{JSON.stringify(members)}</div>
    )

}

export default withRouter(MemberPage)