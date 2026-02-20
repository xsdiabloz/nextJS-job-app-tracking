import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLICK_BETTER_AUTH_UR!,
});

export const { signIn, signUp, signOut, useSession } = authClient;
