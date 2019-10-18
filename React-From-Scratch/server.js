const express = require('express');
const app = express();

const port = 6363;

app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});