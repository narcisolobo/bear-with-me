import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/post-header.module.css';

function PostHeader({ title, image }) {
  return (
    <header className={styles.header}>
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="position-absolute top-0"
      />
      <Container>
        <h1 className={styles.title}>{title}</h1>
      </Container>
    </header>
  );
}

export default PostHeader;
