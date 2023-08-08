#  Build a CRUD API with Node.js and PostgreSQL

A CRUD API created with Node.js, Express.js, Sequelize and PostgreSQL. The REST API will run on an Express.js server and the endpoints for performing CRUD operations against a PostgreSQL database.

## General info

Full functioning CRUD(Create, Read, Update, Delete) Blog Application. 

## Request Methods

These are the methods chosen on the Postman which is used for testing the endpoints.

| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve a single item or collection of items. |
| `POST`   | Used when creating new items e.g. a new blog |
| `PATCH`  | Used to update one or more fields on an item e.g. update title of a blog. |
| `DELETE` | Used to delete an item.                  |

## Endpoints

Now that we’ve learned about the anatomy of our endpoints and the different request methods that we should use, it’s time for some examples: 

`BASE_URL: http://localhost:8081`

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/blogs`                             | Retrieve all blogs.    
| `GET`    | `/api/blogs/:id`                             | Retrieve a blog.                   |
| `POST`   | `/api/blogs`                             | Create a new blog.                       |
| `PATCH`    | `/api/blogs/:id`                          | Update a blog.                    |
| `DELETE`  | `/api/blogs/:id`                          | Delete a blog.                 |
| `GET`  | `/api/healthchecker`                          | To test succession of the API.                 |

## Technologies

* [Node](https://nodejs.org/en) should be installed on your PC. 
* [PostgreSQL](https://www.postgresql.org/download/) needs to be installed and running.
* [Docker](https://www.docker.com/) should be installed and Makefile is in the repository folder to create compose docker.
* [Postman](https://www.postman.com/) to perform CRUD operations on the backend database.

## Installation
* Create a PostgreSQL database by renaming `.env.sample` to `.env` and updating the information to your details.
* Run `yarn install` to install dependencies.
* Run `yarn start` to compile the app and connect to server `localhost: 8081`
