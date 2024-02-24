import "./CommentForm.scss";
import avatarSrc from '../../assets/images/Mohan-muruge.jpg';
import Avatar from "../Avatar/Avatar"
import addCommentIcon from "../../assets/icons/add_comment.svg";
import Button from '../Button/Button'

function CommentForm() {
    return (
        <form className="comment-form">
            <div className="comment-form__avatar">
                <Avatar avatarSrc={avatarSrc} />
            </div>

            <div className="comment-form__body">
                <h3 className="comment-form__header" htmlFor="comment-text">JOIN THE CONVERSATION</h3>
                
                <div className="comment-form__input-wrapper">
                    <input placeholder="Add a new comment" id="comment-text" name="text" data-gramm="false" wt-ignore-input="true">
                    </input>
                    <Button iconSrc={addCommentIcon} text="comment"/>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
