module.exports = [{
    name: "play",
    $if: "old",
    code: `
$description[$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true;Now playing **$songInfo[title;0]**.];false;Added **$songInfo[title;$sub[$queueLength;1]]** to the queue.]]
$thumbnail[$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true;$songInfo[thumbnail;0]];false;$songInfo[thumbnail;$sub[$queueLength;1]]]]
$reply



$playTrack[$message;soundcloud]

$if[$checkCondition[$hasPlayer==false||$voiceID[$clientID]==]==true]
$joinVC[$voiceID]
$endif
$disableMentionType[everyone]

$cooldown[3s;Don't spam this command, you can use it again in **%time%**.]
$onlyIf[$checkCondition[$voiceID!=]==true;Please connect to a voice channel to listen to music.]`
}]