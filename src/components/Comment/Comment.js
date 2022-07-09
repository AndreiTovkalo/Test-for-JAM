import styles from './styles.module.css'

function Comment({time=1657202845000, children}){

    let parseDate = (date) =>{
        let parsedTime = new Date(date);
        // return `${parsedTime.getDate()} ${parsedTime.getMonth()} ${parsedTime.getFullYear()}`
        return parsedTime.toLocaleString('uk', {year: 'numeric', month: 'numeric', day: 'numeric'})
    }

    return(
        <div className={styles.comment}>
            <div className={styles.avatar}>
                <img src='/img/user.svg' alt="avatar"/>
            </div>
            <div className={styles.text}>
                {children}
            </div>
            <div className={styles.date}>
                <p title={new Date(time).toDateString()}>{parseDate(time)}</p>
            </div>
        </div>
    );
}

export default Comment;