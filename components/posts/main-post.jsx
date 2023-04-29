import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from '@/styles/main-post.module.css';
import formatDate from '@/utils/format-date';
import imagePath from '@/utils/image-path';
import Link from 'next/link';

function MainPost({ post }) {
  const { title, image, date, excerpt, slug } = post;

  return (
    <Card className={`shadow ${styles['main-post']}`}>
      <Image
        src={imagePath(slug, image)}
        alt={title}
        width={800}
        height={600}
        priority
        className="img-fluid card-img-top"
      />
      <Card.Body>
        <Card.Title as="h3">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </Card.Title>
        <Card.Subtitle as="h6" className={`mb-3 ${styles.subtitle}`}>
          {formatDate(date)}
        </Card.Subtitle>
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MainPost;
