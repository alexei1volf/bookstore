let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//routes
//home
app.get('/', (req, res) => res.json({message: "What do you want from me?"}));

//get all todos
app.get('/todo', function(req, res) {
  res.json({todo: "go home, bitch!"});
});

app.listen(3000);