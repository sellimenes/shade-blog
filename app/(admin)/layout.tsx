import Sidebar from "./_components/Sidebar";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReduxProvider from "@/store/ReduxProvider";
import AuthContext from "@/lib/AuthContext";

export const metadata = {
  title: "Shade Blog",
  description: "Coded by Selim Enes",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <AuthContext>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Sidebar />
              <main className="w-full mx-8 my-10">{children}</main>
            </ThemeProvider>
          </ReduxProvider>
        </AuthContext>
      </body>
    </html>
  );
}
