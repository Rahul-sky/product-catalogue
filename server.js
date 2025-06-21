const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Keyboard' }
];

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

