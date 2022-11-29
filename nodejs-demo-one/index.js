const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/UserRoute");
const db = require("./configs/db");

dotenv.config();

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use("/users", userRoute);

const init = async () => {
  try {
    db.sequelize.sync();
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error in init() => ", error);
  }
};

init();
