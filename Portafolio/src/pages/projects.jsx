import React, { useState } from 'react';
import {
  ArrowLeft, ExternalLink, Github, Eye, Code, Briefcase,
  Image, List, Edit3, Calculator
} from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 'calculadora',
      name: 'Calculadora',
      description: 'Calculadora básica con operaciones matemáticas fundamentales. Interfaz limpia y funcional desarrollada con JavaScript vanilla.',
      technologies: ['HTML', 'CSS', 'JavaScript', `React`],
      url: 'https://23065.dernait.my/portafolio/calculadora/',
      githubUrl: 'https://github.com/JosFer720/calculadora-web',
      icon: Calculator,
      status: 'Completado'
    },
    {
      id: 'lab3',
      name: 'Lab3',
      description: 'Historia interactiva desarrollada exclusivamente con HTML, sin uso de CSS ni JavaScript.',
      technologies: ['HTML'],
      url: 'https://23065.dernait.my/portafolio/lab3/',
      githubUrl: 'https://github.com/JosFer720/lab3html',
      icon: Code,
      status: 'Completado'
    },
    {
      id: 'lab4css',
      name: 'Lab4 CSS',
      description: 'Proyecto de reproducción visual utilizando únicamente HTML y CSS, sin ningún uso de JavaScript.',
      technologies: ['HTML', 'CSS puro', 'Selectores avanzados'],
      url: 'https://23065.dernait.my/portafolio/lab4css/lab4css.html',
      githubUrl: 'https://github.com/JosFer720/lab4css',
      icon: Image,
      status: 'Completado'
    },
    {
      id: 'lab6react',
      name: 'Lab6 React',
      description: 'Juego de memoria desarrollado en React sin utilizar herramientas de scaffolding como Create React App o Vite.',
      technologies: ['React', 'JavaScript', 'CSS Grid', 'Animaciones'],
      url: 'https://23065.dernait.my/portafolio/lab6react/',
      githubUrl: 'https://github.com/JosFer720/lab6react',
      icon: List,
      status: 'Completado'
    }
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    demoUrl: '',
    githubUrl: ''
  });

  const handleBack = () => {
    window.history.back();
  };

  const handleEditProject = (project) => {
    setEditingProject(project.id);
    setEditForm({
      name: project.name,
      description: project.description,
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl
    });
  };

  const handleSaveProject = () => {
    setProjects(projects.map(project =>
      project.id === editingProject
        ? { ...project, ...editForm }
        : project
    ));
    setEditingProject(null);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setEditForm({ name: '', description: '', url: '', githubUrl: '' });
  };

  return (
    <div className={styles['projects-container']}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={handleBack} className={styles['back-btn']}>
            <ArrowLeft size={20} />
            Volver al Portfolio
          </button>

          <h1 className={styles['page-title']}>
            <Briefcase size={40} />
            Mis Proyectos
          </h1>
        </div>

        <div className={styles['projects-grid']}>
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className={styles['project-card']}>
                <div className={styles['project-image']}>
                  <button
                    className={styles['edit-btn']}
                    onClick={() => handleEditProject(project)}
                    title="Editar proyecto"
                  >
                    <Edit3 size={16} />
                  </button>

                  <IconComponent size={60} />

                  <div className={`${styles['project-status']} ${project.status === 'Completado'
                    ? styles['status-completed']
                    : styles['status-development']
                    }`}>
                    {project.status}
                  </div>
                </div>

                <div className={styles['project-content']}>
                  <h3 className={styles['project-title']}>{project.name}</h3>
                  <p className={styles['project-description']}>{project.description}</p>

                  <div className={styles['tech-stack']}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles['tech-tag']}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles['project-actions']}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['action-btn']} ${styles['btn-primary']}`}
                    >
                      <Eye size={18} />
                      Ver Proyecto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles['action-btn']} ${styles['btn-secondary']}`}
                    >
                      <Github size={18} />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {editingProject && (
        <div className={styles['modal-overlay']}>
          <div className={styles.modal}>
            <h2 className={styles['modal-title']}>Editar Proyecto</h2>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>Nombre del Proyecto</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>Descripción</label>
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className={styles['form-textarea']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>URL del Proyecto</label>
              <input
                type="url"
                value={editForm.demoUrl}
                onChange={(e) => setEditForm({ ...editForm, demoUrl: e.target.value })}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>URL de GitHub</label>
              <input
                type="url"
                value={editForm.githubUrl}
                onChange={(e) => setEditForm({ ...editForm, githubUrl: e.target.value })}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['modal-actions']}>
              <button onClick={handleCancelEdit} className={styles['btn-cancel']}>
                Cancelar
              </button>
              <button onClick={handleSaveProject} className={styles['btn-save']}>
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
