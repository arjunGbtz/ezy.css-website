# Components 📦

ezy.css contains a small but powerful collection of components.

These are based on the utility classes and can be freely customized.


## Buttons

Buttons are designed using the ".btn" class. Combine these with color utilities (bg-*, text-*) and size modifiers

---

### Variations
- `.btn` Standard button
- `.btn-border` Button with 1px border
- `.btn-outline` Outline button
- `.btn-glass` Glassmorphism button

### Sizes
- `.btn-sm` Small
- `.btn-md` Mid
- `.btn-lg` Large
- `.btn-xl` Extra large

Example:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost btn-sm">Small ghost</button>
```

## Cards

Cards are simple containers with border and padding. Use utility classes to customize background text and layout

---

- `.card` simple card as discribed above
- `.glasscard` Glassmorphism card

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
- use creativity as shown below

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

Form controls like inputs and textareas come with base styles

---

- `.input` default input
- `.input-sm`, `input-lg` sizes


- `:valid` changes the bordercolor to `--color-success`
- `:invalid` changes the bordercolor to `--color-error`

change these colors in the `:root`, learn more about custom colors [here](colors.md?id=custom)

Examples:

```html
<input type="text" class="input input-sm" placeholder="Small input">
<input type="text" class="input" placeholder="Default input">
```

## Tables

Tables use minimal styling out of the box, enhance with utils for borders spacing etc.

---

- `.table` default table
- `.borderless` removes table borders
- `.bg` change the tables border color
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