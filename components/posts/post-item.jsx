import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '@/styles/post-item.module.css';
import formatDate from '@/utils/format-date';
import imagePath from '@/utils/image-path';
import Link from 'next/link';

function PostItem({ post }) {
  const { title, image, date, excerpt, slug } = post;

  return (
    <Card bg="light" className={`shadow ${styles['post-item']}`}>
      <Row className="g-0">
        <Col sm={4}>
          <Image
            src={imagePath(image)}
            alt={title}
            width={400}
            height={300}
            className={`img-fluid rounded-start ${styles['card-img']}`}
          />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Card.Title as="h5" className={styles.title}>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </Card.Title>
            <Card.Subtitle as="h6" className={`mb-3 ${styles.subtitle}`}>
              {formatDate(date)}
            </Card.Subtitle>
            <Card.Text className={`${styles.ellipsis} ${styles.body}`}>
              <small>{excerpt}</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default PostItem;
