# Quick Start Guide - Online Auction Platform

## The Issue You're Facing

The login/signup is failing because **MongoDB is not running**. The error shows:
```
Failed to load resource: net::ERR_CONNECTION_REFUSED at localhost:3000
```

This means:
1. ✅ Frontend is running (you can see the login page)
2. ✅ Backend server is running on port 3000
3. ❌ MongoDB database is NOT connected

## How to Fix This

### Quick Solution: Use MongoDB Atlas (Cloud - 5 minutes)

This is the easiest solution:

**Step 1:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a free account
- Create a cluster (free tier available)

**Step 2:** Get your connection string
- Click "Connect" on your cluster
- Select "Drivers" → "Node.js"
- Copy the connection string that looks like:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/auction-platform?retryWrites=true&w=majority
```

**Step 3:** Update your server configuration
- Open: `server/.env`
- Replace the `MONGO_URL` line with your Atlas connection string:
```
MONGO_URL=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/auction-platform?retryWrites=true&w=majority
```

**Step 4:** Restart the server
- Stop the backend server (Ctrl+C in terminal)
- Run: `npm run dev` again
- You should see: `Connected to MongoDB`

**Step 5:** Try logging in
- Go back to the browser
- Try signing up or logging in
- It should work now!

---

### Alternative: Use Docker (if Docker is installed)

```bash
cd /workspaces/online-auction-platform

# Start MongoDB in Docker
docker-compose up -d

# You should see: auction_mongodb is running on port 27017

# The server/.env is already configured for this setup
```

---

## Verification Steps

After setting up MongoDB:

1. **Backend Terminal:** Should show `Connected to MongoDB` message
2. **Browser:** Go to `http://localhost:3000/` and you should see JSON response
3. **Try Login:** Use the signup form to create an account

## Environment Variables Already Configured

Your project is already set up with:
- ✅ Frontend (port 5173) with Tailwind CSS
- ✅ Backend (port 3000) with Express
- ✅ Correct API endpoints configured
- ✅ Authentication system ready

All you need is the MongoDB connection!

## Need Help?

Check these files:
- `server/.env` - Contains MongoDB connection string
- `client/.env` - Contains API endpoints
- `SETUP.md` - Detailed setup instructions

---

**TL;DR:** 
1. Go to mongob.com/cloud/atlas
2. Create free cluster
3. Copy connection string
4. Paste into `server/.env`
5. Restart server
6. Done!
