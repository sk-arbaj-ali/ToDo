import React from 'react';
import tickIcon from "../assets/images/icons8-tick-48.png";

const Modal = ({setModalFalse, itemKey}) =>{
    return(
        <div className="ModalContainer">
            <div className="modal">
                <label htmlFor="editNote">New Note: </label>
                <input type="text" id="editNote" />
                <img src={tickIcon} alt="Tick Icon" onClick={setModalFalse} />
            </div>
        </div>
    );
};

export default Modal;