import Head from "next/head";
import { Providers } from "./providers";

export const metadata = {
  title: 'MyOwly',
  description: 'MyOwly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/139772533.js"></script>
      </Head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
