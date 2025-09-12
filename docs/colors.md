# Colors🎨

ezy.css features a simple yet flexible color system.

You can quickly set backgrounds, text, borders, and decorations—and even define your own custom palette.

## Basics: Backrgound & Text colors

---

### Background colors

use `.bg-*` classes to set background colors

Example: 

```html
<div class="bg-blue text-white p-2 rounded">Blue background</div>
<div class="bg-green text-white p-2 rounded mt-2">Green background</div>
```

### Text colors

use `.text-*` classes to change the text color

Example:

```html
<p class="text-red">Red text</p>
<p class="text-yellow">Yellow text</p>
```

### Borders & Outline colors

use `.bc-*` classes to style the border color

Example: 

```html
<div class="bc-white bg-blue text-white p-2 rounded">White Border</div>
```

### Decoration Colors

Underline decorations can also be colored with `.deco-*`

Example:

```html
<p class="underlined deco-blue">Underlined blue text</p>
```

## Predefined Color Palette

The following colors are available out of the box

---

### Colors:

- `red`
- `green`
- `blue`
- `yellow`
- `purple`
- `pink`
- `orange`

### Shadows:

- `white`
- `lightgray`
- `gray`
- `darkgray`
- `black`

### Signal colors:

- `success`
- `warning`
- `error`

## Custom Colors

With ezy.css you can define your own custom colors or override the existing ones.

---

### Setup:

to enable the custom colors feature run:

```js
node ezy/helper.js --setup-colors
```

This will create:
1. `custom_colors.json` in your project root
2. A script in `package.json` to update colors (npm run update-colors)

### Usage

Edit your custom_colors.json like this:

```json
{
  "custom": {
    "foo": "#123456",
    "bar": "#abcdef"
  }
}
```

Then update your CSS classes by running:

```js
npm run update-colors
```

After running the command, the new custom colors are immediately available as utility classes such as `.bg-foo`, `.text-foo` or `.bc-foo`

### Overriding Predefined colors

to override predefined colors, manually write them in `:root`

```html
<style>
    :root {
        --color-red: #F54927; /* overrides default red */
    }
</style>
```

### Thats it for Colors 🎉

Now that you can style backgrounds, text, borders & even define your own palette - why stop at static colors? Next up: [animations](animations.md?id=Animations😎)