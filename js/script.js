// Selecting elemnts

let newTask=document.querySelector('#new-task');
let form= document.querySelector('form');
let todoUL=document.querySelector('#items');
let completeUL=document.querySelector('.complete-list ul');


//functions

let createTask= function(task)
{
    let listItem=document.createElement('li');
    let checkBox=document.createElement('input');
    let label=document.createElement('label');

    label.innerText=task;
    checkBox.type='checkbox';
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
};

let addTask=function(event)
{
    event.preventDefault();
    let listItem=createTask(newTask.value);
    todoUL.appendChild(listItem);
    newTask.value="";

    ComItems(listItem,comtask);
};

let comtask=function()
{
    let listItem=this.parentNode;
    let deletebtn=document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.className='delete';
    listItem.appendChild(deletebtn); 

    let checkBox=listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUL.appendChild(listItem);
    CompItems(listItem,deletetask);   
}

let deletetask=function()
{
    let listItem=this.parentNode;
    let ul=listItem.parentNode;
    ul.removeChild(listItem); 
};

let ComItems=function(taskItem,checkBoxClick)
{
    let checkBox=taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange=checkBoxClick;
}
let CompItems=function(taskItem,deletebutton)
{
    let x=taskItem.querySelector('.delete');
    x.onclick=deletebutton;    
}


for(let i=0;i<todoUL.children.length;i++)
{
    ComItems(todoUL.children[i],comtask);
}

for(let i=0;i<completeUL.children.length;i++)
{
    CompItems(completeUL.children[i],deletetask);
}
form.addEventListener('submit',addTask);