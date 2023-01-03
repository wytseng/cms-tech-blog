const commentFormHandler = async(event) => {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const content = document.querySelector('textarea[name="comment-body"]').value;

  if (content) {
    const response = await fetch("/api/comment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ postId, content })
    });

    if (!response.redirected) {
      document.location.reload();
    } else {
      document.location.replace('/login');
    }
  }
}

document.querySelector("#new-comment-form").addEventListener("submit", commentFormHandler);