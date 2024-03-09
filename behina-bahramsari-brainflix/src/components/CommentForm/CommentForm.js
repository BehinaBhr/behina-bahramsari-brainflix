import "./CommentForm.scss";
import avatarSrc from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api-base-url";
import FormError from "../../components/FormError/FormError";

// for handling and displaying video comment form 
function CommentForm({ activeVideoId, triggerMainVideo }) {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const handlerComment = (event) => {
    setComment(event.target.value);
    setErrors([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors([]);

    if (comment.trim() === "") {
      setErrors(["comment"]);
    } else {
      event.target.reset();
      addCommentToServer();
    }
  };

  const addCommentToServer = async () => {
    try {
      await axios.post(BASE_URL + `/videos/${activeVideoId}/comments`, {
        name: "current user",
        comment: comment,
      });
      triggerMainVideo();
    } catch {
      setErrors(["API ERROR"]);
    }
  };

  return (
    <form className="comment-form" onSubmit={submitHandler}>
      <div className="comment-form__avatar">
        <Avatar avatarSrc={avatarSrc} />
      </div>

      <div className="comment-form__body">
        <div className="comment-form__header" htmlFor="comment-text">
          JOIN THE CONVERSATION
        </div>

        <div className="comment-form__input-wrapper">
          <input
            onChange={handlerComment}
            placeholder="Add a new comment"
            id="comment-text"
            name="text"
            data-gramm="false"
            wt-ignore-input="true"
            className={`${errors.includes("comment") ? "error" : ""}`}
          />
          <Button iconSrc={addCommentIcon} text="comment" />
        </div>
        {errors.length > 0 && !errors.includes("API ERROR") && (
          <FormError message="All fields are required!" />
        )}
        {errors.includes("API ERROR") && (
          <FormError message="Something went wrong on the API server!" />
        )}
      </div>
    </form>
  );
}

export default CommentForm;
