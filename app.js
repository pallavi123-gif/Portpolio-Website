const { useState } = React;

const profile = {
  name: 'Pallavi Shivaji Malekar',
  role: 'M.Tech CSE | Frontend & Web Developer',
  email: 'malekarpallavi1999@gmail.com',
  phone: '+91 12345 67890',
  location: 'India',
  summary:
    'Driven frontend developer with strong academic foundations in Computer Science, a passion for React, and experience in building polished web experiences and data-driven interfaces.',
  resumeLink: 'PALLAVI SHIVAJI MALEKAR-CV.pdf',
};

const highlights = [
  'Resume-ready portfolio designed for high-value technical interviews',
  'Front-end development with React, HTML5, CSS3, JavaScript, Bootstrap',
  'ML and data visualization experience from academic projects',
  'Interview-focused achievements, metrics, and problem-solving orientation',
];

const strengths = [
  'React component design and state-driven UI',
  'Responsive web layouts for desktop and mobile',
  'Clean code, maintainable CSS, and polished UI',
  'Agile collaboration and peer-reviewed development',
];

const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { title: 'Design', items: ['Responsive UI', 'Accessibility', 'Mobile-first'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  { title: 'Data & ML', items: ['Python', 'Pandas', 'Machine Learning', 'Visualization'] },
];

const projects = [
  {
    title: 'React Portfolio & Resume Platform',
    description: 'A premium portfolio UI built to communicate impact, skills, and interview readiness for premium software roles.',
    keywords: ['React', 'Responsive', 'Interviewer-friendly'],
  },
  {
    title: 'Hospital Management System',
    description: 'Web-based application for managing patient records, appointments, billing, and staff workflows with clear UI and secure data handling.',
    keywords: ['Hospital', 'Management', 'React', 'Database'],
  },
  {
    title: 'Ticket Booking System',
    description: 'Interactive booking portal with seat selection, real-time availability checks, and user-friendly checkout flow.',
    keywords: ['Booking', 'UX', 'JavaScript', 'Web App'],
  },
  {
    title: 'Java Backend Order Processing API',
    description: 'RESTful Java backend service for order processing with Spring Boot, transaction management, and secure business logic.',
    keywords: ['Java', 'Spring Boot', 'API', 'Backend'],
  },
  {
    title: 'Java Microservices Inventory System',
    description: 'Java microservices architecture for inventory control, event-driven updates, and scalable backend operations.',
    keywords: ['Java', 'Microservices', 'Spring Boot', 'Scalable'],
  },
  {
    title: 'Tidal Wave Prediction Prototype',
    description: 'Machine learning proof-of-concept for predicting water level changes using data-driven modeling and visualization.',
    keywords: ['ML', 'Data', 'Python', 'Analytics'],
  },
  {
    title: 'Interactive Dashboard',
    description: 'Data-centric dashboard with reusable components, analytics charts, and responsive interaction patterns.',
    keywords: ['Dashboard', 'UI', 'UX', 'Performance'],
  },
];

const education = [
  {
    degree: 'M.Tech in Computer Science and Engineering',
    institution: 'RIT India',
    details: 'Focused on advanced computing, web systems, and research-driven application development.',
  },
  {
    degree: 'B.E. in Electronics & Telecommunication Engineering',
    institution: 'Undergraduate Degree',
    details: 'Built strong programming, electronics, and systems foundations with a focus on practical problem solving.',
  },
];

function SectionTitle({ title, description }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Pill({ text }) {
  return <span className="pill">{text}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
          </div>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Frontend Engineer</p>
              <h2>{profile.name}</h2>
              <p>{profile.summary}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Projects</a>
                <a className="btn secondary" href="#contact">Contact</a>
              </div>
            </div>
            <div className="hero-card section-card">
              <h3>Top Resume Highlights</h3>
              <ul>
                {highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle
              title="About Me"
              description="A strong technical profile designed to communicate value for premium software roles."
            />
            <div className="about-grid">
              <article className="section-card">
                <h3>Professional Profile</h3>
                <p>
                  I create user-centered web applications using React and modern frontend tooling, with an emphasis on clarity, maintainability, and strong visual communication.
                </p>
              </article>
              <article className="section-card">
                <h3>Core Strengths</h3>
                <ul>
                  {strengths.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionTitle
              title="Skills"
              description="Technical skills presented with clarity for hiring managers and ATS parsing."
            />
            <div className="skills-grid">
              {skills.map(skill => (
                <article key={skill.title} className="skill-card section-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.items.join(' • ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle
              title="Projects"
              description="Impactful applications that demonstrate problem-solving, data usage, and polished UI delivery."
            />
            <div className="portfolio-grid">
              {projects.map(project => (
                <article key={project.title} className="project-card section-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="pill-group">
                    {project.keywords.map(keyword => <Pill key={keyword} text={keyword} />)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <SectionTitle title="Education" />
            <div className="education-grid">
              {education.map(item => (
                <article key={item.degree} className="education-card section-card">
                  <h3>{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="section-card">
              <SectionTitle title="Contact" description="Ready to discuss a high-impact role or collaborate on premium web products." />
              <p>
                For interviews, product evaluations, or resume review — reach out with your preferred timeline.
              </p>
            </div>
            <article className="contact-card section-card">
              <h3>Contact Details</h3>
              <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Location:</strong> {profile.location}</p>
              <a className="btn primary" href={profile.resumeLink} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 {profile.name}. Designed for premium software roles and high-impact technical interviews.</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
