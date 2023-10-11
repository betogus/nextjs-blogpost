import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

export const metadata = {
  title: "Gustavo's Blog",
  description: "GCreated by Gustavo Torres",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic/>
        {children}
      </body>
    </html>
  );
}
