import React from 'react';
import deleteIcon from '../assets/images/icons8-delete-64.png';
import editIcon from '../assets/images/icons8-edit-64.png';

const ListItem = ({content, itemKey, deleteItem, setModalTrue, passItemKeyToModal}) =>{
    const inputKeyToFun = () =>{
        deleteItem(itemKey);
    };
    const passKeyToModal = () =>{
        passItemKeyToModal(itemKey,content);
        setModalTrue();
    };
    return(
        <>
            <li>{content}</li>
            <img src={deleteIcon} alt="delete icon" onClick={inputKeyToFun} />
            <img src={editIcon} alt="edit icon" onClick={passKeyToModal} />
        </>
    );
};

export default ListItem;