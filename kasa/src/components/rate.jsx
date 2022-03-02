import StarOn from "../assets/starOn"
import StarOff from "../assets/starOff"

export default function Rate() {
  return(
    <div className="rental__rate">
      <ul className="rental__rate--stars">
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOff />
        <StarOff />
      </ul>
    </div>
  )
}
