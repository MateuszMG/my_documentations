import { postApi } from '@/api/postApi';
import { ChaptersNav } from '@/client/components/ChaptersNav/ChaptersNav';
import { groupTitles } from '@/client/helpers/arrays';
import { availableCategories } from '@/const';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import styles from './styles.module.css';

export const getStaticPaths = (async () => {
  const paths = availableCategories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  console.log(';getStaticProps context', context);

  const category = (context.params?.category ||
    'typescript') as AvailableCategories;

  const titles = await postApi.getTitles(category);
  const groupedTitles = groupTitles(titles);

  return { props: { titles: groupedTitles } };
}) satisfies GetStaticProps<{ titles: GroupedTitles }>;

// export default function Page({ titles }: { titles: GroupedTitles }) {
export default function Page({ titles, ...props }: any) {
  console.log('props', props);

  return (
    <div className={styles.page}>
      <ChaptersNav
        path='typescriptDoc'
        chapters={Object.entries(titles).map(([mainTitle, subtitles]: any) => ({
          mainTitle,
          subtitles: subtitles.map(({ _id, subtitle }: any) => ({
            _id,
            subtitle,
          })),
        }))}
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
