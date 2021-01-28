import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import styled from "styled-components/macro";
import { userLoggedIn } from "../../helpers";

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

const Comment = ({ post, postLoading }) => {
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
