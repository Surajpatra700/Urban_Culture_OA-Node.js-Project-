# Rest API Using Node.Js and in-memory Database for CRUD Operations

```markdown

A simple REST API built using Node.js and Express, which performs CRUD operations on an in-memory user database.

## Features

- **GET** `/users`: Fetch all users.
- **GET** `/users/:id`: Fetch user by ID.
- **POST** `/users`: Create a new user.
- **PUT** `/users/:id`: Update a user's details.
- **DELETE** `/users/:id`: Delete a user by ID.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone 
   ```

2. **Install Dependencies**:
   ```bash
   npm install express body-parser
   ```
   ```bash
   npm install -g nodemon
   ```

3. **Start the Server**:
   ```bash
   npx nodemon app.js
   ```

## API Endpoints

### 1. **GET /users**
   - **Description**: Fetch all users.
   - **Response**:
     ```json
     [{ "id": 1, "name": "Suraj" }, { "id": 2, "name": "Satyam" }]
     ```

### 2. **GET /users/:id**
   - **Description**: Fetch user by ID.
   - **Example**: `GET /users/1`
   - **Response** (if found):
     ```json
     { "id": 1, "name": "Suraj" }
     ```

### 3. **POST /users**
   - **Description**: Create a new user.
   - **Request Body**:
     ```json
     { "name": "Charlie" }
     ```
   - **Response**:
     ```json
     { "id": 3, "name": "Charlie" }
     ```

### 4. **PUT /users/:id**
   - **Description**: Update a user's name by id.
   - **Request Body**:
     ```json
     { "name": "Rajiv" }
     ```
   - **Response**:
     ```json
     { "id": 1, "name": "Rajiv" }
     ```

### 5. **DELETE /users/:id**
   - **Description**: Delete a user by ID.
   - **Response**:
     ```json
     { "message": "User deleted successfully" }
     ```

## Project Structure

```
.
├── app.js         # Main application file
├── package.json   # Project dependencies
└── README.md      # Project documentation
```
