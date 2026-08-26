import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { ArrowRightIcon } from "../components/Icons.jsx";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Exchange Chess Academy" description="This page could not be found." path="/404" />
      <div className="container not-found">
        <p className="eyebrow" style={{ justifyContent: "center" }}>404</p>
        <h1>Page Not Found</h1>
        <p className="lede" style={{ margin: "16px auto 28px" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link className="btn btn-navy btn-lg" to="/">
          Back to Home
          <ArrowRightIcon size={17} />
        </Link>
      </div>
    </>
  );
}
