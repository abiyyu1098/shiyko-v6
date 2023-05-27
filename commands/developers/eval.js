module.exports = {
  name: "eval",
  aliases: ["e"],
  code: `$eval[$message]
    $argsCheck[>0;{newEmbed:{description: **Usage: ** $getGuildVar[prefix] eval \(code\)}{color:CC0000}}]
    $onlyForIDs[$botOwnerID;826058636912361488;{newEmbed:{description: **Permission needed: **}{color:CC0000}}]`
};