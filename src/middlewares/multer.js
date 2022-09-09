const multer = require("multer");
const routePath = require("../../routePath");

const storage = multer.diskStorage({
    destination: routePath  + "/public/docs/",
    filename: function(req, file, cb){    
        const ext = file.mimetype.split("/")[1]        
        cb("", req.body.curp + "-" +  file.fieldname + "." + ext)    
    }
})

const filter = (req, file, cb) => {
    if (
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "application/pdf") 
    {
        cb(null, true)
    } else {
        cb( (new Error("TYPE_FORMAT_INVALID")), false)            
    }
};

const upload = multer({
    storage: storage,
    fileFilter: filter,
    limits: {
        fileSize: 3000000
        //Archivos deben ser menores a 3MB.
    }
})

const uploadDocs =  upload.fields([
    { name: 'actaNacimiento', maxCount: 1 },
    { name: 'comprobanteDomicilio', maxCount: 1 },
    { name: 'comprobanteEstudios', maxCount: 1 }
]);

module.exports = { uploadDocs };