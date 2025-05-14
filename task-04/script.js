// To-Do List
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

// Product Listing
const products = [
  { name: "Smartphone", category: "electronics", price: 499, rating: 4.5 },
  { name: "Laptop", category: "electronics", price: 899, rating: 4.7 },
  { name: "Book A", category: "books", price: 15, rating: 4.3 },
  { name: "Book B", category: "books", price: 25, rating: 4.6 }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortOption = document.getElementById('sortOption');

function renderProducts() {
  let filtered = [...products];

  if (categoryFilter.value) {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  if (sortOption.value === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  productList.innerHTML = '';
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    productList.appendChild(div);
  });
}

categoryFilter.onchange = sortOption.onchange = renderProducts;
window.onload = () => {
  loadTasks();
  renderProducts();
};
