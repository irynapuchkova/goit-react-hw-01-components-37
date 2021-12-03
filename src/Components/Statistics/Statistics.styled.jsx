import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 20px 40px;
  margin: 40px;

  background-color: wheat;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const StatsItem = styled.li`
  padding: 24px;
  flex-direction: column;
  display: flex;
  background-color: ${props =>
    props.children[0].props.children === '.docx'
      ? 'darkturquoise'
      : props.children[0].props.children === '.pdf'
      ? 'violet'
      : props.children[0].props.children === '.mp3'
      ? 'red'
      : props.children[0].props.children === '.psd'
      ? 'green'
      : 'black'};
`;

export const ItemLabel = styled.span`
  margin-bottom: 10px;
`;
export const ItemPercentage = styled.span``;
