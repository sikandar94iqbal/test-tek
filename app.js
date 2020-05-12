const app = require('express')()

app.get('/', (req, res) => {
  res.send("HEll0 from Appsodyy Demoo!! to Hell0 from Cloud Pak!!");
});
 
module.exports.app = app;
