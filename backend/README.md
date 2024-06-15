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

### POST /api/auth/login

#### Request Body
```json
{
    "email": "email",
    "password": "password"
}
```

### GET /api/auth/logout

## Users

### GET /api/users

### GET /api/users/:id

### PUT /api/users/:id

#### Request Body
```json
{
    "email": "email",
    "password": "password"
}
```

### DELETE /api/users/:id

### GET /api/users/search/username

#### Request Body
```json
{
    "username": "username"
}
```

## Posts

### GET /api/posts

### POST /api/posts

#### Request Body
```json
{
    "content": "content",
    "tags": [..."tag"]
}
```

### GET /api/posts/:id

### POST /api/posts/tags

#### Request Body
```json
{
    "tags": [..."tag"]
}
```

### PATCH /api/posts/:id

#### Request Body
```json
{
    "content": "content",
    "tags": [..."tag"]
}
```

### DELETE /api/posts/:id

### GET /api/posts/user/:user_id