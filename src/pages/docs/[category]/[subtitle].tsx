import { postApi } from '@/api/postApi';
import { ChaptersNav } from '@/client/components/ChaptersNav/ChaptersNav';

import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import styles from './styles.module.css';

export const getStaticPaths = (async () => {
  const posts = await postApi.getPaths();

  const paths = posts.map(({ category, subtitle }) => ({
    params: { category, subtitle },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  console.log(';context', context);

  const subtitle = (context.params?.subtitle || '') as string;
  const post = await postApi.getOne(subtitle);

  return { props: { post } };
}) satisfies GetStaticProps<{
  post: Post | null;
}>;

export default function Page({
  post,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('v props -- ', props);

  // TODO: add error

  return (
    <div className={styles.page}>
      <ChaptersNav
        path='typescriptDoc'
        chapters={
          [
            // {
            //   mainTitle: 'first',
            //   subtitles: ['1', '2', '3'],
            // },
            // {
            //   title: 'sec',
            //   topics: ['4', '5', '6'],
            // },
          ]
        }
      />
      <div className={styles.content}>
        <p>subtitle:{post?.subtitle}</p>

        <code>
          <div>asd</div>
        </code>

        <div style={{ border: '2px solid red' }}></div>
      </div>
    </div>
  );
}
