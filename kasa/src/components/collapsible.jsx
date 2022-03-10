export default function Collapsible(props) {
  const id = props.id
  const summary = props.summary
  const contentType = props.contentType
  const content = props.content

  /**
   * If an array is used as content, props.contentType must be "list" and it'll map the array and populate an unordered list.
   * Otherwise, if props.contentType is "text", the content must be a string.
   */

  return contentType === "list" ? (
    <details className="collapsible">
      <summary className="collapsible__summary">
        <h3>{summary}</h3>
      </summary>
      <div className="collapsible__content">
        <ul className="collapsible__list">
          {content.map((item) => (
            <li key={`${id}-${item}`}>{item}</li>
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
