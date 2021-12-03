import { Item, Status, Avatar, Name } from './FriendListItem.styled';
import { HiLockOpen, HiLockClosed } from 'react-icons/hi';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <Item>
      <Status>
        {status === true ? (
          <HiLockOpen color={'green'} />
        ) : (
          <HiLockClosed color={'red'} />
        )}
      </Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}