export default function ({ videoSrc, videoType }) {
  return (
    <div className="mediaWrapper">
      <video controls>
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
