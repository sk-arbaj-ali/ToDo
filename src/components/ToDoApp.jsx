import React from 'react';
import AddComponent from './AddComponent.jsx';
import ShowList from './ShowList.jsx';
import Modal from './Modal.jsx';


const ToDoApp = () =>{

    const [listitems, setListItems] = React.useState([]);
    const [isModalVisible, setModalVisibility] = React.useState(false);
    const [itemKeyPassedToModal, setItemKeyForModal] = React.useState("");
    const insertListItem = (val) =>{
        setListItems([...listitems, val]);
    };

    const deleteListItem = (key) =>{
        setListItems(
            listitems.filter(function(val){
                return val !== key;
            })
        );
    };

    const setModalVisibilityToTrue = () =>{
        setModalVisibility(true);
    };
    const setModalVisibilityToFalse = () =>{
        setModalVisibility(false);
    };

    const passItemKeyToModal = (itemKey) =>{
        setItemKeyForModal(itemKey);
    };

    return(
        
        <div className="AppContainer">
            {isModalVisible ? <Modal setModalFalse={setModalVisibilityToFalse} itemKey={itemKeyPassedToModal} /> : null}
            <AddComponent insertListItem={insertListItem} />
            <ShowList topicList={listitems} deleteItem={deleteListItem} setModalTrue={setModalVisibilityToTrue} passItemKeyToModal={passItemKeyToModal} />
        </div>
        
    );
};

export default ToDoApp;