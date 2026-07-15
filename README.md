# Canarytokens Cloudflare Workers Proxy

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/thinkst-taariq/cloudflare-workers-proxy)

This repository contains a minimal Cloudflare Worker that proxies incoming HTTP requests to `https://canarytokens.com`.

## Local Development

Use Node.js 22 or newer. Current Wrangler releases enforce this at runtime.

Install dependencies:

```sh
npm install
```

Run the Worker locally:

```sh
npm run dev
```

Test the provided Canarytokens path through the local Worker:

```sh
curl -i --compressed http://127.0.0.1:8787/traffic/5ferzlgih1uh990kb2jnlhlhn/contact.php
```

Compare it with the upstream URL:

```sh
curl -i http://canarytokens.com/traffic/5ferzlgih1uh990kb2jnlhlhn/contact.php
```

## Deploy to Cloudflare

The deploy button points to:

```text
https://deploy.workers.cloudflare.com/?url=https://github.com/thinkst-taariq/cloudflare-workers-proxy
```

Cloudflare's Deploy to Cloudflare flow requires the source repository to be public on GitHub or GitLab. To fully test the button, open the link while logged into Cloudflare, confirm the generated Worker settings, and complete the deployment.
