import avatar from "./images/avatar.jpg";

function loadImages() {
  const avatarImg = document.createElement("img");
  avatarImg.classList.add("avatar");
  avatarImg.setAttribute("src", avatar);
  avatarImg.setAttribute("alt", "Avatar");

  const avatarContainer = document.getElementById("hero");
  avatarContainer.appendChild(avatarImg);
}

export default loadImages;
