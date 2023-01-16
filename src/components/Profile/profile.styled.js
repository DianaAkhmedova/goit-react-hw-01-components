import styled from 'styled-components';

export const ProfileStyles = styled.div`
  margin: 20px auto 40px;
  width: 340px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 7px;
`;

export const UserDescription = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

export const UserAvatar = styled.img`
  margin: 0 auto 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #b0c4de;
  box-shadow: 10px 11px 19px 0px rgba(176, 196, 222, 0.23);
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #a9a9a9;
`;

export const UserLocation = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #a9a9a9;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-top: 1px solid #c0c0c0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  padding: 20px;

  &: not(: last-child) {
    border-right: 1px solid #c0c0c0;
  }
`;
export const StatsLabel = styled.span`
  margin-bottom: 10px;
`;

export const StatsQuantity = styled.span`
  font-weight: 500;
`;
