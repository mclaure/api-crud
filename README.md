## api-crud : Poliglot API solution
```
API solution that handles SQL and NoSQL requests
```

---
## Installing

1. Download the code
3. To install **MySQL** database:
*  Download the **users-dump.sql** dump file from database/users.sql
*  Run the following command:
```
mysql -u <user> -p < users.sql
```
5. Run the following command:
```
    npm install
```
6. Run the following commnad to start the node server (default port 8000):
```
    node server.js
```
---
## Available APIs

**MongoDB**
* GET    /api/kudos/list
* POST   /api/kudos/add
* DELETE /api/kudos/del/{id}

**MySQL**
* GET     /api/users/list
* GET     /api/users/find?nickname={nickname}&nombre={nombre}
* GET     /api/users/detail?id={id}
* POST    /api/users/add
* DELETE  /api/users/del/{id}
---
## Author

* **Marcelo Claure** - *Initial work*
