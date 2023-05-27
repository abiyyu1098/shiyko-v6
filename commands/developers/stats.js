module.exports = {
name: "stats",
code: `
$color[$getVar[color]]
$reply[$messageID;no]
$title[Stats $getVar[name]]
$description[**Developer: [$usertag[$botownerid]](https://discord.com/users/$botownerid)
Library: [Aoi.js@$packageVersion](https://aoi.js.org/#/) (Node.js@$nodeVersion)
Database: [MySQL](https://www.mysql.com/)
Creation $creationdate[$clientid;date]
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃**
\`\`\`js
Gateway           :: $ping ms
Commands          :: $commandscount
Servers           :: $guildCount
Users             :: $allMembersCount
Variables         :: $variablesCount
-------------------------------------------------------
Model CPU         :: $djsEval[require ('os').cpus()[0].model;true]
Platform          :: $djsEval[require ('os').platform();true]
Uptime            :: $djsEval[Math.floor(client.uptime / 86400000);;true] d, $djsEval[Math.floor(client.uptime / 3600000) % 24;;true] h, $djsEval[Math.floor(client.uptime / 60000) % 60;;true] m, $djsEval[Math.floor(client.uptime / 1000) % 60;;true] s
RAM               :: $abbreviate[$truncate[$ram]]mb/$maxrammb
Memory            :: $djsEval[process.memoryUsage().rss / 1024 / 1024;true] MB
CPU Usage         :: $djsEval[(require('os').loadavg().reduce((a, b) => a + b, 0) / 3).toFixed(2);true]%\`\`\`
]
$footer[Executor ~ $userTag;$userAvatar]
$addTimestamp[1]
`}