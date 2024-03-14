const signUp = async (email, username, password) => {
    console.log(email);
    try {
        const result = await axios.post(
            "http://localhost/new-todo-website/APIs/signup.php",
            {
                email: email,
                username: username,
                password: password,
            },
            {
                headers: {
                "Content-Type": "application/json",
                },
            }
            );
                console.log(result.data)
        return result.data;

        } catch (error) {
        console.log(error);
    }
  };
  

const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("signup-btn");

signUpBtn.addEventListener('click', () => {
    signUp(emailInput.value, usernameInput.value, passwordInput.value);
}   
    )