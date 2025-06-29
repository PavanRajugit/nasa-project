require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5501;
const NASA_API_KEY = process.env.NASA_API_KEY;

app.use(cors());
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,             // limit each IP to 30 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// 🔭 Astronomy Picture of the Day
app.get('/api/apod', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: { api_key: NASA_API_KEY },
    });
    res.json(data);
  } catch (error) {
    console.error('APOD error:', error.message);
    res.status(500).json({ error: 'APOD fetch failed' });
  }
});

// 🚗 Mars Rover Photos
app.get('/api/mars', async (req, res) => {
  const date = req.query.date || '2022-01-01';
  try {
    const { data } = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: { earth_date: date, api_key: NASA_API_KEY },
    });
    res.json(data.photos || []);
  } catch (error) {
    console.error('Mars error:', error.message);
    res.status(500).json({ error: 'Mars photos fetch failed' });
  }
});

// ☄️ Near Earth Objects
app.get('/api/neo', async (req, res) => {
  const date = req.query.date;
  try {
    const { data } = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
      params: {
        start_date: date,
        end_date: date,
        api_key: NASA_API_KEY,
      },
    });
    const neos = data.near_earth_objects[date] || [];
    res.json(neos);
  } catch (error) {
    console.error('NEO error:', error.message);
    res.status(500).json({ error: 'NEO fetch failed' });
  }
});

// 🔍 NASA Image Search
app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const { data } = await axios.get(`https://images-api.nasa.gov/search`, {
      params: { q: query, media_type: 'image' },
    });
    const items = data.collection?.items || [];
    res.json(items);
  } catch (error) {
    console.error('Search error:', error.message);
    res.status(500).json({ error: 'Search failed' });
  }
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
