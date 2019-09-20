module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    globals: {
        NODE_ENV: false,
        "_": true
    },
    rules: {
        "object-curly-spacing": ["error", "never"],
        "indent": ["error", 4],
        // allow async-await
        "generator-star-spacing": "off",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        // 添加，分号必须
        semi: ["error", "always"],
        "no-unexpected-multiline": "off",
        "space-before-function-paren": ["error", "never"],
        // 'quotes': ["error", "double", { "avoidEscape": true }]
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true
            }
        ]
    }
};
