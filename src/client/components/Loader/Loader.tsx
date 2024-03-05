import styles from './Loader.module.css';
import { PulseLoader } from 'react-spinners';

interface LoaderProps {
  fullSize?: boolean;
  size?: 10 | 20 | 30;
}

export const Loader = ({ fullSize, size }: LoaderProps) => {
  const Child = (
    <PulseLoader
      className={styles.loader}
      data-testid={'loader'}
      loading={true}
      size={size || 10}
    />
  );

  return fullSize ? <div className={styles.wrapper}>{Child}</div> : Child;
};
