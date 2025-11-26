import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Scrolls to top on pathname change
 * - Sets history.scrollRestoration to 'manual' (when available) to avoid
 *   the browser restoring a saved scroll position for SPA navigations.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure we go to the top on navigation. Use 'auto' so jump feels immediate.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
