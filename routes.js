const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/scrap_urls', controller.scrapUrls)
router.get('/scrap_images', controller.scrapImages);

module.exports = router;