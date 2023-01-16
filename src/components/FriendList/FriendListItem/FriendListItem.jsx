import PropTypes from 'prop-types';
import {
  ListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './friendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
