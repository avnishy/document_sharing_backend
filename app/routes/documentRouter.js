// import controllers review, documents
const documentController = require('../controllers/documentController.js')
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()

// use routers
router.post('/adddocument', documentController.upload , documentController.addDocument)
router.get('/alldocuments', documentController.getAllDocuments)
router.get('/published', documentController.getPublishedDocument)

// Review Url and Controller
router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get document Reviews
router.get('/getdocumentReviews/:id', documentController.getDocumentReviews)


// documents router
router.get('/:id', documentController.getOneDocument)
router.put('/:id', documentController.updateDocument)
router.delete('/:id', documentController.deleteDocument)

module.exports = router