import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';
import ModifyScheduleForm from '../components/ModifyScheduleForm'
import Modal from '../components/Modal';
import axios from 'axios';

const ModifySchedulePage = (props) => {
    const [date, setDate] = useState(props.location.state.date);
    const [schedule, setSchedule] = useState(props.location.state.schedule);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();

    const goBack = () => {
        history.goBack();
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

        axios.post("api/calendar/update/",ScheduleObj)
        .then((response)=>{
            const success = response.data.success;
            success ? (setIsModalOpen(true)) : (alert(response.data.msg));
        })
        .catch((error) => {console.log(error)});
    }

    const deleteSchedule = () => {
        axios.delete("/api/calendar/del/id")
        .then((response) => {
            const success = response.data.success;
            success ? (console.log("done")) : (alert(response.data.msg))
        })
        .catch((error) => {console.log(error)})
        .then(backToCalendar);
    }

    const backToCalendar = () => {
        setIsModalOpen(false);
        goBack();
    }
    return (
        <>
            <ModifyScheduleForm 
                date={date}
                schedule={schedule}
                handleInput={handleInput}
                onSubmitHandler={onSubmitHandler}
                deleteSchedule={deleteSchedule}
            />
            <Modal isOpen={isModalOpen} close={backToCalendar}>
                <span>Successfully Modified!</span>
            </Modal>
        </>
    )
}

export default ModifySchedulePage;
