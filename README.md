## Url shortener on MERN 

API/Client app to shorten links on MERN.<br>
- Client interacts with user on `5000` port and located at `/client`.<br>
- API handle Client requests on local port `3000` like `login`, `register`, `generate`, `get` link 
and interacts with DB. Located at project's root.

You can see working example here: http://217.16.18.253:5000 <br>
Use demo account in case you don't want to register<br>
Email: `demo@gmail.com`<br>
Password: `pass`<br>

### Some details
- Frontend port: 5000<br>
- Backend port: 3000 (for local api requests)<br>

### Installation

    git clone https://git...    // clone repo

After cloning repo rename `config/default.json.example` to `config/default.json`<br>
At least set `mongoUri` to connect to your DB in `default.json`. 
If you are running app remotely set `baseUrl` corresponding to your domain or IP  

    npm i                       // install api deps 
    npm run client:install      // install client deps
    npm run client:build        // build app front
    npm run start               // run in production, "npm run dev" for dev