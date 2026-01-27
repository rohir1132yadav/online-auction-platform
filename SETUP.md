# Setup Guide for Online Auction Platform

## Prerequisites

1. **Node.js** (v16+ already installed)
2. **MongoDB** (needs to be set up)
3. **npm** (already installed)

## MongoDB Setup

### Option 1: Using MongoDB Atlas (Cloud - Recommended for Quick Setup)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `server/.env` with your MongoDB Atlas URL:
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/auction-platform?retryWrites=true&w=majority
   ```

### Option 2: Docker (If Docker is available)

```bash
# Start MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or use docker-compose
docker-compose up -d
```

### Option 3: Local MongoDB Installation (Linux)

```bash
# Install MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

## Running the Application

### Terminal 1: Backend Server

```bash
cd server
npm install
npm run dev
```

The server will run on `http://localhost:3000`

### Terminal 2: Frontend Development Server

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is in use)

## Configuration

### Server Environment Variables (server/.env)
- `PORT`: Backend server port (default: 3000)
- `MONGO_URL`: MongoDB connection string
- `ORIGIN`: Frontend URL for CORS
- `JWT_SECRET`: Secret key for JWT tokens
- `CLOUDINARY_*`: Image upload configuration

### Client Environment Variables (client/.env)
- `VITE_API`: Backend API URL (default: http://localhost:3000)
- `VITE_AUCTION_API`: Auction API endpoint (default: http://localhost:3000/auction)

## Features

- ✅ Tailwind CSS styling applied
- ✅ User authentication (Login/Signup)
- ✅ Create and manage auctions
- ✅ Place bids on auctions
- ✅ Dashboard with statistics
- ✅ Admin panel
- ✅ Contact form

## Troubleshooting

### "Failed to load resource: net::ERR_CONNECTION_REFUSED"
- Make sure backend server is running on port 3000
- Check MongoDB connection string in .env
- Verify API endpoints match between client and server

### MongoDB Connection Failed
- Check if MongoDB is running
- Verify connection string in server/.env
- For Docker: ensure container is running (`docker ps`)
- For local: check service status or MongoDB logs

### Port Already in Use
- Kill existing process: `lsof -i :3000` then `kill -9 <PID>`
- Or change PORT in server/.env or VITE server in vite.config.js

## Next Steps

1. Set up MongoDB (Option 1 recommended for quick start)
2. Update .env files with your MongoDB URL
3. Start backend server: `npm run dev` in server folder
4. Start frontend: `npm run dev` in client folder
5. Access the application at `http://localhost:5173`
