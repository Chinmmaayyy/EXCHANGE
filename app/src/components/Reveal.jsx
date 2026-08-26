import useReveal from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const [ref, visible] = useReveal();
  const cls = `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`;
  return (
    <Tag ref={ref} className={cls} {...props}>
      {children}
    </Tag>
  );
}
