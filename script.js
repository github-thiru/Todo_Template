function handleTodo() {
  let container = document.getElementById("container");
  let id = document.getElementById('id');
  let detail = document.getElementById('details');


  if (id.value === "" || detail.value === "" ) {
      alert('Both values are required');
      // return;
  }

  // Create todo item
  let todo = document.createElement('div');
  todo.classList.add('todo-item');

  let title = document.createElement('h1');
  title.innerText = id.value;

  let todo_details = document.createElement('p');
  todo_details.innerText = detail.value;

  // Create buttons
  let edit = document.createElement('button');
  edit.innerText = "EDIT";
  edit.className = "edit-button";

  let dele_te = document.createElement('button');
  dele_te.innerText = 'DELETE';
  dele_te.className = 'delete-button';

  let complete = document.createElement('button');
  complete.innerText = "COMPLETE";
  complete.className = 'complete-button';

  // Append elements
  todo.appendChild(title);
  todo.appendChild(todo_details);
  todo.appendChild(edit);
  todo.appendChild(dele_te);
  todo.appendChild(complete);
  container.appendChild(todo);

  // Update/Edit functionality
  edit.addEventListener("click", () => {
      id.value = title.innerText;
      detail.value = todo_details.innerText;
      container.removeChild(todo);
  });

  // Remove todo item
  dele_te.addEventListener('click', () => {
      container.removeChild(todo);
  });

  // Mark todo as complete
  complete.addEventListener('click', () => {
      todo.style.backgroundColor = "orange";
      todo.style.color = 'white';
      complete.style.backgroundColor = "green";
      complete.innerText = "success";
  });

  // Clear input fields
  id.value = "";
  detail.value = "";
}