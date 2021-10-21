const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Hellooooooooooo");
    const userInput = todoInput.value;
    if (userInput) {
        //creating the todo div
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        const todoListItem = document.createElement('li');
        todoListItem.className = 'todo-item';
        todoListItem.innerText = userInput;
        todoDiv.appendChild(todoListItem);

        //add button
        const checkButton = document.createElement('button');
        checkButton.className = 'check';
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        const trashButton = document.createElement('button');
        trashButton.className = 'trash';
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        //appending the list into tododiv 
        todoList.appendChild(todoDiv);
        todoListItem.appendChild(checkButton);
        todoListItem.appendChild(trashButton);
        //3. Add event listener to check and trash buttton



        console.log(userInput);
        todoInput.value = '';
    } else {
        alert("PLEASE ENTER AN INPUT");
    }

});
todoList.addEventListener('click', function(e) {
    const clickedEl = e.target;
    console.log(clickedEl);
    if (clickedEl.className == 'check') {
        const todoDiv = clickedEl.parentElement;

        todoDiv.classList.add('completed');
        clickedEl.remove();
        todoDiv.removeChild(clickedEl);


    } else if (clickedEl.className == 'trash') {
        const todoDiv = clickedEl.parentNode;
        todoDiv.classList.add('drop-effect');
        // todoDiv.className += ' drop-effect';
        todoDiv.addEventListener('transitioned', function() {
            todoDiv.remove();
        });

    }
})