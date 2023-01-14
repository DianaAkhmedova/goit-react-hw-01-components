import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  const friendsItem = friends.map(({ id, ...props }) => (
    <FriendListItem key={id} {...props} />
  ));

  return <ul class="friend-list">{friendsItem}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  items: [],
};
