export default {
  async fetch(request) {
    const upstreamUrl = new URL(request.url);
    upstreamUrl.protocol = "https:";
    upstreamUrl.hostname = "canarytokens.com";
    upstreamUrl.port = "";

    const upstreamHeaders = new Headers(request.headers);
    upstreamHeaders.set("host", "canarytokens.com");

    const upstreamRequest = new Request(upstreamUrl.toString(), {
      method: request.method,
      headers: upstreamHeaders,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    });

    return fetch(upstreamRequest);
  },
};
