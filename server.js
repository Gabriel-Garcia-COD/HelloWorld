const express = require('express');
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 7777;
var https = require("https");

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//SERVIDOR
// const options = {
//   key: fs.readFileSync(
//     "/home/ubuntu/certificate/genesyscloudapps.coddera.com_key.txt"
//   ),
//   cert: fs.readFileSync(
//     "/home/ubuntu/certificate/genesyscloudapps.coddera.com.crt"
//   ),
//   ca: [
//     fs.readFileSync(
//       "/home/ubuntu/certificate/genesyscloudapps.coddera.com.ca-bundle"
//     ),
//   ],
// };

// //RODAR O PROJETO COM HTTPS
// https.createServer(options, app).listen(PORT, function () {
//   console.log("Server HTTPS Listen port: " + PORT);
// });