module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"parserOptions": {
		"ecmaVersion": 8
	},
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"overrides": [
		{
		  "files": [ "**/*.ts" ],
		  "extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended"
		  ],
		  "globals": { "Atomics": "readonly", "SharedArrayBuffer": "readonly" },
		  "parser": "@typescript-eslint/parser",
		  "rules": {
				"@typescript-eslint/explicit-member-accessibility": "off",
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"@typescript-eslint/no-non-null-assertion": "off",
				"no-useless-constructor": "off",
				"@typescript-eslint/no-useless-constructor": "error",
				"@typescript-eslint/indent": [
					"error",
					"tab",
					{
						"MemberExpression": 0,
						"SwitchCase": 1
					}
				],
		  },
		}
	],
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"array-callback-return": "error",
		"array-element-newline": [
			"warn",
			"consistent"
		],
		"arrow-body-style": "off",
		"arrow-parens": [
			"error",
			"as-needed",
			{
				"requireForBlockBody": true
			}
		],
		"arrow-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"stroustrup"
		],
		"callback-return": "error",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"comma-dangle": "off",
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "error",
		"curly": "off",
		"default-case": "off",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": [
			"error",
			{
				"allowKeywords": true
			}
		],
		"eol-last": "error",
		"eqeqeq": "off",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-names": "off",
		// "func-style": [
		// 	"error",
		// 	"declaration"
		// ],
		"function-paren-newline": "error",
		"generator-star-spacing": "error",
		// "global-require": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": "error",
		"indent": [
			"error",
			"tab",
			{
				"MemberExpression": 0,
				"SwitchCase": 1
			}
		],
		"indent-legacy": "off",
		"init-declarations": "off",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"line-comment-position": "off",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "error",
		"lines-around-directive": "error",
		"lines-between-class-members": [
			"error",
			"always",
			{ "exceptAfterSingleLine": true }
		],
		"max-classes-per-file": "off",
		"max-depth": "off",
		"max-len": [
			"error",
			{ "code": 140 }
		],
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"multiline-comment-style": "off",
		"new-cap": "error",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "off",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-console": "off",
		"no-div-regex": "error",
		"no-duplicate-imports": "off",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-extra-semi": "off",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "off",
		"no-loop-func": "warn",
		"no-magic-numbers": "off",
		"no-misleading-character-class": "error",
		"no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": [
			"error",
			{
				"allowForLoopAfterthoughts": true
			}
		],
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-spaced-func": "error",
		"no-sync": "off",
		"no-tabs": [
			"error",
			{
				"allowIndentationTabs": true
			}
		],
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "off",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"object-curly-newline": [
			"error",
			{ "consistent": true }
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": [
			"error",
			"initializations"
		],
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": "error",
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"prefer-destructuring": "off",
		"prefer-named-capture-group": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "off",
		"prefer-promise-reject-errors": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "off",
		"quote-props": "off",
		"quotes": "off",
		"radix": "error",
		"require-atomic-updates": "off",
		"require-await": "warn",
		"require-jsdoc": "off",
		"require-unicode-regexp": "error",
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"semi-style": [
			"error",
			"last"
		],
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": "off",
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "off",
		"strict": [
			"error",
			"never"
		],
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"valid-jsdoc": "error",
		"vars-on-top": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": "off",
		"security/detect-object-injection": "off",
	}
};
