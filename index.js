const express = require("express");
const app = express();
const port = 3000;

const { database } = require("./database");

app.get("/", async (req, res) => {
   const users = await database("user");

   res.json({ message: "Will be fetching database data here", data: users });
});

app.listen(port, () => {
   console.log(`Server running on ${port}`);
});
