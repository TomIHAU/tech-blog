const create = async (event) => {
  event.preventDefault();
  try {
    const title = document.querySelector("#title").value.trim();
    const text = document.querySelector("#text").value.trim();

    if (title && text) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, text }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  } catch {}
};

document.querySelector("#createPost").addEventListener("submit", create);
