import { useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components/macro";
import { deletePost } from "../../services/posts";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 10px;
`;

const PostBottomInfo = ({ post }) => {
  const history = useHistory();

  const handleDeletePost = () => {
    deletePost(post._id).then(res => history.push("/"));
  };

  return (
    <div>
      {post.comments.length} comments /r/{post.category} by {post.user.username}{" "}
      {moment(post.date).fromNow()}
      {post.isOwner ? (
        <DeleteButton onClick={handleDeletePost}> delete</DeleteButton>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostBottomInfo;
