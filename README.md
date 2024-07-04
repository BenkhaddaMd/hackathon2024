# BOLD DIGITAL VISION - APP with React and Nest JS

Brief introduction or overview of the project.

## Frontend (React)

### Technologies Used
- React
- Axios
- Tailwind

### Project Structure
The React frontend is structured as follows:

/frontend
├── public
├── src
│ ├── components
│ ├── pages
│ ├── services
│ └── App.js
└── README.md

### Getting Started
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies:
```bash
$ npm install
```
4. Start the development server:
```bash
$ npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend (NestJS)

### Technologies Used
- NestJS
- TypeORM
- Postgres

### Project Structure
The NestJS backend is structured as follows:

/backend
├── src
├────EntityName
│  ├── controller
|  ├── entity
│  ├── module
│  ├── service
├── main.ts
└── README.md

### Getting Started
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
```bash
$ npm install
```
4. Set up your environment variables.
5. Start the development server:
```bash
$ npm start
```
6. The server should be running on [http://localhost:3000](http://localhost:3000) by default.

### Database Configuration

```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_SCHEMA=
```

### API Endpoints

1. AuthController (/auth)

    - POST /auth/login - Endpoint for user login.

2. UserController (/user)

    - POST /user/signup - Endpoint for user registration.
    - GET /user/profile - Endpoint to retrieve user profile information.

3. ApplicationsController (/applications)

    - POST /applications - Endpoint to create a new application.
    - GET /applications/user/:userId - Endpoint to fetch applications by user ID.

4. OffersController (/offers)

    - POST /offers - Endpoint to create a new job offer.
    - GET /offers - Endpoint to fetch all job offers.
    - GET /offers/:offerId - Endpoint to fetch a specific job offer by ID.
    - GET /offers/user/:userId - Endpoint to fetch job offers by user ID.
    - GET /offers/:offerId/users - Endpoint to fetch users interested in a specific job offer.

5. PostController (/post)

    - POST /post - Endpoint to create a new post.
    - GET /post - Endpoint to fetch all posts.
    - GET /post/user/:userId - Endpoint to fetch posts by user ID.