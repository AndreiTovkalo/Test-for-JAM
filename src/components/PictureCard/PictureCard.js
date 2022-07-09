import styles from './styles.module.css'

function PictureCard({picture, clickHandler}){


    return(
        <div className={styles.card} onClick={() => {clickHandler(picture.id)}}>
            <img src={picture.url} alt="picture"/>
        </div>
    )
}

export default PictureCard;