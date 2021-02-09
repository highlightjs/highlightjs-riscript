/*
Language: RiScript (https://rednoise.org/rita/reference/riscript.html), part of the RiTa project at https://rednoise.org/rita
Author of this little highlighter: JohnC <real.john.chueng@gmail.com>
*/

export default function (hljs) {

    /*
    Mapping
    highlight group ->  css class
    */
    
    let WEIGHT = {
        className: 'rs-weight',
        begin: /\[[0-9]+\]/
    }
    
    let CHOICE = {
        className: 'rs-choice',
        begin: /\(/,
        end: /\)/,
        illegal: '\n',
        contains: [WEIGHT]
    };

    let TRANSFORM = {
        className: 'rs-transform',
        begin: /\.[\w]+[\(]?[\)]?/,
    };

    let SYMBOL = {
        className: 'rs-symbol',
        begin: /\$[\w]+/,
        relevance: 10
    };

    let DYNAMIC = {
        className: 'rs-dynamic',
        begin: /\$\$[\w]+/,
        relevance: 10
    };

    let ASSIGN = {
        className: 'rs-assign',
        begin: /[\$]{1,2}[\w]+[\s]*\=/
    }

    let CONTINUATION = {
        className: 'rs-continuation',
        begin: /[\w]+[\s]*\\$/
    }

    let ENTITY = {
        className: 'rs-entity',
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }

    let CONDITIONAL = {
        className: 'rs-conditional',
        begin: /\{(\$[\w]+([\!\*\^\$<>]\=|[\=<>])([\w]+|[0-9]?\.[0-9]+)\,)?(\$[\w]+([\!\*\^\$<>]\=|[\=<>])([\w]+|[0-9]?\.[0-9]+))\}\?/,
        relevance: 10,
    }

    let CONTAINS = [
        ASSIGN,
        TRANSFORM,
        DYNAMIC,
        SYMBOL,
        ENTITY,
        CONDITIONAL,
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
