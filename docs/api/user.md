# Users

## Create user

### Request

| Method        | ULR          |
| ------------- |:-------------:|
| POST      | /user/create |


```
{
	"email":"test@test.com",
	"password":"test"
}
```


#### sample response
empty body with status code 201. Note that for the time being this supports only one user at a time since I don't see a reason for multi user functionality for persolan blog.

## Update user

### Request

| Method        | ULR          |
| ------------- |:-------------:|
| PATCH     | /users |

#### sample request body
You can send either newPassword or newEmail or both.
```
{
	"email":"test@test.com",
	"password":"test",
    "newEmail":"test2@test.com",
    "newPassword":"new password"
}
```

#### sample response
Status code 200 or 404

## Delete user

| Method        | ULR          |
| ------------- |:-------------:|
| DELETE     | /user|

#### sample request body
```
{
	"email":"test@test.com"
}
```

#### sample response
```
{}
```

## Login

The JWT token is valid for one hour.

### Request

| Method        | ULR          |
| ------------- |:-------------:|
| PATCH     | /user/login |

#### sample request body
```
{
	"email":"test@test.com",
	"password":"test"
}
```

#### sample response
```
{
    "message": "Auth successful",
    "token": "JWT TOKEN"
}
```