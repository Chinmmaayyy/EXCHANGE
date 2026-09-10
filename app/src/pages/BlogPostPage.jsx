import { Link, useParams, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import { WhatsAppIcon, ArrowRightIcon } from "../components/Icons.jsx";
import { getBlogPost, blogPosts } from "../data/blogPosts.js";
import { waLink } from "../data/content.js";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: post.title,
    description: post.metaDescription,
    areaServed: { "@type": "Place", name: `${post.area}, Mumbai` },
    provider: { "@type": "EducationalOrganization", name: "Exchange Chess Academy" },
  };

  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} path={`/blog/${post.slug}`} jsonLd={jsonLd} />
      <PageHeader eyebrow="Chess Coaching Across Mumbai" title={post.title} crumb={post.area} />

      <section className="section">
        <div className="container">
          <article className="post-article">
            <p className="post-article__intro">{post.intro}</p>

            {post.sections.map((s) => (
              <div className="post-section" key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            {post.faqs?.length > 0 && (
              <div className="post-section">
                <h2>Frequently Asked Questions</h2>
                <div className="post-faq">
                  {post.faqs.map((f) => (
                    <div className="post-faq__item" key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="post-cta">
              <h2>Chess Coaching in {post.area}</h2>
              <p>₹1,200 / hour — home or online, tailored to your level and schedule.</p>
              <div className="post-cta__ctas">
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(`Hi, I'd like to enquire about chess coaching in ${post.area}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  Enquire on WhatsApp
                </a>
                <Link className="btn btn-outline btn-lg" to="/programs">View Coaching Programs</Link>
              </div>
            </div>

            <div className="other-enquiry-links" style={{ marginTop: 40, textAlign: "left" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--navy-900)" }}>Explore Chess Coaching in Other Mumbai Localities:</p>
              <div className="other-enquiry-buttons" style={{ justifyContent: "flex-start", marginTop: 12 }}>
                {blogPosts.filter((p) => p.slug !== post.slug).map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="other-enquiry-btn">
                    <span>{p.area}</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <Link className="post-back" to="/blog">
                <ArrowRightIcon size={16} style={{ transform: "rotate(180deg)" }} />
                Back to all Mumbai areas
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
