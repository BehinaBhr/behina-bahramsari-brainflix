import "./VideoUpload.scss";
import thumbnailSrc from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Success from "../../components/Success/Success";
import addCommentIcon from "../../assets/icons/publish.svg";
import { DocumentTitle } from "../../utils/utils";
import { BASE_URL } from "../../api-base-url";
import axios from "axios";
import FormError from "../../components/FormError/FormError";

function VideoUpload() {
  DocumentTitle("Video Upload Page");
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerAddTitle = (event) => {
    setErrors(errors.filter((item) => item !== "title"));
    setTitle(event.target.value);
  };

  const handlerAddDescription = (event) => {
    setErrors(errors.filter((item) => item !== "description"));
    setDescription(event.target.value);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const uploadVideoToServer = async () => {
    try {
      await axios.post(BASE_URL + `/videos/`, {
        title: title,
        description: description,
        image: "images/Upload-video-preview.jpg",
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch {
      setErrors(["API ERROR"]);
    }
  };

  const submitHandler = (event) => {
    const errors = [];

    event.preventDefault();

    if (title.trim() === "") {
      errors.push("title");
    }

    if (description.trim() === "") {
      errors.push("description");
    }

    if (errors.length === 0) {
      uploadVideoToServer();
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>

      <form className="video-upload__form" onSubmit={submitHandler}>
        <div className="video-upload__form__body">
          <div className="video-upload__form__banner">
            <div className="video-upload__form__banner__title">
              VIDEO THUMBNAIL
            </div>
            <img
              className="video-upload__form__banner__img"
              src={thumbnailSrc}
              alt="Runner at the starting point of a race"
            />
          </div>
          <div className="video-upload__form__input-container">
            <label>title your video</label>
            <input
              onChange={handlerAddTitle}
              type="text"
              name="title"
              placeholder="Add a titile to your video"
              value={title}
              className={`video-upload__form__title ${
                errors.includes("title")
                  ? "video-upload__form__title--error"
                  : ""
              }`}
            />
            <label>add a video description</label>
            <textarea
              onChange={handlerAddDescription}
              type="text"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              className={`video-upload__form__description ${
                errors.includes("description")
                  ? "video-upload__form__description--error"
                  : ""
              }`}
            />
          </div>
        </div>
        <div className="video-upload__form__buttons">
          <button
            className="video-upload__form__cancel"
            disabled={submitSuccess}
            onClick={handleCancel}
            type="button"
          >
            CANCEL
          </button>
          <Button iconSrc={addCommentIcon} text="publish" />
        </div>
      </form>
      {errors.length > 0 && !errors.includes("API ERROR") && (
        <FormError message="All fields are required!" />
      )}
      {errors.includes("API ERROR") && (
        <FormError message="Something went wrong on the API server!" />
      )}
      {submitSuccess && <Success />}
    </section>
  );
}

export default VideoUpload;
