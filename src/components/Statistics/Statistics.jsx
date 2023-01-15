import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const items = stats.map(({ id, label, percentage }) => (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  ));

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">{items}</ul>
    </section>
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
