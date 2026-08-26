import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, lede, crumb }) {
  return (
    <section className="page-header">
      <div className="container page-header__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede" style={{ marginTop: 14 }}>{lede}</p>}
      </div>
    </section>
  );
}
