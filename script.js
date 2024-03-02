// Soulscipt.js

function parse(string) {
    const arr = string.split(/\.mp3|\.wav|\.aiff|\.flac/);
    let arrWithoutHyphen = arr.map((chaine) => chaine.replace(/[-_]+/g, " "));
    let arrWithoutLink = arrWithoutHyphen.map((chaine) =>
        chaine.replace(/\s*\[\s*www\.[^\]]*\]\s*$/g, " ")
    );
    console.log("arrWithoutLink:", arrWithoutLink);
    return arrWithoutLink;
}

function youtubizeParse() {
    const slskyt = document.getElementById("slskyt");
    slskyt.innerHTML = "";
    const input = document.getElementById("input").value;
    const arr = parse(input);
    for (let i = 0; i < arr.length - 1; i++) {
        slskyt.innerHTML += `
            ${arr[i]} <a class="button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(arr[i])}" target="_blank">
            open in youtube</a><br>
        `;
    }
}

function openNotice() {
    const popup = document.getElementById("notice");
    popup.classList.add("show");
}

function closeNotice() {
    const popup = document.getElementById("notice");
    popup.classList.remove("show");
}

const openBtn = document.getElementById("howtouseme");
openBtn.addEventListener("click", openNotice);

const closeBtn = document.getElementById("close-notice-btn");
closeBtn.addEventListener("click", closeNotice);

const button = document.getElementById("magik-btn");
button.addEventListener("click", youtubizeParse);
