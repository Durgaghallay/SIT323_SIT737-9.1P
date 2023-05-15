const express = require("express");
const router = express.Router();
const Todo = require("./models/todo");

// Create a new todo
router.post("/", (req, res) => {
  const { title, description } = req.body;

  console.log(req.body);
  const todo = new Todo({
    title,
    description,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json({ message: "Todo created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create todo" });
    });
});

// Get all todos
router.get("/", (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch todos" });
    });
});

// Get a specific todo
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        res.status(404).json({ error: "Todo not found" });
      } else {
        res.json(todo);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch todo" });
    });
});

// Update a todo
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  Todo.findByIdAndUpdate(id, { title, description })
    .then((todo) => {
      if (!todo) {
        res.status(404).json({ error: "Todo not found" });
      } else {
        res.json({ message: "Todo updated successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update todo" });
    });
});

// Delete a todo
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Todo.findByIdAndDelete(id)
    .then((todo) => {
      if (!todo) {
        res.status(404).json({ error: "Todo not found" });
      } else {
        res.json({ message: "Todo deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete todo" });
    });
});

module.exports = router;
