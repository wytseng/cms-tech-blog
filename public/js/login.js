const loginFormHandler = async(event) => {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

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
    alert('failed to log in.');
  }
};

document.querySelector("#login-form").addEventListener("submit", loginFormHandler);