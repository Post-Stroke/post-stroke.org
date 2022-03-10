# Post Stroke

This is the future home of [post-stroke.org](http://post-stroke.org).

## Core Dependencies

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)

## Install

Install all the dependencies listed in `package.json`.

```
npm install
```

## Local Dev

Compile the site with development settings.

```
npm run start
```

## Production Build

Compile the site with minified production settings.

```
npm run build
```

## Assets versioning

We include a small js script to add a hash to assets when building for production.
The script will look for files to include a hash (based on the md5 of the built file content) eg: `styles.734a7607648afdb.css` instead of `styles.css`.

The entry point for matching regular file path to versionned path is generated as an 11ty global data object in `_data/hash.json` with the simple structure

```js
{
  'path/to/resource.css': 'path/to/resource.hash.css'
}
```

In your 11ty template, you can then simply retrieve the versioned path from the array `{{ hash['path/to/resource.css'] }}`

If you want to add other assets to this generated data array, simply include the path in the `assets` const in the `hash.js` file in the root directory (files listed below are already included).

```js
const assets = ["css/styles.css", "js/scripts.js"];
```
