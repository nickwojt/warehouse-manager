if (document.getElementById("bagel-parent")) {
  document
    .getElementById("bagel-parent")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      if (event.target.matches(".bagel-card")) {
        console.log(event.target.matches(".bagel-card"));
        let id = event.target.dataset.id;
        id = parseInt(id);
        location.replace(`/api/bagel/${id}`);
      }
    });
}

if (document.querySelector(".stock")) {
  document
    .querySelector(".stock")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      const value = document.getElementById("stock").value;
      let id = event.target.dataset.id;
      const updateData = {
        stock: value,
      };
      const response = await fetch(`/api/bagel/${id}/stock`, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to get bagel data.");
      }
    });
}
