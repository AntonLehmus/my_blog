# Tags

## Create tag

### Request

| Method        | ULR          |
| ------------- |:-------------:|
| POST      | /tags/ |

#### sample request body
```
{"name":"My tag"}
```


#### sample response
```
{
    "name": "My tag",
    "id": 5
}
```

## Update tag

### Request

| Method        | ULR          |
| ------------- |:-------------:|
| PATCH     | /tags/id |

#### sample request body
```
{"name":"My new tag"}
```

#### sample response
```
{
    "name": "My new tag",
    "id": 5
}
```

## Delete tag

| Method        | ULR          |
| ------------- |:-------------:|
| DELETE     | /tags/id |

#### sample response
```
{}
```

## Read tag

| Method        | ULR          |
| ------------- |:-------------:|
| GET     | /tags |

#### sample response
```
[
    {
        "id": 1,
        "name": "tag"
    },
    {
        "id": 2,
        "name": "testing"
    },
    {
        "id": 3,
        "name": "exiting"
    },
    {
        "id": 4,
        "name": "stuff"
    }
]
```

## Get tags for post

| Method        | ULR          |
| ------------- |:-------------:|
| GET     | /tags/id/posts |


#### sample response
```
[
    {
        "id": 1,
        "title": "hello world",
        "created_at": "2018-02-28T12:00:40.672Z",
        "updated_at": "2018-02-28T12:00:40.672Z"
    },
    {
        "id": 3,
        "title": "good news everyone",
        "created_at": "2018-02-28T12:00:40.672Z",
        "updated_at": "2018-02-28T12:00:40.672Z"
    },
    {
        "id": 4,
        "title": "the thing goes...",
        "created_at": "2018-02-28T12:00:40.672Z",
        "updated_at": "2018-02-28T12:00:40.672Z"
    },
    {
        "id": 5,
        "title": "fear is the mind killer",
        "created_at": "2018-02-28T12:00:40.672Z",
        "updated_at": "2018-02-28T12:00:40.672Z"
    }
]
```