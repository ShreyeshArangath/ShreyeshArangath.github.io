import './ProjectsWindow.css'

interface Project {
  title: string
  problem: string
  approach: string
  impact: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'Apache Auron Native Execution Framework',
    problem:
      'Spark SQL workloads needed significant performance improvements to reduce cluster resource consumption and improve query latency.',
    approach:
      'Led production rollout strategy for native execution framework integration, including workload analysis, compatibility testing, and gradual deployment across production clusters.',
    impact: '20% cluster-wide acceleration for eligible SQL workloads',
    tech: ['Apache Spark', 'Apache Auron', 'Scala', 'Distributed Systems'],
  },
  {
    title: 'Spark Right-Sizing Optimization',
    problem:
      'Massive resource over-provisioning across Spark workloads due to lack of intelligent sizing recommendations.',
    approach:
      'Architected ML-driven system to analyze historical job metrics and provide optimal resource configurations. Built feedback loop for continuous optimization.',
    impact: '>$30MM annual hardware cost savings; presented at Data + AI Summit 2025',
    tech: ['Apache Spark', 'Machine Learning', 'Scala', 'Cost Optimization', 'Analytics'],
  },
  {
    title: 'Unified PyTorch UDF Framework',
    problem:
      'Fragmented PyTorch inference support across batch and nearline systems, leading to inconsistent performance and developer experience.',
    approach:
      'Designed unified PyTorch UDF strategy leveraging PySpark 3.5+ capabilities. Built standardized interfaces for both batch and streaming workloads.',
    impact: '~2x end-to-end runtime improvement for PyTorch inference workloads',
    tech: ['PyTorch', 'PySpark', 'Python', 'Machine Learning Infrastructure'],
  },
  {
    title: 'Spark Operator Lifecycle Management',
    problem:
      'Poor developer productivity due to inefficient Spark operator lifecycle and debugging difficulties at scale (>1MM apps/day).',
    approach:
      'Rebuilt operator lifecycle infrastructure with improved state management, better error reporting, and automated recovery mechanisms.',
    impact: '>90% developer productivity improvement across platform',
    tech: ['Apache Spark', 'Kubernetes', 'Distributed Systems', 'DevEx'],
  },
  {
    title: 'Trino Query Insights Platform',
    problem:
      'Engineers spending excessive time debugging historical Trino queries without adequate tooling for root cause analysis.',
    approach:
      'Built full-stack debugging platform integrating query history, execution plans, metrics visualization, and intelligent recommendations.',
    impact: '~75% reduction in time spent troubleshooting queries',
    tech: ['Trino', 'Rest.li', 'React', 'Flask', 'Java', 'Full-Stack'],
  },
  {
    title: 'Kubernetes Stack Trace Classification',
    problem:
      'Difficulty identifying and categorizing failure patterns across massive volume of Kubernetes pod logs.',
    approach:
      'Built automated system to extract, parse, and classify stack traces from pod logs. Implemented pattern matching and ML-based categorization.',
    impact: 'Improved incident response and failure pattern analysis',
    tech: ['Kubernetes', 'Log Processing', 'Pattern Matching', 'Observability'],
  },
]

export default function ProjectsWindow() {
  return (
    <div className="projects-window">
      <div className="projects-intro">
        <h2>Selected Work</h2>
        <p>
          High-impact projects focused on performance optimization, cost efficiency, and
          developer experience at scale.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <div className="project-section">
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="project-section">
              <h4>Approach</h4>
              <p>{project.approach}</p>
            </div>

            <div className="project-section">
              <h4>Impact</h4>
              <p className="project-impact">{project.impact}</p>
            </div>

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
