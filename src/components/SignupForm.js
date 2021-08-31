import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';
const SignupForm = (props)=>{
    const { inputs, handleInput, onSubmitHandler } = props;
    const {name, email, password, confirmPassword } = inputs;

    return(
        <>
        <StyleSignupForm>     
            <div class="authForm">  
                <h2 class="authFormTitle">Signup</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="authFormRow">
                        <label>Email</label>
                        <input type="email" value={email} onChange={handleInput("email")} placeholder="Enter your Email" required />
                    </div>
                    <div class="authFormRow">
                        <label>Name</label>
                        <input type="text" value={name} onChange={handleInput("name")} placeholder="Enter your Name" required /> 
                    </div>
                    <div class="authFormRow">
                        <label>Password</label>
                        <input type="password" value={password} onChange={handleInput("password")} placeholder="Enter your Password" required/>
                    </div>
                    <div class="authFormRow">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={handleInput("confirmPassword")} placeholder="Confirm Password" required/>
                    </div> 
                    <div class="authFormBtn authFormBtn1 authFormRow">
                        <button type="submit">Sign Up</button>
                    </div>

                 </form>
                 <div class ="authFormBtn authFormBtn2 authFormRow">     
                    <Link to = "/login"><button >Log In</button></Link>
                </div>
             </div>

        </StyleSignupForm>
        </>
    )
}

export default SignupForm

const StyleSignupForm = styled.div`    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

font-family: "Noto Sans KR", sans-serif;
}

.authForm {
max-width: 500px;
min-width: 400px;
max-height: 700px;
width: 20%;
height: 60%;
margin: 100px auto;
background-color: white;
border-radius: 25px;
-webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.1);
}

.authFormTitle {
text-align: center;
font-family: "open sans", sans-serif;
padding: 2rem 0;
margin: 0;
font-size: 2rem;
font-weight: 700;
color:#1e1e1e

}

.authFormRow {
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1rem;
max-width: 100%;
}

.authFormRow input {
width: 80%;
box-sizing: border-box;
border: none;
font-size: 1.2rem;
padding-left: 1.5rem;
padding-bottom: 1rem;
box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
transition: box-shadow 0.2s ease-in;
}

.authFormRow input:focus {
box-shadow: inset 0px -3px 0px 0px #91A8D1;
outline: none;
}

.authFormRow input::-webkit-input-placeholder {
opacity: 1;
transition: opacity 0.25s ease-out;
}

.authFormRow input:hover::-webkit-input-placeholder,
.authFormRow input:focus::-webkit-input-placeholder {
opacity: 0;
}

.authFormRow label {
align-self: start;
padding-left: 4.5rem;
padding-bottom: 0.5rem;
color: rgba(187, 187, 187, 0.9);
}

.authFormRow button {
border-radius: 25px;
width: 80%;
height: 40px;
font-size: 1.3rem;
color: white;
font-weight: 600;
background: #91A8D1;
background: linear-gradient(
    90deg,
    #91A8D1 0%,
    #F6CAC9 100%
);
border: 0px;
cursor: pointer;
transition: opacity 0.25s ease-out;
}

.authFormRow button:hover {
opacity: 0.8;
}

.authFormBtn {
padding-top: 1rem;
padding-bottom: 0.1rem;
}

.authFormBtn2 button{
    background: #91A8D1 ;
    background: linear-gradient(
        45deg,
        #a691c0 0%,
        #91A8D2 100%
    );
}
.authFormBtn2{
    padding-bottom: 2rem;
}
a{
    text-decoration:none;
    color : #FFFFFF;
    width:100%;
    text-align:center;
}
.authFormBtn1 {
    padding-top:2rem;
}
button{
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
`;