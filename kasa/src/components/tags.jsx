export default function Tags(props) {
  const id = props.id
  const tags = props.tags

  return(
    <div className="tags">
      <ul className="tags__list">
        {tags.map((tag) => (
          <li key={`${id}-${tag}`} className="tags__tag">{tag}</li>
        ))}
      </ul>
    </div>
  )
}
