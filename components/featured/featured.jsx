import PostList from '../posts/post-list';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/featured.module.css';
import MainPost from '../posts/main-post';

function Featured({ mainPost, featuredPosts }) {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className="mb-4">Featured Posts</h1>
        <div className={styles.flex}>
          <div className={styles['flex-2']}>
            <MainPost post={mainPost} />
          </div>
          <div className={styles['flex-1']}>
            <PostList posts={featuredPosts} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Featured;
