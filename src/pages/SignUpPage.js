import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

const SignupPage = (props) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")

    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) =>{
        setConfirmPassword(event.currentTarget.value)
    }
    const onBirthdayHandler = (event) =>{
        setBirthday(event.currentTarget.value)
    }


    const onSubmitHandler = (event) => {
        event.preventDefault()
        
        // Confirm Password
        if(password !== confirmPassword){
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다 :(")
        }

        let body = {
            email : email,
            name : name,
            password : password,
            birthday : birthday
        }

        axios.post("/api/user/signup",body)
        .then((response)=>{
            if(response.data.success){
                props.history.push("/login")
            }else{
                alert(response.data.msg)
            }
        })
        .catch((error)=>{console.log(error)})
        

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="email" value={email} onChange={onEmailHandler} />
                <input type="text" value={name} onChange={onNameHandler} /> 
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
                <input type="date" value={birthday} onChange={onBirthdayHandler}/>
                <button type="submit">SignUp</button>
            </form>
        </div>
    )
}
export default withRouter(SignupPage)