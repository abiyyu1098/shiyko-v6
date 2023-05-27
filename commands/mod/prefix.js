module.exports = {
    name: "prefix",
    aliases: ["set-prefix","change-prefix"],
    code: `
    $reply[$messageID;no]
    $setServerVar[prefix;$message[1]]
    $onlyPerms[manageserver;:x: You need Manage Server  permissions]
    $description[Set Prefix to \`$message[1]\`]
    $argsCheck[>0;masukkan prefix]
    $footer[1;Executed by $usertag;$useravatar]
  `
  }