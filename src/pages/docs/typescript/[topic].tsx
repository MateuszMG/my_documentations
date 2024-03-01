import { ChaptersNav } from '@/components/ChaptersNav/ChaptersNav';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

export default function Page() {
  const router = useRouter();
  const topic = router.query.topic;

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
        <p>topic:{topic}</p>

        <code>
          <div>asd</div>
        </code>
        <pre>asd</pre>
      </div>
    </div>
  );
}
