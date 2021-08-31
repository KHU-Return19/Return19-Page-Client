import React from "react"
import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileForm = (props)=>{
    const { inputs, handleInput, onSubmitHandler, logoutHandler } = props;
    const {name, email, birthday, bio, interest, url } = inputs;

    return(
        <>
            <StyleProfileForm>     
                            <div class="profileBox">
                                <div class="userCard user-userCard-full profileContainer">
                                        <div class="userProfile">
                                            <div class="userCardBlock1 text-center text-white">
                                                <div class="m-b-25"> <img src="	https://audition.hanbiton.com/images/common/img_default.jpg" class="img-radius" alt="userProfile-Image"/> </div>
                                                <h6 class="f-w-600">{name}</h6>
                                                <p>Return 19</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                <div class="button">
                                                <Button type="submit" variant="light" onClick={logoutHandler} >Log out</Button>
                                                    </div>
                                            </div>
                                        </div>
                                            <div class="userCardBlock2 text-center">
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <Form onSubmit={onSubmitHandler}>
                                                <div class="infoRow">
                                                    <div >
                                                        <div class="m-b-10 f-w-600">Email</div>
                                                        <div class="f-w-400">{email}</div>
                                                    </div>
                                                    <div class="input">
                                                        <label class="m-b-10 f-w-600">Birthday</label>
                                                        <Form.Control type="date"value={birthday} onChange={handleInput("birthday")}/>
                                                    </div>
                                                    
                                                </div>
                                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Introduction</h6>
                                                <div class="infoRow ">
                                                    <div class="input">
                                                        <label class="m-b-10 f-w-600">Bio</label>
                                                        <Form.Control type="text" value={bio} onChange={handleInput("bio")} placeholder="About you"/>
                                                    </div>
                                                    <div class="input">
                                                        <label class="m-b-10 f-w-600">Interest</label>
                                                        <Form.Control type="text" value={interest} onChange={handleInput("interest")} placeholder="Interested in"/>

                                                    </div>
                                                    <div class="input">
                                                        <label class="m-b-10 f-w-600">URL</label>
                                                        <Form.Control type="text" value={url} onChange={handleInput("url")} placeholder="Your Page"/>
                                                    </div>
                                                    <div class="button">
                                                        <Button type="submit" variant="light" >Update Profile</Button>
                                                    </div>
                                                    

                                                    
                                                </div>
                            </Form>

                            </div>
                        </div>
                    </div>
                    
            </StyleProfileForm>
            
        </>
    )
}

export default ProfileForm

const StyleProfileForm = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

    font-family: "Noto Sans KR", sans-serif;
    }
    .profileBox{
        width:700px;
        margin: 100px auto;

    }
    .profileContainer{
        display: flex;
        align-contents: center;

    }
    body {
        background-color: #f9f9fa
    }


    .user-userCard-full {
        overflow: hidden
    }

    .userCard {
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.2);
        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.2);
        border: none;
        margin-bottom: 30px
    }

    .user-userCard-full .userProfile {
        border-radius: 5px 0 0 5px
    }


    .userProfile {
        padding: 20px 0
        background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f));
        background: linear-gradient(to right, #6644df, #901ea7)
    }

    .userCardBlock1 {
        padding: 1.25rem;
        padding-top:3rem;
        width:200px;

    }
    .userCardBlock2{
        padding: 1.25rem;
        width:500px;
    }
    

    .m-b-25 {
        margin-bottom: 25px
    }

    .img-radius {
        width:100px;
        border-radius: 10px
    }

    h6 {
        font-size: 14px
    }

    .userCard .userCard-block p {
        line-height: 25px
    }

    @media only screen and (min-width: 1400px) {
        p {
            font-size: 14px
        }
    }

    .userCard-block {
        padding: 1.25rem
    }

    .b-b-default {
        border-bottom: 1px solid #e0e0e0
    }

    .m-b-20 {
        margin-bottom: 10px
    }

    .p-b-5 {
        padding-bottom: 5px !important
    }

    .userCard .userCard-block p {
        line-height: 25px
    }

    .m-b-10 {
        margin-bottom: 5px
    }

    .text-muted {
        color: #919aa3 !important
    }

    .b-b-default {
        border-bottom: 1px solid #e0e0e0
    }

    .f-w-600 {
        font-weight: 600
    }

    .m-b-20 {
        margin-bottom: 20px
    }

    .m-t-40 {
        margin-top: 20px
    }

    .p-b-5 {
        padding-bottom: 5px !important
    }

    .m-b-10 {
        margin-bottom: 10px
    }

    .m-t-40 {
        margin-top: 20px
    }

    .user-userCard-full .social-link li {
        display: inline-block
    }

    .user-userCard-full .social-link li a {
        font-size: 20px;
        margin: 0 10px 0 0;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out
    }
    label{
        margin-top:15px;
        display:block;
    }
    .button{
        margin-top:30px
    }
    .infoRow{
        width:100%;
    }
    .input{
        margin:0px auto;
        width:200px;
    }
    button{
        font-weight: 600
    }
`;