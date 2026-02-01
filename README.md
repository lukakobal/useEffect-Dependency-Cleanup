# ⚛️ React 76 – useEffect Dependency Cleanup

## 🎯 Goal
Understanding how **useEffect cleanup runs when a dependency changes**, not only on unmount.

## 🧠 What You Learn
- Effect runs when dependency changes
- React cleans previous effect before running a new one
- Preventing multiple intervals (memory leaks)

## 🚀 Features
- Start/Stop monitoring simulation
- Interval runs only while monitoring is active
- Proper cleanup with `clearInterval`

## 🧩 Key Concept
```js
useEffect(() => {
  // start something

  return () => {
    // cleanup OLD effect before next run
  };
}, [dependency]);

https://codesandbox.io/p/sandbox/plrycm?file=%2Fsrc%2FApp.js%3A1%2C1-40%2C1
