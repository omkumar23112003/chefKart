# 👨‍🍳 ChefKart – At-Home Cooking Services Platform

A full-stack web platform connecting users with trusted home chefs for daily, one-time, or party cooking. Built with React (Vite), Node.js, Express, and MongoDB. Live site deployed on Vercel.

---

## 🌐 Live Demo

🔗 [Visit ChefKart](https://chef-kart-one.vercel.app/)

---

## 🖼️ Screenshots

![Landing Page](./screenshots/landing.png)  
*Responsive hero section showcasing “Most Trusted Platform...”*

![Services Menu](./screenshots/services.png)  
*Top navigation with service categories (Hindi & English support).*

---

## 🧰 Tech Stack

| Layer     | Technologies                     |
|-----------|----------------------------------|
| Frontend  | React.js, Vite, Tailwind CSS     |
| Backend   | Node.js, Express.js, MongoDB     |
| Dev       | dotenv, CORS                     |
| Deploy    | Vercel (Frontend), Render/Local (Backend) |

---

## 🔐 Features

- Chef registration & listing API (full backend integration)
- RESTful APIs: chef registration, service categories
- Responsive UI with mobile-first design
- Multilingual support (English & Hindi navigation)
- Structured MVC architecture backend
- Environmental configuration using `.env`

---

## 🏗️ Project Structure
chefKart/
├── Backend/
│ ├── controllers/
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express route files
│ ├── middlewares/ # (if any validation/auth)
│ ├── app.js
│ ├── server.js
│ └── .env
└── Frontend/
├── public/
├── src/
│ ├── components/
│ ├── pages/
├── index.html
└── vite.config.js

yaml
Copy
Edit

---

## 🛠️ Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/chefKart.git
cd chefKart
Install dependencies

bash
Copy
Edit
# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
Configure environment

In Backend/.env:

ini
Copy
Edit
PORT=5000
MONGO_URI=<Your MongoDB URI>
Run locally

bash
Copy
Edit
# Start backend
cd Backend
npm start

# Start frontend
cd ../Frontend
npm run dev
Visit:

Frontend ▶️ http://localhost:5173

API ▶️ http://localhost:5000

📦 Live Deployment Steps
Frontend automatically deployed via Vercel on push to main.

Backend deployable on platforms like Render, Heroku, or AWS.

📬 Contact & Contribution
Contributor: Om kumar

Contact: omk99919@gmail.com

Contributions are welcome! Open an issue or submit a PR.

⚖️ License
Distributed under the MIT License.

yaml
Copy
Edit



