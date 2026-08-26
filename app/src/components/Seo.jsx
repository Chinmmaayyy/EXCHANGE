import { useEffect } from "react";

const SITE_URL = "https://www.exchangechessacademy.com";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;
    if (description) upsertMeta("name", "description", description);

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
  }, [title, description, path, jsonLd]);

  return null;
}
