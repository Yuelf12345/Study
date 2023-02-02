import axios from 'axios'
export function getPhotos (){
    //http://localhost:1201/getPhotos
    // /api/getPhotos
    return axios.get("/api/getPhotos")
}

export function uploadPhoto(file,onUploadProgress){
    const formData = new FormData();
    formData.append("img",file);

    return axios.post("/api/upload" ,formData,{
        onUploadProgress,
    })
}