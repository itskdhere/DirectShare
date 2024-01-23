<h1 align='center'>DirectShare</h1>

## 📚 Description:
Share Any Files Peer-To-Peer

> **Status:** 🚧 Work In Progress 🚧

## 📡 Setup Locally:
### 📝 Prerequisites:
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)

### 🚀 Getting Started:
1. Clone the repository to your local machine:
```bash
git clone https://github.com/itskdhere/DirectShare
```

2. Go to the project directory:
```bash
cd DirectShare
```

3. Copy the `.env.example` file to `.env` file in the root project directory:
```bash
cp .env.example .env
```
Then edit the `.env` file and add the required environment variables accordingly.

4. Create a custom docker network:
```bash
docker network create itskdhere
```

5. Build and run the app:
```bash
docker compose up -d
```

6. Visit: <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080</a> 🎉


<p align='center'>--🙂--</p>