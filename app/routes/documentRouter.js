// import controllers review, documents
const documentController = require('../controllers/documentController.js')
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()

// use routers
router.post('/adddocument/:id', documentController.upload , documentController.addDocument)
router.get('/getuserdoc/:id', documentController.getUserDocument)
router.get('/alldocuments', documentController.getAllDocuments)
router.get('/published', documentController.getPublishedDocument)

// Review Url and Controller
router.get('/allReviews', reviewController.getAllReviews)

router.post('/addReview/:id', reviewController.addReview)

router.get('/getusernamebyid/:id', documentController.getUsernameById)

// get document Reviews
router.get('/getdocumentReviews/:id', documentController.getDocumentReviews)

//get user list
router.get('/getuserlist', documentController.getUserList)

// documents router
router.get('/:id', documentController.getOneDocument)
router.put('/:id', documentController.updateDocument)
router.delete('/:id', documentController.deleteDocument)

module.exports = router