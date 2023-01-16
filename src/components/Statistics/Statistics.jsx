import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './statistics.styled';

import getRandomHexColor from 'utils/getRandomHexColor';

const Statistics = ({ title, stats }) => {
  const items = stats.map(({ id, label, percentage }) => (
    <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </StatItem>
  ));

  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>{items}</StatList>
    </StatisticsSection>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
