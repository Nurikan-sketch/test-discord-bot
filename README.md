# Local launch

---

### 1. Create a new <a href="https://discord.com/developers/applications">Discord Application</a> in the Discord Developer Portal

- Give app a friendly name and click the **Create App** button
- Take note of the app **CLIENT ID**, you will need it later
- Scroll down to the **Bot** section
- Click the **Create a Bot User** button
- Click the **Yes, do it!** button
- Copy the bot\'s **TOKEN**, you will need it later

### 2. Create invite link
- Go to **OAuth2 > URL Generator**
- Choose Scopes: **Bot**
- Choose the **Bot Permission** you need
- Follow the generated link below and select the server you want to invite the bot to

### 3. Install the bot

- Install <a href="https://nodejs.org/en">node.js</a> and make sure you have <a href="https://git-scm.com/downloads">Git</a> and <a href="https://docs.npmjs.com/getting-started">npm</a> installed
- Run `git clone https://github.com/Nurikan-sketch/test-discord-bot`
- Download dependencies using `npm install`
- Create a *config.json*
- Paste this code into the generated file
>{</br>
>"token" :"YOU TOKEN",</br>
>"client_id": YOU CLIENT_ID"</br>
>}