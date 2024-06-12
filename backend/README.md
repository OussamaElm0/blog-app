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