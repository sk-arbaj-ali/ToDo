import React from 'react';
import AddComponent from './AddComponent.jsx';
import ShowList from './ShowList.jsx';
import Modal from './Modal.jsx';
import '../styles/ToDoApp.css';

let counter = 0;
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let numberCount = 0;

const ToDoApp = () =>{

    const [listitems, setListItems] = React.useState([]);
    const [isModalVisible, setModalVisibility] = React.useState(false);
    const [itemKeyPassedToModal, setItemKeyForModal] = React.useState("");
    const [contentPassedToModal, setContentForModal] = React.useState("");
    const insertListItem = (val) =>{
        //===== Making the key =====//
        let key = numberCount.toString();
        numberCount++;
        if(counter<25){
            key += alphabets[counter];
            counter++;
        }
        else{
            counter = 0;
            key += alphabets[counter];
        }
        //===== * =====//
        let listItem = {"key":key, "note":val};
        setListItems([...listitems, listItem]);
    };

    const deleteListItem = (key) =>{
        setListItems(
            listitems.filter(function(valObj){
                return valObj.key !== key;
            })
        );
    };

    const editListItem = (key, value) =>{
        listitems.forEach(function(valObj){
            if(valObj.key === key){
                valObj.note = value;
            }
        });
        setListItems(listitems);
    }

    const setModalVisibilityToTrue = () =>{
        setModalVisibility(true);
    };
    const setModalVisibilityToFalse = () =>{
        setModalVisibility(false);
        document.querySelector('.modal').classList.remove('modal-top-animation');
    };

    const passItemKeyToModal = (itemKey, content) =>{
        setItemKeyForModal(itemKey);
        setContentForModal(content);
    };

    return(
        
        <div className="AppContainer">
            {isModalVisible ? <Modal setModalFalse={setModalVisibilityToFalse} content={contentPassedToModal} itemKey={itemKeyPassedToModal} editListItem={editListItem} /> : null}
            <AddComponent insertListItem={insertListItem} />
            <ShowList topicList={listitems} deleteItem={deleteListItem} setModalTrue={setModalVisibilityToTrue} passItemKeyToModal={passItemKeyToModal} />
        </div>
        
    );
};

export default ToDoApp;