const { BlobServiceClient } = require("@azure/storage-blob");
const { azureStorageConnection } = require("../config")

const blobServices= BlobServiceClient.fromConnectionString(azureStorageConnection);
const container = "comprobantes";

async function uploadBlobStorage (file, name) {
    try {
        const { buffer } = file;
        const containerClient = blobServices.getContainerClient(container);
        await containerClient.getBlockBlobClient(name).uploadData(buffer);
        await getBlobStorage(name);
        return true;
    } catch (error) {
        console.error(error.message);
        return { "message": error.message }
    }
}

async function getBlobStorage (name) {
    try {
        const containerClient = blobServices.getContainerClient(container);
        const fileBlob = await containerClient.getBlockBlobClient(name).downloadToBuffer();
        return fileBlob;
    } catch (error) {
        return { "message": error.message }
    }
}

async function downloadBlob (name){
    const containerClient = blobServices.getContainerClient(container);
        const fileBlob = await containerClient.getBlockBlobClient(name).downloadToBuffer();        
        return fileBlob;
}

async function deleteBlob (name){
    const containerClient = blobServices.getContainerClient(container);
        const fileBlob = await containerClient.getBlockBlobClient(name).deleteIfExists();
        console.log(fileBlob)
        return fileBlob;
}

module.exports = { uploadBlobStorage, getBlobStorage, downloadBlob, deleteBlob };