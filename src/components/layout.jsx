import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-auto bg-[#f7f7f7]">
      <div className="container px-4 py-4 mx-auto grow">{children}</div>
      <Footer />
    </div>
  );
}
