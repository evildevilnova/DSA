// Throttle function
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Function to be throttled
function logMessage(msg) {
  console.log("Triggered:", msg, "at", new Date().toLocaleTimeString());
}

// Create throttled version (max once every 2s)
let throttledLog = throttle(logMessage, 2000);

// Simulate rapid calls (every 500ms)
let interval = setInterval(() => {
  throttledLog("Hello");
}, 500);

// Stop after 10 seconds
setTimeout(() => clearInterval(interval), 10000);
