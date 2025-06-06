import type { Metadata } from "next";
import { Header, ThemeProvider } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Goldsmith",
  description: "Josh Goldsmith's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldUseDark = stored === 'dark' || (stored !== 'light' && stored !== 'system' && !stored && systemPrefersDark) || (stored === 'system' && systemPrefersDark);
                  if (shouldUseDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
