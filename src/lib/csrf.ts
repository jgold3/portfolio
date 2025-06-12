import { cookies } from "next/headers";
import Tokens from "csrf";

const csrf = new Tokens();

export function generateCsrfSecret() {
  return csrf.secretSync();
}

export function generateCsrfToken(secret: string) {
  return csrf.create(secret);
}

export async function verifyCsrfToken(token: string) {
  const cookieStore = await cookies();
  const secret = cookieStore.get("csrfSecret")?.value;
  console.log(secret);
  if (!secret) {
    console.log("no secret");
    return false;
  }
  return csrf.verify(secret, token);
}
