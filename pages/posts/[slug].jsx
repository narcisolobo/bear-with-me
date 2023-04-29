import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostFiles, getRecentPosts } from '@/utils/posts';

function PostDetailPage({ post, recentPosts }) {
  const title = `Bear With Me: ${post.title}`;
  return (
    <Fragment>
      <Head>
        <meta name="description" content={post.excerpt} />
        <title>{title}</title>
      </Head>
      <PostContent post={post} recentPosts={recentPosts} />
    </Fragment>
  );
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((post) => post.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  return {
    props: {
      post: getPostData(slug),
      recentPosts: getRecentPosts(),
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
