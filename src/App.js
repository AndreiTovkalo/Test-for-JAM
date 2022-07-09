import './App.css';
import {useEffect, useState} from 'react'
import endpoints from "./endpoints/endpoints";
import getResourse from "./requests/getResourse";
import PictureCard from "./components/PictureCard/PictureCard";
import PictureList from "./components/PictureList/PictureList";
import PictureModal from "./components/PictureModal/PictureModal";
import Loader from './components/Loader/Loader'


function App() {

    const [pictures, setPictures] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [comments, setComments] = useState([]);
    const [bigPicture, setBigPicture] = useState({});

  useEffect(()=> {
      let getPictures = async() => {
          let responsePictures = await getResourse(endpoints.getPictures());
          console.log(responsePictures);
          setPictures(responsePictures);
      }
      getPictures();

  }, [])


    let handleClick = async(id) =>{
      let responsePicture = await getResourse(endpoints.getBigPicture(id));
      setBigPicture(responsePicture);
      setComments(responsePicture.comments);
      setModalActive(true);
      console.log(responsePicture.comments)
    }


  return (
    <>
      <header>Pictures</header>
        <div className='wrapper'>
            {pictures.length ? <PictureList pictureArray={pictures} handleClick={handleClick}/> : <div className='pos'><Loader/></div> }
        </div>
        <PictureModal active={modalActive} setActive={setModalActive} picture={bigPicture} comments={comments}/>


        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
        </style>
    </>
  );
}

export default App;
