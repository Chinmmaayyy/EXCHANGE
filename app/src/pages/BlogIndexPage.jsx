import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import { ArrowRightIcon } from "../components/Icons.jsx";
import { blogPosts } from "../data/blogPosts.js";

export default function BlogIndexPage() {
  return (
    <>
      <Seo
        title="Chess Coaching Across Mumbai | Grant Road, Western, Central & Harbour Line"
        description="Home and 1-to-1 online chess coaching guides for Grant Road, South Mumbai, Bandra, Andheri, Juhu, Powai, Borivali, Dombivli to CST, Harbour Line, and Western Line with FIDE-rated coach Amar Ravindra More."
        path="/blog"
      />
      <PageHeader
        eyebrow="Blog & Locality Guides"
        title="Chess Coaching Across Mumbai"
        lede="Home and 1-to-1 online chess coaching is available across all major Mumbai train lines — including Grant Road, South Mumbai, Western Line, Central Line (Dombivli to CST), and Harbour Line."
        crumb="Blog"
      />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Reveal as="article" className="blog-card" key={post.slug}>
                <p className="blog-card__tag">{post.area}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="blog-card__link" to={`/blog/${post.slug}`}>
                  Read more
                  <ArrowRightIcon size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
