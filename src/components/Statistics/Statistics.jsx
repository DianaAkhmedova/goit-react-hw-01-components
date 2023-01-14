const Statistics = ({ title, stats }) => {
  const items = stats.map(({ id, label, percentage }) => (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  ));

  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">{items}</ul>
    </section>
  );
};

export default Statistics;
