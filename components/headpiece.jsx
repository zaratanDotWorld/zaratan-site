export default function ({ mainText, subText, icon, scale }) {
  const big = `${3 * scale}px`;
  const small = `${scale}px`;

  return (
    <div className="center">
    <h1 className="spaced logo" style={{ fontSize: big }}>{mainText}</h1>
    <p className="spaced rainbow-text-animated" style={{ fontSize: small }}>{subText}</p>
    <h1 style={{ fontSize: big }}>{icon}</h1>
  </div>
  )
}
