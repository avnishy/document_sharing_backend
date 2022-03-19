const db = require('../models')
// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const Document = db.document
const Review = db.reviews

// main work
// 1. create document
const addDocument = async (req, res) => {

    let info = {
        document: req.file.path,
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const document = await Document.create(info)
    res.status(200).send(document)
    console.log(document)

}



// 2. get all documents
const getAllDocuments = async (req, res) => {

    let documents = await Document.findAll({})
    res.status(200).send(documents)

}

// 3. get single document
const getOneDocument = async (req, res) => {

    let id = req.params.id
    let document = await Document.findOne({ where: { id: id }})
    res.status(200).send(document)

}

// 4. update document
const updateDocument = async (req, res) => {

    let id = req.params.id

    const document = await Document.update(req.body, { where: { id: id }})

    res.status(200).send(document)
   

}

// 5. delete document by id
const deleteDocument = async (req, res) => {

    let id = req.params.id
    await Document.destroy({ where: { id: id }} )
    res.status(200).send('document is deleted !')

}

// 6. get published document
const getPublishedDocument = async (req, res) => {
    const documents =  await Document.findAll({ where: { published: true }})
    res.status(200).send(documents)
}

// 7. connect one to many relation document and Reviews
const getDocumentReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Document.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}


// 8. Upload Document Controller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'documents')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|pdf|doc|docs|csv|exl|xls/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('document')

module.exports = {
    addDocument,
    getAllDocuments,
    getOneDocument,
    updateDocument,
    deleteDocument,
    getPublishedDocument,
    getDocumentReviews,
    upload
}