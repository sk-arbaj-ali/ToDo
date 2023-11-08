import React from 'react';
import tickIcon from "../assets/images/icons8-tick-48.png";

const AddComponent = ({insertListItem}) =>{

    const [inpVal, setInpVal] = React.useState("");
    const handleInput = (event) =>{
        setInpVal(event.target.value);
    };
    const inputValtoFun = () =>{
        insertListItem(inpVal);
        setInpVal("");
    };

    return(
        <div className="AddField">
            <label htmlFor="inputField">Write your note here: </label>
            <input type="text" id="inputField" onChange={handleInput} value={inpVal} />
            <img src={tickIcon} alt="tick icon" id="tick_add_icon" onClick={inputValtoFun} />
        </div>
    );
};

export default AddComponent;