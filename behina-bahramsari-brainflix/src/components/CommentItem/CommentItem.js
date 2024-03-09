import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar"
import {timestampToDate} from '../../utils/utils';


function CommentItem({ comment }) {
    return (
        <article className="comment" id={"comment-" + comment.id}>
            <Avatar avatarSrc={undefined} />
            <div className="comment__info">
                <div className="comment__header">
                    <h3 className="comment__name">{comment.name}</h3>
                    <div className="comment__date">
                        <div className="date">{timestampToDate(comment.timestamp)}</div>
                    </div>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div>
        </article>
    );
}

export default CommentItem;
