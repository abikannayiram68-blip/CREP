import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DscPQEZk.js";
function ScrollReveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: `reveal ${className}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
export {
  ScrollReveal as S
};
