import './ExperienceWindow.css'

interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    company: 'LinkedIn',
    role: 'Senior Software Engineer',
    period: 'Feb 2023 – Present',
    highlights: [
      'Led adoption and production rollout plan for native execution framework (Apache Auron), driving 20% cluster-wide acceleration for eligible SQL workloads',
      'Defined PyTorch strategy; unified PyTorch UDF support for batch and nearline processing; achieved ~2x end-to-end runtime improvement leveraging PySpark 3.5+',
      'Architected and deployed Spark Right-Sizing optimization system delivering >$30MM annual hardware cost savings',
      'Presented Spark Right-Sizing research at Data + AI Summit 2025; co-authored LinkedIn Engineering blog post',
      'Delivered Spark operator lifecycle improvements supporting >1MM applications/day, achieving >90% developer productivity improvement',
      'Built system for extracting and classifying stack traces from Kubernetes pod logs for improved observability',
      'Conducted onboarding and training sessions on Spark, SQL, Apache Beam, and Samza frameworks',
    ],
  },
  {
    company: 'LinkedIn',
    role: 'Backend Systems & Infrastructure Intern',
    period: 'May 2022 – Aug 2022',
    highlights: [
      'Revamped internal Trino insights tool with modern full-stack architecture',
      'Built comprehensive debugging platform using Rest.li, React, Flask, and Java',
      'Streamlined query troubleshooting lifecycle, achieving ~75% reduction in time spent debugging historical queries',
    ],
  },
  {
    company: 'Uber',
    role: 'Software Engineering Intern',
    period: 'Jun 2021 – Aug 2021',
    highlights: [
      'Designed and implemented server-side solution for UberEats navigation state management using Golang, Protobuf, and Thrift',
      'Built asynchronous architecture leveraging internal gRPC bi-directional streaming for real-time push updates',
      'Integrated comprehensive integration tests and load tests into CD pipelines',
    ],
  },
  {
    company: 'Apple',
    role: 'Software Engineering Intern',
    period: 'Jan 2021 – May 2021',
    highlights: [
      'Designed observability strategy for critical microservices, achieving >95% improvement in bug detection efficiency',
      'Implemented distributed tracing and monitoring infrastructure using Grafana, Jaeger, Scala, and build tooling',
      'Influenced internal tooling team standards and best practices for observability',
    ],
  },
]

export default function ExperienceWindow() {
  return (
    <div className="experience-window">
      <div className="experience-intro">
        <h2>Professional Experience</h2>
        <p>
          Building high-performance distributed systems and data infrastructure at scale.
          Focus on execution frameworks, cost optimization, and developer productivity.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-company">{exp.company}</h3>
                <h4 className="experience-role">{exp.role}</h4>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
