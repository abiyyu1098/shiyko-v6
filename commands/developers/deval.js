module.exports = {
    name: "deval",
    aliases: ['djs', 'djseval'],
    code: `
\`\`\`js
$djsEval[try {
    $message
} catch (err) {
    err
};true]
\`\`\`
    $argsCheck[>0;{newEmbed:{description:$getVar[no] **Usage: ** $getGuildVar[prefix]deval \(code\)}{color:CC0000}}]
  	$onlyIf[$checkContains[$channelType;text;news]==true;Please do this in a guild!]
    $onlyForIDs[$botOwnerID;826058636912361488;{newEmbed:{description:$getVar[no] **Permission needed: **}{color:CC0000}}]
    `
}