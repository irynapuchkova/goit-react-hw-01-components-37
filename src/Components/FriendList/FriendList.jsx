import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Friends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
