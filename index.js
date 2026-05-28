const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a todo
app.post('/todos', (req, res) => {
  const todo = { id: todos.length + 1, task: req.body.task };
  todos.push(todo);
  res.status(201).json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: 'Todo deleted' });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app, server };