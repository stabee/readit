import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/posts";
import { convertDate } from "../helpers";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(posts => {
      setPosts(posts);
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
            by {post.author} on {convertDate(post.date)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
