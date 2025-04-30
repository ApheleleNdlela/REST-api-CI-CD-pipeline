const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const task = { id: tasks.length + 1, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;


if (require.main === module) {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

module.exports = app; 
