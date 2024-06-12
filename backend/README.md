# Routes 

## Authentification

### POST /api/register

#### Request Body
```json
{
	"username": "username",
    "email": "email",
    "password": "password"
}
```

### POST /api/login

#### Request Body
```json
{
    "email": "email",
    "password": "password"
}
```