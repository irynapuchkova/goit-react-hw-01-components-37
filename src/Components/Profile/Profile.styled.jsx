import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 320px;
  display: inline-block;
  padding-top: 20px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 10px;

  border-radius: 5px;
  background-color: white;
`;

export const Img = styled.img`
  display: block;
  width: 220px;
  height: auto;

  border-radius: 50%;
  background-color: aliceblue;
  padding: 20px;
  margin: 20px 0;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;
export const Location = styled.p``;

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  background-color: deepskyblue;
  border-top: 1px solid black;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 3);

  font-size: 14px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;
export const Quantity = styled.span``;
