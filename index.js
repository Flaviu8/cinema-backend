import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import calendarRouter from "./calendar/routes.js";
import userAuth from "./users/userAuth.js";
import userLogout from "./users/userLogout.js";
import usersRegister from "./users/usersRegister.js";
import movieRouter from "./movies/routes.js";
import scheduleRouter from "./schedule/routes.js";
import usersRouter from "./contactUser/routesUser.js";
import PaymentRoutes from "./paymentcard/PayRoutes.js";

import * as dotenv from "dotenv";

import chairRouter from "./chair/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use("/login", userAuth);
app.use("/register", usersRegister);
app.use("/logout", userLogout);
app.use("/movies", movieRouter);
app.use("/calendar", calendarRouter);
app.use("/schedule", scheduleRouter);
app.use("/username", usersRouter);
app.use("/paymentcard", PaymentRoutes);
app.use("/chair", chairRouter);
