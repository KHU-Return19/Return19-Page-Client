import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const AddScheduleForm = (props) => {
    const { date, schedule, handleInput, onSubmitHandler } = props;
    return(
        <>
        <StyleAddScheduleForm>
            <div class="authForm">
                <h2 class="authFormTitle">Add Schedule</h2>
                <form onSubmit={onSubmitHandler}>
                    <div class="scheduleFormRow">
                        <label>Date</label>
                        <Form.Control type="date" value={date} onChange={handleInput("date")}  required />
                    </div>
                    <div class="scheduleFormRow">
                        <label>Schedule</label>
                        <Form.Control type="text" value={schedule} onChange={handleInput("schedule")} placeholder="what's your matter?" required/>
                    </div>
                    
                    <div class="authFormBtn authFormBtn1 authFormRow">
                    <button type="submit">Add</button>
                    </div>
                </form>
                <div class="authFormBtn authFormBtn2 authFormRow">     
                <Link to = "/calendar"><button>Cancel</button></Link>
                </div>
            </div>
        </StyleAddScheduleForm>
        </>
    )
}

export default AddScheduleForm;

const StyleAddScheduleForm = styled.div``;