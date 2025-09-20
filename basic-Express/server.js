const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const roleMiddleware = require("./middleware/roleMiddleware");
const app = express();
const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://vdeepikaa24_db_user:MsXWLX2Wtz8LMjzh@cluster0.rgfpvos.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB Atlas..."))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/user/:name", (req, res) => res.send(`Hello, ${req.params.name}!`));

app.use("/api/users", userRoutes);

app.use((req, res) => {
  res
    .status(404)
    .json({ message: "404 Not Found: The requested route does not exist" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
