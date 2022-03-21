# nextjs + eslint + prettier 설정

# 설치

```jsx
4588  npx eslint --init
4589  npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
4583  npm i styled-components
4584  npm i @types/styled-components -D
```

# package.json 설정파일 정보

```jsx

{
  "name": "nextts-app-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "styled-components": "^5.3.3",
    "styled-reset": "^4.3.4"
  },
  "devDependencies": {
    "@types/node": "17.0.21",
    "@types/react": "17.0.41",
    "@types/styled-components": "^5.1.24",
    "@typescript-eslint/eslint-plugin": "^5.15.0",
    "@typescript-eslint/parser": "^5.15.0",
    "eslint": "8.11.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.4",
    "prettier": "^2.6.0",
    "typescript": "4.6.2"
  }
}
```

# .eslintrc.js

```jsx
// eslint + prettier 설정 한방에 : https://www.kenrhee.com/blog/eslint-and-prettier-for-nextjs
module.exports = {
  env: {
    // 전역 변수 사용을 정의합니다. 추가하지 않으면 ESLint 규칙에 걸리게 됩니다.
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // 해당 플러그인의 권장 규칙을 사용합니다.
    'plugin:prettier/recommended', // plugin과 eslint-config-prettier 설정을 한번에 합니다.
  ],
  parser: '@typescript-eslint/parser', // ESLint 파서를 지정합니다.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX를 파싱할 수 있습니다.
    },
    ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
    sourceType: 'module', // import, export를 사용할 수 있습니다.
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
    },
  },
};
```

# .prettierrc.js

```jsx
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 160,
  tabWidth: 2,
};
```

# .babelrc

```jsx
{
    "presets": ["next/babel"],
    "plugins": [["styled-components", {"ssr": true }]]
}
```

# tsconfig.json
