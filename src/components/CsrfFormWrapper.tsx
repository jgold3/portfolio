type CsrfFormWrapperProps = {
  children: (csrfToken: string) => React.ReactNode;
};

export const dynamic = "force-dynamic";

export default async function CsrfFormWrapper({ children }: CsrfFormWrapperProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/csrf`, { cache: "no-store" });
  const { csrfToken } = await response.json();

  return children(csrfToken);
}
