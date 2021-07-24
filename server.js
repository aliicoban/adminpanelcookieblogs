var express = require('express');
var app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Listening on ${PORT}`));