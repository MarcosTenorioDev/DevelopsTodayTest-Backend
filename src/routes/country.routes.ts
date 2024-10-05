import { Request, Response, Router } from 'express';
import axios from 'axios';
import { env } from '../env';

const router = Router();

const api = env.DATE_NAGER_API
const api2 = env.COUNTRIES_NOW_API


router.get('/countries', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${api}/AvailableCountries`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching countries:', err);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

router.get('/country/:code', async (req: Request, res: Response) => {
  const countryCode = req.params.code;
  try {
    const response = await axios.get(`${api}/CountryInfo/${countryCode}`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error(`Error fetching country with code ${countryCode}:`, err);
    res.status(500).json({ error: `Failed to fetch country with code ${countryCode}` });
  }
});

router.get('/countries/flags', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${api2}/flag/images`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching country flags:', err);
    res.status(500).json({ error: 'Failed to fetch country flags' });
  }
});

router.get('/countries/population', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${api2}/population`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching country populations:', err);
    res.status(500).json({ error: 'Failed to fetch country populations' });
  }
});

export default router;
