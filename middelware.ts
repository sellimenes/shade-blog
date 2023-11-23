// import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";
// import { useSession } from "next-auth/react";

// export default withAuth({
//   pages: {
//     signIn: "/login",
//   },
// });

// export async function middleware() {
//   const session = await useSession();
//   console.log(session);

//   if (session.status != "authenticated") {
//     return NextResponse.redirect("/");
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/admin/:path*", // match all pages starting with /admin
// };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/admin/:path*"], // match all pages starting with /admin
};
