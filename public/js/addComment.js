const addNewComment = async (event) => {
  event.preventDefault();
  try {
    const text = document.querySelector("#commentText").value.trim();
    const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    if (text && post_id) {
      console.log("hello");
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ text, post_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  } catch {}
};

document.querySelector("#newComment").addEventListener("submit", addNewComment);
