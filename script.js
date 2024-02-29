// Soulscipt.js

function parse(string) {
    const arr = string.split(/\.mp3|\.wav|\.aiff|\.flac/);
    let arrWithoutHyphen = arr.map((chaine) => chaine.replace(/[-_]+/g, " "));
    let arrWithoutLink = arrWithoutHyphen.map((chaine) =>
        chaine.replace(/\s*\[\s*www\.[^\]]*\]\s*$/g, " ")
    );
    return arrWithoutLink;
}

function youtubizeParse() {
    const slskyt = document.getElementById("slskyt");
    slskyt.innerHTML = "";
    const input = document.getElementById("input").value;
    console.log("mon input:", input);
    const arr = parse(input);
    for (let i = 0; i < arr.length - 1; i++) {
        slskyt.innerHTML += `
            ${arr[i]} <a class="button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(arr[i])}" target="_blank">
            open in youtube</a><br>
        `;
    }
}

const button = document.getElementById("magik-btn");
button.addEventListener("click", youtubizeParse);
