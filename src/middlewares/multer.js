const multer = require("multer");
const docsRoute = require("../../docsRoute");
const nameOfFile = "originalname";

const storage = multer.diskStorage({
    destination: docsRoute,    
    filename: (req, file, cb) => {        
        cb(null, file[nameOfFile]);
    }
})

const upload = multer({
    storage: storage
})

const uploadDocs =  upload.fields([
    { name: 'actaNacimiento', maxCount: 1 },
    { name: 'comprobanteDomicilio', maxCount: 1 },
    { name: 'comprobanteEstudios', maxCount: 1 }
]);

const updateDoc = upload.single("update");

module.exports = {
    uploadDocs: uploadDocs,
    updateDoc: updateDoc,    
};