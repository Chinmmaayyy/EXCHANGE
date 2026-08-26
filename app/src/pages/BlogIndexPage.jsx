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
        title="Chess Coaching Across Mumbai | Exchange Chess Academy Blog"
        description="Home and online chess coaching guides for Bandra, Andheri, Juhu, Powai, Malad, Borivali, Chembur, Thane and South Mumbai, with FIDE-rated coach Amar Ravindra More."
        path="/blog"
      />
      <PageHeader
        eyebrow="Blog"
        title="Chess Coaching Across Mumbai"
        lede="Home and online chess coaching is available across Mumbai. Here's what that looks like in some of the city's most-searched neighbourhoods."
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
