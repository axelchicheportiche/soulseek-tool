// Soulscipt.js

function parse(string) {

    // Split the input string based on file extensions ".mp3", ".wav", ".aiff", ".flac"
    const arr = string.split(/\.mp3|\.wav|\.aiff|\.flac/);

    // Replace hyphens and underscores with spaces in each element of the array
    let arrWithoutHyphen = arr.map((chaine) => chaine.replace(/[-_]+/g, " "));

    // Remove any trailing links enclosed in square brackets "[www.somelink.com]" from each array element
    let arrWithoutLink = arrWithoutHyphen.map((chaine) =>
        chaine.replace(/\s*\[\s*www\.[^\]]*\]\s*$/g, " ")
    );

    // Remove occurrences that start with "0[1-9][ \-.]" or "\s\n0[1-9][ \-.]" from each array element
    let arrWithoutStartNbr =  arrWithoutLink.map((chaine) =>
    chaine.replace(/^(0[1-9][ \-.]|[\s\n]+0[1-9][ \-.])/g, '')
);
    return arrWithoutStartNbr;
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
