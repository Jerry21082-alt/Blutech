import Layout from "@/components/Layout";
import "./globals.css";
import Nav from "@/components/Nav";
import UseContext from "@/context/UseContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UseContext>
        <body className="flex flex-col min-h-full">
          <Nav />
          <Layout>{children}</Layout>
        </body>
      </UseContext>
    </html>
  );
}
