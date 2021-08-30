import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
const ProfilePage = (props) =>{
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [bio, setBio] = useState("")
    const [interest, setInterest] = useState("")
    const [url, setUrl] = useState("")

    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
    const onBirthdayHandler = (event) =>{
        setBirthday(event.currentTarget.value)
    }
    const onBioHandler = (event) =>{
        setBio(event.currentTarget.value)
    }
    const onInterestHandler = (event) =>{
        setInterest(event.currentTarget.value)
    }
    const onUrlHandler = (event) =>{
        setUrl(event.currentTarget.value)
    }
 
    useEffect(() =>{
            axios.get("/api/user/profile")
            .then(response =>{
                if(response.data.success){
                    setEmail(response.data.user.email)
                    setBirthday(response.data.user.birthday.slice(0,10))
                    setName(response.data.user.name)
                    setBio(response.data.user.bio)
                    setUrl(response.data.user.url)
                    setInterest(response.data.user.interest)
                }
                
            })
    }, [])

    const onSubmitHandler = (event)=>{

        event.preventDefault()

        let body = {
            birthday : birthday,
            bio : bio,
            interest: interest,
            url: url

        }

        axios.post("/api/user/profile/update",body)
        .then((response)=>{
            console.log(response)
            if(response.data.success){
                //props.history.push("/profile")

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
        <div>
        <form onSubmit={onSubmitHandler} >
            <input type="email" value={email}/>
            <input type="text" value={name} onChange={onNameHandler} /> 
            <input type="date" value={birthday} onChange={onBirthdayHandler}/>
            <input type="test" value={bio} onChange={onBioHandler}/>
            <input type="test" value={interest} onChange={onInterestHandler}/>
            <input type="test" value={url} onChange={onUrlHandler}/>

            <button type="submit">Update Profile</button>
        </form>

        <button onClick={logoutHandler}>Logout</button>
    </div>
    )

}

export default withRouter(ProfilePage)