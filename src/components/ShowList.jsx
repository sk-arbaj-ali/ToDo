import React from 'react';
import ListItem from './ListItem';

const ShowList = ({topicList, deleteItem, setModalTrue, passItemKeyToModal}) =>{
    return(
        <div className="ListItem_Container">
            <ul>
                {topicList.map(function(value){
                    return <ListItem content={value} key={value} itemKey={value} deleteItem={deleteItem} setModalTrue={setModalTrue} passItemKeyToModal={passItemKeyToModal} />
                })}
            </ul>
        </div>
    );
};

export default ShowList;