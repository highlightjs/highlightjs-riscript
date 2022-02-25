# highlight.js grammar for [riscript](https://rednoise.org/rita/reference/riscript.html)

## Simple usage
Load this mode (you can find it under `dist`) and the css file (you can find it under `css`) after loading highlight.js
For now I am still trying to get auto-detect to work, so you will need to add css class `riscript` to the `code` tag.
A simple example is below
```html
<head>
    ...
    <script src="/path/to/highlight.min.js"></script>
    <script src="/path/to/highlightjs-riscript/dist/riscript.min.js"></script>
    <link rel="stylesheet" href="/path/to/css/riscript.css">
    <script>
        hljs.highlightAll();
    </script>
    ...
</head>
<body>
    ...
    <pre>
        <code class="riscript">
        you code here
        </code>
    </pre>
    ...
</body>
```

## License
highlight.js is released under BSD-3-Clause license, this grammar mode, RiScript and RiTa are released under the GPL license

## Links
- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- RiScript is a part of RiTa, a toolkit for computational literature: <https://rednoise.org/rita>
