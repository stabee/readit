import { convertDate } from "../helpers";
import Skeleton from "react-loading-skeleton";

const Comment = ({ post, postLoading }) => {
  if (!postLoading) {
    if (post.comments) {
      return (
        <div>
          <h3>
            {post.comments.length > 1
              ? `${post.comments.length} Comments`
              : `${post.comments.length} Comment`}
          </h3>
          {post.comments.map(comment => (
            <div key={comment._id}>
              <p>{comment.body}</p>
              <small>
                - {comment.user.username} on {convertDate(comment.createdAt)}
              </small>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Be the first to comment!</h3>
        </div>
      );
    }
  } else {
    return (
      <div style={{ width: 200 }}>
        <Skeleton count={3} />
      </div>
    );
  }
};

export default Comment;
