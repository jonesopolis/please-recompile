import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import SEO from './components/SEO';
import { getHero } from './contentful';
import './styles/main.css';

function HomePage() {
  const [heroData, setHeroData] = useState({
    siteTitle: "Learning AI | A Developer's Journey",
    siteDescription: 'A blog about learning AI, machine learning, and the journey of a developer exploring artificial intelligence.',
    socialImage: null,
  });

  useEffect(() => {
    getHero().then((data) => {
      setHeroData({
        siteTitle: data.siteTitle || "Learning AI | A Developer's Journey",
        siteDescription: data.siteDescription || 'A blog about learning AI, machine learning, and the journey of a developer exploring artificial intelligence.',
        socialImage: data.socialImage || null,
      });
    });
  }, []);

  return (
    <>
      <SEO
        title={heroData.siteTitle}
        description={heroData.siteDescription}
        image={heroData.socialImage}
      />
      <main>
        <div className="container">
          <Hero />
          <PostList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
