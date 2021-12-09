import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Friends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline}
        />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
