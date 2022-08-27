const { host } = require("../config");

class Files {
    constructor(){}

    constructorURL(files, curp){
        try {
            let objActaNacimiento = {}
            let objComprobanteDomicilio = {}
            let objComprobanteEstudios = {}

            if (files.actaNacimiento) {
                const actaNacimiento = this.createURL(
                    files.actaNacimiento, curp, "actaNacimiento");
                const obj = this.createObj(actaNacimiento, "actaNacimiento")
                objActaNacimiento = {...obj}
            }

            if (files.comprobanteDomicilio) {            
                const comprobanteDomicilio = this.createURL(
                    files.comprobanteDomicilio, curp, "comprobanteDomicilio");
                const obj = this.createObj(comprobanteDomicilio, "comprobanteDomicilio")
                objComprobanteDomicilio = {...obj}
            }
            
            if (files.comprobanteEstudios) {
                const comprobanteEstudios = this.createURL(
                    files.comprobanteEstudios, curp, "comprobanteEstudios");
                const obj = this.createObj(comprobanteEstudios, "comprobanteEstudios")
                objComprobanteEstudios = {...obj}
            }
            
            const objReturn = {
                ...objActaNacimiento,
                ...objComprobanteDomicilio,
                ...objComprobanteEstudios
            }
            return objReturn;
        } catch (error) {
            console.log(error)
        }
    }

    createObj(url, name) {
        const obj = {};
        Object.defineProperty(obj, name ,{
            value: url,
            enumerable: true,
            writable: true,
            configurable: true
        })
        return obj
    }

    createURL(file, curp, type){ 
        const ext = file[0].mimetype.split("/")[1];       
        const url = `${host}docs/${curp}-${type}.${ext}`
        return url
    }
}

module.exports = Files;