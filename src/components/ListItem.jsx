import React, { useState } from 'react';
import deleteIcon from '../assets/images/icons8-delete-64.png';
import editIcon from '../assets/images/icons8-edit-64.png';
import strikeIcon from '../assets/images/icons8-strike-through-96.png';
import '../styles/ListItem.css';

const ListItem = ({content, itemKey, deleteItem, setModalTrue, passItemKeyToModal}) =>{

    const [strikeThrough, setStrikeThrough] = useState(false);
    const inputKeyToFun = () =>{
        deleteItem(itemKey);
    };
    const passKeyToModal = () =>{
        passItemKeyToModal(itemKey,content);
        setModalTrue();
    };
    return(
        <div className='list-item'>
            <img src={strikeIcon} alt="strike through icon" />
            <input type='checkbox' name='strikeThrough' onChange={()=> setStrikeThrough(!strikeThrough)} />
            <li style={strikeThrough ? {textDecoration:'line-through'} : {}}>{content}</li>
            <img src={deleteIcon} alt="delete icon" onClick={inputKeyToFun} />
            <img src={editIcon} alt="edit icon" onClick={passKeyToModal} />
        </div>
    );
};

export default ListItem;