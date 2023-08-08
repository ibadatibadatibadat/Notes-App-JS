const notes_container = document.querySelector(".notes-container");
const create_btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const show_notes = () => {
  notes_container.innerHTML = localStorage.getItem("notes");
};
show_notes();
const update_storage = () => {
  localStorage.setItem("notes", notes_container.innerHTML);
};
create_btn.addEventListener("click", () => {
  let input_box = document.createElement("p");
  let img = document.createElement("img");
  input_box.className = "input-box";
  input_box.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notes_container.appendChild(input_box).appendChild(img);
});
notes_container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    update_storage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        update_storage();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
