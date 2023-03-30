const {REST, Routes} = require('discord.js');
const config = require('./config.json')

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: "hello",
        description: "User hello",
    },
];

// noinspection JSClosureCompilerSyntax
const rest = new REST({version: '10'}).setToken(config.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(config.CLIENT_ID), {body: commands});

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    if (interaction.commandName === 'hello') {
        await interaction.reply('Hello!');
    }
});

client.login(config.TOKEN);