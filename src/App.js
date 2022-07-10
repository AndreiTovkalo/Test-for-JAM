import './App.css';
import {useEffect, useState, useRef} from 'react'
import PictureCard from "./components/PictureCard/PictureCard";
import PictureList from "./components/PictureList/PictureList";
import PictureModal from "./components/PictureModal/PictureModal";
import Loader from './components/Loader/Loader'
import {getPictures} from "./utils/api";

function App() {

    const [pictures, setPictures] = useState([]);
    const modalRef = useRef(null);



  useEffect(()=> {
      let setPicturesInfo = async() => {
          let responsePictures = await getPictures();
          setPictures(responsePictures.data);
      }
      setPicturesInfo();

  }, [])


    let handleClick = async(id) =>{
      modalRef.current.open(id);
    }


  return (
    <>
      <header>Pictures</header>
        <div className='wrapper'>
            {pictures.length ? <PictureList pictureArray={pictures} handleClick={handleClick}/> : <div className='pos'><Loader/></div> }
        </div>
        <PictureModal ref={modalRef}/>


        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
        </style>
    </>
  );
}

export default App;
