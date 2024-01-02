console.log("I will create a server using Express module");
const express = require('express');
const app = express();
app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static('public'));
