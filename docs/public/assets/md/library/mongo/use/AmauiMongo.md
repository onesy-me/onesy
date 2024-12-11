
# OnesyMongo

Util methods & static properties.

### Methods

#### createPaginator

Creates a next, previous cursor (paginator).

First argument is a mongo document, and second argument is path to a property value that will represent the cursor, for filtering.

```ts
OnesyMongo.createPaginator({ added_at: 1441227440 }, ['added_at']);

// eyJhcGlfbWV0YS5hZGRlZF9hdCI6eyIkZ3QiOjE0NDEyMjc0NDB9fQ==
```

#### mongo

Returns a static global instance of `Mongo`.

```ts
OnesyMongo.mongo;

// Mongo { }
```

## API

#### OnesyMongo

```ts
class OnesyMongo {
    static Mongo_: Mongo;
    static get mongo(): Mongo;
    static createPaginator(object: TObject, properties: string[], sort?: mongodb.Sort, type?: 'next' | 'previous'): string;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Mongo: Start",
      "to": "/library/mongo/start"
    },
    "next": {
      "label": "Mongo: BaseCollection",
      "to": "/library/mongo/use/BaseCollection"
    }
  }
}~
