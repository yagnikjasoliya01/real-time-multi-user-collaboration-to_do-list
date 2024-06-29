// // Select the button element
// const redirectButton = document.getElementById('btn');

// // Add a click event listener to the button
// redirectButton.addEventListener('click', function() {
//   // Redirect to another page
//   window.location.href = 'http://127.0.0.1:5501/main%20page/main.html';
// });


// Simulated initial data for tasks (can be replaced with actual data from backend)
let tasks = [
    {
        id: 1,
        title: 'SPORTS',
        description: 'i have to play cricket at 5pm.',
        dueDate: '2024-06-30',
        assignee: 'Yagnik',
        priority: 'Medium'
    },
    {
        id: 2,
        title: 'Health',
        description: 'remember to exercise daily',
        dueDate: '2024-07-05',
        assignee: 'Yash',
        priority: 'High'
    }
];

// Function to display tasks on the page
function displayTasks(tasksArray) {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = ''; // Clear previous content

    const tasksToDisplay = tasksArray || tasks; // Display all tasks if no filter applied

    tasksToDisplay.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>Description: ${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Assignee: ${task.assignee}</p>
            <p>Priority: ${task.priority}</p>
            <div class="task-actions">
               <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskContainer.appendChild(taskItem);
    });
}

// Function to handle search button click
function searchTasks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchInput) ||
        task.description.toLowerCase().includes(searchInput) ||
        task.assignee.toLowerCase().includes(searchInput) ||
        task.priority.toLowerCase().includes(searchInput)
    );

    displayTasks(filteredTasks); // Update task list with filtered tasks
}

// Function to handle task creation
function createTask(event) {
    event.preventDefault(); // Prevent form submission
    const taskForm = document.getElementById('taskForm');
    const formData = new FormData(taskForm);

    const newTask = {
        id: tasks.length + 1,
        title: formData.get('taskTitle'),
        description: formData.get('taskDescription'),
        dueDate: formData.get('dueDate'),
        assignee: formData.get('assignee'),
        priority: formData.get('priority')
    };

    tasks.push(newTask);
    displayTasks();
    taskForm.reset(); // Clear form fields after submission
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

// Function to edit a task (not fully implemented here, just an example)
function editTask(taskId) {
    const taskToEdit = tasks.find(task => task.id === taskId);
    // You can implement editing functionality here based on your requirements
    // For simplicity, you might show a modal with prefilled form fields
}

// Event listener for form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', createTask);

// Initial display of tasks when the page loads
document.addEventListener('DOMContentLoaded', displayTasks);

window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("backToTopBtn");
    if (window.scrollY > 50) { // Adjust the threshold as needed (e.g., 100px)
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  
  
