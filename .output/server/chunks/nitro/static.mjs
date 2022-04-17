import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/RobLettsCV.pdf": {
    "type": "application/pdf",
    "etag": "\"1bd92-dUfCRg2PhzxEv7ovS0Xu8+zvCR8\"",
    "mtime": "2022-04-17T06:51:08.189Z",
    "path": "../public/RobLettsCV.pdf"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1dc2-hAtxKFhDOXuc7iuc+YXIeXVvRFo\"",
    "mtime": "2022-04-17T06:51:09.134Z",
    "path": "../public/index.html"
  },
  "/logo-coffee.png": {
    "type": "image/png",
    "etag": "\"ce28-HNupk2kpKyU1F2VYkFxz6h4J9GQ\"",
    "mtime": "2022-04-17T06:51:08.189Z",
    "path": "../public/logo-coffee.png"
  },
  "/logo-wave.png": {
    "type": "image/png",
    "etag": "\"10d79-+gzeNe5C61DHls5WQsETNA809zM\"",
    "mtime": "2022-04-17T06:51:08.189Z",
    "path": "../public/logo-wave.png"
  },
  "/_nuxt/RobLettsCV.pdf": {
    "type": "application/pdf",
    "etag": "\"1bd92-dUfCRg2PhzxEv7ovS0Xu8+zvCR8\"",
    "mtime": "2022-04-17T06:51:08.188Z",
    "path": "../public/_nuxt/RobLettsCV.pdf"
  },
  "/_nuxt/entry-41fd823c.mjs": {
    "type": "application/javascript",
    "etag": "\"1a2d0-xKsSlBgynSR/ZypRnHl4i9v0GGE\"",
    "mtime": "2022-04-17T06:51:08.188Z",
    "path": "../public/_nuxt/entry-41fd823c.mjs"
  },
  "/_nuxt/entry.22dacd1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f40-hqaRfl/MMEMNdaWZjQ87K3IzC1A\"",
    "mtime": "2022-04-17T06:51:08.187Z",
    "path": "../public/_nuxt/entry.22dacd1b.css"
  },
  "/_nuxt/logo-coffee.png": {
    "type": "image/png",
    "etag": "\"ce28-HNupk2kpKyU1F2VYkFxz6h4J9GQ\"",
    "mtime": "2022-04-17T06:51:08.187Z",
    "path": "../public/_nuxt/logo-coffee.png"
  },
  "/_nuxt/logo-wave.png": {
    "type": "image/png",
    "etag": "\"10d79-+gzeNe5C61DHls5WQsETNA809zM\"",
    "mtime": "2022-04-17T06:51:08.187Z",
    "path": "../public/_nuxt/logo-wave.png"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"cd-Q3t/EHwUhQRF/j+lDATXHeJPapc\"",
    "mtime": "2022-04-17T06:51:08.186Z",
    "path": "../public/_nuxt/manifest.json"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };
