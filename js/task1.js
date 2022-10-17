const headElements = document.querySelectorAll(".item");
console.log("Number of categories:", headElements.length);

for (const li of [...headElements]) {
  console.log("Category:", li.firstElementChild.textContent);
  console.log("Elements:", li.lastElementChild.children.length);
}
