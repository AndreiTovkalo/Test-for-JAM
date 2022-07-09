import {useState, useRef} from 'react'
import styles from './styles.module.css'
import setResource from "../../requests/setResource";
import endpoints from "../../endpoints/endpoints";


function CommentForm({sendComment}){

    let [commentData, setCommentData] = useState({name: '', text: ''})

    let handleData = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setCommentData({...commentData, [name]: value});
    }


    return (
        <div className={styles.commentBox}>
            <div className={styles.nameArea}>
                <input onChange={(e) => {handleData(e)}}
                       value={commentData.name} name="name"
                       type="text" placeholder="Enter username..."/>
            </div>
            <div className={styles.inputArea}>
                <input onChange={(e) => {handleData(e)}}
                       value={commentData.text} name="text"
                       type="text" placeholder="Add a comment..."/>
            </div>

            <button type="submit" onClick={(e) => {
                sendComment(commentData);
                setCommentData({name: '', text: ''})
            }}>
                Send
            </button>
        </div>

    )
}

export default CommentForm;