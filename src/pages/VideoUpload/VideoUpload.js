import "./VideoUpload.scss";
import thumbnailSrc from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import addCommentIcon from "../../assets/icons/publish.svg";

function VideoUpload() {
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerAddTitle = (event) => {
    setHasError(false);
    setTitle(event.target.value);
  };
  const handlerAddDescription = (event) => {
    setHasError(false);
    setDescription(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      setHasError(true);
      setSubmitSuccess(false);
    } else {
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/");
    }, 3000);
      // navigate('/success');
    }
  };

  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>

        <form className="video-upload__form" onSubmit={handlerSubmit}>

            <div className="video-upload__form__banner">
                <div className="video-upload__form__banner__title">
                    VIDEO THUMBNAIL
                </div>
                <img className="video-upload__form__banner__img"
                    src={thumbnailSrc}
                    alt="Runner at the starting point of a race"/>
            </div>

            <div className="video-upload__form__body">
                <label>
                title your video
                </label>
                <input
                    onChange={handlerAddTitle}
                    type="text"
                    name="title"
                    placeholder="Add a titile to your video"
                    value={title}
                    className="video-upload__form__title"
                />
                <label>
                add a video description
                </label>
                <input
                    onChange={handlerAddDescription}
                    type="text"
                    name="description"
                    placeholder="Add a description to your video"
                    value={description}
                    className="video-upload__form__description"
                />
            </div>

            <div className="video-upload__form__buttons">
                <button disabled={submitSuccess}>CANCLE </button>
                <Button iconSrc={addCommentIcon} text="publish" />
            </div>
        </form>
      {hasError && <div className="error-message">The form has errors, please fix it.</div>}
      {submitSuccess && <div className="success-wrapper"><div className="success-message">Your Video has successfully published.</div></div>}
    </section>
  );
}

export default VideoUpload;
