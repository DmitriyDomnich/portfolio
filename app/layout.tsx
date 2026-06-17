import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dmytro D. — Full-Stack Developer",
  description:
    "Full-Stack Web Developer with 5 years of experience building data-heavy dashboards, government platforms, AI-assisted tools, and real-time web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
