import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentItem from "../CommentItem/CommentItem";

// for displaying and managing video comments
function CommentSection({ commentsList, activeVideoId, triggerMainVideo }) {
  return (
    <section className="comment-section">
      <CommentForm activeVideoId={activeVideoId} triggerMainVideo={triggerMainVideo}/>
      {commentsList != undefined &&
        commentsList.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} triggerMainVideo={triggerMainVideo} activeVideoId={activeVideoId} />;
        })}
    </section>
  );
}

export default CommentSection;
