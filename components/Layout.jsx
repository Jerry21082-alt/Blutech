export default function Layout({ children }) {
  return (
    <section
      className="w-full mt-[62.5px] md:mt-[89px] flex-1"
      style={{
        paddingLeft: "calc(8px + 1.5625vw)",
        paddingRight: "calc(8px + 1.5625vw)",
      }}
    >
      {children}
    </section>
  );
}
