import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components/macro";
import VoteSection from "../shared/VoteSection";
import { userLoggedIn } from "../../helpers";

const StyledPost = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  background-color: #fff;
  border: 1px solid rgb(235, 237, 240);
  margin-right: 30px;
`;

const PostRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 8px;
`;

const Description = styled.div`
  font-size: 13px;
  color: rgb(129, 142, 153);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 800px;
`;

const BottomSection = styled.div`
  font-size: 13px;
`;

const Post = ({ post }) => {
  return (
    <StyledPost>
      <VoteSection post={post} />
      <PostRightContainer>
        <Link to={`/posts/${post._id}`}>
          <span>{post.title}</span>
        </Link>
        <Description>{post.body}</Description>
        <BottomSection>
          <Link to={`/posts/${post._id}`}>{post.comments.length} comments</Link>{" "}
          {post.category ? (
            <Link to={`/r/${post.category}`}>/r/{post.category}</Link>
          ) : (
            ""
          )}{" "}
          by{" "}
          {userLoggedIn() ? (
            <Link to={`/u/${post.user.username}`}>
              <strong>{post.user.username}</strong>
            </Link>
          ) : (
            <strong>{post.user.username}</strong>
          )}{" "}
          {moment(post.date).fromNow()}
        </BottomSection>
      </PostRightContainer>
    </StyledPost>
  );
};

export default Post;
