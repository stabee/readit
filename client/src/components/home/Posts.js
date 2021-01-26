import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getPosts } from "../../services/posts";
import styled from "styled-components/macro";

const StyledPost = styled.div`
  background-color: #fff;
  border: 1px solid rgb(235, 237, 240);
  margin-right: 30px;
  height: 70px;
`;

const Description = styled.div`
  font-size: 13px;
  color: rgb(129, 142, 153);
  overflow: hidden;
`;

const BottomSection = styled.div`
  font-size: 13px;
`;

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
        <StyledPost>
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <span>{post.title}</span>
            </Link>
            <Description>{post.body}</Description>
            <BottomSection>
              <Link to={`/posts/${post._id}`}>
                {post.comments.length} comments
              </Link>{" "}
              by{" "}
              <Link to={`/u/${post.user.username}`}>
                <strong>{post.user.username}</strong>
              </Link>{" "}
              {moment(post.date).fromNow()}
            </BottomSection>
          </div>
        </StyledPost>
      ))}
    </div>
  );
};

export default Posts;
