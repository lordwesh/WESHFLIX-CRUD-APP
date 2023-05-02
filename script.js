let createButton = 
document.getElementById('create-button');

let createForm = document.getElementById('create-form');
let isCreateFormDisplaying = false;

let updateButton = document.getElementById('update-button');
let updateForm = document.getElementById('update-form');
let isUpdateFormDisplaying = false;


let deleteButton = document.getElementById('delete-button');
let deleteForm = document.getElementById('delete-form');
let isDeleteFormDisplaying = false;


//Toggle form
createButton.onclick = function(){

    if(isCreateFormDisplaying==false){
//Displaying the form
        createForm.style.display = 'block';
        isCreateFormDisplaying = true;

    }else{
        //hide the form
        createForm.style.display = 'none';
        isCreateFormDisplaying = false;
    }
}

//Toggle update form
updateButton.onclick = function(){
    
    if(isUpdateFormDisplaying==false){
        //Display the update form
        updateForm.style.display = 'block';
        isUpdateFormDisplaying = true;

    }else{
        //hide the form
        updateForm.style.display = 'none';
        isUpdateFormDisplaying = false;
    }

}


//Toggle Delete form
deleteButton.onclick = function(){
    
    if(isDeleteFormDisplaying==false){
        //DIsplay the delete form
        deleteForm.style.display = 'block';
        isDeleteFormDisplaying = true;

    }else{
        //hide the form
        deleteForm.style.display = 'none';
        isDeleteFormDisplaying = false;
    }
}