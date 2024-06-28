import { web } from "./src/app/web.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
// Use the connection string directly

dotenv.config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

const PORT = 3000;
web.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
