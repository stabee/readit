import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Skeleton from "react-loading-skeleton";
import { getPost } from "../services/posts";
import { convertDate } from "../helpers";

const Post = () => {
  const [post, setPost] = useState({});
  const [postLoading, setPostLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    getPost(id).then(res => {
      console.log(res);
      setPost(res);
      setPostLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>{post.title || <Skeleton width={100} />}</h1>
      <small style={{ width: 100 }}>
        {post.author ? (
          `by ${post.author} on ${convertDate(post.date)}`
        ) : (
          <Skeleton width={100} />
        )}
      </small>
      <p>{post.body}</p>
      <Comment post={post} postLoading={postLoading} />
    </div>
  );
};

export default Post;
