import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import VoteSection from "../shared/VoteSection";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import { getPost } from "../../services/posts";
import styled from "styled-components/macro";

const StyledPost = styled.div`
  border: 1px solid rgb(235, 237, 240);
  background-color: #fff;
`;

const FullPost = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(235, 237, 240);
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const PostHeader = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: rgb(69, 79, 91);
  padding: 10px;
  margin: 0;
`;

const PostBody = styled.p`
  margin: 0;
  padding: 5px 10px;
  background-color: rgb(252, 252, 252);
  color: rgb(69, 79, 91);
  border-top: 1px solid rgb(235, 237, 240);
  border-bottom: 1px solid rgb(235, 237, 240);
  font-size: 15px;
`;

const PostBottom = styled.div`
  padding: 10px 10px;
  font-size: 13px;
  color: rgb(69, 79, 91);
`;

const Post = () => {
  const [post, setPost] = useState({});
  const [postLoading, setPostLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getPost(id)
      .then(res => {
        setPost(res);
        console.log(res);
      })
      .finally(() => setPostLoading(false));
  }, [id]);

  return (
    <>
      <StyledPost>
        <FullPost>
          <VoteSection post={post} />
          <PostContent>
            <PostHeader>{post.title || <Skeleton />}</PostHeader>
            <PostBody>{post.body || <Skeleton />}</PostBody>
            <PostBottom>
              {post.user ? (
                `${post.comments.length} comments /r/${post.category} by ${
                  post.user.username
                } ${moment(post.date).fromNow()}`
              ) : (
                <Skeleton />
              )}
            </PostBottom>
          </PostContent>
        </FullPost>
        <CommentForm post={post} />
      </StyledPost>
      <Comments post={post} postLoading={postLoading} />
    </>
  );
};

export default Post;
