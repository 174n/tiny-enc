### ```🔐 tiny-enc - Tiny text encryption for modern browsers```

[![last commit](https://img.shields.io/github/last-commit/Rundik/tiny-enc.svg)](https://github.com/Rundik/tiny-enc/commits/master)
[![bundle size](https://img.shields.io/github/size/Rundik/tiny-enc/tiny-enc.min.js)](https://github.com/Rundik/tiny-enc/blob/master/tiny-enc.min.js)
[![version](https://img.shields.io/npm/v/tiny-enc.svg)](https://www.npmjs.com/package/tiny-enc)
[![downloads](https://img.shields.io/npm/dm/tiny-enc.svg)](https://www.npmjs.com/package/tiny-enc)
[![license](https://img.shields.io/github/license/Rundik/tiny-enc)](https://github.com/Rundik/tiny-enc/blob/master/LICENSE)


Tiny text encryption library for browser. It does use [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) and [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) so it requires a secure context and a modern browser.

```html
<script type="module">
  import tinyEnc from "https://unpkg.com/tiny-enc";
  // use it as a module or just copy/paste the code

  await tinyEnc.encrypt("password", "Hello, World"); // KA+e+PmeSy0osLFTjTgrxFZAoLJ7iixh89G7TkuyHEQ=
  await tinyEnc.decrypt("password", "KA+e+PmeSy0osLFTjTgrxFZAoLJ7iixh89G7TkuyHEQ="); // Hello, World
</script>
```
