import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json('Hello World'));

app.post('/users', (request, response) => {
  const { name, email } = request.body;

  const users = {
    name,
    email,
  };
  return response.json(users);
});

app.listen(3333, () => {
  console.log('Server stated on port 3333');
});
