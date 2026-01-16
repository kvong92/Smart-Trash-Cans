import express from "express";
import trashcanRoutes from "./routes/trashcans.js";
import truckRoutes from "./routes/truck.js";

const app = express();

app.use(express.json());

app.use("/trashcans", trashcanRoutes);
app.use("/truck", truckRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Smart Trash running on port ${PORT}`);
});
