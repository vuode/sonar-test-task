import React from 'react';

import { formatDate } from '../../utils/formatDate';
import { Launch } from '../../generated';

import styles from './Card.module.css';

type Props = {
  entry: Launch;
};

const Card: React.FC<Props> = ({ entry }) => {
  const { mission_name, launch_date_local, rocket, details } = entry;
  // launch_date_local is not correctly typed by codegen
  const formattedDate = formatDate(launch_date_local as string);
  const hasSubtitle = formattedDate || rocket?.rocket_name;

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>🛰{mission_name}</h2>

      {hasSubtitle && (
        <h3 className={styles.subtitle}>
          {formattedDate} 🚀 {rocket?.rocket_name}
        </h3>
      )}

      {details && <p className={styles.details}>{details}</p>}
    </article>
  );
};

export default Card;
