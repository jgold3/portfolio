import { useState, useEffect } from "react";

export const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch("/api/csrf", { method: "GET", credentials: "include" });
      const { csrfToken } = await response.json();
      setCsrfToken(csrfToken);
    };
    fetchCsrfToken();
  }, []);

  return csrfToken;
};
