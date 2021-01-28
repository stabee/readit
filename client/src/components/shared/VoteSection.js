import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";
import { vote } from "../../services/posts";
import { userLoggedIn } from "../../helpers";
import WarningPopup from "./WarningPopup";

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid rgb(235, 237, 240);
  font-size: 16px;
`;

const VoteSection = ({ post }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [userVoteValue, setUserVoteValue] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setVoteCount(post.voteCount);
    setUserVoteValue(post.userVoteValue);
  }, [post]);

  const handleVote = value => {
    if (!userLoggedIn()) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 4000);
      return;
    }
    if (
      (userVoteValue === 1 && value === 1) ||
      (userVoteValue === -1 && value === -1)
    ) {
      setUserVoteValue(0);
    } else {
      setUserVoteValue(value);
    }

    vote(value, post._id).then(res => {
      setVoteCount(res.data.voteCount);
      console.log(res.data);
    });
  };

  return (
    <>
      {showWarning ? <WarningPopup message="Login to vote" /> : ""}
      <VoteContainer>
        {userVoteValue === 1 ? (
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon="caret-up"
            onClick={() => handleVote(0)}
            color="#007bff"
          />
        ) : (
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon="caret-up"
            onClick={() => handleVote(1)}
          />
        )}
        <span>{voteCount}</span>
        {userVoteValue === -1 ? (
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon="caret-down"
            onClick={() => handleVote(0)}
            color="orange"
          />
        ) : (
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon="caret-down"
            onClick={() => handleVote(-1)}
          />
        )}
      </VoteContainer>
    </>
  );
};

export default VoteSection;
