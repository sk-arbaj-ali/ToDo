import React from 'react';
import ListItem from './ListItem';
import '../styles/ShowList.css';

const ShowList = ({topicList, deleteItem, setModalTrue, passItemKeyToModal}) =>{
    return(
        <div className="ListItem_Container">
            <ul>
                {topicList.map(function(valObj){
                    return <ListItem content={valObj.note} key={valObj.key} itemKey={valObj.key} deleteItem={deleteItem} setModalTrue={setModalTrue} passItemKeyToModal={passItemKeyToModal} />
                })}
            </ul>
        </div>
    );
};

export default ShowList;