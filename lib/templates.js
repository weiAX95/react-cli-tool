// lib/templates.js
const getTemplates = () => ({
    // package.json
    'package.json': `{
    "name": "react-app",
    "version": "1.0.0",
    "scripts": {
      "start": "cross-env NODE_ENV=development webpack serve --config config/webpack.development.js",
      "build": "cross-env NODE_ENV=production webpack --config config/webpack.production.js",
      "lint": "eslint src --ext .ts,.tsx",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@swc/core": "^1.3.96",
      "@types/react": "^18.2.37",
      "@types/react-dom": "^18.2.15",
      "@typescript-eslint/eslint-plugin": "^6.10.0",
      "@typescript-eslint/parser": "^6.10.0",
      "autoprefixer": "^10.4.16",
      "cross-env": "^7.0.3",
      "css-loader": "^6.8.1",
      "eslint": "^8.53.0",
      "html-webpack-plugin": "^5.5.3",
      "postcss": "^8.4.31",
      "postcss-loader": "^7.3.3",
      "style-loader": "^3.3.3",
      "swc-loader": "^0.2.3",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.2.2",
      "webpack": "^5.89.0",
      "webpack-cli": "^5.1.4",
      "webpack-dev-server": "^4.15.1",
      "webpack-merge": "^5.10.0"
    }
  }`,
  
    // tsconfig.json
    'tsconfig.json': `{
    "compilerOptions": {
      "target": "es5",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "baseUrl": "./src",
      "paths": {
        "@/*": ["*"],
        "@components/*": ["components/*"],
        "@hooks/*": ["hooks/*"],
        "@pages/*": ["pages/*"],
        "@states/*": ["states/*"],
        "@styles/*": ["styles/*"]
      }
    },
    "include": ["src"],
    "exclude": ["node_modules"]
  }`,
  
    // webpack configs
    'config/webpack.common.js': `const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  module.exports = {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@states': path.resolve(__dirname, '../src/states'),
        '@styles': path.resolve(__dirname, '../src/styles')
      }
    },
    module: {
      rules: [
        {
          test: /\\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  decorators: true
                },
                transform: {
                  react: {
                    runtime: 'automatic'
                  }
                }
              }
            }
          }
        },
        {
          test: /\\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  };`,
  
    'config/webpack.development.js': `const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');
  
  module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
      open: true
    }
  });`,
  
    'config/webpack.production.js': `const { merge } = require('webpack-merge');
  const path = require('path');
  const common = require('./webpack.common.js');
  
  module.exports = merge(common, {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  });`,
  
    // postcss.config.js
    'postcss.config.js': `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  };`,
  
    // tailwind.config.js
    'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    theme: {
      extend: {},
    },
    plugins: []
  };`,
  
    // src files
    'src/index.tsx': `import React from 'react';
  import { createRoot } from 'react-dom/client';
  import App from './App';
  import './styles/index.css';
  
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`,
  
    'src/App.tsx': `import React from 'react';
  
  const App: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 className="text-3xl font-bold text-black mb-8">Welcome to React</h1>
                  <p>This project was created using custom React CLI with:</p>
                  <ul className="list-disc space-y-2 ml-4">
                    <li>React 18</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>SWC</li>
                    <li>Webpack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;`,
  
    'src/styles/index.css': `@tailwind base;
  @tailwind components;
  @tailwind utilities;`,
  
    // public files
    'public/index.html': `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React App</title>
  </head>
  <body>
      <div id="root"></div>
  </body>
  </html>`,
  
    // ESLint config
    '.eslintrc.js': `module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  };`,
  
    // gitignore
    '.gitignore': `node_modules
  dist
  .DS_Store
  .env.local
  .env.development.local
  .env.test.local
  .env.production.local
  npm-debug.log*`
  });
  
  module.exports = {
    getTemplates
  };