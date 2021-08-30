import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }


    const onSubmitHandler = (event) => {
        event.preventDefault()
        

        let body = {
            email : email,
            password : password
        }

        axios.post("/api/user/login",body)
        .then((response)=>{
            if(response.data.success){
                props.history.push("/")
            }else{
                console.log(response.data)
                alert(response.data.msg)
            }
        })
        .catch((error)=>{console.log(error)})
        

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="email" value={email} onChange={onEmailHandler} />
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default withRouter(LoginPage)