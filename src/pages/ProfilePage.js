import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import ProfileForm from '../components/ProfileForm'
const ProfilePage = (props) =>{

    const [inputs,setInputs]=useState({
        name:'',
        email:'',
        birthday:'',
        bio:'',
        interest: '',
        url: ''

    })
    const handleInput=(type)=>(event)=>{
        const value =event.currentTarget.value;
        setInputs({
            ...inputs,
            [type]:value
        })
    }

    useEffect(() =>{ 
        
            axios.defaults.headers.common['Authorization'] = props.userId;
            axios.get("/api/user/profile")
            .then(response =>{
                if(response.data.success){
                    console.log(response.data)
                    setInputs({
                        name: response.data.user.name,
                        bio : response.data.user.bio,
                        url : response.data.user.url,
                        interest : response.data.user.interest,
                        email: response.data.user.email,
                        birthday: response.data.user.birthday? response.data.user.birthday.slice(0,10) : response.data.user.birthday
                    })

                                    
                }
                
            })
            .catch( response => { console.log(response) } );
    }, [])

    const onSubmitHandler = (event)=>{

        event.preventDefault()
        let body = {
            bio: inputs.bio,
            interest: inputs.interest,
            url: inputs.url,
            birthday : inputs.birthday

        }

        axios.put("/api/user/profile/update",body)
        .then((response)=>{
            if(response.data.success){
                props.history.push("/profile")
                alert("업데이트 완료 :)")

            }else{
                alert(response.data.msg)
            }
        })
        .catch((error)=>{console.log(error)})
        
    }

    const logoutHandler= (event)=>{
        axios.get("/api/user/logout")
        .then((response)=>{
            console.log(response)
            if(response.data.success){
                props.history.push("/LandingPage")
            }else{
                console.log(response.data)
            }
        })
    }
    return(
        <>
        <ProfileForm
            inputs={inputs}
            handleInput={handleInput}
            onSubmitHandler={onSubmitHandler}
            logoutHandler={logoutHandler}
            />
        </>
    )

}

export default withRouter(ProfilePage)