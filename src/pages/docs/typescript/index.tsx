import { ChaptersNav } from '@/components/ChaptersNav/ChaptersNav';
import styles from './styles.module.css';

export default function TypeScriptPage() {
  return (
    <div className={styles.page}>
      <ChaptersNav
        path='typescriptDoc'
        chapters={[
          {
            title: 'first',
            topics: ['1', '2', '3'],
          },
          {
            title: 'sec',
            topics: ['4', '5', '6'],
          },
        ]}
      />
      <div className={styles.content}>
        <p>ts</p>
        <p>ts</p>
        <p>ts</p>
        <p>ts</p>
        <p>ts</p>
      </div>
    </div>
  );
}
