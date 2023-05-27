module.exports = {
	name: "kitsune",
    code: `
$reply[$messageID;no]   
$color[$getVar[color]]  
$title[1;Kitsune;$jsonRequest[https://nekos.best/api/v2/kitsune;results[0].source_url]]
	$description[1;artist: [$jsonRequest[https://nekos.best/api/v2/kitsune;results[0].artist_name]]($jsonRequest[https://nekos.best/api/v2/kitsune;results[0].artist_href]) ]
	$image[1;$jsonRequest[https://nekos.best/api/v2/kitsune;results[0].url]]
`}