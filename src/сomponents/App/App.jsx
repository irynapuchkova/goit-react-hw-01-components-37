import data from 'database/data.json';
import friends from 'database/friends.json';
import user from 'database/user.json';
import transactions from 'database/transactions.json';

import Profile from 'сomponents/Profile';
import Statistics from 'сomponents/Statistics';
import FriendList from 'сomponents/FriendList';
import TransactionHistory from 'сomponents/TransactionHistory';
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
