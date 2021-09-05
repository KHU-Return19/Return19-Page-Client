import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AddGroupForm from '../components/AddScheduleForm';
import Modal from '../components/Modal';
import axios from 'axios';

const AddGroupPage = (props) => {
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [userid, setUserId] = useState("");
    const [about, setAbout] = useState("");
    const [url, setUrl] = useState("");
    const [isFin, setIsFin] = useState(undefined);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const handleInput = (type) => (event) => {
        const targetVal = event.currentTarget.value;
        if(type === "title") {setTitle(targetVal)}
        if(type === "info") {setInfo(targetVal)}
        if(type === "userid") {setUserId(targetVal)}
        if(type === "about") {setAbout(targetVal)}
        if(type === "url") {setUrl(targetVal)}
        if(type === "isFin") {setIsFin(targetVal)}
    }


    const onSubmitHandler = (event) => {
        event.preventDefault()

        let groupObj = {
            title: title,
            info: info,
            userid: userid,
            about: about,
            url: url,
            isFin: isFin,
        }

        axios.post("api/study/add",groupObj)
        .then((response)=>{
            const success = response.data.success;
            success ? (setIsModalOpen(true)) : (alert(response.data.msg));
        })
        .catch((error) => {console.log(error)});
    }

    const backToOngoing = () => {
        setIsModalOpen(false);
        goBack();
    }

    return (
        <>
            <AddGroupForm 
                handleInput={handleInput}
                onSubmitHandler={onSubmitHandler}
            />
            <Modal isOpen={isModalOpen} close={backToOngoing}>
                <span>Successfully Added!</span>
            </Modal>
        </>
    )
}

export default AddGroupPage;