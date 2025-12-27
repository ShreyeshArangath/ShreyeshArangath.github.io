import { reads } from '../content/reads'
import './ReadsWindow.css'

export default function ReadsWindow() {
  const categories = Array.from(new Set(reads.map((read) => read.category)))

  return (
    <div className="reads-window">
      <div className="reads-intro">
        <h2>Reading List</h2>
        <p>
          Books and papers that have shaped my thinking on distributed systems, software
          engineering, and problem-solving.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="reads-category">
          <h3 className="reads-category-title">{category}</h3>
          <div className="reads-list">
            {reads
              .filter((read) => read.category === category)
              .map((read, index) => (
                <div key={index} className="read-item">
                  <div className="read-header">
                    <h4 className="read-title">{read.title}</h4>
                    <p className="read-author">{read.author}</p>
                  </div>
                  <p className="read-note">{read.note}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
