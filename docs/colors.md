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

ezy.css currently uses a fixed set of color variables such as "--color-red", "--color-blue", etc.
You cannot add new names (e.g., "--color-brand") because the helper variables (.bg-*, ".text-*", ".bc-*", etc.) are hard-coded to the default set.

👉 However, you can override the default colors in your own project by redefining them in ":root".

---

Example:

```html
<style>
:root {
--color-red: #ff1111; /* overrides the default red */
--color-blue: #2222ff; /* overrides the default blue */
}
</style>

<div class="bg-red p-2">This is my custom red</div>
<div class="text-blue">This is my custom blue</div>
```

### Thats it for Colors 🎉

Now that you can style backgrounds, text, borders & even define your own palette - why stop at static colors? Next up: [animations](animation.md?id=Animations😎)