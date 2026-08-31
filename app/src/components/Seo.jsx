import { useEffect } from "react";

const SITE_URL = "https://www.exchangechessacademy.com";
const DEFAULT_KEYWORDS = "chess coaching in Mumbai, home chess coach Mumbai, personal chess tutor Mumbai, FIDE rated chess coach, chess classes in Bandra, chess coaching Powai, chess tutor Andheri, chess classes Juhu, chess coach South Mumbai, chess classes Dadar, chess tutor Malad, chess classes Borivali, chess tutor Chembur, chess coaching Thane, online chess classes Mumbai, chess teacher Amar Ravindra More, Exchange Chess Academy";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, keywords, path = "/", jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;
    if (description) upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords || DEFAULT_KEYWORDS);

    const url = `${SITE_URL}${path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    if (title) upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);

    let ldScript;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-page-seo", "true");
      ldScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ldScript);
    }

    return () => {
      document.title = prevTitle;
      if (ldScript) ldScript.remove();
    };
  }, [title, description, keywords, path, jsonLd]);

  return null;
}
