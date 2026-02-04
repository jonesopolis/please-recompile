import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../contentful';
import SEO from './SEO';
import Footer from './Footer';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

function getMonthYear(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`.toLowerCase();
}

// Layout 1: Classic timeline - dot on left, content right
function Layout1({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">1. classic timeline</h3>
      <div className="iterate-posts timeline-1">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-1${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="line"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
              <span className="date">{formatDate(post.publishDate)}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 2: Timeline with date on left
function Layout2({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">2. date left, content right</h3>
      <div className="iterate-posts timeline-2">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-2${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="date">{formatDate(post.publishDate)}</span>
            <span className="line"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 3: Timeline with month breaks
function Layout3({ posts }) {
  let lastMonth = null;

  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">3. with month breaks</h3>
      <div className="iterate-posts timeline-3">
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
      </div>
    </div>
  );
}

// Layout 4: Alternating sides
function Layout4({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">4. alternating sides</h3>
      <div className="iterate-posts timeline-4">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-4${index % 2 === 1 ? ' right' : ' left'}${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
            </span>
            <span className="line"></span>
            <span className="date">{formatDate(post.publishDate)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 5: Minimal line, large hook
function Layout5({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">5. minimal, large hook</h3>
      <div className="iterate-posts timeline-5">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-5${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="line"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="meta">
                <span className="title">{post.title}</span>
                <span className="date">{formatDate(post.publishDate)}</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 6: Bracketed timeline
function Layout6({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">6. bracketed entries</h3>
      <div className="iterate-posts timeline-6">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-6${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="bracket">[</span>
            <span className="line"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
            </span>
            <span className="bracket">]</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 7: Timeline with connecting arrows
function Layout7({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">7. arrow connectors</h3>
      <div className="iterate-posts timeline-7">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-7${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="arrow-line"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 8: Indented hierarchy
function Layout8({ posts }) {
  let lastMonth = null;

  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">8. indented hierarchy</h3>
      <div className="iterate-posts timeline-8">
        {posts.map((post) => {
          const monthYear = getMonthYear(post.publishDate);
          const showMonthBreak = monthYear !== lastMonth;
          lastMonth = monthYear;

          return (
            <div key={post.slug} className="timeline-item">
              {showMonthBreak && (
                <div className="month-header">{monthYear}</div>
              )}
              <Link to={`/${post.slug}`} className="timeline-post-8">
                <span className="indent-line"></span>
                <span className="content">
                  <span className="hook">{post.hook || 'what can we learn?'}</span>
                  <span className="title">{post.title}</span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Layout 9: Double line timeline
function Layout9({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">9. double rail</h3>
      <div className="iterate-posts timeline-9">
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/${post.slug}`} className={`timeline-post-9${index === posts.length - 1 ? ' last' : ''}`}>
            <span className="rails"></span>
            <span className="content">
              <span className="hook">{post.hook || 'what can we learn?'}</span>
              <span className="title">{post.title}</span>
              <span className="date">{formatDate(post.publishDate)}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function IteratePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <SEO title="Layout Iterations | Please Recompile" />
        <main className="iterate-page">
          <div className="container">
            <p style={{ padding: '60px 0', textAlign: 'center' }}>loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Layout Iterations | Please Recompile"
        description="Exploring vertical timeline layouts for blog posts"
      />
      <main className="iterate-page">
        <div className="container">
          <div className="iterate-header">
            <h1>vertical timeline iterations</h1>
            <p>9 variations on the vertical timeline theme</p>
          </div>

          <Layout1 posts={posts} />
          <Layout2 posts={posts} />
          <Layout3 posts={posts} />
          <Layout4 posts={posts} />
          <Layout5 posts={posts} />
          <Layout6 posts={posts} />
          <Layout7 posts={posts} />
          <Layout8 posts={posts} />
          <Layout9 posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
