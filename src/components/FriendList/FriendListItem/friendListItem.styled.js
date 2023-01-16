import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 7px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
