import Modal from "../Modal/Modal";
import Comment from '../Comment/Comment'
import CommentForm from "../CommentForm/CommentForm";
import styles from './styles.module.css'
import setResource from "../../requests/setResource";
import endpoints from "../../endpoints/endpoints";
import {useState} from 'react'


function PictureModal({picture, setActive, active, comments}){

    const [error, setError] = useState('')

    let handleNewComment = (commentData) =>{
        if(commentData.text.trim().length !== 0 && commentData.name.trim().length !==0){
            setError('')
            commentData.date = new Date().getTime();
            setResource(endpoints.sendComment(picture.id), commentData).then((data) => {
                if(data.status === 400){
                    setError("Comment wasn't send")
                    setTimeout(() => setError(''), 5000);
                }
            })
            //Эндпоинт либо не работает, либо не ясно в какой форме нужно отправлять данные...

            console.log(commentData)
        }
        else{
            setError("Fill all text areas")
        }

    }



    return(
        <Modal setActive={setActive} active={active}>
            <img src={picture.url} alt=""/>
            <div>
                <div>
                    <CommentForm sendComment={handleNewComment}/>
                </div>

                <p className={styles.error}>{error}</p>

                <div className={styles.comments}>
                <p>{comments.length === 1? `${comments.length} comment` : `${comments.length} comments`} </p>
                {comments.length !== 0 ? comments.map((item)=> <Comment key={item.id} time={item.date} >{item.text}</Comment>) : ""}
                <Comment children="Nice photo"/>
                {/*<Comment>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque dicta dolorum eos exercitationem expedita facilis fuga illo ipsum labore magni minima molestias natus, nobis non officiis, quaerat quam, veniam!*/}
                {/*</Comment>*/}
                {/*<Comment>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque dicta dolorum eos exercitationem expedita facilis fuga illo ipsum labore magni minima molestias natus, nobis non officiis, quaerat quam, veniam!*/}
                {/*</Comment>*/}
                {/*    <Comment>*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque dicta dolorum eos exercitationem expedita facilis fuga illo ipsum labore magni minima molestias natus, nobis non officiis, quaerat quam, veniam!*/}
                {/*    </Comment>*/}
                {/*    <Comment>*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque dicta dolorum eos exercitationem expedita facilis fuga illo ipsum labore magni minima molestias natus, nobis non officiis, quaerat quam, veniam!*/}
                {/*    </Comment>*/}
                </div>
            </div>
        </Modal>
        );
}

export default PictureModal;