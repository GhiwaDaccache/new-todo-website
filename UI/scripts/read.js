const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('user_id');
const personalTodo = document.getElementById('personal');
const  professionalTodo = document.getElementById('professional');
const choresTodo = document.getElementById('chores');



axios.get(`http://localhost/new-todo-website/APIs/read.php?user_id=${paramValue}`)
  .then(response => {
    
    const todoList = response.data.todos;
    const personal = todoList.filter(item => item["category_id"] == 1);
    const professional = todoList.filter(item => item["category_id"] == 2);
    const chores = todoList.filter(item => item["category_id"] == 3);
    personalTodo.innerHTML = "";
    professionalTodo.innerHTML = "";
    choresTodo.innerHTML = "";

    personal.forEach(element => {
        personalTodo.innerHTML += `<div class="flex align-center full-w">
                                    <i class="fa-regular fa-square-check"></i>
                                    <p>${element.description}</p>
                                </div>`
    });

    professional.forEach(element => {
      professionalTodo.innerHTML += `<div class="flex align-center full-w">
                                    <i class="fa-regular fa-square-check"></i>
                                    <p>${element.description}</p>
                                </div>`
    });

    chores.forEach(element => {
      choresTodo.innerHTML += `<div class="flex align-center full-w">
                                    <i class="fa-regular fa-square-check"></i>
                                    <p>${element.description}</p>
                                </div>`
    });

  })
  .catch(error => {
    console.error('Error:', error);
  });

