export default function ({ mainText, subText, icon, color }) {
  return (
    <div className="center">
    <h1 className={`spaced logo-${color}`} style={{ fontSize: "4em" }}>{mainText}</h1>
    <p className="spaced rainbow-text-animated" style={{ fontSize: "1.5em" }}>{subText}</p>
    <h1 style={{ fontSize: "4em" }}>{icon}</h1>
  </div>
  )
}
