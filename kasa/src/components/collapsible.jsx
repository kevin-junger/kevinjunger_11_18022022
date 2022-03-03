export default function Collapsible(props) {
  const summary = props.summary
  const content = props.content

  return(
    <details className="collapsible">
      <summary className="collapsible__summary">
        <h3>{summary}</h3>
      </summary>
      <div className="collapsible__content">
        {content}
      </div>
    </details>
  )
}
