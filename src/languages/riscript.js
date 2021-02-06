/*
Language: RiScript (https://rednoise.org/rita/reference/riscript.html), part of the RiTa project at https://rednoise.org/rita
Author of this little highlighter: JohnC <real.john.chueng@gmail.com>
*/

export default function (hljs) {

    /*
    Mapping
    highlight group ->  css class
    */
    let CHOICE = {
        className: 'rs-choice',
        begin: /\([.]*/,
        end: /[.]*\)/,
        contains: [self]
    };

    let TRANSFORM = {
        className: 'rs-transform',
        begin: /\.[\w]+/,
        end: /\(\)/
    };

    let SYMBOL = {
        className: 'rs-symbol',
        begin: /\$[\w]+/
    };

    let DYNAMIC = {
        className: 'rs-dynamic',
        begin: /\$\$[\w]+/
    };

    let CONTAINS = [
        CHOICE,
        TRANSFORM,
        SYMBOL,
        DYNAMIC,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
    ];



    return {
        name: "RiScript",
        aliases: ['rs'],
        case_insensistive: false,
        disableAutodetect: true,
        keywords: '',
        contains: CONTAINS
    };

}
