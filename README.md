# My first full stack web ever!

## What I did so far, by order:

- Build a react app with template Typescript, it's named `front`.
- Integrate TailwindCss in the project React.
- Build a Nest app.
- Write a docker-compose.yml to build a database in Postgres.
- Add test_decorator: write custom decorator to understand better decorator in Nest.js and Typescript
- Write UserController, UserService to build a REST server with endpoints /users:id, users?role=value....
- Use Prisma to connect the server to database.
- Fetch data from backend to frontend (using Restful API), using fetch (or axios if not sure about the compatibility of browser)

## How to make Graphql server in Nest, Prisma, Postgres

- Create new project Nest: `nest new project_name`
- Change port to 3333 (because 3000 will be used for React project later).
- Install dependencies for graphql: `npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql`.
- Import the GraphQLModule to AppModule and configure it with the forRoot() static method.
- Use Schema First Approach. (allow splitting schema into several files which can be located near their resolvers, meanwhile Code First Approach: allow us write in only Typescript, not change to Graphql syntax). Config GraphQLModule following this approach.

## Upcoming works:

- [x] Build REST server with mock data.
- [x] Build REST server which connects to a database.
- [x] Connect REST server to FrontEnd, be able to fetch data from database.
- [x] Use validation Pipe & Exception to handle Error and Validation of inputs.

- [x] Build GraphQL server with mock data.
- [x] Build GraphQL server which connects to a database.
- Test all method with this server (GET, POST, PATCH, DELETE).
- Connect GraphQL server to FrontEnd (React), be able to fetch data from database.

- Use Docker to build up everything at once.
