import './ProjectsWindow.css'

interface Project {
  title: string
  period: string
  description: string
  tech: string[]
  highlights?: string[]
}

const projects: Project[] = [
{
    title: 'Unter',
    period: 'Senior Capstone Project',
    description:
    'Unter is a rideshare mobile application hoping to improve upon the current TTU rideshare solution. We have key differences between TapRide/Raider Ride. As compared to TapRide we hope to improve in areas such as real-time notifications when a driver arrives, better communication between Drivers and Passengers, sharing precise locations, and improving the campus map. The goal of this application is to replace TapRide and have an application that is easily maintainable by students / Texas Tech.',
    tech: ['iOS', 'Swift', 'Firebase', 'Cocoapods'],
    highlights: [
      'Developed a ride-sharing service app that aimed to replace Texas Tech\'s Safe Ride application. The application was pretty outdated and received constant complaints from the users.',
    ],
  },
  {
    title: 'DevNet (HackHarvard)',
    period: 'Oct 2019 – Dec 2019',
    description:
      'Designed and developed an iOS Application that helps local developers connect with each other.',
    tech: ['iOS', 'Firebase Firestore', 'Firebase Auth', 'Google Cloud Platform'],
  },

  {
    title: 'ACM Note Sharing Application (SWE - II)',
    period: 'Aug 2019 – May 2020',
    description:
      'Documented and engineered well-tuned code in an Agile environment to design the backend of a note-sharing application by integrating cloud-native features leveraging Microsoft Azure technologies.',
    tech: ['ASP.NET Core', 'C#', 'CosmosDB', 'Azure Dev Spaces', 'Kubernetes', 'Docker', 'Microsoft Azure'],
    highlights: [
      'Architected re-usable plug-in interfaces that allow external systems to be integrated into a core platform',
      'Optimized the microservices by remodeling the database schema to ensure efficient data lookup',
    ],
  },
  {
    title: 'HackWesTX Website',
    period: 'Jun 2019 – Aug 2019',
    description:
      'Developed the official website for HackWesTX II using React, Express, Node, and Google Cloud Platform. Implemented several technologies to improve responsiveness, user experience, and scalability.',
    tech: ['React', 'Express', 'Node.js', 'Google Cloud Platform'],
    highlights: [
      'Collaborated with team members to test the UX/UI responsiveness',
      'Conducted biweekly meetings discussing several aspects of the website, sponsorship prospectus, and budget',
    ],
  },
    {
    title: 'Rezaspot',
    period: 'Mar 2019 – May 2020',
    description:
      'Designed an iOS app to make parking permits more accessible across campuses by incorporating the Google Maps SDK and Firebase.',
    tech: ['iOS', 'Swift', 'Google Maps SDK', 'Firebase'],
    highlights: [
      'Developed an algorithm to detect whether or not a car has entered a parking area with 85% accuracy',
      'Awarded $3000 to travel across the country and conduct customer discovery interviews',
    ],
  },
  {
    title: 'Health and I (HackDFW)',
    period: 'Jan 2019 – Present',
    description:
      'Developed an iOS and Android application to help connect patients, doctors and insurance agencies on the same platform.',
    tech: ['iOS', 'Android', 'Firebase', 'Cocoapods'],
    highlights: [
      'Integrated methods of Encryption in order to protect the patients information',
      'Won the HackDFW challenge hosted by Children\'s Health',
    ],
  },
  ]

export default function ProjectsWindow() {
  return (
    <div className="projects-window">
      <div className="projects-intro">
        <h2>Projects</h2>
        <p>
          A collection of projects spanning web development, mobile applications, and cloud infrastructure.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-period">{project.period}</div>
            </div>

            <div className="project-section">
              <p>{project.description}</p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="project-tech">
              {project.tech.map((tech, tIndex) => (
                <span key={tIndex} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
