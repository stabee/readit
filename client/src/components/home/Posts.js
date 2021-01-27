import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Post from "./Post";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(posts => {
        console.log(posts);
        setPosts(posts);
      })
      .finally(() => {
        setPostsLoading(false);
      });
  }, []);

  if (postsLoading) {
    return <Skeleton height={70} count={10} />;
  } else {
    return (
      <div>
        {posts.map(post => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
};

export default Posts;
