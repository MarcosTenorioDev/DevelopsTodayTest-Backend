import express, { Request, Response } from 'express';

const app = express();
const port = parseInt(process.env.PORT || '3000');
const host = '0.0.0.0';

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
