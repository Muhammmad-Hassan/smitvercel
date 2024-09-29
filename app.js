const express = require("express");
const app = express();

const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
      isActive: true
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "User",
      isActive: true
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "samwilson@example.com",
      role: "Moderator",
      isActive: false
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      role: "User",
      isActive: true
    },
    {
      id: 5,
      name: "Bob Brown",
      email: "bobbrown@example.com",
      role: "Admin",
      isActive: false
    }
  ];
  
app.get("/", (req, res) => {
    res.status(200).json(" Hello from bakend ");
});
app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
