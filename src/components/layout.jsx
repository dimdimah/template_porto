import Footer from "./footer";

const Layout = (props) => {
  const { children, className } = props;
  return (
    <div className="w-full h-screen overflow-auto bg-[#f7f7f7]">
      <div className={`px-4 py-4 mx-auto md:my-10 grow ${className}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
