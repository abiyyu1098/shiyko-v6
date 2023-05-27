module.exports = {
	name: "waifu",
    code: `
  $reply[$messageID;no]
  $color[$getVar[color]]  $title[1;Waifu;$jsonRequest[https://nekos.best/api/v2/waifu;results[0].source_url]]
	$description[1;artist: [$jsonRequest[https://nekos.best/api/v2/waifu;results[0].artist_name]]($jsonRequest[https://nekos.best/api/v2/waifu;results[0].artist_href]) ]
	$image[1;$jsonRequest[https://nekos.best/api/v2/waifu;results[0].url]]
`}