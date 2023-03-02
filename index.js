const cssClassNameKeywords = ["class", "klass"];

module.exports = {
	root: true,
	plugins: ["ftgp", "jasmine"],
	extends: ["eslint:recommended", "plugin:jasmine/recommended"],
	env: {
		amd: true,
		browser: true,
		jasmine: true,
		jquery: true,
		node: true,
	},
	rules: {
		"array-callback-return": 2,
		"consistent-return": "error",
		curly: "error",
		"default-case": "error",
		"eol-last": ["error", "unix"],
		eqeqeq: "error",
		"ftgp/no-class-name-array-nesting": [
			"error",
			{ keywords: cssClassNameKeywords },
		],
		"ftgp/no-class-name-template": [
			"error",
			{ keywords: cssClassNameKeywords },
		],
		"ftgp/no-class-name-ternary": ["error", { keywords: cssClassNameKeywords }],
		"ftgp/no-class-name-useless": ["error", { keywords: cssClassNameKeywords }],
		"ftgp/no-concatenated-polyglots": "error",
		"ftgp/no-untrimmed-polyglots": "error",
		"ftgp/only-literal-polyglots": "error",
		"ftgp/only-single-class-name-in-array": [
			"error",
			{ keywords: cssClassNameKeywords },
		],
		"func-style": ["error", "declaration"],
		"jasmine/no-spec-dupes": "error",
		"jasmine/no-suite-dupes": "error",
		"jasmine/no-unsafe-spy": 0,
		"jasmine/prefer-toHaveBeenCalledWith": 0,
		"jasmine/valid-expect": "error",
		"keyword-spacing": "error",
		"linebreak-style": ["error", "unix"],
		"no-alert": "error",
		"no-eval": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"no-return-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-trailing-spaces": "error",
		"no-unused-vars": ["error", { args: "none" }],
		"no-use-before-define": ["error", "nofunc"],
		"no-useless-call": "error",
		"one-var": ["error", "never"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
		"semi-spacing": ["error", { before: false, after: true }],
		"space-before-function-paren": ["error", "never"],
		"space-infix-ops": "error",
		strict: ["error", "never"],
		"wrap-iife": ["error", "inside"],
		yoda: "error",
	},
};
