module.exports = {
    name: "update-command",
    aliases: ["update","reload"],
    code: `
    $reply[$messageID;yes]
    Updating commans...
    $updateCommands
    $onlyForIDs[$botOwnerID;826058636912361488;{newEmbed:{description:$getVar[no] **Permission needed: **}{color:CC0000}}]
    `}