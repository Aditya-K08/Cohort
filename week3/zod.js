const express = require('express');
const { z } = require('zod');
const app = express();

app.use(express.json());

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
})
.refine((data)=>data.password.length <= 3, {
    message : "name should be greater than 3 character",
    path : ['confirm'],
})
.refine((data) => data.password === 'Aditya', {
    message: "Passwords don't match",
    path: ["confirm"],
  });

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  try {
    loginSchema.parse({ username, password });
    // Proceed with authentication logic
    // ...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input.', details: error.errors });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));