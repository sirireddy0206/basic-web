// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('All fields are required!');
      e.preventDefault();
      return;
    }
  
    if (!emailPattern.test(email.value)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });
  
  // To-Do List Logic
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
  
    if (task === '') return;
  
    const li = document.createElement('li');
    li.textContent = task;
  
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.className = 'delete-btn';
    btn.onclick = () => li.remove();
  
    li.appendChild(btn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
  