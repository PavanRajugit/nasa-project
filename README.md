
```md
# 🚀 NASA Explorer

NASA Explorer is a full-stack web app that brings stunning space data from NASA to your screen — including the Astronomy Picture of the Day (APOD), Mars Rover photos, Near-Earth Objects (NEOs), and custom NASA image search.

---

## 🧠 Features

- 🌌 Astronomy Picture of the Day (APOD)
- 🚀 Mars Rover Photos (random date every load)
- ☄️ Near Earth Objects (NEOs) feed
- 🔍 NASA Image Search (e.g., Moon, Saturn, Galaxy)
- 📷 Background blur with APOD
- 💥 Error handling & loading states

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **APIs**: NASA Open APIs
- **Packages**: `axios`, `dotenv`, `cors`, `express-rate-limit`

---

## 📦 APIs Used

- [APOD API](https://api.nasa.gov/#apod)
- [Mars Rover Photos API](https://api.nasa.gov/#mars-rover-photos)
- [Near Earth Object API](https://api.nasa.gov/#neo)
- [NASA Images & Videos](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)

---

## 🏗️ How I Built It

### 🔧 1. Project Structure & Planning

- Created a project folder with separate `backend` and `frontend` directories.
- Designed four core features to showcase different NASA data sources.

### 🎨 2. Frontend Development (React)

- Set up components:
  - `Apod.js` – fetches Astronomy Picture of the Day
  - `MarsPhotos.js` – fetches Mars Rover images for random date
  - `NeoFeed.js` – fetches today's Near Earth Objects
  - `SearchImages.js` – allows search via NASA image API
- Used React Hooks (`useState`, `useEffect`) for state and lifecycle.
- Implemented styles using inline CSS objects with effects like `backdrop-filter`, shadows, and hover scale animations.

### 🧠 3. Backend Development (Node.js + Express)

- Built a simple Express server to:
  - Act as a proxy to hide NASA API keys
  - Handle rate limiting using `express-rate-limit`
  - Define endpoints for `/api/apod`, `/api/mars`, `/api/neo`, and `/api/search`
- Created `.env` file to securely store the NASA API key.

### 🌌 4. Error Handling & Visuals

- Added custom error messages for each API.
- Showed loaders and fallback messages if data isn’t found.
- Set a blurred APOD image as the background using CSS.

---

## 📁 Folder Structure

```

nasa-project/
│
├── backend/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Apod.js
│       │   ├── MarsPhotos.js
│       │   ├── NeoFeed.js
│       │   └── SearchImages.js
│       ├── App.js
│       └── index.js
│
└── README.md

````

---

## ⚙️ How to Run the Project

### 🔧 1. Clone the repo

```bash
git clone https://github.com/yourusername/nasa-explorer.git
cd nasa-explorer
````

---

### 🖥️ 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:



Run the server:

```bash
node server.js
```

---

### 🌐 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The frontend should open on `http://localhost:3000` and fetch data from backend at `http://localhost:5501`.

---

## 🧪 Sample `.env`


---

## 🚨 Troubleshooting

* **CORS or 429 errors**: Use your own NASA API key. The demo key has strict rate limits.
* **Backend not connecting**: Check that backend is running on the correct port and matches `proxy` in `frontend/package.json`.

---

## 👨‍💻 Author

Made with ❤️ by **Pavan Raju**
Feel free to connect and contribute!

---

## 📜 License

MIT License — Free to use and modify.

