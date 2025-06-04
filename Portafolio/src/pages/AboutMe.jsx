import { ArrowLeft, Download, User, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import styles from './AboutMe.module.css';
import perfilImage from '../assets/icon.jpg'

const AboutMe = () => {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles['about-me-container']}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={handleBack} className={styles['back-btn']}>
            <ArrowLeft size={20} />
            Volver
          </button>
        </div>

        <div className={styles['main-content']}>
          <div className={styles['profile-card']}>
            <div className={styles['profile-image-container']}>
              <img 
                  src={perfilImage}
                  alt="Fernando - Desarrollador Full Stack" 
                  className={styles['profile-image']}
                />
            </div>

            <h1 className={styles['profile-name']}>Fernando Ruiz</h1>
            <p className={styles['profile-title']}>Desarrollador Full Stack</p>

            <div className={styles['profile-info']}>
              <div className={styles['info-item']}>
                <Calendar size={18} />
                <span>22 años</span>
              </div>
              <div className={styles['info-item']}>
                <MapPin size={18} />
                <span>Guatemala City, GT</span>
              </div>

              <div className={styles['info-item']}>
                <Mail size={18} />
                <span>ferestrada24@icloud.com</span>
              </div>
            </div>
          </div>

          <div className={styles['bio-section']}>
            <h2 className={styles['section-title']}>
              <User size={24} />
              Sobre Mí
            </h2>

            <p className={styles['bio-text']}>
              Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. 
              Con más de 3 años de experiencia en el desarrollo web, me especializo en tecnologías modernas 
              como React, Node.js y bases de datos.
            </p>

            <p className={styles['bio-text']}>
              Mi enfoque se centra en escribir código limpio, escalable y eficiente, siempre buscando 
              las mejores prácticas y manteniéndome actualizado con las últimas tendencias tecnológicas. 
              Me gusta trabajar en equipo y contribuir a proyectos que generen un impacto positivo.
            </p>

            <h3 className={`${styles['section-title']} ${styles['skills-title']}`}>
              Tecnologías Principales
            </h3>

            <div className={styles['skills-grid']}>
              <div className={styles['skill-tag']}>React</div>
              <div className={styles['skill-tag']}>Node.js</div>
              <div className={styles['skill-tag']}>Python</div>
              <div className={styles['skill-tag']}>PostgreSQL</div>
              <div className={styles['skill-tag']}>Docker</div>
            </div>
          </div>
        </div>

        <div className={styles['experience-section']}>
          <h2 className={styles['section-title']}>
            <Calendar size={24} />
            Experiencia Profesional
          </h2>

          <div className={styles['experience-item']}>
            <h3 className={styles['experience-title']}>FrontEnd Developer</h3>
            <p className={styles['experience-company']}>Outlier</p>
            <p className={styles['experience-period']}>Junio 2025 - Presente</p>
            <p className={styles['experience-description']}>
              Responsable de evaluar y revisar código front-end para asegurar la calidad, 
              consistencia y cumplimiento con los estándares de desarrollo. 
              Implemento revisiones detalladas para mejorar el rendimiento, accesibilidad y 
              mantenibilidad del código, colaborando estrechamente con el equipo para optimizar 
              las mejores prácticas y promover la eficiencia en el ciclo de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;