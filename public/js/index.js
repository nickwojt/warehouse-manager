const renderBagel = async (event) => {
  event.preventDefault();
  if (event.target.matches(".bagel-card")) {
    const id = event.target.dataset.id;
    console.log(id);
    const response = await fetch(`/api/bagel/${id}`, {
      method: "GET",
    });
  }
};

document.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    if (event.target.matches(".bagel-card")) {
      const id = event.target.id;
      console.log(id);
      const response = fetch(`/api/bagel/${id}`, {
        method: "GET",
      });
    }
  },
  false
);
