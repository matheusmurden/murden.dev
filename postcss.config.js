module.exports = {
  "plugins": {
    "postcss-flexbugs-fixes": {},
    "postcss-custom-selectors": {
      importFrom: 'styles/selectors.css'
    },
    "postcss-preset-env": {
      "browsers": "last 2 versions",
      "autoprefixer": {
        "flexbox": "no-2009"
      },
      "stage": 4,
      "features": {
        "custom-properties": true,
        "custom-selectors": true,
        "custom-media-queries": true,
        "media-query-ranges": true,
        "dir-pseudo-class": true,
        "nesting-rules": true,
        "focus-visible-pseudo-class": true,
        "blank-pseudo-class": true,
        "gap-properties": true,
        "lab-function": true,
        "matches-pseudo-class": true,
        "not-pseudo-class": true,
        "overflow-property": true,
        "place-properties": true,
        "prefers-color-scheme-query": true,
        "system-ui-font-family": true
      }
    }
  }
}