module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'plugin:react/recommended', 
        'airbnb', 
        'prettier', 
        'prettier/react'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", 'prettier', 'react-hooks'
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exaustive-deps': 'warn',
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/label-has-associated-control': 0,
    }
};