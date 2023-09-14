## Concept

Simple Vite application with backend + Postgresql DB.

## Functionality

- Add / Delete users from the list
- Role attachment

## Setup & Use

### Project Initialization

- Clone this repo, enter it
- Run command `npm run setup`,
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_
- Run command `npm run migrate`
- Run command `npm run dev`
- Run command `cd frontend && npm run tailwind`

### AVAILABLE COMMANDS :

### Root directory
- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
### Frontend directory
- `dev-front` : Starts the React/Vite frontend server
- `build` : Vite build tool
- `tailwind` : Start CSS tailwind tool
### Api directory
- `dev-back` : Starts the Express backend server
- `migrate` : Run the database migration script

### Tools
- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
