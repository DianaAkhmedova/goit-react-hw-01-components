import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: fit-content;
  margin: 0 auto 40px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 7px;
`;

export const StatisticsTitle = styled.h2`
  padding: 40px;
  color: #696969;
  background-color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  padding: 20px;
  color: #ffffff;
  &: first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

export const StatLabel = styled.span`
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
`;
