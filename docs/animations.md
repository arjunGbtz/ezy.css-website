# Animations😎

> ezy.css provides a set of ready to use animtion and transition utilities. Combine these with your components to add life to your UI with minimal code

## Animation Utilities

---

### Transitions

Control the speed of property changes with transition classes:

- `.transition-fast` transition: all 0.15s ease-in-out
- `.transition-md` transition: all 0.3s ease-in-out
- `.transition-slow` transition: all 0.7s ease-in-out

Example:

```html
<button class="transition-fast hover-scale-md btn bg-blue">
  Hover Me
</button>
```

### Animation Delays & Durations

Delay:

- `.delay-1` 0.1s
- `.delay-2` 0.2s
- ...
- `.delay-10` 1s

Duration:

- `.duration-1` 0.1s
- `.duration-2` 0.2s
- ...
- `.duration-10` 1s

Example:

```html
<div class="fade-in duration-4 delay-2">
  Fades in after 0.2s, lasting 0.4s
</div>
```

## Hover Effects

> Add simple interactivity on hover

---

- `.hover-scale-sm` scale 1.02
- `.hover-scale-md` scale 1.05
- `.hover-scale-lg` scale 1.1

- `.hover-shadow` adds shadow
- `.hover-fade` opacity 0.8
- `.hover-rotate` rotates 3°

Example:

```html
<button class="btn bg-green text-white hover-scale-lg hover-shadow">
  Hover me
</button>
```

## ezy-animate (scroll animations)

> add animations on scroll with ezy-animate

---

- `ezy-animate="slide-up"` slides up from 20px
- `ezy-animate="slide-left"` slides from left
- `ezy-animate="slide-right"` slides from right
- `ezy-animate="fade-in"` fades in
- `ezy-animate="zoom-in"` zooms in
- `ezy-animate="zoom-out"` zooms out

Example:

```html
<div ezy-animate="slide-up">
  Slide up content
</div>
```

## Predefined Animations

---

- `.pulse`repeates scale up/down indefinetly
- `.bounce-in` pops in with a bounce
- `.shake` horizontal shake
- `.blink` blinking effect

Example:

```html
<div class="btn bg-red text-white pulse">
  Pulsing Button
</div>

<div class="card bounce-in p-4">
  Bounces in on load
</div>
```

## Summary

> A small summary of what you have learned on this page

---

- `.transition-*` for speed
- `.duration-*` and `.delay-*` for timing
- `.hover-*` for simple interactive effects
- `ezy-animate="*"` for scroll effects
- `.pulse`, `.bounce-in`, `.shake` & `.blink` for predefined keyframe effects

Combine these utilities with your components and colors t create smooth, dynamic and modern UIs effortlessly

### 🎉 Congratulations!

You've worked through the entire ezy.css documentation.
Now you know how to use utilities, components, colors, and animations to create modern user interfaces with almost no custom CSS.

Go ahead, build something great with it—and don't forget to **stay ezy.** ✌️😎