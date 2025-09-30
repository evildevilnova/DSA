async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    });

    const data = await response.json();
    console.log("Created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();

// GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // convert to JSON
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error:", error));

