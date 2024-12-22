




document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    // Get the task input value
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Get the task list element
        var taskList = document.getElementById('taskList');

        // Create a new list item element
        var listItem = document.createElement('li');

        // Create a text node with the task text
        var taskNode = document.createTextNode(taskText);

        // Append the text node to the list item
        listItem.appendChild(taskNode);

        // Create a delete button element
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        
        // Add an event listener for the delete button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}



