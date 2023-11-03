import React from 'react';
import ListItem from './ListItem';

const ShowList = ({topicList, deleteItem}) =>{
    return(
        <div className="ListItem_Container">
            <ul>
                {topicList.map(function(value){
                    return <ListItem content={value} key={value} itemKey={value} deleteItem={deleteItem} />
                })}
            </ul>
        </div>
    );
};

export default ShowList;