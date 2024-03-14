const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("signup-btn");


const signUp = async (email, username, password) => {
    const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

    try {
        const result = await axios.post(
            "http://localhost/new-todo-website/APIs/signup.php",
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
  

signUpBtn.addEventListener('click', () => {
    const result = signUp(emailInput.value, usernameInput.value, passwordInput.value);
    result.then((data)=>{console.log(data)});
});