import {
  Wrapper,
  Description,
  Img,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Wrapper>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}@</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
}
