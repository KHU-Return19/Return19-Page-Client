import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const AddScheduleForm = (props) => {
    const { date, schedule, handleInput, onSubmitHandler } = props;
    return(
        <>
        <StyleAddScheduleForm>
            <div class="scheduleForm">
                <h2 class="scheduleFormTitle">Add Schedule</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="scheduleFormRow">
                        <label>Date</label>
                        <Form.Control type="date" value={date} onChange={handleInput("date")}  required />
                    </div>
                    <div class="scheduleFormRow">
                        <label>Schedule</label>
                        <Form.Control type="text" value={schedule} onChange={handleInput("schedule")} placeholder="what's your matter?" required/>
                    </div>
                    
                    <div class="scheduleFormBtn scheduleFormBtn1 scheduleFormRow">
                    <button type="submit">Add</button>
                    </div>
                </form>
                <div class="scheduleFormBtn scheduleFormBtn2 scheduleFormRow">     
                <Link to = "/calendar"><button>Cancel</button></Link>
                </div>
            </div>
        </StyleAddScheduleForm>
        </>
    )
}

export default AddScheduleForm;

const StyleAddScheduleForm = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

font-family: "Noto Sans KR", sans-serif;
}

.scheduleForm {
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

.scheduleFormTitle {
text-align: center;
font-family: "open sans", sans-serif;
padding: 2rem 0;
margin: 0;
font-size: 2rem;
font-weight: 700;
color:#1e1e1e

}

.scheduleFormRow {
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1rem;
max-width: 100%;
}

.scheduleFormRow input {
width: 80%;
box-sizing: border-box;
border: none;
font-size: 1.2rem;
padding-left: 1.5rem;
padding-bottom: 1rem;
box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
transition: box-shadow 0.2s ease-in;
}

.scheduleFormRow input:focus {
box-shadow: inset 0px -3px 0px 0px #91A8D1;
outline: none;
}

.scheduleFormRow input::-webkit-input-placeholder {
opacity: 1;
transition: opacity 0.25s ease-out;
}

.scheduleFormRow input:hover::-webkit-input-placeholder,
.scheduleFormRow input:focus::-webkit-input-placeholder {
opacity: 0;
}

.scheduleFormRow label {
align-self: start;
padding-left: 4.5rem;
padding-bottom: 0.5rem;
color: rgba(187, 187, 187, 0.9);
}

.scheduleFormRow button {
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

.scheduleFormRow button:hover {
opacity: 0.8;
}

.scheduleFormBtn {
padding-top: 1rem;
padding-bottom: 0.1rem;
}

.scheduleFormBtn2 button{
    background: #91A8D1 ;
    background: linear-gradient(
        45deg,
        #a691c0 0%,
        #91A8D2 100%
    );
}
.scheduleFormBtn2{
    padding-bottom: 2rem;
}
a{
    text-decoration:none;
    color : #FFFFFF;
    width:100%;
    text-align:center;
}
.scheduleFormBtn1 {
    padding-top:2rem;
}
button{
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

`;