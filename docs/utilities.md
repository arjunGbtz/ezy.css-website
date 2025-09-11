# Utilities🛠️

## Spacing

ezy.css includes utilities for controlling **margin** and **padding**.
These use a simple scale, based on spacing variables (`--sp-1` = `0.25rem` & `--sp-2` = `0.5rem` & ...)

---

### Margin

Margin utilities use the prefix `m-`

- `.m-1` margin: 0.25rem
- `.m-2` margin: 0.5rem
- `.m-3` margin: 0.75rem
- `.m-4` margin: 1rem
- `.m-5` margin: 1.5rem

Directional margin:

- `.mt-1` margin-top: 0.25rem
- `.mb-2` margin-bottom: 0.5rem
- `.ml-3` margin-left: 0.75rem
- `.mr-4` margin-right: 1rem

Auto margin:

- `.m-auto` margin: auto
- `.mx-auto` margin-left/right: auto
- `.my-auto`margin-top/bottom: auto

Example:

```html
<div class="m-4 p-2 bg-blue text-white rounded">Box with margin</div>
```


### Padding

Padding utilities use the prefix `p-`

- `.p-1` padding: 0.25rem
- `.p-2` padding: 0.5rem
- `.p-3` padding: 0.75rem
- `.p-4` padding: 1rem
- `.p-5` padding: 1.5rem

Directional padding:

- `.pt-1` padding-top: 0.25rem
- `.pb-2` padding-bottom: 0.5rem
- `.pl-3` padding-left: 0.75rem
- `.pr-4` padding-right: 1rem

Example:

```html
<div class="p-4 bg-gray text-white rounded">Box with padding</div>
```

## Layout

ezy.css provides utilities for handling **display**, **container width**, These help structure your page quickly

---

### Display

use these to control how elements are displayed

- `.d-block` display: block
- `.d-inline` display: inline
- `.d-inline-block` display: inline-block
- `.d-none` display: none
- `.flex` display: flex
- `.inline-flex` display: inline-flex
- `.grid` display: grid

### Container

The `.container`utility centers content and provides horizontal padding.

- `.container` max-width: 100%, margin-auto, padding left/right: 1rem

Example:

```html
<div class="container bg-lightgray p-4 rounded">
    <h2 class="text-center">Centered Container</h2>
</div>
```

### Width

Width utilities use percentage values

- `.w-25` width: 25%
- `.w-50` width: 50%
- `.w-75` width: 75%
- `.w-100` width: 100%

Extra steps in 5% increments: `.w-5`, `.w-10`, ..., `.w-95`

Example:

```html
<div class="w-50 bg-green text-white p-2">Half Width Box</div>
```

### Height

same scale as width, but for height

- `.h-25` height: 25%
- `.h-50` height: 50%
- `.h-75` height: 75%
- `.h-100` height: 100%

Extra steps in 5% increments: `.h-5`, `.h-10`, ..., `.h-95`

Example:

```html
<div class="h-50 bg-purple text-white p-2">Half Height Box</div>
```

### Max-Width

To limit content width, use `max-w-*`

- `.max-w-xs` 360px
- `.max-w-sm` 480px
- `.max-w-md` 720px
- `.max-w-lg` 960px
- `.max-w-xl` 1200px
- `.max-w-full` 100%

On smaller screens (`<768px`) `.max-w-md`, `.max-w-lg`, `.max-w-xl` collapse to `100%`

Example:

```html
<div class="max-w-md bg-orange text-white p-4 rounded">
    <p>This box is limited to 720px max width</p>
</div>
```

## Flexbox

ezy.css comes with a full set of flexbox utilities for creating responsive layouts quickly

---

### Flex Container

- `.flex` display: flex
- `.inline-flex` display: inline-flex
- `.flex-row` flex-direction: row
- `.flex-row-reverse` flex-direction: row-reverse
- `.flex-col` flex-direction: column
- `.flex-col-reverse` flex-direction: column-reverse

Example:

```html
<div class="flex gap-2">
    <div class="bg-blue text-white p-2">1</div>
    <div class="bg-green text-white p-2">2</div>
</div>
```

### Justify Content

