module.exports = {
    name:"anime",
    code:`
  $reply[$messageID;no]
  $title[1;$getObjectProperty[data[0].title_english];$getObjectProperty[data[0].url]]
  $author[1;$getObjectProperty[data[0].title]]
  $description[1;$getObjectProperty[data[0].synopsis]]
  $thumbnail[1;$getObjectProperty[data[0].images.jpg.large_image_url]]
  $color[1;$jsonRequest[https://api.sightengine.com/1.0/check.json?models=properties&api_user=2214181&api_secret=pZ9jbc5mWoJVNPQLi5SZ&url=$getObjectProperty[data[0].images.jpg.large_image_url];colors.dominant.hex;$getServerVar[color;$guildID]]]
  
  $addField[1;Producers;\`\`\`Producers: $getObjectProperty[data[0].producers[0].name]
  Studios: $getObjectProperty[data[0].studios[0].name]\`\`\`]
  
  $addField[1;Season;\`\`\`$getObjectProperty[data[0].season]\`\`\`]
  
  $addField[1;Rank;\`\`\`$numberSeparator[$getObjectProperty[data[0].rank]]\`\`\`]
  
  $addField[1;Score;\`\`\`$getObjectProperty[data[0].score]\`\`\`]
  
  $addField[1;Rating;\`\`\`$getObjectProperty[data[0].rating]\`\`\`]
  
  $addField[1;Duration;\`\`\`$getObjectProperty[data[0].duration]\`\`\`]
  
  $addField[1;Episodes;\`\`\`$getObjectProperty[data[0].episodes]\`\`\`]
  
  $addField[1;Genres;\`\`\`$getObjectProperty[data[0].genres[0].name], $getObjectProperty[data[0].genres[1].name]\`\`\`]
  
  $addField[1;Year;\`\`\`$getObjectProperty[data[0].year]\`\`\`]
  
  $addField[1;Title;\`\`\`$getObjectProperty[data[0].title]
  $getObjectProperty[data[0].title_english]
  $getObjectProperty[data[0].title_japanese]
  $getObjectProperty[data[0].title_synonyms[0]]\`\`\`]
  
  $footer[1;Powered by MyAnimeList]
  $suppressErrors[❌ error anime data not found]
  $createObject[$jsonRequest[https://api.jikan.moe/v4/anime?q=$message&limit=1]]
  $argsCheck[>0;please type the anime name to search]
  
  $botTyping`
  
  }
  