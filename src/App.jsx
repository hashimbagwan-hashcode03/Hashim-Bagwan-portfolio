// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Hashim Bagwan</p>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (apiUrl) {
      fetch(`${apiUrl}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error("Fetch error:", err));
    } else {
      console.warn("VITE_API_URL not found in env");
    }
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-4">
            {import.meta.env.VITE_APP_NAME || "Portfolio"} Posts
          </h2>
          {posts.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {posts.slice(0, 5).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          ) : (
            <p>No posts to display</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;