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
        begin: /\([.]*\)/
    };

    let TRANSFORM = {
        className: 'rs-transform',
        begin: /\.[\w]+[\(]?[\)]?/,
    };

    let SYMBOL = {
        className: 'rs-symbol',
        begin: /\$[\w]+/
    };

    let DYNAMIC = {
        className: 'rs-dynamic',
        begin: /\$\$[\w]+/
    };

    let ASSIGN = {
        className: 'rs-assign',
        begin: /[\$]{1,2}[\w]+\=/
    }

    let CONTINUATION = {
        className: 'rs-continuation',
        begin: /[\w]+[\s]*\\$/
    }

    let CONTAINS = [
        ASSIGN,
        TRANSFORM,
        DYNAMIC,
        SYMBOL,
        CHOICE,
        CONTINUATION,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
    ];



    return {
        name: "RiScript",
        aliases: ['risc','riscript'],
        case_insensistive: false,
        disableAutodetect: true,
        keywords: '',
        contains: CONTAINS
    };

}
