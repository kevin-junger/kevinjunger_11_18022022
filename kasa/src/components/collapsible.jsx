export default function Collapsible(props) {
  const id = props.id
  const summary = props.summary
  const contentType = props.contentType
  const content = props.content

  return contentType === "list" ? (
    <details className="collapsible">
      <summary className="collapsible__summary">
        <h3>{summary}</h3>
      </summary>
      <div className="collapsible__content">
        <ul className="collapsible__list">
          {content.map((equipment) => (
            <li key={`${id}-${equipment}`}>{equipment}</li>
          ))}
        </ul>
      </div>
    </details>
  ) : (
    <details className="collapsible">
      <summary className="collapsible__summary">
        <h3>{summary}</h3>
      </summary>
      <div className="collapsible__content">
        <p>{content}</p>
      </div>
    </details>
  )
}
