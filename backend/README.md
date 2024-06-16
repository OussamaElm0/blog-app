# Routes 

## Authentification

### POST /api/auth/register

#### Request Body
```json
{
    "username": "username",
    "email": "email",
    "password": "password"
}
```

- Register a new user with a unique username, email, and password.

### POST /api/auth/login

#### Request Body
```json
{
    "email": "email",
    "password": "password"
}
```

- Log in an existing user with their email and password.

### GET /api/auth/logout

- Log out the currently authenticated user.

## Users

### GET /api/users

- Retrieve a list of all users.

### GET /api/users/:id

- Retrieve a specific user by their ID.

### PUT /api/users/:id

#### Request Body
```json
{
    "email": "email",
    "password": "password"
}
```

- Update the email and password of a specific user.

### DELETE /api/users/:id

- Delete a specific user by their ID.

### GET /api/users/search/username

#### Request Body
```json
{
    "username": "username"
}
```

- Search for users by their username.

## Posts

### GET /api/posts

- Retrieve a list of all posts.

### POST /api/posts

#### Request Body
```json
{
    "content": "content",
    "tags": [..."tag"]
}
```

- Create a new post with the given content and tags.

### GET /api/posts/:id

- Retrieve a specific post by its ID.

### POST /api/posts/tags

#### Request Body
```json
{
    "tags": [..."tag"]
}
```

- Retrieve posts that have any of the specified tags.

### PATCH /api/posts/:id

#### Request Body
```json
{
    "content": "content",
    "tags": [..."tag"]
}
```

- Update the content and tags of a specific post.

### DELETE /api/posts/:id

- Delete a specific post by its ID.

### GET /api/posts/user/:user_id

- Retrieve posts created by a specific user.

# Models 

## User

| Field        | Data Type | Constraints |
|--------------|-----------|-------------|
| username     | String    | Unique      |
| email        | String    | Unique      |
| password     | String    |             |

## Post

| Field        | Data Type | Constraints |
|--------------|-----------|-------------|
| content      | String    |             |
| tags         | Array     |             |
| user_id      | Integer   |             |