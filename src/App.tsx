import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Participations from './components/Participations';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Chatbot from './components/Chatbot';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

/* ── Home page ────────────────────────────────────────── */
function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <div className="space-y-28 pb-32">
        <Projects />
        <Participations />
        <Certifications />
      </div>
    </main>
  );
}

/* ── Root App ─────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 font-sans selection:bg-magenta-neon/30 transition-colors duration-500">
        <AnimatedBackground />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>

        <Footer />

        {/* Global floating AI chatbot */}
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
