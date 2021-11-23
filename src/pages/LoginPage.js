import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import LoginForm from '../components/LoginForm';

const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleInput = (type) => (event) => {
        const targetval = event.currentTarget.value;
        type === ("email") ? (setEmail(targetval)) : (setPassword(targetval));
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
        <>
            <LoginForm 
                email={email}
                passowrd={password}
                handleInput={handleInput}
                onSubmitHandler={onSubmitHandler}
            />
        </>
    )
};

export default withRouter(LoginPage)

