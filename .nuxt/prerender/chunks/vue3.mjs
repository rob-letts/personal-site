import { s as serverRenderer } from './index.mjs';
import 'file:///Users/robletts/Dev/projects/personal-site/node_modules/unenv/runtime/mock/proxy.mjs';
import 'stream';

const renderToString = (...args) => {
  return serverRenderer.exports.renderToString(...args).then((result) => `<div id="__nuxt">${result}</div>`);
};

export { renderToString };
