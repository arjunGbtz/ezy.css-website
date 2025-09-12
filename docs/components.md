# Components📦

ezy.css contains a small but powerful collection of components.

These are based on the utility classes and can be freely customized.

**Note**: most of these components with some exceptions do not contain background colors, etc. by default, they need to be manually set 

## Buttons

Buttons are designed using the ".btn" class. Combine these with color utilities (bg-*, text-*) and size modifiers for flexibility

---

### Variations
- `.btn` Standard button
- `.btn-border` Button with 1px border
- `.btn-outline` Outline button
- `.btn-glass` Glassmorphism button

### Sizes
- `.btn-sm` Small
- `.btn-md` Medium
- `.btn-lg` Large
- `.btn-xl` Extra large

Example:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-sm">Small ghost</button>
```

## Cards

Cards are simple containers with border and padding. Use utility classes to customize background text and layout

---

- `.card` simple card as described above
- `.card-glass` Glassmorphism card

Example:

```html
<div class="card shadow p-4 rounded">
    <h3 class="text-lg font-bold">Card Title</h3>
    <p class="text-sm">This is a simple card component.</p>
    <button class="btn btn-primary mt-2">Action</button>
</div>
```

## Alerts

Alerts display important messages. Use color classes to indicate type

---

- `.alert` basic alert
- use your creativity with color and style as shown below

Examples:

```html
<div class="alert bg-blue text-white rounded">
    This is an info alert.
</div>

<div class="alert bg-green text-white rounded mt-2">
    ✅ Success! Your action was completed.
</div>

<div class="alert bg-red text-white rounded mt-2">
    ❌ Error: Something went wrong.
</div>

<div class="alert bg-yellow text-black rounded mt-2">
    ⚠️ Warning: Please double check your input.
</div>

<div class="alert card-glass mt-2">
    Glassmorphism style alert.
</div>
```

## Modals

Modals are overlays for dialogs or extra content
- `.modal` wrapper
- `.modal-content` inner box
---

Example:

```html
<div class="modal" id="demo-modal">
    <div class="modal-content p-4 rounded shadow bg-white">
        <h2 class="text-xl font-bold">Modal Title</h2>
        <p class="mb-4">This is a modal window.</p>
        <button class="btn bg-blue rounded-sm">Close</button>
    </div>
</div>
```

## Inputs

Form controls like inputs and textareas come with simple base styles

---

- `.input` default input
- `.input-sm`, `.input-lg` sizes


- `:valid` changes the border color to `--color-success`
- `:invalid` changes the border color to `--color-error`

You can customize these colors in :root. Learn more about custom colors [here](colors.md)

Examples:

```html
<input type="text" class="input input-sm" placeholder="Small input">
<input type="text" class="input" placeholder="Default input">
```

## Tables

Tables use minimal styling out of the box, enhance with utilities for borders, spacing, and colors.

---

- `.table` default table
- `.borderless` removes table borders
- `.bc-*` change table border color
- etc.

Example:

```html
<table class="table rounded shadow">
    <thead>
        <tr class="bg-gray text-white">
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td class="text-green">Active</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td class="text-red">Inactive</td>
        </tr>
    </tbody>
</table>
```

## Badges

Badges are small labels for notifications, status or counters

---

- `.badge` basic badge
- use color utilities like `bg-*` and `text-*` for badge styling

Example:

```html
<span class="badge bg-red text-white rounded">New</span>
<span class="badge bg-green text-white rounded">Success</span>
```

## Navbar

Navbar is a flexible container for navigation links

- `.navbar` main container
- `ul` & `li` come with basic styling but can be customized with utility classes

Example:

```html
<nav class="navbar bg-darkgray text-white p-3 rounded">
    <h1 class="text-lg font-bold">Brand</h1>
    <ul class="flex gap-3">
        <li><a href="#" class="text-white">Home</a></li>
        <li><a href="#" class="text-white">About</a></li>
        <li><a href="#" class="text-white">Contact</a></li>
    </ul>
</nav>
```

### 🎉 Congratulations! You've now mastered all the core components of ezy.css!

You can freely combine buttons, cards, alerts, modals, and more.

Want something a little more fancy? Customize colors, sizes, and animations with utility classes.

Next: Dive into fancy [colors](colors.md?id=Colors🎨) and [animations](animations.md?id=Animations😎) to make your UI shine! ✨

Until then: **stay ezy.** ✌️😎