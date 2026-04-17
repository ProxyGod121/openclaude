const express = require('express');
const app = express();
const port = 3000;

const API_KEY = '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';

app.get('/', (req, res) => {
    res.send('Chatbot server running');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});