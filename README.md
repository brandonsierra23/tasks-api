# tasks-api

This is a service built with NestJS, TypeScript and MongoDB. It includes CRUD operations.


## Installation

1. Clone the repository: `git clone https://github.com/brandonjcg/tasks-api`
2. Install dependencies: `yarn`
3. Add a `.env` file with the following variables:

```
PORT=7001
```

4. Create a MySQL database named `users`
5. Run the project: `yarn dev` (or `yarn start:dev` for production)

## Usage

The project includes a model: `Task`

The project includes the following routes:

- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a user by id
- `POST /tasks`: Create a new user
- `PUT /tasks/:id`: Update a user by id
- `DELETE /tasks/:id`: Delete a user by id

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Autor

- [Brandon Castillo](https://github.com/brandonjcg) - Software developer 👨🏽‍💻
