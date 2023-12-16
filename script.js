// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskInput.value}
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;

        // Add the new item to the list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentNode;
    const taskList = listItem.parentNode;

    // Remove the list item from the list
    taskList.removeChild(listItem);
}
