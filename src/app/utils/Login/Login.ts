import { redirect } from "next/navigation";

type Props = {
  email: string,
  password: string
}

export default async function Login({email, password}: Props) {
  try {
    const res: Response = await fetch("https://rest-api.lamdem.co.il/v1/ng/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        pwd: password,
      }),
      credentials: 'include'
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const session = await res.json();
    return session;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}