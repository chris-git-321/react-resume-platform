import './App.css'

const projects = [
    {
    id: 'react-platform',
    name: 'React Resume Platform',
    tagline: 'This site — containerized and deployed to AWS',
    status: 'Deployed',
    summary:
      'The site you are reading. A React application containerized and deployed to AWS, built to practise infrastructure, automation, monitoring, and incident response.',
    points: [
      'React frontend built with Vite and packaged as a Docker image in Amazon ECR.',
      'Running on ECS Fargate behind an Application Load Balancer, with tasks in private subnets.',
      'Infrastructure provisioned with Terraform so the environment can be rebuilt from an empty account.',
      'CloudWatch monitoring, plus deliberate failure scenarios documented as incident write-ups.',
    ],
    stack: ['React', 'Docker', 'ECR', 'ECS Fargate', 'Terraform', 'CloudWatch'],
  },
  {
    id: 'booking-api',
    name: 'Booking API',
    tagline: 'Containerized booking system on AWS',
    status: 'Deployed',
    summary:
      'A containerized booking API and staff dashboard built to prevent double-bookings, with infrastructure entirely defined in Terraform.',
    points: [
      'Architected and deployed a containerized Flask API on ECS Fargate behind an Application Load Balancer, with PostgreSQL on RDS in private subnets and no public access.',
      'Automated the infrastructure with Terraform, covering VPC networking, IAM roles, security groups, and Secrets Manager.',
      'Built a CI/CD pipeline with GitHub Actions authenticated via OIDC, building ARM64 Docker images and deploying to ECS on every push.',
      'Enforced double-booking protection at the database layer with a PostgreSQL unique constraint, and configured target-tracking auto-scaling for variable demand.',
    ],
    stack: ['ECS Fargate', 'RDS', 'Terraform', 'Docker', 'GitHub Actions', 'OIDC'],
  },
  {
    id: 'flashcards',
    name: 'Japanese SRS Flashcards',
    tagline: 'Serverless full-stack app on AWS',
    status: 'Deployed',
    summary:
      'A serverless spaced-repetition flashcard application for Japanese study, with user accounts, a REST API, and persistent storage.',
    points: [
      'Architected and deployed a serverless application using API Gateway, Lambda, and DynamoDB, with no servers to provision.',
      'Automated infrastructure with AWS SAM for repeatable, single-command deployments in the Tokyo region.',
      'Implemented user authentication and authorization with Amazon Cognito.',
      'Hosted the frontend through AWS Amplify with continuous deployment from GitHub.',
    ],
    stack: ['Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'AWS SAM', 'Amplify'],
  },
  {
    id: 'static-resume',
    name: 'Static Resume Site',
    tagline: 'S3 static hosting with a global CDN',
    status: 'Deployed',
    summary:
      'A responsive personal resume site delivered over HTTPS through a global content delivery network on a custom domain.',
    points: [
      'Hosted the site on Amazon S3 using static website hosting.',
      'Configured DNS and custom domain routing through Amazon Route 53.',
      'Issued and attached TLS certificates with AWS Certificate Manager.',
      'Served the site through CloudFront for HTTPS delivery and lower latency.',
    ],
    stack: ['S3', 'CloudFront', 'Route 53', 'ACM', 'HTML', 'CSS'],
  },

]

const skills = [
  {
    group: 'Cloud and infrastructure',
    items: ['AWS', 'Azure', 'VPC', 'IAM', 'Terraform', 'CloudFormation'],
  },
  {
    group: 'Containers and delivery',
    items: ['Docker', 'ECS Fargate', 'GitHub Actions', 'CI/CD', 'Git', 'Linux'],
  },
  {
    group: 'AWS services',
    items: [
      'Lambda',
      'DynamoDB',
      'API Gateway',
      'RDS',
      'S3',
      'CloudFront',
      'Route 53',
      'Cognito',
      'Amplify',
      'ACM',
      'Secrets Manager',
    ],
  },
]

const certifications = [
  { name: 'CompTIA A+', issuer: 'CompTIA', state: 'Earned' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', state: 'Earned' },
  { name: 'JLPT N3', issuer: 'Japanese Language Proficiency', state: 'Earned' },
  {
    name: 'Solutions Architect – Associate',
    issuer: 'AWS',
    state: 'In progress',
  },
]

const LINKEDIN = 'https://www.linkedin.com/in/christopherjmelvin/'
const GITHUB = 'https://github.com/chris-git-321'
const EMAIL = 'cmelvin215@gmail.com'

function App() {
  return (
    <div className="app">
      <aside className="rail">
        <div className="rail-inner">
          <div className="identity">
            <p className="name">Chris Melvin</p>
            <p className="role">Cloud engineer</p>
            <p className="place">
              Tokyo, Japan <span className="region">ap-northeast-1</span>
            </p>
          </div>

          <nav className="rail-nav" aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#credentials">Credentials</a>
            <a href="#experience">Experience</a>
          </nav>

          <div className="rail-links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>
      </aside>

      <main className="content">
        <section className="intro">
          <h1>
            I build and deploy infrastructure on AWS, fix it, and recreate real-world scenarios.
          </h1>

          <p className="lede">
            Four projects, three of which are deployed with infrastructure as code rather than
            clicked together in the console. Certified in CompTIA A+ and Azure
            Fundamentals, working toward the AWS Solutions Architect Associate.
          </p>

          <ul className="index">
            {projects.map((project) => (
              <li key={project.id}>
                <a href={`#${project.id}`}>
                  <span className="index-name">{project.name}</span>
                  <span className="index-stack">
                    {project.stack.slice(0, 3).join(', ')}
                  </span>
                  <span
                    className={
                      project.status === 'Deployed'
                        ? 'status status-live'
                        : 'status status-build'
                    }
                  >
                    {project.status}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="projects">
            {projects.map((project) => (
              <article className="project" id={project.id} key={project.id}>
                <header className="project-head">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>
                  <span
                    className={
                      project.status === 'Deployed'
                        ? 'status status-live'
                        : 'status status-build'
                    }
                  >
                    {project.status}
                  </span>
                </header>

                <p className="project-summary">{project.summary}</p>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="tags">
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>

          <div className="prose">
            <p>
              I came to cloud engineering from a business and logistics
              background, and I have spent the last several years in Tokyo
              teaching professional English. The habit that carried over is
              explaining complicated things clearly to people who need to act on
              them, which turns out to be most of what infrastructure work is.
            </p>

            <p>
              I learn by building things that would survive contact with a real
              environment: private subnets, least-privilege IAM, pipelines that
              authenticate without long-lived keys. Then as things do, when they break I try to troubleshoot them.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>

          <div className="skills">
            {skills.map((category) => (
              <div className="skill-group" key={category.group}>
                <h3>{category.group}</h3>
                <ul className="tags">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="credentials" className="section">
          <h2>Credentials</h2>

          <ul className="certs">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
                <span
                  className={
                    cert.state === 'Earned'
                      ? 'status status-live'
                      : 'status status-build'
                  }
                >
                  {cert.state}
                </span>
              </li>
            ))}
          </ul>

          <div className="education">
            <div className="school">
              <h3>University of Massachusetts Dartmouth</h3>
              <p>Bachelor of Business Administration, 2017–2020</p>
            </div>

            <div className="school">
              <h3>Sophia University</h3>
              <p>Exchange programme, Faculty of Liberal Arts, 2018–2019</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>

          <article className="job">
            <header className="job-head">
              <div>
                <h3>English Professional Instructor</h3>
                <p className="job-org">Anchor Partner Co. Ltd., Tokyo</p>
              </div>
              <span className="job-dates">2024 – present</span>
            </header>

            <ul className="project-points">
              <li>
                Led client onboarding consultations, contributing to a 10%
                increase in new accounts within one year.
              </li>
              <li>
                Taught in an 80/20 English-to-Japanese format, building language
                efficiency and cultural flexibility for professional clients.
              </li>
            </ul>
          </article>
        </section>

        <section id="contact" className="section contact">
          <h2>Get in touch</h2>

          <p className="prose">
            I am looking for cloud infrastructure, automation, and IT operations
            roles in Tokyo. The fastest way to reach me is email.
          </p>

          <div className="contact-links">
            <a className="button primary" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <a
              className="button"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="button" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <footer className="foot">
          <p>Built with React and Vite. Deployed on AWS.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
