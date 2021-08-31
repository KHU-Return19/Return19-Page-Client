import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import Member from '../components/Member'
import MemberRender from '../components/MemberRender'

const MemberPage = (props) =>{
    const [members, setMembers] = useState([])

    useEffect(() =>{
            axios.get("/api/user/members")
            .then(response =>{
                if(response.data.success){
                    setMembers(response.data.users)
                }
                
            })
            .catch((error)=>{console.log(error)})
    }, [])

    const renderMembers = members.map(member => {
        return( 
                <Member
                    member={member}
                    key={member.id}
                />
        )
    })

    return(
        <>
        <MemberRender
            renderMembers={renderMembers}
            >
            
        </MemberRender>
        
        </>
    )

}

export default withRouter(MemberPage)