const newPostHandeler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  if (title && content) {
    await fetch("/api/post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });
    
    document.location.replace('/dashboard');
  }
}

document.querySelector('#new-post-form').addEventListener('submit', newPostHandeler);