- `.justify-start` items aligned left
- `.justify-end` items aligned right
- `.justify-center` items centered
- `.justify-between` space-between
- `.justify-around` space-around
- `.justify-evenly` space-evenly

Example:

```html
<div class="flex justify-between bg-gray text-white p-2">
    <span>Left</span>
    <span>Right</span>
</div>
```

### Align Items

- `.items-start` top aligned
- `.items-end` bottom aligned
- `.items-center` centered vertically
- `.items-baseline` align on baseline
- `.items-stretch` stretch to fill

Example:

```html
<div class="flex items-center h-32 bg-purple text-white p-2">
    <span>Centered vertically</span>
</div>
```

### Align self

For controlling a single flex item

- `.self-start`
- `.self-end`
- `.self-center`
- `.self-baseline`
- `.self-stretch`

Example:

```html
<div class="flex items-start gap-2 h-32 bg-lightgray p-2">
    <div class="bg-blue text-white p-2">Normal</div>
    <div class="bg-red text-white p-2 self-end">Bottom aligned</div>
</div>
```

### Flex wrap

- `.flex-wrap` wrap items
- `.flex-nowrap` prevent wrapping
- `.flex-wrap-reverse` wrap in reverse order

```html
<div class="flex flex-wrap gap-2 bg-darkgray text-white p-2">
    <div class="bg-green p-2">Box 1</div>
    <div class="bg-green p-2">Box 2</div>
    <div class="bg-green p-2">Box 3</div>
</div>
```

### Gap

add spacing between flex or grid items

- `.gap-1` 0.25rem
- `.gap-2` 0.5rem
- `.gap-3` 0.75rem
- `.gap-4` 1rem
- `.gap-5` 1.5rem

Example:

```html
<div class="flex gap-4 bg-orange p-2">
    <div class="bg-white text-black p-2">A</div>
    <div class="bg-white text-black p-2">B</div>
    <div class="bg-white text-black p-2">C</div>
</div>
```

### Flex Helpers

- `.flex-1` take available space
- `.flex-auto` grow/shrink as needed
- `.flex-none` fixed-size

Example:

```html
<div class="flex gap-2">
    <div class="flex-1 bg-green text-white p-2">I grow</div>
    <div class="flex-none bg-red text-white p-2">I don’t grow</div>
</div>
```

### Shortcuts

- `.flex-center` horizontal & vertical centering
- `.flex-space-between` justify-between
- `flex-space-around` justify-around

Example:

```html
<div class="flex-center h-32 bg-darkgray text-white">
    Perfectly centered
</div>
```

### Responsive Flex

you can use responsive prefixes:

- `sm:flex-col` (small screens) stack items vertically
- `md:justify-between` (medium screens) distribute with space-between
- `lg:items-center` (large screens) vertically centered

```html
<div class="flex sm:flex-col md:flex-row justify-around p-2 bg-lightgray">
    <div class="bg-blue text-white p-2">Box 1</div>
    <div class="bg-green text-white p-2">Box 2</div>
    <div class="bg-red text-white p-2">Box 3</div>
</div>
```

