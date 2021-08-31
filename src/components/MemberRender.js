import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Member from './Member';
const MemberRender =(props)=>{
    const {renderMembers} = props
    return(
        <>
        <StyleMemberRender>
            <div class="container">
                <div class="row">
                    <div class="memberTitle">
                        <h2 class="text-center">Return 19</h2>
                        <p class="text-center">Welcome to Return 19 Page !</p>
                    </div>
                </div>
                <div class="row">
                    {renderMembers}
		        </div>
	        </div>  
        </StyleMemberRender>
        </>
    )
}

export default MemberRender

const StyleMemberRender = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

    font-family: "Noto Sans KR", sans-serif;
    }
    .row>div{
        width:33%
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

        .memberTitle{
            margin:0 auto;
            margin-top:20px
        }
        h2{
            font-weight:700
        }

`