import Modal from "../Modal/Modal";
import Comment from '../Comment/Comment'
import CommentForm from "../CommentForm/CommentForm";
import styles from './styles.module.css'
import {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import {getPictureDetails, sendComment} from "../../utils/api";
import Loader from '../Loader/Loader'

function PictureModal(props, ref){

    const [error, setError] = useState('')
    const [modalActive, setModalActive] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [pictureId, setPictureId] = useState();
    const [pictureDetails, setPictureDetails] = useState(null);


    useImperativeHandle(ref, ()=>({
        open: (id) => {
            setModalActive(true);
            setPictureId(id)
        }
    }));

    useEffect(() =>{
        if(!pictureId) return;

        setLoading(true);

        getPictureDetails(pictureId).then((res) => {
            setPictureDetails(res.data)
        })
            .finally(() => {
                setLoading(false);
            })

    }, [pictureId]);

    if(!pictureDetails) return null;


    let handleNewComment = (commentData) =>{
        if(commentData.text.trim().length !== 0 && commentData.name.trim().length !==0){
            setError('')
            commentData.date = new Date().getTime();
            sendComment(pictureId, commentData).catch((error) => {
                setError("Comment wasn't send")
                setTimeout(() => setError(''), 5000);
            });
            //Эндпоинт либо не работает, либо не ясно в какой форме нужно отправлять данные...

            console.log(commentData)
        }
        else{
            setError("Fill all text areas")
        }

    }



    return(
        <Modal setActive={setModalActive} active={modalActive}>
            {isLoading ? <Loader/> :
                <>
                <img src={pictureDetails?.url} alt=""/>
                <div>
                    <div>
                        <CommentForm sendComment={handleNewComment}/>
                    </div>

                    <p className={styles.error}>{error}</p>

                    <p>{pictureDetails?.comments.length === 1 ? `${pictureDetails.comments.length} comment` : `${pictureDetails?.comments.length} comments`} </p>

                    <div className={styles.comments}>
                        {pictureDetails.comments.length !== 0 ? pictureDetails.comments.map((item) => <Comment key={item.id}
                                                                         time={item.date}>{item.text}</Comment>) : ""}
                {/*<Comment>*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque dicta dolorum eos exercitationem expedita facilis fuga illo ipsum labore magni minima molestias natus, nobis non officiis, quaerat quam, veniam!*/}
                {/*</Comment>*/}
                    </div>
                </div>
                </>
            }
        </Modal>
        );
}

export default forwardRef(PictureModal);