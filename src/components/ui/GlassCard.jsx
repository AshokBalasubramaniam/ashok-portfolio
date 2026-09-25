export default function GlassCard({ children, className = "", hover = true, as: Tag = "div", ...rest }) {
  return (
    <Tag className={`glass ${hover ? "glass-hover" : ""} rounded-2xl ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
