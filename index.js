require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const drivers = [
  { id: '1', name: 'John Kamau', license: 'DL12345', sacco: 'Kasarani SACCO' }
];

app.get('/', (req, res) => res.send('Hello BodaSafe'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/drivers/:id', (req, res) => {
  const d = drivers.find(x => x.id === req.params.id);
  d ? res.json(d) : res.status(404).json({ error: 'Not found' });
});

app.post('/api/boarding', (req, res) => {
  console.log('Boarding:', req.body);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on', PORT));