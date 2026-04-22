async function loadPartial(id, path, eventName) {
  const root = document.getElementById(id);
  if (!root) return;

  try {
    // Append a runtime version token so Live Server never serves stale partial HTML.
    const versionedPath = `${path}${path.includes("?") ? "&" : "?"}v=${Date.now()}`;
    const response = await fetch(versionedPath, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
    const html = await response.text();
    root.innerHTML = html;
    if (eventName) document.dispatchEvent(new Event(eventName));
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-nav-root", "partials/nav.html", "nav:loaded");
  loadPartial("site-footer-root", "partials/footer.html", "footer:loaded");
});
