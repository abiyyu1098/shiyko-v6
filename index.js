require('dotenv').config();
const aoi = require("aoi.js");

const allIntents = ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"]

const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
} = require(`@akarui/aoi.music`);


const bot = new aoi.AoiClient({
    token: process.env.token, //create env
    prefix: "Ai",
    intents: allIntents,
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
})//aaaaaa

bot.readyCommand({
code: `$log[$getBotInvite]`
})

const loader = new aoi.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
//loader style
loader.setColors( loader.themes.default )


const voice = new AoiVoice(bot, {
    searchOptions: {
        // soundcloudClientId: "Sound Cloud Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

// adds a cacher plugin
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));

// adds a filter plugin
voice.addPlugin(
    PluginName.Filter,
    new Filter({
        filterFromStart: false,
    }),
);

voice.bindExecutor(bot.functionManager.interpreter);

voice.addEvent(PlayerEvents.TRACK_START);

bot.variables({
color: "#A020F0",
prefix: "Ai",
name: "Ohto Ai",
no: ":no_entry:"
})

const {Panel} = require("@akarui/aoi.panel")

const panel = new Panel({
    username: "username",//username for logging in
    password: "password",//password for logging in
    secret: "aoijs",//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "commands"// folder name in which all the edit needing files are there
})
panel.loadPanel()//Load The Panel

panel.onError()//Will detect errors, and send it to aoi.panel's error page
