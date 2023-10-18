import Script from 'next/script'

export default function ({ analyticsId }) {
  return (
    <span>
      {/* Google tag (gtag.js) */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${analyticsId}');
        `}
      </Script>
    </span>
  )
}
