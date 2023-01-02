const loginFormHandler = async(event) => {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const response = await fetch("/api/user/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
    
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('failed to log in');
  }
};

document.querySelector("#login-form").addEventListener("submit", loginFormHandler);