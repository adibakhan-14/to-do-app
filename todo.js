//1. Capturing the user input
//2. After clicking the input button
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.task-completed');



//-----1. Create a todo container
//-----2. create an list element
//-----3. create an update and trash button
//-----4. insert all the elements into the div
//-----5. insert the div element into the to-do list

todoButton.addEventListener('click', function(event) {
    event.preventDefault();

    const userInput = todoInput.value;
    //creating the todo div
    if (userInput == '') {
        alert("please give an input");

    } else {

        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        const todoListItem = document.createElement('li');
        todoListItem.className = 'todo-item';
        todoListItem.innerText = userInput;

        todoDiv.appendChild(todoListItem);



        //creating edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.innerHTML = '<i class="far fa-edit"></i>';
        todoListItem.appendChild(editButton);
        //add button
        const checkButton = document.createElement('button');
        checkButton.className = 'check';
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        todoListItem.appendChild(checkButton);
        const trashButton = document.createElement('button');
        trashButton.className = 'trash';
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoListItem.appendChild(trashButton);

        //appending the list into tododiv 
        todoList.appendChild(todoDiv);
        todoInput.value = '';
        // checkTodoList();


    }



    //3. Add event listener to check and trash buttton



    // console.log(userInput);


});

console.log(todoList, "eita amar list");
todoList.addEventListener('click', function(e) {
    const clickedEl = e.target;

    if (clickedEl.className === 'check') {

        const todoDiv = clickedEl.parentNode;

        todoDiv.classList.add('completed');
        clickedEl.remove();
        // todoDiv.removeChild(clickedEl);




    } else if (clickedEl.className === 'trash') {
        const todoDiv = clickedEl.parentNode;
        todoDiv.classList.add('drop-effect');
        // todoDiv.className += ' drop-effect';
        todoDiv.addEventListener('transitioned', function() {
            todoDiv.remove();
            // checkTodoList();
        });


    } else if (clickedEl.className == 'edit') {
        const todoDiv = clickedEl.parentNode;
        const firstChild = todoDiv.children[0];
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = firstChild.innerText;
        todoDiv.insertBefore(inputField, firstChild);
        firstChild.remove();
        clickedEl.innerHTML = '<i class="far fa-save"></i>';
        clickedEl.className = 'save';

    } else if (clickedEl.className == 'save') {
        const todoDiv = clickedEl.parentNode;
        const firstChild = todoDiv.children[0];
        const li = document.createElement('li');
        li.innerText = firstChild.value;
        li.className = 'todo-item';
        todoDiv.insertBefore(li, firstChild);
        firstChild.remove();
        clickedEl.innerHTML = '<i class="far fa-edit"></i>';
        clickedEl.className = 'edit';

    }
});


// function checkTodoList() {

//     if (todoList.children.length <= 0) {

//         todoCompleted.style.display = 'block';

//     } else {
//         todoCompleted.style.display = 'none';
//     }
// }