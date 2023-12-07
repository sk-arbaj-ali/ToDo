import React, { useEffect } from 'react';
import tickIcon from "../assets/images/icons8-tick-48.png";
import '../styles/Modal.css';

const Modal = ({setModalFalse, content, itemKey, editListItem}) =>{


    const [newNote, setNewNote] = React.useState(content);

    const handleInputChange = (event) =>{
        setNewNote(event.target.value);
    }

    const editListItemOnIconClick = () =>{
        editListItem(itemKey, newNote);
        setModalFalse();
        setNewNote("");
    }

    const handleClick = (event) =>{
        console.log(event);
        if(event.target.tagName === 'INPUT'){
            return;
        }
        else
        {
            setModalFalse();
            setNewNote('');
        }
    }

    return(
        <div className="ModalContainer" onClick={handleClick}>
            <div className="modal">
                <label htmlFor="editNote">New Note: </label>
                <input type="text" id="editNote" value={newNote} onChange={handleInputChange} />
                <img src={tickIcon} alt="Tick Icon" onClick={editListItemOnIconClick} />
            </div>
        </div>
    );
};

export default Modal;