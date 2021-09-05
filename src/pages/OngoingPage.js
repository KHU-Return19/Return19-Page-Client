import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Header from '../components/Header';
import Group from '../components/Group';
import Button from '../components/Button';


import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const OngoingPage = () => {
    const [Groups, setGroups] = useState([
    { "title" : "제목",
    "info" : "설명",
    "userid" : "유저고유id",
    "about" : "분야",
    "url" : "링크",
    "isFin" : false },

    { "title" : "제목",
    "info" : "설명",
    "about" : "분야",
    "url" : "링크",
    "isFin" : true }])

    useEffect(() =>{
            axios.get("/api/study")
            .then(response =>{
                if(response.data.success){
                    setGroups(response.data.study_list);
                }
            })
            .catch((error)=>{console.log(error)})
    }, [])

    return (
        <>
        <Header />
        <StyledSwiper>
            <Swiper 
                spaceBetween={30} 
                pagination={{ "clickable": true}}
                autoplay={{ delay: 7000 }} 
                className="mySwiper">
                {Groups.map(group => {
                    return (
                        <SwiperSlide>
                            <Group 
                                title={group.title}
                                info={group.info}
                                userid={group.userid}
                                about={group.about}
                                url={group.url}
                                isFinish={group.isFin}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <StyledSwiperFooter>
                <Link to="/addGroup" >
                    <Button width={"40px"} fontSize={"1.6rem"}>+</Button>
                </Link>
            </StyledSwiperFooter>
        </StyledSwiper>
        </>
      )
}

export default OngoingPage;

const StyledSwiper = styled.div`
    .swiper{
        width: 80%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        border-radius: 25px;
        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.1);
      
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
      
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .swiper-pagination >>> .swiper-pagination-bullet {
          opacity: 1;
          border: white solid 1px;
          background-color: transparent;
      }
      .swiper-pagination >>> .swiper-paginatoin-bullet-active {
          background-color: #F6CAC9!important;
      }

`;

const StyledSwiperFooter = styled.div `
    display: inline-block;
    float: right;
    padding-right: 2rem;
`;