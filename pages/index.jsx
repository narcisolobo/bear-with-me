import { Fragment } from 'react';
import Hero from '@/components/layout/hero';
import Featured from '@/components/featured/featured';
import { getMainAndFeaturedPosts } from '@/utils/posts';
import Head from 'next/head';

function HomePage({ mainPost, featuredPosts }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="A fake blog from Fozzie Bear that I built to learn Next.js."
        />
        <title>Bear With Me: A Fozzie Blog</title>
      </Head>
      <Hero />
      <Featured mainPost={mainPost} featuredPosts={featuredPosts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const { mainPost, featuredPosts } = getMainAndFeaturedPosts();
  return {
    props: {
      mainPost,
      featuredPosts,
    },
  };
}

export default HomePage;
