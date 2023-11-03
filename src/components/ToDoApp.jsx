import React from 'react';
import AddComponent from './AddComponent.jsx';
import ShowList from './ShowList.jsx';


const ToDoApp = () =>{

    const [listitems, setListItems] = React.useState([]);
    const insertListItem = (val) =>{
        setListItems([...listitems, val]);
    }

    const deleteListItem = (key) =>{
        setListItems(
            listitems.filter(function(val){
                return val !== key;
            })
        );
    };

    return(
        <div className="AppContainer">
            <AddComponent insertListItem={insertListItem} />
            <ShowList topicList={listitems} deleteItem={deleteListItem} />
        </div>
    );
};

export default ToDoApp;