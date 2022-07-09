const endpoints = {
    getPictures: ()=> 'https://boiling-refuge-66454.herokuapp.com/images',
    getBigPicture: (pictureID) => `https://boiling-refuge-66454.herokuapp.com/images/${pictureID}`, // + picture ID
    sendComment: (pictureID) =>`https://boiling-refuge-66454.herokuapp.com/images/${pictureID}/comments`
};

export default endpoints;