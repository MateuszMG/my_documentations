import { postApi } from '@/api/postApi';
import { ChaptersNav } from '@/client/components/ui/ChaptersNav/ChaptersNav';
import { groupTitles } from '@/client/helpers/arrays';
import { availableCategories } from '@/const';
import { mongooseConnect } from '@/server/config/db';
import { postController } from '@/server/modules/posts/postController';
import { PostModel } from '@/server/modules/posts/postModel';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import styles from './styles.module.css';

export const getStaticPaths = (async () => {
  const paths = availableCategories.map((category) => ({
    // const paths = availableCategories.slice(0, 1).map((category) => ({
    params: { category },
  }));
  console.log('paths', paths);

  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  console.log('context.params', context.params);
  const category = (context.params?.category ||
    'typescript') as AvailableCategories;

  await mongooseConnect();

  const documentTitles = await PostModel.find({ category }).select([
    '_id',
    'mainTitle',
    'subtitle',
  ]);

  const titles = documentTitles.map((item) => {
    const { _id, ...rest } = item.toObject();
    return { ...rest, _id: _id.toString() };
  });

  console.log('titles', titles);

  const groupedTitles = groupTitles(titles);

  return { props: { category, titles: groupedTitles } };
}) satisfies GetStaticProps<PageProps>;

interface PageProps {
  category: AvailableCategories;
  titles: GroupedTitles;
}

export default function Page({ category, titles, ...props }: PageProps) {
  console.log('category, titles', category, titles);
  console.log('props', props);

  if (!category || !titles) return null;

  return (
    <div className={styles.page}>
      <ChaptersNav
        path={category}
        chapters={Object.entries(titles).map(([mainTitle, subtitles]: any) => ({
          mainTitle,
          subtitles: subtitles.map(({ _id, subtitle }: any) => ({
            _id,
            subtitle,
          })),
        }))}
      />
    </div>
  );
}
