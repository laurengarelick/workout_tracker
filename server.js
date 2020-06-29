const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static("public"))

app.use(require('./routes/htmlRoutes'));
app.use("/api", require('./routes/apiRoutes'));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, ()=> console.log("app is runing on port "+PORT))
