import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import Header from '../components/Header';
import Calendar from "../components/Calendar";
import Modal from '../components/Modal';
import Button from '../components/Button';
import Event from '../components/Event';


const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectDate, setSelectDate] = useState(dayjs());
  const [eventList, setEventList] = useState([
    { "date" : "2021-08-30",
    "info" : "일정",
    "userid" : "유저고유id" },

    { "date" : "2021-08-31",
    "info" : "일정",
    "userid" : "유저고유id" }
]);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const eventListToday = () => {
    const eventToday = eventList.filter(event => event.date === selectDate.format('YYYY-MM-DD'));
    return eventToday;
  }

  /*
  const EventRender = async () => {
    try {
        const response = await axios.get("/api/calendar");
        const success = await response.data.success;
        if(!success) {
          throw new Error(`Http error! status: ${response.status}`);
        }
        success && setEventList(response.calendar_list);
        } catch(error) {
            console.log(error);
        }
  }
*/

  const EventRender = () => {
    axios
      .get("/api/calendar/")
      .then((res) => {
        if(res.data.success) {
          setEventList(res.calendar_list)
        }
        else {
          console.log(res.data)
          alert(res.data.msg)
        }
      }).catch( res => { console.log(res) } );
  };

  useEffect(() => {
    EventRender();
  },[]);

  return (
    <>
      <Header />
      <Calendar selectDate={selectDate} setSelectDate={setSelectDate} openModal={openModal} eventList={eventList}/>
      <Modal isOpen={ isModalOpen } close={ closeModal }>
        <b>{selectDate.format('MM/DD')} Events </b>
        {eventListToday().map(event => {
          return <Event date={event.date} content={event.info}/>
        })}
      </Modal>
      <Link to="/addEvent">
        <Button>Add Event</Button>
      </Link>
    </>
  )
}

export default CalendarPage;