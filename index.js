var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = 3000;
const axios = require("axios");

app.use(bodyParser.json());

app.post("/webhook", function (req, res) {
  var body = req.body;

  var token = req.headers.authorization;

  axios
    .post(
      "https://api.github.com/repos/kasik96/vimto-landpage-frontend/actions/workflows/azure-static-web-apps-gray-sky-0ba056e03.yml/dispatches",
      { ref: "main" },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  res.json({
    message: "ok got it!",
  });
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
