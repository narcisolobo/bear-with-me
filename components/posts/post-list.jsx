import styles from '@/styles/post-list.module.css';
import PostItem from './post-item';

function PostList({ posts }) {
  return (
    <section className={styles.section}>
      <div className={styles['post-grid']}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostList;
