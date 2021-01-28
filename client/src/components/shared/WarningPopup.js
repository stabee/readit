import styled from "styled-components/macro";

const PopupContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  text-align: center;
  pointer-events: none;
  z-index: 100;
`;

const MessageBox = styled.div`
  display: inline-block;
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 12px;
  color: rgb(245, 34, 45);
  border-top: 2px solid rgb(245, 34, 45);
  background-color: #fff;
  padding: 12px 32px;
  font-size: 12px;
  text-transform: uppercase;
`;

const WarningPopup = ({ message }) => {
  return (
    <PopupContainer>
      <MessageBox>{message}</MessageBox>
    </PopupContainer>
  );
};

export default WarningPopup;