### Full reference
(For advanced users, [here](https://github.com/arjunGbtz/ezy.css/blob/main/src/utility/flex.css) is the complete set of flex utils as css)

## Grid

ezy.css provides a lightweight grid system using css grid. Grids make it easy to build **responsive, multi-column** layouts with just a few classes

---

### Basic Grid

```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

- `.grid` auto-responsive grid with equal columns (min. 250px wide)
- `gap` between items defaults to `1rem`

Example:

```html
<div class="grid">
    <div class="card p-4 bg-blue text-white rounded">1</div>
    <div class="card p-4 bg-green text-white rounded">2</div>
    <div class="card p-4 bg-red text-white rounded">3</div>
</div>
```

### Fixed Columns

Use `.grid-2`, ..., `.grid-5` to define a fixed number of equal-width columns

- `.grid-2` two columns
- `.grid-3` three columns
- and so on

Example:

```html
<div class="grid grid-3">
    <div class="card p-4 bg-purple text-white rounded">A</div>
    <div class="card p-4 bg-orange text-white rounded">B</div>
    <div class="card p-4 bg-pink text-white rounded">C</div>
</div>
```

### Responsive Behavior

- `.grid` (default) automatically adjusts the number of columns based on screen size
- `.grid-2`, ..., `.grid-5` are fixed and may shrink on smaller screens, it is recommended to combine these with `max-w-*` or responsive utilities (`sm:`, `md:`, `lg:`) for better layouts

Example:

(2 columns on mobile and 4 on Desktop)

```html
<div class="grid sm:grid-2 lg:grid-4">
    <div class="card p-4 bg-gray text-white rounded">1</div>
    <div class="card p-4 bg-blue text-white rounded">2</div>
    <div class="card p-4 bg-green text-white rounded">3</div>
    <div class="card p-4 bg-red text-white rounded">4</div>
</div>
```

## Typography

ezy.css includes utilities for controlling **text alignment, size, weight, & decoration**

---

### Text Alignment

- `.text-left` text-align: left
- `.text-center` text-align: center
- `.text-right` text-align: right

Example:

```html
<p class="text-center text-lg">Centered paragraph</p>
```

### Text Transform & Decoration

- `.text-uppercase` transform text to uppercase
- `.underlined` underline text
- `.deco-red`, `.deco-blue`, `...` underline color

Example: 

```html
<p class="text-uppercase underlined deco-purple">Important Text</p>
```

### Font Size

- `.text-xs` 0.75rem
- `.text-sm` 0.875rem
- `.text-base` 1rem
- `.text-lg` 1.25rem
- `.text-xl` 2rem
- `.text-2xl` 2.5rem
- `.text-3xl` 3rem
- `.text-4xl` 4rem
- `.text-5xl` 5rem

Example:

```html
<h1 class="text-4xl font-bold">Big Heading</h1>
```

### Font Weight

- `.font-light` 300
- `.font-normal` 400
- `.font-medium` 500
- `.font-bold` 700
- `.font-black` 900

Example:

```html
<p class="font-light">Light text</p>
<p class="font-bold">Bold text</p>
```

## Opacity

Use opacity utilities to control visibility levels

---

- `.opacity-0` invisible
- `.opacity-50` 50% visible
- `.opacity-100` fully visible

Example:

```html
<div class="flex gap-2">
    <div class="bg-blue text-white p-2 opacity-100">100%</div>
    <div class="bg-blue text-white p-2 opacity-50">50%</div>
    <div class="bg-blue text-white p-2 opacity-0">0%</div>
</div>
```

## Borders

Utilities for controlling **border radius, style & color**

---

### Border style

- `.br` default border
- `.borderless` no border

### Border radius

- `.rounded` default radius (**0.5rem**)
- `.rounded-sm` small radius (**0.25rem**)
- `.rounded-lg` lg radius (**1rem**)
- `.rounded-full` pill/cirlce (**9999px**)

Example:

```html
<div class="br rounded-lg p-2 bg-lightgray">Box with border</div>
```

### Border colors

- `.bc-red`, `.bc-blue`, `.bc-*` set border color

Example:

```html
<div class="br bc-purple p-2">Purple border</div>
```

## Shadows

Apply depth with simply shadow utils

---

- `.shadow` default soft shadow
- `.shadow-lg` larger shadow
- `.shadow-inset` inner shadow

Example :

```html
<div class="shadow-lg p-4 bg-white rounded">Card with shadow</div>
```

## Cursors

Change the cursor style on hover

---

- `.cursor-pointer` cursor: pointer
- `.cursor-default` cursor: default
- `.cursor-move` cursor: move
- `.cursor-not-allowed` cursor: not-allowed
- `.cursor-text` cursor: text
- `.cursor-wait` cursor: wait
- `.cursor-crosshair` cursor: crosshair
- `.cursor-help` cursor: help
- `.cursor-grab` cursor: grab
- `.cursor-grabbing` cursor: grabbing

Example:

```html
<button class="btn cursor-pointer">Button</button>
```

---

### Thats it for Utilities 🎉

With these utilities, you can create 90% of your layouts without your own CSS rules.
If you're wondering, "What about buttons, cards, or fancy animations?" – don't worry, they'll be covered in the next chapters

Until then: **stay ezy.** ✌️😎

continue with [Components](components.md?id=Components📦)