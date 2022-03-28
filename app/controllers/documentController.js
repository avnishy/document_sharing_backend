{/*
We Have 8 Modules in this file such tha
1.  Create Document 
2.
3.
4.
5.
6.
7.
8.  Upload Image using Multer & we Define the Name of File, Folder Where Our File stored, max size of file, file type we Acccept 
*/}
const db = require('../models')
// image Upload
const multer = require('multer')
const path = require('path')
const baseUrl = "http://localhost:8080/files/"

// create main Model
const Document = db.document
const Review = db.reviews
const User = db.user


// main work
// 1. create document
const addDocument = async (req, res) => {
    
    let id = req.params.id
    let user = await User.findOne({ where: { id: id } })
    let info = {
        document: req.file.path,
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        linkurl: baseUrl + req.file.originalname,
        userID: id,
        userName: user.username
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
        cb(null, file.originalname) //To create a unique filename for every file
    }
})


// 9. get Document By UserID
const getUserDocument = async (req, res) => {
    let id = req.params.id
    let document = await Document.findAll({ where: { userID: id } })
    res.status(200).send(document)
}

// Get Doc user Name By User ID
const getUsernameById = async (req, res) => {
        let  userid = req.params.id;
        let user = await User.findOne({ where: { id: userid } })
        res.status(200).send(user.username);
}

//11 Get Userb List
const getUserList = async (req, res) => {
    let users = await User.findAll({})
    res.status(200).send(users);
}

const upload = multer({
    storage: storage,
    limits: { fileSize: '5000000' },    //max Size of file is 5mb 
    fileFilter: (req, file, cb) => {
        //API Accepts Formats for Images, gif, pdf, word file, publisher file, presentaion, excel sheets
        const fileTypes = /jpeg|jpg|png|gif|pdf|doc|docx|csv|xls|xlsx|pub|pptx|ppt/ 
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('document') // For Multiple docs upload we Use <.array('document',5)> for 5 images at a time

module.exports = {
    addDocument,
    getAllDocuments,
    getOneDocument,
    getUserDocument,
    updateDocument,
    deleteDocument,
    getPublishedDocument,
    getDocumentReviews,
    upload,
    getUsernameById,
    getUserList
}