import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/admin/:path*"], // match all pages starting with /admin
};

// If user.role is not admin, redirect to homepage
