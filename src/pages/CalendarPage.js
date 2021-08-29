import { React, useState } from "react";
import dayjs from 'dayjs';
import Header from '../components/Header';
import Calendar from "../components/Calendar";
import Modal from '../components/Modal';
import Button from '../components/Button';

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectDate, setSelectDate] = useState(dayjs());

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Calendar selectDate={selectDate} setSelectDate={setSelectDate}/>
      <Modal isOpen={ isModalOpen } close={ closeModal }>
        {selectDate.format('MM/DD')} Events
      </Modal>
      <Button color="lightgrey" onClick={openModal}>View Events</Button>
    </>
  )
}

export default CalendarPage;