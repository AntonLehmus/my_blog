# Posts

## Create post

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| POST      | /posts/ | Yes |

#### sample request body with optional new paragraphs and tags
```
{"title":""}
```

#### sample request body with optional new paragraphs and tags

Note that paragraphs and tags must be new

```
{"title":"",
	"paragraphs":[
		{"header":"",
		"content":""},
		{"header":"",
		"content":""},
		{"header":"",
		"content":""}
	],
	"tags":[
		{"name":""},
		{"name":""},
		{"name":""}
	]
}
```

#### sample response
If you add paragraphs or tags those are added as well.
```
{
    "title": "My post title",
    "id": 20
}
```

## Update post

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| PATCH     | /posts/id | Yes |

#### sample request body
```
{"title":"Some new title"}
```

#### sample response
```
{
    "title": "Some new title",
    "id": 20
}
```

## Delete post

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| DELETE     | /posts/id | Yes |

#### sample response
```
{}
```

## Read post

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| GET     | /posts | No |
| GET     | /posts/eager | No |

/eager eager loads paragraphs and tags
#### sample response
```
[
    {
        "id": 2,
        "title": "exiting testing",
        "created_at": "2018-02-21T11:53:35.096Z",
        "updated_at": "2018-02-21T11:53:35.096Z"
    },
    {
        "id": 3,
        "title": "good news everyone",
        "created_at": "2018-02-21T11:53:35.096Z",
        "updated_at": "2018-02-21T11:53:35.096Z"
    }
]
```

```
[
     {
        "id": 2,
        "title": "exiting testing",
        "created_at": "2018-02-21T11:53:35.096Z",
        "updated_at": "2018-02-21T11:53:35.096Z",
        "tags": [
            {
                "id": 3,
                "name": "exiting"
            },
            {
                "id": 4,
                "name": "stuff"
            },
            {
                "id": 4,
                "name": "stuff"
            }
        ],
        "paragraphs": [
            {
                "id": 5,
                "header": "yep",
                "content": "yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep",
                "post_id": 2,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 6,
                "header": "bad code",
                "content": "is bad",
                "post_id": 2,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 7,
                "header": "why did I think this would be easier than faker",
                "content": "need faker",
                "post_id": 2,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 8,
                "header": "save me",
                "content": "faker plz",
                "post_id": 2,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            }
        ]
    },
    {
        "id": 3,
        "title": "good news everyone",
        "created_at": "2018-02-21T11:53:35.096Z",
        "updated_at": "2018-02-21T11:53:35.096Z",
        "tags": [
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
            }
        ],
        "paragraphs": [
            {
                "id": 9,
                "header": "imagination",
                "content": "Gib 1 pl0x",
                "post_id": 3,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 10,
                "header": "almost done",
                "content": "yay",
                "post_id": 3,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 11,
                "header": "keyboard",
                "content": "it has keys",
                "post_id": 3,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            },
            {
                "id": 12,
                "header": "fun",
                "content": "kazOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
                "post_id": 3,
                "created_at": "2018-02-21T11:53:35.099Z",
                "updated_at": "2018-02-21T11:53:35.099Z"
            }
        ]
    }
]
```

## Add tags for post

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| POST     | /posts/id/tags |  Yes |

#### sample request body
```
{"tag_ids":[3,5,1]}
```

## Remove tags from post

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| DELETE     | /posts/id/tags  | Yes |

#### sample request body
```
{"tag_ids":[3,5,1]}
```

#### sample response
```
{}
```