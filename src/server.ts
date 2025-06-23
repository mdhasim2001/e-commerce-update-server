import mongoose from "mongoose";
import { app } from "./app";
require("dotenv").config();

const POST = 5000;

main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("e-commerce server running");

  app.listen(POST, () => {
    console.log(`server is active in POST ${POST}`);
  });
}
