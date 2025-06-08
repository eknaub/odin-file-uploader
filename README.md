# Odin Prisma Test Application

A simple Node.js web application demonstrating user authentication and user management using [Prisma ORM](https://www.prisma.io/) and EJS templates.

## Features

- User registration and login
- User dashboard
- List of all users
- Modern, responsive UI with EJS templates

## Tech Stack

- Node.js
- Express.js
- Prisma ORM
- Postgres
- EJS (Embedded JavaScript templates)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/eknaub/odin-prisma-test.git
   cd odin-prisma-test
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` and update as needed.

4. **Set up the database:**

   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the application:**

   ```sh
   npm start
   ```

6. **Visit in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
odin-prisma-test/
├── prisma/           # Prisma schema and migrations
├── src/
│   ├── controllers/  # Route controllers
│   ├── models/       # Prisma client
│   ├── routes/       # Express routes
│   ├── views/        # EJS templates
│   └── app.js        # Main Express app
├── .env
├── package.json
└── README.md
```

## Scripts

- `npm start` — Start the server
- `npm run dev` — Start with nodemon (development)

## License

MIT

---

**Built for The Odin Project & Prisma demo**
