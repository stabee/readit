import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Skeleton from "react-loading-skeleton";
import { getPost } from "../../services/posts";
import moment from "moment";

const Post = () => {
  const [post, setPost] = useState({});
  const [postLoading, setPostLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getPost(id)
      .then(res => {
        setPost(res);
      })
      .finally(() => setPostLoading(false));
  }, [id]);

  return (
    <div>
      <h1>{post.title || <Skeleton width={100} />}</h1>
      <small style={{ width: 100 }}></small>
      <p>{post.body}</p>
      {post.user ? (
        `Posted by ${post.user.username} ${moment(post.date).fromNow()}`
      ) : (
        <Skeleton width={100} />
      )}
      <CommentForm postId={id} />
      <Comments post={post} postLoading={postLoading} />
    </div>
  );
};

export default Post;
