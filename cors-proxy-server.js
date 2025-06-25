// cors-proxy-server.js

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/menu", async (req, res) => {
  const { resId } = req.query;

  const SWIGGY_MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.1066576&lng=83.39555059999999&restaurantId=${resId}`;

  try {
    const response = await fetch(SWIGGY_MENU_API);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching Swiggy menu:", err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

app.listen(PORT, () => {
  console.log(`CORS proxy server running at http://localhost:${PORT}`);
});
