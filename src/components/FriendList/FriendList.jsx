import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendsList } from './friendList.styled';

const FriendList = ({ friends }) => {
  const friendsItem = friends.map(({ id, ...props }) => (
    <FriendListItem key={id} {...props} />
  ));

  return <FriendsList>{friendsItem}</FriendsList>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
