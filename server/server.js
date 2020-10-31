console.log('In server!');
const express = require('express');
const app = express();
app.use(express.static('./public'));

const PORT = 3000;

app.listen(PORT, function() {
   console.log("I'm listening on", PORT);
});