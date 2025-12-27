import './ResearchWindow.css'

interface Research {
  title: string
  venue: string
  period: string
  description: string
  highlights: string[]
}

const research: Research[] = [
  {
    title: 'User Perceptions of Defensive Techniques Against Keystroke Timing Attacks During Password Entry',
    venue: 'ACM CHI 2021 (Late Breaking Work)',
    period: '2021',
    description: 'To protect the password from visual attacks, most password entry screens use a password masking scheme that displays a series of placeholder characters (e.g., dots and asterisks) instead of the actual password. Recent research has however shown the security provided by this form of password masking to be weak against keystroke timing-analytics attacks. The underlying idea behind these attacks is that, even when a password is masked as described above, the timing between consecutive placeholder characters gives away information about the password since the relative locations of characters on the keyboard dictate how fast fingers move between them. In this paper we argue that, for security-sensitive applications, password masking mechanisms ought to hide the true intervals between password characters in order to overcome these kinds of attacks. Making adjustments to these timings however has the potential to pose usability issues given the fact that the typing would not perfectly align with the display of typed content. The paper proposes 3 different password masking schemes and undertakes a usability evaluation on them. Our early results suggest that user receptiveness to two of the schemes is not much worse than that seen with the conventional (insecure) scheme.',
    highlights: [
      'Presented as late breaking work at CHI 2021 to a team of researchers in Tokyo',
      'Co-authored peer-reviewed paper on defensive techniques against keystroke timing attacks',
      'Proposed and evaluated 3 novel password masking schemes to mitigate timing-based inference attacks',
    ],
  },
]

export default function ResearchWindow() {
  return (
    <div className="research-window">
      <div className="research-intro">
        <h2>Research</h2>
        <p>
          Exploring security and usability challenges in authentication systems,
          with a focus on side-channel attacks and defensive mechanisms.
        </p>
      </div>

      <div className="research-timeline">
        {research.map((res, index) => (
          <div key={index} className="research-item">
            <div className="research-header">
              <div>
                <h3 className="research-title">{res.title}</h3>
                <h4 className="research-venue">{res.venue}</h4>
              </div>
              <div className="research-period">{res.period}</div>
            </div>
            <p className="research-description">{res.description}</p>
            <ul className="research-highlights">
              {res.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

