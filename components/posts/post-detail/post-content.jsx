import PostHeader from './post-header';
import imagePath from '@/utils/image-path';
import Container from 'react-bootstrap/Container';
import ReactMarkdown from 'react-markdown';
import styles from '@/styles/post-content.module.css';
import components from '@/utils/components';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecentPosts from '../recent-posts';

function PostContent({ post, recentPosts }) {
  const { title, image, content } = post;

  return (
    <article>
      <PostHeader title={title} image={imagePath(image)} />
      <Container className={styles.article}>
        <Row className={styles.overlap}>
          <Col sm={7}>
            <Card className="shadow mb-3">
              <Card.Body>
                <ReactMarkdown components={components}>{content}</ReactMarkdown>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <RecentPosts recentPosts={recentPosts} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default PostContent;
