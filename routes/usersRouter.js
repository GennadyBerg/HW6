import { Router } from "express";

const usersRouter = new Router();

usersRouter.get("/users", (req, res) => {
  res.json({
    /*data.users*/ user: "Example",
    id: 1,
  });
});
usersRouter.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.user.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

usersRouter.post("/users", (req, res) => {
  const newUser = req.body;

  newUser.id = Math.max(...data.users.map((user) => user.id)) + 1;

  data.users.push(newUser);
  res.status(201).json(newUser);
});

usersRouter.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = data.users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    data.users.splice(userIndex, 1);
    res.status(204).json(); // No content to return
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export { usersRouter };
