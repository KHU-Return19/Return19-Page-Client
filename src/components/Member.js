import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Member = ({ member })=>{
    return(
        <>
            <StyleMember>
                <div class="col-md-4">
                    <div class="card-box text-center">
                        <div class="user-pic">
                            <img src="https://audition.hanbiton.com/images/common/img_default.jpg" class="img-fluid" alt="User Pic"/>
                            </div>
                            <h4>{member.name}</h4>
                            
                            <h6>I'm interested in</h6>
                            <p>{member.interest}</p>
                            <hr></hr>
                            <p>{member.bio}</p>
                            
                            <a href={member.url} class="btn btn-primary">Page</a>
                        
                    </div>
                </div>
            </StyleMember>
        </>
    )
}

export default Member

    const StyleMember = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

    font-family: "Noto Sans KR", sans-serif;
    }
    .row{
        float:left
    }

    }
    .user-pic {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 100%;
        margin: 20px auto 20px;
        border-left: 3px solid #ddd;
        border-right: 3px solid #ddd;
        border-top: 3px solid #007bff;
        border-bottom: 3px solid #007bff;
        transform: rotate(-30deg);
        transition: 0.5s;
    }
    .card-box:hover .user-pic {
        transform: rotate(0deg);
        transform: scale(1.1);
    }
    .card-box {
        padding: 15px;
        background-color: #fdfdfd;
        margin: 20px 0px;
        border-radius: 10px;
        border: 1px solid #eee;
        box-shadow: 0px 0px 8px 0px #d4d4d4;
        transition: 0.5s;
    }
    .card-box:hover {
        border: 1px solid #007bff;
    }
    .card-box p {
        color: #808080;
    }
    h6{
        color:#0d6efd;
        font-weight:600
    }
    .col-md-4{
        width: 100%;
       
    }

`