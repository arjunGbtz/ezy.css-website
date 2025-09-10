# Utilities 🛠️

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

Example:

```html
<div class="container bg-lightgray p-4 rounded">
    <h2 class="text-center">Centered Container</h2>
</div>
```

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

Extra steps in 5% increments: `.w-5`, .`w-10`, ..., `.w-95`

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