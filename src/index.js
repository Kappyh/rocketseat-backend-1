const express = require("express");

const app = express();
// precisa informar
app.use(express.json());

app.get("/projects", (request, response) => {
  const { title, owner } = request.query;
  console.log(title, " ", owner);
  return response.json(["projeto1", "projeto2"]);
});

app.post("/projects", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["projeto1", "projeto2", "projeto3"]);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["projeto1", "projeto3"]);
});

app.listen(3333, () => {
  console.info("⚙️ Backend started!");
});
