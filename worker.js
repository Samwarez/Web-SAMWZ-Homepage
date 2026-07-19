export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "grounding.samwz.com") {
      if (url.pathname === "/" || url.pathname === "") {
        url.pathname = "/grounding.html";
      } else if (url.pathname === "/privacy" || url.pathname === "/privacy/") {
        url.pathname = "/grounding-privacy.html";
      }
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
