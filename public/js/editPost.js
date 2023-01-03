const editPostHandler = async (event) => {
  event.preventDefault();

  console.log('update');

  const postId = document.querySelector('input[name="post-id"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  document.location.replace('/dashboard');
};

const deletePostHandler = async (event) => {
  event.stopPropagation();

  const postId = document.querySelector('input[name="post-id"]').value;
  console.log('delete');
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  })

  document.location.replace('/dashboard');
}

document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);
document.querySelector('#delete-post').addEventListener('click', deletePostHandler);