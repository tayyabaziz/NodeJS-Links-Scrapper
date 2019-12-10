const scrap_images = (axios, cheerio, urlLink) => {
  return new Promise(async (resolve, reject) => {
    const data = []
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!pattern.test(urlLink)) {
      urlLink = ""
      reject(false)
    }
    const responseData = await axios(urlLink)
    const urlData = cheerio.load(responseData.data)
    urlData('img').map((key, element) => {
      let anchorUrl = urlData(element).attr('src')
      if (anchorUrl != "" && pattern.test(anchorUrl)) {
        if (!data.includes(anchorUrl))
          data.push(anchorUrl)
      }
    })
    resolve(data)
  });
}

module.exports = scrap_images