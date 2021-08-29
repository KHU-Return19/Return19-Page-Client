import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Modal = (props) => {
    const { isOpen, close, children } = props;
    return (
        <>
        <StyledModal>
            <div className={ isOpen ? 'openedModal modal' : 'modal'}>
            {isOpen ? (
                <div className="modalContainer">
                    <div className="content">{children}</div>
                    <div classname="footer">
                        <Button color="lightgrey" onClick={close}>Close</Button>
                    </div>
                </div>   
            ) : null }
            </div>
        </StyledModal>
        </>
    )
}

export default Modal;

const StyledModal = styled.div`
    .modal{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 999;
        background-color: rgba(0,0,0,0.6);
    }
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modalContainer {
        width: 90%;
        max-height: 300px;
        max-width: 450px;
        margin:0 auto;
        border-radius: 5px;
        background-color: #fff;
        overflow: hidden;
    }
    .content {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }
    .footer {
        padding: 12px 16px;
        text-align: right;
    }
    .footer button {
        padding: 6px 12px;
        color: #fff;
        background-color: #6c757d;
        border-radius: 5px;
        font-size: 13px;
    }
    .openedModal {
        display: flex;
        align-items: center;
    }

`;