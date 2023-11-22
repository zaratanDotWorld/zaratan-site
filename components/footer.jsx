import Link from 'next/link';

export default function () {
  return (
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } Kronosapiens Labs
      <br></br>
      <Link href="/privacy.html" style={{ fontSize: "14px" }}>Privacy Policy</Link>
      &nbsp;·&nbsp;
      <Link href="mailto:support@zaratan.world" style={{ fontSize: "14px" }}>Contact Support</Link>
    </div>
  )
}
