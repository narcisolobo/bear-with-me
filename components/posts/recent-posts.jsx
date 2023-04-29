import Card from 'react-bootstrap/Card';
import PostList from './post-list';

function RecentPosts({ recentPosts }) {
  return (
    <Card className="shadow mb-3">
      <Card.Body>
        <Card.Title as="h5">Recent Posts</Card.Title>
        <PostList posts={recentPosts} />
      </Card.Body>
    </Card>
  );
}

export default RecentPosts;
