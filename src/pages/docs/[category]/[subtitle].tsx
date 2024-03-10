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
  console.log('parsePost(post.post)', parsePost(post.post));

  // const formatedPost = parsePost(post.post)
  //   .map((item) => {
  //     //@ts-ignore
  //     if (!item?.props?.value) return null;
  //     return item;
  //   })
  //   .filter((item) => !!item);

  // console.log('formatedPost', formatedPost);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>{post.mainTitle}</h1>
        <h2>{post.subtitle}</h2>
        <p>{post.category}</p>

        {/* <div dangerouslySetInnerHTML={{ __html: parsePost(post.post) }}></div> */}
        <div>{parsePost(post.post)}</div>
        {/* {parsePost(post.post)} */}
        {/* {formatedPost} */}
      </div>
    </div>
  );
}

// import { postApi } from '@/api/postApi';
// import { parsePost } from '@/client/helpers/parsePost';

// import {
//   GetStaticPaths,
//   GetStaticProps,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from 'next';

// import styles from './styles.module.css';

// export const getStaticPaths = (async () => {
//   const posts = await postApi.getPaths();

//   const paths = posts.map(({ category, subtitle }) => ({
//     params: { category, subtitle },
//   }));

//   return { paths, fallback: true };
// }) satisfies GetStaticPaths;

// export const getStaticProps = (async (context: GetStaticPropsContext) => {
//   const subtitle = (context.params?.subtitle || '') as string;
//   const post = await postApi.getOne(subtitle);

//   return { props: { post } };
// }) satisfies GetStaticProps<{
//   post: Post | null;
// }>;

// export default function Page({
//   post,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   // TODO: add error

//   if (!post) return null;
//   console.log('parsePost(post.post)', parsePost(post.post));

//   // const formatedPost = parsePost(post.post)
//   //   .map((item) => {
//   //     //@ts-ignore
//   //     if (!item?.props?.value) return null;
//   //     return item;
//   //   })
//   //   .filter((item) => !!item);

//   // console.log('formatedPost', formatedPost);

//   return (
//     <div className={styles.page}>
//       <div className={styles.content}>
//         <h1>{post.mainTitle}</h1>
//         <h2>{post.subtitle}</h2>
//         <p>{post.category}</p>

//         {/* <div dangerouslySetInnerHTML={{ __html: parsePost(post.post) }}></div> */}
//         {/* <div>{parsePost(post.post)}</div> */}
//         {/* {parsePost(post.post)} */}
//         {/* {formatedPost} */}
//       </div>
//     </div>
//   );
// }
