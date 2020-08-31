module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true,
        "node": true,
        "jest": true
    },
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "16.4.2",
        },
    },
    "globals": {
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "comma-spacing": [2, {"before": false, "after": true}],
        "space-infix-ops": ["error", { "int32Hint": false }],
        "jsx-quotes": ["error", "prefer-double"],
        "no-var": ["error"],
        "array-callback-return": 2,
        "curly": 2,
        "default-case": 2,
        "eqeqeq": 2,
        "newline-per-chained-call": 2,
        "no-empty-function": 2,
        "no-param-reassign": 2,
        "no-multi-spaces": 2,
        "no-eval": 2,
        "react/require-render-return": 2,
        "react/sort-comp": [2, {
            order: [
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "/^handle.+$/",
                "render",
                "everything-else"
            ]
        }],
        "react/no-is-mounted": 2,
        "react/no-string-refs": 2,
        "react/prefer-es6-class": 2,
        "react/self-closing-comp": 2,
        "react/void-dom-elements-no-children": 2,
        "react/style-prop-object": 2,
        "react/react-in-jsx-scope": 2,
        "react/no-unused-prop-types": 2,
        "react/no-unknown-property": 2,
        "react/no-unescaped-entities": 2,
        "react/no-render-return-value": 2,
        "react/no-find-dom-node": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-deprecated": 2,
        "react/forbid-foreign-prop-types": 2,
        "react/no-children-prop": 2,
        "react/no-danger": 2,
        "react/no-danger-with-children": 2,
        "react/display-name": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-boolean-value": 2,
        "react/jsx-wrap-multilines": [
            2,
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "parens-new-line",
                logical: "ignore",
                prop: "ignore"
            }
        ],
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-no-literals": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-max-props-per-line": 2,
        "react/jsx-key": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-indent": 1,
        "react/jsx-handler-names": 2,
        "react/jsx-first-prop-new-line": 2,
        "react/jsx-equals-spacing": 2,
        "react/jsx-curly-spacing": 2,
        // "no-console": 2,
        "no-new-func": 2,
    }
};
