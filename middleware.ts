export { default } from "next-auth/middleware";

export const config = { matcher: ["/teacher", "/teacher/:path*", "/student", "/student/:path*"] };
