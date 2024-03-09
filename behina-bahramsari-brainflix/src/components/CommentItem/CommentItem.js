import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import { timestampToDate } from "../../utils/utils";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api-base-url";
import FormError from "../../components/FormError/FormError";

// for handling and displaying each video comment
function CommentItem({ comment, activeVideoId, triggerMainVideo }) {
  const [hasError, setHasError] = useState(false);
  const handlerDeleteComment = () => {
    deleteCommentFromServer();
  };
  const deleteCommentFromServer = async () => {
    try {
      console.log(BASE_URL + `/videos/${activeVideoId}/comments/${comment.id}`);
      await axios.delete(
        BASE_URL + `/videos/${activeVideoId}/comments/${comment.id}`
      );
      triggerMainVideo();
    } catch {
      setHasError(true);
    }
  };
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
        <div className="comment__buttons-container">
          <div className="comment__likes-count"></div>
          <button className="comment__button">
            <img src={likeIcon} alt="Like Icon" />
          </button>
          <button className="comment__button" onClick={handlerDeleteComment}>
            <img src={deleteIcon} alt="Delete Icon" />
          </button>
        </div>
        {hasError && (
          <FormError message="Something went wrong on the API server!" />
        )}
      </div>
    </article>
  );
}

export default CommentItem;
