import { React, useState } from 'react'
import dayjs from 'dayjs';
import AddScheduleForm from '../components/AddScheduleForm';
import Modal from '../components/Modal';
import axios from 'axios';

const AddSchedulePage = (props) => {
    const [date, setDate] = useState(dayjs());
    const [schedule, setSchedule] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const goBack = (props) => {
        props.history.goBack();
    }

    const handleInput = (type) => (event) => {
        const targetVal = event.currentTarget.value;
        type === ("date") ? (setDate(targetVal)) : (setSchedule(targetVal));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let ScheduleObj = {
            date: date,
            info: schedule
        }

        axios.post("api/calendar/add",ScheduleObj)
        .then((response)=>{
            const success = response.data.success;
            success ? (setIsModalOpen(true)) : (alert(response.data.msg));
        })
        .catch((error) => {console.log(error)});
    }

    const backToCalendar = () => {
        setIsModalOpen(false);
        goBack();
    }

    return (
        <>
            <AddScheduleForm 
                date={date}
                schedule={schedule}
                handleInput={handleInput}
                onSubmitHandler={onSubmitHandler}
            />
            <Modal isOpen={isModalOpen} close={backToCalendar}>
                <span>Successfully Added!</span>
            </Modal>
        </>
    )
}

export default AddSchedulePage;