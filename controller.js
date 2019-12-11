const axios = require('axios')
const cheerio = require('cheerio')
const scrap_urls = require('./scrap_urls')
const scrap_images = require('./scrap_images')

const scrapUrls = async (req, res) => {
  const urlLink = req.query.url
  try {
    if (urlLink != "" && urlLink != null) {
      const data = await scrap_urls(axios, cheerio, urlLink)
      if (data.length > 0)
        res.status(200).json({ status: 200, message: data })
      else
        res.status(404).json({ status: 404, message: "No data found" })
    }
    else {
      res.status(500).json({ status: 500, message: "Error Occured" })
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "No data found" })
  }
  res.end()
}

const scrapImages = async (req, res) => {
  const urlLink = req.query.url
  try {
    if (urlLink != "" && urlLink != null) {
      const data = await scrap_images(axios, cheerio, urlLink)
      if (data.length > 0)
        res.status(200).json({ status: 200, message: data })
      else
        res.status(404).json({ status: 404, message: "No data found" })
    }
    else {
      res.status(500).json({ status: 500, message: "Error Occured" })
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "No data found" })
  }
  res.end()
}

module.exports = {
  scrapUrls, scrapImages
}