import type { Metadata } from "next";
import { Header, ThemeProvider, TooltipProvider } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Goldsmith",
  description: "Josh Goldsmith's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
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
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const useDark = stored === 'dark' || (!stored && systemDark) || (stored === 'system' && systemDark);
                  if (useDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="mx-auto bg-background antialiased">
        <ThemeProvider>
          <Header />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
