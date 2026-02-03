import { Link } from 'react-router-dom';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function PostCard({ post }) {
  return (
    <Link to={`/${post.slug}`} className="post-card">
      <span className="post-date">{formatDate(post.publishDate)}</span>
      <span className="post-title">{post.title}</span>
    </Link>
  );
}
