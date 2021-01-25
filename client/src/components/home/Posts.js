import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/posts";
import moment from "moment";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setPosts(posts);
        console.log(posts);
      })
      .finally(() => {
        setPostsLoading(false);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <Link to={`/posts/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            {post.comments.length} comments by {post.user.username}{" "}
            {moment(post.date).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
