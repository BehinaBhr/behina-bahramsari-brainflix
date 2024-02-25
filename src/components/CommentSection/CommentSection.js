import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentItem from "../CommentItem/CommentItem";

function CommentSection({ commentsList }) {
    return (
        <section className="comment-section">
            <CommentForm/>
            {
                commentsList.map((comment) => {
                    return (
                        <CommentItem 
                            key={comment.id}
                            comment={comment}
                        />
                    )
                })
            }
        </section>
    );
}

export default CommentSection;
