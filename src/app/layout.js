

import { Toaster } from "react-hot-toast";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "News Bullet Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </head>

      <body suppressHydrationWarning>
           <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
