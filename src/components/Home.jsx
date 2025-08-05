import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My React App</h1>
          <p className="hero-subtitle">
            Building amazing experiences with React ⚛️
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </header>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Modern</h3>
              <p>Built with the latest React technologies for optimal performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative</h3>
              <p>Cutting-edge solutions to solve real-world problems</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Your data is safe with our advanced security measures</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 My React App. Built with ❤️ using React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default Home