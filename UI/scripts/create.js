const personalAdd = document.getElementById('personal-add');
const professionalAdd = document.getElementById('professional-add');
const choresAdd = document.getElementById('chores-add');
const addPopup = document.getElementById('popup');
const todoAdd = document.getElementById('todo-add');
const addDescription = document.getElementById("description-add");


let categoryId; 

const createTodo = async (description) => {
    const formData = new FormData();
        formData.append('description', description);
        formData.append('category_id', categoryId);
        formData.append('user_id', paramValue);

    try {
        const result = await axios.post(
            "http://localhost/new-todo-website/APIs/create.php",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            }
            );

        if (result.data.status == "success")
        {
            window.location.href = `../UI/pages/todo.html?user_id=${result.data.user_id}`;
        }
        else
        {
            console.log("OUT")
        }
        } catch (error) {
            console.log(error);
    }
  };

personalAdd.addEventListener('click', () => {
    addPopup.classList.remove("hidden"); 
    categoryId = 1;
})

professionalAdd.addEventListener('click', () => {
    addPopup.classList.remove("hidden"); 
    categoryId = 2;
})

choresAdd.addEventListener('click', () => {
    addPopup.classList.remove("hidden"); 
    categoryId = 3;
})

todoAdd.addEventListener('click', ()=>{
    createTodo(addDescription.value);
})



