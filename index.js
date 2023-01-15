const express = require("express");
const app = express();
const port = 3000;

const { database } = require("./database");

const retries = 5;

const connectDb = async () => {
   const testDb = await database("user");
   if (testDb) {
      console.log("Db connected successfully!");
   }
};

const tryFiveTimes = async () => {
   while (retries) {
      try {
         await connectDb();
         break;
      } catch (error) {
         console.log(error);
         await new Promise((res) => setTimeout(res, 5000));
      }
   }
};

tryFiveTimes();

app.get("/", async (req, res) => {
   try {
      const users = await database("user");

      res.json({ message: "Will be fetching database data here", data: users });
   } catch (error) {
      console.log(error);
   }
});

app.listen(port, () => {
   console.log(`Server running on ${port}`);
});
