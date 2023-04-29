import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/utils/posts';
import { Fragment } from 'react';
import Head from 'next/head';

function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="All fake blog posts page from Fozzie's blog."
        />
        <title>Bear With Me: All Posts</title>
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}

export default AllPostsPage;
