const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/delay", (req, res) => {
  const delay = parseInt(req.query.delay) || 0;

  setTimeout(() => {
    res.json({ message: `Resposta com delay de ${delay}ms` });
  }, delay);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});