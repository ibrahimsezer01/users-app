let labelUrl = document.querySelector("#url");
let nickName = document.querySelector("#nickName");


nickName.addEventListener("input", () => {
    labelUrl.textContent = nickName.value.trim().replace(/\s+/g, "-").toLowerCase();
});

