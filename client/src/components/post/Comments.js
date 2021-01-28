import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import styled from "styled-components/macro";
import { userLoggedIn } from "../../helpers";
import { deleteComment } from "../../services/comments";

const CommentBox = styled.div`
  margin-top: 10px;
  border: 1px solid rgb(235, 237, 240);
  background-color: #fff;
`;

const CommentAuthor = styled.div`
  border-bottom: 1px solid rgb(235, 237, 240);
  padding: 8px;
  font-size: 13px;
`;

const CommentBody = styled.p`
  margin: 0;
  padding: 8px;
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 15px;
`;

const Comment = ({ post, postLoading }) => {
  const handleDelete = commentId => {
    deleteComment(commentId).then(
      () => (window.location = `/posts/${post._id}`)
    );
  };

  if (!postLoading) {
    return (
      <div>
        {post.comments.map(comment => (
          <CommentBox key={comment._id}>
            <CommentAuthor>
              {userLoggedIn() ? (
                <Link to={`/u/${comment.user.username}`}>
                  <strong>{comment.user.username}</strong>
                </Link>
              ) : (
                <strong>{comment.user.username}</strong>
              )}{" "}
              {moment(comment.createdAt).fromNow()}
              {comment.isOwner ? (
                <DeleteButton onClick={() => handleDelete(comment._id)}>
                  delete
                </DeleteButton>
              ) : (
                ""
              )}
            </CommentAuthor>
            <CommentBody>{comment.body}</CommentBody>
          </CommentBox>
        ))}
      </div>
    );
  } else {
    return <Skeleton count={3} height={70} />;
  }
};

export default Comment;
