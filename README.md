* Shopping Portal Project

This project is a simple shopping portal built with Node.js and Express, featuring a RESTful API for basic CRUD operations to manage tasks. Each task in the system has a title, description, status, and timestamps for creation and last update.

** Features

- Create, Read, Update, and Delete tasks via RESTful API endpoints.
- Each task includes a title, description, status, creation timestamp, and last update timestamp.

** Technologies Used

- Node.js
- Express
- MongoDB (with Mongoose)

** Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and obtain the connection URI.
4. Start the server using `npm start`.
5. The server should now be running at `http://localhost:4500`.

** API Endpoints

*** Create Task
- **POST /tasks**
  - Create a new task.
  - Request body should include task details: title, description, and status.

*** Get All Tasks
- **GET /tasks**
  - Retrieve all tasks.

*** Get Task by title
- **GET /tasks/:id**
  - Retrieve a task by its title.

*** Update Task
- **PUT /tasks/:title**
  - Update an existing task by its title.
  - Request body can include any of the task details: title, description, or status.

*** Delete Task
- **DELETE /tasks/:title**
  - Delete a task by its title.

** Contributors

- OBAID

