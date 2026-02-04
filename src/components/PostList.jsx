import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, getSiteSettings } from '../contentful';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

function getMonthYear(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`.toLowerCase();
}

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState({ loadingText: 'Loading posts...' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPosts(), getSiteSettings()])
      .then(([postsData, settingsData]) => {
        setPosts(postsData);
        setSettings(settingsData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="posts">
        <p>{settings.loadingText}</p>
      </section>
    );
  }

  let lastMonth = null;

  return (
    <section className="posts timeline-3">
      {posts.map((post, index) => {
        const monthYear = getMonthYear(post.publishDate);
        const showMonthBreak = monthYear !== lastMonth;
        lastMonth = monthYear;
        const isLast = index === posts.length - 1;

        return (
          <div key={post.slug} className="timeline-item">
            {showMonthBreak && (
              <div className="month-break">
                <span className="month-label">{monthYear}</span>
              </div>
            )}
            <Link to={`/${post.slug}`} className={`timeline-post-3${isLast ? ' last' : ''}`}>
              <span className="date">{formatDate(post.publishDate)}</span>
              <span className="line"></span>
              <span className="content">
                <span className="hook">{post.hook || 'what can we learn?'}</span>
                <span className="title">{post.title}</span>
              </span>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
