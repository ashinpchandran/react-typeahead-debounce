# react-debounced-search

A clean, performant Type-Ahead search component built with React, featuring a custom, reusable `useDebounce` hook to minimize unnecessary operations and filter mock user data smoothly.

## 🚀 Features

* 🎣 **Custom `useDebounce` Hook:** Fully decoupled and reusable across any component or input field.
* ⚡ **Performance Optimized:** Minimizes state recalculations and prevents execution jitter while typing.
* 🧹 **Memory Safe:** Automatically clears pending timers on component unmount or rapid keystrokes to prevent memory leaks.
* 📋 **Pre-configured Mock Data:** Ready-to-test dataset featuring user names, emails, roles, and skills.

---

## 🛠️ How it Works

When a user types into the search field, the application doesn't instantly filter the array on every single keystroke. Instead, the `useDebounce` hook intercepts the input value and waits for a specific delay (**500ms**) of "silence" (no typing) before passing the updated value to the filter logic. 

```text
User types:  "A" -> "Al" -> "Ale" -> "Alex"
Timers:      [X]    [X]     [X]     [Starts 500ms timer...]
Result:      Filtered results update *only once* after typing stops.
