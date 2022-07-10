import axios from "axios";

const baseUrl = 'https://boiling-refuge-66454.herokuapp.com';

const axiosInstance = axios.create({
    baseURL: baseUrl,
})

export const getPictures = () =>{
    return axiosInstance.get('/images');
}

export const getPictureDetails = (pictureID) =>{
    return axiosInstance.get(`/images/${pictureID}`)
}

export const sendComment = (pictureID, data) =>{
    return axiosInstance.post(`https://boiling-refuge-66454.herokuapp.com/images/${pictureID}/comments`, data);
}


