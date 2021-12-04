import {
  Title,
  StatsList,
  StatsItem,
  ItemLabel,
  ItemPercentage,
  Section,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <ItemLabel>{stat.label}</ItemLabel>
            <ItemPercentage>{stat.percentage}</ItemPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </Section>
  );
}
