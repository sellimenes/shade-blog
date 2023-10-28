import Sidebar from "./_components/Sidebar";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="w-full mx-8 my-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
