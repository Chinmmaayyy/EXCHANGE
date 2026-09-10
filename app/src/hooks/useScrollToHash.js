import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 5) {
          attempts++;
          setTimeout(tryScroll, 60);
        }
      };
      // Give DOM time to render on route transition
      setTimeout(tryScroll, 40);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, key]);
}
