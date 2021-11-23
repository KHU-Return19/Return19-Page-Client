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
                                <div class="userCard profileContainer">
                                        <div class="userProfile">
                                            <div class="userBoard text-center text-white">
                                                <div> <img src="https://audition.hanbiton.com/images/common/img_default.jpg" class="userImg" alt="userProfile-Image"/> </div>
                                                <h6>{name}</h6>
                                                <p>Return 19</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                <div class="button">
                                                <Button type="submit" variant="light" onClick={logoutHandler} >Log out</Button>
                                                    </div>
                                            </div>
                                        </div>
                                            <div class="userInfo text-center">
                                                <h6 class="subTitle">Information</h6>
                                                <Form onSubmit={onSubmitHandler}>
                                                <div class="infoRow">
                                                    <div >
                                                        <div class="label">Email</div>
                                                        <div class="f-w-400">{email}</div>
                                                    </div>
                                                    <div class="input">
                                                        <label class="label">Birthday</label>
                                                        <Form.Control type="date"value={birthday} onChange={handleInput("birthday")}/>
                                                    </div>
                                                    
                                                </div>
                                                <h6 class="subTitle">Introduction</h6>
                                                <div class="infoRow ">
                                                    <div class="input">
                                                        <label class="label">Bio</label>
                                                        <Form.Control type="text" value={bio} onChange={handleInput("bio")} placeholder="About you"/>
                                                    </div>
                                                    <div class="input">
                                                        <label class="label">Interest</label>
                                                        <Form.Control type="text" value={interest} onChange={handleInput("interest")} placeholder="Interested in"/>

                                                    </div>
                                                    <div class="input">
                                                        <label class="label">URL</label>
                                                        <Form.Control type="text" value={url} onChange={handleInput("url")} placeholder="Your Page"/>
                                                    </div>
                                                    <div class="button">
                                                        <Button type="submit" variant="light" >Update</Button>
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

    .userCard {
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.2);
        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.2);
        border: none;
        margin-bottom: 30px
    }

    .userProfile {
        border-radius: 5px 0 0 5px
        padding: 20px 0
        background: -webkit-gradient(linear, left top, right top, from(#91A8D2), to(#F6CAC9));
        background: linear-gradient(45deg, #F6CAC9, #91A8D2);
      

    }

    .userBoard {
        padding: 1.25rem;
        padding-top:3rem;
        width:200px;

    }
    .userBoard h6{
        font-size:20px;
    }
    .userInfo{
        padding: 1.25rem;
        width:500px;
    }
    .label{
        margin-bottom: 10px;
        font-weight:700;
        color: #91A8D2
    }
    .userImg {
        width:100px;
        border-radius: 10px;
        margin-bottom:25px;
    }
  
    .subTitle{
        padding-bottom: 5px !important;
        margin-bottom: 20px;
        border-bottom: 1px solid #282828;
        padding-top:20px;
        color: #1e1e1e
        font-weight:700

    }

    @media only screen and (min-width: 1400px) {
        p {
            font-size: 14px
        }
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
        font-weight: 600;
        border-radius: 20px;
        background-color:#91A8D2;
        border: 3px solid #91A8D2;
        color: white;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }
`;