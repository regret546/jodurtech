export function redirectLink(url) {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}
