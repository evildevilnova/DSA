function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


function searchHandler(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchHandler, 500);

// Simulating typing
debouncedSearch("N");
debouncedSearch("Ni");
debouncedSearch("Nis");
debouncedSearch("Nish"); 