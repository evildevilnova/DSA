1. TurboModules / JSI for faster JavaScript
2. fabric
3. react native 0.81 latest features
4. pure component
5. heigh order component
6. React Native architecture (Legacy vs New Architecture)
7. React Native communicate between JS and native code? (Bridge vs JSI).
8. What causes memory leaks in React Native and how do you prevent them?
9. Explain how you’d debug a crash that happens only in release builds.
10. Context API vs Redux
11. How do you upgrade a large React Native project from version 0.64 to the latest (0.81)?
12. how javascipt handle async code
13. Types of Async Tasks


2. Use **Chrome DevTools / React DevTools**

1. Run your app with `react-native start`.
2. Open **Remote JS Debugging** → Chrome DevTools.
3. Go to **Memory tab** → take **heap snapshots**.
4. Interact with app → take another snapshot.
5. Compare snapshots for objects that persist after unmount → memory leak candidates.



| Feature        | Legacy Architecture             | New Architecture (Fabric + TurboModules) |
| -------------- | ------------------------------- | ---------------------------------------- |
| Communication  | Bridge (JSON serialization)     | JSI (direct C++ bindings)                |
| Rendering      | Old UI Manager                  | Fabric Renderer (concurrent + async)     |
| Native Modules | Eager-loaded, boilerplate heavy | TurboModules (lazy-loaded, fast)         |
| Type Safety    | Manual, error-prone             | Codegen auto-generates types             |
| Performance    | Bridge bottleneck, laggy lists  | Faster UI, smoother animations           |
| JS Engine      | JSC (or optional Hermes)        | Hermes (default)                         |
| Maintenance    | Harder to extend & debug        | Modern, scalable, future-proof           |


Hermes : - 
- Hermes is a lightweight, open-source JavaScript engine built by Meta (Facebook) specifically to run React Native apps on Android   and iOS.
By default, React Native used **JavaScriptCore (JSC)** (the same engine in Safari). Hermes replaces it with a **faster, smaller, mobile-optimized engine**.


## 🔹 Why Hermes? (Advantages)

1. **Faster Startup Time** → Hermes compiles JavaScript to bytecode ahead of time (AOT). Your app doesn’t need to parse JS on startup.
2. **Smaller App Size** → Precompiled bytecode reduces the size of JS bundles.
3. **Lower Memory Usage** → Optimized for low-end devices with limited RAM.
4. **Better Performance** → Faster execution of JS, smoother UI.
5. **Consistent Debugging** → Hermes integrates with Chrome DevTools & Flipper.


New Architecture

The New Architecture solves those issues with:

* Fabric → new rendering system (faster UI updates, concurrent React support).
* TurboModules → lazy-loaded, synchronous/async native calls (faster startup, less memory).
* JSI (JavaScript Interface) → direct, C++-based bindings instead of JSON serialization.
* Better type safety → using TypeScript/Flow specs for native modules.



## ⚡ React Native 0.81 – Latest Features

1. **Android 16 (API 36) support** ✅
2. **Faster iOS builds (experimental precompilation)** → reduces build time
3. **New Architecture by default** (Fabric + TurboModules + JSI)
4. **Concurrent React support** → works with React 18/19 features (startTransition, Suspense, etc.)
5. **Lazy loading of TurboModules** → faster app startup
6. **Synchronous native calls** via TurboModules (no bridge delay)
7. **Smaller app size** on Android (~1 MB smaller)
8. **Deprecation of legacy architecture** (no new fixes/features for old system)
9. **Improved Metro bundler** → faster reloads & better module resolution
10. **Removed deep imports** (`react-native/Libraries/...` → must use public API)


9. **TypeScript strict API support** → generated types for better type safety
10. **Deprecation of legacy architecture** (no new fixes/features for old system)

12. **Styling improvements** → support for `display: contents`, `boxSizing`, `mixBlendMode`, `outline` props
13. **Better native interop** → easier custom component creation with Fabric
14. **Improved debugging tools** (React DevTools + Flipper integration upgrades)
15. **Safer APIs** → runtime warnings when using deprecated/legacy APIs


