const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('user_id');

axios.get(`http://localhost/new-todo-website/APIs/read.php?user_id=${paramValue}`)
  .then(response => {
    
    console.log('Response:', response.data);
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
