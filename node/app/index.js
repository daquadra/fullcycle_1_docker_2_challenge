const express = require("express");
const app = express();
const port = 3000;
const db = require("./db.js");
const { faker } = require("@faker-js/faker");

// Criar uma middleware para checar se a tabela já existe antes :-)
app.use(async (req, res, next) => {
  const createTable = `CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  )`;

  try {
    await db.query(createTable);
    next();
  } catch (err) {
    console.error(`Ops! Houve um problema ao criar a table principal: `, err);
    res.status(500).send("<h1>Ops! Problema ao criar nova tabela</h1>");
  }
});

app.get("/", async (req, res) => {
  const randName = faker.person.fullName();

  const sqlInsert = `INSERT INTO people (name) VALUES (?)`;

  try {
    await db.query(sqlInsert, [randName]);
  } catch (err) {
    console.error(
      "Ops! Tivemos um problema ao inserir um registro no banco de dados: ",
      err,
    );
  }

  //const getNames = async () => {
  const [rows, fields] = await db.query(
    `SELECT name FROM people ORDER BY ID DESC`,
  );
  let strNames = "";

  for (const item of rows) {
    strNames += `<li>- ${item.name}</li>`;
  }

  const html = `
    <h1>Full Cycle Rocks!</h1>

    <ul style="list-style: none; padding-inline-start: unset;">
      ${strNames}
    </ul>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log("server running on port: " + port);
});
