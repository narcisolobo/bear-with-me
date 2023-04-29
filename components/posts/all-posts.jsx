import PostList from '../posts/post-list';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/all-posts.module.css';

function AllPosts({ posts }) {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className="mb-4">All Posts</h1>
        <PostList posts={posts} />
      </Container>
    </section>
  );
}

export default AllPosts;
