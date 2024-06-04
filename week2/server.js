const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Get request');
})

app.get('/greet/:name',(req,res)=>{
    const { name } = req.params;
    res.send(`Hi,${name}`)
})
app.get('/api/data', (req, res) => {
  const data = { message: 'This is a JSON response.' };
  res.json(data);
});

app.get('/html', (req, res) => {
  const htmlContent = '<h1>This is an HTML response</h1>';
  res.send(htmlContent);
});

app.get('/redirect', (req, res) => {
  res.redirect('/html');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

const path = require('path');

app.get('/file', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'example.txt');
  res.sendFile(filePath);
});


app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// POST route to handle form data
app.post('/form', (req, res) => {
  const formData = req.body;
  res.json({ receivedData: formData });
});

// POST route to handle JSON data
app.post('/json', (req, res) => {
  const jsonData = req.body;
  res.json({ receivedData: jsonData });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});