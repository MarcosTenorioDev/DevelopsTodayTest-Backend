import express, { Request, Response } from 'express';
import { env } from './env';
import countryRoutes from './routes/country.routes'
import cors from "cors";

const app = express();
const port = parseInt(env.PORT)
const host = '0.0.0.0';

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});
app.use("/api", countryRoutes)

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
