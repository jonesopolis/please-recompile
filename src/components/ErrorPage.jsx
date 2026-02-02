import { Link } from 'react-router-dom';
import Robot from './Robot';
import SEO from './SEO';
import Footer from './Footer';

export default function ErrorPage({
  code = '404',
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist."
}) {
  return (
    <>
      <SEO
        title={`${code} - ${title} | Please Recompile`}
        description={message}
      />
      <main className="error-page">
        <div className="container">
          <div className="error-content">
            <div className="error-background">
              <span className="error-oops">oops</span>
            </div>
            <div className="error-robot">
              <Robot emotion="sad" size={180} />
            </div>
            <div className="error-text">
              <span className="error-code">{code}</span>
              <h1 className="error-title">{title}</h1>
              <p className="error-message" dangerouslySetInnerHTML={{ __html: message }} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
