import { postApi } from '@/api/postApi';
import { parsePost } from '@/client/helpers/parsePost';

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

  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const subtitle = (context.params?.subtitle || '') as string;
  const post = await postApi.getOne(subtitle);

  return { props: { post } };
}) satisfies GetStaticProps<{
  post: Post | null;
}>;

export default function Page({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // TODO: add error

  if (!post) return null;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>{post.mainTitle}</h1>
        <h2>{post.subtitle}</h2>
        <p>{post.category}</p>

        <div>{parsePost(post.post)}</div>
      </div>
    </div>
  );
}
