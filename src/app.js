const path = require("node:path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const passportConfig = require("./config/passportConfig");
const prisma = require("./config/database");

dotenv.config();

async function main() {
  const app = express();

  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(express.urlencoded({ extended: false }));
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/", authRoutes);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
