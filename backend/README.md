# Routes 

## Authentification

### POST /api/user/register

#### Request Body
```json
{
    "username": "username",
    "email": "email",
    "password": "password"
}
```

### POST /api/user/login

#### Request Body
```json
{
    "email": "email",
    "password": "password"
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
