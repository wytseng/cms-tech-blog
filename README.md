# [Incomplete CMS Tech Blog

## Status

This project is currently in the work. 

I don't feel very competent to finish this assignment at the moment. I would take a couple days to review the course materials and get a better grasp on the knowledge before I start working on this project as I want to make sure I understand the code, instead of blindly copying the example files. 

(12/22) 



user

post 
-> belongs to user
-> has many comments 

comments 
-> belongs to user and post


-----

- homepage ['/']
    - displays all blog posts (with post title and date created)

- individual posts ['/post/:id] (can browse but can't comment if not logged in)
  - includes post title, content, creator's username, date created. 
  - below is option to leave a comment. 
  - if a comment is submitted the page will refresh with the updated comment (with content, username, and created date)

- dashboard ['/dashboard'](redirect to login if not logged in)
  - display all posts that I have created (title) with option to add posts

  - clicking on a post --> edit post ['/dashboard/edit/:id]
    - can update or delete post 
  
  - add w new post --> new post ['/dashboard/new']

- login ['/login']
    - enter exsiting username and password 
    - if successful, login session would start 

- signup ['/singup']
    - enter username and password 
    - saved and login session will begin 