import React, { useState, useEffect } from 'react';
import { User, Briefcase, Code, Palette, Zap, Globe, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Portfolio.module.css';
import perfilImage from '../assets/icon.jpg'

const Portfolio = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Frontend Development', icon: Palette, color: '#667eea' },
    { name: 'Backend Development', icon: Code, color: '#764ba2' },
    { name: 'Full Stack Solutions', icon: Globe, color: '#6366f1' },
    { name: 'UI/UX Design', icon: Zap, color: '#8b5cf6' }
  ];

  const stats = [
    { number: '5+', label: 'Proyectos Completados' },
    { number: '3+', label: 'Años de Experiencia' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigateToAbout = () => {
    window.location.href = '/about';
  };

  const navigateToProjects = () => {
    window.location.href = '/projects';
  };

  return (
    <div className={styles['portfolio-container']}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-grid']}>
          <div className={`${styles['hero-content']} ${isVisible ? styles['visible'] : ''}`}>
            <p className={styles['greeting']}>¡Hola! Soy Fernando</p>
            <h1 className={styles['hero-title']}>
              Desarrollador
              <br />
              <span className={styles['skill-highlight']} style={{ color: skills[currentSkill]?.color }}>
                {skills[currentSkill]?.name || 'Full Stack'}
              </span>
            </h1>

            <p className={styles['hero-description']}>
              Transformo ideas en experiencias digitales excepcionales. Especializado en crear 
              soluciones web modernas, escalables y centradas en el usuario que impulsan el 
              crecimiento de tu negocio.
            </p>

            <div className={styles['cta-buttons']}>
              <button onClick={navigateToProjects} className={styles['btn-primary']}>
                <Briefcase size={20} />
                Ver Mis Proyectos
                <ArrowRight size={18} />
              </button>
              <button onClick={navigateToAbout} className={styles['btn-secondary']}>
                <User size={20} />
                Conoce Más de Mí
              </button>
            </div>

            <div className={styles['social-links']}>
              <span className={styles['social-text']}>Sígueme:</span>
              <a href="https://github.com/JosFer720" className={styles['social-link']}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/fernando-ruiz-6a0109262/" className={styles['social-link']}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:ferestrada24@icloud.com" className={styles['social-link']}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={`${styles['hero-visual']} ${isVisible ? styles['visible'] : ''}`}>
            <div className={styles['profile-circle']}>
              <img 
                src={perfilImage}
                alt="Fernando - Desarrollador Full Stack" 
                className={styles['profile-image']}
              />

              <div className={styles['floating-elements']}>
                <div className={styles['floating-icon']}>
                  <Code size={24} />
                </div>
                <div className={styles['floating-icon']}>
                  <Palette size={24} />
                </div>
                <div className={styles['floating-icon']}>
                  <Zap size={24} />
                </div>
              </div>
            </div>

            <div className={styles['stats-grid']}>
              {stats.map((stat, index) => (
                <div key={index} className={styles['stat-card']}>
                  <div className={styles['stat-number']}>{stat.number}</div>
                  <div className={styles['stat-label']}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles['scroll-indicator']}>
          <span>Explora mi trabajo</span>
          <ArrowRight className={styles['scroll-arrow']} size={20} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;