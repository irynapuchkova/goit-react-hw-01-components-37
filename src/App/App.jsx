import Profile from 'Components/Profile';
import Statistics from 'Components/Statistics';
import FriendList from 'Components/FriendList';
import TransactionHistory from 'Components/TransactionHistory';

import user from 'Components/Profile/user.json';
import data from 'Components/Statistics/data.json';
import friends from 'Components/FriendList/friends.json';
import transactions from 'Components/TransactionHistory/transactions.json';
import { Wrapper } from './App.styled';

export default function App() {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
}
