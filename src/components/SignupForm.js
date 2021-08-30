import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';
const SignupForm = (props)=>{
    const { inputs, handleInput, onSubmitHandler } = props;
    const {name, email, password, confirmPassword } = inputs;

    return(
        <>
        <StyleSignupForm>     
            <div class="signupForm">  
                <h2 class="headerTitle">SignUp</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="row">
                        <label>Email</label>
                        <input type="email" value={email} onChange={handleInput("email")} placeholder="Enter your Email" required />
                    </div>
                    <div class="row">
                        <label>Name</label>
                        <input type="text" value={name} onChange={handleInput("name")} placeholder="Enter your Name" required /> 
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input type="password" value={password} onChange={handleInput("password")} placeholder="Enter your Password" required/>
                    </div>
                    <div class="row">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={handleInput("confirmPassword")} placeholder="Confirm Password" required/>
                    </div> 
                    <div class="button row">
                        <button type="submit">Sign Up</button>
                    </div>

                 </form>
                 <div class ="loginbtn row">     
                    <button><Link to = "/login">Log in</Link></button>
                </div>
             </div>

        </StyleSignupForm>
        </>
    )
}

export default SignupForm

const StyleSignupForm = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    html {
    font-size: 100%;
    }

    font-family: "Noto Sans KR", sans-serif;
    }

    .signupForm {
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 60%;
    margin: 100px auto;
    background-color: white;
    border-radius: 25px;
    }

    .headerTitle {
    text-align: center;
    font-family: "open sans", sans-serif;
    padding: 2rem 0;
    margin: 0;
    font-size: 2rem;
    }

    .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    max-width: 100%;
    }

    .row input {
    width: 80%;
    box-sizing: border-box;
    border: none;
    font-size: 1.2rem;
    padding-left: 1.5rem;
    padding-bottom: 1rem;
    box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
    transition: box-shadow 0.2s ease-in;
    }

    .row input:focus {
    box-shadow: inset 0px -3px 0px 0px rgba(144, 30, 167);
    outline: none;
    }

    .row input::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
    }

    .row input:hover::-webkit-input-placeholder,
    .row input:focus::-webkit-input-placeholder {
    opacity: 0;
    }

    .row label {
    align-self: start;
    padding-left: 4.5rem;
    padding-bottom: 0.5rem;
    color: rgba(187, 187, 187, 0.9);
    }

    .row button {
    border-radius: 25px;
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    background: rgb(117, 17, 156);
    background: linear-gradient(
        90deg,
        rgba(74, 46, 177) 0%,
        rgba(144, 30, 167) 100%
    );
    border: 0px;
    cursor: pointer;
    transition: opacity 0.25s ease-out;
    }

    .row button:hover {
    opacity: 0.8;
    }

    .button {
    padding-top: 2rem;
    padding-bottom: 0.1rem;
    }
    
    .loginbtn button{
        background: rgb(202, 151, 11) ;
        background: linear-gradient(
            90deg,
            rgba(47, 44, 218) 30%,
            rgba(38, 136, 201) 100%
        );
    }
    a{
        text-decoration:none;
        color : #FFFFFF;
    }

`;