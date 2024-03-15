const userInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");
const loginBtn = document.getElementById("login-btn");

const login = async (userInput, passwordInput) => {
    const formData = new FormData();
        formData.append('user_input', userInput);
        formData.append('password', passwordInput);

    try {
        const result = await axios.post(
            "http://localhost/new-todo-website/APIs/signin.php",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            }
            );
        if (result.data.status == "logged in")
        {
            window.location.href = `../pages/todo.html.?user_id=${result.data.user_id}`;
        }
        else
        {
            console.log("OUT")
        }
        } catch (error) {
            console.log(error);
    }
  };
  

loginBtn.addEventListener('click', () => {
    const result = login(userInput.value, passwordInput.value);
    result.then((data)=>{console.log(data)});
});