const form = document.getElementById("formElement");

const handleFormSubmition = async (eventVar) => {
  eventVar.preventDefault();
  const formData = new FormData(eventVar.target);
  const authorName = formData.get("name");
  const blogPost = formData.get("post");
  await fetch("/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authorName: authorName, blogPost: blogPost }),
  });
  console.log(JSON.stringify({ authorName: authorName, blogPost: blogPost }));
};

form.addEventListener("submit", handleFormSubmition);
