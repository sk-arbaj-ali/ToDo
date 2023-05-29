let add_item_input_field = document.querySelector("#new_item");
let add_item_btn = document.querySelector("#add_item_btn");
let items_list_div = document.querySelector("#items_list");

function add_item_into_list()
{
    let inputText = add_item_input_field.value;
    let newPara = document.createElement("p");
    let editImg = document.createElement("img");
    let spanTxt = document.createElement("span");
    let deleteImg = document.createElement("img");

    newPara.classList.add("list_item");
    editImg.setAttribute("src","./images/icons8-edit-64.png");
    editImg.setAttribute("alt","edit text");
    spanTxt.classList.add("item_text");
    deleteImg.setAttribute("src","./images/icons8-close-50.png");
    deleteImg.setAttribute("alt","delete item");

    // Appending childrens into it's specified position
    spanTxt.append(inputText);
    newPara.append(editImg);
    newPara.append(spanTxt);
    newPara.append(deleteImg);

    items_list_div.append(newPara);
    add_item_input_field.value="";
}

add_item_btn.addEventListener("click",(event)=>{
    add_item_into_list();
});