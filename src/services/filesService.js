const { host } = require("../config");

class Files {
    constructor(){}

    constructorURL(files, curp){            
        const actaNacimiento = this.createURL(
            files.actaNacimiento, curp, "actaNacimiento");
        const comprobanteDomicilio = this.createURL(
            files.comprobanteDomicilio, curp, "comprobanteDomicilio");
        const comprobanteEstudios = this.createURL(
            files.comprobanteEstudios, curp, "comprobanteEstudios");
        const obj = {
            actaNacimiento: actaNacimiento,
            comprobanteDomicilio: comprobanteDomicilio,
            comprobanteEstudios: comprobanteEstudios
        };
        return obj;
    }

    createURL(file, curp, type){ 
        const ext = file[0].mimetype.split("/")[1];       
        const url = `${host}docs/${curp}-${type}.${ext}`
        return url
    }
}

module.exports = Files;