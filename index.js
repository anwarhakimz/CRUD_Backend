import { web } from "./src/app/web.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
mongoose.set("strictQuery", true);
// Connect to MongoDB Atlas using the URI from environment variables
mongoose
  .connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected..."))
  .catch((error) => console.log("Connection error:", error));

// Set the port from environment variables
const port = process.env.PORT_URL;

web.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
