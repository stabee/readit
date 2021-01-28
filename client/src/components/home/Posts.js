import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Post from "./Post";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  let { category, username } = useParams();

  useEffect(() => {
    setPostsLoading(true);
    getPosts(category, username)
      .then(posts => {
        setPosts(posts);
      })
      .finally(() => {
        setPostsLoading(false);
      });
  }, [category, username]);

  if (postsLoading) {
    return <Skeleton height={70} count={10} />;
  } else {
    if (posts.length > 0) {
      return (
        <div>
          {posts.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      );
    } else {
      return <div>No posts to show</div>;
    }
  }
};

export default Posts;
