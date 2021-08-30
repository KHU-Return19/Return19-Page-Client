import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import SignupForm from '../components/SignupForm'

const SignupPage = (props) =>{
    const [inputs,setInputs]=useState({
        name:'',
        email:'',
        confirmPassword:'',
        password:'',
    })
    
    const handleInput=(type)=>(event)=>{
        const value =event.currentTarget.value;
        setInputs({
            ...inputs,
            [type]:value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        
        // Confirm Password
        if(inputs.password !==inputs.confirmPassword){
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다 :(")
        }


        axios.post("/api/user/signup",inputs)
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
        <>
            <SignupForm 
                inputs={inputs}
                handleInput={handleInput}
                onSubmitHandler={onSubmitHandler}/>
        </>
    )
}
export default withRouter(SignupPage)