import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// here is show problen in vercel deployment
export const { POST, GET } = toNextJsHandler(auth);