"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => res.send("<h1>Hello Express!</h1>"));

app.get('/dashboard', (req, res, next) => res.send("<h1>This is the dashboard page!</h1>"));

app.listen(port, () => console.log(`ChaCat listening on port port! ${port}`));
