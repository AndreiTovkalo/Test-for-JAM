import PictureCard from "../PictureCard/PictureCard";
import styles from './styles.module.css'

function PictureList({pictureArray, handleClick}){

    // let pic = { // Additional picture for checking another size image
    //     url: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg"
    // }

    return(
        <div className={styles.list}>
            {pictureArray.map((item) => <PictureCard key={item.id} picture={item} clickHandler={handleClick} />)}
            {/*{<PictureCard key={221} picture={pic}/>}*/}
        </div>
    )
}

export default PictureList;