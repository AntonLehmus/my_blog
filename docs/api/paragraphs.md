# Paragraphs

## Create paragraph

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| POST      | /paragraphs/ | Yes |

#### sample request body with optional new paragraphs and tags
```
{"header":"",
"content":"",
"post_id":}
```


#### sample response
```
{
    "header": "My header here",
    "content": "The paragraph body goes here",
    "post_id": 1,
    "id": 21
}
```

## Update paragraph

### Request

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| PATCH     | /paragraphs/id | Yes |

#### sample request body
Note that you can also send only header or conent if you do not wish to update the other.
```
{"header":"Some new header",
"content":"Some new content"}
```

#### sample response
```
{
    "header": "Some new header maybe",
    "id": 21,
    "content": "Or maybe you updated only the contents",
    "post_id": 1,
    "created_at": "2018-02-22T14:03:17.752Z",
    "updated_at": "2018-02-22T14:03:17.752Z"
}
```

## Delete paragraph

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| DELETE     | /paragraphs/id | Yes |

#### sample response
```
{}
```

## Read paragraph

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| GET     | /paragraphs | No |

#### sample response
```
[
    {
        "id": 1,
        "header": "this is it",
        "content": "Heyy here is a really long text thingy",
        "post_id": 1,
        "created_at": "2018-02-22T13:33:31.773Z",
        "updated_at": "2018-02-22T13:33:31.773Z"
    },
    {
        "id": 2,
        "header": "header",
        "content": "Heyy here is a really long text thingy",
        "post_id": 1,
        "created_at": "2018-02-22T13:33:31.773Z",
        "updated_at": "2018-02-22T13:33:31.773Z"
    }
]
```

## Get paragraphs for post

| Method        | ULR          | Protected          |
| ------------- |:-------------:|:-------------:|
| GET     | /paragraphs/post/id |  No |


#### sample response
```
[
    {
        "id": 3,
        "header": "important stuff",
        "content": "Heyy here is a really long text thingy",
        "post_id": 1,
        "created_at": "2018-02-22T13:33:31.773Z",
        "updated_at": "2018-02-22T13:33:31.773Z"
    },
    {
        "id": 4,
        "header": "the same old",
        "content": "Heyy here is a really long text thingy",
        "post_id": 1,
        "created_at": "2018-02-22T13:33:31.773Z",
        "updated_at": "2018-02-22T13:33:31.773Z"
    }
]
```