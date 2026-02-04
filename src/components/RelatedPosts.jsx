import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRelatedPosts, getSiteSettings } from '../contentful';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function RelatedPosts({ currentSlug, tags }) {
  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState({ relatedPostsTitle: 'Related' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  useEffect(() => {
    if (tags && tags.length > 0) {
      getRelatedPosts(currentSlug, tags, 2)
        .then(setPosts)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [currentSlug, tags]);

  if (loading) {
    return (
      <section className="related-posts">
        <h2>{settings.relatedPostsTitle}</h2>
        <div className="related-posts-grid">
          <div className="related-post-card skeleton">
            <div className="skeleton-line" style={{ width: '60px' }}></div>
            <div className="skeleton-line" style={{ width: '80%' }}></div>
          </div>
          <div className="related-post-card skeleton">
            <div className="skeleton-line" style={{ width: '60px' }}></div>
            <div className="skeleton-line" style={{ width: '80%' }}></div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <h2>{settings.relatedPostsTitle}</h2>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="related-post-card">
            <span className="date">{formatDate(post.publishDate)}</span>
            <span className="hook">{post.hook}</span>
            <span className="title">{post.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
