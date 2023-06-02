const express = require('express');
const sequelize = require('./config/connection');
const allRoutes = require('./controllers');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/',allRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening ", PORT));
  });
