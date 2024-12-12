const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));

app.get(`/`, (request, response) => {
  if (request.accepts(`html`)) {
    response.render(`index`);
  } else {
    response.json({});
  }
});

module.exports = app;
